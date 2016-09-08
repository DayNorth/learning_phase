demo.state5 = function(){};
demo.state5.prototype = {
    preload: function (){},
    create: function(){
        game.stage.backgroundColor = '#800080';
        console.log('state5');
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();
    },
    update: function(){}
    
};