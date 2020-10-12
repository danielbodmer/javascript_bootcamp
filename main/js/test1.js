const { Http2ServerResponse } = require('http2');
const https = require('https');
async function getCountryName(code) {
  // write your code here
  // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>
  let countryName = '';
  let pageNumber = 1;
  let url = `https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`;

  https.get(url, (res) => {
    res.on('data', (d) => console.log(d));
  });

  return countryName;
}

getCountryName();
