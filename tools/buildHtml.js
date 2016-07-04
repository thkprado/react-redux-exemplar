// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
import fs from 'fs';
import cheerio from 'cheerio';
import 'colors';

/* eslint-disable no-console */

fs.readFile('src/index.html', 'utf8', (error, markup) => {
  if (error) {
    console.log(error);
    return;
  }

  const $ = cheerio.load(markup);

  // since a separate spreadsheet is only utilized for the production build, need to dynamically add this here.
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('index.html written to /dist'.green);
  });
});
