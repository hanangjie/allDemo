var a={
	time:1,
	edition:0
}

Object.defineProperty(a,"_time",{
	get:function(){
		return this.time
	},
	set:function(v){
		//if(v!=this.time){
		this.time=v;
		this.edition++;
		//}
	}
})

a._time=2;
console.log(a)

function Person(name,age,sex){
	this.name=name;
	this.age=age;
	this.sex=sex;
	this.sayName=function(){
		console.log(this.name)
	}
}


var b=new Person("blank",12,"mela")
var c=new Person("canbo",12,"mela")
console.log(b,c,b==c)
console.log(c.constructor)
var str=new String("aaa")
console.log(str.constructor)
c.sayName();

console.log(c.constructor===b.constructor)

function Pro(){}

/*Pro.prototype.name="neo"*/
Pro.prototype={
	constructor:Pro,
	name:"neo",
	age:19,
	sex:"man"
}
var newPro=new Pro();
for(var x in newPro){
	console.log(x)
}


function Newpro(){}

Newpro.prototype.name="neo"

var pro=new Pro();

var newpro=new Newpro();

console.log(Pro.prototype,Newpro.prototype,newpro.constructor,pro.constructor)


function Dynamic(name){
	this.name=name;

	if(typeof this.sayName!="function"){
		console.log(1)
		Dynamic.prototype.sayName=function(){
			console.log(this.name)
		}
	}
}

var dynamic=new Dynamic("anjie");
var dynamic2=new Dynamic("anjie");
dynamic.sayName()
dynamic2.sayName()




function Dog(){
     this.tail = true;
		}
Dog.prototype.say = function(){return "Woof";}
var dog = new Dog();
console.log(dog.say()); // "Woof"
console.log(dog.constructor) // Dog()
console.log(dog.constructor===Dog.prototype.constructor) // Dog()
Dog.prototype = {
      paws:4
};
console.log(dog.constructor.prototype) // Dog()
var newDog = new Dog();
console.log(dog.constructor,typeof dog.constructor.prototype.paws,newDog.prototype)