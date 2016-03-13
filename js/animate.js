function animate() {
  requestAnimationFrame(animate);

  if (window.dougstooth && window.secondDougstooth && window.screenCube) {
    window.dougstooth.rotation.x += 0.001;
    window.dougstooth.rotation.y += 0.001;
    window.secondDougstooth.rotation.x -= 0.001;
    window.secondDougstooth.rotation.y -= 0.001;
  }
  
  render();
}
