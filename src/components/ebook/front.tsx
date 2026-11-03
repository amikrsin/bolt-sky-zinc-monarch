import { chapters } from "@/data/pages";
import { useReader } from "@/lib/reader-store";
import { CheckItem, Figure, Rule, Sheet } from "./ui";

const murti = [
  "भगवान गणेश और माता लक्ष्मी की नवीन मूर्तियाँ (मिट्टी, धातु या चांदी की)",
  "लकड़ी की चौकी (बाजोट)",
  "चौकी के लिए लाल या पीला सूती कपड़ा",
  "कलश (ताँबे या मिट्टी का) और ढक्कन",
  "नारियल (पानी वाला, जटा जूट सहित)",
  "आम या अशोक के 5 या 7 पत्ते",
  "अक्षत (साबुत चावल, टूटे हुए न हों)",
];

const arpan = [
  "रोली (कुमकुम) और सिंदूर",
  "चंदन (पीला या सफेद)",
  "मौली (कलावा/नोटे सूत का धागा)",
  "जनेऊ (गणेश जी के लिए)",
  "गंगाजल और शुद्ध जल",
  "धूपबत्ती और कपूर",
  "दीपक (एक बड़ा माटी/धातु का दीया अखंड ज्योत के लिए, और अन्य छोटे दीये)",
  "गाय का शुद्ध घी या तिल का तेल",
  "चई की बत्तियाँ",
];

export function Cover() {
  return (
    <Sheet id="cover" bare>
      <div className="cover-frame">
        <img
          className="cover-art"
          src="/ebook/cover.jpg"
          alt="माता लक्ष्मी और भगवान गणेश का पारंपरिक चित्र, कमल और दीपों के साथ"
        />
      </div>
      <div className="cover-plate">
        <p className="cover-inv">॥ श्री गणेशाय नमः ॥</p>
        <p className="cover-small">सम्पूर्ण</p>
        <h1>
          <span>लक्ष्मी — गणेश</span>
          <span>दिवाली पूजा विधि</span>
        </h1>
        <div className="cover-rule" />
        <p className="cover-sub">
          गृहस्थ परिवारों के लिए सरल एवं प्रामाणिक पूजा मार्गदर्शिका
        </p>
        <p className="cover-support">
          पूजा सामग्री • संकल्प • कलश स्थापना • मंत्र • आरती
        </p>
        <p className="cover-values">श्रद्धा • सरलता • परिवार</p>
      </div>
    </Sheet>
  );
}

export function Contents({ go }: { go: (id: string) => void }) {
  return (
    <Sheet id="toc" kicker="विषय-सूची">
      <p className="kicker">इस मार्गदर्शिका में शामिल अनुभाग</p>
      <h2 className="chapter-title">विषय-सूची</h2>
      <Rule />
      <p className="body">
        पूजा का मूल पाठ ज्यों का त्यों रखा गया है। बीच-बीच में Checklist, Step और
        मंत्र का अर्थ अलग कर दिया गया है, ताकि घर में पढ़ते समय क्रम न टूटे।
      </p>
      <ol className="toc-list">
        {chapters.map((chapter) => (
          <li key={chapter.id}>
            <button type="button" onClick={() => go(chapter.id)}>
              <span className="toc-no">{chapter.no}</span>
              <span>
                <span className="toc-title">खण्ड {chapter.no.replace(/^0/, "")}: {chapter.title}</span>
                <span className="en">{chapter.en}</span>
              </span>
              <span className="toc-folio">{chapter.folio}</span>
            </button>
          </li>
        ))}
      </ol>
      <p className="en center-en">श्रद्धा · सरलता · परिवार</p>
    </Sheet>
  );
}

export function Intro() {
  return (
    <Sheet id="intro" kicker="खण्ड 1">
      <p className="kicker">खण्ड 1</p>
      <h2 className="chapter-title">परिचय एवं महत्व</h2>
      <p className="en">Introduction</p>
      <Rule />
      <div className="split">
        <Figure
          src="/ebook/lotus.jpg"
          alt="कमल के फूल, शांत जल पर"
          caption="दीपावली की रात — धन के साथ विवेक"
          portrait
        />
        <div>
          <p className="body lede">
            दीपावली का पावन पर्व कार्तिक मास की अमावस्या को मनाया जाता है। सनातन धर्म में इस रात्रि का विशेष आध्यात्मिक और भौतिक महत्व है। इस दिन धन, ऐश्वर्य और समृद्धि की अधिष्ठात्री देवी महालक्ष्मी तथा बुद्धि, विवेक और विघ्नविनाशक भगवान श्री गणेश की संयुक्त पूजा का विधान है।
          </p>
        </div>
      </div>
      <h3 className="subhead">लक्ष्मी-गणेश की संयुक्त पूजा का रहस्य</h3>
      <div className="panel-grid">
        <article className="panel">
          <p className="body">
            <strong>विवेक और धन का संतुलनः</strong> देवी लक्ष्मी धन की प्रतीक हैं और भगवान गणेश बुद्धि के। बिना बुद्धि और विवेक के धन का अनर्थ हो सकता है। इसलिए लक्ष्मी जी के साथ गणेश जी की पूजा की जाती है ताकि प्राप्त धन कल्याणकारी हो।
          </p>
        </article>
        <article className="panel panel-ink">
          <p className="body">
            <strong>विघ्नहीन समृद्धिः</strong> भगवान गणेश सभी शुभ कार्यों के अग्रपूज्य हैं। वे मार्ग की बाधाओं को दूर करते हैं, जिससे लक्ष्मी जी का आगमन स्थायी और सुखद होता है।
          </p>
        </article>
      </div>
    </Sheet>
  );
}

function Group({
  title,
  ids,
  items,
  image,
  alt,
}: {
  title: string;
  ids: string[];
  items: string[];
  image: string;
  alt: string;
}) {
  return (
    <section>
      <div className="group-head">
        <img src={image} alt={alt} />
        <h3>{title}</h3>
      </div>
      <div className="checks">
        {items.map((item, index) => (
          <CheckItem key={ids[index]} id={ids[index]}>
            {item}
          </CheckItem>
        ))}
      </div>
    </section>
  );
}

export function Samagri() {
  const checks = useReader((state) => state.checks);
  const clearChecks = useReader((state) => state.clearChecks);
  const murtiIds = murti.map((_, index) => `m-${index}`);
  const arpanIds = arpan.map((_, index) => `a-${index}`);
  const done = [...murtiIds, ...arpanIds].filter((id) => checks[id]).length;
  return (
    <Sheet id="samagri" kicker="खण्ड 2 · Checklist">
      <p className="kicker">खण्ड 2 · Printable Checklist</p>
      <h2 className="chapter-title">सम्पूर्ण पूजा सामग्री सूची</h2>
      <p className="en">Puja Samagri Checklists</p>
      <Rule />
      <p className="body">
        पूजा शुरू करने से पहले इन सभी सामग्रियों को एक स्थान पर एकत्रित कर लें।
      </p>
      <p className="body lede">
        इस Checklist पर निशान लगाते जाएँ। निशान इसी फ़ोन में सहेजा रहता है, ताकि बीच पूजा में किसी सामान के लिए उठना न पड़े। कोई मूल सामग्री हटाई नहीं गई है।
      </p>
      <Group
        title="1. मुख्य मूर्तियाँ और स्थापना सामग्री"
        ids={murti.map((_, index) => `m-${index}`)}
        items={murti}
        image="/ebook/ganesh.jpg"
        alt="भगवान गणेश का पारंपरिक चित्र"
      />
      <Group
        title="2. पूजन और अर्पण सामग्री"
        ids={arpan.map((_, index) => `a-${index}`)}
        items={arpan}
        image="/ebook/thali.jpg"
        alt="पूजा की थाली, दीप और फूलों के साथ"
      />
      <div className="tally no-print">
        <p className="body quiet">
          इस पृष्ठ पर: {done} / {murti.length + arpan.length}
        </p>
        <button type="button" className="linkish" onClick={clearChecks}>
          सारे निशान मिटाएँ
        </button>
      </div>
    </Sheet>
  );
}

const naivedya = [
  "ताजे फूल (विशेषकर लाल गुलाब या कमल और गेंदा) और पुष्पमाला",
  "दूर्वा (दूब घास, गणेश जी के लिए अनिवार्य)",
  "पंचामृत (दूध, दही, घी, शहद और चीनी का मिश्रण)",
  "ऋतु फल (सेब, केला, सिंघाड़ा, अनार)",
  "कमल गट्ठा और कीड़ियां",
  "खील और बताशे",
  "मिठाई (लड्डू और पेड़े)",
  "पान के पत्ते और सुपारी",
  "इलायची और लौंग",
  "दक्षिणा (कुछ सिक्के या नोट)",
];

export function Naivedya() {
  return (
    <Sheet id="naivedya" kicker="खण्ड 2 · नैवेद्य">
      <p className="kicker">खण्ड 2 · जारी Checklist</p>
      <h2 className="chapter-title">नैवेद्य, फल और पुष्प</h2>
      <Rule />
      <div className="split">
        <Figure
          src="/ebook/thali.jpg"
          alt="फूल, दीप और अक्षत से सजी पूजा थाली"
        />
        <p className="body">
          तीसरा समूह नैवेद्य का है। खरीदते समय इसी पृष्ठ पर निशान लगा दें। दूर्वा गणेश जी के लिए अनिवार्य कही गई है — इसे अलग से देख लें।
        </p>
      </div>
      <Group
        title="3. नैवेद्य, फल और पुष्प"
        ids={naivedya.map((_, index) => `n-${index}`)}
        items={naivedya}
        image="/ebook/lotus.jpg"
        alt="कमल के फूल"
      />
    </Sheet>
  );
}

const prep = [
  "घर की स्वच्छता: सुबह ही पूरे घर की अच्छी तरह सफाई करें। मुख्य द्वार पर हल्दी और पानी से स्वास्तिक बनाएँ या गंगाजल छिड़कें।",
  "तोरण और रंगोली: मुख्य द्वार पर आम या अशोक के पत्तों का तोरण लगाएँ। द्वार पर सुंदर रंगोली बनाएँ।",
  "चौकी की दिशा: पूजा के लिए उत्तर या पूर्व दिशा की ओर मुख करके बैठना सबसे उत्तम माना जाता है। चौकी को इसी प्रकार स्थापित करें।",
  "स्नान और वस्त्र: पूजा में बैठने से पहले परिवार के सभी सदस्य स्नान कर स्वच्छ वस्त्र (विशेषकर पीले, लाल या केसरिया रंग के पारंपरिक वस्त्र) धारण करें। काले या नीले रंग के वस्त्रों से बचें।",
];

export function Prep() {
  return (
    <Sheet id="prep" kicker="खण्ड 3">
      <p className="kicker">खण्ड 3</p>
      <h2 className="chapter-title">पूजा की पूर्व तैयारी</h2>
      <p className="en">Pre-Puja Preparation</p>
      <Rule />
      <div className="split">
        <Figure
          src="/ebook/door.jpg"
          alt="आम के तोरण और दीपों वाला मुख्य द्वार"
          caption="तोरण, रंगोली और द्वार के दीप — सायंकाल से पहले"
        />
        <div>
          <p className="body">
            सफल और शांत चित्त पूजा के लिए सायंकाल से पहले यह तैयारियाँ पूरी कर लें:
          </p>
          <ol className="steps">
            {prep.map((item, index) => (
              <li key={item}>
                <span className="num">0{index + 1}</span>
                <p className="step-copy">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Sheet>
  );
}

export function Altar() {
  return (
    <Sheet id="altar" kicker="खण्ड 4">
      <p className="kicker">खण्ड 4</p>
      <h2 className="chapter-title">वेदी निर्माण एवं मूर्ति स्थापना</h2>
      <p className="en">Altar Setup</p>
      <Rule />
      <ol className="steps">
        <li>
          <span className="num">01</span>
          <div>
            <h3 className="subhead tight">Step 1: चौकी सजाना</h3>
            <p className="step-copy">
              लकड़ी की चौकी पर गंगाजल छिड़ककर उसे पवित्र करें। उसके ऊपर लाल या पीला कपड़ा बिछाएँ।
            </p>
          </div>
        </li>
        <li>
          <span className="num">02</span>
          <div>
            <h3 className="subhead tight">Step 2: मूर्ति स्थापना का सही नियम</h3>
            <p className="step-copy">
              चौकी पर दाईं ओर (बैठने वाले के दाहिने हाथ की तरफ) भगवान गणेश को स्थापित करें। चौकी पर बाईं ओर माता लक्ष्मी को स्थापित करें।
            </p>
          </div>
        </li>
      </ol>
      <div className="callout">
        <p className="body">
          <strong>ध्यान दें:</strong> हमेशा लक्ष्मी जी गणेश जी के दाहिनी ओर (हमारी बाईं ओर) बैठती हैं, क्योंकि वे गणेश जी की संन्यासी माता के रूप में नहीं बल्कि चंचल धन देवी के रूप में शांत बुद्धि के साथ विराजती हैं। मूर्तियों के आगे थोड़े से अक्षत रखकर उन पर धन की पोटली, कुबेर यंत्र या सोने-चांदी के सिक्के रखें।
        </p>
      </div>
      <h3 className="subhead">बैठने वाले की ओर से चौकी</h3>
      <p className="body lede quiet">
        यह चित्र केवल ऊपर लिखे वाक्यों को दिखाता है। कोई नया दिशा-नियम नहीं जोड़ा गया।
      </p>
      <div className="altar" aria-label="चौकी पर मूर्तियों का स्थान">
        <div className="altar-row">
          <div className="seat">
            <img src="/ebook/lakshmi.jpg" alt="माता लक्ष्मी" />
            <p>बाईं ओर · माता लक्ष्मी</p>
          </div>
          <div className="seat">
            <img src="/ebook/ganesh.jpg" alt="भगवान गणेश" />
            <p>दाईं ओर · श्री गणेश</p>
          </div>
        </div>
        <p className="you-are">आप यहाँ बैठें — मुख उत्तर या पूर्व की ओर</p>
      </div>
    </Sheet>
  );
}

export function Kalash() {
  return (
    <Sheet id="kalash" kicker="खण्ड 4 · कलश">
      <p className="kicker">खण्ड 4 · विशेष</p>
      <h2 className="chapter-title">कलश स्थापना</h2>
      <p className="en">Kalash Sthapana</p>
      <Rule />
      <div className="split">
        <Figure
          src="/ebook/kalash.jpg"
          alt="आम के पत्तों और नारियल सहित ताँबे का कलश"
          caption="कलश का मुख अपनी तरफ रखें"
          portrait
        />
        <div>
          <p className="kicker">Step 3</p>
          <p className="body">
            लक्ष्मी जी के पास (या चौकी के सामने) अनाज (गेहूँ या चावल) की एक छोटी ढेरी बनाएँ। उस पर ताँबे या मिट्टी का कलश रखें। कलश में शुद्ध जल और थोड़ा गंगाजल भरें। कलश के अंदर एक सुपारी, एक सिक्का, थोड़ी दूर्वा और हल्दी की गांठ डालें। कलश के मुख पर मौली (कलावा) बाँधें और कंठ पर रोली से स्वास्तिक बनाएँ। कलश के ऊपर आम के 5 या 7 पत्ते इस प्रकार रखें कि वे बाहर दिखाई दें। एक कटोरी में चावल भरकर कलश के ऊपर रखें और उसके ऊपर जटावाला नारियल (लाल कपड़े या कलावा में लपेटकर) स्थापित करें। कलश का मुख अपनी तरफ होना चाहिए।
          </p>
        </div>
      </div>
    </Sheet>
  );
}
