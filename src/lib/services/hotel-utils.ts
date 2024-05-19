import axios from "axios";
import { WEATHER_API_KEY } from "$env/static/private";

export async function forecasts(hotel) {
    console.log("hotel-utils forecasts started")
    //console.log("hotel", hotel);
    const returnedForeCast = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${hotel.latitude}&lon=${hotel.longitude}&appid=${WEATHER_API_KEY}&units=metric`);
    //console.log(returnedForeCast.data.daily);
    const trends = returnedForeCast.data.daily;
    const foreCast = {
    trendLabels: [],
    tempTrend: [],
    windTrend: [],
    pressureTrend: [],
    };
    for (let i = 0; i < trends.length; i++) {
        foreCast.tempTrend.push(trends[i].temp.day);
        foreCast.windTrend.push(trends[i].wind_speed);
        foreCast.pressureTrend.push(trends[i].pressure);
        const date = new Date(trends[i].dt * 1000);
        foreCast.trendLabels.push(
            `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        );
    }
    const openWeatherLabelArray = foreCast.trendLabels;
    const openWeatherTempTrendArray = foreCast.tempTrend;
    const openWeatherWindTrendArray = foreCast.windTrend;
    const openWeatherPressureTrendArray = foreCast.pressureTrend;


    const tempData = {
    labels: openWeatherLabelArray,
    datasets: [
    {
        //chartType: 'bar',
        name: "Temperature",
        values: openWeatherTempTrendArray
    },
    ]
}


    const windData = {
        labels: openWeatherLabelArray,
        datasets: [
        {
            name: "Wind Speed",
            values: openWeatherWindTrendArray
        },
        ]
    }

    const pressureData = {
        labels: openWeatherLabelArray,
        datasets: [
        {
            name: "Pressure",
            values: openWeatherPressureTrendArray,
        },
        ],
        /*
        yMarkers: [ //this exists purely to center the graph line
            {
                label: '',
                value: 0,
                type: 'solid'
            }
        ],
        */
    }
    /*
    const tempChart = new frappe.Chart("#tempchart", {
    title: "Temperature forecast for hotel {hotel.location}",
    data: tempData,
    type: 'line',
    height: 500,
    })

    const windChart = new frappe.Chart("#windchart", {
    title: "Wind Speed forecast for hotel {hotel.location}",
    data: windData,
    type: 'line',
    height: 500,
    })

    const pressureChart = new frappe.Chart("#pressurechart", {
    title: "Pressure forecast for hotel {hotel.location}",
    data: pressureData,
    type: 'line',
    height: 500,

    })
    */
   const data = {
    tempData: tempData,
    windData: windData,
    pressureData: pressureData
   }
   console.log("data", data);
   console.log("tempData", tempData)
   console.log("tempData values", tempData.datasets[0].values)

   return data
};