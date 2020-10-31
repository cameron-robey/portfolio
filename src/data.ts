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
    information: 'A platform offering an ecommerce solution to micro businesses and providing deals to local residents. It was built using React customer and business facing frontends and a microservices backend using NodeJS and Java.',
    links: [
      {
        url: 'https://localing.co.uk/',
        text: 'Visit Localing'
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
    title: 'MMK Public Speaking',
    image_url: '/assets/mmk.png',
    languages: ['Javascript','React','Strapi'],
    information: 'A website and logo for MMK Public Speaking to promote the work of the company and attract new clients. The website was built in React, with Strapi used for the content management system.',
    links: [
      {
        url: 'https://www.mmkarim.com',
        text: 'View the site'
      },
      {
        url: 'https://github.com/cameron-robey/mmk-frontend/',
        text: 'Code on Github'
      }
    ]
  },
  { 
    title: 'Radio Silence Audio Drama',
    image_url: '/assets/radiosilence.png',
    languages: ['PHP'],
    information: 'A website to showcase the episodes of an audio drama. The site was built in PHP with a custom content management system.',
    links: []
  },
  { 
    title: 'Dr Challoner\'s Model United Nations',
    image_url: '/assets/challmun.png',
    languages: ['Javascript','React','Singular.Live'],
    information: 'A website for the Dr Challoner\'s Model United Nations Society built in React to help with the running of weekly sessions and large scale conferences. Also a suite of tools for integration with live video production using singular.live.',
    links: []
  }
]
