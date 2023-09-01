let coun = document.getElementById('counrep');
let input = document.getElementById('val');
let weather = document.getElementById('p1');
let deg = document.getElementById('deg');
let container = document.getElementById('meta-container');
let country = 'chennai';

const API_KEY  = `aa01fbe4e21b4ac98f894524230707`

function fetchData(place){
    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${place}`)
    .then((response)=> response.json()) //to convert the content of the promise response(raw text format) into result of ->object<- parsing the body text as JSON 
    .then((res)=> {
        // console.log(res);
        displayContainer(res);
    })
    .catch((err)=>alert(err))
}
fetchData(country)
function displayContainer(data){
    container.innerHTML = ``
    let {location,current} = data
    // console.log(data);
    let {temp_c,temp_f,is_day} = current
    let locationHTML = `
        <h2> ${location.name}</h2>
        <div class="reg"><p>Region : ${location.region}</p> <p>Country : ${location.country}</p></div>
        <p class="temp"><img src="/assets/temp.png" alt="temp" id="tpic">Temp (*C) : ${temp_c} C</p>
        <div class="bot"><img src="${current.condition.icon}"></img>
        <p>${current.condition.text}</p></div>
    `
    container.innerHTML += locationHTML
}


input.addEventListener('change',(e)=>{
    // if(e.key === 'Enter'){ when we use keypress event!
        let place = e.target.value
        if(!place){alert("Data not sufficient");return;}
        fetchData(place)
    // }
});

