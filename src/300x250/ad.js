import Animate from '../helpers/animate';

const sceneOne = 500;
const sceneTwo = 2200;

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
    opacity: [{value: 1, duration: 500}, {delay: 1200, value: 0, duration: 800}],
    top: [{value: -500, duration: 0}, {value: 130, duration: 500}, {value: 127, duration: 50}, {value: 133, duration: 50}, {value: 127, duration: 50}, {value: 130, duration: 50}, {delay: 1200, value: -150, duration: 1700, easing: 'easeInOutQuart'}],
    width: [{value: 2000, duration: 0}, {value: 159, duration: 500}],
    left: [{value: -1000, duration: 0}, {value: 70, duration: 500}, {value: 67, duration: 50}, {value: 73, duration: 50}, {value: 67, duration: 50}, {value: 70, duration: 50}],
    easing: 'easeInBack',
  });

  // sprites
  timeline.add({
    targets: '.sprites-get-up',
    offset: 2000 + sceneOne,
    marginTop: [{value: 44, duration: 0}, {delay: 480, value: 41, duration: 50}, {value: 47, duration: 50}, {value: 41, duration: 50}, {value: 44, duration: 50}, {delay: 1300, value: -150, duration: 2300, easing: 'easeInOutQuart'}],
    marginLeft: [{value: 35, duration: 0}, {delay: 480, value: 32, duration: 50}, {value: 37, duration: 50}, {value: 32, duration: 50}, {value: 35, duration: 50}],
  });

  timeline.add({
    targets: '.sprites-and-go',
    offset: 2000 + sceneOne,
    marginLeft: [{value: 22, duration: 0}, {delay: 480, value: 19, duration: 50}, {value: 25, duration: 50}, {value: 19, duration: 50}, {value: 22, duration: 50}],
  });


  // item purple
  timeline.add({
    targets: '.item-purple',
    offset: 2000 + sceneTwo,
    opacity: 1,
    bottom: [{value: 63, duration: 1500}, {value: 88, duration: 600}],
    height: [{value: 150, duration: 1500}, {value: 110, duration: 600}],
    left: [{value: 34, duration: 1500}, {value: 65, duration: 600}],
    easing: 'easeInOutQuart',
  });

  // item red
  timeline.add({
    targets: '.item-red',
    offset: 3000 + sceneTwo,
    opacity: 1,
    right: [{value: 67, duration: 1500}],
    easing: 'easeInOutQuart',
  });

  // item blue
  timeline.add({
    targets: '.item-blue',
    offset: 3000 + sceneTwo,
    opacity: 1,
    left: [{value: 65, duration: 1500}],
    easing: 'easeInOutQuart',
  });

  // item orange
  timeline.add({
    targets: '.item-orange',
    offset: 3000 + sceneTwo,
    opacity: 1,
    left: [{value: 52, duration: 1500}],
    easing: 'easeInOutQuart',
  });

  // item green
  timeline.add({
    targets: '.item-green',
    offset: 3000 + sceneTwo,
    opacity: 1,
    right: [{value: 52, duration: 1500}],
    easing: 'easeInOutQuart',
  });

  // copy
  timeline.add({
    targets: '.copy',
    opacity: 1,
    offset: '-=500',
    duration: 1200,
    easing: 'easeInOutQuart',
  });

  // background
  timeline.add({
    targets: '#background',
    translateY: [{value: -120, duration: 2000, easing: 'easeInOutQuart'}],
    duration: 3000,
    easing: 'easeInOutQuart',
    offset: 1900 + sceneTwo,
  });

  // background glow
  timeline.add({
    targets: '#background .background img',
    opacity: [{value: 0.4, duration: 300}, {delay: 1600, value: 1, duration: 300}],
    bottom: [{value: -395, delay: 0}, {delay: 1400, value: -150, duration: 400}],
    left: [{value: -150, delay: 0}, {delay: 1400, value: 11, duration: 400}],
    width: [{value: 647, delay: 0}, {delay: 1400, value: 324, duration: 400}],
    rotate: [{delay: 0, value: 0, duration: 0}, {delay: 1800, value: 30, duration: 4000, easing: 'linear'}],
    offset: 2300 + sceneTwo,
  });
};
