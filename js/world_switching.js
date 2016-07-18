function checkForWorldSwitching() {
  raycaster.setFromCamera({x: 0, y: 0}, camera);
  raycaster.setFromCamera({x: 0, y: 0}, secondCamera);

  var intersects = raycaster.intersectObjects([window.screenCube]);
  var secondIntersects = raycaster.intersectObjects([window.secondScreenCube]);

  if (!inSecondWorld && intersects.length > 0 && intersects[0].distance < 1) {
    inSecondWorld = true;
  } else if (secondIntersects.length > 0 && secondIntersects[0].distance < 1) {
    inSecondWorld = false;
  }

  if (inSecondWorld) {
    renderer.render(scene, secondCamera, myRenderedTexture1, true);
    renderer.render(scene, secondCameraL, myRenderedTexture1L, true);
    renderer.render(scene, secondCameraR, myRenderedTexture1R, true);

    vrEffect.render(secondScene, secondCamera, secondCameraL, secondCameraR, composer2, composer2L, composer2R);
  } else {
    renderer.render(secondScene, camera, myRenderedTexture2, true);
    renderer.render(secondScene, cameraL, myRenderedTexture2L, true);
    renderer.render(secondScene, cameraR, myRenderedTexture2R, true);

    vrEffect.render(scene, camera, cameraL, cameraR, composer1, composer1L, composer1R);
  }
}
