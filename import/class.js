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