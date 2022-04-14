window.addEventListener("scroll",function(){
    const header=document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY>0);
});

const projectModals=document.querySelectorAll(".project-modal");
const learnMoreBtn=document.querySelectorAll(".learn-more-btn");
const modalCloseBtn=document.querySelectorAll(".modal-close-btn");

var modal=function(modalClick){
    projectModals[modalClick].classList.add("active");
}

learnMoreBtn.forEach((learnMoreBtn, i)=>{
    learnMoreBtn.addEventListener("click",()=>{
        modal(i);
    });
});

modalCloseBtn.forEach((modalCloseBtn)=>{
    modalCloseBtn.addEventListener("click", ()=>{
        projectModals.forEach((modalView)=>{
            modalView.classList.remove("active");
        });
    });
});


//Portfolio
const portofolioModals=document.querySelectorAll(".portofolio-model");
const imgCards=document.querySelectorAll(".img-card");
const portofolioCloseBtn=document.querySelectorAll(".portofolio-close-btn");

var portofolioModal=function(modalClick){
    portofolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i)=>{
    imgCard.addEventListener("click",()=>{
        portofolioModal(i);
    });
});

portofolioCloseBtn.forEach((portofolioCloseBtns)=>{
    portofolioCloseBtns.addEventListener("click", ()=>{
        portofolioModals.forEach((portofolioModalView)=>{
            portofolioModalView.classList.remove("active");
        });
    });
});

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration:2500,
    delay:100

 });
 ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02',{delay:100, origin:'left'});
 ScrollReveal().reveal('.home .info h3, .home .info  p, .about-info .btn',{delay:100, origin:'right'});
 ScrollReveal().reveal('.home .info btn',{delay:100, origin:'bottom'});
 ScrollReveal().reveal('.media-icons i',{delay:100, origin:'left', intetval: 50});
 ScrollReveal().reveal('.home-img, .about-img',{delay:100, origin:'bottom'});

 ScrollReveal().reveal('.about .description, .copy-right',{delay:100, origin:'right'});
 ScrollReveal().reveal('.skills-description, service-description',{delay:100, origin:'left'});
 ScrollReveal().reveal('.education-card, .project-card, .education, .education2, .education3',{delay:100, origin:'bottom', interval:70});


const menuBtn=document.querySelector(".nav-menu-btn");
const closeBtn=document.querySelector(".nav-close-btn");
const navigation=document.querySelector(".navigation");
const navItems=document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click",()=>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click",()=>{
    navigation.classList.remove("active");
});

navItems.forEach((navItem)=>{
    navItem.addEventListener("click",()=>{
  navigation.classList.remove("active");

    });
});