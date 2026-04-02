const { createApp, ref, onMounted } = Vue;

createApp({
  setup() {
    const skills = ref([
      { name: 'Vue.js', icon: '⚙️' },
      { name: 'JavaScript', icon: '📜' },
      { name: 'HTML/CSS', icon: '🖥️' },
      { name: 'Node.js', icon: '⬢' },
      { name: 'REST APIs', icon: '🔗' },
      { name: 'Git', icon: '🐙' }
    ]);

    const education = ref([
      { degree: 'M.S. Computer Science', institution: 'Stanford University', year: '2015 - 2017' }
    ]);

    const experience = ref([
      { position: 'Senior Frontend Developer', company: 'TechCorp', year: '2019 - Present', description: 'Leading Vue projects.' }
    ]);

    const socialLinks = ref([
      { name: 'GitHub', url: 'https://github.com', icon: '🐱' },
      { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' }
    ]);

    const works = ref([
        {
            id: 1,
            title: 'First Philec, Inc.',
            location: 'Ulango, Tanauan City, Batangas, Philippines',
            job: 'SOFTWARE DEVELOPER (SPECIALIST 2)',
            date: 'September 11, 2025 - Present.',
            description: 'Full-stack web developer / Handling multiple internal projects such as financing, ticket approval and human resource violation processes and documentation / Support developer for external projects of vendors and customers / Weekly meetings and reports / Active participation on different events and seminars about innovation, development and maximizing and proper usage of tech tools. Google cloud, Artificial Intelligence, Internet of Things training and other non-technical programs such as behavioral and leadership seminars.',
            tags: ['PHP', 'Laravel', 'Javascript', 'NodeJS'],
            image: 'https://res.cloudinary.com/dyuan83wz/image/upload/v1775145426/philec_p1fyh3.jpg',
            alt: 'Software Developer (Sp 2)',
            companyLocation: 'https://maps.app.goo.gl/KBMonNYeyu8t56xL8',
            companyUrl: 'https://firstphilec.com/'
          },
          {
            id: 2,
            title: 'Diwa Learning Systems Inc.',
            location: 'PDCP Centre, V.A. Rufino Cor. Salcedo Village, Makati City, Philippines.',
            job: 'JUNIOR DEVELOPER',
            date: 'July 24, 2023 - June 30, 2025.',
            description: 'A Full-stack Web Developer (Laravel + VueJS) handling client-based projects. Making reports, analyzation, testing and solutions for the project objectives based on the client specifications. Daily/Weekly scrum, retrospective and sprint planning/meetings.',
            tags: ['Laravel', 'VueJS', 'NodeJS', 'Javascript'],
            image: 'https://res.cloudinary.com/dyuan83wz/image/upload/Diwa_Logo_2_ancg2h.jpg',
            alt: 'Junior Developer',
            companyLocation: 'https://maps.app.goo.gl/sHxWyax1ef6nK7Dw7',
            companyUrl: 'https://www.diwa.ph/'
          },
          {
            id: 3,
            title: 'Diwa Learning Systems Inc.',
            location: 'PDCP Centre, V.A. Rufino Cor. Salcedo Village, Makati City, Philippines.',
            job: 'WEB DEVELOPER INTERN',
            date: 'February 13, 2023 - May 30, 2023.',
            description: 'Trained and well-oriented on how to handle and develop web projects. Trained on how to create reports, how to deal with project concerns or issues, how to make solutions effectively and on how to communicate with other work mates. Handled one client-based project during the internship.',
            tags: ['PHP', 'Laravel', 'Javascript'],
            image: 'https://res.cloudinary.com/dyuan83wz/image/upload/Diwa_Logo_2_ancg2h.jpg',
            alt: 'Intern Developer',
            companyLocation: 'https://maps.app.goo.gl/sHxWyax1ef6nK7Dw7',
            companyUrl: 'https://www.diwa.ph/'
          },
    ]);

    const frontEnd = ref([
        { id: 1, name: 'HTML, CSS, TailwindCSS, Bootstrap, Other CDNs.' },
        { id: 2, name: 'Javascript, VueJS and other Libraries.' },
    ]);

    const backEnd = ref([
        { id: 1, name: 'PHP, Laravel, Javascript, and NodeJS.' },
        { id: 2, name: 'APIs, SQL, and DynamoDB.' },
    ]);

    const projectManagement = ref([
        { id: 1, name: 'Git/Github (Version Control).' },
        { id: 2, name: 'AWS (CodeCommit, EC2, S3, and CodeDeploy).' },
        { id: 3, name: 'Docker (Project Virtual Container).' },
        { id: 4, name: 'Jira (Ticket Management System).' },
        { id: 5, name: 'Microsoft applications (Word, PPT, Excel), XAMPP, Laragon, Insomnia, Postman, VS Code, Sublime Merge, MySQL Workbench, PHPMyAdmin, Photoshop and Canva.' },
    ]);

    const seminarsCertifications = ref([
        { id: 1, name: 'Site Visit/Ocular Inspection at the TIM Data Command Center / Interactive Cybersecurity Workshop with Lopez Holdings Corporation (FPH) / Beckhoff PLC and HMI Training / Google Cloud Agentic AI 2025 / Google Workspaces Training.' },
        { id: 2, name: 'AWS (Cloud Practitioner Essentials and Technical Essentials) Training/Seminar with certifications.' },
        { id: 3, name: 'AWS AI Day 2025.' },
        { id: 4, name: 'Santo Tomas Scholar 2019 - 2023.' },
        { id: 5, name: "Dean's Lister and President's Lister 2020 - 2023."},
        { id: 6, name: 'FAITH Psychology Society - Mental Health Awareness Week Celebration 2023.'},
        { id: 7, name: 'iSite 2020 and 2022.' },
        { id: 8, name: 'Role Model of the School Year 2017.' },
    ]);

    const projects = ref([
        {
            id: 9,
            title: 'ESG Data Management System',
            description: 'An in-house system exclusive for the company. The main features of the system include forms and managements of data with different areas for risks, environmental, social and governance.',
            tags: ['PHP', 'TailwindCSS', 'Javascript', 'MySQL'],
            image: 'https://res.cloudinary.com/dyuan83wz/image/upload/Image_not_available_hlepma.png',
            alt: 'ESG Data Management System',
            demoUrl: '#',
            docuUrl: '#',
            demoAvailable: false,
        },
        {
            id: 8,
            title: 'Customer Portal: Waste Management System (WMS)',
            description: 'An external system exclusive for the customers of the company. The main features of the system include counting, validation and monitoring of users goods.',
            tags: ['PHP', 'TailwindCSS', 'Javascript', 'MySQL'],
            image: 'https://res.cloudinary.com/dyuan83wz/image/upload/Image_not_available_hlepma.png',
            alt: 'Customer Portal: Waste Management System (WMS)',
            demoUrl: '#',
            docuUrl: '#',
            demoAvailable: false,
        },
        {
            id: 7,
            title: 'ADA Platform System',
            description: 'An external system exclusive for the customers of the company. The main features of the system include monitoring and management of the data of users.',
            tags: ['PHP', 'Javascript', 'MongoDB', 'Redis', 'Websocket'],
            image: 'https://res.cloudinary.com/dyuan83wz/image/upload/Image_not_available_hlepma.png',
            alt: 'ADA Platform System',
            demoUrl: '#',
            docuUrl: '#',
            demoAvailable: false,
        },
        {
            id: 6,
            title: 'Notice of Specific Violation System (NOSV)',
            description: 'An in-house system exclusive for the human resource department. The main features of the system include reports management and digitization of the manual processes of record of employees.',
            tags: ['PHP', 'TailwindCSS', 'Javascript', 'MySQL'],
            image: 'https://res.cloudinary.com/dyuan83wz/image/upload/Image_not_available_hlepma.png',
            alt: 'Notice of Specific Violation System (NOSV)',
            demoUrl: '#',
            docuUrl: '#',
            demoAvailable: false,
          },
          {
            id: 5,
            title: 'Enterprise TP Automation System',
            description: 'An internal system exclusive for the financing department. The main features of the system include inquiries, management and calculations.',
            tags: ['PHP', 'Bootstrap', 'Javascript', 'MySQL'],
            image: 'https://res.cloudinary.com/dyuan83wz/image/upload/Image_not_available_hlepma.png',
            alt: 'Enterprise TP Automation System',
            demoUrl: '#',
            docuUrl: '#',
            demoAvailable: false,
          },
          {
            id: 4,
            title: 'Diwa Checkbox LMS (Gamified Assessment Portal System).',
            description: 'A learning management system which goal is to manage and monitor the learning of students. It have features including creation of tests and answering examinations for mastery, managing reports and data visualization.',
            tags: ['Laravel', 'TailwindCSS', 'VueJS', 'Javascript', 'DynamoDB', 'MySQL', 'Redis'],
            image: 'https://res.cloudinary.com/dyuan83wz/image/upload/DIWA_CHECKBOX_v1xkpz.png',
            alt: 'Diwa Checkbox LMS (Gamified Assessment Portal System).',
            demoUrl: '#',
            docuUrl: '#',
            demoAvailable: false,
          },
          
          {
            id: 3,
            title: 'Diwa Dashboard SMS (School Management System).',
            description: 'A school management system that allows the user to manage the data of students in terms of their enrollment statuses, finances and other transactions.',
            tags: ['PHP', 'Javascript', 'MySQL'],
            image: 'https://res.cloudinary.com/dyuan83wz/image/upload/DIWA_DASHBOARD_m1xsk5.png',
            alt: 'Diwa Dashboard SMS (School Management System).',
            demoUrl: '#',
            docuUrl: '#',
            demoAvailable: false,
          },
          {
            id: 2,
            title: 'Recruitment Monitoring System integrated with SMS API and Analytical Reports',
            description: 'A user tracking system which allows to manage user enrollment status. This system also integrates SMS API and data visualization and analytics.',
            tags: ['Laravel', 'Javascript', 'MySQL'],
            image: 'https://res.cloudinary.com/dyuan83wz/image/upload/CCITRACK_LOGO_LANDSCAPE_vbwnku.png',
            alt: 'Recruitment Monitoring System integrated with SMS API and Analytical Reports',
            demoUrl: 'https://res.cloudinary.com/dyuan83wz/video/upload/v1751949562/CCITrack_Final_EP_Full_HD_1080p_vqbkds.mp4',
            docuUrl: '#',
            demoAvailable: true,
          },
          {
            id: 1,
            title: 'Accessories Reservation System',
            description: 'A Basic reservation system that allows the users to make an appointment with the client to manage transaction and marketing.',
            tags: ['PHP', 'Javascript', 'MySQL'],
            image: 'https://res.cloudinary.com/dyuan83wz/image/upload/Image_not_available_hlepma.png',
            alt: 'Accessories Reservation System',
            demoUrl: '#',
            docuUrl: '#',
            demoAvailable: false,
          },
    ]);

    const navItems = ref([
      { label: 'About Me', target: 'about', icon: '👨🏻‍💻' },
      { label: 'Works', target: 'works', icon: '💼' },
      { label: 'Skills', target: 'skills', icon: '🌟' },
      { label: 'Projects', target: 'projects', icon: '🗂️' },
      { label: 'Contact', target: 'contact', icon: '📞' }
    ]);

    const logos = ref([
        'https://cdn.simpleicons.org/github/ffffff',
        'https://cdn.simpleicons.org/git/cc781f',
        'https://cdn.simpleicons.org/jira/3878d1',
        'https://cdn.simpleicons.org/postman/cc781f',
        'https://cdn.simpleicons.org/sublimetext/e0aa22',
        'https://cdn.simpleicons.org/mysql/ffffff',
        'https://cdn.simpleicons.org/laragon/489cab',
        'https://cdn.simpleicons.org/bootstrap/7952B3',
        'https://cdn.simpleicons.org/node.js/2a6933',
        'https://cdn.simpleicons.org/laravel/b03f2e',  
        'https://cdn.simpleicons.org/php/777BB4',  
        'https://cdn.simpleicons.org/vue.js/2a6933',  
        'https://cdn.simpleicons.org/docker/489cab',
        'images/AWS_Logo.png',
        'https://cdn.simpleicons.org/tailwindcss/34c9eb',
    ]);

    const smoothScroll = (id) => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    onMounted(() => {
      const mainFab = document.getElementById('mainFab');
      const fabChildren = document.querySelectorAll('#fabContainer .fab-child');

      let isOpen = false;

      const toggleFab = () => {
        isOpen = !isOpen;
        fabChildren.forEach(btn => btn.classList.toggle('d-none', !isOpen));
      };

      mainFab.addEventListener('click', toggleFab);

      fabChildren.forEach(btn => {
        btn.addEventListener('click', () => {
          toggleFab();
        });
      });
    });

    return { skills, projects, education, experience, socialLinks, navItems, works, frontEnd, backEnd, seminarsCertifications, projectManagement, logos, smoothScroll };
  }
}).mount('#app');