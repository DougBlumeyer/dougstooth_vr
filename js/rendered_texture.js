function renderedTexture() {
  myRenderedTexture = new THREE.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat //.RGBFormat
    }
  );
}
