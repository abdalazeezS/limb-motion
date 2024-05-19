import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import PatientCard from '../components/PatientCard'
import { Button, Dialog, FAB, Portal, TextInput } from 'react-native-paper'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase'

const Home = ({ navigation }: any) => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [patients, setPatients] = useState<any[]>([]);
  
  const hideDialog = () => setVisible(false);
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'demographics-information'));
      const result: any[] = []
      querySnapshot.forEach(doc => {
        result.push({ id: doc.id, ...doc.data() })
      })
      setPatients(result)
    }
    fetchData()
  }, []);
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
            <Button onPress={() => { setName(''); setVisible(false) }}>Cancel</Button>
            <Button onPress={() => {
              patients.push({ id: 0, disabilityPercent: 0, name })
              setVisible(false)
            }}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <FAB
        icon='plus'
        style={styles.fab}
        onPress={() => setVisible(true)}
      />
      {patients.map(patient => {
        return <PatientCard
          key={patient.name}
          patient={patient}
          navigation={navigation} />
      })}
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