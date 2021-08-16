
var Events = {}

export function on(event, cb) {
    if (!Events[event]) {
        Events[event] = [];
    }
    Events[event].push(cb);
    return this;
}
export function trigger(event) {
    var tail = Array.prototype.slice.call(arguments, 1);
    for (var i in Events[event]) {
        Events[event][i].apply(this, tail);
    }
    if (event === 'error') {
        return this;
    }

    for (var i in Events['events']) {
        Events['event'][i].apply(this, [event]);
    }
    return this
}
