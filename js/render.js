function render() {
  vrControls.update();

  if (window.dougstooth) {
    window.dougstooth.rotation.x += 0.001;
    window.dougstooth.rotation.y += 0.001;
  }

  vrEffect.render(scene, camera);
}
