var Person = {name:"Gokul", age:20, place:"Chittanda", 
display: function(){
    var name = "Harry"
    console.log(this.name)
}}

/**
for (x in Person){
    console.log(Person[x])
}
*/

Person.dob = "20-11-2003"

Person.displayAge = function(){
    console.log(this.age)
}



/**console.log(Person.name)
console.log(Person['age'])*/

console.log(Person.displayAge())