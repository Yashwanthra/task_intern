async function getCountries(){
    try{
        
        var country = await fetch("https://restcountries.eu/rest/v2/all");
        var data = await country.json();
      
        var root = document.createElement("div")
        root.setAttribute("class","container row");
        
        for(let i = 0;i<250;i++){
            var d1 = document.createElement("div");
            d1.setAttribute("class","col-lg-4" );
            var d2 = document.createElement("div");
            d2.setAttribute("class","col-lg-12");
            d1.appendChild(d2);

            var d3 = document.createElement("div");
            d3.setAttribute("class","card h-100");
            d3.style.display = "flex";
            d2.appendChild(d3);

            var d4 = document.createElement("div");
            d4.setAttribute("class","card-header"); 
            var h1 = document.createElement("h1");
            h1.setAttribute("class","card-text");
            h1.innerText = data[i].name;
            d4.appendChild(h1);
            d3.appendChild(d4);

            var d5 = document.createElement("div");
            d5.setAttribute("class","inner");
            var img1 = document.createElement("img");
            img1.setAttribute("id","imageid");
            img1.setAttribute("class","img-fluid img-thumbnail rounded");
            img1.setAttribute("src",""+data[i].flag);
            d5.appendChild(img1);
        

            var d6 = document.createElement("div");
            d6.setAttribute("class","card-body text-center");
            var l1 = document.createElement("h5");
            var l2 = document.createElement("h5");
            var l3 = document.createElement("h5");
            var an = document.createElement("A");
            l1.setAttribute("id","cap");
            l2.setAttribute("id","reg");
            l3.setAttribute("id","code");
            an.setAttribute("class","btn btn-primary");
            an.setAttribute("value","Check Your Weather");
            an.setAttribute("id","anchor");;
            //an.setAttribute("href","#");
            an.textContent = "Weather Status";
            an.addEventListener("click", async function(){
                try{
                var inputCity = data[i].name
                var weather = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputCity+"&appid=a7075feb246c82f0f1e4fd0d47815a7b");
                var data1 = await weather.json();
                alert("Country : "+ data[i].name+" Humidity :"+data1.main.humidity+"  Temperature :"+data1.main.temp+"  Pressure :"+data1.main.pressure);
                }
                catch{
                    console.log(error);
                }
            })

            var country = data[i].name;

            l1.innerText ="Capital      :"+data[i].capital;
            l2.innerText ="Region       :"+data[i].region;
            l3.innerText ="Country Code :"+data[i].alpha3Code;
    
            d6.appendChild(l1);
            d6.appendChild(l2);
            d6.appendChild(l3);
            d6.appendChild(an);
        
            d5.appendChild(d6);
            d3.appendChild(d5);
            root.appendChild(d1);
            //document.body.appendChild(d1);

        }
        root.appendChild(d1);
        document.body.appendChild(root);
    }catch(error){
    console.log(error);
}
}
getCountries();



//an.onclick = myfun(data[i].name);
            //var but = document.createElement("button");
            //but.setAttribute("onclick",MyFunc(data[i].name));
            //but.setAttribute("value","Weather Status");
           // document.getElementById("anchor").onclick = function(){Myfunc(data[i].name)};
            //document.getElementsById("anchor").href = "#";
            //an.innerText = "Weather Status";
             //document.getElementById("cap").innerText = data[i].capital;
            //document.getElementById("reg").innerText = data[i].region;
            //document.getElementById("code").innerText = data[i].alpha3Code;
             //d6.appendChild(but);
            //d6.appendChild(u1);
            //console.log(data1);
        //function myfun(data){
          //  inputCity = data;
           // alert("Humidity :"+data1.main.humidity+"  Temperature :"+data1.main.temp+"  Pressure :"+data1.main.pressure);
        //}
       // for(let i = 0;i<250;i++){
            /* var box = document.createElement("div");
             box.setAttribute("class","")
             box.style.width = "300px";
             box.style.height = "300px";
             box.style.position = "relative";
             box.style.display = "inline-block";
             box.style.border = "1px solid black";
             //box.style.backgroundColor = "blue";
             box.style.background= ""+data[i].flag;
             box.innerHTML = "<img src=$data[i].flag>";
             //box.style.backgroundImage= "url("+data[i].flag+")";
             box.style.backgroundRepeat = "no-repeat";
             box.style.backgroundPosition = "center";
             box.style.backgroundSize = "cover";row-cols-1,
             box.innerText = data[i].name;
             box.style.textAlign = "center";
 row row-cols-2 row-cols-md-2 g-4
             document.body.appendChild(box); */
              /* var inputCity = window.prompt("Type your City:");
        var weather = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputCity+"&appid=a7075feb246c82f0f1e4fd0d47815a7b");
        var data1 = await weather.json();
        alert("Humidity :"+data1.main.humidity+"  Temperature :"+data1.main.temp+"  Pressure :"+data1.main.pressure);*/