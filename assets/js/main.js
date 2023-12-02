const navbar = document.querySelector(`.navbar`);
const changestatus = document.querySelector(`.hero-stars`);
const contact = document.querySelector(`.get-in-touch`);
const about = document.querySelector(`.text-uppercase`);
const loading = document.querySelector(`.loading`);
const scrollToTopBtn = document.querySelector(`.scroll-to-top`);
const scrolltotopcontact = document.querySelector(`.scroll-to-top-contact`);
const scrolltotopabout = document.querySelector(`.scroll-to-top-about`);


navbar.style.transition=`0.4s background-color`;

window.addEventListener(`scroll`, function(){
    if(window.scrollY >= changestatus.offsetTop){
        navbar.style.backgroundColor = "#201f1f";
        navbar.style.opacity = "0.9";
    }
    else{
        navbar.style.backgroundColor = "transparent";
        navbar.style.opacity = "1";
    }
    if(window.scrollY > changestatus.offsetTop){
        scrollToTopBtn.classList.remove(`opacity-0`, `invisible`);
    } 
    else{
        scrollToTopBtn.classList.add(`opacity-0`, `invisible`);
    } 
});
window.addEventListener(`scroll`, function(){
    if(window.scrollY >= contact.offsetTop){
        navbar.style.backgroundColor = "#201f1f";
        navbar.style.opacity = "0.9";
    }
    else{
        navbar.style.backgroundColor = "transparent";
        navbar.style.opacity = "1";
    }
    if(window.scrollY > contact.offsetTop){
        scrolltotopcontact.classList.remove(`opacity-0`, `invisible`);
    } 
    else{
        scrolltotopcontact.classList.add(`opacity-0`, `invisible`);
    } 
});
window.addEventListener(`scroll`, function(){
    if(window.scrollY >= about.offsetTop){
        navbar.style.backgroundColor = "#201f1f";
        navbar.style.opacity = "0.9";
    }
    else{
        navbar.style.backgroundColor = "transparent";
        navbar.style.opacity = "1";
    }
    if(window.scrollY > about.offsetTop){
        scrolltotopabout.classList.remove(`opacity-0`, `invisible`);
    } 
    else{
        scrolltotopabout.classList.add(`opacity-0`, `invisible`);
    } 
});

window.addEventListener(`load`, function(){
    setTimeout(function(){
        loading.classList.add(`opacity-0`, `invisible`);
        document.body.style.overflow = `auto`;
        window.scroll({
            top:0,
            behavior:"smooth",
        })
    },2000)
});

scrollToTopBtn.addEventListener(`click`, function(){
    window.scroll({
        top:0,
        behavior:"smooth",
    })
});
scrolltotopcontact.addEventListener(`click`, function(){
    window.scroll({
        top:0,
        behavior:"smooth",
    })
});
scrolltotopabout.addEventListener(`click`, function(){
    window.scroll({
        top:0,
        behavior:"smooth",
    })
});

