import { hotelService } from "$lib/services/hotel-service";
import { hotelListService } from "$lib/services/hotelList-service";
import type { Session } from "$lib/types/hotel-types";
import type { PageServerLoad } from "./$types";
//import { latestHotel } from "$lib/stores";
import axios from "axios";
import { WEATHER_API_KEY } from "$env/static/private";

export const load: PageServerLoad = async ({ params, parent }) => {
  const { session } = await parent();
  if (session) {
    console.log("session:", session);
    console.log("returning hotelList");
    const hotel = await hotelService.getHotel(session, "cb1a9040-7eca-4a77-ba2b-c7502194dc52") //params.id),
    const weatherReturn = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${hotel.latitude}&lon=${hotel.longitude}&APPID=${WEATHER_API_KEY}`);
        //https://api.openweathermap.org/data/2.5/onecall?lat=${station.latitude}&lon=${station.longitude}&appid=${openWeatherApiKey}&units=metric`
        //console.log("weather", weatherReturn.data);
    hotel.weatherDescription = weatherReturn.data.weather[0].description;
    hotel.weatherIconUrl = `<img src="https://openweathermap.org/img/wn/${weatherReturn.data.weather[0].icon}.png">`;
    console.log(hotel);
    return {
        //hotelList: await hotelListService.getHotelList(session, params.id),
        hotel: hotel,
    };
  }
}

export const actions = {
  addHotelImage: async ({ request, cookies }) => {
    console.log("addHotelImage action started");
    const cookieStr = cookies.get("hotel-user") as string;
    if (cookieStr) {
      const session = JSON.parse(cookieStr) as Session;
      if (session) {
        const form = await request.formData();
        const hotelImage = {
          imageUrl: form.get("imageUrl") as string,
          hotelId: form.get("hotelId") as string,
        }
        hotelService.addHotelImage(session, hotelImage.imageUrl, hotelImage.hotelId);
      }
    } else {
      console.log("no session cookie");
    }
  },
}