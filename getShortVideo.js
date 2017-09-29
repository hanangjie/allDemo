
const shell = require('shelljs');
const fs=require('fs');

var list=fs.readdirSync('shortvideo');
shell.mkdir('a');
list.forEach((item)=>{
  var dir=fs.readdirSync('shortvideo/'+item)
  //console.log(item);
  //shell.cp('-R', 'shortvideo/'+item+'/', 'a/');
  dir.forEach((mp4)=>{
    if(mp4.indexOf('mp4')!=-1){
      console.log(mp4);
      shell.cp('-R', 'shortvideo/'+item+'/'+mp4, 'a/'+mp4);
    }
  })
})
//shell.cp('-R', 'shortvideo/0A94196A45F1C2D55CC2ABBBF6C4117E/2306433216435317262647144490.mp4', 'a/');
/* dir.forEach((mp)=>{
  let dir=('shortvideo/'+item+'/'+mp);
  if(mp.indexOf('mp4')!=-1){
    shell.cp('-R', 'dist/', 'dist1/component');
  }
}) */
// shell.mkdir('dist1');
// shell.cp('-R', 'dist/', 'dist1/component');
// shell.rm('-rf', 'dist');
// shell.mkdir('dist');
// shell.cp('-R', 'dist1/component', 'dist');
// shell.rm('-rf', 'dist1');
