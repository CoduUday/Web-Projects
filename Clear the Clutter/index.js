// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from "fs/promises";
let files= await fs.readdir("C:\\Users\\udayl\\OneDrive\\Desktop\\HTML\\Video 91\\unsorted")
let ext=[];
let folder=[];
files.forEach(element => {
    folder.push(element.slice(element.indexOf(".")))
});
folder= Array.from(new Set(folder))
console.log(folder)
folder.forEach(element => {
    fs.mkdir(`C:/Users/udayl/OneDrive/Desktop/HTML/Video 91/${element.slice(1)}`, { recursive: true})
});
folder.forEach(element => {
    files.forEach(ele => {
        if(ele.includes(element)){
            fs.rename(`C:\\Users\\udayl\\OneDrive\\Desktop\\HTML\\Video 91\\unsorted\\${ele}`,`C:\\Users\\udayl\\OneDrive\\Desktop\\HTML\\Video 91\\${element.slice(1)}\\${ele}`)
        }
    });
});









































































































































































































































































