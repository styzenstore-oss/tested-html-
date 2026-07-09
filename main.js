/* =====================================
   OSIS DIGITAL WEBSITE
   MAIN JAVASCRIPT
===================================== */



// =====================================
// LOADING SCREEN
// =====================================


window.addEventListener("load",()=>{


    const loader =
    document.querySelector(".loader");


    setTimeout(()=>{


        loader.style.display="none";


    },2500);



});





// =====================================
// DARK / LIGHT MODE
// =====================================


const themeBtn =
document.getElementById("theme-btn");


let darkMode=true;



themeBtn.addEventListener("click",()=>{


    darkMode=!darkMode;


    if(darkMode){


        document.body.style.background="#050816";

        document.body.style.color="white";


        themeBtn.innerHTML=
        `<i class="fa-solid fa-moon"></i>`;


    }


    else{


        document.body.style.background="#f8fafc";

        document.body.style.color="#111827";


        themeBtn.innerHTML=
        `<i class="fa-solid fa-sun"></i>`;

    }



});







// =====================================
// NAVBAR SCROLL EFFECT
// =====================================



const navbar =
document.querySelector(".navbar");



window.addEventListener("scroll",()=>{


    if(window.scrollY>50){


        navbar.style.background=
        "rgba(0,0,0,.75)";


        navbar.style.padding=
        "10px 30px";


    }


    else{


        navbar.style.background=
        "rgba(255,255,255,.08)";


        navbar.style.padding=
        "15px 30px";


    }



});








// =====================================
// EVENT CAROUSEL
// =====================================



const eventContainer =
document.querySelector(".event-container");



const nextBtn =
document.querySelector(".right");


const prevBtn =
document.querySelector(".left");



let scrollAmount=0;



nextBtn.addEventListener("click",()=>{


    eventContainer.scrollLeft +=350;


});




prevBtn.addEventListener("click",()=>{


    eventContainer.scrollLeft -=350;


});







// =====================================
// AUTO SLIDE EVENT
// =====================================



setInterval(()=>{


    eventContainer.scrollLeft +=350;



    if(
    eventContainer.scrollLeft >=
    eventContainer.scrollWidth -
    eventContainer.clientWidth
    ){


        eventContainer.scrollLeft=0;


    }



},5000);









// =====================================
// MOUSE GLOW EFFECT
// =====================================


const glow =
document.createElement("div");


glow.className="mouse-glow";


document.body.appendChild(glow);



document.addEventListener("mousemove",(e)=>{


    glow.style.left =
    e.clientX+"px";


    glow.style.top =
    e.clientY+"px";



});







// =====================================
// SCROLL REVEAL SIMPLE
// =====================================


const reveals =
document.querySelectorAll(
"section,.event-card,.program-card,.stat-card"
);



function reveal(){


    reveals.forEach(item=>{


        let windowHeight =
        window.innerHeight;


        let elementTop =
        item.getBoundingClientRect().top;



        if(elementTop <
        windowHeight-100){


            item.style.opacity="1";

            item.style.transform=
            "translateY(0)";


        }



    });



}



window.addEventListener(
"scroll",
reveal
);



reveal();






// =====================================
// MOBILE DRAG CAROUSEL
// =====================================



let isDown=false;

let startX;

let scrollLeft;



eventContainer.addEventListener(
"mousedown",
(e)=>{


    isDown=true;


    startX =
    e.pageX -
    eventContainer.offsetLeft;


    scrollLeft =
    eventContainer.scrollLeft;



});



eventContainer.addEventListener(
"mouseleave",
()=>{

    isDown=false;

});



eventContainer.addEventListener(
"mouseup",
()=>{

    isDown=false;

});



eventContainer.addEventListener(
"mousemove",
(e)=>{


if(!isDown)return;



e.preventDefault();



const x =
e.pageX -
eventContainer.offsetLeft;



const walk =
(x-startX)*2;



eventContainer.scrollLeft =
scrollLeft-walk;



});





// =====================================
// CONSOLE
// =====================================


console.log(
"OSIS DIGITAL WEBSITE READY 🚀"
);
