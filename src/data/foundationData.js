export const servicesData = {
    'education': {
        title: 'Education Support',
        image: '/education.jpg',
        description: 'Our foundation is deeply committed to breaking the cycle of poverty through education. We provide comprehensive support to underprivileged students, including scholarships for higher education, essential school supplies like books and uniforms, and by establishing digital learning centers in remote areas to bridge the technological gap.',
        volunteers: [
            { name: 'Wasim Akram', role: 'Head Coordinator', image: '/manager.jpg' },
            { name: 'Shaik Jani', role: 'Resource Manager', image: '/finance.jpg' }
        ]
    },
    'borewell': {
        title: 'Borewell Implementation',
        image: '/borewell.jpg',
        description: 'Access to clean and safe drinking water is a fundamental human right. We actively work on implementing bore wells in water-scarce regions. This initiative not only quenches thirst but also significantly improves community health by reducing waterborne diseases.',
        volunteers: [
            { name: 'Fayazuddin', role: 'Project Head', image: '/secretary.jpg' },
            { name: 'Shaik Jani', role: 'Finance Officer', image: '/finance.jpg' }
        ]
    },
    'groceries': {
        title: 'Home & Festival Groceries Distribution',
        image: '/festival grocorries.jpg',
        description: 'To combat hunger and ensure no family is left behind, especially during festive seasons like Ramadan, we organize large-scale distribution of essential home groceries. These packages are thoughtfully curated to support families and individuals in need, allowing them to celebrate with dignity.',
        volunteers: [
            { name: 'Shaik Jaithunbi', role: 'Logistics Lead', image: '/LADIE.jpg' },
            { name: 'Wasim Akram', role: 'Program Manager', image: '/manager.jpg' }
        ]
    },
    'sewing_training': {
        title: 'Women Sewing Machine Training & Certification',
        image: '/SWEEING.jpg',
        description: 'Empowering women through vocational training is a core initiative. Our program provides comprehensive training in operating sewing machines, enabling women to gain valuable skills for self-employment and economic independence. Upon completion, participants receive certification, opening doors to new opportunities.',
        volunteers: [
            { name: 'Shaik Jaithunbi', role: 'Senior Trainer', image: '/LADIE.jpg' },
            { name: 'Fayazuddin', role: 'Coordinator', image: '/secretary.jpg' }
        ]
    }
};

export const eventsData = {
    'sewing_training': {
        title: 'Women Sewing Machine Training & Certification',
        image: '/sweeing 1.jpg', // Main image for event card
        shortDescription: 'Free 5-month training course with free machine distribution and certification.',
        status: 'Duration: July 2025 - November 2025',
        details: {
            members: 'Total 150 members are learning.',
            timings: 'Batch 1: 10:00 AM - 1:00 PM | Batch 2: 1:00 PM - 5:00 PM',
            venue: 'Near Noor Masjid, Madinapadu Road, Dachepalli',
            image: '/sewing_training_glimpse.jpg', // Glimpse image
            certificate: '/certificate.jpg' // Certificate image
        }
    }
};

export const quotesData = [
    { quote: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
    { quote: "We make a living by what we get, but we make a life by what we give.", author: "Winston Churchill" },
    { quote: "No one has ever become poor by giving.", author: "Anne Frank" },
    { quote: "Service to others is the rent you pay for your room here on Earth.", author: "Muhammad Ali" }
];
