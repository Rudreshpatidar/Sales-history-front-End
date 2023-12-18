import { Roles } from "./roles";


export interface User {
    userId: number,
    userName: string,
    userPassword: string,
    allRolesPojo: Roles[]
}
