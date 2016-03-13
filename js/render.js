function render() {
  vrControls.update();

  if (window.dougstooth && window.secondDougstooth && window.screenCube) {
    window.dougstooth.rotation.x += 0.001;
    window.dougstooth.rotation.y += 0.001;
    window.secondDougstooth.rotation.x -= 0.001;
    window.secondDougstooth.rotation.y -= 0.001;
    // window.screenCube.rotation.x -= 0.001;
    // window.screenCube.rotation.y += 0.001;
  }

  // console.log('what is the renderer??', renderer, secondScene, secondCamera, renderedTexture)
  renderer.clear();

  // console.log(renderedTexture)
  renderer.render( secondScene, secondCamera, renderedTexture, true );


  vrEffect.render(scene, camera);
}
