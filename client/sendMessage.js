(function () {
  "use strict";

  const messageFormElement = document.querySelector("#messageForm");
  const messageFieldElement = messageFormElement.querySelector("#messageField");
  const username = window.getUsername();

  messageFormElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = messageFieldElement.value;

    if (!message) {
      messageFieldElement.focus();
      return;
    }

    window.socket.emit("chatMessage", {
      message,
      username,
    });
    messageFieldElement.value = "";
    messageFieldElement.focus();
  });
})();
