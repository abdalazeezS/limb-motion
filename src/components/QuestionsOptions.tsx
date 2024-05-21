import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper'

const QuestionsOptions = () => {
  return (
    <View style={styles.optionsContainer}>
      <View style={styles.option}>
        <Text>1</Text>
        <View>
          <RadioButton value='1' />
        </View>
      </View>
      <View style={styles.option}>
        <Text>2</Text>
        <RadioButton value='2' />
      </View>
      <View style={styles.option}>
        <Text>3</Text>
        <RadioButton value='3' />
      </View>
      <View style={styles.option}>
        <Text>4</Text>
        <RadioButton value='4' />
      </View>
      <View style={styles.option}>
        <Text>5</Text>
        <RadioButton value='5' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
})

export default QuestionsOptions