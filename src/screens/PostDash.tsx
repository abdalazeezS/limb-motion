import React from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { FIREBASE_COLLECTIONS } from '../constants/firebase-collections';
import useFetchDashData from '../hooks/useFetchDashData';
import { Divider, QuestionsOptions, QuestionsSection, Spinner } from '../components';

const PostDash = ({ route }: any) => {

  const { isLoading, isSubmitting, questions, setIsSubmitting, setQuestions } = useFetchDashData('postDash', route.params.id)

  const handleSubmit = () => {
    setIsSubmitting(true)
    const updatedAnswers = questions.reduce((acc, q) => {
      //@ts-ignore
      acc[q.id] = +q.answer;
      return acc;
    }, {});

    setDoc(doc(db, FIREBASE_COLLECTIONS.POST_DASH, route.params.id), { ...updatedAnswers })
      .then(() => {
        setIsSubmitting(false)
        Alert.alert('Updated Successfully ✅')
      })
  }

  if (isLoading) {
    return <Spinner />
  }
  return (
    <View style={styles.pageWrapper}>
      <ScrollView>
        <QuestionsSection
          title='Section One'
          subTitle='Points Weights'
          questionsWeights={[
            'No Difficulty',
            'Mild Difficulty',
            'Moderate Difficulty',
            'Severe Difficulty',
            'Unable',
          ]}
        />
        {
          questions.filter(q => q.sectionId == 1).map(q => {
            return <View key={q.id} style={styles.questionContainer}>
              <Text style={styles.questionText}>{q.text}</Text>
              <RadioButton.Group
                value={questions.find(question => question.id == q.id)?.answer!}
                onValueChange={(val) => {
                  setQuestions(prev => {
                    return prev.map(question => question.id == q.id ? { ...question, answer: val } : question)
                  })
                }}>
                <QuestionsOptions />
              </RadioButton.Group>
            </View>
          })
        }
        <Divider />
        <QuestionsSection
          title='Section Tow'
          subTitle='Points Weights'
          questionsWeights={[
            'Not at all',
            'Slightly',
            'Moderately',
            'Quite a bit',
            'Extremely',
          ]}
        />

        {
          questions.filter(q => q.sectionId == 2).map(q => {
            return <View key={q.id} style={styles.questionContainer}>
              <Text style={styles.questionText}>{q.text}</Text>
              <RadioButton.Group
                value={questions.find(question => question.id == q.id)?.answer!}
                onValueChange={(val) => {
                  setQuestions(prev => {
                    return prev.map(question => question.id == q.id ? { ...question, answer: val } : question)
                  })
                }}>
                <QuestionsOptions />
              </RadioButton.Group>
            </View>
          })
        }
        <Divider />
        <QuestionsSection
          title='Section Three'
          subTitle='Points Weights'
          questionsWeights={[
            'Not limited at all',
            'Slightly limited',
            'Moderately limited',
            'Very limited',
            'Unable',
          ]}
        />
        {
          questions.filter(q => q.sectionId == 3).map(q => {
            return <View key={q.id} style={styles.questionContainer}>
              <Text style={styles.questionText}>{q.text}</Text>
              <RadioButton.Group
                value={questions.find(question => question.id == q.id)?.answer!}
                onValueChange={(val) => {
                  setQuestions(prev => {
                    return prev.map(question => question.id == q.id ? { ...question, answer: val } : question)
                  })
                }}>
                <QuestionsOptions />
              </RadioButton.Group>
            </View>
          })
        }
        <Divider />
        <QuestionsSection
          title='Section Four'
          subTitle='Points Weights'
          questionsWeights={[
            'None',
            'Mild',
            'Moderate',
            'Severe',
            'Extreme',
          ]}
        />
        {
          questions.filter(q => q.sectionId == 4).map(q => {
            return <View key={q.id} style={styles.questionContainer}>
              <Text style={styles.questionText}>{q.text}</Text>
              <RadioButton.Group
                value={questions.find(question => question.id == q.id)?.answer!}
                onValueChange={(val) => {
                  setQuestions(prev => {
                    return prev.map(question => question.id == q.id ? { ...question, answer: val } : question)
                  })
                }}>
                <QuestionsOptions />
              </RadioButton.Group>
            </View>
          })
        }
        <Divider />

        <QuestionsSection
          title='Section Five'
          subTitle='Points Weights'
          questionsWeights={[
            'No Difficulty',
            'Mild Difficulty',
            'Moderate Difficulty',
            'Severe Difficulty',
            'So much difficulty that I can\'t sleep',
          ]}
        />
        {
          questions.filter(q => q.sectionId == 5).map(q => {
            return <View key={q.id} style={styles.questionContainer}>
              <Text style={styles.questionText}>{q.text}</Text>
              <RadioButton.Group
                value={questions.find(question => question.id == q.id)?.answer!}
                onValueChange={(val) => {
                  setQuestions(prev => {
                    return prev.map(question => question.id == q.id ? { ...question, answer: val } : question)
                  })
                }}>
                <QuestionsOptions />
              </RadioButton.Group>
            </View>
          })
        }
        <Divider />

        <QuestionsSection
          title='Section Six'
          subTitle='Points Weights'
          questionsWeights={[
            'Strongly disagree',
            'Disagree',
            'Neither agree nor disagree',
            'Agree',
            'Strongly agree',
          ]}
        />
        {
          questions.filter(q => q.sectionId == 6).map(q => {
            return <View key={q.id} style={styles.questionContainer}>
              <Text style={styles.questionText}>{q.text}</Text>
              <RadioButton.Group
                value={questions.find(question => question.id == q.id)?.answer!}
                onValueChange={(val) => {
                  setQuestions(prev => {
                    return prev.map(question => question.id == q.id ? { ...question, answer: val } : question)
                  })
                }}>
                <QuestionsOptions />
              </RadioButton.Group>
            </View>
          })
        }
      </ScrollView>
      <Button
        style={styles.submitBtn}
        onPress={handleSubmit}
        mode='contained'>
        {isSubmitting ? 'Submitting ...' : 'Submit'}
      </Button>
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
  genderOption: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 4,
    borderRadius: 999,
    width: 150,
    height: 60,
    padding: 10,
  }
})
export default PostDash