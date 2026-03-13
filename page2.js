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


// Language Toggle - نفس منطق Portfolio
const langBtn = document.querySelector(".lang-btn");
let currentLang = "ar";

const translations = {
  ar: {
    logo: "مستقبل البيئة", "nav-home": "الرئيسية", "nav-about": "الاستدامة", "nav-problems": "المشكلات", "nav-solutions": "الحلول", "nav-tips": "نصائح", "nav-presentation": "العرض",
    "hero-h1": "معاً نحو", "hero-name": "مستقبل أخضر", "hero-name2": "حماية البيئة للأجيال القادمة", "hero-p": "تعرف على مفهوم الاستدامة وكيف يمكن للطلاب المساهمة في حماية البيئة.", "hero-btn1": "اكتشف الحلول", "hero-btn2": "نصائح للطلاب",
    "about-title": "ما هي الاستدامة؟", "about-p1": "الاستدامة تعني استخدام الموارد الطبيعية بطريقة تحافظ على البيئة.", "about-p2": "تشمل تقليل التلوث، استخدام الطاقة المتجددة، والحفاظ على المياه.",
    "problems-title": "أهم مشكلات البيئة", "problem1-title": "🌡️ تغير المناخ", "problem1-text": "ارتفاع درجة حرارة الأرض بسبب الغازات الملوثة.", "problem2-title": "🥤 تلوث البلاستيك", "problem2-text": "ملايين الأطنان من البلاستيك تصل إلى البحار.", "problem3-title": "🌲 إزالة الغابات", "problem3-text": "قطع الأشجار يقلل المساحات الخضراء.", "problem4-title": "💧 تلوث المياه", "problem4-text": "إلقاء النفايات والمواد الكيميائية في الأنهار والبحار يضر الكائنات البحرية.", "problem5-title": "🗑️ زيادة النفايات", "problem5-text": "الاستهلاك الكبير يؤدي إلى زيادة النفايات مما يسبب تلوث البيئة.", "problem6-title": "🏭 تلوث الهواء", "problem6-text": "الدخان الناتج عن المصانع والسيارات يلوث الهواء ويسبب مشاكل صحية للإنسان.",
    "solutions-title": "حلول لحماية البيئة", "solution1-title": "♻️ إعادة التدوير", "solution1-text": "إعادة استخدام المواد يقلل النفايات.", "solution2-title": "☀️ الطاقة المتجددة", "solution2-text": "الطاقة الشمسية نظيفة ومتجددة.", "solution3-title": "💧 توفير المياه", "solution3-text": "إغلاق الصنبور يقلل استهلاك المياه.", "solution4-title": "🛍️ تقليل استخدام البلاستيك", "solution4-text": "استخدام أكياس قابلة لإعادة الاستخدام يقلل من تلوث البلاستيك.", "solution5-title": "🚌 استخدام المواصلات العامة", "solution5-text": "المواصلات العامة تقلل من عدد السيارات وبالتالي تقلل التلوث.", "solution6-title": "🌳 زراعة الأشجار", "solution6-text": "الأشجار تساعد في تنقية الهواء وتقليل نسبة ثاني أكسيد الكربون.",
    "tips-title": "نصائح للطلاب", "tip1-title": "🎒 استخدم شنطة قماش", "tip1-text": "تجنب أكياس البلاستيك.", "tip2-title": "🚰 وفر المياه", "tip2-text": "أغلق الصنبور وأنت تنظف أسنانك.", "tip3-title": "💡 أطفئ الأنوار", "tip3-text": "أطفئ الأجهزة عند مغادرة الغرفة.",
    "presentation-title": "العرض التوضيحي", "presentation-desc": "اضغط لعرض الشرح التفصيلي.", "presentation-btn": "فتح العرض",
    footer: "© 2026 زياد أيمن – جميع الحقوق محفوظة"
  },
  en: {
    logo: "Eco Future", "nav-home": "Home", "nav-about": "Sustainability", "nav-problems": "Problems", "nav-solutions": "Solutions", "nav-tips": "Tips", "nav-presentation": "Presentation",
    "hero-h1": "Together Towards", "hero-name": "A Green Future", "hero-name2": "Protecting the Environment for Future Generations", "hero-p": "Learn about sustainability and how students can help protect the environment.", "hero-btn1": "Discover Solutions", "hero-btn2": "Student Tips",
    "about-title": "What is Sustainability?", "about-p1": "Sustainability means using natural resources in a way that preserves the environment.", "about-p2": "Includes reducing pollution, using renewable energy, and conserving water.",
    "problems-title": "Environmental Problems", "problem1-title": "🌡️ Climate Change", "problem1-text": "Rising global temperatures due to polluting gases.", "problem2-title": "🥤 Plastic Pollution", "problem2-text": "Millions of tons of plastic reach the oceans.", "problem3-title": "🌲 Deforestation", "problem3-text": "Tree cutting reduces green spaces.", "problem4-title": "💧 Water Pollution", "problem4-text": "Dumping waste and chemicals harms marine life.", "problem5-title": "🗑️ Waste Increase", "problem5-text": "High consumption leads to increased waste causing pollution.", "problem6-title": "🏭 Air Pollution", "problem6-text": "Factory and car smoke pollutes air and causes health issues.",
    "solutions-title": "Solutions to Protect the Environment", "solution1-title": "♻️ Recycling", "solution1-text": "Reusing materials reduces waste.", "solution2-title": "☀️ Renewable Energy", "solution2-text": "Solar energy is clean and renewable.", "solution3-title": "💧 Save Water", "solution3-text": "Turning off the tap reduces water consumption.", "solution4-title": "🛍️ Reduce Plastic Use", "solution4-text": "Using reusable bags reduces plastic pollution.", "solution5-title": "🚌 Use Public Transport", "solution5-text": "Public transport reduces cars and therefore pollution.", "solution6-title": "🌳 Plant Trees", "solution6-text": "Trees help purify air and reduce carbon dioxide.",
    "tips-title": "Tips for Students", "tip1-title": "🎒 Use Cloth Bags", "tip1-text": "Avoid plastic bags.", "tip2-title": "🚰 Save Water", "tip2-text": "Turn off the tap while brushing your teeth.", "tip3-title": "💡 Turn Off Lights", "tip3-text": "Switch off devices when leaving the room.",
    "presentation-title": "Presentation", "presentation-desc": "Click to view the detailed explanation.", "presentation-btn": "Open Presentation",
    footer: "© 2026 Zeyad Ayman. All rights reserved."
  }
};

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  document.documentElement.lang = currentLang;
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";  // ← التغيير هنا
  langBtn.textContent = currentLang === "ar" ? "EN" : "AR";

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });
  
  const chatInput = document.getElementById("chatInput");
  const chatHeader = document.querySelector(".chat-header h3");
  if (chatInput) chatInput.placeholder = currentLang === "ar" ? "اكتب سؤالك..." : "Type your question...";
  if (chatHeader) chatHeader.textContent = currentLang === "ar" ? "🌱 AI مساعد" : "🌱 AI Assistant";
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

function sendMessage() {
  const msg = chatInput.value.trim();
  if (!msg) return;
  
  const userDiv = document.createElement("div");
  userDiv.className = "message user";
  userDiv.innerHTML = `<p>${msg}</p>`;
  chatMessages.appendChild(userDiv);
  
  chatInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  const loadingDiv = document.createElement("div");
  loadingDiv.className = "message bot";
  loadingDiv.innerHTML = `<p>${currentLang === 'ar' ? '...جاري التفكير' : 'Thinking...'}</p>`;
  chatMessages.appendChild(loadingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  const response = getSmartResponse(msg);
  
  setTimeout(() => {
    loadingDiv.remove();
    const botDiv = document.createElement("div");
    botDiv.className = "message bot";
    botDiv.innerHTML = `<p>${response}</p>`;
    chatMessages.appendChild(botDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 500);
}

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
