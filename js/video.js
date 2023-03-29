let video = document.querySelector('#player1');


//Initialize the video element and turn off autoplay and turn off looping
window.addEventListener("load", function() {
	video.load();
	console.log("Good job opening the window")
	video.autoplay = false;
	console.log("Autoplay is set to false")
	video.loop = false;
	console.log("loop is set to false")

});

//Play the video and update the volume information
document.querySelector('#play').addEventListener("click", function() {
	
	console.log("Play video")
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	video.play()

});

//pauses the video
document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause video")
	video.pause();
});

//Slow the current video speed by 10% each time the button is clicked and log the new speed to the console.
document.querySelector('#slower').addEventListener("click", function() {
	console.log("Slow down speed")
	video.playbackRate *= 0.9;
	console.log("speed is: " + video.playbackRate)
});

//Increase the current video speed each time the button is clicked and log the new speed to the console.  Change it by an amount proportional to the slow down. CHECK THIS!!  If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector('#faster').addEventListener("click", function() {
	console.log("speed up video")
	video.playbackRate /= 0.9;
	console.log("speed is: " + video.playbackRate)
});

//Advance the current video by 10 seconds.  If the video length has been exceeded go back to the start of the video - no farther.   Log the current location of the video.
document.querySelector('#skip').addEventListener("click", function() {
	console.log("skip ahead")
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("video current time is: " + video.currentTime)
});

//Mute/unmute the video and update the text in the button.
document.querySelector('#mute').addEventListener("click", function() {
	if (video.muted) {
		console.log("unmute")
		this.innerHTML = "Mute";
		video.muted = false;

	}
	else {
		console.log("mute")
		this.innerHTML = "Unmute";
		video.muted = true;
	}
});

//Change the volume based on the slider and update the volume information.
document.getElementById("slider").addEventListener("change", function(){ 
	video.volume =  document.getElementById("slider").value / 100;
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + '%';
	console.log("The current value is : " + video.volume)
});

//Utilize the existing oldSchool class on the video element
document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

//Remove the oldSchool class from the video.
document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

