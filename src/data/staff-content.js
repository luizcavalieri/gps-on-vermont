const staff = [
  {
    titleAbr: "Dr",
    title: "Doctor",
    name: "Carmen Padilla",
    image: "dr-carmen.jpg",
    accreditations: ["FRACGP", "MBBS", "Diploma of Child Heath"],
    descriptions: [
      "Dr Padilla has been a General Practitioner in the Wodonga area for 10 years.",
      "Carmen has a special interest in women’s health, child health, chronic disease management, men’s health.",
      "Dr Padilla speaks Spanish as well as English."
    ],
    availability: ["5 days per week"],
    speaks: ["English", "Spanish"],
    booking: true,
    bookingDoctorId: "dr-carmen-padilla-1",
    socialMedia: []
  },
  {
    titleAbr: "Pm",
    title: "Practice Manager",
    name: "Annette Baumgarten",
    image: "Annette.jpg",
    accreditations: [
      "Diploma of Business",
      "Graduate of the Institute of company Directors Australia",
      "Certificate of Community engagement with the Australian and International Participation"
    ],
    descriptions: [
      "Our administration Team is managed by our Practice Manager Annette.",
      "She has a vast background in Business Management and has been a Practice Manager in other Practices."
    ],
    availability: ["5 days per week"],
    speaks: ["English"],
    booking: false,
    bookingDoctorId: "",
    socialMedia: [
      {
        id: "facebook",
        link: "https://www.facebook.com/gpsonvermont/"
      }
    ]
  },
  {
    titleAbr: "Pm",
    title: "Nursing Manager",
    name: "Megan Chick",
    image: "avatar.jpg",
    accreditations: ["acc1", "acc2", "acc3"],
    availability: ["5 days per week"],
    speaks: ["English"],
    descriptions: ["first one", "second one", "third one"],
    booking: false,
    bookingDoctorId: "",
    socialMedia: []
  },
  {
    titleAbr: "Nr",
    title: "Practice Nurse",
    name: "Lara Hopkins",
    image: "Lara.jpg",
    accreditations: ["Bachelor of Nursing", "Credentialed immunisation provider"],
    availability: ["Monday", "Tuesday"],
    speaks: ["English"],
    descriptions: ["Lara shares a high passion for primary health care.  She has worked in this environment for the past five years after successfully completing her studies of ‘Bachelor of Nursing’ in 2015.", "Our nurse Lara is very passionate about general practice and enjoys all aspects of practice nursing. She is a strong advocate for whole patient care, health and wellbeing. Lara also holds a strong interest in Immunisation since becoming a credentialed immunisation provider in 2016.  She also has extensive experience with the skin since having worked in specialised skin clinics for many years.", "Outside of work Lara has three gorgeous children and in her spare time she enjoys trips to the snow, drinking coffee, catching up with friends, walking and spending time with her family."],
    booking: false,
    bookingDoctorId: "",
    socialMedia: []
  },
  {
    titleAbr: "Pm",
    title: "Mental Health Social Worker",
    name: "Jen Walker",
    image: "Jen.jpg",
    accreditations: [],
    availability: ["Call for an appointment"],
    speaks: ["English"],
    descriptions: [
      "I am an Accredited Mental Health Social Worker and have been in this field for nearly 20 years.",
      "In this time I have worked in the homeless sector, drug and alcohol, education, young people, children with challenging behaviours, forensic drug and alcohol and with the Veteran community.",
      "My passion is working with trauma affected people as trauma can and does underpin many mental health problems and I see this often in my practice.",
      "I use Cognitive Behaviour Therapy, Narrative Therapy and Acceptance Commitment Therapy and have trained in Cognitive Processing Therapy.",
      "I like to stay up to date with new emerging ways to support those with mental health issues and undertake training and academic study on a regular basis."
    ],
    booking: false,
    bookingDoctorId: "",
    socialMedia: [
      {
        id: "phone",
        link: "0427313048"
      }
    ]
  }
];

export default staff;
