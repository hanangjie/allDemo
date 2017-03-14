class Point {
  constructor(){
    this.a=1;
    this.b=2
  }

  toString(){
    console.log(this.a)
  }

  toValue(){
    console.log(this.b)
  }
}

var a=new Point();
var b=new Point();

console.log(a==b)


var str="hello world,slice";

console.log(str.slice(1));//ello world
console.log(str.slice(-1));//d
console.log(str.slice(0,3));//hel
console.log(str.slice(0,-3));//hello wo
console.log(str.slice(-5,-1));//worl
console.log(str.slice(-5,1));//


console.log(str.substr(1));//ello world
console.log(str.substr(-1));//d
console.log(str.substr(0,3));//hel
console.log(str.substr(0,-3));//
console.log(str.substr(-5,1));//w

console.log(str.substring(3,1));//

console.log(str.indexOf("o",8));//el



