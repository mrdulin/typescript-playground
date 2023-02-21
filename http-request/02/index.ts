import * as t from 'io-ts';
import * as TE from 'fp-ts/lib/TaskEither';
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

type GetArticlesByPageQueryPayload = {
  pagination: any;
};

const getArticlesByPage = async (data: GetArticlesByPageRequestDTO) => {
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
  TE.tryCatch<Error, ApiResponse>(
    () =>
      getArticlesByPage(data).then((res) => {
        if (res.code !== '0') {
          throw new Error(res.message);
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
  return pipe(
    reqDTO,
    GetArticlesByPageRequestDTOCodec.decode,
    E.mapLeft((errors) => {
      console.error(`Validation failed for input: ${JSON.stringify(reqDTO, null, 2)}. Error details: ${failure(errors).join('\n')}`);
      return new Error('parameter invalid');
    }),
    TE.fromEither,
    TE.chain(getArticlesByPageTaskEither),
  )().then(
    E.fold(
      (e) => Promise.reject(e),
      (res) => Promise.resolve(res),
    ),
  );
};
