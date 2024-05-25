import { DocumentReference } from "firebase/firestore";

export interface SessionModel {
  patient_id: DocumentReference,
  environment_level: string;
  score: number;
  date: string;
  id: string;
}

export class Session {
  constructor(){}
}