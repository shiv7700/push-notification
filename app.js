const push = document.querySelector(".push");
const error = document.querySelector(".error");

push.addEventListener("click", function () {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      error.innerHTML = "permission is granted success 🫡🫡🫡";
      const notific = new Notification("new notification", {
        body: "sub text",
        data: { hello: "world" },
      });
      // some method
      notific.addEventListener("close", (e) => {
        console.log("closed");
        console.log(e);
      });
      notific.addEventListener("error", (e) => {
        console.log("error");
        console.log(e);
      });
    } else {
      console.log("you have denied permission for sending notification");
      error.innerHTML =
        "you have denied permission for sending notification 🥺🥺🥺";
    }
  });
});
