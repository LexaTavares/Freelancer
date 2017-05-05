/*
 * Archivo principal de JS
 */

 var inputs = document.getElementsByClassName('inputs');

 for(var i = 0; i < inputs.length; i++){
   inputs[i].addEventListener('click',textoInputs);
 };

 //modifica los imputs y hace chicos los labels
 function textoInputs(){
   this.classList.add('textoInput');
   this.previousElementSibling.classList.add('active');
 };
