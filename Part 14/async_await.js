import Promise from 'promise';

function getName(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("gokul")
        },3000)
    })}
function getMobile(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("12345678910")
        },2000)
    })}
async function getUser(){
    let name = await getName()
    console.log(name)
    let num = await getMobile()
    console.log(num)
}
getUser()