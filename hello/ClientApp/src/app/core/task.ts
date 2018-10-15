export class Task {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public formattedStartTime?: string,
    public formattedEndTime?: string,
    public userId?: number
  ){ }
}
