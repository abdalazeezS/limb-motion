import { DocumentReference } from "firebase/firestore";

interface MedicalHistoryModel {
  age: number;
  bmi: number;
  gender: string;
  height: number;
  marital_status: string;
  medical_history: DocumentReference;
  name: string;
  occupation: string;
  post_dash: DocumentReference;
  pre_dash: DocumentReference;
  weight: number
}

class MedicalHistory {
  stroke_date: string;
  previous_injuries: string;
  affected_side: string;
  rehabilitation_treatments: string;
  assistive_devices: string;
  medications: string;
  smoker: string;
  chronic_diseases: string;
  previous_surgeries: string;
  constructor() {
    this.stroke_date = '';
    this.previous_injuries = '';
    this.affected_side = '';
    this.rehabilitation_treatments = '';
    this.assistive_devices = '';
    this.medications = '';
    this.smoker = '';
    this.chronic_diseases = '';
    this.previous_surgeries = '';
  }
}

export { MedicalHistory, MedicalHistoryModel }