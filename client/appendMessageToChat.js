(function () {
  "use strict";

  const chatMessagesElement = document.querySelector("#chatMessages");

  const appendMessageToChat = (messageElement) => {
    chatMessagesElement.appendChild(messageElement);
  };

  window.appendMessageToChat = appendMessageToChat;
})();
