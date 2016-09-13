var arrow, startPointX, startPointY, endPointX, endPointY, swipeDirection;
demo.state7 = function(){};
demo.state7.prototype = {
    preload: function (){
        game.load.image('arrow', 'assets/sprites/arrow.png');
    },
    create: function(){
        game.stage.backgroundColor = '#ff0f3b';
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();
        
        arrow = game.add.sprite(1920/2, 1080/2, 'arrow');
        arrow.anchor.setTo(0.5);
        
        game.input.onDown.add(this.startSwipe);
        game.input.onUp.add(this.getSwipeDirection);
    },
    update: function(){},
    startSwipe: function(){
        startPointX = game.input.x;
        startPointY = game.input.y;
    },
    getSwipeDirection: function(){
        endPointX = game.input.x;
        endPointY = game.input.y;
        
        
        //checks positions of the mouse or swipe on smartphones
        if(Math.abs(endPointY - startPointY) < 10 && Math.abs(endPointX - startPointX) < 10){
            return false;        
        }
        
        if(Math.abs(endPointY - startPointY) < Math.abs(endPointX - startPointX)){
            console.log('horizontal');
            if(endPointX > startPointX){
                swipeDirection = 90;
                
            } else {
                swipeDirection = 270;
            }
        } else {
            console.log('vertical');  
            if(endPointY > startPointY){
                swipeDirection = 180;
                
            } else {
                swipeDirection = 0;
            }
        }
        arrow.angle = swipeDirection;
    }
};