function animate() {
  requestAnimationFrame(animate);

  if (window.dougstooth && window.secondDougstooth && window.screenCube) {
    window.dougstooth.rotation.x += 0.001;
    window.dougstooth.rotation.y += 0.001;
    window.secondDougstooth.rotation.x -= 0.001;
    window.secondDougstooth.rotation.y -= 0.001;
  }

  var time = performance.now();
  var delta = ( time - prevTime ) / 1000;

  velocity.x -= velocity.x * 5.0 * delta;
  velocity.z -= velocity.z * 5.0 * delta;

  if ( moveForward ) velocity.z -= 40.0 * delta;
  if ( moveBackward ) velocity.z += 40.0 * delta;

  if ( moveLeft ) velocity.x -= 40.0 * delta;
  if ( moveRight ) velocity.x += 40.0 * delta;

  player.translateX( velocity.x * delta );
  player.translateZ( velocity.z * delta );

  prevTime = time;

  render();
}
