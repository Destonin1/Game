import ukraineMap from './map'

let weatherData = [];
let isCreated = false;
let date = new Date();
const month = date.toLocaleString('en', { month: 'long' });
var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
const day = date.getDay();

export default function init(backBlock){
    const container = document.createElement('div');
    container.classList.add('container');
    const content = document.createElement('div');
    content.classList.add('content');
    content.insertAdjacentHTML('beforeend',`
        <div class="content-title">Weather in Ukraine</div>
        <div class="content-info"><span class="bold-text">Click</span> on the region to see information about weather</div>
    `)
    const map = ukraineMap();
    container.appendChild(backBlock);
    container.appendChild(content);
    container.appendChild(map);
    root.appendChild(container);
    const cities = document.getElementsByClassName('city');
    for(let i = 0; i < cities.length; i++) {
        cities[i].addEventListener('click', (e) => {
            if(!isCreated){
                getWetherInfo(cities[i].dataset.cityid, cities[i].dataset.posx, cities[i].dataset.posy, cities[i].dataset.cityname);
            }
            else {
                destroyWeatherBlock()
                getWetherInfo(cities[i].dataset.cityid, cities[i].dataset.posx, cities[i].dataset.posy, cities[i].dataset.cityname);
            }
            
        });
    }
}


function getWetherInfo(cityid, x, y,cityName){
    if(weatherData[cityid] === undefined && cityid !== undefined){
        fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=5afb9f9d8ccd8dc8ba85590210708a82`, {mode:"cors"})
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            weatherData[cityid] = data;
            console.log(data);
            createWeatherBlock(weatherData[cityid], x, y, cityName);
        })
        .catch(error => {
            alert("No response from server. " + error);
        })
    } else {
        createWeatherBlock(weatherData[cityid], x, y, cityName);
    }
}

function createWeatherBlock(data, x, y, cityName) {
    const nextDate = findNextData(data.list);
    const cityWrap = document.createElement('div');
    cityWrap.classList.add('city-wrap');
    cityWrap.style.left = x + "px";
    cityWrap.style.top = y + "px";
    cityWrap.insertAdjacentHTML('beforeend',`
    <div class="city-block">
            <div class="city-block-close">&times;</div>
            <div class="city-block-name">${cityName}</div>
            <div class="city-block-info">
                <div class="city-block-info-left">
                    <div class="city-block-info-date">
                        <div class="city-block-info-date-day"><span class="common-text">Today is:</span><br>${days[day]}</div>
                        <div class="city-block-info-date-full">${date.getDate()} ${month}</div>
                    </div>
                    <div class="city-block-tabs-title">
                        <div class="side-title">Temperature <span class="sml-text">C&deg;</span> :</div>
                        <div class="side-title">Feels like <span class="sml-text">C&deg;</span> :</div>
                        <div class="side-title">Humidity <span class="sml-text">%</span> :</div>
                        <div class="side-title">Wind speed <span class="sml-text">km/h</span> :</div>
                    </div>
                </div>
                <div class="city-block-tabs">
                    <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked>
                    <label class="city-block-tabs-item" for="tab-btn-1">${replaceArr(data.list[0].dt_txt)}</label>
                    <input type="radio" name="tab-btn" id="tab-btn-2" value="">
                    <label class="city-block-tabs-item" for="tab-btn-2">${replaceArr(data.list[nextDate].dt_txt)}</label>
                    <input type="radio" name="tab-btn" id="tab-btn-3" value="">
                    <label class="city-block-tabs-item" for="tab-btn-3">${replaceArr(data.list[nextDate+8].dt_txt)}</label>
                    <input type="radio" name="tab-btn" id="tab-btn-4" value="">
                    <label class="city-block-tabs-item" for="tab-btn-4">${replaceArr(data.list[nextDate+16].dt_txt)}</label>
                    <input type="radio" name="tab-btn" id="tab-btn-5" value="">
                    <label class="city-block-tabs-item" for="tab-btn-5">${replaceArr(data.list[nextDate+24].dt_txt)}</label>
                    <table id="city-block-table1" class="city-block-table">
                        ${firstTable(0, nextDate +1, data)}
                    </table>
                    <table id="city-block-table2" class="city-block-table">
                        ${firstTable(nextDate+1, nextDate+9, data)}
                    </table>
                    <table id="city-block-table3" class="city-block-table">
                        ${firstTable(nextDate+9, nextDate+17, data)}
                    </table>
                    <table id="city-block-table4" class="city-block-table">
                        ${firstTable(nextDate+17, nextDate+25, data)}
                    </table>
                    <table id="city-block-table5" class="city-block-table">
                        ${firstTable(nextDate+25, nextDate+33, data)}
                    </table>
                </div>
            </div>
        </div>`);
    root.appendChild(cityWrap);
    document.getElementsByClassName('city-block-close')[0].onclick = destroyWeatherBlock;
    isCreated = true;
}

function destroyWeatherBlock(){
    const city = document.getElementsByClassName(`city-wrap`);
    city[0].parentNode.removeChild(city[0]);
    isCreated = false;
}

function replaceArr(arr) {
    let newArr = arr.substring(8,10) + "." + arr.substring(5,7) + "." + arr.substring(0,4);
    return newArr
}

function findNextData(arrData) {
    for(let i=0;i < arrData.length -1; i++){
        if(arrData[i].dt_txt.substring(0,10) !== arrData[i+1].dt_txt.substring(0,10)){
            return i+1
        }
    }
}

function firstTable(y, j, data){
    const tableElem = document.createElement('div');
    const stringTableTime = document.createElement('tr');
    for(let i = y; i<j; i++){
        stringTableTime.insertAdjacentHTML('beforeend',`<th>${data.list[i].dt_txt.substring(11,16)}</th>`)
    }
    const stringTableImg = document.createElement('tr');
    for(let i = y; i<j; i++){
        stringTableImg.insertAdjacentHTML('beforeend',`<td><img class="weather-icon" src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" alt="weather-icon"></td>`)
    }
    const stringTableTemp = document.createElement('tr');
    stringTableTemp.classList.add("grey-bg");
    stringTableTemp.classList.add("temp-row");
    for(let i = y; i<j; i++){
        stringTableTemp.insertAdjacentHTML('beforeend',`<td>${Math.round(data.list[i].main.temp -273)}&deg;</td>`)
    }
    const stringTableFeels = document.createElement('tr');
    for(let i = y; i<j; i++){
        stringTableFeels.insertAdjacentHTML('beforeend',`<td>${Math.round(data.list[i].main.feels_like -273)}&deg;</td>`)
    }
    const stringTableHumi = document.createElement('tr');
    stringTableHumi.classList.add("grey-bg");
    for(let i = y; i<j; i++){
        stringTableHumi.insertAdjacentHTML('beforeend',`<td>${data.list[i].main.humidity}</td>`)
    }
    const stringTableWind = document.createElement('tr');
    for(let i = y; i<j; i++){
        stringTableWind.insertAdjacentHTML('beforeend',`<td>${Math.round(data.list[i].wind.speed)}</td>`)
    }

    tableElem.appendChild(stringTableTime);
    tableElem.appendChild(stringTableImg);
    tableElem.appendChild(stringTableTemp);
    tableElem.appendChild(stringTableFeels);
    tableElem.appendChild(stringTableHumi);
    tableElem.appendChild(stringTableWind);

    return tableElem.innerHTML
}