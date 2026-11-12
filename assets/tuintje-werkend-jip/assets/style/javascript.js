
document.querySelector("#cookieModal form button:last-child").onclick = function () {
  document.body.classList.add("deny-mode");
};

document.querySelector("#cookieModal form button:first-child").onclick = function () {
  document.body.classList.remove("deny-mode");
};
