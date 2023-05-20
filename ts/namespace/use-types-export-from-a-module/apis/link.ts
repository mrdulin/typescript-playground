export interface Link {
  id: string;
  text: string;
}

export function getLinks(): Link[] {
  return [{ id: '1', text: 'a' }];
}
