Pokedex.RootView.prototype.reassignToy = function (event) {
  var rootView = this;
  var $target = $(event.target);
  var poke = this.pokes.get($target.data('poke-id'));
  var toy = poke.toys().get($target.data('toy-id'));
  toy.set('pokemon_id', $target.val());
  toy.save({}, {
    success: function () {
      poke.toys().remove(toy);
      rootView.renderToysList(poke);
      rootView.$toyDetail.empty();
    }
  });
};

Pokedex.RootView.prototype.renderToysList = function (pokemon) {
  var toys = pokemon.toys();
  var rootView = this;
  this.$pokeDetail.find('.toys').remove();
  var $toyList = $('<ul>').addClass('toys');

  if (toys.length > 0){
    this.$pokeDetail.append($toyList);
  } else {
    this.$pokeDetail.append($('<p>').text('Nobody loves ' + pokemon.get('name')));
  }
  toys.each(function (toy) {
    rootView.addToyToList(toy);
  });
};
