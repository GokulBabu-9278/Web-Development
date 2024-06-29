var x = require('readline-sync')

num1 = x.question('Enter 2 number')
num2 = x.question('')

if (num1>num2){
    console.log('larger is '+num1)
}else if(num1<num2){
    console.log('larger is '+num2)
}else{
    console.log('same no')
}