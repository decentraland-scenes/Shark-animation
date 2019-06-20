// a message bus to sync state for all players
const sceneMessageBus = new MessageBus()


// Add Shark
let shark = new Entity()
shark.addComponent(new Transform({
  position: new Vector3(8, 3, 8)
}))
shark.addComponent(new GLTFShape("models/shark.glb"))

// Add animations
/* 
NOTE: when you try to get an animation clip that hasn't been created
from a GLTFShape component, the clip is created automatically.
*/
const animator = new Animator();
let clipSwim = new AnimationState("swim")
let clipBite = new AnimationState("bite")
animator.addClip(clipBite);
animator.addClip(clipSwim);

shark.addComponent(animator);

// Activate swim animation
clipSwim.play()

// Add click interaction
shark.addComponent(new OnClick(e => {
  sceneMessageBus.emit("clickShark", {playing: !clipBite.playing})
  
}))

sceneMessageBus.on("clickShark", (info) => {	
	clipBite.playing = info.playing
  });


// Add shark to engine
engine.addEntity(shark)

// Add 3D model for scenery
const seaBed = new Entity()
seaBed.addComponent(new GLTFShape("models/Underwater.gltf"))
seaBed.addComponent(new Transform({
  position: new Vector3(8, 0, 8),
  scale: new Vector3(0.8, 0.8, 0.8)
}))
engine.addEntity(seaBed)


  // To get the initial state of the scene when joining
  sceneMessageBus.emit("getSharkState",{})
  
  // To return the initial state of the scene to new players
  sceneMessageBus.on("getSharkState", () => {
	sceneMessageBus.emit("clickShark", {playing: clipBite.playing})
});
  