// Add Shark
let shark = new Entity()
shark.addComponent(
  new Transform({
    position: new Vector3(8, 3, 8)
  })
)
shark.addComponent(new GLTFShape('models/shark.glb'))

// Add animations
/* 
NOTE: when you try to get an animation clip that hasn't been created
from a GLTFShape component, the clip is created automatically.
*/
const animator = new Animator()
let clipSwim = new AnimationState('swim', { weight: 0.9 })
let clipBite = new AnimationState('bite', { weight: 0.01 })
animator.addClip(clipBite)
animator.addClip(clipSwim)

shark.addComponent(animator)

// Activate swim animation
clipSwim.play()

// Add click interaction
shark.addComponent(
  new OnPointerDown(
    e => {
      clipBite.playing = !clipBite.playing
    },
    { button: ActionButton.POINTER, hoverText: 'Toggle bite' }
  )
)

// Add shark to engine
engine.addEntity(shark)

// Add 3D model for scenery
const seaBed = new Entity()
seaBed.addComponent(new GLTFShape('models/Underwater.gltf'))
seaBed.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(0.8, 0.8, 0.8)
  })
)
engine.addEntity(seaBed)
