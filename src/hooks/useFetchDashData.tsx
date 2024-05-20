import { useEffect, useState } from 'react'
import { FIREBASE_COLLECTIONS } from '../constants/firebase-collections';
import { db } from '../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { questionsList } from '../constants/questions';

const useFetchDashData = (type: 'preDash' | 'postDash', id: string) => {
  const [questions, setQuestions] = useState(questionsList);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const collection = type === 'postDash' ? FIREBASE_COLLECTIONS.POST_DASH : FIREBASE_COLLECTIONS.PRE_DASH;
    const fetchData = async () => {
      const docRef = doc(db, collection, id);
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

    fetchData();
  }, []);

  return { isSubmitting, isLoading, questions, setIsSubmitting, setQuestions }
}

export default useFetchDashData