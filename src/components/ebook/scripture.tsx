import { Figure, Mantra, Meaning, Rule, Sheet } from "./ui";

function Verse({
  n,
  lines,
  latin,
  meaning,
}: {
  n: string;
  lines: string[];
  latin: string;
  meaning: string;
}) {
  return (
    <figure className="verse">
      <div className="verse-no">{n}</div>
      <blockquote className="mantra">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </blockquote>
      <p className="latin">{latin}</p>
      <figcaption className="meaning">
        <p className="slot-label">भावार्थ</p>
        <p>{meaning}</p>
      </figcaption>
    </figure>
  );
}

export function StotraA() {
  return (
    <Sheet id="stotra-a" kicker="खण्ड 5.2">
      <div className="scripture-open">
        <div>
          <p className="kicker">खण्ड 5.2</p>
          <h2 className="chapter-title">श्री महालक्ष्म्यष्टकम् स्तोत्र</h2>
          <p className="en">Sri Mahalakshmyashtakam Stotram</p>
          <Rule />
          <p className="body">
            आरती से पूर्व, माता लक्ष्मी की विशेष कृपा और स्थिर वास के लिए इस दिव्य स्तोत्र का पाठ सपरिवार करें।
          </p>
          <p className="body lede quiet">
            हर श्लोक में पहले संस्कृत, फिर उच्चारण, फिर सरल अर्थ है। आठों श्लोक अलग-अलग पृष्ठों पर हैं, ताकि मंत्र छोटा न करना पड़े।
          </p>
        </div>
        <Figure src="/ebook/lotus.jpg" alt="कमल के फूल" />
      </div>
      <Verse
        n="१"
        lines={[
          "नमस्तेऽस्तु महामये श्रीपीठे सुरपूजिते।",
          "शङ्खचक्रगदाहस्ते महालक्ष्मी नमोऽस्तु ते॥ १॥",
        ]}
        latin="Namaste-Stu Mahaa-Magye Shree-Peethe Sura-Poojite | Shankha-Chakra-Gadaa-Haste Mahaa-Lakshmi Namo-Stu Te || 1 ||"
        meaning="भावार्थः हे महामागे! हे श्रीपीठ पर स्थित और देवताओं से पूजित होने वाली जननी! आपके हाथों में शंख, चक्र और गदा हैं। हे महालक्ष्मी! आपको प्रणाम है।"
      />
      <Verse
        n="२"
        lines={[
          "नमस्ते गरुडाश्छे कोलासुरभयङ्करी।",
          "सर्वपापहरे देवि महालक्ष्मी नमोऽस्तु ते॥ २॥",
        ]}
        latin="Namaste Garuda-Aaroodhe Kola-Asura-Bhayankari | Sarva-Paapa-Hare Devi Mahaa-Lakshmi Namo-Stu Te || 2 ||"
        meaning="भावार्थः हे गरुड़ पर सवारी करने वाली और कोलासुर नाम के दैत्य को भयभीत करने वाली! हे भक्तों के सब पापों को हरने वाली देवी महालक्ष्मी! आपको प्रणाम है।"
      />
    </Sheet>
  );
}

export function StotraB() {
  return (
    <Sheet id="stotra-b" kicker="खण्ड 5.2">
      <p className="kicker">श्री महालक्ष्म्यष्टकम्</p>
      <h2 className="chapter-title">श्लोक तीन और चार</h2>
      <Rule />
      <Verse
        n="३"
        lines={[
          "सर्वज्ञे सर्ववरदे सर्वदुष्टभयङ्करी।",
          "सर्वदुःखहरे देवि महालक्ष्मी नमोऽस्तु ते॥ ३॥",
        ]}
        latin="Sarvajne Sarva-Varade Sarva-Dushta-Bhayankari | Sarva-Dukha-Hare Devi Mahaa-Lakshmi Namo-Stu Te || 3 ||"
        meaning="भावार्थः हे सब कुछ जानने वाली, सबको वर देने वाली और दुष्टों को भय देने वाली! हे भक्तों के सभी दुखों को दूर करने वाली देवी महालक्ष्मी! आपको प्रणाम है।"
      />
      <Verse
        n="४"
        lines={[
          "सिद्धिबुद्धिप्रदे देवि भुक्तिमुक्तिप्रदायिनि।",
          "मन्त्रमूर्त सदा देवि महालक्ष्मी नमोऽस्तु ते॥ ४॥",
        ]}
        latin="Siddhi-Buddhi-Prade Devi Bhukti-Mukti-Pradayini | Mantra-Moorate Sadaa Devi Mahaa-Lakshmi Namo-Stu Te || 4 ||"
        meaning="भावार्थः हे सिद्धि, बुद्धि, भोग और मोक्ष प्रदान करने वाली देवी! हे मन्त्रों के स्वरूप वाली देवी महालक्ष्मी! आपको सदैव प्रणाम है।"
      />
    </Sheet>
  );
}

export function StotraC() {
  return (
    <Sheet id="stotra-c" kicker="खण्ड 5.2">
      <p className="kicker">श्री महालक्ष्म्यष्टकम्</p>
      <h2 className="chapter-title">श्लोक पाँच और छह</h2>
      <Rule />
      <Verse
        n="५"
        lines={[
          "आद्यन्तरहिते देवि आद्यशक्तिमहेश्वरी।",
          "योगजे योगसम्भूते महालक्ष्मी नमोऽस्तु ते॥ ५॥",
        ]}
        latin="Aadya-Anta-Rahite Devi Aadya-Shakti-Maheshwari | Yogaje Yoga-Sambhoote Mahaa-Lakshmi Namo-Stu Te || 5 ||"
        meaning="भावार्थः हे आदि और अंत से रहित, सृष्टि की मूल शक्ति, हे महेश्वरी! हे योग से प्रकट होने वाली देवी महालक्ष्मी! आपको प्रणाम है।"
      />
      <Verse
        n="६"
        lines={[
          "स्थूलसूक्ष्ममहारौद्रे महाशक्तिमहोदरे।",
          "महापापहरे देवि महालक्ष्मी नमोऽस्तु ते॥ ६॥",
        ]}
        latin="Sthoola-Sookshma-Mahaa-Raudre Mahaa-Shakti-Mahodare | Mahaa-Paapa-Hare Devi Mahaa-Lakshmi Namo-Stu Te || 6 ||"
        meaning="भावार्थः हे स्थूल, सूक्ष्म और महारुद्र रूप वाली, महान शक्ति और बड़े उदर वाली, तथा भक्तों के बड़े से बड़े पापों का नाश करने वाली देवी महालक्ष्मी! आपको प्रणाम है।"
      />
    </Sheet>
  );
}

export function StotraD() {
  return (
    <Sheet id="stotra-d" kicker="खण्ड 5.2">
      <p className="kicker">श्री महालक्ष्म्यष्टकम्</p>
      <h2 className="chapter-title">श्लोक सात और आठ</h2>
      <Rule />
      <Verse
        n="७"
        lines={[
          "पद्मासनस्थिते देवि परब्रह्मस्वरूपिणि।",
          "परमेशि जगन्मातर्महालक्ष्मी नमोऽस्तु ते॥ ७॥",
        ]}
        latin="Padma-Aasana-Sthite Devi Para-Brahma-Swaroopini | Parameshi Jagan-Maatar-Mahaa-Lakshmi Namo-Stu Te || 7 ||"
        meaning="भावार्थः हे कमल के आसन पर विराजमान होने वाली, परब्रह्म स्वरूपिणी, परमेश्वरी और संपूर्ण जगत की माता महालक्ष्मी! आपको प्रणाम है।"
      />
      <Verse
        n="८"
        lines={[
          "श्वेताम्बरधरे देवि नानालङ्कारभूमिते।",
          "जगत्स्थिते जगन्मातर्महालक्ष्मी नमोऽस्तु ते॥ ८॥",
        ]}
        latin="Shweta-Ambara-Dhare Devi Naanaa-Alankaara-Bhooshite | Jagat-Sthite Jagan-Maatar-Mahaa-Lakshmi Namo-Stu Te || 8 ||"
        meaning="भावार्थः हे श्वेत वस्त्र धारण करने वाली, अनेक प्रकार के आभूषणों से सजी हुई, संपूर्ण जगत में व्याप्त रहने वाली हे जगन्माता महालक्ष्मी! आपको प्रणाम है।"
      />
    </Sheet>
  );
}

const ganeshAarti = [
  "जय गणेश, जय गणेश, जय गणेश देवा।",
  "माता जाकी पारवती, पिता महादेवा।।",
  "एक दंत दयावंत, char भुजा धारी।",
  "माथे सिंदूर सोहे, मूंसे की सवारी।।",
  "अंधन को आंख देत, कोढ़िन को काया।",
  "बांझन को पुत्र देत, निर्धन को माया।।",
  "हार चढ़े, फूल चढ़े और चढ़े मेवा।",
  "लड्डन का भोग लगे, संत करें सेवा।।",
  "जय गणेश, जय गणेश, जय गणेश देवा।",
  "माता जाकी पारवती, पिता महादेवा।।",
];

export function GaneshAarti() {
  return (
    <Sheet id="aarti-ganesh" kicker="खण्ड 6">
      <p className="kicker">खण्ड 6</p>
      <h2 className="chapter-title">आरती एवं क्षमा प्रार्थना</h2>
      <p className="en">Aarti & Conclusion</p>
      <Rule />
      <div className="split">
        <Figure src="/ebook/diya.jpg" alt="आरती का दीप" />
        <p className="body">
          पूजा के अंत में सपरिवार खड़े होकर पूरी श्रद्धा के साथ आरती करें। पहले गणेश जी की और फिर माता लक्ष्मी की आरती गाएँ।
        </p>
      </div>
      <h3 className="subhead">1. श्री गणेश जी की आरती</h3>
      <div className="aarti">
        {ganeshAarti.map((line, index) => (
          <p key={`${index}-${line}`}>{line}</p>
        ))}
      </div>
      <p className="body lede quiet">
        इस आरती के कुछ शब्द मूल पाण्डुलिपि के अनुसार ज्यों के त्यों हैं। ध्यान देने योग्य जगहें अंतिम पृष्ठ की संपादकीय टिप्पणी में हैं।
      </p>
    </Sheet>
  );
}

const lakshmiAarti = [
  ["ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।", "तुमको निसदिन ध्यावत, हरिविष्णु विधाता।।"],
  ["उमा रमा ब्रह्माणी, तुम ही जग-माता।", "सूर्य-चंद्रमा ध्यावत, नारद ऋषि गाता।।"],
  ["तुम पाताल-निवासिनि, तुम ही शुभदाता।", "कर्म-प्रभाव-प्रकाशिनी, भवनिधि की त्राता।।"],
  ["जिस घर में तुम रहतीं, सब सद्गुण आता।", "सब संभव हो जाता, मन नहीं घबराता।।"],
  ["तुम बिन यज्ञ न होते, वस्त्र न कोई पाता।", "खान-पान का वैभव, सब तुमसे आता।।"],
  ["शुभ-गुण मंदिर सुंदर, क्षीरोदधि-जाता।", "रत्न चतुर्दश तुम बिन, कोई नहीं पाता।।"],
  ["महालक्ष्मीजी की आरती, जो कोई नर गाता।", "उर आनंद समाता, पाप उतर जाता।।"],
];

export function LakshmiAarti() {
  return (
    <Sheet id="aarti-lakshmi" kicker="खण्ड 6">
      <p className="kicker">खण्ड 6</p>
      <h2 className="chapter-title">2. श्री लक्ष्मी जी की आरती</h2>
      <Rule />
      <div className="aarti">
        {lakshmiAarti.map((pair) => (
          <div key={pair[0]}>
            <p>{pair[0]}</p>
            <p>{pair[1]}</p>
            <p className="refrain">ॐ जय...</p>
          </div>
        ))}
      </div>
    </Sheet>
  );
}

export function Kshama() {
  return (
    <Sheet id="kshama" kicker="खण्ड 6">
      <h2 className="chapter-title">3. क्षीरोदक/पुष्पांजलि</h2>
      <p className="en">Flower Offering</p>
      <Rule />
      <p className="body">
        आरती के बाद अपने स्थान पर खड़े होकर तीन बार परिक्रमा करें (यदि स्थान हो, अन्यथा घूम जाएँ) और हाथ में फूल लेकर देवताओं को अर्पित करें।
      </p>
      <h3 className="subhead">4. क्षमा प्रार्थना</h3>
      <p className="en">Seeking Forgiveness</p>
      <p className="body lede">
        पूजा के अंत में अनजाने में हुई भूलचुक के लिए हाथ जोड़कर भगवान से क्षमा माँगें।
      </p>
      <Mantra
        lines={[
          "आवाहनं न जानामि न जानामि विसर्जनम्।",
          "पूजां चैव न जानामि क्षमस्व परमेश्वर।।",
          "मन्त्रहीनं क्रियाहीनं भक्तिहीनं जनार्दन।",
          "यत्पूजितं मया देव परिपूर्णं तदस्तु मे।।",
        ]}
        latin="Aavaahanam Na Jaanaami Na Jaanaami Visarhanam | Poojaam Chaiva Na Jaanaami Kshamasva Parameshwara | | Mantrahinnam Kriyahinnam Bhakthinnam Janaardana | Yat-Poojitam Mayaa Deva Paripooranam Tadastu Me | |"
      />
      <Meaning>
        भावार्थः हे प्रभु! मैं न तो आपको बुलाना (आवाहन) जानते हूँ और न विदा करना। मुझे पूजा करने की विधि भी नहीं मालूम। हे परमेश्वर, मुझे क्षमा करें। मैं मंत्र, क्रिया और भक्ति तीनों से हीन हूँ; फिर भी मैंने जैसी भी टूटी-फूटी पूजा की है, उसे दयापूर्वक स्वीकार कर पूर्णता प्रदान करें।
      </Meaning>
    </Sheet>
  );
}

const notes = [
  {
    where: "गणेश आरती",
    text: "पंक्ति में अंग्रेज़ी शब्द “char भुजा धारी” ज्यों का त्यों रखा है। प्रचलित पाठ में यह “चार भुजा धारी” है। मौन संशोधन नहीं किया गया।",
  },
  {
    where: "गणेश आरती",
    text: "“लड्डन का भोग लगे” मूल PDF के पाठ के अनुसार है। प्रचलित आरती में “लड्डुअन का भोग लगे” गाया जाता है।",
  },
  {
    where: "गणेश आरती",
    text: "“मूंसे की सवारी” और “बांझन” मूल वर्तनी के अनुसार हैं। प्रचलित रूप अक्सर “मूषक की सवारी” और “बाँझन” होते हैं।",
  },
  {
    where: "पूजा सामग्री",
    text: "“चई की बत्तियाँ” मूल पाठ का शब्द है। संभवतः अभिप्रेत “रुई की बत्तियाँ” है।",
  },
  {
    where: "पूजा सामग्री",
    text: "“मौली (कलावा/नोटे सूत का धागा)” में “नोटे” संभवतः “मोटे” है।",
  },
  {
    where: "पूजा सामग्री",
    text: "PDF की पाठ-परत में दूर्वा वाली पंक्ति टूटी हुई थी (“टूटी / टूब पास”)। पृष्ठ पर पढ़ा गया रूप “दूर्वा (दूब घास, गणेश जी के लिए अनिवार्य)” रखा गया है।",
  },
  {
    where: "पूजा सामग्री",
    text: "“कमल गट्ठा और कीड़ियां” मूल लेखन है। आगे महालक्ष्मी पूजन में वही वस्तु “कौड़ियां” लिखी है। दोनों जगह मूल शब्द रखे गए हैं।",
  },
  {
    where: "महालक्ष्म्यष्टकम्, श्लोक १",
    text: "श्लोक में “महामये” है, भावार्थ में “हे महामागे”। लिप्यंतरण में “Mahaa-Magye” है। तीनों मूल PDF के अनुसार अलग रखे गए हैं।",
  },
  {
    where: "महालक्ष्म्यष्टकम्, श्लोक २",
    text: "देवनागरी में “नमस्ते गरुडाश्छे” है, लिप्यंतरण में “Garuda-Aaroodhe”। दोनों मूल के अनुसार हैं; लिप्यंतरण प्रचलित “गरुडारूढे” के अधिक निकट है।",
  },
  {
    where: "क्षमा प्रार्थना",
    text: "लिप्यंतरण में “Visarhanam” और “Bhakthinnam” मूल PDF के अनुसार हैं। देवनागरी में “विसर्जनम्” और “भक्तिहीनं” है।",
  },
  {
    where: "पुष्पांजलि का शीर्षक",
    text: "मूल शीर्षक “क्षीरोदक/पुष्पांजलि” है। नीचे का निर्देश पुष्प अर्पण और परिक्रमा का है। शीर्षक नहीं बदला गया।",
  },
];

export function Notes() {
  return (
    <Sheet id="notes" kicker="संपादकीय टिप्पणी">
      <p className="kicker">पूजा का अंग नहीं</p>
      <h2 className="chapter-title">संपादकीय टिप्पणी</h2>
      <Rule />
      <p className="body">
        यह पृष्ठ परिवार की पूजा विधि नहीं है। संस्कृत मंत्र, आरती और विधि के वाक्य चुपचाप नहीं बदले गए। नीचे केवल वे जगहें हैं जहाँ मूल PDF में वर्तनी टूटी है, अंग्रेज़ी शब्द बीच में आ गया है, या देवनागरी और लिप्यंतरण आपस में नहीं मिलते।
      </p>
      <ol className="note-list">
        {notes.map((note) => (
          <li key={note.text}>
            <strong>{note.where}। </strong>
            {note.text}
          </li>
        ))}
      </ol>
      <p className="body lede">
        छापने के लिए ऊपर “छापें” दबाएँ। कागज़ A4 पर निकलेगा। Checklist के खाली चौखटे खरीद की सूची की तरह काम आते हैं।
      </p>
    </Sheet>
  );
}
