let label =document.querySelector(".myLabel");
update();
setInterval(update,1000);
function update(){
    let date = new Date();
    let hh =date.getHours();
    let mm =date.getMinutes();
    let ss =date.getSeconds();
    let amOrPm = hh>=12? "pm" : "am";

    hh = (hh%12) || 12;

    hh =(hh<10)? "0"+hh : hh;
    mm =(mm<10)? "0"+mm : mm;

    ss =(ss<10)? "0"+ss : ss;

    let time= `${hh}:${mm}:${ss} ${amOrPm}`;

       label.innerHTML=time ;
}