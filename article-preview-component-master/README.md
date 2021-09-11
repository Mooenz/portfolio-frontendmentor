# By Mooenz  - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Solution screenshot](#Solution-screenshot)
    - [Mobile](#Mobile)
    - [Mobile whit modal](#Mobile-modal)
    - [Desktop](#Desktop)
    - [Mobile whit modal](#Desktop-modal)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size.

### Solution screenshot

#### Mobile

![Mobile](./solution-capture/mooenz-mobile-solution.png)

#### Mobile modal

![Mobile modal](./solution-capture/mooenz-mobile-tooltip-solution.png)

#### Desktop

![Desktop](./solution-capture/mooenz-desktop-solution.png)

#### Desktop modal

![Desktop modal](./solution-capture/mooenz-tooltip-desktop-solution.png)

### Links

- Solution URL: [Stats preview card component challenge.](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT/hub/html-css-js-flexbox-mobile-first-and-responsive-design-8hpxxmqUl)
- Live Site URL: [Solution on github pages.](https://mooenz.github.io/frontend-portafolio/article-preview-component-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Responsive design
- JS vanila

### What I learned

I learned to realice a tooltip whit pseudo-element:


```css
  .container-social-media::after {
    ...
  }
```
and, interaction was by js, i did a toogle where change the styles.
```js
const $share = document.querySelector('.share');
const $path = document.querySelector('.path');
const $container_social_media = document.querySelector('.container-social-media')

const active = () => {
  $container_social_media.classList.toggle('active-social-media');
  if ($share.classList.toggle('active')) {
    $path.setAttribute('fill', "#ecf2f8");
  } else {
    $share.className = 'share';
    $path.setAttribute('fill', '#6E8098');
  }
}

$share.addEventListener('click', active, false);
```
is every js in my proyect. its a simple, grant a lisener will hear the click event and an 'if' show or not the styles and tooltip

### Continued development

Next challenge im use Sass, css in js.

## Author

- Website - [Mooenz cv](https://mooenz.github.io/curriculum-vitae/)
- Frontend Mentor - [@Mooenz](https://www.frontendmentor.io/profile/Mooenz)
- Twitter - [@MooenzDev](https://www.twitter.com/MooenzDev)

## Acknowledgments

Thanks frontend mentor for this free challenges.