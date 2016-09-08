demo.state2 = function(){};
demo.state2.prototype = {
    preload: function (){},
    create: function(){
        game.stage.backgroundColor = '#457084';
        console.log('state2');
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();
    },
    update: function(){}
    
};