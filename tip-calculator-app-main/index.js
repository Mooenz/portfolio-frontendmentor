// Calc
const CONTENT_CONTAINER = document.querySelector(".content_container");
const RESPONSE_TIP = document.querySelector(".response_tip");
const RESPONSE_TOTAL = document.querySelector(".response_total");
const DATA_PEOPLE = document.querySelector(".data_people");

let billValue = 0;
let tipValue = 0;
let peopleValue = 0;

const calcTip = (bill) => (bill * tipValue) / 100;

const calc = () => {
  if (peopleValue === 0 || isNaN(peopleValue)) {
    DATA_PEOPLE.classList.add("container_error");
  } else {
    DATA_PEOPLE.classList.remove("container_error");

    const tip = calcTip(billValue) / peopleValue;
    const total = billValue / peopleValue + tip;
  
    RESPONSE_TIP.innerHTML = `$${Math.floor(tip * 100) / 100}`;
    RESPONSE_TOTAL.innerHTML = `$${total.toFixed(2)}`;
  }

};

const button = (event) => {
  const textButtom = event.target.innerHTML;
  const target = event.target.nodeName;

  if(target === 'BUTTON') {
    tipValue = parseInt(textButtom);
  }
  calc();
};

const input = (event) => {
  const { id } = event.target;

  if (id === "input_bill") {
    billValue = parseFloat(event.target.value);
  }

  if (id === "input_tip") {
    tipValue = parseFloat(event.target.value);
  }

  if (id === "input_person") {
    peopleValue = parseFloat(event.target.value);
  }
  calc();
};

CONTENT_CONTAINER.addEventListener("click", button, false);
CONTENT_CONTAINER.addEventListener("input", input, false);
// Calc

// Toggle select class
const BUTTONS = document.querySelectorAll(".button");
const BUTTONS_ARRAY = [...BUTTONS]
BUTTONS_ARRAY.forEach((two) => {
  const toggle = () => {
    BUTTONS_ARRAY.forEach((item) => {
      if (item !== two) {
        item.classList.remove("select");
      }
    });
    two.classList.toggle("select");
  };
  two.addEventListener("click", toggle, false);
});
// Toggle select class
