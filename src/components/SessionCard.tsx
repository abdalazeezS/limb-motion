import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View } from 'react-native'
import { SessionModel } from '../models/session.model'

const SessionCard = ({ session }: { session: SessionModel }) => {
  return (
    <View style={styles.cartContainer}>
      <View style={styles.cardContent}>
        <Text style={styles.name}>Session Id: {session.id}</Text>
      </View>
      <View style={styles.bottomActionsContainer}>
        <Text style={{ fontWeight: 'bold' }}>Environmental Level: <Text style={{ fontWeight: 'normal' }}>{session.environment_level}</Text></Text>
        <Text style={{ fontWeight: 'bold' }}>Date: <Text style={{ fontWeight: 'normal' }}>{session.date}</Text></Text>
        <Text style={{ fontWeight: 'bold' }}>Score: <Text style={{ fontWeight: 'normal' }}>{session.score}</Text></Text>
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
    justifyContent: 'space-between',
    marginTop: 16,
    gap: 8,
    flexWrap: 'wrap'
  },
  actionText: {
    color: 'white',
    textAlign: 'center'
  },
  sessions: {
    ...btnBase,
    backgroundColor: '#6DC5D1',
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
export default SessionCard