//inline comment//
/*multiline
comment*/

//DataTypes//
var myname="rus";
myname=8;
var a;
var b=2;
a=7;
b = a;
console.log(a+b**2);
//edit string
var mystr="Jello world";
//mystr[0]="H";//strings are immutable
mystr="Hello world"
//lenth of string
console.log(mystr.length);
//array
var ourarray=["John",23];
//nested array
var ourarray=[[18,64,49],["array in array",2]]
console.log(ourarray[1][0]);
//append array
ourarray.push(["new item",3]);
//remove last item using pop
ourarray.pop();
//remove first item
ourarray.shift();
console.log(ourarray);
//add to begining of array
ourarray.unshift(["new item",0]);
//function
 function created() {
   console.log("funky")
 }
 created();
//booleans
function welToBoolean(){
  return true;
}
//if statement
var i = 5;
if(i>3){
  console.log("true");
}
//comparison
if(i==5){
  console.log("TRUE");
}
//return undefined
function k(){
  return undefined;
}
//objects
var ourdog={
  "name":"camper",
  "legs":4,
  "tails":1
};
var mydog={
  "name":"quincy",
  "friends": ["life"]
  
};
//accessing obj by dot
var testobj={
  "mat":"ballcap",
  "cap":"nike"

};
var matValue=testobj.mat;
var capValue=testobj.cap;
console.log(matValue+" "+capValue);
//accessing by bracket notation 
var entreeValue=testobj["mat"];
var drinkvalue=testobj["cap"];
//if number
var players={
  14:"cryuff",
  10:"bergkamp",
  5:"puyol",
  4:"gullit",
  7:"beckham",
};
var playernumber=7;
console.log(players[playernumber]);
players[10] ="del piero";
console.log(players);
//adding n deleting property
players[1]="casillas";
console.log(players);
delete players[1];
console.log(players);
//as own property
if(players.hasOwnProperty(7)){
  var k=1;
};
console.log(k);
//objects in arrays
var music=[
  {
    "artist":"ed",
    "title":"divide",
    "formats": ["CD","LP"],
  },
  {
    "artist":"Knaan",
    "title":"wavin flag",
    "formats":["youtube video"]
  }
]
//accessing nested objects
var storagecar={
  "car":
  {
    "inside":{
      "glove box":"maps",
      "passenger seat":"crumbs",
    },
    "outside": {
      "trunk":"jack"
    }
  }
};
var gloveboxcontents=storagecar.car.inside["glove box"];
console.log(gloveboxcontents);
//accessing nested arrays
var music=[
  {
    "artist":"ed",
    "title":"divide",
    "formats": ["CD","LP"],
  },
  {
    "artist":"Knaan",
    "title":"wavin flag",
    "formats":["youtube video"]
  }
];
var secmusic=music[1].formats[0];
console.log(secmusic);
