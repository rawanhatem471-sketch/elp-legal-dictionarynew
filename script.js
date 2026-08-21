/* =====================================================
   ELP LEGAL DICTIONARY
   SEARCH + CATEGORY FILTER + LETTER FILTER
   FAVORITES + MODAL
===================================================== */


/* =====================================================
   LEGAL TERMS DATA
===================================================== */

const terms = [

    {
        id: 1,

        arabic: "عقد",

        english: "Contract",

        category: "Civil Law",

        categoryArabic: "القانون المدني",

        definition:
            "A legally binding agreement between two or more parties.",

        translation:
            "اتفاق ملزم قانونًا بين طرفين أو أكثر."
    },


    {
        id: 2,

        arabic: "المدعي",

        english: "Plaintiff",

        category: "Civil Law",

        categoryArabic: "القانون المدني",

        definition:
            "A person who brings a case before a court.",

        translation:
            "الشخص الذي يرفع دعوى أمام المحكمة."
    },


    {
        id: 3,

        arabic: "المدعى عليه",

        english: "Defendant",

        category: "Criminal Law",

        categoryArabic: "القانون الجنائي",

        definition:
            "A person or party accused or sued in a legal proceeding.",

        translation:
            "الشخص أو الطرف المتهم أو الذي تُرفع ضده دعوى."
    },


    {
        id: 4,

        arabic: "دليل",

        english: "Evidence",

        category: "Criminal Law",

        categoryArabic: "القانون الجنائي",

        definition:
            "Information or material presented to prove or disprove a fact.",

        translation:
            "معلومات أو مواد تُقدم لإثبات أو نفي واقعة."
    },


    {
        id: 5,

        arabic: "طلاق",

        english: "Divorce",

        category: "Family Law",

        categoryArabic: "قانون الأسرة",

        definition:
            "The legal dissolution of a marriage.",

        translation:
            "الانفصال القانوني بين الزوجين وإنهاء عقد الزواج."
    },


    {
        id: 6,

        arabic: "حضانة",

        english: "Custody",

        category: "Family Law",

        categoryArabic: "قانون الأسرة",

        definition:
            "Legal responsibility for the care and upbringing of a child.",

        translation:
            "المسؤولية القانونية عن رعاية وتربية الطفل."
    },


    {
        id: 7,

        arabic: "شركة",

        english: "Company",

        category: "Commercial Law",

        categoryArabic: "القانون التجاري",

        definition:
            "A legal entity formed to conduct business activities.",

        translation:
            "كيان قانوني يتم تأسيسه لممارسة الأنشطة التجارية."
    },


    {
        id: 8,

        arabic: "موظف",

        english: "Employee",

        category: "Labor Law",

        categoryArabic: "قانون العمل",

        definition:
            "A person who works for an employer under agreed conditions.",

        translation:
            "شخص يعمل لدى صاحب عمل وفقًا لشروط متفق عليها."
    },


    {
        id: 9,

        arabic: "دستور",

        english: "Constitution",

        category: "Constitutional Law",

        categoryArabic: "القانون الدستوري",

        definition:
            "The fundamental principles and rules governing a state.",

        translation:
            "المبادئ والقواعد الأساسية التي تحكم الدولة."
    },


    {
        id: 10,

        arabic: "لائحة",

        english: "Regulation",

        category: "Administrative Law",

        categoryArabic: "القانون الإداري",

        definition:
            "An official rule issued by an authority to regulate conduct or procedures.",

        translation:
            "قاعدة رسمية تصدرها جهة مختصة لتنظيم السلوك أو الإجراءات."
    }

];


/* =====================================================
   STATE
===================================================== */

let selectedCategory = "all";

let selectedLetter = null;

let selectedLanguage = "all";

let searchText = "";

let favorites =
    JSON.parse(
        localStorage.getItem("elpFavorites")
    ) || [];

let selectedTerm = null;


/* =====================================================
   DOM ELEMENTS
===================================================== */

const mainSearch =
    document.getElementById("mainSearch");

const mainSearchBtn =
    document.getElementById("mainSearchBtn");

const dictionarySearch =
    document.getElementById("dictionarySearch");

const categoryFilter =
    document.getElementById("categoryFilter");

const languageFilter =
    document.getElementById("languageFilter");

const sortFilter =
    document.getElementById("sortFilter");

const clearFiltersBtn =
    document.getElementById("clearFiltersBtn");

const showAllBtn =
    document.getElementById("showAllBtn");

const emptyClearBtn =
    document.getElementById("emptyClearBtn");

const termsGrid =
    document.getElementById("termsGrid");

const favoritesGrid =
    document.getElementById("favoritesGrid");

const featuredGrid =
    document.getElementById("featuredGrid");

const categoryList =
    document.getElementById("categoryList");

const englishLetters =
    document.getElementById("englishLetters");

const arabicLetters =
    document.getElementById("arabicLetters");

const termCount =
    document.getElementById("termCount");

const resultsMessage =
    document.getElementById("resultsMessage");

const emptyState =
    document.getElementById("emptyState");


/* MODAL */

const termModal =
    document.getElementById("termModal");

const modalClose =
    document.getElementById("modalClose");

const modalCategory =
    document.getElementById("modalCategory");

const modalArabic =
    document.getElementById("modalArabic");

const modalEnglish =
    document.getElementById("modalEnglish");

const modalDefinition =
    document.getElementById("modalDefinition");

const modalTranslation =
    document.getElementById("modalTranslation");

const modalFavorite =
    document.getElementById("modalFavorite");


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createCategories();

        createEnglishLetters();

        createArabicLetters();

        renderTerms();

        renderFavorites();

        renderFeatured();

    }
);


/* =====================================================
   CREATE CATEGORIES
===================================================== */

function createCategories() {

    const categories =
        [
            ...new Set(
                terms.map(
                    term =>
                        term.category
                )
            )
        ];


    categories.forEach(
        category => {

            const categoryTerm =
                terms.find(
                    term =>
                        term.category ===
                        category
                );


            /* SELECT */

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                category;

            option.textContent =
                `${category} — ${categoryTerm.categoryArabic}`;

            categoryFilter.appendChild(
                option
            );


            /* BUTTON */

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "category-button";

            button.dataset.category =
                category;


            button.innerHTML =
                `
                <strong>
                    ${category}
                </strong>

                <small>
                    ${categoryTerm.categoryArabic}
                </small>
                `;


            button.addEventListener(
                "click",
                () => {

                    selectedCategory =
                        category;

                    categoryFilter.value =
                        category;

                    selectedLetter =
                        null;

                    updateActiveCategory();

                    updateActiveLetters();

                    renderTerms();

                    scrollToResults();

                }
            );


            categoryList.appendChild(
                button
            );

        }
    );

}


/* =====================================================
   CATEGORY ACTIVE STATE
===================================================== */

function updateActiveCategory() {

    document
        .querySelectorAll(
            ".category-button"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",

                    button.dataset.category ===
                    selectedCategory
                );

            }
        );

}


/* =====================================================
   ENGLISH LETTERS
===================================================== */

function createEnglishLetters() {

    const letters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


    letters.forEach(
        letter => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "letter-button";

            button.textContent =
                letter;


            button.addEventListener(
                "click",
                () => {

                    selectedLetter =
                        letter;

                    selectedLanguage =
                        "english";

                    languageFilter.value =
                        "english";

                    updateActiveLetters();

                    renderTerms();

                    scrollToResults();

                }
            );


            englishLetters.appendChild(
                button
            );

        }
    );

}


/* =====================================================
   ARABIC LETTERS
===================================================== */

function createArabicLetters() {

    const letters = [

        "ا",
        "ب",
        "ت",
        "ث",
        "ج",
        "ح",
        "خ",
        "د",
        "ذ",
        "ر",
        "ز",
        "س",
        "ش",
        "ص",
        "ض",
        "ط",
        "ظ",
        "ع",
        "غ",
        "ف",
        "ق",
        "ك",
        "ل",
        "م",
        "ن",
        "ه",
        "و",
        "ي"

    ];


    letters.forEach(
        letter => {

            const button =
                document.createElement(
                    "button"
                );

            button.className =
                "letter-button";

            button.textContent =
                letter;


            button.addEventListener(
                "click",
                () => {

                    selectedLetter =
                        letter;

                    selectedLanguage =
                        "arabic";

                    languageFilter.value =
                        "arabic";

                    updateActiveLetters();

                    renderTerms();

                    scrollToResults();

                }
            );


            arabicLetters.appendChild(
                button
            );

        }
    );

}


/* =====================================================
   LETTER ACTIVE STATE
===================================================== */

function updateActiveLetters() {

    document
        .querySelectorAll(
            ".letter-button"
        )
        .forEach(
            button => {

                button.classList.toggle(
                    "active",
                    button.textContent ===
                    selectedLetter
                );

            }
        );

}


/* =====================================================
   SEARCH
===================================================== */

function search() {

    searchText =
        mainSearch.value
            .trim()
            .toLowerCase();


    dictionarySearch.value =
        mainSearch.value;


    selectedLetter =
        null;


    updateActiveLetters();

    renderTerms();

    scrollToResults();

}


mainSearchBtn.addEventListener(
    "click",
    search
);


mainSearch.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            search();

        }

    }
);


dictionarySearch.addEventListener(
    "input",
    () => {

        searchText =
            dictionarySearch.value
                .trim()
                .toLowerCase();


        mainSearch.value =
            dictionarySearch.value;


        selectedLetter =
            null;


        updateActiveLetters();

        renderTerms();

    }
);


/* =====================================================
   CATEGORY SELECT
===================================================== */

categoryFilter.addEventListener(
    "change",
    () => {

        selectedCategory =
            categoryFilter.value;

        selectedLetter =
            null;

        updateActiveCategory();

        updateActiveLetters();

        renderTerms();

    }
);


/* =====================================================
   LANGUAGE SELECT
===================================================== */

languageFilter.addEventListener(
    "change",
    () => {

        selectedLanguage =
            languageFilter.value;

        selectedLetter =
            null;

        updateActiveLetters();

        renderTerms();

    }
);


/* =====================================================
   SORT
===================================================== */

sortFilter.addEventListener(
    "change",
    renderTerms
);


/* =====================================================
   FILTER ENGINE
===================================================== */

function getFilteredTerms() {

    let filtered =
        [...terms];


    /* SEARCH */

    if (searchText) {

        filtered =
            filtered.filter(
                term => {

                    const searchable =
                        `
                        ${term.arabic}
                        ${term.english}
                        ${term.category}
                        ${term.categoryArabic}
                        ${term.definition}
                        ${term.translation}
                        `.toLowerCase();


                    return searchable.includes(
                        searchText
                    );

                }
            );

    }


    /* CATEGORY */

    if (
        selectedCategory !==
        "all"
    ) {

        filtered =
            filtered.filter(
                term =>
                    term.category ===
                    selectedCategory
            );

    }


    /* LANGUAGE */

    if (
        selectedLanguage ===
        "english"
    ) {

        filtered =
            filtered.filter(
                term =>
                    term.english
            );

    }


    if (
        selectedLanguage ===
        "arabic"
    ) {

        filtered =
            filtered.filter(
                term =>
                    term.arabic
            );

    }


    /* LETTER */

    if (selectedLetter) {

        if (
            selectedLanguage ===
            "arabic"
        ) {

            filtered =
                filtered.filter(
                    term =>
                        term.arabic
                            .startsWith(
                                selectedLetter
                            )
                );

        } else {

            filtered =
                filtered.filter(
                    term =>
                        term.english
                            .toUpperCase()
                            .startsWith(
                                selectedLetter
                            )
                );

        }

    }


    /* SORT */

    if (
        sortFilter.value ===
        "az"
    ) {

        filtered.sort(
            (a, b) =>
                a.english.localeCompare(
                    b.english
                )
        );

    }


    if (
        sortFilter.value ===
        "za"
    ) {

        filtered.sort(
            (a, b) =>
                b.english.localeCompare(
                    a.english
                )
        );

    }


    return filtered;

}


/* =====================================================
   RENDER TERMS
===================================================== */

function renderTerms() {

    const filtered =
        getFilteredTerms();


    termsGrid.innerHTML =
        "";


    termCount.textContent =
        filtered.length;


    if (
        filtered.length === 0
    ) {

        emptyState.classList.remove(
            "hidden"
        );

        resultsMessage.textContent =
            "No terms match your current filters.";

        return;

    }


    emptyState.classList.add(
        "hidden"
    );


    if (
        searchText ||
        selectedCategory !== "all" ||
        selectedLetter
    ) {

        resultsMessage.textContent =
            `${filtered.length} matching term(s) found.`;

    } else {

        resultsMessage.textContent =
            "Browse the available terms below.";

    }


    filtered.forEach(
        term => {

            termsGrid.appendChild(
                createTermCard(term)
            );

        }
    );

}


/* =====================================================
   CREATE TERM CARD
===================================================== */

function createTermCard(term) {

    const card =
        document.createElement(
            "article"
        );

    card.className =
        "term-card";


    const isFavorite =
        favorites.includes(
            term.id
        );


    card.innerHTML =
        `

        <div class="card-top">

            <span class="category-tag">
                ${term.category}
            </span>


            <button
                class="favorite-button
                ${isFavorite ? "active" : ""}"
                aria-label="Favorite"
            >
                ${isFavorite ? "★" : "☆"}
            </button>

        </div>


        <!-- ARABIC FIRST -->

        <div class="term-name">

            <div class="term-arabic">
                ${term.arabic}
            </div>


            <!-- ENGLISH SECOND -->

            <div class="term-english">
                ${term.english}
            </div>

        </div>


        <p class="term-definition">
            ${term.definition}
        </p>


        <button
            class="view-definition"
        >
            View Definition →
        </button>

        `;


    /* FAVORITE */

    card
        .querySelector(
            ".favorite-button"
        )
        .addEventListener(
            "click",
            event => {

                event.stopPropagation();

                toggleFavorite(
                    term.id
                );

            }
        );


    /* MODAL */

    card
        .querySelector(
            ".view-definition"
        )
        .addEventListener(
            "click",
            () => {

                openModal(term);

            }
        );


    return card;

}


/* =====================================================
   FEATURED TERMS
===================================================== */

function renderFeatured() {

    featuredGrid.innerHTML =
        "";


    terms
        .slice(0, 6)
        .forEach(
            term => {

                featuredGrid.appendChild(
                    createTermCard(term)
                );

            }
        );

}


/* =====================================================
   FAVORITES
===================================================== */

function toggleFavorite(id) {

    if (
        favorites.includes(id)
    ) {

        favorites =
            favorites.filter(
                favoriteId =>
                    favoriteId !== id
            );

    } else {

        favorites.push(id);

    }


    localStorage.setItem(
        "elpFavorites",
        JSON.stringify(
            favorites
        )
    );


    renderTerms();

    renderFavorites();

    renderFeatured();


    if (
        selectedTerm &&
        selectedTerm.id === id
    ) {

        updateModalFavorite();

    }

}


/* =====================================================
   RENDER FAVORITES
===================================================== */

function renderFavorites() {

    favoritesGrid.innerHTML =
        "";


    const saved =
        terms.filter(
            term =>
                favorites.includes(
                    term.id
                )
        );


    if (
        saved.length === 0
    ) {

        favoritesGrid.innerHTML =
            `

            <div
                class="empty-state"
                style="grid-column:1/-1"
            >

                <div class="empty-symbol">
                    ☆
                </div>

                <h3>
                    No saved terms yet
                </h3>

                <p>
                    Click the star icon on a term
                    to save it here.
                </p>

            </div>

            `;

        return;

    }


    saved.forEach(
        term => {

            favoritesGrid.appendChild(
                createTermCard(term)
            );

        }
    );

}


/* =====================================================
   MODAL
===================================================== */

function openModal(term) {

    selectedTerm =
        term;


    modalCategory.textContent =
        `${term.category} — ${term.categoryArabic}`;


    modalArabic.textContent =
        term.arabic;


    modalEnglish.textContent =
        term.english;


    modalDefinition.textContent =
        term.definition;


    modalTranslation.textContent =
        term.translation;


    updateModalFavorite();


    termModal.classList.remove(
        "hidden"
    );

}


function updateModalFavorite() {

    if (
        !selectedTerm
    ) {

        return;

    }


    const isFavorite =
        favorites.includes(
            selectedTerm.id
        );


    modalFavorite.textContent =
        isFavorite
            ? "★ Remove from Favorites"
            : "☆ Add to Favorites";

}


modalClose.addEventListener(
    "click",
    () => {

        termModal.classList.add(
            "hidden"
        );

    }
);


termModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            termModal
        ) {

            termModal.classList.add(
                "hidden"
            );

        }

    }
);


modalFavorite.addEventListener(
    "click",
    () => {

        if (
            selectedTerm
        ) {

            toggleFavorite(
                selectedTerm.id
            );

        }

    }
);


/* =====================================================
   CLEAR FILTERS
===================================================== */

function clearFilters() {

    selectedCategory =
        "all";

    selectedLetter =
        null;

    selectedLanguage =
        "all";

    searchText =
        "";


    mainSearch.value =
        "";

    dictionarySearch.value =
        "";

    categoryFilter.value =
        "all";

    languageFilter.value =
        "all";

    sortFilter.value =
        "az";


    updateActiveCategory();

    updateActiveLetters();

    renderTerms();

}


clearFiltersBtn.addEventListener(
    "click",
    clearFilters
);


emptyClearBtn.addEventListener(
    "click",
    clearFilters
);


showAllBtn.addEventListener(
    "click",
    clearFilters
);


/* =====================================================
   HERO QUICK ACTIONS
===================================================== */

document
    .getElementById("browseAllBtn")
    .addEventListener(
        "click",
        () => {

            clearFilters();

            scrollToResults();

        }
    );


document
    .getElementById("browseEnglishBtn")
    .addEventListener(
        "click",
        () => {

            clearFilters();

            englishLetters.scrollIntoView({
                behavior: "smooth"
            });

        }
    );


document
    .getElementById("browseArabicBtn")
    .addEventListener(
        "click",
        () => {

            clearFilters();

            arabicLetters.scrollIntoView({
                behavior: "smooth"
            });

        }
    );


/* =====================================================
   SCROLL
===================================================== */

function scrollToResults() {

    document
        .querySelector(
            ".results-section"
        )
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}
