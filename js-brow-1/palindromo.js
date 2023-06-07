const input = document.querySelector("#texto");
const btn = document.querySelector(".btn");
const resultado = document.querySelector("#resultado");

btn.addEventListener("click", function() {
  const texto = input.value;
  if(palindrome(texto)){
    resultado.textContent = texto;
  }
});


function palindrome(str) {
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] !== str[len - 1 - i]) {
       return false;
   }
 }
 return true;
}