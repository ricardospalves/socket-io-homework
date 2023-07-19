(function () {
  "use strict";

  const createBroadcastMessage = (message) => {
    const messageElement = window.createMessageElement();

    messageElement.style.border = "1px solid";
    messageElement.innerHTML = `<i>${message}</i>`;

    return messageElement;
  };

  socket.on("joinedChat", () => {
    const messageElement = createBroadcastMessage("Someone joined the chat");

    messageElement.style.color = "green";

    window.appendMessageToChat(messageElement);
  });

  socket.on("leftChat", () => {
    const messageElement = createBroadcastMessage("Someone left the chat");

    messageElement.style.color = "red";

    window.appendMessageToChat(messageElement);
  });
})();
