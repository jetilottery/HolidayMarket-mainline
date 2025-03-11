define({
    _BASE_APP: {
        children: ['backgrounds', 'infoArea', 'playerNumbers', 'coinBonus', 'wheelBonus', 'transitions']
    },

    /*
     * BACKGROUND
     */
    backgrounds: {
        type: 'container',
        children: ['baseGameBG', 'coinBonusBG', 'wheelBonusBG']
    },
    baseGameBG: {
        type: 'container',
        children: ['landscapeBG', 'portraitBG', 'logoContainer']
    },
    landscapeBG: {
        type: 'container',
        x: 720,
        y: 390,
        portrait: {
            visible: false
        },
        landscape: {
            visible: true
        }
    },
    portraitBG: {
        type: 'container',
        x: 405,
        y: 690,
        portrait: {
            visible: true
        },
        landscape: {
            visible: false
        }
    },
    coinBonusBG: {
        type: 'container',
        children: ['coinLandscapeBG', 'coinPortraitBG']
    },
    coinLandscapeBG: {
        type: 'container',
        x: 720,
        y: 390,
        portrait: {
            visible: false
        },
        landscape: {
            visible: true
        }
    },
    coinPortraitBG: {
        type: 'container',
        x: 405,
        y: 688,
        portrait: {
            visible: true
        },
        landscape: {
            visible: false
        }
    },
    wheelBonusBG: {
        type: 'sprite',
        landscape: {
            texture: 'WheelBonusBGLand'
        },
        portrait: {
            texture: 'wheelBonusPortrait'
        }
    },
    logoContainer: {
        type: 'container',
        children: ['logo']
    },

    /*
     * LOGO
     */
    logo: {
        type: 'sprite',
        anchor: 0.5,
        landscape: {
            texture: 'landscape_gameLogo',
            x: 715,
            y: 56,
            scale: 0.9
        },
        portrait: {
            texture: 'portrait_gameLogo',
            x: 405,
            y: 60,
            scale: 0.8
        }
    },

    /*
     * LOGO
     */
    logoSparkle: {
        type: 'container',
        landscape: {
            x: 720,
            y: 415
        },
        portrait: {
            x: 922,
            y: 410
        }
    },
    infoArea: {
        type: 'container',
        children: ['winUpTo', 'coinDesc'],
        portrait: {
            x: 0,
            y: -8
        },
        landscape: {
            x: 0,
            y: 0
        }
    },
    infoPillar: {
        type: 'sprite',
        landscape: {
            texture: 'infoAreaLand',
            x: 0,
            y: 210
        },
        portrait: {
            texture: 'infoAreaPort',
            x: 13,
            y: 180
        }
    },

    /*
     * WIN UP TO
     */
    winUpTo: {
        type: 'container',
        children: ['winUpToIn', 'winUpToOut'],
        landscape: {
            x: 1053,
            y: 141,
            scale: 1
        },
        portrait: {
            x: 405,
            y: 250,
            scale: 0.9
        }
    },
    winUpToIn: {
        type: 'container',
        children: ['winUpToInText']
    },
    winUpToInText: {
        type: 'text',
        style: 'winUpTo',
        string: 'winUpTo',
        anchor: 0.5,
        maxWidth: 330
    },
    winUpToOut: {
        type: 'container',
        children: ['winUpToOutText'],
        alpha: 0
    },
    winUpToOutText: {
        type: 'text',
        style: 'winUpTo',
        string: 'winUpTo',
        anchor: 0.5,
        maxWidth: 330
    },
    coinDesc: {
        type: 'container',
        children: ['revealTo'],
        landscape: {
            x: 394,
            y: 140
        },
        portrait: {
            x: 405,
            y: 158
        }
    },
    revealTo: {
        type: 'container',
        children: ['revealToText', 'coin1', 'coin2', 'matchThreeToWinText']
    },
    revealToText: {
        type: 'text',
        style: 'info',
        align: 'center',
        anchor: 0.5,
        maxWidth: 330,
        landscape: {
            string: 'revealForBonusLand'
        },
        portrait: {
            string: 'revealForBonusPort'
        }
    },
    matchThreeToWinText: {
        type: 'text',
        style: 'info_2',
        align: 'center',
        anchor: 0.5,
        maxWidth: 500,
        string: 'matchThreeToWin',
        alpha: 0
    },
    coin1: {
        // texture: 'infoBonusCoin',
        // scale: 0.85,
        type: 'container',
        landscape: {
            x: -230,
            y: 0,
            scale: 1
        },
        portrait: {
            x: -230,
            y: -1,
            scale: 0.9
        }
    },
    coin2: {
        // texture: 'infoBonusWheel',
        // scale: 0.85,
        type: 'container',
        landscape: {
            x: 230,
            y: 0,
            scale: 1
        },
        portrait: {
            x: 230,
            y: -1,
            scale: 0.9
        }
    },

    /*
     * PLAYER NUMBERS
     */
    playerNumbers: {
        type: 'container',
        children: ['playerNumber1', 'playerNumber2', 'playerNumber3', 'playerNumber4', 'playerNumber5', 'playerNumber6', 'playerNumber7', 'playerNumber8', 'playerNumber9', 'playerNumber10', 'playerNumber11', 'playerNumber12', 'playerNumber13', 'playerNumber14', 'playerNumber15', 'playerNumber16'],
        landscape: {
            x: 120,
            y: 115
        },
        portrait: {
            x: 126,
            y: 381
        }
    },
    /////////////////////////////
    backBushesPort: {
        type: 'sprite',
        portrait: {
            visible: true,
            x: -100,
            y: 355,
            texture: 'backBushes_Port'
        },
        landscape: {
            visible: false
        }
    },
    playerNumber1: {
        type: 'container',
        landscape: {
            x: -10,
            y: 166
        },
        portrait: {
            x: 0,
            y: -10
        }
    },
    playerNumber2: {
        type: 'container',
        landscape: {
            x: 165,
            y: 166
        },
        portrait: {
            x: 190,
            y: -10
        }
    },
    playerNumber3: {
        type: 'container',
        landscape: {
            x: 337,
            y: 166
        },
        portrait: {
            x: 370,
            y: -10
        }
    },
    playerNumber4: {
        type: 'container',
        landscape: {
            x: 517,
            y: 166
        },
        portrait: {
            x: 560,
            y: -10
        }
    },
    playerNumber5: {
        type: 'container',
        landscape: {
            x: 690,
            y: 166
        },
        portrait: {
            x: 0,
            y: 207
        }
    },
    /////////////////////////////
    midBushes: {
        type: 'sprite',
        landscape: {
            texture: 'backBushes',
            x: -11,
            y: 245
        }
    },
    playerNumber6: {
        type: 'container',
        landscape: {
            x: 864,
            y: 166
        },
        portrait: {
            x: 190,
            y: 207
        }
    },
    playerNumber7: {
        type: 'container',
        landscape: {
            x: 1040,
            y: 166
        },
        portrait: {
            x: 370,
            y: 207
        }
    },
    playerNumber8: {
        type: 'container',
        landscape: {
            x: 1214,
            y: 166
        },
        portrait: {
            x: 560,
            y: 207
        }
    },
    playerNumber9: {
        type: 'container',
        landscape: {
            x: -10,
            y: 386
        },
        portrait: {
            x: 0,
            y: 427
        }
    },
    playerNumber10: {
        type: 'container',
        landscape: {
            x: 165,
            y: 386
        },
        portrait: {
            x: 190,
            y: 427
        }
    },
    //////////////////////////////////////
    frontBushes: {
        type: 'sprite',
        landscape: {
            visible: true,
            texture: 'frontBushes',
            x: -255,
            y: 440
        },
        portrait: {
            visible: false
        }
    },
    playerNumber11: {
        type: 'container',
        landscape: {
            x: 337,
            y: 386
        },
        portrait: {
            x: 370,
            y: 427
        }
    },
    playerNumber12: {
        type: 'container',
        landscape: {
            x: 517,
            y: 386
        },
        portrait: {
            x: 560,
            y: 427
        }
    },
    //////////////////////////////////////
    midBushesPort: {
        type: 'sprite',
        portrait: {
            x: -100,
            y: 505,
            texture: 'backMidBushes_Port'
        }
    },
    playerNumber13: {
        type: 'container',
        landscape: {
            x: 690,
            y: 386
        },
        portrait: {
            x: 0,
            y: 646
        }
    },
    playerNumber14: {
        type: 'container',
        landscape: {
            x: 864,
            y: 386
        },
        portrait: {
            x: 190,
            y: 646
        }
    },
    playerNumber15: {
        type: 'container',
        landscape: {
            x: 1040,
            y: 386
        },
        portrait: {
            x: 370,
            y: 646
        }
    },
    playerNumber16: {
        type: 'container',
        landscape: {
            x: 1214,
            y: 386
        },
        portrait: {
            x: 560,
            y: 646
        }
    },
    //////////////////////////////////////
    frontBushesPort: {
        type: 'sprite',
        portrait: {
            x: -100,
            y: 695,
            texture: 'frontBushes_Port'
        }
    },
    coinBonus: {
        type: 'container',
        children: ['coinBonusInfo', 'coinBonusP10', 'coinBonusP9', 'coinBonusP8', 'coinBonusP7', 'coinBonusP6', 'coinBonusP5', 'coinBonusP4', 'coinBonusP3', 'coinBonusP2', 'coinBonusP1', 'bonusRevealAllContainer']
    },
    coinBonusInfo: {
        type: 'container',
        children: ['cbInfoBG', 'cbInfoDesc', 'cbInfoTotalFade', 'cbInfoTotal'],
        portrait: {
            y: 180
        },
        landscape: {
            y: 60
        }
    },
    cbInfoBG: {
        type: 'sprite',
        anchor: 0.5,
        landscape: {
            x: 730,
            y: 105,
            scale: {
                x: 0.95,
                y: 0.95
            }
        },
        portrait: {
            x: 403,
            y: 105,
            scale: {
                x: 1,
                y: 1
            }
        }
    },
    cbInfoDesc: {
        type: 'text',
        string: 'coinDesc',
        style: 'coinDesc',
        anchor: 0.5,
        wordWrap: false,
        maxWidth: 600,
        align: 'center',
        landscape: {
            x: 720,
            y: 105
        },
        portrait: {
            x: 405,
            y: 105
        }
    },
    cbInfoTotal: {
        type: 'text',
        style: 'coinTotal',
        anchor: 0.5,
        align: 'center',
        wordWrap: false,
        maxWidth: 600,
        landscape: {
            x: 720,
            y: 105
        },
        portrait: {
            x: 405,
            y: 105
        }
    },
    cbInfoTotalFade: {
        type: 'text',
        style: 'coinTotal',
        anchor: 0.5,
        align: 'center',
        wordWrap: false,
        maxWidth: 600,
        landscape: {
            x: 720,
            y: 105
        },
        portrait: {
            x: 405,
            y: 105
        }
    },
    coinBonusP1: {
        type: 'container',
        landscape: {
            x: 195,
            y: 355
        },
        portrait: {
            x: 240,
            y: 490
        }
    },
    coinBonusP2: {
        type: 'container',
        landscape: {
            x: 455,
            y: 355
        },
        portrait: {
            x: 240,
            y: 690
        }
    },
    coinBonusP3: {
        type: 'container',
        landscape: {
            x: 715,
            y: 355
        },
        portrait: {
            x: 570,
            y: 490
        }
    },
    coinBonusP4: {
        type: 'container',
        landscape: {
            x: 975,
            y: 355
        },
        portrait: {
            x: 570,
            y: 690
        }
    },
    coinBonusP5: {
        type: 'container',
        landscape: {
            x: 1235,
            y: 355
        },
        portrait: {
            x: 145,
            y: 900
        }
    },
    coinBonusP6: {
        type: 'container',
        landscape: {
            x: 195,
            y: 550
        },
        portrait: {
            x: 405,
            y: 900
        }
    },
    coinBonusP7: {
        type: 'container',
        landscape: {
            x: 455,
            y: 550
        },
        portrait: {
            x: 660,
            y: 900
        }
    },
    coinBonusP8: {
        type: 'container',
        landscape: {
            x: 715,
            y: 550
        },
        portrait: {
            x: 145,
            y: 1100
        }
    },
    coinBonusP9: {
        type: 'container',
        landscape: {
            x: 975,
            y: 550
        },
        portrait: {
            x: 405,
            y: 1100
        }
    },
    coinBonusP10: {
        type: 'container',
        landscape: {
            x: 1235,
            y: 550
        },
        portrait: {
            x: 660,
            y: 1100
        }
    },
    bonusRevealAllContainer: {
        type: 'container',
        children: ['bonusRevealAll'],
        anchor: 0.5,
        landscape: {
            x: 720,
            y: 701
        },
        portrait: {
            x: 405,
            y: 1300
        }
    },
    bonusRevealAll: {
        type: 'button',
        string: 'button_autoPlayBonus',
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        },
        style: {
            enabled: 'tutorialOKButtonEnabled',
            over: 'tutorialOKButtonOver',
            pressed: 'tutorialOKButtonPressed',
            disabled: 'standardButtonPressed'
        }
    },
    wheelBonus: {
        type: 'container',
        children: ['wheelBonusInfo', 'wbWheel', 'wbInfoTextLandFade', 'wheelInfoTextBackground', 'leftPillar', 'wbArrow', 'wbInfoTextLand', 'wbSpine', 'bonusSpinButtonContainer']
    },
    wheelBonusInfo: {
        type: 'container',
        children: ['wbInfoBG', 'wbInfoTextFade', 'wbInfoText'],
        landscape: {
            visible: false
        },
        portrait: {
            y: 190,
            visible: false
        }
    },
    wheelInfoTextBackground: {
        type: 'sprite',
        texture: 'bonusInfoBoard',
        children: ['wbTextLand'],
        anchor: 0.5,
        landscape: {
            x: 1170,
            y: 160,
            scale: 1
        },
        portrait: {
            x: 405,
            y: 271,
            scale: 1.1
        }
    },
    wbInfoBG: {
        type: 'sprite',
        anchor: 0.5,
        landscape: {
            texture: 'coinBonusMessage',
            x: 730,
            y: 105
        },
        portrait: {
            texture: 'coinBonusMessage',
            x: 403,
            y: 105
        }
    },
    wbInfoText: {
        type: 'text',
        style: 'wheelInfoText',
        anchor: 0.5,
        wordWrap: true,
        wordWrapWidth: 600,
        align: 'center',
        portrait: {
            x: 405,
            y: 107
        }
    },
    wbInfoTextFade: {
        type: 'text',
        style: 'wheelInfoText',
        anchor: 0.5,
        wordWrap: true,
        wordWrapWidth: 600,
        align: 'center',
        portrait: {
            x: 1182,
            y: 374
        }
    },
    leftPillar: {
        type: 'sprite',
        texture: 'wheelBonusForegroundLand',
        landscape: {
            x: 56,
            y: 30
        },
        portrait: {
            x: -130,
            y: 384
        }
    },
    rightPillar: {
        type: 'sprite',
        texture: 'wheelBonusForegroundLandArrow',
        landscape: {
            x: 1023,
            y: 367
        },
        portrait: {
            x: 690,
            y: 752
        }
    },
    wbSpine: {
        type: 'container',
        landscape: {
            x: 720,
            y: 405
        },
        portrait: {
            x: 405,
            y: 720
        }
    },
    wbWheel: {
        type: 'container',
        landscape: {
            x: 590,
            y: 368
        },
        portrait: {
            x: 400,
            y: 720
        }
    },
    wbWheelFG: {
        type: 'container',
        landscape: {
            x: 718,
            y: 419
        },
        portrait: {
            x: 400,
            y: 800
        }
    },
    wbArrow: {
        type: 'sprite',
        landscape: {
            x: 1023,
            y: 367
        },
        portrait: {
            x: 690,
            y: 749
        }
    },
    wbTextLand: {
        type: 'text',
        style: 'wheelDesc',
        string: 'wheelDesc',
        anchor: 0.5,
        wordWrap: false,
        maxWidth: 450,
        align: 'center'
    },
    wbInfoTextLand: {
        type: 'text',
        style: 'wheelInfoText',
        anchor: 0.5,
        wordWrap: false,
        maxWidth: 320,
        align: 'center',
        landscape: {
            x: 1182,
            y: 374,
            visible: true
        },
        portrait: {
            visible: false
        }
    },
    wbInfoTextLandFade: {
        type: 'text',
        style: 'wheelInfoText',
        anchor: 0.5,
        wordWrap: false,
        maxWidth: 320,
        align: 'center',
        landscape: {
            x: 1182,
            y: 374,
            visible: true
        },
        portrait: {
            visible: false
        }
    },
    bonusSpinButtonContainer: {
        type: 'container',
        children: ['bonusSpinButton'],
        anchor: 0.5,
        landscape: {
            x: 1167,
            y: 601
        },
        portrait: {
            x: 405,
            y: 1300
        }
    },
    bonusSpinButton: {
        type: 'button',
        string: 'wb_button_start',
        textures: {
            enabled: 'mainButtonEnabled',
            over: 'mainButtonOver',
            pressed: 'mainButtonPressed',
            disabled: 'mainButtonDisabled'
        },
        style: {
            enabled: 'tutorialOKButtonEnabled',
            over: 'tutorialOKButtonOver',
            pressed: 'tutorialOKButtonPressed',
            disabled: 'standardButtonPressed'
        }
    },
    transitions: {
        type: 'container',
        landscape: {
            x: 720,
            y: 405
        },
        portrait: {
            x: 405,
            y: 720
        }
    },

    /*
     * How To Play
     */
    howToPlayOverlay: {
        type: 'sprite',
        landscape: {
            texture: 'landscape_tutorialOverlay',
            y: 0
        },
        portrait: {
            texture: 'portrait_tutorialOverlay',
            y: -100
        }
    },
    howToPlayContainer: {
        type: 'container',
        children: ['howToPlayOverlay', 'howToPlayBackground', 'howToPlayPages', 'versionText', 'audioButtonContainer', 'howToPlayPrevious', 'howToPlayNext', 'howToPlayClose', 'howToPlayIndicators'],
        portrait: {
            y: 100
        },
        landscape: {
            y: 0
        }
    },
    howToPlayBackground: {
        type: 'sprite',
        anchor: {
            x: 0.5
        },
        y: 98,
        landscape: {
            x: 720,
            texture: 'landscape_tutorialBackground'
        },
        portrait: {
            x: 405,
            texture: 'portrait_tutorialBackground'
        }
    },
    versionText: {
        type: 'text',
        style: 'versionText',
        x: 46,
        y: 133,
        alpha: 0.5
    },
    howToPlayClose: {
        type: 'button',
        string: 'button_ok',
        landscape: {
            x: 720,
            y: 671
        },
        portrait: {
            x: 405,
            y: 951
        },
        textures: {
            enabled: 'tutorialOKButtonEnabled',
            over: 'tutorialOKButtonOver',
            pressed: 'tutorialOKButtonPressed'
        },
        style: {
            enabled: 'tutorialOKButtonEnabled',
            over: 'tutorialOKButtonOver',
            pressed: 'tutorialOKButtonPressed'
        }
    },
    howToPlayPrevious: {
        type: 'button',
        landscape: {
            x: 78,
            y: 418
        },
        portrait: {
            x: 70,
            y: 568
        },
        textures: {
            enabled: 'tutorialLeftButtonEnabled',
            disabled: 'tutorialLeftButtonDisabled',
            over: 'tutorialLeftButtonOver',
            pressed: 'tutorialLeftButtonPressed'
        }
    },
    howToPlayNext: {
        type: 'button',
        landscape: {
            x: 1365,
            y: 418
        },
        portrait: {
            x: 742,
            y: 568
        },
        textures: {
            enabled: 'tutorialRightButtonEnabled',
            disabled: 'tutorialRightButtonDisabled',
            over: 'tutorialRightButtonOver',
            pressed: 'tutorialRightButtonPressed'
        }
    },
    howToPlayIndicators: {
        type: 'container',
        children: ['howToPlayIndicatorActive', 'howToPlayIndicatorInactive'],
        landscape: {
            x: 720,
            y: 600
        },
        portrait: {
            x: 405,
            y: 870
        }
    },
    audioButtonContainer: {
        type: 'container',
        landscape: {
            x: 89,
            y: 661
        },
        portrait: {
            x: 88,
            y: 941
        }
    },
    howToPlayPages: {
        type: 'container',
        children: ['howToPlayPage1', 'howToPlayPage2', 'howToPlayPage3']
    },
    howToPlayPage1: {
        type: 'container',
        children: ['howToPlayTitle1', 'howToPlayPageText1', 'howToPlayBonusCoins1']
    },
    howToPlayTitle1: {
        type: 'text',
        string: 'howToPlay',
        style: 'howToPlayTitle',
        anchor: 0.5,
        y: 178,
        landscape: {
            x: 720
        },
        portrait: {
            x: 405
        }
    },
    howToPlayPageText1: {
        type: 'text',
        string: 'page1',
        style: 'howToPlayText',
        fontSize: 30,
        wordWrap: true,
        anchor: 0.5,
        align: 'center',
        landscape: {
            x: 720,
            y: 350,
            wordWrapWidth: 1100
        },
        portrait: {
            x: 405,
            y: 520,
            wordWrapWidth: 560
        }
    },
    howToPlayBonusCoins1: {
        type: 'container',
        landscape: {
            x: 720,
            y: 530
        },
        portrait: {
            x: 405,
            y: 670
        }
    },
    howToPlayPage2: {
        type: 'container',
        children: ['howToPlayTitle2', 'howToPlayCoin2', 'howToPlayPageText2']
    },
    howToPlayTitle2: {
        type: 'text',
        string: 'coinBonus',
        style: 'howToPlayTitle',
        anchor: 0.5,
        y: 178,
        landscape: {
            x: 720
        },
        portrait: {
            x: 405
        }
    },
    howToPlayCoin2: {
        type: 'container',
        landscape: {
            x: 720,
            y: 310,
            scale: {
                x: 0.7,
                y: 0.7
            }
        },
        portrait: {
            x: 405,
            y: 375
        }
    },
    howToPlayPageText2: {
        type: 'text',
        string: 'page2',
        style: 'howToPlayText',
        fontSize: 30,
        wordWrap: true,
        anchor: 0.5,
        align: 'center',
        landscape: {
            x: 720,
            y: 485,
            wordWrapWidth: 1100
        },
        portrait: {
            x: 405,
            y: 650,
            wordWrapWidth: 560
        }
    },
    howToPlayPage3: {
        type: 'container',
        children: ['howToPlayTitle3', 'howToPlayCoin3', 'howToPlayPageText3']
    },
    howToPlayTitle3: {
        type: 'text',
        string: 'wheelBonus',
        style: 'howToPlayTitle',
        anchor: 0.5,
        y: 178,
        landscape: {
            x: 720
        },
        portrait: {
            x: 405
        }
    },
    howToPlayCoin3: {
        type: 'container',
        landscape: {
            x: 720,
            y: 310,
            scale: {
                x: 0.7,
                y: 0.7
            }
        },
        portrait: {
            x: 405,
            y: 375
        }
    },
    howToPlayPageText3: {
        type: 'text',
        string: 'page3',
        style: 'howToPlayText',
        fontSize: 30,
        wordWrap: true,
        anchor: 0.5,
        align: 'center',
        landscape: {
            x: 720,
            y: 485,
            wordWrapWidth: 1100
        },
        portrait: {
            x: 405,
            y: 650,
            wordWrapWidth: 560
        }
    },
    resultPlaquesContainer: {
        type: 'container',
        children: ['resultPlaqueOverlay', 'bigWinCoins', 'winPlaqueBG', 'winPlaqueMessage', 'winPlaqueValue', 'winPlaqueCloseButton', 'losePlaqueBG', 'losePlaqueMessage', 'losePlaqueCloseButton'],
        landscape: {
            x: 720,
            y: 377
        },
        portrait: {
            x: 405,
            y: 725
        }
    },
    resultPlaqueOverlay: {
        type: 'sprite',
        anchor: 0.5
    },
    bigWinCoins: {
        type: 'container',
        landscape: {
            x: -720,
            y: -377
        },
        portrait: {
            x: -405,
            y: -725
        }
    },
    winPlaqueBG: {
        type: 'sprite',
        anchor: 0.5,
        texture: 'winPlaque'
    },
    winPlaqueMessage: {
        type: 'text',
        string: 'message_win',
        style: 'winPlaqueBody',
        y: -68,
        anchor: 0.5,
        maxWidth: 550
    },
    winPlaqueValue: {
        type: 'text',
        style: 'winPlaqueValue',
        y: 28,
        anchor: 0.5,
        maxWidth: 550
    },
    winPlaqueCloseButton: {
        type: 'button',
        alpha: 0,
        textures: {
            enabled: 'winPlaque',
            over: 'winPlaque',
            pressed: 'winPlaque'
        }
    },
    losePlaqueBG: {
        type: 'sprite',
        anchor: 0.5,
        texture: 'losePlaque'
    },
    losePlaqueMessage: {
        type: 'text',
        string: 'message_nonWin',
        style: 'losePlaqueBody',
        anchor: 0.5,
        portrait: {
            maxWidth: 450
        },
        landscape: {
            maxWidth: 450
        }
    },
    losePlaqueCloseButton: {
        type: 'button',
        alpha: 0,
        textures: {
            enabled: 'losePlaque',
            over: 'losePlaque',
            pressed: 'losePlaque'
        }
    },
    timeoutExit: {
        type: 'button',
        landscape: {
            x: 585,
            y: 560
        },
        portrait: {
            x: 270,
            y: 775
        },
        style: {
            enabled: 'errorButtonEnabled',
            over: 'errorButtonOver',
            pressed: 'errorButtonPressed'
        },
        textures: {
            enabled: 'timeOutButtonEnabled',
            over: 'timeOutButtonOver',
            pressed: 'timeOutButtonPressed'
        }
    },
    timeoutContinue: {
        type: 'button',
        landscape: {
            x: 855,
            y: 560
        },
        portrait: {
            x: 540,
            y: 775
        },
        style: {
            enabled: 'errorButtonEnabled',
            over: 'errorButtonOver',
            pressed: 'errorButtonPressed'
        },
        textures: {
            enabled: 'timeOutButtonEnabled',
            over: 'timeOutButtonOver',
            pressed: 'timeOutButtonPressed'
        }
    },
    buyButtonAnim: {
        type: 'sprite',
        anchor: 0.5,
        x: -10,
        y: -5
    },
    tryButtonAnim: {
        type: 'sprite',
        anchor: 0.5,
        x: -10,
        y: -5
    },
    buyButton: {
        type: 'button',
        string: 'button_buy',
        textures: {
            enabled: 'buyButtonEnabled',
            over: 'buyButtonOver',
            pressed: 'buyButtonPressed',
            disabled: 'buyButtonDisabled'
        },
        style: {
            enabled: 'buyButtonEnabled',
            over: 'buyButtonOver',
            pressed: 'buyButtonPressed',
            disabled: 'buyButtonDisabled'
        }
    },
    tryButton: {
        type: 'button',
        string: 'button_try',
        textures: {
            enabled: 'buyButtonEnabled',
            over: 'buyButtonOver',
            pressed: 'buyButtonPressed',
            disabled: 'buyButtonDisabled'
        },
        style: {
            enabled: 'buyButtonEnabled',
            over: 'buyButtonOver',
            pressed: 'buyButtonPressed',
            disabled: 'buyButtonDisabled'
        }
    },
    // buttonBar:{
    //     type: 'container',
    //     portrait: {
    //         y: 1245,
    //     }
    // },
    autoPlayButton_default: {
        type: 'point',
        landscape: {
            x: 720,
            y: 700
        },
        portrait: {
            x: 405,
            y: 1300
        }
    },
    autoPlayButton_multi: {
        type: 'point',
        landscape: {
            x: 918,
            y: 700
        },
        portrait: {
            x: 405,
            y: 1300
        }
    },
    ticketSelectBarSmall: {
        type: 'container',
        landscape: {
            x: 580,
            y: 699
        },
        portrait: {
            x: 405,
            y: 1205
        },
        children: ['ticketSelectBarBG', 'ticketSelectCostValue', 'ticketCostDownButtonStatic', 'ticketCostUpButtonStatic', 'ticketCostDownButton', 'ticketCostUpButton', 'ticketCostIndicators']
    },
    ticketCostDownButton: {
        type: 'button',
        portrait: {
            x: -208
        },
        landscape: {
            x: -143
        },
        textures: {
            enabled: 'minusButtonEnabled',
            disabled: 'minusButtonDisabled',
            over: 'minusButtonOver',
            pressed: 'minusButtonPressed'
        }
    },
    ticketCostUpButton: {
        type: 'button',
        portrait: {
            x: 208
        },
        landscape: {
            x: 143
        },
        textures: {
            enabled: 'plusButtonEnabled',
            disabled: 'plusButtonDisabled',
            over: 'plusButtonOver',
            pressed: 'plusButtonPressed'
        }
    },
    ticketCostDownButtonStatic: {
        type: 'sprite',
        anchor: 0.5,
        portrait: {
            x: -208
        },
        landscape: {
            x: -143
        },
        texture: 'minusButtonDisabled'
    },
    ticketCostUpButtonStatic: {
        type: 'sprite',
        anchor: 0.5,
        portrait: {
            x: 208
        },
        landscape: {
            x: 143
        },
        texture: 'plusButtonDisabled'
    },
    buttonBar: {
        type: 'container',
        landscape: {
            x: 0,
            y: 649
        },
        portrait: {
            x: 0,
            y: 1250
        },
        children: ['helpButtonStatic', 'helpButton', 'homeButtonStatic', 'homeButton', 'exitButton', 'playAgainButton', 'tryAgainButton', 'buyButton', 'buyButtonAnim', 'tryButton', 'tryButtonAnim', 'moveToMoneyButton', 'retryButton']
    },
    footerContainer: {
        type: 'container',
        children: ['footerBG', 'balanceMeter', 'ticketCostMeter', 'winMeter', 'divider_1_3', 'divider_2_3', 'divider_1_2'],
        landscape: {
            y: 761
        },
        portrait: {
            y: 1349
        }
    },
    footerBG: {
        type: 'sprite',
        landscape: {
            texture: 'landscape_footerBar',
            y: 5
        },
        portrait: {
            texture: 'portrait_footerBar',
            y: 5
        }
    }
});