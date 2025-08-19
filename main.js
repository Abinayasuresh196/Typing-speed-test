const sourceText = document.getElementById('sourceText');
const inputArea = document.getElementById('inputArea');
const timeEl = document.getElementById('time');
const wpmEl = document.getElementById('wpm');
const accuracyEl = document.getElementById('accuracy');

let time = 0;
let timer = null;

function startTimer() {
  if (timer === null) {
    timer = setInterval(() => {
      time++;
      timeEl.textContent = time;
    }, 1000);
  }
}

function calculateWPM() {
  const wordsTyped = inputArea.value.trim().split(/\s+/).filter(word => word).length;
  return ((wordsTyped / time) * 60) || 0;
}

function calculateAccuracy() {
  const typedText = inputArea.value;
  let correctChars = 0;
  const minLen = Math.min(typedText.length, sourceText.textContent.length);

  for (let i = 0; i < minLen; i++) {
    if (typedText[i] === sourceText.textContent[i]) {
      correctChars++;
    }
  }
  return ((correctChars / sourceText.textContent.length) * 100) || 0;
}

inputArea.addEventListener('input', () => {
  startTimer();
  wpmEl.textContent = calculateWPM().toFixed(1);
  accuracyEl.textContent = calculateAccuracy().toFixed(1);
});
