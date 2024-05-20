import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

const Spinner = () => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator animating size='large' />
    </View>
  )
}

const styles = StyleSheet.create({
  spinnerContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center'
  }
})

export default Spinner