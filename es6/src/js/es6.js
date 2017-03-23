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

{
	let {first:s}={first:"s"}
	H(s)
}
{
	let node={"loc":{start:{line:1}}}
	let { loc: { start: { line }} } = node;

	H(line)

	let {x}={x:NaN}
	H(x)
}
{
	let win={a:function(){H(2)}}
	let {a}=win;
	a();
}

{
	let {charAt} = 'hello';

	

	let a=({x=1}={})=>{H(x)}
	a({x:2});
	H("\uD842\uDFB7")
}

{
	let s = "𠮷a";

	H(s.length) // 2
	H(s.charAt(0)) // ''
	H(s.charAt(1)) // ''
	H(s.charCodeAt(0)) // 55362
	H(s.charCodeAt(1)) // 57271}
	H(s.codePointAt(0)) // 57271}
	H(s.codePointAt(1)) // 57271}
	H(s.codePointAt(2)) // 57271}
}