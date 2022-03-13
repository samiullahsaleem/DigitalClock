function digitalClock()
{
    var date = new Date();
    var hours = date.getHours() + '';
    var mins = date.getMinutes() + '';
    var sec = date.getSeconds() + '';
    var day = date.getDay();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    if(hours.length<2)
    {
        hours = '0'+ hours;
    }
    if(mins.lenth < 2)
    {
        mins = '0' + mins;
    }
    if(sec.length < 2)
    {
        sec = '0' + sec; 
    }
    var time = 'Day:    '+ days[day] +'\n' + 'Time:   '+ hours + ':' + mins + ':' + sec;
    document.getElementById('clock').innerText = time;
    console.log(time);
}

digitalClock();
setInterval(digitalClock,1000);