setTimeout(() => {
  import('/moduleb.js').then((modb) => {
    console.log(modb.default);
  });
}, 1000);
