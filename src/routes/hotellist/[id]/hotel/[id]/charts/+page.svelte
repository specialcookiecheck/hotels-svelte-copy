<script lang="ts">
    import type { Hotel } from "$lib/types/hotel-types";
    import { onMount } from "svelte";
    import Chart from "svelte-frappe-charts";
    import HotelLeafletMap from "./HotelLeafletMap.svelte";
    import HotelChart from "./HotelChart.svelte";
    import { hotelService } from "$lib/services/hotel-service";
    import { currentSession, subTitle } from "$lib/stores";
    import { get } from "svelte/store";

    export let data: any;
    export let hotel = data.hotel;
    export let tempData = data.forecastChartData.tempData;
    export let windData = data.forecastChartData.windData;
    export let pressureData = data.forecastChartData.pressureData;
    
    
    subTitle.set("Hotel! " + data.hotel.name);

    /*
    export let chartData;

    let tempChart: HotelChart;
    let windChart: HotelChart;
    let pressureChart: HotelChart;
    
    let map1: HotelLeafletMap;
    let map2: HotelLeafletMap;
    let map3: HotelLeafletMap;
    let official5Ratings: Hotel[] = [];
    let official5RatingsLayerGroup = [];

    /*
    onMount(async () => {

        chartData = {
                labels: [
                    '19/5/2024',
                    '20/5/2024',
                    '21/5/2024',
                    '22/5/2024',
                    '23/5/2024',
                    '24/5/2024',
                    '25/5/2024',
                    '26/5/2024'
                    ],
                datasets: [{
                    name: "Temperature",
                    values: [
                    18.24, 15.99,
                    13.19, 14.23,
                    11.78, 13.54,
                    11.9, 14.51
                    ]
                }],
    }
});
*/
    
</script>

<Chart data={tempData} type="line" />

<Chart data={windData} type="bar" />

<Chart data={pressureData} type="axis-mixed" />

<!--
<HotelChart  bind:this={tempChart} id={"tempChart"} hotel={data.hotel} data={tempData}/>

<HotelChart  bind:this={windChart} id={"windChart"} hotel={data.hotel} data={windData}/>

<HotelChart  bind:this={pressureChart} id={"pressureChart"} hotel={data.hotel} data={pressureData}/>
-->


<!--
<HotelLeafletMap height={200} bind:this={map1} id={"map1"} hotel={data.hotel}/>

<HotelLeafletMap height={200} bind:this={map2} id={"map2"} hotel={data.hotel}/>

<HotelLeafletMap height={200} bind:this={map3} id={"map3"} hotel={data.hotel}/>
--->