/**
* Jonny Armstrong
* Starter code provided by Patricio Simari
*/

// renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('white');
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// create a scene
var scene = new THREE.Scene();

// camera
var aspect = window.innerWidth/window.innerHeight;
var camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
camera.position.set(36.0, 20.0, 0);

// audio listener for bowling sound
var listener = new THREE.AudioListener();
camera.add(listener);
var sound = new THREE.Audio(listener);
var audioLoader = new THREE.AudioLoader();

// base
var base_geometry = new THREE.BoxGeometry(44, 1.25, 8);
// the lane texture png file is loaded onto the bowlign lane or 'base'
var base_texture = new THREE.TextureLoader().load( 'threejs/lane_texture.png' );
var base_material = new THREE.MeshBasicMaterial({map: base_texture});
base_material.color = new THREE.Color(182.0/255.0, 155.0/255.0, 76.0/255.0);
var base_mesh = new THREE.Mesh(base_geometry, base_material);
base_mesh.position.y = -(1.25 / 2);
scene.add(base_mesh);

// base 2
var base2_geometry = new THREE.BoxGeometry(44,1.25, 8);
// same png that was loaded for the first lane is used here for the 2nd
var base2_material = new THREE.MeshBasicMaterial({map: base_texture});
base2_material.color = new THREE.Color(182.0/255.0, 155.0/255.0, 76.0/255.0);
var base2_mesh = new THREE.Mesh(base2_geometry, base2_material);
base2_mesh.position.z = 13;
base2_mesh.position.y = -(1.25 / 2);
scene.add(base2_mesh);

// base 3
var base3_geometry = new THREE.BoxGeometry(44,1.25, 8);
// 3rd use of the lane png
var base3_material = new THREE.MeshBasicMaterial({map: base_texture});
base3_material.color = new THREE.Color(182.0/255.0, 155.0/255.0, 76.0/255.0);
var base3_mesh = new THREE.Mesh(base3_geometry, base3_material);
base3_mesh.position.z = -13;
base3_mesh.position.y = -(1.25 / 2);
scene.add(base3_mesh);

// back wall
 var wall_geometry = new THREE.BoxGeometry(2.0, 20.0, 40.0);
 var wall_texture = new THREE.TextureLoader().load( 'threejs/neon_wall_texture.png' );
 var wall_material = new THREE.MeshBasicMaterial({map: wall_texture});
 var wall_mesh = new THREE.Mesh(wall_geometry, wall_material);
 wall_mesh.position.x = -22;
 wall_mesh.position.y = 8;
 wall_mesh.position.z = 0;
 scene.add(wall_mesh);

 // side wall 1
  var sWall_geometry = new THREE.BoxGeometry(44.0, 20.0, 2.0);
  var sWall_material = new THREE.MeshPhongMaterial();
  sWall_material.color = new THREE.Color(182.0/255.0, 155.0/255.0, 76.0/255.0);
  var sWall_mesh = new THREE.Mesh(sWall_geometry, sWall_material);
  sWall_mesh.position.x = 0;
  sWall_mesh.position.y = 8;
  sWall_mesh.position.z = 21;
  scene.add(sWall_mesh);

  // side wall 2
var sWall2_geometry = new THREE.BoxGeometry(44.0, 20.0, 2.0);
var sWall2_material = new THREE.MeshPhongMaterial();
sWall2_material.color = new THREE.Color(182.0/255.0, 155.0/255.0, 76.0/255.0);
var sWall2_mesh = new THREE.Mesh(sWall2_geometry, sWall2_material);
sWall2_mesh.position.x = 0;
sWall2_mesh.position.y = 8;
sWall2_mesh.position.z = -21;
scene.add(sWall2_mesh);

// pin drop
var pinDrop_geometry = new THREE.BoxGeometry(6.0, 6.0, 40.0);
var pinDrop_material = new THREE.MeshPhongMaterial();
pinDrop_material.color = new THREE.Color(0,0,0);
var pinDrop_mesh = new THREE.Mesh(pinDrop_geometry, pinDrop_material);
pinDrop_mesh.position.x = -18;
pinDrop_mesh.position.y = (-2.9);
pinDrop_mesh.position.z = 0;
scene.add(pinDrop_mesh);

// drop guard
var dropGuard_geometry = new THREE.BoxGeometry(17, 1.0, 40);
var dropGuard_material = new THREE.MeshPhongMaterial();
dropGuard_material.color = new THREE.Color(127.5/255.0, 127.5/255.0, 127.5/255.0);
var dropGuard_mesh = new THREE.Mesh(dropGuard_geometry, dropGuard_material);
dropGuard_mesh.position.x = -20;
dropGuard_mesh.position.y = 4;
scene.add(dropGuard_mesh);

// gutter1
var gutter1_geometry = new THREE.BoxGeometry(44, 0.5, 2);
var gutter1_material = new THREE.MeshPhongMaterial();
gutter1_material.color = new THREE.Color(0,0,0);
var gutter1_mesh = new THREE.Mesh(gutter1_geometry, gutter1_material);
gutter1_mesh.position.y = -0.75;
gutter1_mesh.position.z = 5.0;
scene.add(gutter1_mesh);

// gutter2
var gutter2_geometry = new THREE.BoxGeometry(44, 0.5, 2);
var gutter2_material = new THREE.MeshPhongMaterial();
gutter2_material.color = new THREE.Color(0,0,0);
var gutter2_mesh = new THREE.Mesh(gutter2_geometry, gutter2_material);
gutter2_mesh.position.y = -0.75;
gutter2_mesh.position.z = -5.0;
scene.add(gutter2_mesh);

// gutter3
var gutter3_geometry = new THREE.BoxGeometry(44, 0.5, 2);
var gutter3_material = new THREE.MeshPhongMaterial();
gutter3_material.color = new THREE.Color(0,0,0);
var gutter3_mesh = new THREE.Mesh(gutter3_geometry, gutter3_material);
gutter3_mesh.position.y = -0.75;
gutter3_mesh.position.z = -8.0;
scene.add(gutter3_mesh);

// gutter4
var gutter4_geometry = new THREE.BoxGeometry(44, 0.5, 2);
var gutter4_material = new THREE.MeshPhongMaterial();
gutter4_material.color = new THREE.Color(0,0,0);
var gutter4_mesh = new THREE.Mesh(gutter4_geometry, gutter4_material);
gutter4_mesh.position.y = -0.75;
gutter4_mesh.position.z = 8.0;
scene.add(gutter4_mesh);

// gutter5
var gutter5_geometry = new THREE.BoxGeometry(44, 0.5, 2);
var gutter5_material = new THREE.MeshPhongMaterial();
gutter5_material.color = new THREE.Color(0,0,0);
var gutter5_mesh = new THREE.Mesh(gutter5_geometry, gutter5_material);
gutter5_mesh.position.y = -0.75;
gutter5_mesh.position.z = 18.0;
scene.add(gutter5_mesh);

// gutter6
var gutter6_geometry = new THREE.BoxGeometry(44, 0.5, 2);
var gutter6_material = new THREE.MeshPhongMaterial();
gutter6_material.color = new THREE.Color(0,0,0);
var gutter6_mesh = new THREE.Mesh(gutter6_geometry, gutter6_material);
gutter6_mesh.position.y = -0.75;
gutter6_mesh.position.z = -18.0;
scene.add(gutter6_mesh);

// guard1
var guard1_geometry = new THREE.BoxGeometry(44, 2.5, 1.0);
var guard1_material = new THREE.MeshPhongMaterial();
guard1_material.color = new THREE.Color(127.5/255.0, 127.5/255.0, 127.5/255.0);
var guard1_mesh = new THREE.Mesh(guard1_geometry, guard1_material);
guard1_mesh.position.y = -0.5;
guard1_mesh.position.z = -6.5;
scene.add(guard1_mesh);

// guard2
var guard2_geometry = new THREE.BoxGeometry(44, 2.5, 1.0);
var guard2_material = new THREE.MeshPhongMaterial();
guard2_material.color = new THREE.Color(127.5/255.0, 127.5/255.0, 127.5/255.0);
var guard2_mesh = new THREE.Mesh(guard2_geometry, guard2_material);
guard2_mesh.position.y = -0.5;
guard2_mesh.position.z = 6.5;
scene.add(guard2_mesh);

// guard3
var guard3_geometry = new THREE.BoxGeometry(44, 2.5, 1.0);
var guard3_material = new THREE.MeshPhongMaterial();
guard3_material.color = new THREE.Color(127.5/255.0, 127.5/255.0, 127.5/255.0);
var guard3_mesh = new THREE.Mesh(guard3_geometry, guard3_material);
guard3_mesh.position.y = -0.5;
guard3_mesh.position.z = 19.5;
scene.add(guard3_mesh);

// guard4
var guard4_geometry = new THREE.BoxGeometry(44, 2.5, 1.0);
var guard4_material = new THREE.MeshPhongMaterial();
guard4_material.color = new THREE.Color(127.5/255.0, 127.5/255.0, 127.5/255.0);
var guard4_mesh = new THREE.Mesh(guard4_geometry, guard4_material);
guard4_mesh.position.y = -0.5;
guard4_mesh.position.z = -19.5;
scene.add(guard4_mesh);

//pin7
var pin7_geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
var pin7_material = new THREE.MeshPhongMaterial();
pin7_material.color = new THREE.Color(112.0/255.0, 128.0/255.0, 144.0/255.0);
var pin7_mesh = new THREE.Mesh(pin7_geometry, pin7_material);
pin7_mesh.position.y = 0.25 + 1.0;
pin7_mesh.position.x = -5;
pin7_mesh.position.z = 13;
scene.add(pin7_mesh);

//pin8
var pin8_geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
var pin8_material = new THREE.MeshPhongMaterial();
pin8_material.color = new THREE.Color(112.0/255.0, 128.0/255.0, 144.0/255.0);
var pin8_mesh = new THREE.Mesh(pin8_geometry, pin8_material);
pin8_mesh.position.y = 0.25 + 1.0;
pin8_mesh.position.x = -7;
pin8_mesh.position.z = 13.8;
scene.add(pin8_mesh);

//pin9
var pin9_geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
var pin9_material = new THREE.MeshPhongMaterial();
pin9_material.color = new THREE.Color(112.0/255.0, 128.0/255.0, 144.0/255.0);
var pin9_mesh = new THREE.Mesh(pin9_geometry, pin9_material);
pin9_mesh.position.y = 0.25 + 1.0;
pin9_mesh.position.x = -7;
pin9_mesh.position.z = 12.2;
scene.add(pin9_mesh);

//pin10
var pin10_geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
var pin10_material = new THREE.MeshPhongMaterial();
pin10_material.color = new THREE.Color(112.0/255.0, 128.0/255.0, 144.0/255.0);
var pin10_mesh = new THREE.Mesh(pin10_geometry, pin10_material);
pin10_mesh.position.y = 0.25 + 1.0;
pin10_mesh.position.x = -9;
pin10_mesh.position.z = 13 + 1.6;
scene.add(pin10_mesh);

//pin11
var pin11_geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
var pin11_material = new THREE.MeshPhongMaterial();
pin11_material.color = new THREE.Color(112.0/255.0, 128.0/255.0, 144.0/255.0);
var pin11_mesh = new THREE.Mesh(pin11_geometry, pin11_material);
pin11_mesh.position.y = 0.25 + 1.0;
pin11_mesh.position.x = -9;
pin11_mesh.position.z = 13 - 1.6;
scene.add(pin11_mesh);

//pin12
var pin12_geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
var pin12_material = new THREE.MeshPhongMaterial();
pin12_material.color = new THREE.Color(112.0/255.0, 128.0/255.0, 144.0/255.0);
var pin12_mesh = new THREE.Mesh(pin12_geometry, pin12_material);
pin12_mesh.position.y = 0.25 + 1.0;
pin12_mesh.position.x = -9;
pin12_mesh.position.z = 13;
scene.add(pin12_mesh);

//pin13
var pin13_geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
var pin13_material = new THREE.MeshPhongMaterial();
pin13_material.color = new THREE.Color(112.0/255.0, 128.0/255.0, 144.0/255.0);
var pin13_mesh = new THREE.Mesh(pin13_geometry, pin13_material);
pin13_mesh.position.y = 0.25 + 1.0;
pin13_mesh.position.x = -5;
pin13_mesh.position.z = -13;
scene.add(pin13_mesh);

//pin14
var pin14_geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
var pin14_material = new THREE.MeshPhongMaterial();
pin14_material.color = new THREE.Color(112.0/255.0, 128.0/255.0, 144.0/255.0);
var pin14_mesh = new THREE.Mesh(pin14_geometry, pin14_material);
pin14_mesh.position.y = 0.25 + 1.0;
pin14_mesh.position.x = -7;
pin14_mesh.position.z = -12.2;
scene.add(pin14_mesh);

//pin15
var pin15_geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
var pin15_material = new THREE.MeshPhongMaterial();
pin15_material.color = new THREE.Color(112.0/255.0, 128.0/255.0, 144.0/255.0);
var pin15_mesh = new THREE.Mesh(pin15_geometry, pin15_material);
pin15_mesh.position.y = 0.25 + 1.0;
pin15_mesh.position.x = -7;
pin15_mesh.position.z = -13.8;
scene.add(pin15_mesh);

//pin16
var pin16_geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
var pin16_material = new THREE.MeshPhongMaterial();
pin16_material.color = new THREE.Color(112.0/255.0, 128.0/255.0, 144.0/255.0);
var pin16_mesh = new THREE.Mesh(pin16_geometry, pin16_material);
pin16_mesh.position.y = 0.25 + 1.0;
pin16_mesh.position.x = -9;
pin16_mesh.position.z = -13;
scene.add(pin16_mesh);

//pin17
var pin17_geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
var pin17_material = new THREE.MeshPhongMaterial();
pin17_material.color = new THREE.Color(112.0/255.0, 128.0/255.0, 144.0/255.0);
var pin17_mesh = new THREE.Mesh(pin17_geometry, pin17_material);
pin17_mesh.position.y = 0.25 + 1.0;
pin17_mesh.position.x = -9;
pin17_mesh.position.z = -13 + 1.6;
scene.add(pin17_mesh);

//pin18
var pin18_geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
var pin18_material = new THREE.MeshPhongMaterial();
pin18_material.color = new THREE.Color(112.0/255.0, 128.0/255.0, 144.0/255.0);
var pin18_mesh = new THREE.Mesh(pin18_geometry, pin18_material);
pin18_mesh.position.y = 0.25 + 1.0;
pin18_mesh.position.x = -9;
pin18_mesh.position.z = -13 - 1.6;
scene.add(pin18_mesh);

// lights
var light_ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(light_ambient);
var light_point = new THREE.PointLight();
light_point.position.set(camera.position.x, camera.position.y, camera.position.z);
scene.add(light_point);

// stats
var stats = new Stats();
document.body.appendChild(stats.dom);

// gui
var gui = new dat.GUI();
gui.width = 400;
var h;
h = gui.addFolder("Lighting");
h.open();
h.add(light_ambient, "intensity", 0.0, 1.0, 0.1).name("Ambient Light Intensity");
h.add(light_point,   "intensity", 0.0, 1.0, 0.1).name("Point Light Intensity");


// controls
var controls = new THREE.OrbitControls(camera, renderer.domElement);

// generate scene elements including the bowling ball
// as well as the pins in the center row
var ball = makeBall();
scene.add(ball);
ball.position.x = 18.0;
ball.position.y = 1.0;
ball.position.z = 0.0;

var pin = makePin();
scene.add(pin);
pin.position.y = 0.25 + 1.0;
pin.position.x = -5;
pin.position.z = 0;

var pin2 = makePin();
scene.add(pin2);
pin2.position.y = 1.35;
pin2.position.x = -7;
pin2.position.z = 0.8;

var pin3 = makePin();
scene.add(pin3);
pin3.position.y = 1.35;
pin3.position.x = -7;
pin3.position.z = -0.8;

var pin4 = makePin();
scene.add(pin4);
pin4.position.y = 1.35;
pin4.position.x = -9;
pin4.position.z = 1.6;

var pin5 = makePin();
scene.add(pin5);
pin5.position.y = 1.35;
pin5.position.x = -9;
pin5.position.z = 0;

var pin6 = makePin();
scene.add(pin6);
pin6.position.y = 1.35;
pin6.position.x = -9;
pin6.position.z = -1.6;

// keep track of ball's velocity (meters per second)
var ball_velocity = new THREE.Vector3(-18.0, 0.0, 0.0);

// Depending on whether the pin flies straight backwards
// or skewed left or right, the appropriate velocity is added
var pin_velocity = new THREE.Vector3(-40.0, 0.0, 0.0);
var pin_velocity_skewed_left = new THREE.Vector3(-36.0, 0.0, 5.0);
var pin_velocity_skewed_right = new THREE.Vector3(-36.0, 0.0, -5.0);

// set gravity and the speed the pins rotate when struck
var gravity = new THREE.Vector3(0.0, -29.4, 0.0);
var friction = new THREE.Vector3(5.0, 0.0, 0.0);
var spinVal = 6;


// create animation clock and start animation
var clock = new THREE.Clock();

// start off animation
animate();

// -----------------------------------------------------------------------------
function animate() {

  // put this function in queue for another frame after this one
  requestAnimationFrame(animate);

  // get delta time: seconds passed since last frame
  dt = clock.getDelta();

  // update ball position according to velocity and dt
  ball.position.addScaledVector(ball_velocity, dt);

  // will hold bounce correction on collision
  var bounce_dist;


  // Right before the bowling ball hits the pins, the sound effect
  // is loaded in. It is slightly delaye, so by putting it alightly ahead
  // it times up with the animation
  if(ball.position.x - 1.25 < -1.75 && ball.position.x >= -20.35)
  {
    audioLoader.load( 'threejs/bowling2.mp3', function( buffer ) {
      sound.setBuffer( buffer );
      sound.setVolume( 0.5 );
      sound.play();
    });
  }

  // ball has hit the first pin, slow ball down and send pin flying
  if(ball.position.x - 1.25 < -4.75 && ball.position.x >= -20.35)
  {
    ball_velocity.addScaledVector(friction, dt);

    pin.position.addScaledVector(pin_velocity, dt);
    pin.rotation.z += spinVal;

  }

  // first pin has hit the second row of pins, send second row flying
  if(pin.position.x < -8 )
  {
    pin2.position.addScaledVector(pin_velocity_skewed_left, dt);
    pin3.position.addScaledVector(pin_velocity, dt);

    pin2.rotation.z += spinVal;
    pin3.rotation.z += spinVal;
  }

  // Second row of pins have hit the third row, send third row flying
  if(pin2.position.x < -10 )
  {
    pin4.position.addScaledVector(pin_velocity_skewed_left, dt);
    pin5.position.addScaledVector(pin_velocity, dt);
    pin6.position.addScaledVector(pin_velocity_skewed_right, dt);

    pin4.rotation.z += spinVal;
    pin5.rotation.z += spinVal;
    pin6.rotation.z += spinVal;
  }

  // When the pins hit the back wall, fall straight downward. This is an
  // approximation as the first pin will hit before the others but they
  // all obey gravity at the same time
  if(pin.position.x < -18.5)
  {
    pin_velocity.x = 0;
    pin_velocity_skewed_left.x = 0;
    pin_velocity_skewed_right.x = 0

    pin_velocity_skewed_left.z = 2;
    pin_velocity_skewed_right.z = -2;

    pin_velocity.addScaledVector(gravity, dt);
    pin_velocity_skewed_left.addScaledVector(gravity, dt);
    pin_velocity_skewed_right.addScaledVector(gravity, dt);
  }

  // When the bowling ball hits the back wall it falls downward
  if(ball.position.x < -15.5)
  {
    ball_velocity.x = -5;
    ball_velocity.addScaledVector(gravity, dt);
  }

    // update
    light_point.position.set(camera.position.x, camera.position.y, camera.position.z);
    controls.update();
    stats.update();

    // render
    renderer.render(scene, camera);

}
// -----------------------------------------------------------------------------

function makeBall() {

    // create sphere geometry
    var geometry = new THREE.SphereGeometry(1.25,32,32);

    // create material so geometry can be rendered
    var material = new THREE.MeshPhongMaterial();
    material.color = new THREE.Color(255.0, 105.0/255.0, 180.0/255.0);

    // create mesh using geometry and material
    var mesh = new THREE.Mesh(geometry, material);

    return mesh;

}

function makePin() {

  // create cylider geometry
  var geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);

  // create material
  var material = new THREE.MeshPhongMaterial();
  material.color = new THREE.Color(112.0/255.0, 128.0/255.0, 144.0/255.0);

  // create mesh
  var mesh = new THREE.Mesh(geometry, material);

  return mesh;
}
