var order = 16;
for (var i = 0; i < order; i++) {
  $('.tone-matrix-table').append(sprintf('<tr id="r%s"></tr>', i));
  for (var j = 0; j < order; j++) {
    $('.r' + i).append(sprintf('<td id="r%sc%s" style="padding: 0px;"><img src="Square.png"></td>', i, j));
  }
}