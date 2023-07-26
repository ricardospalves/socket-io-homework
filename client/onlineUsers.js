(function () {
  "use strict";

  const onlineUsersElement = window.document.querySelector("#onlineUsers");
  const USERNAME = window.getUsername();

  window.socket.on("addUserOnline", setOnlineUsers);

  window.socket.on("removeUserOnline", setOnlineUsers);

  function setOnlineUsers(users) {
    const clientSocketID = window.socket.id;
    const currentUsernameIndex = users.findIndex(({ socketID }) => {
      return socketID === clientSocketID;
    });
    const fixedUsernamesPosition = moveArrayItem(users, currentUsernameIndex);
    const usernames = fixedUsernamesPosition.map(({ username, socketID }) => {
      return socketID === clientSocketID
        ? "<b>You</b>"
        : `<a href="/private-chat.html?from=${USERNAME}&to=${username}">${username}</a>`;
    });
    onlineUsersElement.innerHTML = `🟢 Online users: ${usernames.join(", ")}`;
  }

  function moveArrayItem(array, currentIndex) {
    const copyArray = [...array];
    const copyArrayItem = copyArray[currentIndex];

    copyArray.splice(currentIndex, 1);
    copyArray.splice(0, 0, copyArrayItem);

    return copyArray;
  }
})();
