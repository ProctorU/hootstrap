var Modal = (function(e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var s = (n[i] = { exports: {}, id: i, loaded: !1 });
    return e[i].call(s.exports, s, s.exports, t), (s.loaded = !0), s.exports;
  }
  var n = {};
  return (t.m = e), (t.c = n), (t.p = ''), t(0);
})([
  function(e, t, n) {
    'use strict';
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function o(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function, not ' + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      })), t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
    }
    function r(e) {
      for (var t in e)
        Array.isArray(e[t])
          ? e[t].forEach(function(e) {
              r(e);
            })
          : null !== e[t] && 'object' == typeof e[t] && Object.freeze(e[t]);
      return Object.freeze(e);
    }
    function a() {
      return (
        ((65536 * (1 + Math.random())) | 0).toString(16) +
        ((65536 * (1 + Math.random())) | 0).toString(16)
      );
    }
    function l(e, t, n) {
      var i = 'data',
        s = e[i] || {};
      if ('undefined' == typeof n) {
        if (e[i] && e[i][t]) return e[i][t];
        var o = e.getAttribute(i + '-' + t);
        return 'undefined' != typeof o ? o : null;
      }
      return (s[t] = n), (e[i] = s), e;
    }
    function d(e, t) {
      return e.nodeName
        ? e
        : (
            (e = e.replace(/(\t|\n$)/g, '')),
            (m.innerHTML = ''),
            (m.innerHTML = e),
            t === !0 ? m.childNodes : m.childNodes[0]
          );
    }
    function h() {
      var e = void 0,
        t = void 0,
        n = void 0,
        i = document.createElement('div');

      if (!document.body) return;
      return Object.assign(i.style, {
        visibility: 'hidden',
        width: '100px'
      }), document.body.appendChild(i), (n = i.offsetWidth), (i.style.overflow =
        'scroll'), (e = document.createElement('div')), (e.style.width =
        '100%'), i.appendChild(e), (t =
        n - e.offsetWidth), document.body.removeChild(i), t;
    }
    function c(e) {
      for (var t = [e]; e.parentNode; ) (e = e.parentNode), t.push(e);
      return t;
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var u = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable =
              i.enumerable || !1), (i.configurable = !0), 'value' in i &&
              (i.writable = !0), Object.defineProperty(e, i.key, i);
          }
        }
        return function(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      v = function(e, t, n) {
        for (var i = !0; i; ) {
          var s = e,
            o = t,
            r = n;
          (i = !1), null === s && (s = Function.prototype);
          var a = Object.getOwnPropertyDescriptor(s, o);
          if (void 0 !== a) {
            if ('value' in a) return a.value;
            var l = a.get;
            if (void 0 === l) return;
            return l.call(r);
          }
          var d = Object.getPrototypeOf(s);
          if (null === d) return;
          (e = d), (t = o), (n = r), (i = !0), (a = d = void 0);
        }
      },
      f = n(1),
      p = i(f),
      m = document.createElement('div'),
      _ = h(),
      y = Object.freeze({
        el: null,
        animate: !0,
        animateClass: 'fade',
        appendTo: 'body',
        backdrop: !0,
        keyboard: !0,
        title: !1,
        header: !0,
        content: !1,
        footer: !0,
        buttons: null,
        headerClose: !0,
        construct: !1,
        transition: 300,
        backdropTransition: 150
      }),
      b = r({
        dialog: [
          {
            text: 'Cancel',
            value: !1,
            attr: { class: 'btn btn-default', 'data-dismiss': 'modal' }
          },
          {
            text: 'OK',
            value: !0,
            attr: { class: 'btn btn-primary', 'data-dismiss': 'modal' }
          }
        ],
        alert: [
          {
            text: 'OK',
            attr: { class: 'btn btn-primary', 'data-dismiss': 'modal' }
          }
        ],
        confirm: [
          {
            text: 'Cancel',
            value: !1,
            attr: { class: 'btn btn-default', 'data-dismiss': 'modal' }
          },
          {
            text: 'OK',
            value: !0,
            attr: { class: 'btn btn-primary', 'data-dismiss': 'modal' }
          }
        ]
      }),
      g = {
        container: '<div class="modal"></div>',
        dialog: '<div class="modal-dialog"></div>',
        content: '<div class="modal-content"></div>',
        header: '<div class="modal-header"></div>',
        headerClose:
          '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>',
        body: '<div class="modal-body"></div>',
        footer: '<div class="modal-footer"></div>',
        backdrop: '<div class="modal-backdrop"></div>'
      },
      k = (function(e) {
        function t() {
          var e =
            arguments.length <= 0 || void 0 === arguments[0]
              ? {}
              : arguments[0];
          if (
            (
              s(this, t),
              v(Object.getPrototypeOf(t.prototype), 'constructor', this).call(
                this
              ),
              (this.id = a()),
              (this.el = null),
              (this._html = {}),
              (this._events = {}),
              (this._visible = !1),
              (this._options = Object.assign({}, t.options, e)),
              (this._templates = Object.assign(
                {},
                t.templates,
                e.templates || {}
              )),
              (this._html.appendTo = document.querySelector(
                this._options.appendTo
              )),
              null === this._options.buttons &&
                (this._options.buttons = t.buttons.dialog),
              this._options.el
            )
          ) {
            var n = this._options.el;
            if (
              'string' == typeof this._options.el &&
              ((n = document.querySelector(this._options.el)), !n)
            )
              throw new Error(
                'Selector: DOM Element ' + this._options.el + ' not found.'
              );
            l(n, 'modal', this), (this.el = n);
          } else this._options.construct = !0;
          this._options.construct ? this._render() : this._mapDom();
        }
        return o(t, e), u(t, null, [
          {
            key: 'alert',
            value: function(e) {
              var n =
                  arguments.length <= 1 || void 0 === arguments[1]
                    ? {}
                    : arguments[1],
                i = Object.assign(
                  {},
                  y,
                  {
                    title: e,
                    content: !1,
                    construct: !0,
                    headerClose: !1,
                    buttons: t.buttons.alert
                  },
                  n
                );
              return new t(i);
            }
          },
          {
            key: 'confirm',
            value: function(e) {
              var n =
                  arguments.length <= 1 || void 0 === arguments[1]
                    ? {}
                    : arguments[1],
                i = Object.assign(
                  {},
                  y,
                  {
                    title: e,
                    content: !1,
                    construct: !0,
                    headerClose: !1,
                    buttons: t.buttons.confirm
                  },
                  n
                );
              return new t(i);
            }
          },
          {
            key: 'templates',
            set: function(e) {
              this._baseTemplates = e;
            },
            get: function() {
              return Object.assign({}, g, t._baseTemplates);
            }
          },
          {
            key: 'buttons',
            set: function(e) {
              this._baseButtons = e;
            },
            get: function() {
              return Object.assign({}, b, t._baseButtons);
            }
          },
          {
            key: 'options',
            set: function(e) {
              this._baseOptions = e;
            },
            get: function() {
              return Object.assign({}, y, t._baseOptions);
            }
          },
          {
            key: 'version',
            get: function() {
              return '0.3.7';
            }
          }
        ]), u(t, [
          {
            key: '_render',
            value: function() {
              var e = this._html,
                t = this._options,
                n = this._templates,
                i = !!t.animate && t.animateClass;
              return (e.container = d(n.container)), (e.dialog = d(
                n.dialog
              )), (e.content = d(n.content)), (e.header = d(
                n.header
              )), (e.headerClose = d(n.headerClose)), (e.body = d(
                n.body
              )), (e.footer = d(n.footer)), i &&
                e.container.classList.add(
                  i
                ), this._setHeader(), this._setContent(), this._setFooter(), (this.el =
                e.container), e.dialog.appendChild(
                e.content
              ), e.container.appendChild(e.dialog), this;
            }
          },
          {
            key: '_mapDom',
            value: function() {
              var e = this._html,
                t = this._options;
              return this.el.classList.contains(t.animateClass) &&
                (t.animate = !0), (e.container = this.el), (e.dialog = this.el.querySelector(
                '.modal-dialog'
              )), (e.content = this.el.querySelector(
                '.modal-content'
              )), (e.header = this.el.querySelector(
                '.modal-header'
              )), (e.headerClose = this.el.querySelector(
                '.modal-header .close'
              )), (e.body = this.el.querySelector(
                '.modal-body'
              )), (e.footer = this.el.querySelector(
                '.modal-footer'
              )), this._setHeader(), this._setContent(), this._setFooter(), this;
            }
          },
          {
            key: '_setHeader',
            value: function() {
              var e = this._html,
                t = this._options;
              t.header &&
                e.header &&
                (
                  t.title.nodeName
                    ? (e.header.innerHTML = t.title.outerHTML)
                    : 'string' == typeof t.title &&
                      (e.header.innerHTML =
                        '<h4 class="modal-title">' + t.title + '</h4>'),
                  null === this.el &&
                    e.headerClose &&
                    t.headerClose &&
                    e.header.insertBefore(e.headerClose, e.header.firstChild),
                  t.construct && e.content.appendChild(e.header)
                );
            }
          },
          {
            key: '_setContent',
            value: function() {
              var e = this._html,
                t = this._options;
              t.content &&
                e.body &&
                (
                  'string' == typeof t.content
                    ? (e.body.innerHTML = t.content)
                    : (e.body.innerHTML = t.content.outerHTML),
                  t.construct && e.content.appendChild(e.body)
                );
            }
          },
          {
            key: '_setFooter',
            value: function() {
              var e = this._html,
                t = this._options;
              t.footer &&
                e.footer &&
                (
                  t.footer.nodeName
                    ? (e.footer.ineerHTML = t.footer.outerHTML)
                    : 'string' == typeof t.footer
                      ? (e.footer.innerHTML = t.footer)
                      : e.footer.children.length ||
                        t.buttons.forEach(function(t) {
                          var n = document.createElement('button');
                          l(n, 'button', t), (n.innerHTML = t.text);
                          var i = !0,
                            s = !1,
                            o = void 0;
                          try {
                            for (
                              var r, a = Object.keys(t.attr)[Symbol.iterator]();
                              !(i = (r = a.next()).done);
                              i = !0
                            ) {
                              var d = r.value;
                              n.setAttribute(d, t.attr[d]);
                            }
                          } catch (h) {
                            (s = !0), (o = h);
                          } finally {
                            try {
                              !i && a['return'] && a['return']();
                            } finally {
                              if (s) throw o;
                            }
                          }
                          e.footer.appendChild(n);
                        }),
                  t.construct && e.content.appendChild(e.footer)
                );
            }
          },
          {
            key: '_setEvents',
            value: function() {
              var e = this._options,
                t = this._html;
              e.backdrop === !0 &&
                (
                  (this._events.keydownHandler = this._handleKeydownEvent.bind(
                    this
                  )),
                  document.body.addEventListener(
                    'keydown',
                    this._events.keydownHandler
                  )
                ), (this._events.clickHandler = this._handleClickEvent.bind(
                this
              )), t.container.addEventListener(
                'click',
                this._events.clickHandler
              ), (this._events.resizeHandler = this._handleResizeEvent.bind(
                this
              )), window.addEventListener('resize', this._events.resizeHandler);
            }
          },
          {
            key: '_handleClickEvent',
            value: function(e) {
              var t = this,
                n = c(e.target);
              n.every(function(n) {
                return (
                  'HTML' !== n.tagName &&
                  (!n.classList.contains('modal-content') &&
                    ('modal' === n.getAttribute('data-dismiss')
                      ? (
                          t.emit('dismiss', t, e, l(e.target, 'button')),
                          t.hide(),
                          !1
                        )
                      : !n.classList.contains('modal') ||
                        (t.emit('dismiss', t, e, null), t.hide(), !1)))
                );
              });
            }
          },
          {
            key: '_handleKeydownEvent',
            value: function(e) {
              27 === e.which &&
                (this.emit('dismiss', this, e, null), this.hide());
            }
          },
          {
            key: '_handleResizeEvent',
            value: function(e) {
              this._resize();
            }
          },
          {
            key: 'show',
            value: function() {
              var e = this,
                t = this._options,
                n = this._html;
              return this.emit(
                'show',
                this
              ), this._checkScrollbar(), this._setScrollbar(), document.body.classList.add(
                'modal-open'
              ), t.construct &&
                n.appendTo.appendChild(
                  n.container
                ), (n.container.style.display =
                'block'), (n.container.scrollTop = 0), this.once(
                'showBackdrop',
                function() {
                  e._setEvents(), t.animate &&
                    n.container.offsetWidth, n.container.classList.add(
                    'show'
                  ), setTimeout(function() {
                    (e._visible = !0), e.emit('shown', e);
                  }, t.transition);
                }
              ), this._backdrop(), this._resize(), this;
            }
          },
          {
            key: 'toggle',
            value: function() {
              this._visible ? this.hide() : this.show();
            }
          },
          {
            key: '_resize',
            value: function() {
              var e =
                this._html.container.scrollHeight >
                document.documentElement.clientHeight;
              (this._html.container.style.paddingLeft =
                !this.bodyIsOverflowing && e
                  ? _ + 'px'
                  : ''), (this._html.container.style.paddingRight =
                this.bodyIsOverflowing && !e ? _ + 'px' : '');
            }
          },
          {
            key: '_backdrop',
            value: function() {
              var e = this,
                t = this._html,
                n = this._templates,
                i = this._options,
                s = !!i.animate && i.animateClass;
              (t.backdrop = d(n.backdrop)), s &&
                t.backdrop.classList.add(s), t.appendTo.appendChild(
                t.backdrop
              ), s && t.backdrop.offsetWidth, t.backdrop.classList.add(
                'show'
              ), setTimeout(function() {
                e.emit('showBackdrop', e);
              }, this._options.backdropTransition);
            }
          },
          {
            key: 'hide',
            value: function() {
              var e = this,
                t = this._html,
                n = this._options,
                i = t.backdrop.classList,
                s = t.container.classList;
              return this.emit('hide', this), i.remove('show'), s.remove(
                'show'
              ), this._removeEvents(), setTimeout(function() {
                document.body.classList.remove(
                  'modal-open'
                ), (document.body.style.paddingRight = e.originalBodyPad);
              }, n.backdropTransition), setTimeout(function() {
                t.backdrop.remove(), (t.container.style.display = 'none'), n.construct && t.container.remove(), (e._visible = !1), e.emit('hidden', e);
              }, n.transition), this;
            }
          },
          {
            key: '_removeEvents',
            value: function() {
              this._events.keydownHandler &&
                document.body.removeEventListener(
                  'keydown',
                  this._events.keydownHandler
                ), this._html.container.removeEventListener(
                'click',
                this._events.clickHandler
              ), window.removeEventListener(
                'resize',
                this._events.resizeHandler
              );
            }
          },
          {
            key: '_checkScrollbar',
            value: function() {
              this.bodyIsOverflowing =
                document.body.clientWidth < window.innerWidth;
            }
          },
          {
            key: '_setScrollbar',
            value: function() {
              if (
                (
                  (this.originalBodyPad =
                    document.body.style.paddingRight || ''),
                  this.bodyIsOverflowing
                )
              ) {
                var e = parseInt(this.originalBodyPad || 0, 10);
                document.body.style.paddingRight = e + _ + 'px';
              }
            }
          }
        ]), t;
      })(p['default']);
    (t['default'] = k), (e.exports = t['default']);
  },
  function(e, t) {
    function n() {
      (this._events = this._events || {}), (this._maxListeners =
        this._maxListeners || void 0);
    }
    function i(e) {
      return 'function' == typeof e;
    }
    function s(e) {
      return 'number' == typeof e;
    }
    function o(e) {
      return 'object' == typeof e && null !== e;
    }
    function r(e) {
      return void 0 === e;
    }
    (e.exports = n), (n.EventEmitter = n), (n.prototype._events = void 0), (n.prototype._maxListeners = void 0), (n.defaultMaxListeners = 10), (n.prototype.setMaxListeners = function(
      e
    ) {
      if (!s(e) || e < 0 || isNaN(e))
        throw TypeError('n must be a positive number');
      return (this._maxListeners = e), this;
    }), (n.prototype.emit = function(e) {
      var t, n, s, a, l, d;
      if (
        (
          this._events || (this._events = {}),
          'error' === e &&
            (!this._events.error ||
              (o(this._events.error) && !this._events.error.length))
        )
      ) {
        if (((t = arguments[1]), t instanceof Error)) throw t;
        var h = new Error('Uncaught, unspecified "error" event. (' + t + ')');
        throw ((h.context = t), h);
      }
      if (((n = this._events[e]), r(n))) return !1;
      if (i(n))
        switch (arguments.length) {
          case 1:
            n.call(this);
            break;
          case 2:
            n.call(this, arguments[1]);
            break;
          case 3:
            n.call(this, arguments[1], arguments[2]);
            break;
          default:
            (a = Array.prototype.slice.call(arguments, 1)), n.apply(this, a);
        }
      else if (o(n))
        for (
          a = Array.prototype.slice.call(arguments, 1), d = n.slice(), s =
            d.length, l = 0;
          l < s;
          l++
        )
          d[l].apply(this, a);
      return !0;
    }), (n.prototype.addListener = function(e, t) {
      var s;
      if (!i(t)) throw TypeError('listener must be a function');
      return this._events || (this._events = {}), this._events.newListener &&
        this.emit('newListener', e, i(t.listener) ? t.listener : t), this
        ._events[e]
        ? o(this._events[e])
          ? this._events[e].push(t)
          : (this._events[e] = [this._events[e], t])
        : (this._events[e] = t), o(this._events[e]) &&
        !this._events[e].warned &&
        (
          (s = r(this._maxListeners)
            ? n.defaultMaxListeners
            : this._maxListeners),
          s &&
            s > 0 &&
            this._events[e].length > s &&
            (
              (this._events[e].warned = !0),
              console.error(
                '(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',
                this._events[e].length
              ),
              'function' == typeof console.trace && console.trace()
            )
        ), this;
    }), (n.prototype.on =
      n.prototype.addListener), (n.prototype.once = function(e, t) {
      function n() {
        this.removeListener(e, n), s || ((s = !0), t.apply(this, arguments));
      }
      if (!i(t)) throw TypeError('listener must be a function');
      var s = !1;
      return (n.listener = t), this.on(e, n), this;
    }), (n.prototype.removeListener = function(e, t) {
      var n, s, r, a;
      if (!i(t)) throw TypeError('listener must be a function');
      if (!this._events || !this._events[e]) return this;
      if (
        (
          (n = this._events[e]),
          (r = n.length),
          (s = -1),
          n === t || (i(n.listener) && n.listener === t)
        )
      )
        delete this._events[e], this._events.removeListener &&
          this.emit('removeListener', e, t);
      else if (o(n)) {
        for (a = r; a-- > 0; )
          if (n[a] === t || (n[a].listener && n[a].listener === t)) {
            s = a;
            break;
          }
        if (s < 0) return this;
        1 === n.length
          ? ((n.length = 0), delete this._events[e])
          : n.splice(s, 1), this._events.removeListener &&
          this.emit('removeListener', e, t);
      }
      return this;
    }), (n.prototype.removeAllListeners = function(e) {
      var t, n;
      if (!this._events) return this;
      if (!this._events.removeListener)
        return 0 === arguments.length
          ? (this._events = {})
          : this._events[e] && delete this._events[e], this;
      if (0 === arguments.length) {
        for (t in this._events)
          'removeListener' !== t && this.removeAllListeners(t);
        return this.removeAllListeners(
          'removeListener'
        ), (this._events = {}), this;
      }
      if (((n = this._events[e]), i(n))) this.removeListener(e, n);
      else if (n) for (; n.length; ) this.removeListener(e, n[n.length - 1]);
      return delete this._events[e], this;
    }), (n.prototype.listeners = function(e) {
      var t;
      return (t =
        this._events && this._events[e]
          ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice()
          : []);
    }), (n.prototype.listenerCount = function(e) {
      if (this._events) {
        var t = this._events[e];
        if (i(t)) return 1;
        if (t) return t.length;
      }
      return 0;
    }), (n.listenerCount = function(e, t) {
      return e.listenerCount(t);
    });
  }
]);
