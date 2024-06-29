var num = 10

function hello(){
    var num = 20

    function hey(){
        num = 30
    }
    hey()
    console.log(num)
}

/** hey() error hey is func inside hello() */

hello()
console.log(num)