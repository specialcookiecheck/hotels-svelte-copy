import { hotelService } from "$lib/services/hotel-service";
import { hotelListService } from "$lib/services/hotelList-service";
import type { Session } from "$lib/types/hotel-types";
import type { PageServerLoad } from "./$types";
//import { latestHotel } from "$lib/stores";

export const load: PageServerLoad = async ({ params, parent }) => {
  const { session } = await parent();
  if (session) {
    console.log("session:", session);
    console.log("returning hotelList");
    return {
        hotelList: await hotelListService.getHotelList(session, params.id),
        hotels: await hotelListService.getHotelListHotels(session, params.id),
    };
  }
}

export const actions = {
  addHotel: async ({ request, cookies }) => {
    console.log("addHotel action started");
    const cookieStr = cookies.get("hotel-user") as string;
    if (cookieStr) {
      const session = JSON.parse(cookieStr) as Session;
      if (session) {
        const form = await request.formData();
        const hotelListId = form.get("hotelListId") as string;
        const hotel = {
          name: form.get("name") as string,
          city: form.get("city") as string,
          country: form.get("country") as string,
          latitude: form.get("latitude") as string,
          longitude: form.get("longitude") as string,
          starRating: form.get("starRating") as string,
          reviewRating: form.get("reviewRating") as string,
        }
        hotelService.addHotel(session, hotelListId, hotel);
        //latestHotel.set(hotel);
        //console.log("latestHotel", latestHotel);
      }
    } else {
      console.log("no session cookie");
    }
  },

  deleteHotel: async ({ request, cookies }) => {
    console.log("deleteHotel action started");
    const cookieStr = cookies.get("hotel-user") as string;
    if (cookieStr) {
      const session = JSON.parse(cookieStr) as Session;
      if (session) {
        const form = await request.formData();
        const hotelId = form.get("hotelId") as string;
        hotelService.deleteHotel(session, hotelId);
      }
    } else {
      console.log("no session cookie");
    }
  },
}