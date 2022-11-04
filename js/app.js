const animations = {
  buttonAnimation() {
    const buttonAnimation = document.querySelector(".button-switch");
    buttonAnimation.classList.toggle("button-animation");
  },
  themeSwitch() {
    const theme = document.querySelector("body");
    theme.classList.toggle("dark-theme");
  },
  animationTrigger() {
    animations.buttonAnimation();
    animations.themeSwitch();
  },
};
