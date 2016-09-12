var canon, bullets, velocity = 1000, nextFire = 0, fireRate = 200, enemy,
    bullet, enemyGroup;

demo.state2 = function(){};
demo.state2.prototype = {
    preload: function (){
        game.load.image('base', 'assets/sprites/base.png');
        game.load.image('canon', 'assets/sprites/canon.png');
        game.load.image('bullet','assets/sprites/bullets.png');
    },
    create: function(){
        game.stage.backgroundColor = '#457084';
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();
        
        //add the base sprite
        var base = game.add.sprite(1920/2, 1080/2, 'base');
        base.anchor.setTo(0.5);
        base.scale.setTo(0.4);

        //this adds the bullets to a group, this is useful for sprites that look similar to each other
        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(500, 'bullet')
        //this checks if the bullets is out of the world it kills itself
        bullets.setAll('checkWorlBounds', true);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('anchor.y', 0.5);
        bullets.setAll('scale.x', 0.85);
        bullets.setAll('scale.y', 0.85);
                
        //this add the canon to the base
        canon = game.add.sprite(1920/2, 1080/2, 'canon');
        canon.scale.setTo(0.5);
        canon.anchor.setTo(0.1,0.5);
        
        //this adds an enemy from the state
        enemy = game.add.sprite(100,200, 'lar');
        game.physics.enable(enemy);
        
        //this will add a group of enemies, it's easier to controll if they are more than 1 of the same type
        enemyGroup = game.add.group();
        enemyGroup.enableBody = true; //this enable the enemygroup to use physics
        enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;
        
        for( var i = 0; i< 3; i++ ){
            enemyGroup.create(1600, 350 * i +100, 'lar');
        }
        //this change the size of the enemies in the group
        enemyGroup.setAll('anchor.y', 0.8);
        enemyGroup.setAll('anchor.x', 0.8);
        enemyGroup.setAll('scale.x', 0.4);
        enemyGroup.setAll('scale.y', 0.4);
    },
    update: function(){
        //we code things on update when we need them to be checked every single frame.
        //hace mover el canon a donde apunte el mouse
        canon.rotation = game.physics.arcade.angleToPointer(canon);
        if(game.input.activePointer.isDown){
            this.fire();
        }
        
        //this checks when the bullet and the enemy meets, it will call a function
        //that will destroy both
        game.physics.arcade.overlap(bullets, enemy, this.hitEnemy);
        game.physics.arcade.overlap(bullets, enemyGroup, this.hitGroup);
    },
    fire: function(){
        if(game.time.now > nextFire)
        {
        nextFire = game.time.now + fireRate;
        console.log('firing');
            
        bullet = bullets.getFirstDead();
            
        //after killing resets the position of the cannon
        bullet.reset(canon.x, canon.y);
        
        //move the bullet to the position of the mouse at certain velocity
        game.physics.arcade.moveToPointer(bullet, velocity);
        
        //face the bullet to the position of the mouse
        bullet.rotation = game.physics.arcade.angleToPointer(bullet);
        }
    },
    hitEnemy: function(){
    console.log('hit');
    enemy.kill();
    bullet.kill();
    },
    //since this is a group we have to specify what we want to kill
    //why we add 2 parameters, because when we are going to use this method the parameters are passed in the same order as the function is called.
    hitGroup: function(b,e){
        b.kill();
        e.kill();
    }
};