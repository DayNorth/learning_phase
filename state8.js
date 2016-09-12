demo.state8 = function(){};
demo.state8.prototype = {
    preload: function (){},
    create: function(){
        game.stage.backgroundColor = '#f1f69c';
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();
    },
    update: function(){}
    
};