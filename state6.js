demo.state6 = function(){};
demo.state6.prototype = {
    preload: function (){},
    create: function(){
        game.stage.backgroundColor = '#3a000f';
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();
    },
    update: function(){}
    
};