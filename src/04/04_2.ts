import { CityType, GovernmentBuildingsType } from "../02/02_02";

export function domolisHousesOnTheStreet(city: CityType, street: string) {
  city.houses = city.houses.filter((h) => h.address.street.title !== street);
}

export const getBuildingsWithStaffCountGreaterThen = (
  bulding: Array<GovernmentBuildingsType>,
  number: number
) => {
  return (bulding = bulding.filter((b) => b.staffCount > number));
};
