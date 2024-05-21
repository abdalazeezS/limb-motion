interface Question {
  id: string,
  text?: string;
  answer?: string;
  sectionId: number;
}

export const questionsList: Question[] = [
  {
    id:'q1',
    text: 'Open a tight or new jar',
    sectionId: 1
  },
  {
    id:'q2',
    text: 'Write',
    sectionId: 1
  },
  {
    id:'q3',
    text: 'Turn a key',
    sectionId: 1
  },
  {
    id:'q4',
    text: ' Prepare a meal',
    sectionId: 1
  },
  {
    id:'q5',
    text: 'Push open a heavy door',
    sectionId: 1
  },
  {
    id:'q6',
    text: 'Place an object on a shelf above your head',
    sectionId: 1
  },
  {
    id:'q7',
    text: 'Do heavy household chores (e.g., wash walls, wash floors)',
    sectionId: 1
  },
  {
    id:'q8',
    text: 'Garden or do yard work',
    sectionId: 1
  },
  {
    id:'q9',
    text: 'Make a bed',
    sectionId: 1
  },
  {
    id:'q10',
    text: 'Carry a shopping bag or briefcase',
    sectionId: 1
  },
  {
    id:'q11',
    text: 'Carry a heavy object (over 10 lbs)',
    sectionId: 1
  },
  {
    id:'q12',
    text: 'Change a lightbulb overhead',
    sectionId: 1
  },
  {
    id:'q13',
    text: 'Wash or blow dry your hair',
    sectionId: 1
  },
  {
    id:'q14',
    text: 'Wash your back',
    sectionId: 1
  },
  {
    id:'q15',
    text: 'Put on a pullover sweater',
    sectionId: 1
  },
  {
    id:'q16',
    text: 'Use a knife to cut food',
    sectionId: 1
  },
  {
    id:'q17',
    text: 'Recreational activities which require little effort (e.g., cardplaying, knitting, etc.)',
    sectionId: 1
  },
  {
    id:'q18',
    text: 'Recreational activities in which you take some force or impact through your arm, shoulder or hand (e.g., golf, hammering, tennis, etc.)',
    sectionId: 1
  },
  {
    id:'q19',
    text: 'Recreational activities in which you move your arm freely (e.g., playing frisbee, badminton, etc.)',
    sectionId: 1
  },
  {
    id:'q20',
    text: 'Manage transportation needs (getting from one place to another).',
    sectionId: 1
  },
  {
    id:'q21',
    text: 'During the past week, to what extent has your arm, shoulder or hand problem interfered with your normal social activities with family, friends, neighbors or groups?',
    sectionId: 2
  },
  {
    id:'q22',
    text: 'During the past week, were you limited in your work or other regular daily activities as a result of your arm, shoulder or hand problem?',
    sectionId: 3
  },
  {
    id:'q23',
    text: 'Arm, shoulder or hand pain',
    sectionId: 4
  },
  {
    id:'q24',
    text: 'Arm, shoulder or hand pain when you performed any specific activity',
    sectionId: 4
  },
  {
    id:'q25',
    text: 'Tingling (pins and needles) in your arm, shoulder or hand',
    sectionId: 4
  },
  {
    id:'q26',
    text: 'Weakness in your arm, shoulder or hand',
    sectionId: 4
  },
  {
    id:'q27',
    text: 'Stiffness in your arm, shoulder or hand',
    sectionId: 4
  },
  {
    id:'q28',
    text: 'During the past week, how much difficulty have you had sleeping because of the pain in your arm, shoulder or hand?',
    sectionId: 5
  },
  {
    id:'q29',
    text: ' I feel less capable, less confident or less useful because of my arm, shoulder or hand problem',
    sectionId: 6
  },
]