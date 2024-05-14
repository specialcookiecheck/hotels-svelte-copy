import axios from "axios";
export const hotelService = {
    baseUrl: "http://localhost:3000", // Live Render URL: "http://hotels-copy.onrender.com" localhost UIRL: "http://localhost:3000"
    async signup(user) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users`, user);
            return response.data.success === true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    },
    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            console.log(response.data);
            if (response.data.success) {
                axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
                const session = {
                    name: response.data.name,
                    token: response.data.token,
                    _id: response.data.id
                };
                console.log(session);
                return session;
            }
            return null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    },
    async getUsers(session) {
        try {
            axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
            const response = await axios.get(this.baseUrl + "/api/users");
            return response.data;
        }
        catch (error) {
            return [];
        }
    },
    async getHotelLists(session) {
        try {
            axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
            const response = await axios.get(this.baseUrl + "/api/hotellists");
            return response.data;
        }
        catch (error) {
            return [];
        }
    },
    async getHotels(session) {
        try {
            axios.defaults.headers.common["Authorization"] = "Bearer " + session.token;
            const response = await axios.get(this.baseUrl + "/api/hotels");
            return response.data;
        }
        catch (error) {
            return [];
        }
    }
};
