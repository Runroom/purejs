function ScrollTo(start_point, duration = 500) {
    let start = document.body.scrollTop,
        change = start_point - start,
        current_time = 0,
        increment = 20;

    let animateScroll = (function(){
        current_time += increment;
        let val = Math.easeInOutQuad(current_time, start, change, duration);
        document.body.scrollTop = val;
        if(current_time < duration) {
            setTimeout(animateScroll, increment);
        }
    })();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};
