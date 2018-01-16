// describe('Anchor behavior', () => {
//   before(() => {
//     purejs.anchor();
//   });

//   it('window offset should be on top of container', done => {
//     expect(window.pageYOffset).to.equal(0);
//     done();
//   });
//   it('sample container should exist', done => {
//     expect(document.querySelector('#sample')).to.not.be.null;
//     done();
//   });
//   it('should scroll to first container on click', done => {
//     document.querySelector('.anchor1').click();
//     expect(window.pageYOffset).to.equal(document.querySelector('#container1').offsetTop);
//     done();
//   });
//   it('should scroll to second container on click', done => {
//     document.querySelector('.anchor2').click();
//     expect(window.pageYOffset).to.equal(document.querySelector('#container2').offsetTop);
//     done();
//   });
//   it('should scroll to third container manually', done => {
//     purejs.scrollToAnchor('#container3');
//     expect(window.pageYOffset).to.equal(document.querySelector('#container3').offsetTop);
//     done();
//   });
// });
