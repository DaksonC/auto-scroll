let isRunning = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  isRunning = !isRunning;
  if (isRunning)
    move(request.speed);
});

function move(speed) {
  requestAnimationFrame(() => {
    window.scrollBy(0, speed);
    if (isRunning)
      move(speed);
  });
}
