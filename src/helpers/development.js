module.exports = (ad) => {
  const progress = document.createElement('input');
  progress.classList.add('progress');
  progress.style.width = '280px';
  progress.style.position = 'absolute';
  progress.style.top = '5px';
  progress.style.left = '5px';
  progress.style.zIndex = 10000;
  progress.style.opacity = 1;
  progress.type = 'range';
  progress.attributes.step = '.001';
  progress.attributes.min = '0';
  progress.attributes.max = '100';

  const progressNumber = document.createElement('div');
  progressNumber.classList.add('progress-number');
  progressNumber.style.overflow = 'hidden';
  progressNumber.style.width = '50px';
  progressNumber.style.position = 'absolute';
  progressNumber.style.top = '230px';
  progressNumber.style.left = '248px';
  progressNumber.style.zIndex = 10000;
  progressNumber.style.background = 'white';
  progressNumber.style.opacity = 0.6;
  progressNumber.value = 0;
  progressNumber.attributes.step = '.001';
  progressNumber.attributes.min = '0';
  progressNumber.attributes.max = '100';

  document.body.appendChild(progress);
  document.body.appendChild(progressNumber);

  window.seekProgressEl = progress;
  window.seekProgressNumberEl = progressNumber;

  seekProgressEl.addEventListener('input', function() {
    timeline.seek(timeline.duration * (seekProgressEl.value / 100));
  });

  ['input', 'change'].forEach(function(evt) {
    seekProgressEl.addEventListener(evt, function() {
      timeline.seek(timeline.duration * (seekProgressEl.value / 100));
    });
  });

  ad();
};
