function play() {
	for (var i = 0; i < sounds_to_play.length; i++) {
		var sounds_at_curr_tick = sounds_to_play[i];

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
		
		setTimeout(playSound(sounds_at_curr_tick[0]), tickLength);
	}
}

// Just choose any of the sounds to play to start playing them simultaneously
function playSound(sounds) {
	sounds.play();
}