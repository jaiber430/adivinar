// Crear partículas retro
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '-1';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.background = ['#0ff', '#f0f', '#ff0'][Math.floor(Math.random() * 3)];
            particlesContainer.appendChild(particle);
        }, i * 300);
    }
}

// // Script para crear partículas retro (agregar al final del script existente)
// function createRetroParticles() {
//     const colors = ['#0ff', '#f0f', '#ff0', '#0f0', '#f00'];
//     for (let i = 0; i < 25; i++) {
//         setTimeout(() => {
//             const particle = document.createElement('div');
//             particle.className = 'particle';
//             particle.style.left = Math.random() * 100 + 'vw';
//             particle.style.animationDelay = Math.random() * 8 + 's';
//             particle.style.animationDuration = (3 + Math.random() * 7) + 's';
//             particle.style.background = colors[Math.floor(Math.random() * colors.length)];
//             particle.style.width = (2 + Math.random() * 6) + 'px';
//             particle.style.height = particle.style.width;
//             document.body.appendChild(particle);
//         }, i * 200);
//     }
// }

// Word database by category
const wordDatabase = {
    animales: [
        { spanish: "perro", english: "dog" },
        { spanish: "gato", english: "cat" },
        { spanish: "elefante", english: "elephant" },
        { spanish: "leon", english: "lion" },
        { spanish: "tigre", english: "tiger" },
        { spanish: "jirafa", english: "giraffe" },
        { spanish: "mono", english: "monkey" },
        { spanish: "caballo", english: "horse" },
        { spanish: "vaca", english: "cow" },
        { spanish: "pajaro", english: "bird" },
        { spanish: "pez", english: "fish" },
        { spanish: "serpiente", english: "snake" },
        { spanish: "tortuga", english: "turtle" },
        { spanish: "conejo", english: "rabbit" },
        { spanish: "raton", english: "mouse" }
    ],
    comida: [
        { spanish: "manzana", english: "apple" },
        { spanish: "naranja", english: "orange" },
        { spanish: "platano", english: "banana" },
        { spanish: "pan", english: "bread" },
        { spanish: "queso", english: "cheese" },
        { spanish: "leche", english: "milk" },
        { spanish: "agua", english: "water" },
        { spanish: "arroz", english: "rice" },
        { spanish: "pollo", english: "chicken" },
        { spanish: "pescado", english: "fish" },
        { spanish: "huevo", english: "egg" },
        { spanish: "tomate", english: "tomato" },
        { spanish: "papa", english: "potato" },
        { spanish: "zanahoria", english: "carrot" },
        { spanish: "ensalada", english: "salad" }
    ],
    colores: [
        { spanish: "rojo", english: "red" },
        { spanish: "azul", english: "blue" },
        { spanish: "verde", english: "green" },
        { spanish: "amarillo", english: "yellow" },
        { spanish: "naranja", english: "orange" },
        { spanish: "morado", english: "purple" },
        { spanish: "rosa", english: "pink" },
        { spanish: "marron", english: "brown" },
        { spanish: "negro", english: "black" },
        { spanish: "blanco", english: "white" },
        { spanish: "gris", english: "gray" },
        { spanish: "plateado", english: "silver" },
        { spanish: "dorado", english: "gold" },
        { spanish: "turquesa", english: "turquoise" },
        { spanish: "celeste", english: "sky blue" }
    ],
    familia: [
        { spanish: "madre", english: "mother" },
        { spanish: "padre", english: "father" },
        { spanish: "hermano", english: "brother" },
        { spanish: "hermana", english: "sister" },
        { spanish: "abuelo", english: "grandfather" },
        { spanish: "abuela", english: "grandmother" },
        { spanish: "tio", english: "uncle" },
        { spanish: "tia", english: "aunt" },
        { spanish: "primo", english: "cousin" },
        { spanish: "hijo", english: "son" },
        { spanish: "hija", english: "daughter" },
        { spanish: "sobrino", english: "nephew" },
        { spanish: "sobrina", english: "niece" },
        { spanish: "esposo", english: "husband" },
        { spanish: "esposa", english: "wife" }
    ],
    numeros: [
        { spanish: "uno", english: "one" },
        { spanish: "dos", english: "two" },
        { spanish: "tres", english: "three" },
        { spanish: "cuatro", english: "four" },
        { spanish: "cinco", english: "five" },
        { spanish: "seis", english: "six" },
        { spanish: "siete", english: "seven" },
        { spanish: "ocho", english: "eight" },
        { spanish: "nueve", english: "nine" },
        { spanish: "diez", english: "ten" },
        { spanish: "once", english: "eleven" },
        { spanish: "doce", english: "twelve" },
        { spanish: "trece", english: "thirteen" },
        { spanish: "catorce", english: "fourteen" },
        { spanish: "quince", english: "fifteen" }
    ]
};

// Game variables
let currentCategory = 'animales';
let score = 0;
let currentWordIndex = 0;
let words = [];
const totalWords = 10;
let timer;
let timeLeft = 60;

// DOM elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const checkBtn = document.getElementById('check-btn');
const skipBtn = document.getElementById('skip-btn');
const restartBtn = document.getElementById('restart-btn');
const newGameBtn = document.getElementById('new-game-btn');
const backBtn = document.getElementById('back-btn');
const wordDisplay = document.getElementById('word-display');
const answerInput = document.getElementById('answer-input');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');
const currentWordDisplay = document.getElementById('current-word');
const totalWordsDisplay = document.getElementById('total-words');
const finalScoreDisplay = document.getElementById('final-score');
const finalTotalDisplay = document.getElementById('final-total');
const performanceMessage = document.getElementById('performance-message');
const progressBar = document.getElementById('progress-bar');
const categoryButtons = document.querySelectorAll('.category-btn');
const timerDisplay = document.getElementById('timer');

// Inicializar partículas
createParticles();

// Select default category
window.addEventListener('DOMContentLoaded', () => {
    categoryButtons[0].classList.add('selected');
});

// Select category
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        currentCategory = button.getAttribute('data-category');
    });
});

// Start game
startBtn.addEventListener('click', startGame);

// Check answer
checkBtn.addEventListener('click', checkAnswer);

// Allow checking with Enter
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

// Skip word
skipBtn.addEventListener('click', nextWord);

// Restart game (same category)
restartBtn.addEventListener('click', restartGame);

// New game (go to start screen)
newGameBtn.addEventListener('click', () => {
    resultsScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    backBtn.classList.add('hidden');
});

// Back button - FIXED IMPLEMENTATION
backBtn.addEventListener('click', goToStartScreen);

function goToStartScreen() {
    // Stop timer if active
    if (timer) {
        clearInterval(timer);
    }

    // Reset game state
    score = 0;
    currentWordIndex = 0;
    timeLeft = 60;

    // Hide all game screens and show start screen
    gameScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    backBtn.classList.add('hidden');

    // Reset UI elements
    scoreDisplay.textContent = '0';
    currentWordDisplay.textContent = '1';
    progressBar.style.width = '0%';
    updateTimerDisplay();
}

function startGame() {
    const categoryWords = [...wordDatabase[currentCategory]];
    words = [];

    for (let i = 0; i < totalWords; i++) {
        if (categoryWords.length === 0) break;
        const randomIndex = Math.floor(Math.random() * categoryWords.length);
        words.push(categoryWords[randomIndex]);
        categoryWords.splice(randomIndex, 1);
    }

    score = 0;
    currentWordIndex = 0;
    timeLeft = 60;

    scoreDisplay.textContent = score;
    currentWordDisplay.textContent = currentWordIndex + 1;
    totalWordsDisplay.textContent = words.length;
    progressBar.style.width = '0%';
    updateTimerDisplay();

    showCurrentWord();

    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    backBtn.classList.remove('hidden'); // Show back button in game

    startTimer();

    answerInput.focus();
}

function restartGame() {
    score = 0;
    currentWordIndex = 0;
    timeLeft = 60;

    scoreDisplay.textContent = score;
    currentWordDisplay.textContent = currentWordIndex + 1;
    totalWordsDisplay.textContent = words.length;
    progressBar.style.width = '0%';
    updateTimerDisplay();

    showCurrentWord();

    resultsScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    backBtn.classList.remove('hidden'); // Show back button when restarting

    startTimer();

    answerInput.focus();
}

function startTimer() {
    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeLeft <= 10) {
        timerDisplay.style.color = '#ff0000';
        timerDisplay.style.textShadow = '0 0 10px #ff0000, 0 0 20px #ff0000';
    } else if (timeLeft <= 30) {
        timerDisplay.style.color = '#ffff00';
        timerDisplay.style.textShadow = '0 0 10px #ffff00, 0 0 20px #ffff00';
    } else {
        timerDisplay.style.color = '#ffcc00';
        timerDisplay.style.textShadow = '0 0 6px #ffcc00, 0 0 15px #ff6600';
    }
}

function showCurrentWord() {
    if (currentWordIndex < words.length) {
        const spanishWord = words[currentWordIndex].spanish;
        const capitalizedWord = spanishWord.charAt(0).toUpperCase() + spanishWord.slice(1);
        wordDisplay.textContent = capitalizedWord;

        answerInput.value = '';
        feedback.textContent = '';
        feedback.className = 'feedback';

        const progress = (currentWordIndex / words.length) * 100;
        progressBar.style.width = `${progress}%`;

        currentWordDisplay.textContent = currentWordIndex + 1;
    } else {
        endGame();
    }
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = words[currentWordIndex].english.toLowerCase();

    if (userAnswer === '') {
        feedback.textContent = 'ENTER ANSWER';
        feedback.className = 'feedback incorrect';
        return;
    }

    if (userAnswer === correctAnswer) {
        score++;
        scoreDisplay.textContent = score;
        feedback.textContent = 'CORRECT!';
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = `WRONG! ANSWER: ${correctAnswer}`;
        feedback.className = 'feedback incorrect';
    }

    checkBtn.disabled = true;
    skipBtn.disabled = true;

    setTimeout(() => {
        nextWord();
        checkBtn.disabled = false;
        skipBtn.disabled = false;
    }, 300);
}

function nextWord() {
    currentWordIndex++;

    if (currentWordIndex < words.length) {
        showCurrentWord();
        answerInput.focus();
    } else {
        endGame();
    }
}

function endGame() {
    if (timer) {
        clearInterval(timer);
    }

    finalScoreDisplay.textContent = score;
    finalTotalDisplay.textContent = words.length;

    const percentage = (score / words.length) * 100;
    if (percentage >= 90) {
        performanceMessage.textContent = 'ARCADE MASTER! PERFECT SCORE!';
    } else if (percentage >= 70) {
        performanceMessage.textContent = 'HIGH SCORE! KEEP PLAYING!';
    } else if (percentage >= 50) {
        performanceMessage.textContent = 'GOOD EFFORT! TRY AGAIN!';
    } else {
        performanceMessage.textContent = 'GAME OVER! PRACTICE MORE!';
    }

    progressBar.style.width = '100%';

    gameScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    backBtn.classList.remove('hidden'); // Show back button in results
}

// // Llamar la función cuando se carga la página
// window.addEventListener('DOMContentLoaded', () => {
//     createRetroParticles();
// });