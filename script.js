/* =========================================================
   ELP LEGAL DICTIONARY
   Final 3-file version
   index.html + style.css + app.js
========================================================= */


/* =========================================================
   DATA
========================================================= */

const terms = [

  {
    id: 1,

    arabic: "الكيان القانوني",

    english: "Legal Status",

    category: "القانون التجاري",

    categoryEn: "Commercial Law",

    shortDefinition:
      "The legal condition of a natural or legal person that determines their rights and obligations under the law.",

    fullDefinition:
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

    source:
      "Public-source demo content from the project workbook",

    lastUpdated: "2026-08-17"
  },


  {
    id: 2,

    arabic: "رقم البطاقة الضريبية",

    english: "Tax Card No.",

    category: "القانون التجاري",

    categoryEn: "Commercial Law",

    shortDefinition:
      "A unique identification number issued to tax-registered individuals or companies to track tax obligations and taxable transactions.",

    fullDefinition:
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

    source:
      "Public-source demo content from the project workbook",

    lastUpdated: "2026-08-17"
  },


  {
    id: 3,

    arabic: "التفويض",

    english: "Delegation",

    category: "القانون الإداري",

    categoryEn: "Administrative Law",

    shortDefinition:
      "Assigning another party to perform specific tasks or responsibilities on behalf of the delegating party.",

    fullDefinition:
      "The act of assigning another party, such as an employee, agent, or subcontractor, to perform specific tasks, duties, or responsibilities on behalf of the delegating party, while the delegating party retains ultimate responsibility and accountability for the delegated work.",

    keywords: [
      "الإنابة",
      "Authorization",
      "التكليف",
      "Assignment"
    ],

    related: [7, 1],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated: "2026-08-17"
  },


  {
    id: 4,

    arabic: "مراقبة جودة",

    english: "Quality Control",

    category: "القانون التجاري",

    categoryEn: "Commercial Law",

    shortDefinition:
      "The process of checking whether executed work complies with specified standards and requirements.",

    fullDefinition:
      "The process of verifying that executed work complies with the specifications and standards outlined in a contract through inspection, testing, and necessary quality-control procedures to ensure quality and identify and address defects or non-compliance.",

    keywords: [
      "ضبط الجودة",
      "Quality assurance",
      "التأكد من الجودة",
      "Quality verification"
    ],

    related: [9, 5],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated: "2026-08-17"
  },


  {
    id: 5,

    arabic: "فسخ العقد",

    english: "Termination",

    category: "القانون المدني",

    categoryEn: "Civil Law",

    shortDefinition:
      "The legal ending of a contract before its full execution, by agreement or because of a breach.",

    fullDefinition:
      "The legal ending of a contract before its full execution, whether by agreement of the parties or as a result of one party failing to meet contractual obligations, according to the contract terms and applicable law.",

    keywords: [
      "إنهاء العقد",
      "Contract Termination",
      "إنهاء التعاقد",
      "Termination of Agreement"
    ],

    related: [9, 8, 10],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated: "2026-08-17"
  },


  {
    id: 6,

    arabic: "وكيل تجاري",

    english: "Commercial Agent",

    category: "القانون التجاري",

    categoryEn: "Commercial Law",

    shortDefinition:
      "An agent who represents a principal in commercial activities and sales or purchases.",

    fullDefinition:
      "A commercial agent is a party who represents a principal in commercial transactions, including activities connected with sales and purchases, within the agreed scope of agency.",

    keywords: [
      "وكالة تجارية",
      "Commercial Agency Contract",
      "سمسار",
      "Broker"
    ],

    related: [1, 7, 8],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated: "2026-08-17"
  },


  {
    id: 7,

    arabic: "واجب الإخطار",

    english: "Duty to Notify",

    category: "القانون التجاري",

    categoryEn: "Commercial Law",

    shortDefinition:
      "The duty of an agent to inform the principal of important information related to the agency.",

    fullDefinition:
      "An obligation requiring an agent to communicate important information relevant to the agency relationship to the principal, supporting transparency and informed decision-making.",

    keywords: [
      "الشفافية",
      "Transparency",
      "الإفصاح",
      "Disclosure"
    ],

    related: [6, 8],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated: "2026-08-17"
  },


  {
    id: 8,

    arabic: "السرية",

    english: "Confidentiality",

    category: "القانون المدني",

    categoryEn: "Civil Law",

    shortDefinition:
      "An obligation not to disclose confidential information belonging to the principal or another protected party.",

    fullDefinition:
      "An obligation to protect confidential information and not disclose it to unauthorized parties, particularly where the information is received through a contractual or fiduciary relationship.",

    keywords: [
      "واجب الولاء",
      "Duty of loyalty",
      "علاقة محل الثقة",
      "Fiduciary Relationship"
    ],

    related: [6, 7, 5],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated: "2026-08-17"
  },


  {
    id: 9,

    arabic: "مدة العقد",

    english: "Contract Term",

    category: "القانون المدني",

    categoryEn: "Civil Law",

    shortDefinition:
      "The period during which a contract remains valid.",

    fullDefinition:
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

    source:
      "Public-source demo content from the project workbook",

    lastUpdated: "2026-08-17"
  },


  {
    id: 10,

    arabic: "الاختصاص القضائي",

    english: "Competent Jurisdiction",

    category: "القانون الإداري",

    categoryEn: "Administrative Law",

    shortDefinition:
      "The court or judicial body competent to hear disputes arising from a contract.",

    fullDefinition:
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

    source:
      "Public-source demo content from the project workbook",

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
    description: "الجرائم والسرقة والاحتيال والمصطلحات المرتبطة بها."
  },

  {
    name: "القانون المدني",
    english: "Civil Law",
    icon: "▤",
    description: "العقود والتعويض والمسؤولية."
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
    description: "التوظيف والرواتب وعلاقات العمل."
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
    description: "مصطلحات قانونية شائعة في مختلف المجالات."
  }

];


/* =========================================================
   ARABIC ALPHABET
========================================================= */

const arabicAlphabet = [
  "ا", "ب", "ت", "ث", "ج", "ح", "خ",
  "د", "ذ", "ر", "ز", "س", "ش", "ص",
  "ض", "ط", "ظ", "ع", "غ", "ف", "ق",
  "ك", "ل", "م", "ن", "ه", "و", "ي"
];

const englishAlphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const englishToArabic = {
  A: "ا",
  B: "ب",
  C: "س",
  D: "د",
  E: "ع",
  F: "ف",
  G: "ج",
  H: "ه",
  I: "ي",
  J: "ج",
  K: "ك",
  L: "ل",
  M: "م",
  N: "ن",
  O: "و",
  P: "ب",
  Q: "ق",
  R: "ر",
  S: "س",
  T: "ت",
  U: "و",
  V: "ف",
  W: "و",
  X: "ز",
  Y: "ي",
  Z: "ز"
};


/* =========================================================
   DOM
========================================================= */

const app = document.getElementById("app");
const savedCount = document.getElementById("savedCount");
const toast = document.getElementById("toast");


/* =========================================================
   STATE
========================================================= */

const state = {

  saved: readStorage("elpSaved", []),

  recent: readStorage("elpRecent", []),

  route: "home",

  query: "",

  category: "All Categories",

  letter: "All",

  alphabetType: "both"

};


/* =========================================================
   STORAGE
========================================================= */

function readStorage(key, fallback) {

  try {

    const value =
      JSON.parse(localStorage.getItem(key));

    return value ?? fallback;

  } catch {

    return fallback;

  }

}


function writeStorage(key, value) {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  } catch {}

}


/* =========================================================
   HELPERS
========================================================= */

function escapeHtml(value) {

  return String(value ?? "")
    .replace(/[&<>"']/g, c => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[c]));

}


function normalize(value) {

  return String(value || "")
    .toLocaleLowerCase("ar-EG")
    .trim();

}


function findTerm(id) {

  return terms.find(
    t => t.id === Number(id)
  );

}


function isSaved(id) {

  return state.saved.includes(
    Number(id)
  );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 2200);

}


/* =========================================================
   SAVE STATE
========================================================= */

function updateSavedCount() {

  savedCount.textContent =
    state.saved.length;

}


function saveState() {

  writeStorage(
    "elpSaved",
    state.saved
  );

  writeStorage(
    "elpRecent",
    state.recent
  );

  updateSavedCount();

}


/* =========================================================
   RECENT
========================================================= */

function addRecent(id) {

  id = Number(id);

  state.recent = [

    id,

    ...state.recent.filter(
      x => x !== id
    )

  ].slice(0, 6);

  saveState();

}


/* =========================================================
   SAVED
========================================================= */

function toggleSaved(id) {

  id = Number(id);

  if (isSaved(id)) {

    state.saved =
      state.saved.filter(
        x => x !== id
      );

    showToast(
      "تم حذف المصطلح من المحفوظات."
    );

  } else {

    state.saved.unshift(id);

    showToast(
      "تم حفظ المصطلح بنجاح."
    );

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

  state.category =
    "All Categories";

  state.letter = "All";

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

  const haystack = [

    term.arabic,

    term.english,

    term.category,

    term.categoryEn,

    term.shortDefinition,

    term.fullDefinition,

    ...(term.keywords || [])

  ].join(" ");

  return normalize(haystack)
    .includes(normalize(query));

}


/* =========================================================
   LETTER FILTER
========================================================= */

function matchesLetter(term, letter) {

  if (letter === "All") {
    return true;
  }

  if (letter.type === "en") {

    return normalize(
      term.english
    ).startsWith(
      normalize(letter.value)
    );

  }

  if (letter.type === "ar") {

    return term.arabic
      .trim()
      .startsWith(letter.value);

  }

  return true;

}


/* =========================================================
   FILTERED TERMS
========================================================= */

function filteredTerms() {

  return terms.filter(term => {

    const queryMatch =
      matchesQuery(
        term,
        state.query
      );

    const categoryMatch =
      state.category === "All Categories" ||
      term.category === state.category;

    const letterMatch =
      matchesLetter(
        term,
        state.letter
      );

    return (
      queryMatch &&
      categoryMatch &&
      letterMatch
    );

  });

}


/* =========================================================
   TERM CARD
========================================================= */

function termCard(term) {

  const saved =
    isSaved(term.id);

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
          title="${saved ? "حذف من المحفوظات" : "حفظ المصطلح"}"
          data-action="save"
          data-id="${term.id}"
        >
          ${saved ? "★" : "☆"}
        </button>

      </div>


      <span class="badge">

        ${escapeHtml(term.category)}

        <span style="opacity:.65;margin-right:4px;">
          · ${escapeHtml(term.categoryEn)}
        </span>

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
   BILINGUAL ALPHABET
========================================================= */

function alphaButtons(
  active = "All",
  prefix = ""
) {

  return `

    <div class="${prefix}alphabet bilingual-alphabet">

      <button
        class="alpha-btn ${active === "All" ? "active" : ""}"
        data-action="letter"
        data-letter-type="all"
        data-letter="All"
      >
        <span class="ar-letter">الكل</span>
        <span class="en-letter">ALL</span>
      </button>


      ${englishAlphabet.map(letter => {

        const arabic =
          englishToArabic[letter] || "";

        const activeClass =
          active &&
          active.type === "en" &&
          active.value === letter
            ? "active"
            : "";

        return `

          <button
            class="alpha-btn ${activeClass}"
            data-action="letter"
            data-letter-type="en"
            data-letter="${letter}"
          >

            <span class="ar-letter">
              ${arabic}
            </span>

            <span class="en-letter">
              ${letter}
            </span>

          </button>

        `;

      }).join("")}

    </div>

  `;

}


/* =========================================================
   ARABIC ALPHABET
========================================================= */

function arabicAlphaButtons(
  active = "All",
  prefix = ""
) {

  return `

    <div class="${prefix}alphabet bilingual-alphabet">

      <button
        class="alpha-btn ${active === "All" ? "active" : ""}"
        data-action="letter"
        data-letter-type="all"
        data-letter="All"
      >
        <span class="ar-letter">الكل</span>
        <span class="en-letter">ALL</span>
      </button>


      ${arabicAlphabet.map(letter => {

        const activeClass =
          active &&
          active.type === "ar" &&
          active.value === letter
            ? "active"
            : "";

        return `

          <button
            class="alpha-btn ${activeClass}"
            data-action="letter"
            data-letter-type="ar"
            data-letter="${letter}"
          >

            <span class="ar-letter">
              ${letter}
            </span>

          </button>

        `;

      }).join("")}

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

    <!-- HERO -->

    <section class="hero">

      <div class="container hero-content">

        <div class="eyebrow">
          البوابة القانونية المصرية
          •
          Egyptian Legal Portal
        </div>

        <h1>
          القاموس القانوني
        </h1>

        <p>
          ELP Legal Dictionary
          <br>
          ابحث عن المصطلحات القانونية،
          وتعرّف على معناها واستكشف
          المصطلحات المرتبطة بها.
        </p>


        <form
          class="search-box"
          id="homeSearch"
        >

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


    <!-- ALPHABET -->

    <div class="quick-strip">

      <div class="container quick-strip-inner">

        <div class="quick-title">
          تصفح حسب الحرف
          <small style="display:block;color:var(--muted);font-size:.7rem;font-weight:500;">
            أ–ي / A–Z
          </small>
        </div>

        ${alphaButtons("All")}

      </div>

    </div>


    <!-- CATEGORIES -->

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
            عرض الكل →
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

              <span>
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


    <!-- RECENTLY ADDED -->

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
              مجموعة من المصطلحات التجريبية الموجودة في النموذج.
            </p>

          </div>

          <button
            class="text-link"
            data-route="browse"
          >
            تصفح الكل →
          </button>

        </div>


        <div class="term-grid">

          ${featured
            .map(termCard)
            .join("")}

        </div>

      </div>

    </section>


    ${
      recentTerms.length
        ? `

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
                  عرض السجل →
                </button>

              </div>


              <div class="term-grid">

                ${recentTerms
                  .map(termCard)
                  .join("")}

              </div>

            </div>

          </section>

        `
        : ""
    }

  `;

}


/* =========================================================
   RESULTS
========================================================= */

function resultsView() {

  const results =
    filteredTerms();

  return `

    <section class="page-head">

      <div class="container">

        <h1>
          نتائج البحث
        </h1>

        <p>

          ${
            state.query
              ? `نتائج البحث عن
                 “${escapeHtml(state.query)}”`
              : "تصفح المصطلحات القانونية."
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

              <option value="All Categories">
                كل التصنيفات
              </option>

              ${categories.map(c => `

                <option
                  value="${escapeHtml(c.name)}"
                  ${
                    state.category === c.name
                      ? "selected"
                      : ""
                  }
                >

                  ${escapeHtml(c.name)}
                  ·
                  ${escapeHtml(c.english)}

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

              مصطلح متاح

            </span>


            <button
              class="text-link"
              data-route="browse"
            >
              تصفح الحروف →
            </button>

          </div>


          ${
            results.length

              ? `

                <div class="term-grid">

                  ${results
                    .map(termCard)
                    .join("")}

                </div>

              `

              : `

                <div class="no-results">

                  <h3>
                    لم يتم العثور على نتائج
                  </h3>

                  <p>
                    جربي كلمة أخرى أو ابحثي بالإنجليزية
                    أو استخدمي التصنيفات.
                  </p>

                  <button
                    class="btn primary"
                    id="noResultReset"
                  >
                    إعادة البحث
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
   BROWSE
========================================================= */

function browseView() {

  const results =
    filteredTerms();

  return `

    <section class="browse-head">

      <div class="container">

        <h1>
          تصفح المصطلحات
        </h1>

        <p>
          اختاري الحرف بالعربية أو الإنجليزية
          لاستكشاف المصطلحات القانونية.
        </p>


        <h3 style="color:var(--navy);margin:22px 0 8px;">
          الحروف الإنجليزية
        </h3>

        ${alphaButtons(
          state.letter,
          "browse-"
        )}


        <h3 style="color:var(--navy);margin:22px 0 8px;">
          الحروف العربية
        </h3>

        ${arabicAlphaButtons(
          state.letter,
          "browse-ar-"
        )}

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
            style="padding:9px 12px"
          >

            <option value="All Categories">
              كل التصنيفات
            </option>

            ${categories.map(c => `

              <option
                value="${escapeHtml(c.name)}"
                ${
                  state.category === c.name
                    ? "selected"
                    : ""
                }
              >

                ${escapeHtml(c.name)}
                ·
                ${escapeHtml(c.english)}

              </option>

            `).join("")}

          </select>

        </div>


        ${
          results.length

            ? `

              <div class="term-grid">

                ${results
                  .map(termCard)
                  .join("")}

              </div>

            `

            : `

              <div class="empty-state">

                <h3>
                  لا توجد مصطلحات
                </h3>

                <p>
                  لا توجد مصطلحات متاحة لهذا الحرف
                  أو التصنيف حاليًا.
                </p>

              </div>

            `
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
          على هذا المتصفح.
        </p>

      </div>

    </section>


    <section class="section">

      <div class="container">

        ${
          savedTerms.length

            ? `

              <div class="term-grid">

                ${savedTerms
                  .map(termCard)
                  .join("")}

              </div>

            `

            : `

              <div class="empty-state">

                <h3>
                  لا توجد مصطلحات محفوظة
                </h3>

                <p>
                  اضغطي على ☆ بجانب أي مصطلح لإضافته
                  إلى المحفوظات.
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

            ? `

              <div class="term-grid">

                ${recentTerms
                  .map(termCard)
                  .join("")}

              </div>

            `

            : `

              <div class="empty-state">

                <h3>
                  لا توجد مصطلحات حديثة
                </h3>

                <p>
                  افتحي أي مصطلح وسيظهر هنا.
                </p>

              </div>

            `
        }

      </div>

    </section>

  `;

}


/* =========================================================
   DETAIL
========================================================= */

function detailView(id) {

  const term =
    findTerm(id);

  if (!term) {
    return homeView();
  }

  addRecent(term.id);

  const related =
    term.related
      .map(findTerm)
      .filter(Boolean);

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
              </span>

              <span class="badge">
                ${escapeHtml(term.categoryEn)}
              </span>

              <span class="badge">
                Updated
                ${escapeHtml(term.lastUpdated)}
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
                ${
                  isSaved(term.id)
                    ? "★ محفوظ"
                    : "☆ حفظ المصطلح"
                }
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
                class="tab-btn active"
                data-tab="simple"
              >
                التعريف المختصر
              </button>

              <button
                class="tab-btn"
                data-tab="full"
              >
                التعريف الموسع
              </button>

            </div>


            <div
              id="definitionContent"
              class="definition-text"
            >
              ${escapeHtml(term.shortDefinition)}
            </div>


            <div class="detail-section">

              <h3>
                الكلمات المفتاحية والمرادفات
              </h3>

              <div class="tags">

                ${term.keywords
                  .map(k => `
                    <span class="tag">
                      ${escapeHtml(k)}
                    </span>
                  `)
                  .join("")}

              </div>

            </div>


            <div class="detail-section">

              <h3>
                مصطلحات مرتبطة
              </h3>

              <div class="related-list">

                ${related
                  .map(r => `

                    <button
                      class="related-link"
                      data-action="open"
                      data-id="${r.id}"
                    >

                      ${escapeHtml(r.arabic)}

                      ·

                      ${escapeHtml(r.english)}

                    </button>

                  `)
                  .join("")}

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
                ولا يمثل استشارة قانونية أو مصدرًا
                قانونيًا رسميًا.

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

  document.documentElement.lang = "ar";

  document.documentElement.dir = "rtl";

  document.body.classList.add("rtl");


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

  else if (
    state.route.startsWith("term/")
  ) {

    html =
      detailView(
        state.route.split("/")[1]
      );

  }


  app.innerHTML = html;

  updateNav();

  bindDynamicEvents();

}


/* =========================================================
   NAVIGATION
========================================================= */

function updateNav() {

  document
    .querySelectorAll("[data-route]")
    .forEach(el => {

      if (
        el.classList.contains("nav-link")
      ) {

        const route =
          el.dataset.route;

        el.classList.toggle(
          "active",
          route === state.route
        );

      }

    });

}


/* =========================================================
   EVENTS
========================================================= */

function bindDynamicEvents() {


  /* HOME SEARCH */

  const homeSearch =
    document.getElementById(
      "homeSearch"
    );

  if (homeSearch) {

    homeSearch.addEventListener(
      "submit",
      e => {

        e.preventDefault();

        const input =
          document.getElementById(
            "homeSearchInput"
          );

        state.query =
          input.value.trim();

        state.route = "results";

        state.letter = "All";

        render();

      }
    );

  }


  /* RESULT SEARCH */

  const resultSearch =
    document.getElementById(
      "resultSearch"
    );

  if (resultSearch) {

    resultSearch.addEventListener(
      "input",
      e => {

        state.query =
          e.target.value;

        render();

        const input =
          document.getElementById(
            "resultSearch"
          );

        if (input) {

          input.focus();

          input.setSelectionRange(
            input.value.length,
            input.value.length
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
      e => {

        state.category =
          e.target.value;

        render();

      }
    );

  }


  /* BROWSE CATEGORY */

  const browseCategory =
    document.getElementById(
      "browseCategory"
    );

  if (browseCategory) {

    browseCategory.addEventListener(
      "change",
      e => {

        state.category =
          e.target.value;

        render();

      }
    );

  }


  /* RESET */

  document
    .getElementById(
      "resetFilters"
    )
    ?.addEventListener(
      "click",
      () => {

        state.query = "";

        state.category =
          "All Categories";

        state.letter = "All";

        render();

      }
    );


  document
    .getElementById(
      "noResultReset"
    )
    ?.addEventListener(
      "click",
      () => {

        state.query = "";

        state.category =
          "All Categories";

        state.letter = "All";

        render();

      }
    );


  /* DEFINITION TABS */

  document
    .querySelectorAll("[data-tab]")
    .forEach(btn => {

      btn.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll("[data-tab]")
            .forEach(b =>
              b.classList.remove("active")
            );

          btn.classList.add("active");


          const termId =
            Number(
              state.route.split("/")[1]
            );

          const term =
            findTerm(termId);

          const content =
            document.getElementById(
              "definitionContent"
            );


          if (
            content &&
            term
          ) {

            content.textContent =
              btn.dataset.tab === "simple"

                ? term.shortDefinition

                : term.fullDefinition;

          }

        }
      );

    });

}


/* =========================================================
   TEXT TO SPEECH
   SECOND CLICK = STOP
========================================================= */

function speakTerm(id) {

  const term =
    findTerm(id);

  if (!term) return;


  if (
    !("speechSynthesis" in window)
  ) {

    showToast(
      "المتصفح لا يدعم خاصية النطق."
    );

    return;

  }


  /* SECOND CLICK STOPS */

  if (
    speechSynthesis.speaking
  ) {

    speechSynthesis.cancel();

    showToast(
      "تم إيقاف النطق."
    );

    return;

  }


  const text = `

    ${term.arabic}.

    ${term.english}.

    ${term.shortDefinition}.

  `;


  const utterance =
    new SpeechSynthesisUtterance(
      text
    );


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
    arabicVoice?.lang ||
    "ar-EG";

  utterance.rate = .9;


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
  e => {


    /* ROUTES */

    const routeEl =
      e.target.closest(
        "[data-route]"
      );

    if (routeEl) {

      e.preventDefault();

      setRoute(
        routeEl.dataset.route
      );

      return;

    }


    /* ACTIONS */

    const actionEl =
      e.target.closest(
        "[data-action]"
      );

    if (!actionEl) return;


    const action =
      actionEl.dataset.action;


    /* OPEN */

    if (
      action === "open"
    ) {

      state.route =
        `term/${actionEl.dataset.id}`;

      render();

    }


    /* SAVE */

    else if (
      action === "save"
    ) {

      toggleSaved(
        actionEl.dataset.id
      );

    }


    /* SPEAK */

    else if (
      action === "speak"
    ) {

      speakTerm(
        actionEl.dataset.id
      );

    }


    /* LETTER */

    else if (
      action === "letter"
    ) {

      const type =
        actionEl.dataset.letterType;

      const value =
        actionEl.dataset.letter;


      if (type === "all") {

        state.letter = "All";

      } else {

        state.letter = {
          type,
          value
        };

      }


      state.query = "";


      if (
        state.route === "home"
      ) {

        state.category =
          "All Categories";

        state.route =
          "browse";

      }


      render();

    }


    /* CATEGORY */

    else if (
      action === "category"
    ) {

      state.category =
        actionEl.dataset.category;

      state.letter =
        "All";

      state.query = "";

      state.route =
        "results";

      render();

    }

  }
);


/* =========================================================
   INITIALIZE
========================================================= */

updateSavedCount();

render();
