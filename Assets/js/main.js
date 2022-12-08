
   
    const menuOpen= document.querySelector('.menu-open');
    const closeMenu= document.querySelector('.close-menu');
    const mobileMenu= document.querySelector('.mobile-menu');


    menuOpen.addEventListener('click',() =>{
      mobileMenu.style.left = "0px";
    })

    closeMenu.addEventListener('click',() =>{
      mobileMenu.style.left = "-100%";
    })

    //mobile slide closed
    let mobileSlideClosed =document.querySelectorAll(".mobile-slide-closed");
    for(let i=0;i<mobileSlideClosed.length;i++){
      mobileSlideClosed[i].addEventListener('click',() =>{
      mobileMenu.style.left = "-100%";
    })
    }

    // ScrollReveal
    ScrollReveal().reveal('.headline', { 
        delay: 300,
        origin: 'bottom',
        distance: '50px',
        interval: 300,
        scale: 0.85,
        reset: true
    });
  
    //waypoint
    const navControl = document.querySelector('.nav-control');
    var waypoint = new Waypoint({
      element: document.getElementById('choose'),
      handler: function(direction) {
        // notify(this.element.id + ' triggers at ' + this.triggerPoint)
        if(direction==='down'){
        navControl.classList.add('fixed','w-full','animate__fadeInDown','shadow-md');

        }else{
          navControl.classList.remove('fixed','w-full','animate__fadeInDown','shadow-md');
        }
      },
      offset: '75%'
    })