import axios from "axios";
import type { Session, HotelList, Hotel} from "$lib/types/hotel-types";

export const hotelListService = {
  baseUrl: "http://localhost:3000", // Live Render URL: "http://hotels-copy.onrender.com" localhost UIRL: "http://localhost:3000"
  
  async getHotelLists(session: Session): Promise<HotelList[]> {
    console.log("getHotelLists started");
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/hotellists");
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async getHotelList(session: Session, id: string): Promise<HotelList> {
    console.log("getHotelList started");
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/hotellists/" + id);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getHotelListHotels(session: Session, id: string): Promise<Hotel[]> {
    console.log("getHotelList started");
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/hotellists/" + id + "/hotels");
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
}