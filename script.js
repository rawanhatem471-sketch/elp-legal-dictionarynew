/* =====================================================
   ELP LEGAL DICTIONARY
   Smart Search + Categories + Recently Searched
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
    JSON.parse(localStorage.getItem("elpFavorites")) || [];

let recentlyViewed =
    JSON.parse(localStorage.getItem("elpRecentlyViewed")) || [];

let recentlySearched =
    JSON.parse(localStorage.getItem("elpRecentlySearched")) || [];

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

const recentSearchList =
    document.getElementById("recentSearchList");

const clearRecentSearches =
    document.getElementById("clearRecentSearches");


/* ================= INITIALIZATION ================= */

document.addEventListener("DOMContentLoaded", () => {

    populateCategories();

    createEnglishLetters();

    createArabicLetters();

    updateCategoryButtons();

    updateLetterButtons();

    renderTerms();

    renderFeatured();

    renderFavorites();

    renderRecentlySearched();

});


/* ================= NORMALIZATION ================= */

function normalizeText(text) {

    return String(text || "")
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}


function normalizeArabic(text) {

    return String(text || "")
        .trim()
        .replace(/[أإآ]/g, "ا")
        .replace(/ى/g, "ي")
        .replace(/ة/g, "ه")
        .replace(/ؤ/g, "و")
        .replace(/ئ/g, "ي")
        .replace(/ـ/g, "")
        .replace(/\s+/g, " ");

}


/* ================= FUZZY SEARCH ================= */

/*
    Calculates how similar two words are.
    This helps with small spelling mistakes.
*/

function levenshteinDistance(a, b) {

    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {

        for (let j = 1; j <= a.length; j++) {

            if (b.charAt(i - 1) === a.charAt(j - 1)) {

                matrix[i][j] =
                    matrix[i - 1][j - 1];

            } else {

                matrix[i][j] =
                    Math.min(
                        matrix[i - 1][j - 1] + 1,
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    );

            }

        }

    }

    return matrix[b.length][a.length];

}


function similarityScore(input, target) {

    if (!input || !target) return 0;

    input = normalizeText(input);
    target = normalizeText(target);

    if (input === target) return 1;

    if (target.includes(input)) return 0.95;

    if (input.includes(target)) return 0.9;

    const distance =
        levenshteinDistance(input, target);

    const maxLength =
        Math.max(input.length, target.length);

    if (maxLength === 0) return 1;

    return 1 - (distance / maxLength);

}


/* ================= SEARCH SCORE ================= */

function getSearchScore(term, query) {

    const english =
        normalizeText(term.english);

    const arabic =
        normalizeArabic(term.arabic);

    const category =
        normalizeText(term.category);

    const categoryArabic =
        normalizeArabic(term.categoryArabic);

    const definition =
        normalizeText(term.definition);

    const searchEnglish =
        normalizeText(query);

    const searchArabic =
        normalizeArabic(query);

    let score = 0;

    /* Exact term */

    if (
        english === searchEnglish ||
        arabic === searchArabic
    ) {
        score = 100;
    }

    /* Term contains query */

    else if (
        english.includes(searchEnglish) ||
        arabic.includes(searchArabic)
    ) {
        score = 90;
    }

    /* Category match */

    else if (
        category.includes(searchEnglish) ||
        categoryArabic.includes(searchArabic)
    ) {
        score = 85;
    }

    /* Definition match */

    else if (
        definition.includes(searchEnglish)
    ) {
        score = 70;
    }

    /* Fuzzy matching */

    else {

        const englishScore =
            similarityScore(
                searchEnglish,
                english
            );

        const categoryScore =
            similarityScore(
                searchEnglish,
                category
            );

        const arabicScore =
            similarityScore(
                searchArabic,
                arabic
            );

        const arabicCategoryScore =
            similarityScore(
                searchArabic,
                categoryArabic
            );

        const bestScore =
            Math.max(
                englishScore,
                categoryScore,
                arabicScore,
                arabicCategoryScore
            );

        if (bestScore >= 0.55) {

            score =
                Math.round(
                    bestScore * 80
                );

        }

    }

    return score;

}


/* ================= CATEGORIES ================= */

function populateCategories() {

    if (!categoryFilter) return;

    const categories = [
        ...new Set(
            terms.map(term => term.category)
        )
    ];

    categories.forEach(category => {

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

        button.type = "button";

        button.className =
            "category-btn";

        button.dataset.category =
            category;

        button.innerHTML = `
            <strong>${category}</strong>
            <br>
            <small>${term.categoryArabic}</small>
        `;

        button.addEventListener("click", () => {

            currentCategory = category;

            currentLetter = null;

            categoryFilter.value =
                category;

            updateCategoryButtons();

            updateLetterButtons();

            renderTerms();

            scrollToResults();

        });

        categoryButtons.appendChild(button);

    });

}


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


/* ================= LETTERS ================= */

function createEnglishLetters() {

    const letters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    letters.forEach(letter => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "letter-btn";

        button.textContent =
            letter;

        button.dataset.letter =
            letter;

        button.dataset.language =
            "english";

        button.addEventListener("click", () => {

            currentLetter = letter;

            currentLanguage = "english";

            currentSearch = "";

            mainSearch.value = "";

            dictionarySearch.value = "";

            languageFilter.value =
                "english";

            updateLetterButtons();

            renderTerms();

            scrollToResults();

        });

        englishLettersContainer.appendChild(button);

    });

}


function createArabicLetters() {

    const letters = [
        "ا","ب","ت","ث","ج","ح","خ",
        "د","ذ","ر","ز","س","ش","ص",
        "ض","ط","ظ","ع","غ","ف","ق",
        "ك","ل","م","ن","ه","و","ي"
    ];

    letters.forEach(letter => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "letter-btn";

        button.textContent =
            letter;

        button.dataset.letter =
            letter;

        button.dataset.language =
            "arabic";

        button.addEventListener("click", () => {

            currentLetter = letter;

            currentLanguage = "arabic";

            currentSearch = "";

            mainSearch.value = "";

            dictionarySearch.value = "";

            languageFilter.value =
                "arabic";

            updateLetterButtons();

            renderTerms();

            scrollToResults();

        });

        arabicLettersContainer.appendChild(button);

    });

}


function updateLetterButtons() {

    document
        .querySelectorAll(".letter-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.letter ===
                currentLetter &&
                button.dataset.language ===
                currentLanguage
            );

        });

}


/* ================= SMART SEARCH ================= */

function performSearch() {

    const query =
        mainSearch.value.trim();

    currentSearch = query;

    dictionarySearch.value = query;

    currentLetter = null;

    updateLetterButtons();

    if (query) {

        saveRecentSearch(query);

    }

    renderTerms();

    scrollToResults();

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
            dictionarySearch.value.trim();

        mainSearch.value =
            dictionarySearch.value;

        currentLetter = null;

        updateLetterButtons();

        renderTerms();

    }
);


/* ================= FILTER EVENTS ================= */

categoryFilter.addEventListener(
    "change",
    () => {

        currentCategory =
            categoryFilter.value;

        currentLetter = null;

        updateCategoryButtons();

        updateLetterButtons();

        renderTerms();

    }
);


languageFilter.addEventListener(
    "change",
    () => {

        currentLanguage =
            languageFilter.value;

        currentLetter = null;

        updateLetterButtons();

        renderTerms();

    }
);


sortFilter.addEventListener(
    "change",
    () => {

        renderTerms();

    }
);


/* ================= FILTER LOGIC ================= */

function getFilteredTerms() {

    let result = [...terms];

    let isApproximateSearch = false;


    /* SEARCH */

    if (currentSearch) {

        const scoredResults =
            result
                .map(term => ({
                    term: term,
                    score:
                        getSearchScore(
                            term,
                            currentSearch
                        )
                }))
                .filter(item =>
                    item.score >= 50
                )
                .sort(
                    (a, b) =>
                        b.score - a.score
                );

        result =
            scoredResults.map(
                item => item.term
            );


        /*
            If the top result is not an exact
            match, we consider it an approximate
            result.
        */

        if (
            scoredResults.length > 0 &&
            scoredResults[0].score < 90
        ) {

            isApproximateSearch = true;

        }

    }


    /* CATEGORY */

    if (currentCategory !== "all") {

        result =
            result.filter(
                term =>
                    term.category ===
                    currentCategory
            );

    }


    /* LANGUAGE */

    if (currentLanguage === "english") {

        result =
            result.filter(
                term =>
                    Boolean(term.english)
            );

    }

    if (currentLanguage === "arabic") {

        result =
            result.filter(
                term =>
                    Boolean(term.arabic)
            );

    }


    /* LETTER */

    if (currentLetter) {

        if (currentLanguage === "arabic") {

            result =
                result.filter(term => {

                    const arabic =
                        normalizeArabic(
                            term.arabic
                        );

                    const letter =
                        normalizeArabic(
                            currentLetter
                        );

                    return arabic.startsWith(
                        letter
                    );

                });

        } else {

            result =
                result.filter(term => {

                    const english =
                        normalizeText(
                            term.english
                        );

                    return english
                        .toUpperCase()
                        .startsWith(
                            currentLetter
                        );

                });

        }

    }


    /* SORT */

    const sort =
        sortFilter.value;


    if (
        sort === "az" &&
        !currentSearch
    ) {

        result.sort(
            (a, b) =>
                a.english.localeCompare(
                    b.english
                )
        );

    }


    if (
        sort === "za" &&
        !currentSearch
    ) {

        result.sort(
            (a, b) =>
                b.english.localeCompare(
                    a.english
                )
        );

    }


    if (sort === "recent") {

        result.sort((a, b) => {

            const ai =
                recentlyViewed.indexOf(a.id);

            const bi =
                recentlyViewed.indexOf(b.id);

            const aPosition =
                ai === -1
                    ? Infinity
                    : ai;

            const bPosition =
                bi === -1
                    ? Infinity
                    : bi;

            return (
                aPosition -
                bPosition
            );

        });

    }


    return {
        result,
        isApproximateSearch
    };

}


/* ================= RENDER TERMS ================= */

function renderTerms() {

    const {
        result,
        isApproximateSearch
    } =
        getFilteredTerms();


    termCount.textContent =
        result.length;

    termsGrid.innerHTML = "";


    if (result.length === 0) {

        emptyState.classList.remove(
            "hidden"
        );

        resultsMessage.textContent =
            `No results found for "${currentSearch}".`;

        return;

    }


    emptyState.classList.add(
        "hidden"
    );


    if (currentSearch) {

        if (isApproximateSearch) {

            resultsMessage.textContent =
                `Showing closest matches for "${currentSearch}".`;

        } else {

            resultsMessage.textContent =
                `${result.length} matching term(s) found.`;

        }

    } else if (
        currentCategory !== "all" ||
        currentLetter ||
        currentLanguage !== "all"
    ) {

        resultsMessage.textContent =
            `${result.length} matching term(s) found.`;

    } else {

        resultsMessage.textContent =
            "Browse the available terms below.";

    }


    result.forEach(term => {

        termsGrid.appendChild(
            createTermCard(term)
        );

    });

}


/* ================= TERM CARD ================= */

function createTermCard(term) {

    const card =
        document.createElement("article");

    card.className =
        "term-card";


    const isFavorite =
        favorites.includes(term.id);


    card.innerHTML = `

        <div class="card-top">

            <span class="category-tag">
                ${term.category}
            </span>

            <button
                type="button"
                class="favorite-btn ${
                    isFavorite
                        ? "active"
                        : ""
                }"
                data-id="${term.id}"
                title="${
                    isFavorite
                        ? "Remove from favorites"
                        : "Add to favorites"
                }"
            >
                ${
                    isFavorite
                        ? "★"
                        : "☆"
                }
            </button>

        </div>

        <div class="arabic-term">
            ${term.arabic}
        </div>

        <span class="english-term">
            ${term.english}
        </span>

        <p>
            ${term.definition}
        </p>

        <button
            type="button"
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

                toggleFavorite(term.id);

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

    featuredGrid.innerHTML = "";

    terms
        .slice(0, 6)
        .forEach(term => {

            featuredGrid.appendChild(
                createTermCard(term)
            );

        });

}


/* ================= FAVORITES ================= */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

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


function renderFavorites() {

    favoritesGrid.innerHTML = "";


    const favoriteTerms =
        terms.filter(
            term =>
                favorites.includes(
                    term.id
                )
        );


    if (favoriteTerms.length === 0) {

        favoritesGrid.innerHTML = `

            <div
                class="empty-state"
                style="grid-column:1/-1"
            >

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


    favoriteTerms.forEach(term => {

        favoritesGrid.appendChild(
            createTermCard(term)
        );

    });

}


/* ================= MODAL ================= */

function openModal(term) {

    selectedTerm = term;

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

    addRecentlyViewed(term.id);

}


function updateModalFavorite() {

    if (!selectedTerm) return;

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
            event.target === termModal
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

        if (selectedTerm) {

            toggleFavorite(
                selectedTerm.id
            );

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            !termModal.classList.contains(
                "hidden"
            )
        ) {

            closeModal();

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
        recentlyViewed.slice(0, 10);

    localStorage.setItem(
        "elpRecentlyViewed",
        JSON.stringify(
            recentlyViewed
        )
    );

}


/* ================= RECENTLY SEARCHED ================= */

function saveRecentSearch(query) {

    query = query.trim();

    if (!query) return;


    recentlySearched =
        recentlySearched.filter(
            item =>
                item.toLowerCase() !==
                query.toLowerCase()
        );


    recentlySearched.unshift(query);


    recentlySearched =
        recentlySearched.slice(0, 6);


    localStorage.setItem(
        "elpRecentlySearched",
        JSON.stringify(
            recentlySearched
        )
    );


    renderRecentlySearched();

}


function renderRecentlySearched() {

    if (!recentSearchList) return;


    recentSearchList.innerHTML = "";


    if (recentlySearched.length === 0) {

        recentSearchList.innerHTML = `
            <span class="no-recent-searches">
                No recent searches yet.
            </span>
        `;

        return;

    }


    recentlySearched.forEach(search => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "recent-search-item";

        button.innerHTML = `
            <span class="recent-search-icon">⌕</span>
            <span>${search}</span>
        `;


        button.addEventListener(
            "click",
            () => {

                mainSearch.value =
                    search;

                dictionarySearch.value =
                    search;

                currentSearch =
                    search;

                currentLetter =
                    null;

                updateLetterButtons();

                renderTerms();

                scrollToResults();

            }
        );


        recentSearchList.appendChild(
            button
        );

    });

}


if (clearRecentSearches) {

    clearRecentSearches.addEventListener(
        "click",
        () => {

            recentlySearched = [];

            localStorage.removeItem(
                "elpRecentlySearched"
            );

            renderRecentlySearched();

        }
    );

}


/* ================= CLEAR FILTERS ================= */

function resetFilters() {

    currentCategory = "all";

    currentLetter = null;

    currentLanguage = "all";

    currentSearch = "";

    mainSearch.value = "";

    dictionarySearch.value = "";

    categoryFilter.value = "all";

    languageFilter.value = "all";

    sortFilter.value = "az";

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
    .querySelectorAll("[data-action]")
    .forEach(button => {

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
                            behavior: "smooth"
                        });

                }


                if (
                    action ===
                    "arabicLetters"
                ) {

                    arabicLettersContainer
                        .scrollIntoView({
                            behavior: "smooth"
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

    });


/* ================= HELPERS ================= */

function scrollToResults() {

    const results =
        document.querySelector(
            ".results-header"
        );

    if (!results) return;

    results.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}
