function updateClock() {
    const now = new Date();

    //time
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    hrs = hrs<10 ?"0"+hrs:hrs;
    min = min<10 ?"0"+min:min;
    sec = sec<10 ?"0"+sec:sec;

    const timeString = `${hrs}:${min}:${sec}`;
    document.getElementById("clock").textContent = timeString;

    //date
    let date = now.getDate();
    let month = now.getMonth()+1;
    let year = now.getFullYear();

    const dateString = `${date<10 ?"0"+date:date}/${month<10 ?"0"+month:month}/${year<10 ?"0"+year:year}`;
    document.getElementById("date").textContent =dateString;

    //day
    const days = ["Sunday","Monday","Wednesday","Thursday","Friday","Saturday"];
    const dayName = days[now.getDay()];
    document.getElementById("day").textContent = dayName;

    //greeting
    const greeting = getGreeting(now.getHours());
    document.getElementById("greeting").textContent = greeting;
}

//greeting logic
function getGreeting(hrs) {
    if(hrs>=5 && hrs<12) return "🌞Good Morning!";
    else if(hrs>=12 && hrs<16) return "☀️Good Afternoon!";
    else if(hrs>=16 && hrs<21) return "🌇Good Evening!";
    else return "🌛Good Night!";
}

//time update
setInterval(updateClock,1000);
updateClock();