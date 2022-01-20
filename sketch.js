var name1,name2,name3,name4,continue1;
var confname1,confname2,confname3,confname4;
var conf;
var gameState=0;
var bt,bt2;
var bt1,bt3;
var c1,c2,c3,c4;
var g1;
let person;
function preload(){
    bt2=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png","21.png","22.png","23.png");
}
function setup(){
alert("File has been created by Shresth Sharma and "+"All the copyrights are reserved");
    person = prompt("Enter the number of players", "");
    if(person==2){
        frameRate(999999999);
        bt2.frameDelay = 0.5
    createCanvas(600,600);
    name1=createInput();
    name1.size(400,30);
    name1.position(80,120);
    name2=createInput();
    name2.size(400,30);
    name2.position(80,370);
    conf=createButton('Start');
    conf.size(130,50);
    conf.position(230,500);
    bt=createSprite(900,900,300,300);
    bt.addAnimation("hi",bt2);
    bt.scale=1;
    bt1=createButton('Roll');
    bt1.position(900,900);
    bt1.size(130,50);
    }
    else if(person==3){
        frameRate(999999999);
        createCanvas(600,600);
        name1=createInput('');
        name1.size(400,30);
        name1.position(80,80);
        name2=createInput('');
        name2.size(400,30);
        name2.position(80,250);
        name3=createInput('');
        name3.size(400,30);
        name3.position(80,400);
        conf=createButton('Start');
        conf.size(130,50);
        conf.position(230,530);
        bt=createSprite(900,900,300,300);
        bt.addAnimation("hi",bt2);
        bt.scale=1;
        bt1=createButton('Roll');
        bt1.position(900,900);
        bt1.size(130,50);
    }
    else if(person==4){
        frameRate(999999999);
    createCanvas(600,600);
    name1=createInput('');
    name1.size(400,30);
    name1.position(80,40);
    name2=createInput('');
    name2.size(400,30);
    name2.position(80,160);
    name3=createInput('');
    name3.size(400,30);
    name3.position(80,280);
    name4=createInput('');
    name4.size(400,30);
    name4.position(80,390);
    conf=createButton('Start');
    conf.size(130,50);
    conf.position(230,530);
    bt=createSprite(900,900,300,300);
    bt.addAnimation("hi",bt2);
    bt.scale=0.8;
    bt1=createButton('Roll');
    bt1.position(900,900);
    bt1.size(130,50);
    }
    else{
        alert("Sorry,The game will be soon available 😢.Try playing with 2,3 or 4 players");
    }
    
}
function draw(){
    if(person==2){
        background("orange");
    //enter text for test
    strokeWeight(5);
    fill("blue");
    stroke("red");
    textSize(30);
    
        


    //between these
    if(gameState===0){
        noStroke();
        textSize(60);
        fill("red");
        text("Player1 name",80,100);
        text("Player2 name",80,350);
        textSize(30);
        text("Player1 : "+confname1,80,200);
        text("Player2 : "+confname2,80,450);
    }
    else if(gameState===1){
        textSize(40);
        fill("red");
        strokeWeight(5);
        stroke("Blue");
        text(confname1,10,40);
        text("VS",250,50);
        text(confname2,450,40);
        bt.x=300;
        bt.y=200;
        bt1.position(250,530);
        bt1.mousePressed(()=>{
           c1=Math.round(random(1,2))
           c2=Math.round(random(1,2))
           if(c2===1){
            c3=Math.round(random(1,23))
            
            
           }
           if(c2===2){
            c4=Math.round(random(1,52))
            
            
           }

           
        });
        
        if(c1===1){
            
            if(c2===1){
                textSize(40);
                fill("red");
                text("Dare for "+confname1,200,350);
                dare();
            }
            if(c2===2){
                textSize(40);
                fill("red");
                text("Truth for "+confname1,200,350);
                truth();

            }
        }
        if(c1===2){
            
            if(c2===1){
                textSize(40);
                fill("red");
                text("Dare for "+confname2,200,350);
                dare();
            }
            if(c2===2){
                textSize(40);
                fill("red");
                text("Truth for "+confname2,200,350);
                truth();
            }
        }
    }
    
    confname1=name1.value();
    confname2=name2.value();
    
    conf.mousePressed(()=>{
        conf.hide();
        name1.hide();
        name2.hide();
        gameState=1;
    });
    drawSprites();
    }
    else if(person==3){
        background("orange");
        //enter text for test
        strokeWeight(5);
        fill("blue");
        stroke("red");
        textSize(40);
        text("",100,400);
    
    
    
        //between these
        if(gameState===0){
            noStroke();
            textSize(60);
            fill("red");
            text("Player1 name",80,50);
            text("Player2 name",80,230);
            text("Player3 name",80,380);
            textSize(30);
            text("Player1 : "+confname1,80,150);
            text("Player2 : "+confname2,80,320);
            text("Player3 : "+confname3,80,470);
        }
        else if(gameState===1){
            textSize(40);
            fill("red");
            strokeWeight(5);
            stroke("Blue");
            text(confname1,10,40);
            fill("Blue");
            strokeWeight(5);
            stroke("Red");
            text("VS",150,40);
            fill("red");
            strokeWeight(5);
            stroke("Blue");
            text(confname2,220,40);
            fill("blue");
            strokeWeight(5);
            stroke("red");
            text("VS",370,40);
            fill("red");
            strokeWeight(5);
            stroke("Blue");
            text(confname3,450,40);
            bt.x=300;
            bt.y=200;
            bt1.position(250,530);
            bt1.mousePressed(()=>{
               c1=Math.round(random(1,3))
               c2=Math.round(random(1,2))
               if(c2===1){
                c3=Math.round(random(1,23))
                
                
               }
               if(c2===2){
                c4=Math.round(random(1,52))
                
                
               }
    
               
            });
            
            if(c1===1){
                
                if(c2===1){
                    textSize(40);
                    fill("red");
                    text("Dare for "+confname1,200,350);
                    dare();
                }
                if(c2===2){
                    textSize(40);
                    fill("red");
                    text("Truth for "+confname1,200,350);
                    truth();
    
                }
            }
            if(c1===2){
                
                if(c2===1){
                    textSize(40);
                    fill("red");
                    text("Dare for "+confname2,200,350);
                    dare();
                }
                if(c2===2){
                    textSize(40);
                    fill("red");
                    text("Truth for "+confname2,200,350);
                    truth();
                }
            }
            if(c1===3){
                
                if(c2===1){
                    textSize(40);
                    fill("red");
                    text("Dare for "+confname3,200,350);
                    dare();
                }
                if(c2===2){
                    textSize(40);
                    fill("red");
                    text("Truth for "+confname3,200,350);
                    truth();
                }
            }
        }
        
        confname1=name1.value();
        confname2=name2.value();
        confname3=name3.value();
        conf.mousePressed(()=>{
            conf.hide();
            name1.hide();
            name2.hide();
            name3.hide();
            gameState=1;
        });
        drawSprites();
    }
    else if(person==4){
        background("orange");
    //enter text for test
    strokeWeight(5);
    fill("blue");
    stroke("red");
    textSize(40);
    text("",100,400);



    //between these
    if(gameState===0){
        noStroke();
        textSize(30);
        fill("red");
        text("Player1 name",80,30);
        text("Player2 name",80,150);
        text("Player3 name",80,270);
        text("Player4 name",80,380);
        textSize(30);
        text("Player1 : "+confname1,80,110);
        text("Player2 : "+confname2,80,230);
        text("Player3 : "+confname3,80,340);
        text("Player4 : "+confname4,80,460);
    }
    else if(gameState===1){
        textSize(40);
        fill("red");
        strokeWeight(5);
        stroke("Blue");
        text(confname1,150,30);
        fill("Blue");
        strokeWeight(5);
        stroke("Red");
        text("VS",150,70);
        fill("red");
        strokeWeight(5);
        stroke("Blue");
        text(confname2,150,110);
        textSize(70);
        fill("blue");
        strokeWeight(5);
        stroke("red");
        text("VS",280,70);
        textSize(40);
        fill("red");
        strokeWeight(5);
        stroke("Blue");
        text(confname3,450,30);
        fill("blue");
        strokeWeight(5);
        stroke("red");
        text("VS",450,70);
        fill("red");
        strokeWeight(5);
        stroke("Blue");
        text(confname4,450,110);
        bt.x=300;
        bt.y=200;
        bt1.position(250,530);
        bt1.mousePressed(()=>{
           c1=Math.round(random(1,8))
           c2=Math.round(random(1,2))
           if(c2===1){
            c3=Math.round(random(1,23))
            
            
           }
           if(c2===2){
            c4=Math.round(random(1,52))
            
            
           }

           
        });
        
        if(c1===1){
            
            if(c2===1){
                textSize(40);
                fill("red");
                text("Dare for "+confname1,200,350);
                dare();
            }
            if(c2===2){
                textSize(40);
                fill("red");
                text("Truth for "+confname1,200,350);
                truth();

            }
        }
        if(c1===2){
            
            if(c2===1){
                textSize(40);
                fill("red");
                text("Dare for "+confname2,200,350);
                dare();
            }
            if(c2===2){
                textSize(40);
                fill("red");
                text("Truth for "+confname2,200,350);
                truth();
            }
        }
        if(c1===3){
            
            if(c2===1){
                textSize(40);
                fill("red");
                text("Dare for "+confname3,200,350);
                dare();
            }
            if(c2===2){
                textSize(40);
                fill("red");
                text("Truth for "+confname3,200,350);
                truth();
            }
        }
        if(c1===4){
            
            if(c2===1){
                textSize(40);
                fill("red");
                text("Dare for "+confname4,200,350);
                dare();
            }
            if(c2===2){
                textSize(40);
                fill("red");
                text("Truth for "+confname4,200,350);
                truth();
            }
        }
    }
    if(c1===5){
            
        if(c2===1){
            textSize(40);
            fill("red");
            text("Dare for "+confname1,200,350);
            dare();
        }
        if(c2===2){
            textSize(40);
            fill("red");
            text("Truth for "+confname1,200,350);
            truth();

        }
    }
    if(c1===6){
        
        if(c2===1){
            textSize(40);
            fill("red");
            text("Dare for "+confname2,200,350);
            dare();
        }
        if(c2===2){
            textSize(40);
            fill("red");
            text("Truth for "+confname2,200,350);
            truth();
        }
    }
    if(c1===7){
        
        if(c2===1){
            textSize(40);
            fill("red");
            text("Dare for "+confname3,200,350);
            dare();
        }
        if(c2===2){
            textSize(40);
            fill("red");
            text("Truth for "+confname3,200,350);
            truth();
        }
    }
    if(c1===8){
        
        if(c2===1){
            textSize(40);
            fill("red");
            text("Dare for "+confname4,200,350);
            dare();
        }
        if(c2===2){
            textSize(40);
            fill("red");
            text("Truth for "+confname4,200,350);
            truth();
        }
    }

    
    confname1=name1.value();
    confname2=name2.value();
    confname3=name3.value();
    confname4=name4.value();
    conf.mousePressed(()=>{
        conf.hide();
        name1.hide();
        name2.hide();
        name3.hide();
        name4.hide();
        gameState=1;
    });
    drawSprites();
    }
}