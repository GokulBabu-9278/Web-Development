class Helo{
    constructor(num1, num2){
        this.num1 = num1
        this.num2 = num2
    }
    hello(){ /** function hell() no specification needed */
        console.log('Hello friend: '+(this.num1+this.num2))
    }
}

let hey = new Helo(10, 20)
let get = new Helo(11, 21)
hey.hello()
get.hello()