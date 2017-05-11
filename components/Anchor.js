import ForEach from './ForEach';

function Anchor() {
    let opts = {
        trigger: '.js-anchor',
        offset: 0
    };

    function scrollToAnchor() {
        let element = document.querySelector(location.hash);
        window.scrollTo(0, element.offsetTop - opts.offset);
    }

    function extend(settings) {
        opts = Object.assign({}, opts, settings);
    }

    function bindUIActions(settings) {
        if (settings) extend(settings);

        if (location.hash !== '') {
            scrollToAnchor();

            setTimeout(function() {
                document.documentElement.classList.remove('scroll-up');
                document.documentElement.classList.add('scroll-down');
            }, 1);
        }

        let triggers = document.querySelectorAll(opts.trigger);
        ForEach(triggers, function(index, value) {
            triggers[index].addEventListener('click', function(event) {
                event.preventDefault();
                location.hash = triggers[index].getAttribute('href');
                scrollToAnchor();
            });
        });
    }

    return {
        init: bindUIActions
    }
}

export default Anchor();
