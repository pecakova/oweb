const wordlist = [
  { word: "python", hint: "programming language" },
  { word: "guitar", hint: "a musical instrument" },
  { word: "clue", hint: "a slight or indirect pointing to something" },
  { word: "wander", hint: "move or cause to move in a sinuous or circular course" },
  { word: "happy", hint: "opposite of sad" },
  { word: "insist", hint: "be emphatic or resolute and refuse to budge" },
  { word: "skill", hint: "an ability that has been acquired by training" },
  { word: "reflect", hint: "show an image of" },
  { word: "temper", hint: "a characteristic state of feeling" },
  { word: "liberal", hint: "having political views favoring reform and progress" },
  { word: "justify", hint: "show to be reasonable or provide adequate ground for" },
  { word: "java", hint: "another programming language" },
  { word: "dog", hint: "human's said to be bff" },
  { word: "tour", hint: "a route all the way around a particular place or area" },
  { word: "Budapest", hint: "the capital city of Hungary" },
  { word: "inclined", hint: "at an angle to the horizontal or vertical position" },
  { word: "letters", hint: "used to write words" },
  { word: "surprised", hint: "a feeling when something you see is unexpected" },
  { word: "knife", hint: "an item used for cutting" }
];

const inputsContainer = document.querySelector(".inputs"),
  resetBtn = document.querySelector(".reset-btn"),
  hintSpan = document.querySelector(".hint span"),
  guessesSpan = document.querySelector(".guess-left span"),
  wrongLetterSpan = document.querySelector(".wrong-letter span"),
  checkBtn = document.querySelector(".check-btn"),
  timerSpan = document.querySelector(".timer span");

let word, correctLetters, remainingLetters, maxGuesses;

function randomWord() {
  let ranObj = wordlist[Math.floor(Math.random() * wordlist.length)];
  word = ranObj.word;
  maxGuesses = 5;
  const shuffledWord = word.split('').sort(() => Math.random() - 0.5).join('');
  correctLetters = shuffledWord.slice(0, 3).split('');
  remainingLetters = word.slice(3);
  console.log(word);

  hintSpan.innerText = ranObj.hint;
  guessesSpan.innerText = maxGuesses;
  wrongLetterSpan.innerText = '';
  updateInputs();
}

function getRandomLetters(word, count) {
  const uniqueLetters = new Set(word.slice(3));
  const randomLetters = Array.from(uniqueLetters).sort(() => Math.random() - 0.5).slice(0, count);
  return randomLetters;
}

function updateInputs() {
  let html = "";

  for (let i = 0; i < word.length; i++) {
    const isCorrectPosition = i < 3 && correctLetters.includes(word[i]);
    const inputValue = isCorrectPosition ? correctLetters[correctLetters.indexOf(word[i])] : '';

    html += `<input type="text" class="letter-input" maxlength="1" value="${inputValue}" ${isCorrectPosition ? 'disabled' : ''}>`;
  }

  inputsContainer.innerHTML = html;
}

function resetGame() {
  const letterInputs = document.querySelectorAll(".letter-input");
  letterInputs.forEach(input => {
    input.value = "";
    input.removeAttribute("disabled");
  });
  randomWord();
}

function checkWord() {
  const letterInputs = document.querySelectorAll(".letter-input");
  const enteredWord = Array.from(letterInputs).map(input => input.value.toLowerCase());

  const isCorrect = enteredWord.join('') === word;

  if (isCorrect) {
    alert(`Congratulations, you found the word: ${word}`);
    resetGame();
  } else {
    const newIncorrects = enteredWord.filter((letter, index) =>
      (index >= 3 && !remainingLetters.includes(letter))
    );

    if (newIncorrects.length > 0) {
      maxGuesses--;
      guessesSpan.innerText = maxGuesses;
      wrongLetterSpan.innerText += newIncorrects.join(' ') + ' ';
      if (maxGuesses === 0) {
        alert("Game over! You couldn't guess the word.");
        resetGame();
      }
    }
  }
}

resetBtn.addEventListener("click", resetGame);
checkBtn.addEventListener("click", checkWord);
randomWord();

