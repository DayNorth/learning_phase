//sounds to buttons....
demo.state3 = function(){};
demo.state3.prototype = {
    preload: function (){
        game.load.image('boton1', 'assets/botones/boton1.png');
        game.load.image('boton2', 'assets/botones/boton2.png');
        game.load.image('boton3', 'assets/botones/boton3.png');
        game.load.audio('ping', 'assets/audio/p-ping.mp3');
    },
    create: function(){
        game.stage.backgroundColor = '#d2953a';
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();
        
        sound = game.add.audio('ping');
        sound.addMarker('low', 0, 0.25);
        sound.addMarker('high', 0.5, 1);
        
        var b1 = game.add.button(100, 200,'boton1', function(){
            changeState(null, 1);
        });
        
        var b2 = game.add.button(400, 400, 'boton2', function(){
            changeState(null, 2);
        });
        
        var b3 = game.add.button(700, 700, 'boton3');
        
        b1.onInputDown.add(this.tint, b1);
        b2.onInputDown.add(this.tint, b2);
        b3.onInputDown.add(this.tint, b3);
        
        b1.onInputUp.add(this.untint, b1);
        b2.onInputUp.add(this.untint, b2);
        b3.onInputUp.add(this.untint, b3);
    },
    
    tint: function(){
        this.tint = 0xbbbbbb;
        sound.play('low');
    },
    untint: function(){
    this.tint = 0xffffff;
        soud.play('high');
}
};