document.addEventListener("DOMContentLoaded", () => {

    let mobileMenu = function () {
        const body = document.querySelector('body'),
              mobileMenu = document.querySelector('#mobile-menu-js'),
              mobileHamburger = document.querySelector('#mobile-hamburger-js'),
              mobileCloseMenu = document.querySelectorAll('.mobile-link');

        mobileHamburger.addEventListener('click', ()=>{
            mobileMenu.classList.toggle('_is-active');
            mobileHamburger.classList.toggle('_is-active');
            body.classList.toggle('_scroll-hiddin');
        });

        mobileCloseMenu.forEach((item) =>{
            item.addEventListener("click", hiddenMenu);
        });

        function hiddenMenu(){
            body.classList.remove('_scroll-hiddin');
            mobileMenu.classList.remove('_is-active');
            mobileHamburger.classList.remove('_is-active');

        }
    }

    let tab = function () {
        let tabNav = document.querySelectorAll(".tabs-work"),
            tabContent = document.querySelectorAll(".tab"),
            tabName;

        tabNav.forEach((item) => {
            item.addEventListener("click", selectTabNav);
        });

        function selectTabNav() {
            tabNav.forEach((item) => {
                item.classList.remove("_is-active");
            });

            this.classList.add("_is-active");
            tabName = this.getAttribute("data-tab-name");
            selectTabContent(tabName);
        }

        function selectTabContent(tabName) {
            tabContent.forEach((item) => {
            item.classList.contains(tabName)
                ? item.classList.add("_is-active")
                : item.classList.remove("_is-active");
            });
        }
    }

    let slider = function(){
        const swiper = new Swiper('#review-slider-js', {
            autoHeight: true, 
            calculateHeight:true,
            loop: true,
    
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
    
            navigation: {
              nextEl: '.slider-arrow-prev',
              prevEl: '.slider-arrow-next',
            },
    
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                1150: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
              },
    
            // mousewheel: true,
            keyboard: true,
        });
    }

    mobileMenu();
    tab();
    slider();
});