function a(c,d){
	this.a=1;
	this.b=2
	this.c=c;
	this.d=d;
	console.log(this.dd||this.ad);
}

var c={
	ad:2
}

var d={
	dd:2
}

a.call(c,2,3);
a.apply(d,[2,3]);
window.a()

console.log(c,d)

function withFn(){
	var qs="as"

	with(location){
		var url=href+qs
	}

	return url
}
withFn()