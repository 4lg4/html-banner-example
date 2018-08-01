module.exports = (ad) => {
  window.seekProgressEl = document.querySelector('.progress');
  window.seekProgressNumberEl = document.querySelector('.progress-number');

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
