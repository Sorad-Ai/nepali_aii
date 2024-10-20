// Generated by CoffeeScript 1.9.2
var LogoState, g_music;

g_music = null;

LogoState = (function() {
    function LogoState() {}

    LogoState.prototype.create = function() {
        var back_spr, btn, logo_spr;
        this.back_grp = game.add.group();
        // if (game.device.webAudio) {
        //   this.button_snd = game.add.audio('button');
        // }
        back_spr = game.add.sprite(0, 0, 'fon.png');
        this.back_grp.add(back_spr);
        logo_spr = game.add.sprite(0, 0, 'gui', 'hiclimb_logo_r.png');
        this.back_grp.add(logo_spr);
        logo_spr.anchor.setTo(0.5);
        logo_spr.x = back_spr.width / 2;
        logo_spr.y = 120;
        btn = game.add.button(705, 450, 'gui', this.playClk, this, 'play_button.png', 'play_button.png', 'play_button_push.png');
        this.back_grp.add(btn);
        btn.anchor.setTo(0.5);
        btn.x = back_spr.width / 2;
        btn.y = 320;
        // btn = game.add.button(705, 40, 'gui', this.gamesClk, this, 'games.png', 'games.png', 'games_pushed.png');
        // this.back_grp.add(btn);
        // btn.anchor.setTo(0.5);
        // btn.x = back_spr.width / 2;
        // btn.y = 500;
        // btn.scale.x = 0.7;
        // return btn.scale.y = 0.7;

        game.playMusic = {
            g_music: new Howl({
                src: ['assets/audio/Music.mp3'],
                loop: true
            }),
            engine_snd: new Howl({
                src: ['assets/audio/car__engine.mp3'],
                loop: true
            }),
            low_fuel_snd: new Howl({
                src: ['assets/audio/low_fuel.mp3']
            }),
            coin_snd: new Howl({
                src: ['assets/audio/get_coins.mp3']
            }),
            fuel_snd: new Howl({
                src: ['assets/audio/fuel_up.mp3']
            }),
            level_snd: new Howl({
                src: ['assets/audio/lap_completed.mp3']
            }),
            neck_snd: new Howl({
                src: ['assets/audio/neck_crush.mp3']
            }),
            mushrom_snd: new Howl({
                src: ['assets/audio/BadMushroom.mp3']
            }),
            button_snd: new Howl({
                src: ['assets/audio/button_press.mp3']
            }),
            buy_snd: new Howl({
                src: ['assets/audio/buy.mp3']
            }),
            impact_snd: new Howl({
                src: ['assets/audio/car_impact.mp3']
            }),
            flag_snd: new Howl({
                src: ['assets/audio/flag_got.mp3']
            }),
        }

        game.playMusic.g_music.volume(0.3);
        game.playMusic.engine_snd.volume(0.6);
    };

    // LogoState.prototype.gamesClk = function() {
    //   if (game.device.webAudio && game.g_player.sound) {
    //     this.button_snd.play();
    //   }
    //   return window.open('http://m.softgames.de/', '_blank');
    // };

    LogoState.prototype.playClk = function() {
        // if (game.device.webAudio) {
        //   g_music = game.add.audio('music');
        //   if (game.g_player.sound) {
        //     this.button_snd.play();
        //     g_music.loopFull(0.6);
        //   }
        // }
        if (game.device.webAudio && game.g_player.sound) {
            game.playMusic.button_snd.play();
        }
        return game.state.start('menu');
    };

    return LogoState;

})();