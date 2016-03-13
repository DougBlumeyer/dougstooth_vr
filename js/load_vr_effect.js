function vrEffect() {
  var fullScreenButton = document.querySelector('.full-screen');

  if (navigator.getVRDisplays === undefined && navigator.getVRDevices === undefined) {
    fullScreenButton.innerHTML = 'Your browser doesn\'t support WebVR';
    fullScreenButton.classList.add('error');
  }

  var vrEffect = new THREE.VREffect(renderer, function(error) {
    fullScreenButton.innerHTML = error;
    fullScreenButton.classList.add('error');
  });

  fullScreenButton.onclick = function() {
    vrEffect.setFullScreen(true);
  };

  return vrEffect;
}
