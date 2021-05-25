
function checkYuGiOh(num){
    var num;
     if (isNaN(num)==true){
        if (Array.isArray(num)==true){
            console.log("invalid parameter: " + JSON.stringify(num));
            return num;
         } else if (typeof(num)=="object"){
            console.log("invalid paramter: " + JSON.stringify(num));
            return num;
         } else {
            console.log("invalid paramter: " + JSON.stringify(num));
            return num;
         }
     }
     else {
         var ans;

         //assigning the check function to a variable and passing the parameter in the checkYuGiOh function to it
         ans = create(num);

         //a function that creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh"
         function create(n){
            var n;
            var arr = [];
            for (i=1; i<=n; i++){
                if (i%2==0 && i%3==0 && i%5==0){
                   arr.push("yu-gi-oh");
                }else  if (i%2==0 && i%3==0){
                   arr.push("yu-gi");
                }else  if (i%2==0 && i%5==0){
                   arr.push("yu-oh");
                } else  if (i%3==0 && i%5==0){
                   arr.push("gi-oh");
                } else  if (i%5==0){
                   arr.push("oh");
                } else  if (i%3==0){
                   arr.push("gi");
                } else  if (i%2==0){
                   arr.push("yu");
                } 
                else{
                   arr.push(i);
                }
              console.log(arr);
            }
            return arr;
           }
           return ans;
     }}
checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizzbuzz is meh");
