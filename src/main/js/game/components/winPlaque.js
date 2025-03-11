define(require => {
    const PIXI = require('com/pixijs/pixi');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const resLib = require('skbJet/component/resourceLoader/resourceLib');
    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const meterData = require('skbJet/componentManchester/standardIW/meterData');

    require('com/gsap/TweenLite');
    const Tween = window.TweenLite;

    // let winPlaqueAnimBG;
    let winPlaqueAnimFG;

    function init() {

        winPlaqueAnimFG = new PIXI.spine.Spine(resLib.spine['WinAnims'].spineData);
        winPlaqueAnimFG.state.setAnimation(0, 'WinPlaquePop', true);
        winPlaqueAnimFG.scale.x = 0.84;
        winPlaqueAnimFG.scale.y = 0.84;
        displayList.winPlaqueAnimFG = winPlaqueAnimFG;
        // displayList.winPlaqueBG.parent.addChildAt(winPlaqueAnimFG, displayList.winPlaqueBG.parent.children.length - 1);

        displayList.winPlaqueCloseButton.on('press', hide);
    }

    function show() {
        if (meterData.totalWin > 0) {
            winPlaqueAnimFG.state.setAnimation(0, 'WinPlaquePop', true);

            Tween.delayedCall(3, () => {
                winPlaqueAnimFG.state.clearTrack(0);
                winPlaqueAnimFG.skeleton.setToSetupPose();
            });

        }
    }

    function hide() {}

    msgBus.subscribe('UI.showResult', show);
    msgBus.subscribe('UI.hideResult', hide);

    return {
        init,
    };
});