// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function() {
  // var request = new XMLHttpRequest();
  // request.open("GET", "http://giveonesecondto.me:8000/ha/", false);
  // request.send();
  // var txt = request.responseText;
  // document.getElementById('total-seconds').innerText = "已众筹："+txt;
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});
