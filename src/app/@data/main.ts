import { Candidate, Technology, Question, Program } from '../@types/type';

export const candidate_list: Array<Candidate> = [
    {
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
        name: 'Sachin Duhan',
        email: 'abc@gmail.com',
        id: '1',
        skills: [{
            title: 'Python'
        }, {
            title: 'AWS'
        }, {
            title: 'Azure'
        }, {
            title: 'Developer'
        }],
    },
    {
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
        name: 'Aniket',
        email: 'cdsn@gmail.com',
        id: '2',
        skills: [{
            title: 'Python'
        }, {
            title: 'Mahcine Learning'
        }, {
            title: 'Artificial Intelligence'
        }],
    },
    {
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
        name: 'Manoj Pandey',
        email: 'abc@gmail.com',
        id: '3',
        skills: [{
            title: 'Python'
        }, {
            title: 'Artificial Intelligence'
        }, {
            title: 'Developer'
        }],
    },
    {
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
        name: 'Vikrant',
        email: 'abc@gmail.com',
        id: '4',
        skills: [{
            title: 'Python'
        }, {
            title: 'AWS'
        }, {
            title: 'Azure'
        }, {
            title: 'Developer'
        }],
    },
    {
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
        name: 'Sahil',
        email: 'cdsn@gmail.com',
        id: '5',
        skills: [{
            title: 'Python'
        }, {
            title: 'Mahcine Learning'
        }, {
            title: 'Artificial Intelligence'
        }],
    },
    {
        bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro!',
        name: 'Akhil Juneja',
        email: 'abc@gmail.com',
        id: '6',
        skills: [{
            title: 'Python'
        }, {
            title: 'Artificial Intelligence'
        }, {
            title: 'Developer'
        }],
    },
];

export const filters_list: Array<Technology> = [
    { title: 'Python Engineer' },
    { title: 'Python Developer' },
    { title: 'Data Science' },
    { title: 'Machine Learning' },
    { title: 'AWS' },
    { title: 'Azure DevOps' },
    { title: 'Data Engineer' },
    { title: 'Linux Administrator' },
    { title: 'DevOps Engineer' },
];

export const jobs_list: Array<Program> = [
    { technology: [{ title: 'Python' }, { title: 'Data Science' }], location: 'USA', title: 'Data Engineer', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro', date: new Date(), type: 'job' },
    { technology: [{ title: 'Python' }, { title: 'AWS' }], location: 'India', title: 'AWS Engineer', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro', date: new Date(), type: 'job' },
    { technology: [{ title: 'Python' }, { title: 'Data Engineer' }], location: 'Japan', title: 'Data Engineer', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro', date: new Date(), type: 'job' },
    { technology: [{ title: 'Python' }, { title: 'AWS' }], location: 'India', title: 'Python Developer', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro', date: new Date(), type: 'job' },
    { technology: [{ title: 'Python' }, { title: 'AWS' }], location: 'London, UK', title: 'Machine Learning Engineer', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro', date: new Date(), type: 'job' },
    { technology: [{ title: 'Python' }, { title: 'Data Engineer' }], location: 'Japan', title: 'Data Scienist', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, porro', date: new Date(), type: 'job' },
]

export const questions_list: Array<Question> = [
    { id: "1", question: 'Hello, Kindly introduce yourself.' },
    { id: "2", question: 'Tell me something about your experience.' },
    { id: "3", question: 'How will you cop-up with stress and job life balance?' },
    { id: "4", question: 'Why should we select you?' },
]

export const resume_response = {
    Score: "0.10050378152592121",
    college_name: "Delhi technological university",
    company_names: [
        "Bharat Electronics Limited",
        "Wipro Ltd."
    ],
    degree: "B.tech",
    designation: [
        "NLP Engineer"
    ],
    "email": "namithakonda09@gmail.com",
    "experience": [
        "(05/2020 – 05/2020)",
        "Full Stack Web developer",
        "BookMyStall",
        "01/2020 – 04/2020",
        "Achievements/Tasks",
        "Foundational Artiﬁcial Intelligence (04/2020 – 05/2020)",
        "Hyderabad,India",
        "Certiﬁcation of Core Java course in Dhanvantrai",
        "Institute(ISO) (06/2018 – 12/2018)",
        "Web development to automate diﬀerent modules of the",
        "company's functionality.",
        "NLP Engineer",
        "Wipro Ltd.",
        "02/2020 – 03/2020",
        "Task",
        "Bangalore,India",
        "Natural Language Processing as part of HRSS",
        "Java Developer",
        "Bharat Electronics Limited",
        "05/2019 – 06/2019",
        "Achievements/Tasks",
        "Hyderabad,India",
        "Designed drone motion tracking & detection using image",
        "sensing . Integrated with existing Aerial Surveillance System",
        "of BEL",
        "CO CURRICULAR",
        "Bitgrit Campus Ambassador (01/2020 – Present)",
        "Conducting contests ,Organised workshops,Datathon and Hackthons"
    ],
    "mobile_number": "8247607794",
    "name": "Namitha Konda",
    "no_of_pages": 1,
    "skills": [
        "C++",
        "Content",
        "Coding",
        "Javascript",
        "Technical",
        "Java",
        "Teaching",
        "Php",
        "Css",
        "Opencv",
        "Engineering",
        "System",
        "Reporting",
        "Html",
        "Keras",
        "Js",
        "Algorithms",
        "Ai",
        "Python",
        "Mysql",
        "Electronics",
        "Marketing"
    ],
    "total_experience": 0.0
};