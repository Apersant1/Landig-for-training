const progress = document.querySelector('.progress');


window.addEventListener('scroll', progressBar);



function progressBar(e) {
    let windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let per = windowScroll / windowHeight * 100;
    console.log(per);

    progress.style.width = per + "%";
}






