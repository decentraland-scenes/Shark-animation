import { Mode, ActivateAnim } from "./modules/activateAnim";

// Add Shark
let shark = new Entity()
shark.addComponent(new Transform({
  position: new Vector3(10, 3, 10)
}))
shark.addComponent(new GLTFShape("models/shark.gltf"))

// Add animations

let trig = new Entity()
trig.addComponent(new BoxShape())
trig.addComponent(new Transform({
  position: new Vector3(8, 1, 10)
}))
engine.addEntity(trig)

let clipSwim = ActivateAnim(shark, "swim", Mode.AlwaysOn)
//let clipBite = ActivateAnim(shark, "bite", Mode.ClickToggle)
let clipBite = ActivateAnim(shark, "bite", Mode.TriggerClickToggle, trig)



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