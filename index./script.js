let currentLang = "ar";

const elements = {
  title: document.getElementById("title"),
  questionInput: document.getElementById("question"),
  askBtn: document.getElementById("ask-btn"),
  answerDiv: document.getElementById("answer"),
  btnAr: document.getElementById("btn-ar"),
  btnEn: document.getElementById("btn-en"),
};

const texts = {
  ar: {
    title: "اسأل سؤالاً عن الحياة اليومية",
    placeholder: "اكتب سؤالك هنا...",
    askBtn: "اسأل",
    empty: "من فضلك اكتب سؤالًا.",
    default: "عذرًا، لا أعرف الإجابة على هذا السؤال، جرب سؤال آخر.",
    answers: [
      {
        keys: ["كيف أكون سعيد", "كيف أكون سعيدًا"],
        response: "السعادة تبدأ بتقدير الأشياء الصغيرة وممارسة الامتنان يوميًا.",
      },
      {
        keys: ["كيف أنظم وقتي", "تنظيم الوقت"],
        response: "حاول تقسيم يومك إلى مهام صغيرة واستخدم قائمة مهام بسيطة.",
      },
      {
        keys: ["كيف أحافظ على صحتي", "الصحة"],
        response: "مارس الرياضة بانتظام، وتناول طعام صحي، ونم جيدًا.",
      },
      {
        keys: ["كيف أتعلم برمجة", "تعلم البرمجة"],
        response: "ابدأ بتعلم أساسيات لغة برمجة بسيطة مثل بايثون، وتمرّن على مشاريع صغيرة.",
      },
      {
        keys: ["ما هو النجاح"],
        response: "النجاح هو تحقيق الأهداف التي وضعتها لنفسك مع الاستمرار في التعلم.",
      },
      {
        keys: ["ما هي السعادة"],
        response: "السعادة شعور داخلي بالرضا والسلام النفسي.",
      },
    ],
  },
  en: {
    title: "Ask a question about daily life",
    placeholder: "Type your question here...",
    askBtn: "Ask",
    empty: "Please type a question.",
    default: "Sorry, I don't know the answer to that question. Try asking another one.",
    answers: [
      {
        keys: ["how to be happy"],
        response:
          "Happiness starts by appreciating the small things and practicing gratitude daily.",
      },
      {
        keys: ["how to organize my time", "time management"],
        response:
          "Try breaking your day into small tasks and use a simple to-do list.",
      },
      {
        keys: ["how to stay healthy", "health"],
        response: "Exercise regularly, eat healthy food, and get good sleep.",
      },
      {
        keys: ["how to learn programming", "learn programming"],
        response:
          "Start by learning basics of a simple programming language like Python and practice small projects.",
      },
      {
        keys: ["what is success"],
        response:
          "Success is achieving the goals you set for yourself while continuing to learn.",
      },
      {
        keys: ["what is happiness"],
        response: "Happiness is an inner feeling of contentment and peace.",
      },
    ],
  },
};

function answerQuestion() {
  const q = elements.questionInput.value.trim().toLowerCase();

  if (!q) {
    elements.answerDiv.textContent = texts[currentLang].empty;
    return;
  }

  let foundAnswer = texts[currentLang].default;

  for (const item of texts[currentLang].answers) {
    for (const key of item.keys) {
      if (q.includes(key)) {
        foundAnswer = item.response;
        break;
      }
    }
    if (foundAnswer !== texts[currentLang].default) break;
  }

  elements.answerDiv.textContent = foundAnswer;
}

function setLanguage(lang) {
  currentLang = lang;

  // Change text direction
  if (lang === "ar") {
    document.body.style.direction = "rtl";
    elements.questionInput.style.direction = "rtl";
    elements.answerDiv.style.direction = "rtl";
  } else {
    document.body.style.direction = "ltr";
    elements.questionInput.style.direction = "ltr";
    elements.answerDiv.style.direction = "ltr";
  }

  // Update UI text
  elements.title.textContent = texts[lang].title;
  elements.questionInput.placeholder = texts[lang].placeholder;
  elements.askBtn.textContent = texts[lang].askBtn;
  elements.answerDiv.textContent = "";

  // Update button active states
  elements.btnAr.classList.toggle("active", lang === "ar");
  elements.btnEn.classList.toggle("active", lang === "en");
}

// Attach event listeners for language buttons
elements.btnAr.addEventListener("click", () => setLanguage("ar"));
elements.btnEn.addEventListener("click", () => setLanguage("en"));

// Initialize with Arabic
setLanguage("ar");
