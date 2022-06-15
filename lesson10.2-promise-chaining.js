'use strict';

function getApiResponse(url) {
  return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();

      request.onload = function () {
          if (request.status === 200) {
              resolve(request.responseText);
          } else {
              reject(request.statusText);
          }
      }

      request.open('GET', url, true);
      request.send();
  });
}

getApiResponse('http://numbersapi.com/0.000000000000000000000000000000000000000000005').then(
  response => response.match(/^\d+/)[0].substring(0, 3)
).then(
  number => getApiResponse(`https://anapioficeandfire.com/api/characters/${number}`)
).then(
  character => console.log(character)
).catch(
  error => console.log(error)
);