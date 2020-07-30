
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

// Add Shark
let shark = new Entity()
shark.addComponent(new GLTFShape('models/shark.glb'))
shark.addComponent(
  new Transform({
    position: new Vector3(8, 3, 8)
  })
)
engine.addEntity(shark)

// Add animations
const animator = new Animator()
shark.addComponent(animator)

let clipSwim = new AnimationState('swim')
animator.addClip(clipSwim)

let clipBite = new AnimationState('bite')
animator.addClip(clipBite)

// Activate swim animation
clipSwim.play()

// Toggle bite animation when clicking the shark
shark.addComponent(
  new OnPointerDown(
    e => {
      clipBite.playing = !clipBite.playing
    },
    { button: ActionButton.POINTER, hoverText: 'Toggle bite' }
  )
)

