let basicSteps = [{
        id: '1',
        message: 'Hi! Welcome to @Francis\'s Chatbot',
        trigger: '2'
    },
    {
        id: '2',
        message: 'What is your name?',
        trigger: '3'
    },
    {
        id: '3',
        user: true,
        trigger: 4
    },
    {
        id: '4',
        message: 'I hope you are doing great?',
        trigger: '5'
    },

    {
        id: '5',
        user: true,
        trigger: 6
    },
    {
        id: '6',
        message: 'Okay. It\'s lovely to meet you by the way.',
        trigger: 7
    },
    {
        id: '7',
        message: 'What track are you on at hngi7?',
        trigger: 8
    },
    {
        id: '8',
        user: true,
        trigger: 9
    },

    {
        id: '9',
        message: 'Alright. Good to know',
        trigger: 10
    },

    {
        id: '10',
        message: 'How do you feel about the internship so far?',
        trigger: 11
    },
    {
        id: '11',
        user: true,
        trigger: '12'
    },
    {
        id: '12',
        message: '@Francis told me it has been stressful and interesting though',
        trigger: '13'
    },
    {
        id: '13',
        message: 'Do you agree?',
        trigger: '14'
    },
    {
        id: '14',
        user: true,
        trigger: '15'
    },
    {
        id: '15',
        message: 'I love your responses.',
        trigger: '16'
    },
    {
        id: '16',
        message: 'What do you think?.',
        trigger: '17'
    },
    {
        id: '17',
        user: true,
        trigger: '18'
    },
    {
        id: '18',
        message: 'I\'ve something to attend to right now, Can we talk later?.',
        trigger: 19
    },
    {
        id: '19',
        message: 'One final thing though.',
        trigger: 20
    },
    {
        id: '20',
        message: '@Francis deserves to be in stage 4 :).',
        trigger: 21
    },
    {
        id: '21',
        message: '...he\'s very good',
        trigger: 22
    },
    {
        id: '22',
        message: 'We\'ll definitely talk some other time.',
        trigger: 23
    },
    {
        id: '23',
        message: 'Bye ):',
        trigger: 24
    },
    {
        id: '24',
        user: true,
        end: true
    }
]


export default basicSteps;