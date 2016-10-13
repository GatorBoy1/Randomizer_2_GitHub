// 

function makeBoxes(){
   // parseInt makes sure that the number entered not gets treated like a string
   var numberOfBoxes=parseInt(document.getElementById('fnames').value, 10);
   var boxesHTML="";
   var boxesString="<input type='text'/ name='name[]'/ placeholder='Enter Name'/ required>"+ "<br>" 
   console.log(numberOfBoxes);
   for (var i=1; i<=numberOfBoxes; i++){
       boxesHTML+=boxesString;
   }
   document.getElementById('boxes').innerHTML=boxesHTML;
}