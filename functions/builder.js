const elasticlunr = require("elasticlunr");
const docs = require("./json_data.json");
const _ = require("lodash");

const idx = elasticlunr.Index.load(require("./idx.json"));

const refs = idx.search("obeah").map(x => x.ref);

const filtered = [];

refs.forEach((x) => {
  const doc = _.find(docs, d => `${d.id}` === x);
  filtered.push({ id: doc.id, title: doc.title, filename: doc.filename });
});

console.log(filtered.slice(0, 10));
