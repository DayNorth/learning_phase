demo.state8 = function(){};
demo.state8.prototype = {
    preload: function (){},
    create: function(){
        game.stage.backgroundColor = '#f1f69c';
        console.log('state8');
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();
    },
    update: function(){}
    
};