function displayresult(){
    var city=document.getElementById("city").value;
    var apikey='e1b52bb4aba25429bf98857a5522e8b4';
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='
    +city + '&appid='+apikey+'&units=metric')
    .then(Response => Response.json())
    .then(data=>{
        var t=data['main']['temp']
        document.getElementById("output").innerHTML=t;
    })
}