import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { Alert, StyleSheet, Text, View } from 'react-native'
import { ActivityIndicator, Button, RadioButton, TextInput } from 'react-native-paper';
import { db } from '../firebase/firebase';
import { FIREBASE_COLLECTIONS } from '../constants/firebase-collections';

const Demographic = ({ route }: any) => {
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const { control, handleSubmit, formState: { errors }, setValue } = useForm();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    const updatedInfo: any = {};
    for (const [key, value] of Object.entries(data)) {
      //@ts-ignore
      if (!isNaN(value) && typeof value === 'string') {
        updatedInfo[key] = Number(value);
      } else {
        updatedInfo[key] = value;
      }
    }
    delete updatedInfo['pre_dash'];
    delete updatedInfo['post_dash'];
    await updateDoc(doc(db, FIREBASE_COLLECTIONS.DEMOGRAPHIC_INFO, route.params.id), { ...updatedInfo })
      .then(() => {
        setIsSubmitting(false);
        Alert.alert('Updated Successfully ✅');
      })
  }

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, FIREBASE_COLLECTIONS.DEMOGRAPHIC_INFO, route.params.id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setGender(docSnap.data().gender)
        setMaritalStatus(docSnap.data().marital_status)
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
    <>
      <View style={styles.pageWrapper}>
        <Text style={styles.title}>Demographic Information</Text>
        <View style={styles.demographic}>
          <Controller
            name='name'
            control={control}
            render={({ field: { onChange, onBlur, value } }) => {
              return <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                mode='outlined'
                label='Name'
                placeholder='Enter name'
              />
            }}
          />
          <Controller
            name='age'
            control={control}
            render={({ field: { onChange, onBlur, value } }) => {
              return <TextInput
                mode='outlined'
                label='Age'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                keyboardType='number-pad'
                placeholder='Enter age'
              />
            }}
          />
          <RadioButton.Group value={gender} onValueChange={(val) => setGender(val)}>
            <View style={styles.optionsContainer}>
              <View style={styles.genderOption}>
                <Text>Male</Text>
                <RadioButton value='male' />
              </View>
              <View style={styles.genderOption}>
                <Text>Female</Text>
                <RadioButton value='female' />
              </View>
            </View>
          </RadioButton.Group>
          <Controller
            name='height'
            control={control}
            render={({ field: { onChange, onBlur, value } }) => {
              return <TextInput
                mode='outlined'
                label='Height'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                keyboardType='number-pad'
                placeholder='Enter height'
              />
            }}
          />
          <Controller
            name='weight'
            control={control}
            render={({ field: { onChange, onBlur, value } }) => {
              return <TextInput
                mode='outlined'
                label='Weight'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                keyboardType='number-pad'
                placeholder='Enter weight'
              />
            }}
          />
          <Controller
            name='bmi'
            control={control}
            render={({ field: { onChange, onBlur, value } }) => {
              return <TextInput
                mode='outlined'
                label='BMI'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                keyboardType='number-pad'
                placeholder='Enter BMI'
              />
            }}
          />
          <Controller
            name='occupation'
            control={control}
            render={({ field: { onChange, onBlur, value } }) => {
              return <TextInput
                mode='outlined'
                label='Occupation'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                keyboardType='number-pad'
                placeholder='Enter occupation'
              />
            }}
          />
          <RadioButton.Group value={maritalStatus} onValueChange={(val) => setMaritalStatus(val)}>
            <View style={styles.optionsContainer}>
              <View style={styles.genderOption}>
                <Text>Single</Text>
                <RadioButton value='single' />
              </View>
              <View style={styles.genderOption}>
                <Text>Married</Text>
                <RadioButton value='married' />
              </View>
            </View>
          </RadioButton.Group>
          <Button mode='contained' onPress={handleSubmit(onSubmit)}>{isSubmitting ? 'Submitting ...' : 'Submit'}</Button>
        </View>
      </View>
    </>
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
export default Demographic