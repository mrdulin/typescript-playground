import * as t from 'io-ts';
import * as TE from 'fp-ts/lib/TaskEither';
import * as T from 'fp-ts/lib/Task';
import * as Console from 'fp-ts/lib/Console';
import * as E from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/function';
import { failure } from 'io-ts/lib/PathReporter';

export interface ApiResponse<Result = any> {
  code: string;
  message: string | null;
  result: Result;
}

const GetArticlesByPageRequestDTOCodec = t.type({
  currentPage: t.number,
  pageSize: t.number,
});

type GetArticlesByPageRequestDTO = t.TypeOf<typeof GetArticlesByPageRequestDTOCodec>;

const ArticleDTOCodec = t.type({
  id: t.number,
  title: t.string,
});
type ArticleDTO = t.TypeOf<typeof ArticleDTOCodec>;

type GetArticlesByPageQueryPayload = {
  pagination: any;
};

type PaginationResult<T> = {
  resultList: T[];
  totalItem: number;
};

const getArticlesByPage = async (data: GetArticlesByPageRequestDTO): Promise<ApiResponse<PaginationResult<ArticleDTO>>> => {
  return {
    code: '0',
    message: '',
    result: {
      resultList: [
        { id: 1, title: 'test' },
        { id: 2, title: 'test1' },
      ],
      totalItem: 100,
    },
  };
};

const getArticlesByPageTaskEither = (data: GetArticlesByPageRequestDTO) =>
  TE.tryCatch<Error, ApiResponse<PaginationResult<ArticleDTO>>>(
    () =>
      getArticlesByPage(data).then((res) => {
        if (res.code !== '0') {
          throw new Error(res.message || 'biz error');
        }
        return res;
      }),
    (reason) => new Error(String(reason)),
  );

export const getArticlesByPageService = ({ pagination }: GetArticlesByPageQueryPayload) => {
  const reqDTO: GetArticlesByPageRequestDTO = {
    pageSize: pagination.pageSize,
    currentPage: pagination.current,
  };
  return (
    pipe(
      reqDTO,
      GetArticlesByPageRequestDTOCodec.decode,
      E.mapLeft((errors) => {
        console.error(`Validation failed for input: ${JSON.stringify(reqDTO, null, 2)}. Error details: ${failure(errors).join('\n')}`);
        return new Error('parameter invalid');
      }),
      TE.fromEither,
      TE.chain(getArticlesByPageTaskEither),
    )()
      // solution 1
      .then(
        E.fold(
          (e) => Promise.reject(e),
          (res) => Promise.resolve(res),
        ),
      )
  );
};

// solution 2
// async function test1() {
//   pipe(
//     await getArticlesByPageService({ pagination: { current: 1, pageSize: 10 } }),
//     E.match(
//       (e) => console.error(e),
//       (res) => console.log(res.result),
//     ),
//   );
// }

// solution 3
// async function test2() {
//   await pipe(
//     getArticlesByPageService({ pagination: { current: 1, pageSize: 10 } }),
//     TE.orElseFirst((e) => TE.fromIO(Console.error(e))),
//     TE.chainFirstIOK((res) => Console.log(res.result)),
//   )();
// }
