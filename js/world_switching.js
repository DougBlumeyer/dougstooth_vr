function checkForWorldSwitching() {
  raycaster.setFromCamera({x: 0, y: 0}, camera);
  raycaster.setFromCamera({x: 0, y: 0}, secondCamera);

  var intersects = raycaster.intersectObjects([window.screenCube]);
  var secondIntersects = raycaster.intersectObjects([window.secondScreenCube]);

  if (!inSecondWorld && intersects.length > 0 && intersects[0].distance < 1) {
    console.log('switch to second world')
    inSecondWorld = true;
  } else if (secondIntersects.length > 0 && secondIntersects[0].distance < 1) {
    console.log('switch to first world')
    inSecondWorld = false;
  }


  if (inSecondWorld) {
    // console.log('rendering in 2nd world')
                renderer.render(scene, camera, myRenderedTexture, true);

    vrEffect.render(secondScene, secondCamera, composer2);
  } else {
        // console.log('rendering in 1st world')
            renderer.render(secondScene, secondCamera, myRenderedTexture, true);

    // renderer.render(secondScene, secondCamera, renderedTexture, true);
    vrEffect.render(scene, camera, composer1);
  }
}
