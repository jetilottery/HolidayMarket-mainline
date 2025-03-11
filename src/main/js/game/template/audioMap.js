define({
    // IMPLEMENT: Map SFX to channels

    click: ['UI_Click', 7],
    buy: ['UI_BuyButton', 7],
    costMax: ['UI_BetMaxBtn', 6],
    costDown: ['UI_BetDownBtn', 6],
    costUp: ['UI_BetUpBtn', 8],

    BG_music: ['BackgroundMusicLoop', 9],

    Bonus_Transition: ['BonusTransition', 5],
    Bonus_music: ['BonusMusicLoop', 9],
    Bonus_End: ['BonusEnd', 9],
    Wheel_Loop : ['WheelSpinLoop',7],
    Wheel_Spin : ['WheelSpinStart',6],
    Wheel_Slow : ['WheelSpinSlow',7],
    Wheel_Start: ['WheelStartButton', 6],
    Segment_Win: ['WheelWinSegment', 6],

    winTerminator: ['GameEnd_Win', 9],
    loseTerminator: ['GameEnd_NoWin', 1],

    Symbol_Reset: ['SymbolReset', 4],

    match_coinBonus: ['BonusSymbolReveal', 8],
    match_wheelBonus: ['BonusSymbolReveal', 8],

    coinReveal: ['DoorReveal', 5],
    coinReveal2: ['DoorReveal', 10],
    coinReveal3: ['DoorReveal', 11],

    doorCollect: ['DoorCollect', 4],

    /*
     * Audio groups
     * A game can include multiple variations of each of these sounds. Ensure each variation starts
     * with the same name plus some kind of ordered suffix. Each time a sound group plays the next 
     * item in the group will be used.
     */

    playerNumber: ['SymbolReveal_1', 1],
    playerNumber_2: ['SymbolReveal_2', 2],
    playerNumber_3: ['SymbolReveal_3', 3],
    playerNumber_4: ['SymbolReveal_4', 4],

    AutoplayNumber: ['AllSymbolReveal_1', 1],
    AutoplayNumber_2: ['AllSymbolReveal_2', 2],
    AutoplayNumber_3: ['AllSymbolReveal_3', 3],
    AutoplayNumber_4: ['AllSymbolReveal_4', 4],

    match: ['MatchReveal_1', 5],
    match_2: ['MatchReveal_2', 6],
});
