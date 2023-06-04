function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }
  
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');
  
  let intervalId = null;
  
  startButton.addEventListener('click', () => {
    if (intervalId) return; // If the color switcher is already running, do nothing
  
    startButton.disabled = true; // Disable the "Start" button
    intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  });
  
  stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    startButton.disabled = false; // Enable the "Start" button
  });
