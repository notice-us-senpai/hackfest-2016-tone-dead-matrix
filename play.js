function play() {
	if (toPlay) {
		var sounds_at_curr_tick = sounds_to_play[tick];

		// If there is sounds to be played at the current tick
		if (sounds_at_curr_tick.length != 0) {
			var audio_at_curr_tick = [];

			for (var i = 0; i < sounds_at_curr_tick.length; i++) {
				audio_at_curr_tick[i] = new Audio(sounds_at_curr_tick[i]);
				audio_at_curr_tick[i].play();
			}


		}

		var square_selector_current;

		for (var row = 0; row < order; row++) {
			if (instruments[current_instrument].on_off_matrix[row][tick]) {
				square_selector_current = '#r' + row + 'c' + tick;
				$(square_selector_current).attr('src', mat_sq_img[2]);
			} else {
				square_selector_previous = '#r' + row + 'c' + tick;
				$(square_selector_previous).attr('src', mat_sq_img[3]);
			}
		}



		tick++;
		tick %= 16;
	}

	var previous_tick = (tick + 14) % 16;
	var square_selector_previous;

	for (var row = 0; row < order; row++) {
		if (instruments[current_instrument].on_off_matrix[row][previous_tick]) {
			square_selector_previous = '#r' + row + 'c' + previous_tick;
			$(square_selector_previous).attr('src', mat_sq_img[1]);
		} else {
			square_selector_previous = '#r' + row + 'c' + previous_tick;
			$(square_selector_previous).attr('src', mat_sq_img[0]);
		}
	}

	setTimeout(play, tickTime);
}
