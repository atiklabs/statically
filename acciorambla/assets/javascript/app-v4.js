/*
 * Change navigation active state on scroll
 */

let mainNavLinks = document.querySelectorAll("a.nav-link");
let mainSections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 300;  // offset of 300 for when scrolling up
    mainNavLinks.forEach(link => {
        const section = document.getElementById(link.hash.substring(1));
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add("highlighted");
        } else {
            link.classList.remove("highlighted");
        }
    });
});


/*
 * Counter
 */

const start_date = '2020-10-01';

// calculates the time past from the start date
function getTimeRemaining(start_time){
    const now = new Date().toString();
    const total = Date.parse(now) - Date.parse(start_time) ;
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

// places the data to the front-end
function eachInterval(id, start_time) {
    const clock = document.getElementsByClassName(id);
    const t = getTimeRemaining(start_time);
    for (let i = 0; i < clock.length; i++) {
        clock[i].innerHTML = t.days + 1587 + ' DIES ' /*+
                        '(hours: '+ t.hours +
                        ' minutes: ' + t.minutes +
                        ' seconds: ' + t.seconds + ')'*/;
    }
}

// runs the checking every 10 sec
function initializeClock(id, start_time) {
    const time_interval = setInterval(function () {
        eachInterval(id, start_time)}, 10000); // does it every 10 sec
    eachInterval(id, start_time);
}
window.onload = function() {
    initializeClock('countdown', start_date);
}


/*
 * LaRambla, Proposta, Suport
 */

function getBodyScrollTop () {
    const el = document.scrollingElement || document.documentElement;
    return el.scrollTop;
}

window.addEventListener('load', function () {
    /**
     * LaRambla
     */

    let laRamblaCarousel = $("#larambla-carousel");
    laRamblaCarousel.owlCarousel({
        items: 1,
        autoplay: false,
        autoHeight: true,
        loop: true,
        nav: false,
    });

    // Go to the next item
    document.getElementById("seguent-cursor-larambla").addEventListener("click", function() {
        laRamblaCarousel.trigger('next.owl.carousel');
    });

    // Go to the next item in mobile
    const laRamblaAllSeguent = document.getElementsByClassName("larambla-seguent-mobile");
    for (let i = 0; i < laRamblaAllSeguent.length; i++) {
        laRamblaAllSeguent[i].addEventListener("click", function() {
            laRamblaCarousel.trigger('next.owl.carousel');
        });
    }

    /**
     * Proposal carousel
     */

    let proposalCarousel = $("#proposal-carousel");
    proposalCarousel.owlCarousel({
        items: 1,
        autoplay: false,
        autoHeight: true,
        loop: true,
        nav: false,
    });

    // Go to the next item
    document.getElementById("seguent-cursor-proposal").addEventListener("click", function() {
        proposalCarousel.trigger('next.owl.carousel');
    });

    // Go to the next item in mobile
    const proposalAllSeguent = document.getElementsByClassName("proposal-seguent-mobile");
    for (let i = 0; i < proposalAllSeguent.length; i++) {
        proposalAllSeguent[i].addEventListener("click", function() {
            proposalCarousel.trigger('next.owl.carousel');
        });
    }

    /**
     * Cites carousel
     */

    let suportCarousel = $("#quote-carousel");
    suportCarousel.owlCarousel({
        items: 1,
        autoplay: false,
        autoHeight: true,
        loop: true,
        nav: false,
    });

    // Go to the next item
    document.getElementById("seguent-cursor-suport").addEventListener("click", function() {
        suportCarousel.trigger('next.owl.carousel');
    });

    // Go to the next item in mobile
    const suportAllSeguent = document.getElementsByClassName("suport-seguent-mobile");
    for (let i = 0; i < suportAllSeguent.length; i++) {
        suportAllSeguent[i].addEventListener("click", function() {
            suportCarousel.trigger('next.owl.carousel');
        });
    }

    /**
     * Activate SEGUENT cursor
     */

    // make seguent text to appear in larambla section
    const laRamblaSection = document.getElementById("larambla");
    const laRamblaCustomCursor = document.getElementById("seguent-cursor-larambla");

    // make seguent text to appear in the orange section
    const orangeSection = document.getElementById("orange-section-main");
    const proposalCustomCursor = document.getElementById("seguent-cursor-proposal");

    // make seguent text to appear in the red section
    const redSection = document.getElementById("red-section-main");
    const suportCustomCursor = document.getElementById("seguent-cursor-suport");

    document.getElementsByTagName("body")[0].onmousemove = function(e) {
        const laRamblaSectionPos = laRamblaSection.getBoundingClientRect();
        const redSectionPos = redSection.getBoundingClientRect();
        const orangeSectionPos = orangeSection.getBoundingClientRect();
        const scrollTop = getBodyScrollTop();

        const laRamblaTopPos = laRamblaSectionPos.top + scrollTop;
        const laRamblaBottomPos = laRamblaSectionPos.bottom + scrollTop;

        const redTopPos = redSectionPos.top + scrollTop;
        const redBottomPos = redSectionPos.bottom + scrollTop;

        const orangeTopPos = orangeSectionPos.top + scrollTop;
        const orangeBottomPos = orangeSectionPos.bottom + scrollTop;

        if (e.pageY >= laRamblaTopPos + 250 && e.pageY <= laRamblaBottomPos - 51 && e.pageX >= 150) {
            laRamblaCustomCursor.style.display = 'block';
            laRamblaCustomCursor.style.top = (e.pageY) + 'px';
            laRamblaCustomCursor.style.left = (e.pageX) + 'px';
        } else {
            laRamblaCustomCursor.style.display = 'none';
        }

        if (e.pageY >= redTopPos + 50 && e.pageY <= redBottomPos - 50 && e.pageX >= 150) {
            suportCustomCursor.style.display = 'block';
            suportCustomCursor.style.top = (e.pageY) + 'px';
            suportCustomCursor.style.left = (e.pageX) + 'px';
        } else {
            suportCustomCursor.style.display = 'none';
        }

        if (e.pageY >= orangeTopPos + 100 && e.pageY <= orangeBottomPos - 200 && e.pageX >= 150) {
            proposalCustomCursor.style.display = 'block';
            proposalCustomCursor.style.top = (e.pageY) + 'px';
            proposalCustomCursor.style.left = (e.pageX) + 'px';
        } else {
            proposalCustomCursor.style.display = 'none';
        }
    };
});





