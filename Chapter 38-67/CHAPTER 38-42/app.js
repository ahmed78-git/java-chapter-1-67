                              //TASK NO = 01

//function power(a,b){

//var value = Math.pow(a, b);

//return value

//}

//var number =+prompt("Enter your number: ");

//var pow =+prompt("Enter its power: ");

//var result =power(number,pow);

//document.write("The Answer is : " + result);


                              //TASK NO = 02


  //function leapyear (year) {

  //if((year % 4 === 0) && (!(year % 100 === 0) || (year % 400 === 0))){

  // return document.write("It Is a Leap Year");

 // }

//  else{

  //  return document.write("It is not a Leap Year!");

 // }

 //  }

// var year=+prompt("Enter Year: ");

// leapyear(year) 

                              //TASK NO = 03

// var one=+prompt("Enter length1 of a triangle: ");

// var two=+prompt("Enter length2 of a triangle: ");

// var three=+prompt("Enter length3 of a triangle: ");
                              
// var result1=first(one,two,three);

// function first(a,b,c){

//   return (a+b+c)/2;

// }

// document.write("Value of S is = "+result1);

// var result2=area(result1,one,two,three)

// function area(s,a,b,c){

//  var Area=s*(s-a)*(s-b)*(s-c);

//  return Area

// }

// document.write("<br />Area of triangle is = "+result2);


                              //TASK NO = 04

//var subject1 =+prompt("Enter subject1 marks : ");

// var subject2 =+prompt("Enter subject2 marks : "); 

// var subject3 =+prompt("Enter subject3 marks : "); 

// function ave(a,b,c){

// return a+b+c/3 ;

// }

// var result1=ave(subject1,subject2,subject3);

// function per(i,j,k){

//      return (i+j+k)*100/300; 

//    }

//    var percentage=per(subject1,subject2,subject3);

//    function main(x,y){

//        return document.write("Average Marks = "+x+"<br />Percentage = "+y);

//      }

//      main(result1,percentage);
    
                                //TASK NO = 05



//   var word=prompt("Enter any name to find its letter: ");

//    var chara=prompt("Which word do you want to find from thus name : ");

//    function indexOf(word, character){

//  for (let i = 0; i < word.length; i++) {

//    if (word[i] === character) {

//  return i;

//    }

//  }
  
//  return-1

//  }

// document.write("Your word is at index : "+indexOf(word,chara));


                                //TASK NO = 06


//    function removeVowels(str) {

//   return str.replace(/[aeiou]/gi, '');

// }
    
// document.write( removeVowels("My name is Muhammad Ahmed Kaleem.I m student of saylani."));
    

                                //TASK NO = 07

//  function findOccurrences() {

//    var str = "Pleases read this application and give me gratuity";

//    var res = str.match(/[ea]{2}/g);

//    return res ? res.length : 0;
   
//  }

//  var found = findOccurrences();

//  document.write(found);


                                 //TASK NO = 08

//  var distance=+prompt("Write a distance between 2 cities in km : ");

//   function meters(a){
//     return a*1000
//   }

//   var result1=meters(distance);
 
//   function feet(b){
//       return b*3281
//   }

//   var result2=feet(distance);
 
//   function inches(c){
//       return c*39370
//   }
 
//   var result3=inches(distance)
 
//   function centimeters(d){
//      return d*1000000
//   }

//   var result4=centimeters(distance);
 
//   document.write("<br />Distance in meters is: "+result1);

//   document.write("<br />Distance in feet is: "+result2);

//   document.write("<br />Distance in inches is: "+result3);

//   document.write("<br />Distance in centimeters is: "+result4);
                                 
                             
                                 //TASK NO = 09


// var work=+prompt("Total hours with overtime do you work: ");

//  function Overtime(a){

//      if(a>40){

//          var b=a-40;

//          return document.write("Total amount of "+b+ " overtimes hours : "+ b*1200);
//      }

//      else{

//          return document.write("No over time overs!")
//      }
//  }

//  Overtime(work);

                                //TASK NO = 10

//  var amount=+prompt("Enter no of total amounts: ");

//  function hundred(a){

//      var one=Math.floor(a / 100);

//      return one;

//  }

//  var result1=hundred(amount);


//  function fifty(b){

//      var two=Math.floor((b%100)/50);
//      return two
//  }

//  var result2=fifty(amount);

//  function ten(c){
//      var three=Math.floor(((c%100)%50)/10);
//      return three
//  }

//  var result3=ten(amount);

//  document.write("You will have "+result1+" hundred notes "+result2+" fifty notes "+result3+" ten notes");



