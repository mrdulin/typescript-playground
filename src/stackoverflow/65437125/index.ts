import { Client } from '@elastic/elasticsearch';
type Hit<T, K> = any;

export { search };

const ELASTIC_SEARCH_HOST = '127.0.0.1';
const ELASTIC_SEARCH_INDEX = '1';

const client = new Client({
  node: ELASTIC_SEARCH_HOST,
});

async function search<SourceResponse, HighlightResponse>(
  body: unknown,
): Promise<Hit<SourceResponse, HighlightResponse>> {
  return await client.search({
    index: ELASTIC_SEARCH_INDEX,
    body: '123',
  });
}
