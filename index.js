var readlineSync=require('readline-sync');
var user=readlineSync.question("What is your Name?");
console.log("Welcome "+ user+ ": How much do you Know about Mohd Sahil. Lets try the game!");
console.log("Type the appropriate option i.e a or b or c");
console.log("");
var count=0;
function play(question,answer){
  var username=readlineSync.question(question);
  if(username==answer){
    count++;
    console.log("you are right!");
    console.log("Current Score: ", count);
  }else{
    console.log("wrong- your score is remain same: ", count);
  }
}
var person=[
{
  question:"1. What is Sahil's birth-place ? a. kanpur b. Fatehpur c. Delhi : ",
  answer:"a",
},
{
  question : "2. What's Sahil's favourite food ?  a. Sandwich b. Pizza c. Noodels : ",
  answer : "b",
},
{
  question : "3. Which is Sahil's favourite mobile game ? a. BGMI b. Clash Of Clans c. Asphalt-9 : ",
  answer : "a",
},
{
  question : "4. Which is Sahil's favourite color ? a. blue b. Red c. Black : ",
  answer : "c",
},
{
  question : "5. Which is Sahil's favourite car ? a. Bugati b. Lamborgini c. ferrari : ",
  answer : "c",
},
{
  question : "6. Which is Sahil's favourite Subject ? a. Math b. Physics c. Computer : ",
  answer : "c",
},
{
  question : "7. What's the first thing I would do if I won the lottery ? a. Purchase Cars b. Helping poors  c. World tour : ",
  answer : "b",
},
{
  question : "8. Which would Sahil prefer to do among this ?, a. Coding b. Work-Out c. Gaming : ",
    answer : "a"
},
{
  question : "9. What’s my favorite sweet ?, a. Sohan Papdi b. Kaju Katli c. Rasgulla : ",
    answer : "a"
},
{
  question : "10. What is my favorite flavor of ice cream ?, a. Vanila b. Butter-Scotch c. Strawberry : ",
    answer : "b"
},
]
for(var i=0;i<person.length;i++){
  var collection=person[i];
  play(collection.question,collection.answer);
}
console.log("Yay! you scored: ", count);
console.log("");
if(count>7){
  console.log("Wow! I think you are the closest friend of Sahil")
}else{
  console.log("According to your score! You do not know much about Sahil!")
}
console.log("---------------------------------------");

console.log("Send me the Screenshot of your score!");