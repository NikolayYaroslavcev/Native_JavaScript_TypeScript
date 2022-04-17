import { GovernmentBuildingsType } from "./../02/02_02";
import { HouseType } from "../02/02_02";

export const addMoneyToBudget = (
  bulding: GovernmentBuildingsType,
  budget: number
) => {
  bulding.budget += budget;
};

export const repairHouse = (houseType: HouseType) => {
  houseType.repaired = true;
};

export function toFireStaff(
  bulding: GovernmentBuildingsType,
  staffToFire: number
) {
  bulding.staffCount -= staffToFire;
}

export function toHireStaff(
  bulding: GovernmentBuildingsType,
  staffToHire: number
) {
  bulding.staffCount += staffToHire;
}
