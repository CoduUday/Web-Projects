    let currentsong=new Audio();
    let currentfolder;
    let songname;
    let song;
    function formatTime(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = Math.floor(seconds % 60);

  // Add leading zero if seconds < 10
  if (secs < 10) {
    secs = "0" + secs;
  }
  if(isNaN(seconds)||seconds<0){
    
    return `0:00`
  }
  return `${mins}:${secs}`;
}

 



async function getSongs(folder) {
    let a = await fetch(`http://127.0.0.1:3000/${folder}`)
    let response=await a.text()
    // console.log(response)
    let div=document.createElement("div")
    div.innerHTML=response;
    let as=div.getElementsByTagName("a")
    let songs=[]
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href)
        }
    }
    // console.log(songs)
   let songUL=document.querySelector(".songlist").getElementsByTagName("ul")[0]
let i=0
songUL.innerHTML=""
// console.log(songs)
let songname=await names(folder)
// console.log(songname)
for (const song of songname) {
    songUL.innerHTML=songUL.innerHTML + `<li><img class="invert" src="music.svg" alt="">
                            <div class="info">
                                <div>${song}</div>
                                <div class="hiddenBox">${songs[i]}</div>

                            </div>
                            <div class="playnow">
                                Play Now
                                <img src="play.svg" class="invert" alt="">
                            </div></li>`;
                            i++
}


//Attaching event listener to each song


   Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e=>{

        e.addEventListener("click",element=>{
           playMusic(e.querySelector(".info").lastElementChild.innerHTML,e.querySelector(".info").firstElementChild.innerHTML)
        })
})

return songs

}



const playMusic= (track,name,pause=false)=>{
    document.querySelector(".songinfo").innerHTML=name
    document.querySelector(".songtime").innerHTML=`00:00/${currentsong.duration}`
    currentsong.src=track;
    if(!pause){
        currentsong.play()
        play.src="pause.svg"
 
    }
    currentsong.play()
}

async function names(folder){
    let a = await fetch(`http://127.0.0.1:3000/${folder}`)
    let response=await a.text()
    let div=document.createElement("div")
    div.innerHTML=response;
    let as=div.getElementsByTagName("a")
    // console.log(as)
    let names=Array.from(as).map((value)=>{
        if(value.innerHTML.includes(".mp3")){
        return value.innerHTML
        }
    })                                                  
    names.shift()
    
    // console.log(names)
   let newnames=names.map((value)=>{
    // console.log(value)
    if(value !== undefined){
    let length=value.length
    return value.slice(0,length-4)
    }
   })
   newnames= newnames.filter(value => value != null);
//    console.log(newnames)
   return newnames;
}

async function DisplayAlbums(params) {
    let a = await fetch(`http://127.0.0.1:3000/songs/`)
    let response=await a.text()
    let div=document.createElement("div")
    div.innerHTML=response;
    let anchors=div.getElementsByTagName("a")
    let array=Array.from(anchors)
    Array.from(anchors)
        for (let index = 0; index < array.length; index++) {
            const e = array[index];
            
       
        if(e.href.includes("http://127.0.0.1:3000/%5Csongs%5C")){
       let folder = (e.href.split("%5C").slice(-1)[0].slice(0,e.href.split("%5C").slice(-1)[0].length-1))
           //Get metadata of folder
            let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`)
            // console.log(folder,a.status)
            let response=await a.json()
            // console.log(response.title)
            document.querySelector(".cardcontainer").innerHTML += `<div data-folder="${folder}" class="card">
                        <div class="play">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://
                            www.w3.org/2000/svg">
                        <path fill="black" d="M5 20V4L19 12L5 20Z" stroke="#141B34" stroke-width="1.5"
                        stroke-linejoin="round" />
                        </svg>
                        </div>
                        

                         <img src="http://127.0.0.1:3000/songs/${folder}/cover.jpg" alt="">
                         <h2>${response.title}</h2>
                         <p>${response.description}</p>
                    </div>`
        }
        }
 //Load the playlist when card is clicked
Array.from(document.getElementsByClassName("card")).forEach(e=>{
    // console.log(e)
    e.addEventListener("click",async (item)=>{
        let folder=item.currentTarget.dataset.folder
        console.log(folder)
        currentfolder=folder
        // await getSongs(`songs/${folder}`) 
         songname=await names(`songs/${folder}`)
    // console.log(songname)
        songs= await getSongs(`songs/${folder}`) 
    })
})
    
}


async function main() {


    // await DisplayAlbums()
    songname=await names(`songs/cs`)
    // console.log(songname)
    songs= await getSongs(`songs/cs`) 
    // console.log(songs)
    playMusic(songs[0],songname[0],true)
    currentsong.src=songs[0]

    //Display all the alubums
    DisplayAlbums()
//Attaching event listener to pre,play,next
play.addEventListener("click",()=>{
    if(currentsong.paused){
        currentsong.play()
        play.src="pause.svg"
    }
    else{
        currentsong.pause()
        play.src="play.svg"
    }
})
//Listen for timee update event
    currentsong.addEventListener("timeupdate",(a)=>{
        // console.log(currentsong.currentTime,currentsong.duration)
        document.querySelector(".songtime").innerHTML=`${formatTime(currentsong.currentTime)}/${formatTime(currentsong.duration)}`
        document.querySelector(".circle").style.left=(currentsong.currentTime/currentsong.duration)*100 + "%"
    })
//Add an Event Listener to seekbar
document.querySelector(".seekbar").addEventListener("click",e=>{
    let percent=e.offsetX/e.target.getBoundingClientRect().width*100
    // console.log(percent)
    document.querySelector(".circle").style.left=percent+ "%";
   currentsong.currentTime= (percent * currentsong.duration/100) 
   if(currentsong.pause){
    currentsong.play()
    play.src="pause.svg"
   }
})

//EventListner for hamburger
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".left").style.left=0
})
//EventListner for close
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".left").style.left="-100%"
})

//Adding EventListener for next and pre

previous.addEventListener("click",()=>{
    let index=songs.indexOf(currentsong.src)
    if(index>0){
    playMusic(songs[index-1],songname[index-1])
    }
})
next.addEventListener("click",()=>{
    let index=songs.indexOf(currentsong.src)
    if(index<songs.length-1){
    playMusic(songs[index+1],songname[index+1])
    }
})

//Adding event to volume
document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
currentsong.volume=e.target.value/100
})
//Add event listener to mute the track
document.querySelector(".volume>img").addEventListener("click",(e)=>{
    if(e.target.src.includes("volume.svg")){
       e.target.src = e.target.src.replace("volume.svg","mute.svg")
        currentsong.volume=0
        document.querySelector(".range").getElementsByTagName("input")[0].value=0
    }
    else{
        console.log(e.target.src)
        e.target.src = e.target.src.replace("mute.svg","volume.svg")
        currentsong.volume=0.1
        document.querySelector(".range").getElementsByTagName("input")[0].value=10
    }
})

}
main()

