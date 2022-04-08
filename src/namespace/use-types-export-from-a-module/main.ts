import apis from './apis';

type Data = apis.link.Link;

function main() {
  const data: Data[] = apis.link.getLinks();
  console.log(data);
}
