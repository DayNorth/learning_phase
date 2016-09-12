var demo = {}, larry, altura = 1500/2, ancho= 1000/2, speed = 5, lar;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function (){
        game.load.spritesheet('lar', 'assets/sprites/larry.png', 85, 110, 7);
        game.load.image('terreno', 'assets/sprites/background1.png');

    },
    create: function(){
        //adding physics engine, so we could add some physics to the game such as not leaving the map
        //start the physics engine.
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#80ff80';
        //THINGS TO REMEMBER
        // eventlistener are local to the state that they were made in
        
        //we just call the function that does all the callbacks
        addChangeStateEventListeners();
        
        game.world.setBounds(0,0,2000, 1000);
        //scale the size of the game in relation to the window's size
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        var terreno = game.add.sprite(0, 0, 'terreno');
        //adjust the image to the screen
        terreno.scale.setTo(1,1.1);
 
        lar = game.add.sprite(altura, game.world.height - 250,'lar');
        
        // to make him look the left side
        lar.scale.setTo(-1, 1);
        
        //adding physics to a specific object
        game.physics.enable(lar);
        
        //making him bounds with the map world
        lar.body.collideWorldBounds = true;
        lar.animations.add('walk',[0,1,2,5,6,7]); //  utiliza los frames 1,2,3 para correr a la izquierda ,10 fps, true le dice que haga un loop
        //adding camera movement
        game.camera.follow(lar);
        //adding a rectangule so when the character moves away from the rectangule, the camera starts to follow him
        game.camera.deadzone = new Phaser.Rectangle(ancho - 300, 0, 600, 1000);
        
        //animation for walking


    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            lar.scale.setTo(1, 1);
            lar.animations.play('walk', 5, true);
            lar.x += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            lar.scale.setTo(-1, 1);
            lar.x -= speed;
            lar.animations.play('walk', 5, true);
        } else {
            //stops the animations once he has stopped walking
            lar.animations.stop('walk');
            //sets the character to the intial frame
            lar.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            lar.y  -= speed;
            //to keep him on the sidewalk
            if(lar.y < 710){
                lar.y = 710;
            }
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            lar.y += speed;
            //to keep him on the sidewalk
            if(lar.y > 940){
                lar.y = 940;
            }
        }
    }
    
};

//to change states 
function changeState(i, stateNum){
    console.log('state' + stateNum);
    game.state.start('state' + stateNum);
}
//to stop using or creating te same type of code everytime just to know what key you pressed
function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

//function that will add the eventlisteners and we'll call that function in each state

function addChangeStateEventListeners(){
        //key listener for states from zero to nine
        addKeyCallback(Phaser.Keyboard.ZERO, changeState,0);
        addKeyCallback(Phaser.Keyboard.ONE, changeState,1);
        addKeyCallback(Phaser.Keyboard.TWO, changeState,2);
        addKeyCallback(Phaser.Keyboard.THREE, changeState,3);        addKeyCallback(Phaser.Keyboard.FOUR, changeState,4);        addKeyCallback(Phaser.Keyboard.FIVE, changeState,5);        addKeyCallback(Phaser.Keyboard.SIX, changeState,6);
        addKeyCallback(Phaser.Keyboard.SEVEN, changeState,7);
        addKeyCallback(Phaser.Keyboard.EIGHT, changeState,8);
        addKeyCallback(Phaser.Keyboard.NINE, changeState,9);
}

