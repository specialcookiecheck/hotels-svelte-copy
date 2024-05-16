import { userService } from "$lib/services/user-service";
import { hotelService } from "$lib/services/hotel-service";
import { hotelListService } from "$lib/services/hotelList-service";
import type { PageServerLoad } from "./$types";

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
