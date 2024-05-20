import React, { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'
import { useForm } from 'react-hook-form'
import { ActivityIndicator, Button, TextInput } from 'react-native-paper'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { FIREBASE_COLLECTIONS } from '../constants/firebase-collections'

const MedicalHistory = ({ route }: any) => {
  const { control, handleSubmit, formState: { errors }, setValue } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    const updateInfo: any = {};

    await updateDoc(doc(db, FIREBASE_COLLECTIONS.MEDICAL_HISTORY, route.params.id), { ...updateInfo })
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
    return <View style={styles.loadingContainer}>
      <ActivityIndicator animating size='large' />
    </View>
  }
  return (
    <View style={styles.pageWrapper}>
      <View style={styles.demographic}>
        <Controller
          name='stroke_date'
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              mode='outlined'
              label='Stroke Date'
            />
          }}
        />
        <Controller
          name='previous_injuries'
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return <TextInput
              mode='outlined'
              label='Previous Injuries'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          }}
        />
        <Controller
          name='affected_side'
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return <TextInput
              mode='outlined'
              label='Affected Side'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          }}
        />
        <Controller
          name='rehabilitation_treatments'
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return <TextInput
              mode='outlined'
              label='Rehabilitation Treatments'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          }}
        />
        <Controller
          name='assistive_devices'
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return <TextInput
              mode='outlined'
              label='Assistive Devices'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          }}
        />
        <Controller
          name='medications'
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return <TextInput
              mode='outlined'
              label='Medications'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          }}
        />
        <Controller
          name='smoker'
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return <TextInput
              mode='outlined'
              label='Smoker'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          }}
        />
        <Controller
          name='chronic_diseases'
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return <TextInput
              mode='outlined'
              label='Chronic Diseases'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          }}
        />
        <Controller
          name='previous_surgeries'
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return <TextInput
              mode='outlined'
              label='Previous Surgeries'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          }}
        />

        <Button mode='contained' onPress={handleSubmit(onSubmit)}>{isSubmitting ? 'Submitting ...' : 'Submit'}</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  demographic: {
    display: 'flex',
    gap: 8
  },
  loadingContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center'
  },
  pageWrapper: {
    padding: 16
  },
  title: {
    fontSize: 16,
    marginBottom: 12
  },
  option: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 4,
    borderRadius: 999,
    width: 60,
    height: 60,
    padding: 10,
  },
  genderOption: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginBottom: 4,
    borderRadius: 999,
    width: 70,
    height: 70,
    padding: 10,
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  }
})

export default MedicalHistory