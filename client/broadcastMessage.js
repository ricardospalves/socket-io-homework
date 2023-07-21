(function () {
  "use strict";

  const createBroadcastMessage = (message) => {
    const messageElement = window.createMessageElement();

    messageElement.style.border = "1px solid";
    messageElement.innerHTML = `<i>${message}</i>`;

    return messageElement;
  };

  window.socket.on("joinedChat", ({ username }) => {
    const messageElement = createBroadcastMessage(
      `<b>${username}</b> joined the chat`
    );

    messageElement.style.color = "green";

    window.appendMessageToChat(messageElement);
  });

  window.socket.on("leftChat", ({ username }) => {
    const messageElement = createBroadcastMessage(
      `<b>${username}</b> left the chat`
    );

    messageElement.style.color = "red";

    window.appendMessageToChat(messageElement);
  });
})();
