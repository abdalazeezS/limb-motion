import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { Alert, View } from 'react-native'
import { useForm } from 'react-hook-form'
import { Button, TextInput } from 'react-native-paper'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { FIREBASE_COLLECTIONS } from '../constants/firebase-collections'
import { MEDICAL_HISTORY_FIELDS } from '../constants/medical-history-fields'
import { globalStyles } from '../styles/globalStyles'
import { Spinner } from '../components'

const MedicalHistory = ({ route }: any) => {
  const { control, handleSubmit, formState: { errors }, setValue } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    const updateInfo: any = {};

    updateDoc(doc(db, FIREBASE_COLLECTIONS.MEDICAL_HISTORY, route.params.id), { ...updateInfo })
    .then(() => {
      setIsSubmitting(false)
      Alert.alert('Updated Successfully ✅')
    })
  }


  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, FIREBASE_COLLECTIONS.MEDICAL_HISTORY, route.params.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        Object.entries(docSnap.data()).forEach(entry => {
          setValue(entry[0], entry[1] + '');
        })
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Spinner />
  }
  return (
    <View style={globalStyles.pageWrapper}>
      <View style={globalStyles.pageContent}>
        {
          MEDICAL_HISTORY_FIELDS.map(field => {
            return <Controller
              key={field.name}
              name={field.name}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => {
                return <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  mode='outlined'
                  label={field.label}
                />
              }}
            />
          })
        }

        <Button mode='contained' onPress={handleSubmit(onSubmit)}>{isSubmitting ? 'Submitting ...' : 'Submit'}</Button>
      </View>
    </View>
  )
}

export default MedicalHistory