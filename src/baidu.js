axios.get('https://www.baidu.com')
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.error(err);
  });