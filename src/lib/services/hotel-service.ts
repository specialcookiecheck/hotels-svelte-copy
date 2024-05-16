import axios from "axios";
import type { Session, Hotel } from "$lib/types/hotel-types";

export const hotelService = {
  baseUrl: "http://localhost:3000", // Live Render URL: "http://hotels-copy.onrender.com" localhost UIRL: "http://localhost:3000"

  async getHotels(session: Session): Promise<Hotel[]> {
    console.log("getHotels started");
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/hotels");
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async getHotel(session: Session, id: string): Promise<Hotel> {
    console.log("getHotels started");
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/hotels" + id);
      return response.data;
    } catch (error) {
      return null;
    }
  }
};