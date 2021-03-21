

onmessage = function(e) {
  console.log('start', new Date().getTime()-e.data)
  var result = 0;
for(var i = 0; i< 1000000000; i++) {
  result++;
};
console.log('end',new Date().getTime()-e.data)
  postMessage({
    a:result
  });
}