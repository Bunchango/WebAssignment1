// RMIT University Vietnam
// Course: COSC2430 Web Programming
// Semester: 2023A
// Assessment: Assignment 1
// Author: Dong Manh Duc
// ID: 3978290
// Acknowledgement: https://www.youtube.com/watch?v=z3Y5gJWmVVU

let videoScroll = document.querySelectorAll(".video-scroll .small-video");
let mainVideo = document.querySelector(".main-video iframe");
let title = document.querySelector(".main-video .video-title")

videoScroll.forEach(video => {
    video.onclick = () => {
        videoScroll.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.children[0].getAttribute("src");
            mainVideo.src = src;
            let text = video.children[1].innerHTML;
            title.innerHTML = text;
        };
    };
});