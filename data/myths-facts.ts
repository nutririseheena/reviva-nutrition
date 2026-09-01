export interface MythFactPair {
  myth: string;
  fact: string;
}

export interface MythFactsCategory {
  id: string;
  title: string;
  tagline?: string;
  revivaMessage?: string;
  mythFactPairs: MythFactPair[];
}

export const pageTagline =
  "Don't let myths shape your health journey.\n\nReplace confusion with knowledge—because every informed choice brings you closer to lasting wellness.";

export const mythsFactsData: MythFactsCategory[] = [
  {
    id: "weight-gain",
    title: "Weight Gain: Myth vs Fact",
    revivaMessage: "Don't just focus on the weight. Discover what's causing it.",
    mythFactPairs: [
      {
        myth: "I gain weight because I eat too much.",
        fact: "Weight gain is not always about overeating. Hormonal imbalances, insulin resistance, poor sleep, stress, nutritional deficiencies, gut health issues, and lifestyle factors can all contribute.",
      },
      {
        myth: "Eating less is the best way to lose weight.",
        fact: "Undereating can slow metabolism, increase cravings, and make sustainable weight loss more difficult.",
      },
      {
        myth: "My weight gain is genetic, so nothing can change.",
        fact: "Genetics may influence weight, but nutrition, activity, sleep, stress management, and lifestyle habits also play a significant role.",
      },
      {
        myth: "Weight gain is the problem.",
        fact: "Weight gain is often a symptom. The real cause may lie in hormonal imbalances, insulin resistance, poor digestion, inflammation, thyroid issues, or unhealthy lifestyle patterns.",
      },
    ],
  },
  {
    id: "high-bp",
    title: "High Blood Pressure (BP): Myths vs Facts",
    revivaMessage: "Don't just manage High BP. Understand what may be driving it. ",
    mythFactPairs: [
      {
        myth: "High BP only affects older people.",
        fact: "High BP can affect adults of any age due to stress, poor diet, obesity, lack of exercise, poor sleep, and lifestyle factors.",
      },
      {
        myth: "I feel fine, so my BP must be normal.",
        fact: "High BP is often called a 'silent condition' because it may not cause noticeable symptoms until complications develop.",
      },
      {
        myth: "Only salt causes high BP.",
        fact: "While excess salt can contribute, stress, obesity, insulin resistance, poor sleep, smoking, alcohol, and lack of physical activity also play important roles.",
      },
      {
        myth: "Medication alone will solve my BP problem.",
        fact: "Medication helps manage BP, but nutrition, exercise, stress management, sleep, and healthy lifestyle habits are equally important for long-term health.",
      },
      {
        myth: "High BP is the disease.",
        fact: "High BP is often a signal that the body may be affected by underlying factors such as chronic stress, metabolic imbalance, inflammation, poor lifestyle habits, or excess weight.",
      },
    ],
  },
  {
    id: "menstrual",
    title: "Menstrual: Myths & Facts",
    tagline:
      "Your menstrual cycle is your body's monthly health report.\n\nDon't normalize discomfort. Understand your body, challenge the myths, and make informed choices.",
    mythFactPairs: [
      {
        myth: "Severe PMS pain is normal for every teen.",
        fact: "Mild discomfort is common, but severe pain that affects daily life isn't something to ignore. It may need medical evaluation, and nutrition and lifestyle changes can also support menstrual health.",
      },
      {
        myth: "Missing periods is normal in teenagers.",
        fact: "Irregular periods can occur in the first few years after menstruation begins, but frequently missed periods or long gaps should be evaluated rather than assumed to be normal.",
      },
      {
        myth: "Craving sweets or spicy food during periods is harmless.",
        fact: "Hormonal changes can increase cravings, but frequent cravings may also be influenced by blood sugar fluctuations, stress, sleep, or dietary habits. Balanced meals can help manage them.",
      },
      {
        myth: "Acne during periods is just part of being a teenager.",
        fact: "Hormonal changes can trigger acne, but persistent or severe acne may also reflect hormonal imbalances, stress, diet, or underlying health conditions.",
      },
      {
        myth: "Painful periods are something you just have to live with.",
        fact: "Painful periods shouldn't be ignored if they are severe or worsening. Understanding the underlying cause and seeking appropriate care can make a difference.",
      },
      {
        myth: "Skipping meals during periods helps reduce bloating.",
        fact: "Regular, balanced meals and staying hydrated are generally more helpful than skipping meals, which may worsen fatigue and cravings.",
      },
    ],
  },
  {
    id: "acidity",
    title: "Acidity: Myths & Facts",
    tagline:
      "Acidity is a signal — not just a stomach problem. Understand your triggers before choosing a remedy.",
    mythFactPairs: [
      {
        myth: "Acidity is caused only by spicy food.",
        fact: "Acidity can also be triggered by poor digestion, overeating, eating too fast, stress, late-night meals, excess caffeine, certain medications, and individual food intolerances.",
      },
      {
        myth: "Healthy food can never cause acidity.",
        fact: "Even nutritious foods may cause discomfort if they don't suit your digestive system, are eaten in excess, or at the wrong time. Nutrition should be personalized.",
      },
      {
        myth: "Taking antacids permanently solves acidity.",
        fact: "Antacids provide temporary symptom relief. Understanding the underlying cause is important for long-term management.",
      },
      {
        myth: "Food combinations like fish with curd always cause acidity or are toxic.",
        fact: "There is limited scientific evidence that this combination is harmful for everyone. Individual tolerance varies, and digestive health plays an important role.",
      },
      {
        myth: "Skipping meals helps reduce acidity.",
        fact: "Long gaps between meals may actually worsen acidity in some people. Regular, balanced meals are often better tolerated.",
      },
      {
        myth: "Milk is the best cure for acidity.",
        fact: "Milk may provide temporary relief for some people, but it doesn't treat the underlying cause, and for others it may even worsen symptoms.",
      },
      {
        myth: "Acidity is just a stomach problem.",
        fact: "Acidity may be influenced by digestion, eating habits, stress, sleep, gut health, medications, and lifestyle factors.",
      },
      {
        myth: "If acidity is frequent, it's normal.",
        fact: "Frequent or persistent acidity should be evaluated rather than ignored, especially if it affects your quality of life.",
      },
    ],
  },
  {
    id: "childhood-obesity",
    title: "Childhood Obesity: Myths & Facts",
    tagline: "Healthy habits in childhood lay the foundation for lifelong wellness.",
    mythFactPairs: [
      {
        myth: "Every chubby child is healthy.",
        fact: "A child's health isn't determined by appearance alone. Excess body fat may increase the risk of future health problems, even if the child appears active or healthy.",
      },
      {
        myth: "Children will naturally outgrow obesity.",
        fact: "While children grow at different rates, excess weight doesn't always disappear with age. Healthy eating habits, regular physical activity, and adequate sleep are important for healthy growth.",
      },
      {
        myth: "Childhood obesity is only caused by eating too much.",
        fact: "Weight is influenced by many factors, including food choices, physical activity, sleep, genetics, screen time, family habits, stress, and the child's overall environment.",
      },
      {
        myth: "Healthy snacks can be eaten without limits.",
        fact: "Even nutritious foods should be eaten in appropriate portions. A balanced diet is about both quality and quantity.",
      },
      {
        myth: "Children need junk food to enjoy life.",
        fact: "Children can learn to enjoy nutritious foods when healthy eating is introduced consistently and positively at home.",
      },
      {
        myth: "Physical activity alone can reverse childhood obesity.",
        fact: "Healthy weight management involves a combination of balanced nutrition, regular activity, good sleep, limited screen time, and supportive family habits.",
      },
      {
        myth: "Dieting is the solution for overweight children.",
        fact: "Children need nutrients for growth. The goal is to build healthy eating and lifestyle habits—not restrictive dieting—under the guidance of a healthcare professional when needed.",
      },
    ],
  },
  {
    id: "constipation",
    title: "Constipation: Myths & Facts",
    tagline:
      "Constipation is a symptom — not a diagnosis. Understand the root cause before choosing a remedy.",
    mythFactPairs: [
      {
        myth: "Constipation is normal if you're passing stool every day.",
        fact: "Daily bowel movements don't always mean healthy digestion. Straining, hard stools, incomplete evacuation, or bloating may still indicate constipation.",
      },
      {
        myth: "Constipation is only caused by low fibre intake.",
        fact: "Constipation can also be influenced by poor hydration, low physical activity, medications, stress, gut disorders, thyroid problems, and pelvic floor dysfunction.",
      },
      {
        myth: "Triphala works for everyone with constipation.",
        fact: "Herbal remedies like Triphala may not be suitable for everyone. The right approach depends on the underlying cause, digestive health, and other conditions. For example, someone with GERD or acid reflux should seek professional advice before using herbal supplements, as what helps one person may not suit another.",
      },
      {
        myth: "Laxatives or home remedies permanently cure constipation.",
        fact: "They may provide temporary relief, but identifying and addressing the root cause is important for long-term digestive health.",
      },
      {
        myth: "Ignoring constipation is harmless.",
        fact: "Persistent constipation can affect quality of life and may sometimes signal an underlying medical condition that deserves evaluation.",
      },
      {
        myth: "Drinking more water alone will cure constipation.",
        fact: "Hydration is important, but many people also benefit from appropriate fibre intake, physical activity, regular toilet habits, and addressing any underlying medical or digestive issues.",
      },
    ],
  },
];
