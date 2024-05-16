export interface Session {
    name: string;
    _id: string;
    token: string;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  _id?: string;
}

export interface HotelList {
  _id: string;
  title: string;
}

export interface AddedHotelList {
  email: string;
  title: string;
}
  
export interface Hotel {
_id: string;
hotelListid: string;
city: string;
country: string;
houseNumber: string;
imageURL: string;
latitude: number;
longitude: number;
name: string;
postcode: string;
state: string;
street: string;
lat: number;
lng: number;
//candidate: Candidate | string;
//donor: User | string;
}

export interface AddedHotel {
  name: string;
  city: string;
  country: string;
  latitude: string;
  longitude: string;
  }