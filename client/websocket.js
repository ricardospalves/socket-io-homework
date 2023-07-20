(function () {
  "use strict";

  const username = window.getUsername();

  if (!username) {
    return (window.location.href = "/");
  }

  const socket = io();

  window.socket = socket;
})();
