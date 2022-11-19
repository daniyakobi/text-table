import { Company, Employee } from "../../store/types";

export interface TableInterface {
  headers: string[],
  data: any,
  affiliation: 1 | 2
}

export interface TableCompanyInterface {
  item: Company
}

export interface TableEmployeeInterface {
  item: Employee
}