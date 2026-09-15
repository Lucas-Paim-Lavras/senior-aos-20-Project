let start=0
let max=100
let pares=0
let impares=0

for(let n=0;n <=100;n++){
    if(n%2==0){
        console.log(n + "é par")
        pares++
    } else {
        console.log(n + "é impar")
        impares++
    }
}
    console.log("quantidade de pares:" + pares)
    console.log("quantidade de imapres:" + impares)