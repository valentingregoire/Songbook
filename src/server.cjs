const express = require('express');
const cors = require('cors');
const fs = require('fs');

const SONGBOOKS_PATH = 'static/songbooks/';
const SONGBOOKS_NAMESPACE = '/songbooks';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: '1mb', strict: false }));

app.get(`${SONGBOOKS_NAMESPACE}/:songbook`, (req, res) => {
  const songbook = req.params['songbook'];
  const data = JSON.parse(fs.readFileSync(`${SONGBOOKS_PATH}/${songbook}.json`).toString());
  res.json(data);
});

app.get(SONGBOOKS_NAMESPACE, (req, res) => {
  const songbooks = fs.readdirSync(SONGBOOKS_PATH, { withFileTypes: true })
    .filter(item => !item.isDirectory())
    .map(item => item.name.split('.')[0]);
  res.json(songbooks);
});

app.post(`${SONGBOOKS_NAMESPACE}/:songbook`, (req, res) => {
  fs.writeFileSync(`./src/songbooks/${req.params['songbook']}.json`, JSON.stringify(req.body, null, 2));
  res.send(`Songbook ${req.params['songbook']} saved.`);
});

app.listen(port, () => {
  console.log(`Songbook Back-End server started on port ${port}.`);
});
