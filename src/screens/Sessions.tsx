import React, { useEffect, useState } from 'react'
import { Button, Dialog, FAB, Portal, TextInput } from 'react-native-paper'
import { globalStyles } from '../styles/globalStyles'
import { Controller, useForm } from 'react-hook-form';
import { addDoc, collection, doc, getDocs, query, where } from 'firebase/firestore';
import { FIREBASE_COLLECTIONS } from '../constants/firebase-collections';
import { db } from '../firebase/firebase';
import SessionCard from '../components/SessionCard';
import { SessionModel } from '../models/session.model';
import { Alert } from 'react-native';

const Sessions = ({ route }: any) => {
  const [sessions, setSessions] = useState<SessionModel[]>([]);
  const [visible, setVisible] = useState(false);
  const { control, handleSubmit, formState: { errors }, setValue } = useForm();

  const handleCloseDialog = () => {
    control._reset();
    setVisible(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      const patientRef = doc(db, `/demographics_information/${route.params.id}`);

      const q = query(collection(db, FIREBASE_COLLECTIONS.SESSIONS), where('patient_id', '==', patientRef));
      const querySnapshot = await getDocs(q);
      const result: SessionModel[] = []
      querySnapshot.forEach((doc) => {
        result.push(doc.data() as SessionModel)
      });
      setSessions(result)
    }
    fetchData();
  }, [visible]);

  const handleAddSession = async (data: any) => {
    console.log(data);
    const patientRef = doc(db, `/demographics_information/${route.params.id}`);

    const sessionObj = { ...data, score: +data.score, patient_id: patientRef }
    addDoc(collection(db, FIREBASE_COLLECTIONS.SESSIONS), { ...sessionObj })
      .then(() => {
        Alert.alert('Session added successfully');
        handleCloseDialog();
      });

  }
  return (
    <>
      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Content>
          <Controller
              key='id'
              name='id'
              control={control}
              render={({ field: { onChange, onBlur, value } }) => {
                return <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  mode='outlined'
                  label='ID'
                />
              }}
            />
            <Controller
              key='date'
              name='date'
              control={control}
              render={({ field: { onChange, onBlur, value } }) => {
                return <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  mode='outlined'
                  label='Date'
                />
              }}
            />
            <Controller
              key='environmentLevel'
              name='environmentLevel'
              control={control}
              render={({ field: { onChange, onBlur, value } }) => {
                return <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  mode='outlined'
                  label='Environment Level'
                />
              }}
            />
            <Controller
              key='score'
              name='score'
              control={control}
              render={({ field: { onChange, onBlur, value } }) => {
                return <TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  mode='outlined'
                  label='Score'
                />
              }}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleCloseDialog}>Cancel</Button>
            <Button onPress={handleSubmit(handleAddSession)}>Add</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <FAB
        icon='plus'
        style={globalStyles.fab}
        onPress={() => setVisible(true)}
      />
      {
        sessions.map(session => {
          return <SessionCard
            key={session.id}
            session={session}
          />
        })
      }
    </>
  )
}

export default Sessions