define(require => {
    const fittedText = require('skbJet/componentManchester/standardIW/components/fittedText');
    const textStyles = require('skbJet/componentManchester/standardIW/textStyles');
    const SKBeInstant = require('skbJet/component/SKBeInstant/SKBeInstant');
    const msgBus = require('skbJet/component/gameMsgBus/GameMsgBus');
    const text = require('skbJet/componentManchester/standardIW/layout/text');
    const PIXI = require('com/pixijs/pixi');
    const CoinPicker = require('./CoinPicker');

    require('com/gsap/TweenLite');
    const Tween = window.TweenLite;

    class coinBonusCoins extends CoinPicker {
        constructor(container) {
            super();

            this.initSpine();

            this.parent = container;

            this.background = new PIXI.Sprite(PIXI.Texture.from('bonusPickRevealWin'));
            this.background.anchor.set(0.5);
            this.background.x = 10;
            this.background.visible = false;

            this.winAmount = new fittedText("");
            this.winAmount.maxWidth = 150;
            this.winAmount.x = 10;
            this.winAmount.anchor.set(0.5);

            text.update(this.winAmount, textStyles.coinValue);

            this.parent.addChild(this.background,this.winAmount);
        }

        populate(val, text) {
            this.background.visible = true;
            if (val) {
                this.value = val;
                this.winAmount.text = SKBeInstant.formatCurrency(val).formattedAmount;
            }
            if (text) {
                this.value = text;
                this.winAmount.text = text;
                this.background.texture = PIXI.Texture.from('bonusPickRevealCollect');
                msgBus.publish('Game.ShowWinAnim');
            }
            let prevScaleX = this.winAmount.scale.x;
            let prevScaleY = this.winAmount.scale.y;
            this.winAmount.scale.set(0);
            Tween.to(this.winAmount.scale, 0.35, { ease: "Back.easeOut", x: prevScaleX, y: prevScaleY });
        }

        reset() {
            super.reset();
            this.matched = false;
            this.background.visible = false;
            this.background.texture = PIXI.Texture.from('bonusPickRevealWin');
            text.update(this.winAmount, textStyles.coinValue);
            this.winAmount.text = "";
        }

        static fromContainer(container) {
            const card = new coinBonusCoins(container);
            container.addChild(card);
            return card;
        }
    }

    return coinBonusCoins;
});