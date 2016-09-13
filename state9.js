var ref, fbObj, hsText = [];

demo.state9 = function(){};
demo.state9.prototype = {
    preload: function (){
        game.load.image('boton1', 'assets/botones/boton1.png');
        game.load.image('boton2', 'assets/botones/boton2.png');
    },
    create: function(){
        game.stage.backgroundColor = '#088da5';
        //function created on state 0 
        //change the state we are in
        addChangeStateEventListeners();        
        ref = new Firebase('https://phaser-demo.firebaseio.com/');
        ref.authWithCustomToken('eGLLtCvymsRtNwDsTRrJM3dN3OZ1rJpUgdLJXyAU', function(err){
            if(err){
                console.log('error!');
            }
            else {
                console.log('authorized!');
            }
        });
        
        for (var i = 1; i < 11; i++){
            game.add.text(1920/2, 20 + (i * 90), i + '. ', {fontSize: '40px'}). anchor.setTo(1,0);
        }
        
        for (var i = 0; i < 10; i++){
         hsText[i] = game.add.text(1920/2, 20 + ((i + 1) * 90), '', {fontSize: '40px'});
        }
        var updateHSText = this.updateHSText;
        ref.on('value', function(snapshot){
           console.log(this);
            fbObj = snapshot.val();
            updateHSText(fbObj.hs);
        });
        
        game.add.button(1100,400, 'boton1', function(){
            var score = Math.round(Math.random() * 100);
            fbObj.hs.push(score);
            fbObj.hs = fbObj.hs.sort(function(a,b){
                return b -a;
            }).slice(0, 10)
            ref.set(fbObj);
            console.log(score);
        });
        
        game.add.button(1100, 600, 'boton2', function(){
            ref.set({hs: [0,0,0,0,0,0,0,0,0,0]});
        });
    },
    updateHSText: function(hs){
         for (var i = 0; i < 10; i++){
         hsText[i].text = hs[i];
        }
    }
    
};