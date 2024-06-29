
class Sample{
    sampleHello(){
        console.log('This is sample Hello')
    }
}

class Helo extends Sample{
    constructor(num1, num2){
        super()
        this.num1 = num1
        this.num2 = num2
    }

    hello(){ /** function hell() no specification needed */
        console.log('Hello friend: '+(this.num1+this.num2))
    }
}

let hey = new Helo(10, 20)
hey.hello()
hey.sampleHello()