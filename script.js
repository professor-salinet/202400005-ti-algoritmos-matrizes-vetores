const tabuleiro = document.querySelector('.tabuleiro');
let cartas = [];
let cartasViradas = [];
let podeVirar = true;

// Função para criar a matriz de cartas (exemplo 4x2 = 8 cartas)
function criarMatrizCartas(linhas, colunas) {
    const pares = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D']; // Pares de símbolos
    let matriz = [];
    let indicePar = 0;

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            // Garante que todos os pares sejam usados
            const randomIndex = Math.floor(Math.random() * pares.length);
            matriz[i][j] = pares.splice(randomIndex, 1)[0];
        }
    }
    return matriz.flat(); // Transforma a matriz em um array unidimensional
}

// Função para criar as cartas no HTML
function criarCartas(arrayCartas) {
    arrayCartas.forEach((valor, index) => {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.dataset.index = index;
        carta.dataset.valor = valor;
        carta.addEventListener('click', virarCarta);
        tabuleiro.appendChild(carta);
        cartas.push(carta);
    });
}

// Função para virar uma carta
function virarCarta() {
    if (!podeVirar || this === cartasViradas[0]) return;

    this.classList.add('virada');
    this.textContent = this.dataset.valor;
    cartasViradas.push(this);

    if (cartasViradas.length === 2) {
        checarPar();
    }
}

// Função para checar se as duas cartas viradas são um par
function checarPar() {
    podeVirar = false;
    const carta1Valor = cartasViradas[0].dataset.valor;
    const carta2Valor = cartasViradas[1].dataset.valor;

    if (carta1Valor === carta2Valor) {
        // Par encontrado
        cartasViradas.forEach(carta => {
            carta.classList.add('acertada'); // Adicione um estilo se desejar
            carta.removeEventListener('click', virarCarta); // Impede que sejam clicadas novamente
        });
        cartasViradas = [];
        podeVirar = true;
        if (document.querySelectorAll('.carta:not(.acertada)').length === 0) {
            alert('Parabéns! Você venceu!');
        }
    } else {
        // Não é um par
        setTimeout(() => {
            cartasViradas.forEach(carta => {
                carta.classList.remove('virada');
                carta.textContent = '';
            });
            cartasViradas = [];
            podeVirar = true;
        }, 1000); // Tempo para mostrar as cartas antes de desvirar
    }
}

// Inicialização do jogo
const linhas = 2;
const colunas = 4;
const matrizDeCartas = criarMatrizCartas(linhas, colunas);
criarCartas(matrizDeCartas);