import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface QuestionsSectionProps {
  title: string;
  subTitle: string;
  questionsWeights: string[];
}

const QuestionsSection = ({ title, subTitle, questionsWeights }: QuestionsSectionProps) => {
  return (
    <>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionSubTitle}>{subTitle}:</Text>
      <Text>
        {questionsWeights.map(q => {
          return <Text key={q}>{'\t'}1 -&gt; {q} {'\n'}</Text>
        })}
      </Text>
    </>
  )
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },
  sectionSubTitle: {
    marginBottom: 8
  },
})

export default QuestionsSection