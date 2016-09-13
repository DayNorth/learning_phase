demo.state6 = function(){};
demo.state6.prototype = {
    preload: function (){
        game.load.image('volcano', 'assets/sprites/volcano.png');
        game.load.image('redball', 'assets/sprites/redball.png');
        game.load.image('orBall', 'assets/sprites/orBall.png');
    },
    create: function(){
        game.stage.backgroundColor = '#3a000f';
        //function created on state 0 
        //changes the state we are in
        addChangeStateEventListeners();
        
        game.add.sprite(1920/2, 1080, 'volcano').anchor.setTo(0.5, 1);
        
        //esto hace emitir particulas al volcan, ya que queremos que muestre dos distintas, random, los metemos en un array [], el segundo parametro es el random, el tercero la cantidad de particulas, el 4 si queremos que colisione con otros cuerpos en el mapa, y el quinto si queremos que choque con los bordes del mundo
        var emiter = game.add.emitter(1920/2, 550, 2000);
        emiter.makeParticles(['redball', 'orBall'], 0, 5000, false, true);
        //this makes the particles to fly around
        emiter.maxParticleSpeed.set(300, -300);
        emiter.minParticleSpeed.set(-300, -100);
        
        //this will add some gravity to our particles
        emiter.gravity = 300;
        
        //this will put a few seconds delay before starting
        game.time.events.add(2000, function(){
        //if the particules explotes at once, how long they are going to last and how often the particules will appear
        emiter.start(false, 5000, 20); 
        //this will make the volcano to check if the emitter is on or off every 500 mileseconds    
        game.time.events.loop(500, function(){
            if(emiter.on){
                emiter.on = false;
            }
            else {
                emiter.on = true;
            }
        });
        })
    },
    update: function(){}
    
};