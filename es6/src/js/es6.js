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
	x() //
}

{
	let obj = { first: 'hello', last: 'world' };
	let { first: f, last: l } = obj;
	H(f,l)//hello word
}

{
	let {first:s}={first:"s"}
	H(s)//s
}
{
	let node={"loc":{start:{line:1}}}
	let { loc: { start: { line }} } = node;

	H(line)//1

	let {x}={x:NaN}
	H(x)//NaN
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
	H("\uD842\uDFB7")//𠮷
}

{
	let s = "𠮷a";

	H(s.length) // 3
	H(s.charAt(0)) // ''
	H(s.charAt(1)) // ''
	H(s.charCodeAt(0)) // 55362
	H(s.charCodeAt(1)) // 57271}
	H(s.charCodeAt(2)) // 97
	H(s.codePointAt(0)) // 134071
	H(s.codePointAt(1)) // 57271
	H(s.codePointAt(2)) // 97

	H(String.fromCharCode(0x20BB7))// ஷ
	H(String.fromCodePoint(0x20BB7))// 𠮷
}

{
	let w="𠮷";
	H(w.at(0))//𠮷
}

{
	H('x'.padStart(5, 'abadsss'))//abadx
	H('x'.padStart(5, 'aba'))//abaax
	H('x'.padEnd(5, 'aba'))//xabaa
	H('x'.padEnd(5, 'abass'))//xabaa
}

{
	H(`12
		324`)//12 324
}

{
	let addrs=[{first:'Jane\>',last:'Bond'},{first:2,last:2.1}]
	const tmpl = (addrs) => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
H(tmpl(addrs))
}

{
	let template = `
		<ul>
		  <% for(var i=0; i < data.supplies.length; i++) { %>
		    <li><%= data.supplies[i] %></li>
		  <% } %>
		</ul>
		`;
		let evalExpr = /<%=(.+?)%>/g;
		let expr = /<%([\s\S]+?)%>/g;


		function compile(template){
		  var evalExpr = /<%=(.+?)%>/g;
		  var expr = /<%([\s\S]+?)%>/g;

		  template = template
		    .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
		    .replace(expr, '`); \n $1 \n  echo(`');

		  template = 'echo(`' + template + '`);';

		  var script =
		  `(function parse(data){
		    var output = "";

		    function echo(html){
		      output += html;
		    }

		    ${ template }

		    return output;
		  })`;

		  return eval(script);
		}
		var parse = compile(template);
		H(parse({supplies: [ "broom", "mop", "cleaner" ] }))
}

{
	let a = 5;
	let b = 10;
function tag(s, v1, v2) {
  H(s[0]);
  H(s[1]);
  H(s[2]);
  H(v1);
  H(v2);

  return "OK";
}
	tag`Hello ${ a + b } world ${ a * b }`;
// 等同于
	tag(['Hello ', ' world ', ''], 15, 50);

}

{
	let total = 30;
let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

/*function passthru(literals) {
  let result = '';
  let i = 0;

  while (i < literals.length) {
    result += literals[i++];
    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}*/

	function passthru(literals, ...values) {
	  var output = "";
	  for (var index = 0; index < values.length; index++) {
	    output += literals[index] + values[index];
	  }

	  output += literals[index]
	  return output;
	}
H(msg)
}

{
	let s="Hello world"
	H(s.startsWith('Hello',2))//false
	H(s.endsWith('Hello',5))//true
	H(s.endsWith('w',7))//true
	H(s.includes('Hello',5))//false
	H(s.includes('wor',5))//true
	//endsWith的行为与其他两个方法有所不同。它针对前n个字符
	H('x a'.repeat(3))//"xx ax ax a"
	H('na'.repeat(2.9)) // "nana"
}
{H('<p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>')}
{H(`123`)
console.log`12\n3`
let s=(s)=>{
		H(s.raw[0])
		H(s[0])
	}
	s`12\n3`
}

{
	let a=[{a:1},{aa:2,a2:{a3:{a4:1}}}]
	let b=[]
	$.extend()
}