var axios = require('axios');

var ROOT_URL = 'https://www.googleapis.com/youtube/v3/commentThreads';

module.exports = function (options, callback) {
  if (!options.key) {
    throw new Error('Youtube Search expected key, received undefined');
  }

  var params = {
    part : 'snippet,replies',
    key : options.key,
    maxResults : options.maxResults,
    videoId : options.videoId
  }

  if (options.relatedToVideoId) {
    params.relatedToVideoId = options.relatedToVideoId;
  }
  else {
    params.q = options.term
  }

  axios.get(ROOT_URL, { params })
    .then(function(response) {
      if (callback) {
        callback(response.data.items);
      }
    }).catch(function(error) {
      console.error(error);
    });
};
