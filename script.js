/* =====================================================
   ELP LEGAL DICTIONARY
   Functional Search + Filters + Arabic + Favorites
===================================================== */


/* ================= DATA ================= */

const terms = [

    {
        id: 1,
        english: "Contract",
        arabic: "عقد",
        category: "Civil Law",
        categoryArabic: "القانون المدني",
        definition:
            "A legally binding agreement between two or more parties.",
        translation:
            "اتفاق ملزم قانونًا بين طرفين أو أكثر."
    },

    {
        id: 2,
        english: "Plaintiff",
        arabic: "المدعي",
        category: "Civil Law",
        categoryArabic: "القانون المدني",
        definition:
            "A person who brings a case before a court.",
        translation:
            "الشخص الذي يرفع دعوى أمام المحكمة."
    },

    {
        id: 3,
        english: "Defendant",
        arabic: "المدعى عليه",
        category: "Criminal Law",
        categoryArabic: "القانون الجنائي",
        definition:
            "A person or party accused or sued in a legal proceeding.",
        translation:
            "الشخص أو الطرف المتهم أو الذي تُرفع ضده دعوى."
    },

    {
        id: 4,
        english: "Evidence",
        arabic: "دليل",
        category: "Criminal Law",
        categoryArabic: "القانون الجنائي",
        definition:
            "Information or material presented to prove or disprove a fact.",
        translation:
            "معلومات أو مواد تُقدم لإثبات أو نفي واقعة."
    },

    {
        id: 5,
        english: "Divorce",
        arabic: "طلاق",
        category: "Family Law",
        categoryArabic: "قانون الأسرة",
        definition:
            "The legal dissolution of a marriage.",
        translation:
            "الانفصال القانوني بين الزوجين وإنهاء عقد الزواج."
    },

    {
        id: 6,
        english: "Custody",
        arabic: "حضانة",
        category: "Family Law",
        categoryArabic: "قانون الأسرة",
        definition:
            "Legal responsibility for the care and upbringing of a child.",
        translation:
            "المسؤولية القانونية عن رعاية وتربية الطفل."
    },

    {
        id: 7,
        english: "Company",
        arabic: "شركة",
        category: "Commercial Law",
        categoryArabic: "القانون التجاري",
        definition:
            "A legal entity formed to conduct business activities.",
        translation:
            "كيان قانوني يتم تأسيسه لممارسة الأنشطة التجارية."
    },

    {
        id: 8,
        english: "Employee",
        arabic: "موظف",
        category: "Labor Law",
        categoryArabic: "قانون العمل",
        definition:
            "A person who works for an employer under agreed conditions.",
        translation:
            "شخص يعمل لدى صاحب عمل وفقًا لشروط متفق عليها."
    },

    {
        id: 9,
        english: "Constitution",
        arabic: "دستور",
        category: "Constitutional Law",
        categoryArabic: "القانون الدستوري",
        definition:
            "The fundamental principles and rules governing a state.",
        translation:
            "المبادئ والقواعد الأساسية التي تحكم الدولة."
    },

    {
        id: 10,
        english: "Regulation",
        arabic: "لائحة",
        category: "Administrative Law",
        categoryArabic: "القانون الإداري",
        definition:
            "An official rule issued by an authority to regulate conduct or procedures.",
        translation:
            "قاعدة رسمية تصدرها جهة مختصة لتنظيم السلوك أو الإجراءات."
    }

];


/* ================= STATE ================= */

let currentCategory = "all";
let currentLetter = null;
let currentLanguage = "all";
let currentSearch = "";

let favorites =
    JSON.parse(
        localStorage.getItem("elpFavorites")
    ) || [];

let recentlyViewed =
    JSON.parse(
        localStorage.getItem("elpRecentlyViewed")
    ) || [];

let selectedTerm = null;


/* ================= ELEMENTS ================= */

const mainSearch =
    document.getElementById("mainSearch");

const dictionarySearch =
    document.getElementById("dictionarySearch");

const searchBtn =
    document.getElementById("searchBtn");

const categoryFilter =
    document.getElementById("categoryFilter");

const languageFilter =
    document.getElementById("languageFilter");

const sortFilter =
    document.getElementById("sortFilter");

const clearFilters =
    document.getElementById("clearFilters");

const emptyClearBtn =
    document.getElementById("emptyClearBtn");

const showAllBtn =
    document.getElementById("showAllBtn");

const termsGrid =
    document.getElementById("termsGrid");

const favoritesGrid =
    document.getElementById("favoritesGrid");

const featuredGrid =
    document.getElementById("featuredGrid");

const emptyState =
    document.getElementById("emptyState");

const termCount =
    document.getElementById("termCount");

const resultsMessage =
    document.getElementById("resultsMessage");

const categoryButtons =
    document.getElementById("categoryButtons");

const englishLettersContainer =
    document.getElementById("englishLetters");

const arabicLettersContainer =
    document.getElementById("arabicLetters");

const termModal =
    document.getElementById("termModal");

const modalClose =
    document.getElementById("modalClose");

const modalCategory =
    document.getElementById("modalCategory");

const modalEnglish =
    document.getElementById("modalEnglish");

const modalArabic =
    document.getElementById("modalArabic");

const modalDefinition =
    document.getElementById("modalDefinition");

const modalTranslation =
    document.getElementById("modalTranslation");

const modalFavorite =
    document.getElementById("modalFavorite");


/* ================= INITIALIZATION ================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        populateCategories();

        createEnglishLetters();

        createArabicLetters();

        renderTerms();

        renderFeatured();

        renderFavorites();

    }
);


/* ================= CATEGORIES ================= */

function populateCategories() {

    const categories =
        [...new Set(
            terms.map(
                term => term.category
            )
        )];


    categories.forEach(
        category => {

            const term =
                terms.find(
                    item =>
                        item.category === category
                );


            const option =
                document.createElement("option");

            option.value = category;

            option.textContent =
                `${category} — ${term.categoryArabic}`;

            categoryFilter.appendChild(option);


            const button =
                document.createElement("button");

            button.className =
                "category-btn";

            button.dataset.category =
                category;

            button.innerHTML =
                `
                <strong>${category}</strong>
                <br>
                <small>${term.categoryArabic}</small>
                `;


            button.addEventListener(
                "click",
                () => {

                    currentCategory =
                        category;

                    categoryFilter.value =
                        category;

                    updateCategoryButtons();

                    renderTerms();

                    scrollToResults();

                }
            );


            categoryButtons.appendChild(
                button
            );

        }
    );

}


/* ================= CATEGORY ACTIVE ================= */

function updateCategoryButtons() {

    document
        .querySelectorAll(".category-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category ===
                currentCategory
            );

        });

}


/* ================= ENGLISH LETTERS ================= */

function createEnglishLetters() {

    const letters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


    letters.forEach(
        letter => {

            const button =
                document.createElement("button");

            button.className =
                "letter-btn";

            button.textContent =
                letter;

            button.dataset.letter =
                letter;


            button.addEventListener(
                "click",
                () => {

                    currentLetter =
                        letter;

                    currentLanguage =
                        "english";

                    languageFilter.value =
                        "english";

                    updateLetterButtons();

                    renderTerms();

                    scrollToResults();

                }
            );


            englishLettersContainer.appendChild(
                button
            );

        }
    );

}


/* ================= ARABIC LETTERS ================= */

function createArabicLetters() {

    const letters =
        [
            "ا","ب","ت","ث","ج","ح","خ",
            "د","ذ","ر","ز","س","ش","ص",
            "ض","ط","ظ","ع","غ","ف","ق",
            "ك","ل","م","ن","ه","و","ي"
        ];


    letters.forEach(
        letter => {

            const button =
                document.createElement("button");

            button.className =
                "letter-btn";

            button.textContent =
                letter;

            button.dataset.letter =
                letter;


            button.addEventListener(
                "click",
                () => {

                    currentLetter =
                        letter;

                    currentLanguage =
                        "arabic";

                    languageFilter.value =
                        "arabic";

                    updateLetterButtons();

                    renderTerms();

                    scrollToResults();

                }
            );


            arabicLettersContainer.appendChild(
                button
            );

        }
    );

}


/* ================= LETTER ACTIVE ================= */

function updateLetterButtons() {

    document
        .querySelectorAll(".letter-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.letter ===
                currentLetter
            );

        });

}


/* ================= SEARCH ================= */

function performSearch() {

    currentSearch =
        mainSearch.value
            .trim()
            .toLowerCase();


    dictionarySearch.value =
        mainSearch.value;


    currentLetter = null;

    updateLetterButtons();

    renderTerms();

    document
        .getElementById("dictionary")
        .scrollIntoView({
            behavior: "smooth"
        });

}


searchBtn.addEventListener(
    "click",
    performSearch
);


mainSearch.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            performSearch();

        }

    }
);


dictionarySearch.addEventListener(
    "input",
    () => {

        currentSearch =
            dictionarySearch.value
                .trim()
                .toLowerCase();

        mainSearch.value =
            dictionarySearch.value;

        renderTerms();

    }
);


/* ================= FILTER EVENTS ================= */

categoryFilter.addEventListener(
    "change",
    () => {

        currentCategory =
            categoryFilter.value;

        updateCategoryButtons();

        renderTerms();

    }
);


languageFilter.addEventListener(
    "change",
    () => {

        currentLanguage =
            languageFilter.value;

        renderTerms();

    }
);


sortFilter.addEventListener(
    "change",
    renderTerms
);


/* ================= FILTER LOGIC ================= */

function getFilteredTerms() {

    let result =
        [...terms];


    /* SEARCH */

    if (currentSearch) {

        result =
            result.filter(
                term => {

                    const text =
                        `
                        ${term.english}
                        ${term.arabic}
                        ${term.definition}
                        ${term.category}
                        ${term.categoryArabic}
                        `
                        .toLowerCase();


                    return text.includes(
                        currentSearch
                    );

                }
            );

    }


    /* CATEGORY */

    if (
        currentCategory !== "all"
    ) {

        result =
            result.filter(
                term =>
                    term.category ===
                    currentCategory
            );

    }


    /* LANGUAGE */

    if (
        currentLanguage ===
        "english"
    ) {

        result =
            result.filter(
                term =>
                    term.english
            );

    }


    if (
        currentLanguage ===
        "arabic"
    ) {

        result =
            result.filter(
                term =>
                    term.arabic
            );

    }


    /* LETTER */

    if (currentLetter) {

        if (
            currentLanguage ===
            "arabic"
        ) {

            result =
                result.filter(
                    term =>
                        term.arabic
                            .startsWith(
                                currentLetter
                            )
                );

        } else {

            result =
                result.filter(
                    term =>
                        term.english
                            .toUpperCase()
                            .startsWith(
                                currentLetter
                            )
                );

        }

    }


    /* SORT */

    const sort =
        sortFilter.value;


    if (sort === "az") {

        result.sort(
            (a,b) =>
                a.english.localeCompare(
                    b.english
                )
        );

    }


    if (sort === "za") {

        result.sort(
            (a,b) =>
                b.english.localeCompare(
                    a.english
                )
        );

    }


    if (
        sort === "recent"
    ) {

        result.sort(
            (a,b) => {

                const ai =
                    recentlyViewed.indexOf(
                        a.id
                    );

                const bi =
                    recentlyViewed.indexOf(
                        b.id
                    );

                return ai - bi;

            }
        );

    }


    return result;

}


/* ================= RENDER ================= */

function renderTerms() {

    const result =
        getFilteredTerms();


    termCount.textContent =
        result.length;


    termsGrid.innerHTML =
        "";


    if (
        result.length === 0
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
        currentSearch ||
        currentCategory !== "all" ||
        currentLetter
    ) {

        resultsMessage.textContent =
            `${result.length} matching term(s) found.`;

    } else {

        resultsMessage.textContent =
            "Browse the available terms below.";

    }


    result.forEach(
        term => {

            termsGrid.appendChild(
                createTermCard(term)
            );

        }
    );

}


/* ================= TERM CARD ================= */

function createTermCard(term) {

    const card =
        document.createElement("article");

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
                class="favorite-btn
                ${isFavorite ? "active" : ""}"
                data-id="${term.id}"
                title="Add to favorites"
            >
                ${isFavorite ? "★" : "☆"}
            </button>

        </div>

        <h3>
            ${term.english}
        </h3>

        <div class="arabic-term">
            ${term.arabic}
        </div>

        <p>
            ${term.definition}
        </p>

        <button
            class="view-btn"
            data-id="${term.id}"
        >
            View Definition →
        </button>
        `;


    card
        .querySelector(".favorite-btn")
        .addEventListener(
            "click",
            event => {

                event.stopPropagation();

                toggleFavorite(
                    term.id
                );

            }
        );


    card
        .querySelector(".view-btn")
        .addEventListener(
            "click",
            () => {

                openModal(term);

            }
        );


    return card;

}


/* ================= FEATURED ================= */

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


/* ================= FAVORITES ================= */

function toggleFavorite(id) {

    if (
        favorites.includes(id)
    ) {

        favorites =
            favorites.filter(
                item => item !== id
            );

    } else {

        favorites.push(id);

    }


    localStorage.setItem(
        "elpFavorites",
        JSON.stringify(favorites)
    );


    renderTerms();

    renderFeatured();

    renderFavorites();


    if (
        selectedTerm &&
        selectedTerm.id === id
    ) {

        updateModalFavorite();

    }

}


/* ================= RENDER FAVORITES ================= */

function renderFavorites() {

    favoritesGrid.innerHTML =
        "";


    const favoriteTerms =
        terms.filter(
            term =>
                favorites.includes(
                    term.id
                )
        );


    if (
        favoriteTerms.length === 0
    ) {

        favoritesGrid.innerHTML =
            `
            <div class="empty-state"
                 style="grid-column:1/-1">

                <div class="empty-icon">
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


    favoriteTerms.forEach(
        term => {

            favoritesGrid.appendChild(
                createTermCard(term)
            );

        }
    );

}


/* ================= MODAL ================= */

function openModal(term) {

    selectedTerm =
        term;


    modalCategory.textContent =
        `${term.category} — ${term.categoryArabic}`;

    modalEnglish.textContent =
        term.english;

    modalArabic.textContent =
        term.arabic;

    modalDefinition.textContent =
        term.definition;

    modalTranslation.textContent =
        term.translation;


    updateModalFavorite();


    termModal.classList.remove(
        "hidden"
    );


    addRecentlyViewed(
        term.id
    );

}


function updateModalFavorite() {

    if (
        !selectedTerm
    ) return;


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
    closeModal
);


termModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            termModal
        ) {

            closeModal();

        }

    }
);


function closeModal() {

    termModal.classList.add(
        "hidden"
    );

}


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


/* ================= RECENTLY VIEWED ================= */

function addRecentlyViewed(id) {

    recentlyViewed =
        recentlyViewed.filter(
            item => item !== id
        );


    recentlyViewed.unshift(id);


    recentlyViewed =
        recentlyViewed.slice(
            0,
            10
        );


    localStorage.setItem(
        "elpRecentlyViewed",
        JSON.stringify(
            recentlyViewed
        )
    );

}


/* ================= CLEAR FILTERS ================= */

function resetFilters() {

    currentCategory =
        "all";

    currentLetter =
        null;

    currentLanguage =
        "all";

    currentSearch =
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


    updateCategoryButtons();

    updateLetterButtons();

    renderTerms();

}


clearFilters.addEventListener(
    "click",
    resetFilters
);


emptyClearBtn.addEventListener(
    "click",
    resetFilters
);


showAllBtn.addEventListener(
    "click",
    resetFilters
);


/* ================= QUICK BUTTONS ================= */

document
    .querySelectorAll(
        "[data-action]"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const action =
                        button.dataset.action;


                    resetFilters();


                    if (
                        action ===
                        "englishLetters"
                    ) {

                        englishLettersContainer
                            .scrollIntoView({
                                behavior:
                                    "smooth"
                            });

                    }


                    if (
                        action ===
                        "arabicLetters"
                    ) {

                        arabicLettersContainer
                            .scrollIntoView({
                                behavior:
                                    "smooth"
                            });

                    }


                    if (
                        action ===
                        "showAll"
                    ) {

                        scrollToResults();

                    }

                }
            );

        }
    );


/* ================= HELPERS ================= */

function scrollToResults() {

    document
        .querySelector(
            ".results-header"
        )
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}
