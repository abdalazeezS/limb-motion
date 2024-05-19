import { DocumentReference } from 'firebase/firestore'
export interface Patient {
  id: number;
  name: string;
  disabilityPercent: number;
  pre_dash: DocumentReference;
  post_dash: DocumentReference;
}