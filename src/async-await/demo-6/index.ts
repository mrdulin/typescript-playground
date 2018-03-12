const superagent = require('superagent');
const fs = require('fs');
const path = require('path');

const API = 'http://it-ebooks-api.info/v1/search/';

// TODO async await的错误处理
function fetchData(url) {
  return superagent
    .get(url)
    .then(res => res.body)
    .catch(err => {
      // throw new Error(err.response.error);
      return Promise.reject(err.response.error);
    });
}

async function start() {
  const results: object[] = [];
  const querys = ['angular', 'react', 'jquery', 'backbone'];
  const urls = [];

  for (const query of querys) {
    const url = API + query;
    try {
      const data = await fetchData(url);
      results.push(data);
    } catch (error) {
      // console.error(e.stack);
      // break;
      // error instanceof Error 等于 true;
      throw error;
    }
  }

  return results;
}

function writeData(data) {
  const filepath = path.resolve(__dirname, 'data.json');
  const ws = fs.createWriteStream(filepath);
  ws.on('error', err => {
    console.log('保存数据失败!');
  });
  ws.on('finish', () => {
    console.log('数据保存成功!');
  });
  ws.write(JSON.stringify(data, null, 4), 'utf8');
  ws.end();
}

start()
  .then(datas => {
    writeData({ datas });
  })
  .catch(error => {
    throw error;
  });

export {};
