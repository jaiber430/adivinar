<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Press+Start+2P&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="main.js" defer></script>
    <title>English Interactive Game</title>
    <!-- <style>

    </style> -->
</head>
<body>
    <h1>ENGLISH ARCADE</h1>
    
    <div class="container">
        <!-- Back button - FIXED -->
        <button id="back-btn" class="back-btn hidden">← BACK</button>
        
        <div id="start-screen" class="game-screen">
            <h2>RETRO ENGLISH CHALLENGE</h2>
            <p>SELECT CATEGORY - TRANSLATE SPANISH TO ENGLISH</p>
            <p>60 SECONDS MISSION - MAXIMUM WORDS!</p>
            
            <div class="category-selector">
                <button class="category-btn" data-category="animales">ANIMALS</button>
                <button class="category-btn" data-category="comida">FOOD</button>
                <button class="category-btn" data-category="colores">COLORS</button>
                <button class="category-btn" data-category="familia">FAMILY</button>
                <button class="category-btn" data-category="numeros">NUMBERS</button>
            </div>
            
            <button id="start-btn">START GAME</button>
        </div>
        
        <div id="game-screen" class="game-screen hidden">
            <div class="timer-container">
                TIME: <span id="timer" class="timer">01:00</span>
            </div>
            
            <div class="game-info">
                <div>SCORE: <span id="score">0</span></div>
                <div>WORDS: <span id="current-word">1</span>/<span id="total-words">10</span></div>
            </div>
            
            <div class="progress-bar">
                <div class="progress" id="progress-bar"></div>
            </div>
            
            <div class="word-display" id="word-display">PERRO</div>
            
            <div class="input-container">
                <input type="text" id="answer-input" placeholder="ENTER ENGLISH TRANSLATION" autocomplete="off">
            </div>
            
            <div class="feedback" id="feedback"></div>
            
            <button id="check-btn">CHECK</button>
            <button id="skip-btn">SKIP</button>
        </div>
        
        <div id="results-screen" class="results hidden">
            <h2>GAME OVER!</h2>
            <p>FINAL SCORE: <span id="final-score">0</span>/<span id="final-total">10</span></p>
            <p id="performance-message">EXCELLENT WORK!</p>
            <div class="results-buttons">
                <button id="restart-btn">PLAY AGAIN</button>
                <button id="new-game-btn">NEW GAME</button>
            </div>
        </div>
    </div>

    <!-- <script>

    </script> -->
</body>
</html>