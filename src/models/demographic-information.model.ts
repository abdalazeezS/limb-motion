import { DocumentReference } from "firebase/firestore";

class DemographicInformation {
  age: number;
  bmi: number;
  gender: string;
  height: number;
  marital_status: string;
  medical_history?: DocumentReference;
  name: string;
  occupation: string;
  post_dash?: DocumentReference;
  pre_dash?: DocumentReference;
  weight: number;

  constructor() {
    this.age = -1;
    this.bmi = -1;
    this.gender = '';
    this.height = -1;
    this.marital_status = '';
    this.medical_history = undefined;
    this.name = '';
    this.occupation = '';
    this.post_dash = undefined;
    this.pre_dash = undefined;
    this.weight = -1;
  }
}

export { DemographicInformation }