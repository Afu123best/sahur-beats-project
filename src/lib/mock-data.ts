export const HOSPITAL = {
  name: "Gulab Devi Teaching Hospital",
  short: "GDTH",
  tagline: "A non-profit hospital serving Pakistan since 1934.",
  phone: "+92-42-99230247-50",
  emergency: "1122",
  email: "info@gulabdevi.org",
  address: "Main Ferozepur Road, Opposite Arfa Kareem Tower, Lahore, Punjab, Pakistan",
};

export const STATS = [
  { label: "Hospital Beds", value: 1800, suffix: "+" },
  { label: "Patients Served", value: 2400000, suffix: "+" },
  { label: "Departments", value: 42, suffix: "" },
  { label: "Expert Doctors", value: 380, suffix: "+" },
  { label: "Years of Service", value: 91, suffix: "" },
];

export type Department = {
  slug: string;
  name: string;
  icon: string;
  short: string;
  description: string;
  heads?: { name: string; qualifications?: string; photo?: string }[];
  consultants?: { name: string; qualifications?: string; photo?: string }[];
  stats?: { label: string; value: string }[];
  services: string[];
  facilities: string[];
  equipment: string[];
  image?: string;
};

export const DEPARTMENTS: Department[] = [
  {
    slug: "anesthesia",
    name: "Anesthesia",
    icon: "Syringe",
    short: "Supporting safe, effective anesthesia across every surgical specialty.",
    description: "The Department of Anesthesia at Gulab Devi Teaching Hospital Lahore is one of the hospital's long-standing clinical departments, evolving alongside the growth of surgical services at the institution. Over the decades, the department has played a critical role in supporting complex surgical care across multiple specialties.\n\nEquipped to provide safe and effective anesthesia services, the department supports both elective and emergency surgical procedures, ensuring continuous perioperative care for patients. In addition to clinical services, the department is actively involved in postgraduate training and has contributed significantly to the development of skilled anesthetists through structured residency and teaching programs.\n\nWith a strong focus on patient safety, clinical excellence and professional training, the Department of Anesthesia is committed to producing competent anesthesia professionals capable of independent practice at national and international standards. The department continues to support the hospital's mission by ensuring safe surgical outcomes and advancing anesthesia education in Lahore and beyond.",
    heads: [{ name: "Prof. Dr. M. Abdul Aziz", qualifications: "Head of Department", photo: "/departments/anesthesia/abdul-aziz.jpg" }], consultants: [
      { name: "Dr. Attiya Razaq", qualifications: "Senior Registrar", photo: "/departments/anesthesia/attiya-razaq.jpg" },
      { name: "Prof. Dr. M. Abdul Aziz", qualifications: "Professor", photo: "/departments/anesthesia/abdul-aziz.jpg" },
      { name: "Dr. Zubair Ahmed", qualifications: "Consultant Anesthetist", photo: "/departments/anesthesia/zubair-ahmed.jpg" },
    ],
    services: [],
    facilities: [],
    equipment: [],
    image: "/departments/anesthesia.jpg",
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    icon: "HeartPulse",
    short: "A beacon of hope for heart patients since 1983.",
    description: "Since 1983, the Cardiology Department at Gulab Devi Teaching Hospital has been a beacon of hope for patients with heart disease, providing high-quality, affordable care to thousands every year. With 150 dedicated beds and 24/7 cardiac emergency services, our team ensures that no patient is turned away.\n\nOur team of experienced cardiologists in Lahore offer a comprehensive range of diagnostic and interventional cardiac services. We provide advanced cardiac procedures including angiography, angioplasty, and primary PCI for heart attacks, supported by a fully equipped Cardiac ICU, CCU, and state of the art Cath Lab. Our specialists also perform complex coronary and valve procedures, as well as lifesaving device closures for children and adults.\n\nEarly diagnosis plays a crucial role in preventing serious heart complications. Our department offers daily cardiac diagnostic services in Lahore, including echocardiography, Exercise Tolerance Testing (ETT), and other advanced investigations, ensuring accurate diagnosis and timely treatment. Beyond patient care, the department is committed to training the next generation of cardiologists and conducting cutting-edge research, helping improve cardiac care not just in our hospital but across Pakistan and abroad.",
    heads: [
      { name: "Prof. Dr. Muhammad Zubair", qualifications: "Head of Department", photo: "/departments/cardiology/muhammad-zubair.jpg" },
      { name: "Prof. Dr. Imran Hanif", qualifications: "Head of Interventional Cardiology", photo: "/departments/cardiology/imran-hanif.jpg" },
    ],
    consultants: [
      { name: "Dr. Ijaz Bhatti", qualifications: "Associate Professor", photo: "/departments/cardiology/ijaz-bhatti.jpg" },
      { name: "Prof. Dr. Muhammad Zubair", qualifications: "Professor of Cardiology", photo: "/departments/cardiology/muhammad-zubair.jpg" },
      { name: "Prof. Dr. Majid Kaleem", qualifications: "Professor of Cardiology", photo: "/departments/cardiology/majid-kaleem.jpg" },
    ],
    stats: [
      { label: "Outdoor Patients", value: "46,000+" },
      { label: "Emergency Treatments", value: "26,000+" },
      { label: "Echocardiographies", value: "14,000+" },
      { label: "ECGs", value: "34,500+" },
      { label: "Cath Lab Procedures", value: "2,000+" },
      { label: "Procedures in Cardiology", value: "6,500+" },
    ],
    services: [
      "Diagnostic Coronary Angiography", "Coronary Angioplasty", "Primary PCI (round the clock)", "Complex Coronary Interventions",
      "CTO Intervention", "IVUS Guided Coronary Intervention", "Coronary Intervention with Rota-Ablation", "Right Heart Catheterization",
      "TAVI", "Acetabular Artery Embolization", "Percutaneous Uterine Artery Embolization", "Peripheral Arterial Embolizations",
      "Peripheral Interventions", "Coarctation of Aorta Intervention", "Percutaneous ASD/VSD/PDA Device Closures",
      "Pulmonary Valvuloplasty", "Aortic Valvuloplasty", "PMBV/PTMC",
    ],
    facilities: [],
    equipment: [],
    image: "/departments/cardiology.jpg",
  },
  {
    slug: "cardiac-surgery",
    name: "Cardiac Surgery",
    icon: "Heart",
    short: "Advanced heart surgery including CABG, valve repairs and replacements, and complex cardiac procedures.",
    description: "The Cardiac Surgery Department at Gulab Devi Teaching Hospital has grown from a small unit in the late 1980s into a modern, fully equipped heart surgery center serving patients from across Pakistan. With dedicated operation theatres, a specialized ICU and complete pre- and post-operative care, we ensure every patient receives safe, timely and advanced cardiac surgical treatment from experienced cardiac surgeons.\n\nOur surgical team performs a wide range of life-saving heart procedures, including Coronary Artery Bypass Grafting (CABG), valve repairs and replacements, adult congenital heart defect surgeries, cardiac tumor removal, aortic surgeries, and other complex interventions. The department manages patients with coronary artery disease, valvular heart disease, congenital heart defects, and other critical heart conditions requiring surgical treatment.\n\nIn 2024, we completed over 300 open-heart surgeries — many for deserving patients who depend entirely on donor support.\n\nEvery day, patients come in facing serious heart conditions and thanks to expert care and advanced surgical techniques, many leave with renewed hope, healthier hearts and a second chance at life.",
    heads: [
      {
        name: "Prof. Dr. Hamid Hassan",
        qualifications: "Head of Department",
        photo: "/departments/cardiac-surgery/hamid-hassan.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Abrar Hussain",
        qualifications: "Assistant Professor",
        photo: "/departments/cardiac-surgery/abrar-hussain.jpg",
      },
      {
        name: "Dr. Asadullah",
        qualifications: "Registrar",
        photo: "/departments/cardiac-surgery/asadullah.jpg",
      },
      {
        name: "Prof. Dr. Hamid Hassan",
        qualifications: "Professor",
        photo: "/departments/cardiac-surgery/hamid-hassan.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "1,800+" },
      { label: "Surgeries & Procedures", value: "2,100+" },
    ],
    services: [
      "Mitral Valve Replacement (MVR)",
      "Mitral Valve Repair",
      "Closed Mitral Valvotomy (CMV)",
      "Open Mitral Valvotomy (OMV)",
      "Aortic Valve Replacement (AVR)",
      "Complete range of Aortic Procedures",
      "Double Valve Replacement (DVR)",
      "Surgical Atrial Septal Defect (ASD) Closure",
      "Excision of Cardiac Myxomas",
      "Adult Congenital Heart Surgeries",
      "Aneurysm Repair",
      "Tricuspid Valve Repair",
      "Coronary Artery Bypass Grafting (CABG)",
    ],
    facilities: [
      "Dedicated Operation Theatres",
      "Specialized Cardiac Surgery ICU",
      "Complete Pre- and Post-Operative Care",
    ],
    equipment: [
      "Heart-Lung Machines",
      "Intra-aortic Balloon Pumps",
      "Ventilators",
      "Cardiac Monitors",
      "Portable X-ray Machines",
      "Specialized Surgical Equipment",
    ],
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    icon: "Sparkles",
    short: "Comprehensive diagnostic and therapeutic care for skin, hair, and nail conditions.",
    description: "The Department of Dermatology at Gulab Devi Teaching Hospital, Lahore is a fully functional department providing comprehensive diagnostic and therapeutic services for patients with a wide range of dermatological and skin conditions. The department delivers quality care through a well-organized outpatient service, indoor facility, and dedicated procedure rooms in a safe and patient-friendly environment, managed by experienced dermatologists and skin specialists.\n\nEquipped with procedure rooms, a phototherapy unit, and laser treatment facilities, the department offers medical and minor surgical dermatology services, including skin biopsies, cyst and mole excisions, cryosurgery, chemical peels, phototherapy, laser treatments, electrocautery, and intralesional injections. The department manages common and complex skin conditions such as acne, eczema, psoriasis, skin infections, pigmentation disorders, hair loss, and allergic skin diseases.\n\nAlongside patient care, the department plays an active role in undergraduate and postgraduate medical education, providing structured learning through clinical rotations, lectures, journal clubs, and case discussions. The ward is supported by trained nurses, medical officers, postgraduate trainees, and house officers to ensure continuous and high-quality patient care.\n\nWith modern facilities and a strong academic environment, the Dermatology Department remains committed to delivering effective, safe, and advanced dermatological care, serving patients with a wide range of skin, hair, and nail disorders.",
    heads: [
      {
        name: "Prof. Dr. Tahir Kamal",
        qualifications: "Head of Department",
        photo: "/departments/dermatology/tahir-kamal.jpg",
      },
    ],
    consultants: [
      {
        name: "Prof. Dr. Tahir Kamal",
        qualifications: "Associate Professor",
        photo: "/departments/dermatology/tahir-kamal.jpg",
      },
      {
        name: "Dr. Muneeza Qamar",
        qualifications: "Senior Registrar",
        photo: "/departments/dermatology/muneeza-qamar.jpg",
      },
      {
        name: "Dr. Samar Rafique",
        qualifications: "Senior Registrar",
        photo: "/departments/dermatology/samar-rafique.jpg",
      },
    ],
    stats: [
      { label: "OPD Patients", value: "8,600+" },
      { label: "Surgeries & Procedures", value: "900+" },
    ],
    services: [
      "Electrocautery",
      "Electrofulguration",
      "Cryosurgery",
      "Chemical Peels",
      "Phototherapy",
      "PRP",
      "Laser Treatments",
      "Intralesional Injections",
      "Skin Biopsies",
      "Cyst Removal",
      "Ingrown Toenail Removal",
      "Mole Excision",
      "Skin Cancer Removal",
    ],
    facilities: [
      "Well-organized Outpatient Service",
      "Indoor Facility",
      "Dedicated Procedure Rooms",
      "Phototherapy Unit",
      "Laser Treatment Facility",
    ],
    equipment: [
      "Phototherapy Unit",
      "Laser Treatment Equipment",
      "Cryosurgery Equipment",
      "Electrocautery Equipment",
    ],
  },
  {
    slug: "endocrinology",
    name: "Endocrinology",
    icon: "Activity",
    short: "Specialized care for diabetes, thyroid, and hormone-related metabolic disorders.",
    description: "The department provides specialized care for a wide range of endocrine and metabolic disorders. Created to meet the growing need for expert endocrine and diabetes care in Pakistan, the department delivers high-quality, patient-centred services within a supportive and well-equipped clinical environment.\n\nWith a dedicated ten-bed facility and a team of trained endocrinologists and nursing staff, the department offers comprehensive management of diabetes mellitus (Type 1, Type 2, gestational diabetes, and MODY), thyroid and parathyroid disorders, pituitary and adrenal conditions, growth disorders, polycystic ovary syndrome, hirsutism, precocious puberty, and male and female infertility.\n\nIn addition to clinical services, the department actively supports research in diabetes and endocrine disorders and provides hands-on training for undergraduate students and postgraduate trainees. Through focused clinical services, modern facilities, and a strong commitment to education and research, the Department of Endocrinology and Metabolism continues to enhance diabetes and hormone care for patients.",
    heads: [
      {
        name: "Dr. Amna Riaz",
        qualifications: "Head of Department",
        photo: "/departments/endocrinology/amna-riaz.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Amna Riaz",
        qualifications: "Assistant Professor",
        photo: "/departments/endocrinology/amna-riaz.jpg",
      },
      {
        name: "Dr. Ammarah Sadiq",
        qualifications: "Senior Registrar",
        photo: "/departments/endocrinology/ammarah-sadiq.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "4,300+" },
      { label: "Procedures Performed", value: "280+" },
    ],
    services: [
      "Diabetes Mellitus Management",
      "Gestational Diabetes Mellitus Management",
      "MODY Management",
      "Obesity Management",
      "Thyroid Disorder Management",
      "Parathyroid Disorder Management",
      "Pituitary Disorder Management",
      "Growth Disorders (Short Stature)",
      "Adrenal Disorder Management",
      "Hirsutism / Polycystic Ovary Syndrome (PCOS) Management",
      "Precocious Puberty Management",
      "Infertility Evaluation and Management",
    ],
    facilities: [
      "Dedicated Ten-Bed Facility",
      "Trained Endocrinologists and Nursing Staff",
    ],
    equipment: [],
  },
  {
    slug: "ent",
    name: "ENT",
    icon: "Ear",
    short: "Comprehensive ear, nose, throat and head & neck care with 24/7 emergency services.",
    description: "The ENT Department at Gulab Devi Teaching Hospital Lahore is a fully functional department providing comprehensive ear, nose, throat and head & neck care. Designed to serve a high patient load, the department now operates with its own independent operation theatre, OPD, and 24/7 emergency services.\n\nThe outpatient clinics manage several patients daily, offering timely evaluation and treatment for a wide range of ENT conditions. A well-equipped surgical setup allows the department to perform both minor and major ENT procedures, including advanced sinus and ear surgeries, ensuring patients receive complete care under one roof.\n\nWith dedicated male and female inpatient facilities, modern diagnostic support and round-the-clock emergency coverage, the department plays a vital role in managing routine and urgent ENT cases.\n\nAs part of Gulab Devi Teaching Hospital and Al-Aleem Medical College, the department also contributes to medical education through its MCPS postgraduate training program, supporting the development of skilled ENT specialists. Through steady growth, reliable services, and a strong focus on patient care, the ENT Department continues to strengthen access to quality ear, nose and throat care and treatment.",
    heads: [
      {
        name: "Prof. Dr. Javed Iqbal",
        qualifications: "Head of Department",
        photo: "/departments/ent/javed-iqbal.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Bilal Ahmed",
        qualifications: "Registrar",
        photo: "/departments/ent/bilal-ahmed.jpg",
      },
      {
        name: "Prof. Dr. Javed Iqbal",
        qualifications: "Professor",
        photo: "/departments/ent/javed-iqbal.jpg",
      },
      {
        name: "Dr. Malik Masood",
        qualifications: "Associate Professor",
        photo: "/departments/ent/malik-masood.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "16,700+" },
      { label: "Emergency Treatments", value: "700+" },
      { label: "Surgeries & Procedures", value: "1,900+" },
    ],
    services: [
      "Septoplasty",
      "SMD",
      "Tonsillectomy",
      "Adenoidectomy",
      "Cortical, Modified and Radical Mastoidectomy",
      "DL & Biopsy",
      "Aural Polypectomy",
      "Intranasal Polypectomy",
      "Caldwell Luc Operation",
      "Lymph Node Excision",
    ],
    facilities: [
      "Independent Operation Theatre",
      "24/7 Emergency Services",
      "Dedicated Male and Female Inpatient Facilities",
      "Modern Diagnostic Support",
    ],
    equipment: [],
  },
  {
    slug: "gastroenterology",
    name: "Gastroenterology",
    icon: "Stethoscope",
    short: "Advanced diagnosis and treatment for diseases of the digestive system, liver, pancreas, and biliary tract.",
    description: "The Gastroenterology Department at Gulab Devi Teaching Hospital, established in February 2022, provides advanced diagnosis and treatment for diseases of the digestive system, liver, pancreas, and biliary tract. The department combines modern technology with the expertise of experienced gastroenterologists and endoscopists to deliver accurate diagnoses and effective treatments in a patient-focused environment.\n\nThe department provides comprehensive diagnostic and therapeutic procedures, including upper GI endoscopy, colonoscopy, liver disease assessment, and minimally invasive interventions for complex gastrointestinal and hepatobiliary disorders. Patients with conditions such as acid reflux, peptic ulcers, hepatitis, fatty liver disease, gastrointestinal bleeding, inflammatory bowel disease, pancreatic disorders, and colorectal diseases receive individualized treatment plans in a patient-centered environment. Care is delivered through close multidisciplinary collaboration with oncology, interventional radiology, and surgical teams, ensuring well-coordinated and safe treatment for patients with challenging conditions.\n\nThe Gastroenterology Department also remains actively engaged in medical education, clinical training, and research, while continuously adopting advanced endoscopic techniques to improve patient outcomes and procedural safety. With modern facilities, skilled specialists, and a commitment to compassionate healthcare, the Gastroenterology Department at Gulab Devi Teaching Hospital continues to serve patients from Lahore and across Pakistan with high-quality digestive and liver care.",
    heads: [
      {
        name: "Dr. Muhammad Bilal Nasir",
        qualifications: "Head of Department",
        photo: "/departments/gastroenterology/muhammad-bilal-nasir.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Haroon",
        qualifications: "Registrar",
        photo: "/departments/gastroenterology/haroon.jpg",
      },
      {
        name: "Dr. M. Bilal Nasir",
        qualifications: "Assistant Professor",
        photo: "/departments/gastroenterology/muhammad-bilal-nasir.jpg",
      },
      {
        name: "Dr. Abdul Qadir",
        qualifications: "Senior Registrar",
        photo: "/departments/gastroenterology/abdul-qadir.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "7,800+" },
      { label: "Procedures", value: "260+" },
    ],
    services: [
      "Gastroscopy",
      "Colonoscopy",
      "Endoscopic Ultrasound (EUS)",
      "Capsule Endoscopy",
      "Liver Biopsy",
      "Treatment of Hepatitis B & C",
      "Cirrhosis Management",
      "MAFLD (Fatty Liver) Treatment",
      "ERCP",
      "Variceal Banding",
      "Polypectomy",
      "Endoscopic Management of Bleeding Ulcers",
      "Argon Plasma Coagulation (APC)",
      "Stricture Dilatation (Balloon/Bougie)",
      "Endoscopic Mucosal Resection (EMR)",
      "Endoscopic Submucosal Dissection (ESD)",
      "POEM (Per Oral Endoscopic Myotomy)",
      "ERCP for Biliary Strictures/Stones",
      "ERP for Pancreatic Duct Strictures/Stones",
      "EUS-guided Cystogastrostomy",
    ],
    facilities: [
      "Multidisciplinary Collaboration with Oncology, Interventional Radiology, and Surgery",
    ],
    equipment: [],
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    icon: "Scissors",
    short: "Open and advanced laparoscopic procedures, tumor surgeries, and 24/7 emergency and trauma care.",
    description: "The General Surgery Department at Gulab Devi Teaching Hospital Lahore is a fully equipped surgical unit, delivering a wide range of open and advanced laparoscopic procedures, tumor surgeries, and 24/7 emergency and trauma care. The department is staffed by experienced general surgeons providing safe and effective surgical care.\n\nThe department runs a busy OPD six days a week, supported by two fully functional operation theatres, a Surgical ICU, and modern laparoscopic units, enabling both routine and complex surgeries under one roof. The department manages a wide range of surgical conditions including hernia, gallstones, appendicitis, gastrointestinal disorders, soft tissue infections, and abdominal emergencies. In 2025, a dedicated Breast Clinic was established to provide focused and dignified care for women with breast-related conditions, operating six days a week.\n\nIn addition to patient care, the department serves as an accredited postgraduate training center, collaborating with CPSP and UHS Lahore, to develop skilled surgeons while maintaining high clinical standards. Through continuous service expansion, round-the-clock emergency readiness and structured training, the General Surgery Department remains a cornerstone of general and emergency surgical services.",
    heads: [
      {
        name: "Prof. Dr. Masood Rashid",
        qualifications: "Head of Department",
        photo: "/departments/general-surgery/masood-rashid.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Maliha Javaid",
        qualifications: "Assistant Professor",
        photo: "/departments/general-surgery/maliha-javaid.jpg",
      },
      {
        name: "Dr. Salman Majeed",
        qualifications: "Assistant Professor",
        photo: "/departments/general-surgery/salman-majeed.jpg",
      },
      {
        name: "Prof. Dr. Usman Ali Rahman",
        qualifications: "Professor",
        photo: "/departments/general-surgery/usman-ali-rahman.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "8,800+" },
      { label: "Emergency Treatments", value: "2,400+" },
      { label: "Surgeries & Procedures", value: "12,900+" },
    ],
    services: [
      "Open Surgical Procedures",
      "Advanced Laparoscopic Surgeries",
      "Tumor Surgeries",
      "Trauma and Emergency Surgeries",
      "Breast Clinic",
      "Emergency Services 24/7",
    ],
    facilities: [
      "Two Fully Functional Operation Theatres",
      "Surgical ICU",
      "Modern Laparoscopic Units",
      "Dedicated Breast Clinic (established 2025)",
      "OPD Six Days a Week",
    ],
    equipment: [],
  },
  {
    slug: "medicine",
    name: "General Medicine",
    icon: "Stethoscope",
    short: "Comprehensive adult medical care with 24/7 indoor and emergency services.",
    description: "The Department of Medicine at Gulab Devi Teaching Hospital Lahore is a core clinical and academic department providing comprehensive adult medical care. The department plays a vital role in managing a wide spectrum of acute and chronic medical conditions while supporting the hospital's mission of accessible and compassionate healthcare.\n\nThe department operates through two medical units, each led by a professor. It provides 24/7 indoor and emergency medical services, along with outpatient care six days a week, ensuring timely and continuous treatment for patients. Faculty members also offer expert medical consultations across multiple specialties, with clinical services organized under Medical Unit I and Medical Unit II.\n\nRecognized for postgraduate training, the department offers FCPS Medicine and IMM General Medicine programs accredited by the College of Physicians and Surgeons Pakistan (CPSP) and affiliated with the University of Health Sciences (UHS).\n\nWith its strong clinical services, academic leadership and commitment to community care, the Department of Medicine continues to be a trusted center for adult medical treatment.",
    heads: [
      {
        name: "Prof. Dr. Mahmood Nasir Malik",
        qualifications: "Head of Department (Unit-1)",
        photo: "/departments/medicine/mahmood-nasir-malik.jpg",
      },
      {
        name: "Prof. Dr. Wasim Shafqat",
        qualifications: "Head of Department (Unit-2)",
        photo: "/departments/medicine/wasim-shafqat.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Abdul Raouf",
        qualifications: "Assistant Professor",
        photo: "/departments/medicine/abdul-raouf.jpg",
      },
      {
        name: "Dr. Wafa Qaiser",
        qualifications: "Assistant Professor",
        photo: "/departments/medicine/wafa-qaiser.jpg",
      },
      {
        name: "Dr. Muhammad Imran",
        qualifications: "Assistant Professor",
        photo: "/departments/medicine/muhammad-imran.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "21,000+" },
      { label: "Emergency Treatments", value: "15,000+" },
      { label: "Procedures Performed", value: "9,400+" },
    ],
    services: [],
    facilities: [
      "24/7 Indoor and Emergency Medical Services",
      "Outpatient Care Six Days a Week",
      "Two Medical Units (Unit-1 and Unit-2)",
      "FCPS Medicine and IMM General Medicine Postgraduate Training Programs",
    ],
    equipment: [],
  },
  {
    slug: "obstetrics-gynaecology",
    name: "Obstetrics & Gynaecology",
    icon: "Baby",
    short: "Expert care for pregnancy, childbirth, and women's reproductive health.",
    description: "The Department of Obstetrics and Gynaecology at Gulab Devi Teaching Hospital Lahore provides expert care for pregnancy, childbirth, and women's reproductive health — from routine antenatal checkups to high-risk obstetric cases and complex gynaecological conditions.\n\nHoused in a modern three-storey building with 80 beds, the department provides comprehensive maternity and gynaecological care in a structured, patient-centered environment. A 24/7 labour ward and maternity operation theatre are located on the ground floor, while two dedicated gynaecology operation theatres handle elective procedures. Emergency obstetric services remain active round the clock, supported by senior consultants, anesthetists, pediatricians, radiologists and blood bank services.\n\nServices include normal delivery, C-section, management of high-risk pregnancies, PCOS, uterine fibroids, menstrual disorders, and gynaecological surgeries.\n\nThe department received MCPS recognition in 2019 and FCPS recognition in 2020 and now functions as a dedicated FCPS training unit alongside active undergraduate and allied health teaching.\n\nWith 24/7 specialist care, modern facilities, and a strong teaching environment, the department is one of the most trusted gynaecology departments in Lahore for safe delivery, high-risk pregnancy management, and women's reproductive health care.",
    heads: [
      {
        name: "Prof. Dr. Muhammad Tayyab",
        qualifications: "Head of Department",
        photo: "/departments/obstetrics-gynaecology/muhammad-tayyab.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Amna Rafiq",
        qualifications: "Assistant Professor",
        photo: "/departments/obstetrics-gynaecology/amna-rafiq.jpg",
      },
      {
        name: "Dr. Faiza Nisar",
        qualifications: "Assistant Professor",
        photo: "/departments/obstetrics-gynaecology/faiza-nisar.jpg",
      },
      {
        name: "Dr. Mehreen Nisar",
        qualifications: "Assistant Professor",
        photo: "/departments/obstetrics-gynaecology/mehreen-nisar.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "18,900+" },
      { label: "Surgeries & Procedures", value: "11,200+" },
      { label: "Emergency Treatments", value: "2,800+" },
    ],
    services: [
      "Normal Delivery",
      "Caesarean Section (C-Section)",
      "High-Risk Pregnancy Management",
      "PCOS Management",
      "Uterine Fibroids Treatment",
      "Menstrual Disorders Management",
      "Gynaecological Surgeries",
    ],
    facilities: [
      "Modern Three-Storey Building with 80 Beds",
      "24/7 Labour Ward and Maternity Operation Theatre",
      "Two Dedicated Gynaecology Operation Theatres",
      "24/7 Emergency Obstetric Services",
      "FCPS Training Unit",
    ],
    equipment: [],
  },
  {
    slug: "medical-icu",
    name: "Medical ICU",
    icon: "HeartPulse",
    short: "Advanced, round-the-clock critical care in a 32-bed Medical ICU.",
    description: "The Medical Intensive Care Unit (ICU) at Gulab Devi Teaching Hospital Lahore functions as a 32-bed Medical ICU, providing advanced, round-the-clock care for critically ill patients.\n\nIn addition to comprehensive intensive care support, the ICU offers emergency hemodialysis services and has adopted bedside ultrasound-guided procedures, including biopsies, enhancing patient safety and timely decision-making.\n\nEquipped with modern monitoring systems, life-support technology and bedside diagnostic capabilities, the ICU is designed to manage complex medical emergencies with precision and efficiency. A dedicated team of trained physicians, nurses and support staff ensures continuous monitoring, rapid intervention and compassionate care at all times.\n\nWith decades of experience and a commitment to critical care excellence, the Medical ICU remains a vital component of Gulab Devi Teaching Hospital's mission to provide reliable, compassionate and life-saving treatment to patients.",
    heads: [
      {
        name: "Prof. Dr. Asifa Karamat",
        qualifications: "Head of Department",
        photo: "/departments/medical-icu/asifa-karamat.jpg",
      },
    ],
    consultants: [
      {
        name: "Prof. Dr. Asifa Karamat",
        qualifications: "Associate Professor",
        photo: "/departments/medical-icu/asifa-karamat.jpg",
      },
      {
        name: "Dr. Nabeel",
        qualifications: "Senior Registrar",
        photo: "/departments/medical-icu/nabeel.jpg",
      },
      {
        name: "Dr. Nida",
        qualifications: "Registrar",
        photo: "/departments/medical-icu/nida.jpg",
      },
    ],
    stats: [
      { label: "Procedures Performed", value: "4,800+" },
    ],
    services: [
      "Inpatient Medical Care",
      "Step-Down Care Services",
      "Oxygen Therapy",
      "Suction Services",
      "Continuous Vital Signs Monitoring",
      "Invasive Monitoring",
      "Invasive Ventilation",
      "Non-Invasive Ventilation",
      "Dialysis Facility",
      "Portable X-Ray",
      "Portable Ultrasound",
      "Portable Echocardiography",
      "Bronchoscopy",
    ],
    facilities: [
      "32-Bed Medical ICU",
      "Emergency Hemodialysis Services",
      "Bedside Ultrasound-Guided Procedures",
    ],
    equipment: [
      "Modern Monitoring Systems",
      "Life-Support Technology",
      "Bedside Diagnostic Equipment",
      "Portable X-Ray",
      "Portable Ultrasound",
      "Portable Echocardiography",
    ],
  },
  {
    slug: "nephrology",
    name: "Nephrology",
    icon: "Droplet",
    short: "Dependable, compassionate care for kidney disease, dialysis, and renal disease management.",
    description: "Established in 2018, the Nephrology Department and Dialysis Unit is dedicated to providing dependable and compassionate care for patients with kidney diseases. The department focuses on early diagnosis, continuous management and life-sustaining treatment for individuals with acute and chronic kidney conditions.\n\nWith a 15-bed inpatient nephrology ward and a modern dialysis unit operating in morning and evening shifts, the department supports patients with chronic kidney disease and end-stage renal disease through safe, well-monitored hemodialysis services. Emergency dialysis is available 24/7, ensuring timely care for critically ill patients.\n\nSpecial attention is given to patient safety and infection control, including separate dialysis cabins for Hepatitis B and C positive patients. Supported by trained nephrology staff and appropriate procedural facilities, the department plays a vital role in improving quality of life for kidney patients who often require long-term, ongoing care.\n\nIn line with Gulab Devi Teaching Hospital's mission, the Nephrology Department remains a reliable centre for kidney care, dialysis and renal disease management in Lahore, delivering treatment with dignity, continuity and compassion.",
    heads: [
      {
        name: "Prof. Dr. Hafiz Ijaz Ahmed",
        qualifications: "Head of Department",
        photo: "/departments/nephrology/hafiz-ijaz-ahmed.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Usman Haider",
        qualifications: "Medical Officer",
        photo: "/departments/nephrology/usman-haider.jpg",
      },
      {
        name: "Prof. Dr. Hafiz Ijaz Ahmed",
        qualifications: "Professor",
        photo: "/departments/nephrology/hafiz-ijaz-ahmed.jpg",
      },
      {
        name: "Dr. Sahrish Jehangir",
        qualifications: "Medical Officer",
        photo: "/departments/nephrology/sahrish-jehangir.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "2,300+" },
      { label: "Emergency Treatments", value: "700+" },
      { label: "Surgeries & Procedures", value: "450+" },
      { label: "Dialysis", value: "2,660+" },
    ],
    services: [
      "Chronic Kidney Disease (CKD) Management",
      "Acute Kidney Injury (AKI) Treatment",
      "Hypertension Management",
      "Electrolyte Imbalance Correction",
      "Glomerulonephritis Treatment",
      "Nephrotic Syndrome Management",
      "Renal Biopsy Preparation",
      "Nutrition Counselling for Kidney Disease",
      "Urine Analysis and Proteinuria Evaluation",
      "Hemodialysis",
      "Isofiltration",
      "Double Lumen Dialysis Catheter Placement and Management",
      "Water Treatment and Quality Control for Dialysis",
      "Pre-Arteriovenous Access Evaluation (Ultrasound, Physical Exam)",
      "AV-Fistula Creation (Surgical Referral)",
      "Catheter Placement",
      "Access Surveillance (Flow Monitoring, Ultrasound)",
      "Infection Management",
    ],
    facilities: [
      "15-Bed Inpatient Nephrology Ward",
      "Modern Dialysis Unit (Morning and Evening Shifts)",
      "24/7 Emergency Dialysis",
      "Separate Dialysis Cabins for Hepatitis B and C Positive Patients",
    ],
    equipment: [],
  },
  {
    slug: "neurosurgery",
    name: "Neurosurgery",
    icon: "Brain",
    short: "Comprehensive surgical care for brain and spine conditions, with 24/7 emergency coverage.",
    description: "The Department of Neurosurgery at Gulab Devi Teaching Hospital, Lahore is a fully functional surgical unit providing comprehensive care for patients with brain and spine conditions. Designed to deliver safe, timely, and specialized neurosurgical services, the department supports both elective and emergency cases within a structured clinical environment.\n\nThe department operates a 16-bed neurosurgery ward, along with outpatient services and 24/7 emergency coverage, ensuring continuous care for patients requiring urgent neurosurgical intervention. Equipped to manage a wide range of brain and spinal surgeries, the unit provides treatment for complex neurological conditions with a strong focus on patient safety and recovery.\n\nIn addition to clinical services, the department maintains an active academic role, offering hands-on training and mentorship for postgraduate residents and medical students.\n\nWith modern facilities, emergency readiness, and a commitment to both patient care and training, the Neurosurgery Department continues to serve patients from Lahore and surrounding regions with expertise and compassion.",
    heads: [
      {
        name: "Dr. Sohaib Ashraf",
        qualifications: "Head of Department",
        photo: "/departments/neurosurgery/sohaib-ashraf.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. M. Rameez",
        qualifications: "Medical Officer",
        photo: "/departments/neurosurgery/m-rameez.jpg",
      },
      {
        name: "Dr. M. Ahsan",
        qualifications: "Medical Officer",
        photo: "/departments/neurosurgery/m-ahsan.jpg",
      },
      {
        name: "Dr. Arooj Abbas",
        qualifications: "Medical Officer",
        photo: "/departments/neurosurgery/arooj-abbas.jpg",
      },
    ],
    services: [
      "24/7 Neurosurgical Emergency Services",
      "Brain Surgeries (Craniotomy, Craniectomy, Cranioplasty)",
      "Spine Surgeries (Laminectomy, Discectomy, Transpedicular (TP) Fixation)",
      "Anterior Cervical Discectomy and Fusion (ACDF)",
      "Ventriculoperitoneal (VP) Shunt Surgery",
      "Emergency Neurosurgical Resuscitation and Stabilization",
      "Pre-Operative and Post-Operative Neurosurgical Management",
    ],
    facilities: [
      "16-Bed Neurosurgery Ward",
      "24/7 Emergency Coverage",
      "Outpatient Services",
    ],
    equipment: [],
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    icon: "Eye",
    short: "Reliable and affordable eye care, with 24/7 emergency services and modern surgical and laser facilities.",
    description: "The Department of Ophthalmology at Gulab Devi Teaching Hospital Lahore, established in 2017, provides reliable and affordable eye care for patients from all walks of life. The department offers a safe and accessible setting where common and complex eye conditions are diagnosed and treated with care and accuracy.\n\nOutpatient services run six days a week, supported by 24/7 emergency eye care for injuries and sudden vision problems. Patients who need admission are managed in dedicated indoor facilities with separate male and female wards, along with isolation and resuscitation support when required.\n\nEquipped with modern diagnostic tools, laser treatment facilities, and well-established operation theatres, the department plays an important role in preventing avoidable blindness and restoring vision. With a strong focus on compassionate care and community service, the Ophthalmology Department continues to serve as a trusted eye care center for patients across Lahore.",
    heads: [
      {
        name: "Prof. Dr. Muhammad Arshad",
        qualifications: "Head of Department",
        photo: "/departments/ophthalmology/muhammad-arshad.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Tahir Ghaffar",
        qualifications: "Assistant Professor",
        photo: "/departments/ophthalmology/tahir-ghaffar.jpg",
      },
      {
        name: "Dr. Arslan Ahmed",
        qualifications: "Assistant Professor",
        photo: "/departments/ophthalmology/arslan-ahmed.jpg",
      },
      {
        name: "Prof. Dr. Muhammad Arshad",
        qualifications: "Professor",
        photo: "/departments/ophthalmology/muhammad-arshad.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "8,600+" },
      { label: "Surgeries & Procedures", value: "900+" },
    ],
    services: [
      "Cataract Surgery",
      "Squint Correction",
      "Ptosis Repair",
      "Dacryocystorhinostomy (DCR)",
      "Trabeculectomy",
      "Pterygium Excision",
      "Emergency Tear Repair (Lids/Cornea)",
      "Entropion/Ectropion Correction",
      "Chalazion I/C",
      "Intravitreal Injections",
      "Probing and Syringing",
      "Optical Coherence Tomography (OCT)",
      "Automated Visual Field Testing",
      "A/B Scan Ultrasound",
      "Hess Chart",
      "Bjerrum Screen",
      "Argon Laser",
      "YAG Laser (Capsulotomy / Iridotomy)",
      "Neonatal ROP Screening",
    ],
    facilities: [
      "Dedicated Indoor Facilities with Separate Male and Female Wards",
      "Isolation and Resuscitation Support",
      "24/7 Emergency Eye Care",
      "Well-Established Operation Theatres",
    ],
    equipment: [
      "Optical Coherence Tomography (OCT)",
      "A/B Scan Ultrasound",
      "Argon Laser",
      "YAG Laser",
    ],
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    icon: "Bone",
    short: "Comprehensive care for bone, joint, and trauma-related conditions, including joint replacement and sports injury surgery.",
    description: "The Trauma and Orthopaedic Department provides comprehensive care for bone, joint and trauma-related conditions. In a short period, the department has developed into a growing center for adult and paediatric trauma, elective orthopaedic surgery, sports injuries and joint replacement services, managed by experienced orthopaedic surgeons.\n\nSpecialized services include the management of sports injuries, such as arthroscopic ACL reconstruction of the knee and rotator cuff repair of the shoulder, along with arthroplasty and reconstructive procedures. Care is delivered under the supervision of foreign-qualified faculty, ensuring adherence to safe and modern surgical practices. The department also offers arthroscopic treatment for wrist and ankle joint conditions, expanding access to advanced orthopaedic care. The department is supported by two fully equipped operation theatres, with outpatient services available on designated days.\n\nWith a focus on safe surgery, continuous improvement and expanding services, the Trauma and Orthopaedic Department remains committed to delivering reliable, compassionate and effective orthopaedic care to the community.",
    heads: [
      {
        name: "Prof. Dr. Kazi M. Saeed",
        qualifications: "Head of Department",
        photo: "/departments/orthopaedics/kazi-m-saeed.jpg",
      },
    ],
    consultants: [
      {
        name: "Prof. Dr. Kazi M. Saeed",
        qualifications: "Professor",
        photo: "/departments/orthopaedics/kazi-m-saeed.jpg",
      },
      {
        name: "Dr. Muhammad Shakeel",
        qualifications: "Assistant Professor",
        photo: "/departments/orthopaedics/muhammad-shakeel.jpg",
      },
      {
        name: "Dr. Muhammad Adeel Abbas",
        qualifications: "Assistant Professor",
        photo: "/departments/orthopaedics/muhammad-adeel-abbas.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "6,600+" },
      { label: "Emergency Treatments", value: "112+" },
      { label: "Surgeries & Procedures", value: "1,260+" },
    ],
    services: [
      "Trauma & Emergency Orthopedics",
      "Adult Orthopedics",
      "Joint Replacement Surgery",
      "Pediatric Orthopedics",
      "OPD Procedures",
      "Other Minor Orthopedic Procedures",
    ],
    facilities: [
      "Two Fully Equipped Operation Theatres",
      "Foreign-Qualified Faculty Supervision",
    ],
    equipment: [],
  },
  {
    slug: "paediatrics",
    name: "Paediatrics",
    icon: "Baby",
    short: "Safe, compassionate care for infants, children, and adolescents, including intensive care and neonatology.",
    description: "The Department of Paediatrics established in 2017, provides safe, compassionate and reliable healthcare for infants, children and adolescents. The department is structured to meet both routine and critical paediatric needs, offering comprehensive care in a supportive and child-focused environment.\n\nThe department includes a 47-bed Paediatric Ward, a 4-bed Paediatric Intensive Care Unit (PICU) and a 17-bed Neonatology Unit. They are equipped to manage acute illnesses, paediatric emergencies and critically ill or premature newborns. These units are supported by modern monitoring systems, oxygen support, ventilators, CPAP facilities, incubators, radiant warmers and phototherapy units to ensure timely and effective treatment.\n\nA busy Paediatric OPD serving nearly 100 children daily, along with a fully functional vaccination center, strengthens preventive care and early disease management for the community. With continuous supervision from senior consultants and a strong focus on clinical training and emergency preparedness, our department continues to grow as a trusted center for child and newborn care in Lahore and surrounding regions.",
    heads: [
      {
        name: "Prof. Dr. Aneela Shaheen",
        qualifications: "Head of Department",
        photo: "/departments/paediatrics/aneela-shaheen.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Shahid Mahmood",
        qualifications: "Assistant Professor",
        photo: "/departments/paediatrics/shahid-mahmood.jpg",
      },
      {
        name: "Dr. Maria Javed",
        qualifications: "Senior Registrar",
        photo: "/departments/paediatrics/maria-javed.jpg",
      },
      {
        name: "Prof. Dr. Muhammad Naeem",
        qualifications: "Professor",
        photo: "/departments/paediatrics/muhammad-naeem.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "21,000+" },
      { label: "Emergency Treatments", value: "5,200+" },
      { label: "Surgeries & Procedures", value: "3,000+" },
    ],
    services: [
      "Inpatient Pediatric Care",
      "Pediatric Intensive Care Services",
      "Well Baby Care",
      "Care of Sick Neonates",
      "Ventilator Support for Neonates",
      "CPAP Support for Neonates",
      "Newborn Feeding Guidance and Baby Handling Education for Attendants",
      "Lumbar Puncture",
      "Pleural Tap",
      "Surfactant Administration",
      "Gastric Aspirate Procedures",
      "Exchange Transfusion Therapy",
      "Daily Consultant-Led Pediatric Care and Clinical Management",
      "Ongoing Clinical Review and Care Planning to Improve Patient Outcomes",
    ],
    facilities: [
      "47-Bed Paediatric Ward",
      "4-Bed Paediatric Intensive Care Unit (PICU)",
      "17-Bed Neonatology Unit",
      "Fully Functional Vaccination Center",
    ],
    equipment: [
      "Modern Monitoring Systems",
      "Oxygen Support",
      "Ventilators",
      "CPAP Facilities",
      "Incubators",
      "Radiant Warmers",
      "Phototherapy Units",
    ],
  },
  {
    slug: "psychiatry",
    name: "Psychiatry",
    icon: "Brain",
    short: "Comprehensive psychiatric care and treatment at the Khalida Rashid Institute of Mental Health.",
    description: "The Khalida Rashid Institute of Mental Health at Gulab Devi Teaching Hospital Lahore is a dedicated psychiatric care facility providing comprehensive treatment for patients experiencing severe and complex mental health conditions. Designed to offer dignity, safety and compassionate care, the institute supports individuals during critical phases of mental illness through specialized psychiatric and psychological services.\n\nThe institute delivers 24/7 psychiatric care through a multidisciplinary team of psychiatrists, clinical psychologists, therapists and trained nursing staff. A wide range of conditions including depression, anxiety disorders, bipolar disorder, schizophrenia, psychotic disorders, post traumatic stress disorders (PTSD), psychosis, OCD and personality disorders are managed through individualized treatment plans focused on stabilization, recovery and long-term well-being. A daily psychiatric OPD ensures timely psychiatric consultations, counseling, psychotherapy, and follow-up care for both acute and chronic mental health conditions.\n\nAs part of the Gulab Devi Educational Complex, the institute also serves as an important teaching and training center for psychiatry in Lahore. It supports undergraduate and postgraduate education through bedside teaching, dedicated classroom and a well-equipped library. By combining clinical care, psychological support, academic training and a healing-focused environment, the institute continues to strengthen mental health services in Lahore and beyond, helping patients improve their quality of life and emotional well-being.",
    heads: [
      {
        name: "Dr. Fur Haider",
        qualifications: "Head of Department",
        photo: "/departments/psychiatry/fur-haider.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Fur Haider",
        qualifications: "Assistant Professor",
        photo: "/departments/psychiatry/fur-haider.jpg",
      },
      {
        name: "Dr. Lojain",
        qualifications: "Senior Registrar",
        photo: "/departments/psychiatry/lojain.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "4,000+" },
      { label: "Procedures Performed", value: "200+" },
    ],
    services: [
      "Psychiatric Consultation and Diagnosis",
      "Depression Management",
      "Anxiety Disorders Treatment",
      "Bipolar Disorder Management",
      "Schizophrenia Treatment",
      "Psychotic Disorders Management",
      "PTSD Treatment",
      "OCD Treatment",
      "Personality Disorders Management",
      "Individual and Group Psychotherapy",
      "Counseling",
      "Follow-Up Care for Chronic Mental Health Conditions",
    ],
    facilities: [
      "24/7 Psychiatric Care",
      "Multidisciplinary Team (Psychiatrists, Clinical Psychologists, Therapists, Nursing Staff)",
      "Daily Psychiatric OPD",
      "Teaching Classroom and Library",
    ],
    equipment: [],
  },
  {
    slug: "pulmonology",
    name: "Pulmonology",
    icon: "Wind",
    short: "Advanced diagnostic, therapeutic, and interventional respiratory care, including TB treatment and interventional pulmonology.",
    description: "The Department of Pulmonology at Gulab Devi Teaching Hospital, Lahore is one of the most comprehensive and high-volume respiratory care centers in the region, providing advanced diagnostic, therapeutic, and interventional services for patients with pulmonary diseases.\n\nThe department, staffed by experienced pulmonologists and respiratory specialists dedicated to the management of complex breathing disorders, delivers complete care for a wide range of chest and lung conditions, including tuberculosis, drug-resistant TB, chronic respiratory diseases, lung infections, and respiratory failure. Patients presenting with symptoms such as shortness of breath, chronic cough, wheezing, and chest discomfort are evaluated and managed through a dedicated pulmonology OPD, which serves a large number of patients every day, supported by isolation facilities for MDR-TB, high-dependency care, medical ICU support, and non-invasive ventilatory services for critically ill patients.\n\nThe department functions through three pulmonology units and an interventional pulmonology unit, each headed by a senior pulmonologist.\n\nAdvanced diagnostic and procedural services include bronchoscopy, thoracoscopy, pleural procedures, chest ultrasound, spirometry, and close coordination with intensive care services. The department also runs TB DOTS and MDR clinics in collaboration with the National TB Program (NTP), ensuring standardized and accessible TB care.\n\nTo further strengthen specialized services, Interventional Pulmonology, established in November 2023, is fully integrated within the department. These services include EBUS-guided biopsies, pleuroscopy, tumor debulking, tracheal dilatation, airway stenting, and other advanced bronchoscopic interventions.\n\nWith multiple specialized units working under one integrated department, the Pulmonology Department at Gulab Devi Teaching Hospital continues to be a trusted destination for advanced, affordable, and life-saving respiratory care.",
    heads: [
      {
        name: "Dr. Faisal Hassan Zahid",
        qualifications: "Head of Department (Unit-1)",
        photo: "/departments/pulmonology/faisal-hassan-zahid.jpg",
      },
      {
        name: "Prof. Dr. Zaheer Akhtar",
        qualifications: "Head of Department (Unit-2)",
        photo: "/departments/pulmonology/zaheer-akhtar.jpg",
      },
      {
        name: "Dr. M. Saqib Musharaf",
        qualifications: "Head of Department (Unit-3)",
        photo: "/departments/pulmonology/m-saqib-musharaf.jpg",
      },
      {
        name: "Prof. Dr. Kamran Khalid",
        qualifications: "Head of Interventional Pulmonology",
        photo: "/departments/pulmonology/kamran-khalid.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Faisal Hassan Zahid",
        qualifications: "Assistant Professor",
        photo: "/departments/pulmonology/faisal-hassan-zahid.jpg",
      },
      {
        name: "Prof. Dr. Zaheer Akhtar",
        qualifications: "Professor",
        photo: "/departments/pulmonology/zaheer-akhtar.jpg",
      },
      {
        name: "Dr. Abdul Rehman",
        qualifications: "Senior Registrar",
        photo: "/departments/pulmonology/abdul-rehman.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "221,000+" },
      { label: "Emergency Treatments", value: "24,000+" },
      { label: "Pulmonary Function Tests", value: "5,800+" },
      { label: "Fiber Optic Bronchoscopies", value: "1,600+" },
      { label: "Procedures Performed", value: "16,500+" },
    ],
    services: [
      "Bronchoscopy",
      "Thoracoscopy",
      "Pleural Procedures",
      "Chest Ultrasound",
      "Spirometry",
      "TB DOTS and MDR Clinics",
      "EBUS-Guided Biopsies",
      "Pleuroscopy",
      "Tumor Debulking",
      "Tracheal Dilatation",
      "Airway Stenting",
      "Advanced Bronchoscopic Interventions",
    ],
    facilities: [
      "Three Pulmonology Units and an Interventional Pulmonology Unit",
      "Isolation Facilities for MDR-TB",
      "High-Dependency Care",
      "Medical ICU Support",
      "Non-Invasive Ventilatory Services",
      "Interventional Pulmonology Unit (established November 2023)",
    ],
    equipment: [],
  },
  {
    slug: "radiology",
    name: "Radiology",
    icon: "Scan",
    short: "Advanced imaging and diagnostic services, including digital X-ray, ultrasound, CT, mammography, and interventional radiology.",
    description: "The Department of Radiology provides advanced imaging and diagnostic services to support accurate and timely patient care. Equipped with modern technology, the department offers digital X-rays, ultrasound (including Doppler and transvaginal scans), mammography, and multi-slice CT scanning for comprehensive evaluation of a wide range of medical conditions.\n\nOur interventional radiology services include ultrasound- and CT-guided procedures, such as FNAC, tru-cut biopsies, abscess drainage, and pigtail catheterization, enabling minimally invasive treatment and faster recovery.\n\nAs a recognized training center affiliated with the College of Physicians and Surgeons Pakistan (CPSP), the Radiology Department provides postgraduate education for FCPS and MCPS residents, combining patient care with hands-on learning.\n\nWith skilled staff, cutting-edge equipment, and a focus on precision and compassionate care, the Radiology Department ensures patients across Lahore and surrounding regions have access to safe, reliable, and high-quality diagnostic and interventional services.",
    heads: [
      {
        name: "Prof. Dr. Aamer Nadeem",
        qualifications: "Head of Department",
        photo: "/departments/radiology/aamer-nadeem.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Hamza Ashraf",
        qualifications: "Assistant Professor",
        photo: "/departments/radiology/hamza-ashraf.jpg",
      },
      {
        name: "Prof. Dr. Aamer Nadeem",
        qualifications: "Professor",
        photo: "/departments/radiology/aamer-nadeem.jpg",
      },
      {
        name: "Dr. Azqa Zafar",
        qualifications: "Assistant Professor",
        photo: "/departments/radiology/azqa-zafar.jpg",
      },
    ],
    stats: [
      { label: "X-Rays", value: "161,700+" },
      { label: "CT Scans", value: "10,500+" },
      { label: "Ultrasounds", value: "26,800+" },
    ],
    services: [
      "X-Ray (Digital)",
      "Ultrasound (Grey Scale, Doppler, TVS)",
      "CT Scan (Whole Body 3D Imaging)",
      "Mammography",
      "FNAC",
      "Ultrasound/CT Guided Tru-Cut Biopsies",
      "Ultrasound/CT Guided Aspiration/Abscess Drainage",
      "Pig-Tail Catheterization",
    ],
    facilities: [
      "CPSP-Recognized FCPS/MCPS Training Center",
    ],
    equipment: [
      "Digital X-Ray",
      "Multi-Slice CT Scanner",
      "Ultrasound (Doppler, Transvaginal)",
      "Mammography Unit",
    ],
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    icon: "Activity",
    short: "Multidisciplinary rehabilitation and physiotherapy care restoring mobility and function after illness, injury, or surgery.",
    description: "Al-Zahra Rehabilitation and Physiotherapy Center, is a multidisciplinary facility dedicated to restoring mobility and function, for patients recovering from illness, injury, or surgery.\n\nClosely integrated with departments including Cardiology, Neurology, Orthopedics, Pulmonology, Critical Care, Rheumatology, Psychiatry, Pediatrics, and Medicine, the center ensures a smooth transition from acute treatment to structured rehabilitation and physiotherapy care.\n\nThe center provides comprehensive services under one roof, supported by advanced physiotherapy and rehabilitation equipment such as therapeutic modalities, isotonic machines, balance trainers, and automated traction system. Gender-segregated treatment areas are available and a dedicated gymnasium supports supervised therapeutic exercises and strength training.\n\nCare is delivered by a coordinated team of specialist physicians, physiotherapists, clinical nutritionists, and psychologists, with strong emphasis on patient and family education to support long-term recovery. As part of a major teaching hospital, the center also contributes to clinical training for undergraduate students and house officers, strengthening future rehabilitation services.",
    heads: [
      {
        name: "Dr. Muhammad Arif (PT)",
        qualifications: "Head of Department",
        photo: "/departments/physiotherapy/muhammad-arif.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Subayyal Iftikhar",
        qualifications: "Senior Physical Therapist",
        photo: "/departments/physiotherapy/subayyal-iftikhar.jpg",
      },
      {
        name: "Dr. M. Arif (PT)",
        qualifications: "Senior Consultant",
        photo: "/departments/physiotherapy/muhammad-arif.jpg",
      },
      {
        name: "Dr. M. Ashir Rehman (PT)",
        qualifications: "Senior Physical Therapist",
        photo: "/departments/physiotherapy/ashir-rehman.jpg",
      },
    ],
    services: [
      "Cardiac and Pulmonary Rehabilitation",
      "Neurological Rehabilitation",
      "Orthopedic & Musculoskeletal Rehabilitation",
      "Specialized Programs",
      "Acute Care Rehabilitation",
      "Sports Performance",
      "Electrotherapy and Modalities",
      "Mechanical and Manual Therapy",
      "Comprehensive Exercise Therapy",
      "Pediatric Therapy",
    ],
    facilities: [
      "Gender-Segregated Treatment Areas",
      "Dedicated Gymnasium",
      "Integration with Cardiology, Neurology, Orthopedics, Pulmonology, Critical Care, Rheumatology, Psychiatry, Pediatrics, and Medicine",
    ],
    equipment: [
      "Therapeutic Modalities",
      "Isotonic Machines",
      "Balance Trainers",
      "Automated Traction System",
    ],
  },
  {
    slug: "rheumatology",
    name: "Rheumatology",
    icon: "Bone",
    short: "Specialized care for autoimmune and musculoskeletal disorders, with advanced musculoskeletal ultrasound diagnostics.",
    description: "The Department of Rheumatology at Gulab Devi Teaching Hospital, provides specialized care for patients with autoimmune and musculoskeletal disorders. The team manages conditions such as rheumatoid arthritis, lupus, vasculitis, spondyloarthropathies, and crystal arthropathies with accurate diagnosis and personalized treatment.\n\nEquipped with modern facilities and one of the region's few musculoskeletal ultrasound programs, the department offers precise assessment and ongoing monitoring. Care is delivered through a multidisciplinary approach, collaborating with nephrology, dermatology, orthopedics and radiology teams for comprehensive treatment.\n\nThe department also contributes to medical education and research, training undergraduate and postgraduate students and advancing techniques such as ultrasound-guided joint assessments and injections. Through expert care, advanced diagnostics and a focus on innovation, the Rheumatology Department improves the lives of patients living with chronic and complex conditions.",
    heads: [
      {
        name: "Dr. Masem Afzal",
        qualifications: "Head of Department",
        photo: "/departments/rheumatology/masem-afzal.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Masem Afzal",
        qualifications: "Assistant Professor",
        photo: "/departments/rheumatology/masem-afzal.jpg",
      },
      {
        name: "Dr. Maryam Amin",
        qualifications: "Senior Registrar",
        photo: "/departments/rheumatology/maryam-amin.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "3,400+" },
      { label: "Surgeries & Procedures", value: "350+" },
    ],
    services: [],
    facilities: [
      "Musculoskeletal Ultrasound Program",
      "Multidisciplinary Collaboration (Nephrology, Dermatology, Orthopedics, Radiology)",
      "Ultrasound-Guided Joint Assessments and Injections",
    ],
    equipment: [
      "Musculoskeletal Ultrasound",
    ],
  },
  {
    slug: "surgical-icu",
    name: "Surgical ICU",
    icon: "HeartPulse",
    short: "Critical care for complex surgical patients requiring intensive monitoring and life support.",
    description: "The Surgical Intensive Care Unit (SICU) provides critical care to complex surgical patients requiring intensive monitoring and life-support. The unit operates with a clear mission to deliver life-saving care and optimal recovery through expertise and organized critical care services.\n\nThe SICU is equipped with full invasive ventilator support and invasive hemodynamic monitoring. All beds are equipped with invasive mechanical ventilation, non-invasive ventilation (BiPAP/CPAP), centralized oxygen and suction supply, and continuous vital-sign monitoring. Dedicated beds support arterial and central pressure monitoring.\n\nBedside facilities include a portable ultrasound for procedures such as nerve blocks, arterial line placement, and central venous catheter (CVC) insertion, allowing timely interventions within the unit. The unit is led by experienced consultant anesthetists and supported by trained staff, ensuring structured patient care, supervised procedural work, and regular clinical reviews.",
    services: [
      "Management of Critically Ill Post-Operative Surgical Patients",
      "Advanced Invasive Mechanical Ventilation",
      "Non-Invasive Ventilation Support (BiPAP / CPAP)",
      "Comprehensive Patient Monitoring",
      "Centralized Oxygen and Suction Supply",
      "Bedside Ultrasound-Guided Procedures",
    ],
    facilities: [
      "Invasive Ventilator Support and Hemodynamic Monitoring",
      "Arterial and Central Pressure Monitoring Beds",
      "Led by Experienced Consultant Anesthetists",
    ],
    equipment: [
      "Invasive Mechanical Ventilators",
      "Non-Invasive Ventilation (BiPAP/CPAP)",
      "Portable Ultrasound",
      "Centralized Oxygen and Suction Supply",
    ],
  },
  {
    slug: "thoracic-surgery",
    name: "Thoracic Surgery",
    icon: "Wind",
    short: "Pakistan's oldest thoracic surgery unit, offering advanced and minimally invasive thoracic surgical care.",
    description: "The Department of Thoracic Surgery at Gulab Devi Teaching Hospital Lahore, established in 1948, is the oldest thoracic surgery unit in Pakistan and remains one of the country's most trusted centers for thoracic surgery. With decades of experience, the department has served patients from across Pakistan and abroad, building a reputation for reliable, high-quality surgical care.\n\nSupported by modern operation theatres, a dedicated Intensive Care Unit and well-maintained inpatient wards, the department delivers comprehensive thoracic services with a strong focus on patient safety, recovery and comfort. Minimally invasive procedures, including Video-Assisted Thoracoscopic Surgery (VATS) are routinely performed, allowing faster recovery and improved outcomes for complex thoracic conditions.\n\nCommitted to accessible and compassionate healthcare, the department performed 246 free thoracic surgeries last year reflecting its strong service-oriented mission. With a legacy of excellence, advanced facilities and skilled surgical teams, the Thoracic Surgery Department continues to be a leading destination for thoracic care in Lahore and beyond.",
    heads: [
      {
        name: "Dr. Ali Raza Khan",
        qualifications: "Head of Department",
        photo: "/departments/thoracic-surgery/ali-raza-khan.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Ali Raza Khan",
        qualifications: "Head of Department",
        photo: "/departments/thoracic-surgery/ali-raza-khan.jpg",
      },
      {
        name: "Dr. Khalid Ali",
        qualifications: "Associate Professor",
        photo: "/departments/thoracic-surgery/khalid-ali.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "1,400+" },
      { label: "Surgeries & Procedures", value: "370+" },
    ],
    services: [],
    facilities: [
      "Dedicated Intensive Care Unit",
      "Video-Assisted Thoracoscopic Surgery (VATS)",
      "Well-Maintained Inpatient Wards",
    ],
    equipment: [],
  },
  {
    slug: "urology",
    name: "Urology",
    icon: "Droplet",
    short: "Specialized care for urinary and kidney conditions, with endoscopic and major urological surgery.",
    description: "The Department of Urology provides specialized care for patients with urinary and kidney conditions in a safe, modern, and patient-friendly environment. The department features a 20-bedded ward, including dedicated offices for the Head of Department and Medical Officers, ensuring continuous supervision and high-quality care.\n\nA fully equipped operation Theatre supports a wide range of procedures, including endoscopic surgeries for lower urinary tract disorders, such as TURP, laser lithotripsy, cystoscopy, ureteroscopy, optical internal urethrotomy, along with all major urological surgeries. These facilities allow patients to receive advanced treatment in Lahore without traveling long distances.\n\nWith a focus on compassionate care, modern equipment, and skilled staff, the Urology Department continues to deliver reliable, efficient, and high-quality services, improving outcomes and restoring quality of life for patients across the city and surrounding regions.",
    heads: [
      {
        name: "Prof. Dr. Arif Qayyum",
        qualifications: "Head of Department",
        photo: "/departments/urology/arif-qayyum.jpg",
      },
    ],
    consultants: [
      {
        name: "Prof. Dr. Arif Qayyum",
        qualifications: "Professor",
        photo: "/departments/urology/arif-qayyum.jpg",
      },
      {
        name: "Dr. Inam ul Haq",
        qualifications: "Senior Registrar",
        photo: "/departments/urology/inam-ul-haq.jpg",
      },
    ],
    stats: [
      { label: "Outdoor Patients", value: "3,400+" },
      { label: "Surgeries & Procedures", value: "2,900+" },
    ],
    services: [
      "Endoscopic Surgeries for Lower Urinary Tract",
      "Transurethral Resection of the Prostate (TURP)",
      "Laser Lithotripsy",
      "Cystoscopy",
      "Ureteroscopy (URS)",
      "Optical Internal Urethrotomy (OIU)",
      "Major Urological Surgeries",
    ],
    facilities: [
      "20-Bedded Ward",
      "Dedicated Offices for Head of Department and Medical Officers",
      "Fully Equipped Operation Theatre",
    ],
    equipment: [],
  },
  {
    slug: "pathology",
    name: "Pathology",
    icon: "Microscope",
    short: "Comprehensive diagnostic laboratory services including histopathology, haematology, chemical pathology, microbiology, and blood bank.",
    description: "Gulab Devi Teaching Hospital's Laboratory is a vital diagnostic unit dedicated to supporting high quality patient care through reliable, timely, and accurate laboratory testing. Equipped with modern technology and staffed by qualified professionals, the laboratory plays a central role in disease diagnosis, treatment monitoring, and preventive healthcare across all medical and surgical specialties. Strict quality control and safety standards are followed to ensure dependable results for clinicians and patients alike.\n\nThe laboratory functions as a comprehensive diagnostic center, integrating hematology, biochemistry, microbiology, blood bank services, histopathology, cytology, and specialized tuberculosis diagnostics within a coordinated system. Established diagnostic facilities have evolved over the years with upgraded equipment, advanced testing capabilities, and adherence to recognized quality protocols.\n\nHistopathology services, strengthened by the introduction of immunohistochemistry, support accurate tissue diagnosis and cancer detection, while the purpose-built tuberculosis laboratory operates as a Biosafety Level 2 facility providing WHO-endorsed testing in collaboration with provincial TB programs. Regular external quality assurance ensures standardized and reliable diagnostic practices.",
    heads: [
      {
        name: "Prof. Dr. Rajia Liaqat",
        qualifications: "Head of Department (Pathology)",
        photo: "/departments/pathology/rajia-liaqat.jpg",
      },
      {
        name: "Prof. Dr. Atiqa Ambreem",
        qualifications: "Head of Department (Microbiology)",
        photo: "/departments/pathology/atiqa-ambreem.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Muhammad Masood Afzal",
        qualifications: "Assistant Professor",
        photo: "/departments/pathology/muhammad-masood-afzal.jpg",
      },
      {
        name: "Dr. Sheeba Ishtiaq",
        qualifications: "Associate Professor",
        photo: "/departments/pathology/sheeba-ishtiaq.jpg",
      },
      {
        name: "Prof. Dr. Rajia Liaqat",
        qualifications: "Professor",
        photo: "/departments/pathology/rajia-liaqat.jpg",
      },
    ],
    stats: [
      { label: "Clinical/Pathology Tests", value: "513,000+" },
      { label: "Histopathological Tests", value: "7,000+" },
      { label: "Microbiological Tests", value: "43,000+" },
      { label: "ABGs", value: "14,000+" },
    ],
    services: [
      "Histopathology",
      "Haematology",
      "Chemical Pathology",
      "Microbiology",
      "Blood Bank",
    ],
    facilities: [
      "Biosafety Level 2 Tuberculosis Laboratory",
      "Immunohistochemistry",
      "WHO-Endorsed TB Testing",
    ],
    equipment: [],
  },
  {
    slug: "pathology",
    name: "Pathology",
    icon: "Microscope",
    short: "Comprehensive diagnostic laboratory services including histopathology, haematology, chemical pathology, microbiology, and blood bank.",
    description: "Gulab Devi Teaching Hospital's Laboratory is a vital diagnostic unit dedicated to supporting high quality patient care through reliable, timely, and accurate laboratory testing. Equipped with modern technology and staffed by qualified professionals, the laboratory plays a central role in disease diagnosis, treatment monitoring, and preventive healthcare across all medical and surgical specialties. Strict quality control and safety standards are followed to ensure dependable results for clinicians and patients alike.\n\nThe laboratory functions as a comprehensive diagnostic center, integrating hematology, biochemistry, microbiology, blood bank services, histopathology, cytology, and specialized tuberculosis diagnostics within a coordinated system. Established diagnostic facilities have evolved over the years with upgraded equipment, advanced testing capabilities, and adherence to recognized quality protocols.\n\nHistopathology services, strengthened by the introduction of immunohistochemistry, support accurate tissue diagnosis and cancer detection, while the purpose-built tuberculosis laboratory operates as a Biosafety Level 2 facility providing WHO-endorsed testing in collaboration with provincial TB programs. Regular external quality assurance ensures standardized and reliable diagnostic practices.",
    heads: [
      {
        name: "Prof. Dr. Rajia Liaqat",
        qualifications: "Head of Department (Pathology)",
        photo: "/departments/pathology/rajia-liaqat.jpg",
      },
      {
        name: "Prof. Dr. Atiqa Ambreem",
        qualifications: "Head of Department (Microbiology)",
        photo: "/departments/pathology/atiqa-ambreem.jpg",
      },
    ],
    consultants: [
      {
        name: "Dr. Muhammad Masood Afzal",
        qualifications: "Assistant Professor",
        photo: "/departments/pathology/muhammad-masood-afzal.jpg",
      },
      {
        name: "Dr. Sheeba Ishtiaq",
        qualifications: "Associate Professor",
        photo: "/departments/pathology/sheeba-ishtiaq.jpg",
      },
      {
        name: "Prof. Dr. Rajia Liaqat",
        qualifications: "Professor",
        photo: "/departments/pathology/rajia-liaqat.jpg",
      },
    ],
    stats: [
      { label: "Clinical/Pathology Tests", value: "513,000+" },
      { label: "Histopathological Tests", value: "7,000+" },
      { label: "Microbiological Tests", value: "43,000+" },
      { label: "ABGs", value: "14,000+" },
    ],
    services: [
      "Histopathology",
      "Haematology",
      "Chemical Pathology",
      "Microbiology",
      "Blood Bank",
    ],
    facilities: [
      "Biosafety Level 2 Tuberculosis Laboratory",
      "Immunohistochemistry",
      "WHO-Endorsed TB Testing",
    ],
    equipment: [],
  },
];

export type Doctor = {
  id: string;
  name: string;
  photo: string;
  qualifications: string;
  department: string;
  specialization: string;
  experience: number;
  languages: string[];
  rating: number;
  reviews: number;
  bio: string;
  hours: string;
};

const PHOTOS = [
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=400&fit=crop",
];

const NAMES = [
  "Dr. Ayesha Malik", "Dr. Bilal Ahmed", "Dr. Faiza Khan", "Dr. Hamza Raza",
  "Dr. Iqra Sheikh", "Dr. Junaid Chaudhry", "Dr. Kiran Butt", "Dr. Laiba Aslam",
  "Dr. Mahmood Qureshi", "Dr. Nadia Farooq", "Dr. Omar Siddiqui", "Dr. Pareesa Zafar",
  "Dr. Qasim Javed", "Dr. Rabia Nawaz", "Dr. Saad Iqbal", "Dr. Tayyaba Anwar",
  "Dr. Usman Tariq", "Dr. Vaneeza Hassan", "Dr. Waleed Shah", "Dr. Zara Abbas",
];

export const DOCTORS: Doctor[] = NAMES.map((name, i) => {
  const dep = DEPARTMENTS[i % DEPARTMENTS.length];
  return {
    id: `dr-${i + 1}`,
    name,
    photo: PHOTOS[i % PHOTOS.length],
    qualifications: ["MBBS", "FCPS", i % 3 === 0 ? "FRCS" : "MD"].join(", "),
    department: dep.slug,
    specialization: dep.name,
    experience: 6 + ((i * 3) % 25),
    languages: i % 2 === 0 ? ["English", "Urdu", "Punjabi"] : ["English", "Urdu"],
    rating: 4.4 + ((i % 6) / 10),
    reviews: 40 + i * 11,
    bio: `${name} is a senior consultant in ${dep.name} with extensive clinical and academic experience at Gulab Devi Teaching Hospital, focusing on patient-centered outcomes and evidence-based care.`,
    hours: "Mon–Fri · 9:00 AM – 4:00 PM",
  };
});

export const SERVICES = [
  { slug: "emergency", name: "Emergency", icon: "Siren", desc: "24/7 emergency & trauma care with rapid response ambulances." },
  { slug: "laboratory", name: "Laboratory", icon: "FlaskConical", desc: "ISO-certified diagnostic pathology, 500+ tests." },
  { slug: "blood-bank", name: "Blood Bank", icon: "Droplets", desc: "Round-the-clock safe blood transfusion services." },
  { slug: "radiology", name: "Radiology", icon: "ScanLine", desc: "MRI, CT, X-ray, Ultrasound and Mammography." },
  { slug: "pharmacy", name: "Pharmacy", icon: "Pill", desc: "In-house 24/7 pharmacy with clinical support." },
  { slug: "icu", name: "ICU", icon: "MonitorHeart", desc: "Multidisciplinary intensive care with ECMO." },
  { slug: "vaccination", name: "Vaccination", icon: "Syringe", desc: "EPI schedule, travel and adult vaccinations." },
  { slug: "checkups", name: "Health Checkups", icon: "Stethoscope", desc: "Executive & family health screening packages." },
];

export const TESTIMONIALS = [
  { name: "Sana R.", quote: "The staff treated my mother like family. World-class care.", role: "Patient's Daughter", avatar: PHOTOS[0] },
  { name: "Imran K.", quote: "From triage to surgery, the process was seamless. Grateful.", role: "Cardiac Patient", avatar: PHOTOS[1] },
  { name: "Fatima B.", quote: "Modern facilities and compassionate doctors. Highly recommended.", role: "Patient", avatar: PHOTOS[2] },
];

export const NEWS = [
  { slug: "new-cath-lab", title: "Gulab Devi opens second cardiac cath lab", category: "Announcement", date: "2026-07-12", excerpt: "Doubling interventional capacity for cardiac patients in Punjab.", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop" },
  { slug: "free-camp", title: "Free eye camp screens 4,200 patients", category: "Community", date: "2026-07-08", excerpt: "Outreach continues across rural Punjab districts.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop" },
  { slug: "research-award", title: "Pulmonology team wins national research award", category: "Research", date: "2026-06-28", excerpt: "For pioneering work on drug-resistant tuberculosis.", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop" },
  { slug: "nursing-graduation", title: "Nursing college graduates 214 new nurses", category: "Education", date: "2026-06-15", excerpt: "Strengthening the healthcare workforce nationwide.", image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=500&fit=crop" },
  { slug: "digital-records", title: "Hospital rolls out unified digital records", category: "Technology", date: "2026-05-30", excerpt: "Improving continuity of care and patient safety.", image: "https://images.unsplash.com/photo-1581091012184-5c8f0e7f9b6b?w=800&h=500&fit=crop" },
  { slug: "flood-relief", title: "Mobile clinics deployed for flood relief", category: "Community", date: "2026-05-10", excerpt: "Rapid response teams reach 12 affected districts.", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&h=500&fit=crop" },
];

export const STORIES = [
  { slug: "a-lady-with-a-big-heart", title: "I AM NOT BEGUM SAHIBA", image: "https://gulabdevi.org/wp-content/uploads/2026/01/Begum-Sahiba-765x1024.jpg", excerpt: "One day, a lady walked into Gulab Devi Chest Hospital, asking to meet the doctor-in-charge. She wanted to know if there was any way she could help the patients.", fullText: "One day, a lady walked into Gulab Devi Chest Hospital, asking to meet the doctor-in-charge. She wanted to know if there was any way she could help the patients.\n\nThe doctor, accustomed to meeting generous donors, decided to introduce her to his colleagues. He said warmly:\n\n\"This is Begum Sahiba. She wishes to help our poor patients. Can you think of any urgent requirements?\"\n\nThe lady shook her head gently and smiled.\n\n\"Please don't call me Begum Sahiba,\" she said. \"I am no one special.I served as an Aya in a school my whole life. This small amount I wish to donate comes from my retirement. It may not be much, but it is my lifetime achievement, and I want it to go to those who need it most.\”\nHer words struck a deep chord with everyone present. Here was a woman who had spent her life serving quietly, never seeking fame or recognition, yet her heart was full of compassion for strangers.\nThe doctors were moved. One of them said:\n\“No words can express your greatness. To me, you truly are a Begum Sahiba.\”\nEven today, the memory of her visit inspires staff and donors alike, a reminder that anyone, regardless of how modest their means, can make a profound difference. Sometimes, it is the quietest hearts that leave the loudest echoes." },
  { slug: "the-sacrifice", title: "Urgent Operation", image: "https://gulabdevi.org/wp-content/uploads/2026/01/IMG_4219-747x1024.jpg", excerpt: "Gulab Devi Teaching Hospital is more than walls, beds and machines. Every corner holds stories of courage, struggle and humanity.", fullText: "The Sacrifice Behind Every Smile\nGulab Devi Teaching Hospital is more than walls, beds and machines. Every corner holds stories of courage, struggle and humanity.\nOne such story was shared by a senior doctor: a patient needed surgery but the ward was completely full. The doctor had conducted all necessary tests and instructed the patient to come the next morning at 8:00 AM, fasting as required, with the plan to admit him to the ICU after the operation, when a space would likely open up in the ward.\nBut at 8:00 AM, the patient did not arrive. Hours passed. By 11:30 AM, as the doctor finished his other tasks, the patient quietly entered his office.\n\“Why didnt you come on time?\” the doctor asked, struggling to hide his frustration.The patient listened silently. Then, with a trembling voice, he said:\n\“Doctor Sahib, I have children at home. I found two hours of labor work this morning and only now could I come after securing a simple meal for them.\”\nThe room fell silent. The doctor lowered his head, unable to speak for a moment, holding back tears.\nThis patient, scheduled for an urgent operation, spent hours working on an empty stomach just to feed his children, before coming to receive the care he so desperately needed.\nThis is the reality many patients face every day: people who sacrifice everything for their families and still hope for a chance to survive.\nEvery donation ensures that patients like him can receive treatment without delay, without compromise, and with dignity  because no parent should have to choose between feeding their children and saving their own life." },
  { slug: "good-treatment", title: "MY MOTHER WAS TREATED WELL", image: "https://gulabdevi.org/wp-content/uploads/2026/01/building-1.jpg", excerpt: "Decades ago, an elderly woman was admitted to Gulab Devi Chest Hospital in a private room. ", fullText: "Decades ago, an elderly woman was admitted to Gulab Devi Chest Hospital in a private room. She was suffering from tuberculosis, a disease that once took countless lives in silence. Under the care of dedicated doctors and staff, she was treated with compassion and dignity  and Alhamdulilah,she recovered.\nWhen she was well enough to return home, her son came to meet the Medical Superintendent. He was not there with complaints or demands. He came with gratitude and a heavy heart.\nHe said:\n\“My mother was treated in your hospital, and she got better. Alhamdulillah, I could afford her treatment. But when I see so many poor people dying of tuberculosis simply because they cannot afford care, my heart feels burdened.\”\nThen he made a decision that would change countless lives.\n\“That is why I want to construct a ward here, for those who have nothing.\”The Medical Superintendent accepted his offer with appreciation and respect. Soon after, a ward for poor patients was constructed and began serving those who needed it most.\nThe donor himself was a well-known public figure: a politician, a filmmaker and actor, a famous folk singer yet he always preferred to be known simply as a social worker. Though he is no longer with us today, his compassion still lives on within the walls of Gulab Devi Hospital.\nEvery patient treated in that ward, every life saved, and every family spared from loss stands as a silent prayer for him\nBecause when gratitude turns into generosity,\ncare becomes compassion,\nand compassion becomes a legacy" },
  { slug: "the-cause", title: "THE NOBLE CAUSE", image: "https://gulabdevi.org/wp-content/uploads/2026/01/urology-dept.jpg", excerpt: "A few years ago, a humble gentleman visited Gulab Devi Teaching Hospital with a simple yet powerful intention:", fullText: "\"My children dont need my money, why shouldnt it be used for a more noble cause?\”\nA few years ago, a humble gentleman visited Gulab Devi Teaching Hospital with a simple yet powerful intention: he wished to donate part of his lifes savings for the welfare of patients.\nWhen asked about his motivation, he shared something remarkable.\n\“People usually leave assets for their children. Alhamdulillah, both of my sons are working as radiologists in the United States and are earning well. They do not need my money. I want to leave behind something meaningful for them, something that truly serves humanity.\”\nHe chose to dedicate his wealth to a noble cause: the construction of a ward at Gulab Devi Teaching Hospital.\nThrough his generosity, a complete surgical unit was built — including a fully equipped Operating Theatre, patient rooms, and two general wards serving those who could not afford treatment elsewhere. His support did not end with construction. The philanthropist also committed to the ongoing running and maintenance costs of the ward, ensuring that patient care continues uninterrupted year after year.\nEvery year, a dedicated amount was deposited to cover the ward’s operational expenses sustaining free and dignified treatment for countless patients.\nWhat greater legacy could there be?\nNot wealth locked away, but lives healed.\nNot possessions, but compassion that continues to serve humanity.\n" }
];

export const FAQS = [
  { q: "How do I book an appointment?", a: "Use our online booking system, call our helpline, or visit reception. Emergencies are always seen immediately." },
  { q: "Do you accept insurance?", a: "Yes, we partner with all major insurers including State Life, EFU Health and Adamjee Health." },
  { q: "What are visiting hours?", a: "General wards 4–7 PM daily. ICU/CCU visits are restricted to family, twice daily." },
  { q: "Is there financial assistance available?", a: "Our Zakat and welfare committee supports eligible patients with subsidised care." },
  { q: "How can I access my medical records?", a: "Log in to the Patient Portal to view and download all reports, prescriptions and invoices." },
];

export const JOBS = [
  { id: "j1", title: "Consultant Cardiologist", department: "Cardiology", type: "Full-time", location: "Lahore", posted: "2026-07-14" },
  { id: "j2", title: "Staff Nurse — ICU", department: "ICU", type: "Full-time", location: "Lahore", posted: "2026-07-12" },
  { id: "j3", title: "Radiology Technologist", department: "Radiology", type: "Full-time", location: "Lahore", posted: "2026-07-10" },
  { id: "j4", title: "Medical Officer — Emergency", department: "Emergency", type: "Rotational", location: "Lahore", posted: "2026-07-06" },
  { id: "j5", title: "Biomedical Engineer", department: "Facilities", type: "Full-time", location: "Lahore", posted: "2026-07-01" },
  { id: "j6", title: "Ward Boy / Attendant", department: "General", type: "Full-time", location: "Lahore", posted: "2026-06-28" },
];

export const TIMELINE = [
  { year: 1927, title: "Gulab Devi Trust established", desc: "Founded by Lala Lajpat Rai in memory of his mother, who died of tuberculosis." },
  { year: 1930, title: "Land acquired", desc: "40 acres purchased by the Trust, plus 10 acres granted by the Punjab Government." },
  { year: 1934, title: "Hospital opens", desc: "Inaugurated by Mahatma Gandhi on July 17, 1934, treating TB patients." },
  { year: 1947, title: "Refugee care during Partition", desc: "The hospital, with 50 beds, treated refugees arriving near the railway station." },
  { year: 1948, title: "New Managing Committee", desc: "Begum Raana Liaquat Ali Khan appointed chairperson after trustee migration." },
  { year: 1984, title: "Cardiac wing established", desc: "Marked the beginning of open-heart and cardiac surgery services." },
  { year: 2026, title: "1,500-bed hospital", desc: "Now the largest chest hospital in South Asia." },
];

export const LEADERSHIP = [
  { name: "Syed Shahid Ali", role: "Chairman", photo: PHOTOS[0] },
  { name: "Mr. Ahmad Hasnain", role: "Honorary Secretary", photo: PHOTOS[1] },
  { name: "Ms. Sidra Fatima Sheikh", role: "Member", photo: PHOTOS[2] },
  { name: "Mr. Bilal Ilahi", role: "Member", photo: PHOTOS[3] },
];

// Patient portal mock data
export const APPOINTMENTS = [
  { id: "a1", doctor: "Dr. Ayesha Malik", department: "Cardiology", date: "2026-07-28", time: "10:30 AM", status: "Upcoming", reason: "Follow-up ECG review" },
  { id: "a2", doctor: "Dr. Bilal Ahmed", department: "Cardiac Surgery", date: "2026-07-30", time: "02:00 PM", status: "Upcoming", reason: "Pre-op consult" },
  { id: "a3", doctor: "Dr. Faiza Khan", department: "Pulmonology", date: "2026-06-15", time: "09:00 AM", status: "Completed", reason: "Chronic cough" },
  { id: "a4", doctor: "Dr. Hamza Raza", department: "Emergency", date: "2026-05-02", time: "11:00 PM", status: "Completed", reason: "Trauma" },
  { id: "a5", doctor: "Dr. Iqra Sheikh", department: "ICU", date: "2026-04-20", time: "08:00 AM", status: "Cancelled", reason: "Rescheduled" },
];

export const LAB_REPORTS = [
  { id: "l1", name: "Complete Blood Count", department: "Hematology", date: "2026-07-20", status: "Completed" },
  { id: "l2", name: "Lipid Profile", department: "Biochemistry", date: "2026-07-18", status: "Completed" },
  { id: "l3", name: "HbA1c", department: "Biochemistry", date: "2026-07-15", status: "Completed" },
  { id: "l4", name: "Thyroid Function", department: "Endocrine", date: "2026-07-22", status: "Processing" },
  { id: "l5", name: "Liver Function", department: "Biochemistry", date: "2026-07-23", status: "Pending" },
];

export const RADIOLOGY = [
  { id: "r1", name: "Chest X-Ray PA", date: "2026-07-20", status: "Completed", image: "https://images.unsplash.com/photo-1516069677018-378971d59d3d?w=400&h=300&fit=crop" },
  { id: "r2", name: "MRI Brain w/ Contrast", date: "2026-07-15", status: "Completed", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop" },
  { id: "r3", name: "CT Abdomen", date: "2026-07-22", status: "Processing", image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=300&fit=crop" },
];

export const PRESCRIPTIONS = [
  {
    id: "p1", doctor: "Dr. Ayesha Malik", date: "2026-07-20", medicines: [
      { name: "Atorvastatin 20mg", dose: "1 tab", freq: "Once at night", days: 30 },
      { name: "Aspirin 75mg", dose: "1 tab", freq: "Once daily", days: 30 },
    ], notes: "Recheck lipids in 3 months."
  },
  {
    id: "p2", doctor: "Dr. Faiza Khan", date: "2026-06-15", medicines: [
      { name: "Salbutamol Inhaler", dose: "2 puffs", freq: "As needed", days: 30 },
    ], notes: "Avoid dust exposure."
  },
];

export const INVOICES = [
  { id: "INV-1042", date: "2026-07-20", amount: 4800, status: "Paid", desc: "Cardiology consultation + ECG" },
  { id: "INV-1051", date: "2026-07-22", amount: 12500, status: "Outstanding", desc: "MRI Brain w/ Contrast" },
  { id: "INV-1061", date: "2026-07-23", amount: 2400, status: "Outstanding", desc: "Lab: Liver Function" },
  { id: "INV-0983", date: "2026-06-15", amount: 3200, status: "Paid", desc: "Pulmonology consult" },
];

export const NOTIFICATIONS = [
  { id: "n1", type: "appointment", title: "Appointment tomorrow at 10:30 AM", time: "2h ago", read: false },
  { id: "n2", type: "report", title: "Your Lipid Profile report is ready", time: "5h ago", read: false },
  { id: "n3", type: "prescription", title: "Prescription updated by Dr. Ayesha", time: "1d ago", read: true },
  { id: "n4", type: "payment", title: "Payment of PKR 4,800 received", time: "2d ago", read: true },
  { id: "n5", type: "announce", title: "Free eye camp this Saturday", time: "3d ago", read: true },
];

export const MESSAGES = [
  { id: "m1", from: "Reception", last: "Your appointment has been confirmed.", time: "10:12", unread: 0 },
  { id: "m2", from: "Dr. Ayesha Malik", last: "Please share your latest ECG report.", time: "09:04", unread: 2 },
  { id: "m3", from: "Billing", last: "Outstanding balance reminder.", time: "Yesterday", unread: 1 },
];

export const MEDICAL_RECORD = {
  allergies: ["Penicillin", "Peanuts"],
  conditions: ["Hypertension", "Type-2 Diabetes"],
  vaccinations: [
    { name: "COVID-19 Booster", date: "2026-02-10" },
    { name: "Influenza", date: "2025-11-04" },
    { name: "Hepatitis B", date: "2022-05-20" },
  ],
  surgeries: [
    { name: "Appendectomy", date: "2015-08-11" },
  ],
  medications: [
    { name: "Metformin 500mg", schedule: "BD" },
    { name: "Amlodipine 5mg", schedule: "OD" },
  ],
  timeline: [
    { date: "2026-07-20", title: "Cardiology follow-up", desc: "ECG normal. Continue current therapy." },
    { date: "2026-06-15", title: "Pulmonology consult", desc: "Chronic cough — inhaler prescribed." },
    { date: "2026-05-02", title: "Emergency visit", desc: "Minor trauma, discharged same day." },
    { date: "2025-11-04", title: "Annual checkup", desc: "Routine screening completed." },
  ],
};

// Admin
export const ADMIN_STATS = {
  todayPatients: 428,
  todayAppointments: 512,
  revenue: 2840000,
  bedOccupancy: 87,
  emergencyCases: 34,
  pendingReports: 27,
};

export const APPT_CHART = [
  { day: "Mon", value: 320 }, { day: "Tue", value: 410 }, { day: "Wed", value: 380 },
  { day: "Thu", value: 460 }, { day: "Fri", value: 512 }, { day: "Sat", value: 290 }, { day: "Sun", value: 180 },
];

export const REVENUE_CHART = [
  { month: "Jan", value: 18 }, { month: "Feb", value: 21 }, { month: "Mar", value: 20 },
  { month: "Apr", value: 26 }, { month: "May", value: 28 }, { month: "Jun", value: 27 }, { month: "Jul", value: 32 },
];

export const DEPT_VISITS = DEPARTMENTS.slice(0, 7).map((d, i) => ({ name: d.name, value: 120 + i * 40 + (i % 3) * 25 }));

export const GROWTH_CHART = [
  { month: "Jan", patients: 3200 }, { month: "Feb", patients: 3500 }, { month: "Mar", patients: 3700 },
  { month: "Apr", patients: 4100 }, { month: "May", patients: 4600 }, { month: "Jun", patients: 4900 }, { month: "Jul", patients: 5400 },
];
