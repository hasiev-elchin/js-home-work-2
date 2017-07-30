;(function () {
   function showEasy(first, last) {
       if(first === '1') {
           first = 2;
       }
       nextPrime:
           for (var i = first; i <= last; i++) {
               for (var j = 2; j < i; j++) {
                   if (i % j == 0) continue nextPrime;
               }

               alert(i);
           }
   }

   showEasy(prompt('Введите первое число: ', 2), prompt('Введите Второе число: '));
})();