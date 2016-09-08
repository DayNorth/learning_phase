demo.state7 = function(){};
demo.state7.prototype = {
    preload: function (){},
    create: function(){
        game.stage.backgroundColor = '#ff0f3b';
        console.log('state7');
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();
    },
    update: function(){}
    
};