// Add Shark
let shark = new Entity()
shark.add(new Transform({
  position: new Vector3(5, 3, 5)
}))
shark.add(new GLTFShape("models/shark.gltf"))

// Add animations
/* 
NOTE: when you try to get an animation clip that hasn't been created
from a GLTFShape component, the clip is created automatically.
*/
 let clipSwim = shark.get(GLTFShape).getClip("swim")
let clipBite = shark.get(GLTFShape).getClip("bite")

// Activate swim animation
clipSwim.play()

// Add click interaction
shark.add(new OnClick(e => {
  clipBite.playing =! clipBite.playing
}))

// Add shark to engine
engine.addEntity(shark)

// Add 3D model for scenery
const seaBed = new Entity()
seaBed.add(new GLTFShape("models/Underwater.gltf"))
seaBed.add(new Transform({
  position: new Vector3(5, 0, 5)
}))
engine.addEntity(seaBed)