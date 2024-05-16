import { userService } from "$lib/services/user-service";
import { hotelService } from "$lib/services/hotel-service";
import { hotelListService } from "$lib/services/hotelList-service";
import type { PageServerLoad } from "./$types";
import type { Session } from "$lib/types/hotel-types";

export const load: PageServerLoad = async ({ parent }) => {
    const { session } = await parent();
    if (session) {
      console.log("session:", session);
    return {
        users: await userService.getUsers(session),
        hotelLists: await hotelListService.getHotelLists(session),
        hotels: await hotelService.getHotels(session),
        user: await userService.getUser(session, session._id)
    };
  }
};

export const actions = {
  addHotelList: async ({ request, cookies }) => {
    console.log("addHotelList action started");
    const cookieStr = cookies.get("hotel-user") as string;
    if (cookieStr) {
      const session = JSON.parse(cookieStr) as Session;
      if (session) {
        const form = await request.formData();
        const hotelList = {
          title: form.get("title") as string,
          email: form.get("email") as string,
        }
        hotelListService.addHotelList(session, hotelList);
      }
    } else {
      console.log("no session cookie");
    }
  },
};
