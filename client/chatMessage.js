(function () {
  "use strict";

  socket.on("chatMessage", (message) => {
    const messageElement = window.createMessageElement();

    messageElement.textContent = message;

    appendMessageToChat(messageElement);
  });
})();
