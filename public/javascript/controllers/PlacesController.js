// Generated by CoffeeScript 1.3.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['controllers/Controller', 'collections/PlacesCollection', 'views/PlaceItemView'], function(Controller, PlacesCollection, PlaceItemView) {
    var PlaceItemController, PlacesController;
    PlaceItemController = (function(_super) {

      __extends(PlaceItemController, _super);

      PlaceItemController.name = 'PlaceItemController';

      function PlaceItemController() {
        return PlaceItemController.__super__.constructor.apply(this, arguments);
      }

      PlaceItemController.prototype.className = 'place';

      PlaceItemController.prototype.tagName = 'li';

      PlaceItemController.prototype.events = {
        'click .vote': 'vote'
      };

      PlaceItemController.prototype.initialize = function() {
        return this.model.on('change:' + this.model.votesKey, this.render, this);
      };

      PlaceItemController.prototype.render = function() {
        this.html(PlaceItemView(this.model.toJSON()));
        return this;
      };

      PlaceItemController.prototype.vote = function() {
        return this.model.vote();
      };

      return PlaceItemController;

    })(Controller);
    return PlacesController = (function(_super) {

      __extends(PlacesController, _super);

      PlacesController.name = 'PlacesController';

      function PlacesController() {
        return PlacesController.__super__.constructor.apply(this, arguments);
      }

      PlacesController.prototype.className = 'places list';

      PlacesController.prototype.tagName = 'ul';

      PlacesController.prototype.initialize = function() {
        this.collection = new PlacesCollection;
        this.collection.on('reset', this.render, this);
        return this.collection.fetch();
      };

      PlacesController.prototype.render = function() {
        this.append('<h2>What are my options?</h2>');
        this.collection.each(function(place) {
          return this.append(new PlaceItemController({
            model: place
          }).render());
        }, this);
        return this;
      };

      PlacesController.prototype.findLocation = function() {
        if (!this.collection) {
          throw "No collection!";
        }
        return this.collection.select();
      };

      return PlacesController;

    })(Controller);
  });

}).call(this);
