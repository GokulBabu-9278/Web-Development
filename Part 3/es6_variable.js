/**es6 let */
/**
var num = 10
var num = 20 /** Pervious 10 skipped

console.log(num) /** Output = 20

let num = 10
let num = 20 /** error

console.log(num) /** Output = error
*/

/**Scope */
/** 
function hello(){
    var i = 0
    let hoy = 100
    if(i===0){
        var hey = 20
        let hoy = 30 /**if let only for that block
        var i = 200
    }
    console.log(hey)
    console.log(hoy)
    console.log(i)

    function sample(){
        var i =300
    }
    sample()
    console.log(i)
}
hello()
*/

/**Const */

/**const hello = 100 *not possible error
hello = 200*/

/**
const hey = ['Gokul', 'Abhi', 'Faizal']

hey.push('Shanid')

hey['Html', 'Css']

/**obj replace error push no error 

console.log(hey)
*/