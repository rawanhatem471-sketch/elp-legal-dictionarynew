/* =========================================================
   ELP LEGAL DICTIONARY
   All-in-one JavaScript file
   Prototype / Training Content Only
========================================================= */


/* =========================================================
   DICTIONARY DATA
========================================================= */

const terms = [

  {
    id: 1,
    arabic: "الكيان القانوني",
    english: "Legal Status",
    category: "القانون التجاري",
    categoryEn: "Commercial Law",

    shortDefinitionAr:
      "الوضع القانوني للشخص الطبيعي أو الاعتباري الذي يحدد حقوقه والتزاماته بموجب القانون.",

    shortDefinitionEn:
      "The legal condition of a natural or legal person that determines their rights and obligations under the law.",

    fullDefinitionAr:
      "هو الوضع الذي يعترف فيه القانون بالشخص الطبيعي أو الاعتباري كوحدة مستقلة لها حقوق والتزامات قانونية، ويحدد طبيعة قدرته على إبرام العقود وتحمل الالتزامات وإجراء المعاملات والمشاركة في الإجراءات القانونية.",

    fullDefinitionEn:
      "A natural or legal person recognized by law as an independent unit with legal rights and obligations. Depending on its nature, a legal entity may enter contracts, own rights, assume obligations, conduct legal and financial activities, and participate in transactions or legal proceedings.",

    keywords: [
      "طبيعة العمل",
      "Nature of business",
      "نوع النشاط",
      "Type of activity",
      "الشركة",
      "Company"
    ],

    related: [6, 2, 3],
    source: "محتوى تجريبي من مصادر عامة ضمن مشروع التدريب",
    lastUpdated: "2026-08-17"
  },


  {
    id: 2,
    arabic: "رقم البطاقة الضريبية",
    english: "Tax Card No.",
    category: "القانون التجاري",
    categoryEn: "Commercial Law",

    shortDefinitionAr:
      "رقم تعريفي فريد يصدر للمسجلين ضريبيًا لتحديد الممول ومتابعة التزاماته ومعاملاته الضريبية.",

    shortDefinitionEn:
      "A unique identification number issued to tax-registered individuals or companies to track tax obligations and taxable transactions.",

    fullDefinitionAr:
      "رقم تعريفي فريد تصدره الجهة الضريبية للأفراد أو الشركات المسجلين ضريبيًا، ويستخدم للتعرف على الممول ومتابعة الالتزامات الضريبية والمعاملات المالية الخاضعة للضريبة.",

    fullDefinitionEn:
      "A unique identification number issued by the tax authority to tax-registered individuals or companies. It is used to identify the taxpayer and track tax obligations and taxable financial transactions.",

    keywords: [
      "الرقم الضريبي",
      "Tax number",
      "معرف الضرائب",
      "Tax ID",
      "المعاملات",
      "Transactions"
    ],

    related: [1, 6],
    source: "محتوى تجريبي من مصادر عامة ضمن مشروع التدريب",
    lastUpdated: "2026-08-17"
  },


  {
    id: 3,
    arabic: "التفويض",
    english: "Delegation",
    category: "القانون الإداري",
    categoryEn: "Administrative Law",

    shortDefinitionAr:
      "إسناد طرف آخر لتنفيذ مهام أو مسؤوليات محددة نيابةً عن الطرف المفوض.",

    shortDefinitionEn:
      "Assigning another party to perform specific tasks or responsibilities on behalf of the delegating party.",

    fullDefinitionAr:
      "هو إسناد شخص أو جهة أخرى، مثل الموظف أو الوكيل أو المتعاقد من الباطن، لتنفيذ مهام أو واجبات أو مسؤوليات محددة نيابةً عن الطرف المفوض، مع بقاء المسؤولية النهائية على عاتق المفوض وفقًا للقواعد المنظمة.",

    fullDefinitionEn:
      "The act of assigning another party, such as an employee, agent, or subcontractor, to perform specific tasks, duties, or responsibilities on behalf of the delegating party, while the delegating party retains ultimate responsibility and accountability for the delegated work.",

    keywords: [
      "الإنابة",
      "Authorization",
      "التكليف",
      "Assignment"
    ],

    related: [7, 1],
    source: "محتوى تجريبي من مصادر عامة ضمن مشروع التدريب",
    lastUpdated: "2026-08-17"
  },


  {
    id: 4,
    arabic: "مراقبة الجودة",
    english: "Quality Control",
    category: "القانون التجاري",
    categoryEn: "Commercial Law",

    shortDefinitionAr:
      "عملية التحقق من توافق الأعمال المنفذة مع المعايير والمتطلبات المحددة.",

    shortDefinitionEn:
      "The process of checking whether executed work complies with specified standards and requirements.",

    fullDefinitionAr:
      "عملية التحقق من توافق الأعمال المنفذة مع المواصفات والمعايير المحددة في العقد من خلال الفحص والاختبار وإجراءات مراقبة الجودة اللازمة، بهدف التأكد من الجودة واكتشاف أوجه القصور أو عدم المطابقة ومعالجتها.",

    fullDefinitionEn:
      "The process of verifying that executed work complies with the specifications and standards outlined in a contract through inspection, testing, and necessary quality-control procedures to ensure quality and identify and address defects or non-compliance.",

    keywords: [
      "ضبط الجودة",
      "Quality assurance",
      "التأكد من الجودة",
      "Quality verification"
    ],

    related: [9, 5],
    source: "محتوى تجريبي من مصادر عامة ضمن مشروع التدريب",
    lastUpdated: "2026-08-17"
  },


  {
    id: 5,
    arabic: "فسخ العقد",
    english: "Termination",
    category: "القانون المدني",
    categoryEn: "Civil Law",

    shortDefinitionAr:
      "إنهاء العقد قبل تنفيذه بالكامل باتفاق الأطراف أو نتيجة إخلال أحد الأطراف بالتزاماته.",

    shortDefinitionEn:
      "The legal ending of a contract before its full execution, by agreement or because of a breach.",

    fullDefinitionAr:
      "الإنهاء القانوني للعقد قبل إتمام تنفيذه، سواء باتفاق الأطراف أو نتيجة إخلال أحد الأطراف بالتزاماته التعاقدية، وفقًا لشروط العقد والقانون الواجب التطبيق.",

    fullDefinitionEn:
      "The legal ending of a contract before its full execution, whether by agreement of the parties or as a result of one party failing to meet contractual obligations, according to the contract terms and applicable law.",

    keywords: [
      "إنهاء العقد",
      "Contract Termination",
      "إنهاء التعاقد",
      "Termination of Agreement"
    ],

    related: [9, 8, 10],
    source: "محتوى تجريبي من مصادر عامة ضمن مشروع التدريب",
    lastUpdated: "2026-08-17"
  },


  {
    id: 6,
    arabic: "وكيل تجاري",
    english: "Commercial Agent",
    category: "القانون التجاري",
    categoryEn: "Commercial Law",

    shortDefinitionAr:
      "وكيل يمثل الأصيل في الأنشطة والمعاملات التجارية مثل البيع والشراء.",

    shortDefinitionEn:
      "An agent who represents a principal in commercial activities and sales or purchases.",

    fullDefinitionAr:
      "الوكيل التجاري هو الطرف الذي يمثل الأصيل في المعاملات التجارية، بما في ذلك الأنشطة المرتبطة بالبيع والشراء، في حدود نطاق الوكالة المتفق عليه.",

    fullDefinitionEn:
      "A commercial agent is a party who represents a principal in commercial transactions, including activities connected with sales and purchases, within the agreed scope of agency.",

    keywords: [
      "وكالة تجارية",
      "Commercial Agency Contract",
      "سمسار",
      "Broker"
    ],

    related: [1, 7, 8],
    source: "محتوى تجريبي من مصادر عامة ضمن مشروع التدريب",
    lastUpdated: "2026-08-17"
  },


  {
    id: 7,
    arabic: "واجب الإخطار",
    english: "Duty to Notify",
    category: "القانون التجاري",
    categoryEn: "Commercial Law",

    shortDefinitionAr:
      "التزام الوكيل بإبلاغ الأصيل بالمعلومات المهمة المتعلقة بعلاقة الوكالة.",

    shortDefinitionEn:
      "The duty of an agent to inform the principal of important information related to the agency.",

    fullDefinitionAr:
      "التزام يفرض على الوكيل إبلاغ الأصيل بالمعلومات المهمة ذات الصلة بعلاقة الوكالة، بما يدعم الشفافية ويساعد على اتخاذ القرارات المناسبة.",

    fullDefinitionEn:
      "An obligation requiring an agent to communicate important information relevant to the agency relationship to the principal, supporting transparency and informed decision-making.",

    keywords: [
      "الشفافية",
      "Transparency",
      "الإفصاح",
      "Disclosure"
    ],

    related: [6, 8],
    source: "محتوى تجريبي من مصادر عامة ضمن مشروع التدريب",
    lastUpdated: "2026-08-17"
  },


  {
    id: 8,
    arabic: "السرية",
    english: "Confidentiality",
    category: "القانون المدني",
    categoryEn: "Civil Law",

    shortDefinitionAr:
      "التزام بعدم إفشاء المعلومات السرية الخاصة بالأصيل أو أي طرف آخر محمي قانونًا.",

    shortDefinitionEn:
      "An obligation not to disclose confidential information belonging to the principal or another protected party.",

    fullDefinitionAr:
      "التزام بحماية المعلومات السرية وعدم الإفصاح عنها للأطراف غير المصرح لها، خاصة عندما يتم الحصول على المعلومات من خلال علاقة تعاقدية أو علاقة ائتمانية.",

    fullDefinitionEn:
      "An obligation to protect confidential information and not disclose it to unauthorized parties, particularly where the information is received through a contractual or fiduciary relationship.",

    keywords: [
      "واجب الولاء",
      "Duty of loyalty",
      "علاقة محل الثقة",
      "Fiduciary Relationship"
    ],

    related: [6, 7, 5],
    source: "محتوى تجريبي من مصادر عامة ضمن مشروع التدريب",
    lastUpdated: "2026-08-17"
  },


  {
    id: 9,
    arabic: "مدة العقد",
    english: "Contract Term",
    category: "القانون المدني",
    categoryEn: "Civil Law",

    shortDefinitionAr:
      "الفترة التي يظل خلالها العقد ساريًا.",

    shortDefinitionEn:
      "The period during which a contract remains valid.",

    fullDefinitionAr:
      "الفترة الزمنية التي يظل خلالها العقد نافذًا وتستمر خلالها الحقوق والالتزامات المتفق عليها في التطبيق، وفقًا لشروط العقد والقانون الواجب التطبيق.",

    fullDefinitionEn:
      "The period of time during which the contract remains in force and its agreed rights and obligations continue to apply, subject to its terms and applicable law.",

    keywords: [
      "تجديد العقد",
      "Contract Renewal",
      "انتهاء العقد",
      "Contract Expiration",
      "مدة الالتزام",
      "Obligation Period"
    ],

    related: [5, 6],
    source: "محتوى تجريبي من مصادر عامة ضمن مشروع التدريب",
    lastUpdated: "2026-08-17"
  },


  {
    id: 10,
    arabic: "الاختصاص القضائي",
    english: "Competent Jurisdiction",
    category: "القانون الإداري",
    categoryEn: "Administrative Law",

    shortDefinitionAr:
      "المحكمة أو الجهة القضائية المختصة بنظر النزاعات الناشئة عن العقد.",

    shortDefinitionEn:
      "The court or judicial body competent to hear disputes arising from a contract.",

    fullDefinitionAr:
      "المحكمة أو الجهة القضائية التي تتمتع بالاختصاص القانوني لنظر والفصل في النزاعات الناشئة عن العقد أو العلاقة القانونية، وفقًا للقواعد المعمول بها في الاختصاص القضائي.",

    fullDefinitionEn:
      "The court or judicial body that has legal competence to hear and decide disputes arising from a contract or legal relationship, according to the applicable rules of jurisdiction.",

    keywords: [
      "النزاع القضائي",
      "Legal Dispute",
      "مكان التقاضي",
      "Litigation Venue",
      "التحكيم الدولي",
      "International arbitration"
    ],

    related: [5, 9],
    source: "محتوى تجريبي من مصادر عامة ضمن مشروع التدريب",
    lastUpdated: "2026-08-17"
  }

];


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [

  {
    name: "القانون الجنائي",
    english: "Criminal Law",
    icon: "⚖",
    description: "مصطلحات الجرائم والسرقة والاحتيال وما يرتبط بها."
  },

  {
    name: "القانون المدني",
    english: "Civil Law",
    icon: "▤",
    description: "العقود والتعويض والمسؤولية المدنية."
  },

  {
    name: "قانون الأسرة",
    english: "Family Law",
    icon: "♧",
    description: "الزواج والطلاق والحضانة وشؤون الأسرة."
  },

  {
    name: "القانون التجاري",
    english: "Commercial Law",
    icon: "▣",
    description: "الشركات والتجارة والعلاقات التجارية."
  },

  {
    name: "قانون العمل",
    english: "Labor Law",
    icon: "◈",
    description: "التوظيف والأجور وعلاقات العمل."
  },

  {
    name: "القانون الإداري",
    english: "Administrative Law",
    icon: "⌂",
    description: "التنظيم والسلطات والتراخيص."
  },

  {
    name: "القانون الدستوري",
    english: "Constitutional Law",
    icon: "◇",
    description: "الدستور والحقوق والحريات."
  },

  {
    name: "مصطلحات قانونية عامة",
    english: "General Legal Terms",
    icon: "§",
    description: "المصطلحات القانونية الشائعة في مختلف المجالات."
  }

];


/* =========================================================
   STATE
========================================================= */

const app = document.getElementById("app");
const savedCount = document.getElementById("savedCount");
const toast = document.getElementById("toast");

const ARABIC_LETTERS = [
  "أ","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز",
  "س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك",
  "ل","م","ن","ه","و","ي"
];

const ENGLISH_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const state = {

  saved: readStorage("elpSaved", []),

  recent: readStorage("elpRecent", []),

  route: "home",

  query: "",

  category: "الكل",

  arabicLetter: "All",

  englishLetter: "All",

  definitionTab: "simple"

};


/* =========================================================
   STORAGE
========================================================= */

function readStorage(key, fallback) {

  try {

    const value = JSON.parse(localStorage.getItem(key));

    return value ?? fallback;

  } catch {

    return fallback;

  }

}


function writeStorage(key, value) {

  try {

    localStorage.setItem(key, JSON.stringify(value));

  } catch {}

}


/* =========================================================
   HELPERS
========================================================= */

function escapeHtml(value) {

  return String(value ?? "").replace(/[&<>"']/g, c => ({

    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"

  }[c]));

}


function findTerm(id) {

  return terms.find(term => term.id === Number(id));

}


function isSaved(id) {

  return state.saved.includes(Number(id));

}


function normalize(value) {

  return String(value || "")
    .toLocaleLowerCase("ar-EG")
    .trim();

}


function normalizeArabic(value) {

  return String(value || "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .toLocaleLowerCase("ar-EG");

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {

    toast.classList.remove("show");

  }, 2200);

}


/* =========================================================
   SAVE / RECENT
========================================================= */

function updateSavedCount() {

  savedCount.textContent = state.saved.length;

}


function saveState() {

  writeStorage("elpSaved", state.saved);

  writeStorage("elpRecent", state.recent);

  updateSavedCount();

}


function addRecent(id) {

  id = Number(id);

  state.recent = [
    id,
    ...state.recent.filter(x => x !== id)
  ].slice(0, 6);

  saveState();

}


function toggleSaved(id) {

  id = Number(id);

  if (isSaved(id)) {

    state.saved = state.saved.filter(x => x !== id);

    showToast("تم حذف المصطلح من المحفوظات.");

  } else {

    state.saved.unshift(id);

    showToast("تم حفظ المصطلح بنجاح.");

  }

  saveState();

  render();

}


/* =========================================================
   ROUTING
========================================================= */

function setRoute(route) {

  state.route = route;

  state.query = "";

  state.category = "الكل";

  state.arabicLetter = "All";

  state.englishLetter = "All";

  state.definitionTab = "simple";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  render();

}


/* =========================================================
   SEARCH
========================================================= */

function matchesQuery(term, query) {

  if (!query) return true;

  const q = normalize(query);

  const arabicSearch = normalizeArabic(query);

  const haystack = [

    term.arabic,

    term.english,

    term.category,

    term.categoryEn,

    term.shortDefinitionAr,

    term.shortDefinitionEn,

    term.fullDefinitionAr,

    term.fullDefinitionEn,

    ...(term.keywords || [])

  ].join(" ");


  return (

    normalize(haystack).includes(q) ||

    normalizeArabic(haystack).includes(arabicSearch)

  );

}


/* =========================================================
   LETTER FILTER
========================================================= */

function matchesArabicLetter(term, letter) {

  if (letter === "All") return true;

  const first = normalizeArabic(term.arabic).charAt(0);

  const target = normalizeArabic(letter);

  return first === target;

}


function matchesEnglishLetter(term, letter) {

  if (letter === "All") return true;

  return normalize(term.english).startsWith(
    normalize(letter)
  );

}


/* =========================================================
   FILTER
========================================================= */

function filteredTerms() {

  return terms.filter(term => {

    const queryMatch =
      matchesQuery(term, state.query);

    const categoryMatch =
      state.category === "الكل" ||
      term.category === state.category;

    const arabicMatch =
      matchesArabicLetter(
        term,
        state.arabicLetter
      );

    const englishMatch =
      matchesEnglishLetter(
        term,
        state.englishLetter
      );

    return (
      queryMatch &&
      categoryMatch &&
      arabicMatch &&
      englishMatch
    );

  });

}


/* =========================================================
   CATEGORY LABEL
========================================================= */

function categoryData(categoryName) {

  return categories.find(
    category => category.name === categoryName
  );

}


/* =========================================================
   TERM CARD
   IMPORTANT:
   NO DEFINITION HERE
========================================================= */

function termCard(term) {

  const saved = isSaved(term.id);

  return `

    <article class="term-card">

      <div class="term-top">

        <div>

          <div class="term-ar">
            ${escapeHtml(term.arabic)}
          </div>

          <div class="term-en">
            ${escapeHtml(term.english)}
          </div>

        </div>


        <button
          class="btn icon ${saved ? "saved" : ""}"
          title="${saved ? "إزالة من المحفوظات" : "حفظ المصطلح"}"
          data-action="save"
          data-id="${term.id}"
        >
          ${saved ? "★" : "☆"}
        </button>

      </div>


      <span class="badge">

        ${escapeHtml(term.category)}

      </span>


      <div class="card-actions">

        <button
          class="btn primary"
          data-action="open"
          data-id="${term.id}"
        >
          عرض المصطلح
        </button>


        <button
          class="btn"
          data-action="speak"
          data-id="${term.id}"
          title="نطق المصطلح"
        >
          🔊
        </button>

      </div>

    </article>

  `;

}


/* =========================================================
   ENGLISH ALPHABET
========================================================= */

function englishAlphabet(active = "All", prefix = "") {

  return `

    <div class="${prefix}alphabet">

      <button
        class="alpha-btn ${active === "All" ? "active" : ""}"
        data-action="english-letter"
        data-letter="All"
      >
        الكل
      </button>

      ${ENGLISH_LETTERS.map(letter => `

        <button
          class="alpha-btn ${active === letter ? "active" : ""}"
          data-action="english-letter"
          data-letter="${letter}"
        >
          ${letter}
        </button>

      `).join("")}

    </div>

  `;

}


/* =========================================================
   ARABIC ALPHABET
========================================================= */

function arabicAlphabet(active = "All", prefix = "") {

  return `

    <div class="${prefix}alphabet">

      <button
        class="alpha-btn ${active === "All" ? "active" : ""}"
        data-action="arabic-letter"
        data-letter="All"
      >
        الكل
      </button>

      ${ARABIC_LETTERS.map(letter => `

        <button
          class="alpha-btn ${active === letter ? "active" : ""}"
          data-action="arabic-letter"
          data-letter="${letter}"
        >
          ${letter}
        </button>

      `).join("")}

    </div>

  `;

}


/* =========================================================
   HOME
========================================================= */

function homeView() {

  const recentTerms =
    state.recent
      .map(findTerm)
      .filter(Boolean)
      .slice(0, 3);

  const featured =
    terms.slice(0, 6);


  return `

    <section class="hero">

      <div class="container hero-content">

        <div class="eyebrow">
          البوابة القانونية المصرية • خدمة معلومات قانونية
        </div>

        <h1>
          القاموس القانوني
        </h1>

        <p>
          ابحث عن المصطلحات القانونية،
          وتعرف على معانيها، واستكشف المفاهيم
          المرتبطة بها حسب التصنيف أو الحروف.
        </p>


        <form class="search-box" id="homeSearch">

          <input
            id="homeSearchInput"
            type="search"
            autocomplete="off"
            placeholder="ابحث عن مصطلح قانوني..."
            aria-label="البحث في القاموس القانوني"
          >

          <button type="submit">
            بحث
          </button>

        </form>

      </div>

    </section>


    <!-- ARABIC ALPHABET -->

    <div class="quick-strip">

      <div class="container quick-strip-inner">

        <div class="quick-title">
          تصفح بالعربي
        </div>

        ${arabicAlphabet(
          state.arabicLetter
        )}

      </div>

    </div>


    <section class="section">

      <div class="container">

        <div class="section-head">

          <div>

            <h2>
              التصنيفات القانونية
            </h2>

            <p>
              تصفح المصطلحات حسب المجال القانوني.
            </p>

          </div>

          <button
            class="text-link"
            data-route="browse"
          >
            عرض الكل ←
          </button>

        </div>


        <div class="category-grid">

          ${categories.map(category => `

            <button
              class="category-card"
              data-action="category"
              data-category="${escapeHtml(category.name)}"
            >

              <div class="category-icon">
                ${category.icon}
              </div>

              <strong>
                ${escapeHtml(category.name)}
              </strong>

              <span class="category-en">
                ${escapeHtml(category.english)}
              </span>

              <span>
                ${escapeHtml(category.description)}
              </span>

            </button>

          `).join("")}

        </div>

      </div>

    </section>


    <section
      class="section"
      style="padding-top:0"
    >

      <div class="container">

        <div class="section-head">

          <div>

            <h2>
              أحدث المصطلحات
            </h2>

            <p>
              مصطلحات تجريبية مضافة إلى النموذج.
            </p>

          </div>

          <button
            class="text-link"
            data-route="browse"
          >
            تصفح الكل ←
          </button>

        </div>


        <div class="term-grid">

          ${featured.map(termCard).join("")}

        </div>

      </div>

    </section>


    ${
      recentTerms.length
      ?

      `

      <section
        class="section"
        style="padding-top:0"
      >

        <div class="container">

          <div class="section-head">

            <div>

              <h2>
                شوهدت مؤخرًا
              </h2>

              <p>
                وصول سريع إلى المصطلحات التي فتحتها.
              </p>

            </div>

            <button
              class="text-link"
              data-route="recent"
            >
              عرض السجل ←
            </button>

          </div>


          <div class="term-grid">

            ${recentTerms.map(termCard).join("")}

          </div>

        </div>

      </section>

      `

      : ""

    }

  `;

}


/* =========================================================
   RESULTS VIEW
========================================================= */

function resultsView() {

  const results = filteredTerms();

  return `

    <section class="page-head">

      <div class="container">

        <h1>
          نتائج البحث
        </h1>

        <p>

          ${
            state.query
              ? `نتائج البحث عن «${escapeHtml(state.query)}»`
              : "تصفح نتائج القاموس القانوني."
          }

        </p>

      </div>

    </section>


    <section class="section">

      <div class="container results-layout">


        <aside class="filters">

          <h3>
            تصفية النتائج
          </h3>


          <div class="filter-group">

            <label for="resultSearch">
              كلمة البحث
            </label>

            <input
              id="resultSearch"
              type="search"
              value="${escapeHtml(state.query)}"
              placeholder="ابحث..."
            >

          </div>


          <div class="filter-group">

            <label for="categoryFilter">
              التصنيف القانوني
            </label>

            <select id="categoryFilter">

              <option value="الكل">
                كل التصنيفات
              </option>

              ${categories.map(category => `

                <option
                  value="${escapeHtml(category.name)}"
                  ${state.category === category.name ? "selected" : ""}
                >

                  ${escapeHtml(category.name)}
                  — ${escapeHtml(category.english)}

                </option>

              `).join("")}

            </select>

          </div>


          <button
            class="btn"
            id="resetFilters"
          >
            إعادة ضبط الفلاتر
          </button>

        </aside>


        <div>

          <div class="results-toolbar">

            <span class="result-count">

              <strong>
                ${results.length}
              </strong>

              مصطلح

            </span>


            <button
              class="text-link"
              data-route="browse"
            >
              تصفح أ–ي و A–Z ←
            </button>

          </div>


          ${
            results.length

            ?

            `<div class="term-grid">
              ${results.map(termCard).join("")}
            </div>`

            :

            `

            <div class="no-results">

              <h3>
                لم يتم العثور على نتائج
              </h3>

              <p>
                جربي كلمة أخرى أو ابحثي باستخدام
                المصطلح العربي أو الإنجليزي أو التصنيف.
              </p>

              <button
                class="btn primary"
                id="noResultReset"
              >
                إعادة ضبط البحث
              </button>

            </div>

            `
          }

        </div>

      </div>

    </section>

  `;

}


/* =========================================================
   BROWSE VIEW
========================================================= */

function browseView() {

  const results = filteredTerms();

  return `

    <section class="browse-head">

      <div class="container">

        <h1>
          تصفح المصطلحات القانونية
        </h1>

        <p>
          اختاري حرفًا بالعربية أو الإنجليزية
          لتصفح المصطلحات بدون الحاجة للبحث.
        </p>


        <!-- ARABIC -->

        <div class="alphabet-block">

          <div class="alphabet-label">
            الحروف العربية أ–ي
          </div>

          ${arabicAlphabet(
            state.arabicLetter,
            "browse-"
          )}

        </div>


        <!-- ENGLISH -->

        <div class="alphabet-block">

          <div class="alphabet-label">
            English A–Z
          </div>

          ${englishAlphabet(
            state.englishLetter,
            "browse-"
          )}

        </div>


      </div>

    </section>


    <section class="section">

      <div class="container">

        <div class="results-toolbar">

          <span class="result-count">

            <strong>
              ${results.length}
            </strong>

            مصطلح متاح

          </span>


          <select
            id="browseCategory"
            class="btn"
          >

            <option value="الكل">
              كل التصنيفات
            </option>

            ${categories.map(category => `

              <option
                value="${escapeHtml(category.name)}"
                ${state.category === category.name ? "selected" : ""}
              >

                ${escapeHtml(category.name)}
                — ${escapeHtml(category.english)}

              </option>

            `).join("")}

          </select>

        </div>


        ${
          results.length

          ?

          `<div class="term-grid">
            ${results.map(termCard).join("")}
          </div>`

          :

          `<div class="empty-state">

            <h3>
              لا توجد مصطلحات لهذا الاختيار
            </h3>

            <p>
              جربي حرفًا آخر أو تصنيفًا مختلفًا.
            </p>

          </div>`
        }

      </div>

    </section>

  `;

}


/* =========================================================
   BOOKMARKS
========================================================= */

function bookmarksView() {

  const savedTerms =
    state.saved
      .map(findTerm)
      .filter(Boolean);


  return `

    <section class="page-head">

      <div class="container">

        <h1>
          المصطلحات المحفوظة
        </h1>

        <p>
          المصطلحات التي قمتِ بحفظها محفوظة
          محليًا في هذا المتصفح.
        </p>

      </div>

    </section>


    <section class="section">

      <div class="container">

        ${
          savedTerms.length

          ?

          `<div class="term-grid">
            ${savedTerms.map(termCard).join("")}
          </div>`

          :

          `

          <div class="empty-state">

            <h3>
              لا توجد مصطلحات محفوظة
            </h3>

            <p>
              اضغطي على ☆ بجانب أي مصطلح لإضافته إلى المحفوظات.
            </p>

            <button
              class="btn primary"
              data-route="browse"
            >
              تصفح المصطلحات
            </button>

          </div>

          `
        }

      </div>

    </section>

  `;

}


/* =========================================================
   RECENT
========================================================= */

function recentView() {

  const recentTerms =
    state.recent
      .map(findTerm)
      .filter(Boolean);


  return `

    <section class="page-head">

      <div class="container">

        <h1>
          شوهدت مؤخرًا
        </h1>

        <p>
          آخر المصطلحات التي قمتِ بفتحها.
        </p>

      </div>

    </section>


    <section class="section">

      <div class="container">

        ${
          recentTerms.length

          ?

          `<div class="term-grid">
            ${recentTerms.map(termCard).join("")}
          </div>`

          :

          `

          <div class="empty-state">

            <h3>
              لا توجد مصطلحات شوهدت مؤخرًا
            </h3>

            <p>
              افتحي أي مصطلح من القاموس وسيظهر هنا.
            </p>

          </div>

          `
        }

      </div>

    </section>

  `;

}


/* =========================================================
   DETAIL VIEW
========================================================= */

function detailView(id) {

  const term = findTerm(id);

  if (!term) {
    return homeView();
  }


  addRecent(term.id);


  const related =
    (term.related || [])
      .map(findTerm)
      .filter(Boolean);


  const isSimple =
    state.definitionTab === "simple";


  return `

    <section class="detail-wrap">

      <div class="container">


        <div class="breadcrumb">

          <button
            class="text-link"
            data-route="home"
          >
            الرئيسية
          </button>

          /

          <button
            class="text-link"
            data-route="browse"
          >
            القاموس القانوني
          </button>

          /

          ${escapeHtml(term.english)}

        </div>


        <article class="detail-card">


          <header class="detail-header">

            <div class="term-ar">
              ${escapeHtml(term.arabic)}
            </div>

            <div class="term-en">
              ${escapeHtml(term.english)}
            </div>


            <div class="detail-meta">

              <span class="badge">

                ${escapeHtml(term.category)}

                <span style="margin:0 5px;">•</span>

                ${escapeHtml(term.categoryEn)}

              </span>

              <span class="badge">
                آخر تحديث ${escapeHtml(term.lastUpdated)}
              </span>

            </div>


            <div class="detail-actions">

              <button
                class="btn"
                data-action="speak"
                data-id="${term.id}"
              >
                🔊 نطق المصطلح
              </button>


              <button
                class="btn"
                data-action="save"
                data-id="${term.id}"
              >
                ${isSaved(term.id)
                  ? "★ تم الحفظ"
                  : "☆ حفظ المصطلح"}
              </button>


              <button
                class="btn"
                onclick="window.print()"
              >
                🖨 طباعة
              </button>


              <button
                class="btn"
                data-route="browse"
              >
                ← العودة للقاموس
              </button>

            </div>

          </header>


          <div class="detail-body">


            <div class="definition-tabs">

              <button
                class="tab-btn ${isSimple ? "active" : ""}"
                data-tab="simple"
              >
                التعريف المختصر
              </button>


              <button
                class="tab-btn ${!isSimple ? "active" : ""}"
                data-tab="full"
              >
                التعريف الموسع
              </button>

            </div>


            <div class="definition-text">

              <div class="definition-language">

                <strong>
                  العربية
                </strong>

                <p class="definition-text arabic">
                  ${escapeHtml(
                    isSimple
                      ? term.shortDefinitionAr
                      : term.fullDefinitionAr
                  )}
                </p>

              </div>


              <div class="definition-language english-definition">

                <strong>
                  English
                </strong>

                <p class="definition-text">
                  ${escapeHtml(
                    isSimple
                      ? term.shortDefinitionEn
                      : term.fullDefinitionEn
                  )}
                </p>

              </div>

            </div>


            <div class="detail-section">

              <h3>
                الكلمات المفتاحية والمرادفات
              </h3>

              <div class="tags">

                ${term.keywords.map(keyword => `

                  <span class="tag">
                    ${escapeHtml(keyword)}
                  </span>

                `).join("")}

              </div>

            </div>


            <div class="detail-section">

              <h3>
                مصطلحات ذات صلة
              </h3>

              <div class="related-list">

                ${
                  related.length

                  ?

                  related.map(relatedTerm => `

                    <button
                      class="related-link"
                      data-action="open"
                      data-id="${relatedTerm.id}"
                    >

                      ${escapeHtml(relatedTerm.arabic)}
                      ·
                      ${escapeHtml(relatedTerm.english)}

                    </button>

                  `).join("")

                  :

                  "<span>لا توجد مصطلحات مرتبطة.</span>"
                }

              </div>

            </div>


            <div class="detail-section">

              <h3>
                المرجع
              </h3>

              <p class="definition-text">
                ${escapeHtml(term.source)}
              </p>


              <div class="notice">

                هذا المحتوى تجريبي لأغراض التدريب
                ولا يُعد مصدرًا قانونيًا رسميًا أو استشارة قانونية.

              </div>

            </div>


          </div>

        </article>

      </div>

    </section>

  `;

}


/* =========================================================
   RENDER
========================================================= */

function render() {

  updateSavedCount();


  let html = "";


  if (state.route === "home") {

    html = homeView();

  }

  else if (state.route === "results") {

    html = resultsView();

  }

  else if (state.route === "browse") {

    html = browseView();

  }

  else if (state.route === "bookmarks") {

    html = bookmarksView();

  }

  else if (state.route === "recent") {

    html = recentView();

  }

  else if (state.route.startsWith("term/")) {

    html = detailView(
      state.route.split("/")[1]
    );

  }


  app.innerHTML = html;

  updateNav();

  bindDynamicEvents();

}


/* =========================================================
   NAV
========================================================= */

function updateNav() {

  document
    .querySelectorAll(".nav-link")
    .forEach(link => {

      link.classList.toggle(
        "active",
        link.dataset.route === state.route
      );

    });

}


/* =========================================================
   DYNAMIC EVENTS
========================================================= */

function bindDynamicEvents() {


  /* HOME SEARCH */

  const homeSearch =
    document.getElementById("homeSearch");


  if (homeSearch) {

    homeSearch.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const input =
          document.getElementById(
            "homeSearchInput"
          );


        state.query =
          input.value.trim();

        state.route = "results";

        state.category = "الكل";

        state.arabicLetter = "All";

        state.englishLetter = "All";

        render();

      }
    );

  }


  /* RESULT SEARCH */

  const resultSearch =
    document.getElementById("resultSearch");


  if (resultSearch) {

    resultSearch.addEventListener(
      "input",
      event => {

        state.query =
          event.target.value;

        const cursor =
          event.target.selectionStart;

        render();

        const newInput =
          document.getElementById(
            "resultSearch"
          );


        if (newInput) {

          newInput.focus();

          newInput.setSelectionRange(
            cursor,
            cursor
          );

        }

      }
    );

  }


  /* CATEGORY */

  const categoryFilter =
    document.getElementById(
      "categoryFilter"
    );


  if (categoryFilter) {

    categoryFilter.addEventListener(
      "change",
      event => {

        state.category =
          event.target.value;

        render();

      }
    );

  }


  const browseCategory =
    document.getElementById(
      "browseCategory"
    );


  if (browseCategory) {

    browseCategory.addEventListener(
      "change",
      event => {

        state.category =
          event.target.value;

        render();

      }
    );

  }


  /* RESET */

  document
    .getElementById("resetFilters")
    ?.addEventListener(
      "click",
      () => {

        state.query = "";

        state.category = "الكل";

        state.arabicLetter = "All";

        state.englishLetter = "All";

        render();

      }
    );


  document
    .getElementById("noResultReset")
    ?.addEventListener(
      "click",
      () => {

        state.query = "";

        state.category = "الكل";

        state.arabicLetter = "All";

        state.englishLetter = "All";

        render();

      }
    );


  /* DEFINITION TABS */

  document
    .querySelectorAll("[data-tab]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          state.definitionTab =
            button.dataset.tab;

          render();

        }
      );

    });

}


/* =========================================================
   SPEECH
   FIRST CLICK = PLAY
   SECOND CLICK = STOP
========================================================= */

let isSpeaking = false;


function speakTerm(id) {

  const term = findTerm(id);

  if (!term) return;


  if (!("speechSynthesis" in window)) {

    showToast(
      "خاصية نطق النص غير مدعومة في المتصفح."
    );

    return;

  }


  /* SECOND CLICK */

  if (isSpeaking) {

    speechSynthesis.cancel();

    isSpeaking = false;

    showToast("تم إيقاف النطق.");

    return;

  }


  speechSynthesis.cancel();


  const text =
    `${term.arabic}. ${term.english}. ${term.shortDefinitionAr}. ${term.shortDefinitionEn}`;


  const utterance =
    new SpeechSynthesisUtterance(text);


  const voices =
    speechSynthesis.getVoices();


  const arabicVoice =
    voices.find(
      voice =>
        voice.lang &&
        voice.lang
          .toLowerCase()
          .startsWith("ar")
    );


  if (arabicVoice) {

    utterance.voice =
      arabicVoice;

  }


  utterance.lang =
    arabicVoice?.lang || "ar-EG";


  utterance.rate = 0.9;


  utterance.onstart = () => {

    isSpeaking = true;

  };


  utterance.onend = () => {

    isSpeaking = false;

  };


  utterance.onerror = () => {

    isSpeaking = false;

  };


  speechSynthesis.speak(
    utterance
  );


  showToast(
    "جاري نطق المصطلح... اضغطي مرة أخرى للإيقاف."
  );

}


/* =========================================================
   GLOBAL CLICK HANDLER
========================================================= */

document.addEventListener(
  "click",
  event => {


    /* ROUTES */

    const routeEl =
      event.target.closest(
        "[data-route]"
      );


    if (routeEl) {

      event.preventDefault();

      setRoute(
        routeEl.dataset.route
      );

      return;

    }


    /* ACTIONS */

    const actionEl =
      event.target.closest(
        "[data-action]"
      );


    if (!actionEl) return;


    const action =
      actionEl.dataset.action;


    /* OPEN */

    if (action === "open") {

      state.route =
        `term/${actionEl.dataset.id}`;

      state.definitionTab =
        "simple";

      render();

    }


    /* SAVE */

    else if (action === "save") {

      toggleSaved(
        actionEl.dataset.id
      );

    }


    /* SPEAK */

    else if (action === "speak") {

      speakTerm(
        actionEl.dataset.id
      );

    }


    /* ARABIC LETTER */

    else if (
      action === "arabic-letter"
    ) {

      state.arabicLetter =
        actionEl.dataset.letter;

      state.englishLetter =
        "All";

      state.query = "";

      if (state.route === "home") {

        state.category = "الكل";

        state.route = "browse";

      }

      render();

    }


    /* ENGLISH LETTER */

    else if (
      action === "english-letter"
    ) {

      state.englishLetter =
        actionEl.dataset.letter;

      state.arabicLetter =
        "All";

      state.query = "";

      if (state.route === "home") {

        state.category = "الكل";

        state.route = "browse";

      }

      render();

    }


    /* CATEGORY */

    else if (
      action === "category"
    ) {

      state.category =
        actionEl.dataset.category;

      state.arabicLetter =
        "All";

      state.englishLetter =
        "All";

      state.query = "";

      state.route = "results";

      render();

    }

  }
);


/* =========================================================
   VOICE LOAD
========================================================= */

if (
  "speechSynthesis" in window &&
  speechSynthesis.onvoiceschanged !== undefined
) {

  speechSynthesis.onvoiceschanged =
    () => {};

}


/* =========================================================
   INITIALIZE
========================================================= */

updateSavedCount();

render();
