for(i=2;i<=100;i=i+2){
    console.log(i)
}

for(i=1;i<=5;i++){
    str = "*"
    console.log(str.repeat(i))
}

n = 5
for(i=1;i<=n;i++){
    str = '*'
    space = ' '
    console.log(space.repeat((n-i)),str.repeat(i))
}