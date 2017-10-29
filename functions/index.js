const functions = require("firebase-functions");
const elasticlunr = require("elasticlunr");
const cors = require("cors")({ origin: true });
const docs = require("./json_data.json");
const _ = require("lodash");
const idx = elasticlunr.Index.load(require("./idx.json"));

exports.search = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const { query } = request.query;
    const refs = idx
      .search(query, {
        fields: {
          title: { boost: 2 },
          text: { boost: 1 },
        },
      })
      .map(x => x.ref);
    const filtered = [];

    refs.forEach((x) => {
      const doc = _.find(docs, d => `${d.id}` === x);
      filtered.push({ id: doc.id, title: doc.title, filename: doc.filename });
    });

    response.status(200).send(filtered.slice(0, 10));
  });
});
