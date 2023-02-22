import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import * as t from 'io-ts';

const ArticleDTOCodec = t.type({
  id: t.number,
  title: t.string,
});
type ArticleDTO = t.TypeOf<typeof ArticleDTOCodec>;

const PaginationResultCodec = <C extends t.Mixed>(codec: C) =>
  t.type({
    resultList: codec,
    totalItem: t.number,
  });

type PaginationResult<C extends t.Mixed> = t.TypeOf<ReturnType<typeof PaginationResultCodec<C>>>;

const ApiResponseCodec = <C extends t.Mixed>(codec: C) =>
  t.type({
    code: t.string,
    message: t.union([t.string, t.undefined]),
    result: codec,
  });

type ApiResponse<C extends t.Mixed> = t.TypeOf<ReturnType<typeof ApiResponseCodec<C>>>;

const GetArticlesByPageResponseCodec = ApiResponseCodec(PaginationResultCodec(t.array(ArticleDTOCodec)));

export const decodeApiResponse = (res: ApiResponse<PaginationResult<ArticleDTO[]>>) => {
  return pipe(
    res,
    GetArticlesByPageResponseCodec.decode,
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
