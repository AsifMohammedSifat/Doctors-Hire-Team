const doctors= [
    {
    id: 1,
    name: 'Dr. Md. Mashur Hasanath Shahid',
    type: 'Nephrologists',
    age: 38,
    country: 'Bangladesh',
    salary:50000,
    description:'A nephrologist focuses on kidney care and conditions that affect the kidneys.',
    img: 'https://www.healthconnect247.com/wp-content/uploads/2016/10/Dr.-Umar-350x335.jpg'
},
    {
    id: 2,
    name: 'Prof. Dr. Mohd. Habib Khan',
    type: 'Urologists',
    age: 55,
    country: 'USA',
    salary:55000,
    description: 'Urologists treat conditions of the urinary tract in both males and females. They also focus on male reproductive health.',
    img: 'https://th.bing.com/th/id/OIP.APjmKmC7pAwcvBCbKoxVmgHaGO?pid=ImgDet&rs=1'
},
    {
    id: 3,
    name: 'Dr. Sanjoy Kumar Chakraborty',
    type: 'Pulmonologists',
    age: 65,
    country: 'Uk',
    salary:85000,
    description: 'Pulmonologists focus on the organs involved with breathing. These include the lungs and heart.',
    img: 'https://truecare.org/wp-content/uploads/truecare-provider-bio-Franklin_Tse.jpg'
},
    {
    id: 4,
    name: 'Dr. Md. Anamul Hoque',
    type: 'Otolaryngologists',
    age: 45,
    country: 'Bangladesh',
    salary:65000,
    description: 'Otolaryngologists are sometimes known as “ear, nose, and throat” (ENT) doctors.',
    img: 'https://aakashhealthcare.com/sites/default/files/2019-10/dr-akshay.jpg'
}
   , {
    id: 5,
    name: 'Kim Barnesf',
    type: 'Neurologists',
    age:53 ,
    country: 'Japan',
    salary:10000,
    description: 'A neurologist treats conditions of the nerves, spine, and brain. ',
    img: 'https://escires.com/uploads/board/20200713012843_Dr%20Roy%20White%20Coat.jpg'
}
   , {
    id: 6,
    name: 'Dr. Shahidul Islam Masud',
    type: 'Anesthesiologists',
    age:39 ,
    country: 'Bangladesh',
    salary:45800,
    description: 'Anesthesiologists focus on a person’s well-being before, during, and after surgery. This may include administering pain medicine, relaxation medication, or medicine to put a person to sleep.',
    img: 'https://th.bing.com/th/id/OIP.bqXz82nuLc5ZkSVee87aMgAAAA?pid=ImgDet&w=466&h=700&rs=1'
}
   , {
    id: 7,
    name: 'Prof. Dr. Md. Abdul Mazed',
    type: 'Cardiac surgeons',
    age:49 ,
    country: 'Spain',
    salary:90000,
    description: 'Cardiac surgeons perform heart surgery and may work with a cardiologist to determine what a person needs.',
    img: 'https://pbs.twimg.com/profile_images/1052918599109599232/Ei8EMo1j_400x400.jpg'
}
   , {
    id: 8,
    name: 'Dr.Fong',
    type: 'Orthopedic surgeons',
    age:42 ,
    country: 'China',
    salary:78800,
    description: 'An orthopedic surgeon specializes in diseases and conditions of the bones, muscles, ligaments, tendons, and joints.',
    img: 'https://www.promptmedurgentcare.com/graphical_files/Dr.Fong_01.jpg'
}
   , {
    id: 9,
    name: '	Dr. Saifuuddin Khaled',
    type: 'Orthopedic surgeons',
    age:58 ,
    country: 'England',
    salary:58000,
    description: 'An orthopedic surgeon specializes in diseases and conditions of the bones, muscles, ligaments, tendons, and joints.',
    img: 'https://www.s-spinehospital.com/en/wp-content/uploads/2018/08/banner_01_doctor_02.png'
}
   , {
    id: 10,
    name:'Jack Cyan',
    type: 'General surgeons',
    age:39 ,
    country: 'Japan',
    salary:45800,
    description:'General surgeons perform surgical procedures on many organs and bodily systems.',
    img: 'https://vinmec-prod.s3.amazonaws.com/images/2015-12-25_074418.2142260000.jpeg'
}
   , {
    id: 11,
    name:'Arex Jay',
    type: 'General surgeons',
    age:35 ,
    country: 'Japan',
    salary:40800,
    description:'General surgeons perform surgical procedures on many organs and bodily systems.',
    img: 'https://th.bing.com/th/id/OIP.wcCUc6Nf5ZaU8odkNYOD_gHaHa?pid=ImgDet&w=512&h=512&rs=1'
}
   , {
    id: 12,
    name:'Dr. Zubayer AI Mahmood',
    type: 'Rheumatologists',
    age:35 ,
    country: 'Bangladesh',
    salary:6000,
    description: 'A rheumatologist diagnoses and treats rheumatic diseases. These are autoimmune conditions that can affect the bones, joints, and muscles.',
    img: 'https://www.npcourses.com/wp-content/uploads/2021/01/AGPCNP.Holder.trans_-300x300-1-300x300.jpg'
}
   , {
    id: 13,
    name: 'Dr. Shabrina Yasmine Adana',
    type: 'Radiologists',
    age:35 ,
    country: 'Bangladesh',
    salary:75000,
    description: 'A radiologist specializes in diagnosing and treating conditions using medical imaging tests. They may read and interpret scans such as X-rays, MRIs, mammograms, ultrasound, and CT scans.',
    img: 'https://th.bing.com/th/id/OIP.ed9BPk56R-ZuVSBARMMXoQHaLQ?pid=ImgDet&rs=1'
}
   , {
    id: 14,
    name:'Dr Shirin Sharmin',
    type: 'Rheumatologists',
    age:38 ,
    country: 'Bangladesh',
    salary:6000,
    description: 'A rheumatologist diagnoses and treats rheumatic diseases. These are autoimmune conditions that can affect the bones, joints, and muscles.',
    img: 'https://th.bing.com/th/id/OIP.QGlepbGhZNXCa0BPSUtYowHaJ1?pid=ImgDet&rs=1'
}
   , {
    id: 15,
    name:'Dr. Alexa',
    type: 'Neurologists',
    age:35 ,
    country:'USA',
    salary:90000,
    description:'A neurologist treats conditions of the nerves, spine, and brain.',
    img: 'https://purepng.com/public/uploads/large/purepng.com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-1421526857330hticw.png'
}
]