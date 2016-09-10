function addSound(sound, tick) {
	var current_sounds = sounds_to_play[tick];  // Array of sounds to played at that particular tick
	current_sounds.push(sound);
	sounds_to_play[tick] = current_sounds;
}

function removeSound(sound, tick) {
	var current_sounds = sounds_to_play[tick];
	var foundIndex = current_sounds.indexOf(sound);
	if (foundIndex > -1) {
		current_sounds.splice(index, 1);
		sounds_to_play[tick] = current_sounds;
	} else {
		window.alert("Warning: sound not found");
	}
}