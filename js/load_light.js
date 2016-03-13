function loadLight() {
  var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set( -2, -2, -1 );
  directionalLight.target.position.set(2,4,1 );

  var spotLight = new THREE.SpotLight();
  spotLight.position.set( 2, 4, 1 );

  scene.add( spotLight );
}
