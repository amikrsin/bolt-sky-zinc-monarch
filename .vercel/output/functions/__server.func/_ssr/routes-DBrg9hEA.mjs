import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DBrg9hEA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var pages = [
	{
		id: "cover",
		title: "आवरण",
		short: "आवरण"
	},
	{
		id: "toc",
		title: "विषय-सूची",
		short: "सूची"
	},
	{
		id: "intro",
		title: "खण्ड 1 · परिचय एवं महत्व",
		short: "परिचय"
	},
	{
		id: "samagri",
		title: "खण्ड 2 · पूजा सामग्री",
		short: "सामग्री"
	},
	{
		id: "naivedya",
		title: "खण्ड 2 · नैवेद्य, फल और पुष्प",
		short: "नैवेद्य"
	},
	{
		id: "prep",
		title: "खण्ड 3 · पूर्व तैयारी",
		short: "तैयारी"
	},
	{
		id: "altar",
		title: "खण्ड 4 · वेदी और मूर्ति",
		short: "वेदी"
	},
	{
		id: "kalash",
		title: "खण्ड 4 · कलश स्थापना",
		short: "कलश"
	},
	{
		id: "ritual-open",
		title: "खण्ड 5 · पूजा का क्रम",
		short: "पूजा क्रम"
	},
	{
		id: "sankalp",
		title: "खण्ड 5 · संकल्प और दीप",
		short: "संकल्प"
	},
	{
		id: "ganesh",
		title: "खण्ड 5 · गणपति पूजन",
		short: "गणेश"
	},
	{
		id: "lakshmi",
		title: "खण्ड 5 · महालक्ष्मी पूजन",
		short: "लक्ष्मी"
	},
	{
		id: "kuber",
		title: "खण्ड 5 · कलश और कुबेर",
		short: "कुबेर"
	},
	{
		id: "khata",
		title: "खण्ड 5.1 · खाता पूजन",
		short: "खाता"
	},
	{
		id: "stotra-a",
		title: "खण्ड 5.2 · श्लोक १–२",
		short: "स्तोत्र १–२"
	},
	{
		id: "stotra-b",
		title: "खण्ड 5.2 · श्लोक ३–४",
		short: "स्तोत्र ३–४"
	},
	{
		id: "stotra-c",
		title: "खण्ड 5.2 · श्लोक ५–६",
		short: "स्तोत्र ५–६"
	},
	{
		id: "stotra-d",
		title: "खण्ड 5.2 · श्लोक ७–८",
		short: "स्तोत्र ७–८"
	},
	{
		id: "aarti-ganesh",
		title: "खण्ड 6 · गणेश आरती",
		short: "गणेश आरती"
	},
	{
		id: "aarti-lakshmi",
		title: "खण्ड 6 · लक्ष्मी आरती",
		short: "लक्ष्मी आरती"
	},
	{
		id: "kshama",
		title: "खण्ड 6 · पुष्पांजलि और क्षमा",
		short: "क्षमा"
	},
	{
		id: "notes",
		title: "संपादकीय टिप्पणी",
		short: "टिप्पणी"
	}
];
function folioOf(id) {
	return pages.findIndex((page) => page.id === id) + 1;
}
var chapters = [
	{
		no: "01",
		id: "intro",
		title: "परिचय एवं महत्व",
		en: "Introduction",
		folio: 3
	},
	{
		no: "02",
		id: "samagri",
		title: "सम्पूर्ण पूजा सामग्री सूची",
		en: "Puja Samagri Checklists",
		folio: 4
	},
	{
		no: "03",
		id: "prep",
		title: "पूजा की पूर्व तैयारी",
		en: "Pre-Puja Preparation",
		folio: 6
	},
	{
		no: "04",
		id: "altar",
		title: "वेदी निर्माण एवं मूर्ति स्थापना",
		en: "Altar Setup",
		folio: 7
	},
	{
		no: "05",
		id: "ritual-open",
		title: "क्रमानुसार सम्पूर्ण पूजा विधि",
		en: "Step-by-Step Puja Rituals",
		folio: 9
	},
	{
		no: "5.1",
		id: "khata",
		title: "व्यापारिक बही-खाता एवं खाता पूजन विधि",
		en: "Business Ledger & Account Puja",
		folio: 14
	},
	{
		no: "5.2",
		id: "stotra-a",
		title: "श्री महालक्ष्म्यष्टकम् स्तोत्र",
		en: "Sri Mahalakshmyashtakam Stotram",
		folio: 15
	},
	{
		no: "06",
		id: "aarti-ganesh",
		title: "आरती एवं क्षमा प्रार्थना",
		en: "Aarti & Conclusion",
		folio: 19
	}
];
var emptySankalp = {
	name: "",
	gotra: "",
	city: "",
	date: ""
};
var useReader = create()(persist((set) => ({
	checks: {},
	toggle: (id) => set((state) => ({ checks: {
		...state.checks,
		[id]: !state.checks[id]
	} })),
	clearChecks: () => set({ checks: {} }),
	sankalp: emptySankalp,
	setSankalp: (patch) => set((state) => ({ sankalp: {
		...state.sankalp,
		...patch
	} })),
	scale: "comfortable",
	toggleScale: () => set((state) => ({ scale: state.scale === "comfortable" ? "large" : "comfortable" }))
}), {
	name: "diwali-puja-reader",
	skipHydration: true
}));
function Sheet({ id, kicker, children, bare = false }) {
	const folio = folioOf(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		id,
		className: bare ? "sheet sheet-bare" : "sheet",
		children: [
			!bare && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "running",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "सम्पूर्ण लक्ष्मी-गणेश दिवाली पूजा विधि" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: kicker })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children }),
			!bare && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "folio",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: folio })
			})
		]
	});
}
function Rule() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rule",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})
	});
}
function Figure({ src, alt, caption, portrait = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: portrait ? "figure portrait" : "figure",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt
		}), caption ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: caption }) : null]
	});
}
function CheckItem({ id, children }) {
	const on = useReader((state) => Boolean(state.checks[id]));
	const toggle = useReader((state) => state.toggle);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "check",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "checkbox",
			checked: on,
			onChange: () => toggle(id)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })]
	});
}
function Mantra({ lines, latin }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mantra-block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mantra",
			children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
		}), latin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "latin",
			children: latin
		}) : null]
	});
}
function Meaning({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "meaning",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "slot-label",
			children: "मंत्र का अर्थ"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "body",
			children
		})]
	});
}
function Slot({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "slot",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "slot-label",
			children: label
		}), children]
	});
}
var murti = [
	"भगवान गणेश और माता लक्ष्मी की नवीन मूर्तियाँ (मिट्टी, धातु या चांदी की)",
	"लकड़ी की चौकी (बाजोट)",
	"चौकी के लिए लाल या पीला सूती कपड़ा",
	"कलश (ताँबे या मिट्टी का) और ढक्कन",
	"नारियल (पानी वाला, जटा जूट सहित)",
	"आम या अशोक के 5 या 7 पत्ते",
	"अक्षत (साबुत चावल, टूटे हुए न हों)"
];
var arpan = [
	"रोली (कुमकुम) और सिंदूर",
	"चंदन (पीला या सफेद)",
	"मौली (कलावा/नोटे सूत का धागा)",
	"जनेऊ (गणेश जी के लिए)",
	"गंगाजल और शुद्ध जल",
	"धूपबत्ती और कपूर",
	"दीपक (एक बड़ा माटी/धातु का दीया अखंड ज्योत के लिए, और अन्य छोटे दीये)",
	"गाय का शुद्ध घी या तिल का तेल",
	"चई की बत्तियाँ"
];
function Cover() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "cover",
		bare: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "cover-frame",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				className: "cover-art",
				src: "/ebook/cover.jpg",
				alt: "माता लक्ष्मी और भगवान गणेश का पारंपरिक चित्र, कमल और दीपों के साथ"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "cover-plate",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "cover-inv",
					children: "॥ श्री गणेशाय नमः ॥"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "cover-small",
					children: "सम्पूर्ण"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "लक्ष्मी — गणेश" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "दिवाली पूजा विधि" })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cover-rule" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "cover-sub",
					children: "गृहस्थ परिवारों के लिए सरल एवं प्रामाणिक पूजा मार्गदर्शिका"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "cover-support",
					children: "पूजा सामग्री • संकल्प • कलश स्थापना • मंत्र • आरती"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "cover-values",
					children: "श्रद्धा • सरलता • परिवार"
				})
			]
		})]
	});
}
function Contents({ go }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "toc",
		kicker: "विषय-सूची",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "इस मार्गदर्शिका में शामिल अनुभाग"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "विषय-सूची"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body",
				children: "पूजा का मूल पाठ ज्यों का त्यों रखा गया है। बीच-बीच में Checklist, Step और मंत्र का अर्थ अलग कर दिया गया है, ताकि घर में पढ़ते समय क्रम न टूटे।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "toc-list",
				children: chapters.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => go(chapter.id),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "toc-no",
							children: chapter.no
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "toc-title",
							children: [
								"खण्ड ",
								chapter.no.replace(/^0/, ""),
								": ",
								chapter.title
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "en",
							children: chapter.en
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "toc-folio",
							children: chapter.folio
						})
					]
				}) }, chapter.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "en center-en",
				children: "श्रद्धा · सरलता · परिवार"
			})
		]
	});
}
function Intro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "intro",
		kicker: "खण्ड 1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "खण्ड 1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "परिचय एवं महत्व"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "en",
				children: "Introduction"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/ebook/lotus.jpg",
					alt: "कमल के फूल, शांत जल पर",
					caption: "दीपावली की रात — धन के साथ विवेक",
					portrait: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body lede",
					children: "दीपावली का पावन पर्व कार्तिक मास की अमावस्या को मनाया जाता है। सनातन धर्म में इस रात्रि का विशेष आध्यात्मिक और भौतिक महत्व है। इस दिन धन, ऐश्वर्य और समृद्धि की अधिष्ठात्री देवी महालक्ष्मी तथा बुद्धि, विवेक और विघ्नविनाशक भगवान श्री गणेश की संयुक्त पूजा का विधान है।"
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "subhead",
				children: "लक्ष्मी-गणेश की संयुक्त पूजा का रहस्य"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "panel",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "body",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "विवेक और धन का संतुलनः" }), " देवी लक्ष्मी धन की प्रतीक हैं और भगवान गणेश बुद्धि के। बिना बुद्धि और विवेक के धन का अनर्थ हो सकता है। इसलिए लक्ष्मी जी के साथ गणेश जी की पूजा की जाती है ताकि प्राप्त धन कल्याणकारी हो।"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "panel panel-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "body",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "विघ्नहीन समृद्धिः" }), " भगवान गणेश सभी शुभ कार्यों के अग्रपूज्य हैं। वे मार्ग की बाधाओं को दूर करते हैं, जिससे लक्ष्मी जी का आगमन स्थायी और सुखद होता है।"]
					})
				})]
			})
		]
	});
}
function Group({ title, ids, items, image, alt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group-head",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: image,
			alt
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "checks",
		children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckItem, {
			id: ids[index],
			children: item
		}, ids[index]))
	})] });
}
function Samagri() {
	const checks = useReader((state) => state.checks);
	const clearChecks = useReader((state) => state.clearChecks);
	const murtiIds = murti.map((_, index) => `m-${index}`);
	const arpanIds = arpan.map((_, index) => `a-${index}`);
	const done = [...murtiIds, ...arpanIds].filter((id) => checks[id]).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "samagri",
		kicker: "खण्ड 2 · Checklist",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "खण्ड 2 · Printable Checklist"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "सम्पूर्ण पूजा सामग्री सूची"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "en",
				children: "Puja Samagri Checklists"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body",
				children: "पूजा शुरू करने से पहले इन सभी सामग्रियों को एक स्थान पर एकत्रित कर लें।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body lede",
				children: "इस Checklist पर निशान लगाते जाएँ। निशान इसी फ़ोन में सहेजा रहता है, ताकि बीच पूजा में किसी सामान के लिए उठना न पड़े। कोई मूल सामग्री हटाई नहीं गई है।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
				title: "1. मुख्य मूर्तियाँ और स्थापना सामग्री",
				ids: murti.map((_, index) => `m-${index}`),
				items: murti,
				image: "/ebook/ganesh.jpg",
				alt: "भगवान गणेश का पारंपरिक चित्र"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
				title: "2. पूजन और अर्पण सामग्री",
				ids: arpan.map((_, index) => `a-${index}`),
				items: arpan,
				image: "/ebook/thali.jpg",
				alt: "पूजा की थाली, दीप और फूलों के साथ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "tally no-print",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "body quiet",
					children: [
						"इस पृष्ठ पर: ",
						done,
						" / ",
						murti.length + arpan.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "linkish",
					onClick: clearChecks,
					children: "सारे निशान मिटाएँ"
				})]
			})
		]
	});
}
var naivedya = [
	"ताजे फूल (विशेषकर लाल गुलाब या कमल और गेंदा) और पुष्पमाला",
	"दूर्वा (दूब घास, गणेश जी के लिए अनिवार्य)",
	"पंचामृत (दूध, दही, घी, शहद और चीनी का मिश्रण)",
	"ऋतु फल (सेब, केला, सिंघाड़ा, अनार)",
	"कमल गट्ठा और कीड़ियां",
	"खील और बताशे",
	"मिठाई (लड्डू और पेड़े)",
	"पान के पत्ते और सुपारी",
	"इलायची और लौंग",
	"दक्षिणा (कुछ सिक्के या नोट)"
];
function Naivedya() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "naivedya",
		kicker: "खण्ड 2 · नैवेद्य",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "खण्ड 2 · जारी Checklist"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "नैवेद्य, फल और पुष्प"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/ebook/thali.jpg",
					alt: "फूल, दीप और अक्षत से सजी पूजा थाली"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body",
					children: "तीसरा समूह नैवेद्य का है। खरीदते समय इसी पृष्ठ पर निशान लगा दें। दूर्वा गणेश जी के लिए अनिवार्य कही गई है — इसे अलग से देख लें।"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Group, {
				title: "3. नैवेद्य, फल और पुष्प",
				ids: naivedya.map((_, index) => `n-${index}`),
				items: naivedya,
				image: "/ebook/lotus.jpg",
				alt: "कमल के फूल"
			})
		]
	});
}
var prep = [
	"घर की स्वच्छता: सुबह ही पूरे घर की अच्छी तरह सफाई करें। मुख्य द्वार पर हल्दी और पानी से स्वास्तिक बनाएँ या गंगाजल छिड़कें।",
	"तोरण और रंगोली: मुख्य द्वार पर आम या अशोक के पत्तों का तोरण लगाएँ। द्वार पर सुंदर रंगोली बनाएँ।",
	"चौकी की दिशा: पूजा के लिए उत्तर या पूर्व दिशा की ओर मुख करके बैठना सबसे उत्तम माना जाता है। चौकी को इसी प्रकार स्थापित करें।",
	"स्नान और वस्त्र: पूजा में बैठने से पहले परिवार के सभी सदस्य स्नान कर स्वच्छ वस्त्र (विशेषकर पीले, लाल या केसरिया रंग के पारंपरिक वस्त्र) धारण करें। काले या नीले रंग के वस्त्रों से बचें।"
];
function Prep() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "prep",
		kicker: "खण्ड 3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "खण्ड 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "पूजा की पूर्व तैयारी"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "en",
				children: "Pre-Puja Preparation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/ebook/door.jpg",
					alt: "आम के तोरण और दीपों वाला मुख्य द्वार",
					caption: "तोरण, रंगोली और द्वार के दीप — सायंकाल से पहले"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body",
					children: "सफल और शांत चित्त पूजा के लिए सायंकाल से पहले यह तैयारियाँ पूरी कर लें:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "steps",
					children: prep.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "num",
						children: ["0", index + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "step-copy",
						children: item
					})] }, item))
				})] })]
			})
		]
	});
}
function Altar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "altar",
		kicker: "खण्ड 4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "खण्ड 4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "वेदी निर्माण एवं मूर्ति स्थापना"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "en",
				children: "Altar Setup"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "steps",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "num",
					children: "01"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "subhead tight",
					children: "Step 1: चौकी सजाना"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "step-copy",
					children: "लकड़ी की चौकी पर गंगाजल छिड़ककर उसे पवित्र करें। उसके ऊपर लाल या पीला कपड़ा बिछाएँ।"
				})] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "num",
					children: "02"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "subhead tight",
					children: "Step 2: मूर्ति स्थापना का सही नियम"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "step-copy",
					children: "चौकी पर दाईं ओर (बैठने वाले के दाहिने हाथ की तरफ) भगवान गणेश को स्थापित करें। चौकी पर बाईं ओर माता लक्ष्मी को स्थापित करें।"
				})] })] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "callout",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "body",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ध्यान दें:" }), " हमेशा लक्ष्मी जी गणेश जी के दाहिनी ओर (हमारी बाईं ओर) बैठती हैं, क्योंकि वे गणेश जी की संन्यासी माता के रूप में नहीं बल्कि चंचल धन देवी के रूप में शांत बुद्धि के साथ विराजती हैं। मूर्तियों के आगे थोड़े से अक्षत रखकर उन पर धन की पोटली, कुबेर यंत्र या सोने-चांदी के सिक्के रखें।"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "subhead",
				children: "बैठने वाले की ओर से चौकी"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body lede quiet",
				children: "यह चित्र केवल ऊपर लिखे वाक्यों को दिखाता है। कोई नया दिशा-नियम नहीं जोड़ा गया।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "altar",
				"aria-label": "चौकी पर मूर्तियों का स्थान",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "altar-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "seat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/ebook/lakshmi.jpg",
							alt: "माता लक्ष्मी"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "बाईं ओर · माता लक्ष्मी" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "seat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/ebook/ganesh.jpg",
							alt: "भगवान गणेश"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "दाईं ओर · श्री गणेश" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "you-are",
					children: "आप यहाँ बैठें — मुख उत्तर या पूर्व की ओर"
				})]
			})
		]
	});
}
function Kalash() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "kalash",
		kicker: "खण्ड 4 · कलश",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "खण्ड 4 · विशेष"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "कलश स्थापना"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "en",
				children: "Kalash Sthapana"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/ebook/kalash.jpg",
					alt: "आम के पत्तों और नारियल सहित ताँबे का कलश",
					caption: "कलश का मुख अपनी तरफ रखें",
					portrait: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Step 3"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body",
					children: "लक्ष्मी जी के पास (या चौकी के सामने) अनाज (गेहूँ या चावल) की एक छोटी ढेरी बनाएँ। उस पर ताँबे या मिट्टी का कलश रखें। कलश में शुद्ध जल और थोड़ा गंगाजल भरें। कलश के अंदर एक सुपारी, एक सिक्का, थोड़ी दूर्वा और हल्दी की गांठ डालें। कलश के मुख पर मौली (कलावा) बाँधें और कंठ पर रोली से स्वास्तिक बनाएँ। कलश के ऊपर आम के 5 या 7 पत्ते इस प्रकार रखें कि वे बाहर दिखाई दें। एक कटोरी में चावल भरकर कलश के ऊपर रखें और उसके ऊपर जटावाला नारियल (लाल कपड़े या कलावा में लपेटकर) स्थापित करें। कलश का मुख अपनी तरफ होना चाहिए।"
				})] })]
			})
		]
	});
}
var order = [
	{
		id: "purify",
		n: "01",
		label: "पवित्रीकरण"
	},
	{
		id: "achaman",
		n: "02",
		label: "आचमन"
	},
	{
		id: "sankalp-step",
		n: "03",
		label: "संकल्प"
	},
	{
		id: "deep",
		n: "04",
		label: "दीप पूजन"
	},
	{
		id: "ganesh",
		n: "05",
		label: "गणपति पूजन"
	},
	{
		id: "lakshmi",
		n: "06",
		label: "महालक्ष्मी पूजन"
	},
	{
		id: "kuber",
		n: "07",
		label: "कलश और कुबेर पूजन"
	}
];
function GoOrder({ go }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "order",
		children: order.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => go(step.id),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: step.n }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.label })]
		}) }, step.n))
	});
}
function RitualOpen({ go }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "ritual-open",
		kicker: "खण्ड 5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "खण्ड 5 · Step-by-Step पूजा विधि"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "क्रमानुसार सम्पूर्ण पूजा विधि"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "en",
				children: "Step-by-Step Puja Rituals"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body",
				children: "नोट: प्रत्येक मंत्र के बाद 'ॐ' का उच्चारण मन में रखें और बताई गई क्रिया को श्रद्धापूर्वक करें।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body lede",
				children: "हर Step में अलग लिखा है — क्या करें, कौन-सी सामग्री चाहिए, मंत्र, और मंत्र का अर्थ। सामग्री वही है जो उसी Step के वाक्य में कही गई है।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "subhead",
				children: "पूजा का क्रम"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoOrder, { go }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "ritual",
				id: "purify",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "num",
					children: "01"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "पवित्रीकरण" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "en",
						children: "Purification"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
						label: "क्या करें?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body",
							children: "अपने दाहिने हाथ में थोड़ा जल लें। इसे अपने ऊपर और पूजा सामग्री पर छिड़कें।"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
						label: "कौन-सी सामग्री चाहिए?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "chips",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "जल" })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
						label: "मंत्र",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mantra, {
							lines: ["ॐ अपवित्रः पवित्रो वा सर्वावस्थां गतोऽपि वा।", "यः स्मरेत्पुण्डरीकाक्षं स बाह्याभ्यन्तरः शुचिः॥"],
							latin: "Om Apavitrah Pavitro Vaa Sarva-Avasthaam Gato-Pi Vaa | Yah Smaret-Pundariikaaksham Sa Baahya-Abhyantarah Shuchih ||"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meaning, { children: "भावार्थः चाहे कोई व्यक्ति किसी भी अवस्था में हो, पवित्र हो या अपवित्र, जो भगवान पुण्डरीकाक्ष (विष्णु जी) का स्मरण करता है, वह बाहर और भीतर से पवित्र हो जाता है।" })
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "ritual",
				id: "achaman",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "num",
					children: "02"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "आचमन" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "en",
						children: "Sipping Holy Water"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
						label: "क्या करें?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body",
							children: "दाहिने हाथ की हथेली में चम्मच से तीन बार जल लेकर पिएँ और हर बार नीचे दिए मंत्र बोलें। चौथी बार हाथ धोने के लिए जल छोड़ें।"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
						label: "कौन-सी सामग्री चाहिए?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "chips",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "जल" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "चम्मच" })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
						label: "मंत्र",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mantra, {
							lines: [
								"ॐ केशवाय नमः",
								"ॐ नारायणाय नमः",
								"ॐ माधवाय नमः",
								"ॐ हृषिकेशाय नमः — कहकर हाथ धो लें।"
							],
							latin: "Om Keshavaya Namah · Om Narayanaya Namah · Om Madhavaya Namah · Om Hrishikeshaya Namah"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "meaning",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "slot-label",
							children: "मंत्र का अर्थ"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body",
							children: "इन चारों मंत्रों का अलग भावार्थ मूल पाठ में नहीं दिया गया है। चौथे मंत्र के साथ हाथ धो लें।"
						})]
					})
				] })]
			})
		]
	});
}
function SankalpPage() {
	const sankalp = useReader((state) => state.sankalp);
	const setSankalp = useReader((state) => state.setSankalp);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "sankalp",
		kicker: "खण्ड 5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "ritual",
			id: "sankalp-step",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "num",
				children: "03"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "संकल्प" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "en",
					children: "The Solemn Vow"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
					label: "क्या करें?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body",
						children: "दाहिने हाथ में थोड़ा जल, अक्षत, फूल, एक सिक्का और थोड़ी सी रोली लें। आँखें बंद करके अपना नाम, अपने गोत्र का नाम (यदि ज्ञात हो), स्थान (शहर का नाम) और आज की तिथि का ध्यान करें और मन में कहें कि 'मैं अपने परिवार के सुख, समृद्धि और आरोग्यता के लिए लक्ष्मी-गणेश जी की यह पूजा कर रहा/रही हूँ।' फिर हाथ का जल भूमि पर छोड़ दें।"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
					label: "कौन-सी सामग्री चाहिए?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "chips",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "जल" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "अक्षत" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "फूल" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "सिक्का" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "रोली" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "slot no-print",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "slot-label",
							children: "संकल्प याद रखने की सहायता"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body quiet",
							children: "मूल वाक्य ऊपर ही है। नीचे नाम भर लें तो पूजा के समय पढ़ने में आसानी होगी। यह फ़ोन में सहेजा रहता है।"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "fields",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["नाम", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: sankalp.name,
									onChange: (event) => setSankalp({ name: event.target.value })
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["गोत्र", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: sankalp.gotra,
									onChange: (event) => setSankalp({ gotra: event.target.value })
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["शहर", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: sankalp.city,
									onChange: (event) => setSankalp({ city: event.target.value })
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["तिथि", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: sankalp.date,
									placeholder: "जैसे कार्तिक अमावस्या",
									onChange: (event) => setSankalp({ date: event.target.value })
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "recall",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "body",
								children: [
									"मैं",
									sankalp.name ? `, ${sankalp.name}` : " ……",
									",",
									sankalp.gotra ? ` गोत्र ${sankalp.gotra}` : " गोत्र ……",
									",",
									sankalp.city ? `, ${sankalp.city}` : ", ……",
									" में",
									sankalp.date ? `, ${sankalp.date}` : ", ……",
									" को अपने परिवार के सुख, समृद्धि और आरोग्यता के लिए लक्ष्मी-गणेश जी की यह पूजा कर रहा/रही हूँ।"
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "meaning",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "slot-label",
						children: "मंत्र का अर्थ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body",
						children: "इस Step में अलग श्लोक नहीं है। संकल्प का वाक्य वही है जो ऊपर उद्धरण में दिया गया है।"
					})]
				})
			] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "ritual",
			id: "deep",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "num",
				children: "04"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "दीप पूजन" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "en",
					children: "Lighting the Lamp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/ebook/diya.jpg",
					alt: "जलता हुआ माटी का दीपक"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
					label: "क्या करें?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body",
						children: "चौकी पर रखे मुख्य दीपक को जलाएँ। दीपक को प्रणाम करें और अक्षत-फूल चढ़ाएँ।"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
					label: "कौन-सी सामग्री चाहिए?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "chips",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "मुख्य दीपक" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "अक्षत" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "फूल" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
					label: "मंत्र",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mantra, {
						lines: ["शुभं करोति कल्याणं आरोग्यं धनसंपदा।", "शत्रुबुद्धिविनाशाय दीपज्योतिर्नमोऽस्तु ते॥"],
						latin: "Shubham Karoti Kalyaanam Aarogyam Dhana-Sampadaa | Shatru-Buddhi-Vinaashaaya Deepa-Jyotir-Namo-Stu Te ||"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meaning, { children: "भावार्थः हे दीपक की लौ! आप शुभ करने वाली, कल्याण करने वाली, आरोग्य और धन-संपत्ति देने वाली हैं। हमारी अज्ञानता और नकारात्मक बुद्धि का नाश करने वाली दीपज्योति, आपको नमस्कार है।" })
			] })]
		})]
	});
}
function GaneshPuja() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		id: "ganesh",
		kicker: "खण्ड 5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "ritual",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "num",
				children: "05"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "गणपति पूजन" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "en",
					children: "Worshipping Lord Ganesha"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/ebook/ganesh.jpg",
					alt: "भगवान गणेश का पारंपरिक चित्र",
					portrait: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
					label: "क्या करें?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body",
						children: "सबसे पहले गणेश जी का ध्यान करें। गणेश जी को लाल फूल, दूर्वा (दूब घास), रोली का तिलक और जनेऊ अर्पित करें। मोदक या लड्डू का भोग लगाएँ।"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
					label: "कौन-सी सामग्री चाहिए?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "chips",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "लाल फूल" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "दूर्वा (दूब घास)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "रोली" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "जनेऊ" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "मोदक या लड्डू" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
					label: "मंत्र",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mantra, {
						lines: ["वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभा।", "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥"],
						latin: "Vakratunda Mahaakaaya Surya-Koti-Samaprabha | Nirvighnam Kuru Me Deva Sarva-Kaaryeshu Sarvadaa | |"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meaning, { children: "भावार्थः हे टेढ़ी सूंड वाले, विशाल शरीर वाले, करोड़ों सूर्यों के समान तेजस्वी देव! मेरे सभी कार्यों को हमेशा बाधा रहित (निर्विघ्न) पूरा करें।" })
			] })]
		})
	});
}
function LakshmiPuja() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		id: "lakshmi",
		kicker: "खण्ड 5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "ritual",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "num",
				children: "06"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "महालक्ष्मी पूजन" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "en",
					children: "Worshipping Goddess Lakshmi"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/ebook/lakshmi.jpg",
					alt: "माता लक्ष्मी का पारंपरिक चित्र",
					portrait: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
					label: "क्या करें?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body",
						children: "अब हाथ में कमल या गुलाब का फूल लेकर माता लक्ष्मी का ध्यान करें। माता को रोली, अक्षत, सिंदूर चढ़ाएँ। इत्र लगाएँ। खील-बताशे, कौड़ियां, कमल गट्ठा और मिठाई का भोग लगाएँ। वस्त्र या कलावा अर्पित करें।"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
					label: "कौन-सी सामग्री चाहिए?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "chips",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "कमल या गुलाब" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "रोली" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "अक्षत" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "सिंदूर" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "इत्र" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "खील-बताशे" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "कौड़ियां" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "कमल गट्ठा" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "मिठाई" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "वस्त्र या कलावा" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
					label: "मंत्र",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mantra, {
						lines: ["ॐ श्रीं ह्रीं श्रीं कमले कमलालये प्रसीद प्रसीद।", "ॐ श्रीं ह्रीं श्रीं महालक्ष्म्यै नमः॥"],
						latin: "Om Shreem Hreem Shreem Kamale Kamalaalaye Praseed Praseed | Om Shreem Hreem Shreem Mahaa-Lakshmyai Namah | |"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meaning, { children: "भावार्थः हे कमल के आसन पर विराजमान होने वाली परम कृपालु महालक्ष्मी! आप मुझ पर प्रसन्न होइए, मुझ पर अपनी कृपा दृष्टि बनाए रखिए। आपको बारंबार प्रणाम है।" })
			] })]
		})
	});
}
function KuberPuja() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		id: "kuber",
		kicker: "खण्ड 5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "ritual",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "num",
				children: "07"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "कलश और कुबेर पूजन" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "en",
					children: "Kalash & Kuber Puja"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/ebook/kalash.jpg",
					alt: "स्थापित कलश",
					portrait: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Slot, {
					label: "क्या करें?",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "body",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "कलश पूजनः" }), " कलश देव पर रोली, अक्षत और फूल चढ़ाकर प्रणाम करें।"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "body lede",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "कुबेर/तिजोरी पूजनः" }), " अपने घर के गहने, पैसे या बही-खाते (व्यापार की डायरी) पर तिलक लगाएँ और हाथ जोड़कर प्रार्थना करें कि धन का भंडार हमेशा भरा रहे।"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
					label: "कौन-सी सामग्री चाहिए?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "chips",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "रोली" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "अक्षत" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "फूल" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "गहने, पैसे या बही-खाता" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
					label: "मंत्र",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body",
						children: "इस Step में मूल पाठ ने अलग श्लोक नहीं दिया। प्रार्थना वही है — धन का भंडार हमेशा भरा रहे। खाता पूजन का मंत्र अगले खण्ड में है।"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "meaning",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "slot-label",
						children: "मंत्र का अर्थ"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body",
						children: "इस चरण का अलग भावार्थ मूल पाठ में नहीं है।"
					})]
				})
			] })]
		})
	});
}
var khataSteps = [
	"स्थान चयनः मुख्य लक्ष्मी-गणेश जी की चौकी के सामने या दाहिनी ओर एक साफ लाल कपड़ा बिछाकर अपने बही-खाते, तिजोरी की चाबी या लैपटॉप को रखें।",
	"स्वास्तिक निर्माणः नवीन बही-खाते या डायरी के मुख्य पृष्ठ (कवर) पर रोली से 'स्वास्तिक' का चिह्न बनाएँ। स्वास्तिक के दाईं ओर 'शुभ' और बाईं ओर 'लाभ' लिखें। बीच में 'श्री गणेशाय नमः' या 'श्री महालक्ष्म्यै नमः' लिखें।",
	"कलम पूजनः नई कलम (Pen) पर मौली (कलावा) बाँधें और उस पर रोली का तिलक लगाएँ।",
	"अर्पण क्रियाः बही-खाते और पेन पर गंगाजल छिड़कें। इसके बाद अक्षत (चावल), फूल, धूप और दीप दिखाकर पूजा करें। खील-बताशे का भोग लगाएँ।",
	"प्रार्थना मंत्रः हाथ जोड़कर कुबेर देव और माता लक्ष्मी से व्यवसाय में वृद्धि और बुद्धि की स्थिरता के लिए प्रार्थना करें: ॐ श्री कुबेराय नमः। ॐ व्यापार वृद्धिकराय नमः।"
];
function Khata() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "khata",
		kicker: "खण्ड 5.1",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "खण्ड 5.1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "व्यापारिक बही-खाता एवं खाता पूजन विधि"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "en",
				children: "Business Ledger & Account Puja"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/ebook/ledger.jpg",
					alt: "कपड़े की बही, लाल कलम और सिक्के",
					caption: "बही, दयाल-लेखनी और सिक्के"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body",
					children: "उत्तर भारत के व्यावसायिक परिवारों, व्यापारियों और कामकाजी पेशेवरों के लिए दिवाली के दिन अपने व्यापारिक बही-खाते, लैपटॉप, पेन या वित्तीय डायरी का पूजन करना अत्यंत महत्वपूर्ण माना जाता है। इसे शारदा पूजन या खाता पूजन भी कहते हैं।"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "subhead",
				children: "आवश्यक अतिरिक्त सामग्री"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "chips",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "नवीन बही-खाता (लेजर), डायरी या वह लैपटॉप जिस पर आप काम करते हैं।" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "नया लाल पेन या कलम (दयाल-लेखनी)।" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "केसर या हल्दी मिश्रित रोली।" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "subhead",
				children: "पूजन की सरल चरणबद्ध विधि"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "steps",
				children: khataSteps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "num",
					children: ["0", index + 1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "step-copy",
					children: step
				})] }, step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "subhead",
				children: "कवर पर लिखने का क्रम"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body quiet",
				children: "मूल वाक्य के अनुसार: स्वास्तिक के बाईं ओर लाभ, दाईं ओर शुभ, और बीच में नाम। चिह्न रोली से बनाना है — यहाँ केवल जगह दिखाई गई है।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ledger-mock",
				"aria-label": "बही के कवर पर शुभ, लाभ और स्वास्तिक का स्थान",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ledger-side",
						children: "लाभ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ledger-mid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ledger-word",
								children: "स्वास्तिक"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "श्री गणेशाय नमः" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "quiet",
								children: "या श्री महालक्ष्म्यै नमः"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ledger-side",
						children: "शुभ"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slot, {
				label: "मंत्र",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mantra, { lines: ["ॐ श्री कुबेराय नमः।", "ॐ व्यापार वृद्धिकराय नमः।"] })
			})
		]
	});
}
function Verse({ n, lines, latin, meaning }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "verse",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "verse-no",
				children: n
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
				className: "mantra",
				children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, line))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "latin",
				children: latin
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "meaning",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "slot-label",
					children: "भावार्थ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: meaning })]
			})
		]
	});
}
function StotraA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "stotra-a",
		kicker: "खण्ड 5.2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "scripture-open",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "खण्ड 5.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "chapter-title",
						children: "श्री महालक्ष्म्यष्टकम् स्तोत्र"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "en",
						children: "Sri Mahalakshmyashtakam Stotram"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body",
						children: "आरती से पूर्व, माता लक्ष्मी की विशेष कृपा और स्थिर वास के लिए इस दिव्य स्तोत्र का पाठ सपरिवार करें।"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body lede quiet",
						children: "हर श्लोक में पहले संस्कृत, फिर उच्चारण, फिर सरल अर्थ है। आठों श्लोक अलग-अलग पृष्ठों पर हैं, ताकि मंत्र छोटा न करना पड़े।"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/ebook/lotus.jpg",
					alt: "कमल के फूल"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verse, {
				n: "१",
				lines: ["नमस्तेऽस्तु महामये श्रीपीठे सुरपूजिते।", "शङ्खचक्रगदाहस्ते महालक्ष्मी नमोऽस्तु ते॥ १॥"],
				latin: "Namaste-Stu Mahaa-Magye Shree-Peethe Sura-Poojite | Shankha-Chakra-Gadaa-Haste Mahaa-Lakshmi Namo-Stu Te || 1 ||",
				meaning: "भावार्थः हे महामागे! हे श्रीपीठ पर स्थित और देवताओं से पूजित होने वाली जननी! आपके हाथों में शंख, चक्र और गदा हैं। हे महालक्ष्मी! आपको प्रणाम है।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verse, {
				n: "२",
				lines: ["नमस्ते गरुडाश्छे कोलासुरभयङ्करी।", "सर्वपापहरे देवि महालक्ष्मी नमोऽस्तु ते॥ २॥"],
				latin: "Namaste Garuda-Aaroodhe Kola-Asura-Bhayankari | Sarva-Paapa-Hare Devi Mahaa-Lakshmi Namo-Stu Te || 2 ||",
				meaning: "भावार्थः हे गरुड़ पर सवारी करने वाली और कोलासुर नाम के दैत्य को भयभीत करने वाली! हे भक्तों के सब पापों को हरने वाली देवी महालक्ष्मी! आपको प्रणाम है।"
			})
		]
	});
}
function StotraB() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "stotra-b",
		kicker: "खण्ड 5.2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "श्री महालक्ष्म्यष्टकम्"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "श्लोक तीन और चार"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verse, {
				n: "३",
				lines: ["सर्वज्ञे सर्ववरदे सर्वदुष्टभयङ्करी।", "सर्वदुःखहरे देवि महालक्ष्मी नमोऽस्तु ते॥ ३॥"],
				latin: "Sarvajne Sarva-Varade Sarva-Dushta-Bhayankari | Sarva-Dukha-Hare Devi Mahaa-Lakshmi Namo-Stu Te || 3 ||",
				meaning: "भावार्थः हे सब कुछ जानने वाली, सबको वर देने वाली और दुष्टों को भय देने वाली! हे भक्तों के सभी दुखों को दूर करने वाली देवी महालक्ष्मी! आपको प्रणाम है।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verse, {
				n: "४",
				lines: ["सिद्धिबुद्धिप्रदे देवि भुक्तिमुक्तिप्रदायिनि।", "मन्त्रमूर्त सदा देवि महालक्ष्मी नमोऽस्तु ते॥ ४॥"],
				latin: "Siddhi-Buddhi-Prade Devi Bhukti-Mukti-Pradayini | Mantra-Moorate Sadaa Devi Mahaa-Lakshmi Namo-Stu Te || 4 ||",
				meaning: "भावार्थः हे सिद्धि, बुद्धि, भोग और मोक्ष प्रदान करने वाली देवी! हे मन्त्रों के स्वरूप वाली देवी महालक्ष्मी! आपको सदैव प्रणाम है।"
			})
		]
	});
}
function StotraC() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "stotra-c",
		kicker: "खण्ड 5.2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "श्री महालक्ष्म्यष्टकम्"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "श्लोक पाँच और छह"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verse, {
				n: "५",
				lines: ["आद्यन्तरहिते देवि आद्यशक्तिमहेश्वरी।", "योगजे योगसम्भूते महालक्ष्मी नमोऽस्तु ते॥ ५॥"],
				latin: "Aadya-Anta-Rahite Devi Aadya-Shakti-Maheshwari | Yogaje Yoga-Sambhoote Mahaa-Lakshmi Namo-Stu Te || 5 ||",
				meaning: "भावार्थः हे आदि और अंत से रहित, सृष्टि की मूल शक्ति, हे महेश्वरी! हे योग से प्रकट होने वाली देवी महालक्ष्मी! आपको प्रणाम है।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verse, {
				n: "६",
				lines: ["स्थूलसूक्ष्ममहारौद्रे महाशक्तिमहोदरे।", "महापापहरे देवि महालक्ष्मी नमोऽस्तु ते॥ ६॥"],
				latin: "Sthoola-Sookshma-Mahaa-Raudre Mahaa-Shakti-Mahodare | Mahaa-Paapa-Hare Devi Mahaa-Lakshmi Namo-Stu Te || 6 ||",
				meaning: "भावार्थः हे स्थूल, सूक्ष्म और महारुद्र रूप वाली, महान शक्ति और बड़े उदर वाली, तथा भक्तों के बड़े से बड़े पापों का नाश करने वाली देवी महालक्ष्मी! आपको प्रणाम है।"
			})
		]
	});
}
function StotraD() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "stotra-d",
		kicker: "खण्ड 5.2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "श्री महालक्ष्म्यष्टकम्"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "श्लोक सात और आठ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verse, {
				n: "७",
				lines: ["पद्मासनस्थिते देवि परब्रह्मस्वरूपिणि।", "परमेशि जगन्मातर्महालक्ष्मी नमोऽस्तु ते॥ ७॥"],
				latin: "Padma-Aasana-Sthite Devi Para-Brahma-Swaroopini | Parameshi Jagan-Maatar-Mahaa-Lakshmi Namo-Stu Te || 7 ||",
				meaning: "भावार्थः हे कमल के आसन पर विराजमान होने वाली, परब्रह्म स्वरूपिणी, परमेश्वरी और संपूर्ण जगत की माता महालक्ष्मी! आपको प्रणाम है।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verse, {
				n: "८",
				lines: ["श्वेताम्बरधरे देवि नानालङ्कारभूमिते।", "जगत्स्थिते जगन्मातर्महालक्ष्मी नमोऽस्तु ते॥ ८॥"],
				latin: "Shweta-Ambara-Dhare Devi Naanaa-Alankaara-Bhooshite | Jagat-Sthite Jagan-Maatar-Mahaa-Lakshmi Namo-Stu Te || 8 ||",
				meaning: "भावार्थः हे श्वेत वस्त्र धारण करने वाली, अनेक प्रकार के आभूषणों से सजी हुई, संपूर्ण जगत में व्याप्त रहने वाली हे जगन्माता महालक्ष्मी! आपको प्रणाम है।"
			})
		]
	});
}
var ganeshAarti = [
	"जय गणेश, जय गणेश, जय गणेश देवा।",
	"माता जाकी पारवती, पिता महादेवा।।",
	"एक दंत दयावंत, char भुजा धारी।",
	"माथे सिंदूर सोहे, मूंसे की सवारी।।",
	"अंधन को आंख देत, कोढ़िन को काया।",
	"बांझन को पुत्र देत, निर्धन को माया।।",
	"हार चढ़े, फूल चढ़े और चढ़े मेवा।",
	"लड्डन का भोग लगे, संत करें सेवा।।",
	"जय गणेश, जय गणेश, जय गणेश देवा।",
	"माता जाकी पारवती, पिता महादेवा।।"
];
function GaneshAarti() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "aarti-ganesh",
		kicker: "खण्ड 6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "खण्ड 6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "आरती एवं क्षमा प्रार्थना"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "en",
				children: "Aarti & Conclusion"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "split",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/ebook/diya.jpg",
					alt: "आरती का दीप"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "body",
					children: "पूजा के अंत में सपरिवार खड़े होकर पूरी श्रद्धा के साथ आरती करें। पहले गणेश जी की और फिर माता लक्ष्मी की आरती गाएँ।"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "subhead",
				children: "1. श्री गणेश जी की आरती"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aarti",
				children: ganeshAarti.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line }, `${index}-${line}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body lede quiet",
				children: "इस आरती के कुछ शब्द मूल पाण्डुलिपि के अनुसार ज्यों के त्यों हैं। ध्यान देने योग्य जगहें अंतिम पृष्ठ की संपादकीय टिप्पणी में हैं।"
			})
		]
	});
}
var lakshmiAarti = [
	["ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता।", "तुमको निसदिन ध्यावत, हरिविष्णु विधाता।।"],
	["उमा रमा ब्रह्माणी, तुम ही जग-माता।", "सूर्य-चंद्रमा ध्यावत, नारद ऋषि गाता।।"],
	["तुम पाताल-निवासिनि, तुम ही शुभदाता।", "कर्म-प्रभाव-प्रकाशिनी, भवनिधि की त्राता।।"],
	["जिस घर में तुम रहतीं, सब सद्गुण आता।", "सब संभव हो जाता, मन नहीं घबराता।।"],
	["तुम बिन यज्ञ न होते, वस्त्र न कोई पाता।", "खान-पान का वैभव, सब तुमसे आता।।"],
	["शुभ-गुण मंदिर सुंदर, क्षीरोदधि-जाता।", "रत्न चतुर्दश तुम बिन, कोई नहीं पाता।।"],
	["महालक्ष्मीजी की आरती, जो कोई नर गाता।", "उर आनंद समाता, पाप उतर जाता।।"]
];
function LakshmiAarti() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "aarti-lakshmi",
		kicker: "खण्ड 6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "खण्ड 6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "2. श्री लक्ष्मी जी की आरती"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aarti",
				children: lakshmiAarti.map((pair) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: pair[0] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: pair[1] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "refrain",
						children: "ॐ जय..."
					})
				] }, pair[0]))
			})
		]
	});
}
function Kshama() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "kshama",
		kicker: "खण्ड 6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "3. क्षीरोदक/पुष्पांजलि"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "en",
				children: "Flower Offering"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body",
				children: "आरती के बाद अपने स्थान पर खड़े होकर तीन बार परिक्रमा करें (यदि स्थान हो, अन्यथा घूम जाएँ) और हाथ में फूल लेकर देवताओं को अर्पित करें।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "subhead",
				children: "4. क्षमा प्रार्थना"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "en",
				children: "Seeking Forgiveness"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body lede",
				children: "पूजा के अंत में अनजाने में हुई भूलचुक के लिए हाथ जोड़कर भगवान से क्षमा माँगें।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mantra, {
				lines: [
					"आवाहनं न जानामि न जानामि विसर्जनम्।",
					"पूजां चैव न जानामि क्षमस्व परमेश्वर।।",
					"मन्त्रहीनं क्रियाहीनं भक्तिहीनं जनार्दन।",
					"यत्पूजितं मया देव परिपूर्णं तदस्तु मे।।"
				],
				latin: "Aavaahanam Na Jaanaami Na Jaanaami Visarhanam | Poojaam Chaiva Na Jaanaami Kshamasva Parameshwara | | Mantrahinnam Kriyahinnam Bhakthinnam Janaardana | Yat-Poojitam Mayaa Deva Paripooranam Tadastu Me | |"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meaning, { children: "भावार्थः हे प्रभु! मैं न तो आपको बुलाना (आवाहन) जानते हूँ और न विदा करना। मुझे पूजा करने की विधि भी नहीं मालूम। हे परमेश्वर, मुझे क्षमा करें। मैं मंत्र, क्रिया और भक्ति तीनों से हीन हूँ; फिर भी मैंने जैसी भी टूटी-फूटी पूजा की है, उसे दयापूर्वक स्वीकार कर पूर्णता प्रदान करें।" })
		]
	});
}
var notes = [
	{
		where: "गणेश आरती",
		text: "पंक्ति में अंग्रेज़ी शब्द “char भुजा धारी” ज्यों का त्यों रखा है। प्रचलित पाठ में यह “चार भुजा धारी” है। मौन संशोधन नहीं किया गया।"
	},
	{
		where: "गणेश आरती",
		text: "“लड्डन का भोग लगे” मूल PDF के पाठ के अनुसार है। प्रचलित आरती में “लड्डुअन का भोग लगे” गाया जाता है।"
	},
	{
		where: "गणेश आरती",
		text: "“मूंसे की सवारी” और “बांझन” मूल वर्तनी के अनुसार हैं। प्रचलित रूप अक्सर “मूषक की सवारी” और “बाँझन” होते हैं।"
	},
	{
		where: "पूजा सामग्री",
		text: "“चई की बत्तियाँ” मूल पाठ का शब्द है। संभवतः अभिप्रेत “रुई की बत्तियाँ” है।"
	},
	{
		where: "पूजा सामग्री",
		text: "“मौली (कलावा/नोटे सूत का धागा)” में “नोटे” संभवतः “मोटे” है।"
	},
	{
		where: "पूजा सामग्री",
		text: "PDF की पाठ-परत में दूर्वा वाली पंक्ति टूटी हुई थी (“टूटी / टूब पास”)। पृष्ठ पर पढ़ा गया रूप “दूर्वा (दूब घास, गणेश जी के लिए अनिवार्य)” रखा गया है।"
	},
	{
		where: "पूजा सामग्री",
		text: "“कमल गट्ठा और कीड़ियां” मूल लेखन है। आगे महालक्ष्मी पूजन में वही वस्तु “कौड़ियां” लिखी है। दोनों जगह मूल शब्द रखे गए हैं।"
	},
	{
		where: "महालक्ष्म्यष्टकम्, श्लोक १",
		text: "श्लोक में “महामये” है, भावार्थ में “हे महामागे”। लिप्यंतरण में “Mahaa-Magye” है। तीनों मूल PDF के अनुसार अलग रखे गए हैं।"
	},
	{
		where: "महालक्ष्म्यष्टकम्, श्लोक २",
		text: "देवनागरी में “नमस्ते गरुडाश्छे” है, लिप्यंतरण में “Garuda-Aaroodhe”। दोनों मूल के अनुसार हैं; लिप्यंतरण प्रचलित “गरुडारूढे” के अधिक निकट है।"
	},
	{
		where: "क्षमा प्रार्थना",
		text: "लिप्यंतरण में “Visarhanam” और “Bhakthinnam” मूल PDF के अनुसार हैं। देवनागरी में “विसर्जनम्” और “भक्तिहीनं” है।"
	},
	{
		where: "पुष्पांजलि का शीर्षक",
		text: "मूल शीर्षक “क्षीरोदक/पुष्पांजलि” है। नीचे का निर्देश पुष्प अर्पण और परिक्रमा का है। शीर्षक नहीं बदला गया।"
	}
];
function Notes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
		id: "notes",
		kicker: "संपादकीय टिप्पणी",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "पूजा का अंग नहीं"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "chapter-title",
				children: "संपादकीय टिप्पणी"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Rule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body",
				children: "यह पृष्ठ परिवार की पूजा विधि नहीं है। संस्कृत मंत्र, आरती और विधि के वाक्य चुपचाप नहीं बदले गए। नीचे केवल वे जगहें हैं जहाँ मूल PDF में वर्तनी टूटी है, अंग्रेज़ी शब्द बीच में आ गया है, या देवनागरी और लिप्यंतरण आपस में नहीं मिलते।"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "note-list",
				children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [note.where, "। "] }), note.text] }, note.text))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "body lede",
				children: "छापने के लिए ऊपर “छापें” दबाएँ। कागज़ A4 पर निकलेगा। Checklist के खाली चौखटे खरीद की सूची की तरह काम आते हैं।"
			})
		]
	});
}
function Book() {
	const scale = useReader((state) => state.scale);
	const toggleScale = useReader((state) => state.toggleScale);
	const [current, setCurrent] = (0, import_react.useState)(pages[0].id);
	const [tocOpen, setTocOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		useReader.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		let frame = 0;
		const update = () => {
			const line = Math.max(96, window.innerHeight * .33);
			let id = pages[0].id;
			for (const page of pages) {
				const node = document.getElementById(page.id);
				if (!node) continue;
				if (node.getBoundingClientRect().top <= line) id = page.id;
			}
			setCurrent(id);
		};
		const onScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	const index = Math.max(0, pages.findIndex((page) => page.id === current));
	function go(id) {
		setCurrent(id);
		setTocOpen(false);
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		document.getElementById(id)?.scrollIntoView({
			behavior: reduce ? "auto" : "smooth",
			block: "start"
		});
	}
	function step(direction) {
		const next = pages[index + direction];
		if (next) go(next.id);
	}
	const jumps = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: pages.map((page, pageIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: "jump rail-btn",
		"data-on": page.id === current,
		onClick: () => go(page.id),
		children: [
			pageIndex + 1,
			". ",
			page.short
		]
	}, page.id)) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "book",
		"data-scale": scale,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "topbar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-btn menu-only",
						onClick: () => setTocOpen(true),
						children: "सूची"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "brand",
						children: "लक्ष्मी-गणेश दिवाली पूजा"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-btn",
						onClick: toggleScale,
						children: scale === "large" ? "सामान्य अक्षर" : "बड़े अक्षर"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-btn",
						onClick: () => window.print(),
						children: "छापें"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "progress",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: `${(index + 1) / pages.length * 100}%` } })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "toc-rail",
				"aria-label": "पृष्ठ",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "पृष्ठ" }), jumps]
			}),
			tocOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "drawer-back",
				onClick: () => setTocOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "drawer",
					role: "dialog",
					"aria-label": "विषय-सूची",
					onClick: (event) => event.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "विषय-सूची" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "icon-btn",
						onClick: () => setTocOpen(false),
						children: "बंद"
					})] }), jumps]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "stage",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contents, { go }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Samagri, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Naivedya, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prep, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Altar, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kalash, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RitualOpen, { go }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SankalpPage, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GaneshPuja, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LakshmiPuja, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KuberPuja, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Khata, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StotraA, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StotraB, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StotraC, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StotraD, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GaneshAarti, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LakshmiAarti, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kshama, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Notes, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "bottombar",
				"aria-label": "पृष्ठ बदलें",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-btn",
						onClick: () => step(-1),
						disabled: index === 0,
						children: "पिछला"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "folio-live",
						children: [
							index + 1,
							" / ",
							pages.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-btn",
						onClick: () => step(1),
						disabled: index === pages.length - 1,
						children: "अगला"
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Book, {});
}
//#endregion
export { Home as component };
