setInterval(()=>
{
 d=new Date();
 console.log(d);
th=d.getHours();
tm=d.getMinutes();
ts=d.getSeconds();

hposition=30*(th + tm/60 + ts/3600);
mposition=6*(tm+ts/60);
sposition=6*(ts);

hour.style.transform = `rotate(${hposition}deg)`;
minute.style.transform = `rotate(${mposition}deg)`;
second.style.transform = `rotate(${sposition}deg)`;
},1000)