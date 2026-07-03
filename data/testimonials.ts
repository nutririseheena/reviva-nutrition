export const testimonials = [
  {
    name: "Padma — 69 Years",
    condition: "Weight Management · Skin Infection · High BP · Insulin Resistance",
    quote:
      "At 69, I was struggling with high blood pressure, fatty liver, insulin resistance, joint pain, skin infections, and excess weight. One of my biggest achievements was discontinuing BP medication under medical supervision. Through REVIVA Nutrition's root-cause approach and personalized guidance, I achieved over 10 kg weight loss and significant improvements in my blood sugar, cholesterol, and liver health. My knee pain reduced, mobility improved, and I now feel more active and confident in my daily life. Thank you, Dt. Heena, for helping me reclaim my health naturally.",
    result: "Mumbai",
  },
  {
    name: "Divya — 40 Years",
    condition: "Hair & Skin Health · Chronic Sinus",
    quote:
      "Working with Dt. Heena transformed the way I understand health. Living in Hong Kong, I never realized that effective treatment and personalized nutrition guidance could be possible online. She helped me look beyond my sinus issues and uncover the deeper root causes affecting my overall well-being. Her unique blend of Ayurvedic wisdom and practical nutrition guidance empowered me to make lasting lifestyle changes that I continue to follow today. I am deeply grateful for her ongoing support, guidance, and genuine care.",
    result: "Hong Kong",
  },
  {
    name: "Flaviya D'Souza — 46 Years",
    condition: "Weight Management · GERD · Diabetes",
    quote:
      "I joined REVIVA Nutrition for high cholesterol, borderline diabetes, and fluctuating weight. During the assessment, hidden concerns like fatty liver, kidney stones, and gallbladder stones were identified. With personalized dietary and lifestyle corrections, my weight reduced, cholesterol improved, and diabetes markers returned to normal. The journey also helped me understand the importance of nutrition, exercise, and discipline. I am grateful to Dietitian Heena and the REVIVA Nutrition team for their guidance and support.",
    result: "Mumbai",
  },
  {
    name: "Anu — 40 Years",
    condition: "Weight Management · PCOS · Alcoholic Fatty Liver",
    quote:
      "I initially joined REVIVA Nutrition for weight loss, but Dt. Heena's root-cause analysis revealed underlying issues including alcoholic fatty liver, irregular periods, brain fog, acidity, leg cramps, and back pain. Through a personalized one-year treatment plan combining Ayurvedic wisdom and modern nutrition, my liver health, kidney function, energy levels, and overall well-being improved significantly. The journey transformed not just my weight, but my health from within.",
    result: "Hong Kong",
  },
];

export interface TestimonialDetail {
  name: string;
  condition: string;
  quote: string;
  result: string;
  duration: string;
}

export const allTestimonials: TestimonialDetail[] = [
  {
    name: "Priya M.",
    condition: "Weight Management",
    quote:
      "The personalized nutrition plan helped me build healthier habits and feel more energetic throughout the day. I've tried countless diets before, but this approach actually worked because it fit my life.",
    result: "Lost 12 kg sustainably",
    duration: "6-month program",
  },
  {
    name: "Sunita R.",
    condition: "PCOS Support",
    quote:
      "The guidance was practical, sustainable, and easy to follow. I finally feel more in control of my health. My hormones are more balanced and I'm off medication I'd been on for years.",
    result: "Hormone levels normalized",
    duration: "12-month program",
  },
  {
    name: "Meera K.",
    condition: "Gut Health",
    quote:
      "The root-cause approach completely changed how I think about nutrition and wellness. I stopped treating symptoms and started understanding my body. The bloating I lived with for years is completely gone.",
    result: "Digestive issues resolved",
    duration: "6-month program",
  },
  {
    name: "Kavita S.",
    condition: "Hormonal Wellness",
    quote:
      "The support and accountability helped me stay consistent and make lasting changes. Having someone who understood both the science and the cultural context of my food made all the difference.",
    result: "Healthier daily habits",
    duration: "3-month program",
  },
  {
    name: "Ananya D.",
    condition: "Thyroid Management",
    quote:
      "I was skeptical that food could make such a difference for thyroid issues, but the results spoke for themselves. My doctor actually reduced my medication dosage after six months on the program.",
    result: "Medication dosage reduced",
    duration: "12-month program",
  },
  {
    name: "Ritika P.",
    condition: "Post-Pregnancy Weight",
    quote:
      "After two pregnancies, I had given up on feeling like myself again. The personalized approach helped me lose weight without crash dieting while maintaining my energy for my kids.",
    result: "Lost 18 kg post-pregnancy",
    duration: "12-month program",
  },
  {
    name: "Deepika V.",
    condition: "Sports Performance",
    quote:
      "As a competitive runner, I needed nutrition that would support my training without compromising my health. The sports-specific plan improved my performance and reduced my recovery time.",
    result: "PB improvement by 8%",
    duration: "6-month program",
  },
  {
    name: "Nishka A.",
    condition: "Diabetes Management",
    quote:
      "My blood sugar levels have been the most stable they've been in years. Learning why certain foods affect blood sugar changed my entire perspective on eating. I feel empowered, not restricted.",
    result: "HbA1c reduced by 1.4%",
    duration: "12-month program",
  },
];

export interface HeroStat {
  value: string;
  label: string;
}

export const heroStats: HeroStat[] = [
  { value: "500+", label: "Clients Guided" },
  { value: "10+", label: "Years of Practice" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "4.9", label: "Average Rating" },
];
