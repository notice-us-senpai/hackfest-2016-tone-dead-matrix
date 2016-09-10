function play() {
	for (var i = 0; i < sounds_to_play.length; i++) {
		var sounds_at_curr_tick = sounds_to_play[i];
		for (var i = 0; i < sounds_at_curr_tick.length; i++) {
			sounds_at_curr_tick[i].play();
		}
	}
}