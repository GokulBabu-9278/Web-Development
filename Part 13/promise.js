/*function add(num1, num2, callback){
    let err = false
    if(num1==0){
        err = true
    }
    callback(num1+num2, err)
}
function multi(num1, num2, callback){
    callback(num1*num2)
}
function div(num1, num2, callback){
    callback(num1/num2)
}
add(10,20, (sum, err)=>{
    if(err){
        console.log('number is zero')
    }else{
    console.log(sum)
        multi(sum,sum, (product)=>{
            console.log(product)
                div(product,10, (result)=>{
                    console.log(result)
                })
        })
}
})*/

/**This is callback hell */

/**Promise */

import Promise from 'promise'

function add(num1, num2){
    return new Promise((resolve, reject)=>{
        if(num1==0){reject('error')}
        resolve(num1+num2)
    })}
function multi(num1, num2){
    return new Promise((resolve, reject)=>{
        if(num1==0){reject('error')}
        resolve(num1*num2)
    })}
function div(num1, num2){
    return new Promise((resolve, reject)=>{
        if(num1==0){reject('error')}
        resolve(num1/num2)
    })}
add(10,20).then((sum)=>{
    console.log(sum)
    return multi(sum,sum)
}).then((product)=>{
    console.log(product)
    return div(product,10)
}).then((result)=>{
    console.log(result)
})
.catch((err)=>{console.log(err)})
