Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var rootView = this;
  var poke = new Pokedex.Models.Pokemon();
  poke.save(attrs, {
    success: function (resp) {
      rootView.pokes.add(poke);
      rootView.addPokemonToList(poke);
      callback(poke);
    }
  });
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  var $target = $(event.target);
  this.createPokemon(
    $target.serializeJSON()['pokemon'],
    this.renderPokemonDetail.bind(this)
  );
  event.target.reset();
};
