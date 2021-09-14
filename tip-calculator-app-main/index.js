// 

// Toggle select class
const BUTTONS = document.querySelectorAll('.button');

BUTTONS.forEach((two) => {
  const toggle = () => {
    BUTTONS.forEach((item) => {
      if (item !== two) {
        item.classList.remove("select");
      }
    });
    two.classList.toggle("select");
  };  
  two.addEventListener("click", toggle, false);
});
// Toggle select class