//TODO Count friends
let friendCount = document.querySelectorAll(".friend-name").length;
const countDisplay = document.getElementById("friendCount");
countDisplay.textContent = friendCount;

const friends = document.querySelectorAll(".friend-name");
const chatName = document.querySelector(".opposite-name p");
const chatProfileName = document.querySelector(".opposite-info .name");
const chatProfileImg = document.querySelector(".opposite-info img");
const chatTopImg = document.querySelector(".opposite-name img");

friends.forEach((friend) => {
  friend.addEventListener("click", () => {
    const name = friend.dataset.name;
    const img = friend.dataset.img;

    chatName.innerHTML = `<img src="${img}"> ${name}`;
    //TODO Update name and avatar
    chatProfileName.textContent = name;
    chatProfileImg.src = img;
    chatTopImg.src = img;
  });
});

//TODO Open notify
const notifyPanel = document.querySelector(".notify-gui");
const openNotify = document.querySelectorAll(".openNotify");

openNotify.forEach((btn) => {
  btn.addEventListener("click", () => {
    notifyPanel.classList.add("show");
  });
});

//TODO Click outside to close
notifyPanel.addEventListener("click", (e) => {
  if (e.target === notifyPanel) {
    notifyPanel.classList.remove("show");
  }
});
