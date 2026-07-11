/* ==========================
LOADING SCREEN
========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

const loading =
document.getElementById(
"loading-screen"
);

if(loading){

loading.style.opacity="0";

setTimeout(()=>{

loading.style.display="none";

},1000);

}

},2500);

});


/* ==========================
AUTO PLAY MUSIC
========================== */
const btnYes = document.getElementById("btnYes");

if (btnYes) {
    btnYes.addEventListener("click", () => {
        localStorage.setItem("musicAllowed", "true");

        const music = document.getElementById("bgMusic");

        if (music) {
            music.play().catch(() => {});
        }
    });
}

window.addEventListener("load", () => {
    const music = document.getElementById("bgMusic");

    if (
        music &&
        localStorage.getItem("musicAllowed") === "true"
    ) {
        music.play().catch(err => {
            console.log(err);
        });
    }
});

/* ==========================
FLOATING HEARTS
========================== */

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left =
Math.random()*100+"vw";

heart.style.fontSize =
(Math.random()*20+15)+"px";

document.body.appendChild(
heart
);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(
createHeart,
700
);


/* ==========================
FALLING ROSE PETALS
========================== */

function createPetal(){

const petal =
document.createElement("div");

petal.classList.add("petal");

petal.innerHTML="🌹";

petal.style.left =
Math.random()*100+"vw";

petal.style.animationDuration =
(Math.random()*5+5)+"s";

document.body.appendChild(
petal
);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(
createPetal,
900
);


/* ==========================
MOMENT COUNTER
========================== */

/*
Ganti tanggal sesuai kebutuhan

start = awal hubungan
end = target mensive
*/

const startDate =
new Date(
"2026-04-12T00:00:00"
);

const endDate =
new Date(
"2026-06-12T00:00:00"
);

function updateCounter(){

const counter =
document.getElementById(
"counter"
);

if(!counter) return;

const now =
new Date();

const elapsed =
now - startDate;

const days =
Math.floor(
elapsed /
(1000*60*60*24)
);

const hours =
Math.floor(
(elapsed /
(1000*60*60))
%24
);

const minutes =
Math.floor(
(elapsed /
(1000*60))
%60
);

const seconds =
Math.floor(
(elapsed/1000)
%60
);

counter.innerHTML =

`
${days} Days
<br>
${hours} Hours
${minutes} Minutes
${seconds} Seconds
`;

}

updateCounter();

setInterval(
updateCounter,
1000
);


/* ==========================
SCROLL ANIMATION
========================== */

const sections =
document.querySelectorAll(
".glass-section"
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(
(entry)=>{

if(
entry.isIntersecting
){

entry.target.style.opacity=
"1";

entry.target.style.transform=
"translateY(0)";

}

});

},
{
threshold:0.2
}

);

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform=
"translateY(40px)";

section.style.transition=
"1s";

observer.observe(
section
);

});


/* ==========================
SMOOTH MENU SCROLL
========================== */

document
.querySelectorAll(
'.dashboard-menu a'
)
.forEach(link=>{

link.addEventListener(
'click',
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute(
'href'
)
);

target.scrollIntoView({

behavior:'smooth'

});

});

});


/* ==========================
JOURNEY CARD HOVER
========================== */

const cards =
document.querySelectorAll(
".journey-card"
);

cards.forEach(card=>{

card.addEventListener(
"mouseenter",
()=>{

card.style.transform=
"translateY(-10px)";

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform=
"translateY(0px)";

});

});


/* ==========================
VOUCHER CLICK EFFECT
========================== */

const vouchers =
document.querySelectorAll(
".voucher"
);

vouchers.forEach(v=>{

v.addEventListener(
"click",
()=>{

alert(
"Voucher redeemed ❤️"
);

});

});
