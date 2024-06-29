
var dt = new Date()
console.log('start')
for (i=0;i<1000;i++){
    console.log('loop')
}
console.log('end')
var df = new Date() - dt
console.log(df)


/*Synchronous Eg*/

function longTask(millSecondTime){
    dt = new Date()
    while((new Date-dt) <= millSecondTime){
    }
}
console.log('started')
longTask(2000)
console.log('end')

console.log('started')
longTask(2000)
console.log('end')

console.log('started')
longTask(2000)
console.log('end')


/*Asynchronous Eg*/
function longTask(millSecondTime){
    dt = new Date()
    while((new Date-dt) <= millSecondTime){
    }
}

function showEnd(){
    console.log('End')
}

console.log('started')
setTimeout(showEnd,2000)

console.log('started')
setTimeout(showEnd,2000)

console.log('started')
setTimeout(showEnd,2000)