var accel = 400, platform, platformGroup;
demo.state5 = function(){};
demo.state5.prototype = {
    preload: function (){
        game.load.image('platform', 'assets/sprites/platform.png');
        
    },
    create: function(){
        game.stage.backgroundColor = '#800080';
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();
        
        lar = game.add.sprite(1080/2, 500, 'lar');
        platform = game.add.sprite(0, 800, 'platform');
        //it's not very wise to create a variable for each platform, it's better to create a group
        platformGroup = game.add.group();
        platformGroup.create(650, 400, 'platform');
        platformGroup.create(1500, 400, 'platform');
        
        game.physics.enable([lar, platform, platformGroup]);
        
        //adding some physics so when lar jumps its going to go down and bounce a bit
        lar.body.gravity.y = 500;
        lar.body.bounce.y = 0.1;
        //stops the acceleratiom
        lar.body.drag.x = 400;
        //makes lar to collide with the borders
        lar.body.collideWorldBounds = true;
        lar.animations.add('walk',[0,1,2,5,6,7])
        
        //this makes the platform inmovible
        platform.body.immovable = true;
        
        //this makes the whole group immovable
        platformGroup.setAll('body.immovable', true);
    },
    update: function(){
        game.physics.arcade.collide(lar, [platform, platformGroup]);
        if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            lar.scale.setTo(-1, 1);
            lar.animations.play('walk', 5, true);
            lar.body.acceleration.x =-accel;
            
        } else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            lar.scale.setTo(1, 1);
            lar.animations.play('walk', 5, true);
            lar.body.acceleration.x = accel;
        } else {
            lar.body.acceleration.x = 0;
        }
        //jump
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            lar.body.velocity.y =-300;
        }
    }
    
};