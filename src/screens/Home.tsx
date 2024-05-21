import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet } from 'react-native'
import { Button, Dialog, FAB, Portal, TextInput } from 'react-native-paper'
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase'
import { FIREBASE_COLLECTIONS } from '../constants/firebase-collections';
import { Dash } from '../models/dash';
import { MedicalHistory } from '../models/medical-history.model';
import { DemographicInformation } from '../models/demographic-information.model';
import { PatientCard, Spinner } from '../components';

const Home = ({ navigation }: any) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [patients, setPatients] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const hideDialog = () => setVisible(false);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'demographics-information'));
      const result: any[] = []
      querySnapshot.forEach(doc => {
        result.push({ id: doc.id, ...doc.data() })
      })
      setPatients(result);
      setIsLoading(false);
    }
    fetchData()
  }, [visible]);

  const handleCloseDialog = () => {
    setName('');
    setVisible(false)
  }

  const handleAddPatient = async () => {
    const dashObj = new Dash();
    const medicalHistoryObj = new MedicalHistory();
    const demographicObj = new DemographicInformation();

    const preDashDocRef = await addDoc(collection(db, FIREBASE_COLLECTIONS.PRE_DASH), { ...dashObj });
    const postDashDocRef = await addDoc(collection(db, FIREBASE_COLLECTIONS.POST_DASH), { ...dashObj });
    const medicalHistoryDocRef = await addDoc(collection(db, FIREBASE_COLLECTIONS.MEDICAL_HISTORY), { ...medicalHistoryObj })
    await addDoc(collection(db, FIREBASE_COLLECTIONS.DEMOGRAPHIC_INFO),
      {
        ...demographicObj,
        name,
        pre_dash: preDashDocRef,
        post_dash: postDashDocRef,
        medical_history: medicalHistoryDocRef
      }).then(() => {
        handleCloseDialog();
        Alert.alert('Patient added successfully ✅');
      }).catch(() => {
        Alert.alert('Something went wrong')
      })
  }
  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <TextInput
              mode='outlined'
              label='Patient Name'
              onChangeText={setName}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleCloseDialog}>Cancel</Button>
            <Button onPress={handleAddPatient}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <FAB
        icon='plus'
        style={styles.fab}
        onPress={() => setVisible(true)}
      />
      {
        patients.map(patient => {
          return <PatientCard
            key={patient.name}
            patient={patient}
            navigation={navigation} />
        })
      }
    </>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0
  }
})

export default Home