$(function () {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    autoplay: 1000,
    items: 5,
    margin: 15,
    loop: true,
    nav: true,
    responsiveClass:true,
    responsive: {
      0:{
        items:3,
        nav:true
    },
    600:{
        items:3,
        nav:false
    },
    1000:{
        items:5,
        nav:true,
        loop:true
    }
    }
  });
});


window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('.navbar');
    if(window.pageYOffset>0){
      nav.classList.add("box__shadow");
    }else{
      nav.classList.remove("box__shadow");
    }
  });



let section = document.querySelectorAll('section');
        let lists = document.querySelectorAll('.nav-item');
        function activeLink(li) {
            lists.forEach((item) => item.classList.remove('active'));
            li.classList.add('active');
        }
        lists.forEach((item) =>
            item.addEventListener('click', function(){
                activeLink(this);
            }));

        window.onscroll = () => {
            section.forEach(sec => {
                let top = window.scrollY+80;
                // console.log(sec);
                // console.log(top);
                let offset = sec.offsetTop   ;
                // console.log(offset);
                let height = sec.offsetHeight ;
                console.log(height);
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    const target = document.querySelector(`[href='#${id}']`).parentElement;
                    activeLink(target);
                }
            })
        };


        const counters = document.querySelectorAll('.facts__count');
        const speed = 500;
        
        counters.forEach( counter => {
           const animate = () => {
              const value = +counter.getAttribute('akhi');
            //   const plus = +counter.getElementsByTagName("span");
            const data = +counter.innerText;
              const time = value / speed;
             if(data < value) {
                  counter.innerText = Math.ceil(data + time);
                  setTimeout(animate, 1);
                }else{
                  counter.innerText = value;
                }
             
           }
           
           animate();
        });


//     $.fn.openAndCloseNav = function(){
      
//       if($('.rightside__logo').css('width') == "0px"){
//     document.getElementById( "rightUpper").style.width = "320px";
//     //document.getElementById("rightUpper").style.display = "block";
      
//       }
//       else{
//           document.getElementById("rightUpper").style.width = "0";
             
//       }
//  }
 