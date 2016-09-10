function play() {
	for (var i = 0; i < sounds_to_play.length; i++) {
		var sounds_at_curr_tick = sounds_to_play[i];

		for (var k = 0; k < sounds_at_curr_tick; k++) {
			console.log(sounds_at_curr_tick[k]);
		}

		if (sounds_at_curr_tick.length == 0) {
			// No sound at this tick
			continue;
		}

		sounds_at_curr_tick.map(function(sound_path) {
			// Get all audio objects and place them back into the array
			return new Audio(sound_path);
		});

		for (var j = 0; j < sounds_at_curr_tick.length; j++) {
			sounds_at_curr_tick[j].mediaGroup = 'currentSoundGroupTick_' + i;
			// All the sounds that is supposed to play at this tick is in the same mediaGroup
		}

		sounds_at_curr_tick[0].controller.play();
		window.setInterval(function() {}, 1000);
	}
}

// Just choose any of the sounds to play to start playing them simultaneously
function playSound(sounds) {
	sounds.play();
}