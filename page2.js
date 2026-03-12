// Active Section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 150) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });
});


// Dark Mode
const modeBtn = document.querySelector(".mode-btn");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});


// Language
const langBtn = document.querySelector(".lang-btn");
let currentLang = "ar";

const translations = {
  ar: {
    logo: "مستقبل البيئة", "nav-home": "الرئيسية", "nav-about": "الاستدامة", "nav-problems": "المشكلات", "nav-solutions": "الحلول", "nav-tips": "نصائح", "nav-presentation": "العرض",
    "hero-h1": "معاً نحو", "hero-name": "مستقبل أخضر", "hero-job": "حماية البيئة للأجيال القادمة", "hero-p": "تعرف على مفهوم الاستدامة.", "hero-btn1": "اكتشف الحلول", "hero-btn2": "نصائح للطلاب",
    "about-title": "ما هي الاستدامة؟", "about-p1": "الاستدامة تعني استخدام الموارد بطريقة تحافظ على البيئة.", "about-p2": "تشمل تقليل التلوث واستخدام الطاقة المتجددة.",
    "problems-title": "أهم مشكلات البيئة", "problem1-title": "🌡️ تغير المناخ", "problem1-text": "ارتفاع درجة حرارة الأرض.", "problem2-title": "🥤 تلوث البلاستيك", "problem2-text": "ملايين الأطنان تصل للبحار.", "problem3-title": "🌲 إزالة الغابات", "problem3-text": "قطع الأشجار يقلل المساحات الخضراء.",
    "solutions-title": "حلول لحماية البيئة", "solution1-title": "♻️ إعادة التدوير", "solution1-text": "إعادة استخدام المواد.", "solution2-title": "☀️ الطاقة المتجددة", "solution2-text": "طاقة نظيفة ومتجددة.", "solution3-title": "💧 توفير المياه", "solution3-text": "إغلاق الصنبور يوفر المياه.",
    "tips-title": "نصائح للطلاب", "tip1-title": "🎒 استخدم شنطة قماش", "tip1-text": "تجنب أكياس البلاستيك.", "tip2-title": "🚰 وفر المياه", "tip2-text": "أغلق الصنبور.", "tip3-title": "💡 أطفئ الأنوار", "tip3-text": "أطفئ الأجهزة.",
    "presentation-title": "العرض التوضيحي", "presentation-desc": "اضغط لعرض الشرح.", "presentation-btn": "فتح العرض",
    footer: "زياد أيمن – جميع الحقوق محفوظة"
  },
  en: {
    logo: "Eco Future", "nav-home": "Home", "nav-about": "Sustainability", "nav-problems": "Problems", "nav-solutions": "Solutions", "nav-tips": "Tips", "nav-presentation": "Presentation",
    "hero-h1": "Together Towards", "hero-name": "A Green Future", "hero-job": "Protecting the Environment", "hero-p": "Learn about sustainability.", "hero-btn1": "Discover Solutions", "hero-btn2": "Student Tips",
    "about-title": "What is Sustainability?", "about-p1": "Sustainability means using resources wisely.", "about-p2": "Includes reducing pollution and renewable energy.",
    "problems-title": "Environmental Problems", "problem1-title": "🌡️ Climate Change", "problem1-text": "Rising global temperatures.", "problem2-title": "🥤 Plastic Pollution", "problem2-text": "Millions of tons reach oceans.", "problem3-title": "🌲 Deforestation", "problem3-text": "Tree cutting reduces green spaces.",
    "solutions-title": "Solutions", "solution1-title": "♻️ Recycling", "solution1-text": "Reuse materials.", "solution2-title": "☀️ Renewable Energy", "solution2-text": "Clean energy sources.", "solution3-title": "💧 Save Water", "solution3-text": "Turn off the tap.",
    "tips-title": "Tips for Students", "tip1-title": "🎒 Use Cloth Bags", "tip1-text": "Avoid plastic bags.", "tip2-title": "🚰 Save Water", "tip2-text": "Turn off tap.", "tip3-title": "💡 Turn Off Lights", "tip3-text": "Switch off devices.",
    "presentation-title": "Presentation", "presentation-desc": "Click to view.", "presentation-btn": "Open",
    footer: "© 2026 Zeyad Ayman. All rights reserved."
  }
};

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  document.documentElement.lang = currentLang;
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
  langBtn.textContent = currentLang === "ar" ? "AR" : "EN";
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
});


// Back to Top
window.addEventListener("scroll", () => {
  document.getElementById("backToTop").classList.toggle("show", window.scrollY > 400);
});
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// AI Chat
const chatBtn = document.getElementById("aiChatBtn");
const chatModal = document.getElementById("aiChatModal");
const closeChat = document.getElementById("closeChat");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");

chatBtn.addEventListener("click", () => chatModal.classList.toggle("active"));
closeChat.addEventListener("click", () => chatModal.classList.remove("active"));

// AI Response using Hugging Face (FREE API)
async function getAIResponse(question) {
  // لو عندك API Key من OpenAI استخدمه هنا، أو استخدم Hugging Face المجاني:
  const response = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-base", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": "Bearer YOUR_HF_TOKEN" // اختياري - شغال من غيره بس أحياناً بيبطئ
    },
    body: JSON.stringify({
      inputs: `Answer this question about environment and sustainability in ${currentLang === 'ar' ? 'Arabic' : 'English'}: ${question}`
    })
  });
  
  const data = await response.json();
  return data[0]?.generated_text || (currentLang === 'ar' ? "عذراً، حاول مرة أخرى." : "Sorry, try again.");
}


// أو استخدم ردود ذكية مبنية على الكلمات (بدون API):
function getSmartResponse(question) {
  const q = question.toLowerCase();
  const arResponses = {
    "مناخ": "تغير المناخ هو ارتفاع حرارة الأرض بسبب الغازات الملوثة. الحل: استخدام المواصلات العامة وتقليل الكهرباء.",
    "بلاستيك": "البلاستيك يستغرق 400 سنة ليتحلل! استخدم أكياس قماشية وزجاجات معدنية.",
    "مياه": "وفر المياه بإغلاق الصنبور وأنت تنظف أسنانك. هذا يوفر 6 لترات يومياً!",
    "طاقة": "الطاقة الشمسية والرياح طاقة نظيفة. استخدم اللمبات LED لتوفير 80% من الكهرباء.",
    "شجر": "الشجرة الواحدة تمتص 22 كجم CO2 سنوياً. زرع شجرة = حماية البيئة!",
    "تدوير": "فرز النفايات: ورق، بلاستيك، زجاج، عضوي. كل طن ورق معاد تدويره ينقذ 17 شجرة!",
    "تلوث": "التلوث يأتي من المصانع والسيارات. الحل: طاقة نظيفة ومواصلات عامة."
  };
  const enResponses = {
    "climate": "Climate change is Earth's temperature rise due to pollution. Solution: use public transport.",
    "plastic": "Plastic takes 400 years to decompose! Use cloth bags and metal bottles.",
    "water": "Save water by turning off the tap. This saves 6 liters daily!",
    "energy": "Solar and wind are clean energy. Use LED bulbs to save 80% electricity.",
    "tree": "One tree absorbs 22kg CO2 yearly. Planting trees protects Earth!",
    "recycle": "Sort waste: paper, plastic, glass, organic. One ton of recycled paper saves 17 trees!",
    "pollution": "Pollution comes from factories and cars. Solution: clean energy and public transport."
  };
  
  const responses = currentLang === 'ar' ? arResponses : enResponses;
  
  for (let key in responses) {
    if (q.includes(key)) return responses[key];
  }
  
  return currentLang === 'ar' 
    ? "سؤال ممتاز! 🌱 البيئة تحتاج منا جميعاً: تقليل البلاستيك، توفير المياه والطاقة، وزراعة الأشجار. عندك سؤال تاني؟"
    : "Great question! 🌱 The environment needs us all: reduce plastic, save water and energy, plant trees. Any other questions?";
}

async function sendMessage() {
  const msg = chatInput.value.trim();
  if (!msg) return;
  
  // User message
  chatMessages.innerHTML += `<div class="message user"><p>${msg}</p></div>`;
  chatInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  // Loading
  const loadingId = Date.now();
  chatMessages.innerHTML += `<div class="message bot" id="load${loadingId}"><p>...</p></div>`;
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  // Get response (استخدم getSmartResponse بدون API أو getAIResponse مع API)
  const response = getSmartResponse(msg); // سريع ومجاني 100%
  // const response = await getAIResponse(msg); // يحتاج API
  
  document.getElementById(`load${loadingId}`).remove();
  chatMessages.innerHTML += `<div class="message bot"><p>${response}</p></div>`;
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});