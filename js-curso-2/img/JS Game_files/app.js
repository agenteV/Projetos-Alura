// let numeroSecreto = parseInt(Math.random() * 11)
// let tentativas = 1
// let chute

// alert('Boas vindas ao jogo do número secreto')

// while (chute != numeroSecreto) {
//     let chute = prompt('Escolha um número entre 1 e 10')
//     if (chute == numeroSecreto) {
//         break
//     } else {
//         if (chute > numeroSecreto) {
//             alert('O número secreto é menor')
//         } else {
//             alert('O número secreto é maior')
//         }
//     }
//     tentativas++
// }

// let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
// alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativa}`)

function boasvindas(){
    console.log("Olá mundo")
}

function boasvindas2(vitor){
    console.log(`Olá ${vitor}`)
}

function numeroDobrado(numero){
    let dobro = numero * 2
    console.log(`O dobro de ${numero} é ${dobro}`);
}

function media(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3
    console.log(`A média é ${media}`);
}

function numeroMaior(numero1, numero2){
    if (numero1 > numero2) {
        console.log(`O número ${numero1} é maior que o número ${numero2}`);
    } else if (numero2 > numero1) {
        console.log(`O número ${numero2} é maior que o número ${numero1}`);
    } else {
        console.log(`Os números são iguais`);
    }
}