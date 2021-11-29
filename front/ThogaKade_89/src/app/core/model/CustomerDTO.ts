export default class CustomerDTO{
  private _id:string;
  private _name: string;
  private _salary:number;
  private _address: string;


  constructor(id: string, name: string, salary: number, address: string) {
    this._id = id;
    this._name = name;
    this._salary = salary;
    this._address = address;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }
}
