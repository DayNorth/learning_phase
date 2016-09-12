demo.state1 = function(){};
var cursors, vel = 300, rocks, grass;
demo.state1.prototype = {
    preload: function (){
        game.load.tilemap('field', 'assets/tilemaps/campo2.json', null, Phaser.Tilemap.TILED_JSON); 
        game.load.image('grass', 'assets/tilemaps/grass.png');
        game.load.image('rocks', 'assets/tilemaps/rocks.png');
        game.load.image('lar', 'assets/sprites/larry2.png');
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
         game.stage.backgroundColor = '#DDDDDD';
        
        //function created on state 0 
        //changes the state we are in
        addChangeStateEventListeners();
        
        var map = game.add.tilemap('field');
        map.addTilesetImage('grass');
        map.addTilesetImage('rocks');
        
        grass =  map.createLayer('grass');
        rocks =  map.createLayer('rocks');
        
        map.setCollisionBetween(7,7, true, 'rocks');
        map.setCollision(1, true, 'grass');
        
        lar = game.add.sprite(200, 250, 'lar');
        lar.scale.setTo(0.2, 0.2);
        game.physics.enable(lar);
        
        cursors = game.input.keyboard.createCursorKeys();
    },
    update: function(){
        
        game.physics.arcade.collide(lar, rocks, function(){ console.log('hitting rocks!');});
        game.physics.arcade.collide(lar, grass, function(){ console.log('hitting grass!');});
        
        if(cursors.up.isDown){
            lar.body.velocity.y =-vel;
        }
        else if(cursors.down.isDown){
            lar.body.velocity.y = vel;
        }
        else {
            lar.body.velocity.y = 0;
        }
        if (cursors.left.isDown){
            lar.body.velocity.x =-vel;
        }
        else if(cursors.right.isDown){
            lar.body.velocity.x = vel;
        }
        else {
            lar.body.velocity.x = 0;
        }
    }
};