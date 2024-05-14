import axios from "axios";
import type { Session, User, HotelList, Hotel } from "$lib/types/hotel-types";

export const hotelService = {
  baseUrl: "http://localhost:3000", // Live Render URL: "http://hotels-copy.onrender.com" localhost UIRL: "http://localhost:3000"

  async signup(user: User): Promise<boolean> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users`, user);
      return response.data.success === true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async login(email: string, password: string): Promise<Session | null> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
      console.log(response.data);
      if (response.data.success) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
        const session: Session = {
          name: response.data.name,
          token: response.data.token,
          _id: response.data._id
        };
        console.log(session);
        return session;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async getUsers(session: Session): Promise<User[]> {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/users");
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async getUser(session: Session): Promise<User[]> {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + `/api/users/${session._id}`);
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async getHotelLists(session: Session): Promise<HotelList[]> {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/hotellists");
      return response.data;
    } catch (error) {
      return [];
    }
  },

  async getHotels(session: Session): Promise<Hotel[]> {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/hotels");
      return response.data;
    } catch (error) {
      return [];
    }
  }  
};