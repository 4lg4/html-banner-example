import Animate from '../helpers/animate';

const sceneOne = 0;
const sceneTwo = 1200;

module.exports = () => {
  // [ini] sprites -------------
  new Animate(document.querySelector('.sprites-get-up'), 20, 44, 40, function() {
    new Animate(document.querySelector('.sprites-and-go'), 19, 47, 40);
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
    opacity: [{value: 1, duration: 500}, {delay: 4900, value: 0, duration: 900, easing: 'easeInOutQuart'}],
    top: [{value: -115, duration: 0}, {value: 6, duration: 500}, {value: 3, duration: 50}, {value: 9, duration: 50}, {value: 3, duration: 50}, {value: 6, duration: 50}, {delay: 1300, value: -100, duration: 1400, easing: 'easeInOutQuart'}],
    width: [{value: 2070, duration: 0}, {value: 295, duration: 500}],
    right: [{value: -829, duration: 0}, {value: 13, duration: 500}, {value: 10, duration: 50}, {value: 16, duration: 50}, {value: 10, duration: 50}, {value: 13, duration: 50}],
    easing: 'easeInBack',
  });

  // sprites
  timeline.add({
    targets: '.sprites',
    offset: 2000 + sceneOne,
    opacity: [{delay: 310, value: 0, duration: 400, easing: 'easeInOutQuart'}],
  });


  // item purple
  timeline.add({
    targets: '.item-purple',
    offset: 2000 + sceneTwo,
    opacity: 1,
    bottom: [{delay: 600, value: -59, duration: 1500}, {delay: 1000, value: -25, duration: 600}, {delay: 900, value: 200, duration: 600, easing: 'easeInOutQuart'}],
    height: [{delay: 3100, value: 109, duration: 600}],
    left: [{delay: 3100, value: 126, duration: 600}],
    easing: 'easeInOutQuart',
  });

  // item red
  timeline.add({
    targets: '.item-red',
    offset: 5200 + sceneTwo,
    opacity: [{value: 1, duration: 600}],
    left: [{value: 187, duration: 1200}],
    bottom: [{delay: 1400, value: 200, duration: 600, easing: 'easeInOutQuart'}],
    easing: 'easeInOutQuart',
  });

  // item blue
  timeline.add({
    targets: '.item-blue',
    offset: 5200 + sceneTwo,
    opacity: [{value: 1, duration: 600}],
    left: [{value: 70, duration: 1200}],
    bottom: [{delay: 1400, value: 200, duration: 600, easing: 'easeInOutQuart'}],
    easing: 'easeInOutQuart',
  });

  // item orange
  timeline.add({
    targets: '.item-orange',
    offset: 5200 + sceneTwo,
    opacity: [{value: 1, duration: 600}],
    left: [{value: 17, duration: 1200}],
    bottom: [{delay: 1400, value: 200, duration: 600, easing: 'easeInOutQuart'}],
    easing: 'easeInOutQuart',
  });

  // item green
  timeline.add({
    targets: '.item-green',
    offset: 5200 + sceneTwo,
    opacity: [{value: 1, duration: 600}],
    left: [{value: 243, duration: 1200}],
    bottom: [{delay: 1400, value: 200, duration: 600, easing: 'easeInOutQuart'}],
    easing: 'easeInOutQuart',
  });

  // copy
  timeline.add({
    targets: '.copy',
    opacity: 1,
    offset: '-=700',
    duration: 600,
    bottom: 7,
    easing: 'easeInOutQuart',
  });

  // copy
  timeline.add({
    targets: '.logo',
    offset: '-=700',
    duration: 600,
    bottom: 0,
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
    opacity: [{value: 0.4, duration: 300}, {delay: 1600, value: 1, duration: 300}, {delay: 2000, value: 0, duration: 500}],
    bottom: [{value: -395, delay: 0, easing: 'easeInOutQuart'}, {delay: 1500, value: -213, duration: 400, easing: 'easeInOutQuart'}],
    left: [{value: -124, delay: 0}],
    width: [{value: 600, delay: 0}],
    offset: 1700 + sceneTwo,
  });
};
