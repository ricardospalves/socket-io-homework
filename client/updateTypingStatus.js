(function () {
  "use strict";

  const typingStatusElement = document.querySelector("#typingStatus");

  window.socket.on("typing", ({ username, typing }) => {
    typingStatusElement.textContent = typing ? `${username} is typing…` : "";
  });
})();
