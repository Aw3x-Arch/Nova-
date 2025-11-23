document.querySelectorAll(".like-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});
const minimizeBtn = document.querySelector(".minimize");
const preparePost = document.querySelector(".prepare-post");

minimizeBtn.addEventListener("click", () => {
  preparePost.classList.toggle("minimized");
});

//TODO Open comment
const panel = document.querySelector(".comment-gui");
const openButtons = document.querySelectorAll(".opencomment");

openButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    panel.classList.add("show");
  });
});

//TODO Click outside to close
panel.addEventListener("click", (e) => {
  if (e.target === panel) {
    panel.classList.remove("show");
  }
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
