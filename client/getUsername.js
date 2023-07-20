(function () {
  "use strict";

  const getUsername = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const username = urlSearchParams.get("username");

    return username;
  };

  window.getUsername = getUsername;
})();
