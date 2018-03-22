(function(global) {
    var LoadedEvent = (function(){
        var eventHandlers = {};
        return {
            on: function(event, callback) {
                if(!eventHandlers.hasOwnProperty(event)) {
                    eventHandlers[event] = [];
                }
                eventHandlers[event].push(callback);
            },
            emit: function(event, args) {
                if(Array.isArray(eventHandlers[event]) && eventHandlers[event].length) {
                    eventHandlers[event].forEach(function(cb) {
                        if(typeof cb === 'function') {
                            try {
                                cb(args);
                            } catch(ex) {
                                console.error(ex);
                            }
                        }
                    });
                }
            },
            off: function(event, callback) {
                if(Array.isArray(eventHandlers[event]) && eventHandlers[event].length) {
                    for (var i = eventHandlers[event].length - 1; i >= 0; i--) {
                        if(eventHandlers[event][i] === callback) {
                            eventHandlers[event][i].splice(i, 1);
                        }
                    }
                }
            },
            clear: function(event) {
                if(eventHandlers.hasOwnProperty(event)) {
                    delete eventHandlers[event];
                }
            }
        };
    }());


    var cachedModules = {};
    var loadingModules = {};
    global.define = function(name, defs, factory) {
        if(caches.hasOwnProperty(name)) {
            return caches[name];
        }
        if(Array.isArray(defs)) {
            var totalDefs = defs.length;
            var loadedDefs = 0;
            var params = new Array(totalDefs);
            if(totalDefs > 0) {
                defs.forEach(function(e, i) {
                    if(cachedModules.hasOwnProperty(e)) {
                        params[i] = cachedModules[e];
                        loadedDefs++;
                        if(loadedDefs == totalDefs && !cachedModules.hasOwnProperty(name)) {
                            cachedModules[name] = factory.apply(null, params);
                            LoadedEvent.emit('load:' + name);
                            LoadedEvent.clear('load:' + name);
                        }
                    } else {
                        if(!loadingModules[e]) {
                            var script = document.createElement('script');
                            script.async = 'async';
                            script.onload = function() {
                                if(loadingModules[e]) {
                                    delete loadingModules[e];
                                }
                            }
                            script.src = e + '.js';
                            loadingModules[e] = true;
                            document.head.appendChild(script);
                        }
                        LoadedEvent.on('load:' + e, function() {
                            if(cachedModules.hasOwnProperty(e)) {
                                params[i] = cachedModules[e];
                                loadedDefs++;
                                if(loadedDefs == totalDefs && !cachedModules.hasOwnProperty(name)) {
                                    cachedModules[name] = factory.apply(null, params);
                                    LoadedEvent.emit('load:' + name);
                                    LoadedEvent.clear('load:' + name);
                                }
                            }
                        });
                    }
                });
            } else {
                if(!cachedModules.hasOwnProperty(name)) {
                    cachedModules[name] = factory();
                    LoadedEvent.emit('load:' + name);
                    LoadedEvent.clear('load:' + name);
                }
            }
        } else {
            if(!cachedModules.hasOwnProperty(name)) {
                cachedModules[name] = factory();
                LoadedEvent.emit('load:' + name);
                LoadedEvent.clear('load:' + name);
            }
        }
    };
})(this);
