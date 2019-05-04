const Link = document.querySelectorAll('a');
const LinkArray = Array.from(Link);

LinkArray.map( p => {
    p.addEventListener('mouseover', p => {
      TweenMax.to(p.currentTarget, 1, {scale: 1.1, ease:Bounce.easeOut})
    })
  })
  
  LinkArray.map( p => {
    p.addEventListener('mouseout', p => {
      TweenMax.to(p.currentTarget, 1, {scale: 1, ease:Bounce.easeOut})
    })
  })

  const Team = document.querySelectorAll('.team-wrapper');
const TeamArray = Array.from(Team);

TeamArray.map( p => {
    p.addEventListener('mouseover', p => {
      TweenMax.to(p.currentTarget, 1, {scale: 1.1, ease:Bounce.easeOut})
    })
  })
  
  TeamArray.map( p => {
    p.addEventListener('mouseout', p => {
      TweenMax.to(p.currentTarget, 1, {scale: 1, ease:Bounce.easeOut})
    })
  })

  const TeamCode = document.querySelectorAll('.team-code');
  const TeamCodeArray = Array.from(TeamCode);
  
  TeamCodeArray.map( p => {
      p.addEventListener('mouseover', p => {
        TweenMax.to(p.currentTarget, 1, {scale: 1.1, ease:Bounce.easeOut})
      })
    })
    
    TeamCodeArray.map( p => {
      p.addEventListener('mouseout', p => {
        TweenMax.to(p.currentTarget, 1, {scale: 1, ease:Bounce.easeOut})
      })
    })
//DROPDOWN MENU EVENT
//Passing #nav element into constructor for new MenuToggle
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
    