var fs=require("fs")

fs.readFile("qq.jpg",(err,data)=>(
	console.log(data)
))