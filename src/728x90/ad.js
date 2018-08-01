import Animate from '../helpers/animate';

const sceneOne = 500;
const sceneTwo = 1200;

module.exports = ()=> {
  // [ini] sprites -------------
  new Animate(document.querySelector('.sprites-get-up'), 20, 52, 40, function() {
    new Animate(document.querySelector('.sprites-and-go'), 19, 65, 40);
  });
  // [end] sprites -------------

  window.timeline = anime.timeline({
    loop: 1,
    update: function(anim) {
      if (process.env.ENV !== 'production') {
        seekProgressEl.value = anim.progress;
        seekProgressNumberEl.innerHTML = anim.progress;
      }
    },
  });

  // back to bed copy
  timeline.add({
    targets: '.frame-back-to-bed',
    offset: 2000 + sceneOne,
    opacity: [{value: 1, duration: 300}, {delay: 4900, value: 0, duration: 900, easing: 'easeInOutQuart'}], // , {delay: 1200, value: 0, duration: 800}],
    top: [{value: -68, duration: 0}, {value: 26, duration: 300}, {value: 23, duration: 50}, {value: 29, duration: 50}, {value: 23, duration: 50}, {value: 26, duration: 50}, {delay: 1300, value: -80, duration: 1250, easing: 'easeInOutQuart'}],
    width: [{value: 2000, duration: 0}, {value: 295, duration: 300}],
    right: [{value: -803, duration: 0}, {value: 50, duration: 300}, {value: 47, duration: 50}, {value: 53, duration: 50}, {value: 47, duration: 50}, {value: 50, duration: 50}],
    easing: 'easeInBack',
  });

  // sprites
  timeline.add({
    targets: '.sprites',
    offset: 2000 + sceneOne,
    opacity: [{delay: 5300, value: 0, duration: 1000, easing: 'easeInOutQuart'}],
    top: [{value: 8, duration: 0}, {delay: 480, value: 5, duration: 50}, {value: 11, duration: 50}, {value: 5, duration: 50}, {value: 11, duration: 50}, {delay: 1300, value: -80, duration: 1250, easing: 'easeInOutQuart'}],
    left: [{value: 0, duration: 0}, {delay: 480, value: -3, duration: 50}, {value: 3, duration: 50}, {value: -3, duration: 50}, {value: 3, duration: 50}],
  });


  // item purple
  timeline.add({
    targets: '.item-purple',
    offset: 2000 + sceneTwo,
    opacity: 1,
    bottom: [{delay: 1300, value: -105, duration: 1500}, {delay: 1000, value: -25, duration: 600}],
    height: [{delay: 3800, value: 109, duration: 600}],
    left: [{delay: 3800, value: 148, duration: 600}],
    easing: 'easeInOutQuart',
  });

  // item red
  timeline.add({
    targets: '.item-red',
    offset: 3000 + sceneTwo,
    opacity: [{delay: 3200, value: 1, duration: 600}],
    left: [{delay: 3200, value: 212, duration: 1200}],
    easing: 'easeInOutQuart',
  });

  // item blue
  timeline.add({
    targets: '.item-blue',
    offset: 3000 + sceneTwo,
    opacity: [{delay: 3200, value: 1, duration: 600}],
    left: [{delay: 3200, value: 89, duration: 1200}],
    easing: 'easeInOutQuart',
  });

  // item orange
  timeline.add({
    targets: '.item-orange',
    offset: 3000 + sceneTwo,
    opacity: [{delay: 3200, value: 1, duration: 600}],
    left: [{delay: 3200, value: 33, duration: 1200}],
    easing: 'easeInOutQuart',
  });

  // item green
  timeline.add({
    targets: '.item-green',
    offset: 3000 + sceneTwo,
    opacity: [{delay: 3200, value: 1, duration: 600}],
    left: [{delay: 3200, value: 271, duration: 1200}],
    easing: 'easeInOutQuart',
  });

  // copy
  timeline.add({
    targets: '.copy',
    opacity: 1,
    offset: '-=1300',
    duration: 1600,
    easing: 'easeInOutQuart',
  });

  // background
  timeline.add({
    targets: '.background',
    translateY: [{value: -100, duration: 2000}],
    duration: 3000,
    easing: 'easeInOutQuart',
    offset: 1900 + sceneTwo,
  });

  // background glow
  timeline.add({
    targets: '#background .background img',
    opacity: [{value: 0.4, duration: 300}, {delay: 1600, value: 1, duration: 300}, {delay: 2000, value: 0, duration: 500}, {delay: 800, value: 1, duration: 800}],
    bottom: [{value: -395, delay: 0, easing: 'easeInOutQuart'}, {delay: 1900, value: -213, duration: 400, easing: 'easeInOutQuart'}, {delay: 2000, value: -203}],
    left: [{value: -150, delay: 0}, {delay: 1500, value: 93, duration: 400}, {delay: 2000, value: -92}],
    width: [{value: 600, delay: 0}, {delay: 1500, value: 578, duration: 400}],
    // rotate: [{delay: 0, value: 0, duration: 0}, {delay: 1800, value: 30, duration: 4000, easing: 'linear'}],
    offset: 1700 + sceneTwo,
  });
};
