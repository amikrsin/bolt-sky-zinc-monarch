export type PageMeta = {
  id: string;
  title: string;
  short: string;
};

export const pages: PageMeta[] = [
  { id: "cover", title: "आवरण", short: "आवरण" },
  { id: "toc", title: "विषय-सूची", short: "सूची" },
  { id: "intro", title: "खण्ड 1 · परिचय एवं महत्व", short: "परिचय" },
  { id: "samagri", title: "खण्ड 2 · पूजा सामग्री", short: "सामग्री" },
  { id: "naivedya", title: "खण्ड 2 · नैवेद्य, फल और पुष्प", short: "नैवेद्य" },
  { id: "prep", title: "खण्ड 3 · पूर्व तैयारी", short: "तैयारी" },
  { id: "altar", title: "खण्ड 4 · वेदी और मूर्ति", short: "वेदी" },
  { id: "kalash", title: "खण्ड 4 · कलश स्थापना", short: "कलश" },
  { id: "ritual-open", title: "खण्ड 5 · पूजा का क्रम", short: "पूजा क्रम" },
  { id: "sankalp", title: "खण्ड 5 · संकल्प और दीप", short: "संकल्प" },
  { id: "ganesh", title: "खण्ड 5 · गणपति पूजन", short: "गणेश" },
  { id: "lakshmi", title: "खण्ड 5 · महालक्ष्मी पूजन", short: "लक्ष्मी" },
  { id: "kuber", title: "खण्ड 5 · कलश और कुबेर", short: "कुबेर" },
  { id: "khata", title: "खण्ड 5.1 · खाता पूजन", short: "खाता" },
  { id: "stotra-a", title: "खण्ड 5.2 · श्लोक १–२", short: "स्तोत्र १–२" },
  { id: "stotra-b", title: "खण्ड 5.2 · श्लोक ३–४", short: "स्तोत्र ३–४" },
  { id: "stotra-c", title: "खण्ड 5.2 · श्लोक ५–६", short: "स्तोत्र ५–६" },
  { id: "stotra-d", title: "खण्ड 5.2 · श्लोक ७–८", short: "स्तोत्र ७–८" },
  { id: "aarti-ganesh", title: "खण्ड 6 · गणेश आरती", short: "गणेश आरती" },
  { id: "aarti-lakshmi", title: "खण्ड 6 · लक्ष्मी आरती", short: "लक्ष्मी आरती" },
  { id: "kshama", title: "खण्ड 6 · पुष्पांजलि और क्षमा", short: "क्षमा" },
  { id: "notes", title: "संपादकीय टिप्पणी", short: "टिप्पणी" },
];

export function folioOf(id: string) {
  const index = pages.findIndex((page) => page.id === id);
  return index + 1;
}

export const chapters = [
  {
    no: "01",
    id: "intro",
    title: "परिचय एवं महत्व",
    en: "Introduction",
    folio: 3,
  },
  {
    no: "02",
    id: "samagri",
    title: "सम्पूर्ण पूजा सामग्री सूची",
    en: "Puja Samagri Checklists",
    folio: 4,
  },
  {
    no: "03",
    id: "prep",
    title: "पूजा की पूर्व तैयारी",
    en: "Pre-Puja Preparation",
    folio: 6,
  },
  {
    no: "04",
    id: "altar",
    title: "वेदी निर्माण एवं मूर्ति स्थापना",
    en: "Altar Setup",
    folio: 7,
  },
  {
    no: "05",
    id: "ritual-open",
    title: "क्रमानुसार सम्पूर्ण पूजा विधि",
    en: "Step-by-Step Puja Rituals",
    folio: 9,
  },
  {
    no: "5.1",
    id: "khata",
    title: "व्यापारिक बही-खाता एवं खाता पूजन विधि",
    en: "Business Ledger & Account Puja",
    folio: 14,
  },
  {
    no: "5.2",
    id: "stotra-a",
    title: "श्री महालक्ष्म्यष्टकम् स्तोत्र",
    en: "Sri Mahalakshmyashtakam Stotram",
    folio: 15,
  },
  {
    no: "06",
    id: "aarti-ganesh",
    title: "आरती एवं क्षमा प्रार्थना",
    en: "Aarti & Conclusion",
    folio: 19,
  },
];
