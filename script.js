const petals = document.getElementById("petals");

function createPetal(){

const flower = document.createElement("img");

flower.src="petal.jpg";

flower.className="petal";

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=
(4+Math.random()*5)+"s";

flower.style.width=
(20+Math.random()*30)+"px";

petals.appendChild(flower);

setTimeout(()=>{
flower.remove();
},9000);

}

setInterval(createPetal,250);

let gatePage = document.getElementById("gatePage");


document.querySelector(".groom").onclick = openGate;
document.querySelector(".bride").onclick = openGate;


function openGate(){

    document.querySelector(".page")
    .classList.add("hidden");

    gatePage.classList.remove("hidden");


    // تشغيل الأغنية
    document.getElementById("music").play();


    // فتح البوابة بعد وقت بسيط
    setTimeout(function(){

        document.getElementById("gateImage").src = "gateOpen.png";

    },1500);



// فتح الباب ثم بدء الزوم
setTimeout(function(){

    document.getElementById("gateImage").src = "gateOpen.png";

    setTimeout(function(){

        document.getElementById("gateImage")
        .classList.add("zoomGate");

    },1000);

},1500);

    // دخول صفحة الدعوة بعد انتهاء الزوم
    setTimeout(function(){

        gatePage.classList.add("hidden");

        document.getElementById("invitePage")
        .classList.remove("hidden");


    },5000);


}

const weddingDate = new Date("September 26, 2026 20:00:00").getTime();

setInterval(function(){

    const now = new Date().getTime();

    const distance = weddingDate - now;


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


},1000);

function openComment(){

    document.getElementById("invitePage")
    .classList.add("hidden");

    document.getElementById("commentPage")
    .classList.remove("hidden");

}

function sendComment(){

    let name = document.getElementById("guestName").value;

    let attendBox = document.querySelector('input[name="attend"]:checked');
    let attend = attendBox ? attendBox.value : "";

    let message = document.getElementById("message").value;

    fetch("https://script.google.com/macros/s/AKfycbxk3PF8ojhi-IRrFgXBg_S9xFLlM16ZUPsgg78dbs0gUynLDU00AamGetB77diZs0nIeA/exec", {
        method: "POST",
        body: JSON.stringify({
            name:name,
            attend:attend,
            message:message
        })
    })
    .then(() => {

    alert("Thank you");

    document.getElementById("commentPage")
    .classList.add("hidden");

    document.getElementById("invitePage")
    .classList.remove("hidden");

});
}