var demo = {};
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function (){},
    create: function(){
        game.stage.backgroundColor = '#80ff80';
        console.log('state0');
        //THINGS TO REMEMBER
        // eventlistener are local to the state that they were made in
        
        addChangeStateEventListeners();

    },
    update: function(){}
    
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

