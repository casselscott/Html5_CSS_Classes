document.addEventListener("DOMContentLoaded", function() {
    const audio = document.querySelector("audio");
    const video = document.querySelector("video");

    // Example of handling play event for audio
    audio.addEventListener("play", function() {
        console.log("Audio is playing");
    });

    // Example of handling play event for video
    video.addEventListener("play", function() {
        console.log("Video is playing");
    });

    // Example of handling pause event for audio
    audio.addEventListener("pause", function() {
        console.log("Audio is paused");
    });

    // Example of handling pause event for video
    video.addEventListener("pause", function() {
        console.log("Video is paused");
    });
});
