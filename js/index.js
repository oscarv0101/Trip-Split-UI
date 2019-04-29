
// const paragraphs = document.querySelectorAll('.nav2');

// paragraphs.forEach(function(element){
 
//     element.addEventListener('mouseover',function(){
    
//         element.style.backgroundColor = "black";
//     });
//   })
//   paragraphs.forEach(function(element){
//   element.addEventListener('mouseleave',function(){
    
//     element.style.backgroundColor = "transparent";
// });
// })
//     paragraphs.forEach(function(element){
//     element.addEventListener('mouseleave',function(){
//       element.style.color = "black";
//     });
//   })
 


// const buttons = document.querySelectorAll('.sign-up');
// buttons.forEach(function (element){
//     element.addEventListener('mouseover', event => {
//         element.innerHTML = `Click count: ${event.detail}`;
//       });
// })

// const Button = document.querySelectorAll('p');
// const Button = Array.from(Button);


// ButtonArray.map( p => {
//   p.addEventListener('mouseover', p => {
//     TweenMax.to(p.currentTarget, 1, {scale: 1.1, ease:Bounce.easeOut})
//   })
// })

// ButtonArray.map( p => {
//   p.addEventListener('mouseout', p => {
//     TweenMax.to(p.currentTarget, 1, {scale: 1, ease:Bounce.easeOut})
//   })
// })
// TweenLite.to(".title",1,{x:Math.random()* 00})

const Links = document.querySelectorAll('a');
const LinksArray = Array.from(Links);


LinksArray.map( p => {
  p.addEventListener('mouseover', p => {
    TweenMax.to(p.currentTarget, 1, {scale: 1.1, ease:Bounce.easeOut})
  })
})

LinksArray.map( p => {
  p.addEventListener('mouseout', p => {
    TweenMax.to(p.currentTarget, 1, {scale: 1, ease:Bounce.easeOut})
  })
})

const Text = document.querySelectorAll('.sign-up');
const TextArray = Array.from(Text);


TextArray.map( p => {
  p.addEventListener('mouseover', p => {
    TweenMax.to(p.currentTarget, 1, {scale: 1.1, ease:Bounce.easeOut})
  })
})

TextArray.map( p => {
  p.addEventListener('mouseout', p => {
    TweenMax.to(p.currentTarget, 1, {scale: 1, ease:Bounce.easeOut})
  })
})

const Button = document.querySelectorAll('p');
const ButtonArray = Array.from(Button);


ButtonArray.map( p => {
  p.addEventListener('mouseover', p => {
    TweenMax.to(p.currentTarget, 1, {scale: 1.1, ease:Bounce.easeOut})
  })
})

ButtonArray.map( p => {
  p.addEventListener('mouseout', p => {
    TweenMax.to(p.currentTarget, 1, {scale: 1, ease:Bounce.easeOut})
  })
})


class MenuToggle {
  constructor(element) {
    this.element = element;
    this.toggle = this.element.querySelector('.menuToggle'); 
    this.closeMenu = this.element.querySelector('.close');
    this.navMenu = this.element.querySelector('.navMenu');
    //Click event on menutoggle fires popUp method
    this.toggle.addEventListener('click', () => this.popUp());
    //Click event on close element fires close method
    this.closeMenu.addEventListener('click', () => this.close());
  }
  popUp() {
    this.navMenu.classList.toggle('menuReveal')
    this.toggle.style.display = 'none';
  }
  close() {
    this.navMenu.classList.toggle('menuReveal');
    this.toggle.style.display = 'flex';
  }
}

// Grabbing #nav element and passing intp constructor of MenuToggle Class
const menu = document.querySelector('#nav');
new MenuToggle(menu)
