
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

const Titles = document.querySelectorAll('p');
const TitlesArray = Array.from(Titles);


TitlesArray.map( p => {
  p.addEventListener('mouseover', p => {
    TweenMax.to(p.currentTarget, 1, {scale: 1.1, ease:Bounce.easeOut})
  })
})

TitlesArray.map( p => {
  p.addEventListener('mouseout', p => {
    TweenMax.to(p.currentTarget, 1, {scale: 1, ease:Bounce.easeOut})
  })
})

const Button = document.querySelectorAll('.sign-up');
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



