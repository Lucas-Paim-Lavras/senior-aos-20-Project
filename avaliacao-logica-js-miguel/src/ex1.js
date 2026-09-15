let nome = "patrick"
let nota1 = 8
let nota2 = 9
let media = (nota1 + nota2) /2
let freq = (80 / 100) * 100 
let resultado;
if(freq >= 75 / 100  && media >=6.0){
    resultado ="aprovado"
} else if (freq >= (75 / 100) * 100 && media >=5.0){
    resultado ="recuperação"
} else {
    resultado ="reprovado"
}

console.log(`com a media: ${media},e ${freq}% de frequencia,o aluno:${nome},esta:${resultado}`)
