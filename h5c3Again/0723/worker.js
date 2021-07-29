function fibonacci(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}

onmessage = function (event) {
  var x = fibonacci(Number(event.data));
  postMessage(x);
};
