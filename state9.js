demo.state9 = function(){};
demo.state9.prototype = {
    preload: function (){},
    create: function(){
        game.stage.backgroundColor = '#000532';
        console.log('state9');
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();
    },
    update: function(){}
    
};