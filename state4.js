demo.state4 = function(){};
demo.state4.prototype = {
    preload: function (){},
    create: function(){
        game.stage.backgroundColor = '#89a19b';
        console.log('state4');
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();
    },
    update: function(){}
    
};