import axios from "axios";
import type { Session, HotelList, Hotel, AddedHotelList} from "$lib/types/hotel-types";

export const hotelListService = {
  baseUrl: "http://hotels-copy.onrender.com", // Live Render URL: "http://hotels-copy.onrender.com" localhost UIRL: "http://localhost:3000"
  
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

  async addHotelList(session: Session, hotelList: AddedHotelList) {
    try {
      console.log("addHotelList started");
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.post(this.baseUrl + "/api/hotellists", hotelList);
      console.log("hotelList added:", response.data)
      return response.status == 200;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  },

  async deleteHotelList(session: Session, hotelListId: string) {
    try {
      console.log("hotelListService deleteHotelList started");
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const deletedUrl = `/api/hotellists/${hotelListId}`;
      console.log("deletedUrl:", deletedUrl);
      const response = await axios.delete(this.baseUrl + deletedUrl);
      console.log(`hotelList ${hotelListId} deleted`);
      return response.status == 200;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  },
}