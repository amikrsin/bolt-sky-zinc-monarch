import { useReader } from "@/lib/reader-store";
import { Figure, Mantra, Meaning, Rule, Sheet, Slot } from "./ui";

const order = [
  { id: "purify", n: "01", label: "पवित्रीकरण" },
  { id: "achaman", n: "02", label: "आचमन" },
  { id: "sankalp-step", n: "03", label: "संकल्प" },
  { id: "deep", n: "04", label: "दीप पूजन" },
  { id: "ganesh", n: "05", label: "गणपति पूजन" },
  { id: "lakshmi", n: "06", label: "महालक्ष्मी पूजन" },
  { id: "kuber", n: "07", label: "कलश और कुबेर पूजन" },
];

function GoOrder({ go }: { go: (id: string) => void }) {
  return (
    <ol className="order">
      {order.map((step) => (
        <li key={step.n}>
          <button type="button" onClick={() => go(step.id)}>
            <em>{step.n}</em>
            <span>{step.label}</span>
          </button>
        </li>
      ))}
    </ol>
  );
}

export function RitualOpen({ go }: { go: (id: string) => void }) {
  return (
    <Sheet id="ritual-open" kicker="खण्ड 5">
      <p className="kicker">खण्ड 5 · Step-by-Step पूजा विधि</p>
      <h2 className="chapter-title">क्रमानुसार सम्पूर्ण पूजा विधि</h2>
      <p className="en">Step-by-Step Puja Rituals</p>
      <Rule />
      <p className="body">
        नोट: प्रत्येक मंत्र के बाद 'ॐ' का उच्चारण मन में रखें और बताई गई क्रिया को श्रद्धापूर्वक करें।
      </p>
      <p className="body lede">
        हर Step में अलग लिखा है — क्या करें, कौन-सी सामग्री चाहिए, मंत्र, और मंत्र का अर्थ। सामग्री वही है जो उसी Step के वाक्य में कही गई है।
      </p>
      <h3 className="subhead">पूजा का क्रम</h3>
      <GoOrder go={go} />

      <article className="ritual" id="purify">
        <span className="num">01</span>
        <div>
          <h3>पवित्रीकरण</h3>
          <p className="en">Purification</p>
          <Slot label="क्या करें?">
            <p className="body">
              अपने दाहिने हाथ में थोड़ा जल लें। इसे अपने ऊपर और पूजा सामग्री पर छिड़कें।
            </p>
          </Slot>
          <Slot label="कौन-सी सामग्री चाहिए?">
            <ul className="chips">
              <li>जल</li>
            </ul>
          </Slot>
          <Slot label="मंत्र">
            <Mantra
              lines={[
                "ॐ अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा।",
                "यः स्मरेत्पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः॥",
              ]}
              latin="Om Apavitrah Pavitro Vaa Sarva-Avasthaam Gato-Pi Vaa | Yah Smaret-Pundariikaaksham Sa Baahya-Abhyantarah Shuchih ||"
            />
          </Slot>
          <Meaning>
            भावार्थः चाहे कोई व्यक्ति किसी भी अवस्था में हो, पवित्र हो या अपवित्र, जो भगवान पुण्डरीकाक्ष (विष्णु जी) का स्मरण करता है, वह बाहर और भीतर से पवित्र हो जाता है।
          </Meaning>
        </div>
      </article>

      <article className="ritual" id="achaman">
        <span className="num">02</span>
        <div>
          <h3>आचमन</h3>
          <p className="en">Sipping Holy Water</p>
          <Slot label="क्या करें?">
            <p className="body">
              दाहिने हाथ की हथेली में चम्मच से तीन बार जल लेकर पिएँ और हर बार नीचे दिए मंत्र बोलें। चौथी बार हाथ धोने के लिए जल छोड़ें।
            </p>
          </Slot>
          <Slot label="कौन-सी सामग्री चाहिए?">
            <ul className="chips">
              <li>जल</li>
              <li>चम्मच</li>
            </ul>
          </Slot>
          <Slot label="मंत्र">
            <Mantra
              lines={[
                "ॐ केशवाय नमः",
                "ॐ नारायणाय नमः",
                "ॐ माधवाय नमः",
                "ॐ हृषिकेशाय नमः — कहकर हाथ धो लें।",
              ]}
              latin="Om Keshavaya Namah · Om Narayanaya Namah · Om Madhavaya Namah · Om Hrishikeshaya Namah"
            />
          </Slot>
          <div className="meaning">
            <p className="slot-label">मंत्र का अर्थ</p>
            <p className="body">
              इन चारों मंत्रों का अलग भावार्थ मूल पाठ में नहीं दिया गया है। चौथे मंत्र के साथ हाथ धो लें।
            </p>
          </div>
        </div>
      </article>
    </Sheet>
  );
}

export function SankalpPage() {
  const sankalp = useReader((state) => state.sankalp);
  const setSankalp = useReader((state) => state.setSankalp);
  return (
    <Sheet id="sankalp" kicker="खण्ड 5">
      <article className="ritual" id="sankalp-step">
        <span className="num">03</span>
        <div>
          <h3>संकल्प</h3>
          <p className="en">The Solemn Vow</p>
          <Slot label="क्या करें?">
            <p className="body">
              दाहिने हाथ में थोड़ा जल, अक्षत, फूल, एक सिक्का और थोड़ी सी रोली लें। आँखें बंद करके अपना नाम, अपने गोत्र का नाम (यदि ज्ञात हो), स्थान (शहर का नाम) और आज की तिथि का ध्यान करें और मन में कहें कि 'मैं अपने परिवार के सुख, समृद्धि और आरोग्यता के लिए लक्ष्मी-गणेश जी की यह पूजा कर रहा/रही हूँ।' फिर हाथ का जल भूमि पर छोड़ दें।
            </p>
          </Slot>
          <Slot label="कौन-सी सामग्री चाहिए?">
            <ul className="chips">
              <li>जल</li>
              <li>अक्षत</li>
              <li>फूल</li>
              <li>सिक्का</li>
              <li>रोली</li>
            </ul>
          </Slot>
          <div className="slot no-print">
            <p className="slot-label">संकल्प याद रखने की सहायता</p>
            <p className="body quiet">
              मूल वाक्य ऊपर ही है। नीचे नाम भर लें तो पूजा के समय पढ़ने में आसानी होगी। यह फ़ोन में सहेजा रहता है।
            </p>
            <div className="fields">
              <label>
                नाम
                <input
                  value={sankalp.name}
                  onChange={(event) => setSankalp({ name: event.target.value })}
                />
              </label>
              <label>
                गोत्र
                <input
                  value={sankalp.gotra}
                  onChange={(event) => setSankalp({ gotra: event.target.value })}
                />
              </label>
              <label>
                शहर
                <input
                  value={sankalp.city}
                  onChange={(event) => setSankalp({ city: event.target.value })}
                />
              </label>
              <label>
                तिथि
                <input
                  value={sankalp.date}
                  placeholder="जैसे कार्तिक अमावस्या"
                  onChange={(event) => setSankalp({ date: event.target.value })}
                />
              </label>
            </div>
            <div className="recall">
              <p className="body">
                मैं{sankalp.name ? `, ${sankalp.name}` : " ……"},
                {sankalp.gotra ? ` गोत्र ${sankalp.gotra}` : " गोत्र ……"},
                {sankalp.city ? `, ${sankalp.city}` : ", ……"} में
                {sankalp.date ? `, ${sankalp.date}` : ", ……"} को अपने परिवार के सुख, समृद्धि और आरोग्यता के लिए लक्ष्मी-गणेश जी की यह पूजा कर रहा/रही हूँ।
              </p>
            </div>
          </div>
          <div className="meaning">
            <p className="slot-label">मंत्र का अर्थ</p>
            <p className="body">
              इस Step में अलग श्लोक नहीं है। संकल्प का वाक्य वही है जो ऊपर उद्धरण में दिया गया है।
            </p>
          </div>
        </div>
      </article>

      <article className="ritual" id="deep">
        <span className="num">04</span>
        <div>
          <h3>दीप पूजन</h3>
          <p className="en">Lighting the Lamp</p>
          <Figure
            src="/ebook/diya.jpg"
            alt="जलता हुआ माटी का दीपक"
          />
          <Slot label="क्या करें?">
            <p className="body">
              चौकी पर रखे मुख्य दीपक को जलाएँ। दीपक को प्रणाम करें और अक्षत-फूल चढ़ाएँ।
            </p>
          </Slot>
          <Slot label="कौन-सी सामग्री चाहिए?">
            <ul className="chips">
              <li>मुख्य दीपक</li>
              <li>अक्षत</li>
              <li>फूल</li>
            </ul>
          </Slot>
          <Slot label="मंत्र">
            <Mantra
              lines={[
                "शुभं करोति कल्याणं आरोग्यं धनसंपदा।",
                "शत्रुबुद्धिविनाशाय दीपज्योतिर्नमोऽस्तु ते॥",
              ]}
              latin="Shubham Karoti Kalyaanam Aarogyam Dhana-Sampadaa | Shatru-Buddhi-Vinaashaaya Deepa-Jyotir-Namo-Stu Te ||"
            />
          </Slot>
          <Meaning>
            भावार्थः हे दीपक की लौ! आप शुभ करने वाली, कल्याण करने वाली, आरोग्य और धन-संपत्ति देने वाली हैं। हमारी अज्ञानता और नकारात्मक बुद्धि का नाश करने वाली दीपज्योति, आपको नमस्कार है।
          </Meaning>
        </div>
      </article>
    </Sheet>
  );
}

export function GaneshPuja() {
  return (
    <Sheet id="ganesh" kicker="खण्ड 5">
      <article className="ritual">
        <span className="num">05</span>
        <div>
          <h3>गणपति पूजन</h3>
          <p className="en">Worshipping Lord Ganesha</p>
          <Figure
            src="/ebook/ganesh.jpg"
            alt="भगवान गणेश का पारंपरिक चित्र"
            portrait
          />
          <Slot label="क्या करें?">
            <p className="body">
              सबसे पहले गणेश जी का ध्यान करें। गणेश जी को लाल फूल, दूर्वा (दूब घास), रोली का तिलक और जनेऊ अर्पित करें। मोदक या लड्डू का भोग लगाएँ।
            </p>
          </Slot>
          <Slot label="कौन-सी सामग्री चाहिए?">
            <ul className="chips">
              <li>लाल फूल</li>
              <li>दूर्वा (दूब घास)</li>
              <li>रोली</li>
              <li>जनेऊ</li>
              <li>मोदक या लड्डू</li>
            </ul>
          </Slot>
          <Slot label="मंत्र">
            <Mantra
              lines={[
                "वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभा।",
                "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
              ]}
              latin="Vakratunda Mahaakaaya Surya-Koti-Samaprabha | Nirvighnam Kuru Me Deva Sarva-Kaaryeshu Sarvadaa | |"
            />
          </Slot>
          <Meaning>
            भावार्थः हे टेढ़ी सूंड वाले, विशाल शरीर वाले, करोड़ों सूर्यों के समान तेजस्वी देव! मेरे सभी कार्यों को हमेशा बाधा रहित (निर्विघ्न) पूरा करें।
          </Meaning>
        </div>
      </article>
    </Sheet>
  );
}

export function LakshmiPuja() {
  return (
    <Sheet id="lakshmi" kicker="खण्ड 5">
      <article className="ritual">
        <span className="num">06</span>
        <div>
          <h3>महालक्ष्मी पूजन</h3>
          <p className="en">Worshipping Goddess Lakshmi</p>
          <Figure
            src="/ebook/lakshmi.jpg"
            alt="माता लक्ष्मी का पारंपरिक चित्र"
            portrait
          />
          <Slot label="क्या करें?">
            <p className="body">
              अब हाथ में कमल या गुलाब का फूल लेकर माता लक्ष्मी का ध्यान करें। माता को रोली, अक्षत, सिंदूर चढ़ाएँ। इत्र लगाएँ। खील-बताशे, कौड़ियां, कमल गट्ठा और मिठाई का भोग लगाएँ। वस्त्र या कलावा अर्पित करें।
            </p>
          </Slot>
          <Slot label="कौन-सी सामग्री चाहिए?">
            <ul className="chips">
              <li>कमल या गुलाब</li>
              <li>रोली</li>
              <li>अक्षत</li>
              <li>सिंदूर</li>
              <li>इत्र</li>
              <li>खील-बताशे</li>
              <li>कौड़ियां</li>
              <li>कमल गट्ठा</li>
              <li>मिठाई</li>
              <li>वस्त्र या कलावा</li>
            </ul>
          </Slot>
          <Slot label="मंत्र">
            <Mantra
              lines={[
                "ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद।",
                "ॐ श्रीं ह्रीं श्रीं महालक्ष्म्यै नमः॥",
              ]}
              latin="Om Shreem Hreem Shreem Kamale Kamalaalaye Praseed Praseed | Om Shreem Hreem Shreem Mahaa-Lakshmyai Namah | |"
            />
          </Slot>
          <Meaning>
            भावार्थः हे कमल के आसन पर विराजमान होने वाली परम कृपालु महालक्ष्मी! आप मुझ पर प्रसन्न होइए, मुझ पर अपनी कृपा दृष्टि बनाए रखिए। आपको बारंबार प्रणाम है।
          </Meaning>
        </div>
      </article>
    </Sheet>
  );
}

export function KuberPuja() {
  return (
    <Sheet id="kuber" kicker="खण्ड 5">
      <article className="ritual">
        <span className="num">07</span>
        <div>
          <h3>कलश और कुबेर पूजन</h3>
          <p className="en">Kalash & Kuber Puja</p>
          <Figure
            src="/ebook/kalash.jpg"
            alt="स्थापित कलश"
            portrait
          />
          <Slot label="क्या करें?">
            <p className="body">
              <strong>कलश पूजनः</strong> कलश देव पर रोली, अक्षत और फूल चढ़ाकर प्रणाम करें।
            </p>
            <p className="body lede">
              <strong>कुबेर/तिजोरी पूजनः</strong> अपने घर के गहने, पैसे या बही-खाते (व्यापार की डायरी) पर तिलक लगाएँ और हाथ जोड़कर प्रार्थना करें कि धन का भंडार हमेशा भरा रहे।
            </p>
          </Slot>
          <Slot label="कौन-सी सामग्री चाहिए?">
            <ul className="chips">
              <li>रोली</li>
              <li>अक्षत</li>
              <li>फूल</li>
              <li>गहने, पैसे या बही-खाता</li>
            </ul>
          </Slot>
          <Slot label="मंत्र">
            <p className="body">
              इस Step में मूल पाठ ने अलग श्लोक नहीं दिया। प्रार्थना वही है — धन का भंडार हमेशा भरा रहे। खाता पूजन का मंत्र अगले खण्ड में है।
            </p>
          </Slot>
          <div className="meaning">
            <p className="slot-label">मंत्र का अर्थ</p>
            <p className="body">इस चरण का अलग भावार्थ मूल पाठ में नहीं है।</p>
          </div>
        </div>
      </article>
    </Sheet>
  );
}

const khataSteps = [
  "स्थान चयनः मुख्य लक्ष्मी-गणेश जी की चौकी के सामने या दाहिनी ओर एक साफ लाल कपड़ा बिछाकर अपने बही-खाते, तिजोरी की चाबी या लैपटॉप को रखें।",
  "स्वास्तिक निर्माणः नवीन बही-खाते या डायरी के मुख्य पृष्ठ (कवर) पर रोली से 'स्वास्तिक' का चिह्न बनाएँ। स्वास्तिक के दाईं ओर 'शुभ' और बाईं ओर 'लाभ' लिखें। बीच में 'श्री गणेशाय नमः' या 'श्री महालक्ष्म्यै नमः' लिखें।",
  "कलम पूजनः नई कलम (Pen) पर मौली (कलावा) बाँधें और उस पर रोली का तिलक लगाएँ।",
  "अर्पण क्रियाः बही-खाते और पेन पर गंगाजल छिड़कें। इसके बाद अक्षत (चावल), फूल, धूप और दीप दिखाकर पूजा करें। खील-बताशे का भोग लगाएँ।",
  "प्रार्थना मंत्रः हाथ जोड़कर कुबेर देव और माता लक्ष्मी से व्यवसाय में वृद्धि और बुद्धि की स्थिरता के लिए प्रार्थना करें: ॐ श्री कुबेराय नमः। ॐ व्यापार वृद्धिकराय नमः।",
];

export function Khata() {
  return (
    <Sheet id="khata" kicker="खण्ड 5.1">
      <p className="kicker">खण्ड 5.1</p>
      <h2 className="chapter-title">व्यापारिक बही-खाता एवं खाता पूजन विधि</h2>
      <p className="en">Business Ledger & Account Puja</p>
      <Rule />
      <div className="split">
        <Figure
          src="/ebook/ledger.jpg"
          alt="कपड़े की बही, लाल कलम और सिक्के"
          caption="बही, दयाल-लेखनी और सिक्के"
        />
        <p className="body">
          उत्तर भारत के व्यावसायिक परिवारों, व्यापारियों और कामकाजी पेशेवरों के लिए दिवाली के दिन अपने व्यापारिक बही-खाते, लैपटॉप, पेन या वित्तीय डायरी का पूजन करना अत्यंत महत्वपूर्ण माना जाता है। इसे शारदा पूजन या खाता पूजन भी कहते हैं।
        </p>
      </div>
      <h3 className="subhead">आवश्यक अतिरिक्त सामग्री</h3>
      <ul className="chips">
        <li>नवीन बही-खाता (लेजर), डायरी या वह लैपटॉप जिस पर आप काम करते हैं।</li>
        <li>नया लाल पेन या कलम (दयाल-लेखनी)।</li>
        <li>केसर या हल्दी मिश्रित रोली।</li>
      </ul>
      <h3 className="subhead">पूजन की सरल चरणबद्ध विधि</h3>
      <ol className="steps">
        {khataSteps.map((step, index) => (
          <li key={step}>
            <span className="num">0{index + 1}</span>
            <p className="step-copy">{step}</p>
          </li>
        ))}
      </ol>
      <h3 className="subhead">कवर पर लिखने का क्रम</h3>
      <p className="body quiet">
        मूल वाक्य के अनुसार: स्वास्तिक के बाईं ओर लाभ, दाईं ओर शुभ, और बीच में नाम। चिह्न रोली से बनाना है — यहाँ केवल जगह दिखाई गई है।
      </p>
      <div className="ledger-mock" aria-label="बही के कवर पर शुभ, लाभ और स्वास्तिक का स्थान">
        <div className="ledger-side">लाभ</div>
        <div className="ledger-mid">
          <span className="ledger-word">स्वास्तिक</span>
          <span>श्री गणेशाय नमः</span>
          <span className="quiet">या श्री महालक्ष्म्यै नमः</span>
        </div>
        <div className="ledger-side">शुभ</div>
      </div>
      <Slot label="मंत्र">
        <Mantra
          lines={["ॐ श्री कुबेराय नमः।", "ॐ व्यापार वृद्धिकराय नमः।"]}
        />
      </Slot>
    </Sheet>
  );
}
