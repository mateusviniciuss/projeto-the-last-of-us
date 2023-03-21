// comentario em linha

/* em 
colunas
*/
// dar um jeito de pegar o elemento HTML dos botões

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// dar um jeito de identificar o clique do usuario no botão

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log(indice);
        console.log('clicou no botão');
        
            //desmarcar o botão selecionado anterior
            desativarBotaoSelecionado();

            //marcar o botão clicado como se estivesse selecionado
            selecionarBotaoCarrossel(botao);

            // esconder a imagem ativa de fundo
            esconderImagemAtiva();

            //fazer aparecer a imagem de fundo correspondente ao botão clicado
            mostrarImagemDeFundo(indice);

            

    })
    
});

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}


