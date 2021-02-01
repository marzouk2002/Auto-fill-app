

const fields=document.querySelectorAll(".word")
const input=document.querySelector("#input")
// waiting for my API KEY
// function getDic() {
//     const promise=new Promise((resolve,reject)=>{
//         const xhr=new XMLHttpRequest
//         xhr.open('GET',,true)
//         xhr.responseType('json')
//         xhr.onload=()=>{
//             if(xhr.status>=400) {
//                 reject(xhr.response)
//             }else{
//                 resolve(xhr.response)
//             }
//         }
//         xhr.send()
//     })
//     return promise
// }
// const words=getDic()

input.addEventListener("input", ()=>{
    let sentence=input.value
    let senlen=sentence.length
    if(sentence[senlen-1]!==" ") {
        let wordarr=sentence.split(" ")
        let wordarrlen=wordarr.length
        let word=wordarr[wordarrlen-1]
    }
})
