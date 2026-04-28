const screens = ["cover", "upload", "quiz", "scan", "result", "photoPreview", "pay", "share", "feedback"];
const flowScreens = screens.filter((screen) => screen !== "cover");

const sparkleTags = {
  curiosity: "好奇心",
  observation: "观察力",
  focus: "专注力",
  imagination: "想象力",
  expression: "表达力",
  empathy: "共情力",
  action: "行动力",
  creativity: "创造力",
  exploration: "探索欲",
  affinity: "亲和力",
  challenge: "挑战力",
  story: "故事感",
  companionship: "陪伴感",
};

const identities = [
  {
    id: "explorer",
    name: "小小世界观察员",
    title: "好奇心正在发光",
    color: "#f2665b",
    icon: "🔭",
    tags: ["curiosity", "observation", "exploration", "action"],
    summary: "那些每天冒出来的小问题，可能都是 TA 未来闪闪发光的开始。",
    scene: "宝宝穿着小探险服，认真观察发光星图。",
    sample: "未来星球实验室",
  },
  {
    id: "scientist",
    name: "万物研究小专家",
    title: "认真观察的小脑袋",
    color: "#48bbb9",
    icon: "⚗",
    tags: ["focus", "observation", "curiosity", "creativity"],
    summary: "TA 总想弄清楚事情是怎么发生的，认真观察的瞬间正在长成未来的思考力。",
    scene: "宝宝坐在迷你实验台前，周围是安全可爱的试管、星球模型和手写公式喜报。",
    sample: "迷你实验台",
  },
  {
    id: "artist",
    name: "想象力发光体",
    title: "小脑袋里的发光宇宙",
    color: "#f5b84b",
    icon: "🎨",
    tags: ["imagination", "creativity", "story", "observation"],
    summary: "这个宝宝的小脑袋里，像住着一个会发光的小宇宙。",
    scene: "宝宝站在巨大画布前，身边漂浮着彩色云朵和自己的小小作品展。",
    sample: "会发光的小宇宙",
  },
  {
    id: "speaker",
    name: "小小舞台发光体",
    title: "认真表达的小光芒",
    color: "#ff7b73",
    icon: "🎙",
    tags: ["expression", "affinity", "imagination", "action"],
    summary: "TA 正在学习把自己的小想法，认真讲给这个世界听。",
    scene: "宝宝站在温暖小舞台中央，手里拿着迷你话筒，身后是掌声和高光灯牌。",
    sample: "发光小舞台",
  },
  {
    id: "champion",
    name: "行动派小冠军",
    title: "勇敢尝试的小选手",
    color: "#f0aa38",
    icon: "🏆",
    tags: ["action", "challenge", "exploration", "focus"],
    summary: "每一次“我再试试”，都是 TA 靠近高光时刻的一小步。",
    scene: "宝宝穿着冠军运动服，站在软萌领奖台上，周围是彩带和家庭应援牌。",
    sample: "家庭应援高光台",
  },
  {
    id: "leader",
    name: "治愈系小队长",
    title: "温柔也很有力量",
    color: "#58bfae",
    icon: "♥",
    tags: ["empathy", "companionship", "affinity", "expression"],
    summary: "TA 的温柔不是慢热，是一种很早就长出来的珍贵力量。",
    scene: "宝宝坐在温暖阳光里的小圆桌旁，身边是写着“大家都喜欢你”的小旗帜。",
    sample: "阳光小圆桌",
  },
];

const questions = [
  {
    title: "带 TA 去一个没去过的地方，TA 第一反应更像？",
    options: [
      { label: "好奇地到处看", identity: "explorer", weights: { curiosity: 3, observation: 2, exploration: 2 } },
      { label: "先观察大人反应", identity: "scientist", weights: { observation: 3, focus: 2 } },
      { label: "有点害羞但慢慢靠近", identity: "leader", weights: { empathy: 2, affinity: 2, observation: 1 } },
      { label: "马上玩起来", identity: "champion", weights: { action: 3, challenge: 2 } },
    ],
  },
  {
    title: "TA 最近最让你忍不住笑的瞬间是？",
    options: [
      { label: "问了一个奇妙问题", identity: "explorer", weights: { curiosity: 3, imagination: 2 } },
      { label: "认真做一件小事", identity: "scientist", weights: { focus: 3, observation: 1 } },
      { label: "模仿大人说话", identity: "speaker", weights: { expression: 3, affinity: 1 } },
      { label: "主动安慰别人", identity: "leader", weights: { empathy: 3, companionship: 2 } },
    ],
  },
  {
    title: "看到一个新玩具，TA 通常会？",
    options: [
      { label: "研究它怎么动", identity: "scientist", weights: { focus: 2, observation: 2, curiosity: 1 } },
      { label: "编出自己的玩法", identity: "artist", weights: { imagination: 3, creativity: 2, story: 1 } },
      { label: "拿来和你互动", identity: "leader", weights: { affinity: 2, companionship: 2 } },
      { label: "很快找下一个新东西", identity: "explorer", weights: { exploration: 3, curiosity: 2 } },
    ],
  },
  {
    title: "遇到一点小困难，TA 更可能？",
    options: [
      { label: "继续试试看", identity: "champion", weights: { challenge: 3, action: 2 } },
      { label: "找大人一起想办法", identity: "leader", weights: { companionship: 2, expression: 2 } },
      { label: "换个玩法", identity: "artist", weights: { creativity: 3, imagination: 2 } },
      { label: "先停一下再回来", identity: "scientist", weights: { focus: 2, observation: 2 } },
    ],
  },
  {
    title: "你最想把 TA 现在的哪一面保存下来？",
    options: [
      { label: "好奇的小眼神", identity: "explorer", weights: { curiosity: 3, observation: 2 } },
      { label: "专注的样子", identity: "scientist", weights: { focus: 3, observation: 1 } },
      { label: "天马行空的想象", identity: "artist", weights: { imagination: 3, story: 2 } },
      { label: "暖暖的陪伴感", identity: "leader", weights: { empathy: 3, companionship: 2 } },
    ],
  },
];

const plans = [
  {
    id: "trial",
    name: "体验版",
    price: "9.9",
    fit: "想先保存一张图",
    benefits: ["1 张高清写真", "1 张高清喜报卡", "基础闪光点解读"],
  },
  {
    id: "value",
    name: "超值版",
    price: "19.9",
    fit: "最适合发小红书",
    benefits: ["3-5 张写真", "无水印分享卡", "完整报告", "3 版小红书配文"],
  },
  {
    id: "archive",
    name: "珍藏版",
    price: "29.9",
    fit: "想做家庭纪念",
    benefits: ["超值版全部内容", "自定义未来身份", "自定义祝福", "一家三口未来纪念写真"],
  },
];

const state = {
  screen: "cover",
  photoUrl: "",
  currentQuestion: 0,
  answers: Array(questions.length).fill(null),
  selectedPlan: "value",
  profile: null,
  scanning: false,
};

const els = {
  body: document.body,
  stepLabel: document.querySelector("#stepLabel"),
  progressFill: document.querySelector("#progressFill"),
  screens: document.querySelectorAll("[data-screen]"),
  coverStart: document.querySelector("#coverStart"),
  babyUpload: document.querySelector("#babyUpload"),
  uploadPreview: document.querySelector("#uploadPreview"),
  uploadNext: document.querySelector("#uploadNext"),
  quizCount: document.querySelector("#quizCount"),
  quizBars: document.querySelector("#quizBars"),
  quizQuestion: document.querySelector("#quizQuestion"),
  quizOptions: document.querySelector("#quizOptions"),
  quizNext: document.querySelector("#quizNext"),
  scanButton: document.querySelector("#scanButton"),
  scanTitle: document.querySelector("#scanTitle"),
  radarCanvas: document.querySelector("#radarCanvas"),
  identityName: document.querySelector("#identityName"),
  identityTitle: document.querySelector("#identityTitle"),
  identitySummary: document.querySelector("#identitySummary"),
  tagRow: document.querySelector("#tagRow"),
  resultNext: document.querySelector("#resultNext"),
  sceneTitle: document.querySelector("#sceneTitle"),
  sceneCopy: document.querySelector("#sceneCopy"),
  photoNext: document.querySelector("#photoNext"),
  planList: document.querySelector("#planList"),
  planFeedback: document.querySelector("#planFeedback"),
  payNext: document.querySelector("#payNext"),
  shareIdentity: document.querySelector("#shareIdentity"),
  shareCopy: document.querySelector("#shareCopy"),
  shareStory: document.querySelector("#shareStory"),
  shareTags: document.querySelector("#shareTags"),
  shareRadarCanvas: document.querySelector("#shareRadarCanvas"),
  shareNext: document.querySelector("#shareNext"),
  restartButton: document.querySelector("#restartButton"),
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function getIdentity(id) {
  return identities.find((identity) => identity.id === id) ?? identities[0];
}

function uniqueByKey(items) {
  const seen = new Set();
  return items.filter((item) => {
    if (!item?.key || seen.has(item.key)) return false;
    seen.add(item.key);
    return true;
  });
}

function resetProfile() {
  state.profile = null;
}

function buildProfile() {
  const tagScores = Object.fromEntries(Object.keys(sparkleTags).map((key) => [key, 1]));
  const identityScores = Object.fromEntries(identities.map((identity) => [identity.id, 0]));

  state.answers.forEach((optionIndex, questionIndex) => {
    if (optionIndex === null) return;
    const option = questions[questionIndex].options[optionIndex];
    identityScores[option.identity] += 4;
    Object.entries(option.weights).forEach(([key, value]) => {
      tagScores[key] = (tagScores[key] ?? 0) + value;
    });
  });

  const identity = identities
    .map((item) => ({ ...item, score: identityScores[item.id] }))
    .sort((a, b) => b.score - a.score)[0];

  const sortedTags = Object.entries(tagScores)
    .sort((a, b) => b[1] - a[1])
    .map(([key, score]) => ({ key, score, label: sparkleTags[key] ?? key }));

  const topTags = uniqueByKey([
    ...identity.tags.map((key) => ({ key, label: sparkleTags[key], score: tagScores[key] ?? 1 })),
    ...sortedTags,
  ]).slice(0, 4);

  return {
    identity,
    tagScores,
    topTags,
    radarTags: uniqueByKey([...topTags, ...sortedTags]).slice(0, 6),
  };
}

function getProfile() {
  if (!state.profile) state.profile = buildProfile();
  return state.profile;
}

function go(screen) {
  state.screen = screen;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderProgress() {
  const index = flowScreens.indexOf(state.screen);
  const isCover = state.screen === "cover";
  els.stepLabel.textContent = isCover ? "准备开始" : `第 ${index + 1} 步 / ${flowScreens.length}`;
  els.progressFill.style.width = isCover ? "8%" : `${((index + 1) / flowScreens.length) * 100}%`;
  document.documentElement.style.setProperty("--active", getProfile().identity.color);
}

function renderScreens() {
  els.body.dataset.screen = state.screen;
  els.screens.forEach((screen) => {
    const active = screen.dataset.screen === state.screen;
    screen.hidden = !active;
    screen.classList.toggle("is-active", active);
  });
}

function renderPhotos() {
  els.body.classList.toggle("has-photo", Boolean(state.photoUrl));
  if (state.photoUrl) els.uploadPreview.src = state.photoUrl;
  else els.uploadPreview.removeAttribute("src");
  els.uploadNext.disabled = !state.photoUrl;
}

function renderQuiz() {
  const question = questions[state.currentQuestion];
  els.quizCount.textContent = `${state.currentQuestion + 1}/${questions.length}`;
  els.quizQuestion.textContent = question.title;
  els.quizBars.innerHTML = questions
    .map((_, index) => {
      const className = index < state.currentQuestion ? "done" : index === state.currentQuestion ? "active" : "";
      return `<span class="${className}"></span>`;
    })
    .join("");
  els.quizOptions.innerHTML = question.options
    .map((option, index) => {
      const selected = state.answers[state.currentQuestion] === index ? " selected" : "";
      return `<button class="option-button${selected}" type="button" data-option="${index}">${option.label}</button>`;
    })
    .join("");
  els.quizNext.textContent = state.currentQuestion === questions.length - 1 ? "下一步：解锁宝宝天赋图" : "下一题";
  els.quizNext.disabled = state.answers[state.currentQuestion] === null;
}

function renderResult() {
  const profile = getProfile();
  const { identity } = profile;
  const tags = profile.topTags.map((tag) => `<span>${tag.label}</span>`).join("");
  els.identityName.textContent = identity.name;
  els.identityTitle.textContent = identity.title;
  els.identitySummary.textContent = identity.summary;
  els.tagRow.innerHTML = tags;
  els.sceneTitle.textContent = identity.name;
  els.sceneCopy.textContent = identity.scene;
  els.shareIdentity.textContent = identity.name;
  els.shareCopy.textContent = identity.summary;
  els.shareStory.textContent = `未来某一天，TA 把“${profile.topTags.map((tag) => tag.label).join("、")}”变成了一场自己的高光展。画面里，TA 像小小艺术家一样站在作品前，认真又开心地把心里的世界介绍给大家。`;
  els.shareTags.innerHTML = tags;
  document.documentElement.style.setProperty("--active", identity.color);
  drawRadar();
  drawRadar(els.shareRadarCanvas);
}

function renderPlans() {
  els.planList.innerHTML = plans
    .map((plan) => {
      const selected = state.selectedPlan === plan.id ? " selected" : "";
      return `
        <button class="plan-card${selected}" type="button" data-plan="${plan.id}">
          <h3><span>${plan.name}</span><span>¥ ${plan.price}</span></h3>
          <p>${plan.fit}</p>
          <ul>${plan.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}</ul>
        </button>
      `;
    })
    .join("");
  const plan = plans.find((item) => item.id === state.selectedPlan) ?? plans[1];
  els.planFeedback.textContent = `当前更感兴趣：${plan.name}。内测只记录偏好，不会产生真实支付。`;
}

function render() {
  renderProgress();
  renderScreens();
  renderPhotos();
  renderQuiz();
  renderResult();
  renderPlans();
}

function drawRadar(canvas = els.radarCanvas) {
  const profile = getProfile();
  const ctx = canvas.getContext("2d");
  const { width, height } = canvas;
  const centerX = width / 2;
  const centerY = height / 2 + 8;
  const radius = Math.min(width, height) * 0.3;
  const tags = profile.radarTags;
  const sides = tags.length || 6;

  ctx.clearRect(0, 0, width, height);
  ctx.font = '12px "Microsoft YaHei", sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (let level = 5; level >= 1; level -= 1) {
    const levelRadius = (radius / 5) * level;
    ctx.beginPath();
    for (let index = 0; index < sides; index += 1) {
      const angle = -Math.PI / 2 + (Math.PI * 2 * index) / sides;
      const x = centerX + Math.cos(angle) * levelRadius;
      const y = centerY + Math.sin(angle) * levelRadius;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = level === 5 ? "#e8cbb6" : "#f0ded0";
    ctx.stroke();
  }

  tags.forEach((tag, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / sides;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius);
    ctx.strokeStyle = "#efdccc";
    ctx.stroke();
    ctx.fillStyle = "#5b514b";
    ctx.fillText(tag.label, centerX + Math.cos(angle) * (radius + 34), centerY + Math.sin(angle) * (radius + 24));
  });

  ctx.beginPath();
  tags.forEach((tag, index) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / sides;
    const score = clamp(54 + (profile.tagScores[tag.key] ?? 1) * 8, 48, 96);
    const pointRadius = radius * (score / 100);
    const x = centerX + Math.cos(angle) * pointRadius;
    const y = centerY + Math.sin(angle) * pointRadius;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(242, 102, 91, 0.5)";
  ctx.strokeStyle = getProfile().identity.color;
  ctx.lineWidth = 2;
  ctx.fill();
  ctx.stroke();
}

els.coverStart.addEventListener("click", () => go("upload"));

els.babyUpload.addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (!file) return;
  if (state.photoUrl) URL.revokeObjectURL(state.photoUrl);
  state.photoUrl = URL.createObjectURL(file);
  render();
});

els.uploadNext.addEventListener("click", () => {
  if (state.photoUrl) go("quiz");
});

els.quizOptions.addEventListener("click", (event) => {
  const button = event.target.closest("[data-option]");
  if (!button) return;
  state.answers[state.currentQuestion] = Number(button.dataset.option);
  resetProfile();
  render();
});

els.quizNext.addEventListener("click", () => {
  if (state.answers[state.currentQuestion] === null) return;
  if (state.currentQuestion < questions.length - 1) {
    state.currentQuestion += 1;
    render();
    return;
  }
  go("scan");
});

els.scanButton.addEventListener("click", () => {
  if (state.scanning) return;
  state.scanning = true;
  els.scanButton.disabled = true;
  window.setTimeout(() => {
    state.scanning = false;
    els.scanButton.disabled = false;
    go("result");
  }, 720);
});

els.resultNext.addEventListener("click", () => go("photoPreview"));
els.photoNext.addEventListener("click", () => go("pay"));
els.payNext.addEventListener("click", () => go("share"));
els.shareNext.addEventListener("click", () => go("feedback"));

els.planList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-plan]");
  if (!button) return;
  state.selectedPlan = button.dataset.plan;
  renderPlans();
});

els.restartButton.addEventListener("click", () => {
  state.screen = "cover";
  state.currentQuestion = 0;
  state.answers = Array(questions.length).fill(null);
  state.selectedPlan = "value";
  state.profile = null;
  state.scanning = false;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

render();
