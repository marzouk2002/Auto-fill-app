const fs= require('fs');
const path= require('path');
const { Promise, reject } = require('q');

let m=fs.readFile(path.join(__dirname,'small-fill.txt'), 'utf8', (err, data)=> {

    if (err) throw err
    let textArr=data.split('\r\n')
    let textObj={}
    textArr.forEach((word, index)=>{
    textObj[word]=textArr.slice(index+1,index+10)
    })
    return textObj
})
console.log(m)

try {
    const data = fs.readFileSync('small-fill.txt', 'utf8')
    console.log(data)
  } catch (err) {
    console.error(err)
  }