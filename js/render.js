function render() {
  vrControls.update();
  renderer.clear();
  if (inSecondWorld) {
    renderer.render(scene, camera, renderedTexture, true);
    vrEffect.render(secondScene, secondCamera);
  } else {
    renderer.render(secondScene, secondCamera, renderedTexture, true);
    vrEffect.render(scene, camera);
  }
}
