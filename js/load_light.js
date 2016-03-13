function loadLight() {
  // var light = new THREE.DirectionalLight(0xffffff, 1);
  // light.position.set(1, 1, 1).normalize();
  // scene.add(light);

  var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set( -2, -2, -1 );
  directionalLight.target.position.set(2,4,1 );

  var spotLight = new THREE.SpotLight();
  spotLight.position.set( 2, 4, 1 );
  spotLight.castShadow = true;

  spotLight.shadowMapWidth = 512;
  spotLight.shadowMapHeight = 512;

  var d = 200;

  spotLight.shadowCameraLeft = -d;
  spotLight.shadowCameraRight = d;
  spotLight.shadowCameraTop = d;
  spotLight.shadowCameraBottom = -d;

  spotLight.shadowCameraNear = 1;
  spotLight.shadowCameraFar = 1000;
  spotLight.shadowDarkness = 0.5;

  scene.add( spotLight );
}
