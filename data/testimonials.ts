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
  category: TestimonialCategory;
  condition: string;
  quote: string;
  result: string;
}

export const testimonialCategories = [
  "Digestive & Gut Health",
  "Autoimmune",
  "Lifestyle and Metabolic Disorder",
  "Womens Health",
  "Geriatric Nutrition - Senior Citizen",
  "Pediatric & Adolescent Nutrition",
] as const;

export type TestimonialCategory = (typeof testimonialCategories)[number];

export const allTestimonials: TestimonialDetail[] = [
  {
    name: "Ujwala Oak — 42 Years",
    category: "Digestive & Gut Health",
    condition: "Digestive & Gut Health · IBS",
    quote:
      "I thought medication was my only option for gut health—until I met Dt. Heena. I approached Dt. Heena with persistent gut issues, unsure whether nutrition alone could help. Her confidence, detailed root-cause analysis, and personalized 45-day plan gave me hope. The flexible diet, simple recipes, and continuous follow-ups made it easy to follow despite my busy schedule. I noticed improvements within just two weeks, and today my symptoms have reduced significantly with minimal medication. Thank you, Dt. Heena, for helping me heal through sustainable lifestyle changes rather than just treating the symptoms.",
    result: "Kalyan, Mumbai",
  },
  {
    name: "Santosh Kumar — 42 Years",
    category: "Digestive & Gut Health",
    condition: "Digestive & Gut Health · Piles / Fissure",
    quote:
      "After suffering from piles for 15 years, I had almost accepted that pain and lifelong medication were my only options. I tried medications for years and followed countless YouTube videos and home remedies, believing they would solve my problem—but they only provided temporary relief. Consulting Dt. Heena was my last hope. Through her detailed root-cause assessment, personalized nutrition plan, and continuous monitoring, I finally experienced lasting improvement in my piles and digestive health. This journey made me realize that not every remedy works for everyone—the right treatment begins with identifying the root cause. I'm truly grateful to the REVIVA Nutrition team for helping me regain my health naturally.",
    result: "Thane, Mumbai",
  },
  {
    name: "Ruchi Singh — 35 Years",
    category: "Digestive & Gut Health",
    condition: "Digestive & Gut Health · Bloating / Gastritis / Flatulence",
    quote:
      "The improvements I experienced were beyond my expectations. My acidity reduced by almost 80%, dark circles improved by around 50%, skin dryness reduced, allergy reactions became less frequent, and my sleep quality improved significantly. Throughout the treatment journey, I received continuous guidance on nutrition and lifestyle changes. I realized that food selection and food combinations play a vital role in health. The knowledge I gained during this process has completely changed the way I approach my health and wellbeing.",
    result: "Jaipur, Rajasthan",
  },
  {
    name: "Divya — 40 Years",
    category: "Digestive & Gut Health",
    condition: "Digestive & Gut Health · Bloating / Gastritis / Flatulence",
    quote:
      "When I approached Heena Ma'am, I was struggling with sinus issues, prediabetes, weight management challenges, acidity, and poor gut health. What made this journey different was that she didn't just focus on my symptoms—she helped me understand the connection between my body systems and the root causes behind them. For the first time, I learned how food, lifestyle, and daily habits influence overall health. Through her guidance, I made simple yet powerful changes that improved not only my health but also the way I think about wellbeing. REVIVA Nutrition beautifully combines the wisdom of Ayurveda with modern lifestyles in a practical and sustainable way. Even today, I continue to follow many of the principles I learned during the program. Heena Ma'am has remained a trusted guide through different stages of my life, and I am deeply grateful for her support, knowledge, and encouragement.",
    result: "Hongkong",
  },
  {
    name: "Jaswandi — 8 Years",
    category: "Autoimmune",
    condition: "Autoimmune · Lupus",
    quote:
      "I am Dipali Mahakal, my daughter Jaswandi she suffering from SLE lupus from last March 2021. She was taking steroids from last 2 years. After we meet with heena ma'am, I obsessed many positive changes in jaswandi's health. Wysolone (steroids) tablet completely stop from 15 june. She feel happy, healthy and energetic without steroids. Last year in June and July she suffered from high fever and rashes on her legs. Last year she start school from august only that time she can't walk also.. But this year without steroids she is healthy and happy.. Thank you very much ma'am .. It's possible only because of proper diet and yoga.. appreciate you efforts and you prepared our diet plan with consider my all condition thats why i can follow easily.",
    result: "Dombivli, Thane",
  },
  {
    name: "Jaswandi — 8 Years",
    category: "Pediatric & Adolescent Nutrition",
    condition: "Pediatric & Adolescent Nutrition · SLE Lupus",
    quote:
      "I am Dipali Mahakal, my daughter Jaswandi she suffering from SLE lupus from last March 2021. She was taking steroids from last 2 years. After we meet with heena ma'am, I obsessed many positive changes in jaswandi's health. Wysolone (steroids) tablet completely stop from 15 june. She feel happy, healthy and energetic without steroids. Last year in June and July she suffered from high fever and rashes on her legs. Last year she start school from august only that time she can't walk also.. But this year without steroids she is healthy and happy.. Thank you very much ma'am .. It's possible only because of proper diet and yoga.. appreciate you efforts and you prepared our diet plan with consider my all condition thats why i can follow easily.",
    result: "Dombivli, Thane",
  },
  {
    name: "Samruddhi — 14 Years",
    category: "Pediatric & Adolescent Nutrition",
    condition: "Pediatric & Adolescent Nutrition · Healthy Weight Loss / Fitness",
    quote:
      "From 70 kg to 58 kg — A Journey of Dedication, Discipline, and Confidence. When I started my journey at the age of 14, I weighed 70 kg and often experienced breathlessness, foot pain, low stamina, and nutritional deficiencies. Through Heena Ma'am's Gap Analysis approach, I learned how small daily habits were affecting my health. With consistent nutrition, exercise, and lifestyle changes over one year, I successfully reduced my weight to 58 kg. Along the way, my breathlessness reduced, metabolism improved, foot pain disappeared, flexibility increased, and my hemoglobin levels improved. More importantly, I gained confidence, better energy levels, and healthy habits that will stay with me for life. This journey taught me that sustainable results come from consistency, patience, and the right guidance.",
    result: "Nashik",
  },
  {
    name: "Shanaya — 15 Years",
    category: "Pediatric & Adolescent Nutrition",
    condition: "Pediatric & Adolescent Nutrition · Irregular Periods / PCOD / Low Hemoglobin",
    quote:
      "At 15, I Didn't Just Lose Weight—I Transformed My Health. When I started my journey with Heena Ma'am, I was struggling with weight gain, irregular periods, borderline thyroid concerns, slow metabolism, low hemoglobin, dark circles, late-night sleeping habits, frequent junk food consumption, and irregular eating patterns. Through personalized nutrition, lifestyle corrections, and six months of consistent discipline, I experienced a remarkable transformation. My periods became regular, metabolism improved, hemoglobin levels increased, dark circles reduced, and my energy levels improved significantly. I also developed healthier eating habits, reduced junk food cravings, and established a better sleep routine. The biggest achievement was gaining confidence and learning how small daily choices can create lasting health improvements.",
    result: "Mumbai",
  },
  {
    name: "Ananya — 18 Years",
    category: "Pediatric & Adolescent Nutrition",
    condition: "Pediatric & Adolescent Nutrition · PCOD / Acne / PMS / Low Hemoglobin",
    quote:
      "PCOD Was Affecting More Than My Periods—It Was Affecting My Confidence. At 18, I was struggling with PCOD, acne, PMS, weight gain, irregular eating habits, low hemoglobin, premature greying of hair, and frequent mood swings. I often felt irritated, tired, and disconnected from my health. Through Heena Ma'am's personalized nutrition and lifestyle guidance, I learned how my daily habits were influencing my hormones and overall wellbeing. Over the next few months, my periods became more regular, PMS symptoms reduced, acne improved, energy levels increased, and my eating habits became more structured. My hemoglobin improved, weight started moving in the right direction, and I felt calmer and more emotionally balanced. The biggest transformation was not just physical—it was gaining confidence and understanding how to take care of my body naturally.",
    result: "Mumbai",
  },
  {
    name: "Geeta Mandlik — 42 Years",
    category: "Autoimmune",
    condition: "Autoimmune · RA",
    quote:
      "When Inflammation Reduced, Life Started Moving Again. 82.6 kg to 76 kg, Less Pain, Better Mobility, New Confidence. Before joining REVIVA Nutrition, I was struggling with Rheumatoid Arthritis, body pain, joint stiffness, acidity, bloating, constipation, and constant fatigue. Through the personalized nutrition and lifestyle plan guided by Heena Ma'am, I experienced remarkable improvements in my health. My body pain, shoulder pain, finger pain, and back pain reduced significantly, while acidity, bloating, and headaches improved almost completely. I started sleeping better, feeling more energetic, and managing stress more effectively. Along with these improvements, I reduced my weight from 82.6 kg to 76 kg. Today, I feel more active, confident, and in control of my health journey.",
    result: "Thane, Mumbai",
  },
  {
    name: "Raveena Saigal — 40 Years",
    category: "Autoimmune",
    condition: "Autoimmune · Psoriasis",
    quote:
      "The transformation was visible not only on my skin but also in my blood reports. For years, I struggled with Psoriasis, recurring flare-ups, itching, and redness. After following the personalized nutrition and lifestyle plan at REVIVA Nutrition, my skin became calmer and flare-ups reduced significantly. What motivated me most was seeing improvements in my ESR, CRP, Vitamin D, and nutritional markers. My energy levels improved, inflammation reduced, and I felt healthier from within. Thank you, Heena Ma'am, for helping me understand the root cause and guiding me on this healing journey.",
    result: "Katni, Bhopal",
  },
  {
    name: "Richa Nagpal — 54 Years",
    category: "Autoimmune",
    condition: "Autoimmune · Eczema",
    quote:
      "My Eczema Didn't Improve with Medicines Alone. Healing Began When I Addressed the Root Cause and Personalized Diet Plan. For years, I struggled with eczema, severe itching, acidity, indigestion, constipation, fatigue, and disturbed sleep. Despite taking medications, the symptoms kept returning. Through Heena Ji's personalized nutrition, pranayama, and lifestyle approach, I experienced a remarkable transformation. My itching reduced significantly, digestion improved, constipation resolved, sleep became better, and my energy levels increased. My blood reports also showed positive changes, including improvement in Fatty Liver, ESR, HS-CRP, and hemoglobin. Today, I feel healthier, calmer, and finally free from the cycle of recurring symptoms.",
    result: "Jaipur, Rajasthan",
  },
  {
    name: "Satish Savant — 50 Years",
    category: "Lifestyle and Metabolic Disorder",
    condition: "Lifestyle & Metabolic Disorder · Diabetes / Fatty Liver / High Triglycerides",
    quote:
      "From HbA1c 10.2 to 5.3 — the transformation began when I addressed the root cause, not just the symptoms. I was diagnosed with Diabetes, Grade II Fatty Liver, and high triglycerides. My HbA1c was 10.2, and I believed I would need medication for the rest of my life. After just four days on medication, I consulted Heena Ma'am and gained a completely new understanding of my health. Through a personalized nutrition plan, lifestyle changes, and yoga, I started addressing the root causes of my condition. The results were beyond my expectations—my HbA1c reduced from 10.2 to 5.3, and my Fatty Liver improved from Grade II to Grade I. Along with improved blood reports, I experienced healthy weight loss, better energy levels, and renewed confidence in my health journey. I am grateful to Heena Ma'am for her guidance, education, and continuous support.",
    result: "Thane, Mumbai",
  },
  {
    name: "Shalil Iyer — 40 Years",
    category: "Lifestyle and Metabolic Disorder",
    condition: "Lifestyle & Metabolic Disorder · High TG",
    quote:
      "I was skeptical about consulting a dietitian—today, it's one of the best health decisions I've ever made. When I started my journey in January 2024, I wasn't sure if nutrition alone could make a real difference. However, with Heena Ma'am's personalized guidance, consistent follow-ups, and practical diet plan, I began seeing remarkable changes in my health. My cholesterol and triglyceride levels improved significantly, I achieved healthy weight loss, and my overall wellbeing improved. What impressed me most was her dedication, attention to detail, and commitment to helping me stay on track. Looking back, consulting Heena Ma'am was one of the best decisions I made for my health and lifestyle.",
    result: "Powai, Mumbai",
  },
  {
    name: "Swati Nagpure — 40 Years",
    category: "Lifestyle and Metabolic Disorder",
    condition: "Lifestyle & Metabolic Disorder · Thyroid / Hypertension",
    quote:
      "When medications weren't enough and my health felt out of control, Reviva Nutrition helped me reclaim my life. I began my journey in August 2025 while struggling with severe hypertension, hyperthyroidism, weight gain, water retention, inflammation, poor sleep, leg cramps, and rising blood sugar levels. Despite taking medication twice daily, my blood pressure remained dangerously high, and I feared for my future health. Within just a few weeks of following the personalized nutrition and lifestyle plan, I started noticing positive changes. Over the next three months, my sleep improved, leg cramps disappeared, thyroid levels balanced, water retention reduced, and I achieved visible inch loss. Most importantly, my blood pressure became stable and manageable through sustainable lifestyle changes. This journey gave me not only better health but also renewed confidence, energy, and peace of mind.",
    result: "Bhandup, Mumbai",
  },
  {
    name: "Shailaja S. — 40 Years",
    category: "Lifestyle and Metabolic Disorder",
    condition: "Lifestyle & Metabolic Disorder · Gut Issues - Thyroid",
    quote:
      "From Gut Issues and Thyroid Imbalance to Better Health and Lasting Habits. When I started with REVIVA Nutrition, I was struggling with persistent gut issues and thyroid imbalance. Through Heena Ma'am's personalized guidance, structured lifestyle changes, and continuous support, I gradually experienced remarkable improvements. Today, I am free from gut issues, my thyroid is well under control, and I feel healthier and more energetic. The biggest gift has been learning sustainable habits that continue to support my health every day. Truly grateful to Heena Ma'am and the REVIVA team for their expertise and care. Highly Recommended.",
    result: "Bangalore",
  },
  {
    name: "Margaret — 48 Years",
    category: "Womens Health",
    condition: "Women's Health · Menopause",
    quote:
      "When the Root Cause Was Addressed, Everything Started Changing. No Medicines. Less Acidity. Fewer Hot Flashes. A New Hope During Menopause. I approached Heena Ma'am for hyperacidity, menopause symptoms, hot flashes, constipation, migraines, hair fall, and other health concerns that were affecting my quality of life. Through a personalized 180-day nutrition and lifestyle program, I experienced significant improvements without medication. My acidity reduced, hot flashes became less frequent, constipation improved, migraines reduced, and I noticed healthier hair, better skin, and improved hemoglobin levels. Most importantly, I gained a clear understanding of my body's nutritional needs and now feel confident managing menopause naturally. I am grateful to Heena Ma'am for giving me hope, clarity, and a healthier future.",
    result: "Mumbai",
  },
  {
    name: "Nirmala — 40 Years",
    category: "Womens Health",
    condition: "Womens Health · PMOS - Insulin Resistance",
    quote:
      "I approached Heena Ma'am after struggling with irregular periods and relying on hormonal pills for nearly six months. Instead of continuing to depend on medication, she helped me understand the root causes behind my symptoms and guided me through personalized dietary and lifestyle corrections. Within just two months, my menstrual cycles started normalizing naturally. Along with this, I experienced better energy, improved digestion, and an overall sense of wellbeing. The nutrition support helped me heal from within and gave me confidence in my body's ability to recover naturally. I feel healthier, more balanced, and truly grateful for the guidance and support provided throughout my journey. Highly Recommended!",
    result: "Mumbai",
  },
  {
    name: "Dipali Prahar Mahakal — 34 Years",
    category: "Womens Health",
    condition: "Women's Health · Heart Condition / Daily Episodes",
    quote:
      "When Surgery Seemed Like the Only Option, Nutrition Gave Me New Hope. No More Daily Attacks. Better Energy. Better Quality of Life. I have had a heart condition since childhood and underwent open-heart surgery at the age of 15. In recent years, I started experiencing daily episodes that affected my quality of life. After undergoing a TEE test, I was informed that my heart had a 95% blockage on the right side, and surgery was suggested. Before proceeding, I consulted Heena Ma'am and shared all my medical reports. Based on my health condition and lifestyle, she designed a personalized nutrition and lifestyle plan for me. By making simple changes such as improving food quality, changing cooking oil, reducing processed foods, practicing yoga, and following the recommended diet consistently, I started feeling healthier and more energetic. Within a few weeks, the daily attacks stopped, and my overall wellbeing improved significantly. I am grateful to Heena Ma'am for giving me hope, guidance, and a natural path toward better health.",
    result: "Dombivli, Thane",
  },
  {
    name: "Lalitha — 64 Years",
    category: "Geriatric Nutrition - Senior Citizen",
    condition: "Geriatric Nutrition - Senior Citizen · Diabetes / Stage 3 Kidney Health",
    quote:
      "When my kidney function and blood sugar levels started improving, I knew I was on the right path. I approached Heena Ma'am looking for a natural and sustainable way to support my Stage 3 kidney health and manage my diabetes. Through her personalized nutrition and lifestyle guidance, I learned how daily food choices could influence my health. Within just three months, I saw encouraging improvements in my reports. My creatinine improved from 1.24 to 1.15, eGFR increased from 43 to 50, fasting blood sugar reduced from 177 to 123, and post-meal sugar dropped from 237 to 139. Along with these positive changes, I felt more confident and motivated to take charge of my health. The practical diet plan and continuous support made it easy to stay consistent. I am grateful to Heena Ma'am for helping me understand my health better and guiding me toward long-term wellness.",
    result: "Mumbai",
  },
  {
    name: "Padma — 69 Years",
    category: "Geriatric Nutrition - Senior Citizen",
    condition: "Geriatric Nutrition - Senior Citizen · High BP / Fatty Liver / Insulin Resistance",
    quote:
      "10+ kg Lost. BP Controlled. Better Mobility. Better Life. I was struggling with high blood pressure, fatty liver, insulin resistance, high cholesterol, joint pain, and excess weight. Through Heena Ma'am's personalized nutrition and lifestyle guidance, I experienced remarkable improvements in my health. My BP came under control, fatty liver and cholesterol markers improved, joint pain reduced, and my walking and flexibility became much better. I also achieved a weight loss of more than 10 kg and felt more energetic and confident. This journey taught me that addressing the root cause can truly transform health.",
    result: "Mumbai",
  },
  {
    name: "Shashi — 67 Years",
    category: "Geriatric Nutrition - Senior Citizen",
    condition: "Geriatric Nutrition - Senior Citizen · Psoriasis / High BP / Cholesterol",
    quote:
      "Psoriasis Improved. BP Controlled. Cholesterol Improved. BP Medication Stopped. A New Beginning. When I started my journey, I was struggling with Psoriasis, itching, dryness, constipation, knee and leg pain, fatigue, swelling, poor sleep, high BP, and cholesterol concerns. Within the first 45 days, I noticed significant improvements in my sleep, digestion, pain levels, sweet cravings, and overall wellbeing. My skin symptoms became more manageable, leg cramps reduced, and my energy levels improved. Over the next 5 months of consistently following the personalized nutrition and lifestyle plan, my health continued to transform. My BP came under control, allowing my BP medication to be stopped under medical supervision. I also saw improvements in cholesterol levels, mobility, and overall quality of life. Today, I feel healthier, more energetic, and confident that addressing the root cause through nutrition and lifestyle changes can create lasting results.",
    result: "Madhya Pradesh",
  },
  {
    name: "Ghanshyamdas — 75 Years",
    category: "Geriatric Nutrition - Senior Citizen",
    condition: "Geriatric Nutrition - Senior Citizen · Dyslipidemia / Hypertension",
    quote:
      "I consulted Dt. Heena for bloating, gas, weakness, sweet cravings, and ongoing health concerns like dyslipidemia and hypertension. With her detailed root-cause assessment, personalized diet plans, and guidance, within 1 week I noticed around 25% improvement in my health symptoms. Gradually, with Diet Plan 1 and Diet Plan 2, significant improvement was visible in both my symptoms and blood parameters like HDL, haemoglobin, fasting insulin, and uric acid. Now I feel much more active and energetic. Highly recommended.",
    result: "Kolkata",
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
