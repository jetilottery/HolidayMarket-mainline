define(require => {
    const PIXI = require('com/pixijs/pixi');
    const atlasPage = '_atlas_page_';

    const cA = 'coverAnims';
    const hF = 'highlightFX';
    const s = 'Symbols';
    const t = 'transitions';
    const wB = 'WheelBonus';
    const wA = 'WinAnims';
    const png = '.png';
    const jpg = '.jpg';

    const assets = [
        cA + atlasPage + cA + jpg,
        cA + atlasPage + cA + png,
        cA + atlasPage + cA + '2' + jpg,
        cA + atlasPage + cA + '2' + png,
        cA + atlasPage + cA + '3' + jpg,
        cA + atlasPage + cA + '3' + png,
        cA + atlasPage + cA + '4' + jpg,
        cA + atlasPage + cA + '4' + png,
        cA + atlasPage + cA + '5' + jpg,
        cA + atlasPage + cA + '5' + png,
        cA + atlasPage + cA + '6' + png,
        cA + atlasPage + cA + '7' + png,
        cA + atlasPage + cA + '8' + png,
        cA + atlasPage + cA + '9' + png,
        hF + atlasPage + hF + png,
        hF + atlasPage + hF + '2' + png,
        s + atlasPage + s + jpg,
        s + atlasPage + s + png,
        s + atlasPage + s + '2' + jpg,
        s + atlasPage + s + '2' + png,
        s + atlasPage + s + '3' + jpg,
        s + atlasPage + s + '3' + png,
        t + atlasPage + t + jpg,
        t + atlasPage + t + png,
        t + atlasPage + t + '2' + jpg,
        t + atlasPage + t + '3' + jpg,
        t + atlasPage + t + '4' + jpg,
        wB + atlasPage + wB + png,
        wB + atlasPage + wB + '2' + png,
        wB + atlasPage + wB + '3' + png,
        wB + atlasPage + wB + '4' + png,
        wA + atlasPage + wA + jpg,
        wA + atlasPage + wA + png,
        wA + atlasPage + wA + '2' + jpg,
        wA + atlasPage + wA + '3' + jpg,
        wA + atlasPage + wA + '4' + jpg,
        wA + atlasPage + wA + '5' + jpg,
        wA + atlasPage + wA + '6' + jpg,
    ];
    function preload(app, callback) {
        assets.forEach(asset => {
            app.renderer.plugins.prepare.add(PIXI.utils.BaseTextureCache[asset]);
        });

        app.renderer.plugins.prepare.upload(callback);
    }

    return {
        preload
    };
});