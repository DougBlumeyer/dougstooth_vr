function render() {
  vrControls.update();
  renderer.clear();
  renderer.render(secondScene, secondCamera, renderedTexture, true);
  vrEffect.render(scene, camera);
}
