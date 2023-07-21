(function () {
  "use strict";

  const messageFieldElement = document.querySelector("#messageField");
  const username = window.getUsername();
  let timeout = undefined;

  messageFieldElement.addEventListener("input", () => {
    timeout && clearInterval(timeout);

    window.socket.emit("typing", {
      username,
      typing: true,
    });

    timeout = setTimeout(() => {
      window.socket.emit("typing", {
        username,
        typing: false,
      });
    }, 3000);
  });
})();
