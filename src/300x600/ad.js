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
    opacity: [{value: 1, duration: 500}, {delay: 4900, value: 0, duration: 900, easing: 'easeInOutQuart'}], // , {delay: 1200, value: 0, duration: 800}],
    top: [{value: -500, duration: 0}, {value: 265, duration: 500}, {value: 263, duration: 50}, {value: 267, duration: 50}, {value: 263, duration: 50}, {value: 267, duration: 50}, {delay: 1200, value: 165, duration: 1400, easing: 'easeInOutQuart'}],
    width: [{value: 2000, duration: 0}, {value: 159, duration: 500}, {delay: 4500, value: 86, duration: 1200, easing: 'easeInOutQuart'}],
    left: [{value: -1000, duration: 0}, {value: 70, duration: 500}, {value: 67, duration: 50}, {value: 73, duration: 50}, {value: 67, duration: 50}, {value: 70, duration: 50}, {delay: 4300, value: 103, duration: 1200, easing: 'easeInOutQuart'}],
    easing: 'easeInBack',
  });

  // sprites
  timeline.add({
    targets: '.sprites',
    offset: 2000 + sceneOne,
    opacity: [{delay: 5300, value: 0, duration: 1000, easing: 'easeInOutQuart'}],
    top: [{value: 140, duration: 0}, {delay: 480, value: 138, duration: 50}, {value: 142, duration: 50}, {value: 138, duration: 50}, {value: 142, duration: 50}, {delay: 1300, value: 50, duration: 1250, easing: 'easeInOutQuart'}],
    left: [{value: 0, duration: 0}, {delay: 480, value: -2, duration: 50}, {value: 2, duration: 50}, {value: -2, duration: 50}, {value: 2, duration: 50}],
  });

  // timeline.add({
  //   targets: '.sprites-get-up',
  //   offset: 2000 + sceneOne,
  //   marginTop: [{value: 140, duration: 0}, {delay: 480, value: 138, duration: 50}, {value: 142, duration: 50}, {value: 138, duration: 50}, {value: 142, duration: 50}, {delay: 1300, value: 233, duration: 2300, easing: 'easeInOutQuart'}],
  //   marginLeft: [{value: 35, duration: 0}, {delay: 480, value: 32, duration: 50}, {value: 37, duration: 50}, {value: 32, duration: 50}, {value: 35, duration: 50}],
  // });

  // timeline.add({
  //   targets: '.sprites-and-go',
  //   offset: 2000 + sceneOne,
  //   marginLeft: [{value: 22, duration: 0}, {delay: 480, value: 19, duration: 50}, {value: 25, duration: 50}, {value: 19, duration: 50}, {value: 22, duration: 50}],
  // });


  // item purple
  timeline.add({
    targets: '.item-purple',
    offset: 2000 + sceneTwo,
    opacity: 1,
    bottom: [{value: 115, duration: 1500}, {value: 148, duration: 600}, {delay: 1400, value: 266, duration: 1200}],
    height: [{value: 150, duration: 1500}, {value: 109, duration: 600}],
    left: [{value: 53, duration: 1500}, {value: 79, duration: 600}],
    easing: 'easeInOutQuart',
  });

  // item red
  timeline.add({
    targets: '.item-red',
    offset: 3000 + sceneTwo,
    opacity: 1,
    right: [{value: 66, duration: 1500}],
    bottom: [{delay: 2500, value: 280, duration: 1200}],
    easing: 'easeInOutQuart',
  });

  // item blue
  timeline.add({
    targets: '.item-blue',
    offset: 3000 + sceneTwo,
    opacity: 1,
    left: [{value: 66, duration: 1500}],
    bottom: [{delay: 2500, value: 280, duration: 1200}],
    easing: 'easeInOutQuart',
  });

  // item orange
  timeline.add({
    targets: '.item-orange',
    offset: 3000 + sceneTwo,
    opacity: 1,
    left: [{value: 13, duration: 1500}],
    bottom: [{delay: 2500, value: 284, duration: 1200}],
    easing: 'easeInOutQuart',
  });

  // item green
  timeline.add({
    targets: '.item-green',
    offset: 3000 + sceneTwo,
    opacity: 1,
    right: [{value: 13, duration: 1500}],
    bottom: [{delay: 2500, value: 284, duration: 1200}],
    easing: 'easeInOutQuart',
  });

  // copy
  timeline.add({
    targets: '.copy',
    opacity: 1,
    offset: '-=1300',
    duration: 1600,
    easing: 'easeInOutQuart',
    bottom: 144,
  });

  // background
  timeline.add({
    targets: '#background',
    translateY: [{value: -185, duration: 2000}, {delay: 1700, value: -304, duration: 1000}],
    duration: 3000,
    easing: 'easeInOutQuart',
    offset: 1900 + sceneTwo,
  });

  // background glow
  timeline.add({
    targets: '#background .background img',
    opacity: [{value: 0.4, duration: 300}, {delay: 1600, value: 1, duration: 300}, {delay: 2000, value: 0, duration: 500}],
    bottom: [{value: -395, delay: 0, easing: 'easeInOutQuart'}, {delay: 1400, value: -89, duration: 400, easing: 'easeInOutQuart'}],
    left: [{value: -150, delay: 0}, {delay: 1400, value: -15, duration: 400}],
    width: [{value: 600, delay: 0}, {delay: 1400, value: 339, duration: 400}],
    rotate: [{delay: 0, value: 0, duration: 0}, {delay: 1800, value: 30, duration: 4000, easing: 'linear'}],
    offset: 1700 + sceneTwo,
  });
};
