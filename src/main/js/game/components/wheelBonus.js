define(require => {
    const PIXI = require('com/pixijs/pixi');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const resLib = require('skbJet/component/resourceLoader/resourceLib');
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const displayList = require('skbJet/componentManchester/standardIW/displayList');
    const orientation = require('skbJet/componentManchester/standardIW/orientation');
    const audio = require('skbJet/componentManchester/standardIW/audio');
    const wheel = require('./wheel');

    require('com/gsap/TweenMax');
    require('com/gsap/easing/EasePack');

    const Tween = window.TweenMax;

    let scenario;

    let wheelBonusWin = '';

    let wheelResolved;
    let wheelBonusSpine, wheelTexture, wheelFGTexture;
    let plaqueSpine;
    let animOrientation;

    function init() {
        displayList.wheelBonusBG.visible = false;
        displayList.wheelBonus.visible = false;

        wheelTexture = PIXI.Texture.fromFrame('wheelBonusWheel');
        wheelTexture = new PIXI.Sprite(wheelTexture);
        wheelTexture.anchor.set(0.5, 0.5);
        displayList.wbWheel.addChild(wheelTexture);
        displayList.wbWheel.rotation = -0.25; // FIXED- MARKET-137 XCAT: Price values are hidden in wheel in the bonus game.

        wheelFGTexture = PIXI.Texture.fromFrame('infoBonusWheel');
        wheelFGTexture = new PIXI.Sprite(wheelFGTexture);
        wheelFGTexture.width = 150;
        wheelFGTexture.height = 150;
        wheelFGTexture.anchor.set(0.5, 0.5);


        displayList.wbInfoText.text = resLib.i18n.game.Game.wheelDesc;

        wheel.init();

        displayList.wbInfoTextLand.text = resLib.i18n.game.Game.wheelReady;
        displayList.wbInfoTextLandFade.text = resLib.i18n.game.Game.wheelReady;

        msgBus.publish('UI.updateButtons', {
            help: { enabled: true },
            autoplay: { visible: false },
        });

        displayList.bonusSpinButton.on('press', () => {
            triggerSpin();

            audio.play('Wheel_Start');
            // displayList.bonusSpinButton.visible = false;
            displayList.bonusSpinButton.enabled = false;
            displayList.bonusSpinButton.children[4].maxWidth = 230;


            msgBus.publish('UI.updateButtons', {
                help: { enabled: false },
            });
        });

        msgBus.subscribe('UI.showHelp', () => {
            displayList.bonusSpinButton.enabled = false;
        });
        msgBus.subscribe('UI.hideHelp', () => {
            displayList.bonusSpinButton.enabled = true;
        });

        // background, pillars, spine, wheel
        wheelBonusSpine = new PIXI.spine.Spine(resLib.spine['WheelBonus'].spineData); //721 390
        wheelBonusSpine.x = 0;
        wheelBonusSpine.y = 0;
        displayList.wbSpine.addChild(wheelBonusSpine);

        plaqueSpine = new PIXI.spine.Spine(resLib.spine['WheelBonus'].spineData);
        plaqueSpine.x = 0;
        plaqueSpine.y = 0;
        plaqueSpine.renderable = false;
        displayList.wheelInfoTextBackground.addChildAt(plaqueSpine, 0);

        // activeAnim = 'Loop';
        onOrientationChange();

        msgBus.subscribe('GameSize.OrientationChange', onOrientationChange);
    }

    function changeTextPort(text) {
        displayList.wbInfoText.visible = true;
        displayList.wbInfoTextFade.visible = true;
        displayList.wbInfoTextFade.alpha = 1;
        displayList.wbInfoTextFade.text = displayList.wbInfoText.text;

        displayList.wbInfoText.text = text;

        let moveSpeed = 0.25;

        // We need to scale according to the maxWidth of the text
        let origScaleX = displayList.wbInfoText.scale.x;
        let origScaleY = displayList.wbInfoText.scale.y;

        displayList.wbInfoText.scale.x = 0;
        displayList.wbInfoText.scale.y = 0;
        displayList.wbInfoTextFade.scale.x = origScaleX;
        displayList.wbInfoTextFade.scale.y = origScaleY;

        Tween.to(displayList.wbInfoText.scale, moveSpeed, { x: origScaleX, y: origScaleY });
        Tween.to(displayList.wbInfoTextFade.scale, moveSpeed, { x: origScaleX * 2, y: origScaleY * 2 });
        Tween.to(displayList.wbInfoTextFade, moveSpeed, { alpha: 0 });
    }

    function changeTextLand(text) {
        displayList.wbInfoTextLandFade.alpha = 1;
        displayList.wbInfoTextLandFade.text = displayList.wbInfoTextLand.text;

        displayList.wbInfoTextLand.text = text;

        let moveSpeed = 0.25;

        // We need to scale according to the maxWidth of the text
        let origScaleX = displayList.wbInfoTextLand.scale.x;
        let origScaleY = displayList.wbInfoTextLand.scale.y;

        displayList.wbInfoTextLand.scale.x = 0;
        displayList.wbInfoTextLand.scale.y = 0;
        displayList.wbInfoTextLandFade.scale.x = origScaleX;
        displayList.wbInfoTextLandFade.scale.y = origScaleY;

        Tween.to(displayList.wbInfoTextLand.scale, moveSpeed, { x: origScaleX, y: origScaleY });
        Tween.to(displayList.wbInfoTextLandFade.scale, moveSpeed, { x: origScaleX * 2, y: origScaleY * 2 });
        Tween.to(displayList.wbInfoTextLandFade, moveSpeed, { alpha: 0 });
    }

    function onOrientationChange() {
        if (orientation.get() === orientation.LANDSCAPE) {
            animOrientation = '';
            wheelBonusSpine.state.setAnimation(0, animOrientation + "Loop", true);
        }
        if (orientation.get() === orientation.PORTRAIT) {
            animOrientation = 'Port_';
            wheelBonusSpine.state.setAnimation(0, animOrientation + "Loop", true);
        }
    }

    async function complete() {
        await new Promise(c => {
            wheelResolved = c;
        });
    }

    function processComplete() {
        Tween.delayedCall(2, wheelResolved);
        msgBus.publish('Game.ShowWinAnim');
        changeTextPort(resLib.i18n.game.Game.youWon.replace("{0}", SKBeInstant.formatCurrency(wheelBonusWin).formattedAmount));
        changeTextLand(resLib.i18n.game.Game.wheelWin);
    }

    async function triggerSpin() {
        // activeAnim = 'Triggered';
        // Tween.to(displayList.wbTextLand, 0.5, {
        //     alpha: 0
        // });
        Tween.delayedCall(0.5, () => {
            changeTextPort(resLib.i18n.game.Game.wheelSpin);
            changeTextLand(resLib.i18n.game.Game.wheelSpin);
        });

        wheelBonusWin = scenario.wheelBonusPrize;

        return wheel.spinWheel({ endpoint: scenario['wheelBonus'] }, processComplete);
    }

    function populate(data) {
        scenario = data.scenario;
    }


    function reset() {
        scenario = undefined;
        wheelBonusWin = '';
        displayList.wbWheel.rotation = -0.25; // FIXED- MARKET-137 XCAT: Price values are hidden in wheel in the bonus game.
        changeTextLand(resLib.i18n.game.Game.wheelWin);
        displayList.bonusSpinButton.enabled = true;
        displayList.wbInfoText.text = resLib.i18n.game.Game.wheelDesc;
        displayList.wbInfoTextLand.text = resLib.i18n.game.Game.wheelReady;
        displayList.wbInfoTextLandFade.text = resLib.i18n.game.Game.wheelReady;
        displayList.wbTextLand.alpha = 1;
        plaqueSpine.renderable = false;
        displayList.wbTextLand.style.fill = '#DDC088';
        displayList.wbTextLand.style.fontSize = 30;
        displayList.wbTextLand.text = resLib.i18n.game.Game.wheelDesc;
        wheel.reset();
    }

    msgBus.subscribe('Game.Wheel.Land', (data) => {
        plaqueSpine.renderable = true;
        plaqueSpine.state.setAnimation(0, 'Triggered', false);

        displayList.wbTextLand.text = resLib.i18n.game.Game.wheelWinAmount.replace('{0}', SKBeInstant.formatCurrency(data).formattedAmount);
        displayList.wbTextLand.style.fill = "#8a2300";
        displayList.wbTextLand.style.fontSize = 60;
        displayList.wbTextLand.maxWidth = 450;
    });

    return {
        init,
        complete,
        populate,
        reset,
    };
});