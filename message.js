const text = `

to my favorite person, kaisar ♡

happy 3rd mensive, sayang.

nggak kerasa ya, ternyata kita udah sampai di bulan ketiga. mungkin buat orang lain 3 bulan itu masih sebentar, tapi buat aku, 3 bulan ini berarti banget. makasih ya udah tetap ada, udah sabar sama semua sifat aku, dan udah selalu bikin hari-hari aku jadi lebih berwarna.

maaf kalau selama ini aku masih sering egois, ngambek karena hal-hal kecil, atau tanpa sadar bikin kamu capek. aku masih banyak kurangnya, tapi aku janji bakal terus belajar buat jadi pasangan yang lebih baik, karena aku nggak mau kehilangan orang sebaik kamu.

aku harap kita selalu dikasih kesempatan buat terus jalan bareng. semoga nanti masih ada mensive ke-4, ke-5, ke-12, bahkan sampai kita lupa udah berapa kali ngerayainnya. semoga apa yang kita punya hari ini bisa terus tumbuh, tetap saling menguatkan, dan bertahan selama mungkin.

makasih ya udah jadi rumah kedua buat aku. makasih udah hadir di hidup aku, udah nemenin aku, dan udah sayang sama aku sampai sejauh ini. jujur, aku bersyukur banget bisa kenal dan punya kamu.

i'm so lucky to have you.

happy 3rd mensive, my love.
thank you for choosing me every single day.

i love you, always. ♡
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
