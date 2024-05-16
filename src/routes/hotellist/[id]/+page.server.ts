//import { hotelService } from "$lib/services/hotel-service";
import { hotelListService } from "$lib/services/hotelList-service";
import type { PageServerLoad } from "./$types";

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
