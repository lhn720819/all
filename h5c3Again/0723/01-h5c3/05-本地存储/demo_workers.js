var x;
onmessage = function (event) {
  console.log(event);
  x = event.data;
};

setInterval(function () {
  //   console.log(Date.now());
  //   console.log(window, document);
  // worker内 无法访问 window, document

  postMessage(Date.now() + "-" + x);
}, 1000);
