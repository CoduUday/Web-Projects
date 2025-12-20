function createCard(title, cName, views, monthsOld, duration, thumbnail){
    views=views/1000;
    let view=`${views}k`
    let card=document.createElement("div");
    card.className="card"

    let Thumbnail=document.createElement("div");
    Thumbnail.setAttribute("class","thumbnail");
    Thumbnail.innerHTML = `<img src="${thumbnail}" alt="">`
    let time=document.createElement("div")
    time.className="timebox";
    time.innerHTML=`<p>${duration}</p>`
    Thumbnail.append(time)
    card.append(Thumbnail);

    let content=document.createElement("div");
    content.setAttribute("class","content");
    content.innerHTML = `<h3>${title}</h3><p>${cName}:${view}:${monthsOld} months ago`
    card.append(content);

    document.querySelector(".container").append(card);


}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")