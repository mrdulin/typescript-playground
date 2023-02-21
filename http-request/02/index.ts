import * as t from 'io-ts';
import * as TE from 'fp-ts/lib/TaskEither';
import * as T from 'fp-ts/lib/Task';
import * as E from 'fp-ts/lib/Either';
import { flow, pipe } from 'fp-ts/lib/function';
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

const PaginationResultCodec = <C extends t.Mixed>(codec: C) =>
  t.type({
    resultList: codec,
    totalItem: t.number,
  });

const ApiResponseCodec = <C extends t.Mixed>(codec: C) =>
  t.type({
    code: t.string,
    message: t.union([t.string, t.undefined]),
    result: codec,
  });

const GetArticlesByPageResponseCodec = ApiResponseCodec(PaginationResultCodec(t.array(ArticleDTOCodec)));

export const decodeApiResponse = (res: ApiResponse<PaginationResult<ArticleDTO>>) => {
  return pipe(
    E.of(res),
    E.chain(flow(ArticleDTOCodec.decode, E.mapLeft(E.toError))),
    E.fold(
      (e) => 'no',
      (res) => 'yes',
    ),
  );
};

const r = decodeApiResponse({
  code: '0',
  message: '',
  result: {
    resultList: [
      { id: 1, title: 'test' },
      { id: 2, title: 'test1' },
    ],
    totalItem: 100,
  },
});
console.log('r: ', r);
