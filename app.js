const push = document.querySelector(".push");
const error = document.querySelector(".error");

push.addEventListener("click", function () {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      error.innerHTML = "success 🫡🫡🫡";
      new Notification("example notification");
    } else {
      console.log("you have denied permission for sending notification");
      error.innerHTML =
        "you have denied permission for sending notification 🥺🥺🥺";
    }
  });
});
