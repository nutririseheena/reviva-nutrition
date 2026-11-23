export const siteConfig = {
  brand: "Reviva Nutrition",
  owner: "Heena",

  contact: {
    phone: "+918169563336",
    phoneDisplay: "+91 81695 63336",
    email: "nutririseheena@gmail.com",
    location: "Mumbai, Maharashtra",
  },

  payment: {
    upi: "8169563336",
    upi_id: "9930548506@cnrb",
  },

  googleReview: {
    url: "https://www.google.com/search?sca_esv=6391c1416c05a982&sxsrf=APpeQntUlSbolTqwq8ZwBRBS4Cg7MZ7NCg:1783176070950&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_4vahOp4Alli6gBTdd6JxAKfcS1nfpsaBac69EBOuz-IiKJbWvgUs1FSJRuCcUlyU9eqPEOTvwmZcPhDfKzOGVeBmeaNlUscUnxzvXik-eTBmE7piw%3D%3D&q=Reviva+Nutrition+Reviews&sa=X&ved=2ahUKEwjvoJ_CoLmVAxWiyDgGHWVnEPUQ0bkNegQIHBAF&biw=1440&bih=818&dpr=2#lrd=0x6aa5ee23c80f1b8f:0x9626852ff3da4cb3,1,,,,",
  },

  social: {
    instagram: "https://www.instagram.com/dietician_heenauy?stkn=MTczN25sZm1idnEzbg==",
    facebook: "https://www.facebook.com/share/19cMr6N3Xq/",
    linkedin: "https://www.linkedin.com/in/dietitian-heena-5709a7371/",
    youtube: "https://www.youtube.com/@NutriRiseHeena",
  },
};

export interface NavSubLink {
  href: string;
  label: string;
}

export interface NavLink {
  href: string;
  label: string;
  submenu?: NavSubLink[];
}

export const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
    submenu: [
      { href: "/#home-healing-journey", label: "Healing Journey" },
      { href: "/#about-preview", label: "About Heena" },
      { href: "/#three-pillars", label: "Three Pillars" },
      { href: "/#real-stories", label: "Success Stories" },
      { href: "/#myths-facts-preview", label: "Myths & Facts" },
    ],
  },
  {
    href: "/about",
    label: "About",
    submenu: [
      { href: "/about#about-bio", label: "Meet Heena" },
      { href: "/about#about-impact", label: "Creating Awareness" },
      { href: "/about#learn-with-me", label: "Learn With Me" },
    ],
  },
  {
    href: "/consult",
    label: "Consult",
    submenu: [
      { href: "/consult#healing-journey", label: "Your Personalized Healing Journey" },
      { href: "/consult#how-it-works", label: "How The Treatment Program Works" },
      { href: "/consult#consult-form", label: "Consultation Form" },
      { href: "/consult#payment-section", label: "Payment Section" },
    ],
  },
  {
    href: "/testimonials",
    label: "Testimonials",
    submenu: [
      { href: "/testimonials#testimonials-grid", label: "Success Stories" },
      { href: "/testimonials#share-feedback", label: "Share Your Story" },
      { href: "/testimonials#myths-facts", label: "Myths & Facts" },
    ],
  },
  { href: "/about#invite-form", label: "Invite Heena" },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/consult", label: "Consult" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
];
