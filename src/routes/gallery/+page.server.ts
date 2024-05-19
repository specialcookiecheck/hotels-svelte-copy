import type { PageServerLoad } from "./$types";
import type { Session } from "$lib/types/hotel-types";
import { hotelService } from "$lib/services/hotel-service";
import { subTitle } from "$lib/stores";
    
subTitle.set("Gallery");

export const load: PageServerLoad = async ({ parent }) => {
    const { session } = await parent();
    if (session) {
      console.log("session:", session);
      const hotels = await hotelService.getHotels(session);
      for (let i = 0; i < hotels.length; i++) {
        const hotel = hotels[i];
        //const weatherReturn = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${hotel.latitude}&lon=${hotel.longitude}&APPID=${WEATHER_API_KEY}`);
        //https://api.openweathermap.org/data/2.5/onecall?lat=${station.latitude}&lon=${station.longitude}&appid=${openWeatherApiKey}&units=metric`
        //console.log("weather", weatherReturn.data);
        //hotel.weatherDescription = weatherReturn.data.weather[0].description;
        //hotel.weatherIconUrl = `https://openweathermap.org/img/wn/${weatherReturn.data.weather[0].icon}.png`;
        hotels[i] = hotel;
        //console.log(hotel);
      };
      console.log(hotels);
    return {
        hotels: hotels,
        session: session,
    };
  }
};

export const actions = {
  deleteImage: async ({ request, cookies }) => {
    console.log("deleteImage action started");
    const cookieStr = cookies.get("hotel-user") as string;
    if (cookieStr) {
      const session = JSON.parse(cookieStr) as Session;
      if (session) {
        const form = await request.formData();
        const hotelId = form.get("hotelId") as string;
        const imageUrl = form.get("imageUrl") as string
        await hotelService.deleteImage(session, hotelId, imageUrl);
      }
    } else {
      console.log("no session cookie");
    }
  },
}