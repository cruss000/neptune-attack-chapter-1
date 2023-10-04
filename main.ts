enum ActionKind {
    Walking,
    Idle,
    Jumping,
    yeet
}
namespace SpriteKind {
    export const Cam_Trick_lol = SpriteKind.create()
    export const prop = SpriteKind.create()
    export const hitbox = SpriteKind.create()
    export const bond = SpriteKind.create()
    export const scene = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Raptorian.startEffect(effects.trail, 1000)
    if (characterAnimations.matchesRule(Raptorian, characterAnimations.rule(Predicate.FacingRight))) {
        Raptorian.setVelocity(199, 0)
    }
    if (characterAnimations.matchesRule(Raptorian, characterAnimations.rule(Predicate.FacingLeft))) {
        Raptorian.setVelocity(-199, 0)
    }
    if (Raptorian.overlapsWith(invader)) {
        effects.clearParticles(Raptorian)
        sprites.destroy(invader, effects.fire, 500)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 5000, 1, 255, 255, 300, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    if (characterAnimations.matchesRule(Raptorian, characterAnimations.rule(Predicate.FacingLeft))) {
        pew = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 3 3 3 2 2 2 . . . . . 
            . . . 2 3 1 1 1 1 1 3 3 2 2 2 . 
            . . . 2 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . 2 3 1 1 1 1 1 3 3 2 2 2 . 
            . . . . 2 3 3 3 3 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Raptorian, -120, 0)
    }
    if (characterAnimations.matchesRule(Raptorian, characterAnimations.rule(Predicate.FacingRight))) {
        pew = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 3 3 3 2 . . . . 
            . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 2 . . . 
            . 2 2 2 3 3 1 1 1 1 1 3 2 . . . 
            . . . . . 2 2 3 3 3 3 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Raptorian, 120, 0)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite == enemy_pew) {
        raptorian_hp.value += -2
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    Raptorian,
    [img`
        . 8 8 8 . . . . . . . . . . . . 
        . f 1 8 . . . . . . . . . . . . 
        4 8 8 8 . c c c c c c . . . . . 
        . . . 4 . . . . c . c . . . . . 
        . . . . 4 . . . c . c . . . f 7 
        . . . . 8 8 8 8 8 8 8 8 8 8 b b 
        . . . . 8 8 8 8 8 8 8 8 8 8 b b 
        . . . . 8 8 8 8 8 8 8 8 8 8 b b 
        . . . . 8 8 8 8 8 8 8 8 8 8 b b 
        . . . . 4 8 8 8 8 8 8 8 8 8 b b 
        . . . 4 . . . 4 . . . . 4 . . 4 
        . . . 4 . . . 4 . . . . 4 . 4 2 
        . . . 4 . . . . 4 . 4 . . 4 4 . 
        . . 4 . 4 . . . . 4 4 . . . 4 . 
        . . . . . . . . . . 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . 8 8 8 . . . . . . . . . . . . 
        . f 1 8 . . . . . . . . . . . . 
        4 8 8 8 . c c c c c c . . . . . 
        . . . 4 . . . . c . c . . . . . 
        . . . . 4 . . . c . c . . . f 7 
        . . . . 8 8 8 8 8 8 8 8 8 8 b b 
        . . . . 8 8 8 8 8 8 8 8 8 8 b b 
        . . . . 8 8 8 8 8 8 8 8 8 8 b b 
        . . . . 8 8 8 8 8 8 8 8 8 8 b b 
        . . . . 4 8 8 8 8 8 8 8 8 8 b b 
        . . . 4 . . . 4 . . . . 4 . . 5 
        . . . 4 . . . 4 . . . . 4 . 4 2 
        . . . 4 . . . . 4 . 4 . . 4 4 . 
        . . 4 . 4 . . . . 4 4 . . . 4 . 
        . . . . . . . . . . 4 . . . . . 
        `],
    300,
    characterAnimations.rule(Predicate.FacingLeft, Predicate.Moving)
    )
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    music.stopAllSounds()
    sprites.destroy(invader)
    controller.moveSprite(Raptorian, 0, 0)
    Raptorian.setVelocity(0, 100)
    characterAnimations.clearCharacterState(Raptorian)
    animation.runImageAnimation(
    Raptorian,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 8 8 8 . 
        . . . . . . . . . . . . 8 1 f . 
        . . . . c c c c c . . . 8 8 8 4 
        . . . . c . c . . . . . 4 . . . 
        f 2 . . c . c . . . . 4 . . . . 
        b b 8 8 8 8 8 8 8 8 8 . . . . . 
        b b 8 8 8 8 8 8 8 8 8 . . . . . 
        b b 8 8 8 8 8 8 8 8 8 . . . . . 
        b b 8 8 8 8 8 8 8 8 8 4 . . . . 
        . . . . . 4 . . . . 4 . 4 . . . 
        . . . . . 4 . . . . 4 . . 4 . . 
        . . . . . 4 . . . . 4 . 4 . 4 . 
        . . 4 . 4 . . 4 . 4 . . . . . . 
        . . 4 4 . . . 4 4 . . . . . . . 
        . . 4 . . . . 4 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 8 8 8 . 
        . . . . . . . . . . . . 8 8 8 . 
        . . . . c c c c c . . . 8 8 8 4 
        . . . . c . c . . . . . 4 . . . 
        f 2 . . c . c . . . . 4 . . . . 
        b b 8 8 8 8 8 8 8 8 8 . . . . . 
        b b 8 8 8 8 8 8 8 8 8 . . . . . 
        b b 8 8 8 8 8 8 8 8 8 . . . . . 
        b b 8 8 8 8 8 8 8 8 8 4 . . . . 
        . . . . 4 . . . . . 4 . 4 . . . 
        . . . 4 . . . . . 4 . . 4 . . . 
        4 . 4 . . . 4 . 4 . . 4 . 4 . . 
        4 4 . . . . 4 4 . . . . . . . . 
        4 . . . . . 4 . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f 2 . . . . . . . . . . . . . . 
        b b 8 8 8 8 8 8 8 8 8 . 8 8 8 . 
        4 b 8 8 8 8 8 8 8 8 8 . 8 8 8 . 
        4 4 4 4 8 8 4 4 4 4 8 4 8 8 8 4 
        `],
    100,
    false
    )
    music.play(music.createSong(hex`0063000408020100001c00010a006400f401640000040000000000000000000000000005000004480000000400012404000800012508000c00012410001400012418001c0001242000240001202400280001292c003000012430003400011d34003800012538003c0001273c0040000120`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`0063000408020100001c00010a006400f401640000040000000000000000000000000005000004480000000400012404000800012508000c00012410001400012418001c0001242000240001202400280001292c003000012430003400011d34003800012538003c0001273c0040000120`), music.PlaybackMode.UntilDone)
    music.play(music.createSong(hex`0063000408020400001c00010a006400f401640000040000000000000000000000000005000004480000000400012404000800012508000c00012410001400012418001c0001242000240001202400280001292c003000012430003400011d34003800012538003c0001273c004000012005001c000f0a006400f4010a0000040000000000000000000000000000000002480000000400011904000800011b08000c00011910001400011918001c00011920002400011924002800011d2c003000011930003400011934003800011b38003c00011d3c004000011908001c000e050046006603320000040a002d0000006400140001320002010002420000000400012004000800012208000c00012010001400012018001c00012020002400011d2400280001252c003000012034003800012238003c0001243c004000011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c80048000000010001020400050001030800090001021000110001021800190001022000210001002400250001032c002d0001013000310001003400350001023800390001033c003d000101`), music.PlaybackMode.LoopingInBackground)
    game.setGameOverPlayable(true, music.melodyPlayable(music.zapped), false)
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
    game.setGameOverMessage(false, "neptune has fallen")
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    characterAnimations.loopFrames(
    Raptorian,
    [img`
        . . . . . . . . . . . . 8 8 8 . 
        . . . . . . . . . . . . 8 1 f . 
        . . . . . c c c c c c . 8 8 8 4 
        . . . . . c . c . . . . 4 . . . 
        7 f . . . c . c . . . 4 . . . . 
        b b 8 8 8 8 8 8 8 8 8 8 . . . . 
        b b 8 8 8 8 8 8 8 8 8 8 . . . . 
        b b 8 8 8 8 8 8 8 8 8 8 . . . . 
        b b 8 8 8 8 8 8 8 8 8 8 . . . . 
        b b 8 8 8 8 8 8 8 8 8 4 . . . . 
        4 . . 4 . . . . 4 . . . 4 . . . 
        2 4 . 4 . . . . 4 . . . 4 . . . 
        . 4 4 . . 4 . 4 . . . . 4 . . . 
        . 4 . . . 4 4 . . . . 4 . 4 . . 
        . . . . . 4 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . 8 8 8 . 
        . . . . . . . . . . . . 8 1 f . 
        . . . . . c c c c c c . 8 8 8 4 
        . . . . . c . c . . . . 4 . . . 
        7 f . . . c . c . . . 4 . . . . 
        b b 8 8 8 8 8 8 8 8 8 8 . . . . 
        b b 8 8 8 8 8 8 8 8 8 8 . . . . 
        b b 8 8 8 8 8 8 8 8 8 8 . . . . 
        b b 8 8 8 8 8 8 8 8 8 8 . . . . 
        b b 8 8 8 8 8 8 8 8 8 4 . . . . 
        5 . . 4 . . . . 4 . . . 4 . . . 
        2 4 . 4 . . . . 4 . . . 4 . . . 
        . 4 4 . . 4 . 4 . . . . 4 . . . 
        . 4 . . . 4 4 . . . . 4 . 4 . . 
        . . . . . 4 . . . . . . . . . . 
        `],
    300,
    characterAnimations.rule(Predicate.FacingRight, Predicate.Moving)
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite == pew) {
        if (characterAnimations.matchesRule(invader, characterAnimations.rule(Predicate.Moving))) {
            music.stopAllSounds()
            sprites.destroy(invader, effects.fire, 200)
            music.play(music.createSong(hex`00c7000408030300001c00010a006400f401640000040000000000000000000000000005000004600000000400012404000800012408000c0001240c001000012410001400012414001800012418001c0001241c002000012420002400012424002800012428002c0001242c003000012430003400012434003800012438003c0001243c004000012405001c000f0a006400f4010a00000400000000000000000000000000000000022a0000000400011d20002400011d40004400012548004c0001294c005000012554005800011e58005c00012508001c000e050046006603320000040a002d00000064001400013200020100022a0000000400011920002400011940004400011948004c0001194c005000011954005800011958005c000119`), music.PlaybackMode.InBackground)
        }
        if (characterAnimations.matchesRule(invader, characterAnimations.rule(Predicate.NotMoving))) {
            music.stopAllSounds()
            sprites.destroy(invader, effects.fire, 200)
        }
    }
})
let enemy_pew: Sprite = null
let pew: Sprite = null
let raptorian_hp: StatusBarSprite = null
let invader: Sprite = null
let Raptorian: Sprite = null
music.setVolume(1000)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal, scroller.BackgroundLayer.Layer4)
scroller.scrollBackgroundWithSpeed(100, 0, scroller.BackgroundLayer.Layer4)
scroller.setLayerImage(scroller.BackgroundLayer.Layer4, img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    99ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffcccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffcccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffcccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffcccccccccccccccccfffffffffffffffffffffffffff99fffffffffffffffffcccccccccccccccffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffccccccccccccccccccfffffffffffffffffffffffffffbbfffffffffffffffffcccccccccccccccccffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffcccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffcccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99fffffffffffffffcccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffcccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffcccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffcccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffcccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccfffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccfffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
Raptorian = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . 8 8 8 . 
    . . . . . . . . . . . . 8 1 f . 
    . . . c c c c c c . . . 8 8 8 4 
    . . . c . c . . . . . . 4 . . . 
    f 2 . c . c . . . . . 4 . . . . 
    b b 8 8 8 8 8 8 8 8 8 . . . . . 
    b b 8 8 8 8 8 8 8 8 8 . . . . . 
    b b 8 8 8 8 8 8 8 8 8 . . . . . 
    b b 8 8 8 8 8 8 8 8 8 . . . . . 
    . . . 4 . . . . . 4 . 4 . . . . 
    . . . 4 . . . . . 4 . . 4 . . . 
    . . . 4 . . . . . 4 . 4 . 4 . . 
    . . . 4 . . . . . 4 . . . . . . 
    . . 4 4 4 . . . 4 4 4 . . . . . 
    `, SpriteKind.Player)
let cam = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Cam_Trick_lol)
invader = sprites.create(img`
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    .................272....................
    .................727....................
    .................272....................
    .................ccc....................
    ................1111bbb.................
    ...............c1.cb1...................
    ................c.b.1...................
    ..................c.....................
    .................ccc....................
    .................ccc....................
    .................c.c....................
    .................c.c....................
    .................c.c....................
    .................c.c....................
    .................c.c....................
    .................c.c....................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    ........................................
    `, SpriteKind.Enemy)
let trigger = sprites.create(img`
    ....................
    ....................
    ..ccc...............
    2.ccc.2.............
    .2ccc2..............
    .c.c.c..............
    c..c..c.............
    ...c................
    ...c................
    ...c................
    ...c................
    ..ccc...............
    ..c.c...............
    ..c.c...............
    ..c.c...............
    ..c.c...............
    ..c.c...............
    ..c.c...............
    ..c.c...............
    ..c.c...............
    `, SpriteKind.scene)
raptorian_hp = statusbars.create(40, 4, StatusBarKind.Health)
raptorian_hp.setColor(8, 9, 6)
raptorian_hp.positionDirection(CollisionDirection.Top)
raptorian_hp.setLabel("HP", 6)
raptorian_hp.value = 100
scene.cameraFollowSprite(cam)
tiles.setCurrentTilemap(tilemap`intro`)
tiles.placeOnTile(cam, tiles.getTileLocation(59, 92))
cam.setVelocity(100, 0)
tiles.placeOnTile(Raptorian, tiles.getTileLocation(2, 106))
tiles.placeOnTile(invader, tiles.getTileLocation(69, 108))
tiles.placeOnTile(trigger, tiles.getTileLocation(118, 96))
for (let index = 0; index < 2; index++) {
    music.play(music.createSong(hex`00c7000408020105001c000f0a006400f4010a00000400000000000000000000000000000000023800000004000224290c001000021d2218001c00021e2420002400021e2728002c0002252a2c0030000220253000340002222734003800022429`), music.PlaybackMode.UntilDone)
}
pause(1000)
music.play(music.melodyPlayable(music.siren), music.PlaybackMode.InBackground)
scene.cameraShake(8, 2000)
pause(7000)
cam.setVelocity(0, 0)
pause(2000)
cam.follow(Raptorian, 85)
for (let index = 0; index < 14; index++) {
    music.play(music.createSong(assets.song`invasion`), music.PlaybackMode.UntilDone)
}
pause(2000)
controller.moveSprite(Raptorian)
game.onUpdateInterval(800, function () {
    if (characterAnimations.matchesRule(invader, characterAnimations.rule(Predicate.Moving, Predicate.FacingRight))) {
        invader.startEffect(effects.fire, 800)
        music.play(music.createSoundEffect(WaveShape.Square, 5000, 1, 255, 255, 200, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        enemy_pew = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, invader, 199, 0)
    }
    if (characterAnimations.matchesRule(invader, characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft))) {
        invader.startEffect(effects.fire, 800)
        music.play(music.createSoundEffect(WaveShape.Square, 5000, 1, 255, 255, 200, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        enemy_pew = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, invader, -199, 0)
    }
})
forever(function () {
    characterAnimations.loopFrames(
    invader,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . c c c . . . . . . . . 
        . . . . c d c d c . . . . . . . 
        . . . b b b b b b c . . . . . . 
        . . . . c b c d b . . . . . . . 
        . . . . . d b d . . . . . . . . 
        . . . . . 2 c 2 . . . . . . . . 
        . . . . . . c 4 . . . . . . . . 
        . . . . . c . c . . . . . . . . 
        . . . . c . . . c . . . . . . . 
        . . . . . c . . . c . . . . . . 
        . . . . . . c . . . c . . . . . 
        . . . . . . . c . . . c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 4 2 . . . . . . . . 
        . . . . . 2 4 2 . . . . . . . . 
        . . . . . 2 4 2 . . . . . . . . 
        . . . . . c c c . . . . . . . . 
        . . . . c d c d c . . . . . . . 
        . . . b b b b b b c . . . . . . 
        . . . . c b c d b . . . . . . . 
        . . . . . d b d . . . . . . . . 
        . . . . . 2 c 2 . . . . . . . . 
        . . . . . 4 c . . . . . . . . . 
        . . . . . c . c . . . . . . . . 
        . . . . c . . . c . . . . . . . 
        . . . . . c . . . c . . . . . . 
        . . . . . . c . . . c . . . . . 
        . . . . . . . c . . . c . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . 4 4 4 . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . . . c c c . . . . . . . . 
        . . . . c d c d c . . . . . . . 
        . . . b b b b b b c . . . . . . 
        . . . . c b c d b . . . . . . . 
        . . . . . d b d . . . . . . . . 
        . . . . . 2 c 2 . . . . . . . . 
        . . . . . 4 c 4 . . . . . . . . 
        . . . . . c . c . . . . . . . . 
        . . . . c . . . c . . . . . . . 
        . . . . . c . . . c . . . . . . 
        . . . . . . c . . . c . . . . . 
        . . . . . . . c . . . c . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingLeft)
    )
})
forever(function () {
    characterAnimations.loopFrames(
    invader,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 2 . . . . . 
        . . . . . . . . 2 2 2 . . . . . 
        . . . . . . . . 2 2 2 . . . . . 
        . . . . . . . . c c c . . . . . 
        . . . . . . . c d c d c . . . . 
        . . . . . . c b b b b b b . . . 
        . . . . . . . b d c b c . . . . 
        . . . . . . . . d b d . . . . . 
        . . . . . . . . 2 c 2 . . . . . 
        . . . . . . . . . c 4 . . . . . 
        . . . . . . . . c . c . . . . . 
        . . . . . . . c . . . c . . . . 
        . . . . . . c . . . c . . . . . 
        . . . . . c . . . c . . . . . . 
        . . . . c . . . c . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 4 2 . . . . . 
        . . . . . . . . 2 4 2 . . . . . 
        . . . . . . . . 2 4 2 . . . . . 
        . . . . . . . . c c c . . . . . 
        . . . . . . . c d c d c . . . . 
        . . . . . . c b b b b b b . . . 
        . . . . . . . b d c b c . . . . 
        . . . . . . . . d b d . . . . . 
        . . . . . . . . 2 c 2 . . . . . 
        . . . . . . . . 4 c 4 . . . . . 
        . . . . . . . . c . c . . . . . 
        . . . . . . . c . . . c . . . . 
        . . . . . . c . . . c . . . . . 
        . . . . . c . . . c . . . . . . 
        . . . . c . . . c . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 2 . . . . . 
        . . . . . . . . 4 4 4 . . . . . 
        . . . . . . . . 2 2 2 . . . . . 
        . . . . . . . . c c c . . . . . 
        . . . . . . . c d c d c . . . . 
        . . . . . . c b b b b b b . . . 
        . . . . . . . b d c b c . . . . 
        . . . . . . . . d b d . . . . . 
        . . . . . . . . 2 c 2 . . . . . 
        . . . . . . . . 4 c . . . . . . 
        . . . . . . . . c . c . . . . . 
        . . . . . . . c . . . c . . . . 
        . . . . . . c . . . c . . . . . 
        . . . . . c . . . c . . . . . . 
        . . . . c . . . c . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 2 2 . . . . . 
        . . . . . . . . 4 4 4 . . . . . 
        . . . . . . . . 2 2 2 . . . . . 
        . . . . . . . . c c c . . . . . 
        . . . . . . . c d c d c . . . . 
        . . . . . . c b b b b b b . . . 
        . . . . . . . b d c b c . . . . 
        . . . . . . . . d b d . . . . . 
        . . . . . . . . 2 c 2 . . . . . 
        . . . . . . . . 4 c 4 . . . . . 
        . . . . . . . . c . c . . . . . 
        . . . . . . . c . . . c . . . . 
        . . . . . . c . . . c . . . . . 
        . . . . . c . . . c . . . . . . 
        . . . . c . . . c . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving, Predicate.FacingRight)
    )
})
forever(function () {
    if (invader.overlapsWith(Raptorian)) {
        music.stopAllSounds()
        music.play(music.randomizeSound(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 255, 999, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic)), music.PlaybackMode.InBackground)
        invader.follow(Raptorian, 70)
        music.play(music.createSong(assets.song`invader march`), music.PlaybackMode.LoopingInBackground)
    }
})
