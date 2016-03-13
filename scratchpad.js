sceneRTT = new THREE.Scene();
sceneScreen = new THREE.Scene();

cameraRTT = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, -10000, 10000 );
cameraRTT.position.z = 100;

geometry = new THREE.SphereGeometry( 10, 64, 32 ),
material2 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: rtTexture } );
