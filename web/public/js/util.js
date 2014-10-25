String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};

function range(start, end, step) {
    if (!end) {
        end = start;
        start = 0;
    }

    step = step || 1;

    var ret = [];
    for (var i = start; i < end; i += step) {
        ret.push(i);
    }

    return ret;
}

