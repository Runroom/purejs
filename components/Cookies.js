import jsCookies from '../node_modules/js-cookie';

function Cookies() {
    let opts = {
        element: '.js-cookies',
        button: '.js-cookiesAccept',
        cookie: 'accept_cookies',
        visible: 'is-visible',
        padding_bottom: false
    };

    function addPaddingToPage() {
        let element = document.querySelector(opts.element),
            element_height = element.offsetHeight;

        document.documentElement.style.paddingBottom = element_height + 'px';
    }

    function cleanPaddingToPage() {
        document.documentElement.style.paddingBottom = 0;
    }

    function extend(settings) {
        opts = Object.assign({}, opts, settings);
    }

    function bindUIActions(settings) {
        if (settings) extend(settings);
        let accepted = jsCookies.get(opts.cookie);

        if(accepted === undefined) {
            if (opts.padding_bottom) addPaddingToPage();
            document.querySelector(opts.element).classList.add(opts.visible);
        }

        document.querySelector(opts.button).addEventListener('click', function(event) {
            event.preventDefault();
            jsCookies.set(opts.cookie, 'true', { expires: 365 });
            document.querySelector(opts.element).classList.remove(opts.visible);
            if (opts.padding_bottom) cleanPaddingToPage();
        });

        window.addEventListener('resize', addPaddingToPage, false);
    }

    return {
        init: bindUIActions
    }
}

export default Cookies();
