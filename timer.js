addSound = function(sound, tick) {
  var current_sounds = sounds_to_play[tick];  // Array of sounds to played at that particular tick
  current_sounds.push(sound);
  sounds_to_play[tick] = current_sounds;
}

removeSound = function(sound, tick) {
	var current_sounds = sounds_to_play[tick];
	var foundIndex = current_sounds.indexOf(sound);
	if (foundIndex > -1) {
		current_sounds.splice(foundIndex, 1);
		sounds_to_play[tick] = current_sounds;
	} else {
		window.alert("Warning: Sound not found.");
	}
}