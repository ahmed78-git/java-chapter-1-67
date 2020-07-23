//_________________________________________-TASK : 1__________________________________________________

// function date(){
//     var date=new Date();
//     return date
// }
// document.write(date());

//________________________________________ANS : 2___________________________________________________

// function name(a,b){
//     return a+b;
// }
// document.write("Have a nice day! "+name("AHMED ","KALEEM"));

//________________________________ANS : 3____________________________________________________

// function add(a,b){
//       return a+b;
// }
// var add1=+prompt("Enter first number: ");
// var add2=+prompt("Enter second number: ");
// document.write("Addition of "+add1+" and "+add2+" ="+add(add1,add2));

//________________________________________ANS : 4___________________________________________________

// function calculator(a,b,c){
//     if(b==="+"){
//         return a + c; 
//     }
//     else if(b==="-"){
//        return a - c;
//     }
//     else if(b==="*"){
//       return  a * c;
//     }
//     else if(b==="/"){
//       return  a / c;
//     }
// }
// var a1=+prompt("Enter First number: ");
// var a2=+prompt("Enter second number: ");
// var a3=prompt("Enter operation: ");
// var result=calculator(a1,a3,a2);
// document.write("Result of "+a1+a3+a2+" = "+result);

//__________________________________________ANS : 5___________________________________________________

// function square(a){
//     return a*a;
// }
// var num=+prompt("Enter your numbe for square: ");
// document.write("Square of "+num+" = "+square(num));

//______________________________________ANS : 6_______________________________________________

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
// var num=+prompt("Enter number to find factorial : ");
//  var result = factorial(num);
//  document.write("The factorial of " + num + " is " + result);

//________________________________________ANS : 7___________________________________________

// function counting(a,b){
//     for(var i=a;i<=b;i++){
//        document.write(i+"<br>"); 
//     }
// }
// var one=+prompt("Enter starting number for counting: ");
// var two=+prompt("Enter end number of counting: ");
// counting(one,two);

//_____________________________________________AMS : 8___________________________________________

// function calcHypotenus(base,  per) {
//  var ans=(base*base)  + (per*per);
//   return inner(ans);
//  function inner(a){
//    return  Math.sqrt(a);
//  }
// }
// document.write("Hypotenuse of a right angle triangle : "+calcHypotenus(4,3));


//_______________________________________ANS : 9_____________________________________________

// function rectangle(width,height){
//   return width*height;
// }
// var a=prompt("Enter width of a rectangle: ");
// var b=prompt("Enter height of a rectangle: ");
// document.write("Area of a reactangle : "+rectangle(a,b));

//_______________________________________ANS : 10_____________________________________________

// var word2=prompt("Enter your word: ");
// var word1=word2.toLowerCase();
// function palin(word){
// var check="";
// for(var i=word.length-1;i>=0;i--){
//   check+=word[i];
// }
// if(check===word){
//  return document.write(word +" is palindrome word");
// }
// else{
//   return document.write("This word is not palindrome word.");
// }
// }
// palin(word1);

//______________________________________________ANS : 11__________________________________________

// function capitalize_Words (str) {
//   return str.split(' ').map((value) => value.charAt(0).toUpperCase() + value.slice(1)).join(' ');
//   }
//   document.write(capitalize_Words('the quick brown fox'));

//__________________________________________ANS : 12______________________________________________

// let value = "Web Development Tutorial";
// let arrayValue = value.split(" ").sort();
// document.write(`Longest word in the string "${value}" is "${arrayValue[0]}"`);


//_____________________________________ANS: 13____________________________________________

// function countCharacters(char, string) {
//   return string.split('').reduce((acc, ch) => ch === char ? acc + 1: acc, 0)
// }

// var a="JSResourceS.com";
// var b="o"
// document.write(countCharacters(b,a));

