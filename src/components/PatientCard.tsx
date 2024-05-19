import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Patient } from '../models/Patient'
import { useTranslation } from 'react-i18next'

const PatientCard = ({ patient, navigation }: { patient: Patient, navigation: any }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.cartContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.name}>{patient.name}</Text>
        <Text>{t('DISABILITY_PERCENT')}: <Text style={styles.disabilityValue}>{patient.disabilityPercent}</Text>%</Text>
      </View>
      <View style={styles.bottomActionsContainer}>
        <Pressable onPress={() => navigation.navigate('Demographic', { id: patient.id })}>
          <Text style={styles.demographic}>Demographic details</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('PreDash', { id: patient.pre_dash.id })}>
          <Text style={styles.preDash}>Pre Dash</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('PostDash', { id: patient.post_dash.id })}>
          <Text style={styles.postDash}>Post Dash</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomActionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
  },
  demographic: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#dc3545',
    color: 'white'
  },
  preDash: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#fd7e14',
    color: 'white'
  },
  postDash: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#198754',
    color: 'white'
  },
  cartContainer: {
    display: 'flex',
    marginBottom: 8,
    // flexDirection: 'row-reverse',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 6
  },
  cardContent: {
    display: 'flex',
    alignItems: 'flex-end',
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