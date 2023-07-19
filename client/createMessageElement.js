(function () {
  const createMessageElement = () => {
    const messageElement = document.createElement("li");

    return messageElement;
  };

  window.createMessageElement = createMessageElement;
})();
