function Person(name, age, place){
    this.name = name
    this.age = age
    this.place = place
    this.diplay = function(){
        console.log("Name: "+this.name+ " Age: "+this.age)
    }
}


var gokul = new Person("Gokul",20,"Chittanda")
var babu = new Person("Babu",21,"Cheruthuruthi")
var jishnu = new Person("Jishnu",20,"Cheruthuruthi")

gokul.diplay()
babu.diplay()
jishnu.diplay()