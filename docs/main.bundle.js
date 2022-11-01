/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 1413:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Materialize v1.0.0 (http://materializecss.com)
 * Copyright 2014-2017 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT */
(function (factory) {
  window.cash = factory();
})(function () {
  var doc = document,
      win = window,
      ArrayProto = Array.prototype,
      slice = ArrayProto.slice,
      filter = ArrayProto.filter,
      push = ArrayProto.push;

  var noop = function () {},
      isFunction = function (item) {
    // @see https://crbug.com/568448
    return typeof item === typeof noop && item.call;
  },
      isString = function (item) {
    return typeof item === typeof "";
  };

  var idMatch = /^#[\w-]*$/,
      classMatch = /^\.[\w-]*$/,
      htmlMatch = /<.+>/,
      singlet = /^\w+$/;

  function find(selector, context) {
    context = context || doc;
    var elems = classMatch.test(selector) ? context.getElementsByClassName(selector.slice(1)) : singlet.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector);
    return elems;
  }

  var frag;
  function parseHTML(str) {
    if (!frag) {
      frag = doc.implementation.createHTMLDocument(null);
      var base = frag.createElement("base");
      base.href = doc.location.href;
      frag.head.appendChild(base);
    }

    frag.body.innerHTML = str;

    return frag.body.childNodes;
  }

  function onReady(fn) {
    if (doc.readyState !== "loading") {
      fn();
    } else {
      doc.addEventListener("DOMContentLoaded", fn);
    }
  }

  function Init(selector, context) {
    if (!selector) {
      return this;
    }

    // If already a cash collection, don't do any further processing
    if (selector.cash && selector !== win) {
      return selector;
    }

    var elems = selector,
        i = 0,
        length;

    if (isString(selector)) {
      elems = idMatch.test(selector) ?
      // If an ID use the faster getElementById check
      doc.getElementById(selector.slice(1)) : htmlMatch.test(selector) ?
      // If HTML, parse it into real elements
      parseHTML(selector) :
      // else use `find`
      find(selector, context);

      // If function, use as shortcut for DOM ready
    } else if (isFunction(selector)) {
      onReady(selector);return this;
    }

    if (!elems) {
      return this;
    }

    // If a single DOM element is passed in or received via ID, return the single element
    if (elems.nodeType || elems === win) {
      this[0] = elems;
      this.length = 1;
    } else {
      // Treat like an array and loop through each item.
      length = this.length = elems.length;
      for (; i < length; i++) {
        this[i] = elems[i];
      }
    }

    return this;
  }

  function cash(selector, context) {
    return new Init(selector, context);
  }

  var fn = cash.fn = cash.prototype = Init.prototype = { // jshint ignore:line
    cash: true,
    length: 0,
    push: push,
    splice: ArrayProto.splice,
    map: ArrayProto.map,
    init: Init
  };

  Object.defineProperty(fn, "constructor", { value: cash });

  cash.parseHTML = parseHTML;
  cash.noop = noop;
  cash.isFunction = isFunction;
  cash.isString = isString;

  cash.extend = fn.extend = function (target) {
    target = target || {};

    var args = slice.call(arguments),
        length = args.length,
        i = 1;

    if (args.length === 1) {
      target = this;
      i = 0;
    }

    for (; i < length; i++) {
      if (!args[i]) {
        continue;
      }
      for (var key in args[i]) {
        if (args[i].hasOwnProperty(key)) {
          target[key] = args[i][key];
        }
      }
    }

    return target;
  };

  function each(collection, callback) {
    var l = collection.length,
        i = 0;

    for (; i < l; i++) {
      if (callback.call(collection[i], collection[i], i, collection) === false) {
        break;
      }
    }
  }

  function matches(el, selector) {
    var m = el && (el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);
    return !!m && m.call(el, selector);
  }

  function getCompareFunction(selector) {
    return (
      /* Use browser's `matches` function if string */
      isString(selector) ? matches :
      /* Match a cash element */
      selector.cash ? function (el) {
        return selector.is(el);
      } :
      /* Direct comparison */
      function (el, selector) {
        return el === selector;
      }
    );
  }

  function unique(collection) {
    return cash(slice.call(collection).filter(function (item, index, self) {
      return self.indexOf(item) === index;
    }));
  }

  cash.extend({
    merge: function (first, second) {
      var len = +second.length,
          i = first.length,
          j = 0;

      for (; j < len; i++, j++) {
        first[i] = second[j];
      }

      first.length = i;
      return first;
    },

    each: each,
    matches: matches,
    unique: unique,
    isArray: Array.isArray,
    isNumeric: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    }

  });

  var uid = cash.uid = "_cash" + Date.now();

  function getDataCache(node) {
    return node[uid] = node[uid] || {};
  }

  function setData(node, key, value) {
    return getDataCache(node)[key] = value;
  }

  function getData(node, key) {
    var c = getDataCache(node);
    if (c[key] === undefined) {
      c[key] = node.dataset ? node.dataset[key] : cash(node).attr("data-" + key);
    }
    return c[key];
  }

  function removeData(node, key) {
    var c = getDataCache(node);
    if (c) {
      delete c[key];
    } else if (node.dataset) {
      delete node.dataset[key];
    } else {
      cash(node).removeAttr("data-" + name);
    }
  }

  fn.extend({
    data: function (name, value) {
      if (isString(name)) {
        return value === undefined ? getData(this[0], name) : this.each(function (v) {
          return setData(v, name, value);
        });
      }

      for (var key in name) {
        this.data(key, name[key]);
      }

      return this;
    },

    removeData: function (key) {
      return this.each(function (v) {
        return removeData(v, key);
      });
    }

  });

  var notWhiteMatch = /\S+/g;

  function getClasses(c) {
    return isString(c) && c.match(notWhiteMatch);
  }

  function hasClass(v, c) {
    return v.classList ? v.classList.contains(c) : new RegExp("(^| )" + c + "( |$)", "gi").test(v.className);
  }

  function addClass(v, c, spacedName) {
    if (v.classList) {
      v.classList.add(c);
    } else if (spacedName.indexOf(" " + c + " ")) {
      v.className += " " + c;
    }
  }

  function removeClass(v, c) {
    if (v.classList) {
      v.classList.remove(c);
    } else {
      v.className = v.className.replace(c, "");
    }
  }

  fn.extend({
    addClass: function (c) {
      var classes = getClasses(c);

      return classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";
        each(classes, function (c) {
          addClass(v, c, spacedName);
        });
      }) : this;
    },

    attr: function (name, value) {
      if (!name) {
        return undefined;
      }

      if (isString(name)) {
        if (value === undefined) {
          return this[0] ? this[0].getAttribute ? this[0].getAttribute(name) : this[0][name] : undefined;
        }

        return this.each(function (v) {
          if (v.setAttribute) {
            v.setAttribute(name, value);
          } else {
            v[name] = value;
          }
        });
      }

      for (var key in name) {
        this.attr(key, name[key]);
      }

      return this;
    },

    hasClass: function (c) {
      var check = false,
          classes = getClasses(c);
      if (classes && classes.length) {
        this.each(function (v) {
          check = hasClass(v, classes[0]);
          return !check;
        });
      }
      return check;
    },

    prop: function (name, value) {
      if (isString(name)) {
        return value === undefined ? this[0][name] : this.each(function (v) {
          v[name] = value;
        });
      }

      for (var key in name) {
        this.prop(key, name[key]);
      }

      return this;
    },

    removeAttr: function (name) {
      return this.each(function (v) {
        if (v.removeAttribute) {
          v.removeAttribute(name);
        } else {
          delete v[name];
        }
      });
    },

    removeClass: function (c) {
      if (!arguments.length) {
        return this.attr("class", "");
      }
      var classes = getClasses(c);
      return classes ? this.each(function (v) {
        each(classes, function (c) {
          removeClass(v, c);
        });
      }) : this;
    },

    removeProp: function (name) {
      return this.each(function (v) {
        delete v[name];
      });
    },

    toggleClass: function (c, state) {
      if (state !== undefined) {
        return this[state ? "addClass" : "removeClass"](c);
      }
      var classes = getClasses(c);
      return classes ? this.each(function (v) {
        var spacedName = " " + v.className + " ";
        each(classes, function (c) {
          if (hasClass(v, c)) {
            removeClass(v, c);
          } else {
            addClass(v, c, spacedName);
          }
        });
      }) : this;
    } });

  fn.extend({
    add: function (selector, context) {
      return unique(cash.merge(this, cash(selector, context)));
    },

    each: function (callback) {
      each(this, callback);
      return this;
    },

    eq: function (index) {
      return cash(this.get(index));
    },

    filter: function (selector) {
      if (!selector) {
        return this;
      }

      var comparator = isFunction(selector) ? selector : getCompareFunction(selector);

      return cash(filter.call(this, function (e) {
        return comparator(e, selector);
      }));
    },

    first: function () {
      return this.eq(0);
    },

    get: function (index) {
      if (index === undefined) {
        return slice.call(this);
      }
      return index < 0 ? this[index + this.length] : this[index];
    },

    index: function (elem) {
      var child = elem ? cash(elem)[0] : this[0],
          collection = elem ? this : cash(child).parent().children();
      return slice.call(collection).indexOf(child);
    },

    last: function () {
      return this.eq(-1);
    }

  });

  var camelCase = function () {
    var camelRegex = /(?:^\w|[A-Z]|\b\w)/g,
        whiteSpace = /[\s-_]+/g;
    return function (str) {
      return str.replace(camelRegex, function (letter, index) {
        return letter[index === 0 ? "toLowerCase" : "toUpperCase"]();
      }).replace(whiteSpace, "");
    };
  }();

  var getPrefixedProp = function () {
    var cache = {},
        doc = document,
        div = doc.createElement("div"),
        style = div.style;

    return function (prop) {
      prop = camelCase(prop);
      if (cache[prop]) {
        return cache[prop];
      }

      var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
          prefixes = ["webkit", "moz", "ms", "o"],
          props = (prop + " " + prefixes.join(ucProp + " ") + ucProp).split(" ");

      each(props, function (p) {
        if (p in style) {
          cache[p] = prop = cache[prop] = p;
          return false;
        }
      });

      return cache[prop];
    };
  }();

  cash.prefixedProp = getPrefixedProp;
  cash.camelCase = camelCase;

  fn.extend({
    css: function (prop, value) {
      if (isString(prop)) {
        prop = getPrefixedProp(prop);
        return arguments.length > 1 ? this.each(function (v) {
          return v.style[prop] = value;
        }) : win.getComputedStyle(this[0])[prop];
      }

      for (var key in prop) {
        this.css(key, prop[key]);
      }

      return this;
    }

  });

  function compute(el, prop) {
    return parseInt(win.getComputedStyle(el[0], null)[prop], 10) || 0;
  }

  each(["Width", "Height"], function (v) {
    var lower = v.toLowerCase();

    fn[lower] = function () {
      return this[0].getBoundingClientRect()[lower];
    };

    fn["inner" + v] = function () {
      return this[0]["client" + v];
    };

    fn["outer" + v] = function (margins) {
      return this[0]["offset" + v] + (margins ? compute(this, "margin" + (v === "Width" ? "Left" : "Top")) + compute(this, "margin" + (v === "Width" ? "Right" : "Bottom")) : 0);
    };
  });

  function registerEvent(node, eventName, callback) {
    var eventCache = getData(node, "_cashEvents") || setData(node, "_cashEvents", {});
    eventCache[eventName] = eventCache[eventName] || [];
    eventCache[eventName].push(callback);
    node.addEventListener(eventName, callback);
  }

  function removeEvent(node, eventName, callback) {
    var events = getData(node, "_cashEvents"),
        eventCache = events && events[eventName],
        index;

    if (!eventCache) {
      return;
    }

    if (callback) {
      node.removeEventListener(eventName, callback);
      index = eventCache.indexOf(callback);
      if (index >= 0) {
        eventCache.splice(index, 1);
      }
    } else {
      each(eventCache, function (event) {
        node.removeEventListener(eventName, event);
      });
      eventCache = [];
    }
  }

  fn.extend({
    off: function (eventName, callback) {
      return this.each(function (v) {
        return removeEvent(v, eventName, callback);
      });
    },

    on: function (eventName, delegate, callback, runOnce) {
      // jshint ignore:line
      var originalCallback;
      if (!isString(eventName)) {
        for (var key in eventName) {
          this.on(key, delegate, eventName[key]);
        }
        return this;
      }

      if (isFunction(delegate)) {
        callback = delegate;
        delegate = null;
      }

      if (eventName === "ready") {
        onReady(callback);
        return this;
      }

      if (delegate) {
        originalCallback = callback;
        callback = function (e) {
          var t = e.target;
          while (!matches(t, delegate)) {
            if (t === this || t === null) {
              return t = false;
            }

            t = t.parentNode;
          }

          if (t) {
            originalCallback.call(t, e);
          }
        };
      }

      return this.each(function (v) {
        var finalCallback = callback;
        if (runOnce) {
          finalCallback = function () {
            callback.apply(this, arguments);
            removeEvent(v, eventName, finalCallback);
          };
        }
        registerEvent(v, eventName, finalCallback);
      });
    },

    one: function (eventName, delegate, callback) {
      return this.on(eventName, delegate, callback, true);
    },

    ready: onReady,

    /**
     * Modified
     * Triggers browser event
     * @param String eventName
     * @param Object data - Add properties to event object
     */
    trigger: function (eventName, data) {
      if (document.createEvent) {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent(eventName, true, false);
        evt = this.extend(evt, data);
        return this.each(function (v) {
          return v.dispatchEvent(evt);
        });
      }
    }

  });

  function encode(name, value) {
    return "&" + encodeURIComponent(name) + "=" + encodeURIComponent(value).replace(/%20/g, "+");
  }

  function getSelectMultiple_(el) {
    var values = [];
    each(el.options, function (o) {
      if (o.selected) {
        values.push(o.value);
      }
    });
    return values.length ? values : null;
  }

  function getSelectSingle_(el) {
    var selectedIndex = el.selectedIndex;
    return selectedIndex >= 0 ? el.options[selectedIndex].value : null;
  }

  function getValue(el) {
    var type = el.type;
    if (!type) {
      return null;
    }
    switch (type.toLowerCase()) {
      case "select-one":
        return getSelectSingle_(el);
      case "select-multiple":
        return getSelectMultiple_(el);
      case "radio":
        return el.checked ? el.value : null;
      case "checkbox":
        return el.checked ? el.value : null;
      default:
        return el.value ? el.value : null;
    }
  }

  fn.extend({
    serialize: function () {
      var query = "";

      each(this[0].elements || this, function (el) {
        if (el.disabled || el.tagName === "FIELDSET") {
          return;
        }
        var name = el.name;
        switch (el.type.toLowerCase()) {
          case "file":
          case "reset":
          case "submit":
          case "button":
            break;
          case "select-multiple":
            var values = getValue(el);
            if (values !== null) {
              each(values, function (value) {
                query += encode(name, value);
              });
            }
            break;
          default:
            var value = getValue(el);
            if (value !== null) {
              query += encode(name, value);
            }
        }
      });

      return query.substr(1);
    },

    val: function (value) {
      if (value === undefined) {
        return getValue(this[0]);
      }

      return this.each(function (v) {
        return v.value = value;
      });
    }

  });

  function insertElement(el, child, prepend) {
    if (prepend) {
      var first = el.childNodes[0];
      el.insertBefore(child, first);
    } else {
      el.appendChild(child);
    }
  }

  function insertContent(parent, child, prepend) {
    var str = isString(child);

    if (!str && child.length) {
      each(child, function (v) {
        return insertContent(parent, v, prepend);
      });
      return;
    }

    each(parent, str ? function (v) {
      return v.insertAdjacentHTML(prepend ? "afterbegin" : "beforeend", child);
    } : function (v, i) {
      return insertElement(v, i === 0 ? child : child.cloneNode(true), prepend);
    });
  }

  fn.extend({
    after: function (selector) {
      cash(selector).insertAfter(this);
      return this;
    },

    append: function (content) {
      insertContent(this, content);
      return this;
    },

    appendTo: function (parent) {
      insertContent(cash(parent), this);
      return this;
    },

    before: function (selector) {
      cash(selector).insertBefore(this);
      return this;
    },

    clone: function () {
      return cash(this.map(function (v) {
        return v.cloneNode(true);
      }));
    },

    empty: function () {
      this.html("");
      return this;
    },

    html: function (content) {
      if (content === undefined) {
        return this[0].innerHTML;
      }
      var source = content.nodeType ? content[0].outerHTML : content;
      return this.each(function (v) {
        return v.innerHTML = source;
      });
    },

    insertAfter: function (selector) {
      var _this = this;

      cash(selector).each(function (el, i) {
        var parent = el.parentNode,
            sibling = el.nextSibling;
        _this.each(function (v) {
          parent.insertBefore(i === 0 ? v : v.cloneNode(true), sibling);
        });
      });

      return this;
    },

    insertBefore: function (selector) {
      var _this2 = this;
      cash(selector).each(function (el, i) {
        var parent = el.parentNode;
        _this2.each(function (v) {
          parent.insertBefore(i === 0 ? v : v.cloneNode(true), el);
        });
      });
      return this;
    },

    prepend: function (content) {
      insertContent(this, content, true);
      return this;
    },

    prependTo: function (parent) {
      insertContent(cash(parent), this, true);
      return this;
    },

    remove: function () {
      return this.each(function (v) {
        if (!!v.parentNode) {
          return v.parentNode.removeChild(v);
        }
      });
    },

    text: function (content) {
      if (content === undefined) {
        return this[0].textContent;
      }
      return this.each(function (v) {
        return v.textContent = content;
      });
    }

  });

  var docEl = doc.documentElement;

  fn.extend({
    position: function () {
      var el = this[0];
      return {
        left: el.offsetLeft,
        top: el.offsetTop
      };
    },

    offset: function () {
      var rect = this[0].getBoundingClientRect();
      return {
        top: rect.top + win.pageYOffset - docEl.clientTop,
        left: rect.left + win.pageXOffset - docEl.clientLeft
      };
    },

    offsetParent: function () {
      return cash(this[0].offsetParent);
    }

  });

  fn.extend({
    children: function (selector) {
      var elems = [];
      this.each(function (el) {
        push.apply(elems, el.children);
      });
      elems = unique(elems);

      return !selector ? elems : elems.filter(function (v) {
        return matches(v, selector);
      });
    },

    closest: function (selector) {
      if (!selector || this.length < 1) {
        return cash();
      }
      if (this.is(selector)) {
        return this.filter(selector);
      }
      return this.parent().closest(selector);
    },

    is: function (selector) {
      if (!selector) {
        return false;
      }

      var match = false,
          comparator = getCompareFunction(selector);

      this.each(function (el) {
        match = comparator(el, selector);
        return !match;
      });

      return match;
    },

    find: function (selector) {
      if (!selector || selector.nodeType) {
        return cash(selector && this.has(selector).length ? selector : null);
      }

      var elems = [];
      this.each(function (el) {
        push.apply(elems, find(selector, el));
      });

      return unique(elems);
    },

    has: function (selector) {
      var comparator = isString(selector) ? function (el) {
        return find(selector, el).length !== 0;
      } : function (el) {
        return el.contains(selector);
      };

      return this.filter(comparator);
    },

    next: function () {
      return cash(this[0].nextElementSibling);
    },

    not: function (selector) {
      if (!selector) {
        return this;
      }

      var comparator = getCompareFunction(selector);

      return this.filter(function (el) {
        return !comparator(el, selector);
      });
    },

    parent: function () {
      var result = [];

      this.each(function (item) {
        if (item && item.parentNode) {
          result.push(item.parentNode);
        }
      });

      return unique(result);
    },

    parents: function (selector) {
      var last,
          result = [];

      this.each(function (item) {
        last = item;

        while (last && last.parentNode && last !== doc.body.parentNode) {
          last = last.parentNode;

          if (!selector || selector && matches(last, selector)) {
            result.push(last);
          }
        }
      });

      return unique(result);
    },

    prev: function () {
      return cash(this[0].previousElementSibling);
    },

    siblings: function (selector) {
      var collection = this.parent().children(selector),
          el = this[0];

      return collection.filter(function (i) {
        return i !== el;
      });
    }

  });

  return cash;
});
;
var Component = function () {
  /**
   * Generic constructor for all components
   * @constructor
   * @param {Element} el
   * @param {Object} options
   */
  function Component(classDef, el, options) {
    _classCallCheck(this, Component);

    // Display error if el is valid HTML Element
    if (!(el instanceof Element)) {
      console.error(Error(el + ' is not an HTML Element'));
    }

    // If exists, destroy and reinitialize in child
    var ins = classDef.getInstance(el);
    if (!!ins) {
      ins.destroy();
    }

    this.el = el;
    this.$el = cash(el);
  }

  /**
   * Initializes components
   * @param {class} classDef
   * @param {Element | NodeList | jQuery} els
   * @param {Object} options
   */


  _createClass(Component, null, [{
    key: "init",
    value: function init(classDef, els, options) {
      var instances = null;
      if (els instanceof Element) {
        instances = new classDef(els, options);
      } else if (!!els && (els.jquery || els.cash || els instanceof NodeList)) {
        var instancesArr = [];
        for (var i = 0; i < els.length; i++) {
          instancesArr.push(new classDef(els[i], options));
        }
        instances = instancesArr;
      }

      return instances;
    }
  }]);

  return Component;
}();

; // Required for Meteor package, the use of window prevents export by Meteor
(function (window) {
  if (window.Package) {
    M = {};
  } else {
    window.M = {};
  }

  // Check for jQuery
  M.jQueryLoaded = !!window.jQuery;
})(window);

// AMD
if (true) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return M;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Common JS
} else {}

M.version = '1.0.0';

M.keys = {
  TAB: 9,
  ENTER: 13,
  ESC: 27,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};

/**
 * TabPress Keydown handler
 */
M.tabPressed = false;
M.keyDown = false;
var docHandleKeydown = function (e) {
  M.keyDown = true;
  if (e.which === M.keys.TAB || e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) {
    M.tabPressed = true;
  }
};
var docHandleKeyup = function (e) {
  M.keyDown = false;
  if (e.which === M.keys.TAB || e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) {
    M.tabPressed = false;
  }
};
var docHandleFocus = function (e) {
  if (M.keyDown) {
    document.body.classList.add('keyboard-focused');
  }
};
var docHandleBlur = function (e) {
  document.body.classList.remove('keyboard-focused');
};
document.addEventListener('keydown', docHandleKeydown, true);
document.addEventListener('keyup', docHandleKeyup, true);
document.addEventListener('focus', docHandleFocus, true);
document.addEventListener('blur', docHandleBlur, true);

/**
 * Initialize jQuery wrapper for plugin
 * @param {Class} plugin  javascript class
 * @param {string} pluginName  jQuery plugin name
 * @param {string} classRef  Class reference name
 */
M.initializeJqueryWrapper = function (plugin, pluginName, classRef) {
  jQuery.fn[pluginName] = function (methodOrOptions) {
    // Call plugin method if valid method name is passed in
    if (plugin.prototype[methodOrOptions]) {
      var params = Array.prototype.slice.call(arguments, 1);

      // Getter methods
      if (methodOrOptions.slice(0, 3) === 'get') {
        var instance = this.first()[0][classRef];
        return instance[methodOrOptions].apply(instance, params);
      }

      // Void methods
      return this.each(function () {
        var instance = this[classRef];
        instance[methodOrOptions].apply(instance, params);
      });

      // Initialize plugin if options or no argument is passed in
    } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
      plugin.init(this, arguments[0]);
      return this;
    }

    // Return error if an unrecognized  method name is passed in
    jQuery.error("Method " + methodOrOptions + " does not exist on jQuery." + pluginName);
  };
};

/**
 * Automatically initialize components
 * @param {Element} context  DOM Element to search within for components
 */
M.AutoInit = function (context) {
  // Use document.body if no context is given
  var root = !!context ? context : document.body;

  var registry = {
    Autocomplete: root.querySelectorAll('.autocomplete:not(.no-autoinit)'),
    Carousel: root.querySelectorAll('.carousel:not(.no-autoinit)'),
    Chips: root.querySelectorAll('.chips:not(.no-autoinit)'),
    Collapsible: root.querySelectorAll('.collapsible:not(.no-autoinit)'),
    Datepicker: root.querySelectorAll('.datepicker:not(.no-autoinit)'),
    Dropdown: root.querySelectorAll('.dropdown-trigger:not(.no-autoinit)'),
    Materialbox: root.querySelectorAll('.materialboxed:not(.no-autoinit)'),
    Modal: root.querySelectorAll('.modal:not(.no-autoinit)'),
    Parallax: root.querySelectorAll('.parallax:not(.no-autoinit)'),
    Pushpin: root.querySelectorAll('.pushpin:not(.no-autoinit)'),
    ScrollSpy: root.querySelectorAll('.scrollspy:not(.no-autoinit)'),
    FormSelect: root.querySelectorAll('select:not(.no-autoinit)'),
    Sidenav: root.querySelectorAll('.sidenav:not(.no-autoinit)'),
    Tabs: root.querySelectorAll('.tabs:not(.no-autoinit)'),
    TapTarget: root.querySelectorAll('.tap-target:not(.no-autoinit)'),
    Timepicker: root.querySelectorAll('.timepicker:not(.no-autoinit)'),
    Tooltip: root.querySelectorAll('.tooltipped:not(.no-autoinit)'),
    FloatingActionButton: root.querySelectorAll('.fixed-action-btn:not(.no-autoinit)')
  };

  for (var pluginName in registry) {
    var plugin = M[pluginName];
    plugin.init(registry[pluginName]);
  }
};

/**
 * Generate approximated selector string for a jQuery object
 * @param {jQuery} obj  jQuery object to be parsed
 * @returns {string}
 */
M.objectSelectorString = function (obj) {
  var tagStr = obj.prop('tagName') || '';
  var idStr = obj.attr('id') || '';
  var classStr = obj.attr('class') || '';
  return (tagStr + idStr + classStr).replace(/\s/g, '');
};

// Unique Random ID
M.guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };
}();

/**
 * Escapes hash from special characters
 * @param {string} hash  String returned from this.hash
 * @returns {string}
 */
M.escapeHash = function (hash) {
  return hash.replace(/(:|\.|\[|\]|,|=|\/)/g, '\\$1');
};

M.elementOrParentIsFixed = function (element) {
  var $element = $(element);
  var $checkElements = $element.add($element.parents());
  var isFixed = false;
  $checkElements.each(function () {
    if ($(this).css('position') === 'fixed') {
      isFixed = true;
      return false;
    }
  });
  return isFixed;
};

/**
 * @typedef {Object} Edges
 * @property {Boolean} top  If the top edge was exceeded
 * @property {Boolean} right  If the right edge was exceeded
 * @property {Boolean} bottom  If the bottom edge was exceeded
 * @property {Boolean} left  If the left edge was exceeded
 */

/**
 * @typedef {Object} Bounding
 * @property {Number} left  left offset coordinate
 * @property {Number} top  top offset coordinate
 * @property {Number} width
 * @property {Number} height
 */

/**
 * Escapes hash from special characters
 * @param {Element} container  Container element that acts as the boundary
 * @param {Bounding} bounding  element bounding that is being checked
 * @param {Number} offset  offset from edge that counts as exceeding
 * @returns {Edges}
 */
M.checkWithinContainer = function (container, bounding, offset) {
  var edges = {
    top: false,
    right: false,
    bottom: false,
    left: false
  };

  var containerRect = container.getBoundingClientRect();
  // If body element is smaller than viewport, use viewport height instead.
  var containerBottom = container === document.body ? Math.max(containerRect.bottom, window.innerHeight) : containerRect.bottom;

  var scrollLeft = container.scrollLeft;
  var scrollTop = container.scrollTop;

  var scrolledX = bounding.left - scrollLeft;
  var scrolledY = bounding.top - scrollTop;

  // Check for container and viewport for each edge
  if (scrolledX < containerRect.left + offset || scrolledX < offset) {
    edges.left = true;
  }

  if (scrolledX + bounding.width > containerRect.right - offset || scrolledX + bounding.width > window.innerWidth - offset) {
    edges.right = true;
  }

  if (scrolledY < containerRect.top + offset || scrolledY < offset) {
    edges.top = true;
  }

  if (scrolledY + bounding.height > containerBottom - offset || scrolledY + bounding.height > window.innerHeight - offset) {
    edges.bottom = true;
  }

  return edges;
};

M.checkPossibleAlignments = function (el, container, bounding, offset) {
  var canAlign = {
    top: true,
    right: true,
    bottom: true,
    left: true,
    spaceOnTop: null,
    spaceOnRight: null,
    spaceOnBottom: null,
    spaceOnLeft: null
  };

  var containerAllowsOverflow = getComputedStyle(container).overflow === 'visible';
  var containerRect = container.getBoundingClientRect();
  var containerHeight = Math.min(containerRect.height, window.innerHeight);
  var containerWidth = Math.min(containerRect.width, window.innerWidth);
  var elOffsetRect = el.getBoundingClientRect();

  var scrollLeft = container.scrollLeft;
  var scrollTop = container.scrollTop;

  var scrolledX = bounding.left - scrollLeft;
  var scrolledYTopEdge = bounding.top - scrollTop;
  var scrolledYBottomEdge = bounding.top + elOffsetRect.height - scrollTop;

  // Check for container and viewport for left
  canAlign.spaceOnRight = !containerAllowsOverflow ? containerWidth - (scrolledX + bounding.width) : window.innerWidth - (elOffsetRect.left + bounding.width);
  if (canAlign.spaceOnRight < 0) {
    canAlign.left = false;
  }

  // Check for container and viewport for Right
  canAlign.spaceOnLeft = !containerAllowsOverflow ? scrolledX - bounding.width + elOffsetRect.width : elOffsetRect.right - bounding.width;
  if (canAlign.spaceOnLeft < 0) {
    canAlign.right = false;
  }

  // Check for container and viewport for Top
  canAlign.spaceOnBottom = !containerAllowsOverflow ? containerHeight - (scrolledYTopEdge + bounding.height + offset) : window.innerHeight - (elOffsetRect.top + bounding.height + offset);
  if (canAlign.spaceOnBottom < 0) {
    canAlign.top = false;
  }

  // Check for container and viewport for Bottom
  canAlign.spaceOnTop = !containerAllowsOverflow ? scrolledYBottomEdge - (bounding.height - offset) : elOffsetRect.bottom - (bounding.height + offset);
  if (canAlign.spaceOnTop < 0) {
    canAlign.bottom = false;
  }

  return canAlign;
};

M.getOverflowParent = function (element) {
  if (element == null) {
    return null;
  }

  if (element === document.body || getComputedStyle(element).overflow !== 'visible') {
    return element;
  }

  return M.getOverflowParent(element.parentElement);
};

/**
 * Gets id of component from a trigger
 * @param {Element} trigger  trigger
 * @returns {string}
 */
M.getIdFromTrigger = function (trigger) {
  var id = trigger.getAttribute('data-target');
  if (!id) {
    id = trigger.getAttribute('href');
    if (id) {
      id = id.slice(1);
    } else {
      id = '';
    }
  }
  return id;
};

/**
 * Multi browser support for document scroll top
 * @returns {Number}
 */
M.getDocumentScrollTop = function () {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};

/**
 * Multi browser support for document scroll left
 * @returns {Number}
 */
M.getDocumentScrollLeft = function () {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};

/**
 * @typedef {Object} Edges
 * @property {Boolean} top  If the top edge was exceeded
 * @property {Boolean} right  If the right edge was exceeded
 * @property {Boolean} bottom  If the bottom edge was exceeded
 * @property {Boolean} left  If the left edge was exceeded
 */

/**
 * @typedef {Object} Bounding
 * @property {Number} left  left offset coordinate
 * @property {Number} top  top offset coordinate
 * @property {Number} width
 * @property {Number} height
 */

/**
 * Get time in ms
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @type {function}
 * @return {number}
 */
var getTime = Date.now || function () {
  return new Date().getTime();
};

/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time. Normally, the throttled function will run
 * as much as it can, without ever going more than once per `wait` duration;
 * but if you'd like to disable the execution on the leading edge, pass
 * `{leading: false}`. To disable execution on the trailing edge, ditto.
 * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
 * @param {function} func
 * @param {number} wait
 * @param {Object=} options
 * @returns {Function}
 */
M.throttle = function (func, wait, options) {
  var context = void 0,
      args = void 0,
      result = void 0;
  var timeout = null;
  var previous = 0;
  options || (options = {});
  var later = function () {
    previous = options.leading === false ? 0 : getTime();
    timeout = null;
    result = func.apply(context, args);
    context = args = null;
  };
  return function () {
    var now = getTime();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};
; /*
  v2.2.0
  2017 Julian Garnier
  Released under the MIT license
  */
var $jscomp = { scope: {} };$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, r, p) {
  if (p.get || p.set) throw new TypeError("ES3 does not support getters and setters.");e != Array.prototype && e != Object.prototype && (e[r] = p.value);
};$jscomp.getGlobal = function (e) {
  return "undefined" != typeof window && window === e ? e : "undefined" != typeof __webpack_require__.g && null != __webpack_require__.g ? __webpack_require__.g : e;
};$jscomp.global = $jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {};$jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};$jscomp.symbolCounter_ = 0;$jscomp.Symbol = function (e) {
  return $jscomp.SYMBOL_PREFIX + (e || "") + $jscomp.symbolCounter_++;
};
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol();var e = $jscomp.global.Symbol.iterator;e || (e = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));"function" != typeof Array.prototype[e] && $jscomp.defineProperty(Array.prototype, e, { configurable: !0, writable: !0, value: function () {
      return $jscomp.arrayIterator(this);
    } });$jscomp.initSymbolIterator = function () {};
};$jscomp.arrayIterator = function (e) {
  var r = 0;return $jscomp.iteratorPrototype(function () {
    return r < e.length ? { done: !1, value: e[r++] } : { done: !0 };
  });
};
$jscomp.iteratorPrototype = function (e) {
  $jscomp.initSymbolIterator();e = { next: e };e[$jscomp.global.Symbol.iterator] = function () {
    return this;
  };return e;
};$jscomp.array = $jscomp.array || {};$jscomp.iteratorFromArray = function (e, r) {
  $jscomp.initSymbolIterator();e instanceof String && (e += "");var p = 0,
      m = { next: function () {
      if (p < e.length) {
        var u = p++;return { value: r(u, e[u]), done: !1 };
      }m.next = function () {
        return { done: !0, value: void 0 };
      };return m.next();
    } };m[Symbol.iterator] = function () {
    return m;
  };return m;
};
$jscomp.polyfill = function (e, r, p, m) {
  if (r) {
    p = $jscomp.global;e = e.split(".");for (m = 0; m < e.length - 1; m++) {
      var u = e[m];u in p || (p[u] = {});p = p[u];
    }e = e[e.length - 1];m = p[e];r = r(m);r != m && null != r && $jscomp.defineProperty(p, e, { configurable: !0, writable: !0, value: r });
  }
};$jscomp.polyfill("Array.prototype.keys", function (e) {
  return e ? e : function () {
    return $jscomp.iteratorFromArray(this, function (e) {
      return e;
    });
  };
}, "es6-impl", "es3");var $jscomp$this = this;
(function (r) {
  M.anime = r();
})(function () {
  function e(a) {
    if (!h.col(a)) try {
      return document.querySelectorAll(a);
    } catch (c) {}
  }function r(a, c) {
    for (var d = a.length, b = 2 <= arguments.length ? arguments[1] : void 0, f = [], n = 0; n < d; n++) {
      if (n in a) {
        var k = a[n];c.call(b, k, n, a) && f.push(k);
      }
    }return f;
  }function p(a) {
    return a.reduce(function (a, d) {
      return a.concat(h.arr(d) ? p(d) : d);
    }, []);
  }function m(a) {
    if (h.arr(a)) return a;
    h.str(a) && (a = e(a) || a);return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a];
  }function u(a, c) {
    return a.some(function (a) {
      return a === c;
    });
  }function C(a) {
    var c = {},
        d;for (d in a) {
      c[d] = a[d];
    }return c;
  }function D(a, c) {
    var d = C(a),
        b;for (b in a) {
      d[b] = c.hasOwnProperty(b) ? c[b] : a[b];
    }return d;
  }function z(a, c) {
    var d = C(a),
        b;for (b in c) {
      d[b] = h.und(a[b]) ? c[b] : a[b];
    }return d;
  }function T(a) {
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, c, d, k) {
      return c + c + d + d + k + k;
    });var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
    a = parseInt(c[1], 16);var d = parseInt(c[2], 16),
        c = parseInt(c[3], 16);return "rgba(" + a + "," + d + "," + c + ",1)";
  }function U(a) {
    function c(a, c, b) {
      0 > b && (b += 1);1 < b && --b;return b < 1 / 6 ? a + 6 * (c - a) * b : .5 > b ? c : b < 2 / 3 ? a + (c - a) * (2 / 3 - b) * 6 : a;
    }var d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a = parseInt(d[1]) / 360;var b = parseInt(d[2]) / 100,
        f = parseInt(d[3]) / 100,
        d = d[4] || 1;if (0 == b) f = b = a = f;else {
      var n = .5 > f ? f * (1 + b) : f + b - f * b,
          k = 2 * f - n,
          f = c(k, n, a + 1 / 3),
          b = c(k, n, a);a = c(k, n, a - 1 / 3);
    }return "rgba(" + 255 * f + "," + 255 * b + "," + 255 * a + "," + d + ")";
  }function y(a) {
    if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a)) return a[2];
  }function V(a) {
    if (-1 < a.indexOf("translate") || "perspective" === a) return "px";if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew")) return "deg";
  }function I(a, c) {
    return h.fnc(a) ? a(c.target, c.id, c.total) : a;
  }function E(a, c) {
    if (c in a.style) return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
  }function J(a, c) {
    if (h.dom(a) && u(W, c)) return "transform";if (h.dom(a) && (a.getAttribute(c) || h.svg(a) && a[c])) return "attribute";if (h.dom(a) && "transform" !== c && E(a, c)) return "css";if (null != a[c]) return "object";
  }function X(a, c) {
    var d = V(c),
        d = -1 < c.indexOf("scale") ? 1 : 0 + d;a = a.style.transform;if (!a) return d;for (var b = [], f = [], n = [], k = /(\w+)\((.+?)\)/g; b = k.exec(a);) {
      f.push(b[1]), n.push(b[2]);
    }a = r(n, function (a, b) {
      return f[b] === c;
    });return a.length ? a[0] : d;
  }function K(a, c) {
    switch (J(a, c)) {case "transform":
        return X(a, c);case "css":
        return E(a, c);case "attribute":
        return a.getAttribute(c);}return a[c] || 0;
  }function L(a, c) {
    var d = /^(\*=|\+=|-=)/.exec(a);if (!d) return a;var b = y(a) || 0;c = parseFloat(c);a = parseFloat(a.replace(d[0], ""));switch (d[0][0]) {case "+":
        return c + a + b;case "-":
        return c - a + b;case "*":
        return c * a + b;}
  }function F(a, c) {
    return Math.sqrt(Math.pow(c.x - a.x, 2) + Math.pow(c.y - a.y, 2));
  }function M(a) {
    a = a.points;for (var c = 0, d, b = 0; b < a.numberOfItems; b++) {
      var f = a.getItem(b);0 < b && (c += F(d, f));d = f;
    }return c;
  }function N(a) {
    if (a.getTotalLength) return a.getTotalLength();switch (a.tagName.toLowerCase()) {case "circle":
        return 2 * Math.PI * a.getAttribute("r");case "rect":
        return 2 * a.getAttribute("width") + 2 * a.getAttribute("height");case "line":
        return F({ x: a.getAttribute("x1"), y: a.getAttribute("y1") }, { x: a.getAttribute("x2"), y: a.getAttribute("y2") });case "polyline":
        return M(a);case "polygon":
        var c = a.points;return M(a) + F(c.getItem(c.numberOfItems - 1), c.getItem(0));}
  }function Y(a, c) {
    function d(b) {
      b = void 0 === b ? 0 : b;return a.el.getPointAtLength(1 <= c + b ? c + b : 0);
    }var b = d(),
        f = d(-1),
        n = d(1);switch (a.property) {case "x":
        return b.x;case "y":
        return b.y;
      case "angle":
        return 180 * Math.atan2(n.y - f.y, n.x - f.x) / Math.PI;}
  }function O(a, c) {
    var d = /-?\d*\.?\d+/g,
        b;b = h.pth(a) ? a.totalLength : a;if (h.col(b)) {
      if (h.rgb(b)) {
        var f = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b = f ? "rgba(" + f[1] + ",1)" : b;
      } else b = h.hex(b) ? T(b) : h.hsl(b) ? U(b) : void 0;
    } else f = (f = y(b)) ? b.substr(0, b.length - f.length) : b, b = c && !/\s/g.test(b) ? f + c : f;b += "";return { original: b, numbers: b.match(d) ? b.match(d).map(Number) : [0], strings: h.str(a) || c ? b.split(d) : [] };
  }function P(a) {
    a = a ? p(h.arr(a) ? a.map(m) : m(a)) : [];return r(a, function (a, d, b) {
      return b.indexOf(a) === d;
    });
  }function Z(a) {
    var c = P(a);return c.map(function (a, b) {
      return { target: a, id: b, total: c.length };
    });
  }function aa(a, c) {
    var d = C(c);if (h.arr(a)) {
      var b = a.length;2 !== b || h.obj(a[0]) ? h.fnc(c.duration) || (d.duration = c.duration / b) : a = { value: a };
    }return m(a).map(function (a, b) {
      b = b ? 0 : c.delay;a = h.obj(a) && !h.pth(a) ? a : { value: a };h.und(a.delay) && (a.delay = b);return a;
    }).map(function (a) {
      return z(a, d);
    });
  }function ba(a, c) {
    var d = {},
        b;for (b in a) {
      var f = I(a[b], c);h.arr(f) && (f = f.map(function (a) {
        return I(a, c);
      }), 1 === f.length && (f = f[0]));d[b] = f;
    }d.duration = parseFloat(d.duration);d.delay = parseFloat(d.delay);return d;
  }function ca(a) {
    return h.arr(a) ? A.apply(this, a) : Q[a];
  }function da(a, c) {
    var d;return a.tweens.map(function (b) {
      b = ba(b, c);var f = b.value,
          e = K(c.target, a.name),
          k = d ? d.to.original : e,
          k = h.arr(f) ? f[0] : k,
          w = L(h.arr(f) ? f[1] : f, k),
          e = y(w) || y(k) || y(e);b.from = O(k, e);b.to = O(w, e);b.start = d ? d.end : a.offset;b.end = b.start + b.delay + b.duration;b.easing = ca(b.easing);b.elasticity = (1E3 - Math.min(Math.max(b.elasticity, 1), 999)) / 1E3;b.isPath = h.pth(f);b.isColor = h.col(b.from.original);b.isColor && (b.round = 1);return d = b;
    });
  }function ea(a, c) {
    return r(p(a.map(function (a) {
      return c.map(function (b) {
        var c = J(a.target, b.name);if (c) {
          var d = da(b, a);b = { type: c, property: b.name, animatable: a, tweens: d, duration: d[d.length - 1].end, delay: d[0].delay };
        } else b = void 0;return b;
      });
    })), function (a) {
      return !h.und(a);
    });
  }function R(a, c, d, b) {
    var f = "delay" === a;return c.length ? (f ? Math.min : Math.max).apply(Math, c.map(function (b) {
      return b[a];
    })) : f ? b.delay : d.offset + b.delay + b.duration;
  }function fa(a) {
    var c = D(ga, a),
        d = D(S, a),
        b = Z(a.targets),
        f = [],
        e = z(c, d),
        k;for (k in a) {
      e.hasOwnProperty(k) || "targets" === k || f.push({ name: k, offset: e.offset, tweens: aa(a[k], d) });
    }a = ea(b, f);return z(c, { children: [], animatables: b, animations: a, duration: R("duration", a, c, d), delay: R("delay", a, c, d) });
  }function q(a) {
    function c() {
      return window.Promise && new Promise(function (a) {
        return p = a;
      });
    }function d(a) {
      return g.reversed ? g.duration - a : a;
    }function b(a) {
      for (var b = 0, c = {}, d = g.animations, f = d.length; b < f;) {
        var e = d[b],
            k = e.animatable,
            h = e.tweens,
            n = h.length - 1,
            l = h[n];n && (l = r(h, function (b) {
          return a < b.end;
        })[0] || l);for (var h = Math.min(Math.max(a - l.start - l.delay, 0), l.duration) / l.duration, w = isNaN(h) ? 1 : l.easing(h, l.elasticity), h = l.to.strings, p = l.round, n = [], m = void 0, m = l.to.numbers.length, t = 0; t < m; t++) {
          var x = void 0,
              x = l.to.numbers[t],
              q = l.from.numbers[t],
              x = l.isPath ? Y(l.value, w * x) : q + w * (x - q);p && (l.isColor && 2 < t || (x = Math.round(x * p) / p));n.push(x);
        }if (l = h.length) for (m = h[0], w = 0; w < l; w++) {
          p = h[w + 1], t = n[w], isNaN(t) || (m = p ? m + (t + p) : m + (t + " "));
        } else m = n[0];ha[e.type](k.target, e.property, m, c, k.id);e.currentValue = m;b++;
      }if (b = Object.keys(c).length) for (d = 0; d < b; d++) {
        H || (H = E(document.body, "transform") ? "transform" : "-webkit-transform"), g.animatables[d].target.style[H] = c[d].join(" ");
      }g.currentTime = a;g.progress = a / g.duration * 100;
    }function f(a) {
      if (g[a]) g[a](g);
    }function e() {
      g.remaining && !0 !== g.remaining && g.remaining--;
    }function k(a) {
      var k = g.duration,
          n = g.offset,
          w = n + g.delay,
          r = g.currentTime,
          x = g.reversed,
          q = d(a);if (g.children.length) {
        var u = g.children,
            v = u.length;
        if (q >= g.currentTime) for (var G = 0; G < v; G++) {
          u[G].seek(q);
        } else for (; v--;) {
          u[v].seek(q);
        }
      }if (q >= w || !k) g.began || (g.began = !0, f("begin")), f("run");if (q > n && q < k) b(q);else if (q <= n && 0 !== r && (b(0), x && e()), q >= k && r !== k || !k) b(k), x || e();f("update");a >= k && (g.remaining ? (t = h, "alternate" === g.direction && (g.reversed = !g.reversed)) : (g.pause(), g.completed || (g.completed = !0, f("complete"), "Promise" in window && (p(), m = c()))), l = 0);
    }a = void 0 === a ? {} : a;var h,
        t,
        l = 0,
        p = null,
        m = c(),
        g = fa(a);g.reset = function () {
      var a = g.direction,
          c = g.loop;g.currentTime = 0;g.progress = 0;g.paused = !0;g.began = !1;g.completed = !1;g.reversed = "reverse" === a;g.remaining = "alternate" === a && 1 === c ? 2 : c;b(0);for (a = g.children.length; a--;) {
        g.children[a].reset();
      }
    };g.tick = function (a) {
      h = a;t || (t = h);k((l + h - t) * q.speed);
    };g.seek = function (a) {
      k(d(a));
    };g.pause = function () {
      var a = v.indexOf(g);-1 < a && v.splice(a, 1);g.paused = !0;
    };g.play = function () {
      g.paused && (g.paused = !1, t = 0, l = d(g.currentTime), v.push(g), B || ia());
    };g.reverse = function () {
      g.reversed = !g.reversed;t = 0;l = d(g.currentTime);
    };g.restart = function () {
      g.pause();
      g.reset();g.play();
    };g.finished = m;g.reset();g.autoplay && g.play();return g;
  }var ga = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: !0, offset: 0 },
      S = { duration: 1E3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 },
      W = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),
      H,
      h = { arr: function (a) {
      return Array.isArray(a);
    }, obj: function (a) {
      return -1 < Object.prototype.toString.call(a).indexOf("Object");
    },
    pth: function (a) {
      return h.obj(a) && a.hasOwnProperty("totalLength");
    }, svg: function (a) {
      return a instanceof SVGElement;
    }, dom: function (a) {
      return a.nodeType || h.svg(a);
    }, str: function (a) {
      return "string" === typeof a;
    }, fnc: function (a) {
      return "function" === typeof a;
    }, und: function (a) {
      return "undefined" === typeof a;
    }, hex: function (a) {
      return (/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
      );
    }, rgb: function (a) {
      return (/^rgb/.test(a)
      );
    }, hsl: function (a) {
      return (/^hsl/.test(a)
      );
    }, col: function (a) {
      return h.hex(a) || h.rgb(a) || h.hsl(a);
    } },
      A = function () {
    function a(a, d, b) {
      return (((1 - 3 * b + 3 * d) * a + (3 * b - 6 * d)) * a + 3 * d) * a;
    }return function (c, d, b, f) {
      if (0 <= c && 1 >= c && 0 <= b && 1 >= b) {
        var e = new Float32Array(11);if (c !== d || b !== f) for (var k = 0; 11 > k; ++k) {
          e[k] = a(.1 * k, c, b);
        }return function (k) {
          if (c === d && b === f) return k;if (0 === k) return 0;if (1 === k) return 1;for (var h = 0, l = 1; 10 !== l && e[l] <= k; ++l) {
            h += .1;
          }--l;var l = h + (k - e[l]) / (e[l + 1] - e[l]) * .1,
              n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;if (.001 <= n) {
            for (h = 0; 4 > h; ++h) {
              n = 3 * (1 - 3 * b + 3 * c) * l * l + 2 * (3 * b - 6 * c) * l + 3 * c;if (0 === n) break;var m = a(l, c, b) - k,
                  l = l - m / n;
            }k = l;
          } else if (0 === n) k = l;else {
            var l = h,
                h = h + .1,
                g = 0;do {
              m = l + (h - l) / 2, n = a(m, c, b) - k, 0 < n ? h = m : l = m;
            } while (1e-7 < Math.abs(n) && 10 > ++g);k = m;
          }return a(k, d, f);
        };
      }
    };
  }(),
      Q = function () {
    function a(a, b) {
      return 0 === a || 1 === a ? a : -Math.pow(2, 10 * (a - 1)) * Math.sin(2 * (a - 1 - b / (2 * Math.PI) * Math.asin(1)) * Math.PI / b);
    }var c = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
        d = { In: [[.55, .085, .68, .53], [.55, .055, .675, .19], [.895, .03, .685, .22], [.755, .05, .855, .06], [.47, 0, .745, .715], [.95, .05, .795, .035], [.6, .04, .98, .335], [.6, -.28, .735, .045], a], Out: [[.25, .46, .45, .94], [.215, .61, .355, 1], [.165, .84, .44, 1], [.23, 1, .32, 1], [.39, .575, .565, 1], [.19, 1, .22, 1], [.075, .82, .165, 1], [.175, .885, .32, 1.275], function (b, c) {
        return 1 - a(1 - b, c);
      }], InOut: [[.455, .03, .515, .955], [.645, .045, .355, 1], [.77, 0, .175, 1], [.86, 0, .07, 1], [.445, .05, .55, .95], [1, 0, 0, 1], [.785, .135, .15, .86], [.68, -.55, .265, 1.55], function (b, c) {
        return .5 > b ? a(2 * b, c) / 2 : 1 - a(-2 * b + 2, c) / 2;
      }] },
        b = { linear: A(.25, .25, .75, .75) },
        f = {},
        e;for (e in d) {
      f.type = e, d[f.type].forEach(function (a) {
        return function (d, f) {
          b["ease" + a.type + c[f]] = h.fnc(d) ? d : A.apply($jscomp$this, d);
        };
      }(f)), f = { type: f.type };
    }return b;
  }(),
      ha = { css: function (a, c, d) {
      return a.style[c] = d;
    }, attribute: function (a, c, d) {
      return a.setAttribute(c, d);
    }, object: function (a, c, d) {
      return a[c] = d;
    }, transform: function (a, c, d, b, f) {
      b[f] || (b[f] = []);b[f].push(c + "(" + d + ")");
    } },
      v = [],
      B = 0,
      ia = function () {
    function a() {
      B = requestAnimationFrame(c);
    }function c(c) {
      var b = v.length;if (b) {
        for (var d = 0; d < b;) {
          v[d] && v[d].tick(c), d++;
        }a();
      } else cancelAnimationFrame(B), B = 0;
    }return a;
  }();q.version = "2.2.0";q.speed = 1;q.running = v;q.remove = function (a) {
    a = P(a);for (var c = v.length; c--;) {
      for (var d = v[c], b = d.animations, f = b.length; f--;) {
        u(a, b[f].animatable.target) && (b.splice(f, 1), b.length || d.pause());
      }
    }
  };q.getValue = K;q.path = function (a, c) {
    var d = h.str(a) ? e(a)[0] : a,
        b = c || 100;return function (a) {
      return { el: d, property: a, totalLength: N(d) * (b / 100) };
    };
  };q.setDashoffset = function (a) {
    var c = N(a);a.setAttribute("stroke-dasharray", c);return c;
  };q.bezier = A;q.easings = Q;q.timeline = function (a) {
    var c = q(a);c.pause();c.duration = 0;c.add = function (d) {
      c.children.forEach(function (a) {
        a.began = !0;a.completed = !0;
      });m(d).forEach(function (b) {
        var d = z(b, D(S, a || {}));d.targets = d.targets || a.targets;b = c.duration;var e = d.offset;d.autoplay = !1;d.direction = c.direction;d.offset = h.und(e) ? b : L(e, b);c.began = !0;c.completed = !0;c.seek(d.offset);d = q(d);d.began = !0;d.completed = !0;d.duration > b && (c.duration = d.duration);c.children.push(d);
      });c.seek(0);c.reset();c.autoplay && c.restart();return c;
    };return c;
  };q.random = function (a, c) {
    return Math.floor(Math.random() * (c - a + 1)) + a;
  };return q;
});
;(function ($, anim) {
  'use strict';

  var _defaults = {
    accordion: true,
    onOpenStart: undefined,
    onOpenEnd: undefined,
    onCloseStart: undefined,
    onCloseEnd: undefined,
    inDuration: 300,
    outDuration: 300
  };

  /**
   * @class
   *
   */

  var Collapsible = function (_Component) {
    _inherits(Collapsible, _Component);

    /**
     * Construct Collapsible instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Collapsible(el, options) {
      _classCallCheck(this, Collapsible);

      var _this3 = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this, Collapsible, el, options));

      _this3.el.M_Collapsible = _this3;

      /**
       * Options for the collapsible
       * @member Collapsible#options
       * @prop {Boolean} [accordion=false] - Type of the collapsible
       * @prop {Function} onOpenStart - Callback function called before collapsible is opened
       * @prop {Function} onOpenEnd - Callback function called after collapsible is opened
       * @prop {Function} onCloseStart - Callback function called before collapsible is closed
       * @prop {Function} onCloseEnd - Callback function called after collapsible is closed
       * @prop {Number} inDuration - Transition in duration in milliseconds.
       * @prop {Number} outDuration - Transition duration in milliseconds.
       */
      _this3.options = $.extend({}, Collapsible.defaults, options);

      // Setup tab indices
      _this3.$headers = _this3.$el.children('li').children('.collapsible-header');
      _this3.$headers.attr('tabindex', 0);

      _this3._setupEventHandlers();

      // Open first active
      var $activeBodies = _this3.$el.children('li.active').children('.collapsible-body');
      if (_this3.options.accordion) {
        // Handle Accordion
        $activeBodies.first().css('display', 'block');
      } else {
        // Handle Expandables
        $activeBodies.css('display', 'block');
      }
      return _this3;
    }

    _createClass(Collapsible, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.el.M_Collapsible = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var _this4 = this;

        this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this);
        this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this);
        this.el.addEventListener('click', this._handleCollapsibleClickBound);
        this.$headers.each(function (header) {
          header.addEventListener('keydown', _this4._handleCollapsibleKeydownBound);
        });
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        var _this5 = this;

        this.el.removeEventListener('click', this._handleCollapsibleClickBound);
        this.$headers.each(function (header) {
          header.removeEventListener('keydown', _this5._handleCollapsibleKeydownBound);
        });
      }

      /**
       * Handle Collapsible Click
       * @param {Event} e
       */

    }, {
      key: "_handleCollapsibleClick",
      value: function _handleCollapsibleClick(e) {
        var $header = $(e.target).closest('.collapsible-header');
        if (e.target && $header.length) {
          var $collapsible = $header.closest('.collapsible');
          if ($collapsible[0] === this.el) {
            var $collapsibleLi = $header.closest('li');
            var $collapsibleLis = $collapsible.children('li');
            var isActive = $collapsibleLi[0].classList.contains('active');
            var index = $collapsibleLis.index($collapsibleLi);

            if (isActive) {
              this.close(index);
            } else {
              this.open(index);
            }
          }
        }
      }

      /**
       * Handle Collapsible Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleCollapsibleKeydown",
      value: function _handleCollapsibleKeydown(e) {
        if (e.keyCode === 13) {
          this._handleCollapsibleClickBound(e);
        }
      }

      /**
       * Animate in collapsible slide
       * @param {Number} index - 0th index of slide
       */

    }, {
      key: "_animateIn",
      value: function _animateIn(index) {
        var _this6 = this;

        var $collapsibleLi = this.$el.children('li').eq(index);
        if ($collapsibleLi.length) {
          var $body = $collapsibleLi.children('.collapsible-body');

          anim.remove($body[0]);
          $body.css({
            display: 'block',
            overflow: 'hidden',
            height: 0,
            paddingTop: '',
            paddingBottom: ''
          });

          var pTop = $body.css('padding-top');
          var pBottom = $body.css('padding-bottom');
          var finalHeight = $body[0].scrollHeight;
          $body.css({
            paddingTop: 0,
            paddingBottom: 0
          });

          anim({
            targets: $body[0],
            height: finalHeight,
            paddingTop: pTop,
            paddingBottom: pBottom,
            duration: this.options.inDuration,
            easing: 'easeInOutCubic',
            complete: function (anim) {
              $body.css({
                overflow: '',
                paddingTop: '',
                paddingBottom: '',
                height: ''
              });

              // onOpenEnd callback
              if (typeof _this6.options.onOpenEnd === 'function') {
                _this6.options.onOpenEnd.call(_this6, $collapsibleLi[0]);
              }
            }
          });
        }
      }

      /**
       * Animate out collapsible slide
       * @param {Number} index - 0th index of slide to open
       */

    }, {
      key: "_animateOut",
      value: function _animateOut(index) {
        var _this7 = this;

        var $collapsibleLi = this.$el.children('li').eq(index);
        if ($collapsibleLi.length) {
          var $body = $collapsibleLi.children('.collapsible-body');
          anim.remove($body[0]);
          $body.css('overflow', 'hidden');
          anim({
            targets: $body[0],
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: this.options.outDuration,
            easing: 'easeInOutCubic',
            complete: function () {
              $body.css({
                height: '',
                overflow: '',
                padding: '',
                display: ''
              });

              // onCloseEnd callback
              if (typeof _this7.options.onCloseEnd === 'function') {
                _this7.options.onCloseEnd.call(_this7, $collapsibleLi[0]);
              }
            }
          });
        }
      }

      /**
       * Open Collapsible
       * @param {Number} index - 0th index of slide
       */

    }, {
      key: "open",
      value: function open(index) {
        var _this8 = this;

        var $collapsibleLi = this.$el.children('li').eq(index);
        if ($collapsibleLi.length && !$collapsibleLi[0].classList.contains('active')) {
          // onOpenStart callback
          if (typeof this.options.onOpenStart === 'function') {
            this.options.onOpenStart.call(this, $collapsibleLi[0]);
          }

          // Handle accordion behavior
          if (this.options.accordion) {
            var $collapsibleLis = this.$el.children('li');
            var $activeLis = this.$el.children('li.active');
            $activeLis.each(function (el) {
              var index = $collapsibleLis.index($(el));
              _this8.close(index);
            });
          }

          // Animate in
          $collapsibleLi[0].classList.add('active');
          this._animateIn(index);
        }
      }

      /**
       * Close Collapsible
       * @param {Number} index - 0th index of slide
       */

    }, {
      key: "close",
      value: function close(index) {
        var $collapsibleLi = this.$el.children('li').eq(index);
        if ($collapsibleLi.length && $collapsibleLi[0].classList.contains('active')) {
          // onCloseStart callback
          if (typeof this.options.onCloseStart === 'function') {
            this.options.onCloseStart.call(this, $collapsibleLi[0]);
          }

          // Animate out
          $collapsibleLi[0].classList.remove('active');
          this._animateOut(index);
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Collapsible.__proto__ || Object.getPrototypeOf(Collapsible), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Collapsible;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Collapsible;
  }(Component);

  M.Collapsible = Collapsible;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Collapsible, 'collapsible', 'M_Collapsible');
  }
})(cash, M.anime);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    alignment: 'left',
    autoFocus: true,
    constrainWidth: true,
    container: null,
    coverTrigger: true,
    closeOnClick: true,
    hover: false,
    inDuration: 150,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onItemClick: null
  };

  /**
   * @class
   */

  var Dropdown = function (_Component2) {
    _inherits(Dropdown, _Component2);

    function Dropdown(el, options) {
      _classCallCheck(this, Dropdown);

      var _this9 = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, Dropdown, el, options));

      _this9.el.M_Dropdown = _this9;
      Dropdown._dropdowns.push(_this9);

      _this9.id = M.getIdFromTrigger(el);
      _this9.dropdownEl = document.getElementById(_this9.id);
      _this9.$dropdownEl = $(_this9.dropdownEl);

      /**
       * Options for the dropdown
       * @member Dropdown#options
       * @prop {String} [alignment='left'] - Edge which the dropdown is aligned to
       * @prop {Boolean} [autoFocus=true] - Automatically focus dropdown el for keyboard
       * @prop {Boolean} [constrainWidth=true] - Constrain width to width of the button
       * @prop {Element} container - Container element to attach dropdown to (optional)
       * @prop {Boolean} [coverTrigger=true] - Place dropdown over trigger
       * @prop {Boolean} [closeOnClick=true] - Close on click of dropdown item
       * @prop {Boolean} [hover=false] - Open dropdown on hover
       * @prop {Number} [inDuration=150] - Duration of open animation in ms
       * @prop {Number} [outDuration=250] - Duration of close animation in ms
       * @prop {Function} onOpenStart - Function called when dropdown starts opening
       * @prop {Function} onOpenEnd - Function called when dropdown finishes opening
       * @prop {Function} onCloseStart - Function called when dropdown starts closing
       * @prop {Function} onCloseEnd - Function called when dropdown finishes closing
       */
      _this9.options = $.extend({}, Dropdown.defaults, options);

      /**
       * Describes open/close state of dropdown
       * @type {Boolean}
       */
      _this9.isOpen = false;

      /**
       * Describes if dropdown content is scrollable
       * @type {Boolean}
       */
      _this9.isScrollable = false;

      /**
       * Describes if touch moving on dropdown content
       * @type {Boolean}
       */
      _this9.isTouchMoving = false;

      _this9.focusedIndex = -1;
      _this9.filterQuery = [];

      // Move dropdown-content after dropdown-trigger
      if (!!_this9.options.container) {
        $(_this9.options.container).append(_this9.dropdownEl);
      } else {
        _this9.$el.after(_this9.dropdownEl);
      }

      _this9._makeDropdownFocusable();
      _this9._resetFilterQueryBound = _this9._resetFilterQuery.bind(_this9);
      _this9._handleDocumentClickBound = _this9._handleDocumentClick.bind(_this9);
      _this9._handleDocumentTouchmoveBound = _this9._handleDocumentTouchmove.bind(_this9);
      _this9._handleDropdownClickBound = _this9._handleDropdownClick.bind(_this9);
      _this9._handleDropdownKeydownBound = _this9._handleDropdownKeydown.bind(_this9);
      _this9._handleTriggerKeydownBound = _this9._handleTriggerKeydown.bind(_this9);
      _this9._setupEventHandlers();
      return _this9;
    }

    _createClass(Dropdown, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._resetDropdownStyles();
        this._removeEventHandlers();
        Dropdown._dropdowns.splice(Dropdown._dropdowns.indexOf(this), 1);
        this.el.M_Dropdown = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        // Trigger keydown handler
        this.el.addEventListener('keydown', this._handleTriggerKeydownBound);

        // Item click handler
        this.dropdownEl.addEventListener('click', this._handleDropdownClickBound);

        // Hover event handlers
        if (this.options.hover) {
          this._handleMouseEnterBound = this._handleMouseEnter.bind(this);
          this.el.addEventListener('mouseenter', this._handleMouseEnterBound);
          this._handleMouseLeaveBound = this._handleMouseLeave.bind(this);
          this.el.addEventListener('mouseleave', this._handleMouseLeaveBound);
          this.dropdownEl.addEventListener('mouseleave', this._handleMouseLeaveBound);

          // Click event handlers
        } else {
          this._handleClickBound = this._handleClick.bind(this);
          this.el.addEventListener('click', this._handleClickBound);
        }
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('keydown', this._handleTriggerKeydownBound);
        this.dropdownEl.removeEventListener('click', this._handleDropdownClickBound);

        if (this.options.hover) {
          this.el.removeEventListener('mouseenter', this._handleMouseEnterBound);
          this.el.removeEventListener('mouseleave', this._handleMouseLeaveBound);
          this.dropdownEl.removeEventListener('mouseleave', this._handleMouseLeaveBound);
        } else {
          this.el.removeEventListener('click', this._handleClickBound);
        }
      }
    }, {
      key: "_setupTemporaryEventHandlers",
      value: function _setupTemporaryEventHandlers() {
        // Use capture phase event handler to prevent click
        document.body.addEventListener('click', this._handleDocumentClickBound, true);
        document.body.addEventListener('touchend', this._handleDocumentClickBound);
        document.body.addEventListener('touchmove', this._handleDocumentTouchmoveBound);
        this.dropdownEl.addEventListener('keydown', this._handleDropdownKeydownBound);
      }
    }, {
      key: "_removeTemporaryEventHandlers",
      value: function _removeTemporaryEventHandlers() {
        // Use capture phase event handler to prevent click
        document.body.removeEventListener('click', this._handleDocumentClickBound, true);
        document.body.removeEventListener('touchend', this._handleDocumentClickBound);
        document.body.removeEventListener('touchmove', this._handleDocumentTouchmoveBound);
        this.dropdownEl.removeEventListener('keydown', this._handleDropdownKeydownBound);
      }
    }, {
      key: "_handleClick",
      value: function _handleClick(e) {
        e.preventDefault();
        this.open();
      }
    }, {
      key: "_handleMouseEnter",
      value: function _handleMouseEnter() {
        this.open();
      }
    }, {
      key: "_handleMouseLeave",
      value: function _handleMouseLeave(e) {
        var toEl = e.toElement || e.relatedTarget;
        var leaveToDropdownContent = !!$(toEl).closest('.dropdown-content').length;
        var leaveToActiveDropdownTrigger = false;

        var $closestTrigger = $(toEl).closest('.dropdown-trigger');
        if ($closestTrigger.length && !!$closestTrigger[0].M_Dropdown && $closestTrigger[0].M_Dropdown.isOpen) {
          leaveToActiveDropdownTrigger = true;
        }

        // Close hover dropdown if mouse did not leave to either active dropdown-trigger or dropdown-content
        if (!leaveToActiveDropdownTrigger && !leaveToDropdownContent) {
          this.close();
        }
      }
    }, {
      key: "_handleDocumentClick",
      value: function _handleDocumentClick(e) {
        var _this10 = this;

        var $target = $(e.target);
        if (this.options.closeOnClick && $target.closest('.dropdown-content').length && !this.isTouchMoving) {
          // isTouchMoving to check if scrolling on mobile.
          setTimeout(function () {
            _this10.close();
          }, 0);
        } else if ($target.closest('.dropdown-trigger').length || !$target.closest('.dropdown-content').length) {
          setTimeout(function () {
            _this10.close();
          }, 0);
        }
        this.isTouchMoving = false;
      }
    }, {
      key: "_handleTriggerKeydown",
      value: function _handleTriggerKeydown(e) {
        // ARROW DOWN OR ENTER WHEN SELECT IS CLOSED - open Dropdown
        if ((e.which === M.keys.ARROW_DOWN || e.which === M.keys.ENTER) && !this.isOpen) {
          e.preventDefault();
          this.open();
        }
      }

      /**
       * Handle Document Touchmove
       * @param {Event} e
       */

    }, {
      key: "_handleDocumentTouchmove",
      value: function _handleDocumentTouchmove(e) {
        var $target = $(e.target);
        if ($target.closest('.dropdown-content').length) {
          this.isTouchMoving = true;
        }
      }

      /**
       * Handle Dropdown Click
       * @param {Event} e
       */

    }, {
      key: "_handleDropdownClick",
      value: function _handleDropdownClick(e) {
        // onItemClick callback
        if (typeof this.options.onItemClick === 'function') {
          var itemEl = $(e.target).closest('li')[0];
          this.options.onItemClick.call(this, itemEl);
        }
      }

      /**
       * Handle Dropdown Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleDropdownKeydown",
      value: function _handleDropdownKeydown(e) {
        if (e.which === M.keys.TAB) {
          e.preventDefault();
          this.close();

          // Navigate down dropdown list
        } else if ((e.which === M.keys.ARROW_DOWN || e.which === M.keys.ARROW_UP) && this.isOpen) {
          e.preventDefault();
          var direction = e.which === M.keys.ARROW_DOWN ? 1 : -1;
          var newFocusedIndex = this.focusedIndex;
          var foundNewIndex = false;
          do {
            newFocusedIndex = newFocusedIndex + direction;

            if (!!this.dropdownEl.children[newFocusedIndex] && this.dropdownEl.children[newFocusedIndex].tabIndex !== -1) {
              foundNewIndex = true;
              break;
            }
          } while (newFocusedIndex < this.dropdownEl.children.length && newFocusedIndex >= 0);

          if (foundNewIndex) {
            this.focusedIndex = newFocusedIndex;
            this._focusFocusedItem();
          }

          // ENTER selects choice on focused item
        } else if (e.which === M.keys.ENTER && this.isOpen) {
          // Search for <a> and <button>
          var focusedElement = this.dropdownEl.children[this.focusedIndex];
          var $activatableElement = $(focusedElement).find('a, button').first();

          // Click a or button tag if exists, otherwise click li tag
          if (!!$activatableElement.length) {
            $activatableElement[0].click();
          } else if (!!focusedElement) {
            focusedElement.click();
          }

          // Close dropdown on ESC
        } else if (e.which === M.keys.ESC && this.isOpen) {
          e.preventDefault();
          this.close();
        }

        // CASE WHEN USER TYPE LETTERS
        var letter = String.fromCharCode(e.which).toLowerCase(),
            nonLetters = [9, 13, 27, 38, 40];
        if (letter && nonLetters.indexOf(e.which) === -1) {
          this.filterQuery.push(letter);

          var string = this.filterQuery.join(''),
              newOptionEl = $(this.dropdownEl).find('li').filter(function (el) {
            return $(el).text().toLowerCase().indexOf(string) === 0;
          })[0];

          if (newOptionEl) {
            this.focusedIndex = $(newOptionEl).index();
            this._focusFocusedItem();
          }
        }

        this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1000);
      }

      /**
       * Setup dropdown
       */

    }, {
      key: "_resetFilterQuery",
      value: function _resetFilterQuery() {
        this.filterQuery = [];
      }
    }, {
      key: "_resetDropdownStyles",
      value: function _resetDropdownStyles() {
        this.$dropdownEl.css({
          display: '',
          width: '',
          height: '',
          left: '',
          top: '',
          'transform-origin': '',
          transform: '',
          opacity: ''
        });
      }
    }, {
      key: "_makeDropdownFocusable",
      value: function _makeDropdownFocusable() {
        // Needed for arrow key navigation
        this.dropdownEl.tabIndex = 0;

        // Only set tabindex if it hasn't been set by user
        $(this.dropdownEl).children().each(function (el) {
          if (!el.getAttribute('tabindex')) {
            el.setAttribute('tabindex', 0);
          }
        });
      }
    }, {
      key: "_focusFocusedItem",
      value: function _focusFocusedItem() {
        if (this.focusedIndex >= 0 && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus) {
          this.dropdownEl.children[this.focusedIndex].focus();
        }
      }
    }, {
      key: "_getDropdownPosition",
      value: function _getDropdownPosition() {
        var offsetParentBRect = this.el.offsetParent.getBoundingClientRect();
        var triggerBRect = this.el.getBoundingClientRect();
        var dropdownBRect = this.dropdownEl.getBoundingClientRect();

        var idealHeight = dropdownBRect.height;
        var idealWidth = dropdownBRect.width;
        var idealXPos = triggerBRect.left - dropdownBRect.left;
        var idealYPos = triggerBRect.top - dropdownBRect.top;

        var dropdownBounds = {
          left: idealXPos,
          top: idealYPos,
          height: idealHeight,
          width: idealWidth
        };

        // Countainer here will be closest ancestor with overflow: hidden
        var closestOverflowParent = !!this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode;

        var alignments = M.checkPossibleAlignments(this.el, closestOverflowParent, dropdownBounds, this.options.coverTrigger ? 0 : triggerBRect.height);

        var verticalAlignment = 'top';
        var horizontalAlignment = this.options.alignment;
        idealYPos += this.options.coverTrigger ? 0 : triggerBRect.height;

        // Reset isScrollable
        this.isScrollable = false;

        if (!alignments.top) {
          if (alignments.bottom) {
            verticalAlignment = 'bottom';
          } else {
            this.isScrollable = true;

            // Determine which side has most space and cutoff at correct height
            if (alignments.spaceOnTop > alignments.spaceOnBottom) {
              verticalAlignment = 'bottom';
              idealHeight += alignments.spaceOnTop;
              idealYPos -= alignments.spaceOnTop;
            } else {
              idealHeight += alignments.spaceOnBottom;
            }
          }
        }

        // If preferred horizontal alignment is possible
        if (!alignments[horizontalAlignment]) {
          var oppositeAlignment = horizontalAlignment === 'left' ? 'right' : 'left';
          if (alignments[oppositeAlignment]) {
            horizontalAlignment = oppositeAlignment;
          } else {
            // Determine which side has most space and cutoff at correct height
            if (alignments.spaceOnLeft > alignments.spaceOnRight) {
              horizontalAlignment = 'right';
              idealWidth += alignments.spaceOnLeft;
              idealXPos -= alignments.spaceOnLeft;
            } else {
              horizontalAlignment = 'left';
              idealWidth += alignments.spaceOnRight;
            }
          }
        }

        if (verticalAlignment === 'bottom') {
          idealYPos = idealYPos - dropdownBRect.height + (this.options.coverTrigger ? triggerBRect.height : 0);
        }
        if (horizontalAlignment === 'right') {
          idealXPos = idealXPos - dropdownBRect.width + triggerBRect.width;
        }
        return {
          x: idealXPos,
          y: idealYPos,
          verticalAlignment: verticalAlignment,
          horizontalAlignment: horizontalAlignment,
          height: idealHeight,
          width: idealWidth
        };
      }

      /**
       * Animate in dropdown
       */

    }, {
      key: "_animateIn",
      value: function _animateIn() {
        var _this11 = this;

        anim.remove(this.dropdownEl);
        anim({
          targets: this.dropdownEl,
          opacity: {
            value: [0, 1],
            easing: 'easeOutQuad'
          },
          scaleX: [0.3, 1],
          scaleY: [0.3, 1],
          duration: this.options.inDuration,
          easing: 'easeOutQuint',
          complete: function (anim) {
            if (_this11.options.autoFocus) {
              _this11.dropdownEl.focus();
            }

            // onOpenEnd callback
            if (typeof _this11.options.onOpenEnd === 'function') {
              _this11.options.onOpenEnd.call(_this11, _this11.el);
            }
          }
        });
      }

      /**
       * Animate out dropdown
       */

    }, {
      key: "_animateOut",
      value: function _animateOut() {
        var _this12 = this;

        anim.remove(this.dropdownEl);
        anim({
          targets: this.dropdownEl,
          opacity: {
            value: 0,
            easing: 'easeOutQuint'
          },
          scaleX: 0.3,
          scaleY: 0.3,
          duration: this.options.outDuration,
          easing: 'easeOutQuint',
          complete: function (anim) {
            _this12._resetDropdownStyles();

            // onCloseEnd callback
            if (typeof _this12.options.onCloseEnd === 'function') {
              _this12.options.onCloseEnd.call(_this12, _this12.el);
            }
          }
        });
      }

      /**
       * Place dropdown
       */

    }, {
      key: "_placeDropdown",
      value: function _placeDropdown() {
        // Set width before calculating positionInfo
        var idealWidth = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
        this.dropdownEl.style.width = idealWidth + 'px';

        var positionInfo = this._getDropdownPosition();
        this.dropdownEl.style.left = positionInfo.x + 'px';
        this.dropdownEl.style.top = positionInfo.y + 'px';
        this.dropdownEl.style.height = positionInfo.height + 'px';
        this.dropdownEl.style.width = positionInfo.width + 'px';
        this.dropdownEl.style.transformOrigin = (positionInfo.horizontalAlignment === 'left' ? '0' : '100%') + " " + (positionInfo.verticalAlignment === 'top' ? '0' : '100%');
      }

      /**
       * Open Dropdown
       */

    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }
        this.isOpen = true;

        // onOpenStart callback
        if (typeof this.options.onOpenStart === 'function') {
          this.options.onOpenStart.call(this, this.el);
        }

        // Reset styles
        this._resetDropdownStyles();
        this.dropdownEl.style.display = 'block';

        this._placeDropdown();
        this._animateIn();
        this._setupTemporaryEventHandlers();
      }

      /**
       * Close Dropdown
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }
        this.isOpen = false;
        this.focusedIndex = -1;

        // onCloseStart callback
        if (typeof this.options.onCloseStart === 'function') {
          this.options.onCloseStart.call(this, this.el);
        }

        this._animateOut();
        this._removeTemporaryEventHandlers();

        if (this.options.autoFocus) {
          this.el.focus();
        }
      }

      /**
       * Recalculate dimensions
       */

    }, {
      key: "recalculateDimensions",
      value: function recalculateDimensions() {
        if (this.isOpen) {
          this.$dropdownEl.css({
            width: '',
            height: '',
            left: '',
            top: '',
            'transform-origin': ''
          });
          this._placeDropdown();
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Dropdown.__proto__ || Object.getPrototypeOf(Dropdown), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Dropdown;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Dropdown;
  }(Component);

  /**
   * @static
   * @memberof Dropdown
   */


  Dropdown._dropdowns = [];

  M.Dropdown = Dropdown;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Dropdown, 'dropdown', 'M_Dropdown');
  }
})(cash, M.anime);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true,
    dismissible: true,
    startingTop: '4%',
    endingTop: '10%'
  };

  /**
   * @class
   *
   */

  var Modal = function (_Component3) {
    _inherits(Modal, _Component3);

    /**
     * Construct Modal instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Modal(el, options) {
      _classCallCheck(this, Modal);

      var _this13 = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, Modal, el, options));

      _this13.el.M_Modal = _this13;

      /**
       * Options for the modal
       * @member Modal#options
       * @prop {Number} [opacity=0.5] - Opacity of the modal overlay
       * @prop {Number} [inDuration=250] - Length in ms of enter transition
       * @prop {Number} [outDuration=250] - Length in ms of exit transition
       * @prop {Function} onOpenStart - Callback function called before modal is opened
       * @prop {Function} onOpenEnd - Callback function called after modal is opened
       * @prop {Function} onCloseStart - Callback function called before modal is closed
       * @prop {Function} onCloseEnd - Callback function called after modal is closed
       * @prop {Boolean} [dismissible=true] - Allow modal to be dismissed by keyboard or overlay click
       * @prop {String} [startingTop='4%'] - startingTop
       * @prop {String} [endingTop='10%'] - endingTop
       */
      _this13.options = $.extend({}, Modal.defaults, options);

      /**
       * Describes open/close state of modal
       * @type {Boolean}
       */
      _this13.isOpen = false;

      _this13.id = _this13.$el.attr('id');
      _this13._openingTrigger = undefined;
      _this13.$overlay = $('<div class="modal-overlay"></div>');
      _this13.el.tabIndex = 0;
      _this13._nthModalOpened = 0;

      Modal._count++;
      _this13._setupEventHandlers();
      return _this13;
    }

    _createClass(Modal, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        Modal._count--;
        this._removeEventHandlers();
        this.el.removeAttribute('style');
        this.$overlay.remove();
        this.el.M_Modal = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleOverlayClickBound = this._handleOverlayClick.bind(this);
        this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this);

        if (Modal._count === 1) {
          document.body.addEventListener('click', this._handleTriggerClick);
        }
        this.$overlay[0].addEventListener('click', this._handleOverlayClickBound);
        this.el.addEventListener('click', this._handleModalCloseClickBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        if (Modal._count === 0) {
          document.body.removeEventListener('click', this._handleTriggerClick);
        }
        this.$overlay[0].removeEventListener('click', this._handleOverlayClickBound);
        this.el.removeEventListener('click', this._handleModalCloseClickBound);
      }

      /**
       * Handle Trigger Click
       * @param {Event} e
       */

    }, {
      key: "_handleTriggerClick",
      value: function _handleTriggerClick(e) {
        var $trigger = $(e.target).closest('.modal-trigger');
        if ($trigger.length) {
          var modalId = M.getIdFromTrigger($trigger[0]);
          var modalInstance = document.getElementById(modalId).M_Modal;
          if (modalInstance) {
            modalInstance.open($trigger);
          }
          e.preventDefault();
        }
      }

      /**
       * Handle Overlay Click
       */

    }, {
      key: "_handleOverlayClick",
      value: function _handleOverlayClick() {
        if (this.options.dismissible) {
          this.close();
        }
      }

      /**
       * Handle Modal Close Click
       * @param {Event} e
       */

    }, {
      key: "_handleModalCloseClick",
      value: function _handleModalCloseClick(e) {
        var $closeTrigger = $(e.target).closest('.modal-close');
        if ($closeTrigger.length) {
          this.close();
        }
      }

      /**
       * Handle Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(e) {
        // ESC key
        if (e.keyCode === 27 && this.options.dismissible) {
          this.close();
        }
      }

      /**
       * Handle Focus
       * @param {Event} e
       */

    }, {
      key: "_handleFocus",
      value: function _handleFocus(e) {
        // Only trap focus if this modal is the last model opened (prevents loops in nested modals).
        if (!this.el.contains(e.target) && this._nthModalOpened === Modal._modalsOpen) {
          this.el.focus();
        }
      }

      /**
       * Animate in modal
       */

    }, {
      key: "_animateIn",
      value: function _animateIn() {
        var _this14 = this;

        // Set initial styles
        $.extend(this.el.style, {
          display: 'block',
          opacity: 0
        });
        $.extend(this.$overlay[0].style, {
          display: 'block',
          opacity: 0
        });

        // Animate overlay
        anim({
          targets: this.$overlay[0],
          opacity: this.options.opacity,
          duration: this.options.inDuration,
          easing: 'easeOutQuad'
        });

        // Define modal animation options
        var enterAnimOptions = {
          targets: this.el,
          duration: this.options.inDuration,
          easing: 'easeOutCubic',
          // Handle modal onOpenEnd callback
          complete: function () {
            if (typeof _this14.options.onOpenEnd === 'function') {
              _this14.options.onOpenEnd.call(_this14, _this14.el, _this14._openingTrigger);
            }
          }
        };

        // Bottom sheet animation
        if (this.el.classList.contains('bottom-sheet')) {
          $.extend(enterAnimOptions, {
            bottom: 0,
            opacity: 1
          });
          anim(enterAnimOptions);

          // Normal modal animation
        } else {
          $.extend(enterAnimOptions, {
            top: [this.options.startingTop, this.options.endingTop],
            opacity: 1,
            scaleX: [0.8, 1],
            scaleY: [0.8, 1]
          });
          anim(enterAnimOptions);
        }
      }

      /**
       * Animate out modal
       */

    }, {
      key: "_animateOut",
      value: function _animateOut() {
        var _this15 = this;

        // Animate overlay
        anim({
          targets: this.$overlay[0],
          opacity: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuart'
        });

        // Define modal animation options
        var exitAnimOptions = {
          targets: this.el,
          duration: this.options.outDuration,
          easing: 'easeOutCubic',
          // Handle modal ready callback
          complete: function () {
            _this15.el.style.display = 'none';
            _this15.$overlay.remove();

            // Call onCloseEnd callback
            if (typeof _this15.options.onCloseEnd === 'function') {
              _this15.options.onCloseEnd.call(_this15, _this15.el);
            }
          }
        };

        // Bottom sheet animation
        if (this.el.classList.contains('bottom-sheet')) {
          $.extend(exitAnimOptions, {
            bottom: '-100%',
            opacity: 0
          });
          anim(exitAnimOptions);

          // Normal modal animation
        } else {
          $.extend(exitAnimOptions, {
            top: [this.options.endingTop, this.options.startingTop],
            opacity: 0,
            scaleX: 0.8,
            scaleY: 0.8
          });
          anim(exitAnimOptions);
        }
      }

      /**
       * Open Modal
       * @param {cash} [$trigger]
       */

    }, {
      key: "open",
      value: function open($trigger) {
        if (this.isOpen) {
          return;
        }

        this.isOpen = true;
        Modal._modalsOpen++;
        this._nthModalOpened = Modal._modalsOpen;

        // Set Z-Index based on number of currently open modals
        this.$overlay[0].style.zIndex = 1000 + Modal._modalsOpen * 2;
        this.el.style.zIndex = 1000 + Modal._modalsOpen * 2 + 1;

        // Set opening trigger, undefined indicates modal was opened by javascript
        this._openingTrigger = !!$trigger ? $trigger[0] : undefined;

        // onOpenStart callback
        if (typeof this.options.onOpenStart === 'function') {
          this.options.onOpenStart.call(this, this.el, this._openingTrigger);
        }

        if (this.options.preventScrolling) {
          document.body.style.overflow = 'hidden';
        }

        this.el.classList.add('open');
        this.el.insertAdjacentElement('afterend', this.$overlay[0]);

        if (this.options.dismissible) {
          this._handleKeydownBound = this._handleKeydown.bind(this);
          this._handleFocusBound = this._handleFocus.bind(this);
          document.addEventListener('keydown', this._handleKeydownBound);
          document.addEventListener('focus', this._handleFocusBound, true);
        }

        anim.remove(this.el);
        anim.remove(this.$overlay[0]);
        this._animateIn();

        // Focus modal
        this.el.focus();

        return this;
      }

      /**
       * Close Modal
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isOpen = false;
        Modal._modalsOpen--;
        this._nthModalOpened = 0;

        // Call onCloseStart callback
        if (typeof this.options.onCloseStart === 'function') {
          this.options.onCloseStart.call(this, this.el);
        }

        this.el.classList.remove('open');

        // Enable body scrolling only if there are no more modals open.
        if (Modal._modalsOpen === 0) {
          document.body.style.overflow = '';
        }

        if (this.options.dismissible) {
          document.removeEventListener('keydown', this._handleKeydownBound);
          document.removeEventListener('focus', this._handleFocusBound, true);
        }

        anim.remove(this.el);
        anim.remove(this.$overlay[0]);
        this._animateOut();
        return this;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Modal.__proto__ || Object.getPrototypeOf(Modal), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Modal;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Modal;
  }(Component);

  /**
   * @static
   * @memberof Modal
   */


  Modal._modalsOpen = 0;

  /**
   * @static
   * @memberof Modal
   */
  Modal._count = 0;

  M.Modal = Modal;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Modal, 'modal', 'M_Modal');
  }
})(cash, M.anime);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    inDuration: 275,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  };

  /**
   * @class
   *
   */

  var Materialbox = function (_Component4) {
    _inherits(Materialbox, _Component4);

    /**
     * Construct Materialbox instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Materialbox(el, options) {
      _classCallCheck(this, Materialbox);

      var _this16 = _possibleConstructorReturn(this, (Materialbox.__proto__ || Object.getPrototypeOf(Materialbox)).call(this, Materialbox, el, options));

      _this16.el.M_Materialbox = _this16;

      /**
       * Options for the modal
       * @member Materialbox#options
       * @prop {Number} [inDuration=275] - Length in ms of enter transition
       * @prop {Number} [outDuration=200] - Length in ms of exit transition
       * @prop {Function} onOpenStart - Callback function called before materialbox is opened
       * @prop {Function} onOpenEnd - Callback function called after materialbox is opened
       * @prop {Function} onCloseStart - Callback function called before materialbox is closed
       * @prop {Function} onCloseEnd - Callback function called after materialbox is closed
       */
      _this16.options = $.extend({}, Materialbox.defaults, options);

      _this16.overlayActive = false;
      _this16.doneAnimating = true;
      _this16.placeholder = $('<div></div>').addClass('material-placeholder');
      _this16.originalWidth = 0;
      _this16.originalHeight = 0;
      _this16.originInlineStyles = _this16.$el.attr('style');
      _this16.caption = _this16.el.getAttribute('data-caption') || '';

      // Wrap
      _this16.$el.before(_this16.placeholder);
      _this16.placeholder.append(_this16.$el);

      _this16._setupEventHandlers();
      return _this16;
    }

    _createClass(Materialbox, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.el.M_Materialbox = undefined;

        // Unwrap image
        $(this.placeholder).after(this.el).remove();

        this.$el.removeAttr('style');
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this);
        this.el.addEventListener('click', this._handleMaterialboxClickBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleMaterialboxClickBound);
      }

      /**
       * Handle Materialbox Click
       * @param {Event} e
       */

    }, {
      key: "_handleMaterialboxClick",
      value: function _handleMaterialboxClick(e) {
        // If already modal, return to original
        if (this.doneAnimating === false || this.overlayActive && this.doneAnimating) {
          this.close();
        } else {
          this.open();
        }
      }

      /**
       * Handle Window Scroll
       */

    }, {
      key: "_handleWindowScroll",
      value: function _handleWindowScroll() {
        if (this.overlayActive) {
          this.close();
        }
      }

      /**
       * Handle Window Resize
       */

    }, {
      key: "_handleWindowResize",
      value: function _handleWindowResize() {
        if (this.overlayActive) {
          this.close();
        }
      }

      /**
       * Handle Window Resize
       * @param {Event} e
       */

    }, {
      key: "_handleWindowEscape",
      value: function _handleWindowEscape(e) {
        // ESC key
        if (e.keyCode === 27 && this.doneAnimating && this.overlayActive) {
          this.close();
        }
      }

      /**
       * Find ancestors with overflow: hidden; and make visible
       */

    }, {
      key: "_makeAncestorsOverflowVisible",
      value: function _makeAncestorsOverflowVisible() {
        this.ancestorsChanged = $();
        var ancestor = this.placeholder[0].parentNode;
        while (ancestor !== null && !$(ancestor).is(document)) {
          var curr = $(ancestor);
          if (curr.css('overflow') !== 'visible') {
            curr.css('overflow', 'visible');
            if (this.ancestorsChanged === undefined) {
              this.ancestorsChanged = curr;
            } else {
              this.ancestorsChanged = this.ancestorsChanged.add(curr);
            }
          }
          ancestor = ancestor.parentNode;
        }
      }

      /**
       * Animate image in
       */

    }, {
      key: "_animateImageIn",
      value: function _animateImageIn() {
        var _this17 = this;

        var animOptions = {
          targets: this.el,
          height: [this.originalHeight, this.newHeight],
          width: [this.originalWidth, this.newWidth],
          left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
          top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
          duration: this.options.inDuration,
          easing: 'easeOutQuad',
          complete: function () {
            _this17.doneAnimating = true;

            // onOpenEnd callback
            if (typeof _this17.options.onOpenEnd === 'function') {
              _this17.options.onOpenEnd.call(_this17, _this17.el);
            }
          }
        };

        // Override max-width or max-height if needed
        this.maxWidth = this.$el.css('max-width');
        this.maxHeight = this.$el.css('max-height');
        if (this.maxWidth !== 'none') {
          animOptions.maxWidth = this.newWidth;
        }
        if (this.maxHeight !== 'none') {
          animOptions.maxHeight = this.newHeight;
        }

        anim(animOptions);
      }

      /**
       * Animate image out
       */

    }, {
      key: "_animateImageOut",
      value: function _animateImageOut() {
        var _this18 = this;

        var animOptions = {
          targets: this.el,
          width: this.originalWidth,
          height: this.originalHeight,
          left: 0,
          top: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: function () {
            _this18.placeholder.css({
              height: '',
              width: '',
              position: '',
              top: '',
              left: ''
            });

            // Revert to width or height attribute
            if (_this18.attrWidth) {
              _this18.$el.attr('width', _this18.attrWidth);
            }
            if (_this18.attrHeight) {
              _this18.$el.attr('height', _this18.attrHeight);
            }

            _this18.$el.removeAttr('style');
            _this18.originInlineStyles && _this18.$el.attr('style', _this18.originInlineStyles);

            // Remove class
            _this18.$el.removeClass('active');
            _this18.doneAnimating = true;

            // Remove overflow overrides on ancestors
            if (_this18.ancestorsChanged.length) {
              _this18.ancestorsChanged.css('overflow', '');
            }

            // onCloseEnd callback
            if (typeof _this18.options.onCloseEnd === 'function') {
              _this18.options.onCloseEnd.call(_this18, _this18.el);
            }
          }
        };

        anim(animOptions);
      }

      /**
       * Update open and close vars
       */

    }, {
      key: "_updateVars",
      value: function _updateVars() {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        this.caption = this.el.getAttribute('data-caption') || '';
      }

      /**
       * Open Materialbox
       */

    }, {
      key: "open",
      value: function open() {
        var _this19 = this;

        this._updateVars();
        this.originalWidth = this.el.getBoundingClientRect().width;
        this.originalHeight = this.el.getBoundingClientRect().height;

        // Set states
        this.doneAnimating = false;
        this.$el.addClass('active');
        this.overlayActive = true;

        // onOpenStart callback
        if (typeof this.options.onOpenStart === 'function') {
          this.options.onOpenStart.call(this, this.el);
        }

        // Set positioning for placeholder
        this.placeholder.css({
          width: this.placeholder[0].getBoundingClientRect().width + 'px',
          height: this.placeholder[0].getBoundingClientRect().height + 'px',
          position: 'relative',
          top: 0,
          left: 0
        });

        this._makeAncestorsOverflowVisible();

        // Set css on origin
        this.$el.css({
          position: 'absolute',
          'z-index': 1000,
          'will-change': 'left, top, width, height'
        });

        // Change from width or height attribute to css
        this.attrWidth = this.$el.attr('width');
        this.attrHeight = this.$el.attr('height');
        if (this.attrWidth) {
          this.$el.css('width', this.attrWidth + 'px');
          this.$el.removeAttr('width');
        }
        if (this.attrHeight) {
          this.$el.css('width', this.attrHeight + 'px');
          this.$el.removeAttr('height');
        }

        // Add overlay
        this.$overlay = $('<div id="materialbox-overlay"></div>').css({
          opacity: 0
        }).one('click', function () {
          if (_this19.doneAnimating) {
            _this19.close();
          }
        });

        // Put before in origin image to preserve z-index layering.
        this.$el.before(this.$overlay);

        // Set dimensions if needed
        var overlayOffset = this.$overlay[0].getBoundingClientRect();
        this.$overlay.css({
          width: this.windowWidth + 'px',
          height: this.windowHeight + 'px',
          left: -1 * overlayOffset.left + 'px',
          top: -1 * overlayOffset.top + 'px'
        });

        anim.remove(this.el);
        anim.remove(this.$overlay[0]);

        // Animate Overlay
        anim({
          targets: this.$overlay[0],
          opacity: 1,
          duration: this.options.inDuration,
          easing: 'easeOutQuad'
        });

        // Add and animate caption if it exists
        if (this.caption !== '') {
          if (this.$photocaption) {
            anim.remove(this.$photoCaption[0]);
          }
          this.$photoCaption = $('<div class="materialbox-caption"></div>');
          this.$photoCaption.text(this.caption);
          $('body').append(this.$photoCaption);
          this.$photoCaption.css({ display: 'inline' });

          anim({
            targets: this.$photoCaption[0],
            opacity: 1,
            duration: this.options.inDuration,
            easing: 'easeOutQuad'
          });
        }

        // Resize Image
        var ratio = 0;
        var widthPercent = this.originalWidth / this.windowWidth;
        var heightPercent = this.originalHeight / this.windowHeight;
        this.newWidth = 0;
        this.newHeight = 0;

        if (widthPercent > heightPercent) {
          ratio = this.originalHeight / this.originalWidth;
          this.newWidth = this.windowWidth * 0.9;
          this.newHeight = this.windowWidth * 0.9 * ratio;
        } else {
          ratio = this.originalWidth / this.originalHeight;
          this.newWidth = this.windowHeight * 0.9 * ratio;
          this.newHeight = this.windowHeight * 0.9;
        }

        this._animateImageIn();

        // Handle Exit triggers
        this._handleWindowScrollBound = this._handleWindowScroll.bind(this);
        this._handleWindowResizeBound = this._handleWindowResize.bind(this);
        this._handleWindowEscapeBound = this._handleWindowEscape.bind(this);

        window.addEventListener('scroll', this._handleWindowScrollBound);
        window.addEventListener('resize', this._handleWindowResizeBound);
        window.addEventListener('keyup', this._handleWindowEscapeBound);
      }

      /**
       * Close Materialbox
       */

    }, {
      key: "close",
      value: function close() {
        var _this20 = this;

        this._updateVars();
        this.doneAnimating = false;

        // onCloseStart callback
        if (typeof this.options.onCloseStart === 'function') {
          this.options.onCloseStart.call(this, this.el);
        }

        anim.remove(this.el);
        anim.remove(this.$overlay[0]);

        if (this.caption !== '') {
          anim.remove(this.$photoCaption[0]);
        }

        // disable exit handlers
        window.removeEventListener('scroll', this._handleWindowScrollBound);
        window.removeEventListener('resize', this._handleWindowResizeBound);
        window.removeEventListener('keyup', this._handleWindowEscapeBound);

        anim({
          targets: this.$overlay[0],
          opacity: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: function () {
            _this20.overlayActive = false;
            _this20.$overlay.remove();
          }
        });

        this._animateImageOut();

        // Remove Caption + reset css settings on image
        if (this.caption !== '') {
          anim({
            targets: this.$photoCaption[0],
            opacity: 0,
            duration: this.options.outDuration,
            easing: 'easeOutQuad',
            complete: function () {
              _this20.$photoCaption.remove();
            }
          });
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Materialbox.__proto__ || Object.getPrototypeOf(Materialbox), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Materialbox;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Materialbox;
  }(Component);

  M.Materialbox = Materialbox;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Materialbox, 'materialbox', 'M_Materialbox');
  }
})(cash, M.anime);
;(function ($) {
  'use strict';

  var _defaults = {
    responsiveThreshold: 0 // breakpoint for swipeable
  };

  var Parallax = function (_Component5) {
    _inherits(Parallax, _Component5);

    function Parallax(el, options) {
      _classCallCheck(this, Parallax);

      var _this21 = _possibleConstructorReturn(this, (Parallax.__proto__ || Object.getPrototypeOf(Parallax)).call(this, Parallax, el, options));

      _this21.el.M_Parallax = _this21;

      /**
       * Options for the Parallax
       * @member Parallax#options
       * @prop {Number} responsiveThreshold
       */
      _this21.options = $.extend({}, Parallax.defaults, options);
      _this21._enabled = window.innerWidth > _this21.options.responsiveThreshold;

      _this21.$img = _this21.$el.find('img').first();
      _this21.$img.each(function () {
        var el = this;
        if (el.complete) $(el).trigger('load');
      });

      _this21._updateParallax();
      _this21._setupEventHandlers();
      _this21._setupStyles();

      Parallax._parallaxes.push(_this21);
      return _this21;
    }

    _createClass(Parallax, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        Parallax._parallaxes.splice(Parallax._parallaxes.indexOf(this), 1);
        this.$img[0].style.transform = '';
        this._removeEventHandlers();

        this.$el[0].M_Parallax = undefined;
      }
    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleImageLoadBound = this._handleImageLoad.bind(this);
        this.$img[0].addEventListener('load', this._handleImageLoadBound);

        if (Parallax._parallaxes.length === 0) {
          Parallax._handleScrollThrottled = M.throttle(Parallax._handleScroll, 5);
          window.addEventListener('scroll', Parallax._handleScrollThrottled);

          Parallax._handleWindowResizeThrottled = M.throttle(Parallax._handleWindowResize, 5);
          window.addEventListener('resize', Parallax._handleWindowResizeThrottled);
        }
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.$img[0].removeEventListener('load', this._handleImageLoadBound);

        if (Parallax._parallaxes.length === 0) {
          window.removeEventListener('scroll', Parallax._handleScrollThrottled);
          window.removeEventListener('resize', Parallax._handleWindowResizeThrottled);
        }
      }
    }, {
      key: "_setupStyles",
      value: function _setupStyles() {
        this.$img[0].style.opacity = 1;
      }
    }, {
      key: "_handleImageLoad",
      value: function _handleImageLoad() {
        this._updateParallax();
      }
    }, {
      key: "_updateParallax",
      value: function _updateParallax() {
        var containerHeight = this.$el.height() > 0 ? this.el.parentNode.offsetHeight : 500;
        var imgHeight = this.$img[0].offsetHeight;
        var parallaxDist = imgHeight - containerHeight;
        var bottom = this.$el.offset().top + containerHeight;
        var top = this.$el.offset().top;
        var scrollTop = M.getDocumentScrollTop();
        var windowHeight = window.innerHeight;
        var windowBottom = scrollTop + windowHeight;
        var percentScrolled = (windowBottom - top) / (containerHeight + windowHeight);
        var parallax = parallaxDist * percentScrolled;

        if (!this._enabled) {
          this.$img[0].style.transform = '';
        } else if (bottom > scrollTop && top < scrollTop + windowHeight) {
          this.$img[0].style.transform = "translate3D(-50%, " + parallax + "px, 0)";
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Parallax.__proto__ || Object.getPrototypeOf(Parallax), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Parallax;
      }
    }, {
      key: "_handleScroll",
      value: function _handleScroll() {
        for (var i = 0; i < Parallax._parallaxes.length; i++) {
          var parallaxInstance = Parallax._parallaxes[i];
          parallaxInstance._updateParallax.call(parallaxInstance);
        }
      }
    }, {
      key: "_handleWindowResize",
      value: function _handleWindowResize() {
        for (var i = 0; i < Parallax._parallaxes.length; i++) {
          var parallaxInstance = Parallax._parallaxes[i];
          parallaxInstance._enabled = window.innerWidth > parallaxInstance.options.responsiveThreshold;
        }
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Parallax;
  }(Component);

  /**
   * @static
   * @memberof Parallax
   */


  Parallax._parallaxes = [];

  M.Parallax = Parallax;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Parallax, 'parallax', 'M_Parallax');
  }
})(cash);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    duration: 300,
    onShow: null,
    swipeable: false,
    responsiveThreshold: Infinity // breakpoint for swipeable
  };

  /**
   * @class
   *
   */

  var Tabs = function (_Component6) {
    _inherits(Tabs, _Component6);

    /**
     * Construct Tabs instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Tabs(el, options) {
      _classCallCheck(this, Tabs);

      var _this22 = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, Tabs, el, options));

      _this22.el.M_Tabs = _this22;

      /**
       * Options for the Tabs
       * @member Tabs#options
       * @prop {Number} duration
       * @prop {Function} onShow
       * @prop {Boolean} swipeable
       * @prop {Number} responsiveThreshold
       */
      _this22.options = $.extend({}, Tabs.defaults, options);

      // Setup
      _this22.$tabLinks = _this22.$el.children('li.tab').children('a');
      _this22.index = 0;
      _this22._setupActiveTabLink();

      // Setup tabs content
      if (_this22.options.swipeable) {
        _this22._setupSwipeableTabs();
      } else {
        _this22._setupNormalTabs();
      }

      // Setup tabs indicator after content to ensure accurate widths
      _this22._setTabsAndTabWidth();
      _this22._createIndicator();

      _this22._setupEventHandlers();
      return _this22;
    }

    _createClass(Tabs, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this._indicator.parentNode.removeChild(this._indicator);

        if (this.options.swipeable) {
          this._teardownSwipeableTabs();
        } else {
          this._teardownNormalTabs();
        }

        this.$el[0].M_Tabs = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleWindowResizeBound = this._handleWindowResize.bind(this);
        window.addEventListener('resize', this._handleWindowResizeBound);

        this._handleTabClickBound = this._handleTabClick.bind(this);
        this.el.addEventListener('click', this._handleTabClickBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        window.removeEventListener('resize', this._handleWindowResizeBound);
        this.el.removeEventListener('click', this._handleTabClickBound);
      }

      /**
       * Handle window Resize
       */

    }, {
      key: "_handleWindowResize",
      value: function _handleWindowResize() {
        this._setTabsAndTabWidth();

        if (this.tabWidth !== 0 && this.tabsWidth !== 0) {
          this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + 'px';
          this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + 'px';
        }
      }

      /**
       * Handle tab click
       * @param {Event} e
       */

    }, {
      key: "_handleTabClick",
      value: function _handleTabClick(e) {
        var _this23 = this;

        var tab = $(e.target).closest('li.tab');
        var tabLink = $(e.target).closest('a');

        // Handle click on tab link only
        if (!tabLink.length || !tabLink.parent().hasClass('tab')) {
          return;
        }

        if (tab.hasClass('disabled')) {
          e.preventDefault();
          return;
        }

        // Act as regular link if target attribute is specified.
        if (!!tabLink.attr('target')) {
          return;
        }

        // Make the old tab inactive.
        this.$activeTabLink.removeClass('active');
        var $oldContent = this.$content;

        // Update the variables with the new link and content
        this.$activeTabLink = tabLink;
        this.$content = $(M.escapeHash(tabLink[0].hash));
        this.$tabLinks = this.$el.children('li.tab').children('a');

        // Make the tab active.
        this.$activeTabLink.addClass('active');
        var prevIndex = this.index;
        this.index = Math.max(this.$tabLinks.index(tabLink), 0);

        // Swap content
        if (this.options.swipeable) {
          if (this._tabsCarousel) {
            this._tabsCarousel.set(this.index, function () {
              if (typeof _this23.options.onShow === 'function') {
                _this23.options.onShow.call(_this23, _this23.$content[0]);
              }
            });
          }
        } else {
          if (this.$content.length) {
            this.$content[0].style.display = 'block';
            this.$content.addClass('active');
            if (typeof this.options.onShow === 'function') {
              this.options.onShow.call(this, this.$content[0]);
            }

            if ($oldContent.length && !$oldContent.is(this.$content)) {
              $oldContent[0].style.display = 'none';
              $oldContent.removeClass('active');
            }
          }
        }

        // Update widths after content is swapped (scrollbar bugfix)
        this._setTabsAndTabWidth();

        // Update indicator
        this._animateIndicator(prevIndex);

        // Prevent the anchor's default click action
        e.preventDefault();
      }

      /**
       * Generate elements for tab indicator.
       */

    }, {
      key: "_createIndicator",
      value: function _createIndicator() {
        var _this24 = this;

        var indicator = document.createElement('li');
        indicator.classList.add('indicator');

        this.el.appendChild(indicator);
        this._indicator = indicator;

        setTimeout(function () {
          _this24._indicator.style.left = _this24._calcLeftPos(_this24.$activeTabLink) + 'px';
          _this24._indicator.style.right = _this24._calcRightPos(_this24.$activeTabLink) + 'px';
        }, 0);
      }

      /**
       * Setup first active tab link.
       */

    }, {
      key: "_setupActiveTabLink",
      value: function _setupActiveTabLink() {
        // If the location.hash matches one of the links, use that as the active tab.
        this.$activeTabLink = $(this.$tabLinks.filter('[href="' + location.hash + '"]'));

        // If no match is found, use the first link or any with class 'active' as the initial active tab.
        if (this.$activeTabLink.length === 0) {
          this.$activeTabLink = this.$el.children('li.tab').children('a.active').first();
        }
        if (this.$activeTabLink.length === 0) {
          this.$activeTabLink = this.$el.children('li.tab').children('a').first();
        }

        this.$tabLinks.removeClass('active');
        this.$activeTabLink[0].classList.add('active');

        this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0);

        if (this.$activeTabLink.length) {
          this.$content = $(M.escapeHash(this.$activeTabLink[0].hash));
          this.$content.addClass('active');
        }
      }

      /**
       * Setup swipeable tabs
       */

    }, {
      key: "_setupSwipeableTabs",
      value: function _setupSwipeableTabs() {
        var _this25 = this;

        // Change swipeable according to responsive threshold
        if (window.innerWidth > this.options.responsiveThreshold) {
          this.options.swipeable = false;
        }

        var $tabsContent = $();
        this.$tabLinks.each(function (link) {
          var $currContent = $(M.escapeHash(link.hash));
          $currContent.addClass('carousel-item');
          $tabsContent = $tabsContent.add($currContent);
        });

        var $tabsWrapper = $('<div class="tabs-content carousel carousel-slider"></div>');
        $tabsContent.first().before($tabsWrapper);
        $tabsWrapper.append($tabsContent);
        $tabsContent[0].style.display = '';

        // Keep active tab index to set initial carousel slide
        var activeTabIndex = this.$activeTabLink.closest('.tab').index();

        this._tabsCarousel = M.Carousel.init($tabsWrapper[0], {
          fullWidth: true,
          noWrap: true,
          onCycleTo: function (item) {
            var prevIndex = _this25.index;
            _this25.index = $(item).index();
            _this25.$activeTabLink.removeClass('active');
            _this25.$activeTabLink = _this25.$tabLinks.eq(_this25.index);
            _this25.$activeTabLink.addClass('active');
            _this25._animateIndicator(prevIndex);
            if (typeof _this25.options.onShow === 'function') {
              _this25.options.onShow.call(_this25, _this25.$content[0]);
            }
          }
        });

        // Set initial carousel slide to active tab
        this._tabsCarousel.set(activeTabIndex);
      }

      /**
       * Teardown normal tabs.
       */

    }, {
      key: "_teardownSwipeableTabs",
      value: function _teardownSwipeableTabs() {
        var $tabsWrapper = this._tabsCarousel.$el;
        this._tabsCarousel.destroy();

        // Unwrap
        $tabsWrapper.after($tabsWrapper.children());
        $tabsWrapper.remove();
      }

      /**
       * Setup normal tabs.
       */

    }, {
      key: "_setupNormalTabs",
      value: function _setupNormalTabs() {
        // Hide Tabs Content
        this.$tabLinks.not(this.$activeTabLink).each(function (link) {
          if (!!link.hash) {
            var $currContent = $(M.escapeHash(link.hash));
            if ($currContent.length) {
              $currContent[0].style.display = 'none';
            }
          }
        });
      }

      /**
       * Teardown normal tabs.
       */

    }, {
      key: "_teardownNormalTabs",
      value: function _teardownNormalTabs() {
        // show Tabs Content
        this.$tabLinks.each(function (link) {
          if (!!link.hash) {
            var $currContent = $(M.escapeHash(link.hash));
            if ($currContent.length) {
              $currContent[0].style.display = '';
            }
          }
        });
      }

      /**
       * set tabs and tab width
       */

    }, {
      key: "_setTabsAndTabWidth",
      value: function _setTabsAndTabWidth() {
        this.tabsWidth = this.$el.width();
        this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length;
      }

      /**
       * Finds right attribute for indicator based on active tab.
       * @param {cash} el
       */

    }, {
      key: "_calcRightPos",
      value: function _calcRightPos(el) {
        return Math.ceil(this.tabsWidth - el.position().left - el[0].getBoundingClientRect().width);
      }

      /**
       * Finds left attribute for indicator based on active tab.
       * @param {cash} el
       */

    }, {
      key: "_calcLeftPos",
      value: function _calcLeftPos(el) {
        return Math.floor(el.position().left);
      }
    }, {
      key: "updateTabIndicator",
      value: function updateTabIndicator() {
        this._setTabsAndTabWidth();
        this._animateIndicator(this.index);
      }

      /**
       * Animates Indicator to active tab.
       * @param {Number} prevIndex
       */

    }, {
      key: "_animateIndicator",
      value: function _animateIndicator(prevIndex) {
        var leftDelay = 0,
            rightDelay = 0;

        if (this.index - prevIndex >= 0) {
          leftDelay = 90;
        } else {
          rightDelay = 90;
        }

        // Animate
        var animOptions = {
          targets: this._indicator,
          left: {
            value: this._calcLeftPos(this.$activeTabLink),
            delay: leftDelay
          },
          right: {
            value: this._calcRightPos(this.$activeTabLink),
            delay: rightDelay
          },
          duration: this.options.duration,
          easing: 'easeOutQuad'
        };
        anim.remove(this._indicator);
        anim(animOptions);
      }

      /**
       * Select tab.
       * @param {String} tabId
       */

    }, {
      key: "select",
      value: function select(tabId) {
        var tab = this.$tabLinks.filter('[href="#' + tabId + '"]');
        if (tab.length) {
          tab.trigger('click');
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Tabs.__proto__ || Object.getPrototypeOf(Tabs), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Tabs;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Tabs;
  }(Component);

  M.Tabs = Tabs;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Tabs, 'tabs', 'M_Tabs');
  }
})(cash, M.anime);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    exitDelay: 200,
    enterDelay: 0,
    html: null,
    margin: 5,
    inDuration: 250,
    outDuration: 200,
    position: 'bottom',
    transitionMovement: 10
  };

  /**
   * @class
   *
   */

  var Tooltip = function (_Component7) {
    _inherits(Tooltip, _Component7);

    /**
     * Construct Tooltip instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Tooltip(el, options) {
      _classCallCheck(this, Tooltip);

      var _this26 = _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, Tooltip, el, options));

      _this26.el.M_Tooltip = _this26;
      _this26.options = $.extend({}, Tooltip.defaults, options);

      _this26.isOpen = false;
      _this26.isHovered = false;
      _this26.isFocused = false;
      _this26._appendTooltipEl();
      _this26._setupEventHandlers();
      return _this26;
    }

    _createClass(Tooltip, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        $(this.tooltipEl).remove();
        this._removeEventHandlers();
        this.el.M_Tooltip = undefined;
      }
    }, {
      key: "_appendTooltipEl",
      value: function _appendTooltipEl() {
        var tooltipEl = document.createElement('div');
        tooltipEl.classList.add('material-tooltip');
        this.tooltipEl = tooltipEl;

        var tooltipContentEl = document.createElement('div');
        tooltipContentEl.classList.add('tooltip-content');
        tooltipContentEl.innerHTML = this.options.html;
        tooltipEl.appendChild(tooltipContentEl);
        document.body.appendChild(tooltipEl);
      }
    }, {
      key: "_updateTooltipContent",
      value: function _updateTooltipContent() {
        this.tooltipEl.querySelector('.tooltip-content').innerHTML = this.options.html;
      }
    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleMouseEnterBound = this._handleMouseEnter.bind(this);
        this._handleMouseLeaveBound = this._handleMouseLeave.bind(this);
        this._handleFocusBound = this._handleFocus.bind(this);
        this._handleBlurBound = this._handleBlur.bind(this);
        this.el.addEventListener('mouseenter', this._handleMouseEnterBound);
        this.el.addEventListener('mouseleave', this._handleMouseLeaveBound);
        this.el.addEventListener('focus', this._handleFocusBound, true);
        this.el.addEventListener('blur', this._handleBlurBound, true);
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('mouseenter', this._handleMouseEnterBound);
        this.el.removeEventListener('mouseleave', this._handleMouseLeaveBound);
        this.el.removeEventListener('focus', this._handleFocusBound, true);
        this.el.removeEventListener('blur', this._handleBlurBound, true);
      }
    }, {
      key: "open",
      value: function open(isManual) {
        if (this.isOpen) {
          return;
        }
        isManual = isManual === undefined ? true : undefined; // Default value true
        this.isOpen = true;
        // Update tooltip content with HTML attribute options
        this.options = $.extend({}, this.options, this._getAttributeOptions());
        this._updateTooltipContent();
        this._setEnterDelayTimeout(isManual);
      }
    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isHovered = false;
        this.isFocused = false;
        this.isOpen = false;
        this._setExitDelayTimeout();
      }

      /**
       * Create timeout which delays when the tooltip closes
       */

    }, {
      key: "_setExitDelayTimeout",
      value: function _setExitDelayTimeout() {
        var _this27 = this;

        clearTimeout(this._exitDelayTimeout);

        this._exitDelayTimeout = setTimeout(function () {
          if (_this27.isHovered || _this27.isFocused) {
            return;
          }

          _this27._animateOut();
        }, this.options.exitDelay);
      }

      /**
       * Create timeout which delays when the toast closes
       */

    }, {
      key: "_setEnterDelayTimeout",
      value: function _setEnterDelayTimeout(isManual) {
        var _this28 = this;

        clearTimeout(this._enterDelayTimeout);

        this._enterDelayTimeout = setTimeout(function () {
          if (!_this28.isHovered && !_this28.isFocused && !isManual) {
            return;
          }

          _this28._animateIn();
        }, this.options.enterDelay);
      }
    }, {
      key: "_positionTooltip",
      value: function _positionTooltip() {
        var origin = this.el,
            tooltip = this.tooltipEl,
            originHeight = origin.offsetHeight,
            originWidth = origin.offsetWidth,
            tooltipHeight = tooltip.offsetHeight,
            tooltipWidth = tooltip.offsetWidth,
            newCoordinates = void 0,
            margin = this.options.margin,
            targetTop = void 0,
            targetLeft = void 0;

        this.xMovement = 0, this.yMovement = 0;

        targetTop = origin.getBoundingClientRect().top + M.getDocumentScrollTop();
        targetLeft = origin.getBoundingClientRect().left + M.getDocumentScrollLeft();

        if (this.options.position === 'top') {
          targetTop += -tooltipHeight - margin;
          targetLeft += originWidth / 2 - tooltipWidth / 2;
          this.yMovement = -this.options.transitionMovement;
        } else if (this.options.position === 'right') {
          targetTop += originHeight / 2 - tooltipHeight / 2;
          targetLeft += originWidth + margin;
          this.xMovement = this.options.transitionMovement;
        } else if (this.options.position === 'left') {
          targetTop += originHeight / 2 - tooltipHeight / 2;
          targetLeft += -tooltipWidth - margin;
          this.xMovement = -this.options.transitionMovement;
        } else {
          targetTop += originHeight + margin;
          targetLeft += originWidth / 2 - tooltipWidth / 2;
          this.yMovement = this.options.transitionMovement;
        }

        newCoordinates = this._repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
        $(tooltip).css({
          top: newCoordinates.y + 'px',
          left: newCoordinates.x + 'px'
        });
      }
    }, {
      key: "_repositionWithinScreen",
      value: function _repositionWithinScreen(x, y, width, height) {
        var scrollLeft = M.getDocumentScrollLeft();
        var scrollTop = M.getDocumentScrollTop();
        var newX = x - scrollLeft;
        var newY = y - scrollTop;

        var bounding = {
          left: newX,
          top: newY,
          width: width,
          height: height
        };

        var offset = this.options.margin + this.options.transitionMovement;
        var edges = M.checkWithinContainer(document.body, bounding, offset);

        if (edges.left) {
          newX = offset;
        } else if (edges.right) {
          newX -= newX + width - window.innerWidth;
        }

        if (edges.top) {
          newY = offset;
        } else if (edges.bottom) {
          newY -= newY + height - window.innerHeight;
        }

        return {
          x: newX + scrollLeft,
          y: newY + scrollTop
        };
      }
    }, {
      key: "_animateIn",
      value: function _animateIn() {
        this._positionTooltip();
        this.tooltipEl.style.visibility = 'visible';
        anim.remove(this.tooltipEl);
        anim({
          targets: this.tooltipEl,
          opacity: 1,
          translateX: this.xMovement,
          translateY: this.yMovement,
          duration: this.options.inDuration,
          easing: 'easeOutCubic'
        });
      }
    }, {
      key: "_animateOut",
      value: function _animateOut() {
        anim.remove(this.tooltipEl);
        anim({
          targets: this.tooltipEl,
          opacity: 0,
          translateX: 0,
          translateY: 0,
          duration: this.options.outDuration,
          easing: 'easeOutCubic'
        });
      }
    }, {
      key: "_handleMouseEnter",
      value: function _handleMouseEnter() {
        this.isHovered = true;
        this.isFocused = false; // Allows close of tooltip when opened by focus.
        this.open(false);
      }
    }, {
      key: "_handleMouseLeave",
      value: function _handleMouseLeave() {
        this.isHovered = false;
        this.isFocused = false; // Allows close of tooltip when opened by focus.
        this.close();
      }
    }, {
      key: "_handleFocus",
      value: function _handleFocus() {
        if (M.tabPressed) {
          this.isFocused = true;
          this.open(false);
        }
      }
    }, {
      key: "_handleBlur",
      value: function _handleBlur() {
        this.isFocused = false;
        this.close();
      }
    }, {
      key: "_getAttributeOptions",
      value: function _getAttributeOptions() {
        var attributeOptions = {};
        var tooltipTextOption = this.el.getAttribute('data-tooltip');
        var positionOption = this.el.getAttribute('data-position');

        if (tooltipTextOption) {
          attributeOptions.html = tooltipTextOption;
        }

        if (positionOption) {
          attributeOptions.position = positionOption;
        }
        return attributeOptions;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Tooltip.__proto__ || Object.getPrototypeOf(Tooltip), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Tooltip;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Tooltip;
  }(Component);

  M.Tooltip = Tooltip;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Tooltip, 'tooltip', 'M_Tooltip');
  }
})(cash, M.anime);
; /*!
  * Waves v0.6.4
  * http://fian.my.id/Waves
  *
  * Copyright 2014 Alfiana E. Sibuea and other contributors
  * Released under the MIT license
  * https://github.com/fians/Waves/blob/master/LICENSE
  */

;(function (window) {
  'use strict';

  var Waves = Waves || {};
  var $$ = document.querySelectorAll.bind(document);

  // Find exact position of element
  function isWindow(obj) {
    return obj !== null && obj === obj.window;
  }

  function getWindow(elem) {
    return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }

  function offset(elem) {
    var docElem,
        win,
        box = { top: 0, left: 0 },
        doc = elem && elem.ownerDocument;

    docElem = doc.documentElement;

    if (typeof elem.getBoundingClientRect !== typeof undefined) {
      box = elem.getBoundingClientRect();
    }
    win = getWindow(doc);
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft
    };
  }

  function convertStyle(obj) {
    var style = '';

    for (var a in obj) {
      if (obj.hasOwnProperty(a)) {
        style += a + ':' + obj[a] + ';';
      }
    }

    return style;
  }

  var Effect = {

    // Effect delay
    duration: 750,

    show: function (e, element) {

      // Disable right click
      if (e.button === 2) {
        return false;
      }

      var el = element || this;

      // Create ripple
      var ripple = document.createElement('div');
      ripple.className = 'waves-ripple';
      el.appendChild(ripple);

      // Get click coordinate and element witdh
      var pos = offset(el);
      var relativeY = e.pageY - pos.top;
      var relativeX = e.pageX - pos.left;
      var scale = 'scale(' + el.clientWidth / 100 * 10 + ')';

      // Support for touch devices
      if ('touches' in e) {
        relativeY = e.touches[0].pageY - pos.top;
        relativeX = e.touches[0].pageX - pos.left;
      }

      // Attach data to element
      ripple.setAttribute('data-hold', Date.now());
      ripple.setAttribute('data-scale', scale);
      ripple.setAttribute('data-x', relativeX);
      ripple.setAttribute('data-y', relativeY);

      // Set ripple position
      var rippleStyle = {
        'top': relativeY + 'px',
        'left': relativeX + 'px'
      };

      ripple.className = ripple.className + ' waves-notransition';
      ripple.setAttribute('style', convertStyle(rippleStyle));
      ripple.className = ripple.className.replace('waves-notransition', '');

      // Scale the ripple
      rippleStyle['-webkit-transform'] = scale;
      rippleStyle['-moz-transform'] = scale;
      rippleStyle['-ms-transform'] = scale;
      rippleStyle['-o-transform'] = scale;
      rippleStyle.transform = scale;
      rippleStyle.opacity = '1';

      rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
      rippleStyle['transition-duration'] = Effect.duration + 'ms';

      rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
      rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

      ripple.setAttribute('style', convertStyle(rippleStyle));
    },

    hide: function (e) {
      TouchHandler.touchup(e);

      var el = this;
      var width = el.clientWidth * 1.4;

      // Get first ripple
      var ripple = null;
      var ripples = el.getElementsByClassName('waves-ripple');
      if (ripples.length > 0) {
        ripple = ripples[ripples.length - 1];
      } else {
        return false;
      }

      var relativeX = ripple.getAttribute('data-x');
      var relativeY = ripple.getAttribute('data-y');
      var scale = ripple.getAttribute('data-scale');

      // Get delay beetween mousedown and mouse leave
      var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
      var delay = 350 - diff;

      if (delay < 0) {
        delay = 0;
      }

      // Fade out ripple after delay
      setTimeout(function () {
        var style = {
          'top': relativeY + 'px',
          'left': relativeX + 'px',
          'opacity': '0',

          // Duration
          '-webkit-transition-duration': Effect.duration + 'ms',
          '-moz-transition-duration': Effect.duration + 'ms',
          '-o-transition-duration': Effect.duration + 'ms',
          'transition-duration': Effect.duration + 'ms',
          '-webkit-transform': scale,
          '-moz-transform': scale,
          '-ms-transform': scale,
          '-o-transform': scale,
          'transform': scale
        };

        ripple.setAttribute('style', convertStyle(style));

        setTimeout(function () {
          try {
            el.removeChild(ripple);
          } catch (e) {
            return false;
          }
        }, Effect.duration);
      }, delay);
    },

    // Little hack to make <input> can perform waves effect
    wrapInput: function (elements) {
      for (var a = 0; a < elements.length; a++) {
        var el = elements[a];

        if (el.tagName.toLowerCase() === 'input') {
          var parent = el.parentNode;

          // If input already have parent just pass through
          if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
            continue;
          }

          // Put element class and style to the specified parent
          var wrapper = document.createElement('i');
          wrapper.className = el.className + ' waves-input-wrapper';

          var elementStyle = el.getAttribute('style');

          if (!elementStyle) {
            elementStyle = '';
          }

          wrapper.setAttribute('style', elementStyle);

          el.className = 'waves-button-input';
          el.removeAttribute('style');

          // Put element as child
          parent.replaceChild(wrapper, el);
          wrapper.appendChild(el);
        }
      }
    }
  };

  /**
   * Disable mousedown event for 500ms during and after touch
   */
  var TouchHandler = {
    /* uses an integer rather than bool so there's no issues with
     * needing to clear timeouts if another touch event occurred
     * within the 500ms. Cannot mouseup between touchstart and
     * touchend, nor in the 500ms after touchend. */
    touches: 0,
    allowEvent: function (e) {
      var allow = true;

      if (e.type === 'touchstart') {
        TouchHandler.touches += 1; //push
      } else if (e.type === 'touchend' || e.type === 'touchcancel') {
        setTimeout(function () {
          if (TouchHandler.touches > 0) {
            TouchHandler.touches -= 1; //pop after 500ms
          }
        }, 500);
      } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
        allow = false;
      }

      return allow;
    },
    touchup: function (e) {
      TouchHandler.allowEvent(e);
    }
  };

  /**
   * Delegated click handler for .waves-effect element.
   * returns null when .waves-effect element not in "click tree"
   */
  function getWavesEffectElement(e) {
    if (TouchHandler.allowEvent(e) === false) {
      return null;
    }

    var element = null;
    var target = e.target || e.srcElement;

    while (target.parentNode !== null) {
      if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
        element = target;
        break;
      }
      target = target.parentNode;
    }
    return element;
  }

  /**
   * Bubble the click and show effect if .waves-effect elem was found
   */
  function showEffect(e) {
    var element = getWavesEffectElement(e);

    if (element !== null) {
      Effect.show(e, element);

      if ('ontouchstart' in window) {
        element.addEventListener('touchend', Effect.hide, false);
        element.addEventListener('touchcancel', Effect.hide, false);
      }

      element.addEventListener('mouseup', Effect.hide, false);
      element.addEventListener('mouseleave', Effect.hide, false);
      element.addEventListener('dragend', Effect.hide, false);
    }
  }

  Waves.displayEffect = function (options) {
    options = options || {};

    if ('duration' in options) {
      Effect.duration = options.duration;
    }

    //Wrap input inside <i> tag
    Effect.wrapInput($$('.waves-effect'));

    if ('ontouchstart' in window) {
      document.body.addEventListener('touchstart', showEffect, false);
    }

    document.body.addEventListener('mousedown', showEffect, false);
  };

  /**
   * Attach Waves to an input element (or any element which doesn't
   * bubble mouseup/mousedown events).
   *   Intended to be used with dynamically loaded forms/inputs, or
   * where the user doesn't want a delegated click handler.
   */
  Waves.attach = function (element) {
    //FUTURE: automatically add waves classes and allow users
    // to specify them with an options param? Eg. light/classic/button
    if (element.tagName.toLowerCase() === 'input') {
      Effect.wrapInput([element]);
      element = element.parentNode;
    }

    if ('ontouchstart' in window) {
      element.addEventListener('touchstart', showEffect, false);
    }

    element.addEventListener('mousedown', showEffect, false);
  };

  window.Waves = Waves;

  document.addEventListener('DOMContentLoaded', function () {
    Waves.displayEffect();
  }, false);
})(window);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    html: '',
    displayLength: 4000,
    inDuration: 300,
    outDuration: 375,
    classes: '',
    completeCallback: null,
    activationPercent: 0.8
  };

  var Toast = function () {
    function Toast(options) {
      _classCallCheck(this, Toast);

      /**
       * Options for the toast
       * @member Toast#options
       */
      this.options = $.extend({}, Toast.defaults, options);
      this.message = this.options.html;

      /**
       * Describes current pan state toast
       * @type {Boolean}
       */
      this.panning = false;

      /**
       * Time remaining until toast is removed
       */
      this.timeRemaining = this.options.displayLength;

      if (Toast._toasts.length === 0) {
        Toast._createContainer();
      }

      // Create new toast
      Toast._toasts.push(this);
      var toastElement = this._createToast();
      toastElement.M_Toast = this;
      this.el = toastElement;
      this.$el = $(toastElement);
      this._animateIn();
      this._setTimer();
    }

    _createClass(Toast, [{
      key: "_createToast",


      /**
       * Create toast and append it to toast container
       */
      value: function _createToast() {
        var toast = document.createElement('div');
        toast.classList.add('toast');

        // Add custom classes onto toast
        if (!!this.options.classes.length) {
          $(toast).addClass(this.options.classes);
        }

        // Set content
        if (typeof HTMLElement === 'object' ? this.message instanceof HTMLElement : this.message && typeof this.message === 'object' && this.message !== null && this.message.nodeType === 1 && typeof this.message.nodeName === 'string') {
          toast.appendChild(this.message);

          // Check if it is jQuery object
        } else if (!!this.message.jquery) {
          $(toast).append(this.message[0]);

          // Insert as html;
        } else {
          toast.innerHTML = this.message;
        }

        // Append toasft
        Toast._container.appendChild(toast);
        return toast;
      }

      /**
       * Animate in toast
       */

    }, {
      key: "_animateIn",
      value: function _animateIn() {
        // Animate toast in
        anim({
          targets: this.el,
          top: 0,
          opacity: 1,
          duration: this.options.inDuration,
          easing: 'easeOutCubic'
        });
      }

      /**
       * Create setInterval which automatically removes toast when timeRemaining >= 0
       * has been reached
       */

    }, {
      key: "_setTimer",
      value: function _setTimer() {
        var _this29 = this;

        if (this.timeRemaining !== Infinity) {
          this.counterInterval = setInterval(function () {
            // If toast is not being dragged, decrease its time remaining
            if (!_this29.panning) {
              _this29.timeRemaining -= 20;
            }

            // Animate toast out
            if (_this29.timeRemaining <= 0) {
              _this29.dismiss();
            }
          }, 20);
        }
      }

      /**
       * Dismiss toast with animation
       */

    }, {
      key: "dismiss",
      value: function dismiss() {
        var _this30 = this;

        window.clearInterval(this.counterInterval);
        var activationDistance = this.el.offsetWidth * this.options.activationPercent;

        if (this.wasSwiped) {
          this.el.style.transition = 'transform .05s, opacity .05s';
          this.el.style.transform = "translateX(" + activationDistance + "px)";
          this.el.style.opacity = 0;
        }

        anim({
          targets: this.el,
          opacity: 0,
          marginTop: -40,
          duration: this.options.outDuration,
          easing: 'easeOutExpo',
          complete: function () {
            // Call the optional callback
            if (typeof _this30.options.completeCallback === 'function') {
              _this30.options.completeCallback();
            }
            // Remove toast from DOM
            _this30.$el.remove();
            Toast._toasts.splice(Toast._toasts.indexOf(_this30), 1);
            if (Toast._toasts.length === 0) {
              Toast._removeContainer();
            }
          }
        });
      }
    }], [{
      key: "getInstance",


      /**
       * Get Instance
       */
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Toast;
      }

      /**
       * Append toast container and add event handlers
       */

    }, {
      key: "_createContainer",
      value: function _createContainer() {
        var container = document.createElement('div');
        container.setAttribute('id', 'toast-container');

        // Add event handler
        container.addEventListener('touchstart', Toast._onDragStart);
        container.addEventListener('touchmove', Toast._onDragMove);
        container.addEventListener('touchend', Toast._onDragEnd);

        container.addEventListener('mousedown', Toast._onDragStart);
        document.addEventListener('mousemove', Toast._onDragMove);
        document.addEventListener('mouseup', Toast._onDragEnd);

        document.body.appendChild(container);
        Toast._container = container;
      }

      /**
       * Remove toast container and event handlers
       */

    }, {
      key: "_removeContainer",
      value: function _removeContainer() {
        // Add event handler
        document.removeEventListener('mousemove', Toast._onDragMove);
        document.removeEventListener('mouseup', Toast._onDragEnd);

        $(Toast._container).remove();
        Toast._container = null;
      }

      /**
       * Begin drag handler
       * @param {Event} e
       */

    }, {
      key: "_onDragStart",
      value: function _onDragStart(e) {
        if (e.target && $(e.target).closest('.toast').length) {
          var $toast = $(e.target).closest('.toast');
          var toast = $toast[0].M_Toast;
          toast.panning = true;
          Toast._draggedToast = toast;
          toast.el.classList.add('panning');
          toast.el.style.transition = '';
          toast.startingXPos = Toast._xPos(e);
          toast.time = Date.now();
          toast.xPos = Toast._xPos(e);
        }
      }

      /**
       * Drag move handler
       * @param {Event} e
       */

    }, {
      key: "_onDragMove",
      value: function _onDragMove(e) {
        if (!!Toast._draggedToast) {
          e.preventDefault();
          var toast = Toast._draggedToast;
          toast.deltaX = Math.abs(toast.xPos - Toast._xPos(e));
          toast.xPos = Toast._xPos(e);
          toast.velocityX = toast.deltaX / (Date.now() - toast.time);
          toast.time = Date.now();

          var totalDeltaX = toast.xPos - toast.startingXPos;
          var activationDistance = toast.el.offsetWidth * toast.options.activationPercent;
          toast.el.style.transform = "translateX(" + totalDeltaX + "px)";
          toast.el.style.opacity = 1 - Math.abs(totalDeltaX / activationDistance);
        }
      }

      /**
       * End drag handler
       */

    }, {
      key: "_onDragEnd",
      value: function _onDragEnd() {
        if (!!Toast._draggedToast) {
          var toast = Toast._draggedToast;
          toast.panning = false;
          toast.el.classList.remove('panning');

          var totalDeltaX = toast.xPos - toast.startingXPos;
          var activationDistance = toast.el.offsetWidth * toast.options.activationPercent;
          var shouldBeDismissed = Math.abs(totalDeltaX) > activationDistance || toast.velocityX > 1;

          // Remove toast
          if (shouldBeDismissed) {
            toast.wasSwiped = true;
            toast.dismiss();

            // Animate toast back to original position
          } else {
            toast.el.style.transition = 'transform .2s, opacity .2s';
            toast.el.style.transform = '';
            toast.el.style.opacity = '';
          }
          Toast._draggedToast = null;
        }
      }

      /**
       * Get x position of mouse or touch event
       * @param {Event} e
       */

    }, {
      key: "_xPos",
      value: function _xPos(e) {
        if (e.targetTouches && e.targetTouches.length >= 1) {
          return e.targetTouches[0].clientX;
        }
        // mouse event
        return e.clientX;
      }

      /**
       * Remove all toasts
       */

    }, {
      key: "dismissAll",
      value: function dismissAll() {
        for (var toastIndex in Toast._toasts) {
          Toast._toasts[toastIndex].dismiss();
        }
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Toast;
  }();

  /**
   * @static
   * @memberof Toast
   * @type {Array.<Toast>}
   */


  Toast._toasts = [];

  /**
   * @static
   * @memberof Toast
   */
  Toast._container = null;

  /**
   * @static
   * @memberof Toast
   * @type {Toast}
   */
  Toast._draggedToast = null;

  M.Toast = Toast;
  M.toast = function (options) {
    return new Toast(options);
  };
})(cash, M.anime);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  };

  /**
   * @class
   */

  var Sidenav = function (_Component8) {
    _inherits(Sidenav, _Component8);

    /**
     * Construct Sidenav instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Sidenav(el, options) {
      _classCallCheck(this, Sidenav);

      var _this31 = _possibleConstructorReturn(this, (Sidenav.__proto__ || Object.getPrototypeOf(Sidenav)).call(this, Sidenav, el, options));

      _this31.el.M_Sidenav = _this31;
      _this31.id = _this31.$el.attr('id');

      /**
       * Options for the Sidenav
       * @member Sidenav#options
       * @prop {String} [edge='left'] - Side of screen on which Sidenav appears
       * @prop {Boolean} [draggable=true] - Allow swipe gestures to open/close Sidenav
       * @prop {Number} [inDuration=250] - Length in ms of enter transition
       * @prop {Number} [outDuration=200] - Length in ms of exit transition
       * @prop {Function} onOpenStart - Function called when sidenav starts entering
       * @prop {Function} onOpenEnd - Function called when sidenav finishes entering
       * @prop {Function} onCloseStart - Function called when sidenav starts exiting
       * @prop {Function} onCloseEnd - Function called when sidenav finishes exiting
       */
      _this31.options = $.extend({}, Sidenav.defaults, options);

      /**
       * Describes open/close state of Sidenav
       * @type {Boolean}
       */
      _this31.isOpen = false;

      /**
       * Describes if Sidenav is fixed
       * @type {Boolean}
       */
      _this31.isFixed = _this31.el.classList.contains('sidenav-fixed');

      /**
       * Describes if Sidenav is being draggeed
       * @type {Boolean}
       */
      _this31.isDragged = false;

      // Window size variables for window resize checks
      _this31.lastWindowWidth = window.innerWidth;
      _this31.lastWindowHeight = window.innerHeight;

      _this31._createOverlay();
      _this31._createDragTarget();
      _this31._setupEventHandlers();
      _this31._setupClasses();
      _this31._setupFixed();

      Sidenav._sidenavs.push(_this31);
      return _this31;
    }

    _createClass(Sidenav, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this._enableBodyScrolling();
        this._overlay.parentNode.removeChild(this._overlay);
        this.dragTarget.parentNode.removeChild(this.dragTarget);
        this.el.M_Sidenav = undefined;
        this.el.style.transform = '';

        var index = Sidenav._sidenavs.indexOf(this);
        if (index >= 0) {
          Sidenav._sidenavs.splice(index, 1);
        }
      }
    }, {
      key: "_createOverlay",
      value: function _createOverlay() {
        var overlay = document.createElement('div');
        this._closeBound = this.close.bind(this);
        overlay.classList.add('sidenav-overlay');

        overlay.addEventListener('click', this._closeBound);

        document.body.appendChild(overlay);
        this._overlay = overlay;
      }
    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        if (Sidenav._sidenavs.length === 0) {
          document.body.addEventListener('click', this._handleTriggerClick);
        }

        this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this);
        this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this);
        this._handleCloseDragBound = this._handleCloseDrag.bind(this);
        this._handleCloseReleaseBound = this._handleCloseRelease.bind(this);
        this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this);

        this.dragTarget.addEventListener('touchmove', this._handleDragTargetDragBound);
        this.dragTarget.addEventListener('touchend', this._handleDragTargetReleaseBound);
        this._overlay.addEventListener('touchmove', this._handleCloseDragBound);
        this._overlay.addEventListener('touchend', this._handleCloseReleaseBound);
        this.el.addEventListener('touchmove', this._handleCloseDragBound);
        this.el.addEventListener('touchend', this._handleCloseReleaseBound);
        this.el.addEventListener('click', this._handleCloseTriggerClickBound);

        // Add resize for side nav fixed
        if (this.isFixed) {
          this._handleWindowResizeBound = this._handleWindowResize.bind(this);
          window.addEventListener('resize', this._handleWindowResizeBound);
        }
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        if (Sidenav._sidenavs.length === 1) {
          document.body.removeEventListener('click', this._handleTriggerClick);
        }

        this.dragTarget.removeEventListener('touchmove', this._handleDragTargetDragBound);
        this.dragTarget.removeEventListener('touchend', this._handleDragTargetReleaseBound);
        this._overlay.removeEventListener('touchmove', this._handleCloseDragBound);
        this._overlay.removeEventListener('touchend', this._handleCloseReleaseBound);
        this.el.removeEventListener('touchmove', this._handleCloseDragBound);
        this.el.removeEventListener('touchend', this._handleCloseReleaseBound);
        this.el.removeEventListener('click', this._handleCloseTriggerClickBound);

        // Remove resize for side nav fixed
        if (this.isFixed) {
          window.removeEventListener('resize', this._handleWindowResizeBound);
        }
      }

      /**
       * Handle Trigger Click
       * @param {Event} e
       */

    }, {
      key: "_handleTriggerClick",
      value: function _handleTriggerClick(e) {
        var $trigger = $(e.target).closest('.sidenav-trigger');
        if (e.target && $trigger.length) {
          var sidenavId = M.getIdFromTrigger($trigger[0]);

          var sidenavInstance = document.getElementById(sidenavId).M_Sidenav;
          if (sidenavInstance) {
            sidenavInstance.open($trigger);
          }
          e.preventDefault();
        }
      }

      /**
       * Set variables needed at the beggining of drag
       * and stop any current transition.
       * @param {Event} e
       */

    }, {
      key: "_startDrag",
      value: function _startDrag(e) {
        var clientX = e.targetTouches[0].clientX;
        this.isDragged = true;
        this._startingXpos = clientX;
        this._xPos = this._startingXpos;
        this._time = Date.now();
        this._width = this.el.getBoundingClientRect().width;
        this._overlay.style.display = 'block';
        this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
        this._verticallyScrolling = false;
        anim.remove(this.el);
        anim.remove(this._overlay);
      }

      /**
       * Set variables needed at each drag move update tick
       * @param {Event} e
       */

    }, {
      key: "_dragMoveUpdate",
      value: function _dragMoveUpdate(e) {
        var clientX = e.targetTouches[0].clientX;
        var currentScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
        this.deltaX = Math.abs(this._xPos - clientX);
        this._xPos = clientX;
        this.velocityX = this.deltaX / (Date.now() - this._time);
        this._time = Date.now();
        if (this._initialScrollTop !== currentScrollTop) {
          this._verticallyScrolling = true;
        }
      }

      /**
       * Handles Dragging of Sidenav
       * @param {Event} e
       */

    }, {
      key: "_handleDragTargetDrag",
      value: function _handleDragTargetDrag(e) {
        // Check if draggable
        if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
          return;
        }

        // If not being dragged, set initial drag start variables
        if (!this.isDragged) {
          this._startDrag(e);
        }

        // Run touchmove updates
        this._dragMoveUpdate(e);

        // Calculate raw deltaX
        var totalDeltaX = this._xPos - this._startingXpos;

        // dragDirection is the attempted user drag direction
        var dragDirection = totalDeltaX > 0 ? 'right' : 'left';

        // Don't allow totalDeltaX to exceed Sidenav width or be dragged in the opposite direction
        totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));
        if (this.options.edge === dragDirection) {
          totalDeltaX = 0;
        }

        /**
         * transformX is the drag displacement
         * transformPrefix is the initial transform placement
         * Invert values if Sidenav is right edge
         */
        var transformX = totalDeltaX;
        var transformPrefix = 'translateX(-100%)';
        if (this.options.edge === 'right') {
          transformPrefix = 'translateX(100%)';
          transformX = -transformX;
        }

        // Calculate open/close percentage of sidenav, with open = 1 and close = 0
        this.percentOpen = Math.min(1, totalDeltaX / this._width);

        // Set transform and opacity styles
        this.el.style.transform = transformPrefix + " translateX(" + transformX + "px)";
        this._overlay.style.opacity = this.percentOpen;
      }

      /**
       * Handle Drag Target Release
       */

    }, {
      key: "_handleDragTargetRelease",
      value: function _handleDragTargetRelease() {
        if (this.isDragged) {
          if (this.percentOpen > 0.2) {
            this.open();
          } else {
            this._animateOut();
          }

          this.isDragged = false;
          this._verticallyScrolling = false;
        }
      }

      /**
       * Handle Close Drag
       * @param {Event} e
       */

    }, {
      key: "_handleCloseDrag",
      value: function _handleCloseDrag(e) {
        if (this.isOpen) {
          // Check if draggable
          if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
            return;
          }

          // If not being dragged, set initial drag start variables
          if (!this.isDragged) {
            this._startDrag(e);
          }

          // Run touchmove updates
          this._dragMoveUpdate(e);

          // Calculate raw deltaX
          var totalDeltaX = this._xPos - this._startingXpos;

          // dragDirection is the attempted user drag direction
          var dragDirection = totalDeltaX > 0 ? 'right' : 'left';

          // Don't allow totalDeltaX to exceed Sidenav width or be dragged in the opposite direction
          totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));
          if (this.options.edge !== dragDirection) {
            totalDeltaX = 0;
          }

          var transformX = -totalDeltaX;
          if (this.options.edge === 'right') {
            transformX = -transformX;
          }

          // Calculate open/close percentage of sidenav, with open = 1 and close = 0
          this.percentOpen = Math.min(1, 1 - totalDeltaX / this._width);

          // Set transform and opacity styles
          this.el.style.transform = "translateX(" + transformX + "px)";
          this._overlay.style.opacity = this.percentOpen;
        }
      }

      /**
       * Handle Close Release
       */

    }, {
      key: "_handleCloseRelease",
      value: function _handleCloseRelease() {
        if (this.isOpen && this.isDragged) {
          if (this.percentOpen > 0.8) {
            this._animateIn();
          } else {
            this.close();
          }

          this.isDragged = false;
          this._verticallyScrolling = false;
        }
      }

      /**
       * Handles closing of Sidenav when element with class .sidenav-close
       */

    }, {
      key: "_handleCloseTriggerClick",
      value: function _handleCloseTriggerClick(e) {
        var $closeTrigger = $(e.target).closest('.sidenav-close');
        if ($closeTrigger.length && !this._isCurrentlyFixed()) {
          this.close();
        }
      }

      /**
       * Handle Window Resize
       */

    }, {
      key: "_handleWindowResize",
      value: function _handleWindowResize() {
        // Only handle horizontal resizes
        if (this.lastWindowWidth !== window.innerWidth) {
          if (window.innerWidth > 992) {
            this.open();
          } else {
            this.close();
          }
        }

        this.lastWindowWidth = window.innerWidth;
        this.lastWindowHeight = window.innerHeight;
      }
    }, {
      key: "_setupClasses",
      value: function _setupClasses() {
        if (this.options.edge === 'right') {
          this.el.classList.add('right-aligned');
          this.dragTarget.classList.add('right-aligned');
        }
      }
    }, {
      key: "_removeClasses",
      value: function _removeClasses() {
        this.el.classList.remove('right-aligned');
        this.dragTarget.classList.remove('right-aligned');
      }
    }, {
      key: "_setupFixed",
      value: function _setupFixed() {
        if (this._isCurrentlyFixed()) {
          this.open();
        }
      }
    }, {
      key: "_isCurrentlyFixed",
      value: function _isCurrentlyFixed() {
        return this.isFixed && window.innerWidth > 992;
      }
    }, {
      key: "_createDragTarget",
      value: function _createDragTarget() {
        var dragTarget = document.createElement('div');
        dragTarget.classList.add('drag-target');
        document.body.appendChild(dragTarget);
        this.dragTarget = dragTarget;
      }
    }, {
      key: "_preventBodyScrolling",
      value: function _preventBodyScrolling() {
        var body = document.body;
        body.style.overflow = 'hidden';
      }
    }, {
      key: "_enableBodyScrolling",
      value: function _enableBodyScrolling() {
        var body = document.body;
        body.style.overflow = '';
      }
    }, {
      key: "open",
      value: function open() {
        if (this.isOpen === true) {
          return;
        }

        this.isOpen = true;

        // Run onOpenStart callback
        if (typeof this.options.onOpenStart === 'function') {
          this.options.onOpenStart.call(this, this.el);
        }

        // Handle fixed Sidenav
        if (this._isCurrentlyFixed()) {
          anim.remove(this.el);
          anim({
            targets: this.el,
            translateX: 0,
            duration: 0,
            easing: 'easeOutQuad'
          });
          this._enableBodyScrolling();
          this._overlay.style.display = 'none';

          // Handle non-fixed Sidenav
        } else {
          if (this.options.preventScrolling) {
            this._preventBodyScrolling();
          }

          if (!this.isDragged || this.percentOpen != 1) {
            this._animateIn();
          }
        }
      }
    }, {
      key: "close",
      value: function close() {
        if (this.isOpen === false) {
          return;
        }

        this.isOpen = false;

        // Run onCloseStart callback
        if (typeof this.options.onCloseStart === 'function') {
          this.options.onCloseStart.call(this, this.el);
        }

        // Handle fixed Sidenav
        if (this._isCurrentlyFixed()) {
          var transformX = this.options.edge === 'left' ? '-105%' : '105%';
          this.el.style.transform = "translateX(" + transformX + ")";

          // Handle non-fixed Sidenav
        } else {
          this._enableBodyScrolling();

          if (!this.isDragged || this.percentOpen != 0) {
            this._animateOut();
          } else {
            this._overlay.style.display = 'none';
          }
        }
      }
    }, {
      key: "_animateIn",
      value: function _animateIn() {
        this._animateSidenavIn();
        this._animateOverlayIn();
      }
    }, {
      key: "_animateSidenavIn",
      value: function _animateSidenavIn() {
        var _this32 = this;

        var slideOutPercent = this.options.edge === 'left' ? -1 : 1;
        if (this.isDragged) {
          slideOutPercent = this.options.edge === 'left' ? slideOutPercent + this.percentOpen : slideOutPercent - this.percentOpen;
        }

        anim.remove(this.el);
        anim({
          targets: this.el,
          translateX: [slideOutPercent * 100 + "%", 0],
          duration: this.options.inDuration,
          easing: 'easeOutQuad',
          complete: function () {
            // Run onOpenEnd callback
            if (typeof _this32.options.onOpenEnd === 'function') {
              _this32.options.onOpenEnd.call(_this32, _this32.el);
            }
          }
        });
      }
    }, {
      key: "_animateOverlayIn",
      value: function _animateOverlayIn() {
        var start = 0;
        if (this.isDragged) {
          start = this.percentOpen;
        } else {
          $(this._overlay).css({
            display: 'block'
          });
        }

        anim.remove(this._overlay);
        anim({
          targets: this._overlay,
          opacity: [start, 1],
          duration: this.options.inDuration,
          easing: 'easeOutQuad'
        });
      }
    }, {
      key: "_animateOut",
      value: function _animateOut() {
        this._animateSidenavOut();
        this._animateOverlayOut();
      }
    }, {
      key: "_animateSidenavOut",
      value: function _animateSidenavOut() {
        var _this33 = this;

        var endPercent = this.options.edge === 'left' ? -1 : 1;
        var slideOutPercent = 0;
        if (this.isDragged) {
          slideOutPercent = this.options.edge === 'left' ? endPercent + this.percentOpen : endPercent - this.percentOpen;
        }

        anim.remove(this.el);
        anim({
          targets: this.el,
          translateX: [slideOutPercent * 100 + "%", endPercent * 105 + "%"],
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: function () {
            // Run onOpenEnd callback
            if (typeof _this33.options.onCloseEnd === 'function') {
              _this33.options.onCloseEnd.call(_this33, _this33.el);
            }
          }
        });
      }
    }, {
      key: "_animateOverlayOut",
      value: function _animateOverlayOut() {
        var _this34 = this;

        anim.remove(this._overlay);
        anim({
          targets: this._overlay,
          opacity: 0,
          duration: this.options.outDuration,
          easing: 'easeOutQuad',
          complete: function () {
            $(_this34._overlay).css('display', 'none');
          }
        });
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Sidenav.__proto__ || Object.getPrototypeOf(Sidenav), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Sidenav;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Sidenav;
  }(Component);

  /**
   * @static
   * @memberof Sidenav
   * @type {Array.<Sidenav>}
   */


  Sidenav._sidenavs = [];

  M.Sidenav = Sidenav;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Sidenav, 'sidenav', 'M_Sidenav');
  }
})(cash, M.anime);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    throttle: 100,
    scrollOffset: 200, // offset - 200 allows elements near bottom of page to scroll
    activeClass: 'active',
    getActiveElement: function (id) {
      return 'a[href="#' + id + '"]';
    }
  };

  /**
   * @class
   *
   */

  var ScrollSpy = function (_Component9) {
    _inherits(ScrollSpy, _Component9);

    /**
     * Construct ScrollSpy instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function ScrollSpy(el, options) {
      _classCallCheck(this, ScrollSpy);

      var _this35 = _possibleConstructorReturn(this, (ScrollSpy.__proto__ || Object.getPrototypeOf(ScrollSpy)).call(this, ScrollSpy, el, options));

      _this35.el.M_ScrollSpy = _this35;

      /**
       * Options for the modal
       * @member Modal#options
       * @prop {Number} [throttle=100] - Throttle of scroll handler
       * @prop {Number} [scrollOffset=200] - Offset for centering element when scrolled to
       * @prop {String} [activeClass='active'] - Class applied to active elements
       * @prop {Function} [getActiveElement] - Used to find active element
       */
      _this35.options = $.extend({}, ScrollSpy.defaults, options);

      // setup
      ScrollSpy._elements.push(_this35);
      ScrollSpy._count++;
      ScrollSpy._increment++;
      _this35.tickId = -1;
      _this35.id = ScrollSpy._increment;
      _this35._setupEventHandlers();
      _this35._handleWindowScroll();
      return _this35;
    }

    _createClass(ScrollSpy, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        ScrollSpy._elements.splice(ScrollSpy._elements.indexOf(this), 1);
        ScrollSpy._elementsInView.splice(ScrollSpy._elementsInView.indexOf(this), 1);
        ScrollSpy._visibleElements.splice(ScrollSpy._visibleElements.indexOf(this.$el), 1);
        ScrollSpy._count--;
        this._removeEventHandlers();
        $(this.options.getActiveElement(this.$el.attr('id'))).removeClass(this.options.activeClass);
        this.el.M_ScrollSpy = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var throttledResize = M.throttle(this._handleWindowScroll, 200);
        this._handleThrottledResizeBound = throttledResize.bind(this);
        this._handleWindowScrollBound = this._handleWindowScroll.bind(this);
        if (ScrollSpy._count === 1) {
          window.addEventListener('scroll', this._handleWindowScrollBound);
          window.addEventListener('resize', this._handleThrottledResizeBound);
          document.body.addEventListener('click', this._handleTriggerClick);
        }
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        if (ScrollSpy._count === 0) {
          window.removeEventListener('scroll', this._handleWindowScrollBound);
          window.removeEventListener('resize', this._handleThrottledResizeBound);
          document.body.removeEventListener('click', this._handleTriggerClick);
        }
      }

      /**
       * Handle Trigger Click
       * @param {Event} e
       */

    }, {
      key: "_handleTriggerClick",
      value: function _handleTriggerClick(e) {
        var $trigger = $(e.target);
        for (var i = ScrollSpy._elements.length - 1; i >= 0; i--) {
          var scrollspy = ScrollSpy._elements[i];
          if ($trigger.is('a[href="#' + scrollspy.$el.attr('id') + '"]')) {
            e.preventDefault();
            var offset = scrollspy.$el.offset().top + 1;

            anim({
              targets: [document.documentElement, document.body],
              scrollTop: offset - scrollspy.options.scrollOffset,
              duration: 400,
              easing: 'easeOutCubic'
            });
            break;
          }
        }
      }

      /**
       * Handle Window Scroll
       */

    }, {
      key: "_handleWindowScroll",
      value: function _handleWindowScroll() {
        // unique tick id
        ScrollSpy._ticks++;

        // viewport rectangle
        var top = M.getDocumentScrollTop(),
            left = M.getDocumentScrollLeft(),
            right = left + window.innerWidth,
            bottom = top + window.innerHeight;

        // determine which elements are in view
        var intersections = ScrollSpy._findElements(top, right, bottom, left);
        for (var i = 0; i < intersections.length; i++) {
          var scrollspy = intersections[i];
          var lastTick = scrollspy.tickId;
          if (lastTick < 0) {
            // entered into view
            scrollspy._enter();
          }

          // update tick id
          scrollspy.tickId = ScrollSpy._ticks;
        }

        for (var _i = 0; _i < ScrollSpy._elementsInView.length; _i++) {
          var _scrollspy = ScrollSpy._elementsInView[_i];
          var _lastTick = _scrollspy.tickId;
          if (_lastTick >= 0 && _lastTick !== ScrollSpy._ticks) {
            // exited from view
            _scrollspy._exit();
            _scrollspy.tickId = -1;
          }
        }

        // remember elements in view for next tick
        ScrollSpy._elementsInView = intersections;
      }

      /**
       * Find elements that are within the boundary
       * @param {number} top
       * @param {number} right
       * @param {number} bottom
       * @param {number} left
       * @return {Array.<ScrollSpy>}   A collection of elements
       */

    }, {
      key: "_enter",
      value: function _enter() {
        ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(function (value) {
          return value.height() != 0;
        });

        if (ScrollSpy._visibleElements[0]) {
          $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).removeClass(this.options.activeClass);
          if (ScrollSpy._visibleElements[0][0].M_ScrollSpy && this.id < ScrollSpy._visibleElements[0][0].M_ScrollSpy.id) {
            ScrollSpy._visibleElements.unshift(this.$el);
          } else {
            ScrollSpy._visibleElements.push(this.$el);
          }
        } else {
          ScrollSpy._visibleElements.push(this.$el);
        }

        $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).addClass(this.options.activeClass);
      }
    }, {
      key: "_exit",
      value: function _exit() {
        var _this36 = this;

        ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(function (value) {
          return value.height() != 0;
        });

        if (ScrollSpy._visibleElements[0]) {
          $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).removeClass(this.options.activeClass);

          ScrollSpy._visibleElements = ScrollSpy._visibleElements.filter(function (el) {
            return el.attr('id') != _this36.$el.attr('id');
          });
          if (ScrollSpy._visibleElements[0]) {
            // Check if empty
            $(this.options.getActiveElement(ScrollSpy._visibleElements[0].attr('id'))).addClass(this.options.activeClass);
          }
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(ScrollSpy.__proto__ || Object.getPrototypeOf(ScrollSpy), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_ScrollSpy;
      }
    }, {
      key: "_findElements",
      value: function _findElements(top, right, bottom, left) {
        var hits = [];
        for (var i = 0; i < ScrollSpy._elements.length; i++) {
          var scrollspy = ScrollSpy._elements[i];
          var currTop = top + scrollspy.options.scrollOffset || 200;

          if (scrollspy.$el.height() > 0) {
            var elTop = scrollspy.$el.offset().top,
                elLeft = scrollspy.$el.offset().left,
                elRight = elLeft + scrollspy.$el.width(),
                elBottom = elTop + scrollspy.$el.height();

            var isIntersect = !(elLeft > right || elRight < left || elTop > bottom || elBottom < currTop);

            if (isIntersect) {
              hits.push(scrollspy);
            }
          }
        }
        return hits;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return ScrollSpy;
  }(Component);

  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<ScrollSpy>}
   */


  ScrollSpy._elements = [];

  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<ScrollSpy>}
   */
  ScrollSpy._elementsInView = [];

  /**
   * @static
   * @memberof ScrollSpy
   * @type {Array.<cash>}
   */
  ScrollSpy._visibleElements = [];

  /**
   * @static
   * @memberof ScrollSpy
   */
  ScrollSpy._count = 0;

  /**
   * @static
   * @memberof ScrollSpy
   */
  ScrollSpy._increment = 0;

  /**
   * @static
   * @memberof ScrollSpy
   */
  ScrollSpy._ticks = 0;

  M.ScrollSpy = ScrollSpy;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(ScrollSpy, 'scrollSpy', 'M_ScrollSpy');
  }
})(cash, M.anime);
;(function ($) {
  'use strict';

  var _defaults = {
    data: {}, // Autocomplete data set
    limit: Infinity, // Limit of results the autocomplete shows
    onAutocomplete: null, // Callback for when autocompleted
    minLength: 1, // Min characters before autocomplete starts
    sortFunction: function (a, b, inputString) {
      // Sort function for sorting autocomplete results
      return a.indexOf(inputString) - b.indexOf(inputString);
    }
  };

  /**
   * @class
   *
   */

  var Autocomplete = function (_Component10) {
    _inherits(Autocomplete, _Component10);

    /**
     * Construct Autocomplete instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Autocomplete(el, options) {
      _classCallCheck(this, Autocomplete);

      var _this37 = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, Autocomplete, el, options));

      _this37.el.M_Autocomplete = _this37;

      /**
       * Options for the autocomplete
       * @member Autocomplete#options
       * @prop {Number} duration
       * @prop {Number} dist
       * @prop {number} shift
       * @prop {number} padding
       * @prop {Boolean} fullWidth
       * @prop {Boolean} indicators
       * @prop {Boolean} noWrap
       * @prop {Function} onCycleTo
       */
      _this37.options = $.extend({}, Autocomplete.defaults, options);

      // Setup
      _this37.isOpen = false;
      _this37.count = 0;
      _this37.activeIndex = -1;
      _this37.oldVal;
      _this37.$inputField = _this37.$el.closest('.input-field');
      _this37.$active = $();
      _this37._mousedown = false;
      _this37._setupDropdown();

      _this37._setupEventHandlers();
      return _this37;
    }

    _createClass(Autocomplete, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this._removeDropdown();
        this.el.M_Autocomplete = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleInputBlurBound = this._handleInputBlur.bind(this);
        this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this);
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
        this._handleInputClickBound = this._handleInputClick.bind(this);
        this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this);
        this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this);

        this.el.addEventListener('blur', this._handleInputBlurBound);
        this.el.addEventListener('keyup', this._handleInputKeyupAndFocusBound);
        this.el.addEventListener('focus', this._handleInputKeyupAndFocusBound);
        this.el.addEventListener('keydown', this._handleInputKeydownBound);
        this.el.addEventListener('click', this._handleInputClickBound);
        this.container.addEventListener('mousedown', this._handleContainerMousedownAndTouchstartBound);
        this.container.addEventListener('mouseup', this._handleContainerMouseupAndTouchendBound);

        if (typeof window.ontouchstart !== 'undefined') {
          this.container.addEventListener('touchstart', this._handleContainerMousedownAndTouchstartBound);
          this.container.addEventListener('touchend', this._handleContainerMouseupAndTouchendBound);
        }
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('blur', this._handleInputBlurBound);
        this.el.removeEventListener('keyup', this._handleInputKeyupAndFocusBound);
        this.el.removeEventListener('focus', this._handleInputKeyupAndFocusBound);
        this.el.removeEventListener('keydown', this._handleInputKeydownBound);
        this.el.removeEventListener('click', this._handleInputClickBound);
        this.container.removeEventListener('mousedown', this._handleContainerMousedownAndTouchstartBound);
        this.container.removeEventListener('mouseup', this._handleContainerMouseupAndTouchendBound);

        if (typeof window.ontouchstart !== 'undefined') {
          this.container.removeEventListener('touchstart', this._handleContainerMousedownAndTouchstartBound);
          this.container.removeEventListener('touchend', this._handleContainerMouseupAndTouchendBound);
        }
      }

      /**
       * Setup dropdown
       */

    }, {
      key: "_setupDropdown",
      value: function _setupDropdown() {
        var _this38 = this;

        this.container = document.createElement('ul');
        this.container.id = "autocomplete-options-" + M.guid();
        $(this.container).addClass('autocomplete-content dropdown-content');
        this.$inputField.append(this.container);
        this.el.setAttribute('data-target', this.container.id);

        this.dropdown = M.Dropdown.init(this.el, {
          autoFocus: false,
          closeOnClick: false,
          coverTrigger: false,
          onItemClick: function (itemEl) {
            _this38.selectOption($(itemEl));
          }
        });

        // Sketchy removal of dropdown click handler
        this.el.removeEventListener('click', this.dropdown._handleClickBound);
      }

      /**
       * Remove dropdown
       */

    }, {
      key: "_removeDropdown",
      value: function _removeDropdown() {
        this.container.parentNode.removeChild(this.container);
      }

      /**
       * Handle Input Blur
       */

    }, {
      key: "_handleInputBlur",
      value: function _handleInputBlur() {
        if (!this._mousedown) {
          this.close();
          this._resetAutocomplete();
        }
      }

      /**
       * Handle Input Keyup and Focus
       * @param {Event} e
       */

    }, {
      key: "_handleInputKeyupAndFocus",
      value: function _handleInputKeyupAndFocus(e) {
        if (e.type === 'keyup') {
          Autocomplete._keydown = false;
        }

        this.count = 0;
        var val = this.el.value.toLowerCase();

        // Don't capture enter or arrow key usage.
        if (e.keyCode === 13 || e.keyCode === 38 || e.keyCode === 40) {
          return;
        }

        // Check if the input isn't empty
        // Check if focus triggered by tab
        if (this.oldVal !== val && (M.tabPressed || e.type !== 'focus')) {
          this.open();
        }

        // Update oldVal
        this.oldVal = val;
      }

      /**
       * Handle Input Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleInputKeydown",
      value: function _handleInputKeydown(e) {
        Autocomplete._keydown = true;

        // Arrow keys and enter key usage
        var keyCode = e.keyCode,
            liElement = void 0,
            numItems = $(this.container).children('li').length;

        // select element on Enter
        if (keyCode === M.keys.ENTER && this.activeIndex >= 0) {
          liElement = $(this.container).children('li').eq(this.activeIndex);
          if (liElement.length) {
            this.selectOption(liElement);
            e.preventDefault();
          }
          return;
        }

        // Capture up and down key
        if (keyCode === M.keys.ARROW_UP || keyCode === M.keys.ARROW_DOWN) {
          e.preventDefault();

          if (keyCode === M.keys.ARROW_UP && this.activeIndex > 0) {
            this.activeIndex--;
          }

          if (keyCode === M.keys.ARROW_DOWN && this.activeIndex < numItems - 1) {
            this.activeIndex++;
          }

          this.$active.removeClass('active');
          if (this.activeIndex >= 0) {
            this.$active = $(this.container).children('li').eq(this.activeIndex);
            this.$active.addClass('active');
          }
        }
      }

      /**
       * Handle Input Click
       * @param {Event} e
       */

    }, {
      key: "_handleInputClick",
      value: function _handleInputClick(e) {
        this.open();
      }

      /**
       * Handle Container Mousedown and Touchstart
       * @param {Event} e
       */

    }, {
      key: "_handleContainerMousedownAndTouchstart",
      value: function _handleContainerMousedownAndTouchstart(e) {
        this._mousedown = true;
      }

      /**
       * Handle Container Mouseup and Touchend
       * @param {Event} e
       */

    }, {
      key: "_handleContainerMouseupAndTouchend",
      value: function _handleContainerMouseupAndTouchend(e) {
        this._mousedown = false;
      }

      /**
       * Highlight partial match
       */

    }, {
      key: "_highlight",
      value: function _highlight(string, $el) {
        var img = $el.find('img');
        var matchStart = $el.text().toLowerCase().indexOf('' + string.toLowerCase() + ''),
            matchEnd = matchStart + string.length - 1,
            beforeMatch = $el.text().slice(0, matchStart),
            matchText = $el.text().slice(matchStart, matchEnd + 1),
            afterMatch = $el.text().slice(matchEnd + 1);
        $el.html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");
        if (img.length) {
          $el.prepend(img);
        }
      }

      /**
       * Reset current element position
       */

    }, {
      key: "_resetCurrentElement",
      value: function _resetCurrentElement() {
        this.activeIndex = -1;
        this.$active.removeClass('active');
      }

      /**
       * Reset autocomplete elements
       */

    }, {
      key: "_resetAutocomplete",
      value: function _resetAutocomplete() {
        $(this.container).empty();
        this._resetCurrentElement();
        this.oldVal = null;
        this.isOpen = false;
        this._mousedown = false;
      }

      /**
       * Select autocomplete option
       * @param {Element} el  Autocomplete option list item element
       */

    }, {
      key: "selectOption",
      value: function selectOption(el) {
        var text = el.text().trim();
        this.el.value = text;
        this.$el.trigger('change');
        this._resetAutocomplete();
        this.close();

        // Handle onAutocomplete callback.
        if (typeof this.options.onAutocomplete === 'function') {
          this.options.onAutocomplete.call(this, text);
        }
      }

      /**
       * Render dropdown content
       * @param {Object} data  data set
       * @param {String} val  current input value
       */

    }, {
      key: "_renderDropdown",
      value: function _renderDropdown(data, val) {
        var _this39 = this;

        this._resetAutocomplete();

        var matchingData = [];

        // Gather all matching data
        for (var key in data) {
          if (data.hasOwnProperty(key) && key.toLowerCase().indexOf(val) !== -1) {
            // Break if past limit
            if (this.count >= this.options.limit) {
              break;
            }

            var entry = {
              data: data[key],
              key: key
            };
            matchingData.push(entry);

            this.count++;
          }
        }

        // Sort
        if (this.options.sortFunction) {
          var sortFunctionBound = function (a, b) {
            return _this39.options.sortFunction(a.key.toLowerCase(), b.key.toLowerCase(), val.toLowerCase());
          };
          matchingData.sort(sortFunctionBound);
        }

        // Render
        for (var i = 0; i < matchingData.length; i++) {
          var _entry = matchingData[i];
          var $autocompleteOption = $('<li></li>');
          if (!!_entry.data) {
            $autocompleteOption.append("<img src=\"" + _entry.data + "\" class=\"right circle\"><span>" + _entry.key + "</span>");
          } else {
            $autocompleteOption.append('<span>' + _entry.key + '</span>');
          }

          $(this.container).append($autocompleteOption);
          this._highlight(val, $autocompleteOption);
        }
      }

      /**
       * Open Autocomplete Dropdown
       */

    }, {
      key: "open",
      value: function open() {
        var val = this.el.value.toLowerCase();

        this._resetAutocomplete();

        if (val.length >= this.options.minLength) {
          this.isOpen = true;
          this._renderDropdown(this.options.data, val);
        }

        // Open dropdown
        if (!this.dropdown.isOpen) {
          this.dropdown.open();
        } else {
          // Recalculate dropdown when its already open
          this.dropdown.recalculateDimensions();
        }
      }

      /**
       * Close Autocomplete Dropdown
       */

    }, {
      key: "close",
      value: function close() {
        this.dropdown.close();
      }

      /**
       * Update Data
       * @param {Object} data
       */

    }, {
      key: "updateData",
      value: function updateData(data) {
        var val = this.el.value.toLowerCase();
        this.options.data = data;

        if (this.isOpen) {
          this._renderDropdown(data, val);
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Autocomplete;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Autocomplete;
  }(Component);

  /**
   * @static
   * @memberof Autocomplete
   */


  Autocomplete._keydown = false;

  M.Autocomplete = Autocomplete;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Autocomplete, 'autocomplete', 'M_Autocomplete');
  }
})(cash);
;(function ($) {
  // Function to update labels of text fields
  M.updateTextFields = function () {
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea';
    $(input_selector).each(function (element, index) {
      var $this = $(this);
      if (element.value.length > 0 || $(element).is(':focus') || element.autofocus || $this.attr('placeholder') !== null) {
        $this.siblings('label').addClass('active');
      } else if (element.validity) {
        $this.siblings('label').toggleClass('active', element.validity.badInput === true);
      } else {
        $this.siblings('label').removeClass('active');
      }
    });
  };

  M.validate_field = function (object) {
    var hasLength = object.attr('data-length') !== null;
    var lenAttr = parseInt(object.attr('data-length'));
    var len = object[0].value.length;

    if (len === 0 && object[0].validity.badInput === false && !object.is(':required')) {
      if (object.hasClass('validate')) {
        object.removeClass('valid');
        object.removeClass('invalid');
      }
    } else {
      if (object.hasClass('validate')) {
        // Check for character counter attributes
        if (object.is(':valid') && hasLength && len <= lenAttr || object.is(':valid') && !hasLength) {
          object.removeClass('invalid');
          object.addClass('valid');
        } else {
          object.removeClass('valid');
          object.addClass('invalid');
        }
      }
    }
  };

  M.textareaAutoResize = function ($textarea) {
    // Wrap if native element
    if ($textarea instanceof Element) {
      $textarea = $($textarea);
    }

    if (!$textarea.length) {
      console.error('No textarea element found');
      return;
    }

    // Textarea Auto Resize
    var hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $('body').append(hiddenDiv);
    }

    // Set font properties of hiddenDiv
    var fontFamily = $textarea.css('font-family');
    var fontSize = $textarea.css('font-size');
    var lineHeight = $textarea.css('line-height');

    // Firefox can't handle padding shorthand.
    var paddingTop = $textarea.css('padding-top');
    var paddingRight = $textarea.css('padding-right');
    var paddingBottom = $textarea.css('padding-bottom');
    var paddingLeft = $textarea.css('padding-left');

    if (fontSize) {
      hiddenDiv.css('font-size', fontSize);
    }
    if (fontFamily) {
      hiddenDiv.css('font-family', fontFamily);
    }
    if (lineHeight) {
      hiddenDiv.css('line-height', lineHeight);
    }
    if (paddingTop) {
      hiddenDiv.css('padding-top', paddingTop);
    }
    if (paddingRight) {
      hiddenDiv.css('padding-right', paddingRight);
    }
    if (paddingBottom) {
      hiddenDiv.css('padding-bottom', paddingBottom);
    }
    if (paddingLeft) {
      hiddenDiv.css('padding-left', paddingLeft);
    }

    // Set original-height, if none
    if (!$textarea.data('original-height')) {
      $textarea.data('original-height', $textarea.height());
    }

    if ($textarea.attr('wrap') === 'off') {
      hiddenDiv.css('overflow-wrap', 'normal').css('white-space', 'pre');
    }

    hiddenDiv.text($textarea[0].value + '\n');
    var content = hiddenDiv.html().replace(/\n/g, '<br>');
    hiddenDiv.html(content);

    // When textarea is hidden, width goes crazy.
    // Approximate with half of window size

    if ($textarea[0].offsetWidth > 0 && $textarea[0].offsetHeight > 0) {
      hiddenDiv.css('width', $textarea.width() + 'px');
    } else {
      hiddenDiv.css('width', window.innerWidth / 2 + 'px');
    }

    /**
     * Resize if the new height is greater than the
     * original height of the textarea
     */
    if ($textarea.data('original-height') <= hiddenDiv.innerHeight()) {
      $textarea.css('height', hiddenDiv.innerHeight() + 'px');
    } else if ($textarea[0].value.length < $textarea.data('previous-length')) {
      /**
       * In case the new height is less than original height, it
       * means the textarea has less text than before
       * So we set the height to the original one
       */
      $textarea.css('height', $textarea.data('original-height') + 'px');
    }
    $textarea.data('previous-length', $textarea[0].value.length);
  };

  $(document).ready(function () {
    // Text based inputs
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea';

    // Add active if form auto complete
    $(document).on('change', input_selector, function () {
      if (this.value.length !== 0 || $(this).attr('placeholder') !== null) {
        $(this).siblings('label').addClass('active');
      }
      M.validate_field($(this));
    });

    // Add active if input element has been pre-populated on document ready
    $(document).ready(function () {
      M.updateTextFields();
    });

    // HTML DOM FORM RESET handling
    $(document).on('reset', function (e) {
      var formReset = $(e.target);
      if (formReset.is('form')) {
        formReset.find(input_selector).removeClass('valid').removeClass('invalid');
        formReset.find(input_selector).each(function (e) {
          if (this.value.length) {
            $(this).siblings('label').removeClass('active');
          }
        });

        // Reset select (after native reset)
        setTimeout(function () {
          formReset.find('select').each(function () {
            // check if initialized
            if (this.M_FormSelect) {
              $(this).trigger('change');
            }
          });
        }, 0);
      }
    });

    /**
     * Add active when element has focus
     * @param {Event} e
     */
    document.addEventListener('focus', function (e) {
      if ($(e.target).is(input_selector)) {
        $(e.target).siblings('label, .prefix').addClass('active');
      }
    }, true);

    /**
     * Remove active when element is blurred
     * @param {Event} e
     */
    document.addEventListener('blur', function (e) {
      var $inputElement = $(e.target);
      if ($inputElement.is(input_selector)) {
        var selector = '.prefix';

        if ($inputElement[0].value.length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === null) {
          selector += ', label';
        }
        $inputElement.siblings(selector).removeClass('active');
        M.validate_field($inputElement);
      }
    }, true);

    // Radio and Checkbox focus class
    var radio_checkbox = 'input[type=radio], input[type=checkbox]';
    $(document).on('keyup', radio_checkbox, function (e) {
      // TAB, check if tabbing to radio or checkbox.
      if (e.which === M.keys.TAB) {
        $(this).addClass('tabbed');
        var $this = $(this);
        $this.one('blur', function (e) {
          $(this).removeClass('tabbed');
        });
        return;
      }
    });

    var text_area_selector = '.materialize-textarea';
    $(text_area_selector).each(function () {
      var $textarea = $(this);
      /**
       * Resize textarea on document load after storing
       * the original height and the original length
       */
      $textarea.data('original-height', $textarea.height());
      $textarea.data('previous-length', this.value.length);
      M.textareaAutoResize($textarea);
    });

    $(document).on('keyup', text_area_selector, function () {
      M.textareaAutoResize($(this));
    });
    $(document).on('keydown', text_area_selector, function () {
      M.textareaAutoResize($(this));
    });

    // File Input Path
    $(document).on('change', '.file-field input[type="file"]', function () {
      var file_field = $(this).closest('.file-field');
      var path_input = file_field.find('input.file-path');
      var files = $(this)[0].files;
      var file_names = [];
      for (var i = 0; i < files.length; i++) {
        file_names.push(files[i].name);
      }
      path_input[0].value = file_names.join(', ');
      path_input.trigger('change');
    });
  }); // End of $(document).ready
})(cash);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    indicators: true,
    height: 400,
    duration: 500,
    interval: 6000
  };

  /**
   * @class
   *
   */

  var Slider = function (_Component11) {
    _inherits(Slider, _Component11);

    /**
     * Construct Slider instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Slider(el, options) {
      _classCallCheck(this, Slider);

      var _this40 = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, Slider, el, options));

      _this40.el.M_Slider = _this40;

      /**
       * Options for the modal
       * @member Slider#options
       * @prop {Boolean} [indicators=true] - Show indicators
       * @prop {Number} [height=400] - height of slider
       * @prop {Number} [duration=500] - Length in ms of slide transition
       * @prop {Number} [interval=6000] - Length in ms of slide interval
       */
      _this40.options = $.extend({}, Slider.defaults, options);

      // setup
      _this40.$slider = _this40.$el.find('.slides');
      _this40.$slides = _this40.$slider.children('li');
      _this40.activeIndex = _this40.$slides.filter(function (item) {
        return $(item).hasClass('active');
      }).first().index();
      if (_this40.activeIndex != -1) {
        _this40.$active = _this40.$slides.eq(_this40.activeIndex);
      }

      _this40._setSliderHeight();

      // Set initial positions of captions
      _this40.$slides.find('.caption').each(function (el) {
        _this40._animateCaptionIn(el, 0);
      });

      // Move img src into background-image
      _this40.$slides.find('img').each(function (el) {
        var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
        if ($(el).attr('src') !== placeholderBase64) {
          $(el).css('background-image', 'url("' + $(el).attr('src') + '")');
          $(el).attr('src', placeholderBase64);
        }
      });

      _this40._setupIndicators();

      // Show active slide
      if (_this40.$active) {
        _this40.$active.css('display', 'block');
      } else {
        _this40.$slides.first().addClass('active');
        anim({
          targets: _this40.$slides.first()[0],
          opacity: 1,
          duration: _this40.options.duration,
          easing: 'easeOutQuad'
        });

        _this40.activeIndex = 0;
        _this40.$active = _this40.$slides.eq(_this40.activeIndex);

        // Update indicators
        if (_this40.options.indicators) {
          _this40.$indicators.eq(_this40.activeIndex).addClass('active');
        }
      }

      // Adjust height to current slide
      _this40.$active.find('img').each(function (el) {
        anim({
          targets: _this40.$active.find('.caption')[0],
          opacity: 1,
          translateX: 0,
          translateY: 0,
          duration: _this40.options.duration,
          easing: 'easeOutQuad'
        });
      });

      _this40._setupEventHandlers();

      // auto scroll
      _this40.start();
      return _this40;
    }

    _createClass(Slider, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this.pause();
        this._removeIndicators();
        this._removeEventHandlers();
        this.el.M_Slider = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var _this41 = this;

        this._handleIntervalBound = this._handleInterval.bind(this);
        this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this);

        if (this.options.indicators) {
          this.$indicators.each(function (el) {
            el.addEventListener('click', _this41._handleIndicatorClickBound);
          });
        }
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        var _this42 = this;

        if (this.options.indicators) {
          this.$indicators.each(function (el) {
            el.removeEventListener('click', _this42._handleIndicatorClickBound);
          });
        }
      }

      /**
       * Handle indicator click
       * @param {Event} e
       */

    }, {
      key: "_handleIndicatorClick",
      value: function _handleIndicatorClick(e) {
        var currIndex = $(e.target).index();
        this.set(currIndex);
      }

      /**
       * Handle Interval
       */

    }, {
      key: "_handleInterval",
      value: function _handleInterval() {
        var newActiveIndex = this.$slider.find('.active').index();
        if (this.$slides.length === newActiveIndex + 1) newActiveIndex = 0;
        // loop to start
        else newActiveIndex += 1;

        this.set(newActiveIndex);
      }

      /**
       * Animate in caption
       * @param {Element} caption
       * @param {Number} duration
       */

    }, {
      key: "_animateCaptionIn",
      value: function _animateCaptionIn(caption, duration) {
        var animOptions = {
          targets: caption,
          opacity: 0,
          duration: duration,
          easing: 'easeOutQuad'
        };

        if ($(caption).hasClass('center-align')) {
          animOptions.translateY = -100;
        } else if ($(caption).hasClass('right-align')) {
          animOptions.translateX = 100;
        } else if ($(caption).hasClass('left-align')) {
          animOptions.translateX = -100;
        }

        anim(animOptions);
      }

      /**
       * Set height of slider
       */

    }, {
      key: "_setSliderHeight",
      value: function _setSliderHeight() {
        // If fullscreen, do nothing
        if (!this.$el.hasClass('fullscreen')) {
          if (this.options.indicators) {
            // Add height if indicators are present
            this.$el.css('height', this.options.height + 40 + 'px');
          } else {
            this.$el.css('height', this.options.height + 'px');
          }
          this.$slider.css('height', this.options.height + 'px');
        }
      }

      /**
       * Setup indicators
       */

    }, {
      key: "_setupIndicators",
      value: function _setupIndicators() {
        var _this43 = this;

        if (this.options.indicators) {
          this.$indicators = $('<ul class="indicators"></ul>');
          this.$slides.each(function (el, index) {
            var $indicator = $('<li class="indicator-item"></li>');
            _this43.$indicators.append($indicator[0]);
          });
          this.$el.append(this.$indicators[0]);
          this.$indicators = this.$indicators.children('li.indicator-item');
        }
      }

      /**
       * Remove indicators
       */

    }, {
      key: "_removeIndicators",
      value: function _removeIndicators() {
        this.$el.find('ul.indicators').remove();
      }

      /**
       * Cycle to nth item
       * @param {Number} index
       */

    }, {
      key: "set",
      value: function set(index) {
        var _this44 = this;

        // Wrap around indices.
        if (index >= this.$slides.length) index = 0;else if (index < 0) index = this.$slides.length - 1;

        // Only do if index changes
        if (this.activeIndex != index) {
          this.$active = this.$slides.eq(this.activeIndex);
          var $caption = this.$active.find('.caption');
          this.$active.removeClass('active');

          anim({
            targets: this.$active[0],
            opacity: 0,
            duration: this.options.duration,
            easing: 'easeOutQuad',
            complete: function () {
              _this44.$slides.not('.active').each(function (el) {
                anim({
                  targets: el,
                  opacity: 0,
                  translateX: 0,
                  translateY: 0,
                  duration: 0,
                  easing: 'easeOutQuad'
                });
              });
            }
          });

          this._animateCaptionIn($caption[0], this.options.duration);

          // Update indicators
          if (this.options.indicators) {
            this.$indicators.eq(this.activeIndex).removeClass('active');
            this.$indicators.eq(index).addClass('active');
          }

          anim({
            targets: this.$slides.eq(index)[0],
            opacity: 1,
            duration: this.options.duration,
            easing: 'easeOutQuad'
          });

          anim({
            targets: this.$slides.eq(index).find('.caption')[0],
            opacity: 1,
            translateX: 0,
            translateY: 0,
            duration: this.options.duration,
            delay: this.options.duration,
            easing: 'easeOutQuad'
          });

          this.$slides.eq(index).addClass('active');
          this.activeIndex = index;

          // Reset interval
          this.start();
        }
      }

      /**
       * Pause slider interval
       */

    }, {
      key: "pause",
      value: function pause() {
        clearInterval(this.interval);
      }

      /**
       * Start slider interval
       */

    }, {
      key: "start",
      value: function start() {
        clearInterval(this.interval);
        this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval);
      }

      /**
       * Move to next slide
       */

    }, {
      key: "next",
      value: function next() {
        var newIndex = this.activeIndex + 1;

        // Wrap around indices.
        if (newIndex >= this.$slides.length) newIndex = 0;else if (newIndex < 0) newIndex = this.$slides.length - 1;

        this.set(newIndex);
      }

      /**
       * Move to previous slide
       */

    }, {
      key: "prev",
      value: function prev() {
        var newIndex = this.activeIndex - 1;

        // Wrap around indices.
        if (newIndex >= this.$slides.length) newIndex = 0;else if (newIndex < 0) newIndex = this.$slides.length - 1;

        this.set(newIndex);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Slider.__proto__ || Object.getPrototypeOf(Slider), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Slider;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Slider;
  }(Component);

  M.Slider = Slider;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Slider, 'slider', 'M_Slider');
  }
})(cash, M.anime);
;(function ($, anim) {
  $(document).on('click', '.card', function (e) {
    if ($(this).children('.card-reveal').length) {
      var $card = $(e.target).closest('.card');
      if ($card.data('initialOverflow') === undefined) {
        $card.data('initialOverflow', $card.css('overflow') === undefined ? '' : $card.css('overflow'));
      }
      var $cardReveal = $(this).find('.card-reveal');
      if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
        // Make Reveal animate down and display none
        anim({
          targets: $cardReveal[0],
          translateY: 0,
          duration: 225,
          easing: 'easeInOutQuad',
          complete: function (anim) {
            var el = anim.animatables[0].target;
            $(el).css({ display: 'none' });
            $card.css('overflow', $card.data('initialOverflow'));
          }
        });
      } else if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i'))) {
        $card.css('overflow', 'hidden');
        $cardReveal.css({ display: 'block' });
        anim({
          targets: $cardReveal[0],
          translateY: '-100%',
          duration: 300,
          easing: 'easeInOutQuad'
        });
      }
    }
  });
})(cash, M.anime);
;(function ($) {
  'use strict';

  var _defaults = {
    data: [],
    placeholder: '',
    secondaryPlaceholder: '',
    autocompleteOptions: {},
    limit: Infinity,
    onChipAdd: null,
    onChipSelect: null,
    onChipDelete: null
  };

  /**
   * @typedef {Object} chip
   * @property {String} tag  chip tag string
   * @property {String} [image]  chip avatar image string
   */

  /**
   * @class
   *
   */

  var Chips = function (_Component12) {
    _inherits(Chips, _Component12);

    /**
     * Construct Chips instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Chips(el, options) {
      _classCallCheck(this, Chips);

      var _this45 = _possibleConstructorReturn(this, (Chips.__proto__ || Object.getPrototypeOf(Chips)).call(this, Chips, el, options));

      _this45.el.M_Chips = _this45;

      /**
       * Options for the modal
       * @member Chips#options
       * @prop {Array} data
       * @prop {String} placeholder
       * @prop {String} secondaryPlaceholder
       * @prop {Object} autocompleteOptions
       */
      _this45.options = $.extend({}, Chips.defaults, options);

      _this45.$el.addClass('chips input-field');
      _this45.chipsData = [];
      _this45.$chips = $();
      _this45._setupInput();
      _this45.hasAutocomplete = Object.keys(_this45.options.autocompleteOptions).length > 0;

      // Set input id
      if (!_this45.$input.attr('id')) {
        _this45.$input.attr('id', M.guid());
      }

      // Render initial chips
      if (_this45.options.data.length) {
        _this45.chipsData = _this45.options.data;
        _this45._renderChips(_this45.chipsData);
      }

      // Setup autocomplete if needed
      if (_this45.hasAutocomplete) {
        _this45._setupAutocomplete();
      }

      _this45._setPlaceholder();
      _this45._setupLabel();
      _this45._setupEventHandlers();
      return _this45;
    }

    _createClass(Chips, [{
      key: "getData",


      /**
       * Get Chips Data
       */
      value: function getData() {
        return this.chipsData;
      }

      /**
       * Teardown component
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this._removeEventHandlers();
        this.$chips.remove();
        this.el.M_Chips = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleChipClickBound = this._handleChipClick.bind(this);
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
        this._handleInputFocusBound = this._handleInputFocus.bind(this);
        this._handleInputBlurBound = this._handleInputBlur.bind(this);

        this.el.addEventListener('click', this._handleChipClickBound);
        document.addEventListener('keydown', Chips._handleChipsKeydown);
        document.addEventListener('keyup', Chips._handleChipsKeyup);
        this.el.addEventListener('blur', Chips._handleChipsBlur, true);
        this.$input[0].addEventListener('focus', this._handleInputFocusBound);
        this.$input[0].addEventListener('blur', this._handleInputBlurBound);
        this.$input[0].addEventListener('keydown', this._handleInputKeydownBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleChipClickBound);
        document.removeEventListener('keydown', Chips._handleChipsKeydown);
        document.removeEventListener('keyup', Chips._handleChipsKeyup);
        this.el.removeEventListener('blur', Chips._handleChipsBlur, true);
        this.$input[0].removeEventListener('focus', this._handleInputFocusBound);
        this.$input[0].removeEventListener('blur', this._handleInputBlurBound);
        this.$input[0].removeEventListener('keydown', this._handleInputKeydownBound);
      }

      /**
       * Handle Chip Click
       * @param {Event} e
       */

    }, {
      key: "_handleChipClick",
      value: function _handleChipClick(e) {
        var $chip = $(e.target).closest('.chip');
        var clickedClose = $(e.target).is('.close');
        if ($chip.length) {
          var index = $chip.index();
          if (clickedClose) {
            // delete chip
            this.deleteChip(index);
            this.$input[0].focus();
          } else {
            // select chip
            this.selectChip(index);
          }

          // Default handle click to focus on input
        } else {
          this.$input[0].focus();
        }
      }

      /**
       * Handle Chips Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleInputFocus",


      /**
       * Handle Input Focus
       */
      value: function _handleInputFocus() {
        this.$el.addClass('focus');
      }

      /**
       * Handle Input Blur
       */

    }, {
      key: "_handleInputBlur",
      value: function _handleInputBlur() {
        this.$el.removeClass('focus');
      }

      /**
       * Handle Input Keydown
       * @param {Event} e
       */

    }, {
      key: "_handleInputKeydown",
      value: function _handleInputKeydown(e) {
        Chips._keydown = true;

        // enter
        if (e.keyCode === 13) {
          // Override enter if autocompleting.
          if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen) {
            return;
          }

          e.preventDefault();
          this.addChip({
            tag: this.$input[0].value
          });
          this.$input[0].value = '';

          // delete or left
        } else if ((e.keyCode === 8 || e.keyCode === 37) && this.$input[0].value === '' && this.chipsData.length) {
          e.preventDefault();
          this.selectChip(this.chipsData.length - 1);
        }
      }

      /**
       * Render Chip
       * @param {chip} chip
       * @return {Element}
       */

    }, {
      key: "_renderChip",
      value: function _renderChip(chip) {
        if (!chip.tag) {
          return;
        }

        var renderedChip = document.createElement('div');
        var closeIcon = document.createElement('i');
        renderedChip.classList.add('chip');
        renderedChip.textContent = chip.tag;
        renderedChip.setAttribute('tabindex', 0);
        $(closeIcon).addClass('material-icons close');
        closeIcon.textContent = 'close';

        // attach image if needed
        if (chip.image) {
          var img = document.createElement('img');
          img.setAttribute('src', chip.image);
          renderedChip.insertBefore(img, renderedChip.firstChild);
        }

        renderedChip.appendChild(closeIcon);
        return renderedChip;
      }

      /**
       * Render Chips
       */

    }, {
      key: "_renderChips",
      value: function _renderChips() {
        this.$chips.remove();
        for (var i = 0; i < this.chipsData.length; i++) {
          var chipEl = this._renderChip(this.chipsData[i]);
          this.$el.append(chipEl);
          this.$chips.add(chipEl);
        }

        // move input to end
        this.$el.append(this.$input[0]);
      }

      /**
       * Setup Autocomplete
       */

    }, {
      key: "_setupAutocomplete",
      value: function _setupAutocomplete() {
        var _this46 = this;

        this.options.autocompleteOptions.onAutocomplete = function (val) {
          _this46.addChip({
            tag: val
          });
          _this46.$input[0].value = '';
          _this46.$input[0].focus();
        };

        this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions);
      }

      /**
       * Setup Input
       */

    }, {
      key: "_setupInput",
      value: function _setupInput() {
        this.$input = this.$el.find('input');
        if (!this.$input.length) {
          this.$input = $('<input></input>');
          this.$el.append(this.$input);
        }

        this.$input.addClass('input');
      }

      /**
       * Setup Label
       */

    }, {
      key: "_setupLabel",
      value: function _setupLabel() {
        this.$label = this.$el.find('label');
        if (this.$label.length) {
          this.$label.setAttribute('for', this.$input.attr('id'));
        }
      }

      /**
       * Set placeholder
       */

    }, {
      key: "_setPlaceholder",
      value: function _setPlaceholder() {
        if (this.chipsData !== undefined && !this.chipsData.length && this.options.placeholder) {
          $(this.$input).prop('placeholder', this.options.placeholder);
        } else if ((this.chipsData === undefined || !!this.chipsData.length) && this.options.secondaryPlaceholder) {
          $(this.$input).prop('placeholder', this.options.secondaryPlaceholder);
        }
      }

      /**
       * Check if chip is valid
       * @param {chip} chip
       */

    }, {
      key: "_isValid",
      value: function _isValid(chip) {
        if (chip.hasOwnProperty('tag') && chip.tag !== '') {
          var exists = false;
          for (var i = 0; i < this.chipsData.length; i++) {
            if (this.chipsData[i].tag === chip.tag) {
              exists = true;
              break;
            }
          }
          return !exists;
        }

        return false;
      }

      /**
       * Add chip
       * @param {chip} chip
       */

    }, {
      key: "addChip",
      value: function addChip(chip) {
        if (!this._isValid(chip) || this.chipsData.length >= this.options.limit) {
          return;
        }

        var renderedChip = this._renderChip(chip);
        this.$chips.add(renderedChip);
        this.chipsData.push(chip);
        $(this.$input).before(renderedChip);
        this._setPlaceholder();

        // fire chipAdd callback
        if (typeof this.options.onChipAdd === 'function') {
          this.options.onChipAdd.call(this, this.$el, renderedChip);
        }
      }

      /**
       * Delete chip
       * @param {Number} chip
       */

    }, {
      key: "deleteChip",
      value: function deleteChip(chipIndex) {
        var $chip = this.$chips.eq(chipIndex);
        this.$chips.eq(chipIndex).remove();
        this.$chips = this.$chips.filter(function (el) {
          return $(el).index() >= 0;
        });
        this.chipsData.splice(chipIndex, 1);
        this._setPlaceholder();

        // fire chipDelete callback
        if (typeof this.options.onChipDelete === 'function') {
          this.options.onChipDelete.call(this, this.$el, $chip[0]);
        }
      }

      /**
       * Select chip
       * @param {Number} chip
       */

    }, {
      key: "selectChip",
      value: function selectChip(chipIndex) {
        var $chip = this.$chips.eq(chipIndex);
        this._selectedChip = $chip;
        $chip[0].focus();

        // fire chipSelect callback
        if (typeof this.options.onChipSelect === 'function') {
          this.options.onChipSelect.call(this, this.$el, $chip[0]);
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Chips.__proto__ || Object.getPrototypeOf(Chips), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Chips;
      }
    }, {
      key: "_handleChipsKeydown",
      value: function _handleChipsKeydown(e) {
        Chips._keydown = true;

        var $chips = $(e.target).closest('.chips');
        var chipsKeydown = e.target && $chips.length;

        // Don't handle keydown inputs on input and textarea
        if ($(e.target).is('input, textarea') || !chipsKeydown) {
          return;
        }

        var currChips = $chips[0].M_Chips;

        // backspace and delete
        if (e.keyCode === 8 || e.keyCode === 46) {
          e.preventDefault();

          var selectIndex = currChips.chipsData.length;
          if (currChips._selectedChip) {
            var index = currChips._selectedChip.index();
            currChips.deleteChip(index);
            currChips._selectedChip = null;

            // Make sure selectIndex doesn't go negative
            selectIndex = Math.max(index - 1, 0);
          }

          if (currChips.chipsData.length) {
            currChips.selectChip(selectIndex);
          }

          // left arrow key
        } else if (e.keyCode === 37) {
          if (currChips._selectedChip) {
            var _selectIndex = currChips._selectedChip.index() - 1;
            if (_selectIndex < 0) {
              return;
            }
            currChips.selectChip(_selectIndex);
          }

          // right arrow key
        } else if (e.keyCode === 39) {
          if (currChips._selectedChip) {
            var _selectIndex2 = currChips._selectedChip.index() + 1;

            if (_selectIndex2 >= currChips.chipsData.length) {
              currChips.$input[0].focus();
            } else {
              currChips.selectChip(_selectIndex2);
            }
          }
        }
      }

      /**
       * Handle Chips Keyup
       * @param {Event} e
       */

    }, {
      key: "_handleChipsKeyup",
      value: function _handleChipsKeyup(e) {
        Chips._keydown = false;
      }

      /**
       * Handle Chips Blur
       * @param {Event} e
       */

    }, {
      key: "_handleChipsBlur",
      value: function _handleChipsBlur(e) {
        if (!Chips._keydown) {
          var $chips = $(e.target).closest('.chips');
          var currChips = $chips[0].M_Chips;

          currChips._selectedChip = null;
        }
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Chips;
  }(Component);

  /**
   * @static
   * @memberof Chips
   */


  Chips._keydown = false;

  M.Chips = Chips;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Chips, 'chips', 'M_Chips');
  }

  $(document).ready(function () {
    // Handle removal of static chips.
    $(document.body).on('click', '.chip .close', function () {
      var $chips = $(this).closest('.chips');
      if ($chips.length && $chips[0].M_Chips) {
        return;
      }
      $(this).closest('.chip').remove();
    });
  });
})(cash);
;(function ($) {
  'use strict';

  var _defaults = {
    top: 0,
    bottom: Infinity,
    offset: 0,
    onPositionChange: null
  };

  /**
   * @class
   *
   */

  var Pushpin = function (_Component13) {
    _inherits(Pushpin, _Component13);

    /**
     * Construct Pushpin instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Pushpin(el, options) {
      _classCallCheck(this, Pushpin);

      var _this47 = _possibleConstructorReturn(this, (Pushpin.__proto__ || Object.getPrototypeOf(Pushpin)).call(this, Pushpin, el, options));

      _this47.el.M_Pushpin = _this47;

      /**
       * Options for the modal
       * @member Pushpin#options
       */
      _this47.options = $.extend({}, Pushpin.defaults, options);

      _this47.originalOffset = _this47.el.offsetTop;
      Pushpin._pushpins.push(_this47);
      _this47._setupEventHandlers();
      _this47._updatePosition();
      return _this47;
    }

    _createClass(Pushpin, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this.el.style.top = null;
        this._removePinClasses();
        this._removeEventHandlers();

        // Remove pushpin Inst
        var index = Pushpin._pushpins.indexOf(this);
        Pushpin._pushpins.splice(index, 1);
      }
    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        document.addEventListener('scroll', Pushpin._updateElements);
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        document.removeEventListener('scroll', Pushpin._updateElements);
      }
    }, {
      key: "_updatePosition",
      value: function _updatePosition() {
        var scrolled = M.getDocumentScrollTop() + this.options.offset;

        if (this.options.top <= scrolled && this.options.bottom >= scrolled && !this.el.classList.contains('pinned')) {
          this._removePinClasses();
          this.el.style.top = this.options.offset + "px";
          this.el.classList.add('pinned');

          // onPositionChange callback
          if (typeof this.options.onPositionChange === 'function') {
            this.options.onPositionChange.call(this, 'pinned');
          }
        }

        // Add pin-top (when scrolled position is above top)
        if (scrolled < this.options.top && !this.el.classList.contains('pin-top')) {
          this._removePinClasses();
          this.el.style.top = 0;
          this.el.classList.add('pin-top');

          // onPositionChange callback
          if (typeof this.options.onPositionChange === 'function') {
            this.options.onPositionChange.call(this, 'pin-top');
          }
        }

        // Add pin-bottom (when scrolled position is below bottom)
        if (scrolled > this.options.bottom && !this.el.classList.contains('pin-bottom')) {
          this._removePinClasses();
          this.el.classList.add('pin-bottom');
          this.el.style.top = this.options.bottom - this.originalOffset + "px";

          // onPositionChange callback
          if (typeof this.options.onPositionChange === 'function') {
            this.options.onPositionChange.call(this, 'pin-bottom');
          }
        }
      }
    }, {
      key: "_removePinClasses",
      value: function _removePinClasses() {
        // IE 11 bug (can't remove multiple classes in one line)
        this.el.classList.remove('pin-top');
        this.el.classList.remove('pinned');
        this.el.classList.remove('pin-bottom');
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Pushpin.__proto__ || Object.getPrototypeOf(Pushpin), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Pushpin;
      }
    }, {
      key: "_updateElements",
      value: function _updateElements() {
        for (var elIndex in Pushpin._pushpins) {
          var pInstance = Pushpin._pushpins[elIndex];
          pInstance._updatePosition();
        }
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Pushpin;
  }(Component);

  /**
   * @static
   * @memberof Pushpin
   */


  Pushpin._pushpins = [];

  M.Pushpin = Pushpin;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Pushpin, 'pushpin', 'M_Pushpin');
  }
})(cash);
;(function ($, anim) {
  'use strict';

  var _defaults = {
    direction: 'top',
    hoverEnabled: true,
    toolbarEnabled: false
  };

  $.fn.reverse = [].reverse;

  /**
   * @class
   *
   */

  var FloatingActionButton = function (_Component14) {
    _inherits(FloatingActionButton, _Component14);

    /**
     * Construct FloatingActionButton instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function FloatingActionButton(el, options) {
      _classCallCheck(this, FloatingActionButton);

      var _this48 = _possibleConstructorReturn(this, (FloatingActionButton.__proto__ || Object.getPrototypeOf(FloatingActionButton)).call(this, FloatingActionButton, el, options));

      _this48.el.M_FloatingActionButton = _this48;

      /**
       * Options for the fab
       * @member FloatingActionButton#options
       * @prop {Boolean} [direction] - Direction fab menu opens
       * @prop {Boolean} [hoverEnabled=true] - Enable hover vs click
       * @prop {Boolean} [toolbarEnabled=false] - Enable toolbar transition
       */
      _this48.options = $.extend({}, FloatingActionButton.defaults, options);

      _this48.isOpen = false;
      _this48.$anchor = _this48.$el.children('a').first();
      _this48.$menu = _this48.$el.children('ul').first();
      _this48.$floatingBtns = _this48.$el.find('ul .btn-floating');
      _this48.$floatingBtnsReverse = _this48.$el.find('ul .btn-floating').reverse();
      _this48.offsetY = 0;
      _this48.offsetX = 0;

      _this48.$el.addClass("direction-" + _this48.options.direction);
      if (_this48.options.direction === 'top') {
        _this48.offsetY = 40;
      } else if (_this48.options.direction === 'right') {
        _this48.offsetX = -40;
      } else if (_this48.options.direction === 'bottom') {
        _this48.offsetY = -40;
      } else {
        _this48.offsetX = 40;
      }
      _this48._setupEventHandlers();
      return _this48;
    }

    _createClass(FloatingActionButton, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.el.M_FloatingActionButton = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleFABClickBound = this._handleFABClick.bind(this);
        this._handleOpenBound = this.open.bind(this);
        this._handleCloseBound = this.close.bind(this);

        if (this.options.hoverEnabled && !this.options.toolbarEnabled) {
          this.el.addEventListener('mouseenter', this._handleOpenBound);
          this.el.addEventListener('mouseleave', this._handleCloseBound);
        } else {
          this.el.addEventListener('click', this._handleFABClickBound);
        }
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        if (this.options.hoverEnabled && !this.options.toolbarEnabled) {
          this.el.removeEventListener('mouseenter', this._handleOpenBound);
          this.el.removeEventListener('mouseleave', this._handleCloseBound);
        } else {
          this.el.removeEventListener('click', this._handleFABClickBound);
        }
      }

      /**
       * Handle FAB Click
       */

    }, {
      key: "_handleFABClick",
      value: function _handleFABClick() {
        if (this.isOpen) {
          this.close();
        } else {
          this.open();
        }
      }

      /**
       * Handle Document Click
       * @param {Event} e
       */

    }, {
      key: "_handleDocumentClick",
      value: function _handleDocumentClick(e) {
        if (!$(e.target).closest(this.$menu).length) {
          this.close();
        }
      }

      /**
       * Open FAB
       */

    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        if (this.options.toolbarEnabled) {
          this._animateInToolbar();
        } else {
          this._animateInFAB();
        }
        this.isOpen = true;
      }

      /**
       * Close FAB
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        if (this.options.toolbarEnabled) {
          window.removeEventListener('scroll', this._handleCloseBound, true);
          document.body.removeEventListener('click', this._handleDocumentClickBound, true);
          this._animateOutToolbar();
        } else {
          this._animateOutFAB();
        }
        this.isOpen = false;
      }

      /**
       * Classic FAB Menu open
       */

    }, {
      key: "_animateInFAB",
      value: function _animateInFAB() {
        var _this49 = this;

        this.$el.addClass('active');

        var time = 0;
        this.$floatingBtnsReverse.each(function (el) {
          anim({
            targets: el,
            opacity: 1,
            scale: [0.4, 1],
            translateY: [_this49.offsetY, 0],
            translateX: [_this49.offsetX, 0],
            duration: 275,
            delay: time,
            easing: 'easeInOutQuad'
          });
          time += 40;
        });
      }

      /**
       * Classic FAB Menu close
       */

    }, {
      key: "_animateOutFAB",
      value: function _animateOutFAB() {
        var _this50 = this;

        this.$floatingBtnsReverse.each(function (el) {
          anim.remove(el);
          anim({
            targets: el,
            opacity: 0,
            scale: 0.4,
            translateY: _this50.offsetY,
            translateX: _this50.offsetX,
            duration: 175,
            easing: 'easeOutQuad',
            complete: function () {
              _this50.$el.removeClass('active');
            }
          });
        });
      }

      /**
       * Toolbar transition Menu open
       */

    }, {
      key: "_animateInToolbar",
      value: function _animateInToolbar() {
        var _this51 = this;

        var scaleFactor = void 0;
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var btnRect = this.el.getBoundingClientRect();
        var backdrop = $('<div class="fab-backdrop"></div>');
        var fabColor = this.$anchor.css('background-color');
        this.$anchor.append(backdrop);

        this.offsetX = btnRect.left - windowWidth / 2 + btnRect.width / 2;
        this.offsetY = windowHeight - btnRect.bottom;
        scaleFactor = windowWidth / backdrop[0].clientWidth;
        this.btnBottom = btnRect.bottom;
        this.btnLeft = btnRect.left;
        this.btnWidth = btnRect.width;

        // Set initial state
        this.$el.addClass('active');
        this.$el.css({
          'text-align': 'center',
          width: '100%',
          bottom: 0,
          left: 0,
          transform: 'translateX(' + this.offsetX + 'px)',
          transition: 'none'
        });
        this.$anchor.css({
          transform: 'translateY(' + -this.offsetY + 'px)',
          transition: 'none'
        });
        backdrop.css({
          'background-color': fabColor
        });

        setTimeout(function () {
          _this51.$el.css({
            transform: '',
            transition: 'transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s'
          });
          _this51.$anchor.css({
            overflow: 'visible',
            transform: '',
            transition: 'transform .2s'
          });

          setTimeout(function () {
            _this51.$el.css({
              overflow: 'hidden',
              'background-color': fabColor
            });
            backdrop.css({
              transform: 'scale(' + scaleFactor + ')',
              transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
            });
            _this51.$menu.children('li').children('a').css({
              opacity: 1
            });

            // Scroll to close.
            _this51._handleDocumentClickBound = _this51._handleDocumentClick.bind(_this51);
            window.addEventListener('scroll', _this51._handleCloseBound, true);
            document.body.addEventListener('click', _this51._handleDocumentClickBound, true);
          }, 100);
        }, 0);
      }

      /**
       * Toolbar transition Menu close
       */

    }, {
      key: "_animateOutToolbar",
      value: function _animateOutToolbar() {
        var _this52 = this;

        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var backdrop = this.$el.find('.fab-backdrop');
        var fabColor = this.$anchor.css('background-color');

        this.offsetX = this.btnLeft - windowWidth / 2 + this.btnWidth / 2;
        this.offsetY = windowHeight - this.btnBottom;

        // Hide backdrop
        this.$el.removeClass('active');
        this.$el.css({
          'background-color': 'transparent',
          transition: 'none'
        });
        this.$anchor.css({
          transition: 'none'
        });
        backdrop.css({
          transform: 'scale(0)',
          'background-color': fabColor
        });
        this.$menu.children('li').children('a').css({
          opacity: ''
        });

        setTimeout(function () {
          backdrop.remove();

          // Set initial state.
          _this52.$el.css({
            'text-align': '',
            width: '',
            bottom: '',
            left: '',
            overflow: '',
            'background-color': '',
            transform: 'translate3d(' + -_this52.offsetX + 'px,0,0)'
          });
          _this52.$anchor.css({
            overflow: '',
            transform: 'translate3d(0,' + _this52.offsetY + 'px,0)'
          });

          setTimeout(function () {
            _this52.$el.css({
              transform: 'translate3d(0,0,0)',
              transition: 'transform .2s'
            });
            _this52.$anchor.css({
              transform: 'translate3d(0,0,0)',
              transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
            });
          }, 20);
        }, 200);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(FloatingActionButton.__proto__ || Object.getPrototypeOf(FloatingActionButton), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_FloatingActionButton;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return FloatingActionButton;
  }(Component);

  M.FloatingActionButton = FloatingActionButton;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(FloatingActionButton, 'floatingActionButton', 'M_FloatingActionButton');
  }
})(cash, M.anime);
;(function ($) {
  'use strict';

  var _defaults = {
    // Close when date is selected
    autoClose: false,

    // the default output format for the input field value
    format: 'mmm dd, yyyy',

    // Used to create date object from current input string
    parse: null,

    // The initial date to view when first opened
    defaultDate: null,

    // Make the `defaultDate` the initial selected value
    setDefaultDate: false,

    disableWeekends: false,

    disableDayFn: null,

    // First day of week (0: Sunday, 1: Monday etc)
    firstDay: 0,

    // The earliest date that can be selected
    minDate: null,
    // Thelatest date that can be selected
    maxDate: null,

    // Number of years either side, or array of upper/lower range
    yearRange: 10,

    // used internally (don't config outside)
    minYear: 0,
    maxYear: 9999,
    minMonth: undefined,
    maxMonth: undefined,

    startRange: null,
    endRange: null,

    isRTL: false,

    // Render the month after year in the calendar title
    showMonthAfterYear: false,

    // Render days of the calendar grid that fall in the next or previous month
    showDaysInNextAndPreviousMonths: false,

    // Specify a DOM element to render the calendar in
    container: null,

    // Show clear button
    showClearBtn: false,

    // internationalization
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      previousMonth: '‹',
      nextMonth: '›',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekdaysAbbrev: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    },

    // events array
    events: [],

    // callback function
    onSelect: null,
    onOpen: null,
    onClose: null,
    onDraw: null
  };

  /**
   * @class
   *
   */

  var Datepicker = function (_Component15) {
    _inherits(Datepicker, _Component15);

    /**
     * Construct Datepicker instance and set up overlay
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Datepicker(el, options) {
      _classCallCheck(this, Datepicker);

      var _this53 = _possibleConstructorReturn(this, (Datepicker.__proto__ || Object.getPrototypeOf(Datepicker)).call(this, Datepicker, el, options));

      _this53.el.M_Datepicker = _this53;

      _this53.options = $.extend({}, Datepicker.defaults, options);

      // make sure i18n defaults are not lost when only few i18n option properties are passed
      if (!!options && options.hasOwnProperty('i18n') && typeof options.i18n === 'object') {
        _this53.options.i18n = $.extend({}, Datepicker.defaults.i18n, options.i18n);
      }

      // Remove time component from minDate and maxDate options
      if (_this53.options.minDate) _this53.options.minDate.setHours(0, 0, 0, 0);
      if (_this53.options.maxDate) _this53.options.maxDate.setHours(0, 0, 0, 0);

      _this53.id = M.guid();

      _this53._setupVariables();
      _this53._insertHTMLIntoDOM();
      _this53._setupModal();

      _this53._setupEventHandlers();

      if (!_this53.options.defaultDate) {
        _this53.options.defaultDate = new Date(Date.parse(_this53.el.value));
      }

      var defDate = _this53.options.defaultDate;
      if (Datepicker._isDate(defDate)) {
        if (_this53.options.setDefaultDate) {
          _this53.setDate(defDate, true);
          _this53.setInputValue();
        } else {
          _this53.gotoDate(defDate);
        }
      } else {
        _this53.gotoDate(new Date());
      }

      /**
       * Describes open/close state of datepicker
       * @type {Boolean}
       */
      _this53.isOpen = false;
      return _this53;
    }

    _createClass(Datepicker, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.modal.destroy();
        $(this.modalEl).remove();
        this.destroySelects();
        this.el.M_Datepicker = undefined;
      }
    }, {
      key: "destroySelects",
      value: function destroySelects() {
        var oldYearSelect = this.calendarEl.querySelector('.orig-select-year');
        if (oldYearSelect) {
          M.FormSelect.getInstance(oldYearSelect).destroy();
        }
        var oldMonthSelect = this.calendarEl.querySelector('.orig-select-month');
        if (oldMonthSelect) {
          M.FormSelect.getInstance(oldMonthSelect).destroy();
        }
      }
    }, {
      key: "_insertHTMLIntoDOM",
      value: function _insertHTMLIntoDOM() {
        if (this.options.showClearBtn) {
          $(this.clearBtn).css({ visibility: '' });
          this.clearBtn.innerHTML = this.options.i18n.clear;
        }

        this.doneBtn.innerHTML = this.options.i18n.done;
        this.cancelBtn.innerHTML = this.options.i18n.cancel;

        if (this.options.container) {
          this.$modalEl.appendTo(this.options.container);
        } else {
          this.$modalEl.insertBefore(this.el);
        }
      }
    }, {
      key: "_setupModal",
      value: function _setupModal() {
        var _this54 = this;

        this.modalEl.id = 'modal-' + this.id;
        this.modal = M.Modal.init(this.modalEl, {
          onCloseEnd: function () {
            _this54.isOpen = false;
          }
        });
      }
    }, {
      key: "toString",
      value: function toString(format) {
        var _this55 = this;

        format = format || this.options.format;
        if (!Datepicker._isDate(this.date)) {
          return '';
        }

        var formatArray = format.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
        var formattedDate = formatArray.map(function (label) {
          if (_this55.formats[label]) {
            return _this55.formats[label]();
          }

          return label;
        }).join('');
        return formattedDate;
      }
    }, {
      key: "setDate",
      value: function setDate(date, preventOnSelect) {
        if (!date) {
          this.date = null;
          this._renderDateDisplay();
          return this.draw();
        }
        if (typeof date === 'string') {
          date = new Date(Date.parse(date));
        }
        if (!Datepicker._isDate(date)) {
          return;
        }

        var min = this.options.minDate,
            max = this.options.maxDate;

        if (Datepicker._isDate(min) && date < min) {
          date = min;
        } else if (Datepicker._isDate(max) && date > max) {
          date = max;
        }

        this.date = new Date(date.getTime());

        this._renderDateDisplay();

        Datepicker._setToStartOfDay(this.date);
        this.gotoDate(this.date);

        if (!preventOnSelect && typeof this.options.onSelect === 'function') {
          this.options.onSelect.call(this, this.date);
        }
      }
    }, {
      key: "setInputValue",
      value: function setInputValue() {
        this.el.value = this.toString();
        this.$el.trigger('change', { firedBy: this });
      }
    }, {
      key: "_renderDateDisplay",
      value: function _renderDateDisplay() {
        var displayDate = Datepicker._isDate(this.date) ? this.date : new Date();
        var i18n = this.options.i18n;
        var day = i18n.weekdaysShort[displayDate.getDay()];
        var month = i18n.monthsShort[displayDate.getMonth()];
        var date = displayDate.getDate();
        this.yearTextEl.innerHTML = displayDate.getFullYear();
        this.dateTextEl.innerHTML = day + ", " + month + " " + date;
      }

      /**
       * change view to a specific date
       */

    }, {
      key: "gotoDate",
      value: function gotoDate(date) {
        var newCalendar = true;

        if (!Datepicker._isDate(date)) {
          return;
        }

        if (this.calendars) {
          var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
              lastVisibleDate = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
              visibleDate = date.getTime();
          // get the end of the month
          lastVisibleDate.setMonth(lastVisibleDate.getMonth() + 1);
          lastVisibleDate.setDate(lastVisibleDate.getDate() - 1);
          newCalendar = visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate;
        }

        if (newCalendar) {
          this.calendars = [{
            month: date.getMonth(),
            year: date.getFullYear()
          }];
        }

        this.adjustCalendars();
      }
    }, {
      key: "adjustCalendars",
      value: function adjustCalendars() {
        this.calendars[0] = this.adjustCalendar(this.calendars[0]);
        this.draw();
      }
    }, {
      key: "adjustCalendar",
      value: function adjustCalendar(calendar) {
        if (calendar.month < 0) {
          calendar.year -= Math.ceil(Math.abs(calendar.month) / 12);
          calendar.month += 12;
        }
        if (calendar.month > 11) {
          calendar.year += Math.floor(Math.abs(calendar.month) / 12);
          calendar.month -= 12;
        }
        return calendar;
      }
    }, {
      key: "nextMonth",
      value: function nextMonth() {
        this.calendars[0].month++;
        this.adjustCalendars();
      }
    }, {
      key: "prevMonth",
      value: function prevMonth() {
        this.calendars[0].month--;
        this.adjustCalendars();
      }
    }, {
      key: "render",
      value: function render(year, month, randId) {
        var opts = this.options,
            now = new Date(),
            days = Datepicker._getDaysInMonth(year, month),
            before = new Date(year, month, 1).getDay(),
            data = [],
            row = [];
        Datepicker._setToStartOfDay(now);
        if (opts.firstDay > 0) {
          before -= opts.firstDay;
          if (before < 0) {
            before += 7;
          }
        }
        var previousMonth = month === 0 ? 11 : month - 1,
            nextMonth = month === 11 ? 0 : month + 1,
            yearOfPreviousMonth = month === 0 ? year - 1 : year,
            yearOfNextMonth = month === 11 ? year + 1 : year,
            daysInPreviousMonth = Datepicker._getDaysInMonth(yearOfPreviousMonth, previousMonth);
        var cells = days + before,
            after = cells;
        while (after > 7) {
          after -= 7;
        }
        cells += 7 - after;
        var isWeekSelected = false;
        for (var i = 0, r = 0; i < cells; i++) {
          var day = new Date(year, month, 1 + (i - before)),
              isSelected = Datepicker._isDate(this.date) ? Datepicker._compareDates(day, this.date) : false,
              isToday = Datepicker._compareDates(day, now),
              hasEvent = opts.events.indexOf(day.toDateString()) !== -1 ? true : false,
              isEmpty = i < before || i >= days + before,
              dayNumber = 1 + (i - before),
              monthNumber = month,
              yearNumber = year,
              isStartRange = opts.startRange && Datepicker._compareDates(opts.startRange, day),
              isEndRange = opts.endRange && Datepicker._compareDates(opts.endRange, day),
              isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
              isDisabled = opts.minDate && day < opts.minDate || opts.maxDate && day > opts.maxDate || opts.disableWeekends && Datepicker._isWeekend(day) || opts.disableDayFn && opts.disableDayFn(day);

          if (isEmpty) {
            if (i < before) {
              dayNumber = daysInPreviousMonth + dayNumber;
              monthNumber = previousMonth;
              yearNumber = yearOfPreviousMonth;
            } else {
              dayNumber = dayNumber - days;
              monthNumber = nextMonth;
              yearNumber = yearOfNextMonth;
            }
          }

          var dayConfig = {
            day: dayNumber,
            month: monthNumber,
            year: yearNumber,
            hasEvent: hasEvent,
            isSelected: isSelected,
            isToday: isToday,
            isDisabled: isDisabled,
            isEmpty: isEmpty,
            isStartRange: isStartRange,
            isEndRange: isEndRange,
            isInRange: isInRange,
            showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths
          };

          row.push(this.renderDay(dayConfig));

          if (++r === 7) {
            data.push(this.renderRow(row, opts.isRTL, isWeekSelected));
            row = [];
            r = 0;
            isWeekSelected = false;
          }
        }
        return this.renderTable(opts, data, randId);
      }
    }, {
      key: "renderDay",
      value: function renderDay(opts) {
        var arr = [];
        var ariaSelected = 'false';
        if (opts.isEmpty) {
          if (opts.showDaysInNextAndPreviousMonths) {
            arr.push('is-outside-current-month');
            arr.push('is-selection-disabled');
          } else {
            return '<td class="is-empty"></td>';
          }
        }
        if (opts.isDisabled) {
          arr.push('is-disabled');
        }

        if (opts.isToday) {
          arr.push('is-today');
        }
        if (opts.isSelected) {
          arr.push('is-selected');
          ariaSelected = 'true';
        }
        if (opts.hasEvent) {
          arr.push('has-event');
        }
        if (opts.isInRange) {
          arr.push('is-inrange');
        }
        if (opts.isStartRange) {
          arr.push('is-startrange');
        }
        if (opts.isEndRange) {
          arr.push('is-endrange');
        }
        return "<td data-day=\"" + opts.day + "\" class=\"" + arr.join(' ') + "\" aria-selected=\"" + ariaSelected + "\">" + ("<button class=\"datepicker-day-button\" type=\"button\" data-year=\"" + opts.year + "\" data-month=\"" + opts.month + "\" data-day=\"" + opts.day + "\">" + opts.day + "</button>") + '</td>';
      }
    }, {
      key: "renderRow",
      value: function renderRow(days, isRTL, isRowSelected) {
        return '<tr class="datepicker-row' + (isRowSelected ? ' is-selected' : '') + '">' + (isRTL ? days.reverse() : days).join('') + '</tr>';
      }
    }, {
      key: "renderTable",
      value: function renderTable(opts, data, randId) {
        return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + randId + '">' + this.renderHead(opts) + this.renderBody(data) + '</table></div>';
      }
    }, {
      key: "renderHead",
      value: function renderHead(opts) {
        var i = void 0,
            arr = [];
        for (i = 0; i < 7; i++) {
          arr.push("<th scope=\"col\"><abbr title=\"" + this.renderDayName(opts, i) + "\">" + this.renderDayName(opts, i, true) + "</abbr></th>");
        }
        return '<thead><tr>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</tr></thead>';
      }
    }, {
      key: "renderBody",
      value: function renderBody(rows) {
        return '<tbody>' + rows.join('') + '</tbody>';
      }
    }, {
      key: "renderTitle",
      value: function renderTitle(instance, c, year, month, refYear, randId) {
        var i = void 0,
            j = void 0,
            arr = void 0,
            opts = this.options,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div id="' + randId + '" class="datepicker-controls" role="heading" aria-live="assertive">',
            monthHtml = void 0,
            yearHtml = void 0,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
          arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' + (i === month ? ' selected="selected"' : '') + (isMinYear && i < opts.minMonth || isMaxYear && i > opts.maxMonth ? 'disabled="disabled"' : '') + '>' + opts.i18n.months[i] + '</option>');
        }

        monthHtml = '<select class="datepicker-select orig-select-month" tabindex="-1">' + arr.join('') + '</select>';

        if ($.isArray(opts.yearRange)) {
          i = opts.yearRange[0];
          j = opts.yearRange[1] + 1;
        } else {
          i = year - opts.yearRange;
          j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
          if (i >= opts.minYear) {
            arr.push("<option value=\"" + i + "\" " + (i === year ? 'selected="selected"' : '') + ">" + i + "</option>");
          }
        }

        yearHtml = "<select class=\"datepicker-select orig-select-year\" tabindex=\"-1\">" + arr.join('') + "</select>";

        var leftArrow = '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg>';
        html += "<button class=\"month-prev" + (prev ? '' : ' is-disabled') + "\" type=\"button\">" + leftArrow + "</button>";

        html += '<div class="selects-container">';
        if (opts.showMonthAfterYear) {
          html += yearHtml + monthHtml;
        } else {
          html += monthHtml + yearHtml;
        }
        html += '</div>';

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
          prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
          next = false;
        }

        var rightArrow = '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>';
        html += "<button class=\"month-next" + (next ? '' : ' is-disabled') + "\" type=\"button\">" + rightArrow + "</button>";

        return html += '</div>';
      }

      /**
       * refresh the HTML
       */

    }, {
      key: "draw",
      value: function draw(force) {
        if (!this.isOpen && !force) {
          return;
        }
        var opts = this.options,
            minYear = opts.minYear,
            maxYear = opts.maxYear,
            minMonth = opts.minMonth,
            maxMonth = opts.maxMonth,
            html = '',
            randId = void 0;

        if (this._y <= minYear) {
          this._y = minYear;
          if (!isNaN(minMonth) && this._m < minMonth) {
            this._m = minMonth;
          }
        }
        if (this._y >= maxYear) {
          this._y = maxYear;
          if (!isNaN(maxMonth) && this._m > maxMonth) {
            this._m = maxMonth;
          }
        }

        randId = 'datepicker-title-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);

        for (var c = 0; c < 1; c++) {
          this._renderDateDisplay();
          html += this.renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year, randId) + this.render(this.calendars[c].year, this.calendars[c].month, randId);
        }

        this.destroySelects();

        this.calendarEl.innerHTML = html;

        // Init Materialize Select
        var yearSelect = this.calendarEl.querySelector('.orig-select-year');
        var monthSelect = this.calendarEl.querySelector('.orig-select-month');
        M.FormSelect.init(yearSelect, {
          classes: 'select-year',
          dropdownOptions: { container: document.body, constrainWidth: false }
        });
        M.FormSelect.init(monthSelect, {
          classes: 'select-month',
          dropdownOptions: { container: document.body, constrainWidth: false }
        });

        // Add change handlers for select
        yearSelect.addEventListener('change', this._handleYearChange.bind(this));
        monthSelect.addEventListener('change', this._handleMonthChange.bind(this));

        if (typeof this.options.onDraw === 'function') {
          this.options.onDraw(this);
        }
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
        this._handleInputClickBound = this._handleInputClick.bind(this);
        this._handleInputChangeBound = this._handleInputChange.bind(this);
        this._handleCalendarClickBound = this._handleCalendarClick.bind(this);
        this._finishSelectionBound = this._finishSelection.bind(this);
        this._handleMonthChange = this._handleMonthChange.bind(this);
        this._closeBound = this.close.bind(this);

        this.el.addEventListener('click', this._handleInputClickBound);
        this.el.addEventListener('keydown', this._handleInputKeydownBound);
        this.el.addEventListener('change', this._handleInputChangeBound);
        this.calendarEl.addEventListener('click', this._handleCalendarClickBound);
        this.doneBtn.addEventListener('click', this._finishSelectionBound);
        this.cancelBtn.addEventListener('click', this._closeBound);

        if (this.options.showClearBtn) {
          this._handleClearClickBound = this._handleClearClick.bind(this);
          this.clearBtn.addEventListener('click', this._handleClearClickBound);
        }
      }
    }, {
      key: "_setupVariables",
      value: function _setupVariables() {
        var _this56 = this;

        this.$modalEl = $(Datepicker._template);
        this.modalEl = this.$modalEl[0];

        this.calendarEl = this.modalEl.querySelector('.datepicker-calendar');

        this.yearTextEl = this.modalEl.querySelector('.year-text');
        this.dateTextEl = this.modalEl.querySelector('.date-text');
        if (this.options.showClearBtn) {
          this.clearBtn = this.modalEl.querySelector('.datepicker-clear');
        }
        this.doneBtn = this.modalEl.querySelector('.datepicker-done');
        this.cancelBtn = this.modalEl.querySelector('.datepicker-cancel');

        this.formats = {
          d: function () {
            return _this56.date.getDate();
          },
          dd: function () {
            var d = _this56.date.getDate();
            return (d < 10 ? '0' : '') + d;
          },
          ddd: function () {
            return _this56.options.i18n.weekdaysShort[_this56.date.getDay()];
          },
          dddd: function () {
            return _this56.options.i18n.weekdays[_this56.date.getDay()];
          },
          m: function () {
            return _this56.date.getMonth() + 1;
          },
          mm: function () {
            var m = _this56.date.getMonth() + 1;
            return (m < 10 ? '0' : '') + m;
          },
          mmm: function () {
            return _this56.options.i18n.monthsShort[_this56.date.getMonth()];
          },
          mmmm: function () {
            return _this56.options.i18n.months[_this56.date.getMonth()];
          },
          yy: function () {
            return ('' + _this56.date.getFullYear()).slice(2);
          },
          yyyy: function () {
            return _this56.date.getFullYear();
          }
        };
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleInputClickBound);
        this.el.removeEventListener('keydown', this._handleInputKeydownBound);
        this.el.removeEventListener('change', this._handleInputChangeBound);
        this.calendarEl.removeEventListener('click', this._handleCalendarClickBound);
      }
    }, {
      key: "_handleInputClick",
      value: function _handleInputClick() {
        this.open();
      }
    }, {
      key: "_handleInputKeydown",
      value: function _handleInputKeydown(e) {
        if (e.which === M.keys.ENTER) {
          e.preventDefault();
          this.open();
        }
      }
    }, {
      key: "_handleCalendarClick",
      value: function _handleCalendarClick(e) {
        if (!this.isOpen) {
          return;
        }

        var $target = $(e.target);
        if (!$target.hasClass('is-disabled')) {
          if ($target.hasClass('datepicker-day-button') && !$target.hasClass('is-empty') && !$target.parent().hasClass('is-disabled')) {
            this.setDate(new Date(e.target.getAttribute('data-year'), e.target.getAttribute('data-month'), e.target.getAttribute('data-day')));
            if (this.options.autoClose) {
              this._finishSelection();
            }
          } else if ($target.closest('.month-prev').length) {
            this.prevMonth();
          } else if ($target.closest('.month-next').length) {
            this.nextMonth();
          }
        }
      }
    }, {
      key: "_handleClearClick",
      value: function _handleClearClick() {
        this.date = null;
        this.setInputValue();
        this.close();
      }
    }, {
      key: "_handleMonthChange",
      value: function _handleMonthChange(e) {
        this.gotoMonth(e.target.value);
      }
    }, {
      key: "_handleYearChange",
      value: function _handleYearChange(e) {
        this.gotoYear(e.target.value);
      }

      /**
       * change view to a specific month (zero-index, e.g. 0: January)
       */

    }, {
      key: "gotoMonth",
      value: function gotoMonth(month) {
        if (!isNaN(month)) {
          this.calendars[0].month = parseInt(month, 10);
          this.adjustCalendars();
        }
      }

      /**
       * change view to a specific full year (e.g. "2012")
       */

    }, {
      key: "gotoYear",
      value: function gotoYear(year) {
        if (!isNaN(year)) {
          this.calendars[0].year = parseInt(year, 10);
          this.adjustCalendars();
        }
      }
    }, {
      key: "_handleInputChange",
      value: function _handleInputChange(e) {
        var date = void 0;

        // Prevent change event from being fired when triggered by the plugin
        if (e.firedBy === this) {
          return;
        }
        if (this.options.parse) {
          date = this.options.parse(this.el.value, this.options.format);
        } else {
          date = new Date(Date.parse(this.el.value));
        }

        if (Datepicker._isDate(date)) {
          this.setDate(date);
        }
      }
    }, {
      key: "renderDayName",
      value: function renderDayName(opts, day, abbr) {
        day += opts.firstDay;
        while (day >= 7) {
          day -= 7;
        }
        return abbr ? opts.i18n.weekdaysAbbrev[day] : opts.i18n.weekdays[day];
      }

      /**
       * Set input value to the selected date and close Datepicker
       */

    }, {
      key: "_finishSelection",
      value: function _finishSelection() {
        this.setInputValue();
        this.close();
      }

      /**
       * Open Datepicker
       */

    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        this.isOpen = true;
        if (typeof this.options.onOpen === 'function') {
          this.options.onOpen.call(this);
        }
        this.draw();
        this.modal.open();
        return this;
      }

      /**
       * Close Datepicker
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isOpen = false;
        if (typeof this.options.onClose === 'function') {
          this.options.onClose.call(this);
        }
        this.modal.close();
        return this;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Datepicker.__proto__ || Object.getPrototypeOf(Datepicker), "init", this).call(this, this, els, options);
      }
    }, {
      key: "_isDate",
      value: function _isDate(obj) {
        return (/Date/.test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime())
        );
      }
    }, {
      key: "_isWeekend",
      value: function _isWeekend(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
      }
    }, {
      key: "_setToStartOfDay",
      value: function _setToStartOfDay(date) {
        if (Datepicker._isDate(date)) date.setHours(0, 0, 0, 0);
      }
    }, {
      key: "_getDaysInMonth",
      value: function _getDaysInMonth(year, month) {
        return [31, Datepicker._isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
      }
    }, {
      key: "_isLeapYear",
      value: function _isLeapYear(year) {
        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
      }
    }, {
      key: "_compareDates",
      value: function _compareDates(a, b) {
        // weak date comparison (use setToStartOfDay(date) to ensure correct result)
        return a.getTime() === b.getTime();
      }
    }, {
      key: "_setToStartOfDay",
      value: function _setToStartOfDay(date) {
        if (Datepicker._isDate(date)) date.setHours(0, 0, 0, 0);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Datepicker;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Datepicker;
  }(Component);

  Datepicker._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', '</div>', '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', '</div>', '</div>', '</div>', '</div>', '</div>'].join('');

  M.Datepicker = Datepicker;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Datepicker, 'datepicker', 'M_Datepicker');
  }
})(cash);
;(function ($) {
  'use strict';

  var _defaults = {
    dialRadius: 135,
    outerRadius: 105,
    innerRadius: 70,
    tickRadius: 20,
    duration: 350,
    container: null,
    defaultTime: 'now', // default time, 'now' or '13:14' e.g.
    fromNow: 0, // Millisecond offset from the defaultTime
    showClearBtn: false,

    // internationalization
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok'
    },

    autoClose: false, // auto close when minute is selected
    twelveHour: true, // change to 12 hour AM/PM clock from 24 hour
    vibrate: true, // vibrate the device when dragging clock hand

    // Callbacks
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onSelect: null
  };

  /**
   * @class
   *
   */

  var Timepicker = function (_Component16) {
    _inherits(Timepicker, _Component16);

    function Timepicker(el, options) {
      _classCallCheck(this, Timepicker);

      var _this57 = _possibleConstructorReturn(this, (Timepicker.__proto__ || Object.getPrototypeOf(Timepicker)).call(this, Timepicker, el, options));

      _this57.el.M_Timepicker = _this57;

      _this57.options = $.extend({}, Timepicker.defaults, options);

      _this57.id = M.guid();
      _this57._insertHTMLIntoDOM();
      _this57._setupModal();
      _this57._setupVariables();
      _this57._setupEventHandlers();

      _this57._clockSetup();
      _this57._pickerSetup();
      return _this57;
    }

    _createClass(Timepicker, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.modal.destroy();
        $(this.modalEl).remove();
        this.el.M_Timepicker = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
        this._handleInputClickBound = this._handleInputClick.bind(this);
        this._handleClockClickStartBound = this._handleClockClickStart.bind(this);
        this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this);
        this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this);

        this.el.addEventListener('click', this._handleInputClickBound);
        this.el.addEventListener('keydown', this._handleInputKeydownBound);
        this.plate.addEventListener('mousedown', this._handleClockClickStartBound);
        this.plate.addEventListener('touchstart', this._handleClockClickStartBound);

        $(this.spanHours).on('click', this.showView.bind(this, 'hours'));
        $(this.spanMinutes).on('click', this.showView.bind(this, 'minutes'));
      }
    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleInputClickBound);
        this.el.removeEventListener('keydown', this._handleInputKeydownBound);
      }
    }, {
      key: "_handleInputClick",
      value: function _handleInputClick() {
        this.open();
      }
    }, {
      key: "_handleInputKeydown",
      value: function _handleInputKeydown(e) {
        if (e.which === M.keys.ENTER) {
          e.preventDefault();
          this.open();
        }
      }
    }, {
      key: "_handleClockClickStart",
      value: function _handleClockClickStart(e) {
        e.preventDefault();
        var clockPlateBR = this.plate.getBoundingClientRect();
        var offset = { x: clockPlateBR.left, y: clockPlateBR.top };

        this.x0 = offset.x + this.options.dialRadius;
        this.y0 = offset.y + this.options.dialRadius;
        this.moved = false;
        var clickPos = Timepicker._Pos(e);
        this.dx = clickPos.x - this.x0;
        this.dy = clickPos.y - this.y0;

        // Set clock hands
        this.setHand(this.dx, this.dy, false);

        // Mousemove on document
        document.addEventListener('mousemove', this._handleDocumentClickMoveBound);
        document.addEventListener('touchmove', this._handleDocumentClickMoveBound);

        // Mouseup on document
        document.addEventListener('mouseup', this._handleDocumentClickEndBound);
        document.addEventListener('touchend', this._handleDocumentClickEndBound);
      }
    }, {
      key: "_handleDocumentClickMove",
      value: function _handleDocumentClickMove(e) {
        e.preventDefault();
        var clickPos = Timepicker._Pos(e);
        var x = clickPos.x - this.x0;
        var y = clickPos.y - this.y0;
        this.moved = true;
        this.setHand(x, y, false, true);
      }
    }, {
      key: "_handleDocumentClickEnd",
      value: function _handleDocumentClickEnd(e) {
        var _this58 = this;

        e.preventDefault();
        document.removeEventListener('mouseup', this._handleDocumentClickEndBound);
        document.removeEventListener('touchend', this._handleDocumentClickEndBound);
        var clickPos = Timepicker._Pos(e);
        var x = clickPos.x - this.x0;
        var y = clickPos.y - this.y0;
        if (this.moved && x === this.dx && y === this.dy) {
          this.setHand(x, y);
        }

        if (this.currentView === 'hours') {
          this.showView('minutes', this.options.duration / 2);
        } else if (this.options.autoClose) {
          $(this.minutesView).addClass('timepicker-dial-out');
          setTimeout(function () {
            _this58.done();
          }, this.options.duration / 2);
        }

        if (typeof this.options.onSelect === 'function') {
          this.options.onSelect.call(this, this.hours, this.minutes);
        }

        // Unbind mousemove event
        document.removeEventListener('mousemove', this._handleDocumentClickMoveBound);
        document.removeEventListener('touchmove', this._handleDocumentClickMoveBound);
      }
    }, {
      key: "_insertHTMLIntoDOM",
      value: function _insertHTMLIntoDOM() {
        this.$modalEl = $(Timepicker._template);
        this.modalEl = this.$modalEl[0];
        this.modalEl.id = 'modal-' + this.id;

        // Append popover to input by default
        var containerEl = document.querySelector(this.options.container);
        if (this.options.container && !!containerEl) {
          this.$modalEl.appendTo(containerEl);
        } else {
          this.$modalEl.insertBefore(this.el);
        }
      }
    }, {
      key: "_setupModal",
      value: function _setupModal() {
        var _this59 = this;

        this.modal = M.Modal.init(this.modalEl, {
          onOpenStart: this.options.onOpenStart,
          onOpenEnd: this.options.onOpenEnd,
          onCloseStart: this.options.onCloseStart,
          onCloseEnd: function () {
            if (typeof _this59.options.onCloseEnd === 'function') {
              _this59.options.onCloseEnd.call(_this59);
            }
            _this59.isOpen = false;
          }
        });
      }
    }, {
      key: "_setupVariables",
      value: function _setupVariables() {
        this.currentView = 'hours';
        this.vibrate = navigator.vibrate ? 'vibrate' : navigator.webkitVibrate ? 'webkitVibrate' : null;

        this._canvas = this.modalEl.querySelector('.timepicker-canvas');
        this.plate = this.modalEl.querySelector('.timepicker-plate');

        this.hoursView = this.modalEl.querySelector('.timepicker-hours');
        this.minutesView = this.modalEl.querySelector('.timepicker-minutes');
        this.spanHours = this.modalEl.querySelector('.timepicker-span-hours');
        this.spanMinutes = this.modalEl.querySelector('.timepicker-span-minutes');
        this.spanAmPm = this.modalEl.querySelector('.timepicker-span-am-pm');
        this.footer = this.modalEl.querySelector('.timepicker-footer');
        this.amOrPm = 'PM';
      }
    }, {
      key: "_pickerSetup",
      value: function _pickerSetup() {
        var $clearBtn = $("<button class=\"btn-flat timepicker-clear waves-effect\" style=\"visibility: hidden;\" type=\"button\" tabindex=\"" + (this.options.twelveHour ? '3' : '1') + "\">" + this.options.i18n.clear + "</button>").appendTo(this.footer).on('click', this.clear.bind(this));
        if (this.options.showClearBtn) {
          $clearBtn.css({ visibility: '' });
        }

        var confirmationBtnsContainer = $('<div class="confirmation-btns"></div>');
        $('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? '3' : '1') + '">' + this.options.i18n.cancel + '</button>').appendTo(confirmationBtnsContainer).on('click', this.close.bind(this));
        $('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? '3' : '1') + '">' + this.options.i18n.done + '</button>').appendTo(confirmationBtnsContainer).on('click', this.done.bind(this));
        confirmationBtnsContainer.appendTo(this.footer);
      }
    }, {
      key: "_clockSetup",
      value: function _clockSetup() {
        if (this.options.twelveHour) {
          this.$amBtn = $('<div class="am-btn">AM</div>');
          this.$pmBtn = $('<div class="pm-btn">PM</div>');
          this.$amBtn.on('click', this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm);
          this.$pmBtn.on('click', this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm);
        }

        this._buildHoursView();
        this._buildMinutesView();
        this._buildSVGClock();
      }
    }, {
      key: "_buildSVGClock",
      value: function _buildSVGClock() {
        // Draw clock hands and others
        var dialRadius = this.options.dialRadius;
        var tickRadius = this.options.tickRadius;
        var diameter = dialRadius * 2;

        var svg = Timepicker._createSVGEl('svg');
        svg.setAttribute('class', 'timepicker-svg');
        svg.setAttribute('width', diameter);
        svg.setAttribute('height', diameter);
        var g = Timepicker._createSVGEl('g');
        g.setAttribute('transform', 'translate(' + dialRadius + ',' + dialRadius + ')');
        var bearing = Timepicker._createSVGEl('circle');
        bearing.setAttribute('class', 'timepicker-canvas-bearing');
        bearing.setAttribute('cx', 0);
        bearing.setAttribute('cy', 0);
        bearing.setAttribute('r', 4);
        var hand = Timepicker._createSVGEl('line');
        hand.setAttribute('x1', 0);
        hand.setAttribute('y1', 0);
        var bg = Timepicker._createSVGEl('circle');
        bg.setAttribute('class', 'timepicker-canvas-bg');
        bg.setAttribute('r', tickRadius);
        g.appendChild(hand);
        g.appendChild(bg);
        g.appendChild(bearing);
        svg.appendChild(g);
        this._canvas.appendChild(svg);

        this.hand = hand;
        this.bg = bg;
        this.bearing = bearing;
        this.g = g;
      }
    }, {
      key: "_buildHoursView",
      value: function _buildHoursView() {
        var $tick = $('<div class="timepicker-tick"></div>');
        // Hours view
        if (this.options.twelveHour) {
          for (var i = 1; i < 13; i += 1) {
            var tick = $tick.clone();
            var radian = i / 6 * Math.PI;
            var radius = this.options.outerRadius;
            tick.css({
              left: this.options.dialRadius + Math.sin(radian) * radius - this.options.tickRadius + 'px',
              top: this.options.dialRadius - Math.cos(radian) * radius - this.options.tickRadius + 'px'
            });
            tick.html(i === 0 ? '00' : i);
            this.hoursView.appendChild(tick[0]);
            // tick.on(mousedownEvent, mousedown);
          }
        } else {
          for (var _i2 = 0; _i2 < 24; _i2 += 1) {
            var _tick = $tick.clone();
            var _radian = _i2 / 6 * Math.PI;
            var inner = _i2 > 0 && _i2 < 13;
            var _radius = inner ? this.options.innerRadius : this.options.outerRadius;
            _tick.css({
              left: this.options.dialRadius + Math.sin(_radian) * _radius - this.options.tickRadius + 'px',
              top: this.options.dialRadius - Math.cos(_radian) * _radius - this.options.tickRadius + 'px'
            });
            _tick.html(_i2 === 0 ? '00' : _i2);
            this.hoursView.appendChild(_tick[0]);
            // tick.on(mousedownEvent, mousedown);
          }
        }
      }
    }, {
      key: "_buildMinutesView",
      value: function _buildMinutesView() {
        var $tick = $('<div class="timepicker-tick"></div>');
        // Minutes view
        for (var i = 0; i < 60; i += 5) {
          var tick = $tick.clone();
          var radian = i / 30 * Math.PI;
          tick.css({
            left: this.options.dialRadius + Math.sin(radian) * this.options.outerRadius - this.options.tickRadius + 'px',
            top: this.options.dialRadius - Math.cos(radian) * this.options.outerRadius - this.options.tickRadius + 'px'
          });
          tick.html(Timepicker._addLeadingZero(i));
          this.minutesView.appendChild(tick[0]);
        }
      }
    }, {
      key: "_handleAmPmClick",
      value: function _handleAmPmClick(e) {
        var $btnClicked = $(e.target);
        this.amOrPm = $btnClicked.hasClass('am-btn') ? 'AM' : 'PM';
        this._updateAmPmView();
      }
    }, {
      key: "_updateAmPmView",
      value: function _updateAmPmView() {
        if (this.options.twelveHour) {
          this.$amBtn.toggleClass('text-primary', this.amOrPm === 'AM');
          this.$pmBtn.toggleClass('text-primary', this.amOrPm === 'PM');
        }
      }
    }, {
      key: "_updateTimeFromInput",
      value: function _updateTimeFromInput() {
        // Get the time
        var value = ((this.el.value || this.options.defaultTime || '') + '').split(':');
        if (this.options.twelveHour && !(typeof value[1] === 'undefined')) {
          if (value[1].toUpperCase().indexOf('AM') > 0) {
            this.amOrPm = 'AM';
          } else {
            this.amOrPm = 'PM';
          }
          value[1] = value[1].replace('AM', '').replace('PM', '');
        }
        if (value[0] === 'now') {
          var now = new Date(+new Date() + this.options.fromNow);
          value = [now.getHours(), now.getMinutes()];
          if (this.options.twelveHour) {
            this.amOrPm = value[0] >= 12 && value[0] < 24 ? 'PM' : 'AM';
          }
        }
        this.hours = +value[0] || 0;
        this.minutes = +value[1] || 0;
        this.spanHours.innerHTML = this.hours;
        this.spanMinutes.innerHTML = Timepicker._addLeadingZero(this.minutes);

        this._updateAmPmView();
      }
    }, {
      key: "showView",
      value: function showView(view, delay) {
        if (view === 'minutes' && $(this.hoursView).css('visibility') === 'visible') {
          // raiseCallback(this.options.beforeHourSelect);
        }
        var isHours = view === 'hours',
            nextView = isHours ? this.hoursView : this.minutesView,
            hideView = isHours ? this.minutesView : this.hoursView;
        this.currentView = view;

        $(this.spanHours).toggleClass('text-primary', isHours);
        $(this.spanMinutes).toggleClass('text-primary', !isHours);

        // Transition view
        hideView.classList.add('timepicker-dial-out');
        $(nextView).css('visibility', 'visible').removeClass('timepicker-dial-out');

        // Reset clock hand
        this.resetClock(delay);

        // After transitions ended
        clearTimeout(this.toggleViewTimer);
        this.toggleViewTimer = setTimeout(function () {
          $(hideView).css('visibility', 'hidden');
        }, this.options.duration);
      }
    }, {
      key: "resetClock",
      value: function resetClock(delay) {
        var view = this.currentView,
            value = this[view],
            isHours = view === 'hours',
            unit = Math.PI / (isHours ? 6 : 30),
            radian = value * unit,
            radius = isHours && value > 0 && value < 13 ? this.options.innerRadius : this.options.outerRadius,
            x = Math.sin(radian) * radius,
            y = -Math.cos(radian) * radius,
            self = this;

        if (delay) {
          $(this.canvas).addClass('timepicker-canvas-out');
          setTimeout(function () {
            $(self.canvas).removeClass('timepicker-canvas-out');
            self.setHand(x, y);
          }, delay);
        } else {
          this.setHand(x, y);
        }
      }
    }, {
      key: "setHand",
      value: function setHand(x, y, roundBy5) {
        var _this60 = this;

        var radian = Math.atan2(x, -y),
            isHours = this.currentView === 'hours',
            unit = Math.PI / (isHours || roundBy5 ? 6 : 30),
            z = Math.sqrt(x * x + y * y),
            inner = isHours && z < (this.options.outerRadius + this.options.innerRadius) / 2,
            radius = inner ? this.options.innerRadius : this.options.outerRadius;

        if (this.options.twelveHour) {
          radius = this.options.outerRadius;
        }

        // Radian should in range [0, 2PI]
        if (radian < 0) {
          radian = Math.PI * 2 + radian;
        }

        // Get the round value
        var value = Math.round(radian / unit);

        // Get the round radian
        radian = value * unit;

        // Correct the hours or minutes
        if (this.options.twelveHour) {
          if (isHours) {
            if (value === 0) value = 12;
          } else {
            if (roundBy5) value *= 5;
            if (value === 60) value = 0;
          }
        } else {
          if (isHours) {
            if (value === 12) {
              value = 0;
            }
            value = inner ? value === 0 ? 12 : value : value === 0 ? 0 : value + 12;
          } else {
            if (roundBy5) {
              value *= 5;
            }
            if (value === 60) {
              value = 0;
            }
          }
        }

        // Once hours or minutes changed, vibrate the device
        if (this[this.currentView] !== value) {
          if (this.vibrate && this.options.vibrate) {
            // Do not vibrate too frequently
            if (!this.vibrateTimer) {
              navigator[this.vibrate](10);
              this.vibrateTimer = setTimeout(function () {
                _this60.vibrateTimer = null;
              }, 100);
            }
          }
        }

        this[this.currentView] = value;
        if (isHours) {
          this['spanHours'].innerHTML = value;
        } else {
          this['spanMinutes'].innerHTML = Timepicker._addLeadingZero(value);
        }

        // Set clock hand and others' position
        var cx1 = Math.sin(radian) * (radius - this.options.tickRadius),
            cy1 = -Math.cos(radian) * (radius - this.options.tickRadius),
            cx2 = Math.sin(radian) * radius,
            cy2 = -Math.cos(radian) * radius;
        this.hand.setAttribute('x2', cx1);
        this.hand.setAttribute('y2', cy1);
        this.bg.setAttribute('cx', cx2);
        this.bg.setAttribute('cy', cy2);
      }
    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        this.isOpen = true;
        this._updateTimeFromInput();
        this.showView('hours');

        this.modal.open();
      }
    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.isOpen = false;
        this.modal.close();
      }

      /**
       * Finish timepicker selection.
       */

    }, {
      key: "done",
      value: function done(e, clearValue) {
        // Set input value
        var last = this.el.value;
        var value = clearValue ? '' : Timepicker._addLeadingZero(this.hours) + ':' + Timepicker._addLeadingZero(this.minutes);
        this.time = value;
        if (!clearValue && this.options.twelveHour) {
          value = value + " " + this.amOrPm;
        }
        this.el.value = value;

        // Trigger change event
        if (value !== last) {
          this.$el.trigger('change');
        }

        this.close();
        this.el.focus();
      }
    }, {
      key: "clear",
      value: function clear() {
        this.done(null, true);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Timepicker.__proto__ || Object.getPrototypeOf(Timepicker), "init", this).call(this, this, els, options);
      }
    }, {
      key: "_addLeadingZero",
      value: function _addLeadingZero(num) {
        return (num < 10 ? '0' : '') + num;
      }
    }, {
      key: "_createSVGEl",
      value: function _createSVGEl(name) {
        var svgNS = 'http://www.w3.org/2000/svg';
        return document.createElementNS(svgNS, name);
      }

      /**
       * @typedef {Object} Point
       * @property {number} x The X Coordinate
       * @property {number} y The Y Coordinate
       */

      /**
       * Get x position of mouse or touch event
       * @param {Event} e
       * @return {Point} x and y location
       */

    }, {
      key: "_Pos",
      value: function _Pos(e) {
        if (e.targetTouches && e.targetTouches.length >= 1) {
          return { x: e.targetTouches[0].clientX, y: e.targetTouches[0].clientY };
        }
        // mouse event
        return { x: e.clientX, y: e.clientY };
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Timepicker;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Timepicker;
  }(Component);

  Timepicker._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ':', '<span class="timepicker-span-minutes"></span>', '</div>', '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', '</div>', '</div>', '</div>', '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', '</div>', '<div class="timepicker-footer"></div>', '</div>', '</div>', '</div>'].join('');

  M.Timepicker = Timepicker;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Timepicker, 'timepicker', 'M_Timepicker');
  }
})(cash);
;(function ($) {
  'use strict';

  var _defaults = {};

  /**
   * @class
   *
   */

  var CharacterCounter = function (_Component17) {
    _inherits(CharacterCounter, _Component17);

    /**
     * Construct CharacterCounter instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function CharacterCounter(el, options) {
      _classCallCheck(this, CharacterCounter);

      var _this61 = _possibleConstructorReturn(this, (CharacterCounter.__proto__ || Object.getPrototypeOf(CharacterCounter)).call(this, CharacterCounter, el, options));

      _this61.el.M_CharacterCounter = _this61;

      /**
       * Options for the character counter
       */
      _this61.options = $.extend({}, CharacterCounter.defaults, options);

      _this61.isInvalid = false;
      _this61.isValidLength = false;
      _this61._setupCounter();
      _this61._setupEventHandlers();
      return _this61;
    }

    _createClass(CharacterCounter, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.el.CharacterCounter = undefined;
        this._removeCounter();
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleUpdateCounterBound = this.updateCounter.bind(this);

        this.el.addEventListener('focus', this._handleUpdateCounterBound, true);
        this.el.addEventListener('input', this._handleUpdateCounterBound, true);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('focus', this._handleUpdateCounterBound, true);
        this.el.removeEventListener('input', this._handleUpdateCounterBound, true);
      }

      /**
       * Setup counter element
       */

    }, {
      key: "_setupCounter",
      value: function _setupCounter() {
        this.counterEl = document.createElement('span');
        $(this.counterEl).addClass('character-counter').css({
          float: 'right',
          'font-size': '12px',
          height: 1
        });

        this.$el.parent().append(this.counterEl);
      }

      /**
       * Remove counter element
       */

    }, {
      key: "_removeCounter",
      value: function _removeCounter() {
        $(this.counterEl).remove();
      }

      /**
       * Update counter
       */

    }, {
      key: "updateCounter",
      value: function updateCounter() {
        var maxLength = +this.$el.attr('data-length'),
            actualLength = this.el.value.length;
        this.isValidLength = actualLength <= maxLength;
        var counterString = actualLength;

        if (maxLength) {
          counterString += '/' + maxLength;
          this._validateInput();
        }

        $(this.counterEl).html(counterString);
      }

      /**
       * Add validation classes
       */

    }, {
      key: "_validateInput",
      value: function _validateInput() {
        if (this.isValidLength && this.isInvalid) {
          this.isInvalid = false;
          this.$el.removeClass('invalid');
        } else if (!this.isValidLength && !this.isInvalid) {
          this.isInvalid = true;
          this.$el.removeClass('valid');
          this.$el.addClass('invalid');
        }
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(CharacterCounter.__proto__ || Object.getPrototypeOf(CharacterCounter), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_CharacterCounter;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return CharacterCounter;
  }(Component);

  M.CharacterCounter = CharacterCounter;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(CharacterCounter, 'characterCounter', 'M_CharacterCounter');
  }
})(cash);
;(function ($) {
  'use strict';

  var _defaults = {
    duration: 200, // ms
    dist: -100, // zoom scale TODO: make this more intuitive as an option
    shift: 0, // spacing for center image
    padding: 0, // Padding between non center items
    numVisible: 5, // Number of visible items in carousel
    fullWidth: false, // Change to full width styles
    indicators: false, // Toggle indicators
    noWrap: false, // Don't wrap around and cycle through items.
    onCycleTo: null // Callback for when a new slide is cycled to.
  };

  /**
   * @class
   *
   */

  var Carousel = function (_Component18) {
    _inherits(Carousel, _Component18);

    /**
     * Construct Carousel instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Carousel(el, options) {
      _classCallCheck(this, Carousel);

      var _this62 = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, Carousel, el, options));

      _this62.el.M_Carousel = _this62;

      /**
       * Options for the carousel
       * @member Carousel#options
       * @prop {Number} duration
       * @prop {Number} dist
       * @prop {Number} shift
       * @prop {Number} padding
       * @prop {Number} numVisible
       * @prop {Boolean} fullWidth
       * @prop {Boolean} indicators
       * @prop {Boolean} noWrap
       * @prop {Function} onCycleTo
       */
      _this62.options = $.extend({}, Carousel.defaults, options);

      // Setup
      _this62.hasMultipleSlides = _this62.$el.find('.carousel-item').length > 1;
      _this62.showIndicators = _this62.options.indicators && _this62.hasMultipleSlides;
      _this62.noWrap = _this62.options.noWrap || !_this62.hasMultipleSlides;
      _this62.pressed = false;
      _this62.dragged = false;
      _this62.offset = _this62.target = 0;
      _this62.images = [];
      _this62.itemWidth = _this62.$el.find('.carousel-item').first().innerWidth();
      _this62.itemHeight = _this62.$el.find('.carousel-item').first().innerHeight();
      _this62.dim = _this62.itemWidth * 2 + _this62.options.padding || 1; // Make sure dim is non zero for divisions.
      _this62._autoScrollBound = _this62._autoScroll.bind(_this62);
      _this62._trackBound = _this62._track.bind(_this62);

      // Full Width carousel setup
      if (_this62.options.fullWidth) {
        _this62.options.dist = 0;
        _this62._setCarouselHeight();

        // Offset fixed items when indicators.
        if (_this62.showIndicators) {
          _this62.$el.find('.carousel-fixed-item').addClass('with-indicators');
        }
      }

      // Iterate through slides
      _this62.$indicators = $('<ul class="indicators"></ul>');
      _this62.$el.find('.carousel-item').each(function (el, i) {
        _this62.images.push(el);
        if (_this62.showIndicators) {
          var $indicator = $('<li class="indicator-item"></li>');

          // Add active to first by default.
          if (i === 0) {
            $indicator[0].classList.add('active');
          }

          _this62.$indicators.append($indicator);
        }
      });
      if (_this62.showIndicators) {
        _this62.$el.append(_this62.$indicators);
      }
      _this62.count = _this62.images.length;

      // Cap numVisible at count
      _this62.options.numVisible = Math.min(_this62.count, _this62.options.numVisible);

      // Setup cross browser string
      _this62.xform = 'transform';
      ['webkit', 'Moz', 'O', 'ms'].every(function (prefix) {
        var e = prefix + 'Transform';
        if (typeof document.body.style[e] !== 'undefined') {
          _this62.xform = e;
          return false;
        }
        return true;
      });

      _this62._setupEventHandlers();
      _this62._scroll(_this62.offset);
      return _this62;
    }

    _createClass(Carousel, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.el.M_Carousel = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var _this63 = this;

        this._handleCarouselTapBound = this._handleCarouselTap.bind(this);
        this._handleCarouselDragBound = this._handleCarouselDrag.bind(this);
        this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this);
        this._handleCarouselClickBound = this._handleCarouselClick.bind(this);

        if (typeof window.ontouchstart !== 'undefined') {
          this.el.addEventListener('touchstart', this._handleCarouselTapBound);
          this.el.addEventListener('touchmove', this._handleCarouselDragBound);
          this.el.addEventListener('touchend', this._handleCarouselReleaseBound);
        }

        this.el.addEventListener('mousedown', this._handleCarouselTapBound);
        this.el.addEventListener('mousemove', this._handleCarouselDragBound);
        this.el.addEventListener('mouseup', this._handleCarouselReleaseBound);
        this.el.addEventListener('mouseleave', this._handleCarouselReleaseBound);
        this.el.addEventListener('click', this._handleCarouselClickBound);

        if (this.showIndicators && this.$indicators) {
          this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this);
          this.$indicators.find('.indicator-item').each(function (el, i) {
            el.addEventListener('click', _this63._handleIndicatorClickBound);
          });
        }

        // Resize
        var throttledResize = M.throttle(this._handleResize, 200);
        this._handleThrottledResizeBound = throttledResize.bind(this);

        window.addEventListener('resize', this._handleThrottledResizeBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        var _this64 = this;

        if (typeof window.ontouchstart !== 'undefined') {
          this.el.removeEventListener('touchstart', this._handleCarouselTapBound);
          this.el.removeEventListener('touchmove', this._handleCarouselDragBound);
          this.el.removeEventListener('touchend', this._handleCarouselReleaseBound);
        }
        this.el.removeEventListener('mousedown', this._handleCarouselTapBound);
        this.el.removeEventListener('mousemove', this._handleCarouselDragBound);
        this.el.removeEventListener('mouseup', this._handleCarouselReleaseBound);
        this.el.removeEventListener('mouseleave', this._handleCarouselReleaseBound);
        this.el.removeEventListener('click', this._handleCarouselClickBound);

        if (this.showIndicators && this.$indicators) {
          this.$indicators.find('.indicator-item').each(function (el, i) {
            el.removeEventListener('click', _this64._handleIndicatorClickBound);
          });
        }

        window.removeEventListener('resize', this._handleThrottledResizeBound);
      }

      /**
       * Handle Carousel Tap
       * @param {Event} e
       */

    }, {
      key: "_handleCarouselTap",
      value: function _handleCarouselTap(e) {
        // Fixes firefox draggable image bug
        if (e.type === 'mousedown' && $(e.target).is('img')) {
          e.preventDefault();
        }
        this.pressed = true;
        this.dragged = false;
        this.verticalDragged = false;
        this.reference = this._xpos(e);
        this.referenceY = this._ypos(e);

        this.velocity = this.amplitude = 0;
        this.frame = this.offset;
        this.timestamp = Date.now();
        clearInterval(this.ticker);
        this.ticker = setInterval(this._trackBound, 100);
      }

      /**
       * Handle Carousel Drag
       * @param {Event} e
       */

    }, {
      key: "_handleCarouselDrag",
      value: function _handleCarouselDrag(e) {
        var x = void 0,
            y = void 0,
            delta = void 0,
            deltaY = void 0;
        if (this.pressed) {
          x = this._xpos(e);
          y = this._ypos(e);
          delta = this.reference - x;
          deltaY = Math.abs(this.referenceY - y);
          if (deltaY < 30 && !this.verticalDragged) {
            // If vertical scrolling don't allow dragging.
            if (delta > 2 || delta < -2) {
              this.dragged = true;
              this.reference = x;
              this._scroll(this.offset + delta);
            }
          } else if (this.dragged) {
            // If dragging don't allow vertical scroll.
            e.preventDefault();
            e.stopPropagation();
            return false;
          } else {
            // Vertical scrolling.
            this.verticalDragged = true;
          }
        }

        if (this.dragged) {
          // If dragging don't allow vertical scroll.
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      }

      /**
       * Handle Carousel Release
       * @param {Event} e
       */

    }, {
      key: "_handleCarouselRelease",
      value: function _handleCarouselRelease(e) {
        if (this.pressed) {
          this.pressed = false;
        } else {
          return;
        }

        clearInterval(this.ticker);
        this.target = this.offset;
        if (this.velocity > 10 || this.velocity < -10) {
          this.amplitude = 0.9 * this.velocity;
          this.target = this.offset + this.amplitude;
        }
        this.target = Math.round(this.target / this.dim) * this.dim;

        // No wrap of items.
        if (this.noWrap) {
          if (this.target >= this.dim * (this.count - 1)) {
            this.target = this.dim * (this.count - 1);
          } else if (this.target < 0) {
            this.target = 0;
          }
        }
        this.amplitude = this.target - this.offset;
        this.timestamp = Date.now();
        requestAnimationFrame(this._autoScrollBound);

        if (this.dragged) {
          e.preventDefault();
          e.stopPropagation();
        }
        return false;
      }

      /**
       * Handle Carousel CLick
       * @param {Event} e
       */

    }, {
      key: "_handleCarouselClick",
      value: function _handleCarouselClick(e) {
        // Disable clicks if carousel was dragged.
        if (this.dragged) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        } else if (!this.options.fullWidth) {
          var clickedIndex = $(e.target).closest('.carousel-item').index();
          var diff = this._wrap(this.center) - clickedIndex;

          // Disable clicks if carousel was shifted by click
          if (diff !== 0) {
            e.preventDefault();
            e.stopPropagation();
          }
          this._cycleTo(clickedIndex);
        }
      }

      /**
       * Handle Indicator CLick
       * @param {Event} e
       */

    }, {
      key: "_handleIndicatorClick",
      value: function _handleIndicatorClick(e) {
        e.stopPropagation();

        var indicator = $(e.target).closest('.indicator-item');
        if (indicator.length) {
          this._cycleTo(indicator.index());
        }
      }

      /**
       * Handle Throttle Resize
       * @param {Event} e
       */

    }, {
      key: "_handleResize",
      value: function _handleResize(e) {
        if (this.options.fullWidth) {
          this.itemWidth = this.$el.find('.carousel-item').first().innerWidth();
          this.imageHeight = this.$el.find('.carousel-item.active').height();
          this.dim = this.itemWidth * 2 + this.options.padding;
          this.offset = this.center * 2 * this.itemWidth;
          this.target = this.offset;
          this._setCarouselHeight(true);
        } else {
          this._scroll();
        }
      }

      /**
       * Set carousel height based on first slide
       * @param {Booleam} imageOnly - true for image slides
       */

    }, {
      key: "_setCarouselHeight",
      value: function _setCarouselHeight(imageOnly) {
        var _this65 = this;

        var firstSlide = this.$el.find('.carousel-item.active').length ? this.$el.find('.carousel-item.active').first() : this.$el.find('.carousel-item').first();
        var firstImage = firstSlide.find('img').first();
        if (firstImage.length) {
          if (firstImage[0].complete) {
            // If image won't trigger the load event
            var imageHeight = firstImage.height();
            if (imageHeight > 0) {
              this.$el.css('height', imageHeight + 'px');
            } else {
              // If image still has no height, use the natural dimensions to calculate
              var naturalWidth = firstImage[0].naturalWidth;
              var naturalHeight = firstImage[0].naturalHeight;
              var adjustedHeight = this.$el.width() / naturalWidth * naturalHeight;
              this.$el.css('height', adjustedHeight + 'px');
            }
          } else {
            // Get height when image is loaded normally
            firstImage.one('load', function (el, i) {
              _this65.$el.css('height', el.offsetHeight + 'px');
            });
          }
        } else if (!imageOnly) {
          var slideHeight = firstSlide.height();
          this.$el.css('height', slideHeight + 'px');
        }
      }

      /**
       * Get x position from event
       * @param {Event} e
       */

    }, {
      key: "_xpos",
      value: function _xpos(e) {
        // touch event
        if (e.targetTouches && e.targetTouches.length >= 1) {
          return e.targetTouches[0].clientX;
        }

        // mouse event
        return e.clientX;
      }

      /**
       * Get y position from event
       * @param {Event} e
       */

    }, {
      key: "_ypos",
      value: function _ypos(e) {
        // touch event
        if (e.targetTouches && e.targetTouches.length >= 1) {
          return e.targetTouches[0].clientY;
        }

        // mouse event
        return e.clientY;
      }

      /**
       * Wrap index
       * @param {Number} x
       */

    }, {
      key: "_wrap",
      value: function _wrap(x) {
        return x >= this.count ? x % this.count : x < 0 ? this._wrap(this.count + x % this.count) : x;
      }

      /**
       * Tracks scrolling information
       */

    }, {
      key: "_track",
      value: function _track() {
        var now = void 0,
            elapsed = void 0,
            delta = void 0,
            v = void 0;

        now = Date.now();
        elapsed = now - this.timestamp;
        this.timestamp = now;
        delta = this.offset - this.frame;
        this.frame = this.offset;

        v = 1000 * delta / (1 + elapsed);
        this.velocity = 0.8 * v + 0.2 * this.velocity;
      }

      /**
       * Auto scrolls to nearest carousel item.
       */

    }, {
      key: "_autoScroll",
      value: function _autoScroll() {
        var elapsed = void 0,
            delta = void 0;

        if (this.amplitude) {
          elapsed = Date.now() - this.timestamp;
          delta = this.amplitude * Math.exp(-elapsed / this.options.duration);
          if (delta > 2 || delta < -2) {
            this._scroll(this.target - delta);
            requestAnimationFrame(this._autoScrollBound);
          } else {
            this._scroll(this.target);
          }
        }
      }

      /**
       * Scroll to target
       * @param {Number} x
       */

    }, {
      key: "_scroll",
      value: function _scroll(x) {
        var _this66 = this;

        // Track scrolling state
        if (!this.$el.hasClass('scrolling')) {
          this.el.classList.add('scrolling');
        }
        if (this.scrollingTimeout != null) {
          window.clearTimeout(this.scrollingTimeout);
        }
        this.scrollingTimeout = window.setTimeout(function () {
          _this66.$el.removeClass('scrolling');
        }, this.options.duration);

        // Start actual scroll
        var i = void 0,
            half = void 0,
            delta = void 0,
            dir = void 0,
            tween = void 0,
            el = void 0,
            alignment = void 0,
            zTranslation = void 0,
            tweenedOpacity = void 0,
            centerTweenedOpacity = void 0;
        var lastCenter = this.center;
        var numVisibleOffset = 1 / this.options.numVisible;

        this.offset = typeof x === 'number' ? x : this.offset;
        this.center = Math.floor((this.offset + this.dim / 2) / this.dim);
        delta = this.offset - this.center * this.dim;
        dir = delta < 0 ? 1 : -1;
        tween = -dir * delta * 2 / this.dim;
        half = this.count >> 1;

        if (this.options.fullWidth) {
          alignment = 'translateX(0)';
          centerTweenedOpacity = 1;
        } else {
          alignment = 'translateX(' + (this.el.clientWidth - this.itemWidth) / 2 + 'px) ';
          alignment += 'translateY(' + (this.el.clientHeight - this.itemHeight) / 2 + 'px)';
          centerTweenedOpacity = 1 - numVisibleOffset * tween;
        }

        // Set indicator active
        if (this.showIndicators) {
          var diff = this.center % this.count;
          var activeIndicator = this.$indicators.find('.indicator-item.active');
          if (activeIndicator.index() !== diff) {
            activeIndicator.removeClass('active');
            this.$indicators.find('.indicator-item').eq(diff)[0].classList.add('active');
          }
        }

        // center
        // Don't show wrapped items.
        if (!this.noWrap || this.center >= 0 && this.center < this.count) {
          el = this.images[this._wrap(this.center)];

          // Add active class to center item.
          if (!$(el).hasClass('active')) {
            this.$el.find('.carousel-item').removeClass('active');
            el.classList.add('active');
          }
          var transformString = alignment + " translateX(" + -delta / 2 + "px) translateX(" + dir * this.options.shift * tween * i + "px) translateZ(" + this.options.dist * tween + "px)";
          this._updateItemStyle(el, centerTweenedOpacity, 0, transformString);
        }

        for (i = 1; i <= half; ++i) {
          // right side
          if (this.options.fullWidth) {
            zTranslation = this.options.dist;
            tweenedOpacity = i === half && delta < 0 ? 1 - tween : 1;
          } else {
            zTranslation = this.options.dist * (i * 2 + tween * dir);
            tweenedOpacity = 1 - numVisibleOffset * (i * 2 + tween * dir);
          }
          // Don't show wrapped items.
          if (!this.noWrap || this.center + i < this.count) {
            el = this.images[this._wrap(this.center + i)];
            var _transformString = alignment + " translateX(" + (this.options.shift + (this.dim * i - delta) / 2) + "px) translateZ(" + zTranslation + "px)";
            this._updateItemStyle(el, tweenedOpacity, -i, _transformString);
          }

          // left side
          if (this.options.fullWidth) {
            zTranslation = this.options.dist;
            tweenedOpacity = i === half && delta > 0 ? 1 - tween : 1;
          } else {
            zTranslation = this.options.dist * (i * 2 - tween * dir);
            tweenedOpacity = 1 - numVisibleOffset * (i * 2 - tween * dir);
          }
          // Don't show wrapped items.
          if (!this.noWrap || this.center - i >= 0) {
            el = this.images[this._wrap(this.center - i)];
            var _transformString2 = alignment + " translateX(" + (-this.options.shift + (-this.dim * i - delta) / 2) + "px) translateZ(" + zTranslation + "px)";
            this._updateItemStyle(el, tweenedOpacity, -i, _transformString2);
          }
        }

        // center
        // Don't show wrapped items.
        if (!this.noWrap || this.center >= 0 && this.center < this.count) {
          el = this.images[this._wrap(this.center)];
          var _transformString3 = alignment + " translateX(" + -delta / 2 + "px) translateX(" + dir * this.options.shift * tween + "px) translateZ(" + this.options.dist * tween + "px)";
          this._updateItemStyle(el, centerTweenedOpacity, 0, _transformString3);
        }

        // onCycleTo callback
        var $currItem = this.$el.find('.carousel-item').eq(this._wrap(this.center));
        if (lastCenter !== this.center && typeof this.options.onCycleTo === 'function') {
          this.options.onCycleTo.call(this, $currItem[0], this.dragged);
        }

        // One time callback
        if (typeof this.oneTimeCallback === 'function') {
          this.oneTimeCallback.call(this, $currItem[0], this.dragged);
          this.oneTimeCallback = null;
        }
      }

      /**
       * Cycle to target
       * @param {Element} el
       * @param {Number} opacity
       * @param {Number} zIndex
       * @param {String} transform
       */

    }, {
      key: "_updateItemStyle",
      value: function _updateItemStyle(el, opacity, zIndex, transform) {
        el.style[this.xform] = transform;
        el.style.zIndex = zIndex;
        el.style.opacity = opacity;
        el.style.visibility = 'visible';
      }

      /**
       * Cycle to target
       * @param {Number} n
       * @param {Function} callback
       */

    }, {
      key: "_cycleTo",
      value: function _cycleTo(n, callback) {
        var diff = this.center % this.count - n;

        // Account for wraparound.
        if (!this.noWrap) {
          if (diff < 0) {
            if (Math.abs(diff + this.count) < Math.abs(diff)) {
              diff += this.count;
            }
          } else if (diff > 0) {
            if (Math.abs(diff - this.count) < diff) {
              diff -= this.count;
            }
          }
        }

        this.target = this.dim * Math.round(this.offset / this.dim);
        // Next
        if (diff < 0) {
          this.target += this.dim * Math.abs(diff);

          // Prev
        } else if (diff > 0) {
          this.target -= this.dim * diff;
        }

        // Set one time callback
        if (typeof callback === 'function') {
          this.oneTimeCallback = callback;
        }

        // Scroll
        if (this.offset !== this.target) {
          this.amplitude = this.target - this.offset;
          this.timestamp = Date.now();
          requestAnimationFrame(this._autoScrollBound);
        }
      }

      /**
       * Cycle to next item
       * @param {Number} [n]
       */

    }, {
      key: "next",
      value: function next(n) {
        if (n === undefined || isNaN(n)) {
          n = 1;
        }

        var index = this.center + n;
        if (index >= this.count || index < 0) {
          if (this.noWrap) {
            return;
          }

          index = this._wrap(index);
        }
        this._cycleTo(index);
      }

      /**
       * Cycle to previous item
       * @param {Number} [n]
       */

    }, {
      key: "prev",
      value: function prev(n) {
        if (n === undefined || isNaN(n)) {
          n = 1;
        }

        var index = this.center - n;
        if (index >= this.count || index < 0) {
          if (this.noWrap) {
            return;
          }

          index = this._wrap(index);
        }

        this._cycleTo(index);
      }

      /**
       * Cycle to nth item
       * @param {Number} [n]
       * @param {Function} callback
       */

    }, {
      key: "set",
      value: function set(n, callback) {
        if (n === undefined || isNaN(n)) {
          n = 0;
        }

        if (n > this.count || n < 0) {
          if (this.noWrap) {
            return;
          }

          n = this._wrap(n);
        }

        this._cycleTo(n, callback);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Carousel.__proto__ || Object.getPrototypeOf(Carousel), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Carousel;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Carousel;
  }(Component);

  M.Carousel = Carousel;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Carousel, 'carousel', 'M_Carousel');
  }
})(cash);
;(function ($) {
  'use strict';

  var _defaults = {
    onOpen: undefined,
    onClose: undefined
  };

  /**
   * @class
   *
   */

  var TapTarget = function (_Component19) {
    _inherits(TapTarget, _Component19);

    /**
     * Construct TapTarget instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function TapTarget(el, options) {
      _classCallCheck(this, TapTarget);

      var _this67 = _possibleConstructorReturn(this, (TapTarget.__proto__ || Object.getPrototypeOf(TapTarget)).call(this, TapTarget, el, options));

      _this67.el.M_TapTarget = _this67;

      /**
       * Options for the select
       * @member TapTarget#options
       * @prop {Function} onOpen - Callback function called when feature discovery is opened
       * @prop {Function} onClose - Callback function called when feature discovery is closed
       */
      _this67.options = $.extend({}, TapTarget.defaults, options);

      _this67.isOpen = false;

      // setup
      _this67.$origin = $('#' + _this67.$el.attr('data-target'));
      _this67._setup();

      _this67._calculatePositioning();
      _this67._setupEventHandlers();
      return _this67;
    }

    _createClass(TapTarget, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this.el.TapTarget = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleDocumentClickBound = this._handleDocumentClick.bind(this);
        this._handleTargetClickBound = this._handleTargetClick.bind(this);
        this._handleOriginClickBound = this._handleOriginClick.bind(this);

        this.el.addEventListener('click', this._handleTargetClickBound);
        this.originEl.addEventListener('click', this._handleOriginClickBound);

        // Resize
        var throttledResize = M.throttle(this._handleResize, 200);
        this._handleThrottledResizeBound = throttledResize.bind(this);

        window.addEventListener('resize', this._handleThrottledResizeBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('click', this._handleTargetClickBound);
        this.originEl.removeEventListener('click', this._handleOriginClickBound);
        window.removeEventListener('resize', this._handleThrottledResizeBound);
      }

      /**
       * Handle Target Click
       * @param {Event} e
       */

    }, {
      key: "_handleTargetClick",
      value: function _handleTargetClick(e) {
        this.open();
      }

      /**
       * Handle Origin Click
       * @param {Event} e
       */

    }, {
      key: "_handleOriginClick",
      value: function _handleOriginClick(e) {
        this.close();
      }

      /**
       * Handle Resize
       * @param {Event} e
       */

    }, {
      key: "_handleResize",
      value: function _handleResize(e) {
        this._calculatePositioning();
      }

      /**
       * Handle Resize
       * @param {Event} e
       */

    }, {
      key: "_handleDocumentClick",
      value: function _handleDocumentClick(e) {
        if (!$(e.target).closest('.tap-target-wrapper').length) {
          this.close();
          e.preventDefault();
          e.stopPropagation();
        }
      }

      /**
       * Setup Tap Target
       */

    }, {
      key: "_setup",
      value: function _setup() {
        // Creating tap target
        this.wrapper = this.$el.parent()[0];
        this.waveEl = $(this.wrapper).find('.tap-target-wave')[0];
        this.originEl = $(this.wrapper).find('.tap-target-origin')[0];
        this.contentEl = this.$el.find('.tap-target-content')[0];

        // Creating wrapper
        if (!$(this.wrapper).hasClass('.tap-target-wrapper')) {
          this.wrapper = document.createElement('div');
          this.wrapper.classList.add('tap-target-wrapper');
          this.$el.before($(this.wrapper));
          this.wrapper.append(this.el);
        }

        // Creating content
        if (!this.contentEl) {
          this.contentEl = document.createElement('div');
          this.contentEl.classList.add('tap-target-content');
          this.$el.append(this.contentEl);
        }

        // Creating foreground wave
        if (!this.waveEl) {
          this.waveEl = document.createElement('div');
          this.waveEl.classList.add('tap-target-wave');

          // Creating origin
          if (!this.originEl) {
            this.originEl = this.$origin.clone(true, true);
            this.originEl.addClass('tap-target-origin');
            this.originEl.removeAttr('id');
            this.originEl.removeAttr('style');
            this.originEl = this.originEl[0];
            this.waveEl.append(this.originEl);
          }

          this.wrapper.append(this.waveEl);
        }
      }

      /**
       * Calculate positioning
       */

    }, {
      key: "_calculatePositioning",
      value: function _calculatePositioning() {
        // Element or parent is fixed position?
        var isFixed = this.$origin.css('position') === 'fixed';
        if (!isFixed) {
          var parents = this.$origin.parents();
          for (var i = 0; i < parents.length; i++) {
            isFixed = $(parents[i]).css('position') == 'fixed';
            if (isFixed) {
              break;
            }
          }
        }

        // Calculating origin
        var originWidth = this.$origin.outerWidth();
        var originHeight = this.$origin.outerHeight();
        var originTop = isFixed ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top;
        var originLeft = isFixed ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left;

        // Calculating screen
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var centerX = windowWidth / 2;
        var centerY = windowHeight / 2;
        var isLeft = originLeft <= centerX;
        var isRight = originLeft > centerX;
        var isTop = originTop <= centerY;
        var isBottom = originTop > centerY;
        var isCenterX = originLeft >= windowWidth * 0.25 && originLeft <= windowWidth * 0.75;

        // Calculating tap target
        var tapTargetWidth = this.$el.outerWidth();
        var tapTargetHeight = this.$el.outerHeight();
        var tapTargetTop = originTop + originHeight / 2 - tapTargetHeight / 2;
        var tapTargetLeft = originLeft + originWidth / 2 - tapTargetWidth / 2;
        var tapTargetPosition = isFixed ? 'fixed' : 'absolute';

        // Calculating content
        var tapTargetTextWidth = isCenterX ? tapTargetWidth : tapTargetWidth / 2 + originWidth;
        var tapTargetTextHeight = tapTargetHeight / 2;
        var tapTargetTextTop = isTop ? tapTargetHeight / 2 : 0;
        var tapTargetTextBottom = 0;
        var tapTargetTextLeft = isLeft && !isCenterX ? tapTargetWidth / 2 - originWidth : 0;
        var tapTargetTextRight = 0;
        var tapTargetTextPadding = originWidth;
        var tapTargetTextAlign = isBottom ? 'bottom' : 'top';

        // Calculating wave
        var tapTargetWaveWidth = originWidth > originHeight ? originWidth * 2 : originWidth * 2;
        var tapTargetWaveHeight = tapTargetWaveWidth;
        var tapTargetWaveTop = tapTargetHeight / 2 - tapTargetWaveHeight / 2;
        var tapTargetWaveLeft = tapTargetWidth / 2 - tapTargetWaveWidth / 2;

        // Setting tap target
        var tapTargetWrapperCssObj = {};
        tapTargetWrapperCssObj.top = isTop ? tapTargetTop + 'px' : '';
        tapTargetWrapperCssObj.right = isRight ? windowWidth - tapTargetLeft - tapTargetWidth + 'px' : '';
        tapTargetWrapperCssObj.bottom = isBottom ? windowHeight - tapTargetTop - tapTargetHeight + 'px' : '';
        tapTargetWrapperCssObj.left = isLeft ? tapTargetLeft + 'px' : '';
        tapTargetWrapperCssObj.position = tapTargetPosition;
        $(this.wrapper).css(tapTargetWrapperCssObj);

        // Setting content
        $(this.contentEl).css({
          width: tapTargetTextWidth + 'px',
          height: tapTargetTextHeight + 'px',
          top: tapTargetTextTop + 'px',
          right: tapTargetTextRight + 'px',
          bottom: tapTargetTextBottom + 'px',
          left: tapTargetTextLeft + 'px',
          padding: tapTargetTextPadding + 'px',
          verticalAlign: tapTargetTextAlign
        });

        // Setting wave
        $(this.waveEl).css({
          top: tapTargetWaveTop + 'px',
          left: tapTargetWaveLeft + 'px',
          width: tapTargetWaveWidth + 'px',
          height: tapTargetWaveHeight + 'px'
        });
      }

      /**
       * Open TapTarget
       */

    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        // onOpen callback
        if (typeof this.options.onOpen === 'function') {
          this.options.onOpen.call(this, this.$origin[0]);
        }

        this.isOpen = true;
        this.wrapper.classList.add('open');

        document.body.addEventListener('click', this._handleDocumentClickBound, true);
        document.body.addEventListener('touchend', this._handleDocumentClickBound);
      }

      /**
       * Close Tap Target
       */

    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        // onClose callback
        if (typeof this.options.onClose === 'function') {
          this.options.onClose.call(this, this.$origin[0]);
        }

        this.isOpen = false;
        this.wrapper.classList.remove('open');

        document.body.removeEventListener('click', this._handleDocumentClickBound, true);
        document.body.removeEventListener('touchend', this._handleDocumentClickBound);
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(TapTarget.__proto__ || Object.getPrototypeOf(TapTarget), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_TapTarget;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return TapTarget;
  }(Component);

  M.TapTarget = TapTarget;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(TapTarget, 'tapTarget', 'M_TapTarget');
  }
})(cash);
;(function ($) {
  'use strict';

  var _defaults = {
    classes: '',
    dropdownOptions: {}
  };

  /**
   * @class
   *
   */

  var FormSelect = function (_Component20) {
    _inherits(FormSelect, _Component20);

    /**
     * Construct FormSelect instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function FormSelect(el, options) {
      _classCallCheck(this, FormSelect);

      // Don't init if browser default version
      var _this68 = _possibleConstructorReturn(this, (FormSelect.__proto__ || Object.getPrototypeOf(FormSelect)).call(this, FormSelect, el, options));

      if (_this68.$el.hasClass('browser-default')) {
        return _possibleConstructorReturn(_this68);
      }

      _this68.el.M_FormSelect = _this68;

      /**
       * Options for the select
       * @member FormSelect#options
       */
      _this68.options = $.extend({}, FormSelect.defaults, options);

      _this68.isMultiple = _this68.$el.prop('multiple');

      // Setup
      _this68.el.tabIndex = -1;
      _this68._keysSelected = {};
      _this68._valueDict = {}; // Maps key to original and generated option element.
      _this68._setupDropdown();

      _this68._setupEventHandlers();
      return _this68;
    }

    _createClass(FormSelect, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this._removeDropdown();
        this.el.M_FormSelect = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        var _this69 = this;

        this._handleSelectChangeBound = this._handleSelectChange.bind(this);
        this._handleOptionClickBound = this._handleOptionClick.bind(this);
        this._handleInputClickBound = this._handleInputClick.bind(this);

        $(this.dropdownOptions).find('li:not(.optgroup)').each(function (el) {
          el.addEventListener('click', _this69._handleOptionClickBound);
        });
        this.el.addEventListener('change', this._handleSelectChangeBound);
        this.input.addEventListener('click', this._handleInputClickBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        var _this70 = this;

        $(this.dropdownOptions).find('li:not(.optgroup)').each(function (el) {
          el.removeEventListener('click', _this70._handleOptionClickBound);
        });
        this.el.removeEventListener('change', this._handleSelectChangeBound);
        this.input.removeEventListener('click', this._handleInputClickBound);
      }

      /**
       * Handle Select Change
       * @param {Event} e
       */

    }, {
      key: "_handleSelectChange",
      value: function _handleSelectChange(e) {
        this._setValueToInput();
      }

      /**
       * Handle Option Click
       * @param {Event} e
       */

    }, {
      key: "_handleOptionClick",
      value: function _handleOptionClick(e) {
        e.preventDefault();
        var option = $(e.target).closest('li')[0];
        var key = option.id;
        if (!$(option).hasClass('disabled') && !$(option).hasClass('optgroup') && key.length) {
          var selected = true;

          if (this.isMultiple) {
            // Deselect placeholder option if still selected.
            var placeholderOption = $(this.dropdownOptions).find('li.disabled.selected');
            if (placeholderOption.length) {
              placeholderOption.removeClass('selected');
              placeholderOption.find('input[type="checkbox"]').prop('checked', false);
              this._toggleEntryFromArray(placeholderOption[0].id);
            }
            selected = this._toggleEntryFromArray(key);
          } else {
            $(this.dropdownOptions).find('li').removeClass('selected');
            $(option).toggleClass('selected', selected);
          }

          // Set selected on original select option
          // Only trigger if selected state changed
          var prevSelected = $(this._valueDict[key].el).prop('selected');
          if (prevSelected !== selected) {
            $(this._valueDict[key].el).prop('selected', selected);
            this.$el.trigger('change');
          }
        }

        e.stopPropagation();
      }

      /**
       * Handle Input Click
       */

    }, {
      key: "_handleInputClick",
      value: function _handleInputClick() {
        if (this.dropdown && this.dropdown.isOpen) {
          this._setValueToInput();
          this._setSelectedStates();
        }
      }

      /**
       * Setup dropdown
       */

    }, {
      key: "_setupDropdown",
      value: function _setupDropdown() {
        var _this71 = this;

        this.wrapper = document.createElement('div');
        $(this.wrapper).addClass('select-wrapper ' + this.options.classes);
        this.$el.before($(this.wrapper));
        this.wrapper.appendChild(this.el);

        if (this.el.disabled) {
          this.wrapper.classList.add('disabled');
        }

        // Create dropdown
        this.$selectOptions = this.$el.children('option, optgroup');
        this.dropdownOptions = document.createElement('ul');
        this.dropdownOptions.id = "select-options-" + M.guid();
        $(this.dropdownOptions).addClass('dropdown-content select-dropdown ' + (this.isMultiple ? 'multiple-select-dropdown' : ''));

        // Create dropdown structure.
        if (this.$selectOptions.length) {
          this.$selectOptions.each(function (el) {
            if ($(el).is('option')) {
              // Direct descendant option.
              var optionEl = void 0;
              if (_this71.isMultiple) {
                optionEl = _this71._appendOptionWithIcon(_this71.$el, el, 'multiple');
              } else {
                optionEl = _this71._appendOptionWithIcon(_this71.$el, el);
              }

              _this71._addOptionToValueDict(el, optionEl);
            } else if ($(el).is('optgroup')) {
              // Optgroup.
              var selectOptions = $(el).children('option');
              $(_this71.dropdownOptions).append($('<li class="optgroup"><span>' + el.getAttribute('label') + '</span></li>')[0]);

              selectOptions.each(function (el) {
                var optionEl = _this71._appendOptionWithIcon(_this71.$el, el, 'optgroup-option');
                _this71._addOptionToValueDict(el, optionEl);
              });
            }
          });
        }

        this.$el.after(this.dropdownOptions);

        // Add input dropdown
        this.input = document.createElement('input');
        $(this.input).addClass('select-dropdown dropdown-trigger');
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('readonly', 'true');
        this.input.setAttribute('data-target', this.dropdownOptions.id);
        if (this.el.disabled) {
          $(this.input).prop('disabled', 'true');
        }

        this.$el.before(this.input);
        this._setValueToInput();

        // Add caret
        var dropdownIcon = $('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
        this.$el.before(dropdownIcon[0]);

        // Initialize dropdown
        if (!this.el.disabled) {
          var dropdownOptions = $.extend({}, this.options.dropdownOptions);

          // Add callback for centering selected option when dropdown content is scrollable
          dropdownOptions.onOpenEnd = function (el) {
            var selectedOption = $(_this71.dropdownOptions).find('.selected').first();

            if (selectedOption.length) {
              // Focus selected option in dropdown
              M.keyDown = true;
              _this71.dropdown.focusedIndex = selectedOption.index();
              _this71.dropdown._focusFocusedItem();
              M.keyDown = false;

              // Handle scrolling to selected option
              if (_this71.dropdown.isScrollable) {
                var scrollOffset = selectedOption[0].getBoundingClientRect().top - _this71.dropdownOptions.getBoundingClientRect().top; // scroll to selected option
                scrollOffset -= _this71.dropdownOptions.clientHeight / 2; // center in dropdown
                _this71.dropdownOptions.scrollTop = scrollOffset;
              }
            }
          };

          if (this.isMultiple) {
            dropdownOptions.closeOnClick = false;
          }
          this.dropdown = M.Dropdown.init(this.input, dropdownOptions);
        }

        // Add initial selections
        this._setSelectedStates();
      }

      /**
       * Add option to value dict
       * @param {Element} el  original option element
       * @param {Element} optionEl  generated option element
       */

    }, {
      key: "_addOptionToValueDict",
      value: function _addOptionToValueDict(el, optionEl) {
        var index = Object.keys(this._valueDict).length;
        var key = this.dropdownOptions.id + index;
        var obj = {};
        optionEl.id = key;

        obj.el = el;
        obj.optionEl = optionEl;
        this._valueDict[key] = obj;
      }

      /**
       * Remove dropdown
       */

    }, {
      key: "_removeDropdown",
      value: function _removeDropdown() {
        $(this.wrapper).find('.caret').remove();
        $(this.input).remove();
        $(this.dropdownOptions).remove();
        $(this.wrapper).before(this.$el);
        $(this.wrapper).remove();
      }

      /**
       * Setup dropdown
       * @param {Element} select  select element
       * @param {Element} option  option element from select
       * @param {String} type
       * @return {Element}  option element added
       */

    }, {
      key: "_appendOptionWithIcon",
      value: function _appendOptionWithIcon(select, option, type) {
        // Add disabled attr if disabled
        var disabledClass = option.disabled ? 'disabled ' : '';
        var optgroupClass = type === 'optgroup-option' ? 'optgroup-option ' : '';
        var multipleCheckbox = this.isMultiple ? "<label><input type=\"checkbox\"" + disabledClass + "\"/><span>" + option.innerHTML + "</span></label>" : option.innerHTML;
        var liEl = $('<li></li>');
        var spanEl = $('<span></span>');
        spanEl.html(multipleCheckbox);
        liEl.addClass(disabledClass + " " + optgroupClass);
        liEl.append(spanEl);

        // add icons
        var iconUrl = option.getAttribute('data-icon');
        if (!!iconUrl) {
          var imgEl = $("<img alt=\"\" src=\"" + iconUrl + "\">");
          liEl.prepend(imgEl);
        }

        // Check for multiple type.
        $(this.dropdownOptions).append(liEl[0]);
        return liEl[0];
      }

      /**
       * Toggle entry from option
       * @param {String} key  Option key
       * @return {Boolean}  if entry was added or removed
       */

    }, {
      key: "_toggleEntryFromArray",
      value: function _toggleEntryFromArray(key) {
        var notAdded = !this._keysSelected.hasOwnProperty(key);
        var $optionLi = $(this._valueDict[key].optionEl);

        if (notAdded) {
          this._keysSelected[key] = true;
        } else {
          delete this._keysSelected[key];
        }

        $optionLi.toggleClass('selected', notAdded);

        // Set checkbox checked value
        $optionLi.find('input[type="checkbox"]').prop('checked', notAdded);

        // use notAdded instead of true (to detect if the option is selected or not)
        $optionLi.prop('selected', notAdded);

        return notAdded;
      }

      /**
       * Set text value to input
       */

    }, {
      key: "_setValueToInput",
      value: function _setValueToInput() {
        var values = [];
        var options = this.$el.find('option');

        options.each(function (el) {
          if ($(el).prop('selected')) {
            var text = $(el).text();
            values.push(text);
          }
        });

        if (!values.length) {
          var firstDisabled = this.$el.find('option:disabled').eq(0);
          if (firstDisabled.length && firstDisabled[0].value === '') {
            values.push(firstDisabled.text());
          }
        }

        this.input.value = values.join(', ');
      }

      /**
       * Set selected state of dropdown to match actual select element
       */

    }, {
      key: "_setSelectedStates",
      value: function _setSelectedStates() {
        this._keysSelected = {};

        for (var key in this._valueDict) {
          var option = this._valueDict[key];
          var optionIsSelected = $(option.el).prop('selected');
          $(option.optionEl).find('input[type="checkbox"]').prop('checked', optionIsSelected);
          if (optionIsSelected) {
            this._activateOption($(this.dropdownOptions), $(option.optionEl));
            this._keysSelected[key] = true;
          } else {
            $(option.optionEl).removeClass('selected');
          }
        }
      }

      /**
       * Make option as selected and scroll to selected position
       * @param {jQuery} collection  Select options jQuery element
       * @param {Element} newOption  element of the new option
       */

    }, {
      key: "_activateOption",
      value: function _activateOption(collection, newOption) {
        if (newOption) {
          if (!this.isMultiple) {
            collection.find('li.selected').removeClass('selected');
          }
          var option = $(newOption);
          option.addClass('selected');
        }
      }

      /**
       * Get Selected Values
       * @return {Array}  Array of selected values
       */

    }, {
      key: "getSelectedValues",
      value: function getSelectedValues() {
        var selectedValues = [];
        for (var key in this._keysSelected) {
          selectedValues.push(this._valueDict[key].el.value);
        }
        return selectedValues;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(FormSelect.__proto__ || Object.getPrototypeOf(FormSelect), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_FormSelect;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return FormSelect;
  }(Component);

  M.FormSelect = FormSelect;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(FormSelect, 'formSelect', 'M_FormSelect');
  }
})(cash);
;(function ($, anim) {
  'use strict';

  var _defaults = {};

  /**
   * @class
   *
   */

  var Range = function (_Component21) {
    _inherits(Range, _Component21);

    /**
     * Construct Range instance
     * @constructor
     * @param {Element} el
     * @param {Object} options
     */
    function Range(el, options) {
      _classCallCheck(this, Range);

      var _this72 = _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, Range, el, options));

      _this72.el.M_Range = _this72;

      /**
       * Options for the range
       * @member Range#options
       */
      _this72.options = $.extend({}, Range.defaults, options);

      _this72._mousedown = false;

      // Setup
      _this72._setupThumb();

      _this72._setupEventHandlers();
      return _this72;
    }

    _createClass(Range, [{
      key: "destroy",


      /**
       * Teardown component
       */
      value: function destroy() {
        this._removeEventHandlers();
        this._removeThumb();
        this.el.M_Range = undefined;
      }

      /**
       * Setup Event Handlers
       */

    }, {
      key: "_setupEventHandlers",
      value: function _setupEventHandlers() {
        this._handleRangeChangeBound = this._handleRangeChange.bind(this);
        this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this);
        this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this);
        this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this);
        this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this);

        this.el.addEventListener('change', this._handleRangeChangeBound);

        this.el.addEventListener('mousedown', this._handleRangeMousedownTouchstartBound);
        this.el.addEventListener('touchstart', this._handleRangeMousedownTouchstartBound);

        this.el.addEventListener('input', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.addEventListener('mousemove', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.addEventListener('touchmove', this._handleRangeInputMousemoveTouchmoveBound);

        this.el.addEventListener('mouseup', this._handleRangeMouseupTouchendBound);
        this.el.addEventListener('touchend', this._handleRangeMouseupTouchendBound);

        this.el.addEventListener('blur', this._handleRangeBlurMouseoutTouchleaveBound);
        this.el.addEventListener('mouseout', this._handleRangeBlurMouseoutTouchleaveBound);
        this.el.addEventListener('touchleave', this._handleRangeBlurMouseoutTouchleaveBound);
      }

      /**
       * Remove Event Handlers
       */

    }, {
      key: "_removeEventHandlers",
      value: function _removeEventHandlers() {
        this.el.removeEventListener('change', this._handleRangeChangeBound);

        this.el.removeEventListener('mousedown', this._handleRangeMousedownTouchstartBound);
        this.el.removeEventListener('touchstart', this._handleRangeMousedownTouchstartBound);

        this.el.removeEventListener('input', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.removeEventListener('mousemove', this._handleRangeInputMousemoveTouchmoveBound);
        this.el.removeEventListener('touchmove', this._handleRangeInputMousemoveTouchmoveBound);

        this.el.removeEventListener('mouseup', this._handleRangeMouseupTouchendBound);
        this.el.removeEventListener('touchend', this._handleRangeMouseupTouchendBound);

        this.el.removeEventListener('blur', this._handleRangeBlurMouseoutTouchleaveBound);
        this.el.removeEventListener('mouseout', this._handleRangeBlurMouseoutTouchleaveBound);
        this.el.removeEventListener('touchleave', this._handleRangeBlurMouseoutTouchleaveBound);
      }

      /**
       * Handle Range Change
       * @param {Event} e
       */

    }, {
      key: "_handleRangeChange",
      value: function _handleRangeChange() {
        $(this.value).html(this.$el.val());

        if (!$(this.thumb).hasClass('active')) {
          this._showRangeBubble();
        }

        var offsetLeft = this._calcRangeOffset();
        $(this.thumb).addClass('active').css('left', offsetLeft + 'px');
      }

      /**
       * Handle Range Mousedown and Touchstart
       * @param {Event} e
       */

    }, {
      key: "_handleRangeMousedownTouchstart",
      value: function _handleRangeMousedownTouchstart(e) {
        // Set indicator value
        $(this.value).html(this.$el.val());

        this._mousedown = true;
        this.$el.addClass('active');

        if (!$(this.thumb).hasClass('active')) {
          this._showRangeBubble();
        }

        if (e.type !== 'input') {
          var offsetLeft = this._calcRangeOffset();
          $(this.thumb).addClass('active').css('left', offsetLeft + 'px');
        }
      }

      /**
       * Handle Range Input, Mousemove and Touchmove
       */

    }, {
      key: "_handleRangeInputMousemoveTouchmove",
      value: function _handleRangeInputMousemoveTouchmove() {
        if (this._mousedown) {
          if (!$(this.thumb).hasClass('active')) {
            this._showRangeBubble();
          }

          var offsetLeft = this._calcRangeOffset();
          $(this.thumb).addClass('active').css('left', offsetLeft + 'px');
          $(this.value).html(this.$el.val());
        }
      }

      /**
       * Handle Range Mouseup and Touchend
       */

    }, {
      key: "_handleRangeMouseupTouchend",
      value: function _handleRangeMouseupTouchend() {
        this._mousedown = false;
        this.$el.removeClass('active');
      }

      /**
       * Handle Range Blur, Mouseout and Touchleave
       */

    }, {
      key: "_handleRangeBlurMouseoutTouchleave",
      value: function _handleRangeBlurMouseoutTouchleave() {
        if (!this._mousedown) {
          var paddingLeft = parseInt(this.$el.css('padding-left'));
          var marginLeft = 7 + paddingLeft + 'px';

          if ($(this.thumb).hasClass('active')) {
            anim.remove(this.thumb);
            anim({
              targets: this.thumb,
              height: 0,
              width: 0,
              top: 10,
              easing: 'easeOutQuad',
              marginLeft: marginLeft,
              duration: 100
            });
          }
          $(this.thumb).removeClass('active');
        }
      }

      /**
       * Setup dropdown
       */

    }, {
      key: "_setupThumb",
      value: function _setupThumb() {
        this.thumb = document.createElement('span');
        this.value = document.createElement('span');
        $(this.thumb).addClass('thumb');
        $(this.value).addClass('value');
        $(this.thumb).append(this.value);
        this.$el.after(this.thumb);
      }

      /**
       * Remove dropdown
       */

    }, {
      key: "_removeThumb",
      value: function _removeThumb() {
        $(this.thumb).remove();
      }

      /**
       * morph thumb into bubble
       */

    }, {
      key: "_showRangeBubble",
      value: function _showRangeBubble() {
        var paddingLeft = parseInt($(this.thumb).parent().css('padding-left'));
        var marginLeft = -7 + paddingLeft + 'px'; // TODO: fix magic number?
        anim.remove(this.thumb);
        anim({
          targets: this.thumb,
          height: 30,
          width: 30,
          top: -30,
          marginLeft: marginLeft,
          duration: 300,
          easing: 'easeOutQuint'
        });
      }

      /**
       * Calculate the offset of the thumb
       * @return {Number}  offset in pixels
       */

    }, {
      key: "_calcRangeOffset",
      value: function _calcRangeOffset() {
        var width = this.$el.width() - 15;
        var max = parseFloat(this.$el.attr('max')) || 100; // Range default max
        var min = parseFloat(this.$el.attr('min')) || 0; // Range default min
        var percent = (parseFloat(this.$el.val()) - min) / (max - min);
        return percent * width;
      }
    }], [{
      key: "init",
      value: function init(els, options) {
        return _get(Range.__proto__ || Object.getPrototypeOf(Range), "init", this).call(this, this, els, options);
      }

      /**
       * Get Instance
       */

    }, {
      key: "getInstance",
      value: function getInstance(el) {
        var domElem = !!el.jquery ? el[0] : el;
        return domElem.M_Range;
      }
    }, {
      key: "defaults",
      get: function () {
        return _defaults;
      }
    }]);

    return Range;
  }(Component);

  M.Range = Range;

  if (M.jQueryLoaded) {
    M.initializeJqueryWrapper(Range, 'range', 'M_Range');
  }

  Range.init($('input[type=range]'));
})(cash, M.anime);


/***/ }),

/***/ 9806:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.meiosisSetup = void 0;
var setup_1 = __webpack_require__(7210);
Object.defineProperty(exports, "meiosisSetup", ({ enumerable: true, get: function () { return setup_1.meiosisSetup; } }));


/***/ }),

/***/ 7210:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.meiosisSetup = void 0;
const simple_stream_1 = __webpack_require__(6775);
const util_1 = __webpack_require__(7150);
const mergerino_1 = __importDefault(__webpack_require__(8474));
const assoc = (prop, value, target) => {
    target[prop] = value;
    return target;
};
const concatIfPresent = (target, source) => source ? target.concat(source) : target;
const assembleInitialState = (nestedComponents) => nestedComponents
    ? Object.keys(nestedComponents).reduce((result, key) => assoc(key, Object.assign({}, nestedComponents[key].initial, assembleInitialState(nestedComponents[key].nested)), result), {})
    : {};
const getInitialState = (app) => Object.assign({}, app.initial, assembleInitialState(app.nested));
const assembleView = (nestedComponents) => nestedComponents
    ? Object.keys(nestedComponents).reduce((result, key) => {
        const nestedApp = nestedComponents[key];
        if (nestedApp.view !== undefined) {
            const view = nestedApp.view;
            return assoc(key, {
                view: (cell, ...args) => view(cell.nest(key), ...args),
                nested: assembleView(nestedApp.nested)
            }, result);
        }
        return result;
    }, {})
    : {};
const getView = (app) => assembleView(app.nested);
const assembleServices = (nestedComponents, getCell = (cell) => cell, getState = (state) => state) => nestedComponents
    ? Object.keys(nestedComponents).reduce((result, key) => {
        var _a;
        const nextGetCell = (cell) => getCell(cell).nest(key);
        const nextGetState = (state) => getState(state)[key];
        const nestedApp = nestedComponents[key];
        return concatIfPresent(result, (_a = nestedApp.services) === null || _a === void 0 ? void 0 : _a.map((service) => ({
            onchange: (state) => (service.onchange ? service.onchange(nextGetState(state)) : state),
            run: (cell) => service.run(nextGetCell(cell))
        }))).concat(assembleServices(nestedApp.nested, nextGetCell, nextGetState));
    }, [])
    : [];
const getServices = (app) => concatIfPresent([], app.services).concat(assembleServices(app.nested));
const baseSetup = ({ stream, app }) => {
    if (!stream) {
        stream = simple_stream_1.simpleStream;
    }
    const safeApp = app || {};
    const initial = getInitialState(safeApp);
    const view = getView(safeApp);
    const createStream = typeof stream === 'function' ? stream : stream.stream;
    const scan = stream.scan;
    const update = createStream();
    const states = scan((state, patch) => (0, mergerino_1.default)(state, patch), initial, update);
    return {
        states,
        update,
        view
    };
};
const nestPatch = (patch, prop) => ({ [prop]: patch });
const nestUpdate = (parentUpdate, prop) => (patch) => parentUpdate(nestPatch(patch, prop));
const nestCell = (getState, parentUpdate, components) => (prop) => {
    const getNestedState = () => getState()[prop];
    const nestedUpdate = nestUpdate(parentUpdate, prop);
    const nestedComponents = (0, util_1.get)(components, [prop, 'nested']);
    return {
        state: getNestedState(),
        getState: getNestedState,
        update: nestedUpdate,
        nest: nestCell(getNestedState, nestedUpdate, nestedComponents),
        nested: nestedComponents
    };
};
/**
 * Helper to setup the Meiosis pattern with [Mergerino](https://github.com/fuzetsu/mergerino).
 *
 * @template S the State type.
 *
 * @param config the Meiosis config for use with Mergerino
 *
 * @returns a stream of Meiosis cells.
 */
const meiosisSetup = (config) => {
    const stream = config === null || config === void 0 ? void 0 : config.stream;
    const app = config === null || config === void 0 ? void 0 : config.app;
    const { states, update, view } = baseSetup({
        stream,
        app
    });
    const nest = nestCell(states, update, view);
    const getState = () => states();
    const getCell = (state) => ({ state, getState, update, nest, nested: view });
    const dropRepeats = (0, simple_stream_1.createDropRepeats)(stream);
    if (app) {
        getServices(app).forEach((service) => {
            dropRepeats(states, service.onchange).map((state) => service.run(getCell(state)));
        });
    }
    const cells = dropRepeats(states).map(getCell);
    return cells;
};
exports.meiosisSetup = meiosisSetup;


/***/ }),

/***/ 6775:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dropRepeats = exports.createDropRepeats = exports.simpleStream = exports.scan = exports.stream = void 0;
/**
 * Creates a stream.
 *
 * @template T the type of the stream's values.
 *
 * @param initial the stream's initial value.
 *
 * @returns the created stream.
 */
const stream = (initial) => {
    const mapFunctions = [];
    let latestValue = initial;
    const createdStream = function (value) {
        if (arguments.length > 0 && !createdStream.ended) {
            latestValue = value;
            for (const i in mapFunctions) {
                // credit @cmnstmntmn for discovering this bug.
                // Make sure to send the latest value.
                // Otherwise, if f1 triggers another update, f2 will be called with value2 and
                // then value1 (old value).
                mapFunctions[i](latestValue);
            }
        }
        return latestValue;
    };
    createdStream.map = (mapFunction) => {
        const newStream = (0, exports.stream)();
        const mappedFunction = (value) => {
            newStream(mapFunction(value));
        };
        mapFunctions.push(mappedFunction);
        newStream.end = (_value) => {
            const idx = mapFunctions.indexOf(mappedFunction);
            newStream.ended = true;
            mapFunctions.splice(idx, 1);
        };
        if (latestValue !== undefined) {
            newStream(mapFunction(latestValue));
        }
        return newStream;
    };
    createdStream.end = (_value) => {
        createdStream.ended = true;
    };
    return createdStream;
};
exports.stream = stream;
/**
 * Creates a new stream that starts with the initial value and, for each value arriving onto the
 * source stream, emits the result of calling the accumulator function with the latest result and
 * the source stream value.
 */
const scan = (accumulator, initial, sourceStream) => {
    const newStream = (0, exports.stream)(initial);
    let accumulated = initial;
    sourceStream.map((value) => {
        accumulated = accumulator(accumulated, value);
        newStream(accumulated);
    });
    return newStream;
};
exports.scan = scan;
exports.simpleStream = {
    stream: exports.stream,
    scan: exports.scan
};
/**
 * Credit: James Forbes (https://james-forbes.com/)
 *
 * Creates a `dropRepeats` function, which returns new stream that drops repeated values from the
 * source stream.
 *
 * @param stream the stream library, defaults to simpleStream.
 */
const createDropRepeats = (stream = exports.simpleStream) => 
/**
 * @param source the source stream.
 * @param onchange function that receives the current state of the source stream and returns the
 * value for which changes will emit onto the returned stream.
 * @returns a stream that does not emit repeated values.
 */
(source, onchange = (state) => state) => {
    const createStream = typeof stream === 'function' ? stream : stream.stream;
    let prev = undefined;
    const result = createStream();
    source.map((state) => {
        const next = onchange(state);
        if (next !== prev) {
            prev = next;
            result(state);
        }
    });
    return result;
};
exports.createDropRepeats = createDropRepeats;
/**
 * `dropRepeats` function that uses `simpleStream`.
 */
exports.dropRepeats = (0, exports.createDropRepeats)();


/***/ }),

/***/ 7150:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateFormFloatValue = exports.updateFormIntValue = exports.updateFormValue = exports.get = void 0;
/**
 * Safely gets a property path from an object. The path is an array. If any property along the path
 * is `undefined`, the function returns `undefined`.
 *
 * @param object the object on which to get the property.
 * @param path the property path.
 *
 * @returns the property value, or `undefined` if any property along the path is `undefined`.
 */
const get = (object, path) => path.reduce((obj, key) => (obj == undefined ? undefined : obj[key]), object);
exports.get = get;
const intoPath = (path, value) => ({
    [path[0]]: path.length === 1 ? value : intoPath(path.slice(1), value)
});
const toPath = (pathOrProp) => Array.isArray(pathOrProp) ? pathOrProp : [pathOrProp];
const updateParseValue = (parseFn, cell, path) => (evt) => {
    const value = parseFn(evt.target.value);
    if (!isNaN(value)) {
        cell.update(intoPath(toPath(path), value));
    }
};
/**
 * Convenience function to update a form value. Pass the Meiosis cell and the state property (such
 * as `'firstName'`) or path (such as `['person', 'firstName']`) into which to update the value.
 * Returns a function that you can pass to a DOM handler, such as `oninput` (Mithril) or `onInput`
 * (Preact, React). For example:
 *
 * ```js
 * // Using Mithil
 * m('input[type=text]', { oninput: updateFormValue(cell, 'firstName') })
 *
 * // Using Preact/React
 * <input type="text" onInput={updateFormValue(cell, ['person', 'firstName'])}/>
 * ```
 *
 * @param cell the Meiosis cell.
 * @param path the property or path into which to update the value.
 * @param fn (optional) a function to modify the value before updating it.
 *
 * @returns a function that accepts a DOM event and updates the value on the Meiosis state.
 */
const updateFormValue = (cell, path, fn = (value) => value) => (evt) => cell.update(intoPath(toPath(path), fn(evt.target.value)));
exports.updateFormValue = updateFormValue;
/**
 * Convenience function to update a form value with an Integer value. If the user input does not
 * return a number with `parseInt`, no state change occurs. Pass the Meiosis cell and the state
 * property (such as `'counter'`) or path (such as `['book', 'counter']`) into which to update the
 * value. Returns a function that you can pass to a DOM handler, such as `oninput` (Mithril) or
 * `onInput` (Preact, React). For example:
 *
 * ```js
 * // Using Mithil
 * m('input[type=text]', { oninput: updateFormIntValue(cell, 'counter') })
 *
 * // Using Preact/React
 * <input type="text" onInput={updateFormIntValue(cell, ['book', 'counter'])}/>
 * ```
 *
 * @param cell the Meiosis cell.
 * @param path the property or path into which to update the value.
 *
 * @returns a function that accepts a DOM event and updates the value on the Meiosis state.
 */
const updateFormIntValue = (cell, path) => (evt) => updateParseValue(parseInt, cell, path)(evt);
exports.updateFormIntValue = updateFormIntValue;
/**
 * Convenience function to update a form value with a Float value. If the user input does not return
 * a number with `parseFloat`, no state change occurs. Pass the Meiosis cell and the state property
 * (such as `'pH'`) or path (such as `['water', 'pH']`) into which to update the value. Returns a
 * function that you can pass to a DOM handler, such as `oninput` (Mithril) or `onInput` (Preact,
 * React). For example:
 *
 * ```js
 * // Using Mithil
 * m('input[type=text]', { oninput: updateFormFloatValue(cell, 'pH') })
 *
 * // Using Preact/React
 * <input type="text" onInput={updateFormFloatValue(cell, ['water', 'pH'])}/>
 * ```
 *
 * @param cell the Meiosis cell.
 * @param path the property or path into which to update the value.
 *
 * @returns a function that accepts a DOM event and updates the value on the Meiosis state.
 */
const updateFormFloatValue = (cell, path) => (evt) => updateParseValue(parseFloat, cell, path)(evt);
exports.updateFormFloatValue = updateFormFloatValue;


/***/ }),

/***/ 8474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const e=Object.assign||((e,t)=>(t&&Object.keys(t).forEach(o=>e[o]=t[o]),e)),t=(e,r,s)=>{const c=typeof s;if(s&&"object"===c)if(Array.isArray(s))for(const o of s)r=t(e,r,o);else for(const c of Object.keys(s)){const f=s[c];"function"==typeof f?r[c]=f(r[c],o):void 0===f?e&&!isNaN(c)?r.splice(c,1):delete r[c]:null===f||"object"!=typeof f||Array.isArray(f)?r[c]=f:"object"==typeof r[c]?r[c]=f===r[c]?f:o(r[c],f):r[c]=t(!1,{},f)}else"function"===c&&(r=s(r,o));return r},o=(o,...r)=>{const s=Array.isArray(o);return t(s,s?o.slice():e({},o),r)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (o);
//# sourceMappingURL=mergerino.min.js.map

/***/ }),

/***/ 6099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 6777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnchorItem": () => (/* binding */ X),
/* harmony export */   "Autocomplete": () => (/* binding */ C),
/* harmony export */   "Button": () => (/* binding */ S),
/* harmony export */   "ButtonFactory": () => (/* binding */ V),
/* harmony export */   "Carousel": () => (/* binding */ K),
/* harmony export */   "CarouselItem": () => (/* binding */ D),
/* harmony export */   "Chips": () => (/* binding */ _),
/* harmony export */   "CodeBlock": () => (/* binding */ B),
/* harmony export */   "Collapsible": () => (/* binding */ q),
/* harmony export */   "CollapsibleItem": () => (/* binding */ E),
/* harmony export */   "Collection": () => (/* binding */ te),
/* harmony export */   "CollectionMode": () => (/* binding */ W),
/* harmony export */   "ColorInput": () => (/* binding */ he),
/* harmony export */   "DatePicker": () => (/* binding */ Ae),
/* harmony export */   "Dropdown": () => (/* binding */ ie),
/* harmony export */   "EmailInput": () => (/* binding */ be),
/* harmony export */   "FileInput": () => (/* binding */ ge),
/* harmony export */   "FlatButton": () => (/* binding */ L),
/* harmony export */   "FloatingActionButton": () => (/* binding */ ne),
/* harmony export */   "HelperText": () => (/* binding */ $),
/* harmony export */   "Icon": () => (/* binding */ A),
/* harmony export */   "InputCheckbox": () => (/* binding */ ye),
/* harmony export */   "Label": () => (/* binding */ N),
/* harmony export */   "LargeButton": () => (/* binding */ O),
/* harmony export */   "ListItem": () => (/* binding */ J),
/* harmony export */   "Mandatory": () => (/* binding */ k),
/* harmony export */   "MapEditor": () => (/* binding */ xe),
/* harmony export */   "MaterialBox": () => (/* binding */ we),
/* harmony export */   "ModalPanel": () => (/* binding */ ke),
/* harmony export */   "NumberInput": () => (/* binding */ pe),
/* harmony export */   "Options": () => (/* binding */ fe),
/* harmony export */   "Pagination": () => (/* binding */ $e),
/* harmony export */   "Parallax": () => (/* binding */ Ce),
/* harmony export */   "PasswordInput": () => (/* binding */ me),
/* harmony export */   "RadioButton": () => (/* binding */ Ve),
/* harmony export */   "RadioButtons": () => (/* binding */ Se),
/* harmony export */   "RangeInput": () => (/* binding */ ve),
/* harmony export */   "RoundIconButton": () => (/* binding */ j),
/* harmony export */   "SecondaryContent": () => (/* binding */ Z),
/* harmony export */   "Select": () => (/* binding */ Oe),
/* harmony export */   "SmallButton": () => (/* binding */ R),
/* harmony export */   "SubmitButton": () => (/* binding */ F),
/* harmony export */   "Switch": () => (/* binding */ Le),
/* harmony export */   "Tabs": () => (/* binding */ je),
/* harmony export */   "TextArea": () => (/* binding */ re),
/* harmony export */   "TextInput": () => (/* binding */ de),
/* harmony export */   "TimePicker": () => (/* binding */ Te),
/* harmony export */   "Timeline": () => (/* binding */ De),
/* harmony export */   "UrlInput": () => (/* binding */ ue),
/* harmony export */   "camelToSnake": () => (/* binding */ s),
/* harmony export */   "compose": () => (/* binding */ l),
/* harmony export */   "disable": () => (/* binding */ m),
/* harmony export */   "isNumeric": () => (/* binding */ h),
/* harmony export */   "join": () => (/* binding */ o),
/* harmony export */   "map": () => (/* binding */ n),
/* harmony export */   "move": () => (/* binding */ y),
/* harmony export */   "padLeft": () => (/* binding */ b),
/* harmony export */   "pipe": () => (/* binding */ v),
/* harmony export */   "req": () => (/* binding */ p),
/* harmony export */   "swap": () => (/* binding */ g),
/* harmony export */   "toAttributeString": () => (/* binding */ r),
/* harmony export */   "toAttrs": () => (/* binding */ u),
/* harmony export */   "uniqueId": () => (/* binding */ a),
/* harmony export */   "uuid4": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9402);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1413);
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_1__);
const a=()=>"idxxxxxxxx".replace(/[x]/g,()=>(16*Math.random()|0).toString(16)),i=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}),l=(...e)=>t=>e.reduceRight((e,t)=>t(e),t),n=e=>t=>Array.prototype.map.call(t,e),o=e=>t=>Array.prototype.join.call(t,e),s=e=>e.replace(/([A-Z])/g,e=>"-"+e.toLowerCase()),r=e=>e?l(o(""),n(t=>`[${s(t)}="${((e="")=>e.toString().replace(/"/g,"&quot;"))(e[t])}"]`),Object.keys)(e):"",c=["min","max","minLength","maxLength","rows","cols","placeholder","autocomplete","pattern","readOnly","step"],d=e=>c.indexOf(e)>=0,m=({disabled:e})=>e?"[disabled]":"",p=({required:e,isMandatory:t})=>e||t?"[required][aria-required=true]":"",u=e=>(e=>{const t=(a=e,e=>void 0!==a[e]);var a;return Object.keys(e).filter(d).filter(t).reduce((t,a)=>{const i=e[a];return t.push(`[${a.toLowerCase()}=${i}]`),t},[]).join("")})(e)+(e=>e.maxLength?`[data-length=${e.maxLength}]`:"")(e)+m(e)+p(e)+(({autofocus:e})=>"boolean"==typeof e&&e||e&&e()?"[autofocus]":"")(e),h=e=>!isNaN(parseFloat(e))&&isFinite(e),v=(...e)=>t=>e.reduce((e,t)=>t(e),t),b=(e,t=2,a="0")=>(e+="").length>=t?e:new Array(t-e.length+1).join(a)+e,g=(e,t,a)=>{const i=e[t];e[t]=e[a],e[a]=i},y=(e,t,a)=>{const i=e[t];e.splice(t,1),e.splice(a,0,i)};function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},f.apply(this,arguments)}function x(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(l[a]=e[a]);return l}const w=["label","id","isMandatory","isActive"],k={view:({attrs:t})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.mandatory",t,"*")},N=()=>({view:t=>{let{attrs:{label:a,id:i,isMandatory:l,isActive:n}}=t,o=x(t.attrs,w);return a?mithril__WEBPACK_IMPORTED_MODULE_0___default()(`label${n?".active":""}${i?`[for=${i}]`:""}`,o,[mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(a),l?mithril__WEBPACK_IMPORTED_MODULE_0___default()(k):void 0]):void 0}}),$=()=>({view:({attrs:{helperText:t,dataError:a,dataSuccess:i}})=>{const l=a||i?r({dataError:a,dataSuccess:i}):"";return t||l?mithril__WEBPACK_IMPORTED_MODULE_0___default()(`span.helper-text${l}`,t?mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(t):""):void 0}}),C=()=>{const t={id:a()};return{view:({attrs:a})=>{const i=a.id||t.id,l=u(a),{label:n,helperText:o,initialValue:s,onchange:r,newRow:c,className:d="col s12",style:m,iconName:p,isMandatory:h}=a;return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".input-field"+(c?".clear":""),{className:d,style:m},[p?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",p):"",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input.autocomplete[type=text][tabindex=0][id=${i}]${l}`,{oncreate:({dom:e})=>{M.Autocomplete.init(e,a)},onchange:r?e=>{e.target&&e.target.value&&r(e.target.value)}:void 0,value:s}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:n,id:i,isMandatory:h,isActive:s}),mithril__WEBPACK_IMPORTED_MODULE_0___default()($,{helperText:o})])}}},I=["iconName"],A=()=>({view:t=>{let{attrs:{iconName:a}}=t,i=x(t.attrs,I);return mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons",i,a)}}),T=["modalId","tooltip","tooltipPostion","iconName","iconClass","label","attr"],V=(t,a="")=>()=>{const i=`${t}${a}`;return{view:({attrs:t})=>{const{modalId:a,tooltip:l,tooltipPostion:n,iconName:o,iconClass:s,label:c,attr:d}=t,m=x(t,T);return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`${i}${a?`.modal-trigger[href=#${a}]`:""}${l?`.tooltipped[data-position=${n||"top"}][data-tooltip=${l}]`:""}${r(d)}`,m,o?mithril__WEBPACK_IMPORTED_MODULE_0___default()(A,{iconName:o,className:s||"left"}):void 0,c||void 0)}}},S=V("a.waves-effect.waves-light.btn"),O=V("a.waves-effect.waves-light.btn-large"),R=V("a.waves-effect.waves-light.btn-small"),L=V("a.waves-effect.waves-teal.btn-flat"),j=V("button.btn-floating.btn-large.waves-effect.waves-light"),F=V("button.btn.waves-effect.waves-light","[type=submit]"),D=()=>({view:({attrs:{href:t,src:a}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.carousel-item",{href:t},mithril__WEBPACK_IMPORTED_MODULE_0___default()(`img[src=${a}]`))}),K=()=>({view:({attrs:t})=>{const{items:a}=t;return a&&a.length>0?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".carousel",{oncreate:({dom:e})=>{M.Carousel.init(e,t)}},a.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(D,t))):void 0}}),_=()=>({oncreate:({attrs:e,dom:t})=>{const{onchange:a,onChipAdd:i,onChipDelete:l}=e,n=M.Chips.getInstance(t.children[0]),o=i?i.bind(n):void 0;e.onChipAdd=function(e,t){a&&a(this.chipsData),o&&o(e,t)};const s=l?l.bind(n):void 0;e.onChipDelete=function(e,t){a&&a(this.chipsData),s&&s(e,t)},M.Chips.init(t.children[0],e)},onupdate:({dom:e,attrs:{data:t}})=>{if(!t||0===t.length)return;const a=M.Chips.getInstance(e.children[0]);t.forEach(e=>a.addChip(e))},view:({attrs:{placeholder:t,required:a,isMandatory:i=a,data:l,className:n="col s12",label:o,helperText:s}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(".input-field",{className:n},[mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.chips.chips-autocomplete${t?".chips-placeholder":""}${l?".chips-initial":""}`),o?mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:o,isMandatory:i,className:"active"}):void 0,s?mithril__WEBPACK_IMPORTED_MODULE_0___default()($,{helperText:s}):void 0])}),B=()=>({view:({attrs:t})=>{const{newRow:a,code:i,language:l}=t,n=l||"lang-TypeScript",o=n.replace("lang-",""),s=i instanceof Array?i.join("\n"):i;return mithril__WEBPACK_IMPORTED_MODULE_0___default()("pre.codeblock"+(a?".clear":""),t,[mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",mithril__WEBPACK_IMPORTED_MODULE_0___default()("label",o)),mithril__WEBPACK_IMPORTED_MODULE_0___default()(`code.${n}`,s)])}}),E=()=>({view:({attrs:{header:t,body:a,active:i,iconName:l}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(i?"li.active":"li",[t||l?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".collapsible-header",[l?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons",l):void 0,t?"string"==typeof t?mithril__WEBPACK_IMPORTED_MODULE_0___default()("span",t):t:void 0]):void 0,a?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".collapsible-body",a):void 0])}),q=()=>({oncreate:({dom:e,attrs:t})=>{M.Collapsible.init(e,t)},view:({attrs:t})=>{const{items:a,class:i,className:l,style:n,id:o}=t;return a&&a.length>0?mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.collapsible",{class:i||l,style:n,id:o},a.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(E,t))):void 0}}),P=["header","items","mode"],U=["title","active","href"],z=["items","header"],H=["items","header","mode"];var W;!function(e){e[e.BASIC=0]="BASIC",e[e.LINKS=1]="LINKS",e[e.AVATAR=2]="AVATAR"}(W||(W={}));const Y=e=>e&&/https?:\/\//.test(e),Z=()=>({view:({attrs:t})=>{const{href:a,iconName:i="send",onclick:l,style:n={cursor:"pointer"}}=t,o={href:a,style:n,className:"secondary-content",onclick:l?()=>l(t):void 0};return Y(a)||!a?mithril__WEBPACK_IMPORTED_MODULE_0___default()("a[target=_]",o,mithril__WEBPACK_IMPORTED_MODULE_0___default()(A,{iconName:i})):mithril__WEBPACK_IMPORTED_MODULE_0___default()((mithril__WEBPACK_IMPORTED_MODULE_0___default().route.Link),o,mithril__WEBPACK_IMPORTED_MODULE_0___default()(A,{iconName:i}))}}),G=(e="")=>/\./.test(e),J=()=>({view:({attrs:{item:t,mode:a}})=>{const{title:i,content:l="",active:n,iconName:o,avatar:s,className:r,onclick:c}=t;return a===W.AVATAR?mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.collection-item.avatar"+(n?".active":""),{onclick:c?()=>c(t):void 0},[G(s)?mithril__WEBPACK_IMPORTED_MODULE_0___default()("img.circle",{src:s}):mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.circle",{className:r},s),mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.title",i),mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(l)),mithril__WEBPACK_IMPORTED_MODULE_0___default()(Z,t)]):mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.collection-item"+(n?".active":""),o?mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",[i,mithril__WEBPACK_IMPORTED_MODULE_0___default()(Z,t)]):i)}}),Q=()=>({view:t=>{let{attrs:{header:a,items:i,mode:l=W.BASIC}}=t,n=x(t.attrs,P);const o=i.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(J,{key:t.id,item:t,mode:l}));return a?mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.collection.with-header",n,[mithril__WEBPACK_IMPORTED_MODULE_0___default()("li.collection-header",mithril__WEBPACK_IMPORTED_MODULE_0___default()("h4",a)),o]):mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.collection",n,o)}}),X=()=>({view:({attrs:{item:t}})=>{const{title:a,active:i,href:l}=t,n=f({},x(t,U),{className:"collection-item "+(i?"active":""),href:l});return Y(l)||!l?mithril__WEBPACK_IMPORTED_MODULE_0___default()("a[target=_]",n,a):mithril__WEBPACK_IMPORTED_MODULE_0___default()((mithril__WEBPACK_IMPORTED_MODULE_0___default().route.Link),n,a)}}),ee=()=>({view:t=>{let{attrs:{items:a,header:i}}=t,l=x(t.attrs,z);return i?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".collection.with-header",l,[mithril__WEBPACK_IMPORTED_MODULE_0___default()(".collection-header",mithril__WEBPACK_IMPORTED_MODULE_0___default()("h4",i)),a.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(X,{key:t.id,item:t}))]):mithril__WEBPACK_IMPORTED_MODULE_0___default()(".collection",l,a.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(X,{key:t.id,item:t})))}}),te=()=>({view:t=>{let{attrs:{items:a,header:i,mode:l=W.BASIC}}=t,n=x(t.attrs,H);return i||a&&a.length>0?l===W.LINKS?mithril__WEBPACK_IMPORTED_MODULE_0___default()(ee,f({header:i,items:a},n)):mithril__WEBPACK_IMPORTED_MODULE_0___default()(Q,f({header:i,items:a,mode:l},n)):void 0}}),ae=["key","label","onchange","disabled","items","iconName","helperText","style","className"],ie=()=>{const t={};return{oninit:({attrs:{id:e=a(),initialValue:i,checkedId:l}})=>{t.id=e,t.initialValue=i||l},view:a=>{let{attrs:{key:i,label:l,onchange:n,disabled:o=!1,items:s,iconName:r,helperText:c,style:d,className:m="col s12"}}=a,p=x(a.attrs,ae);const{id:u,initialValue:h}=t,v=h?s.filter(e=>e.id?e.id===h:e.label===h).shift():void 0,b=v?v.label:l||"Select";return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".input-field",{className:m,key:i,style:d},[r?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",r):void 0,mithril__WEBPACK_IMPORTED_MODULE_0___default()($,{helperText:c}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(`a.dropdown-trigger.btn.truncate[href=#][data-target=${u}]${o?"[disabled]":""}`,{className:"col s12",style:d||(r?"margin: 0.2em 0 0 3em;":void 0),oncreate:({dom:e})=>{M.Dropdown.init(e,p)}},b),mithril__WEBPACK_IMPORTED_MODULE_0___default()(`ul.dropdown-content[id=${u}]`,s.map(a=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("li"+(a.divider?".divider[tabindex=-1]":""),a.divider?void 0:mithril__WEBPACK_IMPORTED_MODULE_0___default()("a",{onclick:n?()=>{t.initialValue=a.id||a.label,n(t.initialValue)}:void 0},[a.iconName?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons",a.iconName):void 0,a.label]))))])}}},le=["className","iconName","iconClass","position","style","buttons"],ne=()=>({view:t=>{let{attrs:{className:a,iconName:i,iconClass:l="large",position:n,style:o=("left"===n||"inline-left"===n?"position: absolute; display: inline-block; left: 24px;":"right"===n||"inline-right"===n?"position: absolute; display: inline-block; right: 24px;":void 0),buttons:s}}=t,r=x(t.attrs,le);const c=mithril__WEBPACK_IMPORTED_MODULE_0___default()(".fixed-action-btn",{style:o,oncreate:({dom:e})=>M.FloatingActionButton.init(e,r)},[mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.btn-floating.btn-large",{className:a},mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons",{classNames:l},i)),s?mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul",s.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("li",mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.btn-floating",{className:t.className,onclick:e=>t.onClick&&t.onClick(e)},mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons",{className:t.iconClass},t.iconName))))):void 0]);return"inline-right"===n||"inline-left"===n?mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",{style:"position: relative; height: 70px;"},c):c}}),oe=["className","helperText","iconName","id","initialValue","isMandatory","label","onchange","style"],se=["className","dataError","dataSuccess","helperText","iconName","id","initialValue","isMandatory","label","maxLength","newRow","onchange","onkeydown","onkeypress","onkeyup","style","validate"],re=()=>{const i={id:a()};return{view:({attrs:a})=>{const{className:l="col s12",helperText:n,iconName:o,id:s=i.id,initialValue:r,isMandatory:c,label:d,onchange:m,style:p}=a,h=x(a,oe),v=u(h);return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".input-field",{className:l,style:p},[o?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",o):"",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`textarea.materialize-textarea[tabindex=0][id=${s}]${v}`,{oncreate:({dom:e})=>{materialize_css__WEBPACK_IMPORTED_MODULE_1___default().textareaAutoResize(e),a.maxLength&&materialize_css__WEBPACK_IMPORTED_MODULE_1___default().CharacterCounter.init(e)},onchange:m?e=>{const t=e.target;m(t&&"string"==typeof t.value?t.value:"")}:void 0,value:r}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:d,id:s,isMandatory:c,isActive:r||a.placeholder}),mithril__WEBPACK_IMPORTED_MODULE_0___default()($,{helperText:n})])}}},ce=(i,l="")=>()=>{const n={id:a()},o=e=>{const t=e.value;return!t||"number"!==i&&"range"!==i?t:+t},s=(e,t)=>{e.setCustomValidity("boolean"==typeof t?t?"":"Custom validation failed":t)};return{view:({attrs:a})=>{const{className:r="col s12",dataError:c,dataSuccess:d,helperText:m,iconName:p,id:h=n.id,initialValue:v,isMandatory:b,label:g,maxLength:y,newRow:f,onchange:w,onkeydown:k,onkeypress:C,onkeyup:M,style:I,validate:A}=a,T=x(a,se),V=u(T);return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.input-field${f?".clear":""}${l}`,{className:r,style:I},[p?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",p):void 0,mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input.validate[type=${i}][tabindex=0][id=${h}]${V}`,{oncreate:({dom:e})=>{(({autofocus:e})=>!!e&&("boolean"==typeof e?e:e()))(a)&&e.focus(),y&&materialize_css__WEBPACK_IMPORTED_MODULE_1___default().CharacterCounter.init(e),"range"===i&&materialize_css__WEBPACK_IMPORTED_MODULE_1___default().Range.init(e)},onkeyup:M?e=>{M(e,o(e.target))}:void 0,onkeydown:k?e=>{k(e,o(e.target))}:void 0,onkeypress:C?e=>{C(e,o(e.target))}:void 0,onupdate:A?({dom:e})=>{const t=e;s(t,A(o(t),t))}:void 0,onchange:e=>{const t=e.target;if(t){const e=o(t);w&&w(e),A&&s(t,A(e,t))}},value:v}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:g,id:h,isMandatory:b,isActive:!(void 0===v&&!a.placeholder&&"number"!==i&&"color"!==i&&"range"!==i)}),mithril__WEBPACK_IMPORTED_MODULE_0___default()($,{helperText:m,dataError:c,dataSuccess:d})])}}},de=ce("text"),me=ce("password"),pe=ce("number"),ue=ce("url"),he=ce("color"),ve=ce("range",".range-field"),be=ce("email"),ge=()=>{let t,a=!1;return{view:({attrs:i})=>{const{multiple:l,disabled:n,initialValue:o,placeholder:s,onchange:r,className:c="col s12",accept:d,label:m="File"}=i,p=d?d instanceof Array?d.join(", "):d:void 0,u=p?`[accept=${p}]`:"",h=l?"[multiple]":"",v=n?"[disabled]":"",b=s?`[placeholder=${s}]`:"";return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".file-field.input-field",{className:i.class||c},[mithril__WEBPACK_IMPORTED_MODULE_0___default()(".btn",[mithril__WEBPACK_IMPORTED_MODULE_0___default()("span",m),mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input[type=file]${h}${v}${u}`,{onchange:r?e=>{const t=e.target;t&&t.files&&r&&(a=!0,r(t.files))}:void 0})]),mithril__WEBPACK_IMPORTED_MODULE_0___default()(".file-path-wrapper",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input.file-path.validate${b}[type=text]`,{oncreate:({dom:e})=>{t=e,o&&(t.value=o)}})),(a||o)&&mithril__WEBPACK_IMPORTED_MODULE_0___default()("a.waves-effect.waves-teal.btn-flat",{style:"float: right;position: relative;top: -3rem; padding: 0",onclick:()=>{a=!1,t.value="",r&&r({})}},mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons","clear"))])}}},ye=()=>({view:({attrs:{className:t="col s12",onchange:a,label:i,checked:l,disabled:n}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",{className:t},mithril__WEBPACK_IMPORTED_MODULE_0___default()("label",[mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input[type=checkbox][tabindex=0]${l?"[checked]":""}${n?"[disabled]":""}`,{onclick:a?e=>{e.target&&void 0!==e.target.checked&&a(e.target.checked)}:void 0}),i?"string"==typeof i?mithril__WEBPACK_IMPORTED_MODULE_0___default()("span",i):i:void 0]))}),fe=()=>{const t={},a=e=>t.checkedIds.indexOf(e)>=0;return{oninit:({attrs:{initialValue:e,checkedId:a}})=>{const i=a||e;t.checkedId=a,t.checkedIds=i?i instanceof Array?[...i]:[i]:[]},view:({attrs:{label:i,id:l,options:n,checkedId:o,description:s,className:r="col s12",disabled:c,checkboxClass:d,newRow:m,isMandatory:p,onchange:u}})=>{o&&t.checkedId!==o&&(t.checkedId=o,t.checkedIds=o instanceof Array?o:[o]);const h=u?(e,a)=>{const i=t.checkedIds.filter(t=>t!==e);a&&i.push(e),t.checkedIds=i,u(i)}:void 0;return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div"+(m?".clear":""),{className:r},[mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",{className:"input-field options"},mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{id:l,label:i,isMandatory:p})),mithril__WEBPACK_IMPORTED_MODULE_0___default()($,{helperText:s}),...n.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(ye,{disabled:c||t.disabled,label:t.label,onchange:h?e=>h(t.id,e):void 0,className:d,checked:a(t.id)}))])}}},xe=()=>{const t=e=>i.curKey=i.id=e,i={elementId:a(),id:"",curKey:"",kvc:(t,a,i)=>{const{keyClass:l=".col.s4",valueClass:n=".col.s8"}=i,o=a instanceof Array?a.join(", "):"boolean"==typeof a?mithril__WEBPACK_IMPORTED_MODULE_0___default()(ye,{label:" ",checked:a,disabled:!0,className:"checkbox-in-collection"}):a.toString();return{title:mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row",{style:"margin-bottom: 0"},[mithril__WEBPACK_IMPORTED_MODULE_0___default()(l,mithril__WEBPACK_IMPORTED_MODULE_0___default()("b",t)),mithril__WEBPACK_IMPORTED_MODULE_0___default()(n,o)])}}},l=()=>{i.id="",i.curKey=""};return{oninit:({attrs:{keyValueConverter:e,id:t}})=>{e&&(i.kvc=e),t&&(i.elementId=t)},view:({attrs:{className:a="col s12",disabled:n,disallowArrays:o,header:s,iconName:r,iconNameKey:c=(r?"label":void 0),isMandatory:d,label:m,labelKey:p="Key",labelValue:u="Value",properties:h,keyClass:v,valueClass:b,onchange:g,falsy:y=["false"],truthy:f=["true"]}})=>{const x=()=>g?g(h):void 0,w=((e,a)=>Object.keys(e).map(t=>({key:t,value:e[t]})).map(e=>((e,a)=>{const l=a.onclick;return a.id=a.id||e,a.active=e===i.curKey,a.onclick=l?()=>t(e)&&l(a):()=>t(e),a})(e.key,i.kvc(e.key,e.value,{keyClass:a.keyClass,valueClass:a.valueClass}))))(h,{keyClass:v,valueClass:b}),k=i.curKey,$=h[k],C="boolean"==typeof $||"number"==typeof $?$:$?$ instanceof Array?`[${$.join(", ")}]`:$:"",M=i.elementId;return[mithril__WEBPACK_IMPORTED_MODULE_0___default()(".map-editor",mithril__WEBPACK_IMPORTED_MODULE_0___default()(".input-field",{className:a,style:"min-height: 1.5em;"},[r?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",r):"",mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:m,isMandatory:d,isActive:w.length>0}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(te,{id:M,items:w,mode:W.LINKS,header:s})])),n?void 0:[mithril__WEBPACK_IMPORTED_MODULE_0___default()(de,{label:p,iconName:c,className:"col s5",initialValue:k,onchange:e=>{i.curKey=e,i.id&&(delete h[i.id],h[e]=$,i.id=e),x()}}),"string"==typeof C?mithril__WEBPACK_IMPORTED_MODULE_0___default()(re,{label:u,initialValue:C,className:"col s7",onchange:e=>{const t=(i=y,f.indexOf(a=e)>=0||!(i.indexOf(a)>=0)&&void 0);var a,i;const l=void 0===t&&/^\s*\d+\s*$/i.test(e)?+e:void 0;h[k]="boolean"==typeof t?t:"number"==typeof l?l:((e,t=!1)=>{if(t)return e;if(!e)return;const a=/\s*\[(.*)\]\s*/gi.exec(e);return a&&2===a.length?a[1].split(",").map(e=>e.trim()).map(e=>/^\d+$/g.test(e)?+e:e):void 0})(e,o)||e,x()}}):"number"==typeof C?mithril__WEBPACK_IMPORTED_MODULE_0___default()(pe,{label:u,initialValue:C,className:"col s7",onchange:e=>{h[k]=e,x()}}):mithril__WEBPACK_IMPORTED_MODULE_0___default()(ye,{label:u,checked:C,className:"input-field col s7",onchange:e=>{h[k]=e,x()}}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(".col.s12.right-align",[mithril__WEBPACK_IMPORTED_MODULE_0___default()(L,{iconName:"add",onclick:l}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(L,{iconName:"delete",disabled:!k,onclick:()=>{delete h[k],l(),x()}})])]]}}},we=()=>({oncreate:({dom:e,attrs:t})=>{M.Materialbox.init(e,t)},view:({attrs:t})=>{const{src:a,width:i,height:l}=t;return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`img.materialboxed[src=${a}]${i?`[width=${i}]`:""}${l?`[height=${l}]`:""}`,t)}}),ke=()=>({oncreate:({dom:e,attrs:{options:t,onCreate:a}})=>{const i=M.Modal.init(e,t);a&&a(i)},view:({attrs:{id:t,title:a,description:i,fixedFooter:l,bottomSheet:n,buttons:o,richContent:s}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.modal${l?".modal-fixed-footer":""}${n?".bottom-sheet":""}[id=${t}]`,[mithril__WEBPACK_IMPORTED_MODULE_0___default()(".modal-content",[mithril__WEBPACK_IMPORTED_MODULE_0___default()("h4",a),s&&"string"==typeof i?mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(i||""):"string"==typeof i?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",i):i]),o?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".modal-footer",o.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(L,f({},t,{className:"modal-close"})))):void 0])}),Ne=()=>({view:({attrs:{title:t,href:a,active:i,disabled:l}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("li",{className:i?"active":l?"disabled":"waves-effect"},"number"==typeof t?mithril__WEBPACK_IMPORTED_MODULE_0___default()((mithril__WEBPACK_IMPORTED_MODULE_0___default().route.Link),{href:a},t):t)}),$e=()=>{const t={pagIndex:0};return{view:({attrs:{items:a,curPage:i=1,size:l=Math.min(9,a.length)}})=>{const{pagIndex:n}=t,o=n*l,s=o+l,r=n>0,c=s<a.length,d=[{title:mithril__WEBPACK_IMPORTED_MODULE_0___default()("a",{onclick:()=>r&&t.pagIndex--},mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons","chevron_left")),disabled:!r},...a.filter((e,t)=>o<=t&&t<s),{title:mithril__WEBPACK_IMPORTED_MODULE_0___default()("a",{onclick:()=>c&&t.pagIndex++},mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons","chevron_right")),disabled:!c}];return mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.pagination",d.map((t,a)=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(Ne,f({title:o+a},t,{active:o+a===i}))))}}},Ce=()=>({oncreate:({dom:e,attrs:t})=>{M.Parallax.init(e,t)},view:({attrs:{src:t}})=>t?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".parallax-container",mithril__WEBPACK_IMPORTED_MODULE_0___default()(".parallax",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`img[src=${t}]`))):void 0}),Me=["label","helperText","initialValue","newRow","className","iconName","isMandatory","onchange","disabled"],Ie=["label","helperText","initialValue","newRow","className","iconName","isMandatory","onchange","disabled"],Ae=()=>{const t={id:a()};return{view:a=>{let{attrs:{label:i,helperText:l,initialValue:n,newRow:o,className:s="col s12",iconName:r,isMandatory:c,onchange:d,disabled:m}}=a,p=x(a.attrs,Me);const h=t.id,v=u(p),b=d?()=>t.dp&&d(t.dp.date):void 0;return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".input-field"+(o?".clear":""),{className:s,onremove:()=>t.dp&&t.dp.destroy()},[r?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",r):"",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input.datepicker[type=text][tabindex=0][id=${h}]${v}${m?"[disabled]":""}`,{oncreate:({dom:e})=>{t.dp=M.Datepicker.init(e,f({format:"yyyy/mm/dd",showClearBtn:!0,setDefaultDate:!0,defaultDate:n?new Date(n):new Date},p,{onClose:b}))}}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:i,id:h,isMandatory:c,isActive:!!n}),mithril__WEBPACK_IMPORTED_MODULE_0___default()($,{helperText:l})])}}},Te=()=>{const t={id:a()};return{view:a=>{let{attrs:{label:i,helperText:l,initialValue:n,newRow:o,className:s="col s12",iconName:r,isMandatory:c,onchange:d,disabled:m}}=a,p=x(a.attrs,Ie);const h=t.id,v=u(p),b=o?".clear":"",g=new Date,y=d?()=>t.tp&&d(t.tp.time||n||`${g.getHours()}:${g.getMinutes()}`):void 0;return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.input-field.timepicker${b}`,{className:s,onremove:()=>t.tp&&t.tp.destroy()},[r?mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",r):"",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input[type=text][tabindex=0][id=${h}]${v}${m?"[disabled]":""}`,{value:n,oncreate:({dom:e})=>{t.tp=M.Timepicker.init(e,f({twelveHour:!1,showClearBtn:!0,defaultTime:n},p,{onCloseEnd:y}))}}),mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:i,id:h,isMandatory:c,isActive:n}),mithril__WEBPACK_IMPORTED_MODULE_0___default()($,{helperText:l})])}}},Ve=()=>({view:({attrs:{id:t,groupId:a,label:i,onchange:l,className:n="col s12",checked:o,disabled:s}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",{className:n},mithril__WEBPACK_IMPORTED_MODULE_0___default()("label",[mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input[type=radio][tabindex=0][name=${a}]${o?"[checked=checked]":""}${s?"[disabled]":""}`,{onclick:l?()=>l(t):void 0}),mithril__WEBPACK_IMPORTED_MODULE_0___default()("span",mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(i))]))}),Se=()=>{const t={groupId:a()};return{oninit:({attrs:{checkedId:e,initialValue:a}})=>{t.oldCheckedId=e,t.checkedId=e||a},view:({attrs:{id:a,checkedId:i,newRow:l,className:n="col s12",label:o="",disabled:s,description:r,options:c,isMandatory:d,checkboxClass:m,onchange:p}})=>{t.oldCheckedId!==i&&(t.oldCheckedId=t.checkedId=i);const{groupId:u,checkedId:h}=t,v=e=>{t.checkedId=e,p&&p(e)};return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`div${a?`[id=${a}]`:""}${l?".clear":""}`,{className:n},[mithril__WEBPACK_IMPORTED_MODULE_0___default()("div",{className:"input-field options"},mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{id:a,label:o,isMandatory:d})),r?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p.helper-text",mithril__WEBPACK_IMPORTED_MODULE_0___default().trust(r)):"",...c.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(Ve,f({},t,{onchange:v,groupId:u,disabled:s,className:m,checked:t.id===h})))])}}},Oe=()=>{const t={},a=e=>e.map(e=>e.id).join(""),i=(e,t,a=!1)=>a||(t instanceof Array&&(e||"number"==typeof e)?t.indexOf(e)>=0:t===e);return{oninit:({attrs:{checkedId:e,initialValue:i,options:l}})=>{t.ids=a(l);const n=e||i;t.checkedId=e,t.initialValue=n?n instanceof Array?[...n.filter(e=>null!==e)]:[n]:[]},view:({attrs:{id:l,newRow:n,className:o="col s12",checkedId:s,key:r,options:c,multiple:d,label:m,helperText:p,placeholder:u,isMandatory:v,iconName:b,disabled:g,classes:y,dropdownOptions:f,onchange:x}})=>{t.checkedId!==s&&(t.initialValue=s?s instanceof Array?s:[s]:void 0);const{initialValue:w}=t,k=x?d?()=>{const e=t.instance&&t.instance.getSelectedValues(),a=e?e.length>0&&h(e[0])?e.map(e=>+e):e.filter(e=>null!==e||void 0!==e):void 0;t.initialValue=a||[],x(t.initialValue)}:e=>{if(e&&e.currentTarget){const a=e.currentTarget,i=h(a.value)?+a.value:a.value;t.initialValue=void 0!==typeof i?[i]:[]}t.initialValue&&x(t.initialValue)}:void 0,C=n?".clear":"",I=g?"[disabled]":"",A=d?"[multiple]":"",T=0===c.filter(e=>i(e.id,w)).length;return mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.input-field.select-space${C}`,{className:o,key:r},[b&&mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons.prefix",b),mithril__WEBPACK_IMPORTED_MODULE_0___default()(`select[id=${l}]${I}${A}`,{oncreate:({dom:e})=>{t.instance=M.FormSelect.init(e,{classes:y,dropdownOptions:f})},onupdate:({dom:e})=>{const i=a(c);let l=s&&t.checkedId!==s.toString();t.ids!==i&&(t.ids=i,l=!0),(t.checkedId instanceof Array&&s instanceof Array?t.checkedId.join()!==s.join():t.checkedId!==s)&&(t.checkedId=s,l=!0),l&&(t.instance=M.FormSelect.init(e,{classes:y,dropdownOptions:f}))},onchange:k},u?mithril__WEBPACK_IMPORTED_MODULE_0___default()("option[disabled]"+(T?"[selected]":""),u):"",c.map((t,a)=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(`option[value=${t.id}]${t.title?`[title=${t.title}]`:""}${t.disabled?"[disabled]":""}${i(t.id,w,0===a&&T&&!u)?"[selected]":""}`,t.label.replace("&amp;","&")))),mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:m,isMandatory:v}),mithril__WEBPACK_IMPORTED_MODULE_0___default()($,{helperText:p})])}}},Re=["label","left","right","disabled","newRow","onchange","checked","isMandatory","className"],Le=()=>{const t={id:a()};return{view:({attrs:a})=>{const i=a.id||t.id,{label:l,left:n,right:o,disabled:s,newRow:r,onchange:c,checked:d,isMandatory:p,className:u="col s12"}=a,h=x(a,Re);return mithril__WEBPACK_IMPORTED_MODULE_0___default()("div"+(r?".clear":""),{className:u},[l?mithril__WEBPACK_IMPORTED_MODULE_0___default()(N,{label:l||"",id:i,isMandatory:p}):void 0,mithril__WEBPACK_IMPORTED_MODULE_0___default()(".switch",h,mithril__WEBPACK_IMPORTED_MODULE_0___default()("label",[n||"Off",mithril__WEBPACK_IMPORTED_MODULE_0___default()(`input[id=${i}][type=checkbox]${m({disabled:s})}${d?"[checked]":""}`,{onclick:c?e=>{e.target&&void 0!==e.target.checked&&c(e.target.checked)}:void 0}),mithril__WEBPACK_IMPORTED_MODULE_0___default()("span.lever"),o||"On"]))])}}},je=()=>{const t={},a=(e,t)=>t||e.replace(/ /g,"").toLowerCase();return{view:({attrs:{tabWidth:i,selectedTabId:l,tabs:n,className:o,style:s,duration:r,onShow:c,swipeable:d,responsiveThreshold:m}})=>{const p=n.filter(e=>e.active).shift(),u=l||(p?a(p.title,p.id):"");return mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row",[mithril__WEBPACK_IMPORTED_MODULE_0___default()(".col.s12",mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.tabs"+("fill"===i?".tabs-fixed-width":""),{className:o,style:s,oncreate:({dom:e})=>{t.instance=M.Tabs.init(e,{duration:r,onShow:c,responsiveThreshold:m,swipeable:d})},onupdate:()=>{if(u){const e=document.getElementById(`tab_${u}`);e&&e.click()}},onremove:()=>t.instance.destroy()},n.map(({className:t,title:l,id:o,active:s,disabled:r,target:c,href:d})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(`li.tab${r?".disabled":""}${"fixed"===i?`.col.s${Math.floor(12/n.length)}`:""}`,{className:t},mithril__WEBPACK_IMPORTED_MODULE_0___default()(`a[id=tab_${a(l,o)}]${s?".active":""}`,{target:c,href:d||`#${a(l,o)}`},l))))),n.filter(({href:e})=>void 0===e).map(({id:t,title:i,vnode:l,contentClass:n})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(`.col.s12[id=${a(i,t)}]`,{className:n},l))])}}},Fe=()=>({view:({attrs:{id:t,title:a,datetime:i,active:l,content:n,iconName:o,dateFormatter:s,timeFormatter:r,onSelect:c}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(`li${l?".active":""}${t?`[id=${t}]`:""}`,{onclick:c?()=>c({id:t,title:a,datetime:i,active:l,content:n}):void 0,style:c?"cursor: pointer;":void 0},[mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mm_time",{datetime:i},[mithril__WEBPACK_IMPORTED_MODULE_0___default()("span",s(i)),mithril__WEBPACK_IMPORTED_MODULE_0___default()("span",r(i))]),o?mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mm_icon",mithril__WEBPACK_IMPORTED_MODULE_0___default()("i.material-icons",o)):void 0,mithril__WEBPACK_IMPORTED_MODULE_0___default()(".mm_label",[a?"string"==typeof a?mithril__WEBPACK_IMPORTED_MODULE_0___default()("h5",a):a:void 0,n?"string"==typeof n?mithril__WEBPACK_IMPORTED_MODULE_0___default()("p",n):n:void 0])])}),De=()=>{const t=e=>`${e.getUTCDate()}/${e.getUTCMonth()+1}/${e.getUTCFullYear()}`,a=e=>`${b(e.getUTCHours())}:${b(e.getUTCMinutes())}`;return{view:({attrs:{items:i,onSelect:l,timeFormatter:n=a,dateFormatter:o=t}})=>mithril__WEBPACK_IMPORTED_MODULE_0___default()("ul.mm_timeline",i.map(t=>mithril__WEBPACK_IMPORTED_MODULE_0___default()(Fe,f({onSelect:l,dateFormatter:o,timeFormatter:n},t))))}};
//# sourceMappingURL=index.modern.js.map


/***/ }),

/***/ 8332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "LayoutForm": () => (/* binding */ ee),
  "ReadonlyComponent": () => (/* binding */ B),
  "RepeatList": () => (/* binding */ G),
  "SlimdownView": () => (/* binding */ W),
  "addRule": () => (/* reexport */ e),
  "capitalizeFirstLetter": () => (/* binding */ O),
  "deepCopy": () => (/* binding */ U),
  "formFieldFactory": () => (/* binding */ Y),
  "isComponentType": () => (/* binding */ S),
  "labelResolver": () => (/* binding */ _),
  "padLeft": () => (/* binding */ N),
  "range": () => (/* binding */ J),
  "registerPlugin": () => (/* binding */ X),
  "render": () => (/* reexport */ slimdown_modern_n),
  "resolveExpression": () => (/* binding */ T),
  "stripSpaces": () => (/* binding */ R),
  "toHourMin": () => (/* binding */ $)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/mithril@2.2.2/node_modules/mithril/index.js
var mithril = __webpack_require__(9402);
var mithril_default = /*#__PURE__*/__webpack_require__.n(mithril);
;// CONCATENATED MODULE: ./node_modules/.pnpm/slimdown-js@0.7.1/node_modules/slimdown-js/dist/slimdown.modern.mjs
const t=[[/\r\n/g,"\n"],[/\n(#+)(.*)/g,(t,n,e="")=>{const r=n.length;return`<h${r}>${e.trim()}</h${r}>`}],[/!\[([^\[]+)\]\((?:javascript:)?([^\)]+)\)/g,'<img src="$2" alt="$1">'],[/\[([^\[]+)\]\((?:javascript:)?([^\)]+)\)/g,'<a href="$2">$1</a>'],[/(\*\*|__)(.*?)\1/g,"<strong>$2</strong>"],[/\\_/g,"&#95;"],[/(\*|_)(.*?)\1/g,"<em>$2</em>"],[/\~\~(.*?)\~\~/g,"<del>$1</del>"],[/\:\"(.*?)\"\:/g,"<q>$1</q>"],[/\n\s*```\n([^]*?)\n\s*```\s*\n/g,"\n<pre>$1</pre>"],[/`(.*?)`/g,(t,n)=>`<code>${(t=>{t=t.replace(/\&/g,"&amp;");const n="'#<>`*-~_=:\"![]()nt",e=n.length;for(let r=0;r<e;r++)t=t.replace(RegExp("\\"+n[r],"g"),t=>`&#${t.charCodeAt(0)};`);return t})(n)}</code>`],[/\n(\*|\-|\+)(.*)/g,(t,n,e="")=>`<ul>\n\t<li>${e.trim()}</li>\n</ul>`],[/\n[0-9]+\.(.*)/g,(t,n="")=>`<ol>\n\t<li>${n.trim()}</li>\n</ol>`],[/\n(&gt;|\>)(.*)/g,(t,n,e="")=>`\n<blockquote>${e.trim()}</blockquote>`],[/(\^)(.*?)\1/g,"<sup>$2</sup>"],[/(\~)(.*?)\1/g,"<sub>$2</sub>"],[/\n-{5,}/g,"\n<hr />"],[/( *\|[^\n]+\|\r?\n)((?: *\|:?[ -]+:?)+ *\|)(\n(?: *\|[^\n]+\|\r?\n?)*)?/g,(t,n,e,r)=>{const l=e.split("|").filter((t,n,e)=>n>0&&n<e.length-1).map(t=>/:-+:/g.test(t)?"center":/-+:/g.test(t)?"right":/:-+/.test(t)?"left":""),g=t=>{const n=l[t];return n?` align="${n}"`:""};return`\n<table><tbody><tr>${n.split("|").map(t=>t.trim()).filter(t=>t&&t.length).map((t,n)=>`<th${g(n)}>${t}</th>`).join("")}</tr>${r.split("\n").map(t=>t.trim()).filter(t=>t&&t.length).map(t=>`<tr>${t.split("|").filter((t,n,e)=>n>0&&n<e.length-1).map((t,n)=>`<td${g(n)}>${t.trim()}</td>`).join("")}</tr>`).join("")}</tbody></table>\n`}],[/\n([^\n]+)\n/g,(t,n)=>{const e=n.trim();return/^<\/?(ul|ol|li|h|p|bl|table|tr|td)/i.test(e)?`\n${n}\n`:`\n<p>\n${e}\n</p>\n`}],[/\s?<\/ul>\s?<ul>/g,""],[/\s?<\/ol>\s?<ol>/g,""],[/<\/blockquote>\n<blockquote>/g,"<br>\n"],[/https?:\/\/[^"']*/g,t=>t.replace(/<\/?em>/g,"_")],[/&#95;/g,"_"]],slimdown_modern_n=(n,e=!1,r=!1)=>(n=`\n${n}\n`,t.forEach(([t,e])=>{n=n.replace(t,e)}),e?r?n.trim().replace(/^<p>([\s\S]*)<\/p>$/,"$1").replace(/<a href="/,'<a target="_blank" href="'):n.trim().replace(/^<p>([\s\S]*)<\/p>$/,"$1"):r?n.trim().replace(/<a href="/,'<a target="_blank" href="'):n.trim()),e=(n,e)=>{t.push([n,e])};
//# sourceMappingURL=slimdown.modern.mjs.map

// EXTERNAL MODULE: ./node_modules/.pnpm/mithril-materialized@1.0.1/node_modules/mithril-materialized/dist/index.modern.js
var index_modern = __webpack_require__(6777);
;// CONCATENATED MODULE: ./node_modules/.pnpm/mithril-ui-form@1.7.1/node_modules/mithril-ui-form/lib/index.esm.js
const O=e=>e.charAt(0).toUpperCase()+e.slice(1),S=e=>"string"==typeof e,N=function(e,t,n){return void 0===t&&(t=2),void 0===n&&(n="0"),e.toString().length>=t?e.toString():N(n+e,t,n)},$=e=>`${N(e.getHours())}:${N(e.getMinutes())}`,j=(e,t)=>{const n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split(".");let a={...e};for(let t=0,i=n.length;t<i;++t){const i=n[t];if(i in a)a=a[i];else{if(!(a instanceof Array))return;{const t=e[i]||i,n=/([A-Z]\w+)/.exec(i),o=n&&n[0][0].toLowerCase()+n[0].substr(1)||i,r=a.filter(e=>e[o]===t).shift();if(!r)return;a=r}}}return a},A=/([^ =><]*)\s*([=><]*)\s*(\S*)/i,V=/^\s*!\s*/,C=(e,t)=>{const n=e.split("&"),a=t.reduce((e,t)=>t instanceof Array?[...e,...t]:[...e,t],[]);return n.reduce((e,t)=>{const n=V.test(t),i=n?t.replace(V,""):t;return e=e&&a.filter(Boolean).reduce((e,t)=>e||((e,t)=>{if(!t||0===Object.keys(t).length)return!1;const n=A.exec(e);if(n){const[e,a,i,o]=n,r=j(t,a.trim()),l="boolean"==typeof r?r?"true":"false":r;if(void 0===l||"string"==typeof l&&0===l.length)return!1;if(!i||!o)return!0;{const t=isNaN(+o)?"true"===o||"false"!==o&&o:+o;switch(i){case"=":return l instanceof Array?l.indexOf(t)>=0:l===t;case"<=":return l<=t;case">=":return l>=t;case"<":return l<t;case">":return l>t;default:return console.error(`Unrecognized operand (${i}) in expression: ${e}`),!1}}}return!0})(i.trim(),t),!1),n?!e:e},!0)},L=function(e){const t=e instanceof Array?e:[e];return 0===e.length||t.some(e=>C(e,[].slice.call(arguments,1)))},T=(e,t)=>j(t.filter(Boolean).reduceRight((e,t)=>({...t,...e})),e.trim()),P=(e,t)=>void 0!==T(e,t),F=/{{\s*([^\s"'`:]*):?([^\s]*)\s*}}/g,M=function(e){if(!F.test(e))return!0;let t;F.lastIndex=0;let n=!0;do{t=F.exec(e),t&&(t.index===F.lastIndex&&F.lastIndex++,t.forEach((e,t,a)=>{let[,i]=a;n=n&&P(i,[].slice.call(arguments,1))}))}while(n&&null!==t);return n},E=(e,t)=>{if(void 0===e)return"";if(e instanceof Array)return e.map(e=>E(e,t)).join(", ");if(!t)return e.toString();if("boolean"==typeof e){const n=t.indexOf(":");return e?t.substring(0,n):t.substring(n+1)}switch(t){default:return e.toString();case"date":return new Date(e).toLocaleDateString();case"time":return new Date(e).toLocaleTimeString();case"iso":return new Date(e).toISOString();case"utc":return new Date(e).toUTCString()}},H=function(e){if(!F.test(e))return e;let t;F.lastIndex=0;do{t=F.exec(e),t&&(t.index===F.lastIndex&&F.lastIndex++,t.forEach((t,n,a)=>{let[i,o,r]=a;const l=T(o,[].slice.call(arguments,1));!l||l instanceof Array||(e=e.replace(i,E(l,r)))}))}while(null!==t);return e},U=e=>{if(null===e)return e;if(e instanceof Date)return new Date(e.getTime());if(e instanceof Array){const t=[];return e.forEach(e=>{t.push(e)}),t.map(e=>U(e))}if("object"==typeof e){const t={...e};return Object.keys(t).forEach(e=>{t[e]=U(t[e])}),t}return e},_=e=>{const t=function(e,n){return void 0===n&&(n=""),e.filter(e=>"section"!==e.type&&"md"!==e.type).reduce((e,a)=>{const i=(n?`${n}.`:"")+String(a.id),o=a.type||(a.options&&a.options.length>0?"select":"text");return"string"==typeof o?e[i]=a:e={...e,...t(o,i)},e},{})},n=t(e),a=(e,t)=>{if(!n.hasOwnProperty(e)||void 0===t)return t;const a=n[e],i=t instanceof Array?t.filter(e=>null!=e):[t];switch(a.type||(a.options?"options":"none")){default:return t;case"radio":case"select":case"options":const e="string"==typeof a.options?T(a.options,[n]):a.options;return i.map(t=>e.filter(e=>e.id===t).map(e=>e.label||O(e.id)).shift()).filter(e=>void 0!==e)}},i=function(e,t){if(void 0===t&&(t=""),e&&("object"!=typeof e||0!==Object.keys(e).length)){if(e instanceof Array)return e.map(e=>i(e,t));{const n={};return Object.keys(e).forEach(o=>{const r=t?`${t}.${o}`:o,l=e[o];if("boolean"==typeof l)n[o]=l;else if("number"==typeof l||"string"==typeof l){const e=a(r,l);e&&(n[o]=e instanceof Array&&1===e.length?e[0]:e)}else if(l instanceof Array)if("string"==typeof l[0]||null===l[0]){const e=a(r,l);e&&(n[o]=e)}else n[o]=i(l,o);else"object"==typeof l&&(n[o]=l)}),n}}};return i},R=function(e){return void 0===e&&(e=""),e.replace(/\s|,|\./g,"").toLowerCase()},J=function(e,t,n){void 0===n&&(n=1);const a=[];for(let i=e;i<=t;i+=n)a.push(i);return a},q=e=>{"string"!=typeof e&&(e=JSON.stringify(e));let t=0;if(0===e.length)return t;for(var n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t&=t;return t},z=(e,t,n)=>{const a=Object.assign({},t,n);return`${e}?${Object.keys(a).map(e=>`${e}=${a[e]}`).join("&")}`},W=()=>({view:n=>{let{attrs:{md:a="",removeParagraphs:i=!1,externalLinks:o=!1,...r}}=n;return mithril_default()(".slimdown-view.markdown",r,mithril_default().trust(slimdown_modern_n(a,i,o)))}}),B=()=>({view:t=>{let{attrs:{type:n,props:a,label:i="",initialValue:o,inline:r=!1}}=t;const l={className:a.className||"col s12"};if(o instanceof Array&&o.length>3)return mithril_default()(".readonly",l,[mithril_default()("label",i),mithril_default()(W,{md:"\n- "+o.join("\n- ")})]);if("string"==typeof o)return mithril_default()(".readonly",l,"url"===n?[mithril_default()("label",`${i.trim()}: `),mithril_default()("a[target=_blank]",{href:o},o)]:"color"===n?[mithril_default()("label",`${i.trim()}: `),mithril_default()(".color",{style:`height: 1rem; width: 40px; border-radius: 4px; background-color: ${o}`})]:[mithril_default()("label",i),mithril_default()(W,{md:o})]);const s=o instanceof Array?o.join(", "):o;return mithril_default()(".readonly",l,[i&&mithril_default()("label",i),r?mithril_default()("span",s?`: ${s}`:mithril_default().trust("&nbsp;")):mithril_default()("p",s||mithril_default().trust("&nbsp;"))])}}),Y=function(w,x){void 0===w&&(w={}),void 0===x&&(x={});const I=()=>{const I={key:Date.now()};return{view:k=>{let{attrs:{i18n:D,field:S,obj:N,autofocus:j,onchange:A,context:V,containerId:C,disabled:P,readonly:F}}=k;const{id:E="",type:U,disabled:_=P,readonly:R=F,value:J,required:q,autogenerate:z,show:Y,label:G,description:K,i18n:Z=D||{},checkAllOptions:Q,transform:X,effect:te}=S;if(Y&&!L(Y,N,V)||G&&!M(G,N,V)||K&&!M(K,N,V))return;const ne="string"==typeof S.options?T(S.options,[N,...V]):S.options,ae=ne&&ne instanceof Array?ne.filter(e=>void 0!==e.id&&(e.label||!/[0-9]/.test(e.id))&&(!e.show||L(e.show,N,V))).map(e=>e.label?e:{...e,label:O(e.id)}):[],ie="boolean"==typeof P&&P,oe=function(e,n,i){void 0===n&&(n=!1),void 0===i&&(i=!1);const{id:o="",label:r,description:l,required:s,multiple:c,className:d,checkboxClass:u,icon:p,iconClass:m,placeholder:f,maxLength:g,minLength:h,max:y,min:b,step:v,dateTimeOutput:w,dateTimeSeconds:x,dateFormat:I,twelveHour:k}=e,D={id:`${String(o)}-${(0,index_modern.uniqueId)()}`,label:r};return void 0===r&&o&&(D.label=O(String(o))),l&&(D.helperText=slimdown_modern_n(l,!0)),d&&(D.className=d),p&&(D.iconName=p),m&&(D.iconClass=m),u&&(D.checkboxClass=u),f&&(D.placeholder=f),s&&(D.isMandatory=!0),c&&(D.multiple=c),i&&(D.disabled=!0),n&&(D.autofocus=!0),void 0!==g&&(D.maxLength=g),void 0!==h&&(D.minLength=h),void 0!==y&&(D.max=y),void 0!==b&&(D.min=b),void 0!==v&&(D.step=v),w&&(D.dateTimeOutput=w),x&&(D.dateTimeSeconds=x),I&&(D.dateFormat=I),k&&(D.twelveHour=k),D}(S,j,"boolean"==typeof _||void 0===_?ie||_:ie||L(_,N,V));G&&(oe.label=slimdown_modern_n(H(oe.label||G,N,V),!0)),K&&(oe.description=slimdown_modern_n(H(oe.description||K,N,V),!0));const re=q?e=>e instanceof Array?e&&e.length>0:void 0!==typeof e:void 0;if(N instanceof Array)return void console.warn("Only a repeat list can deal with arrays!");const le=function(e){try{return void 0===e||"undefined"===e?(delete N[E],A(N),Promise.resolve()):(N[E]=X?X("to",e):e,te?Promise.resolve(te(N,N[E],V)).then(function(e){A(void 0!==e?e:N)}):Promise.resolve(A(N)))}catch(e){return Promise.reject(e)}};if(U instanceof Array)return E?(N.hasOwnProperty(E)||(N[E]={}),mithril_default()(".muf-form",{className:S.className},[mithril_default()(".muf-form-header",mithril_default().trust(slimdown_modern_n(oe.label||O(String(E)),!0))),oe.description&&mithril_default()("div",mithril_default().trust(slimdown_modern_n(oe.description))),mithril_default()(".row",mithril_default()(ee,{...oe,i18n:Z,readonly:R,form:U,obj:N[E],context:[N,...V],onchange:()=>A(N),containerId:C}))])):void console.warn("Missing ID for type "+JSON.stringify(U));z&&!N[E]&&(N[E]="guid"===z?(0,index_modern.uuid4)():"id"===z?(0,index_modern.uniqueId)():Date.now());const se=N.hasOwnProperty(E)&&void 0!==N[E]?X?X("from",N[E]):N[E]:J;E&&void 0!==J&&void 0!==se&&(N[E]=X?X("to",se):se);const[ce,de]=Q?Q.split("|"):["",""],{className:ue}=oe;if(R&&U&&["md","none"].indexOf(U)<0){if(x.hasOwnProperty(U))return mithril_default()(x[U],{iv:se,field:S,props:oe,label:oe.label,obj:N,context:V});if(U&&w.hasOwnProperty(U))return mithril_default()(w[U],{iv:se,field:S,props:oe,label:oe.label,onchange:le,obj:N,context:V});switch(U){case"time":{const t=se||new Date,n=$(t);return mithril_default()(B,{props:oe,label:oe.label,initialValue:n})}case"date":{const t=se,n="number"==typeof t||"string"==typeof t||t instanceof Date?new Date(t).toLocaleDateString():"";return mithril_default()(B,{props:oe,label:oe.label,initialValue:n})}case"checkbox":return mithril_default()(B,{props:oe,label:oe.label,initialValue:se?"✔":"✘",inline:!0});case"tags":return mithril_default()(B,{props:oe,label:oe.label,initialValue:se||[]});case"options":case"select":{const t=void 0!==se?se instanceof Array?se:[se]:[],n=ae.filter(e=>t.indexOf(e.id)>=0),a=n&&0===n.length?"?":1===n.length?n[0].label:n.map(e=>e.label);return mithril_default()(B,{props:oe,label:oe.label,initialValue:a})}case"radio":{const t=se,n=ae.filter(e=>e.id===t);return mithril_default()(B,{props:oe,initialValue:n&&n.length?n[0].label:"?"})}case"base64":{const t=se;return!(!t||!/data:image/i.test(t))&&mithril_default()("div",mithril_default()("img.responsive-img",{src:t,alt:N.title||N.alt||N.name||"",style:`max-height: ${S.max||50}px`}))}case"file":{const t=se;return mithril_default()("div",oe,(t instanceof Array?t:[t]).map(function(t){void 0===t&&(t="");const n=/data:image|.jpg$|.jpeg$|.png$|.gif$|.svg$|.bmp$|.tif$|.tiff$/i.test(t),a=`${new URL(S.url).origin}${t}`;return mithril_default()("a[target=_blank]",{href:a},n?mithril_default()("img",{src:a,alt:a,style:`max-height: ${S.max||50}`}):mithril_default()(B,{props:oe,label:S.placeholder||"File",initialValue:t}))}))}case"markdown":{const n="string"==typeof se&&se?slimdown_modern_n(se):"";return mithril_default()(B,{props:oe,label:oe.label,initialValue:n})}default:return mithril_default()(B,{props:oe,type:U,label:oe.label,initialValue:se})}}else{if(U&&w.hasOwnProperty(U))return mithril_default()(w[U],{iv:se,field:S,props:oe,label:oe.label,onchange:le,obj:N,context:V});switch(U){case"colour":case"color":{const t=se;return mithril_default()(index_modern.ColorInput,{...oe,initialValue:t,onchange:le})}case"time":{const{twelveHour:t=!1}=oe,n=se?"number"==typeof se||"string"==typeof se?new Date(se):se:new Date,a=$(n);return N[E]=X?X("to",n):n,mithril_default()(index_modern.TimePicker,{...oe,twelveHour:t,initialValue:a,onchange:e=>{const t=e.split(":").map(e=>+e);n.setHours(t[0],t[1]),le(n)},container:C})}case"date":{const{format:t="mmmm d, yyyy"}=oe,n="number"==typeof se||"string"==typeof se?new Date(se):se;N[E]=n?X?X("to",n.valueOf()):n.valueOf():n;const{min:a,max:i}=oe,o=a?!n||a<n.valueOf()?new Date(a):n:void 0,r=i?!n||i>n.valueOf()?new Date(i):n:void 0;return mithril_default()(index_modern.DatePicker,{...oe,minDate:o,maxDate:r,setDefaultDate:!!n,format:t,initialValue:n,onchange:e=>{le(new Date(e))},container:C})}case"datetime":{const{label:t,className:n="col s12",dateTimeSeconds:a=!1,twelveHour:i=!1,format:o="mmmm d, yyyy",...r}=oe,l="number"==typeof se||"string"==typeof se?new Date(se):se,s={initialDateTime:l},c=l||void 0,d=l?$(l):"",{min:u,max:p}=oe,m=u?!l||u<l.valueOf()?new Date(u):l:void 0,f=p?!l||p>l.valueOf()?new Date(p):l:void 0,h=oe.dateTimeOutput||"UTC",v=e=>{s.initialDateTime=e,le("UTC"===h?e.toUTCString():"ISO"===h?e.toISOString():e.valueOf())};return mithril_default()("div",{className:n},mithril_default()(".row",[mithril_default()(a?".col.s6":".col.s8",{style:"padding-right: 0"},mithril_default()(index_modern.DatePicker,{...r,label:t,minDate:m,maxDate:f,setDefaultDate:!!l,format:o,initialValue:c,container:C,onchange:e=>{const t=new Date(s.initialDateTime);t.setFullYear(e.getFullYear()),t.setMonth(e.getMonth()),t.setDate(e.getDate()),v(t)}})),mithril_default()(".col.s4",{style:"min-width: 6rem; padding-right: 0; padding-left: 0"},mithril_default()(index_modern.TimePicker,{...r,label:"",helperText:"",twelveHour:i,initialValue:d,container:C,onchange:e=>{const t=e.split(":").map(e=>+e),n=s.initialDateTime||new Date((new Date).setSeconds(0,0));n.setHours(t[0],t[1]),v(n)}})),a&&mithril_default()(index_modern.NumberInput,{style:"min-width: 4rem; padding-right: 0; padding-left: 0",className:"col s2",min:0,max:59,onchange:e=>{const t=s.initialDateTime||new Date((new Date).setSeconds(0,0));t.setSeconds(e,0),v(t)}})]))}case"email":{const t=se;return mithril_default()(index_modern.EmailInput,{...oe,validate:re,autofocus:j,onchange:le,initialValue:t})}case"number":{const t=se;return mithril_default()(index_modern.NumberInput,{...oe,validate:re,autofocus:j,onchange:le,initialValue:t})}case"radio":{const t=se;return mithril_default()(index_modern.RadioButtons,{label:"",...oe,options:ae,checkedId:t,onchange:le})}case"checkbox":{const t=se;return mithril_default()(index_modern.InputCheckbox,{...oe,checked:t,onchange:le})}case"options":{const t=se;return[[mithril_default()(index_modern.Options,{key:I.key,checkboxClass:"col s6 m4 l3",className:"input-field col s12",...oe,disabled:oe.disabled||!ae||0===ae.length,options:ae,checkedId:t,onchange:e=>le(1===e.length?e[0]:e.filter(e=>null!==e))})],void 0!==Q&&mithril_default()(".col.s12.option-buttons",[mithril_default()(index_modern.FlatButton,{disabled:oe.disabled,label:ce,iconName:"check",onclick:()=>{I.key=Date.now(),le(ae.map(e=>e.id))}}),de&&mithril_default()(index_modern.FlatButton,{disabled:oe.disabled,label:de,iconName:"check_box_outline_blank",onclick:()=>{const e=N[E]||[];e.length=0,I.key=Date.now(),le(e)}})])]}case"select":{const t=se;return mithril_default()(index_modern.Select,{placeholder:oe.multiple?Z.pickOneOrMore||"Pick one or more":Z.pickOne||"Pick one",...oe,disabled:oe.disabled||!ae||0===ae.length,options:ae,checkedId:t,onchange:e=>le(1!==e.length||oe.multiple?e.filter(e=>null!==e||void 0!==e):e[0])})}case"md":const t=H((E?se:J||G)||"",N,V);return mithril_default()(W,{md:t,className:ue});case"section":return mithril_default()(".divider");case"switch":{const t=se,n=ae&&ae.length>0?ae[0].label:"",a=ae&&ae.length>1?ae[1].label:"";return mithril_default()(index_modern.Switch,{...oe,left:n,right:a,checked:t,onchange:le})}case"tags":{const t=(se?se instanceof Array?se:[se]:[]).map(e=>({tag:e})),n=ae&&ae.length>0?{data:ae.reduce((e,t)=>(e[t.id]=null,e),{}),limit:S.maxLength||Infinity,minLenght:S.minLength||1}:{},{label:a,isMandatory:i,className:o,helperText:r}=oe;return mithril_default()(index_modern.Chips,{className:o,label:a,isMandatory:i,helperText:r,onchange:e=>le(e.map(e=>e.tag)),placeholder:S.placeholder||"Add a tag",secondaryPlaceholder:S.secondaryPlaceholder||"+tag",data:t,autocompleteOptions:n})}case"markdown":case"textarea":{const t=se;return mithril_default()(index_modern.TextArea,{...oe,validate:re,autofocus:j,onchange:le,initialValue:t})}case"file":{const t=se,{url:n,placeholder:a}=S;if(!n)throw Error('Input field "url" not defined, which indicates the URL to the upload folder.');const i=ae?ae.map(e=>e.id):void 0,o=t=>{if(!t||t.length<1)return void le("");const a=new FormData;a.append("file",t[0]),mithril_default().request({method:"POST",url:n,body:a}).then(e=>le(e)).catch(console.error)};return mithril_default()(index_modern.FileInput,{...oe,accept:i,placeholder:a,onchange:o,initialValue:t})}case"base64":{const t=se,n=!(!t||!/data:image/i.test(t)),{placeholder:a}=S,i=ae?ae.map(e=>e.id).join(","):void 0,o=t=>{if(!t||t.length<1)return void le("");const n=new FileReader;n.onloadend=()=>{"string"==typeof n.result&&le(n.result),mithril_default().redraw()},n.readAsDataURL(t[0])};return n?mithril_default()("div",[mithril_default()("img.responsive-img",{src:t,alt:N.title||N.alt||N.name||"",style:`max-height: ${S.max||50}px`}),mithril_default()(index_modern.FlatButton,{iconName:"clear",onclick:()=>le("")})]):mithril_default()(index_modern.FileInput,{...oe,accept:i,placeholder:a,onchange:o,initialValue:t})}case"url":{const t=se;return mithril_default()(index_modern.UrlInput,{placeholder:"http(s)://www.example.com",...oe,validate:re,autofocus:j,onchange:le,initialValue:t})}case"text":{const t=se;return mithril_default()(index_modern.TextInput,{...oe,validate:re,autofocus:j,onchange:le,initialValue:t,tabindex:15})}default:return}}}}};return{createFormField:()=>I}},G=()=>{const t={},n=(e,n)=>{const a=t.onNewItem?t.onNewItem(e,n):{};e instanceof Array?e.push(a):e.hasOwnProperty(n)?e[n].push(a):e[n]=[a]};let o;return{oninit:e=>{let{attrs:{i18n:n={},field:{id:a="",sortProperty:i,onNewItem:r}}}=e;t.editLabel=n.editRepeat||`Edit ${String(a)}`,t.createLabel=n.createRepeat||`Create new ${String(a)}`,t.onNewItem=r,o=(e=>{if(!e)return(e,t)=>0;const t="!"===e[0],n=t?e.substring(1):e;return t?(e,t)=>e[n]>t[n]?-1:e[n]<t[n]?1:0:(e,t)=>e[n]>t[n]?1:e[n]<t[n]?-1:0})(i)},view:l=>{let{attrs:{field:s,obj:c,context:d,className:u=(s.className?"."+s.className.split(" ").join("."):".col.s12"),section:p,containerId:m,disabled:f=("boolean"==typeof s.disabled?s.disabled:void 0),readonly:g,i18n:h={},onchange:y}}=l;const{modalKey:b,filterValue:v}=t,{id:k,label:D,type:O,min:S,max:N,pageSize:$,propertyFilter:j,filterLabel:A,readonly:V=g,repeatItemClass:C=""}=s,L="edit_"+(D?D.toLowerCase().replace(/\s/gi,"_"):(0,index_modern.uniqueId)()),T=((e,t)=>e instanceof Array?e:(e.hasOwnProperty(t)||(e[t]=[]),e[t]))(c,k),P=v?R(v):void 0,F=j&&P&&P.length>2?T.filter(e=>R(`${e[j]}`).indexOf(P)>=0):T,M=mithril_default().route.param(String(k))?Math.min(F.length,+mithril_default().route.param(String(k))):1,E=$&&F&&(M-1)*$<F.length?M:1,H=$?(e,t)=>(E-1)*$<=t&&t<E*$:()=>!0,U=mithril_default().route.get(),_=$?Math.ceil(F.length/$):0,W=!!(N&&F.length>=N),B=!f&&(!S||F.length>S),Y=U.split("?")[0],G=(e=>{const t=e?e.split("?")[1]:window.location.search.slice(1),n={};if(t){const e=t.split("&");for(var a=0;a<e.length;a++){const t=e[a].split("="),i=t[0],o=void 0===t[1]||t[1];if(i.match(/\[(\d+)?\]$/)){const e=n[i.replace(/\[(\d+)?\]/,"")]||[];i.match(/\[\d+\]$/)?e[+/\[(\d+)\]/.exec(i)[1]]=o:e.push(o)}else n[i]?"string"==typeof n[i]?(n[i]=[n[i]],n[i].push(o)):n[i].push(o):n[i]=o}}return n})(U);return[[mithril_default()(`#${String(k)}.mui-repeat-list${u}`,[mithril_default()(".row.mui-repeat-list-controls",mithril_default()(".col.s12",[mithril_default()(index_modern.FlatButton,{iconName:f||W?"":"add",iconClass:"right",label:D,onclick:()=>{n(c,String(k)),k&&mithril_default().route.set(Y,Object.assign(G,{[k]:F.length})),y&&y(c)},style:"padding: 0",className:"left",disabled:f||W,readonly:V}),_>1&&mithril_default()(".right",mithril_default()(index_modern.Pagination,{curPage:E,items:J(1,_).map(e=>({href:z(Y,G,{[k]:e})}))})),(F.length>1||v)&&j&&!f&&mithril_default()(index_modern.TextInput,{style:"margin-top: -6px; margin-bottom: -1rem;",iconName:"filter_list",iconClass:"small",placeholder:A,onkeyup:(e,n)=>t.filterValue=n,className:"right",disabled:f,readonly:V})])),F&&F.length>0&&"string"!=typeof O&&F.sort(o).filter(H).map((n,a)=>[B&&[mithril_default()(index_modern.RoundIconButton,{type:"button",iconName:"clear",iconClass:"white black-text",className:"row mui-delete-item btn-small right",style:"padding: 0; margin-top: -10px; margin-right: -25px",disabled:f,readonly:V,onclick:()=>{t.curItemIdx=$?(E-1)*$+a:a}}),(!$||$>1)&&mithril_default()("span.mui-show-item-number",`[${($?(E-1)*$+a:a)+1}]`)],[mithril_default()(".row.repeat-item",{className:C,key:M+q(n)},[mithril_default()(ee,{form:s.type,obj:n,i18n:h,context:d instanceof Array?[c,...d]:[c,d],section:p,containerId:m,disabled:f,readonly:V,onchange:()=>y&&y(c)})])]]),!(f||W||V||!F||0===F.length||1===$)&&mithril_default()(index_modern.RoundIconButton,{iconName:"add",iconClass:"white black-text",className:"row mui-add-new-item btn-small right",title:D,style:"padding: 0; margin-top: -10px; margin-right: -25px",onclick:()=>{n(c,String(k)),mithril_default().route.set(Y,Object.assign(G,{[k]:F.length})),y&&y(c)}})])],void 0!==t.curItemIdx&&mithril_default()(index_modern.ModalPanel,{id:"deleteItem",onCreate:e=>e.open(),options:{onCloseStart:()=>{t.curItemIdx=void 0,mithril_default().redraw()}},fixedFooter:!0,title:h.deleteItem||"Delete item",description:mithril_default()(ee,{form:O,obj:F[t.curItemIdx],context:d instanceof Array?[c,...d]:[c,d],section:p,containerId:m,readonly:!0,i18n:h}),buttons:[{label:h.disagree||"Disagree"},{label:h.agree||"Agree",onclick:()=>{void 0!==t.curItemIdx&&(F.splice(t.curItemIdx,1),c instanceof Array?c=[...F]:c[k]=[...F],y&&y(c))}}]}),"string"==typeof O||void 0===O?void 0:mithril_default()(index_modern.ModalPanel,{onCreate:e=>t.editModal=e,id:L,title:t.editItem?t.editLabel:t.createLabel,fixedFooter:!0,description:mithril_default()(".row.form-item",mithril_default()(ee,{key:b,form:O,i18n:h,obj:t.editItem||t.newItem||{},onchange:e=>t.canSave=e,context:d instanceof Array?[c,...d]:[c,d],containerId:m,disabled:f})),buttons:[{iconName:"cancel",label:h.cancel||"Cancel"},{iconName:"save",label:h.save||"Save",disabled:!t.canSave,onclick:()=>{if(t.editItem&&void 0!==t.curItemIdx){const e=t.editItem,n=t.curItemIdx;O.forEach(t=>{t.id&&(n[t.id]=e[t.id])})}else t.newItem&&F.push(t.newItem);y&&y(c)}}]})]}}},K=()=>{const t={};return{oninit:e=>{let{attrs:{i18n:n={}}}=e;const{raw:a="RAW",view:i="VIEW"}=n;t.raw=a,t.view=i},view:n=>{let{attrs:{field:{id:a="",type:i,onSelect:o},obj:r,context:l,containerId:c,disabled:d,readonly:u,i18n:p,onchange:m}}=n;if(r instanceof Array)return;const f=r[a],g=f?JSON.parse(f):void 0,h=g&&g.features||[],y=[],b={title:t.raw,vnode:mithril_default()(index_modern.TextArea,{class:"col s12",initialValue:g?JSON.stringify(g,null,2):void 0,placeholder:"Enter GeoJSON",onchange:e=>r[a]=e})};if(!i||"string"==typeof i)return;const v=i,w=v.length>0?v[0].id:void 0,x={title:t.view,vnode:h.length?mithril_default()(index_modern.Collapsible,{oncreate:e=>{let{dom:n}=e;return t.dom=n},onOpenStart:o?e=>{const n=t.dom.children||[];for(let t=0;t<n.length;t++)if(n[t]===e)return void o(t,h[t])}:void 0,className:"geojson-feature-list",items:h.map((t,n)=>(t.properties||(t.properties={}),{id:"erik_"+n,key:n,header:w&&t.properties[w]||t.geometry.type,body:mithril_default()(".row",mithril_default()(ee,{class:"col s12",form:v,obj:t.properties,i18n:p,context:l instanceof Array?[r,...l]:[r,l],containerId:c,disabled:d,readonly:u,onchange:(e,t)=>{t&&(h[n].properties=t),r[a]=JSON.stringify(g,null,2),m&&m(r)}}))}))}):mithril_default()("span","...")};return y.push(x),y.push(b),mithril_default()(index_modern.Tabs,{tabs:y,tabWidth:"fill"})}}},Z={},Q={},X=(e,t,n)=>{Z[e]=t,n&&(Q[e]=n)},ee=(()=>{const t=(e,t)=>t.filter(e=>e.required&&void 0!==typeof e.id).reduce((t,n)=>t&&!(n.id&&(void 0===e[n.id]||e[n.id]instanceof Array&&0===e[n.id].length||"string"==typeof e[n.id]&&0===e[n.id].length)),!0);return{createLayoutForm:()=>()=>{const n=Y(Z,Q).createFormField();return{view:a=>{let{attrs:{i18n:i,form:o,obj:r,onchange:l,disabled:s,readonly:c,context:d,section:u}}=a;const p=e=>l&&l(t(e,o),e);return o.filter((e=>{if(!e)return e=>!0;let t=!1;return n=>{let{type:a,id:i}=n;return"section"===a?(t=i===e,!1):t}})(u)).filter(e=>!e.show||L(e.show,r,...d||[])).reduce((t,a)=>(a.type||(a.type=(e=>{const{autogenerate:t,value:n,options:a}=e;return t?"none":n?"string"==typeof n?"md":"number"==typeof n?"number":"boolean"==typeof n?"checkbox":"none":a&&a.length>0?"select":"none"})(a)),[...t,void 0===a.repeat?mithril_default()(n,{i18n:i,field:a,obj:r,onchange:p,disabled:s,readonly:c,context:d,section:u,containerId:"body"}):mithril_default()("geojson"===a.repeat?K:G,{obj:r,field:a,onchange:p,context:d,i18n:i,containerId:"body",disabled:s,readonly:c})]),[])}}},isValid:t}})().createLayoutForm();
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ 3386:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(6604)

module.exports = function(render, schedule, console) {
	var subscriptions = []
	var pending = false
	var offset = -1

	function sync() {
		for (offset = 0; offset < subscriptions.length; offset += 2) {
			try { render(subscriptions[offset], Vnode(subscriptions[offset + 1]), redraw) }
			catch (e) { console.error(e) }
		}
		offset = -1
	}

	function redraw() {
		if (!pending) {
			pending = true
			schedule(function() {
				pending = false
				sync()
			})
		}
	}

	redraw.sync = sync

	function mount(root, component) {
		if (component != null && component.view == null && typeof component !== "function") {
			throw new TypeError("m.mount expects a component, not a vnode.")
		}

		var index = subscriptions.indexOf(root)
		if (index >= 0) {
			subscriptions.splice(index, 2)
			if (index <= offset) offset -= 2
			render(root, [])
		}

		if (component != null) {
			subscriptions.push(root, component)
			render(root, Vnode(component), redraw)
		}
	}

	return {mount: mount, redraw: redraw}
}


/***/ }),

/***/ 6819:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(6604)
var m = __webpack_require__(4941)
var Promise = __webpack_require__(8150)

var buildPathname = __webpack_require__(2953)
var parsePathname = __webpack_require__(3724)
var compileTemplate = __webpack_require__(2809)
var assign = __webpack_require__(9211)
var censor = __webpack_require__(2967)

var sentinel = {}

function decodeURIComponentSave(component) {
	try {
		return decodeURIComponent(component)
	} catch(e) {
		return component
	}
}

module.exports = function($window, mountRedraw) {
	var callAsync = $window == null
		// In case Mithril.js' loaded globally without the DOM, let's not break
		? null
		: typeof $window.setImmediate === "function" ? $window.setImmediate : $window.setTimeout
	var p = Promise.resolve()

	var scheduled = false

	// state === 0: init
	// state === 1: scheduled
	// state === 2: done
	var ready = false
	var state = 0

	var compiled, fallbackRoute

	var currentResolver = sentinel, component, attrs, currentPath, lastUpdate

	var RouterRoot = {
		onbeforeupdate: function() {
			state = state ? 2 : 1
			return !(!state || sentinel === currentResolver)
		},
		onremove: function() {
			$window.removeEventListener("popstate", fireAsync, false)
			$window.removeEventListener("hashchange", resolveRoute, false)
		},
		view: function() {
			if (!state || sentinel === currentResolver) return
			// Wrap in a fragment to preserve existing key semantics
			var vnode = [Vnode(component, attrs.key, attrs)]
			if (currentResolver) vnode = currentResolver.render(vnode[0])
			return vnode
		},
	}

	var SKIP = route.SKIP = {}

	function resolveRoute() {
		scheduled = false
		// Consider the pathname holistically. The prefix might even be invalid,
		// but that's not our problem.
		var prefix = $window.location.hash
		if (route.prefix[0] !== "#") {
			prefix = $window.location.search + prefix
			if (route.prefix[0] !== "?") {
				prefix = $window.location.pathname + prefix
				if (prefix[0] !== "/") prefix = "/" + prefix
			}
		}
		// This seemingly useless `.concat()` speeds up the tests quite a bit,
		// since the representation is consistently a relatively poorly
		// optimized cons string.
		var path = prefix.concat()
			.replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponentSave)
			.slice(route.prefix.length)
		var data = parsePathname(path)

		assign(data.params, $window.history.state)

		function reject(e) {
			console.error(e)
			setPath(fallbackRoute, null, {replace: true})
		}

		loop(0)
		function loop(i) {
			// state === 0: init
			// state === 1: scheduled
			// state === 2: done
			for (; i < compiled.length; i++) {
				if (compiled[i].check(data)) {
					var payload = compiled[i].component
					var matchedRoute = compiled[i].route
					var localComp = payload
					var update = lastUpdate = function(comp) {
						if (update !== lastUpdate) return
						if (comp === SKIP) return loop(i + 1)
						component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
						attrs = data.params, currentPath = path, lastUpdate = null
						currentResolver = payload.render ? payload : null
						if (state === 2) mountRedraw.redraw()
						else {
							state = 2
							mountRedraw.redraw.sync()
						}
					}
					// There's no understating how much I *wish* I could
					// use `async`/`await` here...
					if (payload.view || typeof payload === "function") {
						payload = {}
						update(localComp)
					}
					else if (payload.onmatch) {
						p.then(function () {
							return payload.onmatch(data.params, path, matchedRoute)
						}).then(update, path === fallbackRoute ? null : reject)
					}
					else update("div")
					return
				}
			}

			if (path === fallbackRoute) {
				throw new Error("Could not resolve default route " + fallbackRoute + ".")
			}
			setPath(fallbackRoute, null, {replace: true})
		}
	}

	// Set it unconditionally so `m.route.set` and `m.route.Link` both work,
	// even if neither `pushState` nor `hashchange` are supported. It's
	// cleared if `hashchange` is used, since that makes it automatically
	// async.
	function fireAsync() {
		if (!scheduled) {
			scheduled = true
			// TODO: just do `mountRedraw.redraw()` here and elide the timer
			// dependency. Note that this will muck with tests a *lot*, so it's
			// not as easy of a change as it sounds.
			callAsync(resolveRoute)
		}
	}

	function setPath(path, data, options) {
		path = buildPathname(path, data)
		if (ready) {
			fireAsync()
			var state = options ? options.state : null
			var title = options ? options.title : null
			if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path)
			else $window.history.pushState(state, title, route.prefix + path)
		}
		else {
			$window.location.href = route.prefix + path
		}
	}

	function route(root, defaultRoute, routes) {
		if (!root) throw new TypeError("DOM element being rendered to does not exist.")

		compiled = Object.keys(routes).map(function(route) {
			if (route[0] !== "/") throw new SyntaxError("Routes must start with a '/'.")
			if ((/:([^\/\.-]+)(\.{3})?:/).test(route)) {
				throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.")
			}
			return {
				route: route,
				component: routes[route],
				check: compileTemplate(route),
			}
		})
		fallbackRoute = defaultRoute
		if (defaultRoute != null) {
			var defaultData = parsePathname(defaultRoute)

			if (!compiled.some(function (i) { return i.check(defaultData) })) {
				throw new ReferenceError("Default route doesn't match any known routes.")
			}
		}

		if (typeof $window.history.pushState === "function") {
			$window.addEventListener("popstate", fireAsync, false)
		} else if (route.prefix[0] === "#") {
			$window.addEventListener("hashchange", resolveRoute, false)
		}

		ready = true
		mountRedraw.mount(root, RouterRoot)
		resolveRoute()
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = "#!"
	route.Link = {
		view: function(vnode) {
			// Omit the used parameters from the rendered element - they are
			// internal. Also, censor the various lifecycle methods.
			//
			// We don't strip the other parameters because for convenience we
			// let them be specified in the selector as well.
			var child = m(
				vnode.attrs.selector || "a",
				censor(vnode.attrs, ["options", "params", "selector", "onclick"]),
				vnode.children
			)
			var options, onclick, href

			// Let's provide a *right* way to disable a route link, rather than
			// letting people screw up accessibility on accident.
			//
			// The attribute is coerced so users don't get surprised over
			// `disabled: 0` resulting in a button that's somehow routable
			// despite being visibly disabled.
			if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
				child.attrs.href = null
				child.attrs["aria-disabled"] = "true"
				// If you *really* do want add `onclick` on a disabled link, use
				// an `oncreate` hook to add it.
			} else {
				options = vnode.attrs.options
				onclick = vnode.attrs.onclick
				// Easier to build it now to keep it isomorphic.
				href = buildPathname(child.attrs.href, vnode.attrs.params)
				child.attrs.href = route.prefix + href
				child.attrs.onclick = function(e) {
					var result
					if (typeof onclick === "function") {
						result = onclick.call(e.currentTarget, e)
					} else if (onclick == null || typeof onclick !== "object") {
						// do nothing
					} else if (typeof onclick.handleEvent === "function") {
						onclick.handleEvent(e)
					}

					// Adapted from React Router's implementation:
					// https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
					//
					// Try to be flexible and intuitive in how we handle links.
					// Fun fact: links aren't as obvious to get right as you
					// would expect. There's a lot more valid ways to click a
					// link than this, and one might want to not simply click a
					// link, but right click or command-click it to copy the
					// link target, etc. Nope, this isn't just for blind people.
					if (
						// Skip if `onclick` prevented default
						result !== false && !e.defaultPrevented &&
						// Ignore everything but left clicks
						(e.button === 0 || e.which === 0 || e.which === 1) &&
						// Let the browser handle `target=_blank`, etc.
						(!e.currentTarget.target || e.currentTarget.target === "_self") &&
						// No modifier keys
						!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
					) {
						e.preventDefault()
						e.redraw = false
						route.set(href, null, options)
					}
				}
			}
			return child
		},
	}
	route.param = function(key) {
		return attrs && key != null ? attrs[key] : attrs
	}

	return route
}


/***/ }),

/***/ 7283:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hyperscript = __webpack_require__(4941)

hyperscript.trust = __webpack_require__(4084)
hyperscript.fragment = __webpack_require__(9329)

module.exports = hyperscript


/***/ }),

/***/ 9402:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var hyperscript = __webpack_require__(7283)
var request = __webpack_require__(6440)
var mountRedraw = __webpack_require__(8535)

var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
m.Fragment = "["
m.mount = mountRedraw.mount
m.route = __webpack_require__(816)
m.render = __webpack_require__(177)
m.redraw = mountRedraw.redraw
m.request = request.request
m.jsonp = request.jsonp
m.parseQueryString = __webpack_require__(1761)
m.buildQueryString = __webpack_require__(2460)
m.parsePathname = __webpack_require__(3724)
m.buildPathname = __webpack_require__(2953)
m.vnode = __webpack_require__(6604)
m.PromisePolyfill = __webpack_require__(738)
m.censor = __webpack_require__(2967)

module.exports = m


/***/ }),

/***/ 8535:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var render = __webpack_require__(177)

module.exports = __webpack_require__(3386)(render, typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : null, typeof console !== "undefined" ? console : null)


/***/ }),

/***/ 2953:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var buildQueryString = __webpack_require__(2460)
var assign = __webpack_require__(9211)

// Returns `path` from `template` + `params`
module.exports = function(template, params) {
	if ((/:([^\/\.-]+)(\.{3})?:/).test(template)) {
		throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.")
	}
	if (params == null) return template
	var queryIndex = template.indexOf("?")
	var hashIndex = template.indexOf("#")
	var queryEnd = hashIndex < 0 ? template.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = template.slice(0, pathEnd)
	var query = {}

	assign(query, params)

	var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
		delete query[key]
		// If no such parameter exists, don't interpolate it.
		if (params[key] == null) return m
		// Escape normal parameters, but not variadic ones.
		return variadic ? params[key] : encodeURIComponent(String(params[key]))
	})

	// In case the template substitution adds new query/hash parameters.
	var newQueryIndex = resolved.indexOf("?")
	var newHashIndex = resolved.indexOf("#")
	var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex
	var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex
	var result = resolved.slice(0, newPathEnd)

	if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd)
	if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd)
	var querystring = buildQueryString(query)
	if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring
	if (hashIndex >= 0) result += template.slice(hashIndex)
	if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex)
	return result
}


/***/ }),

/***/ 2809:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var parsePathname = __webpack_require__(3724)

// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
	var templateData = parsePathname(template)
	var templateKeys = Object.keys(templateData.params)
	var keys = []
	var regexp = new RegExp("^" + templateData.path.replace(
		// I escape literal text so people can use things like `:file.:ext` or
		// `:lang-:locale` in routes. This is all merged into one pass so I
		// don't also accidentally escape `-` and make it harder to detect it to
		// ban it from template parameters.
		/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
		function(m, key, extra) {
			if (key == null) return "\\" + m
			keys.push({k: key, r: extra === "..."})
			if (extra === "...") return "(.*)"
			if (extra === ".") return "([^/]+)\\."
			return "([^/]+)" + (extra || "")
		}
	) + "$")
	return function(data) {
		// First, check the params. Usually, there isn't any, and it's just
		// checking a static set.
		for (var i = 0; i < templateKeys.length; i++) {
			if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false
		}
		// If no interpolations exist, let's skip all the ceremony
		if (!keys.length) return regexp.test(data.path)
		var values = regexp.exec(data.path)
		if (values == null) return false
		for (var i = 0; i < keys.length; i++) {
			data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1])
		}
		return true
	}
}


/***/ }),

/***/ 3724:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var parseQueryString = __webpack_require__(1761)

// Returns `{path, params}` from `url`
module.exports = function(url) {
	var queryIndex = url.indexOf("?")
	var hashIndex = url.indexOf("#")
	var queryEnd = hashIndex < 0 ? url.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/")

	if (!path) path = "/"
	else {
		if (path[0] !== "/") path = "/" + path
		if (path.length > 1 && path[path.length - 1] === "/") path = path.slice(0, -1)
	}
	return {
		path: path,
		params: queryIndex < 0
			? {}
			: parseQueryString(url.slice(queryIndex + 1, queryEnd)),
	}
}


/***/ }),

/***/ 738:
/***/ ((module) => {

"use strict";

/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with 'new'.")
	if (typeof executor !== "function") throw new TypeError("executor must be a function.")

	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved with itself.")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}

	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.prototype.finally = function(callback) {
	return this.then(
		function(value) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return value
			})
		},
		function(reason) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return PromisePolyfill.reject(reason);
			})
		}
	)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}

module.exports = PromisePolyfill


/***/ }),

/***/ 8150:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* global window */


var PromisePolyfill = __webpack_require__(738)

if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") {
		window.Promise = PromisePolyfill
	} else if (!window.Promise.prototype.finally) {
		window.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = window.Promise
} else if (typeof __webpack_require__.g !== "undefined") {
	if (typeof __webpack_require__.g.Promise === "undefined") {
		__webpack_require__.g.Promise = PromisePolyfill
	} else if (!__webpack_require__.g.Promise.prototype.finally) {
		__webpack_require__.g.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	module.exports = __webpack_require__.g.Promise
} else {
	module.exports = PromisePolyfill
}


/***/ }),

/***/ 2460:
/***/ ((module) => {

"use strict";


module.exports = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""

	var args = []
	for (var key in object) {
		destructure(key, object[key])
	}

	return args.join("&")

	function destructure(key, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}


/***/ }),

/***/ 1761:
/***/ ((module) => {

"use strict";


function decodeURIComponentSave(str) {
	try {
		return decodeURIComponent(str)
	} catch(err) {
		return str
	}
}

module.exports = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)

	var entries = string.split("&"), counters = {}, data = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key = decodeURIComponentSave(entry[0])
		var value = entry.length === 2 ? decodeURIComponentSave(entry[1]) : ""

		if (value === "true") value = true
		else if (value === "false") value = false

		var levels = key.split(/\]\[?|\[/)
		var cursor = data
		if (key.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			if (level === "") {
				var key = levels.slice(0, j).join()
				if (counters[key] == null) {
					counters[key] = Array.isArray(cursor) ? cursor.length : 0
				}
				level = counters[key]++
			}
			// Disallow direct prototype pollution
			else if (level === "__proto__") break
			if (j === levels.length - 1) cursor[level] = value
			else {
				// Read own properties exclusively to disallow indirect
				// prototype pollution
				var desc = Object.getOwnPropertyDescriptor(cursor, level)
				if (desc != null) desc = desc.value
				if (desc == null) cursor[level] = desc = isNumber ? [] : {}
				cursor = desc
			}
		}
	}
	return data
}


/***/ }),

/***/ 177:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(3377)(typeof window !== "undefined" ? window : null)


/***/ }),

/***/ 9329:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(6604)
var hyperscriptVnode = __webpack_require__(7357)

module.exports = function() {
	var vnode = hyperscriptVnode.apply(0, arguments)

	vnode.tag = "["
	vnode.children = Vnode.normalizeChildren(vnode.children)
	return vnode
}


/***/ }),

/***/ 4941:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(6604)
var hyperscriptVnode = __webpack_require__(7357)
var hasOwn = __webpack_require__(3368)

var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}

function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}

function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}

function execSelector(state, vnode) {
	var attrs = vnode.attrs
	var hasClass = hasOwn.call(attrs, "class")
	var className = hasClass ? attrs.class : attrs.className

	vnode.tag = state.tag
	vnode.attrs = {}

	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}

		for (var key in attrs) {
			if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key]
		}

		attrs = newAttrs
	}

	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)){
			attrs[key] = state.attrs[key]
		}
	}
	if (className != null || state.attrs.className != null) attrs.className =
		className != null
			? state.attrs.className != null
				? String(state.attrs.className) + " " + String(className)
				: className
			: state.attrs.className != null
				? state.attrs.className
				: null

	if (hasClass) attrs.class = null

	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			vnode.attrs = attrs
			break
		}
	}

	return vnode
}

function hyperscript(selector) {
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}

	var vnode = hyperscriptVnode.apply(1, arguments)

	if (typeof selector === "string") {
		vnode.children = Vnode.normalizeChildren(vnode.children)
		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)
	}

	vnode.tag = selector
	return vnode
}

module.exports = hyperscript


/***/ }),

/***/ 7357:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(6604)

// Call via `hyperscriptVnode.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript` and `fragment` factories and define this as
// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril.js requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// module.exports = function(attrs, ...children) {
//     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
//     } else {
//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
//         attrs = undefined
//     }
//
//     if (attrs == null) attrs = {}
//     return Vnode("", attrs.key, attrs, children)
// }
module.exports = function() {
	var attrs = arguments[this], start = this + 1, children

	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = this
	}

	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}

	return Vnode("", attrs.key, attrs, children)
}


/***/ }),

/***/ 3377:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(6604)

module.exports = function($window) {
	var $doc = $window && $window.document
	var currentRedraw

	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}

	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}

	//sanity check to discourage people from doing `vnode.state = ...`
	function checkState(vnode, original) {
		if (vnode.state !== original) throw new Error("'vnode.state' must not be modified.")
	}

	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode` is the first argument in
	//all lifecycle methods.
	function callHook(vnode) {
		var original = vnode.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode, original)
		}
	}

	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
	// inside an iframe. Catch and swallow this error, and heavy-handidly return null.
	function activeElement() {
		try {
			return $doc.activeElement
		} catch (e) {
			return null
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": createText(parent, vnode, nextSibling); break
				case "<": createHTML(parent, vnode, ns, nextSibling); break
				case "[": createFragment(parent, vnode, hooks, ns, nextSibling); break
				default: createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
	}
	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}
	function createHTML(parent, vnode, ns, nextSibling) {
		var match = vnode.children.match(/^\s*?<(\w+)/im) || []
		// not using the proper parent makes the child element(s) vanish.
		//     var div = document.createElement("div")
		//     div.innerHTML = "<td>i</td><td>j</td>"
		//     console.log(div.innerHTML)
		// --> "ij", no <td> in sight.
		var temp = $doc.createElement(possibleParents[match[1]] || "div")
		if (ns === "http://www.w3.org/2000/svg") {
			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode.children + "</svg>"
			temp = temp.firstChild
		} else {
			temp.innerHTML = vnode.children
		}
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		// Capture nodes to remove, so we don't confuse them.
		vnode.instance = []
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			vnode.instance.push(child)
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs = vnode.attrs
		var is = attrs && attrs.is

		ns = getNameSpace(vnode) || ns

		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element

		if (attrs != null) {
			setAttrs(vnode, attrs, ns)
		}

		insertNode(parent, element, nextSibling)

		if (!maybeSetContentEditable(vnode)) {
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs)
			}
		}
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		initLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
		}
		else {
			vnode.domSize = 0
		}
	}

	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. discuss DOM node operations.

	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed based on the first non-null node
	//   of each list.
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.

	// ## Diffing
	//
	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
	// may be good for context on longest increasing subsequence-based logic for moving nodes.
	//
	// In order to diff keyed lists, one has to
	//
	// 1) match nodes in both lists, per key, and update them accordingly
	// 2) create the nodes present in the new list, but absent in the old one
	// 3) remove the nodes present in the old list, but absent in the new one
	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
	//
	// To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
	// over the new list and for each new vnode, find the corresponding vnode in the old list using
	// the map.
	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
	// and must be created.
	// For the removals, we actually remove the nodes that have been updated from the old list.
	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
	// algorithm.
	//
	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
	//  match the above lists, for example).
	//
	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
	//
	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
	// the longest increasing subsequence *of old nodes still present in the new list*).
	//
	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
	// the `LIS` and a temporary one to create the LIS).
	//
	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
	// the LIS and can be updated without moving them.
	//
	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
	// the exception of the last node if the list is fully reversed).
	//
	// ## Finding the next sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index, the DOM nodes up to the previous
	// vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next sibling (cached in the `nextSibling` variable).


	// ## DOM node moves
	//
	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo). We move
	// the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
	// variable rather than fetching it using `getNextSibling()`.
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.

	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length)
		else {
			var isOldKeyed = old[0] != null && old[0].key != null
			var isKeyed = vnodes[0] != null && vnodes[0].key != null
			var start = 0, oldStart = 0
			if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++
			if (!isKeyed) while (start < vnodes.length && vnodes[start] == null) start++
			if (isOldKeyed !== isKeyed) {
				removeNodes(parent, old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed) {
				// Don't index past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(parent, o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(parent, old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling

				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o.key !== v.key) break
					oldStart++, start++
					if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (start === end) break
					if (o.key !== ve.key || oe.key !== v.key) break
					topSibling = getNextSibling(old, oldStart, nextSibling)
					moveNodes(parent, oe, topSibling)
					if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
					if (++start <= --end) moveNodes(parent, o, nextSibling)
					if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldStart++; oldEnd--
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						var oldIndex = map[ve.key]
						if (oldIndex != null) {
							pos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered
							oldIndices[i-start] = oldIndex
							oe = old[oldIndex]
							old[oldIndex] = null
							if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
							if (ve.dom != null) nextSibling = ve.dom
							matched++
						}
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1)
					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
					else {
						if (pos === -1) {
							// the indices of the indices of the items that are part of the
							// longest increasing subsequence in the oldIndices list
							lisIndices = makeLisIndices(oldIndices)
							li = lisIndices.length - 1
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								else {
									if (lisIndices[li] === i - start) li--
									else moveNodes(parent, v, nextSibling)
								}
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						} else {
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						}
					}
				}
			}
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode.events = old.events
			if (shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, ns, nextSibling); break
					case "[": updateFragment(parent, old, vnode, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, ns)
		}
		else {
			removeNode(parent, old)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, ns, nextSibling) {
		if (old.children !== vnode.children) {
			removeHTML(parent, old)
			createHTML(parent, vnode, ns, nextSibling)
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
		}
	}
	function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns

		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (!maybeSetContentEditable(vnode)) {
			updateNodes(element, old.children, vnode.children, hooks, null, ns)
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
		vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		updateLifecycle(vnode.state, vnode, hooks)
		if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(parent, old.instance)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function getKeyMap(vnodes, start, end) {
		var map = Object.create(null)
		for (; start < end; start++) {
			var vnode = vnodes[start]
			if (vnode != null) {
				var key = vnode.key
				if (key != null) map[key] = start
			}
		}
		return map
	}
	// Lifted from ivi https://github.com/ivijs/ivi/
	// takes a list of unique numbers (-1 is special and can
	// occur multiple times) and returns an array with the indices
	// of the items that are part of the longest increasing
	// subsequence
	var lisTemp = []
	function makeLisIndices(a) {
		var result = [0]
		var u = 0, v = 0, i = 0
		var il = lisTemp.length = a.length
		for (var i = 0; i < il; i++) lisTemp[i] = a[i]
		for (var i = 0; i < il; ++i) {
			if (a[i] === -1) continue
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				lisTemp[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				// Fast integer average without overflow.
				// eslint-disable-next-line no-bitwise
				var c = (u >>> 1) + (v >>> 1) + (u & v & 1)
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) lisTemp[i] = result[u - 1]
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = lisTemp[v]
		}
		lisTemp.length = 0
		return result
	}

	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}

	// This covers a really specific edge case:
	// - Parent node is keyed and contains child
	// - Child is removed, returns unresolved promise in `onbeforeremove`
	// - Parent node is moved in keyed diff
	// - Remaining children still need moved appropriately
	//
	// Ideally, I'd track removed nodes as well, but that introduces a lot more
	// complexity and I'm not exactly interested in doing that.
	function moveNodes(parent, vnode, nextSibling) {
		var frag = $doc.createDocumentFragment()
		moveChildToFrag(parent, frag, vnode)
		insertNode(parent, frag, nextSibling)
	}
	function moveChildToFrag(parent, frag, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				for (var i = 0; i < vnode.instance.length; i++) {
					frag.appendChild(vnode.instance[i])
				}
			} else if (vnode.tag !== "[") {
				// Don't recurse for text nodes *or* elements, just fragments
				frag.appendChild(vnode.dom)
			} else if (vnode.children.length === 1) {
				vnode = vnode.children[0]
				if (vnode != null) continue
			} else {
				for (var i = 0; i < vnode.children.length; i++) {
					var child = vnode.children[i]
					if (child != null) moveChildToFrag(parent, frag, child)
				}
			}
			break
		}
	}

	function insertNode(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}

	function maybeSetContentEditable(vnode) {
		if (vnode.attrs == null || (
			vnode.attrs.contenteditable == null && // attribute
			vnode.attrs.contentEditable == null // property
		)) return false
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted.")
		return true
	}

	//remove
	function removeNodes(parent, vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) removeNode(parent, vnode)
		}
	}
	function removeNode(parent, vnode) {
		var mask = 0
		var original = vnode.state
		var stateResult, attrsResult
		if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
			var result = callHook.call(vnode.state.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				mask = 1
				stateResult = result
			}
		}
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = callHook.call(vnode.attrs.onbeforeremove, vnode)
			if (result != null && typeof result.then === "function") {
				// eslint-disable-next-line no-bitwise
				mask |= 2
				attrsResult = result
			}
		}
		checkState(vnode, original)

		// If we can, try to fast-path it and avoid all the overhead of awaiting
		if (!mask) {
			onremove(vnode)
			removeChild(parent, vnode)
		} else {
			if (stateResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 1) { mask &= 2; if (!mask) reallyRemove() }
				}
				stateResult.then(next, next)
			}
			if (attrsResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 2) { mask &= 1; if (!mask) reallyRemove() }
				}
				attrsResult.then(next, next)
			}
		}

		function reallyRemove() {
			checkState(vnode, original)
			onremove(vnode)
			removeChild(parent, vnode)
		}
	}
	function removeHTML(parent, vnode) {
		for (var i = 0; i < vnode.instance.length; i++) {
			parent.removeChild(vnode.instance[i])
		}
	}
	function removeChild(parent, vnode) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode.dom != null && vnode.dom.parentNode === parent) {
			if (typeof vnode.tag !== "string") {
				vnode = vnode.instance
				if (vnode != null) continue
			} else if (vnode.tag === "<") {
				removeHTML(parent, vnode)
			} else {
				if (vnode.tag !== "[") {
					parent.removeChild(vnode.dom)
					if (!Array.isArray(vnode.children)) break
				}
				if (vnode.children.length === 1) {
					vnode = vnode.children[0]
					if (vnode != null) continue
				} else {
					for (var i = 0; i < vnode.children.length; i++) {
						var child = vnode.children[i]
						if (child != null) removeChild(parent, child)
					}
				}
			}
			break
		}
	}
	function onremove(vnode) {
		if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode)
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode)
		if (typeof vnode.tag !== "string") {
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}

	//attrs
	function setAttrs(vnode, attrs, ns) {
		// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
		//
		// Also, the DOM does things to inputs based on the value, so it needs set first.
		// See: https://github.com/MithrilJS/mithril.js/issues/2622
		if (vnode.tag === "input" && attrs.type != null) vnode.dom.setAttribute("type", attrs.type)
		var isFileInput = attrs != null && vnode.tag === "input" && attrs.type === "file"
		for (var key in attrs) {
			setAttr(vnode, key, null, attrs[key], ns, isFileInput)
		}
	}
	function setAttr(vnode, key, old, value, ns, isFileInput) {
		if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode, key)) && typeof value !== "object" || key === "type" && vnode.tag === "input") return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value)
		if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value)
		else if (key === "style") updateStyle(vnode.dom, old, value)
		else if (hasPropertyKey(vnode, key, ns)) {
			if (key === "value") {
				// Only do the coercion if we're actually going to check the value.
				/* eslint-disable no-implicit-coercion */
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				//setting input[type=file][value] to same value causes an error to be generated if it's non-empty
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && (isFileInput || vnode.dom === activeElement())) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return
				//setting input[type=file][value] to different value is an error if it's non-empty
				// Not ideal, but it at least works around the most common source of uncaught exceptions for now.
				if (isFileInput && "" + value !== "") { console.error("`value` is read-only on file inputs!"); return }
				/* eslint-enable no-implicit-coercion */
			}
			vnode.dom[key] = value
		} else {
			if (typeof value === "boolean") {
				if (value) vnode.dom.setAttribute(key, "")
				else vnode.dom.removeAttribute(key)
			}
			else vnode.dom.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function removeAttr(vnode, key, old, ns) {
		if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n") updateEvent(vnode, key, undefined)
		else if (key === "style") updateStyle(vnode.dom, old, null)
		else if (
			hasPropertyKey(vnode, key, ns)
			&& key !== "className"
			&& key !== "title" // creates "null" as title
			&& !(key === "value" && (
				vnode.tag === "option"
				|| vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement()
			))
			&& !(vnode.tag === "input" && key === "type")
		) {
			vnode.dom[key] = null
		} else {
			var nsLastIndex = key.indexOf(":")
			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)
			if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key)
		}
	}
	function setLateSelectAttrs(vnode, attrs) {
		if ("value" in attrs) {
			if(attrs.value === null) {
				if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null
			} else {
				var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
				if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) {
					vnode.dom.value = normalized
				}
			}
		}
		if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined)
	}
	function updateAttrs(vnode, old, attrs, ns) {
		if (old && old === attrs) {
			console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major")
		}
		if (attrs != null) {
			// If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
			//
			// Also, the DOM does things to inputs based on the value, so it needs set first.
			// See: https://github.com/MithrilJS/mithril.js/issues/2622
			if (vnode.tag === "input" && attrs.type != null) vnode.dom.setAttribute("type", attrs.type)
			var isFileInput = vnode.tag === "input" && attrs.type === "file"
			for (var key in attrs) {
				setAttr(vnode, key, old && old[key], attrs[key], ns, isFileInput)
			}
		}
		var val
		if (old != null) {
			for (var key in old) {
				if (((val = old[key]) != null) && (attrs == null || attrs[key] == null)) {
					removeAttr(vnode, key, val, ns)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function hasPropertyKey(vnode, key, ns) {
		// Filter out namespaced keys
		return ns === undefined && (
			// If it's a custom element, just keep it.
			vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is ||
			// If it's a normal element, let's try to avoid a few browser bugs.
			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
			// Defer the property check until *after* we check everything.
		) && key in vnode.dom
	}

	//style
	var uppercaseRegex = /[A-Z]/g
	function toLowerCase(capital) { return "-" + capital.toLowerCase() }
	function normalizeKey(key) {
		return key[0] === "-" && key[1] === "-" ? key :
			key === "cssFloat" ? "float" :
				key.replace(uppercaseRegex, toLowerCase)
	}
	function updateStyle(element, old, style) {
		if (old === style) {
			// Styles are equivalent, do nothing.
		} else if (style == null) {
			// New style is missing, just clear it.
			element.style.cssText = ""
		} else if (typeof style !== "object") {
			// New style is a string, let engine deal with patching.
			element.style.cssText = style
		} else if (old == null || typeof old !== "object") {
			// `old` is missing or a string, `style` is an object.
			element.style.cssText = ""
			// Add new style properties
			for (var key in style) {
				var value = style[key]
				if (value != null) element.style.setProperty(normalizeKey(key), String(value))
			}
		} else {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key in style) {
				var value = style[key]
				if (value != null && (value = String(value)) !== String(old[key])) {
					element.style.setProperty(normalizeKey(key), value)
				}
			}
			// Remove style properties that no longer exist
			for (var key in old) {
				if (old[key] != null && style[key] == null) {
					element.style.removeProperty(normalizeKey(key))
				}
			}
		}
	}

	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {
		// Save this, so the current redraw is correctly tracked.
		this._ = currentRedraw
	}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler = this["on" + ev.type]
		var result
		if (typeof handler === "function") result = handler.call(ev.currentTarget, ev)
		else if (typeof handler.handleEvent === "function") handler.handleEvent(ev)
		if (this._ && ev.redraw !== false) (0, this._)()
		if (result === false) {
			ev.preventDefault()
			ev.stopPropagation()
		}
	}

	//event
	function updateEvent(vnode, key, value) {
		if (vnode.events != null) {
			vnode.events._ = currentRedraw
			if (vnode.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = value
			} else {
				if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false)
				vnode.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode.events = new EventDict()
			vnode.dom.addEventListener(key.slice(2), vnode.events, false)
			vnode.events[key] = value
		}
	}

	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		do {
			if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
				var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
				var force = callHook.call(vnode.state.onbeforeupdate, vnode, old)
				if (force !== undefined && !force) break
			}
			return false
		} while (false); // eslint-disable-line no-constant-condition
		vnode.dom = old.dom
		vnode.domSize = old.domSize
		vnode.instance = old.instance
		// One would think having the actual latest attributes would be ideal,
		// but it doesn't let us properly diff based on our current internal
		// representation. We have to save not only the old DOM info, but also
		// the attributes used to create it, as we diff *that*, not against the
		// DOM directly (with a few exceptions in `setAttr`). And, of course, we
		// need to save the children and text as they are conceptually not
		// unlike special "attributes" internally.
		vnode.attrs = old.attrs
		vnode.children = old.children
		vnode.text = old.text
		return true
	}

	var currentDOM

	return function(dom, vnodes, redraw) {
		if (!dom) throw new TypeError("DOM element being rendered to does not exist.")
		if (currentDOM != null && dom.contains(currentDOM)) {
			throw new TypeError("Node is currently being rendered to and thus is locked.")
		}
		var prevRedraw = currentRedraw
		var prevDOM = currentDOM
		var hooks = []
		var active = activeElement()
		var namespace = dom.namespaceURI

		currentDOM = dom
		currentRedraw = typeof redraw === "function" ? redraw : undefined
		try {
			// First time rendering into a node clears it out
			if (dom.vnodes == null) dom.textContent = ""
			vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
			updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
			dom.vnodes = vnodes
			// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
			if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus()
			for (var i = 0; i < hooks.length; i++) hooks[i]()
		} finally {
			currentRedraw = prevRedraw
			currentDOM = prevDOM
		}
	}
}


/***/ }),

/***/ 4084:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Vnode = __webpack_require__(6604)

module.exports = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}


/***/ }),

/***/ 6604:
/***/ ((module) => {

"use strict";


function Vnode(tag, key, attrs, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs, children: children, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node == null || typeof node === "boolean") return null
	if (typeof node === "object") return node
	return Vnode("#", undefined, undefined, String(node), undefined, undefined)
}
Vnode.normalizeChildren = function(input) {
	var children = []
	if (input.length) {
		var isKeyed = input[0] != null && input[0].key != null
		// Note: this is a *very* perf-sensitive check.
		// Fun fact: merging the loop like this is somehow faster than splitting
		// it, noticeably so.
		for (var i = 1; i < input.length; i++) {
			if ((input[i] != null && input[i].key != null) !== isKeyed) {
				throw new TypeError(
					isKeyed && (input[i] != null || typeof input[i] === "boolean")
						? "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole."
						: "In fragments, vnodes must either all have keys or none have keys."
				)
			}
		}
		for (var i = 0; i < input.length; i++) {
			children[i] = Vnode.normalize(input[i])
		}
	}
	return children
}

module.exports = Vnode


/***/ }),

/***/ 6440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var PromisePolyfill = __webpack_require__(8150)
var mountRedraw = __webpack_require__(8535)

module.exports = __webpack_require__(8370)(typeof window !== "undefined" ? window : null, PromisePolyfill, mountRedraw.redraw)


/***/ }),

/***/ 8370:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var buildPathname = __webpack_require__(2953)
var hasOwn = __webpack_require__(3368)

module.exports = function($window, Promise, oncompletion) {
	var callbackCount = 0

	function PromiseProxy(executor) {
		return new Promise(executor)
	}

	// In case the global Promise is some userland library's where they rely on
	// `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
	// similar. Let's *not* break them.
	PromiseProxy.prototype = Promise.prototype
	PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto

	function makeRequest(factory) {
		return function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise = new Promise(function(resolve, reject) {
				factory(buildPathname(url, args.params), args, function (data) {
					if (typeof args.type === "function") {
						if (Array.isArray(data)) {
							for (var i = 0; i < data.length; i++) {
								data[i] = new args.type(data[i])
							}
						}
						else data = new args.type(data)
					}
					resolve(data)
				}, reject)
			})
			if (args.background === true) return promise
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}

			return wrap(promise)

			function wrap(promise) {
				var then = promise.then
				// Set the constructor, so engines know to not await or resolve
				// this as a native promise. At the time of writing, this is
				// only necessary for V8, but their behavior is the correct
				// behavior per spec. See this spec issue for more details:
				// https://github.com/tc39/ecma262/issues/1577. Also, see the
				// corresponding comment in `request/tests/test-request.js` for
				// a bit more background on the issue at hand.
				promise.constructor = PromiseProxy
				promise.then = function() {
					count++
					var next = then.apply(promise, arguments)
					next.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next)
				}
				return promise
			}
		}
	}

	function hasHeader(args, name) {
		for (var key in args.headers) {
			if (hasOwn.call(args.headers, key) && key.toLowerCase() === name) return true
		}
		return false
	}

	return {
		request: makeRequest(function(url, args, resolve, reject) {
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var body = args.body
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData || body instanceof $window.URLSearchParams)
			var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json")

			var xhr = new $window.XMLHttpRequest(), aborted = false, isTimeout = false
			var original = xhr, replacedAbort
			var abort = xhr.abort

			xhr.abort = function() {
				aborted = true
				abort.call(this)
			}

			xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)

			if (assumeJSON && body != null && !hasHeader(args, "content-type")) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, "accept")) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			xhr.responseType = responseType

			for (var key in args.headers) {
				if (hasOwn.call(args.headers, key)) {
					xhr.setRequestHeader(key, args.headers[key])
				}
			}

			xhr.onreadystatechange = function(ev) {
				// Don't throw errors on xhr.abort().
				if (aborted) return

				if (ev.target.readyState === 4) {
					try {
						var success = (ev.target.status >= 200 && ev.target.status < 300) || ev.target.status === 304 || (/^file:\/\//i).test(url)
						// When the response type isn't "" or "text",
						// `xhr.responseText` is the wrong thing to use.
						// Browsers do the right thing and throw here, and we
						// should honor that and do the right thing by
						// preferring `xhr.response` where possible/practical.
						var response = ev.target.response, message

						if (responseType === "json") {
							// For IE and Edge, which don't implement
							// `responseType: "json"`.
							if (!ev.target.responseType && typeof args.extract !== "function") {
								// Handle no-content which will not parse.
								try { response = JSON.parse(ev.target.responseText) }
								catch (e) { response = null }
							}
						} else if (!responseType || responseType === "text") {
							// Only use this default if it's text. If a parsed
							// document is needed on old IE and friends (all
							// unsupported), the user should use a custom
							// `config` instead. They're already using this at
							// their own risk.
							if (response == null) response = ev.target.responseText
						}

						if (typeof args.extract === "function") {
							response = args.extract(ev.target, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						}
						if (success) resolve(response)
						else {
							var completeErrorResponse = function() {
								try { message = ev.target.responseText }
								catch (e) { message = response }
								var error = new Error(message)
								error.code = ev.target.status
								error.response = response
								reject(error)
							}

							if (xhr.status === 0) {
								// Use setTimeout to push this code block onto the event queue
								// This allows `xhr.ontimeout` to run in the case that there is a timeout
								// Without this setTimeout, `xhr.ontimeout` doesn't have a chance to reject
								// as `xhr.onreadystatechange` will run before it
								setTimeout(function() {
									if (isTimeout) return
									completeErrorResponse()
								})
							} else completeErrorResponse()
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}

			xhr.ontimeout = function (ev) {
				isTimeout = true
				var error = new Error("Request timed out")
				error.code = ev.target.status
				reject(error)
			}

			if (typeof args.config === "function") {
				xhr = args.config(xhr, args, url) || xhr

				// Propagate the `abort` to any replacement XHR as well.
				if (xhr !== original) {
					replacedAbort = xhr.abort
					xhr.abort = function() {
						aborted = true
						replacedAbort.call(this)
					}
				}
			}

			if (body == null) xhr.send()
			else if (typeof args.serialize === "function") xhr.send(args.serialize(body))
			else if (body instanceof $window.FormData || body instanceof $window.URLSearchParams) xhr.send(body)
			else xhr.send(JSON.stringify(body))
		}),
		jsonp: makeRequest(function(url, args, resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				resolve(data)
			}
			script.onerror = function() {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
			}
			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
				encodeURIComponent(args.callbackKey || "callback") + "=" +
				encodeURIComponent(callbackName)
			$window.document.documentElement.appendChild(script)
		}),
	}
}


/***/ }),

/***/ 816:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var mountRedraw = __webpack_require__(8535)

module.exports = __webpack_require__(6819)(typeof window !== "undefined" ? window : null, mountRedraw)


/***/ }),

/***/ 9211:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// This exists so I'm only saving it once.


var hasOwn = __webpack_require__(3368)

module.exports = Object.assign || function(target, source) {
	for (var key in source) {
		if (hasOwn.call(source, key)) target[key] = source[key]
	}
}


/***/ }),

/***/ 2967:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// Note: this is mildly perf-sensitive.
//
// It does *not* use `delete` - dynamic `delete`s usually cause objects to bail
// out into dictionary mode and just generally cause a bunch of optimization
// issues within engines.
//
// Ideally, I would've preferred to do this, if it weren't for the optimization
// issues:
//
// ```js
// const hasOwn = require("./hasOwn")
// const magic = [
//     "key", "oninit", "oncreate", "onbeforeupdate", "onupdate",
//     "onbeforeremove", "onremove",
// ]
// module.exports = (attrs, extras) => {
//     const result = Object.assign(Object.create(null), attrs)
//     for (const key of magic) delete result[key]
//     if (extras != null) for (const key of extras) delete result[key]
//     return result
// }
// ```

var hasOwn = __webpack_require__(3368)
// Words in RegExp literals are sometimes mangled incorrectly by the internal bundler, so use RegExp().
var magic = new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$")

module.exports = function(attrs, extras) {
	var result = {}

	if (extras != null) {
		for (var key in attrs) {
			if (hasOwn.call(attrs, key) && !magic.test(key) && extras.indexOf(key) < 0) {
				result[key] = attrs[key]
			}
		}
	} else {
		for (var key in attrs) {
			if (hasOwn.call(attrs, key) && !magic.test(key)) {
				result[key] = attrs[key]
			}
		}
	}

	return result
}


/***/ }),

/***/ 3368:
/***/ ((module) => {

"use strict";
// This exists so I'm only saving it once.


module.exports = {}.hasOwnProperty


/***/ }),

/***/ 5174:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var mithril_1 = __importDefault(__webpack_require__(9402));
__webpack_require__(6099);
__webpack_require__(5277);
__webpack_require__(5503);
var routing_service_1 = __webpack_require__(2464);
var register_service_worker_1 = __webpack_require__(1472);
console.log(JSON.stringify({"NODE_ENV":"production","PUBLIC_URL":"https://tno.github.io/hei/"}));
(0, register_service_worker_1.registerServiceWorker)({
    onSuccess: function (registration) { return console.log('SW registered: ', registration); },
    onUpdate: function (registration) { return console.log('SW updated: ', registration); },
});
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then((registration) => {
//         console.log('SW registered: ', registration);
//       })
//       .catch((registrationError) => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }
mithril_1.default.route(document.body, routing_service_1.routingSvc.defaultRoute, routing_service_1.routingSvc.routingTable());


/***/ }),

/***/ 4057:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveImg = void 0;
var pharma_webp_1 = __importDefault(__webpack_require__(7330));
var nutrition_webp_1 = __importDefault(__webpack_require__(1972));
var beverage_webp_1 = __importDefault(__webpack_require__(3020));
var resolveImg = function (url, img) {
    return url === 'pharma' ? pharma_webp_1.default : url === 'nutrition' ? nutrition_webp_1.default : url === 'beverage' ? beverage_webp_1.default : img;
};
exports.resolveImg = resolveImg;


/***/ }),

/***/ 3084:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AboutPage = void 0;
var mithril_1 = __importDefault(__webpack_require__(9402));
var mithril_materialized_1 = __webpack_require__(6777);
var mithril_ui_form_1 = __webpack_require__(8332);
var models_1 = __webpack_require__(2301);
var md = function (highlight) {
    if (highlight === void 0) { highlight = false; }
    return "#### About\n\nThis website offers an overview of state-of-the-art interventions to enhance human performance. In order to use it, contact TNO to obtain the JSON database file describing all interventions.\n\n##### Disclaimer\n\n**This platform is intended for informational purposes only and it does not provide medical advice.** It is not a substitute for professional medical advice, diagnosis or treatment. The information, including but not limited to, text, graphics, images and other material contained on this website are for informational purposes only. No material on this site is intended to be a substitute for professional medical advice, diagnosis or treatment. The use and/or implementation of information presented on this platform is users own responsibility. TNO is not liable for the information which is offered on and/or via this platform.\n\n##### How to use this platform\n\n###### Ministry of Defence employee\n\n<p class=\"".concat(highlight ? 'red-text' : '', "\">In order to use this platform, you will need to upload a configuration file (JSON) on the home page. You can request the latest version of this configuration file by contacting the HCSE (Human Capability & Survivability Enhancement) program leader, [Olaf Binsch](mailto:olaf.binsch@tno.nl). Without this file, there will be no interventions displayed on the platform.</p>\n\nYou can use this platform to browse through the collection of intervention technologies on the overview page. You can use filters in the Advanced Search bar to specify what you are looking for in an intervention.\n\nBy selecting \u2018Compare\u2019, recognizable by the <i class=\"material-icons\">balance</i> icon, for different intervention technologies, you can view them alongside each other on the Compare page. Bookmarking an intervention allows you to find them more easily next time you visit the platform. If you have any questions about the HCSE interventions, you can contact the expert that is listed at the bottom of each intervention page.\n\n###### TNO researcher\n\nIf you are a TNO researcher and you want to contribute to the platform by adding or updating an HCSE intervention, you can change the Current user to TNO researcher. This allows you to add and change interventions using the button \"Add new intervention\". Remember that the changes will only be saved locally on your own PC. If you want to implement your changes in the master file, do the following:\n\n1. Make sure you have uploaded the latest configuration file from the HCSE sharepoint folder\n2. Implement you changes or additions to the platform\n3. Download your new configuration file (.json) and place this file in the HCSE sharepoint folder as the new master file. Make sure to move the previous version into the Archive folder.\n\n**HCSE program leader:** [Olaf Binsch](mailto:olaf.binsch@tno.nl)<br>**Email:** olaf.binsch@tno.nl \n");
};
var AboutPage = function () {
    return {
        oninit: function (_a) {
            var setPage = _a.attrs.actions.setPage;
            return setPage(models_1.Dashboards.ABOUT);
        },
        view: function (_a) {
            var _b = _a.attrs, _c = _b.state, curUser = _c.curUser, model = _c.model, saveCurUser = _b.actions.saveCurUser;
            var isCleared = !model || !model.interventions || model.interventions.length === 0;
            if (!curUser)
                saveCurUser('mod');
            return [
                (0, mithril_1.default)('.row', [
                    [
                        (0, mithril_1.default)(mithril_materialized_1.Select, {
                            key: curUser,
                            label: 'Current user',
                            initialValue: curUser,
                            placeholder: 'Select user',
                            options: [
                                { id: 'mod', label: 'Defence employee' },
                                { id: 'admin', label: 'TNO researcher' },
                            ],
                            // data: users.reduce((acc, cur) => {
                            //   acc[cur.name] = cur.url || null;
                            //   return acc;
                            // }, {} as Record<string, string | null>),
                            onchange: function (v) { return v && saveCurUser(v[0]); },
                            className: 'col s6',
                        }),
                    ],
                    // m(FlatButton, {
                    //   label: 'Logout',
                    //   onclick: () => saveCurUser(''),
                    //   iconName: 'logout',
                    //   className: 'col s6',
                    // }),
                ]),
                (0, mithril_1.default)('.row', mithril_1.default.trust((0, mithril_ui_form_1.render)(md(isCleared)))),
            ];
        },
    };
};
exports.AboutPage = AboutPage;


/***/ }),

/***/ 4846:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComparisonPage = void 0;
var mithril_1 = __importDefault(__webpack_require__(9402));
var models_1 = __webpack_require__(2301);
var mithril_materialized_1 = __webpack_require__(6777);
var utils_1 = __webpack_require__(2218);
var mithril_ui_form_1 = __webpack_require__(8332);
var ComparisonPage = function () {
    var ASPECT_COL_WIDTH = 100;
    var isInitialized = false;
    var interventionLookup = {};
    var autocompleteData = {};
    var pageWidth = 400;
    var toName = function (t) {
        return "".concat(t.intervention, ": ").concat((0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, t.mainCap, false));
    };
    var initialize = function (model) {
        var technologies = model.interventions;
        if (technologies.length === 0)
            return;
        technologies.forEach(function (cur) {
            var counter = 1;
            var name = toName(cur);
            while (interventionLookup[name]) {
                name = "".concat(toName(cur), " (").concat(counter++, ")");
            }
            interventionLookup[cur.id] = { name: name, technology: cur };
            interventionLookup[name] = { name: cur.id };
            autocompleteData[name] = null;
        });
        isInitialized = true;
    };
    return {
        oninit: function (_a) {
            var setPage = _a.attrs.actions.setPage;
            setPage(models_1.Dashboards.COMPARE);
        },
        oncreate: function (_a) {
            var dom = _a.dom;
            pageWidth = dom.clientWidth;
        },
        view: function (_a) {
            var _b = _a.attrs, _c = _b.state, _d = _c.compareList, compareList = _d === void 0 ? [] : _d, model = _c.model, setCompareList = _b.actions.setCompareList;
            if (!isInitialized)
                initialize(model);
            var selectedInterventions = compareList.map(function (c) { return interventionLookup[c].technology; });
            var colWidth = Math.round((pageWidth - ASPECT_COL_WIDTH) / selectedInterventions.length);
            return (0, mithril_1.default)('.row.compare', { style: 'height: 85vh' }, [
                (0, mithril_1.default)('.col.s12', [
                    (0, mithril_1.default)(mithril_materialized_1.Chips, {
                        label: 'Selected for comparison',
                        secondaryPlaceholder: 'Add an intervention',
                        autocompleteOptions: {
                            data: autocompleteData,
                            minLength: 3,
                        },
                        data: compareList.map(function (id) { return ({ tag: interventionLookup[id].name }); }),
                        onchange: function (chips) {
                            console.log(chips);
                            var ids = chips.filter(function (c) { return c.tag; }).map(function (c) { return interventionLookup[c.tag].name; });
                            setCompareList(ids);
                        },
                    }),
                ]),
                compareList.length > 0 &&
                    (0, mithril_1.default)('table', [
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('th', { style: "width: ".concat(ASPECT_COL_WIDTH, "px") }, 'Aspect')
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('th', { style: "width: ".concat(colWidth, "px") }, t.intervention);
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Category'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.getOptionsLabel)(utils_1.interventionCategoryOptions, t.category, false));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Capability'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', "".concat((0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, t.mainCap, false), " ").concat((0, utils_1.getOptionsLabel)(utils_1.hpeClassificationOptions, t.hpeClassification, false)));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Specific cap.'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.joinListWithAnd)((0, utils_1.optionsToTxt)(t.specificCap, utils_1.specificCapabilityOptions, false)));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Description'))
                        ], selectedInterventions.map(function (t) { return (0, mithril_1.default)('td', t.desc); }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Invasive'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.getOptionsLabel)(utils_1.invasivenessOptions, t.invasive, false));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Maturity'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.getOptionsLabel)(utils_1.maturityOptions, t.maturity, false));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Booster'))
                        ], selectedInterventions.map(function (t) { return (0, mithril_1.default)('td', t.booster ? 'Yes' : 'No'); }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Side effects'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', { className: t.hasSideEffects === models_1.CHOICE.YES && t.sideEffects ? 'tooltip' : '' }, [
                                (0, utils_1.getOptionsLabel)(utils_1.NoYesUnknown, t.hasSideEffects, false),
                                t.sideEffects && (0, mithril_1.default)('span.tooltiptext', (0, mithril_ui_form_1.render)(t.sideEffects, true)),
                            ]);
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Ind. diff.'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', { className: t.hasIndDiff === models_1.CHOICE.YES && t.diff ? 'tooltip' : '' }, [
                                (0, utils_1.getOptionsLabel)(utils_1.NoYesUnknown, t.hasIndDiff, false),
                                t.diff && (0, mithril_1.default)('span.tooltiptext', (0, mithril_ui_form_1.render)(t.diff, true)),
                            ]);
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Ethical'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', { className: t.hasEthical === models_1.CHOICE.YES && t.ethical ? 'tooltip' : '' }, [
                                (0, utils_1.getOptionsLabel)(utils_1.NoYesUnknown, t.hasEthical, false),
                                t.ethical && (0, mithril_1.default)('span.tooltiptext', (0, mithril_ui_form_1.render)(t.ethical, true)),
                            ]);
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Evidence indication'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.getOptionsLabel)(utils_1.evidenceDirOptions, t.evidenceDir, false));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Quality of evidence'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.getOptionsLabel)(utils_1.evidenceLevelOptions, t.evidenceScore, false));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Availability'))
                        ], selectedInterventions.map(function (t) {
                            return (0, mithril_1.default)('td', (0, utils_1.getOptionsLabel)(utils_1.availabilityOptions, t.availability, false));
                        }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Incubation'))
                        ], selectedInterventions.map(function (t) { return (0, mithril_1.default)('td', t.incubation); }), true)),
                        (0, mithril_1.default)('tr', __spreadArray([
                            (0, mithril_1.default)('td', (0, mithril_1.default)('b', 'Effect duration'))
                        ], selectedInterventions.map(function (t) { return (0, mithril_1.default)('td', t.effectDuration); }), true)),
                        // m('tr', [
                        //   m('td', m('b', 'Examples')),
                        //   ...selectedInterventions.map((t) => m('td', t.examples)),
                        // ]),
                        // m('tr', [
                        //   m('td', m('b', 'Practical')),
                        //   ...selectedInterventions.map((t) => m('td', t.practical)),
                        // ]),
                    ]),
            ]);
        },
    };
};
exports.ComparisonPage = ComparisonPage;


/***/ }),

/***/ 5261:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HomePage = void 0;
var mithril_1 = __importDefault(__webpack_require__(9402));
var mithril_materialized_1 = __webpack_require__(6777);
var background_jpg_1 = __importDefault(__webpack_require__(2868));
var services_1 = __webpack_require__(4445);
var models_1 = __webpack_require__(2301);
var utils_1 = __webpack_require__(2218);
var mithril_ui_form_1 = __webpack_require__(8332);
var HomePage = function () {
    var readerAvailable = window.File && window.FileReader && window.FileList && window.Blob;
    return {
        oninit: function (_a) {
            var setPage = _a.attrs.actions.setPage;
            setPage(models_1.Dashboards.HOME);
            // const uriModel = m.route.param('model');
            // if (!uriModel) {
            //   return;
            // }
            // try {
            //   const decompressed = lz.decompressFromEncodedURIComponent(uriModel);
            //   if (!decompressed) {
            //     return;
            //   }
            //   const model = JSON.parse(decompressed);
            //   saveModel(model);
            //   changePage(Dashboards.OVERVIEW);
            // } catch (err) {
            //   console.error(err);
            // }
        },
        view: function (_a) {
            var _b = _a.attrs, _c = _b.state.model, model = _c === void 0 ? models_1.defaultModel : _c, _d = _b.actions, saveModel = _d.saveModel, changePage = _d.changePage;
            var isCleared = !model.interventions || model.interventions.length === 0;
            return [
                (0, mithril_1.default)('div', { style: 'position: relative;' }, [
                    // m(
                    // 	".overlay.center",
                    // 	{ style: "position: absolute; width: 100%" },
                    // 	[m("h3.bold", "Database for Human Enhancement Interventions")],
                    // ),
                    (0, mithril_1.default)('img.responsive-img.center', { src: background_jpg_1.default }),
                    (0, mithril_1.default)('.buttons.center', { style: 'margin: 10px auto;' }, [
                        (0, mithril_1.default)(mithril_materialized_1.Button, {
                            iconName: 'clear',
                            disabled: isCleared,
                            className: 'btn-large',
                            label: 'Clear',
                            modalId: 'clearAll',
                        }),
                        // typeof model.version === "number" && m(
                        // 	Button,
                        // 	{
                        // 		iconName: "edit",
                        // 		className: "btn-large",
                        // 		label: "Continue",
                        // 		onclick: () => {
                        // 			routingSvc.switchTo(Dashboards.OVERVIEW);
                        // 		},
                        // 	},
                        // ),
                        (0, mithril_1.default)('a#downloadAnchorElem', { style: 'display:none' }),
                        (0, mithril_1.default)(mithril_materialized_1.Button, {
                            iconName: 'download',
                            disabled: isCleared,
                            className: 'btn-large',
                            label: 'Download',
                            onclick: function () {
                                var dlAnchorElem = document.getElementById('downloadAnchorElem');
                                if (!dlAnchorElem) {
                                    return;
                                }
                                var version = typeof model.version === 'undefined' ? 1 : model.version++;
                                var dataStr = 'data:text/json;charset=utf-8,' +
                                    encodeURIComponent(JSON.stringify(__assign(__assign({}, model), { version: version }), null, 2));
                                dlAnchorElem.setAttribute('href', dataStr);
                                dlAnchorElem.setAttribute('download', "".concat((0, utils_1.formatDate)(), "_v").concat((0, mithril_ui_form_1.padLeft)(version, 3), "_hpte_model.json"));
                                dlAnchorElem.click();
                            },
                        }),
                        (0, mithril_1.default)('input#selectFiles[type=file][accept=.json]', { style: 'display:none' }),
                        readerAvailable &&
                            (0, mithril_1.default)(mithril_materialized_1.Button, {
                                iconName: 'upload',
                                className: 'btn-large',
                                label: 'Upload',
                                onclick: function () {
                                    var fileInput = document.getElementById('selectFiles');
                                    fileInput.onchange = function () {
                                        if (!fileInput) {
                                            return;
                                        }
                                        var files = fileInput.files;
                                        if (files && files.length <= 0) {
                                            return;
                                        }
                                        var reader = new FileReader();
                                        reader.onload = function (e) {
                                            var result = e &&
                                                e.target &&
                                                e.target.result &&
                                                JSON.parse(e.target.result.toString());
                                            result && result.version && saveModel(result);
                                            changePage(models_1.Dashboards.INTERVENTIONS);
                                        };
                                        var data = files && files.item(0);
                                        data && reader.readAsText(data);
                                    };
                                    fileInput.click();
                                },
                            }),
                        // m(Button, {
                        //   iconName: 'link',
                        //   className: 'btn-large',
                        //   label: 'Permalink',
                        //   onclick: () => {
                        //     const permLink = document.createElement('input') as HTMLInputElement;
                        //     document.body.appendChild(permLink);
                        //     if (!permLink) {
                        //       return;
                        //     }
                        //     const compressed = lz.compressToEncodedURIComponent(JSON.stringify(model));
                        //     const url = `${window.location.href}${
                        //       /\?/.test(window.location.href) ? '&' : '?'
                        //     }model=${compressed}`;
                        //     permLink.value = url;
                        //     permLink.select();
                        //     permLink.setSelectionRange(0, 999999); // For mobile devices
                        //     try {
                        //       const successful = document.execCommand('copy');
                        //       if (successful) {
                        //         M.toast({
                        //           html: 'Copied permanent link to clipboard.',
                        //           classes: 'yellow black-text',
                        //         });
                        //       }
                        //     } catch (err) {
                        //       M.toast({
                        //         html: 'Failed copying link to clipboard: ' + err,
                        //         classes: 'red',
                        //       });
                        //     } finally {
                        //       document.body.removeChild(permLink);
                        //     }
                        //   },
                        // }),
                    ]),
                    (0, mithril_1.default)('.section.white', (0, mithril_1.default)('.row.container.center', [
                        (0, mithril_1.default)('.row', [
                            (0, mithril_1.default)('.col.s12.m4', (0, mithril_1.default)('.icon-block', [
                                (0, mithril_1.default)('.center', (0, mithril_1.default)(mithril_materialized_1.Icon, { iconName: 'dashboard' })),
                                (0, mithril_1.default)('h5.center', 'Prepare'),
                                (0, mithril_1.default)('p.light', 'Create or select the interventions that are important for your mission.'),
                            ])),
                            (0, mithril_1.default)('.col.s12.m4', (0, mithril_1.default)('.icon-block', [
                                (0, mithril_1.default)('.center', (0, mithril_1.default)(mithril_materialized_1.Icon, { iconName: 'visibility' })),
                                (0, mithril_1.default)('h5.center', 'Assess'),
                                (0, mithril_1.default)('p.light', "Determine for each intervention how important it is, and your current performance, so you can prioritise and focus on the ones you really need."),
                            ])),
                            (0, mithril_1.default)('.col.s12.m4', (0, mithril_1.default)('.icon-block', [
                                (0, mithril_1.default)('.center', (0, mithril_1.default)(mithril_materialized_1.Icon, { iconName: 'balance' })),
                                (0, mithril_1.default)('h5.center', 'Compare'),
                                (0, mithril_1.default)('p.light', 'Compare and select interventions so you can choose the one that fits best with your needs.'),
                            ])),
                        ]),
                    ])),
                    (0, mithril_1.default)(mithril_materialized_1.ModalPanel, {
                        id: 'clearAll',
                        title: 'Do you really want to delete everything?',
                        description: 'Are you sure that you want to delete your model?',
                        buttons: [
                            {
                                label: 'Yes',
                                iconName: 'delete',
                                onclick: function () {
                                    saveModel(models_1.defaultModel);
                                    services_1.routingSvc.switchTo(models_1.Dashboards.OVERVIEW);
                                },
                            },
                            { label: 'No', iconName: 'cancel' },
                        ],
                    }),
                ]),
            ];
        },
    };
};
exports.HomePage = HomePage;


/***/ }),

/***/ 1198:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(3084), exports);
__exportStar(__webpack_require__(5261), exports);
__exportStar(__webpack_require__(1802), exports);
__exportStar(__webpack_require__(4188), exports);
__exportStar(__webpack_require__(7205), exports);
__exportStar(__webpack_require__(8433), exports);
__exportStar(__webpack_require__(4846), exports);
__exportStar(__webpack_require__(7446), exports);


/***/ }),

/***/ 7205:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterventionOverviewPage = void 0;
var mithril_1 = __importDefault(__webpack_require__(9402));
var mithril_materialized_1 = __webpack_require__(6777);
var mithril_ui_form_1 = __webpack_require__(8332);
var images_1 = __webpack_require__(4057);
var models_1 = __webpack_require__(2301);
var services_1 = __webpack_require__(4445);
var utils_1 = __webpack_require__(2218);
var ui_1 = __webpack_require__(6904);
var InterventionOverviewPage = function () {
    var toOptions = function (opt) {
        return __spreadArray([{ id: 0, label: '-', title: '' }], opt, true);
    };
    var mainCapOpt = toOptions(utils_1.mainCapabilityOptions);
    var techCatOpt = toOptions(utils_1.interventionCategoryOptions);
    var invasivenessOpt = toOptions(utils_1.invasivenessOptions);
    var maturityOpt = toOptions(utils_1.maturityOptions);
    var availabilityOpt = toOptions(utils_1.availabilityOptions);
    var ethicalOpt = toOptions(utils_1.ethicalConsiderationsOptions);
    var evidenceDirOpt = toOptions(utils_1.evidenceDirOptions);
    var evidenceQualityOpt = toOptions(utils_1.evidenceLevelOptions);
    var boosterOpt = toOptions(utils_1.boosterOptions);
    var specificCognitiveCapabilityOpt = toOptions(utils_1.specificCognitiveCapabilityOptions);
    var specificPhysicalCapabilityOpt = toOptions(utils_1.specificPhysicalCapabilityOptions);
    var specificMentalCapabilityOpt = toOptions(utils_1.specificMentalCapabilityOptions);
    var specificSocialCapabilityOpt = toOptions(utils_1.specificSocialCapabilityOptions);
    var specificPersonalityCapabilityOpt = toOptions(utils_1.specificPersonalityCapabilityOptions);
    var toInterventions = function (allInterventions) {
        return Object.values(allInterventions.reduce(function (acc, cur) {
            var _a, _b;
            var id = cur.id, img = cur.img, url = cur.url, intervention = cur.intervention, mechanism = cur.mechanism, desc = cur.desc, keywords = cur.keywords, booster = cur.booster, mainCap = cur.mainCap, hpeClassification = cur.hpeClassification, category = cur.category, invasive = cur.invasive, availability = cur.availability, maturity = cur.maturity, _c = cur.specificCap, specificCap = _c === void 0 ? [] : _c, hasEthical = cur.hasEthical, evidenceDir = cur.evidenceDir, evidenceScore = cur.evidenceScore;
            var key = intervention;
            var sc = specificCap instanceof Array ? specificCap : [specificCap];
            var search = "".concat(intervention, " ").concat(desc, " ").concat((0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, mainCap), " ").concat(mechanism, " ").concat(keywords && keywords.length ? keywords.join(' ') : '', " ").concat((0, utils_1.getOptionsLabel)(utils_1.interventionCategoryOptions, category), " ").concat(sc.map(function (c) { return (0, utils_1.getOptionsLabel)(utils_1.specificCapabilityOptions, c); }).join(' '));
            if (acc.hasOwnProperty(key)) {
                acc[key].id.push(id);
                mechanism && acc[key].mechanism.push(mechanism);
                desc && acc[key].desc.push(desc);
                keywords && (_a = acc[key].desc).push.apply(_a, keywords);
                booster && acc[key].booster.push(booster);
                mainCap && acc[key].mainCap.push(mainCap);
                specificCap && specificCap instanceof Array && (_b = acc[key].specificCap).push.apply(_b, specificCap);
                hpeClassification && acc[key].hpeClassification.push(hpeClassification);
                category && acc[key].category.push(category);
                invasive && acc[key].invasive.push(invasive);
                availability && acc[key].availability.push(availability);
                maturity && acc[key].maturity.push(maturity);
                hasEthical && acc[key].ethicalConsiderations.push(hasEthical);
                evidenceDir && acc[key].evidenceDir.push(evidenceDir);
                evidenceScore && acc[key].evidenceScore.push(evidenceScore);
                acc[key].search += " ".concat(search);
            }
            else {
                acc[key] = {
                    id: [id],
                    intervention: intervention,
                    img: img,
                    url: url,
                    mechanism: [mechanism],
                    desc: desc ? [desc] : [],
                    keywords: keywords && keywords.length ? __spreadArray([], keywords, true) : [],
                    booster: [booster],
                    mainCap: [mainCap],
                    specificCap: specificCap instanceof Array ? __spreadArray([], specificCap, true) : [specificCap],
                    hpeClassification: [hpeClassification],
                    category: [category],
                    invasive: [invasive],
                    availability: [availability],
                    maturity: [maturity],
                    ethicalConsiderations: [],
                    evidenceDir: [],
                    evidenceScore: [],
                    search: search,
                };
            }
            return acc;
        }, {}));
    };
    var interventions = [];
    return {
        oninit: function (_a) {
            var _b = _a.attrs, model = _b.state.model, setPage = _b.actions.setPage;
            var _c = model.interventions, allInterventions = _c === void 0 ? [] : _c;
            interventions = toInterventions(allInterventions);
            setPage(models_1.Dashboards.INTERVENTIONS);
        },
        view: function (_a) {
            var _b, _c, _d, _e, _f, _g, _h, _j;
            var _k = _a.attrs, _l = _k.state, model = _l.model, curUser = _l.curUser, _m = _l.bookmarks, bookmarks = _m === void 0 ? [] : _m, _o = _l.compareList, compareList = _o === void 0 ? [] : _o, searchFilters = _l.searchFilters, _p = _k.actions, saveModel = _p.saveModel, changePage = _p.changePage, bookmark = _p.bookmark, compare = _p.compare, setSearchFilters = _p.setSearchFilters;
            if (interventions.length === 0) {
                var allInterventions = model.interventions;
                interventions = toInterventions(allInterventions);
            }
            var searchFilter = searchFilters.searchFilter, mainCapFilter = searchFilters.mainCapFilter, specificCapFilter = searchFilters.specificCapFilter, categoryFilter = searchFilters.categoryFilter, invasivenessFilter = searchFilters.invasivenessFilter, maturityFilter = searchFilters.maturityFilter, availabilityFilter = searchFilters.availabilityFilter, boosterFilter = searchFilters.boosterFilter, ethicalFilter = searchFilters.ethicalFilter, evidenceDirFilter = searchFilters.evidenceDirFilter, evidenceQualityFilter = searchFilters.evidenceQualityFilter, bookmarked = searchFilters.bookmarked;
            var searchRegex = searchFilter ? new RegExp(searchFilter, 'i') : undefined;
            var filteredInterventions = interventions.filter(function (t) {
                if (searchRegex && !searchRegex.test(t.search || '')) {
                    return false;
                }
                if (bookmarked && t.id.every(function (id) { return bookmarks.indexOf(id) < 0; }))
                    return false;
                if ((boosterFilter && boosterFilter === 1 && !t.booster) ||
                    (boosterFilter === 2 && t.booster))
                    return false;
                if (mainCapFilter && !t.mainCap.some(function (c) { return c === mainCapFilter; })) {
                    return false;
                }
                if (specificCapFilter && !t.specificCap.some(function (c) { return c === specificCapFilter; })) {
                    return false;
                }
                if (categoryFilter && !t.category.some(function (c) { return c === categoryFilter; })) {
                    return false;
                }
                if (invasivenessFilter && !t.invasive.some(function (c) { return c === invasivenessFilter; })) {
                    return false;
                }
                if (maturityFilter && !t.maturity.some(function (c) { return c === maturityFilter; })) {
                    return false;
                }
                if (availabilityFilter && !t.availability.some(function (c) { return c === availabilityFilter; })) {
                    return false;
                }
                if (boosterFilter &&
                    !t.booster.some(function (c) { return (boosterFilter === models_1.YES_NO.YES && c) || (boosterFilter === models_1.YES_NO.NO && !c); })) {
                    return false;
                }
                if (ethicalFilter && !t.ethicalConsiderations.some(function (c) { return c === ethicalFilter; })) {
                    return false;
                }
                if (evidenceDirFilter && !t.evidenceDir.some(function (c) { return c === evidenceDirFilter; })) {
                    return false;
                }
                if (evidenceQualityFilter && !t.evidenceScore.some(function (c) { return c === evidenceQualityFilter; })) {
                    return false;
                }
                return true;
            });
            var hasFilters = filteredInterventions.length !== interventions.length;
            return [
                (0, mithril_1.default)('.row.intervention-overview-page', { style: 'height: 95vh' }, [
                    (0, mithril_1.default)('.col.s12', (0, mithril_1.default)('.row.search-filters', (0, mithril_1.default)('.col.s12.m3', {
                        style: 'height: 81px',
                    }, (0, mithril_1.default)(ui_1.TextInputWithClear, {
                        key: searchFilter || 'searchKey',
                        label: 'Search',
                        iconName: 'search',
                        className: 'bottom-margin0',
                        initialValue: searchFilter,
                        oninput: function (s) {
                            setSearchFilters({ searchFilter: s || '' });
                            // m.redraw();
                        },
                    })), (0, mithril_1.default)('.col.s6.m3', (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                        modalId: 'search',
                        iconName: 'manage_search',
                        iconClass: 'large-icon',
                        label: 'Adv.search',
                        onclick: function () {
                            setSearchFilters({ searchFilter: '' });
                        },
                    })), (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                        label: 'Bookmarked',
                        className: 'col s6 m3',
                        iconName: bookmarked ? 'star' : 'star_border',
                        iconClass: 'large-icon amber-text',
                        onclick: function () {
                            setSearchFilters({ bookmarked: !bookmarked });
                        },
                    }), 
                    // m(InputCheckbox, {
                    //   label: 'Bookmarked',
                    //   className: 'col s6 m3',
                    //   onchange: (v) => {
                    //     setSearchFilters({ bookmarked: v });
                    //   },
                    // }),
                    curUser &&
                        curUser === 'admin' &&
                        (0, mithril_1.default)('.right-align', (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                            label: 'Add new intervention',
                            iconName: 'add',
                            className: 'small',
                            onclick: function () {
                                var newTech = { id: (0, mithril_materialized_1.uniqueId)() };
                                model.interventions.push(newTech);
                                saveModel(model);
                                changePage(models_1.Dashboards.INTERVENTION, { id: newTech.id, edit: 'true' });
                            },
                        })))),
                    hasFilters && [
                        (0, mithril_1.default)('.col.s12.filters', [
                            (0, mithril_1.default)('span', "".concat(filteredInterventions.length, " search result").concat(filteredInterventions.length === 1 ? '' : 's', ": ")),
                            mainCapFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Capability: ".concat((0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, mainCapFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', { onclick: function () { return setSearchFilters({ mainCapFilter: 0 }); } }, 'close'),
                                ]),
                            specificCapFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Spec.cap.: ".concat((0, utils_1.getOptionsLabel)(utils_1.specificCapabilityOptions, specificCapFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', { onclick: function () { return setSearchFilters({ specificCapFilter: 0 }); } }, 'close'),
                                ]),
                            categoryFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Category: ".concat((0, utils_1.getOptionsLabel)(utils_1.interventionCategoryOptions, categoryFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', { onclick: function () { return setSearchFilters({ categoryFilter: 0 }); } }, 'close'),
                                ]),
                            invasivenessFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Invasiveness: ".concat((0, utils_1.getOptionsLabel)(utils_1.invasivenessOptions, invasivenessFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ invasivenessFilter: 0 }); },
                                    }, 'close'),
                                ]),
                            maturityFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Maturity: ".concat((0, utils_1.getOptionsLabel)(utils_1.maturityOptions, maturityFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ maturityFilter: 0 }); },
                                    }, 'close'),
                                ]),
                            availabilityFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Availability: ".concat((0, utils_1.getOptionsLabel)(utils_1.availabilityOptions, availabilityFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ availabilityFilter: 0 }); },
                                    }, 'close'),
                                ]),
                            boosterFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Booster: ".concat((0, utils_1.getOptionsLabel)(utils_1.boosterOptions, boosterFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ boosterFilter: 0 }); },
                                    }, 'close'),
                                ]),
                            ethicalFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Ethical: ".concat((0, utils_1.getOptionsLabel)(utils_1.NoYesUnknown, ethicalFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ ethicalFilter: 0 }); },
                                    }, 'close'),
                                ]),
                            evidenceDirFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Evidence indication: ".concat((0, utils_1.getOptionsLabel)(utils_1.evidenceDirOptions, evidenceDirFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ evidenceDirFilter: 0 }); },
                                    }, 'close'),
                                ]),
                            evidenceQualityFilter > 0 &&
                                (0, mithril_1.default)('.chip', [
                                    "Evidence quality: ".concat((0, utils_1.getOptionsLabel)(utils_1.evidenceLevelOptions, evidenceQualityFilter, false)),
                                    (0, mithril_1.default)('i.close.material-icons', {
                                        onclick: function () { return setSearchFilters({ evidenceQualityFilter: 0 }); },
                                    }, 'close'),
                                ]),
                        ]),
                    ],
                    filteredInterventions.map(function (t) {
                        var isBookmarked = t.id.some(function (id) { return bookmarks.indexOf(id) >= 0; });
                        var selectedForComparison = t.id.some(function (id) { return compareList.indexOf(id) >= 0; });
                        return (0, mithril_1.default)('.col.s12.m6.l4.xl3', (0, mithril_1.default)('.card.medium', [
                            (0, mithril_1.default)('.v-responsive.card-img-height', [
                                (0, mithril_1.default)('a', {
                                    href: services_1.routingSvc.href(models_1.Dashboards.INTERVENTION, "?id=".concat(t.id[0])),
                                }, [
                                    (0, mithril_1.default)('.v-image', {
                                        style: "background-image: url(".concat((0, images_1.resolveImg)(t.url, t.img), ")"),
                                        // alt: t.intervention,
                                    }),
                                    (0, mithril_1.default)('span.card-title.bold.sharpen.black-text', { title: t.intervention, style: 'z-index: 100' }, 
                                    // { className: isBookmarked ? 'amber-text' : 'black-text' },
                                    t.intervention),
                                ]),
                            ]),
                            (0, mithril_1.default)('.card-content', [
                                (0, mithril_1.default)('span.bold', t.mainCap
                                    .map(function (c, i) {
                                    return "".concat((0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, c, false), " ").concat((0, utils_1.getOptionsLabel)(utils_1.hpeClassificationOptions, t.hpeClassification[i], false)).toUpperCase();
                                })
                                    .filter(utils_1.isUnique)
                                    .join(', ')),
                                (0, mithril_1.default)('p.overflow', t.desc),
                            ]),
                            (0, mithril_1.default)('.card-action', (0, mithril_1.default)('a.tooltip', 
                            // 'a.tooltip.tooltipped[data-position=bottom][data-tooltip=SHOW]',
                            {
                                href: services_1.routingSvc.href(models_1.Dashboards.INTERVENTION, "?id=".concat(t.id[0])),
                            }, (0, mithril_1.default)(mithril_materialized_1.Icon, { iconName: 'visibility' }), (0, mithril_1.default)('span.tooltiptext', 'SHOW')), (0, mithril_1.default)('a.tooltip', 
                            // 'a.tooltip.tooltipped[data-position=bottom][data-tooltip=BOOKMARK]',
                            {
                                href: services_1.routingSvc.href(models_1.Dashboards.INTERVENTIONS),
                                onclick: function () {
                                    if (isBookmarked) {
                                        t.id.forEach(function (id) {
                                            if (bookmarks.indexOf(id) >= 0)
                                                bookmark(id);
                                        });
                                    }
                                    else {
                                        bookmark(t.id[0]);
                                    }
                                },
                            }, (0, mithril_1.default)(mithril_materialized_1.Icon, {
                                iconName: isBookmarked ? 'star' : 'star_border',
                                className: isBookmarked ? 'amber-text' : '',
                            }), (0, mithril_1.default)('span.tooltiptext', isBookmarked ? 'BOOKMARKED' : 'BOOKMARK')), (0, mithril_1.default)('a.tooltip', 
                            // 'a.tooltip.tooltipped[data-position=bottom][data-tooltip=COMPARE]',
                            {
                                href: services_1.routingSvc.href(models_1.Dashboards.INTERVENTIONS),
                                onclick: function () {
                                    if (selectedForComparison) {
                                        t.id.forEach(function (id) {
                                            if (compareList.indexOf(id) >= 0)
                                                compare(id);
                                        });
                                    }
                                    else {
                                        compare(t.id[0]);
                                    }
                                },
                            }, (0, mithril_1.default)(mithril_materialized_1.Icon, {
                                iconName: 'balance',
                                className: selectedForComparison ? 'amber-text' : '',
                            }), (0, mithril_1.default)('span.tooltiptext', selectedForComparison ? 'COMPARING' : 'COMPARE'))),
                        ]));
                    }),
                ]),
                (0, mithril_1.default)(mithril_materialized_1.ModalPanel, {
                    id: 'search',
                    title: 'Advanced search',
                    description: (0, mithril_1.default)('#adv-search.row', (0, mithril_1.default)(mithril_ui_form_1.LayoutForm, {
                        form: [
                            {
                                id: 'selectedFilters',
                                label: 'Select filters',
                                className: 'col s12',
                                multiple: true,
                                options: [
                                    { id: 'mainCapFilter', label: 'Capability' },
                                    { id: 'categoryFilter', label: 'Category' },
                                    { id: 'invasivenessFilter', label: 'Invasiveness' },
                                    { id: 'maturityFilter', label: 'Maturity' },
                                    { id: 'availabilityFilter', label: 'Availability' },
                                    { id: 'boosterFilter', label: 'Booster' },
                                    { id: 'ethicalFilter', label: 'Ethical' },
                                    { id: 'evidenceDirFilter', label: 'Evidence indication' },
                                    { id: 'evidenceQualityFilter', label: 'Evidence quality' },
                                ],
                                description: mainCapFilter
                                    ? (_b = mainCapOpt.filter(function (o) { return +o.id === mainCapFilter; }).shift()) === null || _b === void 0 ? void 0 : _b.title
                                    : undefined,
                            },
                            {
                                id: 'mainCapFilter',
                                label: 'Main capability',
                                className: 'col s12 m6 l4',
                                options: mainCapOpt,
                                description: mainCapFilter
                                    ? (_c = mainCapOpt.filter(function (o) { return +o.id === mainCapFilter; }).shift()) === null || _c === void 0 ? void 0 : _c.title
                                    : undefined,
                                show: 'selectedFilters = mainCapFilter',
                            },
                            {
                                id: 'specificCapFilter',
                                label: 'Specific cognitive capabilities',
                                type: 'select',
                                options: specificCognitiveCapabilityOpt,
                                className: 'col s12 m6 l4',
                                show: 'mainCapFilter = 1',
                            },
                            {
                                id: 'specificCapFilter',
                                label: 'Specific physical capabilities',
                                type: 'select',
                                options: specificPhysicalCapabilityOpt,
                                className: 'col s12 m6 l4',
                                show: 'mainCapFilter = 2',
                            },
                            {
                                id: 'specificCapFilter',
                                label: 'Specific mental capabilities',
                                type: 'select',
                                options: specificMentalCapabilityOpt,
                                className: 'col s12 m6 l4',
                                show: 'mainCapFilter = 3',
                            },
                            {
                                id: 'specificCapFilter',
                                label: 'Specific social capabilities',
                                type: 'select',
                                options: specificSocialCapabilityOpt,
                                className: 'col s12 m6 l4',
                                show: 'mainCapFilter = 4',
                            },
                            {
                                id: 'specificCapFilter',
                                label: 'Specific personality capabilities',
                                type: 'select',
                                options: specificPersonalityCapabilityOpt,
                                className: 'col s12 m6 l4',
                                show: 'mainCapFilter = 5',
                            },
                            {
                                id: 'categoryFilter',
                                label: 'Category',
                                className: 'col s12 m6 l4',
                                options: techCatOpt,
                                description: categoryFilter
                                    ? (_d = techCatOpt.filter(function (o) { return +o.id === categoryFilter; }).shift()) === null || _d === void 0 ? void 0 : _d.title
                                    : undefined,
                                show: 'selectedFilters = categoryFilter',
                            },
                            {
                                id: 'invasivenessFilter',
                                label: 'Invasiveness',
                                className: 'col s12 m6 l4',
                                options: invasivenessOpt,
                                description: invasivenessFilter
                                    ? (_e = invasivenessOpt.filter(function (o) { return +o.id === invasivenessFilter; }).shift()) === null || _e === void 0 ? void 0 : _e.title
                                    : undefined,
                                show: 'selectedFilters = invasivenessFilter',
                            },
                            {
                                id: 'maturityFilter',
                                label: 'Maturity',
                                className: 'col s12 m6 l4',
                                options: maturityOpt,
                                description: maturityFilter
                                    ? (_f = maturityOpt.filter(function (o) { return +o.id === maturityFilter; }).shift()) === null || _f === void 0 ? void 0 : _f.title
                                    : undefined,
                                show: 'selectedFilters = maturityFilter',
                            },
                            {
                                id: 'availabilityFilter',
                                label: 'Availability',
                                className: 'col s12 m6 l4',
                                options: availabilityOpt,
                                // description: availabilityFilter
                                //   ? availabilityOpt.filter((o) => o.id === availabilityFilter).shift()?.title
                                //   : undefined,
                                show: 'selectedFilters = availabilityFilter',
                            },
                            {
                                id: 'boosterFilter',
                                label: 'Booster',
                                className: 'col s12 m6 l4',
                                options: boosterOpt,
                                // description: boosterFilter
                                //   ? availabilityOpt.filter((o) => o.id === boosterFilter).shift()?.title
                                //   : undefined,
                                show: 'selectedFilters = boosterFilter',
                            },
                            {
                                id: 'ethicalFilter',
                                label: 'Ethical considerations',
                                className: 'col s12 m6 l4',
                                options: ethicalOpt,
                                description: ethicalFilter
                                    ? (_g = ethicalOpt.filter(function (o) { return +o.id === ethicalFilter; }).shift()) === null || _g === void 0 ? void 0 : _g.title
                                    : undefined,
                                show: 'selectedFilters = ethicalFilter',
                            },
                            {
                                id: 'evidenceDirFilter',
                                label: 'Evidence indication',
                                className: 'col s12 m6 l4',
                                options: evidenceDirOpt,
                                description: evidenceDirFilter
                                    ? (_h = evidenceDirOpt.filter(function (o) { return +o.id === evidenceDirFilter; }).shift()) === null || _h === void 0 ? void 0 : _h.title
                                    : undefined,
                                show: 'selectedFilters = evidenceDirFilter',
                            },
                            {
                                id: 'evidenceQualityFilter',
                                label: 'Evidence quality',
                                className: 'col s12 m6 l4',
                                options: evidenceQualityOpt,
                                description: evidenceQualityFilter
                                    ? (_j = evidenceQualityOpt.filter(function (o) { return +o.id === evidenceQualityFilter; }).shift()) === null || _j === void 0 ? void 0 : _j.title
                                    : undefined,
                                show: 'selectedFilters = evidenceQualityFilter',
                            },
                        ],
                        obj: searchFilters,
                        onchange: function () { return setSearchFilters(searchFilters); },
                    })),
                    bottomSheet: true,
                    fixedFooter: true,
                    buttons: [{ label: 'DONE' }],
                }),
            ];
        },
    };
};
exports.InterventionOverviewPage = InterventionOverviewPage;


/***/ }),

/***/ 4188:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterventionPage = void 0;
var mithril_1 = __importDefault(__webpack_require__(9402));
var mithril_materialized_1 = __webpack_require__(6777);
var mithril_ui_form_1 = __webpack_require__(8332);
var images_1 = __webpack_require__(4057);
var models_1 = __webpack_require__(2301);
var services_1 = __webpack_require__(4445);
var utils_1 = __webpack_require__(2218);
var InterventionPage = function () {
    var initInterventionForm = function (interventions, id, users) {
        var added = new Set();
        var interventionOptions = interventions
            .filter(function (t) {
            if (added.has(t.intervention))
                return false;
            added.add(t.intervention);
            return t.id !== id;
        })
            .map(function (t) { return ({ id: t.id, label: t.intervention }); });
        return (0, utils_1.interventionForm)(users, interventionOptions);
    };
    var suggestSimilarInt = function (intervention, interventions) {
        var mainCap = intervention.mainCap, specificCap = intervention.specificCap;
        var sc = new Set(specificCap instanceof Array ? specificCap : [specificCap]);
        return interventions
            .filter(function (i) {
            return i.id !== intervention.id &&
                i.mainCap === mainCap &&
                i.specificCap &&
                (i.specificCap instanceof Array
                    ? i.specificCap.some(function (s) { return sc.has(s); })
                    : sc.has(i.specificCap));
        })
            .map(function (s) { return s.id; });
    };
    var id = '';
    var isEditing = false;
    var form = [];
    var allInterventions = [];
    var isBookmarked = false;
    var formValid = false;
    return {
        oninit: function (_a) {
            var _b = _a.attrs, _c = _b.state, model = _c.model, _d = _c.curIntervention, curIntervention = _d === void 0 ? {} : _d, _e = _b.actions, setPage = _e.setPage, setIntervention = _e.setIntervention;
            var _f = model.interventions, technologies = _f === void 0 ? [] : _f, _g = model.users, users = _g === void 0 ? [] : _g;
            setPage(models_1.Dashboards.INTERVENTION);
            id = mithril_1.default.route.param('id') || curIntervention.id || '';
            isEditing = mithril_1.default.route.param('edit') === true ? true : false;
            form = initInterventionForm(technologies, id, users);
            var found = id === curIntervention.id
                ? curIntervention
                : technologies.filter(function (t) { return t.id === id; }).shift() || technologies[0];
            allInterventions = found
                ? technologies.filter(function (t) { return t.intervention === found.intervention; })
                : [];
            if (found !== curIntervention)
                setIntervention(found);
            window.scrollTo({ top: 0, left: 0 });
        },
        view: function (_a) {
            var _b = _a.attrs, _c = _b.state, _d = _c.curIntervention, curIntervention = _d === void 0 ? {} : _d, bookmarks = _c.bookmarks, _e = _c.compareList, compareList = _e === void 0 ? [] : _e, _f = _c.model, model = _f === void 0 ? models_1.defaultModel : _f, curUser = _c.curUser, _g = _b.actions, saveModel = _g.saveModel, changePage = _g.changePage, setIntervention = _g.setIntervention, bookmark = _g.bookmark, compare = _g.compare;
            id = mithril_1.default.route.param('id') || curIntervention.id || '';
            var users = model.users, interventions = model.interventions;
            if (!curIntervention.id || curIntervention.id !== id) {
                form = initInterventionForm(interventions, id, users);
                var found_1 = interventions.filter(function (t) { return t.id === id; }).shift() || interventions[0];
                if (found_1) {
                    allInterventions = interventions.filter(function (t) { return t.intervention === found_1.intervention; });
                    setIntervention(found_1);
                }
                return;
            }
            // interventions.forEach((i) => {
            //   i.similar = suggestSimilarInt(i, interventions);
            // });
            // saveModel({ ...model, interventions });
            isBookmarked = bookmarks.indexOf(curIntervention.id) >= 0;
            var selectedForComparison = compareList.indexOf(curIntervention.id) >= 0;
            var ownerId = curIntervention.owner;
            var updated = curIntervention.updated ? new Date(curIntervention.updated) : undefined;
            var owner = users.filter(function (u) { return u.id === ownerId; }).shift();
            var usedLiterature = curIntervention.literature;
            var md = (0, utils_1.resolveRefs)(curIntervention.literature).md2html;
            var mailtoLink = owner &&
                "mailto:".concat(owner.email, "?subject=").concat(curIntervention.intervention.replace(/ /g, '%20'));
            var similarTech = curIntervention.similar &&
                curIntervention.similar.length > 0 &&
                interventions.filter(function (t) { return curIntervention.similar.indexOf(t.id) >= 0; });
            var filteredSpecCapOpt = utils_1.specificCapabilityOptions.filter(function (c) { return c.mc === curIntervention.mainCap; });
            return [
                (0, mithril_1.default)('.row.intervention-page', { style: 'height: 95vh' }, curUser &&
                    curUser === 'admin' && [
                    (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                        className: 'right no-print',
                        label: isEditing ? 'Save' : 'Edit',
                        disabled: isEditing && !formValid,
                        iconName: isEditing ? 'save' : 'edit',
                        onclick: function () {
                            // if (
                            //   !isEditing &&
                            //   (!curIntervention.similar || curIntervention.similar.length === 0)
                            // ) {
                            //   curIntervention.similar = suggestSimilarInt(
                            //     curIntervention,
                            //     interventions
                            //   );
                            // }
                            isEditing = !isEditing;
                        },
                    }),
                    isEditing
                        ? [
                            (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                                className: 'right',
                                label: 'Delete',
                                iconName: 'delete',
                                modalId: 'deleteIntervention',
                            }),
                            (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                                className: 'right',
                                label: 'Suggest similar',
                                iconName: 'auto_awesome',
                                disabled: !(curIntervention.mainCap &&
                                    curIntervention.specificCap &&
                                    (!(curIntervention.specificCap instanceof Array) ||
                                        curIntervention.specificCap.length > 0)),
                                onclick: function () {
                                    curIntervention.similar = suggestSimilarInt(curIntervention, interventions);
                                },
                            }),
                        ]
                        : (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                            className: 'right no-print',
                            label: 'Duplicate',
                            iconName: 'content_copy',
                            onclick: function () {
                                var clone = JSON.parse(JSON.stringify(curIntervention));
                                clone.intervention += ' (COPY)';
                                clone.id = (0, mithril_materialized_1.uuid4)();
                                model.interventions.push(clone);
                                isEditing = true;
                                setIntervention(clone);
                                changePage(models_1.Dashboards.INTERVENTION, { id: clone.id });
                            },
                        }),
                ], isEditing
                    ? (0, mithril_1.default)('.col.s12', (0, mithril_1.default)(mithril_ui_form_1.LayoutForm, {
                        form: form,
                        obj: curIntervention,
                        onchange: function (isValid) {
                            formValid = isValid;
                            if (!isValid) {
                                return;
                            }
                            model.interventions = model.interventions.map(function (t) {
                                return t.id === curIntervention.id ? curIntervention : t;
                            });
                            saveModel(model);
                        },
                    }))
                    : [
                        (0, mithril_1.default)('h3', [
                            curIntervention.intervention,
                            (0, mithril_1.default)('a.btn-flat.btn-large.clean', {
                                style: 'padding: 0 5px',
                                onclick: function () { return bookmark(curIntervention.id); },
                            }, (0, mithril_1.default)(mithril_materialized_1.Icon, {
                                iconName: isBookmarked ? 'star' : 'star_border',
                                className: isBookmarked ? 'amber-text white' : 'white',
                            })),
                            (0, mithril_1.default)('a.btn-flat.btn-large.clean', {
                                style: 'padding: 0 5px',
                                onclick: function () { return compare(curIntervention.id); },
                            }, (0, mithril_1.default)(mithril_materialized_1.Icon, {
                                iconName: 'balance',
                                className: selectedForComparison ? 'amber-text white' : 'white',
                            })),
                        ]),
                        curIntervention.desc && (0, mithril_1.default)('p.bold', md(curIntervention.desc)),
                        (0, mithril_1.default)('.col.s12.m6', (0, mithril_1.default)('.row.bottom-margin0', allInterventions.length === 1
                            ? (0, mithril_1.default)('h5.separator', 'Description')
                            : (0, mithril_1.default)('h5.separator.button-row', __spreadArray([
                                'Description'
                            ], allInterventions.map(function (t, i) {
                                return (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                                    className: t.id === curIntervention.id
                                        ? 'bold grey lighten-3'
                                        : 'grey lighten-3',
                                    label: (0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, t.mainCap, false) ||
                                        "v".concat(i + 1),
                                    onclick: function () { return changePage(models_1.Dashboards.INTERVENTION, { id: t.id }); },
                                });
                            }), true)), (0, mithril_1.default)('section', [
                            curIntervention.category &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Category: '),
                                    (0, utils_1.getOptionsLabel)(utils_1.interventionCategoryOptions, curIntervention.category),
                                ]),
                            curIntervention.mainCap &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Main capability: '),
                                    "".concat((0, utils_1.getOptionsLabel)(utils_1.mainCapabilityOptions, curIntervention.mainCap, false), " ").concat((0, utils_1.getOptionsLabel)(utils_1.hpeClassificationOptions, curIntervention.hpeClassification, false)),
                                ]),
                            curIntervention.specificCap &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Specific capability: '),
                                    (0, utils_1.joinListWithAnd)((0, utils_1.optionsToTxt)(curIntervention.specificCap, filteredSpecCapOpt, false)) + '.',
                                ]),
                            curIntervention.invasive &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Invasive: '),
                                    (0, utils_1.getOptionsLabel)(utils_1.invasivenessOptions, curIntervention.invasive) + '.',
                                ]),
                            curIntervention.maturity &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Maturity: '),
                                    (0, utils_1.getOptionsLabel)(utils_1.maturityOptions, curIntervention.maturity) + '.',
                                ]),
                            typeof curIntervention.booster !== 'undefined' &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Can be used as booster: '),
                                    "".concat(curIntervention.booster
                                        ? 'Yes, the intervention can be applied quickly (approx. < 1 hour)'
                                        : 'No, the intervention can not be applied quickly (approx. < 1 hour)', "."),
                                ]),
                        ]))),
                        curIntervention.url &&
                            (0, mithril_1.default)('.col.s6.m6', (0, mithril_1.default)('img.responsive-img', {
                                src: (0, images_1.resolveImg)(curIntervention.url, curIntervention.img),
                                alt: curIntervention.intervention,
                            })),
                        (0, mithril_1.default)('.col.s12', (0, mithril_1.default)('.row.bottom-margin0', [
                            (0, mithril_1.default)('h5.separator', 'How it works'),
                            curIntervention.mechanism &&
                                (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'Mechanism: '), md(curIntervention.mechanism)]),
                            curIntervention.examples &&
                                (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'Examples: '), md(curIntervention.examples)]),
                            curIntervention.incubation &&
                                (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'Incubation: '), md(curIntervention.incubation)]),
                            curIntervention.effectDuration &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Effect duration: '),
                                    md(curIntervention.effectDuration),
                                ]),
                            (0, mithril_1.default)('h5.separator', 'Keep in mind'),
                            curIntervention.practical &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold[title=This information is not medical advice, please read the disclaimer!]', mithril_1.default.trust('Practical execution<sup class="red-text" style="font-size:1rem">*</sup>: ')),
                                    md(curIntervention.practical),
                                ]),
                            curIntervention.sideEffects &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Possible side-effects: '),
                                    md((0, utils_1.resolveChoice)(curIntervention.hasSideEffects, curIntervention.sideEffects)),
                                ]),
                            curIntervention.diff &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Individual differences: '),
                                    md((0, utils_1.resolveChoice)(curIntervention.hasIndDiff, curIntervention.diff)),
                                ]),
                            curIntervention.ethical &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Ethical considerations: '),
                                    md((0, utils_1.resolveChoice)(curIntervention.hasEthical, curIntervention.ethical)),
                                ]),
                            similarTech &&
                                (0, mithril_1.default)('p', (0, mithril_1.default)('span.bold', "Similar intervention".concat(similarTech.length > 1 ? 's' : '', ": ")), similarTech.map(function (s, i) {
                                    return (0, mithril_1.default)('a', {
                                        href: services_1.routingSvc.href(models_1.Dashboards.INTERVENTION, "?id=".concat(s.id)),
                                        onclick: function () { return changePage(models_1.Dashboards.INTERVENTION, { id: s.id }); },
                                    }, s.intervention + (i < similarTech.length - 1 ? ', ' : '.'));
                                })),
                            curIntervention.evidenceDir &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Evidence indication: '),
                                    (0, utils_1.getOptionsLabel)(utils_1.evidenceDirOptions, curIntervention.evidenceDir) + '.',
                                ]),
                            curIntervention.evidenceScore &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Quality of evidence: '),
                                    (0, utils_1.getOptionsLabel)(utils_1.evidenceLevelOptions, curIntervention.evidenceScore) + '.',
                                ]),
                            curIntervention.availability &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Availability: '),
                                    (0, utils_1.getOptionsLabel)(utils_1.availabilityOptions, curIntervention.availability) + '.',
                                ]),
                            (0, mithril_1.default)('h5.separator', 'References'),
                        ])),
                        (0, mithril_1.default)('.col.s12.m8', (0, mithril_1.default)('.row', [
                            usedLiterature && [
                                (0, mithril_1.default)('ol.browser-default', usedLiterature.map(function (l) {
                                    return (0, mithril_1.default)('li', (0, mithril_1.default)('a', {
                                        href: l.doi,
                                        alt: l.title,
                                        target: '_blank',
                                    }, l.title));
                                })),
                            ],
                        ])),
                        owner &&
                            (0, mithril_1.default)('.col.s12.m4', (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'Expert: '), owner.name]), (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'Email: '), (0, mithril_1.default)('a', { href: mailtoLink }, owner.email)]), owner.phone &&
                                (0, mithril_1.default)('p', [
                                    (0, mithril_1.default)('span.bold', 'Phone: '),
                                    (0, mithril_1.default)('a', { href: "tel:".concat(owner.phone) }, owner.phone),
                                ]), updated && (0, mithril_1.default)('p', [(0, mithril_1.default)('span.bold', 'Last update: '), updated.toDateString()])),
                    ]),
                (0, mithril_1.default)(mithril_materialized_1.ModalPanel, {
                    id: 'deleteIntervention',
                    title: "Delete ".concat(curIntervention.intervention, "?"),
                    description: "Are you sure that you want to delete ".concat(curIntervention.intervention, "?"),
                    buttons: [
                        {
                            label: 'Yes',
                            iconName: 'delete',
                            onclick: function () {
                                model.interventions = model.interventions.filter(function (t) { return t.id !== curIntervention.id; });
                                saveModel(model);
                                changePage(models_1.Dashboards.INTERVENTIONS);
                            },
                        },
                        { label: 'No', iconName: 'cancel' },
                    ],
                }),
            ];
        },
    };
};
exports.InterventionPage = InterventionPage;


/***/ }),

/***/ 7446:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Layout = void 0;
var mithril_1 = __importDefault(__webpack_require__(9402));
var mithril_materialized_1 = __webpack_require__(6777);
var tno_svg_1 = __importDefault(__webpack_require__(1555));
var models_1 = __webpack_require__(2301);
var routing_service_1 = __webpack_require__(2464);
var Layout = function () { return ({
    view: function (_a) {
        var children = _a.children, _b = _a.attrs, _c = _b.state, page = _c.page, curUser = _c.curUser, changePage = _b.actions.changePage;
        var isActive = function (d) { return (page === d.id ? '.active' : ''); };
        var routes = routing_service_1.routingSvc
            .getList()
            .filter(function (d) { return curUser === 'admin' || d.id !== models_1.Dashboards.SETTINGS; })
            .filter(function (d) { return (typeof d.visible === 'boolean' ? d.visible : d.visible()) || isActive(d); });
        return (0, mithril_1.default)('.main', { style: 'overflow-x: hidden' }, [
            (0, mithril_1.default)('.navbar-fixed', { style: 'z-index: 1001' }, (0, mithril_1.default)('nav', (0, mithril_1.default)('.nav-wrapper', [
                (0, mithril_1.default)('a.brand-logo[href=#].show-on-large', { style: 'margin-left: 20px' }, [
                    (0, mithril_1.default)("img[width=60][height=60][src=".concat(tno_svg_1.default, "]"), {
                        style: 'margin-top: 5px; margin-left: -5px;',
                    }),
                    // m(
                    //   'div',
                    //   {
                    //     style:
                    //       'margin-top: 0px; position: absolute; top: 10px; left: 60px; width: 350px;',
                    //   },
                    //   m(
                    //     'h4.center.show-on-med-and-up.black-text',
                    //     { style: 'text-align: left; margin: 0;' },
                    //     'Zicht op overgewicht'
                    //   )
                    // ),
                ]),
                (0, mithril_1.default)(
                // 'a.sidenav-trigger[href=#!/home][data-target=slide-out]',
                // { onclick: (e: UIEvent) => e.preventDefault() },
                mithril_1.default.route.Link, {
                    className: 'sidenav-trigger',
                    'data-target': 'slide-out',
                    href: mithril_1.default.route.get(),
                }, (0, mithril_1.default)(mithril_materialized_1.Icon, {
                    iconName: 'menu',
                    className: 'hide-on-med-and-up black-text',
                    style: 'margin-left: 5px;',
                })),
                (0, mithril_1.default)('ul#slide-out.sidenav.hide-on-med-and-up', {
                    oncreate: function () {
                        var elems = document.querySelectorAll('.sidenav');
                        M.Sidenav.init(elems);
                    },
                }, routes.map(function (d) {
                    return (0, mithril_1.default)("li.tooltip".concat(isActive(d)), [
                        (0, mithril_1.default)('a', { href: routing_service_1.routingSvc.href(d.id) }, (0, mithril_1.default)(mithril_materialized_1.Icon, {
                            className: d.iconClass ? " ".concat(d.iconClass) : '',
                            iconName: typeof d.icon === 'string' ? d.icon : d.icon(),
                        }), (typeof d.title === 'string' ? d.title : d.title()).toUpperCase()),
                    ]);
                })),
                (0, mithril_1.default)('ul.right.hide-on-med-and-down', routes.map(function (d) {
                    return (0, mithril_1.default)("li.tooltip".concat(isActive(d)), [
                        (0, mithril_1.default)(mithril_materialized_1.Icon, {
                            className: 'hoverable' + (d.iconClass ? " ".concat(d.iconClass) : ''),
                            style: 'font-size: 2.2rem; width: 4rem;',
                            iconName: typeof d.icon === 'string' ? d.icon : d.icon(),
                            onclick: function () { return changePage(d.id); },
                        }),
                        (0, mithril_1.default)('span.tooltiptext', (typeof d.title === 'string' ? d.title : d.title()).toUpperCase()),
                    ]);
                })),
            ]))),
            (0, mithril_1.default)('.container', { style: 'padding-top: 1rem' }, children),
        ]);
    },
}); };
exports.Layout = Layout;


/***/ }),

/***/ 8433:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SettingsPage = void 0;
var mithril_1 = __importDefault(__webpack_require__(9402));
var mithril_materialized_1 = __webpack_require__(6777);
var mithril_ui_form_1 = __webpack_require__(8332);
var models_1 = __webpack_require__(2301);
var userForm = [
    { id: 'id', type: 'none', autogenerate: 'id' },
    {
        id: 'name',
        label: 'Name',
        icon: 'title',
        type: 'text',
        required: true,
        className: 'col s3',
    },
    {
        id: 'email',
        label: 'Email',
        icon: 'email',
        type: 'email',
        required: true,
        className: 'col s4',
    },
    {
        id: 'phone',
        label: 'Phone',
        icon: 'phone',
        type: 'text',
        className: 'col s3',
    },
    {
        id: 'isAuthor',
        label: 'Author',
        icon: 'edit_note',
        type: 'checkbox',
        className: 'col s2',
    },
    {
        id: 'url',
        label: 'Image link',
        icon: 'link',
        type: 'url',
        className: 'col s12',
    },
];
var SettingsPage = function () {
    var newUser = {};
    var addUser = false;
    var canSaveUser = false;
    return {
        oninit: function (_a) {
            var setPage = _a.attrs.actions.setPage;
            return setPage(models_1.Dashboards.SETTINGS);
        },
        view: function (_a) {
            var _b = _a.attrs, _c = _b.state.model, model = _c === void 0 ? models_1.defaultModel : _c, saveModel = _b.actions.saveModel;
            var _d = model.users, users = _d === void 0 ? [] : _d;
            return [
                (0, mithril_1.default)('.settings', [
                    (0, mithril_1.default)('.row.users', [
                        (0, mithril_1.default)('h4', 'Users'),
                        (0, mithril_1.default)(mithril_materialized_1.Collapsible, {
                            items: users.map(function (user) { return ({
                                key: user.id,
                                header: user.name || 'Empty',
                                body: (0, mithril_1.default)('.row', [
                                    (0, mithril_1.default)(mithril_ui_form_1.LayoutForm, {
                                        form: userForm,
                                        obj: user,
                                        onchange: function () { return saveModel(model); },
                                    }),
                                    (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                                        label: 'Delete',
                                        iconName: 'delete',
                                        className: 'right',
                                        onclick: function () {
                                            model.users = users.filter(function (u) { return u.id !== user.id; });
                                            saveModel(model);
                                        },
                                    }),
                                    (0, mithril_1.default)('a.waves-effect.waves-teal.btn-flat.right', { href: "mailto:".concat(user.email) }, (0, mithril_1.default)('i.material-icons left', 'email'), 'Open email'),
                                ]),
                            }); }),
                        }),
                        addUser &&
                            (0, mithril_1.default)(mithril_ui_form_1.LayoutForm, {
                                form: userForm,
                                obj: newUser,
                                onchange: function (isValid) {
                                    canSaveUser = isValid;
                                },
                            }),
                        (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                            label: addUser ? 'Save' : 'Add User',
                            disabled: addUser ? !canSaveUser : false,
                            iconName: addUser ? 'save' : 'add',
                            className: 'right',
                            onclick: function () {
                                if (addUser && canSaveUser) {
                                    model.users.push(newUser);
                                    model.users = model.users.sort(function (a, b) {
                                        return a.name.split(' ').pop().localeCompare(b.name.split(' ').pop());
                                    });
                                    saveModel(model);
                                    newUser = {};
                                    canSaveUser = false;
                                }
                                addUser = !addUser;
                            },
                        }),
                        addUser &&
                            (0, mithril_1.default)(mithril_materialized_1.FlatButton, {
                                label: 'Cancel',
                                iconName: 'cancel',
                                className: 'right',
                                onclick: function () {
                                    newUser = {};
                                    canSaveUser = false;
                                    addUser = false;
                                },
                            }),
                    ]),
                ]),
            ];
        },
    };
};
exports.SettingsPage = SettingsPage;


/***/ }),

/***/ 1802:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AllWordsPage = void 0;
var mithril_1 = __importDefault(__webpack_require__(9402));
var mithril_ui_form_1 = __webpack_require__(8332);
var models_1 = __webpack_require__(2301);
var utils_1 = __webpack_require__(2218);
var ui_1 = __webpack_require__(6904);
var md = "#### Definition of terms";
var toLexicon = function (arr, header) {
    return arr
        .filter(function (c) { return c.title; })
        .map(function (_a) {
        var label = _a.label, title = _a.title;
        return ({
            a: "".concat(header ? "".concat(header, ": ").concat(label) : label),
            b: title + '.',
        });
    });
};
var lexicon = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], toLexicon(utils_1.mainCapabilityOptions, 'Main capability'), true), toLexicon(utils_1.specificCapabilityOptions, 'Specific capability'), true), toLexicon(utils_1.invasivenessOptions, 'Invasiveness'), true), toLexicon(utils_1.maturityOptions, 'Maturity'), true), toLexicon(utils_1.ethicalConsiderationsOptions, 'Ethical considerations'), true), [
    { a: 'Booster', b: 'The intervention can be applied quickly (approx. < 1 hour).' },
    { a: 'Booster', b: 'The intervention can be applied quickly (approx. < 1 hour).' },
    {
        a: 'Quality of evidence',
        b: 'Is based on what the type of research, e.g. meta-analyses, large or small sample sizes, randomized controlled trials, controlled environments, peer-reviewed.',
    },
    { a: 'Evidence indication', b: 'Whether an effect is present, absent, or undecided.' },
    {
        a: 'Effect direction',
        b: 'Whether the intervention increases or decreases a subjects capability level.',
    },
    {
        a: 'HCSE',
        b: 'Human Capability & Survivability Enhancement.',
    },
], false).sort(function (a, b) { return a.a.localeCompare(b.a); });
var textFilter = '';
var AllWordsPage = function () { return ({
    oninit: function (_a) {
        var setPage = _a.attrs.actions.setPage;
        return setPage(models_1.Dashboards.TAXONOMY);
    },
    view: function () {
        var regexFilter = textFilter && new RegExp(textFilter.toLowerCase(), 'i');
        var filteredLexicon = regexFilter
            ? lexicon.filter(function (l) { return regexFilter.test(l.a) || regexFilter.test(l.b); })
            : lexicon;
        return [
            (0, mithril_1.default)('.row', { style: 'height: 100vh' }, [
                (0, mithril_1.default)(ui_1.TextInputWithClear, {
                    label: 'Search for a definition',
                    id: 'filter',
                    initialValue: textFilter,
                    placeholder: 'Part of a word...',
                    iconName: 'filter_list',
                    oninput: function (v) {
                        textFilter = v ? v : '';
                        mithril_1.default.redraw();
                    },
                    style: 'margin-bottom: -4rem',
                    className: 'col s6 offset-m8 m4',
                }),
                (0, mithril_1.default)('.intro.col.s12', mithril_1.default.trust((0, mithril_ui_form_1.render)(md, false))),
                filteredLexicon &&
                    (0, mithril_1.default)('table.highlight', { style: 'margin-bottom: 3rem' }, [
                        (0, mithril_1.default)('thead', (0, mithril_1.default)('tr', [
                            (0, mithril_1.default)('th', 'Term'),
                            (0, mithril_1.default)('th', 'Definition'),
                            // m('th.hide-on-med-and-down', 'Reference'),
                        ])),
                        (0, mithril_1.default)('tbody', filteredLexicon.map(function (l) {
                            return (0, mithril_1.default)('tr', [
                                (0, mithril_1.default)('td', mithril_1.default.trust((0, mithril_ui_form_1.render)((0, utils_1.subSup)(l.a)))),
                                (0, mithril_1.default)('td', mithril_1.default.trust((0, mithril_ui_form_1.render)((0, utils_1.subSup)(l.b)))),
                                // l.ref &&
                                //   m(
                                //     'td.hide-on-med-and-down',
                                //     l.url ? m('a', { target: '_', alt: l.ref, href: l.url }, l.ref) : l.ref
                                //   ),
                            ]);
                        })),
                    ]),
            ]),
        ];
    },
}); };
exports.AllWordsPage = AllWordsPage;


/***/ }),

/***/ 6904:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(4913), exports);
__exportStar(__webpack_require__(2499), exports);


/***/ }),

/***/ 4913:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CircularSpinner = void 0;
var mithril_1 = __importDefault(__webpack_require__(9402));
var CircularSpinner = function () {
    return {
        view: function (_a) {
            var _b = _a.attrs, _c = _b === void 0 ? {} : _b, className = _c.className, style = _c.style;
            className = className || 'center-align';
            style = style || 'margin-top: 20%;';
            return (0, mithril_1.default)('div', { className: className, style: style }, (0, mithril_1.default)('.preloader-wrapper.big.active', (0, mithril_1.default)('.spinner-layer.spinner-blue-only', [
                (0, mithril_1.default)('.circle-clipper.left', (0, mithril_1.default)('.circle')),
                (0, mithril_1.default)('.gap.patch', (0, mithril_1.default)('.circle')),
                (0, mithril_1.default)('.circle-clipper.right', (0, mithril_1.default)('.circle')),
            ])));
        },
    };
};
exports.CircularSpinner = CircularSpinner;


/***/ }),

/***/ 2499:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextInputWithClear = void 0;
var mithril_1 = __importDefault(__webpack_require__(9402));
var mithril_materialized_1 = __webpack_require__(6777);
var utils_1 = __webpack_require__(2218);
var TextInputWithClear = function () {
    var id;
    var input;
    var clearButton;
    var labelElement;
    var debouncedOnInput;
    return {
        oninit: function (_a) {
            var _b = _a.attrs, oninput = _b.oninput, defId = _b.id;
            id = defId || (0, mithril_materialized_1.uniqueId)();
            debouncedOnInput = oninput && (0, utils_1.debounce)(oninput, 500);
        },
        view: function (_a) {
            var _b = _a.attrs, label = _b.label, initialValue = _b.initialValue, placeholder = _b.placeholder, iconName = _b.iconName, _c = _b.className, className = _c === void 0 ? 'col s12' : _c, style = _b.style, onchange = _b.onchange, oninput = _b.oninput;
            return (0, mithril_1.default)('.input-field', { className: className, style: style }, [
                iconName && (0, mithril_1.default)('i.material-icons prefix', iconName),
                (0, mithril_1.default)('input', {
                    id: id,
                    type: 'text',
                    placeholder: placeholder,
                    oncreate: function (_a) {
                        var dom = _a.dom;
                        input = dom;
                        if (initialValue) {
                            input.value = initialValue;
                        }
                    },
                    oninput: function () {
                        clearButton.style.opacity = typeof input.value !== 'undefined' ? '1' : '0';
                        input.value
                            ? labelElement.classList.add('active')
                            : labelElement.classList.remove('active');
                        debouncedOnInput && debouncedOnInput(input.value);
                    },
                    onchange: function () {
                        onchange && onchange(input.value);
                    },
                }),
                (0, mithril_1.default)('label', {
                    for: id,
                    className: initialValue || placeholder ? 'active' : undefined,
                    oncreate: function (_a) {
                        var dom = _a.dom;
                        return (labelElement = dom);
                    },
                }, label),
                (0, mithril_1.default)('a.waves-effect.waves-light.btn-flat', {
                    style: 'opacity: 0; float: right; position: relative; top: -45px; transition: opacity 0.2s linear;',
                    onclick: function () {
                        input.value = '';
                        !placeholder && labelElement.classList.remove('active');
                        clearButton.style.opacity = '0';
                        onchange && onchange('');
                        oninput && oninput('');
                    },
                    oncreate: function (_a) {
                        var dom = _a.dom;
                        clearButton = dom;
                        if (initialValue) {
                            clearButton.style.opacity = '1';
                        }
                    },
                }, (0, mithril_1.default)('i.material-icons', 'clear')),
            ]);
        },
    };
};
exports.TextInputWithClear = TextInputWithClear;


/***/ }),

/***/ 4090:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Dashboards = void 0;
var Dashboards;
(function (Dashboards) {
    Dashboards["HOME"] = "HOME";
    Dashboards["TAXONOMY"] = "TAXONOMY";
    Dashboards["INTERVENTIONS"] = "INTERVENTIONS";
    Dashboards["INTERVENTION"] = "INTERVENTION";
    Dashboards["ABOUT"] = "ABOUT";
    Dashboards["SETTINGS"] = "SETTINGS";
    Dashboards["OVERVIEW"] = "OVERVIEW";
    Dashboards["COMPARE"] = "COMPARE";
    Dashboards["HELP"] = "HELP";
})(Dashboards = exports.Dashboards || (exports.Dashboards = {}));


/***/ }),

/***/ 1485:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AVAILABILITY = exports.EVIDENCE_DIRECTION = exports.EVIDENCE_LEVEL = exports.LITERATURE_TYPE = exports.MATURITY = exports.EFFECT_DIRECTION = exports.INVASIVENESS_OBTRUSIVENESS = exports.YES_NO = exports.PERSONALITY_CAPABILITY = exports.SOCIAL_CAPABILITY = exports.MENTAL_CAPABILITY = exports.PHYSICAL_CAPABILITY = exports.COGNITION_CAPABILITY = exports.SPECIFIC_CAPABILITY = exports.MAIN_CAPABILITY = exports.HPE_CLASSIFICATION = exports.CHOICE = exports.STATUS = exports.INTERVENTION_CATEGORY = exports.defaultModel = void 0;
exports.defaultModel = {
    version: 1,
    lastUpdate: new Date().valueOf(),
    interventions: [],
    users: [],
};
var INTERVENTION_CATEGORY;
(function (INTERVENTION_CATEGORY) {
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["HARDWARE"] = 1] = "HARDWARE";
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["BIO_ENHANCEMENT"] = 2] = "BIO_ENHANCEMENT";
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["PHARMACOLOGICAL_SUBSTANCES_SUPPLEMENTS_AND_NUTRITION"] = 3] = "PHARMACOLOGICAL_SUBSTANCES_SUPPLEMENTS_AND_NUTRITION";
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["TRAINING"] = 4] = "TRAINING";
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["SELF_REGULATION"] = 5] = "SELF_REGULATION";
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["NUTRITION"] = 6] = "NUTRITION";
    INTERVENTION_CATEGORY[INTERVENTION_CATEGORY["OTHER"] = 7] = "OTHER";
})(INTERVENTION_CATEGORY = exports.INTERVENTION_CATEGORY || (exports.INTERVENTION_CATEGORY = {}));
var STATUS;
(function (STATUS) {
    STATUS[STATUS["FIRST_DRAFT"] = 1] = "FIRST_DRAFT";
    STATUS[STATUS["READY_FOR_REVIEW"] = 2] = "READY_FOR_REVIEW";
    STATUS[STATUS["UNDER_REVIEW"] = 3] = "UNDER_REVIEW";
    STATUS[STATUS["REVIEWED"] = 4] = "REVIEWED";
    STATUS[STATUS["FINISHED"] = 5] = "FINISHED";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
var CHOICE;
(function (CHOICE) {
    CHOICE[CHOICE["NONE"] = 1] = "NONE";
    CHOICE[CHOICE["UNKNOWN"] = 2] = "UNKNOWN";
    CHOICE[CHOICE["YES"] = 3] = "YES";
})(CHOICE = exports.CHOICE || (exports.CHOICE = {}));
var HPE_CLASSIFICATION;
(function (HPE_CLASSIFICATION) {
    HPE_CLASSIFICATION[HPE_CLASSIFICATION["OPTIMIZATION"] = 1] = "OPTIMIZATION";
    HPE_CLASSIFICATION[HPE_CLASSIFICATION["ENHANCEMENT"] = 2] = "ENHANCEMENT";
    HPE_CLASSIFICATION[HPE_CLASSIFICATION["DEGRADATION"] = 3] = "DEGRADATION";
})(HPE_CLASSIFICATION = exports.HPE_CLASSIFICATION || (exports.HPE_CLASSIFICATION = {}));
var MAIN_CAPABILITY;
(function (MAIN_CAPABILITY) {
    MAIN_CAPABILITY[MAIN_CAPABILITY["COGNITION"] = 1] = "COGNITION";
    MAIN_CAPABILITY[MAIN_CAPABILITY["PHYSICAL"] = 2] = "PHYSICAL";
    MAIN_CAPABILITY[MAIN_CAPABILITY["MENTAL"] = 3] = "MENTAL";
    MAIN_CAPABILITY[MAIN_CAPABILITY["SOCIAL"] = 4] = "SOCIAL";
    MAIN_CAPABILITY[MAIN_CAPABILITY["PERSONALITY"] = 5] = "PERSONALITY";
})(MAIN_CAPABILITY = exports.MAIN_CAPABILITY || (exports.MAIN_CAPABILITY = {}));
var SPECIFIC_CAPABILITY;
(function (SPECIFIC_CAPABILITY) {
    // Cognitive
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SITUATION_AWARENESS"] = 1] = "SITUATION_AWARENESS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["EXECUTIVE_FUNCTIONS"] = 2] = "EXECUTIVE_FUNCTIONS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["LONG_TERM_MEMORY"] = 3] = "LONG_TERM_MEMORY";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SHORT_TERM_MEMORY"] = 4] = "SHORT_TERM_MEMORY";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["DECLARATIVE_MEMORY"] = 5] = "DECLARATIVE_MEMORY";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["VIGILANCE"] = 6] = "VIGILANCE";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["PSYCHOMOTOR"] = 7] = "PSYCHOMOTOR";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["ATTENTION"] = 8] = "ATTENTION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SPEECH"] = 9] = "SPEECH";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["LEARNING"] = 10] = "LEARNING";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["ARITHMETIC"] = 11] = "ARITHMETIC";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["WORKING_MEMORY"] = 12] = "WORKING_MEMORY";
    // Physical
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["STRENGTH"] = 13] = "STRENGTH";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["ENDURANCE"] = 14] = "ENDURANCE";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["RECOVERY"] = 15] = "RECOVERY";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["STRUCTURAL_TOUGHNESS"] = 16] = "STRUCTURAL_TOUGHNESS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["THERMO_REGULATION"] = 17] = "THERMO_REGULATION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["BLOOD_PRESSURE_REGULATION"] = 18] = "BLOOD_PRESSURE_REGULATION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["IMMUNITY"] = 19] = "IMMUNITY";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["PAIN"] = 20] = "PAIN";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["VISUAL_PERCEPTION"] = 21] = "VISUAL_PERCEPTION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["AUDITORY_PERCEPTION"] = 22] = "AUDITORY_PERCEPTION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["TACTILE_PERCEPTION"] = 23] = "TACTILE_PERCEPTION";
    // Mental
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["EMOTION_REGULATION"] = 24] = "EMOTION_REGULATION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["STRESS"] = 25] = "STRESS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["RESILIENCE"] = 26] = "RESILIENCE";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["MOTIVATION"] = 27] = "MOTIVATION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SELF_ESTEEM"] = 28] = "SELF_ESTEEM";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SENSE_OF_FATIGUE"] = 29] = "SENSE_OF_FATIGUE";
    // Social
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["COLLABORATION"] = 30] = "COLLABORATION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["COMMUNICATION"] = 31] = "COMMUNICATION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SOCIAL_INTELLIGENCE"] = 32] = "SOCIAL_INTELLIGENCE";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["SOCIAL_INTERACTION"] = 33] = "SOCIAL_INTERACTION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["EMPATHY"] = 34] = "EMPATHY";
    // Personality
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["LEADERSHIP"] = 35] = "LEADERSHIP";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["OBEDIENCE"] = 36] = "OBEDIENCE";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["RISK_TAKING"] = 37] = "RISK_TAKING";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["PERSISTANCE"] = 38] = "PERSISTANCE";
    // New
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["INC_EXPLOSIVENESS"] = 39] = "INC_EXPLOSIVENESS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["INC_TRANQUILITY"] = 40] = "INC_TRANQUILITY";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["DEC_PAIN_PERCEPTION"] = 41] = "DEC_PAIN_PERCEPTION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["CONSCIENSCIOUSNESS"] = 42] = "CONSCIENSCIOUSNESS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["OPENNESS"] = 43] = "OPENNESS";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["EXTRAVERSION"] = 44] = "EXTRAVERSION";
    SPECIFIC_CAPABILITY[SPECIFIC_CAPABILITY["NEUROTICISM"] = 45] = "NEUROTICISM";
})(SPECIFIC_CAPABILITY = exports.SPECIFIC_CAPABILITY || (exports.SPECIFIC_CAPABILITY = {}));
var COGNITION_CAPABILITY;
(function (COGNITION_CAPABILITY) {
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["SITUATION_AWARENESS"] = 1] = "SITUATION_AWARENESS";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["EXECUTIVE_FUNCTIONS"] = 2] = "EXECUTIVE_FUNCTIONS";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["LONG_TERM_MEMORY"] = 3] = "LONG_TERM_MEMORY";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["SHORT_TERM_MEMORY"] = 4] = "SHORT_TERM_MEMORY";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["DECLARATIVE_MEMORY"] = 5] = "DECLARATIVE_MEMORY";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["VIGILANCE"] = 6] = "VIGILANCE";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["PSYCHOMOTOR"] = 7] = "PSYCHOMOTOR";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["VISUAL_PERCEPTION"] = 8] = "VISUAL_PERCEPTION";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["AUDITORY_PERCEPTION"] = 9] = "AUDITORY_PERCEPTION";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["TACTILE_PERCEPTION"] = 10] = "TACTILE_PERCEPTION";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["PAIN"] = 11] = "PAIN";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["ATTENTION"] = 12] = "ATTENTION";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["SPEECH"] = 13] = "SPEECH";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["LEARNING"] = 14] = "LEARNING";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["ARITHMETIC"] = 15] = "ARITHMETIC";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["SOCIAL_INTERACTION"] = 16] = "SOCIAL_INTERACTION";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["RECOVERY"] = 17] = "RECOVERY";
    COGNITION_CAPABILITY[COGNITION_CAPABILITY["WORKING_MEMORY"] = 18] = "WORKING_MEMORY";
})(COGNITION_CAPABILITY = exports.COGNITION_CAPABILITY || (exports.COGNITION_CAPABILITY = {}));
var PHYSICAL_CAPABILITY;
(function (PHYSICAL_CAPABILITY) {
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["STRENGTH"] = 1] = "STRENGTH";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["ENDURANCE"] = 2] = "ENDURANCE";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["RECOVERY"] = 3] = "RECOVERY";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["SPEED"] = 4] = "SPEED";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["STRUCTURAL_TOUGHNESS"] = 5] = "STRUCTURAL_TOUGHNESS";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["PRECISION"] = 6] = "PRECISION";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["VISION"] = 7] = "VISION";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["HEARING"] = 8] = "HEARING";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["SENSE_OF_TOUCH"] = 9] = "SENSE_OF_TOUCH";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["ENERGY_EFFICIENCY"] = 10] = "ENERGY_EFFICIENCY";
    PHYSICAL_CAPABILITY[PHYSICAL_CAPABILITY["SLEEP_REGULATION"] = 11] = "SLEEP_REGULATION";
})(PHYSICAL_CAPABILITY = exports.PHYSICAL_CAPABILITY || (exports.PHYSICAL_CAPABILITY = {}));
var MENTAL_CAPABILITY;
(function (MENTAL_CAPABILITY) {
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["EMOTION"] = 1] = "EMOTION";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["STRESS"] = 2] = "STRESS";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["RESILIENCE"] = 3] = "RESILIENCE";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["MOTIVATION"] = 4] = "MOTIVATION";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["SELF_ESTEEM"] = 5] = "SELF_ESTEEM";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["PAIN"] = 6] = "PAIN";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["SELF_REPORTED_FATIGUE"] = 7] = "SELF_REPORTED_FATIGUE";
    MENTAL_CAPABILITY[MENTAL_CAPABILITY["EMPATHY"] = 8] = "EMPATHY";
})(MENTAL_CAPABILITY = exports.MENTAL_CAPABILITY || (exports.MENTAL_CAPABILITY = {}));
var SOCIAL_CAPABILITY;
(function (SOCIAL_CAPABILITY) {
    SOCIAL_CAPABILITY[SOCIAL_CAPABILITY["COLLABORATION"] = 1] = "COLLABORATION";
    SOCIAL_CAPABILITY[SOCIAL_CAPABILITY["COMMUNICATION"] = 2] = "COMMUNICATION";
    SOCIAL_CAPABILITY[SOCIAL_CAPABILITY["SOCIAL_INTELLIGENCE"] = 3] = "SOCIAL_INTELLIGENCE";
})(SOCIAL_CAPABILITY = exports.SOCIAL_CAPABILITY || (exports.SOCIAL_CAPABILITY = {}));
var PERSONALITY_CAPABILITY;
(function (PERSONALITY_CAPABILITY) {
    PERSONALITY_CAPABILITY[PERSONALITY_CAPABILITY["LEADERSHIP"] = 1] = "LEADERSHIP";
    PERSONALITY_CAPABILITY[PERSONALITY_CAPABILITY["OBEDIENCE"] = 2] = "OBEDIENCE";
    PERSONALITY_CAPABILITY[PERSONALITY_CAPABILITY["MORALE"] = 3] = "MORALE";
    PERSONALITY_CAPABILITY[PERSONALITY_CAPABILITY["RISK_TAKING"] = 4] = "RISK_TAKING";
    PERSONALITY_CAPABILITY[PERSONALITY_CAPABILITY["PERSISTANCE"] = 5] = "PERSISTANCE";
})(PERSONALITY_CAPABILITY = exports.PERSONALITY_CAPABILITY || (exports.PERSONALITY_CAPABILITY = {}));
var YES_NO;
(function (YES_NO) {
    //CAN BE USED AS A BOOSTER
    YES_NO[YES_NO["YES"] = 1] = "YES";
    YES_NO[YES_NO["NO"] = 2] = "NO";
})(YES_NO = exports.YES_NO || (exports.YES_NO = {}));
var INVASIVENESS_OBTRUSIVENESS;
(function (INVASIVENESS_OBTRUSIVENESS) {
    INVASIVENESS_OBTRUSIVENESS[INVASIVENESS_OBTRUSIVENESS["LOW"] = 1] = "LOW";
    INVASIVENESS_OBTRUSIVENESS[INVASIVENESS_OBTRUSIVENESS["MEDIUM"] = 2] = "MEDIUM";
    INVASIVENESS_OBTRUSIVENESS[INVASIVENESS_OBTRUSIVENESS["HIGH"] = 3] = "HIGH";
})(INVASIVENESS_OBTRUSIVENESS = exports.INVASIVENESS_OBTRUSIVENESS || (exports.INVASIVENESS_OBTRUSIVENESS = {}));
var EFFECT_DIRECTION;
(function (EFFECT_DIRECTION) {
    EFFECT_DIRECTION[EFFECT_DIRECTION["NEGATIVE"] = 1] = "NEGATIVE";
    EFFECT_DIRECTION[EFFECT_DIRECTION["POSITIVE"] = 2] = "POSITIVE";
})(EFFECT_DIRECTION = exports.EFFECT_DIRECTION || (exports.EFFECT_DIRECTION = {}));
var MATURITY;
(function (MATURITY) {
    MATURITY[MATURITY["LOW"] = 1] = "LOW";
    MATURITY[MATURITY["MEDIUM"] = 2] = "MEDIUM";
    MATURITY[MATURITY["HIGH"] = 3] = "HIGH";
})(MATURITY = exports.MATURITY || (exports.MATURITY = {}));
var LITERATURE_TYPE;
(function (LITERATURE_TYPE) {
    LITERATURE_TYPE[LITERATURE_TYPE["CASE_STUDY"] = 1] = "CASE_STUDY";
    LITERATURE_TYPE[LITERATURE_TYPE["THESIS"] = 2] = "THESIS";
    LITERATURE_TYPE[LITERATURE_TYPE["REPORT"] = 3] = "REPORT";
    LITERATURE_TYPE[LITERATURE_TYPE["TECHNICAL_REPORT"] = 4] = "TECHNICAL_REPORT";
    LITERATURE_TYPE[LITERATURE_TYPE["PRODUCER_WEBSITE"] = 5] = "PRODUCER_WEBSITE";
    LITERATURE_TYPE[LITERATURE_TYPE["WHITE_PAPER"] = 6] = "WHITE_PAPER";
    LITERATURE_TYPE[LITERATURE_TYPE["CONFERENCE_PROCEEDING"] = 7] = "CONFERENCE_PROCEEDING";
    LITERATURE_TYPE[LITERATURE_TYPE["PATENT"] = 8] = "PATENT";
    LITERATURE_TYPE[LITERATURE_TYPE["POPULAR_MEDIA"] = 9] = "POPULAR_MEDIA";
    LITERATURE_TYPE[LITERATURE_TYPE["CONSENSUS_STATEMENT"] = 10] = "CONSENSUS_STATEMENT";
    LITERATURE_TYPE[LITERATURE_TYPE["EMPERICAL_PR"] = 11] = "EMPERICAL_PR";
    LITERATURE_TYPE[LITERATURE_TYPE["REVIEW_PR"] = 12] = "REVIEW_PR";
    LITERATURE_TYPE[LITERATURE_TYPE["SYSTEMATIC_REVIEW_PR"] = 13] = "SYSTEMATIC_REVIEW_PR";
    LITERATURE_TYPE[LITERATURE_TYPE["META_ANALYSIS_PR"] = 14] = "META_ANALYSIS_PR";
})(LITERATURE_TYPE = exports.LITERATURE_TYPE || (exports.LITERATURE_TYPE = {}));
var EVIDENCE_LEVEL;
(function (EVIDENCE_LEVEL) {
    EVIDENCE_LEVEL[EVIDENCE_LEVEL["GOOD"] = 1] = "GOOD";
    EVIDENCE_LEVEL[EVIDENCE_LEVEL["MEDIUM"] = 2] = "MEDIUM";
    EVIDENCE_LEVEL[EVIDENCE_LEVEL["LOW"] = 3] = "LOW";
})(EVIDENCE_LEVEL = exports.EVIDENCE_LEVEL || (exports.EVIDENCE_LEVEL = {}));
var EVIDENCE_DIRECTION;
(function (EVIDENCE_DIRECTION) {
    EVIDENCE_DIRECTION[EVIDENCE_DIRECTION["GENERALLY_IN_FAVOR"] = 1] = "GENERALLY_IN_FAVOR";
    EVIDENCE_DIRECTION[EVIDENCE_DIRECTION["GENERALLY_AGAINST"] = 2] = "GENERALLY_AGAINST";
    EVIDENCE_DIRECTION[EVIDENCE_DIRECTION["UNDECIDED"] = 3] = "UNDECIDED";
})(EVIDENCE_DIRECTION = exports.EVIDENCE_DIRECTION || (exports.EVIDENCE_DIRECTION = {}));
var AVAILABILITY;
(function (AVAILABILITY) {
    AVAILABILITY[AVAILABILITY["YES_WITHIN_THE_NETHERLANDS"] = 1] = "YES_WITHIN_THE_NETHERLANDS";
    AVAILABILITY[AVAILABILITY["YES_WITHIN_THE_EU"] = 2] = "YES_WITHIN_THE_EU";
    AVAILABILITY[AVAILABILITY["YES_OUTSIDE_THE_EU"] = 3] = "YES_OUTSIDE_THE_EU";
    AVAILABILITY[AVAILABILITY["NO"] = 4] = "NO";
    AVAILABILITY[AVAILABILITY["UNKNOWN"] = 5] = "UNKNOWN";
})(AVAILABILITY = exports.AVAILABILITY || (exports.AVAILABILITY = {}));


/***/ }),

/***/ 2301:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(4090), exports);
__exportStar(__webpack_require__(1485), exports);
__exportStar(__webpack_require__(2871), exports);


/***/ }),

/***/ 2871:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ 4445:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(3628), exports);
__exportStar(__webpack_require__(2464), exports);


/***/ }),

/***/ 3628:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.cells = exports.appActions = void 0;
var mithril_1 = __importDefault(__webpack_require__(9402));
var meiosis_setup_1 = __webpack_require__(9806);
var _1 = __webpack_require__(4445);
var models_1 = __webpack_require__(2301);
var local_ldb_1 = __webpack_require__(7922);
var MODEL_KEY = 'HPET_MODEL';
var CUR_USER_KEY = 'HPET_CUR_USER';
var BOOKMARKS_KEY = 'HPET_BOOKMARK';
var COMPARE_LIST_KEY = 'HPET_COMPARE_LIST_KEY';
var appActions = function (_a) {
    var update = _a.update;
    return ({
        // addDucks: (cell, amount) => {
        //   cell.update({ ducks: (value) => value + amount });
        // },
        setPage: function (page) { return update({ page: page }); },
        changePage: function (page, params, query) {
            _1.routingSvc && _1.routingSvc.switchTo(page, params, query);
            update({ page: page });
        },
        saveModel: function (model) {
            model.lastUpdate = Date.now();
            model.version = model.version ? ++model.version : 1;
            if (model.interventions)
                model.interventions.sort(function (a, b) {
                    return (a.intervention || '').localeCompare(b.intervention || '');
                });
            local_ldb_1.ldb.set(MODEL_KEY, JSON.stringify(model));
            // console.log(JSON.stringify(model, null, 2));
            update({ model: function () { return model; } });
        },
        saveCurUser: function (curUser) {
            local_ldb_1.ldb.set(CUR_USER_KEY, curUser);
            update({ curUser: curUser });
        },
        setIntervention: function (curIntervention) {
            return update({ curIntervention: function () { return curIntervention; } });
        },
        bookmark: function (id) {
            return update({
                bookmarks: function (bookmarks) {
                    if (bookmarks === void 0) { bookmarks = []; }
                    var newBookmarks = (function () {
                        if (bookmarks.indexOf(id) >= 0)
                            return bookmarks.filter(function (b) { return b !== id; });
                        bookmarks.push(id);
                        return bookmarks;
                    })();
                    local_ldb_1.ldb.set(BOOKMARKS_KEY, JSON.stringify(newBookmarks));
                    return newBookmarks;
                },
            });
        },
        compare: function (id) {
            return update({
                compareList: function (compareList) {
                    if (compareList === void 0) { compareList = []; }
                    var newCompareList = (function () {
                        if (compareList.indexOf(id) >= 0)
                            return compareList.filter(function (b) { return b !== id; });
                        compareList.push(id);
                        return compareList;
                    })();
                    local_ldb_1.ldb.set(COMPARE_LIST_KEY, JSON.stringify(newCompareList));
                    return newCompareList;
                },
            });
        },
        setCompareList: function (ids) {
            local_ldb_1.ldb.set(COMPARE_LIST_KEY, JSON.stringify(ids));
            update({ compareList: function () { return ids; } });
        },
        setSearchFilters: function (searchFilters) {
            // console.log(JSON.stringify(searchFilters, null, 2));
            update({ searchFilters: searchFilters });
        },
    });
};
exports.appActions = appActions;
var initialize = function (update) { return __awaiter(void 0, void 0, void 0, function () {
    var ds, model, b, bookmarks, c, compareList, curUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, local_ldb_1.ldb.get(MODEL_KEY)];
            case 1:
                ds = _a.sent();
                model = ds ? JSON.parse(ds) : models_1.defaultModel;
                return [4 /*yield*/, local_ldb_1.ldb.get(BOOKMARKS_KEY)];
            case 2:
                b = _a.sent();
                bookmarks = b ? JSON.parse(b) : [];
                return [4 /*yield*/, local_ldb_1.ldb.get(COMPARE_LIST_KEY)];
            case 3:
                c = _a.sent();
                compareList = c ? JSON.parse(c) : [];
                return [4 /*yield*/, local_ldb_1.ldb.get(CUR_USER_KEY)];
            case 4:
                curUser = (_a.sent()) || '';
                update({
                    model: function () { return model; },
                    bookmarks: function () { return bookmarks; },
                    compareList: function () { return compareList; },
                    curUser: curUser,
                });
                return [2 /*return*/];
        }
    });
}); };
var app = {
    initial: {
        page: models_1.Dashboards.HOME,
        model: models_1.defaultModel,
        curIntervention: undefined,
        bookmarks: [],
        compareList: [],
        curUser: 'mod',
        searchFilters: {},
    },
};
exports.cells = (0, meiosis_setup_1.meiosisSetup)({ app: app });
initialize((0, exports.cells)().update);
exports.cells.map(function () {
    mithril_1.default.redraw();
});


/***/ }),

/***/ 1472:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Source: https://github.com/cra-template/pwa/blob/fc9613279681a06606f90514926b8078db629ec6/packages/cra-template-pwa/template/src/serviceWorkerRegistration.js
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unregister = exports.registerServiceWorker = void 0;
var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function registerServiceWorker(config) {
    if ( true && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        var publicUrl = new URL({"NODE_ENV":"production","PUBLIC_URL":"https://tno.github.io/hei/"}.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebook/create-react-app/issues/2374
            console.log("Could not register service worker. Public path ".concat(publicUrl, " is not origin."));
            return;
        }
        window.addEventListener('load', function () {
            var swUrl = "".concat({"NODE_ENV":"production","PUBLIC_URL":"https://tno.github.io/hei/"}.PUBLIC_URL, "service-worker.js");
            if (isLocalhost) {
                // This is running on localhost. Let's check if a service worker still exists or not.
                checkValidServiceWorker(swUrl, config);
                // Add some additional logging to localhost, pointing developers to the
                // service worker/PWA documentation.
                navigator.serviceWorker.ready.then(function () {
                    console.log('This web app is being served cache-first by a service worker.');
                });
            }
            else {
                // Is not localhost. Just register service worker
                registerValidSW(swUrl, config);
            }
        });
    }
}
exports.registerServiceWorker = registerServiceWorker;
function registerValidSW(swUrl, config) {
    navigator.serviceWorker
        .register(swUrl)
        .then(function (registration) {
        registration.onupdatefound = function () {
            var installingWorker = registration.installing;
            if (installingWorker == null) {
                return;
            }
            installingWorker.onstatechange = function () {
                if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                        // At this point, the updated precached content has been fetched,
                        // but the previous service worker will still serve the older
                        // content until all client tabs are closed.
                        console.log('New content is available and will be used when all ' +
                            'tabs for this page are closed. See https://cra.link/PWA.');
                        // Execute callback
                        if (config && config.onUpdate) {
                            config.onUpdate(registration);
                        }
                    }
                    else {
                        // At this point, everything has been precached.
                        // It's the perfect time to display a
                        // "Content is cached for offline use." message.
                        console.log('Content is cached for offline use.');
                        // Execute callback
                        if (config && config.onSuccess) {
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    })
        .catch(function (error) {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl, config) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl, {
        headers: { 'Service-Worker': 'script' },
    })
        .then(function (response) {
        // Ensure service worker exists, and that we really are getting a JS file.
        var contentType = response.headers.get('content-type');
        if (response.status === 404 ||
            (contentType != null && contentType.indexOf('javascript') === -1)) {
            // No service worker found. Probably a different app. Reload the page.
            navigator.serviceWorker.ready.then(function (registration) {
                registration.unregister().then(function () {
                    window.location.reload();
                });
            });
        }
        else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl, config);
        }
    })
        .catch(function () {
        console.log('No internet connection found. App is running in offline mode.');
    });
}
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
            .then(function (registration) {
            registration.unregister();
        })
            .catch(function (error) {
            console.error(error.message);
        });
    }
}
exports.unregister = unregister;


/***/ }),

/***/ 2464:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routingSvc = void 0;
var mithril_1 = __importDefault(__webpack_require__(9402));
var models_1 = __webpack_require__(2301);
var meiosis_1 = __webpack_require__(3628);
var layout_1 = __webpack_require__(7446);
var components_1 = __webpack_require__(1198);
var intervention_overview_page_1 = __webpack_require__(7205);
var RoutingService = /** @class */ (function () {
    function RoutingService(dashboards) {
        this.setList(dashboards);
    }
    RoutingService.prototype.getList = function () {
        return this.dashboards;
    };
    RoutingService.prototype.setList = function (list) {
        this.dashboards = Object.freeze(list);
    };
    Object.defineProperty(RoutingService.prototype, "defaultRoute", {
        get: function () {
            var dashboard = this.dashboards.filter(function (d) { return d.default; }).shift();
            return dashboard ? dashboard.route : this.dashboards[0].route;
        },
        enumerable: false,
        configurable: true
    });
    RoutingService.prototype.route = function (dashboardId, query) {
        var dashboard = this.dashboards.filter(function (d) { return d.id === dashboardId; }).shift();
        return dashboard
            ? '#!' + dashboard.route + (query ? '?' + mithril_1.default.buildQueryString(query) : '')
            : this.defaultRoute;
    };
    RoutingService.prototype.href = function (dashboardId, params) {
        if (params === void 0) { params = ''; }
        var dashboard = this.dashboards.filter(function (d) { return d.id === dashboardId; }).shift();
        return dashboard ? "#!".concat(dashboard.route.replace(/:\w*/, '')).concat(params) : this.defaultRoute;
    };
    RoutingService.prototype.switchTo = function (dashboardId, params, query) {
        var dashboard = this.dashboards.filter(function (d) { return d.id === dashboardId; }).shift();
        if (dashboard) {
            var url = dashboard.route + (query ? '?' + mithril_1.default.buildQueryString(query) : '');
            mithril_1.default.route.set(url, params);
        }
    };
    RoutingService.prototype.routingTable = function () {
        // console.log('INIT');
        return this.dashboards.reduce(function (p, c) {
            p[c.route] =
                c.hasNavBar === false
                    ? {
                        render: function () {
                            var cell = (0, meiosis_1.cells)();
                            var actions = (0, meiosis_1.appActions)(cell);
                            return (0, mithril_1.default)(c.component, __assign(__assign({}, cell), { actions: actions }));
                        },
                    }
                    : {
                        // onmatch:
                        //   c.id === Dashboards.LOGIN
                        //     ? undefined
                        //     : () => {
                        //         if (c.id !== Dashboards.HOME && !Auth.isLoggedIn()) m.route.set('/login');
                        //       },
                        render: function () {
                            var cell = (0, meiosis_1.cells)();
                            var actions = (0, meiosis_1.appActions)(cell);
                            return (0, mithril_1.default)(layout_1.Layout, __assign(__assign({}, cell), { actions: actions, options: {} }), (0, mithril_1.default)(c.component, __assign(__assign({}, cell), { actions: actions })));
                        },
                    };
            return p;
        }, {});
    };
    return RoutingService;
}());
exports.routingSvc = new RoutingService([
    {
        id: models_1.Dashboards.HOME,
        title: 'HOME',
        icon: 'home',
        route: '/',
        visible: true,
        component: components_1.HomePage,
    },
    {
        id: models_1.Dashboards.INTERVENTIONS,
        title: 'OVERVIEW',
        icon: 'dashboard',
        // icon: 'display_settings',
        route: '/overview',
        visible: true,
        component: intervention_overview_page_1.InterventionOverviewPage,
    },
    {
        id: models_1.Dashboards.INTERVENTION,
        title: 'INTERVENTION',
        icon: 'visibility',
        route: '/intervention',
        visible: true,
        component: components_1.InterventionPage,
    },
    {
        id: models_1.Dashboards.COMPARE,
        title: 'Compare',
        icon: 'balance',
        route: '/compare',
        visible: true,
        component: components_1.ComparisonPage,
    },
    {
        id: models_1.Dashboards.SETTINGS,
        title: 'Settings',
        icon: 'settings',
        route: '/settings',
        visible: true,
        component: components_1.SettingsPage,
    },
    {
        id: models_1.Dashboards.TAXONOMY,
        title: 'TAXONOMY',
        icon: 'book',
        route: '/taxonomy',
        visible: true,
        component: components_1.AllWordsPage,
    },
    {
        id: models_1.Dashboards.ABOUT,
        title: 'About',
        icon: 'info',
        route: '/about',
        visible: true,
        component: components_1.AboutPage,
    },
]);


/***/ }),

/***/ 2218:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isUnique = exports.resolveRefs = exports.refRegex = exports.markdown2html = exports.interventionForm = exports.boosterOptions = exports.availabilityOptions = exports.evidenceLevelOptions = exports.evidenceDirOptions = exports.ethicalConsiderationsOptions = exports.effectDirectionOptions = exports.maturityOptions = exports.invasivenessOptions = exports.specificPersonalityCapabilityOptions = exports.specificSocialCapabilityOptions = exports.specificMentalCapabilityOptions = exports.specificPhysicalCapabilityOptions = exports.specificCognitiveCapabilityOptions = exports.specificCapabilityOptions = exports.mainCapabilityOptions = exports.hpeClassificationOptions = exports.interventionCategoryOptions = exports.resolveChoice = exports.NoYesUnknown = exports.statusOptions = exports.optionsToTxt = exports.joinListWithAnd = exports.getOptionsLabel = exports.getTextColorFromBackground = exports.formatDate = exports.debounce = exports.capitalize = exports.subSup = void 0;
var mithril_1 = __importDefault(__webpack_require__(9402));
var mithril_materialized_1 = __webpack_require__(6777);
var mithril_ui_form_1 = __webpack_require__(8332);
var models_1 = __webpack_require__(2301);
var supRegex = /\^([^_ ]+)(_|$|\s)/g;
var subRegex = /\_([^\^ ]+)(\^|$|\s)/g;
/** Expand markdown notation by converting A_1 to subscript and x^2 to superscript. */
var subSup = function (s) {
    return s ? s.replace(supRegex, "<sup>$1</sup>").replace(subRegex, "<sub>$1</sub>") : s;
};
exports.subSup = subSup;
var capitalize = function (s) { return s && s.charAt(0).toUpperCase() + s.slice(1); };
exports.capitalize = capitalize;
/**
 * Debounce function wrapper, i.e. between consecutive calls of the wrapped function,
 * there will be at least TIMEOUT milliseconds.
 * @param func Function to execute
 * @param timeout Timeout in milliseconds
 * @returns
 */
var debounce = function (func, timeout) {
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = window.setTimeout(function () {
            func.apply(void 0, args);
        }, timeout);
    };
};
exports.debounce = debounce;
var formatDate = function (date) {
    if (date === void 0) { date = new Date(); }
    var d = new Date(date);
    return "".concat(d.getFullYear(), "-").concat((0, mithril_materialized_1.padLeft)(d.getMonth() + 1), "-").concat((0, mithril_materialized_1.padLeft)(d.getDate()));
};
exports.formatDate = formatDate;
/**
 * Get a color that is clearly visible against a background color
 * @param backgroundColor Background color, e.g. #99AABB
 * @returns
 */
var getTextColorFromBackground = function (backgroundColor) {
    if (!backgroundColor) {
        return 'black-text';
    }
    var c = backgroundColor.substring(1); // strip #
    var rgb = parseInt(c, 16); // convert rrggbb to decimal
    var r = (rgb >> 16) & 0xff; // extract red
    var g = (rgb >> 8) & 0xff; // extract green
    var b = (rgb >> 0) & 0xff; // extract blue
    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
    return luma < 105 ? 'white-text' : 'black-text';
};
exports.getTextColorFromBackground = getTextColorFromBackground;
var getOptionsLabel = function (options, id, showTitle) {
    if (showTitle === void 0) { showTitle = true; }
    if (!id) {
        return '';
    }
    var found = options.filter(function (o) { return o.id === id; }).shift();
    return found
        ? showTitle
            ? "".concat(found.label).concat(found.title ? " (".concat(found.title.replace(/\.\s*$/, ''), ")") : '')
            : found.label
        : '';
};
exports.getOptionsLabel = getOptionsLabel;
/** Join a list of items with a comma, and use AND for the last item in the list. */
var joinListWithAnd = function (arr, and, prefix) {
    if (arr === void 0) { arr = []; }
    if (and === void 0) { and = 'and'; }
    if (prefix === void 0) { prefix = ''; }
    var terms = arr.filter(function (term) { return term; });
    return terms.length === 0
        ? ''
        : prefix +
            (terms.length === 1
                ? terms[0]
                : "".concat(terms
                    .slice(0, terms.length - 1)
                    .map(function (t, i) { return (i === 0 || typeof t === 'undefined' ? t : t.toLowerCase()); })
                    .join(', '), " ").concat(and, " ").concat(terms[terms.length - 1].toLowerCase()));
};
exports.joinListWithAnd = joinListWithAnd;
/** Convert a list of options to text (label + title?) */
var optionsToTxt = function (selectedIds, options, showTitle) {
    if (showTitle === void 0) { showTitle = true; }
    if (!selectedIds || (selectedIds instanceof Array && selectedIds.length === 0))
        return ['−'];
    var ids = selectedIds instanceof Array ? selectedIds : [selectedIds];
    var lookup = options.reduce(function (acc, cur) {
        acc[cur.id] = "".concat(cur.label).concat(showTitle && cur.title ? " (".concat(cur.title, ")") : '');
        return acc;
    }, {});
    return ids.map(function (id) { return lookup[id]; });
};
exports.optionsToTxt = optionsToTxt;
exports.statusOptions = [
    { id: models_1.STATUS.FIRST_DRAFT, label: 'First draft' },
    { id: models_1.STATUS.READY_FOR_REVIEW, label: 'Ready for review' },
    { id: models_1.STATUS.UNDER_REVIEW, label: 'Under review' },
    { id: models_1.STATUS.REVIEWED, label: 'Reviewed' },
    { id: models_1.STATUS.FINISHED, label: 'Finished' },
];
exports.NoYesUnknown = [
    { id: models_1.CHOICE.NONE, label: 'None' },
    { id: models_1.CHOICE.UNKNOWN, label: 'Unknown' },
    { id: models_1.CHOICE.YES, label: 'Yes' },
];
var resolveChoice = function (choice, text) {
    return !choice || choice === models_1.CHOICE.NONE
        ? exports.NoYesUnknown[0].label
        : choice === models_1.CHOICE.UNKNOWN
            ? exports.NoYesUnknown[1].label
            : text;
};
exports.resolveChoice = resolveChoice;
exports.interventionCategoryOptions = [
    { id: models_1.INTERVENTION_CATEGORY.HARDWARE, label: 'Hardware', title: '' },
    { id: models_1.INTERVENTION_CATEGORY.BIO_ENHANCEMENT, label: 'Bio-enhancement', title: '' },
    {
        id: models_1.INTERVENTION_CATEGORY.PHARMACOLOGICAL_SUBSTANCES_SUPPLEMENTS_AND_NUTRITION,
        label: 'Pharmacological substances, supplements and nutrition',
        title: '',
    },
    { id: models_1.INTERVENTION_CATEGORY.TRAINING, label: 'Training', title: '' },
    { id: models_1.INTERVENTION_CATEGORY.SELF_REGULATION, label: 'Self-regulation', title: '' },
    { id: models_1.INTERVENTION_CATEGORY.NUTRITION, label: 'Nutrition', title: '' },
    { id: models_1.INTERVENTION_CATEGORY.OTHER, label: 'Other', title: '' },
];
exports.hpeClassificationOptions = [
    {
        id: models_1.HPE_CLASSIFICATION.OPTIMIZATION,
        label: 'Optimization',
        title: 'The intervention improves human performance on a specific capability within biological limits',
    },
    {
        id: models_1.HPE_CLASSIFICATION.ENHANCEMENT,
        label: 'Enhancement',
        title: 'The intervention improves human performance on a specific capability above biological limits',
    },
    {
        id: models_1.HPE_CLASSIFICATION.DEGRADATION,
        label: 'Degradation',
        title: 'The intervention decreases human performance on a specific capability',
    },
];
exports.mainCapabilityOptions = [
    {
        id: models_1.MAIN_CAPABILITY.COGNITION,
        label: 'Cognition',
        title: 'The capability to perform intellectual functions and activities such as thinking, planning, maintaining situation awareness, vigilance, perception and memory',
    },
    {
        id: models_1.MAIN_CAPABILITY.PHYSICAL,
        label: 'Physical',
        title: 'The capability to perform body movements at, for instance, high speed, accuracy, strength or with long endurance',
    },
    {
        id: models_1.MAIN_CAPABILITY.MENTAL,
        label: 'Mental',
        title: 'The capability to achieve an optimal emotional and motivational state, for instance through self-confidence or mental thoughness',
    },
    {
        id: models_1.MAIN_CAPABILITY.SOCIAL,
        label: 'Social',
        title: 'The capability to achieve goals with others, for instance through leadership, team situational awareness, or connectedness',
    },
    {
        id: models_1.MAIN_CAPABILITY.PERSONALITY,
        label: 'Personality',
        title: 'Having an optimal, long-term, style of thinking, feeling and behaving. Examples include dispositional optimism, internal locus of control, self-regulation, and anxiety sensitivity',
    },
];
exports.specificCapabilityOptions = [
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.SITUATION_AWARENESS,
        label: 'Improved situation awareness',
        title: 'The perception of environmental elements and events with respect to time or space, the comprehension of their meaning, and the projection of their future status',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.EXECUTIVE_FUNCTIONS,
        label: 'Improved executive functions',
        title: 'Executive functions (collectively referred to as executive function and cognitive control) are a set of cognitive processes that are necessary for the cognitive control of behavior: selecting and successfully monitoring behaviors that facilitate the attainment of chosen goals. Executive functions include basic cognitive processes such as attentional control, cognitive inhibition, inhibitory control, working memory, and cognitive flexibility',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.LONG_TERM_MEMORY,
        label: 'Increased long-term memory',
        title: 'Long-term memory allows us to store information for long periods of time. This information may be retrieved consciously (explicit memory) or unconsciously (implicit memory)',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.SHORT_TERM_MEMORY,
        label: 'Increased short-term memory',
        title: 'Short-term memory refers to the information processed by the individual in a short period of time. Working memory performs this processing',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.DECLARATIVE_MEMORY,
        label: 'Increased declarative memory',
        title: 'What defines declarative memory is the ability to consciously recollect the situation in which you learned something new',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.VIGILANCE,
        label: 'Increased vigilance',
        title: 'Vigilance is devoted attentiveness or watchfulness',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.PSYCHOMOTOR,
        label: 'Increased psychomotor ability',
        title: 'Psychomotor abilities are skills such as hand-eye coordination, balance, and reaction time that arise from a unity of cognitive and physical functions',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.ATTENTION,
        label: 'Increased attention',
        title: 'Attention is the ability to focus and maintain interest in a given task or idea while avoiding distractions',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.SPEECH,
        label: 'Improved speech',
        title: 'The delivery of language through the mouth',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.LEARNING,
        label: 'Increased learning',
        title: 'The acquisition of knowledge or skills through study, experience, or being taught',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.ARITHMETIC,
        label: 'Increased arithmetic ability',
        title: 'The ability to perform numerical calculations, such as addition, subtraction, multiplication, and division',
    },
    {
        mc: models_1.MAIN_CAPABILITY.COGNITION,
        id: models_1.SPECIFIC_CAPABILITY.WORKING_MEMORY,
        label: 'Increased working memory',
        title: 'Working memory is the small amount of information that can be held briefly in the mind and is used in the execution of cognitive tasks',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.STRENGTH,
        label: 'Increased strength',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.ENDURANCE,
        label: 'Increased endurance',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.RECOVERY,
        label: 'Increased recovery',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.STRUCTURAL_TOUGHNESS,
        label: 'Increased structural toughness',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.THERMO_REGULATION,
        label: 'Increased thermoregulation',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.BLOOD_PRESSURE_REGULATION,
        label: 'Improved blood pressure regulation',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.IMMUNITY,
        label: 'Inreased immunity',
        title: '',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.PAIN,
        label: 'Decreased pain',
        title: 'Potentially damaging mechanical, thermal, and chemical stimuli are detected by nerve endings called nociceptors, which are found in the skin, on internal surfaces such as the periosteum, joint surfaces, and in some internal organs',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.VISUAL_PERCEPTION,
        label: 'Increased visual perception',
        title: 'Visual perception is the ability to perceive our surroundings through the light that enters our eyes',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.AUDITORY_PERCEPTION,
        label: 'Increased auditory perception',
        title: 'Auditory perception could be defined as the ability to receive and interpret information that reached the ears through audible frequency waves transmitted through the air or other means.',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.TACTILE_PERCEPTION,
        label: 'Increased tactile perception',
        title: 'The ability to perceive objects or judge sensations through the sense of touch.',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PHYSICAL,
        id: models_1.SPECIFIC_CAPABILITY.INC_EXPLOSIVENESS,
        label: 'Increased explosiveness',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.EMOTION_REGULATION,
        label: 'Improved mood',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.INC_TRANQUILITY,
        label: 'Increased tranquility',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.STRESS,
        label: 'Decreased stress',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.RESILIENCE,
        label: 'Improved resilience',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.MOTIVATION,
        label: 'Increased motivation',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.SELF_ESTEEM,
        label: 'Increased self-esteem',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.SENSE_OF_FATIGUE,
        label: 'Decreased sense of fatigue',
    },
    {
        mc: models_1.MAIN_CAPABILITY.MENTAL,
        id: models_1.SPECIFIC_CAPABILITY.DEC_PAIN_PERCEPTION,
        label: 'Decreased pain perception',
    },
    {
        mc: models_1.MAIN_CAPABILITY.SOCIAL,
        id: models_1.SPECIFIC_CAPABILITY.COLLABORATION,
        label: 'Increased collaboration',
    },
    {
        mc: models_1.MAIN_CAPABILITY.SOCIAL,
        id: models_1.SPECIFIC_CAPABILITY.COMMUNICATION,
        label: 'Improved communication',
    },
    {
        mc: models_1.MAIN_CAPABILITY.SOCIAL,
        id: models_1.SPECIFIC_CAPABILITY.SOCIAL_INTELLIGENCE,
        label: 'Improved social intelligence',
    },
    {
        mc: models_1.MAIN_CAPABILITY.SOCIAL,
        id: models_1.SPECIFIC_CAPABILITY.SOCIAL_INTERACTION,
        label: 'Social interaction',
    },
    {
        mc: models_1.MAIN_CAPABILITY.SOCIAL,
        id: models_1.SPECIFIC_CAPABILITY.EMPATHY,
        label: 'Increased empathy',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.LEADERSHIP,
        label: 'Improved leadership',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.OBEDIENCE,
        label: 'Increased obedience',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.RISK_TAKING,
        label: 'Increased risk-taking',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.PERSISTANCE,
        label: 'Increased persistance',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.CONSCIENSCIOUSNESS,
        label: 'Consciensciousness',
        title: 'Conscientiousness is the personality trait of being careful, or diligent. Conscientiousness implies a desire to do a task well, and to take obligations to others seriously',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.OPENNESS,
        label: 'Openness',
        title: 'Openness involves: active imagination (fantasy), aesthetic sensitivity, attentiveness to inner feelings, preference for variety (adventurousness), intellectual curiosity, and challenging authority (psychological liberalism)',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.EXTRAVERSION,
        label: 'Extraversion',
        title: 'Extraversion is defined by the general tendency to experience positive emotions, as well as by traits such as sociable, lively, and active',
    },
    {
        mc: models_1.MAIN_CAPABILITY.PERSONALITY,
        id: models_1.SPECIFIC_CAPABILITY.NEUROTICISM,
        label: 'Neuroticism',
        title: 'Neuroticism is the trait disposition to experience negative affects, including anger, anxiety, self‐consciousness, irritability, emotional instability, and depression',
    },
];
exports.specificCognitiveCapabilityOptions = exports.specificCapabilityOptions.filter(function (_a) {
    var mc = _a.mc;
    return mc === models_1.MAIN_CAPABILITY.COGNITION;
});
exports.specificPhysicalCapabilityOptions = exports.specificCapabilityOptions.filter(function (_a) {
    var mc = _a.mc;
    return mc === models_1.MAIN_CAPABILITY.PHYSICAL;
});
exports.specificMentalCapabilityOptions = exports.specificCapabilityOptions.filter(function (_a) {
    var mc = _a.mc;
    return mc === models_1.MAIN_CAPABILITY.MENTAL;
});
exports.specificSocialCapabilityOptions = exports.specificCapabilityOptions.filter(function (_a) {
    var mc = _a.mc;
    return mc === models_1.MAIN_CAPABILITY.SOCIAL;
});
exports.specificPersonalityCapabilityOptions = exports.specificCapabilityOptions.filter(function (_a) {
    var mc = _a.mc;
    return mc === models_1.MAIN_CAPABILITY.PERSONALITY;
});
exports.invasivenessOptions = [
    {
        id: models_1.INVASIVENESS_OBTRUSIVENESS.LOW,
        label: 'Low',
        title: 'No physical substance enters the body',
    },
    {
        id: models_1.INVASIVENESS_OBTRUSIVENESS.MEDIUM,
        label: 'Medium',
        title: 'Supplement, heavy training, intervention with low risk',
    },
    {
        id: models_1.INVASIVENESS_OBTRUSIVENESS.HIGH,
        label: 'High',
        title: 'High-impact pharma, implant, body modification, intervention with high risk or pain',
    },
];
exports.maturityOptions = [
    {
        id: models_1.MATURITY.LOW,
        label: 'Low',
        title: 'Little to no research has been performed on the intervention. Existing research is inconclusive about the effectiveness',
    },
    {
        id: models_1.MATURITY.MEDIUM,
        label: 'Medium',
        title: 'A small body of research exists indicating effectiveness of the intervention. Low TRL level applications',
    },
    {
        id: models_1.MATURITY.HIGH,
        label: 'High',
        title: 'One or more meta-analyses indicate effectiveness. The intervention is already applied in practice',
    },
];
exports.effectDirectionOptions = [
    {
        id: models_1.EFFECT_DIRECTION.NEGATIVE,
        label: 'Negative',
        title: 'The intervention decreases a subjects capability level',
    },
    {
        id: models_1.EFFECT_DIRECTION.POSITIVE,
        label: 'Positive',
        title: 'The intervention increases a subjects capability level',
    },
];
exports.ethicalConsiderationsOptions = [
    {
        id: models_1.CHOICE.NONE,
        label: 'None',
        title: 'No ethical considerations known',
    },
    {
        id: models_1.CHOICE.YES,
        label: 'Yes',
        title: 'Ethical considerations exist',
    },
    {
        id: models_1.CHOICE.UNKNOWN,
        label: 'Unknown',
        title: 'Unclear about ethical considerations',
    },
];
exports.evidenceDirOptions = [
    {
        id: models_1.EVIDENCE_DIRECTION.GENERALLY_IN_FAVOR,
        label: 'Effect present',
        title: 'Evidence generally indicates the presence of an effect',
    },
    {
        id: models_1.EVIDENCE_DIRECTION.GENERALLY_AGAINST,
        label: 'Effect absent',
        title: 'Evidence generally indicates the absence of an effect',
    },
    {
        id: models_1.EVIDENCE_DIRECTION.UNDECIDED,
        label: 'Undecided',
        title: 'Evidence indicates neither presence nor absence of an effect',
    },
];
exports.evidenceLevelOptions = [
    {
        id: models_1.EVIDENCE_LEVEL.GOOD,
        label: 'High',
        title: 'Based on good quality research: meta-analyses, large sample sizes, randomized controlled trials, controlled environments, peer-reviewed',
    },
    {
        id: models_1.EVIDENCE_LEVEL.MEDIUM,
        label: 'Medium',
        title: 'Based on limited-quality research: smaller sample sizes, explorative studies, pilots',
    },
    { id: models_1.EVIDENCE_LEVEL.LOW, label: 'Low', title: 'Based on consensus, usual practice, opinion' },
];
exports.availabilityOptions = [
    {
        id: models_1.AVAILABILITY.YES_WITHIN_THE_NETHERLANDS,
        label: 'Yes, within The Netherlands',
    },
    { id: models_1.AVAILABILITY.YES_WITHIN_THE_EU, label: 'Yes, within the EU' },
    { id: models_1.AVAILABILITY.YES_OUTSIDE_THE_EU, label: 'Yes, outside the EU' },
    { id: models_1.AVAILABILITY.NO, label: 'No' },
    { id: models_1.AVAILABILITY.UNKNOWN, label: 'Unknown' },
];
exports.boosterOptions = [
    { id: 1, label: 'Yes', title: 'The intervention can be applied quickly (approx. < 1 hour)' },
    { id: 2, label: 'No', title: 'The intervention can not be applied quickly (approx. < 1 hour)' },
];
var literatureTypeOptions = [
    { id: models_1.LITERATURE_TYPE.CASE_STUDY, label: 'Case study' },
    { id: models_1.LITERATURE_TYPE.THESIS, label: 'Thesis' },
    { id: models_1.LITERATURE_TYPE.REPORT, label: 'Report' },
    { id: models_1.LITERATURE_TYPE.TECHNICAL_REPORT, label: 'Technical report' },
    { id: models_1.LITERATURE_TYPE.PRODUCER_WEBSITE, label: 'Producer website' },
    { id: models_1.LITERATURE_TYPE.WHITE_PAPER, label: 'White paper' },
    { id: models_1.LITERATURE_TYPE.CONFERENCE_PROCEEDING, label: 'Conference proceedings' },
    { id: models_1.LITERATURE_TYPE.PATENT, label: 'Patent' },
    { id: models_1.LITERATURE_TYPE.POPULAR_MEDIA, label: 'Popular media' },
    { id: models_1.LITERATURE_TYPE.CONSENSUS_STATEMENT, label: 'Consensus statement' },
    { id: models_1.LITERATURE_TYPE.EMPERICAL_PR, label: 'Emperical (Peer Reviewed)' },
    { id: models_1.LITERATURE_TYPE.REVIEW_PR, label: 'Review (Peer Reviewed)' },
    {
        id: models_1.LITERATURE_TYPE.SYSTEMATIC_REVIEW_PR,
        label: 'Systematic review (Peer Reviewed)',
    },
    {
        id: models_1.LITERATURE_TYPE.META_ANALYSIS_PR,
        label: 'Meta analysis (Peer Reviewed)',
    },
];
var literatureForm = [
    {
        id: 'title',
        label: 'Title',
        required: true,
        type: 'text',
        className: 'col s12 m4',
    },
    { id: 'doi', label: 'DOI', required: true, type: 'text', className: 'col s8 m5' },
    {
        id: 'type',
        label: 'Type',
        required: true,
        type: 'select',
        options: literatureTypeOptions,
        className: 'col s4 m3',
    },
];
var interventionForm = function (users, interventionOptions) {
    return [
        { id: 'id', type: 'none', autogenerate: 'id' },
        { id: 'updated', type: 'none', autogenerate: 'timestamp' },
        {
            id: 'intervention',
            label: 'Intervention title',
            required: true,
            type: 'text',
            className: 'col s6 m8',
        },
        {
            id: 'category',
            label: 'Category',
            type: 'select',
            multiple: true,
            options: exports.interventionCategoryOptions,
            className: 'col s6 m4',
        },
        {
            id: 'desc',
            label: 'Description',
            type: 'textarea',
            className: 'col s12',
        },
        {
            id: 'keywords',
            label: 'Synonyms and keywords',
            type: 'tags',
            className: 'col s12',
        },
        // {
        //   id: 'owner',
        //   label: 'Owner',
        //   type: 'select',
        //   options: users.map((u) => ({ id: u.id, label: u.name })),
        //   className: 'col s12',
        // },
        // {
        //   id: 'status',
        //   label: 'Status',
        //   type: 'select',
        //   options: statusOptions,
        //   className: 'col s4',
        // },
        // {
        //   id: 'reviewer',
        //   label: 'Reviewer',
        //   type: 'select',
        //   multiple: true,
        //   options: users.map((u) => ({ id: u.id, label: u.name })),
        //   className: 'col s4',
        // },
        {
            id: 'mainCap',
            label: 'Main capability',
            required: true,
            type: 'select',
            className: 'col s6 m3',
            options: exports.mainCapabilityOptions,
        },
        {
            id: 'hpeClassification',
            label: 'HPE classification',
            type: 'select',
            className: 'col s6 m3',
            options: exports.hpeClassificationOptions,
        },
        {
            id: 'invasive',
            label: 'Invasive?',
            type: 'select',
            className: 'col s6 m2',
            options: exports.invasivenessOptions,
        },
        {
            id: 'booster',
            label: 'Can be applied as booster?',
            type: 'checkbox',
            className: 'col s6 m4',
        },
        {
            id: 'specificCap',
            label: 'Specific cognitive capabilities',
            type: 'options',
            multiple: true,
            options: exports.specificCognitiveCapabilityOptions,
            className: 'col s12',
            checkboxClass: 'col s4',
            show: 'mainCap = 1',
        },
        {
            id: 'specificCap',
            label: 'Specific physical capabilities',
            type: 'options',
            multiple: true,
            options: exports.specificPhysicalCapabilityOptions,
            className: 'col s12',
            checkboxClass: 'col s4',
            show: 'mainCap = 2',
        },
        {
            id: 'specificCap',
            label: 'Specific mental capabilities',
            type: 'options',
            multiple: true,
            options: exports.specificMentalCapabilityOptions,
            className: 'col s12',
            checkboxClass: 'col s4',
            show: 'mainCap = 3',
        },
        {
            id: 'specificCap',
            label: 'Specific social capabilities',
            type: 'options',
            multiple: true,
            options: exports.specificSocialCapabilityOptions,
            className: 'col s12',
            checkboxClass: 'col s4',
            show: 'mainCap = 4',
        },
        {
            id: 'specificCap',
            label: 'Specific personality capabilities',
            type: 'options',
            multiple: true,
            options: exports.specificPersonalityCapabilityOptions,
            className: 'col s12',
            checkboxClass: 'col s4',
            show: 'mainCap = 5',
        },
        {
            id: 'similar',
            label: 'Similar interventions',
            type: 'select',
            multiple: true,
            options: interventionOptions,
            className: 'col s12',
        },
        {
            id: 'mechanism',
            label: 'How it works',
            type: 'textarea',
            className: 'col s12',
        },
        {
            id: 'effectDuration',
            label: 'Effect duration',
            type: 'textarea',
            className: 'col s12',
        },
        {
            id: 'incubation',
            label: 'Effect incubation',
            type: 'textarea',
            className: 'col s12',
        },
        {
            id: 'practical',
            label: 'Practical execution',
            type: 'textarea',
            className: 'col s12',
        },
        {
            id: 'hasIndDiff',
            label: 'Has individual differences?',
            type: 'select',
            options: exports.NoYesUnknown,
            className: 'col s4',
        },
        {
            id: 'hasSideEffects',
            label: 'Has side effects?',
            type: 'select',
            options: exports.NoYesUnknown,
            className: 'col s4',
        },
        {
            id: 'hasEthical',
            label: 'Has ethical considerations?',
            type: 'select',
            options: exports.NoYesUnknown,
            className: 'col s4',
        },
        {
            id: 'diff',
            label: 'Individual differences',
            type: 'textarea',
            className: 'col s12',
            show: 'hasIndDiff > 2',
        },
        {
            id: 'sideEffects',
            label: 'Side effects',
            type: 'textarea',
            className: 'col s12',
            show: 'hasSideEffects > 2',
        },
        {
            id: 'ethical',
            label: 'Ethical considerations',
            type: 'textarea',
            className: 'col s12',
            show: 'hasEthical > 2',
        },
        {
            id: 'examples',
            label: 'Examples of the intervention being used in practice',
            type: 'textarea',
            className: 'col s12',
        },
        {
            id: 'maturity',
            label: 'Maturity',
            type: 'select',
            className: 'col s6 m2',
            options: exports.maturityOptions,
        },
        {
            id: 'availability',
            label: 'Availability',
            type: 'select',
            className: 'col s12 m3',
            options: exports.availabilityOptions,
        },
        {
            id: 'evidenceDir',
            label: 'Evidence indication',
            type: 'select',
            className: 'col s12 m2',
            options: exports.evidenceDirOptions,
        },
        {
            id: 'evidenceScore',
            label: 'Evidence quality',
            type: 'select',
            className: 'col s12 m2',
            options: exports.evidenceLevelOptions,
        },
        {
            id: 'owner',
            label: 'Owner',
            type: 'select',
            options: users.map(function (u) { return ({ id: u.id, label: u.name }); }),
            className: 'col s12 m3',
        },
        // {
        //   id: 'evidenceScore',
        //   label: 'Quality of evidence',
        //   type: 'radio',
        //   checkboxClass: 'col s4',
        //   className: 'col s12',
        //   options: evidenceLevelOptions,
        // },
        {
            id: 'url',
            label: 'Use default image',
            type: 'select',
            className: 'col s3',
            options: [
                { id: 'nutrition', label: 'Nutrition' },
                { id: 'pharma', label: 'Pharma/supplement' },
                { id: 'beverage', label: 'Beverage' },
                { id: 'upload', label: 'Upload your own' },
            ],
        },
        { id: 'img', label: 'Upload image', type: 'base64', className: 'col s9', show: 'url=upload' },
        {
            id: 'literature',
            label: 'Literature',
            className: 'col s12',
            repeat: true,
            pageSize: 20,
            type: literatureForm,
        },
    ];
};
exports.interventionForm = interventionForm;
/** Convert markdown text to HTML */
var markdown2html = function (markdown) {
    if (markdown === void 0) { markdown = ''; }
    return mithril_1.default.trust((0, mithril_ui_form_1.render)(markdown, true, true));
};
exports.markdown2html = markdown2html;
/** RegExp for references of type [vullings2022] */
exports.refRegex = /\[(\d*)\]/gi;
/** Convert markdown text to HTML after resolving all references. */
var resolveRefs = function (literature) {
    if (literature === void 0) { literature = []; }
    var ids = __spreadArray([], literature.map(function (lit, i) { return ({ id: i + 1, title: lit.title, url: lit.doi, type: 'LIT' }); }), true).reduce(function (acc, cur) {
        acc[cur.id] = cur;
        return acc;
    }, {});
    return {
        ids: ids,
        md2html: function (markdown) {
            if (markdown === void 0) { markdown = ''; }
            var md = markdown.replace(exports.refRegex, function (replaceValue) {
                var reference = ids[replaceValue.replace(/\[|\]/g, '')];
                // console.log(replaceValue);
                return reference
                    ? "<a href=\"".concat(reference.url, "\" target=\"_blank\" alt=\"").concat(reference.title, "\" title=\"").concat(reference.title, "\">").concat(replaceValue, "</a>")
                    : "<span class=\"red-text\">".concat(replaceValue, "</span>");
            });
            return (0, exports.markdown2html)(md);
        },
    };
};
exports.resolveRefs = resolveRefs;
var isUnique = function (item, pos, arr) { return arr.indexOf(item) == pos; };
exports.isUnique = isUnique;


/***/ }),

/***/ 7922:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ldb = void 0;
/**
 * Use IndexedDB for local storage.
 * Based on https://github.com/DVLP/localStorageDB, but converted to TypeScript and using async instead of callbacks.
 * @source: https://github.com/DVLP/localStorageDB/blob/master/localdata.js
 *
 * Usage example
 *
 *
```ts
const test = async () => {
  ldb.set('nameGoesHere', 'value goes here');
  ldb.set('nameGoesHere2', 'value 2 goes here');

  const asyncValue = await ldb.get('nameGoesHere');
  console.log('And the async value is', asyncValue);
  console.log('List of keys', await ldb.list());
  console.log('All values', await ldb.getAll());

  // Deleting one value
  await ldb.delete('nameGoesHere');
  const asyncValue2 = await ldb.get('nameGoesHere');
  console.log('And the async value after delete is', asyncValue2);
  console.log('All values', await ldb.getAll());

  // Clear everything
  console.log('Storage cleared', await ldb.clear());
  console.log('All values', await ldb.getAll());
};
test();
```
 */
(function () {
    var _this = this;
    var win = typeof window !== 'undefined' ? window : undefined;
    if (!win) {
        console.error('indexedDB cannot get window');
        return;
    }
    var indexedDB = win.indexedDB ||
        win.mozIndexedDB ||
        win.webkitIndexedDB ||
        win.msIndexedDB;
    if (typeof window !== 'undefined' && !indexedDB) {
        console.error('indexDB not supported');
        return;
    }
    var db;
    var request = indexedDB.open('ldb', 1);
    request.onsuccess = function () {
        db = this.result;
    };
    request.onerror = function (event) {
        console.error('indexedDB request error');
        console.log(event);
    };
    request.onupgradeneeded = function (event) {
        db = null;
        var store = event &&
            event.target &&
            event.target.result.createObjectStore('s', {
                keyPath: 'k',
            });
        store.transaction.oncomplete = function (e) {
            db = e.target.db;
        };
    };
    var localDb = {
        get: function (key) {
            return new Promise(function (resolve) {
                if (!db) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = resolve;
                                return [4 /*yield*/, localDb.get(key)];
                            case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                        }
                    }); }); }, 50);
                    return;
                }
                db.transaction('s').objectStore('s').get(key).onsuccess = function (event) {
                    var result = (event.target.result && event.target.result['v']) || null;
                    resolve(result);
                };
            });
        },
        set: function (key, value) {
            return new Promise(function (resolve) {
                if (!db) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = resolve;
                                return [4 /*yield*/, localDb.set(key, value)];
                            case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                        }
                    }); }); }, 50);
                    return;
                }
                var txn = db.transaction('s', 'readwrite');
                txn.oncomplete = function () { return resolve(); };
                txn.objectStore('s').put({
                    k: key,
                    v: value,
                });
                txn.commit();
            });
        },
        delete: function (key) {
            return new Promise(function (resolve) {
                if (!db) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = resolve;
                                return [4 /*yield*/, localDb.delete(key)];
                            case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                        }
                    }); }); }, 50);
                    return;
                }
                db.transaction('s', 'readwrite').objectStore('s').delete(key).onsuccess = function () {
                    resolve();
                };
            });
        },
        list: function () {
            return new Promise(function (resolve) {
                if (!db) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = resolve;
                                return [4 /*yield*/, localDb.list()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                        }
                    }); }); }, 50);
                    return;
                }
                db.transaction('s').objectStore('s').getAllKeys().onsuccess = function (event) {
                    var result = event.target.result || null;
                    resolve(result);
                };
            });
        },
        getAll: function () {
            return new Promise(function (resolve) {
                if (!db) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = resolve;
                                return [4 /*yield*/, localDb.getAll()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                        }
                    }); }); }, 50);
                    return;
                }
                db.transaction('s').objectStore('s').getAll().onsuccess = function (event) {
                    var result = event.target.result || null;
                    resolve(result);
                };
            });
        },
        clear: function () {
            return new Promise(function (resolve) {
                if (!db) {
                    setTimeout(function () { return __awaiter(_this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = resolve;
                                return [4 /*yield*/, localDb.clear()];
                            case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                        }
                    }); }); }, 50);
                    return;
                }
                db.transaction('s', 'readwrite').objectStore('s').clear().onsuccess = function () {
                    resolve();
                };
            });
        },
    };
    exports.ldb = localDb;
})();


/***/ }),

/***/ 2868:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "682f370b71a2168f21f2.jpg";

/***/ }),

/***/ 3020:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "daa9f69cfe2d801887aa.webp";

/***/ }),

/***/ 1972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ebcbb1571881e2c73825.webp";

/***/ }),

/***/ 7330:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b08b9fdad985ae5003ec.webp";

/***/ }),

/***/ 1555:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0dd34d8173d8eabed924.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "https://tno.github.io/hei/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(5174);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map