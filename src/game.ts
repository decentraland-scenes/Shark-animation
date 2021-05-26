// Add 3D model for scenery
const seaBed = new Entity()
seaBed.addComponent(new GLTFShape('models/Underwater.gltf'))
seaBed.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(0.8, 0.8, 0.8),
  })
)
engine.addEntity(seaBed)

// Add Shark
let shark = new Entity()
shark.addComponent(new GLTFShape('models/shark.glb'))
shark.addComponent(
  new Transform({
    position: new Vector3(8, 3, 8),
  })
)
engine.addEntity(shark)

// Add animations
const animator = new Animator()
let clipSwim = new AnimationState('swim', { layer: 0, weight: 0.9 })
let clipBite = new AnimationState('bite', { layer: 1, weight: 0.01 })
animator.addClip(clipBite)
animator.addClip(clipSwim)

// Activate swim animation
clipSwim.play()

// Toggle bite animation when clicking the shark
shark.addComponent(
  new OnPointerDown(
    (e) => {
      clipBite.playing = !clipBite.playing
    },
    { button: ActionButton.POINTER, hoverText: 'Toggle bite' }
  )
)

// Add shark to engine
engine.addEntity(shark)
