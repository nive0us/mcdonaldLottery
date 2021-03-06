const request = require('request');

/**
 * @param  {object} options the object contents request url, body ,headers
 */
async function postRequest(options) {
  return new Promise((resolve, reject) => {
    request.post(options, (error, response) => {
      if (error) reject(new Error(`Ops! Some error about post request-> ${error}`));
      resolve(response);
    });
  });
}

module.exports = {
  postRequest,
};
