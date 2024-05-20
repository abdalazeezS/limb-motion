type MedicalHistoryField = {
  label: string;
  name: string;
}

export const MEDICAL_HISTORY_FIELDS: MedicalHistoryField[] = [
  { name: 'stroke_date', label: 'Stroke Date' },
  { name: 'previous_injuries', label: 'Previous Injuries' },
  { name: 'affected_side', label: 'Affected Side' },
  { name: 'rehabilitation_treatments', label: 'Rehabilitation Treatments' },
  { name: 'assistive_devices', label: 'Assistive Devices' },
  { name: 'medications', label: 'Medications' },
  { name: 'smoker', label: 'Smoker' },
  { name: 'chronic_diseases', label: 'Chronic Diseases' },
  { name: 'previous_surgeries', label: 'Previous Surgeries' }
]