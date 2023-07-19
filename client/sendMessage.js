(function () {
  "use strict";

  const messagesElement = document.querySelector("#messages");
  const messageFormElement = document.querySelector("#messageForm");
  const messageFieldElement = messageFormElement.querySelector("#messageField");

  messageFormElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = messageFieldElement.value;

    if (!message) {
      messageFieldElement.focus();
      return;
    }

    window.socket.emit("chatMessage", message);
    messageFieldElement.value = "";
    messageFieldElement.focus();
  });
})();
