// class MenuToggle {
//     constructor(element) {
//       this.element = element;
//       this.toggle = this.element.querySelector('.menuToggle'); 
//       this.closeMenu = this.element.querySelector('.close');
//       this.navMenu = this.element.querySelector('.navMenu');
//       //Click event on menutoggle fires popUp method
//       this.toggle.addEventListener('click', () => this.popUp());
//       //Click event on close element fires close method
//       this.closeMenu.addEventListener('click', () => this.close());
//     }
//     popUp() {
//       this.navMenu.classList.toggle('menuReveal')
//       this.toggle.style.display = 'none';
//     }
//     close() {
//       this.navMenu.classList.toggle('menuReveal');
//       this.toggle.style.display = 'flex';
//     }
//   }



  const menu = document.querySelector('#nav');
new MenuToggle(menu);
