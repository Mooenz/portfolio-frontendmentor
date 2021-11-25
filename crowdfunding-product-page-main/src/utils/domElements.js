const $ = (selector) => document.querySelector(selector);
const $all = (selector) => document.querySelectorAll(selector);


const $body = $('body');
const $product_buttons = $('.product__buttons');
const $modal_card = $all('.modal__card');
const $nodeListArray = [...$modal_card];

export { $body, $product_buttons, $nodeListArray };
