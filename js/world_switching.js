function checkForWorldSwitching() {
  raycaster.setFromCamera({x: 0, y: 0}, camera);
  raycaster.setFromCamera({x: 0, y: 0}, secondCamera);

  var intersects = raycaster.intersectObjects([window.screenCube]);
  var secondIntersects = raycaster.intersectObjects([window.secondScreenCube]);

  if (intersects.length > 0 && intersects[0].distance < 1) inSecondWorld = true;
  if (secondIntersects.length > 0 && secondIntersects[0].distance < 1) inSecondWorld = false;

  if (inSecondWorld) {
    renderer.render(scene, camera, renderedTexture, true);
    vrEffect.render(secondScene, secondCamera);
  } else {
    renderer.render(secondScene, secondCamera, renderedTexture, true);
    vrEffect.render(scene, camera);
  }
}
