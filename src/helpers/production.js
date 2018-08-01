module.exports = (ad) => {
  const checkInit = () => {
    if (!EB.isInitialized()) {
      EB.addEventListener(EBG.EventName.EB_INITIALIZED, onInit);
    } else {
      onInit();
    }

    function onInit() {
      document.getElementsByTagName('BODY')[0].addEventListener('click', () => EB.clickthrough());
      ad();
    }
  };

  window.addEventListener('load', checkInit);
};
