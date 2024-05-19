import { hotelService } from "$lib/services/hotel-service";
import { forecasts } from "$lib/services/hotel-utils";
import type { Session } from "$lib/types/hotel-types";
import type { PageServerLoad } from "./$types";
//import { latestHotel } from "$lib/stores";
import axios from "axios";
import { WEATHER_API_KEY } from "$env/static/private";

export const load: PageServerLoad = async ({ params, cookies }) => {
  const cookieStr = cookies.get("hotel-user") as string;
  if (cookieStr) {
    const session = JSON.parse(cookieStr) as Session;
    if (session) {
      console.log("session:", session);
      console.log("returning hotelList");
      const hotel = await hotelService.getHotel(session, params.id);
      const weatherReturn = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${hotel.latitude}&lon=${hotel.longitude}&APPID=${WEATHER_API_KEY}`);
      hotel.weatherDescription = weatherReturn.data.weather[0].description;
      hotel.weatherIconUrl = `<img src="https://openweathermap.org/img/wn/${weatherReturn.data.weather[0].icon}.png">`;
      console.log(hotel);

      const forecastChartData = await forecasts(hotel);
      console.log("forecastChartData", forecastChartData);

      
      /*
      const hotelImages = []
      hotel.imageUrlArray.forEach(object => {
        console.log("object:", object)
        console.log("Object.values:", Object.keys(object))
        hotelImages.push(Object.keys(object))
      });
      */
      /*
      Object.keys(hotel.imageUrlArray).forEach(([index, imageUrl]) =>
        hotelImages.push(imageUrl);
      )
      */
      //console.log("hotelImages", hotelImages);
      return {
          //hotelList: await hotelListService.getHotelList(session, params.id),
          hotel: hotel,
          forecastChartData: forecastChartData,
          //hotelImages: hotelImages,
      };
    }
  }
}