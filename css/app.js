 
const showIMG = GLightbox({
    selector: '.showIMG'
});


// var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {


    if(toggleClose.classList.contains('h-opened')){
        toggleClose.classList.remove('h-opened')
        toggleClose.classList.remove('bg-[#FABE0E]')
        toggleClose.classList.add('bg-slate-400')
        toggleClose.querySelector('.h-open').classList.add('hidden')
        toggleClose.querySelector('.h-close').classList.remove('hidden')
    }else{
        toggleClose.classList.add('h-opened')
        toggleClose.classList.add('bg-[#FABE0E]')
        toggleClose.classList.remove('bg-slate-400')
        toggleClose.querySelector('.h-open').classList.remove('hidden')
        toggleClose.querySelector('.h-close').classList.add('hidden')
    }
    if (collapseMenu.querySelector('ul').classList.contains('max-lg:right-[-520px]')) {
        // collapseMenu.classList.remove('max-lg:hidden')
        collapseMenu.querySelector('ul').classList.remove('max-lg:right-[-520px]')
        collapseMenu.querySelector('ul').classList.add('right-0')
        collapseMenu.classList.add('max-lg:before:inset-0')

    }else{
        // collapseMenu.classList.toggle('max-lg:hidden')
        collapseMenu.querySelector('ul').classList.add('max-lg:right-[-520px]')
        collapseMenu.querySelector('ul').classList.remove('right-0')
        collapseMenu.classList.remove('max-lg:before:inset-0')
    }
}

// toggleOpen.addEventListener('click', handleClick);
if(toggleClose != null){
toggleClose.addEventListener('click', handleClick);
}


// function toggleMenu (btn) {
//     const el = btn.parentElement.querySelector('.subMenu')
//     el.classList.toggle('hidden')
//   }
//   const btn = document.querySelector('.hasSubMenu')
//   btn.addEventListener('click', function(){
//     toggleMenu(btn)
//   })

(function() {
    "use strict";
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }

    const html = select('html') 
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }

    on('click', '.sub-menu', function(e) {
        let mysub = this.closest('li').querySelector(".sub-menu-mobile")
        // let mysub =  select('.sub-menu-mobile').classList;
        if(mysub.classList.contains('max-lg:block')){
            mysub.classList.remove('max-lg:block')
        }else{
            mysub.classList.add('max-lg:block')
        }
    }, true);
    on('click', '.mce-accordion-summary', function(e) {
        let list = this.classList;
        if(list.contains('text-gray-500')){
            list.add('text-gray-900')
            list.remove('text-gray-500')
        }else{
            list.add('text-gray-500')
            list.remove('text-gray-900')
        }
    },true);

    on('click', '.dark-button', function(e){
        const $this = this.classList;
        if($this.contains('icon-[ph--sun-light]')){
            $this.add('icon-[line-md--moon-loop]');
            $this.remove('icon-[ph--sun-light]');
            html.classList.add('dark')
            localStorage.theme = 'dark'
        }else{   
            $this.remove('icon-[line-md--moon-loop]');
            $this.add('icon-[ph--sun-light]');
            html.classList.remove('dark')
            localStorage.theme = 'light'
        }
    });
    const darkbtn = select('.dark-button');
    if(localStorage.theme !== undefined){
        if ((localStorage.theme !== '' && localStorage.theme === 'dark' )|| (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            if(darkbtn != null){
            
                darkbtn.classList.add('icon-[line-md--moon-loop]'); 
            }
            html.classList.add('dark')
        } else { 
            if(darkbtn != null){
                darkbtn.classList.add('icon-[ph--sun-light]');
            }
                html.classList.remove('dark')
        }
    }else { 
            if(darkbtn != null){
                darkbtn.classList.add('icon-[ph--sun-light]');
            }
            html.classList.remove('dark')
    }
        
    // on('click', '.more-mobile', function(e) {

    //     let more =  select('.more-mobile-sub').classList;
    //     console.log(more)
    //     if(more.contains('max-lg:block')){
    //         more.remove('max-lg:block')
    //     }else{
    //         more.add('max-lg:block')
    //     }
    // })

    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if(header != null){
            const Hlist = header.classList;
            if (window.scrollY > 50) { // Change this value based on when you want the effect to start
                Hlist.add('transition-all')
                Hlist.add('ease-in-out')
                Hlist.add('px-12');
                Hlist.remove('sm:px-10');
                Hlist.add('shadow-lg'); 
                
            } else {
                Hlist.remove('transition-all')
                Hlist.remove('ease-in-out')
                Hlist.remove('12x-9');
                Hlist.add('sm:px-10');
                Hlist.remove('shadow-lg'); 
            }
        }
    });
    

    // Get references to elements
    const gallery = select('.gallery');
    const lightbox = select('#lightbox');
    const lightboxImage = select('#lightbox-image');
    const closeButton = select('#close');
  
    // Add event listener to each image
    if( select('.gallery') != null) {
        
        gallery.addEventListener('click', e => {
            if (e.target.classList.contains('gallery-image')) {
            const imageSrc = e.target.src;
            lightboxImage.src = imageSrc;
            lightbox.style.display = 'flex';
            }
        });
        // Close lightbox when close button is clicked
        closeButton.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', e => {
            if (e.target === lightbox) {
            lightbox.style.display = 'none';
            }
        });
    }

    on('click','.button-menu', function(){
        let $this = this; 
        let content = select('.octa-body-content')
        let menu = select('#drawer-disabled-backdrop')
        let footer = select('.octa-footer') 
        if($this.classList.contains('h-opened')){
            $this.classList.remove('h-opened')
            $this.classList.remove('bg-[#FABE0E]')
            $this.classList.add('bg-slate-400')

            content.classList.remove('w-4/5')
            content.classList.add('w-full') 
            footer.classList.remove('sm:w-4/5')
            menu.classList.add('-translate-x-full')
            $this.querySelector('.h-open').classList.remove('hidden')
            $this.querySelector('.h-close').classList.add('hidden')
        }else{
            footer.classList.add('sm:w-4/5')
            menu.classList.remove('-translate-x-full')
            content.classList.add('w-4/5')
            content.classList.remove('w-full')
            $this.classList.add('h-opened')
            $this.classList.add('bg-[#FABE0E]')
            $this.classList.remove('bg-slate-400')
            $this.querySelector('.h-open').classList.add('hidden')
            $this.querySelector('.h-close').classList.remove('hidden')
        }
    })
})();
