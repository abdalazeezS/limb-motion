import React from 'react'
import { Pressable, StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import { Patient } from '../models/Patient'

const PatientCard = ({ patient, navigation }: { patient: Patient, navigation: any }) => {
  return (
    <View style={styles.cartContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.name}>{patient.name}</Text>
        <Text>Disability Percent: <Text style={styles.disabilityValue}>{patient.disabilityPercent}</Text>%</Text>
      </View>
      <View style={styles.bottomActionsContainer}>
        <Pressable style={styles.demographic} onPress={() => navigation.navigate('Demographic', { id: patient.id })}>
          <Text style={styles.actionText}>Demographic details</Text>
        </Pressable>
        <Pressable style={styles.preDash} onPress={() => navigation.navigate('PreDash', { id: patient.pre_dash.id })}>
          <Text style={styles.actionText}>Pre Dash</Text>
        </Pressable>
        <Pressable style={styles.postDash} onPress={() => navigation.navigate('PostDash', { id: patient.post_dash.id })}>
          <Text style={styles.actionText}>Post Dash</Text>
        </Pressable>
        <Pressable style={styles.medicalHistory} onPress={() => navigation.navigate('MedicalHistory', { id: patient.medical_history.id })}>
          <Text style={styles.actionText}>Medical History</Text>
        </Pressable>
        <Pressable style={styles.sessions} onPress={() => navigation.navigate('Sessions', { id: patient.id })}>
          <Text style={styles.actionText}>Sessions</Text>
        </Pressable>
      </View>
    </View>
  )
}

const btnBase: StyleProp<TextStyle> = {
  padding: 10,
  borderRadius: 6,
  color: 'white',
  width: 160,
  textAlign: 'center'
}

const styles = StyleSheet.create({
  bottomActionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 8,
    flexWrap: 'wrap'
  },
  actionText: {
    color: 'white',
    textAlign: 'center'
  },
  demographic: {
    ...btnBase,
    backgroundColor: '#dc3545',
  },
  sessions: {
    ...btnBase,
    backgroundColor: '#6DC5D1',
  },
  medicalHistory: {
    ...btnBase,
    backgroundColor: '#D2649A'
  },
  preDash: {
    ...btnBase,
    backgroundColor: '#fd7e14'
  },
  postDash: {
    ...btnBase,
    backgroundColor: '#198754'
  },
  cartContainer: {
    display: 'flex',
    marginBottom: 8,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 6
  },
  cardContent: {
    display: 'flex',
    gap: 4
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  disabilityValue: {
    fontSize: 14
  }
})
export default PatientCard