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
  services: string[];
  facilities: string[];
  equipment: string[];
};

export const DEPARTMENTS: Department[] = [
  { slug: "cardiology", name: "Cardiology", icon: "HeartPulse", short: "Advanced heart care and diagnostics.", description: "Comprehensive cardiac care with 24/7 catheterization lab, non-invasive diagnostics and structural heart interventions.", services: ["ECG & Echo", "Angiography", "Angioplasty", "Pacemaker Implants", "Holter Monitoring"], facilities: ["Cath Lab", "CCU 24 Beds", "Rehab Unit"], equipment: ["GE Innova IGS 5", "Philips Epiq CVx", "Stress Test Systems"] },
  { slug: "cardiac-surgery", name: "Cardiac Surgery", icon: "Activity", short: "Open-heart and minimally invasive surgery.", description: "State-of-the-art cardiac surgical suite handling CABG, valve replacements and congenital repairs.", services: ["CABG", "Valve Replacement", "Aortic Surgery"], facilities: ["Hybrid OT", "Cardiac ICU"], equipment: ["Terumo CPB", "TEE Probes"] },
  { slug: "pulmonology", name: "Pulmonology", icon: "Wind", short: "Respiratory and pulmonary care.", description: "Specialist care for TB, asthma, COPD and interventional pulmonology.", services: ["Bronchoscopy", "Sleep Studies", "PFT"], facilities: ["Pulmonary Lab", "Isolation Ward"], equipment: ["Olympus BF-H190", "PFT Suite"] },
  { slug: "emergency", name: "Emergency", icon: "Siren", short: "24/7 emergency & trauma response.", description: "Level-1 emergency department with dedicated trauma bays and rapid triage.", services: ["Triage", "Trauma Care", "Ambulance Dispatch"], facilities: ["12 Trauma Bays", "Rapid CT"], equipment: ["Portable X-ray", "Defibrillators"] },
  { slug: "icu", name: "ICU", icon: "MonitorHeart", short: "Critical care intensive unit.", description: "Multidisciplinary critical care with ECMO capability.", services: ["Ventilation", "ECMO", "Dialysis"], facilities: ["48 ICU Beds"], equipment: ["Draeger V500", "ECMO Cardiohelp"] },
  { slug: "orthopedics", name: "Orthopedics", icon: "Bone", short: "Bone, joint and spine surgery.", description: "Joint replacements, sports medicine and spinal surgery.", services: ["Arthroscopy", "Joint Replacement", "Spine Surgery"], facilities: ["Ortho OT x3"], equipment: ["Stryker Mako", "C-Arm"] },
  { slug: "neurology", name: "Neurology", icon: "Brain", short: "Neurological diagnosis & treatment.", description: "Stroke unit, epilepsy monitoring and movement disorders clinic.", services: ["EEG", "EMG", "Stroke Care"], facilities: ["Stroke Unit"], equipment: ["Nihon Kohden EEG"] },
  { slug: "radiology", name: "Radiology", icon: "ScanLine", short: "Advanced imaging services.", description: "Full-service imaging with 3T MRI and 128-slice CT.", services: ["MRI", "CT", "Ultrasound", "Mammography"], facilities: ["Imaging Suite"], equipment: ["Siemens Magnetom 3T", "GE Revolution CT"] },
  { slug: "laboratory", name: "Laboratory", icon: "FlaskConical", short: "Diagnostic pathology lab.", description: "ISO-certified diagnostic lab running 500+ test panels.", services: ["Hematology", "Biochemistry", "Microbiology"], facilities: ["Automated Lab"], equipment: ["Roche Cobas", "Sysmex XN"] },
  { slug: "pharmacy", name: "Pharmacy", icon: "Pill", short: "In-house pharmacy 24/7.", description: "Round-the-clock pharmacy with clinical pharmacist consultations.", services: ["Prescription Dispensing", "Compounding"], facilities: ["Central & Ward Pharmacies"], equipment: ["Automated Dispensers"] },
  { slug: "pediatrics", name: "Pediatrics", icon: "Baby", short: "Child & neonatal care.", description: "Comprehensive pediatric care with NICU and PICU.", services: ["NICU", "Vaccination", "Developmental Clinic"], facilities: ["NICU 24 Beds"], equipment: ["Giraffe Incubators"] },
  { slug: "ent", name: "ENT", icon: "Ear", short: "Ear, Nose & Throat specialists.", description: "Endoscopic sinus surgery, hearing implants and voice clinic.", services: ["Audiometry", "FESS", "Cochlear Implants"], facilities: ["ENT OT"], equipment: ["Karl Storz Endoscopes"] },
  { slug: "oncology", name: "Oncology", icon: "Ribbon", short: "Cancer care & chemotherapy.", description: "Medical, surgical and radiation oncology under one roof.", services: ["Chemotherapy", "Radiotherapy", "Immunotherapy"], facilities: ["Day Chemo Unit"], equipment: ["Varian TrueBeam"] },
  { slug: "nephrology", name: "Nephrology", icon: "Droplet", short: "Kidney disease & dialysis.", description: "In-center hemodialysis and kidney transplant program.", services: ["Hemodialysis", "Transplant"], facilities: ["Dialysis Unit 30 Stations"], equipment: ["Fresenius 5008"] },
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
  { slug: "the-cause", title: "THE NOBLE CAUSE", image: "https://gulabdevi.org/wp-content/uploads/2026/01/urology-dept.jpg", excerpt: "A few years ago, a humble gentleman visited Gulab Devi Teaching Hospital with a simple yet powerful intention:", fullText: "\"My children dont need my money, why shouldnt it be used for a more noble cause?\”\nA few years ago, a humble gentleman visited Gulab Devi Teaching Hospital with a simple yet powerful intention: he wished to donate part of his lifes savings for the welfare of patients.\nWhen asked about his motivation, he shared something remarkable.\n\“People usually leave assets for their children. Alhamdulillah, both of my sons are working as radiologists in the United States and are earning well. They do not need my money. I want to leave behind something meaningful for them, something that truly serves humanity.\”\nHe chose to dedicate his wealth to a noble cause: the construction of a ward at Gulab Devi Teaching Hospital.\nThrough his generosity, a complete surgical unit was built — including a fully equipped Operating Theatre, patient rooms, and two general wards serving those who could not afford treatment elsewhere. His support did not end with construction. The philanthropist also committed to the ongoing running and maintenance costs of the ward, ensuring that patient care continues uninterrupted year after year.\nEvery year, a dedicated amount was deposited to cover the ward’s operational expenses sustaining free and dignified treatment for countless patients.\nWhat greater legacy could there be?\nNot wealth locked away, but lives healed.\nNot possessions, but compassion that continues to serve humanity.\n"}
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
  { id: "p1", doctor: "Dr. Ayesha Malik", date: "2026-07-20", medicines: [
    { name: "Atorvastatin 20mg", dose: "1 tab", freq: "Once at night", days: 30 },
    { name: "Aspirin 75mg", dose: "1 tab", freq: "Once daily", days: 30 },
  ], notes: "Recheck lipids in 3 months." },
  { id: "p2", doctor: "Dr. Faiza Khan", date: "2026-06-15", medicines: [
    { name: "Salbutamol Inhaler", dose: "2 puffs", freq: "As needed", days: 30 },
  ], notes: "Avoid dust exposure." },
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
