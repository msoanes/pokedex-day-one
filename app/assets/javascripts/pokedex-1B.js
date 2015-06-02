Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon) {
  var rootView = this;
  var $detailList = $('<ul>');
  for (var key in pokemon.attributes) {
    $detailList.append($('<li>').text(key + ": " + pokemon.get(key)));
  }

  pokemon.fetch( {
    success: function (response) {
      rootView.renderToysList(pokemon);
    }
  });

  var $pokeDetail = $('<div>').addClass('detail');
  $pokeDetail.append($('<img>').attr('src', pokemon.get('image_url')));
  $pokeDetail.append($detailList);
  this.$pokeDetail.html($pokeDetail);
  this.$toyDetail.empty();
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var id = $(event.currentTarget).data('id');
  var poke = this.pokes.get(id);
  this.renderPokemonDetail(poke);
};
