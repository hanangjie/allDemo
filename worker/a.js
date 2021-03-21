

onmessage = function(e) {
  var ss= new Worker('b.js')
  ss.postMessage(e.data)
  console.log(self.t);
  console.log('start', new Date().getTime()-e.data)
  var result = 0;
for(var i = 0; i< 1000000000; i++) {
  result++;
};
ss.onmessage = (e) => {
  console.log('b', e.data.a);
}
console.log('end',new Date().getTime()-e.data)
  postMessage({
    a:result
  });
}