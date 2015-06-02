Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var nameTag = $('<p>').text('Name: ' + pokemon.get('name'));
  var typeTag = $('<p>').text('Type: ' + pokemon.get('poke_type'));

  var $pokeData = $('<li>').append(nameTag, typeTag);
  $pokeData.addClass('poke-list-item');
  $pokeData.data('id', pokemon.get('id'));

  this.$pokeList.append($pokeData);
};

Pokedex.RootView.prototype.refreshPokemon = function () {
  var rootView = this;
  rootView.$pokeList.empty();
  rootView.pokes.fetch({
    success: function (resp) {
      resp.each(function (poke) {
        rootView.addPokemonToList(poke);
      });
    }
  });
};
