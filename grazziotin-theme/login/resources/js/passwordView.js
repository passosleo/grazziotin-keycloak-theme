window.onload = function () {
  const eyeIcons = document.querySelectorAll(".eye-icon");

  eyeIcons[1].classList.add("invisible");

  eyeIcons.forEach(function (eyeIcon) {
    eyeIcon.addEventListener("click", function () {
      const input = document.querySelector("#password");
      if (input.type === "password") {
        input.type = "text";
        eyeIcons[0].classList.add("invisible");
        eyeIcons[1].classList.remove("invisible");
      } else {
        input.type = "password";
        eyeIcons[0].classList.remove("invisible");
        eyeIcons[1].classList.add("invisible");
      }
    });
  });
};
