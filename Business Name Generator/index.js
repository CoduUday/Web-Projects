/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/
let adjectives = {
    "1": "Crazy",
    "2": "Amazing",
    "3": "Fire"
} 
let Shop_Name = {
    "4": "Engine",
    "5": "Foods",
    "6": "Garments",
}
let Another_Word = {
    "7": "Bros",
    "8": "Limited",
    "9": "Hub"
}
let adj = Math.floor(Math.random() * 3) + 1 ;
let Shop = Math.floor(Math.random() * 3) + 4;
let Another = Math.floor(Math.random() * 3) + 7;
console.log( `${adjectives[adj]} ${Shop_Name[Shop]} ${Another_Word[Another]}`);



