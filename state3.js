demo.state3 = function(){};
demo.state3.prototype = {
    preload: function (){},
    create: function(){
        game.stage.backgroundColor = '#d2953a';
        console.log('state3');
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();
    },
    update: function(){}
    
};