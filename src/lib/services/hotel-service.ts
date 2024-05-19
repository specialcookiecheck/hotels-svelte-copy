import axios from "axios";
import type { Session, Hotel, AddedHotel } from "$lib/types/hotel-types";


export const hotelService = {
  baseUrl: "http://localhost:3000", // Live Render URL: "http://hotels-copy.onrender.com" localhost UIRL: "http://localhost:3000"

  async getHotels(session: Session): Promise<Hotel[]> {
    console.log("hotelService getHotels started");
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/hotels");
      console.log("hotelService getHotels finished, returning data");
      //console.log(response.data);
      const hotels = response.data
      
      return hotels;
    } catch (error) {
      return [];
    }
  },

  async getHotel(session: Session, id: string): Promise<Hotel> {
    console.log("hotelService getHotel started");
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const response = await axios.get(this.baseUrl + "/api/hotels/" + id);
      console.log(response.data);
      console.log("hotelService getHotel completed, returning response data");
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

  async updateHotel(session: Session, hotelId: string, hotel: AddedHotel) {
    try {
      console.log("hotelService updateHotel started");
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const toBeAddedUrl = `/api/hotels/${hotelId}`;
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

  async addHotelImage(session: Session, hotelImage: string, hotelId: string) {
    try {
      console.log("hotelService addHotelImage started");
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const toBeAddedUrl = `/api/hotels/${hotelId}/addImage`;
      console.log("toBeAddedUrl:", toBeAddedUrl);
      console.log("hotelId", hotelId);
      const response = await axios.post(this.baseUrl + toBeAddedUrl, { hotelImage: hotelImage });
      console.log("hotelImage added:", response.data)
      return response.status == 200;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  },

  async deleteHotel(session: Session, hotelId: string) {
    try {
      console.log("hotelService deleteHotel started");
      axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
      const deletedUrl = `/api/hotels/${hotelId}`;
      console.log("deletedUrl:", deletedUrl);
      const response = await axios.delete(this.baseUrl + deletedUrl);
      console.log(`hotel ${hotelId} deleted`);
      return response.status == 200;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  },

  async deleteImage(session: Session, hotelId: string, imageUrl: string) {
    try {
      console.log("hotelService deleteImage started");
      const hotel = await hotelService.getHotel(session, hotelId);
      const deleteImageIndex = hotel.imageUrlArray.indexOf(imageUrl);
      hotel.imageUrlArray.splice(deleteImageIndex, 1);
      await hotelService.updateHotel(session, hotelId, hotel)
      return "image deleted";
      //return status == 200;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  },
};