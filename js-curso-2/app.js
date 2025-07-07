let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirNaTela('h1', 'Jogo do número secreto')
exibirNaTela('p', 'Escolha um número entre 1 e 10')

function verificarChute(){
    let chute = document.querySelector('input').value
    
    if(chute == numeroSecreto) {
        exibirNaTela('p', `Parabéns! Você acertou o número secreto: ${numeroSecreto}`);
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';  
        let mensagem = `Você acertou com apenas ${tentativas} ${palavraTentativas}.`; 
        exibirNaTela ('h1', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (chute > numeroSecreto) {
        exibirNaTela('p', 'O número secreto é menor. Tente novamente!');
    } else if (chute < numeroSecreto) {
        exibirNaTela('p', 'O número secreto é maior. Tente novamente!');
    } else {
        exibirNaTela('p', 'Por favor, insira um número válido entre 1 e 10.');
    }
    tentativas++;
    document.querySelector('input').value = '';
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * 10 + 1);
   let quantidadeNumerosSorteados = listaDeNumerosSorteados.length;

    if(quantidadeNumerosSorteados >= 10) {
        exibirNaTela('h1', 'Fim do jogo');
        exibirNaTela('p', 'Todos os números já foram sorteados. Reinicie o jogo para jogar novamente.');
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
    } 


   if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
       return gerarNumeroAleatorio();
   }
   else{
         listaDeNumerosSorteados.push(numeroEscolhido);
         return numeroEscolhido;
   }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', 'Escolha um número entre 1 e 10');
    document.querySelector('input').value = '';
    document.getElementById('reiniciar').setAttribute('disabled', true);
}