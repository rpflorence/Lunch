// Generated by CoffeeScript 1.3.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  define(['use!backbone'], function(_arg) {
    var Controller, View;
    View = _arg.View;
    return Controller = (function(_super) {

      __extends(Controller, _super);

      Controller.name = 'Controller';

      function Controller() {
        return Controller.__super__.constructor.apply(this, arguments);
      }

      Controller.prototype.initialize = function() {
        return this.refreshElements();
      };

      /*
          Sets the html of this controller and refreshes
          the element shortcuts.
      */


      Controller.prototype.html = function(html) {
        this.$el.html(html);
        this.refreshElements();
        return this;
      };

      Controller.prototype.append = function(el) {
        return this.$el.append(this.getElement(el));
      };

      Controller.prototype.prepend = function(el) {
        this.$el.prepend(this.getElement(el));
        return this;
      };

      /*
          Utility method that renders and returns the element
          from a view or just returns the element if one is passed.
      */


      Controller.prototype.getElement = function(el) {
        return (el != null ? el.el : void 0) || el;
      };

      /*
          Takes the elements property if available and sets shortcuts
          on the view E.G.
      
            elements:
              name: '.name'
      
          you would be able to reference this.name as the element.
      */


      Controller.prototype.refreshElements = function() {
        var key, selector, _ref;
        if (this.elements != null) {
          _ref = this.elements;
          for (key in _ref) {
            selector = _ref[key];
            this[key] = this.$(selector);
          }
        }
        return this;
      };

      return Controller;

    })(View);
  });

}).call(this);
