var demo = {}, altura  = 1920/2, ancho = 1080/2, larry, speed = 4;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function (){
        game.load.image('larry', 'assets/sprites/larry1.png');

    },
    create: function(){
        game.stage.backgroundColor = '#80ff80';
        console.log('state0');
        //THINGS TO REMEMBER
        // eventlistener are local to the state that they were made in
        
        //we just call the function that does all the callbacks
        addChangeStateEventListeners();
        
        //to scale the size of the game in relation to the window's size
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        
        //add image to the map
        larry = game.add.sprite(altura, ancho, 'larry');
        larry.anchor.setTo(0.5,0.5);
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            larry.x += speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            larry.x -= speed;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            larry.y  -= speed;
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            larry.y += speed;
        }
    }
    
};

//to change states 
function changeState(i, stateNum){
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

