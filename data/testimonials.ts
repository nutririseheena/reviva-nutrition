export const testimonials = [
  {
    name: "Lalitha - 65yrs",
    condition: "Cholesterol & Weight Management",
    quote:
      "I was initially sceptical about consulting a dietitian, but choosing Dt. Heena was one of the best decisions I made. Her personalized guidance, regular follow-ups, and practical nutrition plan helped me achieve significant improvements in my cholesterol, triglycerides, and weight. The results have truly transformed my health and lifestyle.",
    result: "Powai, Mumbai",
  },
  {
    name: "Sunita R.",
    condition: "PCOS Support",
    quote:
      "The guidance was practical, sustainable, and easy to follow. I finally feel more in control of my health.",
    result: "Better lifestyle balance",
  },
  {
    name: "Meera K.",
    condition: "Gut Health",
    quote: "The root-cause approach completely changed how I think about nutrition and wellness.",
    result: "Improved digestion",
  },
  {
    name: "Kavita S.",
    condition: "Hormonal Wellness",
    quote: "The support and accountability helped me stay consistent and make lasting changes.",
    result: "Healthier daily habits",
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
