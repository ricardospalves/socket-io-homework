(function () {
  "use strict";

  socket.on("chatMessage", ({ message, username }) => {
    const messageElement = window.createMessageElement();

    messageElement.innerHTML = `<b>${username}:</b> ${message}`;

    appendMessageToChat(messageElement);
  });
})();
