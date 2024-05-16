import axios from "axios";
import type { Session, Hotel, AddedHotel } from "$lib/types/hotel-types";

export const hotelService = {
  baseUrl: "http://localhost:3000", // Live Render URL: "http://hotels-copy.onrender.com" localhost UIRL: "http://localhost:3000"

  async getHotels(session: Session): Promise<Hotel[]> {
    console.log("hotelService getHotels started");
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/hotels");
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async getHotel(session: Session, id: string): Promise<Hotel> {
    console.log("hotelService getHotels started");
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/hotels" + id);
      return response.data;
    } catch (error) {
      return null;
    }
  },

  async addHotel(session: Session, hotelListId: string, hotel: AddedHotel) {
    try {
      console.log("hotelService addHotel started");
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const toBeAddedUrl = `/api/hotellists/${hotelListId}/hotel`;
      console.log("toBeAddedUrl:", toBeAddedUrl);
      console.log("hotel", hotel);
      const response = await axios.post(this.baseUrl + toBeAddedUrl, hotel);
      console.log("hotel added:", response.data)
      return response.status == 200;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  },

  async deleteHotel(session: Session, hotelId: string) {
    try {
      console.log("hotelService addHotel started");
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const deletedUrl = `/api/hotels/${hotelId}`;
      console.log("deletedUrl:", deletedUrl);
      const response = await axios.post(this.baseUrl + deletedUrl);
      console.log("hotel added:", response.data)
      return response.status == 200;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  },
};