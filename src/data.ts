export const info = {
  title: "Cameron Robey",
  subtitle: "Student and software engineer",
  biography: "Hello! I'm Cameron, a second year Natural Sciences student at St John's College, Cambridge. I mainly do full stack web development, for which you can view some of my projects below.",
}

export const portfolio = [
  { 
    title: 'Localing' ,
    image_url: '/assets/localing.png',
    languages: ['Typescript','DynamoDB','Cognito','Express','React','NodeJS','Java'],
    information: 'A platform offering an ecommerce solution to micro businesses and providing deals to local residents. It was built using React customer and business facing frontends and a  backend incorporating serverless and microservices using NodeJS and Java.\n\nI built a business dashboard, the system for businesses to update the information about their stores, products and inventory, and to fulfil orders.\n\nThe startup was accepted into the Judge Business School (University of Cambridge) Accelerator but unfortunately shut down permanatly in 2021.',
    links: [
      {
        url: 'https://github.com/Localing/',
        text: 'Code on Github'
      },
      {
        url: 'https://github.com/Localing/business-dashboard',
        text: 'Code for Business Dashboard'
      }
    ]
  },
  { 
    title: 'St John\'s College May Ball' ,
    image_url: '/assets/mayball.png',
    languages: ['Javascript','MongoDB','Express','React','NodeJS'],
    information: 'As Head of Technology for the St John\'s College May Ball at the University of Cambridge, built a number of tools for ticket allocation and purchase for the 3000 guests. The system was built on MERN stack.',
    links: [
      {
        url: 'https://mayball.org/',
        text: 'May Ball Website'
      }
    ]
  },
  { 
    title: 'Apollo Library System',
    image_url: '/assets/apollo.png',
    languages: ['Javascript','MongoDB','Express','React','NodeJS'],
    information: 'A full open source library management system. The data is stored in a MongoDB database and is interacted with using a REST API (Express on NodeJS). The front end is built in React.',
    links: [
      {
        url: 'https://apollo-library.github.io/',
        text: 'More information'
      },
      {
        url: 'https://github.com/apollo-library/',
        text: 'Code on Github'
      }
    ]
  },
  { 
    title: 'MMK Academy',
    image_url: '/assets/mmk.png',
    languages: ['Javascript','React','Strapi'],
    information: 'A website and logo for MMK Academy to promote the work of the company and attract new clients. The website was built in React, with Strapi used for the content management system.',
    links: [
      {
        url: 'https://www.mmkacademy.com',
        text: 'View the site'
      },
      {
        url: 'https://github.com/cameron-robey/mmk-frontend/',
        text: 'Code on Github'
      }
    ]
  },
  { 
    title: 'Beacon Meshenger',
    image_url: '/assets/beacon.png',
    languages: ['Dart','Flutter','Android Nearby'],
    information: 'An end to end encrypyted mesh network messenger for android. The app uses Bluetooth & ultrasound through Android Nearby to detect nearby devices running Beacon up to 100m away and connect to them. When devices join the network, anyone can send them a message.\n\nThe app was built using Flutter (in Dart).\n\nThe project was made for the 2021 Hack Cambridge Hackathon, for which it won first place overall.',
    links: [
      {
        url: 'https://github.com/beacon-meshenger/beacon',
        text: 'Code on Github'
      },
      {
        url: 'https://devpost.com/software/beacon-jybrxm',
        text: 'Devpost Submission'
      }
    ]
  },
  { 
    title: 'Dr Challoner\'s Model United Nations',
    image_url: '/assets/challmun.png',
    languages: ['Javascript','React','Singular.Live'],
    information: 'A website for the Dr Challoner\'s Model United Nations Society built in React to help with the running of weekly sessions and large scale conferences. Also a suite of tools for integration with live video production using singular.live.',
    links: []
  }
]


// OLD Items:

// { 
//   title: 'Radio Silence Audio Drama',
//   image_url: '/assets/radiosilence.png',
//   languages: ['PHP'],
//   information: 'A website to showcase the episodes of an audio drama. The site was built in PHP with a custom content management system.',
//   links: []
// },