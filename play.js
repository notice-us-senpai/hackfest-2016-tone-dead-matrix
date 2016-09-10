function play() {
	var sounds_at_curr_tick = sounds_to_play[tick];

	tick++;
	tick%=16;

	for (var k = 0; k < sounds_at_curr_tick; k++) {
		console.log(sounds_at_curr_tick[k]);
	}

	if (sounds_at_curr_tick.length != 0) {
		// No sound at this tick

		var audio_at_curr_tick = [];

		for (var i = 0; i < sounds_at_curr_tick.length; i++) {
			audio_at_curr_tick[i] = new Audio(sounds_at_curr_tick[i]);
		}

		for (var j = 0; j < sounds_at_curr_tick.length; j++) {
			audio_at_curr_tick[j].play();
		}
	}

	setTimeout(play,200);




}