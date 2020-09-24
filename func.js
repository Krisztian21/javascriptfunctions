 "use strict";

 /*function Osszead(a, b){
    var a=prompt("Kérem az a számot: ", 0);
    var b=prompt("Kérem a b számot ", 0);
    console.log(`Az eredmeny: ${+a + +b}`);
   //return a+b;
   document.getElementById('kiir').innerText=eredmeny;
 }

 Osszead();

 //let eredmeny = Osszead(-96, 485);

 var a=prompt("Kérem az a számot")
 var b=prompt("Kérem a b számot!")
 if(a!=null||b!=null){
     console.log(Number(Osszead(a, b)))
    document.getElementById('kiir').innerText=eredmeny;
 }*/

/* var k=confirm("Éhes vagy?");
 if(k==true){
     console.log("Zabáljál");
 }
 else{
     console.log("Egészségedre");
 }*/

 /*function Ehesvagy(){
     let valasz=window.confirm("Éhes vagy-e?");
     if(valasz){
         console.log('Akkor menj el kajálni!');
     }
     else{
         console.log('Egészségedre');
     }
 }

 Ehesvagy();*/

 /* Ez a függvény literál módszer: */

 /*console.log(Osszead(123, 586));

 let Osszead = function(a, b){
     return a+b;
 }*/
//console.log(Osszead(123, 586));

/*let Ehesvagy=function(){
    if(window.confirm("Éhes vagy-e?")){
        console.log('Akkor menj el kajálni!');
    }
    else{
        console.log('Egészségedre');
    }
};
Ehesvagy();*/

/*function Tudszszámolni(question, igen, nem){
    if(window.confirm(question)){
        igen();
        /*(function(){
          let elso=window.prompt('Az első szám: ', 0);
          let masodik=window.prompt('A második szám: ', 0);
          console.log(+elso + +masodik);
        })()
        //console.log('Ügyes vagy!');
    }
    else{
        nem();
        //console.log('Menj vissza az iskolába!');
    }
};
Tudszszámolni("Tudsz számolni!",
function(){
    let elso=window.prompt('Az első szám: ', 0);
    let masodik=window.prompt('A második szám: ', 0);
    console.log(`Az eredmény: ${+elso + +masodik}`);
    console.log('Ügyes vagy!');
},

function(){

});*/

//Fügvény literál

let Osszead = function(a, b){
    return a+b
};

//arrow function

let Osszead = (a, b) => a+b;
console.log(Osszead(14, 28));0