var axios = require('axios');
var ROOT_URL = 'https://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1&format=5&alt=json&callback=?';

var axiosInstance = axios.create({
  baseURL : ROOT_URL,
  headers : {'Access-Control-Allow-Origin' : '*','Origin': 'https://youtube-mock.iamkd.me','Access-Control-Allow-Methods':'GET'}
});

module.exports = function (options, callback) {

  var params = {
    q: options.term,
    key : options.key
  };

  axiosInstance.get(ROOT_URL, { params: params })
    .then(function(response) {
      if (callback) { callback(response.data.items); }
    })
    .catch(function(error) {
      console.error(error);
    });
};
