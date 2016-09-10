function playtest() {

	sound1 = new Sound("Sound/piano/1.mp3");
	sound2 = new Sound("Sound/flute/2.mp3");
	sound3 = new Sound("Sound/electric_guitar/4.mp3");
	sound1.mediaGroup = 'a';
	sound2.mediaGroup = 'a';
	sound3.mediaGroup = 'a';
	sound1.play();
}