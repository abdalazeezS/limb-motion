import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Button, RadioButton } from 'react-native-paper';
import { questionsList } from '../constants/questions';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { FIREBASE_COLLECTIONS } from '../constants/firebase-collections';

const PreDash = ({ route }: any) => {
  const [questions, setQuestions] = useState(questionsList);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPreDash = async () => {
      const docRef = doc(db, FIREBASE_COLLECTIONS.PRE_DASH, route.params.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const docData = Object.entries(docSnap.data());
        setQuestions(prev => {
          return prev.map(q => {
            const question = docData.find(item => item[0] == q.id);
            return { ...q, answer: question?.[1] + '' };
          })
        })
        setIsLoading(false);
      }
    }

    getPreDash();
  }, []);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const updatedAnswers = questions.reduce((acc, q) => {
      //@ts-ignore
      acc[q.id] = +q.answer;
      return acc;
    }, {});

    await setDoc(doc(db, FIREBASE_COLLECTIONS.PRE_DASH, route.params.id), { ...updatedAnswers })
      .then(() => {
        setIsSubmitting(false);
        Alert.alert('Updated Successfully ✅')
      })
  }

  if (isLoading) {
    return <View style={styles.loadingContainer}>
      <ActivityIndicator animating size='large' />
    </View>
  }

  return (
    <View style={styles.pageWrapper}>
      <ScrollView>
        {
          questions.map(q => {
            return <View key={q.id} style={styles.questionContainer}>
              <Text style={styles.questionText}>{q.text}</Text>
              <RadioButton.Group
                value={questions.find(question => question.id == q.id)?.answer!}
                onValueChange={(val) => {
                  setQuestions(prev => {
                    return prev.map(question => question.id == q.id ? { ...question, answer: val } : question)
                  })
                }}>
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
              </RadioButton.Group>
            </View>
          })
        }
      </ScrollView>
      <Button style={styles.submitBtn} onPress={handleSubmit} mode='contained'>{isSubmitting ? 'Submitting ...' : 'Submit'}</Button>
    </View>
  )
}
const styles = StyleSheet.create({
  submitBtn: {
    position: 'absolute',
    bottom: 30,
    width: '100%'
  },
  questionText: {
    fontSize: 16
  },
  loadingContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center'
  },
  questionContainer: {
    marginBottom: 16,
    display: 'flex',
    gap: 8
  },
  pageWrapper: {
    padding: 16,
    display: 'flex',
    alignItems: 'center'
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
    backgroundColor: 'white',
    marginBottom: 4,
    borderRadius: 999,
    width: 150,
    height: 60,
    padding: 10,
  },
  optionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  }
})
export default PreDash