import { getArticlesByPageService } from '.';

describe('http request 02', () => {
  test('should receive the data', async () => {
    const res = await getArticlesByPageService({ pagination: { current: 1, pageSize: 10 } });
    expect(res.result).toEqual({
      resultList: [
        { id: 1, title: 'test' },
        { id: 2, title: 'test1' },
      ],
      totalItem: 100,
    });
  });

  test('should throw an error', async () => {
    await expect(() => getArticlesByPageService({ pagination: { curren: 1 } })).rejects.toThrow(/parameter invalid/);
  });
});
