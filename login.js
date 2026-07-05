// GANTI PASSWORD DI SINI

const PASSWORD =
"251025";


function addNumber(num){

const input =
document.getElementById(
"passwordInput"
);

input.value += num;

}


function clearPassword(){

const input =
document.getElementById(
"passwordInput"
);

input.value =
input.value.slice(0,-1);

}


function checkPassword(){

const input =
document.getElementById(
"passwordInput"
);

if(input.value === PASSWORD){

    Swal.fire({
        icon: 'success',
        title: 'Yay! ❤️',
        text: 'Password benar!',
        confirmButtonColor: '#ff4f87'
    }).then(() => {
        window.location.href = "dashboard.html";
    });

}else{

    Swal.fire({
        icon: 'error',
        title: 'Oops 😝',
        text: 'Password salah!',
        confirmButtonColor: '#ff4f87',
        background: '#fff5f8'
    });

    input.value = "";

}

}


// FLOATING HEARTS

setInterval(()=>{

const heart =
document.createElement("div");

heart.innerHTML="❤️";

heart.classList.add("heart");

heart.style.left=
Math.random()*100+"vw";

heart.style.fontSize=
Math.random()*15+10+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},1000);
