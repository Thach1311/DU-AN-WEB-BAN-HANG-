const currentTime = ()=>{
    const el = document.querySelector(".oclock");
    let date = new Date();
    let hh = date.getHours;
    let mm = date.getMinutes;
    let ss = date.getSeconds;

    hh = hh < 10 ? '0${hh}' : hh;
    mm = mm < 10 ? '0${mm}' : mm;
    hh = hh < 10 ? '0${hh}' : hh;
}