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
Promise.all([getName(),getMobile()]).then((result)=>{
    console.log(result)
})