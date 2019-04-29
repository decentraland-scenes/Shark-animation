
// list of possible goals
export enum Mode {
    AlwaysOn,
    ClickOn,
    ClickToggle,
    TriggerClickOn,
    TriggerClickToggle,
    TriggerCollisionOn,
    TriggerCollisionToggle
  }

export function ActivateAnim(ent: Entity, anim: string, mode: Mode, trigger?: Entity){
    if (!ent.hasComponent(Animator)){
        ent.addComponent(new Animator())
    }

    let clip = new AnimationState(anim)
    ent.getComponent(Animator).addClip(clip)

    switch (mode) {
        case Mode.AlwaysOn:
          clip.play()
          break
        case Mode.ClickOn:
          ent.addComponentOrReplace(new OnPointerDown(e => {
            clip.play()
          }))
          break
        case Mode.ClickToggle:
          ent.addComponentOrReplace(new OnPointerDown(e => {
            clip.playing =! clip.playing
          }))
          break
        case Mode.TriggerClickOn:
          trigger.addComponentOrReplace(new OnPointerDown(e => {
            clip.play()
          }))
          break
        case Mode.TriggerClickToggle:
          trigger.addComponentOrReplace(new OnPointerDown(e => {
            clip.playing =! clip.playing
          }))
          break
    }
    return clip
}