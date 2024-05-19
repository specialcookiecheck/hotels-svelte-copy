import axios from "axios";
import type { Session, User } from "$lib/types/hotel-types";

export const userService = {
  baseUrl: "http://hotels-copy.onrender.com", // Live Render URL: "http://hotels-copy.onrender.com" localhost UIRL: "http://localhost:3000"

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
    console.log("login started");
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
      console.log(response.data);
      if (response.data.success) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
        const session: Session = {
          name: response.data.name,
          token: response.data.token,
          _id: response.data.id
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

  
  async getUser(session: Session, userId: string) {
    console.log("getUser started");
    console.log("session._id", session._id);
      try {
        axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
        const response = await axios.get(this.baseUrl + "/api/users/" + userId);
        return response.data;
      } catch (error) {
        return null;
      }
    },
  
  

  async getUsers(session: Session): Promise<User[]> {
  console.log("getUsers started");
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/users");
      return response.data;
    } catch (error) {
      return [];
    }
  },
};