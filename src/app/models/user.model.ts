export interface User {
  id: 1,
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}


export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoData;
}

/**
 * @lat type NUMBER usually with float dot
 * @lng type NUMBER usually with float dot
 */
export interface GeoData {
  lat: number;
  lng: number;
}
