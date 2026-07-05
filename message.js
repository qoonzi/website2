const text = `

i love you
`;

let index = 0;

function typeWriter(){

    if(index < text.length){

        document.getElementById("typed-text").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

function openLetter(){

    document.querySelector(".envelope-flap").style.display="none";

    document.querySelector(".letter-content").style.display="block";

    typeWriter();

}
