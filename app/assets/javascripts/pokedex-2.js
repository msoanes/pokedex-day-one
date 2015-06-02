Pokedex.RootView.prototype.addToyToList = function (toy) {
  var $toyListItem = $('<li>').data('toy-id', toy.get('id'));
  $toyListItem.addClass('toy-list-item');
  $toyListItem.data('poke-id', toy.get('pokemon_id'));
  $toyListItem.append($('<p>').text('Name: ' + toy.get('name')));
  $toyListItem.append($('<p>').text('Happiness: ' + toy.get('happiness')));
  $toyListItem.append($('<p>').text('Price: ' + toy.get('price')));

  this.$pokeDetail.find('ul.toys').append($toyListItem);
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {
  var $toyDetail = $('<div>').addClass('detail');
  $toyDetail.append($('<img>').attr('src', toy.get('image_url')));
  var $detailList = $('<ul>');
  for (var key in toy.attributes) {
    $detailList.append($('<li>').text(key + ": " + toy.get(key)));
  }

  var $pokeSelect = $('<select>');
  $pokeSelect.data('poke-id', toy.get('pokemon_id')).data('toy-id', toy.id);
  this.pokes.each(function(poke) {
    var $option = $('<option>').val(poke.id).text(poke.get('name'));
    if (toy.get('pokemon_id') === poke.id) {
      $option.prop('selected', true);
    }
    $pokeSelect.append($option);
  });


  $toyDetail.append($detailList);
  $toyDetail.append($pokeSelect);
  this.$toyDetail.html($toyDetail);
};

Pokedex.RootView.prototype.selectToyFromList = function (event) {
  var toyId = $(event.currentTarget).data('toy-id');
  var pokeId = $(event.currentTarget).data('poke-id');
  var poke = this.pokes.get(pokeId);
  var toy = poke.toys().get(toyId);
  this.renderToyDetail(toy);
};
