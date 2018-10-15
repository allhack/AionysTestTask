import { Address } from "./address";

export class User {
  constructor(
    public id?: number,
    public firstName?: string,
    public lastName?: string,
    public address?: Address,
    public phoneNumbers?: string[]){ }
}
