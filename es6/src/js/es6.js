//require('babel-polyfill');
function H(){
	let html="";
	for(let i=0;i<arguments.length;i++){
		html+=","+arguments[i]
	}
	document.getElementById("a").innerHTML=document.getElementById("a").innerHTML+"<br>"+html.slice(1)
	
}
let input=[1,2,3,4]
input.map(item => item + 1);

console.log(input,1);

{
	let [a, b, c] = [1, 2, 3];
	H(a,b,c)
	let [head, ...tail] = [1, 2, 3, 4];

	H(head)

	let [x = 1] = [2];
	H(x)
}

{

	function f() {
	  console.log('aaa');
	}

	let [x = f] = [];
	x()
}

{
	let obj = { first: 'hello', last: 'world' };
	let { first: f, last: l } = obj;
	H(f,l)
}
