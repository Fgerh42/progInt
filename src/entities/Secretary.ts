export class Secretary {
  public id: number;
  public name: string;
  public abbreviation: string;
  public phone: string;
  public address: {
    street: string;
    neighborhood: string;
    city_id: string;
    zip_code: string;
  };
  public is_active: boolean;

  constructor(
    id: number,
    name: string,
    abbreviation: string,
    phone: string,
    address: {
      street: string;
      neighborhood: string;
      city_id: string;
      zip_code: string;
    },
    is_active: boolean
  ) {
    this.id = id;
    this.name = name;
    this.abbreviation = abbreviation;
    this.phone = phone;
    this.address = address;
    this.is_active = is_active;
  }
}
