!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System) {

!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
(function() {
var define = $__System.amdDefine;
define("2", ["require", "exports"], function(require, exports) {
  "use strict";
  var NodeMargin = (function() {
    function NodeMargin(all) {
      if (all === void 0) {
        all = 0;
      }
      this.top = 0;
      this.right = 0;
      this.bottom = 0;
      this.left = 0;
      this.top = all;
      this.right = all;
      this.bottom = all;
      this.left = all;
    }
    return NodeMargin;
  }());
  exports.NodeMargin = NodeMargin;
});

})();
(function() {
var define = $__System.amdDefine;
define("3", ["require", "exports", "2"], function(require, exports, node_options_1) {
  "use strict";
  var OrgChartConfig = (function() {
    function OrgChartConfig() {}
    OrgChartConfig.defaultConfig = function() {
      var config = {};
      config.selector = '#orgChartSvg';
      config.collapsingDuration = 300;
      config.nodeOptions = {
        width: 150,
        height: 45,
        gapV: 40,
        gapH: 10,
        margin: new node_options_1.NodeMargin(),
        background: 'rgba(10,30,200,0.5)',
        textColor: 'white',
        nodeClass: 'orgchart-node',
        nodeAttribute: 'orgchart-node',
        collapsible: false,
        clickableBoxClass: 'orgchart-box',
        collapseButtonClass: 'orgchart-collapse-btn'
      };
      config.connectorOptions = {};
      config.connectorOptions.strokeWidth = 1;
      config.connectorOptions.color = '#bcbec0';
      config.tipOverOptions = {
        minChildrenCount: 3,
        maxColumnHeight: 12,
        tipOverChildrenCount: 30
      };
      config.debugOptions = {
        showPlaceholderBoxes: false,
        placeholderBoxesColor: 'rgba(0,0,0,0.05)'
      };
      config.nodes = {
        id: '1',
        parentId: null,
        data: {text: "Root"},
        children: []
      };
      config.onBoxRender = function(args) {
        if (args.node.isPlaceholder) {
          args.paper.rect(args.x, args.y, args.width, args.height).attr({fill: args.config.debugOptions.placeholderBoxesColor});
        } else {
          args.paper.rect(args.x, args.y, args.width, args.height).attr({fill: args.config.nodeOptions.background});
          args.paper.text(args.x + 20, args.y + 26, [args.node.data.text]).attr({fill: args.config.nodeOptions.textColor});
        }
        return null;
      };
      return config;
    };
    return OrgChartConfig;
  }());
  exports.OrgChartConfig = OrgChartConfig;
});

})();
(function() {
var define = $__System.amdDefine;
define("4", ["require", "exports"], function(require, exports) {
  "use strict";
  (function(ConnectorType) {
    ConnectorType[ConnectorType["up"] = 0] = "up";
    ConnectorType[ConnectorType["down"] = 1] = "down";
    ConnectorType[ConnectorType["left"] = 2] = "left";
    ConnectorType[ConnectorType["right"] = 3] = "right";
    ConnectorType[ConnectorType["leftDown"] = 4] = "leftDown";
    ConnectorType[ConnectorType["rightUp"] = 5] = "rightUp";
    ConnectorType[ConnectorType["leftUp"] = 6] = "leftUp";
    ConnectorType[ConnectorType["horizontal"] = 7] = "horizontal";
    ConnectorType[ConnectorType["horizontalTipOver"] = 8] = "horizontalTipOver";
    ConnectorType[ConnectorType["horizontalSingleTipOver"] = 9] = "horizontalSingleTipOver";
  })(exports.ConnectorType || (exports.ConnectorType = {}));
  var ConnectorType = exports.ConnectorType;
});

})();
$__System.registerDynamic("5", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(glob) {
    var version = "0.4.2",
        has = "hasOwnProperty",
        separator = /[\.\/]/,
        comaseparator = /\s*,\s*/,
        wildcard = "*",
        fun = function() {},
        numsort = function(a, b) {
          return a - b;
        },
        current_event,
        stop,
        events = {n: {}},
        firstDefined = function() {
          for (var i = 0,
              ii = this.length; i < ii; i++) {
            if (typeof this[i] != "undefined") {
              return this[i];
            }
          }
        },
        lastDefined = function() {
          var i = this.length;
          while (--i) {
            if (typeof this[i] != "undefined") {
              return this[i];
            }
          }
        },
        eve = function(name, scope) {
          name = String(name);
          var e = events,
              oldstop = stop,
              args = Array.prototype.slice.call(arguments, 2),
              listeners = eve.listeners(name),
              z = 0,
              f = false,
              l,
              indexed = [],
              queue = {},
              out = [],
              ce = current_event,
              errors = [];
          out.firstDefined = firstDefined;
          out.lastDefined = lastDefined;
          current_event = name;
          stop = 0;
          for (var i = 0,
              ii = listeners.length; i < ii; i++)
            if ("zIndex" in listeners[i]) {
              indexed.push(listeners[i].zIndex);
              if (listeners[i].zIndex < 0) {
                queue[listeners[i].zIndex] = listeners[i];
              }
            }
          indexed.sort(numsort);
          while (indexed[z] < 0) {
            l = queue[indexed[z++]];
            out.push(l.apply(scope, args));
            if (stop) {
              stop = oldstop;
              return out;
            }
          }
          for (i = 0; i < ii; i++) {
            l = listeners[i];
            if ("zIndex" in l) {
              if (l.zIndex == indexed[z]) {
                out.push(l.apply(scope, args));
                if (stop) {
                  break;
                }
                do {
                  z++;
                  l = queue[indexed[z]];
                  l && out.push(l.apply(scope, args));
                  if (stop) {
                    break;
                  }
                } while (l);
              } else {
                queue[l.zIndex] = l;
              }
            } else {
              out.push(l.apply(scope, args));
              if (stop) {
                break;
              }
            }
          }
          stop = oldstop;
          current_event = ce;
          return out;
        };
    eve._events = events;
    eve.listeners = function(name) {
      var names = name.split(separator),
          e = events,
          item,
          items,
          k,
          i,
          ii,
          j,
          jj,
          nes,
          es = [e],
          out = [];
      for (i = 0, ii = names.length; i < ii; i++) {
        nes = [];
        for (j = 0, jj = es.length; j < jj; j++) {
          e = es[j].n;
          items = [e[names[i]], e[wildcard]];
          k = 2;
          while (k--) {
            item = items[k];
            if (item) {
              nes.push(item);
              out = out.concat(item.f || []);
            }
          }
        }
        es = nes;
      }
      return out;
    };
    eve.on = function(name, f) {
      name = String(name);
      if (typeof f != "function") {
        return function() {};
      }
      var names = name.split(comaseparator);
      for (var i = 0,
          ii = names.length; i < ii; i++) {
        (function(name) {
          var names = name.split(separator),
              e = events,
              exist;
          for (var i = 0,
              ii = names.length; i < ii; i++) {
            e = e.n;
            e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
          }
          e.f = e.f || [];
          for (i = 0, ii = e.f.length; i < ii; i++)
            if (e.f[i] == f) {
              exist = true;
              break;
            }
          !exist && e.f.push(f);
        }(names[i]));
      }
      return function(zIndex) {
        if (+zIndex == +zIndex) {
          f.zIndex = +zIndex;
        }
      };
    };
    eve.f = function(event) {
      var attrs = [].slice.call(arguments, 1);
      return function() {
        eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
      };
    };
    eve.stop = function() {
      stop = 1;
    };
    eve.nt = function(subname) {
      if (subname) {
        return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(current_event);
      }
      return current_event;
    };
    eve.nts = function() {
      return current_event.split(separator);
    };
    eve.off = eve.unbind = function(name, f) {
      if (!name) {
        eve._events = events = {n: {}};
        return;
      }
      var names = name.split(comaseparator);
      if (names.length > 1) {
        for (var i = 0,
            ii = names.length; i < ii; i++) {
          eve.off(names[i], f);
        }
        return;
      }
      names = name.split(separator);
      var e,
          key,
          splice,
          i,
          ii,
          j,
          jj,
          cur = [events];
      for (i = 0, ii = names.length; i < ii; i++) {
        for (j = 0; j < cur.length; j += splice.length - 2) {
          splice = [j, 1];
          e = cur[j].n;
          if (names[i] != wildcard) {
            if (e[names[i]]) {
              splice.push(e[names[i]]);
            }
          } else {
            for (key in e)
              if (e[has](key)) {
                splice.push(e[key]);
              }
          }
          cur.splice.apply(cur, splice);
        }
      }
      for (i = 0, ii = cur.length; i < ii; i++) {
        e = cur[i];
        while (e.n) {
          if (f) {
            if (e.f) {
              for (j = 0, jj = e.f.length; j < jj; j++)
                if (e.f[j] == f) {
                  e.f.splice(j, 1);
                  break;
                }
              !e.f.length && delete e.f;
            }
            for (key in e.n)
              if (e.n[has](key) && e.n[key].f) {
                var funcs = e.n[key].f;
                for (j = 0, jj = funcs.length; j < jj; j++)
                  if (funcs[j] == f) {
                    funcs.splice(j, 1);
                    break;
                  }
                !funcs.length && delete e.n[key].f;
              }
          } else {
            delete e.f;
            for (key in e.n)
              if (e.n[has](key) && e.n[key].f) {
                delete e.n[key].f;
              }
          }
          e = e.n;
        }
      }
    };
    eve.once = function(name, f) {
      var f2 = function() {
        eve.unbind(name, f2);
        return f.apply(this, arguments);
      };
      return eve.on(name, f2);
    };
    eve.version = version;
    eve.toString = function() {
      return "You are running Eve " + version;
    };
    (typeof module != "undefined" && module.exports) ? (module.exports = eve) : (typeof define === "function" && define.amd ? (define("eve", [], function() {
      return eve;
    })) : (glob.eve = eve));
  })(this);
  return module.exports;
});

$__System.registerDynamic("6", ["5"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('5');
  return module.exports;
});

$__System.registerDynamic("7", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("8", ["7"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('7');
  return module.exports;
});

$__System.registerDynamic("9", ["8"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? process : $__require('8');
  return module.exports;
});

$__System.registerDynamic("a", ["9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('9');
  return module.exports;
});

$__System.registerDynamic("b", ["6", "a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  (function(process) {
    (function(glob) {
      var version = "0.4.2",
          has = "hasOwnProperty",
          separator = /[\.\/]/,
          comaseparator = /\s*,\s*/,
          wildcard = "*",
          fun = function() {},
          numsort = function(a, b) {
            return a - b;
          },
          current_event,
          stop,
          events = {n: {}},
          firstDefined = function() {
            for (var i = 0,
                ii = this.length; i < ii; i++) {
              if (typeof this[i] != "undefined") {
                return this[i];
              }
            }
          },
          lastDefined = function() {
            var i = this.length;
            while (--i) {
              if (typeof this[i] != "undefined") {
                return this[i];
              }
            }
          },
          eve = function(name, scope) {
            name = String(name);
            var e = events,
                oldstop = stop,
                args = Array.prototype.slice.call(arguments, 2),
                listeners = eve.listeners(name),
                z = 0,
                f = false,
                l,
                indexed = [],
                queue = {},
                out = [],
                ce = current_event,
                errors = [];
            out.firstDefined = firstDefined;
            out.lastDefined = lastDefined;
            current_event = name;
            stop = 0;
            for (var i = 0,
                ii = listeners.length; i < ii; i++)
              if ("zIndex" in listeners[i]) {
                indexed.push(listeners[i].zIndex);
                if (listeners[i].zIndex < 0) {
                  queue[listeners[i].zIndex] = listeners[i];
                }
              }
            indexed.sort(numsort);
            while (indexed[z] < 0) {
              l = queue[indexed[z++]];
              out.push(l.apply(scope, args));
              if (stop) {
                stop = oldstop;
                return out;
              }
            }
            for (i = 0; i < ii; i++) {
              l = listeners[i];
              if ("zIndex" in l) {
                if (l.zIndex == indexed[z]) {
                  out.push(l.apply(scope, args));
                  if (stop) {
                    break;
                  }
                  do {
                    z++;
                    l = queue[indexed[z]];
                    l && out.push(l.apply(scope, args));
                    if (stop) {
                      break;
                    }
                  } while (l);
                } else {
                  queue[l.zIndex] = l;
                }
              } else {
                out.push(l.apply(scope, args));
                if (stop) {
                  break;
                }
              }
            }
            stop = oldstop;
            current_event = ce;
            return out;
          };
      eve._events = events;
      eve.listeners = function(name) {
        var names = name.split(separator),
            e = events,
            item,
            items,
            k,
            i,
            ii,
            j,
            jj,
            nes,
            es = [e],
            out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
          nes = [];
          for (j = 0, jj = es.length; j < jj; j++) {
            e = es[j].n;
            items = [e[names[i]], e[wildcard]];
            k = 2;
            while (k--) {
              item = items[k];
              if (item) {
                nes.push(item);
                out = out.concat(item.f || []);
              }
            }
          }
          es = nes;
        }
        return out;
      };
      eve.on = function(name, f) {
        name = String(name);
        if (typeof f != "function") {
          return function() {};
        }
        var names = name.split(comaseparator);
        for (var i = 0,
            ii = names.length; i < ii; i++) {
          (function(name) {
            var names = name.split(separator),
                e = events,
                exist;
            for (var i = 0,
                ii = names.length; i < ii; i++) {
              e = e.n;
              e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
            }
            e.f = e.f || [];
            for (i = 0, ii = e.f.length; i < ii; i++)
              if (e.f[i] == f) {
                exist = true;
                break;
              }
            !exist && e.f.push(f);
          }(names[i]));
        }
        return function(zIndex) {
          if (+zIndex == +zIndex) {
            f.zIndex = +zIndex;
          }
        };
      };
      eve.f = function(event) {
        var attrs = [].slice.call(arguments, 1);
        return function() {
          eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
      };
      eve.stop = function() {
        stop = 1;
      };
      eve.nt = function(subname) {
        if (subname) {
          return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(current_event);
        }
        return current_event;
      };
      eve.nts = function() {
        return current_event.split(separator);
      };
      eve.off = eve.unbind = function(name, f) {
        if (!name) {
          eve._events = events = {n: {}};
          return;
        }
        var names = name.split(comaseparator);
        if (names.length > 1) {
          for (var i = 0,
              ii = names.length; i < ii; i++) {
            eve.off(names[i], f);
          }
          return;
        }
        names = name.split(separator);
        var e,
            key,
            splice,
            i,
            ii,
            j,
            jj,
            cur = [events];
        for (i = 0, ii = names.length; i < ii; i++) {
          for (j = 0; j < cur.length; j += splice.length - 2) {
            splice = [j, 1];
            e = cur[j].n;
            if (names[i] != wildcard) {
              if (e[names[i]]) {
                splice.push(e[names[i]]);
              }
            } else {
              for (key in e)
                if (e[has](key)) {
                  splice.push(e[key]);
                }
            }
            cur.splice.apply(cur, splice);
          }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
          e = cur[i];
          while (e.n) {
            if (f) {
              if (e.f) {
                for (j = 0, jj = e.f.length; j < jj; j++)
                  if (e.f[j] == f) {
                    e.f.splice(j, 1);
                    break;
                  }
                !e.f.length && delete e.f;
              }
              for (key in e.n)
                if (e.n[has](key) && e.n[key].f) {
                  var funcs = e.n[key].f;
                  for (j = 0, jj = funcs.length; j < jj; j++)
                    if (funcs[j] == f) {
                      funcs.splice(j, 1);
                      break;
                    }
                  !funcs.length && delete e.n[key].f;
                }
            } else {
              delete e.f;
              for (key in e.n)
                if (e.n[has](key) && e.n[key].f) {
                  delete e.n[key].f;
                }
            }
            e = e.n;
          }
        }
      };
      eve.once = function(name, f) {
        var f2 = function() {
          eve.unbind(name, f2);
          return f.apply(this, arguments);
        };
        return eve.on(name, f2);
      };
      eve.version = version;
      eve.toString = function() {
        return "You are running Eve " + version;
      };
      (typeof module != "undefined" && module.exports) ? (module.exports = eve) : (typeof define === "function" && define.amd ? (define("eve", [], function() {
        return eve;
      })) : (glob.eve = eve));
    })(this);
    (function(glob, factory) {
      if (typeof define == "function" && define.amd) {
        define(["eve"], function(eve) {
          return factory(glob, eve);
        });
      } else if (typeof exports != 'undefined') {
        var eve = $__require('6');
        module.exports = factory(glob, eve);
      } else {
        factory(glob, glob.eve);
      }
    }(window || this, function(window, eve) {
      var mina = (function(eve) {
        var animations = {},
            requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
              setTimeout(callback, 16);
            },
            isArray = Array.isArray || function(a) {
              return a instanceof Array || Object.prototype.toString.call(a) == "[object Array]";
            },
            idgen = 0,
            idprefix = "M" + (+new Date).toString(36),
            ID = function() {
              return idprefix + (idgen++).toString(36);
            },
            diff = function(a, b, A, B) {
              if (isArray(a)) {
                res = [];
                for (var i = 0,
                    ii = a.length; i < ii; i++) {
                  res[i] = diff(a[i], b, A[i], B);
                }
                return res;
              }
              var dif = (A - a) / (B - b);
              return function(bb) {
                return a + dif * (bb - b);
              };
            },
            timer = Date.now || function() {
              return +new Date;
            },
            sta = function(val) {
              var a = this;
              if (val == null) {
                return a.s;
              }
              var ds = a.s - val;
              a.b += a.dur * ds;
              a.B += a.dur * ds;
              a.s = val;
            },
            speed = function(val) {
              var a = this;
              if (val == null) {
                return a.spd;
              }
              a.spd = val;
            },
            duration = function(val) {
              var a = this;
              if (val == null) {
                return a.dur;
              }
              a.s = a.s * val / a.dur;
              a.dur = val;
            },
            stopit = function() {
              var a = this;
              delete animations[a.id];
              a.update();
              eve("mina.stop." + a.id, a);
            },
            pause = function() {
              var a = this;
              if (a.pdif) {
                return;
              }
              delete animations[a.id];
              a.update();
              a.pdif = a.get() - a.b;
            },
            resume = function() {
              var a = this;
              if (!a.pdif) {
                return;
              }
              a.b = a.get() - a.pdif;
              delete a.pdif;
              animations[a.id] = a;
            },
            update = function() {
              var a = this,
                  res;
              if (isArray(a.start)) {
                res = [];
                for (var j = 0,
                    jj = a.start.length; j < jj; j++) {
                  res[j] = +a.start[j] + (a.end[j] - a.start[j]) * a.easing(a.s);
                }
              } else {
                res = +a.start + (a.end - a.start) * a.easing(a.s);
              }
              a.set(res);
            },
            frame = function() {
              var len = 0;
              for (var i in animations)
                if (animations.hasOwnProperty(i)) {
                  var a = animations[i],
                      b = a.get(),
                      res;
                  len++;
                  a.s = (b - a.b) / (a.dur / a.spd);
                  if (a.s >= 1) {
                    delete animations[i];
                    a.s = 1;
                    len--;
                    (function(a) {
                      setTimeout(function() {
                        eve("mina.finish." + a.id, a);
                      });
                    }(a));
                  }
                  a.update();
                }
              len && requestAnimFrame(frame);
            },
            mina = function(a, A, b, B, get, set, easing) {
              var anim = {
                id: ID(),
                start: a,
                end: A,
                b: b,
                s: 0,
                dur: B - b,
                spd: 1,
                get: get,
                set: set,
                easing: easing || mina.linear,
                status: sta,
                speed: speed,
                duration: duration,
                stop: stopit,
                pause: pause,
                resume: resume,
                update: update
              };
              animations[anim.id] = anim;
              var len = 0,
                  i;
              for (i in animations)
                if (animations.hasOwnProperty(i)) {
                  len++;
                  if (len == 2) {
                    break;
                  }
                }
              len == 1 && requestAnimFrame(frame);
              return anim;
            };
        mina.time = timer;
        mina.getById = function(id) {
          return animations[id] || null;
        };
        mina.linear = function(n) {
          return n;
        };
        mina.easeout = function(n) {
          return Math.pow(n, 1.7);
        };
        mina.easein = function(n) {
          return Math.pow(n, .48);
        };
        mina.easeinout = function(n) {
          if (n == 1) {
            return 1;
          }
          if (n == 0) {
            return 0;
          }
          var q = .48 - n / 1.04,
              Q = Math.sqrt(.1734 + q * q),
              x = Q - q,
              X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1),
              y = -Q - q,
              Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1),
              t = X + Y + .5;
          return (1 - t) * 3 * t * t + t * t * t;
        };
        mina.backin = function(n) {
          if (n == 1) {
            return 1;
          }
          var s = 1.70158;
          return n * n * ((s + 1) * n - s);
        };
        mina.backout = function(n) {
          if (n == 0) {
            return 0;
          }
          n = n - 1;
          var s = 1.70158;
          return n * n * ((s + 1) * n + s) + 1;
        };
        mina.elastic = function(n) {
          if (n == !!n) {
            return n;
          }
          return Math.pow(2, -10 * n) * Math.sin((n - .075) * (2 * Math.PI) / .3) + 1;
        };
        mina.bounce = function(n) {
          var s = 7.5625,
              p = 2.75,
              l;
          if (n < (1 / p)) {
            l = s * n * n;
          } else {
            if (n < (2 / p)) {
              n -= (1.5 / p);
              l = s * n * n + .75;
            } else {
              if (n < (2.5 / p)) {
                n -= (2.25 / p);
                l = s * n * n + .9375;
              } else {
                n -= (2.625 / p);
                l = s * n * n + .984375;
              }
            }
          }
          return l;
        };
        window.mina = mina;
        return mina;
      })(typeof eve == "undefined" ? function() {} : eve);
      var Snap = (function(root) {
        Snap.version = "0.4.0";
        function Snap(w, h) {
          if (w) {
            if (w.nodeType) {
              return wrap(w);
            }
            if (is(w, "array") && Snap.set) {
              return Snap.set.apply(Snap, w);
            }
            if (w instanceof Element) {
              return w;
            }
            if (h == null) {
              w = glob.doc.querySelector(String(w));
              return wrap(w);
            }
          }
          w = w == null ? "100%" : w;
          h = h == null ? "100%" : h;
          return new Paper(w, h);
        }
        Snap.toString = function() {
          return "Snap v" + this.version;
        };
        Snap._ = {};
        var glob = {
          win: root.window,
          doc: root.window.document
        };
        Snap._.glob = glob;
        var has = "hasOwnProperty",
            Str = String,
            toFloat = parseFloat,
            toInt = parseInt,
            math = Math,
            mmax = math.max,
            mmin = math.min,
            abs = math.abs,
            pow = math.pow,
            PI = math.PI,
            round = math.round,
            E = "",
            S = " ",
            objectToString = Object.prototype.toString,
            ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
            colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
            bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
            reURLValue = /^url\(#?([^)]+)\)$/,
            separator = Snap._.separator = /[,\s]+/,
            whitespace = /[\s]/g,
            commaSpaces = /[\s]*,[\s]*/,
            hsrg = {
              hs: 1,
              rg: 1
            },
            pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
            tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig,
            pathValues = /(-?\d*\.?\d*(?:e[\-+]?\\d+)?)[\s]*,?[\s]*/ig,
            idgen = 0,
            idprefix = "S" + (+new Date).toString(36),
            ID = function(el) {
              return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
            },
            xlink = "http://www.w3.org/1999/xlink",
            xmlns = "http://www.w3.org/2000/svg",
            hub = {},
            URL = Snap.url = function(url) {
              return "url('#" + url + "')";
            };
        function $(el, attr) {
          if (attr) {
            if (el == "#text") {
              el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
            }
            if (el == "#comment") {
              el = glob.doc.createComment(attr.text || attr["#text"] || "");
            }
            if (typeof el == "string") {
              el = $(el);
            }
            if (typeof attr == "string") {
              if (el.nodeType == 1) {
                if (attr.substring(0, 6) == "xlink:") {
                  return el.getAttributeNS(xlink, attr.substring(6));
                }
                if (attr.substring(0, 4) == "xml:") {
                  return el.getAttributeNS(xmlns, attr.substring(4));
                }
                return el.getAttribute(attr);
              } else if (attr == "text") {
                return el.nodeValue;
              } else {
                return null;
              }
            }
            if (el.nodeType == 1) {
              for (var key in attr)
                if (attr[has](key)) {
                  var val = Str(attr[key]);
                  if (val) {
                    if (key.substring(0, 6) == "xlink:") {
                      el.setAttributeNS(xlink, key.substring(6), val);
                    } else if (key.substring(0, 4) == "xml:") {
                      el.setAttributeNS(xmlns, key.substring(4), val);
                    } else {
                      el.setAttribute(key, val);
                    }
                  } else {
                    el.removeAttribute(key);
                  }
                }
            } else if ("text" in attr) {
              el.nodeValue = attr.text;
            }
          } else {
            el = glob.doc.createElementNS(xmlns, el);
          }
          return el;
        }
        Snap._.$ = $;
        Snap._.id = ID;
        function getAttrs(el) {
          var attrs = el.attributes,
              name,
              out = {};
          for (var i = 0; i < attrs.length; i++) {
            if (attrs[i].namespaceURI == xlink) {
              name = "xlink:";
            } else {
              name = "";
            }
            name += attrs[i].name;
            out[name] = attrs[i].textContent;
          }
          return out;
        }
        function is(o, type) {
          type = Str.prototype.toLowerCase.call(type);
          if (type == "finite") {
            return isFinite(o);
          }
          if (type == "array" && (o instanceof Array || Array.isArray && Array.isArray(o))) {
            return true;
          }
          return (type == "null" && o === null) || (type == typeof o && o !== null) || (type == "object" && o === Object(o)) || objectToString.call(o).slice(8, -1).toLowerCase() == type;
        }
        Snap.format = (function() {
          var tokenRegex = /\{([^\}]+)\}/g,
              objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
              replacer = function(all, key, obj) {
                var res = obj;
                key.replace(objNotationRegex, function(all, name, quote, quotedName, isFunc) {
                  name = name || quotedName;
                  if (res) {
                    if (name in res) {
                      res = res[name];
                    }
                    typeof res == "function" && isFunc && (res = res());
                  }
                });
                res = (res == null || res == obj ? all : res) + "";
                return res;
              };
          return function(str, obj) {
            return Str(str).replace(tokenRegex, function(all, key) {
              return replacer(all, key, obj);
            });
          };
        })();
        function clone(obj) {
          if (typeof obj == "function" || Object(obj) !== obj) {
            return obj;
          }
          var res = new obj.constructor;
          for (var key in obj)
            if (obj[has](key)) {
              res[key] = clone(obj[key]);
            }
          return res;
        }
        Snap._.clone = clone;
        function repush(array, item) {
          for (var i = 0,
              ii = array.length; i < ii; i++)
            if (array[i] === item) {
              return array.push(array.splice(i, 1)[0]);
            }
        }
        function cacher(f, scope, postprocessor) {
          function newf() {
            var arg = Array.prototype.slice.call(arguments, 0),
                args = arg.join("\u2400"),
                cache = newf.cache = newf.cache || {},
                count = newf.count = newf.count || [];
            if (cache[has](args)) {
              repush(count, args);
              return postprocessor ? postprocessor(cache[args]) : cache[args];
            }
            count.length >= 1e3 && delete cache[count.shift()];
            count.push(args);
            cache[args] = f.apply(scope, arg);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
          }
          return newf;
        }
        Snap._.cacher = cacher;
        function angle(x1, y1, x2, y2, x3, y3) {
          if (x3 == null) {
            var x = x1 - x2,
                y = y1 - y2;
            if (!x && !y) {
              return 0;
            }
            return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
          } else {
            return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
          }
        }
        function rad(deg) {
          return deg % 360 * PI / 180;
        }
        function deg(rad) {
          return rad * 180 / PI % 360;
        }
        function x_y() {
          return this.x + S + this.y;
        }
        function x_y_w_h() {
          return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
        }
        Snap.rad = rad;
        Snap.deg = deg;
        Snap.sin = function(angle) {
          return math.sin(Snap.rad(angle));
        };
        Snap.tan = function(angle) {
          return math.tan(Snap.rad(angle));
        };
        Snap.cos = function(angle) {
          return math.cos(Snap.rad(angle));
        };
        Snap.asin = function(num) {
          return Snap.deg(math.asin(num));
        };
        Snap.acos = function(num) {
          return Snap.deg(math.acos(num));
        };
        Snap.atan = function(num) {
          return Snap.deg(math.atan(num));
        };
        Snap.atan2 = function(num) {
          return Snap.deg(math.atan2(num));
        };
        Snap.angle = angle;
        Snap.len = function(x1, y1, x2, y2) {
          return Math.sqrt(Snap.len2(x1, y1, x2, y2));
        };
        Snap.len2 = function(x1, y1, x2, y2) {
          return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
        };
        Snap.closestPoint = function(path, x, y) {
          function distance2(p) {
            var dx = p.x - x,
                dy = p.y - y;
            return dx * dx + dy * dy;
          }
          var pathNode = path.node,
              pathLength = pathNode.getTotalLength(),
              precision = pathLength / pathNode.pathSegList.numberOfItems * .125,
              best,
              bestLength,
              bestDistance = Infinity;
          for (var scan,
              scanLength = 0,
              scanDistance; scanLength <= pathLength; scanLength += precision) {
            if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
              best = scan, bestLength = scanLength, bestDistance = scanDistance;
            }
          }
          precision *= .5;
          while (precision > .5) {
            var before,
                after,
                beforeLength,
                afterLength,
                beforeDistance,
                afterDistance;
            if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
              best = before, bestLength = beforeLength, bestDistance = beforeDistance;
            } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
              best = after, bestLength = afterLength, bestDistance = afterDistance;
            } else {
              precision *= .5;
            }
          }
          best = {
            x: best.x,
            y: best.y,
            length: bestLength,
            distance: Math.sqrt(bestDistance)
          };
          return best;
        };
        Snap.is = is;
        Snap.snapTo = function(values, value, tolerance) {
          tolerance = is(tolerance, "finite") ? tolerance : 10;
          if (is(values, "array")) {
            var i = values.length;
            while (i--)
              if (abs(values[i] - value) <= tolerance) {
                return values[i];
              }
          } else {
            values = +values;
            var rem = value % values;
            if (rem < tolerance) {
              return value - rem;
            }
            if (rem > values - tolerance) {
              return value - rem + values;
            }
          }
          return value;
        };
        Snap.getRGB = cacher(function(colour) {
          if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
            return {
              r: -1,
              g: -1,
              b: -1,
              hex: "none",
              error: 1,
              toString: rgbtoString
            };
          }
          if (colour == "none") {
            return {
              r: -1,
              g: -1,
              b: -1,
              hex: "none",
              toString: rgbtoString
            };
          }
          !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
          if (!colour) {
            return {
              r: -1,
              g: -1,
              b: -1,
              hex: "none",
              error: 1,
              toString: rgbtoString
            };
          }
          var res,
              red,
              green,
              blue,
              opacity,
              t,
              values,
              rgb = colour.match(colourRegExp);
          if (rgb) {
            if (rgb[2]) {
              blue = toInt(rgb[2].substring(5), 16);
              green = toInt(rgb[2].substring(3, 5), 16);
              red = toInt(rgb[2].substring(1, 3), 16);
            }
            if (rgb[3]) {
              blue = toInt((t = rgb[3].charAt(3)) + t, 16);
              green = toInt((t = rgb[3].charAt(2)) + t, 16);
              red = toInt((t = rgb[3].charAt(1)) + t, 16);
            }
            if (rgb[4]) {
              values = rgb[4].split(commaSpaces);
              red = toFloat(values[0]);
              values[0].slice(-1) == "%" && (red *= 2.55);
              green = toFloat(values[1]);
              values[1].slice(-1) == "%" && (green *= 2.55);
              blue = toFloat(values[2]);
              values[2].slice(-1) == "%" && (blue *= 2.55);
              rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
              values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            }
            if (rgb[5]) {
              values = rgb[5].split(commaSpaces);
              red = toFloat(values[0]);
              values[0].slice(-1) == "%" && (red /= 100);
              green = toFloat(values[1]);
              values[1].slice(-1) == "%" && (green /= 100);
              blue = toFloat(values[2]);
              values[2].slice(-1) == "%" && (blue /= 100);
              (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
              rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
              values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
              return Snap.hsb2rgb(red, green, blue, opacity);
            }
            if (rgb[6]) {
              values = rgb[6].split(commaSpaces);
              red = toFloat(values[0]);
              values[0].slice(-1) == "%" && (red /= 100);
              green = toFloat(values[1]);
              values[1].slice(-1) == "%" && (green /= 100);
              blue = toFloat(values[2]);
              values[2].slice(-1) == "%" && (blue /= 100);
              (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
              rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
              values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
              return Snap.hsl2rgb(red, green, blue, opacity);
            }
            red = mmin(math.round(red), 255);
            green = mmin(math.round(green), 255);
            blue = mmin(math.round(blue), 255);
            opacity = mmin(mmax(opacity, 0), 1);
            rgb = {
              r: red,
              g: green,
              b: blue,
              toString: rgbtoString
            };
            rgb.hex = "#" + (16777216 | blue | (green << 8) | (red << 16)).toString(16).slice(1);
            rgb.opacity = is(opacity, "finite") ? opacity : 1;
            return rgb;
          }
          return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: rgbtoString
          };
        }, Snap);
        Snap.hsb = cacher(function(h, s, b) {
          return Snap.hsb2rgb(h, s, b).hex;
        });
        Snap.hsl = cacher(function(h, s, l) {
          return Snap.hsl2rgb(h, s, l).hex;
        });
        Snap.rgb = cacher(function(r, g, b, o) {
          if (is(o, "finite")) {
            var round = math.round;
            return "rgba(" + [round(r), round(g), round(b), +o.toFixed(2)] + ")";
          }
          return "#" + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1);
        });
        var toHex = function(color) {
          var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0],
              red = "rgb(255, 0, 0)";
          toHex = cacher(function(color) {
            if (color.toLowerCase() == "red") {
              return red;
            }
            i.style.color = red;
            i.style.color = color;
            var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
            return out == red ? null : out;
          });
          return toHex(color);
        },
            hsbtoString = function() {
              return "hsb(" + [this.h, this.s, this.b] + ")";
            },
            hsltoString = function() {
              return "hsl(" + [this.h, this.s, this.l] + ")";
            },
            rgbtoString = function() {
              return this.opacity == 1 || this.opacity == null ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
            },
            prepareRGB = function(r, g, b) {
              if (g == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
                b = r.b;
                g = r.g;
                r = r.r;
              }
              if (g == null && is(r, string)) {
                var clr = Snap.getRGB(r);
                r = clr.r;
                g = clr.g;
                b = clr.b;
              }
              if (r > 1 || g > 1 || b > 1) {
                r /= 255;
                g /= 255;
                b /= 255;
              }
              return [r, g, b];
            },
            packageRGB = function(r, g, b, o) {
              r = math.round(r * 255);
              g = math.round(g * 255);
              b = math.round(b * 255);
              var rgb = {
                r: r,
                g: g,
                b: b,
                opacity: is(o, "finite") ? o : 1,
                hex: Snap.rgb(r, g, b),
                toString: rgbtoString
              };
              is(o, "finite") && (rgb.opacity = o);
              return rgb;
            };
        Snap.color = function(clr) {
          var rgb;
          if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
            rgb = Snap.hsb2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.opacity = 1;
            clr.hex = rgb.hex;
          } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
            rgb = Snap.hsl2rgb(clr);
            clr.r = rgb.r;
            clr.g = rgb.g;
            clr.b = rgb.b;
            clr.opacity = 1;
            clr.hex = rgb.hex;
          } else {
            if (is(clr, "string")) {
              clr = Snap.getRGB(clr);
            }
            if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
              rgb = Snap.rgb2hsl(clr);
              clr.h = rgb.h;
              clr.s = rgb.s;
              clr.l = rgb.l;
              rgb = Snap.rgb2hsb(clr);
              clr.v = rgb.b;
            } else {
              clr = {hex: "none"};
              clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
              clr.error = 1;
            }
          }
          clr.toString = rgbtoString;
          return clr;
        };
        Snap.hsb2rgb = function(h, s, v, o) {
          if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
            v = h.b;
            s = h.s;
            o = h.o;
            h = h.h;
          }
          h *= 360;
          var R,
              G,
              B,
              X,
              C;
          h = (h % 360) / 60;
          C = v * s;
          X = C * (1 - abs(h % 2 - 1));
          R = G = B = v - C;
          h = ~~h;
          R += [C, X, 0, 0, X, C][h];
          G += [X, C, C, X, 0, 0][h];
          B += [0, 0, X, C, C, X][h];
          return packageRGB(R, G, B, o);
        };
        Snap.hsl2rgb = function(h, s, l, o) {
          if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
            l = h.l;
            s = h.s;
            h = h.h;
          }
          if (h > 1 || s > 1 || l > 1) {
            h /= 360;
            s /= 100;
            l /= 100;
          }
          h *= 360;
          var R,
              G,
              B,
              X,
              C;
          h = (h % 360) / 60;
          C = 2 * s * (l < .5 ? l : 1 - l);
          X = C * (1 - abs(h % 2 - 1));
          R = G = B = l - C / 2;
          h = ~~h;
          R += [C, X, 0, 0, X, C][h];
          G += [X, C, C, X, 0, 0][h];
          B += [0, 0, X, C, C, X][h];
          return packageRGB(R, G, B, o);
        };
        Snap.rgb2hsb = function(r, g, b) {
          b = prepareRGB(r, g, b);
          r = b[0];
          g = b[1];
          b = b[2];
          var H,
              S,
              V,
              C;
          V = mmax(r, g, b);
          C = V - mmin(r, g, b);
          H = (C == 0 ? null : V == r ? (g - b) / C : V == g ? (b - r) / C + 2 : (r - g) / C + 4);
          H = ((H + 360) % 6) * 60 / 360;
          S = C == 0 ? 0 : C / V;
          return {
            h: H,
            s: S,
            b: V,
            toString: hsbtoString
          };
        };
        Snap.rgb2hsl = function(r, g, b) {
          b = prepareRGB(r, g, b);
          r = b[0];
          g = b[1];
          b = b[2];
          var H,
              S,
              L,
              M,
              m,
              C;
          M = mmax(r, g, b);
          m = mmin(r, g, b);
          C = M - m;
          H = (C == 0 ? null : M == r ? (g - b) / C : M == g ? (b - r) / C + 2 : (r - g) / C + 4);
          H = ((H + 360) % 6) * 60 / 360;
          L = (M + m) / 2;
          S = (C == 0 ? 0 : L < .5 ? C / (2 * L) : C / (2 - 2 * L));
          return {
            h: H,
            s: S,
            l: L,
            toString: hsltoString
          };
        };
        Snap.parsePathString = function(pathString) {
          if (!pathString) {
            return null;
          }
          var pth = Snap.path(pathString);
          if (pth.arr) {
            return Snap.path.clone(pth.arr);
          }
          var paramCounts = {
            a: 7,
            c: 6,
            o: 2,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            u: 3,
            z: 0
          },
              data = [];
          if (is(pathString, "array") && is(pathString[0], "array")) {
            data = Snap.path.clone(pathString);
          }
          if (!data.length) {
            Str(pathString).replace(pathCommand, function(a, b, c) {
              var params = [],
                  name = b.toLowerCase();
              c.replace(pathValues, function(a, b) {
                b && params.push(+b);
              });
              if (name == "m" && params.length > 2) {
                data.push([b].concat(params.splice(0, 2)));
                name = "l";
                b = b == "m" ? "l" : "L";
              }
              if (name == "o" && params.length == 1) {
                data.push([b, params[0]]);
              }
              if (name == "r") {
                data.push([b].concat(params));
              } else
                while (params.length >= paramCounts[name]) {
                  data.push([b].concat(params.splice(0, paramCounts[name])));
                  if (!paramCounts[name]) {
                    break;
                  }
                }
            });
          }
          data.toString = Snap.path.toString;
          pth.arr = Snap.path.clone(data);
          return data;
        };
        var parseTransformString = Snap.parseTransformString = function(TString) {
          if (!TString) {
            return null;
          }
          var paramCounts = {
            r: 3,
            s: 4,
            t: 2,
            m: 6
          },
              data = [];
          if (is(TString, "array") && is(TString[0], "array")) {
            data = Snap.path.clone(TString);
          }
          if (!data.length) {
            Str(TString).replace(tCommand, function(a, b, c) {
              var params = [],
                  name = b.toLowerCase();
              c.replace(pathValues, function(a, b) {
                b && params.push(+b);
              });
              data.push([b].concat(params));
            });
          }
          data.toString = Snap.path.toString;
          return data;
        };
        function svgTransform2string(tstr) {
          var res = [];
          tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(all, name, params) {
            params = params.split(/\s*,\s*|\s+/);
            if (name == "rotate" && params.length == 1) {
              params.push(0, 0);
            }
            if (name == "scale") {
              if (params.length > 2) {
                params = params.slice(0, 2);
              } else if (params.length == 2) {
                params.push(0, 0);
              }
              if (params.length == 1) {
                params.push(params[0], 0, 0);
              }
            }
            if (name == "skewX") {
              res.push(["m", 1, 0, math.tan(rad(params[0])), 1, 0, 0]);
            } else if (name == "skewY") {
              res.push(["m", 1, math.tan(rad(params[0])), 0, 1, 0, 0]);
            } else {
              res.push([name.charAt(0)].concat(params));
            }
            return all;
          });
          return res;
        }
        Snap._.svgTransform2string = svgTransform2string;
        Snap._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
        function transform2matrix(tstr, bbox) {
          var tdata = parseTransformString(tstr),
              m = new Snap.Matrix;
          if (tdata) {
            for (var i = 0,
                ii = tdata.length; i < ii; i++) {
              var t = tdata[i],
                  tlen = t.length,
                  command = Str(t[0]).toLowerCase(),
                  absolute = t[0] != command,
                  inver = absolute ? m.invert() : 0,
                  x1,
                  y1,
                  x2,
                  y2,
                  bb;
              if (command == "t" && tlen == 2) {
                m.translate(t[1], 0);
              } else if (command == "t" && tlen == 3) {
                if (absolute) {
                  x1 = inver.x(0, 0);
                  y1 = inver.y(0, 0);
                  x2 = inver.x(t[1], t[2]);
                  y2 = inver.y(t[1], t[2]);
                  m.translate(x2 - x1, y2 - y1);
                } else {
                  m.translate(t[1], t[2]);
                }
              } else if (command == "r") {
                if (tlen == 2) {
                  bb = bb || bbox;
                  m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                  if (absolute) {
                    x2 = inver.x(t[2], t[3]);
                    y2 = inver.y(t[2], t[3]);
                    m.rotate(t[1], x2, y2);
                  } else {
                    m.rotate(t[1], t[2], t[3]);
                  }
                }
              } else if (command == "s") {
                if (tlen == 2 || tlen == 3) {
                  bb = bb || bbox;
                  m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
                } else if (tlen == 4) {
                  if (absolute) {
                    x2 = inver.x(t[2], t[3]);
                    y2 = inver.y(t[2], t[3]);
                    m.scale(t[1], t[1], x2, y2);
                  } else {
                    m.scale(t[1], t[1], t[2], t[3]);
                  }
                } else if (tlen == 5) {
                  if (absolute) {
                    x2 = inver.x(t[3], t[4]);
                    y2 = inver.y(t[3], t[4]);
                    m.scale(t[1], t[2], x2, y2);
                  } else {
                    m.scale(t[1], t[2], t[3], t[4]);
                  }
                }
              } else if (command == "m" && tlen == 7) {
                m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
              }
            }
          }
          return m;
        }
        Snap._.transform2matrix = transform2matrix;
        Snap._unit2px = unit2px;
        var contains = glob.doc.contains || glob.doc.compareDocumentPosition ? function(a, b) {
          var adown = a.nodeType == 9 ? a.documentElement : a,
              bup = b && b.parentNode;
          return a == bup || !!(bup && bup.nodeType == 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
        } : function(a, b) {
          if (b) {
            while (b) {
              b = b.parentNode;
              if (b == a) {
                return true;
              }
            }
          }
          return false;
        };
        function getSomeDefs(el) {
          var p = (el.node.ownerSVGElement && wrap(el.node.ownerSVGElement)) || (el.node.parentNode && wrap(el.node.parentNode)) || Snap.select("svg") || Snap(0, 0),
              pdefs = p.select("defs"),
              defs = pdefs == null ? false : pdefs.node;
          if (!defs) {
            defs = make("defs", p.node).node;
          }
          return defs;
        }
        function getSomeSVG(el) {
          return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap.select("svg");
        }
        Snap._.getSomeDefs = getSomeDefs;
        Snap._.getSomeSVG = getSomeSVG;
        function unit2px(el, name, value) {
          var svg = getSomeSVG(el).node,
              out = {},
              mgr = svg.querySelector(".svg---mgr");
          if (!mgr) {
            mgr = $("rect");
            $(mgr, {
              x: -9e9,
              y: -9e9,
              width: 10,
              height: 10,
              "class": "svg---mgr",
              fill: "none"
            });
            svg.appendChild(mgr);
          }
          function getW(val) {
            if (val == null) {
              return E;
            }
            if (val == +val) {
              return val;
            }
            $(mgr, {width: val});
            try {
              return mgr.getBBox().width;
            } catch (e) {
              return 0;
            }
          }
          function getH(val) {
            if (val == null) {
              return E;
            }
            if (val == +val) {
              return val;
            }
            $(mgr, {height: val});
            try {
              return mgr.getBBox().height;
            } catch (e) {
              return 0;
            }
          }
          function set(nam, f) {
            if (name == null) {
              out[nam] = f(el.attr(nam) || 0);
            } else if (nam == name) {
              out = f(value == null ? el.attr(nam) || 0 : value);
            }
          }
          switch (el.type) {
            case "rect":
              set("rx", getW);
              set("ry", getH);
            case "image":
              set("width", getW);
              set("height", getH);
            case "text":
              set("x", getW);
              set("y", getH);
              break;
            case "circle":
              set("cx", getW);
              set("cy", getH);
              set("r", getW);
              break;
            case "ellipse":
              set("cx", getW);
              set("cy", getH);
              set("rx", getW);
              set("ry", getH);
              break;
            case "line":
              set("x1", getW);
              set("x2", getW);
              set("y1", getH);
              set("y2", getH);
              break;
            case "marker":
              set("refX", getW);
              set("markerWidth", getW);
              set("refY", getH);
              set("markerHeight", getH);
              break;
            case "radialGradient":
              set("fx", getW);
              set("fy", getH);
              break;
            case "tspan":
              set("dx", getW);
              set("dy", getH);
              break;
            default:
              set(name, getW);
          }
          svg.removeChild(mgr);
          return out;
        }
        Snap.select = function(query) {
          query = Str(query).replace(/([^\\]):/g, "$1\\:");
          return wrap(glob.doc.querySelector(query));
        };
        Snap.selectAll = function(query) {
          var nodelist = glob.doc.querySelectorAll(query),
              set = (Snap.set || Array)();
          for (var i = 0; i < nodelist.length; i++) {
            set.push(wrap(nodelist[i]));
          }
          return set;
        };
        function add2group(list) {
          if (!is(list, "array")) {
            list = Array.prototype.slice.call(arguments, 0);
          }
          var i = 0,
              j = 0,
              node = this.node;
          while (this[i])
            delete this[i++];
          for (i = 0; i < list.length; i++) {
            if (list[i].type == "set") {
              list[i].forEach(function(el) {
                node.appendChild(el.node);
              });
            } else {
              node.appendChild(list[i].node);
            }
          }
          var children = node.childNodes;
          for (i = 0; i < children.length; i++) {
            this[j++] = wrap(children[i]);
          }
          return this;
        }
        setInterval(function() {
          for (var key in hub)
            if (hub[has](key)) {
              var el = hub[key],
                  node = el.node;
              if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
                delete hub[key];
              }
            }
        }, 1e4);
        function Element(el) {
          if (el.snap in hub) {
            return hub[el.snap];
          }
          var svg;
          try {
            svg = el.ownerSVGElement;
          } catch (e) {}
          this.node = el;
          if (svg) {
            this.paper = new Paper(svg);
          }
          this.type = el.tagName || el.nodeName;
          var id = this.id = ID(this);
          this.anims = {};
          this._ = {transform: []};
          el.snap = id;
          hub[id] = this;
          if (this.type == "g") {
            this.add = add2group;
          }
          if (this.type in {
            g: 1,
            mask: 1,
            pattern: 1,
            symbol: 1
          }) {
            for (var method in Paper.prototype)
              if (Paper.prototype[has](method)) {
                this[method] = Paper.prototype[method];
              }
          }
        }
        Element.prototype.attr = function(params, value) {
          var el = this,
              node = el.node;
          if (!params) {
            if (node.nodeType != 1) {
              return {text: node.nodeValue};
            }
            var attr = node.attributes,
                out = {};
            for (var i = 0,
                ii = attr.length; i < ii; i++) {
              out[attr[i].nodeName] = attr[i].nodeValue;
            }
            return out;
          }
          if (is(params, "string")) {
            if (arguments.length > 1) {
              var json = {};
              json[params] = value;
              params = json;
            } else {
              return eve("snap.util.getattr." + params, el).firstDefined();
            }
          }
          for (var att in params) {
            if (params[has](att)) {
              eve("snap.util.attr." + att, el, params[att]);
            }
          }
          return el;
        };
        Snap.parse = function(svg) {
          var f = glob.doc.createDocumentFragment(),
              full = true,
              div = glob.doc.createElement("div");
          svg = Str(svg);
          if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
            svg = "<svg>" + svg + "</svg>";
            full = false;
          }
          div.innerHTML = svg;
          svg = div.getElementsByTagName("svg")[0];
          if (svg) {
            if (full) {
              f = svg;
            } else {
              while (svg.firstChild) {
                f.appendChild(svg.firstChild);
              }
            }
          }
          return new Fragment(f);
        };
        function Fragment(frag) {
          this.node = frag;
        }
        Snap.fragment = function() {
          var args = Array.prototype.slice.call(arguments, 0),
              f = glob.doc.createDocumentFragment();
          for (var i = 0,
              ii = args.length; i < ii; i++) {
            var item = args[i];
            if (item.node && item.node.nodeType) {
              f.appendChild(item.node);
            }
            if (item.nodeType) {
              f.appendChild(item);
            }
            if (typeof item == "string") {
              f.appendChild(Snap.parse(item).node);
            }
          }
          return new Fragment(f);
        };
        function make(name, parent) {
          var res = $(name);
          parent.appendChild(res);
          var el = wrap(res);
          return el;
        }
        function Paper(w, h) {
          var res,
              desc,
              defs,
              proto = Paper.prototype;
          if (w && w.tagName == "svg") {
            if (w.snap in hub) {
              return hub[w.snap];
            }
            var doc = w.ownerDocument;
            res = new Element(w);
            desc = w.getElementsByTagName("desc")[0];
            defs = w.getElementsByTagName("defs")[0];
            if (!desc) {
              desc = $("desc");
              desc.appendChild(doc.createTextNode("Created with Snap"));
              res.node.appendChild(desc);
            }
            if (!defs) {
              defs = $("defs");
              res.node.appendChild(defs);
            }
            res.defs = defs;
            for (var key in proto)
              if (proto[has](key)) {
                res[key] = proto[key];
              }
            res.paper = res.root = res;
          } else {
            res = make("svg", glob.doc.body);
            $(res.node, {
              height: h,
              version: 1.1,
              width: w,
              xmlns: xmlns
            });
          }
          return res;
        }
        function wrap(dom) {
          if (!dom) {
            return dom;
          }
          if (dom instanceof Element || dom instanceof Fragment) {
            return dom;
          }
          if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
            return new Paper(dom);
          }
          if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
            return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
          }
          return new Element(dom);
        }
        Snap._.make = make;
        Snap._.wrap = wrap;
        Paper.prototype.el = function(name, attr) {
          var el = make(name, this.node);
          attr && el.attr(attr);
          return el;
        };
        Element.prototype.children = function() {
          var out = [],
              ch = this.node.childNodes;
          for (var i = 0,
              ii = ch.length; i < ii; i++) {
            out[i] = Snap(ch[i]);
          }
          return out;
        };
        function jsonFiller(root, o) {
          for (var i = 0,
              ii = root.length; i < ii; i++) {
            var item = {
              type: root[i].type,
              attr: root[i].attr()
            },
                children = root[i].children();
            o.push(item);
            if (children.length) {
              jsonFiller(children, item.childNodes = []);
            }
          }
        }
        Element.prototype.toJSON = function() {
          var out = [];
          jsonFiller([this], out);
          return out[0];
        };
        eve.on("snap.util.getattr", function() {
          var att = eve.nt();
          att = att.substring(att.lastIndexOf(".") + 1);
          var css = att.replace(/[A-Z]/g, function(letter) {
            return "-" + letter.toLowerCase();
          });
          if (cssAttr[has](css)) {
            return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
          } else {
            return $(this.node, att);
          }
        });
        var cssAttr = {
          "alignment-baseline": 0,
          "baseline-shift": 0,
          "clip": 0,
          "clip-path": 0,
          "clip-rule": 0,
          "color": 0,
          "color-interpolation": 0,
          "color-interpolation-filters": 0,
          "color-profile": 0,
          "color-rendering": 0,
          "cursor": 0,
          "direction": 0,
          "display": 0,
          "dominant-baseline": 0,
          "enable-background": 0,
          "fill": 0,
          "fill-opacity": 0,
          "fill-rule": 0,
          "filter": 0,
          "flood-color": 0,
          "flood-opacity": 0,
          "font": 0,
          "font-family": 0,
          "font-size": 0,
          "font-size-adjust": 0,
          "font-stretch": 0,
          "font-style": 0,
          "font-variant": 0,
          "font-weight": 0,
          "glyph-orientation-horizontal": 0,
          "glyph-orientation-vertical": 0,
          "image-rendering": 0,
          "kerning": 0,
          "letter-spacing": 0,
          "lighting-color": 0,
          "marker": 0,
          "marker-end": 0,
          "marker-mid": 0,
          "marker-start": 0,
          "mask": 0,
          "opacity": 0,
          "overflow": 0,
          "pointer-events": 0,
          "shape-rendering": 0,
          "stop-color": 0,
          "stop-opacity": 0,
          "stroke": 0,
          "stroke-dasharray": 0,
          "stroke-dashoffset": 0,
          "stroke-linecap": 0,
          "stroke-linejoin": 0,
          "stroke-miterlimit": 0,
          "stroke-opacity": 0,
          "stroke-width": 0,
          "text-anchor": 0,
          "text-decoration": 0,
          "text-rendering": 0,
          "unicode-bidi": 0,
          "visibility": 0,
          "word-spacing": 0,
          "writing-mode": 0
        };
        eve.on("snap.util.attr", function(value) {
          var att = eve.nt(),
              attr = {};
          att = att.substring(att.lastIndexOf(".") + 1);
          attr[att] = value;
          var style = att.replace(/-(\w)/gi, function(all, letter) {
            return letter.toUpperCase();
          }),
              css = att.replace(/[A-Z]/g, function(letter) {
                return "-" + letter.toLowerCase();
              });
          if (cssAttr[has](css)) {
            this.node.style[style] = value == null ? E : value;
          } else {
            $(this.node, attr);
          }
        });
        (function(proto) {}(Paper.prototype));
        Snap.ajax = function(url, postData, callback, scope) {
          var req = new XMLHttpRequest,
              id = ID();
          if (req) {
            if (is(postData, "function")) {
              scope = callback;
              callback = postData;
              postData = null;
            } else if (is(postData, "object")) {
              var pd = [];
              for (var key in postData)
                if (postData.hasOwnProperty(key)) {
                  pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
                }
              postData = pd.join("&");
            }
            req.open((postData ? "POST" : "GET"), url, true);
            if (postData) {
              req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
              req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            }
            if (callback) {
              eve.once("snap.ajax." + id + ".0", callback);
              eve.once("snap.ajax." + id + ".200", callback);
              eve.once("snap.ajax." + id + ".304", callback);
            }
            req.onreadystatechange = function() {
              if (req.readyState != 4)
                return;
              eve("snap.ajax." + id + "." + req.status, scope, req);
            };
            if (req.readyState == 4) {
              return req;
            }
            req.send(postData);
            return req;
          }
        };
        Snap.load = function(url, callback, scope) {
          Snap.ajax(url, function(req) {
            var f = Snap.parse(req.responseText);
            scope ? callback.call(scope, f) : callback(f);
          });
        };
        var getOffset = function(elem) {
          var box = elem.getBoundingClientRect(),
              doc = elem.ownerDocument,
              body = doc.body,
              docElem = doc.documentElement,
              clientTop = docElem.clientTop || body.clientTop || 0,
              clientLeft = docElem.clientLeft || body.clientLeft || 0,
              top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop,
              left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
          return {
            y: top,
            x: left
          };
        };
        Snap.getElementByPoint = function(x, y) {
          var paper = this,
              svg = paper.canvas,
              target = glob.doc.elementFromPoint(x, y);
          if (glob.win.opera && target.tagName == "svg") {
            var so = getOffset(target),
                sr = target.createSVGRect();
            sr.x = x - so.x;
            sr.y = y - so.y;
            sr.width = sr.height = 1;
            var hits = target.getIntersectionList(sr, null);
            if (hits.length) {
              target = hits[hits.length - 1];
            }
          }
          if (!target) {
            return null;
          }
          return wrap(target);
        };
        Snap.plugin = function(f) {
          f(Snap, Element, Paper, glob, Fragment);
        };
        glob.win.Snap = Snap;
        return Snap;
      }(window || this));
      Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var elproto = Element.prototype,
            is = Snap.is,
            Str = String,
            unit2px = Snap._unit2px,
            $ = Snap._.$,
            make = Snap._.make,
            getSomeDefs = Snap._.getSomeDefs,
            has = "hasOwnProperty",
            wrap = Snap._.wrap;
        elproto.getBBox = function(isWithoutTransform) {
          if (!Snap.Matrix || !Snap.path) {
            return this.node.getBBox();
          }
          var el = this,
              m = new Snap.Matrix;
          if (el.removed) {
            return Snap._.box();
          }
          while (el.type == "use") {
            if (!isWithoutTransform) {
              m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
            }
            if (el.original) {
              el = el.original;
            } else {
              var href = el.attr("xlink:href");
              el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
            }
          }
          var _ = el._,
              pathfinder = Snap.path.get[el.type] || Snap.path.get.deflt;
          try {
            if (isWithoutTransform) {
              _.bboxwt = pathfinder ? Snap.path.getBBox(el.realPath = pathfinder(el)) : Snap._.box(el.node.getBBox());
              return Snap._.box(_.bboxwt);
            } else {
              el.realPath = pathfinder(el);
              el.matrix = el.transform().localMatrix;
              _.bbox = Snap.path.getBBox(Snap.path.map(el.realPath, m.add(el.matrix)));
              return Snap._.box(_.bbox);
            }
          } catch (e) {
            return Snap._.box();
          }
        };
        var propString = function() {
          return this.string;
        };
        function extractTransform(el, tstr) {
          if (tstr == null) {
            var doReturn = true;
            if (el.type == "linearGradient" || el.type == "radialGradient") {
              tstr = el.node.getAttribute("gradientTransform");
            } else if (el.type == "pattern") {
              tstr = el.node.getAttribute("patternTransform");
            } else {
              tstr = el.node.getAttribute("transform");
            }
            if (!tstr) {
              return new Snap.Matrix;
            }
            tstr = Snap._.svgTransform2string(tstr);
          } else {
            if (!Snap._.rgTransform.test(tstr)) {
              tstr = Snap._.svgTransform2string(tstr);
            } else {
              tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
            }
            if (is(tstr, "array")) {
              tstr = Snap.path ? Snap.path.toString.call(tstr) : Str(tstr);
            }
            el._.transform = tstr;
          }
          var m = Snap._.transform2matrix(tstr, el.getBBox(1));
          if (doReturn) {
            return m;
          } else {
            el.matrix = m;
          }
        }
        elproto.transform = function(tstr) {
          var _ = this._;
          if (tstr == null) {
            var papa = this,
                global = new Snap.Matrix(this.node.getCTM()),
                local = extractTransform(this),
                ms = [local],
                m = new Snap.Matrix,
                i,
                localString = local.toTransformString(),
                string = Str(local) == Str(this.matrix) ? Str(_.transform) : localString;
            while (papa.type != "svg" && (papa = papa.parent())) {
              ms.push(extractTransform(papa));
            }
            i = ms.length;
            while (i--) {
              m.add(ms[i]);
            }
            return {
              string: string,
              globalMatrix: global,
              totalMatrix: m,
              localMatrix: local,
              diffMatrix: global.clone().add(local.invert()),
              global: global.toTransformString(),
              total: m.toTransformString(),
              local: localString,
              toString: propString
            };
          }
          if (tstr instanceof Snap.Matrix) {
            this.matrix = tstr;
            this._.transform = tstr.toTransformString();
          } else {
            extractTransform(this, tstr);
          }
          if (this.node) {
            if (this.type == "linearGradient" || this.type == "radialGradient") {
              $(this.node, {gradientTransform: this.matrix});
            } else if (this.type == "pattern") {
              $(this.node, {patternTransform: this.matrix});
            } else {
              $(this.node, {transform: this.matrix});
            }
          }
          return this;
        };
        elproto.parent = function() {
          return wrap(this.node.parentNode);
        };
        elproto.append = elproto.add = function(el) {
          if (el) {
            if (el.type == "set") {
              var it = this;
              el.forEach(function(el) {
                it.add(el);
              });
              return this;
            }
            el = wrap(el);
            this.node.appendChild(el.node);
            el.paper = this.paper;
          }
          return this;
        };
        elproto.appendTo = function(el) {
          if (el) {
            el = wrap(el);
            el.append(this);
          }
          return this;
        };
        elproto.prepend = function(el) {
          if (el) {
            if (el.type == "set") {
              var it = this,
                  first;
              el.forEach(function(el) {
                if (first) {
                  first.after(el);
                } else {
                  it.prepend(el);
                }
                first = el;
              });
              return this;
            }
            el = wrap(el);
            var parent = el.parent();
            this.node.insertBefore(el.node, this.node.firstChild);
            this.add && this.add();
            el.paper = this.paper;
            this.parent() && this.parent().add();
            parent && parent.add();
          }
          return this;
        };
        elproto.prependTo = function(el) {
          el = wrap(el);
          el.prepend(this);
          return this;
        };
        elproto.before = function(el) {
          if (el.type == "set") {
            var it = this;
            el.forEach(function(el) {
              var parent = el.parent();
              it.node.parentNode.insertBefore(el.node, it.node);
              parent && parent.add();
            });
            this.parent().add();
            return this;
          }
          el = wrap(el);
          var parent = el.parent();
          this.node.parentNode.insertBefore(el.node, this.node);
          this.parent() && this.parent().add();
          parent && parent.add();
          el.paper = this.paper;
          return this;
        };
        elproto.after = function(el) {
          el = wrap(el);
          var parent = el.parent();
          if (this.node.nextSibling) {
            this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
          } else {
            this.node.parentNode.appendChild(el.node);
          }
          this.parent() && this.parent().add();
          parent && parent.add();
          el.paper = this.paper;
          return this;
        };
        elproto.insertBefore = function(el) {
          el = wrap(el);
          var parent = this.parent();
          el.node.parentNode.insertBefore(this.node, el.node);
          this.paper = el.paper;
          parent && parent.add();
          el.parent() && el.parent().add();
          return this;
        };
        elproto.insertAfter = function(el) {
          el = wrap(el);
          var parent = this.parent();
          el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
          this.paper = el.paper;
          parent && parent.add();
          el.parent() && el.parent().add();
          return this;
        };
        elproto.remove = function() {
          var parent = this.parent();
          this.node.parentNode && this.node.parentNode.removeChild(this.node);
          delete this.paper;
          this.removed = true;
          parent && parent.add();
          return this;
        };
        elproto.select = function(query) {
          query = Str(query).replace(/([^\\]):/g, "$1\\:");
          return wrap(this.node.querySelector(query));
        };
        elproto.selectAll = function(query) {
          var nodelist = this.node.querySelectorAll(query),
              set = (Snap.set || Array)();
          for (var i = 0; i < nodelist.length; i++) {
            set.push(wrap(nodelist[i]));
          }
          return set;
        };
        elproto.asPX = function(attr, value) {
          if (value == null) {
            value = this.attr(attr);
          }
          return +unit2px(this, attr, value);
        };
        elproto.use = function() {
          var use,
              id = this.node.id;
          if (!id) {
            id = this.id;
            $(this.node, {id: id});
          }
          if (this.type == "linearGradient" || this.type == "radialGradient" || this.type == "pattern") {
            use = make(this.type, this.node.parentNode);
          } else {
            use = make("use", this.node.parentNode);
          }
          $(use.node, {"xlink:href": "#" + id});
          use.original = this;
          return use;
        };
        function fixids(el) {
          var els = el.selectAll("*"),
              it,
              url = /^\s*url\(("|'|)(.*)\1\)\s*$/,
              ids = [],
              uses = {};
          function urltest(it, name) {
            var val = $(it.node, name);
            val = val && val.match(url);
            val = val && val[2];
            if (val && val.charAt() == "#") {
              val = val.substring(1);
            } else {
              return;
            }
            if (val) {
              uses[val] = (uses[val] || []).concat(function(id) {
                var attr = {};
                attr[name] = URL(id);
                $(it.node, attr);
              });
            }
          }
          function linktest(it) {
            var val = $(it.node, "xlink:href");
            if (val && val.charAt() == "#") {
              val = val.substring(1);
            } else {
              return;
            }
            if (val) {
              uses[val] = (uses[val] || []).concat(function(id) {
                it.attr("xlink:href", "#" + id);
              });
            }
          }
          for (var i = 0,
              ii = els.length; i < ii; i++) {
            it = els[i];
            urltest(it, "fill");
            urltest(it, "stroke");
            urltest(it, "filter");
            urltest(it, "mask");
            urltest(it, "clip-path");
            linktest(it);
            var oldid = $(it.node, "id");
            if (oldid) {
              $(it.node, {id: it.id});
              ids.push({
                old: oldid,
                id: it.id
              });
            }
          }
          for (i = 0, ii = ids.length; i < ii; i++) {
            var fs = uses[ids[i].old];
            if (fs) {
              for (var j = 0,
                  jj = fs.length; j < jj; j++) {
                fs[j](ids[i].id);
              }
            }
          }
        }
        elproto.clone = function() {
          var clone = wrap(this.node.cloneNode(true));
          if ($(clone.node, "id")) {
            $(clone.node, {id: clone.id});
          }
          fixids(clone);
          clone.insertAfter(this);
          return clone;
        };
        elproto.toDefs = function() {
          var defs = getSomeDefs(this);
          defs.appendChild(this.node);
          return this;
        };
        elproto.pattern = elproto.toPattern = function(x, y, width, height) {
          var p = make("pattern", getSomeDefs(this));
          if (x == null) {
            x = this.getBBox();
          }
          if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
          }
          $(p.node, {
            x: x,
            y: y,
            width: width,
            height: height,
            patternUnits: "userSpaceOnUse",
            id: p.id,
            viewBox: [x, y, width, height].join(" ")
          });
          p.node.appendChild(this.node);
          return p;
        };
        elproto.marker = function(x, y, width, height, refX, refY) {
          var p = make("marker", getSomeDefs(this));
          if (x == null) {
            x = this.getBBox();
          }
          if (is(x, "object") && "x" in x) {
            y = x.y;
            width = x.width;
            height = x.height;
            refX = x.refX || x.cx;
            refY = x.refY || x.cy;
            x = x.x;
          }
          $(p.node, {
            viewBox: [x, y, width, height].join(" "),
            markerWidth: width,
            markerHeight: height,
            orient: "auto",
            refX: refX || 0,
            refY: refY || 0,
            id: p.id
          });
          p.node.appendChild(this.node);
          return p;
        };
        function slice(from, to, f) {
          return function(arr) {
            var res = arr.slice(from, to);
            if (res.length == 1) {
              res = res[0];
            }
            return f ? f(res) : res;
          };
        }
        var Animation = function(attr, ms, easing, callback) {
          if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
          }
          this.attr = attr;
          this.dur = ms;
          easing && (this.easing = easing);
          callback && (this.callback = callback);
        };
        Snap._.Animation = Animation;
        Snap.animation = function(attr, ms, easing, callback) {
          return new Animation(attr, ms, easing, callback);
        };
        elproto.inAnim = function() {
          var el = this,
              res = [];
          for (var id in el.anims)
            if (el.anims[has](id)) {
              (function(a) {
                res.push({
                  anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                  mina: a,
                  curStatus: a.status(),
                  status: function(val) {
                    return a.status(val);
                  },
                  stop: function() {
                    a.stop();
                  }
                });
              }(el.anims[id]));
            }
          return res;
        };
        Snap.animate = function(from, to, setter, ms, easing, callback) {
          if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
          }
          var now = mina.time(),
              anim = mina(from, to, now, now + ms, mina.time, setter, easing);
          callback && eve.once("mina.finish." + anim.id, callback);
          return anim;
        };
        elproto.stop = function() {
          var anims = this.inAnim();
          for (var i = 0,
              ii = anims.length; i < ii; i++) {
            anims[i].stop();
          }
          return this;
        };
        elproto.animate = function(attrs, ms, easing, callback) {
          if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
          }
          if (attrs instanceof Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
          }
          var fkeys = [],
              tkeys = [],
              keys = {},
              from,
              to,
              f,
              eq,
              el = this;
          for (var key in attrs)
            if (attrs[has](key)) {
              if (el.equal) {
                eq = el.equal(key, Str(attrs[key]));
                from = eq.from;
                to = eq.to;
                f = eq.f;
              } else {
                from = +el.attr(key);
                to = +attrs[key];
              }
              var len = is(from, "array") ? from.length : 1;
              keys[key] = slice(fkeys.length, fkeys.length + len, f);
              fkeys = fkeys.concat(from);
              tkeys = tkeys.concat(to);
            }
          var now = mina.time(),
              anim = mina(fkeys, tkeys, now, now + ms, mina.time, function(val) {
                var attr = {};
                for (var key in keys)
                  if (keys[has](key)) {
                    attr[key] = keys[key](val);
                  }
                el.attr(attr);
              }, easing);
          el.anims[anim.id] = anim;
          anim._attrs = attrs;
          anim._callback = callback;
          eve("snap.animcreated." + el.id, anim);
          eve.once("mina.finish." + anim.id, function() {
            delete el.anims[anim.id];
            callback && callback.call(el);
          });
          eve.once("mina.stop." + anim.id, function() {
            delete el.anims[anim.id];
          });
          return el;
        };
        var eldata = {};
        elproto.data = function(key, value) {
          var data = eldata[this.id] = eldata[this.id] || {};
          if (arguments.length == 0) {
            eve("snap.data.get." + this.id, this, data, null);
            return data;
          }
          if (arguments.length == 1) {
            if (Snap.is(key, "object")) {
              for (var i in key)
                if (key[has](i)) {
                  this.data(i, key[i]);
                }
              return this;
            }
            eve("snap.data.get." + this.id, this, data[key], key);
            return data[key];
          }
          data[key] = value;
          eve("snap.data.set." + this.id, this, value, key);
          return this;
        };
        elproto.removeData = function(key) {
          if (key == null) {
            eldata[this.id] = {};
          } else {
            eldata[this.id] && delete eldata[this.id][key];
          }
          return this;
        };
        elproto.outerSVG = elproto.toString = toString(1);
        elproto.innerSVG = toString();
        function toString(type) {
          return function() {
            var res = type ? "<" + this.type : "",
                attr = this.node.attributes,
                chld = this.node.childNodes;
            if (type) {
              for (var i = 0,
                  ii = attr.length; i < ii; i++) {
                res += " " + attr[i].name + '="' + attr[i].value.replace(/"/g, '\\"') + '"';
              }
            }
            if (chld.length) {
              type && (res += ">");
              for (i = 0, ii = chld.length; i < ii; i++) {
                if (chld[i].nodeType == 3) {
                  res += chld[i].nodeValue;
                } else if (chld[i].nodeType == 1) {
                  res += wrap(chld[i]).toString();
                }
              }
              type && (res += "</" + this.type + ">");
            } else {
              type && (res += "/>");
            }
            return res;
          };
        }
        elproto.toDataURL = function() {
          if (window && window.btoa) {
            var bb = this.getBBox(),
                svg = Snap.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
                  x: +bb.x.toFixed(3),
                  y: +bb.y.toFixed(3),
                  width: +bb.width.toFixed(3),
                  height: +bb.height.toFixed(3),
                  contents: this.outerSVG()
                });
            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
          }
        };
        Fragment.prototype.select = elproto.select;
        Fragment.prototype.selectAll = elproto.selectAll;
      });
      Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var objectToString = Object.prototype.toString,
            Str = String,
            math = Math,
            E = "";
        function Matrix(a, b, c, d, e, f) {
          if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
            this.a = a.a;
            this.b = a.b;
            this.c = a.c;
            this.d = a.d;
            this.e = a.e;
            this.f = a.f;
            return;
          }
          if (a != null) {
            this.a = +a;
            this.b = +b;
            this.c = +c;
            this.d = +d;
            this.e = +e;
            this.f = +f;
          } else {
            this.a = 1;
            this.b = 0;
            this.c = 0;
            this.d = 1;
            this.e = 0;
            this.f = 0;
          }
        }
        (function(matrixproto) {
          matrixproto.add = function(a, b, c, d, e, f) {
            var out = [[], [], []],
                m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
                x,
                y,
                z,
                res;
            if (a && a instanceof Matrix) {
              matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
            }
            for (x = 0; x < 3; x++) {
              for (y = 0; y < 3; y++) {
                res = 0;
                for (z = 0; z < 3; z++) {
                  res += m[x][z] * matrix[z][y];
                }
                out[x][y] = res;
              }
            }
            this.a = out[0][0];
            this.b = out[1][0];
            this.c = out[0][1];
            this.d = out[1][1];
            this.e = out[0][2];
            this.f = out[1][2];
            return this;
          };
          matrixproto.invert = function() {
            var me = this,
                x = me.a * me.d - me.b * me.c;
            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
          };
          matrixproto.clone = function() {
            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
          };
          matrixproto.translate = function(x, y) {
            return this.add(1, 0, 0, 1, x, y);
          };
          matrixproto.scale = function(x, y, cx, cy) {
            y == null && (y = x);
            (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
            this.add(x, 0, 0, y, 0, 0);
            (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
            return this;
          };
          matrixproto.rotate = function(a, x, y) {
            a = Snap.rad(a);
            x = x || 0;
            y = y || 0;
            var cos = +math.cos(a).toFixed(9),
                sin = +math.sin(a).toFixed(9);
            this.add(cos, sin, -sin, cos, x, y);
            return this.add(1, 0, 0, 1, -x, -y);
          };
          matrixproto.x = function(x, y) {
            return x * this.a + y * this.c + this.e;
          };
          matrixproto.y = function(x, y) {
            return x * this.b + y * this.d + this.f;
          };
          matrixproto.get = function(i) {
            return +this[Str.fromCharCode(97 + i)].toFixed(4);
          };
          matrixproto.toString = function() {
            return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
          };
          matrixproto.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)];
          };
          function norm(a) {
            return a[0] * a[0] + a[1] * a[1];
          }
          function normalize(a) {
            var mag = math.sqrt(norm(a));
            a[0] && (a[0] /= mag);
            a[1] && (a[1] /= mag);
          }
          matrixproto.determinant = function() {
            return this.a * this.d - this.b * this.c;
          };
          matrixproto.split = function() {
            var out = {};
            out.dx = this.e;
            out.dy = this.f;
            var row = [[this.a, this.c], [this.b, this.d]];
            out.scalex = math.sqrt(norm(row[0]));
            normalize(row[0]);
            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];
            out.scaley = math.sqrt(norm(row[1]));
            normalize(row[1]);
            out.shear /= out.scaley;
            if (this.determinant() < 0) {
              out.scalex = -out.scalex;
            }
            var sin = -row[0][1],
                cos = row[1][1];
            if (cos < 0) {
              out.rotate = Snap.deg(math.acos(cos));
              if (sin < 0) {
                out.rotate = 360 - out.rotate;
              }
            } else {
              out.rotate = Snap.deg(math.asin(sin));
            }
            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
            return out;
          };
          matrixproto.toTransformString = function(shorter) {
            var s = shorter || this.split();
            if (!+s.shear.toFixed(9)) {
              s.scalex = +s.scalex.toFixed(4);
              s.scaley = +s.scaley.toFixed(4);
              s.rotate = +s.rotate.toFixed(4);
              return (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) + (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) + (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E);
            } else {
              return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
            }
          };
        })(Matrix.prototype);
        Snap.Matrix = Matrix;
        Snap.matrix = function(a, b, c, d, e, f) {
          return new Matrix(a, b, c, d, e, f);
        };
      });
      Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var has = "hasOwnProperty",
            make = Snap._.make,
            wrap = Snap._.wrap,
            is = Snap.is,
            getSomeDefs = Snap._.getSomeDefs,
            reURLValue = /^url\(#?([^)]+)\)$/,
            $ = Snap._.$,
            URL = Snap.url,
            Str = String,
            separator = Snap._.separator,
            E = "";
        eve.on("snap.util.attr.mask", function(value) {
          if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1) {
              value = value.node.firstChild;
              getSomeDefs(this).appendChild(value);
              value = wrap(value);
            }
            if (value.type == "mask") {
              var mask = value;
            } else {
              mask = make("mask", getSomeDefs(this));
              mask.node.appendChild(value.node);
            }
            !mask.node.id && $(mask.node, {id: mask.id});
            $(this.node, {mask: URL(mask.id)});
          }
        });
        (function(clipIt) {
          eve.on("snap.util.attr.clip", clipIt);
          eve.on("snap.util.attr.clip-path", clipIt);
          eve.on("snap.util.attr.clipPath", clipIt);
        }(function(value) {
          if (value instanceof Element || value instanceof Fragment) {
            eve.stop();
            if (value.type == "clipPath") {
              var clip = value;
            } else {
              clip = make("clipPath", getSomeDefs(this));
              clip.node.appendChild(value.node);
              !clip.node.id && $(clip.node, {id: clip.id});
            }
            $(this.node, {"clip-path": URL(clip.node.id || clip.id)});
          }
        }));
        function fillStroke(name) {
          return function(value) {
            eve.stop();
            if (value instanceof Fragment && value.node.childNodes.length == 1 && (value.node.firstChild.tagName == "radialGradient" || value.node.firstChild.tagName == "linearGradient" || value.node.firstChild.tagName == "pattern")) {
              value = value.node.firstChild;
              getSomeDefs(this).appendChild(value);
              value = wrap(value);
            }
            if (value instanceof Element) {
              if (value.type == "radialGradient" || value.type == "linearGradient" || value.type == "pattern") {
                if (!value.node.id) {
                  $(value.node, {id: value.id});
                }
                var fill = URL(value.node.id);
              } else {
                fill = value.attr(name);
              }
            } else {
              fill = Snap.color(value);
              if (fill.error) {
                var grad = Snap(getSomeDefs(this).ownerSVGElement).gradient(value);
                if (grad) {
                  if (!grad.node.id) {
                    $(grad.node, {id: grad.id});
                  }
                  fill = URL(grad.node.id);
                } else {
                  fill = value;
                }
              } else {
                fill = Str(fill);
              }
            }
            var attrs = {};
            attrs[name] = fill;
            $(this.node, attrs);
            this.node.style[name] = E;
          };
        }
        eve.on("snap.util.attr.fill", fillStroke("fill"));
        eve.on("snap.util.attr.stroke", fillStroke("stroke"));
        var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        eve.on("snap.util.grad.parse", function parseGrad(string) {
          string = Str(string);
          var tokens = string.match(gradrg);
          if (!tokens) {
            return null;
          }
          var type = tokens[1],
              params = tokens[2],
              stops = tokens[3];
          params = params.split(/\s*,\s*/).map(function(el) {
            return +el == el ? +el : el;
          });
          if (params.length == 1 && params[0] == 0) {
            params = [];
          }
          stops = stops.split("-");
          stops = stops.map(function(el) {
            el = el.split(":");
            var out = {color: el[0]};
            if (el[1]) {
              out.offset = parseFloat(el[1]);
            }
            return out;
          });
          return {
            type: type,
            params: params,
            stops: stops
          };
        });
        eve.on("snap.util.attr.d", function(value) {
          eve.stop();
          if (is(value, "array") && is(value[0], "array")) {
            value = Snap.path.toString.call(value);
          }
          value = Str(value);
          if (value.match(/[ruo]/i)) {
            value = Snap.path.toAbsolute(value);
          }
          $(this.node, {d: value});
        })(-1);
        eve.on("snap.util.attr.#text", function(value) {
          eve.stop();
          value = Str(value);
          var txt = glob.doc.createTextNode(value);
          while (this.node.firstChild) {
            this.node.removeChild(this.node.firstChild);
          }
          this.node.appendChild(txt);
        })(-1);
        eve.on("snap.util.attr.path", function(value) {
          eve.stop();
          this.attr({d: value});
        })(-1);
        eve.on("snap.util.attr.class", function(value) {
          eve.stop();
          this.node.className.baseVal = value;
        })(-1);
        eve.on("snap.util.attr.viewBox", function(value) {
          var vb;
          if (is(value, "object") && "x" in value) {
            vb = [value.x, value.y, value.width, value.height].join(" ");
          } else if (is(value, "array")) {
            vb = value.join(" ");
          } else {
            vb = value;
          }
          $(this.node, {viewBox: vb});
          eve.stop();
        })(-1);
        eve.on("snap.util.attr.transform", function(value) {
          this.transform(value);
          eve.stop();
        })(-1);
        eve.on("snap.util.attr.r", function(value) {
          if (this.type == "rect") {
            eve.stop();
            $(this.node, {
              rx: value,
              ry: value
            });
          }
        })(-1);
        eve.on("snap.util.attr.textpath", function(value) {
          eve.stop();
          if (this.type == "text") {
            var id,
                tp,
                node;
            if (!value && this.textPath) {
              tp = this.textPath;
              while (tp.node.firstChild) {
                this.node.appendChild(tp.node.firstChild);
              }
              tp.remove();
              delete this.textPath;
              return;
            }
            if (is(value, "string")) {
              var defs = getSomeDefs(this),
                  path = wrap(defs.parentNode).path(value);
              defs.appendChild(path.node);
              id = path.id;
              path.attr({id: id});
            } else {
              value = wrap(value);
              if (value instanceof Element) {
                id = value.attr("id");
                if (!id) {
                  id = value.id;
                  value.attr({id: id});
                }
              }
            }
            if (id) {
              tp = this.textPath;
              node = this.node;
              if (tp) {
                tp.attr({"xlink:href": "#" + id});
              } else {
                tp = $("textPath", {"xlink:href": "#" + id});
                while (node.firstChild) {
                  tp.appendChild(node.firstChild);
                }
                node.appendChild(tp);
                this.textPath = wrap(tp);
              }
            }
          }
        })(-1);
        eve.on("snap.util.attr.text", function(value) {
          if (this.type == "text") {
            var i = 0,
                node = this.node,
                tuner = function(chunk) {
                  var out = $("tspan");
                  if (is(chunk, "array")) {
                    for (var i = 0; i < chunk.length; i++) {
                      out.appendChild(tuner(chunk[i]));
                    }
                  } else {
                    out.appendChild(glob.doc.createTextNode(chunk));
                  }
                  out.normalize && out.normalize();
                  return out;
                };
            while (node.firstChild) {
              node.removeChild(node.firstChild);
            }
            var tuned = tuner(value);
            while (tuned.firstChild) {
              node.appendChild(tuned.firstChild);
            }
          }
          eve.stop();
        })(-1);
        function setFontSize(value) {
          eve.stop();
          if (value == +value) {
            value += "px";
          }
          this.node.style.fontSize = value;
        }
        eve.on("snap.util.attr.fontSize", setFontSize)(-1);
        eve.on("snap.util.attr.font-size", setFontSize)(-1);
        eve.on("snap.util.getattr.transform", function() {
          eve.stop();
          return this.transform();
        })(-1);
        eve.on("snap.util.getattr.textpath", function() {
          eve.stop();
          return this.textPath;
        })(-1);
        (function() {
          function getter(end) {
            return function() {
              eve.stop();
              var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
              if (style == "none") {
                return style;
              } else {
                return Snap(glob.doc.getElementById(style.match(reURLValue)[1]));
              }
            };
          }
          function setter(end) {
            return function(value) {
              eve.stop();
              var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
              if (value == "" || !value) {
                this.node.style[name] = "none";
                return;
              }
              if (value.type == "marker") {
                var id = value.node.id;
                if (!id) {
                  $(value.node, {id: value.id});
                }
                this.node.style[name] = URL(id);
                return;
              }
            };
          }
          eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
          eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
          eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
          eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
          eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
          eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
          eve.on("snap.util.attr.marker-end", setter("end"))(-1);
          eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
          eve.on("snap.util.attr.marker-start", setter("start"))(-1);
          eve.on("snap.util.attr.markerStart", setter("start"))(-1);
          eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
          eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
        }());
        eve.on("snap.util.getattr.r", function() {
          if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
            eve.stop();
            return $(this.node, "rx");
          }
        })(-1);
        function textExtract(node) {
          var out = [];
          var children = node.childNodes;
          for (var i = 0,
              ii = children.length; i < ii; i++) {
            var chi = children[i];
            if (chi.nodeType == 3) {
              out.push(chi.nodeValue);
            }
            if (chi.tagName == "tspan") {
              if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
                out.push(chi.firstChild.nodeValue);
              } else {
                out.push(textExtract(chi));
              }
            }
          }
          return out;
        }
        eve.on("snap.util.getattr.text", function() {
          if (this.type == "text" || this.type == "tspan") {
            eve.stop();
            var out = textExtract(this.node);
            return out.length == 1 ? out[0] : out;
          }
        })(-1);
        eve.on("snap.util.getattr.#text", function() {
          return this.node.textContent;
        })(-1);
        eve.on("snap.util.getattr.viewBox", function() {
          eve.stop();
          var vb = $(this.node, "viewBox");
          if (vb) {
            vb = vb.split(separator);
            return Snap._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
          } else {
            return;
          }
        })(-1);
        eve.on("snap.util.getattr.points", function() {
          var p = $(this.node, "points");
          eve.stop();
          if (p) {
            return p.split(separator);
          } else {
            return;
          }
        })(-1);
        eve.on("snap.util.getattr.path", function() {
          var p = $(this.node, "d");
          eve.stop();
          return p;
        })(-1);
        eve.on("snap.util.getattr.class", function() {
          return this.node.className.baseVal;
        })(-1);
        function getFontSize() {
          eve.stop();
          return this.node.style.fontSize;
        }
        eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
        eve.on("snap.util.getattr.font-size", getFontSize)(-1);
      });
      Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var rgNotSpace = /\S+/g,
            rgBadSpace = /[\t\r\n\f]/g,
            rgTrim = /(^\s+|\s+$)/g,
            Str = String,
            elproto = Element.prototype;
        elproto.addClass = function(value) {
          var classes = Str(value || "").match(rgNotSpace) || [],
              elem = this.node,
              className = elem.className.baseVal,
              curClasses = className.match(rgNotSpace) || [],
              j,
              pos,
              clazz,
              finalValue;
          if (classes.length) {
            j = 0;
            while ((clazz = classes[j++])) {
              pos = curClasses.indexOf(clazz);
              if (!~pos) {
                curClasses.push(clazz);
              }
            }
            finalValue = curClasses.join(" ");
            if (className != finalValue) {
              elem.className.baseVal = finalValue;
            }
          }
          return this;
        };
        elproto.removeClass = function(value) {
          var classes = Str(value || "").match(rgNotSpace) || [],
              elem = this.node,
              className = elem.className.baseVal,
              curClasses = className.match(rgNotSpace) || [],
              j,
              pos,
              clazz,
              finalValue;
          if (curClasses.length) {
            j = 0;
            while ((clazz = classes[j++])) {
              pos = curClasses.indexOf(clazz);
              if (~pos) {
                curClasses.splice(pos, 1);
              }
            }
            finalValue = curClasses.join(" ");
            if (className != finalValue) {
              elem.className.baseVal = finalValue;
            }
          }
          return this;
        };
        elproto.hasClass = function(value) {
          var elem = this.node,
              className = elem.className.baseVal,
              curClasses = className.match(rgNotSpace) || [];
          return !!~curClasses.indexOf(value);
        };
        elproto.toggleClass = function(value, flag) {
          if (flag != null) {
            if (flag) {
              return this.addClass(value);
            } else {
              return this.removeClass(value);
            }
          }
          var classes = (value || "").match(rgNotSpace) || [],
              elem = this.node,
              className = elem.className.baseVal,
              curClasses = className.match(rgNotSpace) || [],
              j,
              pos,
              clazz,
              finalValue;
          j = 0;
          while ((clazz = classes[j++])) {
            pos = curClasses.indexOf(clazz);
            if (~pos) {
              curClasses.splice(pos, 1);
            } else {
              curClasses.push(clazz);
            }
          }
          finalValue = curClasses.join(" ");
          if (className != finalValue) {
            elem.className.baseVal = finalValue;
          }
          return this;
        };
      });
      Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var operators = {
          "+": function(x, y) {
            return x + y;
          },
          "-": function(x, y) {
            return x - y;
          },
          "/": function(x, y) {
            return x / y;
          },
          "*": function(x, y) {
            return x * y;
          }
        },
            Str = String,
            reUnit = /[a-z]+$/i,
            reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        function getNumber(val) {
          return val;
        }
        function getUnit(unit) {
          return function(val) {
            return +val.toFixed(3) + unit;
          };
        }
        eve.on("snap.util.attr", function(val) {
          var plus = Str(val).match(reAddon);
          if (plus) {
            var evnt = eve.nt(),
                name = evnt.substring(evnt.lastIndexOf(".") + 1),
                a = this.attr(name),
                atr = {};
            eve.stop();
            var unit = plus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[plus[1]];
            if (aUnit && aUnit == unit) {
              val = op(parseFloat(a), +plus[2]);
            } else {
              a = this.asPX(name);
              val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
            }
            if (isNaN(a) || isNaN(val)) {
              return;
            }
            atr[name] = val;
            this.attr(atr);
          }
        })(-10);
        eve.on("snap.util.equal", function(name, b) {
          var A,
              B,
              a = Str(this.attr(name) || ""),
              el = this,
              bplus = Str(b).match(reAddon);
          if (bplus) {
            eve.stop();
            var unit = bplus[3] || "",
                aUnit = a.match(reUnit),
                op = operators[bplus[1]];
            if (aUnit && aUnit == unit) {
              return {
                from: parseFloat(a),
                to: op(parseFloat(a), +bplus[2]),
                f: getUnit(aUnit)
              };
            } else {
              a = this.asPX(name);
              return {
                from: a,
                to: op(a, this.asPX(name, bplus[2] + unit)),
                f: getNumber
              };
            }
          }
        })(-10);
      });
      Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var proto = Paper.prototype,
            is = Snap.is;
        proto.rect = function(x, y, w, h, rx, ry) {
          var attr;
          if (ry == null) {
            ry = rx;
          }
          if (is(x, "object") && x == "[object Object]") {
            attr = x;
          } else if (x != null) {
            attr = {
              x: x,
              y: y,
              width: w,
              height: h
            };
            if (rx != null) {
              attr.rx = rx;
              attr.ry = ry;
            }
          }
          return this.el("rect", attr);
        };
        proto.circle = function(cx, cy, r) {
          var attr;
          if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
          } else if (cx != null) {
            attr = {
              cx: cx,
              cy: cy,
              r: r
            };
          }
          return this.el("circle", attr);
        };
        var preload = (function() {
          function onerror() {
            this.parentNode.removeChild(this);
          }
          return function(src, f) {
            var img = glob.doc.createElement("img"),
                body = glob.doc.body;
            img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
            img.onload = function() {
              f.call(img);
              img.onload = img.onerror = null;
              body.removeChild(img);
            };
            img.onerror = onerror;
            body.appendChild(img);
            img.src = src;
          };
        }());
        proto.image = function(src, x, y, width, height) {
          var el = this.el("image");
          if (is(src, "object") && "src" in src) {
            el.attr(src);
          } else if (src != null) {
            var set = {
              "xlink:href": src,
              preserveAspectRatio: "none"
            };
            if (x != null && y != null) {
              set.x = x;
              set.y = y;
            }
            if (width != null && height != null) {
              set.width = width;
              set.height = height;
            } else {
              preload(src, function() {
                Snap._.$(el.node, {
                  width: this.offsetWidth,
                  height: this.offsetHeight
                });
              });
            }
            Snap._.$(el.node, set);
          }
          return el;
        };
        proto.ellipse = function(cx, cy, rx, ry) {
          var attr;
          if (is(cx, "object") && cx == "[object Object]") {
            attr = cx;
          } else if (cx != null) {
            attr = {
              cx: cx,
              cy: cy,
              rx: rx,
              ry: ry
            };
          }
          return this.el("ellipse", attr);
        };
        proto.path = function(d) {
          var attr;
          if (is(d, "object") && !is(d, "array")) {
            attr = d;
          } else if (d) {
            attr = {d: d};
          }
          return this.el("path", attr);
        };
        proto.group = proto.g = function(first) {
          var attr,
              el = this.el("g");
          if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
          } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
          }
          return el;
        };
        proto.svg = function(x, y, width, height, vbx, vby, vbw, vbh) {
          var attrs = {};
          if (is(x, "object") && y == null) {
            attrs = x;
          } else {
            if (x != null) {
              attrs.x = x;
            }
            if (y != null) {
              attrs.y = y;
            }
            if (width != null) {
              attrs.width = width;
            }
            if (height != null) {
              attrs.height = height;
            }
            if (vbx != null && vby != null && vbw != null && vbh != null) {
              attrs.viewBox = [vbx, vby, vbw, vbh];
            }
          }
          return this.el("svg", attrs);
        };
        proto.mask = function(first) {
          var attr,
              el = this.el("mask");
          if (arguments.length == 1 && first && !first.type) {
            el.attr(first);
          } else if (arguments.length) {
            el.add(Array.prototype.slice.call(arguments, 0));
          }
          return el;
        };
        proto.ptrn = function(x, y, width, height, vx, vy, vw, vh) {
          if (is(x, "object")) {
            var attr = x;
          } else {
            attr = {patternUnits: "userSpaceOnUse"};
            if (x) {
              attr.x = x;
            }
            if (y) {
              attr.y = y;
            }
            if (width != null) {
              attr.width = width;
            }
            if (height != null) {
              attr.height = height;
            }
            if (vx != null && vy != null && vw != null && vh != null) {
              attr.viewBox = [vx, vy, vw, vh];
            } else {
              attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
            }
          }
          return this.el("pattern", attr);
        };
        proto.use = function(id) {
          if (id != null) {
            if (id instanceof Element) {
              if (!id.attr("id")) {
                id.attr({id: Snap._.id(id)});
              }
              id = id.attr("id");
            }
            if (String(id).charAt() == "#") {
              id = id.substring(1);
            }
            return this.el("use", {"xlink:href": "#" + id});
          } else {
            return Element.prototype.use.call(this);
          }
        };
        proto.symbol = function(vx, vy, vw, vh) {
          var attr = {};
          if (vx != null && vy != null && vw != null && vh != null) {
            attr.viewBox = [vx, vy, vw, vh];
          }
          return this.el("symbol", attr);
        };
        proto.text = function(x, y, text) {
          var attr = {};
          if (is(x, "object")) {
            attr = x;
          } else if (x != null) {
            attr = {
              x: x,
              y: y,
              text: text || ""
            };
          }
          return this.el("text", attr);
        };
        proto.line = function(x1, y1, x2, y2) {
          var attr = {};
          if (is(x1, "object")) {
            attr = x1;
          } else if (x1 != null) {
            attr = {
              x1: x1,
              x2: x2,
              y1: y1,
              y2: y2
            };
          }
          return this.el("line", attr);
        };
        proto.polyline = function(points) {
          if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
          }
          var attr = {};
          if (is(points, "object") && !is(points, "array")) {
            attr = points;
          } else if (points != null) {
            attr = {points: points};
          }
          return this.el("polyline", attr);
        };
        proto.polygon = function(points) {
          if (arguments.length > 1) {
            points = Array.prototype.slice.call(arguments, 0);
          }
          var attr = {};
          if (is(points, "object") && !is(points, "array")) {
            attr = points;
          } else if (points != null) {
            attr = {points: points};
          }
          return this.el("polygon", attr);
        };
        (function() {
          var $ = Snap._.$;
          function Gstops() {
            return this.selectAll("stop");
          }
          function GaddStop(color, offset) {
            var stop = $("stop"),
                attr = {offset: +offset + "%"};
            color = Snap.color(color);
            attr["stop-color"] = color.hex;
            if (color.opacity < 1) {
              attr["stop-opacity"] = color.opacity;
            }
            $(stop, attr);
            this.node.appendChild(stop);
            return this;
          }
          function GgetBBox() {
            if (this.type == "linearGradient") {
              var x1 = $(this.node, "x1") || 0,
                  x2 = $(this.node, "x2") || 1,
                  y1 = $(this.node, "y1") || 0,
                  y2 = $(this.node, "y2") || 0;
              return Snap._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
            } else {
              var cx = this.node.cx || .5,
                  cy = this.node.cy || .5,
                  r = this.node.r || 0;
              return Snap._.box(cx - r, cy - r, r * 2, r * 2);
            }
          }
          function gradient(defs, str) {
            var grad = eve("snap.util.grad.parse", null, str).firstDefined(),
                el;
            if (!grad) {
              return null;
            }
            grad.params.unshift(defs);
            if (grad.type.toLowerCase() == "l") {
              el = gradientLinear.apply(0, grad.params);
            } else {
              el = gradientRadial.apply(0, grad.params);
            }
            if (grad.type != grad.type.toLowerCase()) {
              $(el.node, {gradientUnits: "userSpaceOnUse"});
            }
            var stops = grad.stops,
                len = stops.length,
                start = 0,
                j = 0;
            function seed(i, end) {
              var step = (end - start) / (i - j);
              for (var k = j; k < i; k++) {
                stops[k].offset = +(+start + step * (k - j)).toFixed(2);
              }
              j = i;
              start = end;
            }
            len--;
            for (var i = 0; i < len; i++)
              if ("offset" in stops[i]) {
                seed(i, stops[i].offset);
              }
            stops[len].offset = stops[len].offset || 100;
            seed(len, stops[len].offset);
            for (i = 0; i <= len; i++) {
              var stop = stops[i];
              el.addStop(stop.color, stop.offset);
            }
            return el;
          }
          function gradientLinear(defs, x1, y1, x2, y2) {
            var el = Snap._.make("linearGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (x1 != null) {
              $(el.node, {
                x1: x1,
                y1: y1,
                x2: x2,
                y2: y2
              });
            }
            return el;
          }
          function gradientRadial(defs, cx, cy, r, fx, fy) {
            var el = Snap._.make("radialGradient", defs);
            el.stops = Gstops;
            el.addStop = GaddStop;
            el.getBBox = GgetBBox;
            if (cx != null) {
              $(el.node, {
                cx: cx,
                cy: cy,
                r: r
              });
            }
            if (fx != null && fy != null) {
              $(el.node, {
                fx: fx,
                fy: fy
              });
            }
            return el;
          }
          proto.gradient = function(str) {
            return gradient(this.defs, str);
          };
          proto.gradientLinear = function(x1, y1, x2, y2) {
            return gradientLinear(this.defs, x1, y1, x2, y2);
          };
          proto.gradientRadial = function(cx, cy, r, fx, fy) {
            return gradientRadial(this.defs, cx, cy, r, fx, fy);
          };
          proto.toString = function() {
            var doc = this.node.ownerDocument,
                f = doc.createDocumentFragment(),
                d = doc.createElement("div"),
                svg = this.node.cloneNode(true),
                res;
            f.appendChild(d);
            d.appendChild(svg);
            Snap._.$(svg, {xmlns: "http://www.w3.org/2000/svg"});
            res = d.innerHTML;
            f.removeChild(f.firstChild);
            return res;
          };
          proto.toDataURL = function() {
            if (window && window.btoa) {
              return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
            }
          };
          proto.clear = function() {
            var node = this.node.firstChild,
                next;
            while (node) {
              next = node.nextSibling;
              if (node.tagName != "defs") {
                node.parentNode.removeChild(node);
              } else {
                proto.clear.call({node: node});
              }
              node = next;
            }
          };
        }());
      });
      Snap.plugin(function(Snap, Element, Paper, glob) {
        var elproto = Element.prototype,
            is = Snap.is,
            clone = Snap._.clone,
            has = "hasOwnProperty",
            p2s = /,?([a-z]),?/gi,
            toFloat = parseFloat,
            math = Math,
            PI = math.PI,
            mmin = math.min,
            mmax = math.max,
            pow = math.pow,
            abs = math.abs;
        function paths(ps) {
          var p = paths.ps = paths.ps || {};
          if (p[ps]) {
            p[ps].sleep = 100;
          } else {
            p[ps] = {sleep: 100};
          }
          setTimeout(function() {
            for (var key in p)
              if (p[has](key) && key != ps) {
                p[key].sleep--;
                !p[key].sleep && delete p[key];
              }
          });
          return p[ps];
        }
        function box(x, y, width, height) {
          if (x == null) {
            x = y = width = height = 0;
          }
          if (y == null) {
            y = x.y;
            width = x.width;
            height = x.height;
            x = x.x;
          }
          return {
            x: x,
            y: y,
            width: width,
            w: width,
            height: height,
            h: height,
            x2: x + width,
            y2: y + height,
            cx: x + width / 2,
            cy: y + height / 2,
            r1: math.min(width, height) / 2,
            r2: math.max(width, height) / 2,
            r0: math.sqrt(width * width + height * height) / 2,
            path: rectPath(x, y, width, height),
            vb: [x, y, width, height].join(" ")
          };
        }
        function toString() {
          return this.join(",").replace(p2s, "$1");
        }
        function pathClone(pathArray) {
          var res = clone(pathArray);
          res.toString = toString;
          return res;
        }
        function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
          if (length == null) {
            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
          } else {
            return findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
          }
        }
        function getLengthFactory(istotal, subpath) {
          function O(val) {
            return +(+val).toFixed(3);
          }
          return Snap._.cacher(function(path, length, onlystart) {
            if (path instanceof Element) {
              path = path.attr("d");
            }
            path = path2curve(path);
            var x,
                y,
                p,
                l,
                sp = "",
                subpaths = {},
                point,
                len = 0;
            for (var i = 0,
                ii = path.length; i < ii; i++) {
              p = path[i];
              if (p[0] == "M") {
                x = +p[1];
                y = +p[2];
              } else {
                l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
                if (len + l > length) {
                  if (subpath && !subpaths.start) {
                    point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                    sp += ["C" + O(point.start.x), O(point.start.y), O(point.m.x), O(point.m.y), O(point.x), O(point.y)];
                    if (onlystart) {
                      return sp;
                    }
                    subpaths.start = sp;
                    sp = ["M" + O(point.x), O(point.y) + "C" + O(point.n.x), O(point.n.y), O(point.end.x), O(point.end.y), O(p[5]), O(p[6])].join();
                    len += l;
                    x = +p[5];
                    y = +p[6];
                    continue;
                  }
                  if (!istotal && !subpath) {
                    point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                    return point;
                  }
                }
                len += l;
                x = +p[5];
                y = +p[6];
              }
              sp += p.shift() + p;
            }
            subpaths.end = sp;
            point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
            return point;
          }, null, Snap._.clone);
        }
        var getTotalLength = getLengthFactory(1),
            getPointAtLength = getLengthFactory(),
            getSubpathsAtLength = getLengthFactory(0, 1);
        function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
          var t1 = 1 - t,
              t13 = pow(t1, 3),
              t12 = pow(t1, 2),
              t2 = t * t,
              t3 = t2 * t,
              x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
              y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
              mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
              my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
              nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
              ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
              ax = t1 * p1x + t * c1x,
              ay = t1 * p1y + t * c1y,
              cx = t1 * c2x + t * p2x,
              cy = t1 * c2y + t * p2y,
              alpha = (90 - math.atan2(mx - nx, my - ny) * 180 / PI);
          return {
            x: x,
            y: y,
            m: {
              x: mx,
              y: my
            },
            n: {
              x: nx,
              y: ny
            },
            start: {
              x: ax,
              y: ay
            },
            end: {
              x: cx,
              y: cy
            },
            alpha: alpha
          };
        }
        function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
          if (!Snap.is(p1x, "array")) {
            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
          }
          var bbox = curveDim.apply(null, p1x);
          return box(bbox.min.x, bbox.min.y, bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y);
        }
        function isPointInsideBBox(bbox, x, y) {
          return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
        }
        function isBBoxIntersect(bbox1, bbox2) {
          bbox1 = box(bbox1);
          bbox2 = box(bbox2);
          return isPointInsideBBox(bbox2, bbox1.x, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
        }
        function base3(t, p1, p2, p3, p4) {
          var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
              t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
          return t * t2 - 3 * p1 + 3 * p2;
        }
        function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
          if (z == null) {
            z = 1;
          }
          z = z > 1 ? 1 : z < 0 ? 0 : z;
          var z2 = z / 2,
              n = 12,
              Tvalues = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816],
              Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472],
              sum = 0;
          for (var i = 0; i < n; i++) {
            var ct = z2 * Tvalues[i] + z2,
                xbase = base3(ct, x1, x2, x3, x4),
                ybase = base3(ct, y1, y2, y3, y4),
                comb = xbase * xbase + ybase * ybase;
            sum += Cvalues[i] * math.sqrt(comb);
          }
          return z2 * sum;
        }
        function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
          if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
            return;
          }
          var t = 1,
              step = t / 2,
              t2 = t - step,
              l,
              e = .01;
          l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
          while (abs(l - ll) > e) {
            step /= 2;
            t2 += (l < ll ? 1 : -1) * step;
            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
          }
          return t2;
        }
        function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
          if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) {
            return;
          }
          var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
              ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
              denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
          if (!denominator) {
            return;
          }
          var px = nx / denominator,
              py = ny / denominator,
              px2 = +px.toFixed(2),
              py2 = +py.toFixed(2);
          if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) {
            return;
          }
          return {
            x: px,
            y: py
          };
        }
        function inter(bez1, bez2) {
          return interHelper(bez1, bez2);
        }
        function interCount(bez1, bez2) {
          return interHelper(bez1, bez2, 1);
        }
        function interHelper(bez1, bez2, justCount) {
          var bbox1 = bezierBBox(bez1),
              bbox2 = bezierBBox(bez2);
          if (!isBBoxIntersect(bbox1, bbox2)) {
            return justCount ? 0 : [];
          }
          var l1 = bezlen.apply(0, bez1),
              l2 = bezlen.apply(0, bez2),
              n1 = ~~(l1 / 8),
              n2 = ~~(l2 / 8),
              dots1 = [],
              dots2 = [],
              xy = {},
              res = justCount ? 0 : [];
          for (var i = 0; i < n1 + 1; i++) {
            var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
            dots1.push({
              x: p.x,
              y: p.y,
              t: i / n1
            });
          }
          for (i = 0; i < n2 + 1; i++) {
            p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
            dots2.push({
              x: p.x,
              y: p.y,
              t: i / n2
            });
          }
          for (i = 0; i < n1; i++) {
            for (var j = 0; j < n2; j++) {
              var di = dots1[i],
                  di1 = dots1[i + 1],
                  dj = dots2[j],
                  dj1 = dots2[j + 1],
                  ci = abs(di1.x - di.x) < .001 ? "y" : "x",
                  cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
                  is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
              if (is) {
                if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
                  continue;
                }
                xy[is.x.toFixed(4)] = is.y.toFixed(4);
                var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                    t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
                if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                  if (justCount) {
                    res++;
                  } else {
                    res.push({
                      x: is.x,
                      y: is.y,
                      t1: t1,
                      t2: t2
                    });
                  }
                }
              }
            }
          }
          return res;
        }
        function pathIntersection(path1, path2) {
          return interPathHelper(path1, path2);
        }
        function pathIntersectionNumber(path1, path2) {
          return interPathHelper(path1, path2, 1);
        }
        function interPathHelper(path1, path2, justCount) {
          path1 = path2curve(path1);
          path2 = path2curve(path2);
          var x1,
              y1,
              x2,
              y2,
              x1m,
              y1m,
              x2m,
              y2m,
              bez1,
              bez2,
              res = justCount ? 0 : [];
          for (var i = 0,
              ii = path1.length; i < ii; i++) {
            var pi = path1[i];
            if (pi[0] == "M") {
              x1 = x1m = pi[1];
              y1 = y1m = pi[2];
            } else {
              if (pi[0] == "C") {
                bez1 = [x1, y1].concat(pi.slice(1));
                x1 = bez1[6];
                y1 = bez1[7];
              } else {
                bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
                x1 = x1m;
                y1 = y1m;
              }
              for (var j = 0,
                  jj = path2.length; j < jj; j++) {
                var pj = path2[j];
                if (pj[0] == "M") {
                  x2 = x2m = pj[1];
                  y2 = y2m = pj[2];
                } else {
                  if (pj[0] == "C") {
                    bez2 = [x2, y2].concat(pj.slice(1));
                    x2 = bez2[6];
                    y2 = bez2[7];
                  } else {
                    bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                    x2 = x2m;
                    y2 = y2m;
                  }
                  var intr = interHelper(bez1, bez2, justCount);
                  if (justCount) {
                    res += intr;
                  } else {
                    for (var k = 0,
                        kk = intr.length; k < kk; k++) {
                      intr[k].segment1 = i;
                      intr[k].segment2 = j;
                      intr[k].bez1 = bez1;
                      intr[k].bez2 = bez2;
                    }
                    res = res.concat(intr);
                  }
                }
              }
            }
          }
          return res;
        }
        function isPointInsidePath(path, x, y) {
          var bbox = pathBBox(path);
          return isPointInsideBBox(bbox, x, y) && interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
        }
        function pathBBox(path) {
          var pth = paths(path);
          if (pth.bbox) {
            return clone(pth.bbox);
          }
          if (!path) {
            return box();
          }
          path = path2curve(path);
          var x = 0,
              y = 0,
              X = [],
              Y = [],
              p;
          for (var i = 0,
              ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
              x = p[1];
              y = p[2];
              X.push(x);
              Y.push(y);
            } else {
              var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
              X = X.concat(dim.min.x, dim.max.x);
              Y = Y.concat(dim.min.y, dim.max.y);
              x = p[5];
              y = p[6];
            }
          }
          var xmin = mmin.apply(0, X),
              ymin = mmin.apply(0, Y),
              xmax = mmax.apply(0, X),
              ymax = mmax.apply(0, Y),
              bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
          pth.bbox = clone(bb);
          return bb;
        }
        function rectPath(x, y, w, h, r) {
          if (r) {
            return [["M", +x + (+r), y], ["l", w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], ["l", r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
          }
          var res = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
          res.toString = toString;
          return res;
        }
        function ellipsePath(x, y, rx, ry, a) {
          if (a == null && ry == null) {
            ry = rx;
          }
          x = +x;
          y = +y;
          rx = +rx;
          ry = +ry;
          if (a != null) {
            var rad = Math.PI / 180,
                x1 = x + rx * Math.cos(-ry * rad),
                x2 = x + rx * Math.cos(-a * rad),
                y1 = y + rx * Math.sin(-ry * rad),
                y2 = y + rx * Math.sin(-a * rad),
                res = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
          } else {
            res = [["M", x, y], ["m", 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];
          }
          res.toString = toString;
          return res;
        }
        var unit2px = Snap._unit2px,
            getPath = {
              path: function(el) {
                return el.attr("path");
              },
              circle: function(el) {
                var attr = unit2px(el);
                return ellipsePath(attr.cx, attr.cy, attr.r);
              },
              ellipse: function(el) {
                var attr = unit2px(el);
                return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
              },
              rect: function(el) {
                var attr = unit2px(el);
                return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
              },
              image: function(el) {
                var attr = unit2px(el);
                return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
              },
              line: function(el) {
                return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
              },
              polyline: function(el) {
                return "M" + el.attr("points");
              },
              polygon: function(el) {
                return "M" + el.attr("points") + "z";
              },
              deflt: function(el) {
                var bbox = el.node.getBBox();
                return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
              }
            };
        function pathToRelative(pathArray) {
          var pth = paths(pathArray),
              lowerCase = String.prototype.toLowerCase;
          if (pth.rel) {
            return pathClone(pth.rel);
          }
          if (!Snap.is(pathArray, "array") || !Snap.is(pathArray && pathArray[0], "array")) {
            pathArray = Snap.parsePathString(pathArray);
          }
          var res = [],
              x = 0,
              y = 0,
              mx = 0,
              my = 0,
              start = 0;
          if (pathArray[0][0] == "M") {
            x = pathArray[0][1];
            y = pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res.push(["M", x, y]);
          }
          for (var i = start,
              ii = pathArray.length; i < ii; i++) {
            var r = res[i] = [],
                pa = pathArray[i];
            if (pa[0] != lowerCase.call(pa[0])) {
              r[0] = lowerCase.call(pa[0]);
              switch (r[0]) {
                case "a":
                  r[1] = pa[1];
                  r[2] = pa[2];
                  r[3] = pa[3];
                  r[4] = pa[4];
                  r[5] = pa[5];
                  r[6] = +(pa[6] - x).toFixed(3);
                  r[7] = +(pa[7] - y).toFixed(3);
                  break;
                case "v":
                  r[1] = +(pa[1] - y).toFixed(3);
                  break;
                case "m":
                  mx = pa[1];
                  my = pa[2];
                default:
                  for (var j = 1,
                      jj = pa.length; j < jj; j++) {
                    r[j] = +(pa[j] - ((j % 2) ? x : y)).toFixed(3);
                  }
              }
            } else {
              r = res[i] = [];
              if (pa[0] == "m") {
                mx = pa[1] + x;
                my = pa[2] + y;
              }
              for (var k = 0,
                  kk = pa.length; k < kk; k++) {
                res[i][k] = pa[k];
              }
            }
            var len = res[i].length;
            switch (res[i][0]) {
              case "z":
                x = mx;
                y = my;
                break;
              case "h":
                x += +res[i][len - 1];
                break;
              case "v":
                y += +res[i][len - 1];
                break;
              default:
                x += +res[i][len - 2];
                y += +res[i][len - 1];
            }
          }
          res.toString = toString;
          pth.rel = pathClone(res);
          return res;
        }
        function pathToAbsolute(pathArray) {
          var pth = paths(pathArray);
          if (pth.abs) {
            return pathClone(pth.abs);
          }
          if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) {
            pathArray = Snap.parsePathString(pathArray);
          }
          if (!pathArray || !pathArray.length) {
            return [["M", 0, 0]];
          }
          var res = [],
              x = 0,
              y = 0,
              mx = 0,
              my = 0,
              start = 0,
              pa0;
          if (pathArray[0][0] == "M") {
            x = +pathArray[0][1];
            y = +pathArray[0][2];
            mx = x;
            my = y;
            start++;
            res[0] = ["M", x, y];
          }
          var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
          for (var r,
              pa,
              i = start,
              ii = pathArray.length; i < ii; i++) {
            res.push(r = []);
            pa = pathArray[i];
            pa0 = pa[0];
            if (pa0 != pa0.toUpperCase()) {
              r[0] = pa0.toUpperCase();
              switch (r[0]) {
                case "A":
                  r[1] = pa[1];
                  r[2] = pa[2];
                  r[3] = pa[3];
                  r[4] = pa[4];
                  r[5] = pa[5];
                  r[6] = +pa[6] + x;
                  r[7] = +pa[7] + y;
                  break;
                case "V":
                  r[1] = +pa[1] + y;
                  break;
                case "H":
                  r[1] = +pa[1] + x;
                  break;
                case "R":
                  var dots = [x, y].concat(pa.slice(1));
                  for (var j = 2,
                      jj = dots.length; j < jj; j++) {
                    dots[j] = +dots[j] + x;
                    dots[++j] = +dots[j] + y;
                  }
                  res.pop();
                  res = res.concat(catmullRom2bezier(dots, crz));
                  break;
                case "O":
                  res.pop();
                  dots = ellipsePath(x, y, pa[1], pa[2]);
                  dots.push(dots[0]);
                  res = res.concat(dots);
                  break;
                case "U":
                  res.pop();
                  res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                  r = ["U"].concat(res[res.length - 1].slice(-2));
                  break;
                case "M":
                  mx = +pa[1] + x;
                  my = +pa[2] + y;
                default:
                  for (j = 1, jj = pa.length; j < jj; j++) {
                    r[j] = +pa[j] + ((j % 2) ? x : y);
                  }
              }
            } else if (pa0 == "R") {
              dots = [x, y].concat(pa.slice(1));
              res.pop();
              res = res.concat(catmullRom2bezier(dots, crz));
              r = ["R"].concat(pa.slice(-2));
            } else if (pa0 == "O") {
              res.pop();
              dots = ellipsePath(x, y, pa[1], pa[2]);
              dots.push(dots[0]);
              res = res.concat(dots);
            } else if (pa0 == "U") {
              res.pop();
              res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
              r = ["U"].concat(res[res.length - 1].slice(-2));
            } else {
              for (var k = 0,
                  kk = pa.length; k < kk; k++) {
                r[k] = pa[k];
              }
            }
            pa0 = pa0.toUpperCase();
            if (pa0 != "O") {
              switch (r[0]) {
                case "Z":
                  x = +mx;
                  y = +my;
                  break;
                case "H":
                  x = r[1];
                  break;
                case "V":
                  y = r[1];
                  break;
                case "M":
                  mx = r[r.length - 2];
                  my = r[r.length - 1];
                default:
                  x = r[r.length - 2];
                  y = r[r.length - 1];
              }
            }
          }
          res.toString = toString;
          pth.abs = pathClone(res);
          return res;
        }
        function l2c(x1, y1, x2, y2) {
          return [x1, y1, x2, y2, x2, y2];
        }
        function q2c(x1, y1, ax, ay, x2, y2) {
          var _13 = 1 / 3,
              _23 = 2 / 3;
          return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
        }
        function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
          var _120 = PI * 120 / 180,
              rad = PI / 180 * (+angle || 0),
              res = [],
              xy,
              rotate = Snap._.cacher(function(x, y, rad) {
                var X = x * math.cos(rad) - y * math.sin(rad),
                    Y = x * math.sin(rad) + y * math.cos(rad);
                return {
                  x: X,
                  y: Y
                };
              });
          if (!recursive) {
            xy = rotate(x1, y1, -rad);
            x1 = xy.x;
            y1 = xy.y;
            xy = rotate(x2, y2, -rad);
            x2 = xy.x;
            y2 = xy.y;
            var cos = math.cos(PI / 180 * angle),
                sin = math.sin(PI / 180 * angle),
                x = (x1 - x2) / 2,
                y = (y1 - y2) / 2;
            var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
            if (h > 1) {
              h = math.sqrt(h);
              rx = h * rx;
              ry = h * ry;
            }
            var rx2 = rx * rx,
                ry2 = ry * ry,
                k = (large_arc_flag == sweep_flag ? -1 : 1) * math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
                cx = k * rx * y / ry + (x1 + x2) / 2,
                cy = k * -ry * x / rx + (y1 + y2) / 2,
                f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
                f2 = math.asin(((y2 - cy) / ry).toFixed(9));
            f1 = x1 < cx ? PI - f1 : f1;
            f2 = x2 < cx ? PI - f2 : f2;
            f1 < 0 && (f1 = PI * 2 + f1);
            f2 < 0 && (f2 = PI * 2 + f2);
            if (sweep_flag && f1 > f2) {
              f1 = f1 - PI * 2;
            }
            if (!sweep_flag && f2 > f1) {
              f2 = f2 - PI * 2;
            }
          } else {
            f1 = recursive[0];
            f2 = recursive[1];
            cx = recursive[2];
            cy = recursive[3];
          }
          var df = f2 - f1;
          if (abs(df) > _120) {
            var f2old = f2,
                x2old = x2,
                y2old = y2;
            f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
            x2 = cx + rx * math.cos(f2);
            y2 = cy + ry * math.sin(f2);
            res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
          }
          df = f2 - f1;
          var c1 = math.cos(f1),
              s1 = math.sin(f1),
              c2 = math.cos(f2),
              s2 = math.sin(f2),
              t = math.tan(df / 4),
              hx = 4 / 3 * rx * t,
              hy = 4 / 3 * ry * t,
              m1 = [x1, y1],
              m2 = [x1 + hx * s1, y1 - hy * c1],
              m3 = [x2 + hx * s2, y2 - hy * c2],
              m4 = [x2, y2];
          m2[0] = 2 * m1[0] - m2[0];
          m2[1] = 2 * m1[1] - m2[1];
          if (recursive) {
            return [m2, m3, m4].concat(res);
          } else {
            res = [m2, m3, m4].concat(res).join().split(",");
            var newres = [];
            for (var i = 0,
                ii = res.length; i < ii; i++) {
              newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
            }
            return newres;
          }
        }
        function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
          var t1 = 1 - t;
          return {
            x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
            y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
          };
        }
        function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
          var tvalues = [],
              bounds = [[], []],
              a,
              b,
              c,
              t,
              t1,
              t2,
              b2ac,
              sqrtb2ac;
          for (var i = 0; i < 2; ++i) {
            if (i == 0) {
              b = 6 * x0 - 12 * x1 + 6 * x2;
              a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
              c = 3 * x1 - 3 * x0;
            } else {
              b = 6 * y0 - 12 * y1 + 6 * y2;
              a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
              c = 3 * y1 - 3 * y0;
            }
            if (abs(a) < 1e-12) {
              if (abs(b) < 1e-12) {
                continue;
              }
              t = -c / b;
              if (0 < t && t < 1) {
                tvalues.push(t);
              }
              continue;
            }
            b2ac = b * b - 4 * c * a;
            sqrtb2ac = math.sqrt(b2ac);
            if (b2ac < 0) {
              continue;
            }
            t1 = (-b + sqrtb2ac) / (2 * a);
            if (0 < t1 && t1 < 1) {
              tvalues.push(t1);
            }
            t2 = (-b - sqrtb2ac) / (2 * a);
            if (0 < t2 && t2 < 1) {
              tvalues.push(t2);
            }
          }
          var x,
              y,
              j = tvalues.length,
              jlen = j,
              mt;
          while (j--) {
            t = tvalues[j];
            mt = 1 - t;
            bounds[0][j] = (mt * mt * mt * x0) + (3 * mt * mt * t * x1) + (3 * mt * t * t * x2) + (t * t * t * x3);
            bounds[1][j] = (mt * mt * mt * y0) + (3 * mt * mt * t * y1) + (3 * mt * t * t * y2) + (t * t * t * y3);
          }
          bounds[0][jlen] = x0;
          bounds[1][jlen] = y0;
          bounds[0][jlen + 1] = x3;
          bounds[1][jlen + 1] = y3;
          bounds[0].length = bounds[1].length = jlen + 2;
          return {
            min: {
              x: mmin.apply(0, bounds[0]),
              y: mmin.apply(0, bounds[1])
            },
            max: {
              x: mmax.apply(0, bounds[0]),
              y: mmax.apply(0, bounds[1])
            }
          };
        }
        function path2curve(path, path2) {
          var pth = !path2 && paths(path);
          if (!path2 && pth.curve) {
            return pathClone(pth.curve);
          }
          var p = pathToAbsolute(path),
              p2 = path2 && pathToAbsolute(path2),
              attrs = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
              },
              attrs2 = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
              },
              processPath = function(path, d, pcom) {
                var nx,
                    ny;
                if (!path) {
                  return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
                }
                !(path[0] in {
                  T: 1,
                  Q: 1
                }) && (d.qx = d.qy = null);
                switch (path[0]) {
                  case "M":
                    d.X = path[1];
                    d.Y = path[2];
                    break;
                  case "A":
                    path = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
                    break;
                  case "S":
                    if (pcom == "C" || pcom == "S") {
                      nx = d.x * 2 - d.bx;
                      ny = d.y * 2 - d.by;
                    } else {
                      nx = d.x;
                      ny = d.y;
                    }
                    path = ["C", nx, ny].concat(path.slice(1));
                    break;
                  case "T":
                    if (pcom == "Q" || pcom == "T") {
                      d.qx = d.x * 2 - d.qx;
                      d.qy = d.y * 2 - d.qy;
                    } else {
                      d.qx = d.x;
                      d.qy = d.y;
                    }
                    path = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
                    break;
                  case "Q":
                    d.qx = path[1];
                    d.qy = path[2];
                    path = ["C"].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
                    break;
                  case "L":
                    path = ["C"].concat(l2c(d.x, d.y, path[1], path[2]));
                    break;
                  case "H":
                    path = ["C"].concat(l2c(d.x, d.y, path[1], d.y));
                    break;
                  case "V":
                    path = ["C"].concat(l2c(d.x, d.y, d.x, path[1]));
                    break;
                  case "Z":
                    path = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
                    break;
                }
                return path;
              },
              fixArc = function(pp, i) {
                if (pp[i].length > 7) {
                  pp[i].shift();
                  var pi = pp[i];
                  while (pi.length) {
                    pcoms1[i] = "A";
                    p2 && (pcoms2[i] = "A");
                    pp.splice(i++, 0, ["C"].concat(pi.splice(0, 6)));
                  }
                  pp.splice(i, 1);
                  ii = mmax(p.length, p2 && p2.length || 0);
                }
              },
              fixM = function(path1, path2, a1, a2, i) {
                if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
                  path2.splice(i, 0, ["M", a2.x, a2.y]);
                  a1.bx = 0;
                  a1.by = 0;
                  a1.x = path1[i][1];
                  a1.y = path1[i][2];
                  ii = mmax(p.length, p2 && p2.length || 0);
                }
              },
              pcoms1 = [],
              pcoms2 = [],
              pfirst = "",
              pcom = "";
          for (var i = 0,
              ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
            p[i] && (pfirst = p[i][0]);
            if (pfirst != "C") {
              pcoms1[i] = pfirst;
              i && (pcom = pcoms1[i - 1]);
            }
            p[i] = processPath(p[i], attrs, pcom);
            if (pcoms1[i] != "A" && pfirst == "C")
              pcoms1[i] = "C";
            fixArc(p, i);
            if (p2) {
              p2[i] && (pfirst = p2[i][0]);
              if (pfirst != "C") {
                pcoms2[i] = pfirst;
                i && (pcom = pcoms2[i - 1]);
              }
              p2[i] = processPath(p2[i], attrs2, pcom);
              if (pcoms2[i] != "A" && pfirst == "C") {
                pcoms2[i] = "C";
              }
              fixArc(p2, i);
            }
            fixM(p, p2, attrs, attrs2, i);
            fixM(p2, p, attrs2, attrs, i);
            var seg = p[i],
                seg2 = p2 && p2[i],
                seglen = seg.length,
                seg2len = p2 && seg2.length;
            attrs.x = seg[seglen - 2];
            attrs.y = seg[seglen - 1];
            attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
            attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
            attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
            attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
            attrs2.x = p2 && seg2[seg2len - 2];
            attrs2.y = p2 && seg2[seg2len - 1];
          }
          if (!p2) {
            pth.curve = pathClone(p);
          }
          return p2 ? [p, p2] : p;
        }
        function mapPath(path, matrix) {
          if (!matrix) {
            return path;
          }
          var x,
              y,
              i,
              j,
              ii,
              jj,
              pathi;
          path = path2curve(path);
          for (i = 0, ii = path.length; i < ii; i++) {
            pathi = path[i];
            for (j = 1, jj = pathi.length; j < jj; j += 2) {
              x = matrix.x(pathi[j], pathi[j + 1]);
              y = matrix.y(pathi[j], pathi[j + 1]);
              pathi[j] = x;
              pathi[j + 1] = y;
            }
          }
          return path;
        }
        function catmullRom2bezier(crp, z) {
          var d = [];
          for (var i = 0,
              iLen = crp.length; iLen - 2 * !z > i; i += 2) {
            var p = [{
              x: +crp[i - 2],
              y: +crp[i - 1]
            }, {
              x: +crp[i],
              y: +crp[i + 1]
            }, {
              x: +crp[i + 2],
              y: +crp[i + 3]
            }, {
              x: +crp[i + 4],
              y: +crp[i + 5]
            }];
            if (z) {
              if (!i) {
                p[0] = {
                  x: +crp[iLen - 2],
                  y: +crp[iLen - 1]
                };
              } else if (iLen - 4 == i) {
                p[3] = {
                  x: +crp[0],
                  y: +crp[1]
                };
              } else if (iLen - 2 == i) {
                p[2] = {
                  x: +crp[0],
                  y: +crp[1]
                };
                p[3] = {
                  x: +crp[2],
                  y: +crp[3]
                };
              }
            } else {
              if (iLen - 4 == i) {
                p[3] = p[2];
              } else if (!i) {
                p[0] = {
                  x: +crp[i],
                  y: +crp[i + 1]
                };
              }
            }
            d.push(["C", (-p[0].x + 6 * p[1].x + p[2].x) / 6, (-p[0].y + 6 * p[1].y + p[2].y) / 6, (p[1].x + 6 * p[2].x - p[3].x) / 6, (p[1].y + 6 * p[2].y - p[3].y) / 6, p[2].x, p[2].y]);
          }
          return d;
        }
        Snap.path = paths;
        Snap.path.getTotalLength = getTotalLength;
        Snap.path.getPointAtLength = getPointAtLength;
        Snap.path.getSubpath = function(path, from, to) {
          if (this.getTotalLength(path) - to < 1e-6) {
            return getSubpathsAtLength(path, from).end;
          }
          var a = getSubpathsAtLength(path, to, 1);
          return from ? getSubpathsAtLength(a, from).end : a;
        };
        elproto.getTotalLength = function() {
          if (this.node.getTotalLength) {
            return this.node.getTotalLength();
          }
        };
        elproto.getPointAtLength = function(length) {
          return getPointAtLength(this.attr("d"), length);
        };
        elproto.getSubpath = function(from, to) {
          return Snap.path.getSubpath(this.attr("d"), from, to);
        };
        Snap._.box = box;
        Snap.path.findDotsAtSegment = findDotsAtSegment;
        Snap.path.bezierBBox = bezierBBox;
        Snap.path.isPointInsideBBox = isPointInsideBBox;
        Snap.closest = function(x, y, X, Y) {
          var r = 100,
              b = box(x - r / 2, y - r / 2, r, r),
              inside = [],
              getter = X[0].hasOwnProperty("x") ? function(i) {
                return {
                  x: X[i].x,
                  y: X[i].y
                };
              } : function(i) {
                return {
                  x: X[i],
                  y: Y[i]
                };
              },
              found = 0;
          while (r <= 1e6 && !found) {
            for (var i = 0,
                ii = X.length; i < ii; i++) {
              var xy = getter(i);
              if (isPointInsideBBox(b, xy.x, xy.y)) {
                found++;
                inside.push(xy);
                break;
              }
            }
            if (!found) {
              r *= 2;
              b = box(x - r / 2, y - r / 2, r, r);
            }
          }
          if (r == 1e6) {
            return;
          }
          var len = Infinity,
              res;
          for (i = 0, ii = inside.length; i < ii; i++) {
            var l = Snap.len(x, y, inside[i].x, inside[i].y);
            if (len > l) {
              len = l;
              inside[i].len = l;
              res = inside[i];
            }
          }
          return res;
        };
        Snap.path.isBBoxIntersect = isBBoxIntersect;
        Snap.path.intersection = pathIntersection;
        Snap.path.intersectionNumber = pathIntersectionNumber;
        Snap.path.isPointInside = isPointInsidePath;
        Snap.path.getBBox = pathBBox;
        Snap.path.get = getPath;
        Snap.path.toRelative = pathToRelative;
        Snap.path.toAbsolute = pathToAbsolute;
        Snap.path.toCubic = path2curve;
        Snap.path.map = mapPath;
        Snap.path.toString = toString;
        Snap.path.clone = pathClone;
      });
      Snap.plugin(function(Snap, Element, Paper, glob) {
        var mmax = Math.max,
            mmin = Math.min;
        var Set = function(items) {
          this.items = [];
          this.bindings = {};
          this.length = 0;
          this.type = "set";
          if (items) {
            for (var i = 0,
                ii = items.length; i < ii; i++) {
              if (items[i]) {
                this[this.items.length] = this.items[this.items.length] = items[i];
                this.length++;
              }
            }
          }
        },
            setproto = Set.prototype;
        setproto.push = function() {
          var item,
              len;
          for (var i = 0,
              ii = arguments.length; i < ii; i++) {
            item = arguments[i];
            if (item) {
              len = this.items.length;
              this[len] = this.items[len] = item;
              this.length++;
            }
          }
          return this;
        };
        setproto.pop = function() {
          this.length && delete this[this.length--];
          return this.items.pop();
        };
        setproto.forEach = function(callback, thisArg) {
          for (var i = 0,
              ii = this.items.length; i < ii; i++) {
            if (callback.call(thisArg, this.items[i], i) === false) {
              return this;
            }
          }
          return this;
        };
        setproto.animate = function(attrs, ms, easing, callback) {
          if (typeof easing == "function" && !easing.length) {
            callback = easing;
            easing = mina.linear;
          }
          if (attrs instanceof Snap._.Animation) {
            callback = attrs.callback;
            easing = attrs.easing;
            ms = easing.dur;
            attrs = attrs.attr;
          }
          var args = arguments;
          if (Snap.is(attrs, "array") && Snap.is(args[args.length - 1], "array")) {
            var each = true;
          }
          var begin,
              handler = function() {
                if (begin) {
                  this.b = begin;
                } else {
                  begin = this.b;
                }
              },
              cb = 0,
              set = this,
              callbacker = callback && function() {
                if (++cb == set.length) {
                  callback.call(this);
                }
              };
          return this.forEach(function(el, i) {
            eve.once("snap.animcreated." + el.id, handler);
            if (each) {
              args[i] && el.animate.apply(el, args[i]);
            } else {
              el.animate(attrs, ms, easing, callbacker);
            }
          });
        };
        setproto.remove = function() {
          while (this.length) {
            this.pop().remove();
          }
          return this;
        };
        setproto.bind = function(attr, a, b) {
          var data = {};
          if (typeof a == "function") {
            this.bindings[attr] = a;
          } else {
            var aname = b || attr;
            this.bindings[attr] = function(v) {
              data[aname] = v;
              a.attr(data);
            };
          }
          return this;
        };
        setproto.attr = function(value) {
          var unbound = {};
          for (var k in value) {
            if (this.bindings[k]) {
              this.bindings[k](value[k]);
            } else {
              unbound[k] = value[k];
            }
          }
          for (var i = 0,
              ii = this.items.length; i < ii; i++) {
            this.items[i].attr(unbound);
          }
          return this;
        };
        setproto.clear = function() {
          while (this.length) {
            this.pop();
          }
        };
        setproto.splice = function(index, count, insertion) {
          index = index < 0 ? mmax(this.length + index, 0) : index;
          count = mmax(0, mmin(this.length - index, count));
          var tail = [],
              todel = [],
              args = [],
              i;
          for (i = 2; i < arguments.length; i++) {
            args.push(arguments[i]);
          }
          for (i = 0; i < count; i++) {
            todel.push(this[index + i]);
          }
          for (; i < this.length - index; i++) {
            tail.push(this[index + i]);
          }
          var arglen = args.length;
          for (i = 0; i < arglen + tail.length; i++) {
            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
          }
          i = this.items.length = this.length -= count - arglen;
          while (this[i]) {
            delete this[i++];
          }
          return new Set(todel);
        };
        setproto.exclude = function(el) {
          for (var i = 0,
              ii = this.length; i < ii; i++)
            if (this[i] == el) {
              this.splice(i, 1);
              return true;
            }
          return false;
        };
        setproto.insertAfter = function(el) {
          var i = this.items.length;
          while (i--) {
            this.items[i].insertAfter(el);
          }
          return this;
        };
        setproto.getBBox = function() {
          var x = [],
              y = [],
              x2 = [],
              y2 = [];
          for (var i = this.items.length; i--; )
            if (!this.items[i].removed) {
              var box = this.items[i].getBBox();
              x.push(box.x);
              y.push(box.y);
              x2.push(box.x + box.width);
              y2.push(box.y + box.height);
            }
          x = mmin.apply(0, x);
          y = mmin.apply(0, y);
          x2 = mmax.apply(0, x2);
          y2 = mmax.apply(0, y2);
          return {
            x: x,
            y: y,
            x2: x2,
            y2: y2,
            width: x2 - x,
            height: y2 - y,
            cx: x + (x2 - x) / 2,
            cy: y + (y2 - y) / 2
          };
        };
        setproto.clone = function(s) {
          s = new Set;
          for (var i = 0,
              ii = this.items.length; i < ii; i++) {
            s.push(this.items[i].clone());
          }
          return s;
        };
        setproto.toString = function() {
          return "Snap\u2018s set";
        };
        setproto.type = "set";
        Snap.Set = Set;
        Snap.set = function() {
          var set = new Set;
          if (arguments.length) {
            set.push.apply(set, Array.prototype.slice.call(arguments, 0));
          }
          return set;
        };
      });
      Snap.plugin(function(Snap, Element, Paper, glob) {
        var names = {},
            reUnit = /[a-z]+$/i,
            Str = String;
        names.stroke = names.fill = "colour";
        function getEmpty(item) {
          var l = item[0];
          switch (l.toLowerCase()) {
            case "t":
              return [l, 0, 0];
            case "m":
              return [l, 1, 0, 0, 1, 0, 0];
            case "r":
              if (item.length == 4) {
                return [l, 0, item[2], item[3]];
              } else {
                return [l, 0];
              }
            case "s":
              if (item.length == 5) {
                return [l, 1, 1, item[3], item[4]];
              } else if (item.length == 3) {
                return [l, 1, 1];
              } else {
                return [l, 1];
              }
          }
        }
        function equaliseTransform(t1, t2, getBBox) {
          t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
          t1 = Snap.parseTransformString(t1) || [];
          t2 = Snap.parseTransformString(t2) || [];
          var maxlength = Math.max(t1.length, t2.length),
              from = [],
              to = [],
              i = 0,
              j,
              jj,
              tt1,
              tt2;
          for (; i < maxlength; i++) {
            tt1 = t1[i] || getEmpty(t2[i]);
            tt2 = t2[i] || getEmpty(tt1);
            if ((tt1[0] != tt2[0]) || (tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3])) || (tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4]))) {
              t1 = Snap._.transform2matrix(t1, getBBox());
              t2 = Snap._.transform2matrix(t2, getBBox());
              from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
              to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
              break;
            }
            from[i] = [];
            to[i] = [];
            for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
              j in tt1 && (from[i][j] = tt1[j]);
              j in tt2 && (to[i][j] = tt2[j]);
            }
          }
          return {
            from: path2array(from),
            to: path2array(to),
            f: getPath(from)
          };
        }
        function getNumber(val) {
          return val;
        }
        function getUnit(unit) {
          return function(val) {
            return +val.toFixed(3) + unit;
          };
        }
        function getViewBox(val) {
          return val.join(" ");
        }
        function getColour(clr) {
          return Snap.rgb(clr[0], clr[1], clr[2]);
        }
        function getPath(path) {
          var k = 0,
              i,
              ii,
              j,
              jj,
              out,
              a,
              b = [];
          for (i = 0, ii = path.length; i < ii; i++) {
            out = "[";
            a = ['"' + path[i][0] + '"'];
            for (j = 1, jj = path[i].length; j < jj; j++) {
              a[j] = "val[" + (k++) + "]";
            }
            out += a + "]";
            b[i] = out;
          }
          return Function("val", "return Snap.path.toString.call([" + b + "])");
        }
        function path2array(path) {
          var out = [];
          for (var i = 0,
              ii = path.length; i < ii; i++) {
            for (var j = 1,
                jj = path[i].length; j < jj; j++) {
              out.push(path[i][j]);
            }
          }
          return out;
        }
        function isNumeric(obj) {
          return isFinite(parseFloat(obj));
        }
        function arrayEqual(arr1, arr2) {
          if (!Snap.is(arr1, "array") || !Snap.is(arr2, "array")) {
            return false;
          }
          return arr1.toString() == arr2.toString();
        }
        Element.prototype.equal = function(name, b) {
          return eve("snap.util.equal", this, name, b).firstDefined();
        };
        eve.on("snap.util.equal", function(name, b) {
          var A,
              B,
              a = Str(this.attr(name) || ""),
              el = this;
          if (isNumeric(a) && isNumeric(b)) {
            return {
              from: parseFloat(a),
              to: parseFloat(b),
              f: getNumber
            };
          }
          if (names[name] == "colour") {
            A = Snap.color(a);
            B = Snap.color(b);
            return {
              from: [A.r, A.g, A.b, A.opacity],
              to: [B.r, B.g, B.b, B.opacity],
              f: getColour
            };
          }
          if (name == "viewBox") {
            A = this.attr(name).vb.split(" ").map(Number);
            B = b.split(" ").map(Number);
            return {
              from: A,
              to: B,
              f: getViewBox
            };
          }
          if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
            if (b instanceof Snap.Matrix) {
              b = b.toTransformString();
            }
            if (!Snap._.rgTransform.test(b)) {
              b = Snap._.svgTransform2string(b);
            }
            return equaliseTransform(a, b, function() {
              return el.getBBox(1);
            });
          }
          if (name == "d" || name == "path") {
            A = Snap.path.toCubic(a, b);
            return {
              from: path2array(A[0]),
              to: path2array(A[1]),
              f: getPath(A[0])
            };
          }
          if (name == "points") {
            A = Str(a).split(Snap._.separator);
            B = Str(b).split(Snap._.separator);
            return {
              from: A,
              to: B,
              f: function(val) {
                return val;
              }
            };
          }
          var aUnit = a.match(reUnit),
              bUnit = Str(b).match(reUnit);
          if (aUnit && arrayEqual(aUnit, bUnit)) {
            return {
              from: parseFloat(a),
              to: parseFloat(b),
              f: getUnit(aUnit)
            };
          } else {
            return {
              from: this.asPX(name),
              to: this.asPX(name, b),
              f: getNumber
            };
          }
        });
      });
      Snap.plugin(function(Snap, Element, Paper, glob) {
        var elproto = Element.prototype,
            has = "hasOwnProperty",
            supportsTouch = "createTouch" in glob.doc,
            events = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"],
            touchMap = {
              mousedown: "touchstart",
              mousemove: "touchmove",
              mouseup: "touchend"
            },
            getScroll = function(xy, el) {
              var name = xy == "y" ? "scrollTop" : "scrollLeft",
                  doc = el && el.node ? el.node.ownerDocument : glob.doc;
              return doc[name in doc.documentElement ? "documentElement" : "body"][name];
            },
            preventDefault = function() {
              this.returnValue = false;
            },
            preventTouch = function() {
              return this.originalEvent.preventDefault();
            },
            stopPropagation = function() {
              this.cancelBubble = true;
            },
            stopTouch = function() {
              return this.originalEvent.stopPropagation();
            },
            addEvent = function(obj, type, fn, element) {
              var realName = supportsTouch && touchMap[type] ? touchMap[type] : type,
                  f = function(e) {
                    var scrollY = getScroll("y", element),
                        scrollX = getScroll("x", element);
                    if (supportsTouch && touchMap[has](type)) {
                      for (var i = 0,
                          ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
                        if (e.targetTouches[i].target == obj || obj.contains(e.targetTouches[i].target)) {
                          var olde = e;
                          e = e.targetTouches[i];
                          e.originalEvent = olde;
                          e.preventDefault = preventTouch;
                          e.stopPropagation = stopTouch;
                          break;
                        }
                      }
                    }
                    var x = e.clientX + scrollX,
                        y = e.clientY + scrollY;
                    return fn.call(element, e, x, y);
                  };
              if (type !== realName) {
                obj.addEventListener(type, f, false);
              }
              obj.addEventListener(realName, f, false);
              return function() {
                if (type !== realName) {
                  obj.removeEventListener(type, f, false);
                }
                obj.removeEventListener(realName, f, false);
                return true;
              };
            },
            drag = [],
            dragMove = function(e) {
              var x = e.clientX,
                  y = e.clientY,
                  scrollY = getScroll("y"),
                  scrollX = getScroll("x"),
                  dragi,
                  j = drag.length;
              while (j--) {
                dragi = drag[j];
                if (supportsTouch) {
                  var i = e.touches && e.touches.length,
                      touch;
                  while (i--) {
                    touch = e.touches[i];
                    if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                      x = touch.clientX;
                      y = touch.clientY;
                      (e.originalEvent ? e.originalEvent : e).preventDefault();
                      break;
                    }
                  }
                } else {
                  e.preventDefault();
                }
                var node = dragi.el.node,
                    o,
                    next = node.nextSibling,
                    parent = node.parentNode,
                    display = node.style.display;
                x += scrollX;
                y += scrollY;
                eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
              }
            },
            dragUp = function(e) {
              Snap.unmousemove(dragMove).unmouseup(dragUp);
              var i = drag.length,
                  dragi;
              while (i--) {
                dragi = drag[i];
                dragi.el._drag = {};
                eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
                eve.off("snap.drag.*." + dragi.el.id);
              }
              drag = [];
            };
        for (var i = events.length; i--; ) {
          (function(eventName) {
            Snap[eventName] = elproto[eventName] = function(fn, scope) {
              if (Snap.is(fn, "function")) {
                this.events = this.events || [];
                this.events.push({
                  name: eventName,
                  f: fn,
                  unbind: addEvent(this.node || document, eventName, fn, scope || this)
                });
              } else {
                for (var i = 0,
                    ii = this.events.length; i < ii; i++)
                  if (this.events[i].name == eventName) {
                    try {
                      this.events[i].f.call(this);
                    } catch (e) {}
                  }
              }
              return this;
            };
            Snap["un" + eventName] = elproto["un" + eventName] = function(fn) {
              var events = this.events || [],
                  l = events.length;
              while (l--)
                if (events[l].name == eventName && (events[l].f == fn || !fn)) {
                  events[l].unbind();
                  events.splice(l, 1);
                  !events.length && delete this.events;
                  return this;
                }
              return this;
            };
          })(events[i]);
        }
        elproto.hover = function(f_in, f_out, scope_in, scope_out) {
          return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
        };
        elproto.unhover = function(f_in, f_out) {
          return this.unmouseover(f_in).unmouseout(f_out);
        };
        var draggable = [];
        elproto.drag = function(onmove, onstart, onend, move_scope, start_scope, end_scope) {
          var el = this;
          if (!arguments.length) {
            var origTransform;
            return el.drag(function(dx, dy) {
              this.attr({transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]});
            }, function() {
              origTransform = this.transform().local;
            });
          }
          function start(e, x, y) {
            (e.originalEvent || e).preventDefault();
            el._drag.x = x;
            el._drag.y = y;
            el._drag.id = e.identifier;
            !drag.length && Snap.mousemove(dragMove).mouseup(dragUp);
            drag.push({
              el: el,
              move_scope: move_scope,
              start_scope: start_scope,
              end_scope: end_scope
            });
            onstart && eve.on("snap.drag.start." + el.id, onstart);
            onmove && eve.on("snap.drag.move." + el.id, onmove);
            onend && eve.on("snap.drag.end." + el.id, onend);
            eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
          }
          function init(e, x, y) {
            eve("snap.draginit." + el.id, el, e, x, y);
          }
          eve.on("snap.draginit." + el.id, start);
          el._drag = {};
          draggable.push({
            el: el,
            start: start,
            init: init
          });
          el.mousedown(init);
          return el;
        };
        elproto.undrag = function() {
          var i = draggable.length;
          while (i--)
            if (draggable[i].el == this) {
              this.unmousedown(draggable[i].init);
              draggable.splice(i, 1);
              eve.unbind("snap.drag.*." + this.id);
              eve.unbind("snap.draginit." + this.id);
            }
          !draggable.length && Snap.unmousemove(dragMove).unmouseup(dragUp);
          return this;
        };
      });
      Snap.plugin(function(Snap, Element, Paper, glob) {
        var elproto = Element.prototype,
            pproto = Paper.prototype,
            rgurl = /^\s*url\((.+)\)/,
            Str = String,
            $ = Snap._.$;
        Snap.filter = {};
        pproto.filter = function(filstr) {
          var paper = this;
          if (paper.type != "svg") {
            paper = paper.paper;
          }
          var f = Snap.parse(Str(filstr)),
              id = Snap._.id(),
              width = paper.node.offsetWidth,
              height = paper.node.offsetHeight,
              filter = $("filter");
          $(filter, {
            id: id,
            filterUnits: "userSpaceOnUse"
          });
          filter.appendChild(f.node);
          paper.defs.appendChild(filter);
          return new Element(filter);
        };
        eve.on("snap.util.getattr.filter", function() {
          eve.stop();
          var p = $(this.node, "filter");
          if (p) {
            var match = Str(p).match(rgurl);
            return match && Snap.select(match[1]);
          }
        });
        eve.on("snap.util.attr.filter", function(value) {
          if (value instanceof Element && value.type == "filter") {
            eve.stop();
            var id = value.node.id;
            if (!id) {
              $(value.node, {id: value.id});
              id = value.id;
            }
            $(this.node, {filter: Snap.url(id)});
          }
          if (!value || value == "none") {
            eve.stop();
            this.node.removeAttribute("filter");
          }
        });
        Snap.filter.blur = function(x, y) {
          if (x == null) {
            x = 2;
          }
          var def = y == null ? x : [x, y];
          return Snap.format('\<feGaussianBlur stdDeviation="{def}"/>', {def: def});
        };
        Snap.filter.blur.toString = function() {
          return this();
        };
        Snap.filter.shadow = function(dx, dy, blur, color, opacity) {
          if (typeof blur == "string") {
            color = blur;
            opacity = color;
            blur = 4;
          }
          if (typeof color != "string") {
            opacity = color;
            color = "#000";
          }
          color = color || "#000";
          if (blur == null) {
            blur = 4;
          }
          if (opacity == null) {
            opacity = 1;
          }
          if (dx == null) {
            dx = 0;
            dy = 2;
          }
          if (dy == null) {
            dy = dx;
          }
          color = Snap.color(color);
          return Snap.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
            color: color,
            dx: dx,
            dy: dy,
            blur: blur,
            opacity: opacity
          });
        };
        Snap.filter.shadow.toString = function() {
          return this();
        };
        Snap.filter.grayscale = function(amount) {
          if (amount == null) {
            amount = 1;
          }
          return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
            a: 0.2126 + 0.7874 * (1 - amount),
            b: 0.7152 - 0.7152 * (1 - amount),
            c: 0.0722 - 0.0722 * (1 - amount),
            d: 0.2126 - 0.2126 * (1 - amount),
            e: 0.7152 + 0.2848 * (1 - amount),
            f: 0.0722 - 0.0722 * (1 - amount),
            g: 0.2126 - 0.2126 * (1 - amount),
            h: 0.0722 + 0.9278 * (1 - amount)
          });
        };
        Snap.filter.grayscale.toString = function() {
          return this();
        };
        Snap.filter.sepia = function(amount) {
          if (amount == null) {
            amount = 1;
          }
          return Snap.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
            a: 0.393 + 0.607 * (1 - amount),
            b: 0.769 - 0.769 * (1 - amount),
            c: 0.189 - 0.189 * (1 - amount),
            d: 0.349 - 0.349 * (1 - amount),
            e: 0.686 + 0.314 * (1 - amount),
            f: 0.168 - 0.168 * (1 - amount),
            g: 0.272 - 0.272 * (1 - amount),
            h: 0.534 - 0.534 * (1 - amount),
            i: 0.131 + 0.869 * (1 - amount)
          });
        };
        Snap.filter.sepia.toString = function() {
          return this();
        };
        Snap.filter.saturate = function(amount) {
          if (amount == null) {
            amount = 1;
          }
          return Snap.format('<feColorMatrix type="saturate" values="{amount}"/>', {amount: 1 - amount});
        };
        Snap.filter.saturate.toString = function() {
          return this();
        };
        Snap.filter.hueRotate = function(angle) {
          angle = angle || 0;
          return Snap.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {angle: angle});
        };
        Snap.filter.hueRotate.toString = function() {
          return this();
        };
        Snap.filter.invert = function(amount) {
          if (amount == null) {
            amount = 1;
          }
          return Snap.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: 1 - amount
          });
        };
        Snap.filter.invert.toString = function() {
          return this();
        };
        Snap.filter.brightness = function(amount) {
          if (amount == null) {
            amount = 1;
          }
          return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {amount: amount});
        };
        Snap.filter.brightness.toString = function() {
          return this();
        };
        Snap.filter.contrast = function(amount) {
          if (amount == null) {
            amount = 1;
          }
          return Snap.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
            amount: amount,
            amount2: .5 - amount / 2
          });
        };
        Snap.filter.contrast.toString = function() {
          return this();
        };
      });
      Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
        var box = Snap._.box,
            is = Snap.is,
            firstLetter = /^[^a-z]*([tbmlrc])/i,
            toString = function() {
              return "T" + this.dx + "," + this.dy;
            };
        Element.prototype.getAlign = function(el, way) {
          if (way == null && is(el, "string")) {
            way = el;
            el = null;
          }
          el = el || this.paper;
          var bx = el.getBBox ? el.getBBox() : box(el),
              bb = this.getBBox(),
              out = {};
          way = way && way.match(firstLetter);
          way = way ? way[1].toLowerCase() : "c";
          switch (way) {
            case "t":
              out.dx = 0;
              out.dy = bx.y - bb.y;
              break;
            case "b":
              out.dx = 0;
              out.dy = bx.y2 - bb.y2;
              break;
            case "m":
              out.dx = 0;
              out.dy = bx.cy - bb.cy;
              break;
            case "l":
              out.dx = bx.x - bb.x;
              out.dy = 0;
              break;
            case "r":
              out.dx = bx.x2 - bb.x2;
              out.dy = 0;
              break;
            default:
              out.dx = bx.cx - bb.cx;
              out.dy = 0;
              break;
          }
          out.toString = toString;
          return out;
        };
        Element.prototype.align = function(el, way) {
          return this.transform("..." + this.getAlign(el, way));
        };
      });
      return Snap;
    }));
  })($__require('a'));
  return module.exports;
});

$__System.registerDynamic("c", ["b"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('b');
  return module.exports;
});

$__System.registerDynamic("d", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  SVGElement.prototype.getTransformToElement = SVGElement.prototype.getTransformToElement || function(elem) {
    return elem.getScreenCTM().inverse().multiply(this.getScreenCTM());
  };
  (function(Snap) {
    Snap.plugin(function(Snap, Element, Paper, glob, Fragment) {
      var snapsvgzpd = {
        uniqueIdPrefix: 'snapsvg-zpd-',
        dataStore: {},
        enable: true
      };
      var rootSvgObject;
      var _removeNodeKeepChildren = function removeNodeKeepChildren(node) {
        if (!node.parentNode) {
          return;
        }
        while (node.firstChild) {
          node.parentNode.insertBefore(node.firstChild, node);
        }
        node.parentNode.removeChild(node);
      };
      var _increaseDecreaseOrNumber = function increaseDecreaseOrNumber(defaultValue, input) {
        if (input === undefined) {
          return parseInt(defaultValue);
        } else if (input[0] == '+') {
          return defaultValue + parseInt(input.split('+')[1]);
        } else if (input[0] == '-') {
          return defaultValue - parseInt(input.split('-')[1]);
        } else {
          return parseInt(input);
        }
      };
      var _setCTM = function setCTM(element, matrix, threshold) {
        if (threshold && typeof threshold === 'object') {
          var oldMatrix = Snap(element).transform().globalMatrix;
          if (matrix.a < oldMatrix.a && matrix.a < threshold[0]) {
            return;
          } else if (matrix.a > oldMatrix.a && matrix.a > threshold[1]) {
            return;
          }
          if (matrix.d < oldMatrix.d && matrix.d < threshold[0]) {
            return;
          } else if (matrix.d > oldMatrix.d && matrix.d > threshold[1]) {
            return;
          }
        }
        var s = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
        element.setAttribute("transform", s);
      };
      var _dumpMatrix = function dumpMatrix(matrix) {
        var s = "[ " + matrix.a + ", " + matrix.c + ", " + matrix.e + "\n  " + matrix.b + ", " + matrix.d + ", " + matrix.f + "\n  0, 0, 1 ]";
        return s;
      };
      var _findPos = function findPos(obj) {
        var curleft = curtop = 0;
        if (obj.offsetParent) {
          do {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
          } while (obj = obj.offsetParent);
        }
        return [curleft, curtop];
      };
      var _getEventPoint = function getEventPoint(event, svgNode) {
        var p = svgNode.node.createSVGPoint(),
            svgPos = _findPos(svgNode.node);
        p.x = event.clientX - svgPos[0];
        p.y = event.clientY - svgPos[1];
        return p;
      };
      var _getSvgMatrixAsString = function _getMatrixAsString(matrix) {
        return 'matrix(' + matrix.a + ',' + matrix.b + ',' + matrix.c + ',' + matrix.d + ',' + matrix.e + ',' + matrix.f + ')';
      };
      var _initZpdElement = function initAndGetZpdElement(svgObject, options) {
        rootSvgObject = svgObject.node;
        var rootChildNodes = svgObject.node.childNodes;
        var gElement = svgObject.g();
        var gNode = gElement.node;
        gNode.id = snapsvgzpd.uniqueIdPrefix + svgObject.id;
        if (options.load && typeof options.load === 'object') {
          var matrix = options.load;
          var matrixString = "matrix(" + matrix.a + "," + matrix.b + "," + matrix.c + "," + matrix.d + "," + matrix.e + "," + matrix.f + ")";
          gElement.transform(matrixString);
        } else {
          gElement.transform('matrix');
        }
        var index = 0;
        var noOfChildNodes = rootChildNodes.length - 1;
        while (index < noOfChildNodes) {
          gNode.appendChild(rootChildNodes[0]);
          index += 1;
        }
        var data = {
          svg: svgObject,
          root: svgObject.node,
          state: 'none',
          stateTarget: null,
          stateOrigin: null,
          stateTf: null
        };
        var item = {
          "element": gElement,
          "data": data,
          "options": options
        };
        item.handlerFunctions = _getHandlerFunctions(item);
        return item;
      };
      var _getHandlerFunctions = function getHandlerFunctions(zpdElement) {
        var handleMouseUp = function handleMouseUp(event) {
          if (event.preventDefault) {
            event.preventDefault();
          }
          if (!snapsvgzpd.enable)
            return;
          event.returnValue = false;
          if (zpdElement.data.state == 'pan' || zpdElement.data.state == 'drag') {
            zpdElement.data.state = '';
          }
        };
        var handleMouseDown = function handleMouseDown(event) {
          if (event.preventDefault) {
            event.preventDefault();
          }
          if (!snapsvgzpd.enable)
            return;
          event.returnValue = false;
          var g = zpdElement.element.node;
          if (event.target.tagName == "svg" || !zpdElement.options.drag) {
            zpdElement.data.state = 'pan';
            zpdElement.data.stateTf = g.getCTM().inverse();
            zpdElement.data.stateOrigin = _getEventPoint(event, zpdElement.data.svg).matrixTransform(zpdElement.data.stateTf);
          } else {
            zpdElement.data.state = 'drag';
            zpdElement.data.stateTarget = event.target;
            zpdElement.data.stateTf = g.getCTM().inverse();
            zpdElement.data.stateOrigin = _getEventPoint(event, zpdElement.data.svg).matrixTransform(zpdElement.data.stateTf);
          }
        };
        var handleMouseMove = function handleMouseMove(event) {
          if (event.preventDefault) {
            event.preventDefault();
          }
          if (!snapsvgzpd.enable)
            return;
          event.returnValue = false;
          var g = zpdElement.element.node;
          if (zpdElement.data.state == 'pan' && zpdElement.options.pan) {
            var p = _getEventPoint(event, zpdElement.data.svg).matrixTransform(zpdElement.data.stateTf);
            _setCTM(g, zpdElement.data.stateTf.inverse().translate(p.x - zpdElement.data.stateOrigin.x, p.y - zpdElement.data.stateOrigin.y), zpdElement.options.zoomThreshold);
          } else if (zpdElement.data.state == 'drag' && zpdElement.options.drag) {
            var dragPoint = _getEventPoint(event, zpdElement.data.svg).matrixTransform(g.getCTM().inverse());
            _setCTM(zpdElement.data.stateTarget, zpdElement.data.root.createSVGMatrix().translate(dragPoint.x - zpdElement.data.stateOrigin.x, dragPoint.y - zpdElement.data.stateOrigin.y).multiply(g.getCTM().inverse()).multiply(zpdElement.data.stateTarget.getCTM()), zpdElement.options.zoomThreshold);
            zpdElement.data.stateOrigin = dragPoint;
          }
        };
        var handleMouseWheel = function handleMouseWheel(event) {
          if (!zpdElement.options.zoom) {
            return;
          }
          if (event.preventDefault) {
            event.preventDefault();
          }
          if (!snapsvgzpd.enable)
            return;
          event.returnValue = false;
          var delta = 0;
          if (event.wheelDelta) {
            delta = event.wheelDelta / 360;
          } else {
            delta = event.detail / -9;
          }
          var z = Math.pow(1 + zpdElement.options.zoomScale, delta);
          var g = zpdElement.element.node;
          var p = _getEventPoint(event, zpdElement.data.svg);
          p = p.matrixTransform(g.getCTM().inverse());
          var k = zpdElement.data.root.createSVGMatrix().translate(p.x, p.y).scale(z).translate(-p.x, -p.y);
          _setCTM(g, g.getCTM().multiply(k), zpdElement.options.zoomThreshold);
          if (typeof(stateTf) == 'undefined') {
            zpdElement.data.stateTf = g.getCTM().inverse();
          }
          zpdElement.data.stateTf = zpdElement.data.stateTf.multiply(k.inverse());
        };
        return {
          "mouseUp": handleMouseUp,
          "mouseDown": handleMouseDown,
          "mouseMove": handleMouseMove,
          "mouseWheel": handleMouseWheel
        };
      };
      var _setupHandlers = function setupHandlers(svgElement, handlerFunctions) {
        if ('onmouseup' in document.documentElement) {
          svgElement.addEventListener('mouseup', handlerFunctions.mouseUp, false);
          svgElement.addEventListener('mousedown', handlerFunctions.mouseDown, false);
          svgElement.addEventListener('mousemove', handlerFunctions.mouseMove, false);
          if (navigator.userAgent.toLowerCase().indexOf('webkit') >= 0 || navigator.userAgent.toLowerCase().indexOf('trident') >= 0) {
            svgElement.addEventListener('mousewheel', handlerFunctions.mouseWheel, false);
          } else {
            svgElement.addEventListener('DOMMouseScroll', handlerFunctions.mouseWheel, false);
          }
        }
      };
      var _tearDownHandlers = function tearDownHandlers(svgElement, handlerFunctions) {
        svgElement.removeEventListener('mouseup', handlerFunctions.mouseUp, false);
        svgElement.removeEventListener('mousedown', handlerFunctions.mouseDown, false);
        svgElement.removeEventListener('mousemove', handlerFunctions.mouseMove, false);
        if (navigator.userAgent.toLowerCase().indexOf('webkit') >= 0 || navigator.userAgent.toLowerCase().indexOf('trident') >= 0) {
          svgElement.removeEventListener('mousewheel', handlerFunctions.mouseWheel, false);
        } else {
          svgElement.removeEventListener('DOMMouseScroll', handlerFunctions.mouseWheel, false);
        }
      };
      var zpd = function(options, callbackFunc) {
        var self = this;
        var zpdOptions = {
          pan: true,
          zoom: true,
          drag: false,
          zoomScale: 0.2,
          zoomThreshold: null
        };
        var situation,
            situationState = {
              init: 'init',
              reinit: 'reinit',
              destroy: 'destroy',
              save: 'save',
              origin: 'origin',
              callback: 'callback',
              toggle: 'toggle'
            };
        var zpdElement = null;
        if (typeof options === 'function') {
          callbackFunc = options;
          situation = situationState.callback;
        }
        if (snapsvgzpd.dataStore.hasOwnProperty(self.id)) {
          zpdElement = snapsvgzpd.dataStore[self.id];
          if (typeof options === 'object') {
            for (var prop in options) {
              zpdElement.options[prop] = options[prop];
            }
            situation = situationState.reinit;
          } else if (typeof options === 'string') {
            situation = options;
          }
        } else {
          if (typeof options === 'object') {
            for (var prop2 in options) {
              zpdOptions[prop2] = options[prop2];
            }
            situation = situationState.init;
          } else if (typeof options === 'string') {
            situation = options;
          }
          zpdElement = _initZpdElement(self, zpdOptions);
          _setupHandlers(self.node, zpdElement.handlerFunctions);
          snapsvgzpd.dataStore[self.id] = zpdElement;
        }
        switch (situation) {
          case situationState.init:
          case situationState.reinit:
          case situationState.callback:
            if (callbackFunc) {
              callbackFunc(null, zpdElement);
            }
            return;
          case situationState.destroy:
            _tearDownHandlers(self.node, zpdElement.handlerFunctions);
            _removeNodeKeepChildren(self.node.firstChild);
            delete snapsvgzpd.dataStore[self.id];
            if (callbackFunc) {
              callbackFunc(null, zpdElement);
            }
            return;
          case situationState.save:
            var g = document.getElementById(snapsvgzpd.uniqueIdPrefix + self.id);
            var returnValue = g.getCTM();
            if (callbackFunc) {
              callbackFunc(null, returnValue);
            }
            return returnValue;
          case situationState.origin:
            self.zoomTo(1, 1000);
            if (callbackFunc) {
              callbackFunc(null, zpdElement);
            }
            return;
          case situationState.toggle:
            snapsvgzpd.enable = !snapsvgzpd.enable;
            if (callbackFunc) {
              callbackFunc(null, snapsvgzpd.enable);
            }
            return;
        }
      };
      var zoomTo = function(zoom, interval, ease, callbackFunction) {
        if (zoom < 0 || typeof zoom !== 'number') {
          console.error('zoomTo(arg) should be a number and greater than 0');
          return;
        }
        if (typeof interval !== 'number') {
          interval = 3000;
        }
        var self = this;
        if (snapsvgzpd.dataStore.hasOwnProperty(self.id)) {
          var zpdElement = snapsvgzpd.dataStore[self.id].element;
          var currentTransformMatrix = zpdElement.node.getTransformToElement(rootSvgObject);
          var currentZoom = currentTransformMatrix.a;
          var originX = currentTransformMatrix.e;
          var originY = currentTransformMatrix.f;
          var boundingBox = zpdElement.getBBox();
          var deltaX = parseFloat(boundingBox.width) / 2.0;
          var deltaY = parseFloat(boundingBox.height) / 2.0;
          Snap.animate(currentZoom, zoom, function(value) {
            var deltaZoom = value / currentZoom;
            if (value !== currentZoom) {
              currentTransformMatrix.e = originX - ((deltaX * deltaZoom - deltaX));
              currentTransformMatrix.f = originY - ((deltaY * deltaZoom - deltaY));
              currentTransformMatrix.a = value;
              currentTransformMatrix.d = value;
              zpdElement.node.setAttribute('transform', _getSvgMatrixAsString(currentTransformMatrix));
            }
          }, interval, ease, callbackFunction);
        }
      };
      var panTo = function(x, y, interval, ease, cb) {
        var self = this;
        if (snapsvgzpd.dataStore.hasOwnProperty(self.id)) {
          var zpdElement = snapsvgzpd.dataStore[self.id].element;
          var gMatrix = zpdElement.node.getCTM(),
              matrixX = _increaseDecreaseOrNumber(gMatrix.e, x),
              matrixY = _increaseDecreaseOrNumber(gMatrix.f, y),
              matrixString = "matrix(" + gMatrix.a + "," + gMatrix.b + "," + gMatrix.c + "," + gMatrix.d + "," + matrixX + "," + matrixY + ")";
          zpdElement.animate({transform: matrixString}, interval || 10, ease || null, function() {
            if (cb) {
              cb(null, zpdElement);
            }
          });
        }
      };
      var rotate = function(a, x, y, interval, ease, cb) {
        var self = this;
        if (snapsvgzpd.dataStore.hasOwnProperty(self.id)) {
          var zpdElement = snapsvgzpd.dataStore[self.id].element;
          var gMatrix = zpdElement.node.getCTM(),
              matrixString = "matrix(" + gMatrix.a + "," + gMatrix.b + "," + gMatrix.c + "," + gMatrix.d + "," + gMatrix.e + "," + gMatrix.f + ")";
          if (!x || typeof x !== 'number') {
            x = self.node.offsetWidth / 2;
          }
          if (!y || typeof y !== 'number') {
            y = self.node.offsetHeight / 2;
          }
          zpdElement.animate({transform: new Snap.Matrix(gMatrix).rotate(a, x, y)}, interval || 10, ease || null, function() {
            if (cb) {
              cb(null, zpdElement);
            }
          });
        }
      };
      Paper.prototype.zpd = zpd;
      Paper.prototype.zoomTo = zoomTo;
      Paper.prototype.panTo = panTo;
      Paper.prototype.rotate = rotate;
    });
  })(Snap);
  return module.exports;
});

$__System.registerDynamic("e", ["d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('d');
  return module.exports;
});

(function() {
var define = $__System.amdDefine;
define("1", ["require", "exports", "3", "4", "c", "e"], function(require, exports, org_chart_config_1, connector_type_1) {
  "use strict";
  var OrgChartSvg = (function() {
    function OrgChartSvg(config) {
      this.config = config;
      this.levels = [];
      this.lineGroups = {};
      this.linesGroupIdPrefix = 'orgchartLinesGroup';
      this.lineParentIdAttribute = 'orgchart-line-parent-id';
      this.lineToAttr = 'orgchart-line-to';
      this.lineHorizontal = 'orgchart-line-horizontal';
      this.nodesGroupIdPrefix = 'orgchartGroup';
      this.nodeIdPrefix = 'orgchartNode';
      this.overlayGroupId = 'orgchartOverlay';
      this.animationsLeft = 0;
      var self = this;
      if (!config) {
        this.initDefaultConfig();
      }
      this.snap = Snap('#orgChartSvg');
      this.analyzeTreeLevels(this.config.nodes);
      this.calcChildren(this.config.nodes);
      this.render();
      this.snap.zpd({
        zoom: true,
        pan: true,
        zoomScale: 0.3,
        zoomThreshold: [0.3, 3]
      });
    }
    OrgChartSvg.prototype.initDefaultConfig = function() {
      this.config = org_chart_config_1.OrgChartConfig.defaultConfig();
    };
    OrgChartSvg.prototype.clear = function() {};
    OrgChartSvg.prototype.analyzeTreeLevels = function(node, level) {
      if (level === void 0) {
        level = 0;
      }
      this.createLevelIfNotExists(level);
      level++;
      if (this.isNodeTipOver(node)) {
        return this.calcTipOverChildren(node, level, null, true);
      }
      if (node.children !== null && node.children.length > 0) {
        for (var i = 0; i < node.children.length; i++) {
          this.analyzeTreeLevels(node.children[i], level);
        }
      }
    };
    OrgChartSvg.prototype.isNodeTipOver = function(node) {
      return node.tipOverChildren || node.children.length >= this.config.tipOverOptions.tipOverChildrenCount;
    };
    OrgChartSvg.prototype.createPlaceholder = function(levelNode, level) {
      var placeholderNode = {};
      placeholderNode.width = levelNode.width;
      placeholderNode.height = this.config.nodeOptions.height;
      placeholderNode.containerWidth = levelNode.containerWidth;
      placeholderNode.isPlaceholder = true;
      placeholderNode.level = level;
      return placeholderNode;
    };
    OrgChartSvg.prototype.calcTipOverChildren = function(node, level, parentNode, justAnalyze) {
      if (level === void 0) {
        level = 0;
      }
      if (parentNode === void 0) {
        parentNode = null;
      }
      if (justAnalyze === void 0) {
        justAnalyze = false;
      }
      var containerWidth = 0;
      var nodeIndexInLevel = 0;
      var levelNode = null;
      if (!justAnalyze) {
        levelNode = this.buildLevelNode(node, level, true);
        if (parentNode && parentNode !== null) {
          parentNode.childNodes.push(levelNode);
        }
      }
      level++;
      if (node.children !== null && node.children.length > 0) {
        var columnWidths = [];
        var childIndex = 0;
        var columnIndex = 0;
        var lineIndex = 0;
        var linesCount;
        var tipOverPlaceholdersCount;
        var columns = Math.floor(node.children.length / this.config.tipOverOptions.maxColumnHeight);
        columns += node.children.length % this.config.tipOverOptions.maxColumnHeight > 0 ? 1 : 0;
        linesCount = Math.ceil(node.children.length / columns);
        tipOverPlaceholdersCount = columns * linesCount - node.children.length;
        if (justAnalyze) {
          for (var i = 0; i < linesCount; i++) {
            this.createLevelIfNotExists(level);
            level++;
          }
        } else {
          for (var c = 0; c < columns; c++) {
            columnWidths[c] = 0;
          }
          levelNode.tipOverParent = true;
          levelNode.tipOverColumns = columns;
          levelNode.parentNode = parentNode;
          for (var i = 0; i < node.children.length; i++) {
            var childLevelNode = this.buildLevelNode(node.children[childIndex], level, true);
            childLevelNode.tipOverChild = true;
            childLevelNode.tipOverColumns = columns;
            childLevelNode.tipOverColumnIndex = columnIndex;
            childLevelNode.tipOverLineIndex = lineIndex;
            childLevelNode.tipOverLinesCount = linesCount;
            childLevelNode.tipOverLastChild = i === node.children.length - 1;
            childLevelNode.tipOverFirstChild = i === 0;
            childLevelNode.parentNode = levelNode;
            childLevelNode.tipOverHasNodeBelow = i < (node.children.length - columns);
            var width = this.getSingleNodeWidth(childLevelNode);
            columnWidths[columnIndex] = Math.max(columnWidths[columnIndex], width);
            childLevelNode.containerWidth = width + this.config.nodeOptions.gapH * 2;
            levelNode.childNodes.push(childLevelNode);
            childIndex++;
            columnIndex++;
            if (columnIndex == columns) {
              columnIndex = 0;
              level++;
              lineIndex++;
            }
          }
          this.generatePlaceholdersForTipOverTree(level, tipOverPlaceholdersCount, columns);
          levelNode.tipOverParentLastColumnWidth = columnWidths[columnWidths.length - 1];
          containerWidth = this.getTipOverTreeWidth(columnWidths);
          levelNode.containerWidth = containerWidth;
        }
      } else {
        if (justAnalyze) {
          this.createLevelIfNotExists(level);
        } else {
          containerWidth = this.getSingleNodeWidth(levelNode) + this.config.nodeOptions.gapH * 2;
          levelNode.containerWidth = containerWidth;
          this.generateNodePlaceholders(levelNode);
        }
      }
      return containerWidth;
    };
    OrgChartSvg.prototype.buildLevelNode = function(node, level, addNode) {
      if (addNode === void 0) {
        addNode = false;
      }
      var levelNode = node;
      levelNode.width = this.getSingleNodeWidth(levelNode);
      levelNode.height = this.getSingleNodeHeight(levelNode);
      levelNode.containerWidth = 0;
      levelNode.level = level;
      levelNode.childNodes = [];
      if (addNode) {
        try {
          this.createLevelIfNotExists(level);
          levelNode.nodeIndexInLevel = this.levels[level].nodes.length;
          this.levels[level].nodes.push(levelNode);
        } catch (e) {
          console.error('Level ' + level + ' doesn\'t exist yet.\n' + e);
        }
      }
      return levelNode;
    };
    OrgChartSvg.prototype.getTipOverTreeWidth = function(columns) {
      var containerWidth = 0,
          gapsWidth = this.config.nodeOptions.gapH * this.getGapsCountForTipOverColumns(columns.length);
      for (var c = 0; c < columns.length; c++) {
        containerWidth += columns[c];
      }
      return containerWidth + gapsWidth;
    };
    OrgChartSvg.prototype.getGapsCountForTipOverColumns = function(columnsCount) {
      return (columnsCount - 1) * 2 + 2;
    };
    OrgChartSvg.prototype.createLevelIfNotExists = function(level) {
      if (this.levels.length < level + 1) {
        this.levels.push({
          nodes: [],
          tipOver: false,
          level: level
        });
      }
    };
    OrgChartSvg.prototype.calcChildren = function(node, level, parentNode) {
      if (level === void 0) {
        level = 0;
      }
      if (parentNode === void 0) {
        parentNode = null;
      }
      var containerWidth = 0,
          levelNode;
      if (this.isNodeTipOver(node)) {
        return this.calcTipOverChildren(node, level, parentNode);
      }
      levelNode = this.buildLevelNode(node, level, true);
      levelNode.parentNode = parentNode;
      if (parentNode && parentNode !== null) {
        levelNode.isFirstChildOfParent = parentNode.childNodes.length === 0;
        parentNode.childNodes.push(levelNode);
      }
      level++;
      if (node.children !== null && node.children.length > 0) {
        for (var i = 0; i < node.children.length; i++) {
          containerWidth += this.calcChildren(node.children[i], level, levelNode);
        }
        levelNode.containerWidth = containerWidth;
      } else {
        containerWidth = this.getSingleNodeWidth(levelNode) + this.config.nodeOptions.gapH * 2;
        levelNode.containerWidth = containerWidth;
        this.generateNodePlaceholders(levelNode);
      }
      return containerWidth;
    };
    OrgChartSvg.prototype.generateNodePlaceholders = function(levelNode) {
      var iterations = this.levels.length - levelNode.level - 1;
      for (var i = 1; i <= iterations; i++) {
        var currentLevel = levelNode.level + i;
        var placeholderNode = this.createPlaceholder(levelNode, currentLevel);
        this.levels[currentLevel].nodes.push(placeholderNode);
      }
      return iterations;
    };
    OrgChartSvg.prototype.generatePlaceholdersForTipOverTree = function(level, count, columnsCount) {
      if (count > 0) {
        var prevLevelNodes = this.levels[level - 1].nodes;
        for (var i = 0; i < count; i++) {
          var levelNodeAbove = prevLevelNodes[prevLevelNodes.length - count + i];
          var placeholderNode = this.createPlaceholder(levelNodeAbove, level);
          this.levels[level].nodes.push(placeholderNode);
        }
      } else {
        level--;
      }
      var levels = this.levels.length - level - 1;
      for (var i = 1; i <= levels; i++) {
        level++;
        for (var x = 0; x < columnsCount; x++) {
          var levelNodeAbove = this.levels[level - 1].nodes[x];
          var placeholderNode = this.createPlaceholder(levelNodeAbove, i);
          this.levels[level].nodes.push(placeholderNode);
        }
      }
    };
    OrgChartSvg.prototype.getSingleNodeWidth = function(node) {
      return this.config.nodeOptions.width;
    };
    OrgChartSvg.prototype.getSingleNodeHeight = function(node) {
      return this.config.nodeOptions.height;
    };
    OrgChartSvg.prototype.render = function() {
      var margin = this.config.nodeOptions.margin;
      var templatesFragment = '';
      var parsedFragment;
      var left = 10;
      var top = 10;
      var gapX = this.config.nodeOptions.gapH;
      var gapY = this.config.nodeOptions.gapV;
      var hLineX1,
          hLineX2,
          hLineY,
          hLineNodes = 0,
          nextParent = null,
          currentNodeParentId = null,
          firstNodeParentId = null;
      var halfLineWidth = this.config.connectorOptions.strokeWidth / 2;
      var horizontalLineStartId = '';
      templatesFragment = this.fireEventBeforeRender(templatesFragment);
      for (var levelIdx = 0; levelIdx < this.levels.length; levelIdx++) {
        var level = this.levels[levelIdx];
        var lastLevel = levelIdx === this.levels.length - 1;
        nextParent = null;
        currentNodeParentId = null;
        firstNodeParentId = null;
        hLineNodes = 0;
        top = levelIdx * (this.config.nodeOptions.height + gapY) + 10;
        left = 10;
        for (var i = 0; i < level.nodes.length; i++) {
          var node = level.nodes[i];
          var marginLeft = (node.containerWidth - node.width) / 2;
          var x = left + marginLeft;
          var y = top;
          if (i === 0 && levelIdx === 0) {
            this.rootNodePosition = {
              x: x,
              y: y,
              width: node.containerWidth,
              height: node.height
            };
          }
          var onRenderBoxArgs = {};
          onRenderBoxArgs.x = x;
          onRenderBoxArgs.y = y;
          onRenderBoxArgs.width = node.width;
          onRenderBoxArgs.height = node.height;
          onRenderBoxArgs.node = this.buildRenderedChartNode(node, levelIdx, i);
          onRenderBoxArgs.paper = this.snap;
          onRenderBoxArgs.config = this.config;
          if (!node.tipOverChild) {
            if ((i > 0 && level.nodes[i - 1].tipOverChild) || node.isFirstChildOfParent) {
              hLineNodes = 0;
            }
            if (hLineNodes === 0) {
              hLineX1 = x + node.width / 2;
              hLineY = y - gapY / 2;
              horizontalLineStartId = node.id;
              firstNodeParentId = node.parentNode !== null && node.parentNode !== undefined ? node.parentNode.id : null;
            }
            currentNodeParentId = node.parentNode !== null && node.parentNode !== undefined ? node.parentNode.id : null;
            hLineX2 = x + node.width / 2;
            if (i + 1 < level.nodes.length) {
              nextParent = level.nodes[i + 1];
            } else {
              nextParent = null;
            }
            if (!node.isPlaceholder) {
              hLineNodes++;
              this.fireEventBoxRender(onRenderBoxArgs, node);
              if (levelIdx !== 0) {
                this.renderConnectorLine(x + node.width / 2, y - gapY / 2, x + node.width / 2, y - margin.top, node, connector_type_1.ConnectorType.up);
              }
              if (node.children !== null && node.children.length > 0) {
                this.renderConnectorLine(x + node.width / 2, y + node.height + gapY / 2, x + node.width / 2, y + node.height + margin.bottom, node, connector_type_1.ConnectorType.down);
              }
              if (levelIdx > 0) {
                if (hLineNodes > 1) {
                  if ((nextParent === null || (node.parentId !== nextParent.parentId))) {
                    var hInfo = '';
                    if (horizontalLineStartId !== '') {
                      hInfo = horizontalLineStartId + '-' + node.id;
                    }
                    this.renderConnectorLine(hLineX1 - halfLineWidth, hLineY, hLineX2 + halfLineWidth, hLineY, node, connector_type_1.ConnectorType.horizontal, hInfo);
                    hLineNodes = 0;
                  }
                }
              }
            } else {
              hLineNodes = 0;
              if (this.config.debugOptions.showPlaceholderBoxes) {
                this.fireEventBoxRender(onRenderBoxArgs, node);
              }
            }
            left += node.containerWidth;
          } else {
            var evenColumn = (node.tipOverColumnIndex + 1) % 2 === 0;
            var lastColumn = node.tipOverColumnIndex === node.tipOverColumns - 1;
            var firstLine = node.tipOverLineIndex === 0;
            var lastLine = node.tipOverLineIndex === node.tipOverLinesCount - 1;
            if (node.tipOverFirstChild && node.tipOverColumns > 2) {
              var x1 = x + node.width + gapX - halfLineWidth;
              var x2 = x + node.parentNode.containerWidth - node.parentNode.tipOverParentLastColumnWidth - gapX * 3 + halfLineWidth;
              var lineY = y - gapY / 2;
              this.renderConnectorLine(x1, lineY, x2, lineY, node, connector_type_1.ConnectorType.horizontalTipOver);
            } else if (node.tipOverFirstChild && node.tipOverColumns === 1) {
              var x1 = x - gapX - halfLineWidth;
              var x2 = x + node.parentNode.width / 2 + halfLineWidth;
              var lineY = y - gapY / 2;
              this.renderConnectorLine(x1, lineY, x2, lineY, node, connector_type_1.ConnectorType.horizontalSingleTipOver);
            }
            left += node.containerWidth;
            if (!node.isPlaceholder) {
              hLineNodes++;
              this.fireEventBoxRender(onRenderBoxArgs, node);
              if (levelIdx !== 0 && !lastColumn && !evenColumn) {
                this.renderConnectorLine(x + node.width + gapX + halfLineWidth, y + node.height / 2, x + node.width + margin.right, y + node.height / 2, node, connector_type_1.ConnectorType.right);
              }
              if ((node.tipOverColumnIndex > 0 && evenColumn) || lastColumn) {
                this.renderConnectorLine(x - gapX - halfLineWidth, y + node.height / 2, x - margin.left, y + node.height / 2, node, connector_type_1.ConnectorType.left);
                if (firstLine) {
                  this.renderConnectorLine(x - gapX, y + node.height / 2, x - gapX, y - gapY / 2, node, connector_type_1.ConnectorType.leftUp);
                } else {
                  this.renderConnectorLine(x - gapX, y + node.height / 2, x - gapX, y - gapY, node, connector_type_1.ConnectorType.leftUp);
                }
              }
              if (node.tipOverLastChild && node.tipOverLinesCount > 1 && !evenColumn && node.tipOverColumns > 1 && node.tipOverColumnIndex < node.tipOverColumns - 1) {
                this.renderConnectorLine(x + node.width + gapX, y + node.height / 2, x + node.width + gapX, y - gapY, node, connector_type_1.ConnectorType.rightUp);
              }
              if (node.tipOverHasNodeBelow) {
                if ((!lastColumn && !evenColumn)) {
                  this.renderConnectorLine(x + node.width + gapX, y + node.height / 2, x + node.width + gapX, y + node.height, node, connector_type_1.ConnectorType.rightUp);
                } else if (lastColumn && node.tipOverColumns % 2 === 1) {
                  this.renderConnectorLine(x - gapX, y + node.height / 2, x - gapX, y + node.height, node, connector_type_1.ConnectorType.leftDown);
                }
              }
            } else {
              if (this.config.debugOptions.showPlaceholderBoxes) {
                this.fireEventBoxRender(onRenderBoxArgs, node);
              }
            }
          }
        }
      }
      if (this.levels.length > 0 && this.levels[0].nodes.length > 0) {
        var str = this.joinTemplatesFragments(this.levels[0].nodes[0], templatesFragment);
        parsedFragment = Snap.parse(str);
        this.snap.append(parsedFragment);
        this.attachOrgChartEvents();
      }
      this.hideOverlay();
    };
    OrgChartSvg.prototype.renderConnectorLine = function(x, y, x2, y2, node, connectorType, fromToHorizontal) {
      if (fromToHorizontal === void 0) {
        fromToHorizontal = null;
      }
      var params = {
        strokeWidth: this.config.connectorOptions.strokeWidth,
        stroke: this.config.connectorOptions.color
      };
      params[this.lineParentIdAttribute] = node.parentId;
      params[this.lineToAttr] = '';
      params['orgchart-line-type'] = connector_type_1.ConnectorType[connectorType];
      if (connectorType === connector_type_1.ConnectorType.horizontal) {
        params[this.lineHorizontal] = fromToHorizontal;
      }
      if (connectorType === connector_type_1.ConnectorType.left || connectorType === connector_type_1.ConnectorType.right || connectorType === connector_type_1.ConnectorType.up) {
        params[this.lineToAttr] = node.id;
      }
      var line = this.snap.line(x, y, x2, y2);
      line.attr(params);
      var id,
          parentId;
      var group;
      if (connectorType === connector_type_1.ConnectorType.down) {
        id = node.id;
        parentId = node.parentId ? node.parentId : null;
      } else {
        id = node.parentId;
        parentId = node.parentNode && node.parentNode.parentId ? node.parentNode.parentId : null;
      }
      group = this.lineGroups[id];
      if (!group) {
        group = this.snap.group().attr({id: this.linesGroupIdPrefix + id});
        this.lineGroups[id] = group;
        if (parentId !== null) {
          this.lineGroups[parentId].add(group);
        }
      }
      group.add(line);
    };
    OrgChartSvg.prototype.buildRenderedChartNode = function(node, level, index) {
      var renderedNode = {};
      renderedNode.id = node.id;
      renderedNode.parentId = node.parentId;
      renderedNode.data = node.data;
      renderedNode.tipOverChildren = node.tipOverChildren;
      renderedNode.children = node.children;
      renderedNode.isPlaceholder = node.isPlaceholder;
      renderedNode.rowIndex = level;
      renderedNode.columnIndex = index;
      return renderedNode;
    };
    OrgChartSvg.prototype.showOverlay = function() {};
    OrgChartSvg.prototype.hideOverlay = function() {};
    OrgChartSvg.prototype.joinTemplatesFragments = function(rootNode, fragment) {
      if (fragment === void 0) {
        fragment = '';
      }
      var childrenFragment = '';
      if (rootNode.childNodes !== null && rootNode.childNodes.length > 0) {
        for (var i = 0; i < rootNode.childNodes.length; i++) {
          childrenFragment = this.joinTemplatesFragments(rootNode.childNodes[i], childrenFragment);
        }
        childrenFragment = this.surroundWithColumnGroup(childrenFragment, rootNode);
      }
      return fragment + rootNode.representationString + childrenFragment;
    };
    OrgChartSvg.prototype.wrapTemplateInfoGroup = function(template, args) {
      var nodeInfo = [args.x, args.y, args.width, args.height, args.node.columnIndex, args.node.rowIndex];
      var group = '<g ' + 'id="' + this.nodeIdPrefix + args.node.id + '"' + 'class="' + this.config.nodeOptions.nodeClass + '" width="' + args.width + '" ' + 'height="' + args.height + '" ' + 'transform="translate(' + args.x + ', ' + args.y + ')" ' + this.config.nodeOptions.nodeAttribute + '="' + JSON.stringify(nodeInfo) + '" ' + '>' + template + '</g>';
      return group;
    };
    OrgChartSvg.prototype.surroundWithColumnGroup = function(fragment, parent) {
      var prefix = '',
          suffix = '';
      prefix = '<g id="' + this.nodesGroupIdPrefix + parent.id + '">';
      suffix = '</g>';
      return prefix + fragment + suffix;
    };
    OrgChartSvg.prototype.fireEventBeforeRender = function(templatesFragment) {
      if (this.config.onBeforeRender) {
        var onRenderArgs = {};
        onRenderArgs.paper = this.snap;
        onRenderArgs.config = this.config;
        var tpl = this.config.onBeforeRender(onRenderArgs);
        if (tpl && tpl !== null) {
          templatesFragment += tpl;
        }
      }
      return templatesFragment;
    };
    OrgChartSvg.prototype.fireEventBoxRender = function(onRenderBoxArgs, node) {
      if (this.config.onBoxRender) {
        var tpl = this.config.onBoxRender(onRenderBoxArgs);
        if (tpl !== undefined && tpl !== null) {
          node.representationString = this.wrapTemplateInfoGroup(tpl, onRenderBoxArgs);
        }
      }
    };
    ;
    OrgChartSvg.prototype.attachOrgChartEvents = function() {
      var _this = this;
      if (this.config.onBoxClick) {
        var self = this;
        var nodesSet = this.snap.selectAll('.' + this.config.nodeOptions.nodeClass + ' .' + this.config.nodeOptions.clickableBoxClass);
        for (var i = 0; i < nodesSet.length; i++) {
          nodesSet[i].click(function(event) {
            var args = {};
            var element = event.currentTarget;
            var tagName = element.tagName.toUpperCase();
            while (tagName !== 'BODY' && !element.hasAttribute(self.config.nodeOptions.nodeAttribute)) {
              element = element.parentElement;
            }
            var info = JSON.parse(element.getAttribute(self.config.nodeOptions.nodeAttribute));
            var level = info[5],
                index = info[4],
                levelNode = self.levels[level].nodes[index];
            args.node = _this.buildRenderedChartNode(levelNode, level, index);
            args.event = event;
            if (self.config.onBoxClick) {
              self.config.onBoxClick(args);
            }
          });
        }
      }
      if (this.config.onNodeToggle || this.config.nodeOptions.collapsible) {
        var self = this;
        var nodesSet = this.snap.selectAll('.' + this.config.nodeOptions.nodeClass + ' .' + this.config.nodeOptions.collapseButtonClass);
        for (var i = 0; i < nodesSet.length; i++) {
          nodesSet[i].click(function(event) {
            var args = {};
            var element = event.currentTarget;
            var tagName = element.tagName.toUpperCase();
            while (tagName !== 'BODY' && !element.hasAttribute(self.config.nodeOptions.nodeAttribute)) {
              element = element.parentElement;
            }
            var info = JSON.parse(element.getAttribute(self.config.nodeOptions.nodeAttribute));
            var level = info[5],
                index = info[4],
                levelNode = self.levels[level].nodes[index];
            args.node = _this.buildRenderedChartNode(levelNode, level, index);
            args.event = event;
            args.isCollapsed = levelNode.childNodes && levelNode.childNodes !== null && levelNode.childNodes.length > 0 ? !levelNode.childrenCollapsed : false;
            if (self.config.onNodeToggle) {
              self.config.onNodeToggle(args);
            }
            if (self.config.nodeOptions.collapsible) {
              self.toggleNodeCollapse(levelNode, info);
            }
          });
        }
      }
    };
    OrgChartSvg.prototype.toggleNodeCollapse = function(levelNode, infoRecord) {
      levelNode.childrenCollapsed = !levelNode.childrenCollapsed;
      if (!this.collapseCentralNode(levelNode, infoRecord))
        return;
      var containerWidth = levelNode.containerWidth;
      var widthDelta = containerWidth - levelNode.width;
      var moveDelta = widthDelta / 2;
      var isCollapsed = levelNode.childrenCollapsed;
      while (levelNode !== null) {
        var siblings = this.getNodeSiblings(levelNode);
        this.adjustSiblingNodesByDelta(levelNode, isCollapsed, moveDelta, siblings);
        levelNode = levelNode.parentNode;
        if (levelNode !== null) {
          levelNode.containerWidth += isCollapsed ? -widthDelta : widthDelta;
        }
      }
    };
    OrgChartSvg.prototype.getNodeSiblings = function(levelNode) {
      var result = {
        left: [],
        right: []
      };
      if (levelNode.parentNode && levelNode.parentNode !== null) {
        var left = true;
        for (var i = 0; i < levelNode.parentNode.childNodes.length; i++) {
          var child = levelNode.parentNode.childNodes[i];
          if (child.id === levelNode.id) {
            left = false;
          } else {
            if (left) {
              result.left.push(child);
            } else {
              result.right.push(child);
              7;
            }
          }
        }
      }
      return result;
    };
    OrgChartSvg.prototype.collapseCentralNode = function(levelNode, infoRecord) {
      var x = infoRecord[0],
          y = infoRecord[1],
          width = infoRecord[2],
          height = infoRecord[3];
      var groupNode;
      var groupMatrix = new Snap.Matrix();
      var lineMatrix = new Snap.Matrix();
      var groupNodeMatrix;
      var animDuration = this.config.collapsingDuration;
      groupNode = this.findNodesGroupByParentId(levelNode.id);
      if (!groupNode || groupNode === null)
        return false;
      groupNodeMatrix = groupNode.transform().localMatrix;
      var levelNodeElement = this.findNodeById(levelNode.id);
      var groupNodeDeltaX = parseFloat(levelNodeElement.attr('delta-x') ? levelNodeElement.attr('delta-x') : '0');
      var lineGroupNode = this.findLinesGroupById(levelNode.id);
      var lineNodeMatrix = lineGroupNode.transform().localMatrix;
      if (levelNode.childrenCollapsed) {
        groupMatrix = groupNodeMatrix.scale(0, 0, x + width / 2, y + height / 2);
        lineMatrix = lineNodeMatrix.scale(0, 0, x + width / 2, y + height / 2);
        groupNode.animate({transform: groupMatrix}, animDuration, mina.easein, function() {
          groupNode.attr({opacity: 0});
          groupNode.transform('s1,1');
        });
        lineGroupNode.animate({transform: lineMatrix}, animDuration, mina.easein, function() {
          lineGroupNode.attr({opacity: 0});
          lineGroupNode.transform('s1,1');
        });
      } else {
        groupNode.animate({transform: new Snap.Matrix().translate(groupNodeDeltaX, 0).scale(0, 0, x + width / 2, y + height / 2)}, 0, mina.easein, function() {
          groupNode.attr({opacity: 1});
          groupMatrix.scale(1, 1).translate(groupNodeDeltaX, 0);
          groupNode.animate({transform: groupMatrix}, animDuration);
        });
        lineGroupNode.animate({transform: new Snap.Matrix().translate(groupNodeDeltaX, 0).scale(0, 0, x + width / 2, y + height / 2)}, 0, mina.easein, function() {
          lineGroupNode.attr({opacity: 1});
          lineMatrix.scale(1, 1).translate(groupNodeDeltaX, 0);
          lineGroupNode.animate({transform: lineMatrix}, animDuration);
        });
      }
      return true;
    };
    OrgChartSvg.prototype.adjustSiblingNodesByDelta = function(levelNode, isCollapsed, moveDelta, siblings) {
      var animDuration = this.config.collapsingDuration;
      var neighbors = siblings;
      var startNode = neighbors.left.length > 0 ? neighbors.left[0] : levelNode,
          endNode = neighbors.right.length > 0 ? neighbors.right[neighbors.right.length - 1] : levelNode;
      if (!isCollapsed) {
        moveDelta = -moveDelta;
      }
      if (startNode.id != endNode.id) {
        var line = this.snap.select('[' + this.lineHorizontal + '="' + startNode.id + '-' + endNode.id + '"]');
        if (line !== null) {
          var attrs = {};
          if (startNode.id !== levelNode.id) {
            attrs.x1 = parseFloat(line.attr('x1')) + moveDelta;
          }
          if (endNode.id !== levelNode.id) {
            attrs.x2 = parseFloat(line.attr('x2')) - moveDelta;
          }
          line.animate(attrs, animDuration);
        }
      }
      for (var i = 0; i < neighbors.left.length; i++) {
        var id = neighbors.left[i].id;
        var node = this.findNodeById(id);
        node.animate({transform: node.transform().localMatrix.translate(moveDelta, 0)}, animDuration);
        var childNodesGroup = this.findNodesGroupByParentId(id);
        if (childNodesGroup !== null) {
          childNodesGroup.animate({transform: childNodesGroup.transform().localMatrix.translate(moveDelta, 0)}, animDuration);
        }
        var childLinesGroup = this.findLinesGroupById(id);
        if (childLinesGroup && childLinesGroup !== null) {
          childLinesGroup.animate({transform: childLinesGroup.transform().localMatrix.translate(moveDelta, 0)}, animDuration);
        }
        var filter = new FindLinesFilter();
        filter.lineTo = id;
        var topLines = this.findLinesByFilter(filter);
        if (topLines && topLines !== null) {
          for (var c = 0; c < topLines.length; c++) {
            topLines[c].animate({transform: topLines[c].transform().localMatrix.translate(moveDelta, 0)}, animDuration);
          }
        }
        if (node.attr('delta-x')) {
          var delta = parseFloat(node.attr('delta-x'));
          node.attr({'delta-x': delta + moveDelta});
        } else {
          node.attr({'delta-x': moveDelta});
        }
      }
      for (var i = 0; i < neighbors.right.length; i++) {
        var id = neighbors.right[i].id;
        var node = this.findNodeById(id);
        var matrix = node.transform().localMatrix.translate(-moveDelta, 0);
        node.animate({transform: matrix}, animDuration);
        var childNodesGroup = this.findNodesGroupByParentId(id);
        if (childNodesGroup !== null) {
          matrix = childNodesGroup.transform().localMatrix.translate(-moveDelta, 0);
          childNodesGroup.animate({transform: matrix}, animDuration);
        }
        var childLinesGroup = this.findLinesGroupById(id);
        if (childLinesGroup && childLinesGroup !== null) {
          childLinesGroup.animate({transform: childLinesGroup.transform().localMatrix.translate(-moveDelta, 0)}, animDuration);
        }
        var filter = new FindLinesFilter();
        filter.lineTo = id;
        var topLines = this.findLinesByFilter(filter);
        if (topLines && topLines !== null) {
          for (var c = 0; c < topLines.length; c++) {
            topLines[c].animate({transform: topLines[c].transform().localMatrix.translate(-moveDelta, 0)}, animDuration);
          }
        }
        if (node.attr('delta-x')) {
          var delta = parseFloat(node.attr('delta-x'));
          node.attr({'delta-x': delta - moveDelta});
        } else {
          node.attr({'delta-x': -moveDelta});
        }
      }
    };
    OrgChartSvg.prototype.findLinesByFilter = function(filter) {
      var typeSelector = '',
          fromToSelector = '',
          parentIdSelector = '',
          selector;
      if (filter.connectorType && filter.connectorType !== null) {
        typeSelector = '[orgchart-line-type="' + connector_type_1.ConnectorType[filter.connectorType] + '"]';
      }
      if (filter.lineTo && filter.lineTo !== null) {
        fromToSelector = '[' + this.lineToAttr + '="' + filter.lineTo + '"]';
      }
      if (filter.parentNodeId && filter.parentNodeId !== null) {
        parentIdSelector = '[' + this.lineParentIdAttribute + '="' + filter.parentNodeId + '"]';
      }
      selector = parentIdSelector + typeSelector + fromToSelector;
      if (selector === '') {
        return null;
      }
      return this.snap.selectAll(selector);
    };
    OrgChartSvg.prototype.findLinesGroupById = function(parentNodeId) {
      return this.snap.select('#' + this.linesGroupIdPrefix + parentNodeId);
    };
    OrgChartSvg.prototype.findNodesGroupByParentId = function(parentNodeId) {
      return this.snap.select('#' + this.nodesGroupIdPrefix + parentNodeId);
    };
    OrgChartSvg.prototype.findNodeById = function(nodeId) {
      return this.snap.select('#' + this.nodeIdPrefix + nodeId);
    };
    return OrgChartSvg;
  }());
  exports.OrgChartSvg = OrgChartSvg;
  var FindLinesFilter = (function() {
    function FindLinesFilter() {
      this.parentNodeId = null;
      this.connectorType = null;
      this.lineTo = null;
    }
    return FindLinesFilter;
  }());
});

})();
})
(function(factory) {
  factory();
});
//# sourceMappingURL=orgchart.svg.standalone.js.map