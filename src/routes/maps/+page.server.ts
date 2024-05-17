import type { PageServerLoad } from "./$types";
import type { Session } from "$lib/types/hotel-types";
import { hotelService } from "$lib/services/hotel-service";

export const load: PageServerLoad = async ({ parent }) => {
    const { session } = await parent();
    if (session) {
      console.log("session:", session);
    return {
        hotels: await hotelService.getHotels(session),
        session: session,
    };
  }
};