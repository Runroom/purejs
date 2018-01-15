before(() => {
  const fixture = `<div id="sample">
    <ul class="list">
      <li><a class="anchor1 js-anchor" data-anchor="container1"></a></li>
      <li class="anchor2 js-anchor" data-anchor="container2"></li>
    </ul>
    <div id="container1" style="height: 600px;">&nbsp;</div>
    <div id="container2" style="height: 600px;">&nbsp;</div>
    <div id="container3" style="height: 600px;">&nbsp;</div>
    <div class="js-cookies">
    <button class="js-cookies-accept"></button>
    </div>
    <footer id="footer" style="height: 600px;">&nbsp;</footer>
  </div>`;

  document.body.insertAdjacentHTML('afterbegin', fixture);
});
after(() => {
  document.body.removeChild(document.querySelector('#sample'));
});
