import jsdom from 'jsdom';
const { JSDOM } = jsdom;

Object.defineProperty(window.navigator, 'userAgent', {
  value: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2454.85 Safari/537.36'
});

const { document } = new JSDOM(`<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div class="js-cookies">
      <button class="js-cookies-accept"></button>
    </div>
  </body>
</html>`).window;
