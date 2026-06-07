
/* GARUDA ESP NUSANTARA - Final Professional Static App */
const DB_KEY = "garudaEspNusantara.final.v1";
const ADMIN_PIN = "JS2026";

const skillNames = ["Listening", "Speaking", "Reading", "Writing", "Vocabulary & Grammar", "Project & Assessment"];

const disciplines = [
  {
    id:"tourism", icon:"🏨", title:"Tourism & Hospitality English",
    summary:"ESP for tour guiding, hotel services, visitor care, cultural interpretation, itinerary explanation, and destination hospitality.",
    province:"Bali, DI Yogyakarta, East Java, Southwest Papua",
    paths:[
      ["Professional Communication","Welcoming guests, handling inquiries, giving directions, explaining rules politely.","Create a hotel check-in and local tour information dialogue.","Role-play scored for clarity, politeness, accuracy, and service recovery."],
      ["Reading & Vocabulary","Destination brochures, hotel SOPs, itinerary notes, visitor safety information, and hospitality vocabulary.","Annotate a heritage tourism brochure and identify service expressions.","Reading quiz plus vocabulary performance."],
      ["ESP Writing","Reservation replies, visitor briefings, complaint responses, and travel advisory notes.","Write a pre-arrival email for international visitors joining a cultural tour.","Writing rubric for organization, tone, accuracy, and cultural sensitivity."],
      ["Speaking & Presentation","Tour commentary, object explanation, storytelling, and guest Q&A.","Deliver a three-minute tour-guide commentary about a local heritage site.","Presentation rubric for voice, fluency, pronunciation, and audience engagement."],
      ["Digital / Online Mode","Virtual tour hosting, online guest orientation, screen-share explanation, and digital itinerary delivery.","Host a five-minute online orientation using the Online Room.","Virtual facilitation checklist and peer feedback."],
      ["Intercultural Project","Responsible tourism, local etiquette, community benefit, and visitor code of conduct.","Design a responsible visitor guide for a province-based heritage destination.","Project poster, oral defense, and reflective note."]
    ]
  },
  {
    id:"business", icon:"💼", title:"Business & Entrepreneurship English",
    summary:"ESP for local product pitching, negotiation, branding, customer service, export inquiry, digital marketing, and creative economy.",
    province:"Aceh, South Sumatra, West Nusa Tenggara, DKI Jakarta",
    paths:[
      ["Professional Communication","Business introductions, product explanation, buyer-seller interaction, meeting language, and negotiation.","Simulate a supplier-client meeting for a local product.","Negotiation rubric for goal clarity, politeness, and persuasive language."],
      ["Reading & Vocabulary","Catalogs, invoices, product profiles, market descriptions, product specifications, and trade terms.","Read a product profile and summarize its value proposition.","Reading and business vocabulary quiz."],
      ["ESP Writing","Inquiry emails, quotations, business proposals, short reports, and promotional copy.","Write an export inquiry email for a heritage-based product.","Business writing rubric for clarity, tone, and completeness."],
      ["Speaking & Presentation","Investor pitch, product demonstration, business storytelling, and Q&A.","Pitch a local product in three slides and two minutes.","Pitch rubric for impact, structure, pronunciation, and confidence."],
      ["Digital / Online Mode","Online pitching, e-commerce live promotion, webinar selling, and online customer service.","Run a mock online product launch in the Online Room.","Digital communication checklist."],
      ["Intercultural Project","Ethical branding, fair trade, local maker recognition, and intercultural consumer awareness.","Design a cultural-branding campaign for a local craft.","Campaign proposal, peer response, and reflection."]
    ]
  },
  {
    id:"technology", icon:"⚙️", title:"Engineering & Technology English",
    summary:"ESP for technical explanation, process description, troubleshooting, digital products, project reports, and innovation presentations.",
    province:"East Kalimantan, West Java, North Kalimantan, Riau Islands",
    paths:[
      ["Professional Communication","Explaining functions, giving instructions, troubleshooting, lab communication, and team updates.","Create a technician-client troubleshooting dialogue.","Technical clarity rubric."],
      ["Reading & Vocabulary","Manuals, diagrams, specification sheets, procedure texts, and engineering terminology.","Interpret a device specification sheet and explain its function.","Technical vocabulary quiz and reading check."],
      ["ESP Writing","User instructions, incident reports, progress logs, and technical summaries.","Write a short troubleshooting guide for a simple digital device.","Procedural writing rubric."],
      ["Speaking & Presentation","Prototype demo, process presentation, and innovation explanation.","Present a local-tech solution for a community problem.","Demo presentation rubric."],
      ["Digital / Online Mode","Remote collaboration, online stand-up meetings, screen-share demonstration, and digital teamwork.","Run a five-minute technical stand-up meeting online.","Online meeting facilitation checklist."],
      ["Intercultural Project","Inclusive technology, community needs, local wisdom in design, and user-centered innovation.","Design a community technology proposal rooted in local context.","Proposal, peer review, and reflection."]
    ]
  },
  {
    id:"health", icon:"🩺", title:"Health & Care English",
    summary:"ESP for nursing, pharmacy, public health, patient interaction, health education, telehealth, and culturally sensitive care.",
    province:"Central Java, South Papua, West Sumatra, Lampung",
    paths:[
      ["Professional Communication","Greeting patients, asking symptoms, giving instructions, showing empathy, and checking understanding.","Make a nurse-patient dialogue for basic health guidance.","Empathy and communication rubric."],
      ["Reading & Vocabulary","Health leaflets, medication labels, case summaries, and public-health vocabulary.","Read and explain a simple health brochure.","Vocabulary and comprehension quiz."],
      ["ESP Writing","Case notes, patient instructions, appointment reminders, and health campaign messages.","Write a discharge instruction note in clear English.","Accuracy and clarity rubric."],
      ["Speaking & Presentation","Mini health talks, patient education, and community awareness speaking.","Present a two-minute community health message.","Oral communication rubric."],
      ["Digital / Online Mode","Telehealth etiquette, online consultation opening, and digital patient guidance.","Simulate the opening of an online consultation.","Telehealth checklist."],
      ["Intercultural Project","Health literacy, cultural respect, community trust, and preventive education.","Create a bilingual health-awareness poster and explanation.","Project evaluation and reflection."]
    ]
  },
  {
    id:"maritime", icon:"🌊", title:"Maritime, Fisheries & Environmental English",
    summary:"ESP for vessel safety, marine tourism, fisheries communication, conservation, eco-guiding, and sustainability advocacy.",
    province:"South Sulawesi, Southeast Sulawesi, Maluku, Papua",
    paths:[
      ["Professional Communication","Safety instructions, field coordination, crew communication, and emergency expressions.","Prepare a vessel safety briefing for visitors.","Safety-language rubric."],
      ["Reading & Vocabulary","Weather notes, conservation texts, field reports, fisheries terms, and route descriptions.","Read a marine conservation notice and identify key actions.","Comprehension and terminology quiz."],
      ["ESP Writing","Incident logs, eco-guidelines, field observation notes, and sustainability reports.","Write an eco-tour code of conduct.","Report-writing rubric."],
      ["Speaking & Presentation","Marine conservation presentation, route explanation, and sustainability advocacy.","Explain a reef-protection campaign to international visitors.","Presentation score."],
      ["Digital / Online Mode","Remote marine briefing, online environmental meeting, digital map explanation, and shared notes.","Lead an online environmental briefing.","Facilitation rubric."],
      ["Intercultural Project","Community-based sustainability, local ecological knowledge, and responsible visitor behavior.","Develop a local marine-awareness project.","Project and reflection."]
    ]
  },
  {
    id:"education", icon:"🎓", title:"Education & Communication English",
    summary:"ESP for teaching, moderation, public communication, academic speaking, community training, intercultural dialogue, and reflective practice.",
    province:"West Sumatra, West Kalimantan, Central Kalimantan, Banten",
    paths:[
      ["Professional Communication","Facilitating class, opening discussion, giving feedback, and managing questions.","Moderate a local-wisdom discussion in English.","Moderation rubric."],
      ["Reading & Vocabulary","Educational articles, lesson notes, academic instructions, and public communication vocabulary.","Summarize an educational text about local wisdom.","Reading response."],
      ["ESP Writing","Announcements, lesson plans, meeting minutes, reflective notes, and community training materials.","Write meeting minutes for a cultural education project.","Writing rubric."],
      ["Speaking & Presentation","Microteaching, public briefing, seminar presentation, and storytelling for learning.","Deliver a micro-teaching segment using a local cultural topic.","Microteaching rubric."],
      ["Digital / Online Mode","Virtual classroom management, webinar hosting, online discussion, and digital feedback.","Plan and facilitate a short online discussion session.","Online teaching checklist."],
      ["Intercultural Project","Community outreach, respectful dialogue, inclusive education, and heritage-based learning.","Design a local-wisdom education campaign.","Project and reflection."]
    ]
  }
];

function pathMaterial(d, i){
  const p = d.paths[i];
  return {
    disciplineId:d.id, discipline:d.title, pathNo:i+1, title:p[0],
    overview:p[1], task:p[2], assessment:p[3],
    skills:{
      Listening:`Listen to a professional scenario in ${d.title}. Identify purpose, speaker role, key terms, and cultural values.`,
      Speaking:`Perform a guided role-play for ${p[0].toLowerCase()} using clear, intelligible English and respectful professional tone.`,
      Reading:`Read an ESP text connected to ${d.province}. Highlight keywords, local-wisdom concepts, and professional expressions.`,
      Writing:`Produce a workplace text connected to ${p[0].toLowerCase()}: email, script, briefing note, report, caption, or proposal.`,
      "Vocabulary & Grammar":`Master core ESP terminology, polite requests, modal verbs, sequence markers, conditionals, and audience-aware expressions.`,
      "Project & Assessment":`${p[2]} Assessment: ${p[3]}`
    },
    sample:`Sample expression: "Welcome. I will explain this topic clearly, respectfully, and professionally so international audiences can understand its local meaning and practical value."`,
    rubric:["ESP accuracy","Clarity and organization","Professional tone","Intercultural sensitivity","Pronunciation / delivery","Task completion"],
    listening:`This is a ${d.title} practice. Your task is to understand the professional situation, recognize key vocabulary, and respond appropriately with respect for Indonesian local wisdom.`
  };
}

const weeks = [
  ["Bhinneka Tunggal Ika and ESP Professional Identity","National","Bhinneka Tunggal Ika, Garuda Pancasila, Indonesian Flag","education",0],
  ["Tourism Guiding through Balinese Tri Hita Karana","Bali","Tri Hita Karana and temple etiquette","tourism",0],
  ["Batik Entrepreneurship and Creative Product Pitch","DI Yogyakarta / Central Java","Batik motifs and philosophical meanings","business",3],
  ["Pinisi Maritime English and Sustainable Voyages","South Sulawesi","Pinisi boatbuilding tradition","maritime",0],
  ["Gayo Coffee, Halal Tourism, and Business Negotiation","Aceh","Gayo coffee and halal hospitality","business",0],
  ["Angklung Performance and Event Communication","West Java","Angklung and collaborative music","education",3],
  ["Toraja Heritage, Respectful Explanation, and Ethical Tourism","South Sulawesi","Toraja architecture and ritual traditions","tourism",5],
  ["Papua Eco-Tourism and Biodiversity Communication","Papua","Biodiversity and local ecological knowledge","maritime",5],
  ["Sasak Weaving and Women’s Creative Economy","West Nusa Tenggara","Sasak weaving traditions","business",5],
  ["Dayak Longhouse, Community Values, and Intercultural Dialogue","Kalimantan","Rumah Betang / longhouse traditions","education",0],
  ["Rumah Gadang and Leadership Communication","West Sumatra","Rumah Gadang and deliberation values","education",2],
  ["Betawi Culture and Urban Heritage Promotion","DKI Jakarta","Betawi arts, culinary heritage, urban multiculturalism","business",4],
  ["Spice Routes and Historical Storytelling","Maluku","Spice route history and maritime exchange","tourism",2],
  ["Noken, Sustainable Craft, and Global Advocacy","Papua Highlands","Noken woven bag and sustainability","education",5],
  ["Capstone: Nusantara Professional Portfolio","Multi-province","Student-selected local wisdom","technology",5],
  ["Final Showcase: From Local Wisdom to Global ESP Futures","Multi-province","Nusantara professional futures","tourism",3]
].map((w,i)=>{
  const d = disciplines.find(x=>x.id===w[3]);
  const mat = pathMaterial(d, w[4]);
  return {
    week:i+1, title:w[0], province:w[1], heritage:w[2], discipline:d.title, disciplineId:d.id,
    objectives:[
      `Apply ${d.title} in a culturally respectful professional context.`,
      `Practice six ESP skills: listening, speaking, reading, writing, vocabulary/grammar, and project assessment.`,
      `Produce an assessable professional output rooted in ${w[2]}.`
    ],
    reading:`This week uses ${w[2]} from ${w[1]} as authentic ESP content. Learners study how local wisdom can support professional English communication in ${d.title}. The lesson connects Indonesian identity with global communication through clear vocabulary, structured explanation, respectful tone, and task-based performance.`,
    listening:`Listen to a short briefing about ${w[2]}. Identify the speaker's purpose, key terms, professional role, and cultural message.`,
    vocabulary:["local wisdom","professional communication","intercultural respect","audience awareness","clear explanation", d.title.split(" ")[0].toLowerCase(), "Nusantara heritage"],
    skills:mat.skills,
    assignment:mat.task,
    assessment:mat.assessment,
    quiz:[
      [`Week ${i+1} focuses on which ESP discipline?`, d.title, "General grammar only", "Native-like accent only", "Unrelated memorization"],
      ["A respectful professional explanation should be...", "Clear, accurate, and culturally sensitive", "Exaggerated and unclear", "Only translated word by word", "Without audience awareness"],
      ["The six ESP skills include...", "Listening, speaking, reading, writing, vocabulary/grammar, and project assessment", "Only reading", "Only grammar", "Only pronunciation"]
    ]
  };
});

const provinces = [
  ["Aceh","Gayo Coffee, Halal Hospitality","Business & Entrepreneurship English"],["North Sumatra","Ulos, Lake Toba Tourism","Tourism & Hospitality English"],
  ["West Sumatra","Rumah Gadang, Deliberation","Education & Communication English"],["Riau","Malay Heritage and River Culture","Education & Communication English"],
  ["Riau Islands","Maritime Trade and Coastal Culture","Maritime, Fisheries & Environmental English"],["Jambi","Batik Jambi, River Ecology","Tourism & Hospitality English"],
  ["South Sumatra","Songket and Culinary Branding","Business & Entrepreneurship English"],["Bengkulu","Rafflesia Eco-Tourism","Maritime, Fisheries & Environmental English"],
  ["Lampung","Siger, Coffee, Coastal Tourism","Tourism & Hospitality English"],["Bangka Belitung Islands","Island Tourism and Tin Heritage","Business & Entrepreneurship English"],
  ["Banten","Debus and Old Banten Heritage","Education & Communication English"],["DKI Jakarta","Betawi Urban Heritage","Business & Entrepreneurship English"],
  ["West Java","Angklung and Sundanese Hospitality","Education & Communication English"],["Central Java","Batik, Borobudur, Wayang","Tourism & Hospitality English"],
  ["DI Yogyakarta","Kraton and Batik Philosophy","Business & Entrepreneurship English"],["East Java","Trowulan, Reog, Bromo","Tourism & Hospitality English"],
  ["Bali","Tri Hita Karana","Tourism & Hospitality English"],["West Nusa Tenggara","Sasak Weaving and Lombok Tourism","Business & Entrepreneurship English"],
  ["East Nusa Tenggara","Tenun Ikat and Komodo Eco-Tourism","Maritime, Fisheries & Environmental English"],["West Kalimantan","Equator and Dayak Culture","Education & Communication English"],
  ["Central Kalimantan","Rumah Betang","Education & Communication English"],["South Kalimantan","Floating Market and Banjar Culture","Business & Entrepreneurship English"],
  ["East Kalimantan","IKN and Eco-Innovation","Engineering & Technology English"],["North Kalimantan","Border Communication","Education & Communication English"],
  ["North Sulawesi","Bunaken Marine Tourism","Maritime, Fisheries & Environmental English"],["Gorontalo","Karawo Embroidery","Business & Entrepreneurship English"],
  ["Central Sulawesi","Lore Lindu Heritage","Maritime, Fisheries & Environmental English"],["South Sulawesi","Pinisi and Toraja Heritage","Maritime, Fisheries & Environmental English"],
  ["Southeast Sulawesi","Wakatobi Marine Tourism","Maritime, Fisheries & Environmental English"],["West Sulawesi","Sandeq Boat Culture","Maritime, Fisheries & Environmental English"],
  ["Maluku","Spice Routes","Tourism & Hospitality English"],["North Maluku","Sultanate Heritage","Education & Communication English"],
  ["West Papua","Birds of Paradise and Coastal Heritage","Tourism & Hospitality English"],["Southwest Papua","Raja Ampat Eco-Tourism","Tourism & Hospitality English"],
  ["Central Papua","Highland-Coastal Communication","Education & Communication English"],["Highland Papua","Noken and Mountain Communities","Education & Communication English"],
  ["South Papua","Wetlands, Sago, Community Culture","Maritime, Fisheries & Environmental English"],["Papua","Biodiversity and Local Ecological Knowledge","Maritime, Fisheries & Environmental English"]
];

const defaultRooms = [
  {id:"ROOM-1", title:"Garuda Main Online Room", scope:"all", host:"Course Host", schedule:"Every Monday • 09:00 WIB", link:"https://meet.jit.si/GARUDA-ESP-NUSANTARA", agenda:"Orientation, weekly briefing, progress checking, and portfolio guidance.", features:["Live video","Screen sharing","Chat","Attendance","Breakout discussion","Feedback notes"], attendance:[]},
  {id:"ROOM-2", title:"ESP Discipline Workshop Room", scope:"student", host:"Assigned Lecturer", schedule:"Flexible by lecturer", link:"https://meet.jit.si/GARUDA-ESP-DISCIPLINE", agenda:"Role-play, presentation practice, discipline discussion, and peer feedback.", features:["Workshop mode","Microphone practice","Peer review","Breakout tasks","Shared notes"], attendance:[]},
  {id:"ROOM-3", title:"Lecturer Design and Review Room", scope:"lecturer", host:"Academic Coordinator", schedule:"Weekly", link:"https://meet.jit.si/GARUDA-LECTURER-DESIGN", agenda:"Module design, rubric calibration, assessment review, and publication-quality material development.", features:["Screen sharing","Rubric review","Material design","Analytics discussion"], attendance:[]},
  {id:"ROOM-4", title:"Admin Governance Room", scope:"admin", host:"Platform Admin", schedule:"Monthly", link:"https://meet.jit.si/GARUDA-ADMIN-GOVERNANCE", agenda:"Lecturer approval, institutional control, system analytics, and platform governance.", features:["Decision log","Analytics","User control","System settings"], attendance:[]}
];

let db = loadDB();
let session = JSON.parse(localStorage.getItem("gesn.session") || "null");
let currentPage = "dashboard";

function uid(prefix="GESN"){return `${prefix}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`}
function byId(id){return document.getElementById(id)}
function esc(v=""){return String(v).replace(/[&<>"]/g,s=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[s]))}
function saveDB(){localStorage.setItem(DB_KEY, JSON.stringify(db))}
function saveSession(){localStorage.setItem("gesn.session", JSON.stringify(session))}
function toast(title,msg=""){const host=byId("toastHost");const el=document.createElement("div");el.className="toast";el.innerHTML=`<strong>${esc(title)}</strong>${msg?`<div>${esc(msg)}</div>`:""}`;host.appendChild(el);setTimeout(()=>el.remove(),3500)}
function log(type,detail){db.activity.unshift({id:uid("LOG"),type,detail,user:session?.name||"system",role:session?.role||"system",date:new Date().toISOString()});db.activity=db.activity.slice(0,120);saveDB()}
function loadDB(){
  const stored = localStorage.getItem(DB_KEY);
  if(stored){try{return normalize(JSON.parse(stored))}catch(e){console.warn(e)}}
  return normalize({
    users:[], institutions:[], weeks, disciplines, rooms:defaultRooms, customMaterials:[], tasks:[], submissions:[], grades:[],
    forum:[], tickets:[], chat:[], activity:[],
    settings:{appName:"GARUDA ESP NUSANTARA", registrationOpen:true, speakerLang:"en-US", speakerRate:0.92, theme:"premium", helpDeskOpen:true, forumOpen:true}
  });
}
function normalize(d){
  d.users ||= []; d.institutions ||= []; d.weeks ||= weeks; d.disciplines ||= disciplines; d.rooms ||= defaultRooms;
  d.customMaterials ||= []; d.tasks ||= []; d.submissions ||= []; d.grades ||= []; d.forum ||= []; d.tickets ||= []; d.chat ||= []; d.activity ||= [];
  d.settings ||= {appName:"GARUDA ESP NUSANTARA", registrationOpen:true, speakerLang:"en-US", speakerRate:0.92, theme:"premium", helpDeskOpen:true, forumOpen:true};
  return d;
}

document.addEventListener("DOMContentLoaded", init);
function init(){
  populateDisciplineSelect();
  bindLanding();
  bindGlobal();
  setupParticles();
  setupGarudaMotion();
  if("serviceWorker" in navigator){navigator.serviceWorker.register("./service-worker.js").catch(()=>{})}
  if(session) enterApp(session.role,true);
}
function populateDisciplineSelect(){
  const select=byId("studentDiscipline");
  if(select) select.innerHTML = disciplines.map(d=>`<option value="${d.id}">${d.title}</option>`).join("");
}
function bindLanding(){
  document.querySelectorAll(".auth-tab").forEach(btn=>btn.addEventListener("click",()=>switchAuth(btn.dataset.tab)));
  byId("studentRegisterBtn").addEventListener("click",registerStudent);
  byId("lecturerRegisterBtn").addEventListener("click",registerLecturer);
  byId("studentForm").addEventListener("submit",e=>{e.preventDefault();login("student")});
  byId("lecturerForm").addEventListener("submit",e=>{e.preventDefault();login("lecturer")});
  byId("adminForm").addEventListener("submit",e=>{e.preventDefault();adminLogin()});
}
function bindGlobal(){
  byId("logoutBtn").addEventListener("click",logout);
  byId("modalClose").addEventListener("click",()=>byId("modal").close());
  byId("exportDataBtn").addEventListener("click",exportData);
  document.querySelectorAll("[data-top-page]").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.topPage)));
}
function switchAuth(tab){
  document.querySelectorAll(".auth-tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
  document.querySelectorAll(".auth-form").forEach(f=>f.classList.toggle("active",f.dataset.form===tab));
}
function registerStudent(){
  if(db.settings.registrationOpen===false) return toast("Registration closed","Admin has closed new registrations.");
  const name=byId("studentName").value.trim(), email=byId("studentEmail").value.trim().toLowerCase(), password=byId("studentPassword").value;
  if(!name||!email||!password) return toast("Incomplete","Please complete name, email, and password.");
  if(db.users.some(u=>u.email===email)) return toast("Email exists","Please login or use another email.");
  const disciplineId=byId("studentDiscipline").value;
  const user={id:uid("STU"),role:"student",status:"active",name,email,password,disciplineId,institution:"Not specified",progress:{weeks:[],quiz:{},badges:[]},created:new Date().toISOString()};
  db.users.push(user); saveDB(); log("student-register",`${name} registered`); toast("Student registered","Login is ready.");
  byId("studentLoginEmail").value=email; byId("studentLoginPassword").value=password;
}
function registerLecturer(){
  if(db.settings.registrationOpen===false) return toast("Registration closed","Admin has closed new registrations.");
  const name=byId("lecturerName").value.trim(), email=byId("lecturerEmail").value.trim().toLowerCase(), password=byId("lecturerPassword").value, expertise=byId("lecturerExpertise").value.trim();
  if(!name||!email||!password) return toast("Incomplete","Please complete lecturer name, email, and password.");
  if(db.users.some(u=>u.email===email)) return toast("Email exists","Please login or use another email.");
  db.users.push({id:uid("LEC"),role:"lecturer",status:"pending",name,email,password,expertise,institution:"Not specified",created:new Date().toISOString()});
  saveDB(); log("lecturer-request",`${name} requested approval`); toast("Request submitted","Admin must approve this lecturer account.");
}
function login(role){
  const email=byId(`${role}LoginEmail`).value.trim().toLowerCase();
  const pass=byId(`${role}LoginPassword`).value;
  const user=db.users.find(u=>u.role===role && u.email===email && u.password===pass);
  if(!user) return toast("Login failed","Wrong email, password, or role.");
  if(role==="lecturer" && user.status!=="approved") return toast("Not approved","Admin approval is required before lecturer login.");
  session={id:user.id,role:user.role,name:user.name,email:user.email}; saveSession(); enterApp(role); log("login",`${user.name} logged in`);
}
function adminLogin(){
  const pin=byId("adminPin").value.trim();
  if(pin!==ADMIN_PIN) return toast("Admin PIN incorrect","Please re-enter the authorized administrator PIN.");
  session={id:"ADMIN",role:"admin",name:"Admin",email:""}; saveSession(); enterApp("admin"); log("admin-login","Admin entered command center");
}
function logout(){session=null;localStorage.removeItem("gesn.session");byId("appShell").classList.add("hidden");byId("landing").classList.remove("hidden");toast("Logged out","Secure session closed.")}
function currentUser(){return session?.role==="admin" ? {role:"admin",name:"Admin",institution:"Secure Platform",status:"active"} : db.users.find(u=>u.id===session?.id)}
function enterApp(role,silent=false){
  byId("landing").classList.add("hidden"); byId("appShell").classList.remove("hidden");
  renderUserCard(); renderNav(role); navigate("dashboard"); if(!silent) toast("Welcome",`${role.toUpperCase()} dashboard opened.`);
}
function renderUserCard(){
  const u=currentUser()||{};
  if(session.role==="admin"){
    byId("userCard").innerHTML=`<strong>ADMIN COMMAND CENTER</strong><span>SECURE PLATFORM CONTROL</span><small>Users • Materials • Analytics<br>Online Room • Settings • Help Desk</small>`;
  }else{
    const d=disciplines.find(x=>x.id===u.disciplineId)?.title || u.expertise || "ESP Platform";
    byId("userCard").innerHTML=`<strong>${esc(u.name)}</strong><span>${esc(u.role)}</span><small>${esc(d)}<br>${esc(u.institution||"Not specified")}</small>`;
  }
}
const navs={
  student:[["dashboard","🏠","Student Dashboard"],["weeks","🗓️","16-Week Studio"],["materials","📚","ESP Materials"],["disciplines","🧭","ESP Disciplines"],["atlas","🗺️","Nusantara Atlas"],["online","📹","Online Room"],["voice","🎙️","Speaker Lab"],["assignments","📝","Assignments"],["portfolio","🏅","Portfolio"]],
  lecturer:[["dashboard","🏠","Lecturer Dashboard"],["builder","🛠️","Course Builder"],["materials","📚","ESP Materials"],["tasks","📝","Tasks & Assessments"],["online","📹","Online Room"],["review","✅","Review Submissions"],["analytics","📊","Learning Analytics"],["ai","🤖","AI-Assisted Studio"]],
  admin:[["dashboard","🏠","Admin Dashboard"],["students","🎓","Student Dashboard"],["lecturers","👨‍🏫","Lecturer Dashboard"],["users","👥","Users & Institutions"],["materials","📚","ESP Materials"],["content","🗂️","Content Control"],["online","📹","Online Room"],["analytics","📊","System Analytics"],["settings","⚙️","System Settings"],["ai","🤖","AI-Assisted Studio"]]
};
function renderNav(role){
  byId("sideNav").innerHTML=navs[role].map(([p,i,l])=>`<button data-page="${p}"><span class="nav-icon">${i}</span>${l}</button>`).join("");
  byId("sideNav").querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.page)));
}
function navigate(page){
  currentPage=page;
  document.querySelectorAll(".side-nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  const item=(navs[session.role].find(n=>n[0]===page)||[]);
  byId("pageTitle").textContent=item[2]||pageLabel(page);
  byId("roleKicker").textContent=`${session.role.toUpperCase()} WORKSPACE`;
  const map={dashboard:session.role==="student"?renderStudentDashboard:session.role==="lecturer"?renderLecturerDashboard:renderAdminDashboard,
    weeks:renderWeeks,materials:renderMaterials,disciplines:renderDisciplines,atlas:renderAtlas,online:renderOnlineRoom,voice:renderVoice,
    assignments:renderAssignments,portfolio:renderPortfolio,builder:renderCourseBuilder,tasks:renderTasks,review:renderReview,
    analytics:session.role==="admin"?renderSystemAnalytics:renderLecturerAnalytics,users:renderUsers,students:renderStudentAdminView,lecturers:renderLecturerAdminView,
    content:renderContentControl,settings:renderSettings,forum:renderForum,chat:renderChat,helpdesk:renderHelpDesk,ai:renderAIStudio};
  (map[page]||renderStudentDashboard)();
}
function pageLabel(p){return p.replace(/-/g," ").replace(/\b\w/g,m=>m.toUpperCase())}
function openModal(html){byId("modalBody").innerHTML=html;byId("modal").showModal()}
function speak(text){ if(!("speechSynthesis" in window)) return toast("Speaker unavailable","Your browser does not support speech synthesis."); speechSynthesis.cancel(); const u=new SpeechSynthesisUtterance(String(text).replace(/<[^>]+>/g," ")); u.lang=db.settings.speakerLang||"en-US"; u.rate=Number(db.settings.speakerRate)||0.92; speechSynthesis.speak(u); }
function speaker(text,label="Listen"){ return `<button class="speaker-btn" onclick="speak(\`${String(text).replace(/`/g,"'").replace(/\\/g,"\\\\")}\`)">🔊 ${label}</button>` }

function metric(title,value,desc){return `<article class="metric-card"><span>${esc(title)}</span><strong>${esc(value)}</strong><p>${esc(desc)}</p></article>`}
function mySubmissions(){return db.submissions.filter(s=>s.userId===session.id)}
function completePct(u=currentUser()){const n=u?.progress?.weeks?.length||0;return Math.round(n/db.weeks.length*100)}
function avgQuiz(u=currentUser()){const vals=Object.values(u?.progress?.quiz||{});return vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):0}
function nextWeek(u=currentUser()){const done=new Set(u?.progress?.weeks||[]);return db.weeks.find(w=>!done.has(w.week))||db.weeks[db.weeks.length-1]}

function renderStudentDashboard(){
  const u=currentUser(), w=nextWeek(u), pct=completePct(u);
  byId("mainView").innerHTML=`
  <div class="grid cols-4">${metric("Progress",pct+"%","Completed weekly modules")}${metric("Quiz Average",avgQuiz(u)+"%","Integrated quiz results")}${metric("Submissions",mySubmissions().length,"Assignment evidence")}${metric("Discipline",disciplines.find(d=>d.id===u.disciplineId)?.title||"ESP","Current ESP focus")}</div>
  <div class="grid cols-2">
    <section class="panel"><h3>Continue Learning</h3><p><strong>Week ${w.week}: ${esc(w.title)}</strong></p><p>${esc(w.reading)}</p><div class="progress-bar"><span style="width:${pct}%"></span></div><div class="actions"><button class="btn btn-primary" onclick="openWeek(${w.week})">Open Next Module</button><button class="btn btn-soft" onclick="navigate('materials')">Open Materials</button>${speaker(w.reading,"Listen")}</div></section>
    <section class="panel"><h3>Student Tools</h3><ul class="check-list"><li>Full 16-week ESP studio</li><li>Speaker-supported materials</li><li>Online room access</li><li>Forum, chat, and help desk</li><li>Assignments, quizzes, grades, portfolio</li></ul><div class="actions"><button class="btn btn-primary" onclick="navigate('online')">Join Online Room</button><button class="btn btn-soft" onclick="navigate('forum')">Open Forum</button></div></section>
  </div>
  <section class="panel"><h3>Six ESP Skills Integrated</h3><div class="skill-grid">${skillNames.map(s=>`<div class="skill-box"><strong>${s}</strong><p>${esc(w.skills[s])}</p>${speaker(w.skills[s],"Listen")}</div>`).join("")}</div></section>`;
}
function renderLecturerDashboard(){
  const pending=db.submissions.filter(s=>!db.grades.some(g=>g.submissionId===s.id)).length;
  byId("mainView").innerHTML=`
  <div class="grid cols-4">${metric("Students",db.users.filter(u=>u.role==="student").length,"Registered learners")}${metric("Materials",disciplines.length*6+db.customMaterials.length,"Discipline-path materials")}${metric("Submissions",db.submissions.length,"Student evidence")}${metric("Pending Review",pending,"Need feedback")}</div>
  <div class="grid cols-3">
    <section class="panel"><h3>Design Materials</h3><p>Create, revise, upload, and align ESP materials with discipline, skills, and assessment.</p><div class="actions"><button class="btn btn-primary" onclick="navigate('builder')">Course Builder</button><button class="btn btn-soft" onclick="navigate('materials')">Materials</button></div></section>
    <section class="panel"><h3>Assessment Control</h3><p>Create tasks, rubrics, quizzes, and review submitted work.</p><div class="actions"><button class="btn btn-primary" onclick="navigate('tasks')">Create Tasks</button><button class="btn btn-soft" onclick="navigate('review')">Review</button></div></section>
    <section class="panel"><h3>Online Teaching</h3><p>Schedule online rooms, consultation, feedback meetings, and discipline workshops.</p><div class="actions"><button class="btn btn-primary" onclick="navigate('online')">Online Room</button></div></section>
  </div>
  <section class="panel"><h3>Learning Analytics</h3>${analyticsHTML()}</section>`;
}
function renderAdminDashboard(){
  byId("mainView").innerHTML=`
  <div class="grid cols-4">${metric("Users",db.users.length,"Students + lecturers")}${metric("Pending Lecturers",db.users.filter(u=>u.role==="lecturer"&&u.status==="pending").length,"Approval queue")}${metric("Materials",disciplines.length*6+db.customMaterials.length,"Ready content units")}${metric("Rooms",db.rooms.length,"Online sessions")}</div>
  <div class="grid cols-3">
    <section class="panel"><h3>Student Dashboard Control</h3><p>View student progress, submissions, quizzes, discipline selection, and portfolio evidence.</p><div class="actions"><button class="btn btn-primary" onclick="navigate('students')">Open Student Dashboard</button></div></section>
    <section class="panel"><h3>Lecturer Dashboard Control</h3><p>Approve lecturers and inspect lecturer functions: course builder, tasks, rooms, review, analytics.</p><div class="actions"><button class="btn btn-primary" onclick="navigate('lecturers')">Open Lecturer Dashboard</button></div></section>
    <section class="panel"><h3>System Governance</h3><p>Manage users, institutions, materials, rooms, settings, forum, help desk, and export.</p><div class="actions"><button class="btn btn-primary" onclick="navigate('users')">Users & Institutions</button><button class="btn btn-soft" onclick="navigate('settings')">Settings</button></div></section>
  </div>
  <section class="panel"><h3>Active System Analytics</h3>${analyticsHTML()}</section>`;
}

function renderWeeks(){
  byId("mainView").innerHTML=`<section class="panel"><h3>16-Week ESP Nusantara Studio</h3><p>Each week contains reading, listening, speaking, writing, vocabulary/grammar, project assessment, quiz, assignment, and speaker support.</p></section><div class="grid cols-3">${db.weeks.map(w=>weekCard(w)).join("")}</div>`;
}
function weekCard(w){
  const done=currentUser()?.progress?.weeks?.includes(w.week);
  return `<article class="week-card"><span class="tag red">Week ${w.week}</span> <span class="tag">${esc(w.discipline)}</span><h3>${esc(w.title)}</h3><p><strong>${esc(w.province)}</strong> • ${esc(w.heritage)}</p><p>${esc(w.reading.slice(0,150))}...</p><div class="actions"><button class="btn btn-primary" onclick="openWeek(${w.week})">Open Module</button>${session.role==="student"?`<button class="btn btn-soft" onclick="markWeek(${w.week})">${done?"Completed":"Mark Complete"}</button>`:""}${speaker(w.reading,"Listen")}</div></article>`;
}
function openWeek(n){
  const w=db.weeks.find(x=>x.week===n); if(!w) return;
  const extra=db.tasks.filter(t=>Number(t.week)===n);
  openModal(`<h2>Week ${w.week}: ${esc(w.title)}</h2><p class="modal-lead"><strong>${esc(w.province)}</strong> • ${esc(w.heritage)} • ${esc(w.discipline)}</p>
    <div class="actions">${speaker(w.reading,"Listen Reading")}${speaker(w.listening,"Listen Task")}</div>
    <div class="grid cols-2">
      <section><h3>Reading Material</h3><p>${esc(w.reading)}</p><h3>Listening Script</h3><p>${esc(w.listening)}</p><h3>Vocabulary</h3><p>${w.vocabulary.map(v=>`<span class="tag dark">${esc(v)}</span>`).join(" ")}</p></section>
      <section><h3>Objectives</h3><ul class="check-list">${w.objectives.map(o=>`<li>${esc(o)}</li>`).join("")}</ul><h3>Assignment</h3><p>${esc(w.assignment)}</p><h3>Assessment</h3><p>${esc(w.assessment)}</p></section>
    </div>
    <h3>Six ESP Skills</h3><div class="skill-grid">${skillNames.map(s=>`<div class="skill-box"><strong>${s}</strong><p>${esc(w.skills[s])}</p>${speaker(w.skills[s],"Listen")}</div>`).join("")}</div>
    <h3>Lecturer-Created Tasks</h3>${extra.map(t=>`<div class="post-card"><strong>${esc(t.title)}</strong><p>${esc(t.instructions)}</p><p><span class="tag">${esc(t.type)}</span> <span class="tag">Due: ${esc(t.due||"Flexible")}</span></p></div>`).join("")||'<div class="empty">No additional lecturer task yet.</div>'}
    <div class="actions">${session.role==="student"?`<button class="btn btn-primary" onclick="submitAssignment(${w.week})">Submit Assignment</button><button class="btn btn-soft" onclick="takeQuiz(${w.week})">Take Quiz</button><button class="btn btn-soft" onclick="markWeek(${w.week})">Mark Complete</button>`:`<button class="btn btn-primary" onclick="byId('modal').close(); navigate('builder')">Edit in Builder</button>`}</div>`);
}
function markWeek(n){const u=db.users.find(x=>x.id===session.id); if(!u?.progress) return; if(!u.progress.weeks.includes(n)) u.progress.weeks.push(n); if(u.progress.weeks.length>=4&&!u.progress.badges.includes("Nusantara Explorer"))u.progress.badges.push("Nusantara Explorer"); saveDB(); toast("Progress updated",`Week ${n} completed.`); if(currentPage==="weeks")renderWeeks();}
function takeQuiz(n){const w=db.weeks.find(x=>x.week===n);openModal(`<h2>Week ${n} Quiz</h2><form id="quizForm" class="grid">${w.quiz.map((q,i)=>`<fieldset class="post-card"><legend><strong>${i+1}. ${esc(q[0])}</strong></legend>${q.slice(1).map(a=>`<label style="text-transform:none;font-weight:700;color:#392719"><input type="radio" name="q${i}" value="${esc(a)}" style="width:auto"> ${esc(a)}</label>`).join("")}</fieldset>`).join("")}<button type="button" class="btn btn-primary" onclick="gradeQuiz(${n})">Submit Quiz</button></form>`)}
function gradeQuiz(n){const w=db.weeks.find(x=>x.week===n);let score=0;w.quiz.forEach((q,i)=>{const s=document.querySelector(`input[name="q${i}"]:checked`); if(s&&s.value===q[1])score++}); const pct=Math.round(score/w.quiz.length*100); const u=db.users.find(x=>x.id===session.id);u.progress.quiz[n]=pct;saveDB();openModal(`<h2>Quiz Result</h2>${metric("Score",pct+"%","Week "+n)}<div class="actions"><button class="btn btn-primary" onclick="byId('modal').close()">Close</button></div>`)}
function submitAssignment(n){const w=db.weeks.find(x=>x.week===n);openModal(`<h2>Submit Week ${n} Assignment</h2><p>${esc(w.assignment)}</p><label>Submission Title<input id="subTitle" value="Week ${n} - ${esc(w.title)}"></label><label>Your Work<textarea id="subText" placeholder="Paste or write your assignment here"></textarea></label><label>Attach File<input id="subFile" type="file" accept=".doc,.docx,.txt,.pdf,.png,.jpg,.jpeg"></label><div class="actions"><button class="btn btn-primary" onclick="saveSubmission(${n})">Submit</button><button class="btn btn-soft" onclick="aiFeedbackFromSubmission()">AI Check Draft</button></div><div id="subAI"></div>`)}
function saveSubmission(n){const title=byId("subTitle").value.trim(), text=byId("subText").value.trim(), file=byId("subFile").files[0]; if(!title||!text)return toast("Incomplete","Add title and text."); const save=(fileData="")=>{const u=currentUser();db.submissions.unshift({id:uid("SUB"),userId:u.id,userName:u.name,institution:u.institution||"Not specified",week:n,title,text,fileName:file?.name||"",fileData,date:new Date().toISOString()});saveDB();log("submission",`${u.name} submitted Week ${n}`);byId("modal").close();toast("Submitted","Lecturer can review your work.")}; if(file){const r=new FileReader();r.onload=()=>save(r.result);r.readAsDataURL(file)}else save()}
function aiFeedbackFromSubmission(){const t=byId("subText").value;byId("subAI").innerHTML=`<div class="post-card"><strong>Local AI Feedback</strong><p>${writingFeedback(t)}</p></div>`}

function renderDisciplines(){byId("mainView").innerHTML=`<section class="panel"><h3>Six ESP Disciplines with Six Appropriate Pathways</h3><p>Every discipline includes integrated materials for six ESP skills and six Garuda pathways. Open each matrix to see complete materials, tasks, rubrics, and speaker support.</p></section><div class="grid cols-2">${disciplines.map(d=>disciplineCard(d)).join("")}</div>`}
function disciplineCard(d){return `<article class="discipline-card"><h3>${d.icon} ${esc(d.title)}</h3><p>${esc(d.summary)}</p><p><span class="tag red">Province links: ${esc(d.province)}</span></p><div class="skill-grid">${d.paths.slice(0,3).map((p,i)=>`<div class="skill-box"><strong>Path ${i+1}: ${esc(p[0])}</strong><p>${esc(p[1])}</p></div>`).join("")}</div><div class="actions"><button class="btn btn-primary" onclick="openDiscipline('${d.id}')">Open Full Matrix</button>${speaker(d.summary,"Listen")}</div></article>`}
function openDiscipline(id){const d=disciplines.find(x=>x.id===id);openModal(`<h2>${d.icon} ${esc(d.title)}</h2><p class="modal-lead">${esc(d.summary)}</p><p><span class="tag red">Province links</span> ${esc(d.province)}</p><div class="grid cols-2">${d.paths.map((p,i)=>`<article class="material-card"><span class="tag">Path ${i+1}</span><h3>${esc(p[0])}</h3><p>${esc(p[1])}</p><p><strong>Task:</strong> ${esc(p[2])}</p><p><strong>Assessment:</strong> ${esc(p[3])}</p><div class="actions"><button class="btn btn-primary" onclick="openPath('${d.id}',${i})">Open Materials</button>${speaker(p.join(". "),"Listen")}</div></article>`).join("")}</div>`)}
function openPath(id,i){const d=disciplines.find(x=>x.id===id);const m=pathMaterial(d,i);openModal(`<h2>${d.icon} ${esc(d.title)} — Path ${i+1}: ${esc(m.title)}</h2><p class="modal-lead">${esc(m.overview)}</p><div class="actions">${speaker(m.listening,"Listen Overview")}${speaker(m.task,"Listen Task")}${speaker(m.assessment,"Listen Assessment")}</div><div class="grid cols-2"><section><h3>Core Material</h3><p>${esc(m.overview)}</p><h3>Listening Script</h3><p>${esc(m.listening)}</p><h3>Sample Expression</h3><p>${esc(m.sample)}</p></section><section><h3>Task</h3><p>${esc(m.task)}</p><h3>Assessment</h3><p>${esc(m.assessment)}</p><h3>Rubric</h3><ul class="check-list">${m.rubric.map(r=>`<li>${esc(r)}</li>`).join("")}</ul></section></div><h3>Six ESP Skills</h3><div class="skill-grid">${Object.entries(m.skills).map(([k,v])=>`<div class="skill-box"><strong>${esc(k)}</strong><p>${esc(v)}</p>${speaker(v,"Listen")}</div>`).join("")}</div>`)}
function renderMaterials(){
  const built=disciplines.flatMap(d=>d.paths.map((_,i)=>pathMaterial(d,i)));
  byId("mainView").innerHTML=`<section class="panel"><h3>Complete ESP Materials Library</h3><p>No blank display: all discipline materials can be opened, listened to, used for tasks, and connected to assessment.</p>${["lecturer","admin"].includes(session.role)?`<div class="actions"><button class="btn btn-primary" onclick="navigate('builder')">Create / Update Materials</button><button class="btn btn-soft" onclick="navigate('tasks')">Create Assessment</button></div>`:""}</section><div class="grid cols-3">${built.map(m=>`<article class="material-card"><span class="tag red">${esc(m.discipline)}</span><h3>Path ${m.pathNo}: ${esc(m.title)}</h3><p>${esc(m.overview)}</p><div class="actions"><button class="btn btn-primary" onclick="openPath('${m.disciplineId}',${m.pathNo-1})">Open</button>${speaker(m.overview,"Listen")}</div></article>`).join("")}${db.customMaterials.map(cm=>`<article class="material-card"><span class="tag green">Custom</span><h3>${esc(cm.title)}</h3><p>${esc(cm.body)}</p><div class="actions">${speaker(cm.body,"Listen")}${cm.fileData?`<a class="btn btn-soft" download="${esc(cm.fileName)}" href="${cm.fileData}">Download</a>`:""}</div></article>`).join("")}</div>`;
}

function renderAtlas(){byId("mainView").innerHTML=`<section class="panel"><h3>Nusantara Atlas</h3><p>All 38 provinces are linked to ESP materials and local-wisdom contexts.</p>${atlasMap()}</section><div class="grid cols-3">${provinces.map((p,i)=>`<article class="week-card"><span class="tag red">${i+1}</span><h3>${esc(p[0])}</h3><p><strong>${esc(p[1])}</strong></p><p>${esc(p[2])}</p><div class="actions"><button class="btn btn-primary" onclick="generateProvinceTask('${esc(p[0])}','${esc(p[1])}','${esc(p[2])}')">Generate Task</button>${speaker(`${p[0]}. ${p[1]}. ${p[2]}`,"Listen")}</div></article>`).join("")}</div>`}
function atlasMap(){const islands=[["8%","56%","22%","-16deg"],["30%","70%","23%","-4deg"],["39%","50%","17%","10deg"],["58%","50%","13%","26deg"],["75%","55%","20%","-9deg"],["55%","74%","15%","5deg"]];const pins=[["16%","50%","Aceh"],["40%","65%","Java"],["50%","48%","Kalimantan"],["64%","48%","Sulawesi"],["84%","54%","Papua"],["52%","70%","Bali"]];return `<div class="atlas-map">${islands.map(i=>`<span class="island" style="left:${i[0]};top:${i[1]};width:${i[2]};--r:${i[3]}"></span>`).join("")}${pins.map(p=>`<button class="pin" style="left:${p[0]};top:${p[1]}" onclick="toast('Province marker','${p[2]} selected')"><span>${p[2]}</span></button>`).join("")}</div>`}
function generateProvinceTask(province,heritage,disc){openModal(`<h2>${esc(province)} ESP Task</h2><p class="modal-lead">${esc(heritage)} • ${esc(disc)}</p><div class="post-card"><strong>AI-Assisted Task</strong><p>Create a professional English role-play where one student explains ${esc(heritage)} to an international audience. Include greeting, key vocabulary, cultural meaning, professional service, and respectful closing.</p>${speaker(`Create a professional English role-play about ${heritage} in ${province}.`,"Listen")}</div>`)}

function renderOnlineRoom(){
  const rooms=db.rooms.filter(r=>r.scope==="all"||r.scope===session.role);
  const manager=["lecturer","admin"].includes(session.role);
  byId("mainView").innerHTML=`<section class="panel"><h3>Online Room Mode</h3><p>Integrated virtual classroom support for live session links, agenda, host, attendance, screen sharing, chat, breakout discussion, consultation, and assessment feedback.</p></section>${manager?roomCreator():""}<div class="grid cols-2">${rooms.map(r=>roomCard(r)).join("")}</div>`;
}
function roomCreator(){return `<section class="panel"><h3>Create Online Room</h3><div class="input-grid two"><label>Title<input id="roomTitle"></label><label>Scope<select id="roomScope"><option value="all">All</option><option value="student">Student</option><option value="lecturer">Lecturer</option><option value="admin">Admin</option></select></label><label>Host<input id="roomHost"></label><label>Schedule<input id="roomSchedule" placeholder="Friday • 09:00 WIB"></label><label>Meeting Link<input id="roomLink" placeholder="https://zoom.us/ or Jitsi link"></label><label>Features<input id="roomFeatures" value="Live video, Screen sharing, Chat, Attendance, Breakout discussion"></label></div><label>Agenda<textarea id="roomAgenda"></textarea></label><button class="btn btn-primary" onclick="saveRoom()">Save Online Room</button></section>`}
function roomCard(r){return `<article class="room-card"><h3>${esc(r.title)}</h3><p>${esc(r.agenda)}</p><p><span class="tag red">${esc(r.scope)}</span> <span class="tag">${esc(r.schedule)}</span> <span class="tag">Host: ${esc(r.host)}</span></p><div class="skill-grid">${(r.features||[]).map(f=>`<div class="skill-box"><strong>${esc(f)}</strong></div>`).join("")}</div><p><strong>Attendance:</strong> ${(r.attendance||[]).length}</p><div class="actions"><button class="btn btn-primary" onclick="joinRoom('${r.id}')">Join Room</button>${["lecturer","admin"].includes(session.role)?`<button class="btn btn-danger" onclick="deleteRoom('${r.id}')">Delete</button>`:""}</div></article>`}
function saveRoom(){const title=byId("roomTitle").value.trim(), scope=byId("roomScope").value, host=byId("roomHost").value.trim(), schedule=byId("roomSchedule").value.trim(), link=byId("roomLink").value.trim()||`https://meet.jit.si/${uid("GARUDA")}`, agenda=byId("roomAgenda").value.trim(), features=byId("roomFeatures").value.split(",").map(x=>x.trim()).filter(Boolean); if(!title||!host||!agenda)return toast("Incomplete","Complete title, host, and agenda.");db.rooms.unshift({id:uid("ROOM"),title,scope,host,schedule,link,agenda,features,attendance:[]});saveDB();toast("Room saved");renderOnlineRoom()}
function joinRoom(id){const r=db.rooms.find(x=>x.id===id); if(!r)return; r.attendance ||= []; r.attendance.push({user:session.name||session.role,role:session.role,date:new Date().toISOString()});saveDB();log("online-room",`${session.role} joined ${r.title}`);window.open(r.link,"_blank");toast("Attendance recorded",r.title)}
function deleteRoom(id){db.rooms=db.rooms.filter(r=>r.id!==id);saveDB();renderOnlineRoom();toast("Room deleted")}

function renderVoice(){
  const phrases=["Welcome to GARUDA ESP NUSANTARA.","Please explain the cultural meaning respectfully.","This local wisdom can support professional communication.","The visitor briefing must be clear, polite, and accurate.","Our project connects Nusantara heritage with global ESP futures."];
  byId("mainView").innerHTML=`<section class="panel"><h3>Speaker Lab</h3><p>Every material includes speaker support. Practice intelligible professional English with browser speech synthesis and speech recognition where available.</p><label>Custom Phrase<textarea id="voiceText">${phrases[0]}</textarea></label><div class="actions"><button class="btn btn-primary" onclick="speak(byId('voiceText').value)">Listen</button><button class="btn btn-soft" onclick="startRecognition()">Record / Check Speech</button></div><div id="speechResult"></div></section><section class="panel"><h3>Practice Phrases</h3>${phrases.map(p=>`<div class="voice-line"><strong>${esc(p)}</strong>${speaker(p,"Listen")}</div>`).join("")}</section>`;
}
function startRecognition(){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return toast("Speech recognition unavailable","Use Chrome or supported browsers.");const rec=new SR();rec.lang="en-US";rec.onresult=e=>{byId("speechResult").innerHTML=`<div class="post-card"><strong>Your Speech</strong><p>${esc(e.results[0][0].transcript)}</p></div>`};rec.start()}

function renderAssignments(){
  const tasks=db.tasks;
  byId("mainView").innerHTML=`<section class="panel"><h3>Assignments</h3><p>Core weekly assignments and lecturer-created tasks are integrated here.</p></section><div class="grid cols-2"><section class="panel"><h3>Weekly Core Assignments</h3>${db.weeks.map(w=>`<div class="post-card"><strong>Week ${w.week}: ${esc(w.title)}</strong><p>${esc(w.assignment)}</p><div class="actions"><button class="btn btn-primary" onclick="submitAssignment(${w.week})">Submit</button>${speaker(w.assignment,"Listen")}</div></div>`).join("")}</section><section class="panel"><h3>Lecturer-Created Tasks</h3>${tasks.map(t=>`<div class="post-card"><strong>${esc(t.title)}</strong><p>${esc(t.instructions)}</p><p><span class="tag">${esc(t.type)}</span> <span class="tag">Week ${esc(t.week)}</span></p></div>`).join("")||'<div class="empty">No lecturer-created tasks yet.</div>'}</section></div>`;
}
function renderPortfolio(){const u=currentUser();const subs=mySubmissions();byId("mainView").innerHTML=`<div class="grid cols-4">${metric("Progress",completePct(u)+"%","Completion")}${metric("Quiz Average",avgQuiz(u)+"%","Performance")}${metric("Submissions",subs.length,"Works")}${metric("Badges",(u.progress?.badges||[]).length,"Awards")}</div><section class="panel"><h3>Portfolio Evidence</h3>${subs.map(s=>`<div class="post-card"><strong>${esc(s.title)}</strong><small>Week ${s.week} • ${new Date(s.date).toLocaleString()}</small><p>${esc(s.text.slice(0,240))}</p>${gradeFor(s.id)}</div>`).join("")||'<div class="empty">No submission yet.</div>'}</section>`}
function gradeFor(id){const g=db.grades.find(x=>x.submissionId===id);return g?`<p><span class="tag green">Grade: ${esc(g.score)}</span></p><p>${esc(g.feedback)}</p>`:"<p><span class='tag'>Pending review</span></p>"}

function renderCourseBuilder(){
  byId("mainView").innerHTML=`<section class="panel"><h3>Course Builder</h3><p>Lecturers and admin can update weekly materials and add custom materials.</p><div class="input-grid two"><label>Week<select id="editWeek">${db.weeks.map(w=>`<option value="${w.week}">Week ${w.week}</option>`).join("")}</select></label><label>Title<input id="editTitle"></label><label>Province<input id="editProvince"></label><label>Discipline<select id="editDiscipline">${disciplines.map(d=>`<option value="${d.id}">${d.title}</option>`).join("")}</select></label></div><label>Reading<textarea id="editReading"></textarea></label><label>Assignment<textarea id="editAssignment"></textarea></label><div class="actions"><button class="btn btn-primary" onclick="loadWeekEditor()">Load Week</button><button class="btn btn-success" onclick="saveWeekEditor()">Save Week</button><button class="btn btn-soft" onclick="aiImproveWeek()">AI Improve</button></div></section>${customMaterialForm()}`;
}
function loadWeekEditor(){const w=db.weeks.find(x=>x.week==byId("editWeek").value);if(!w)return;byId("editTitle").value=w.title;byId("editProvince").value=w.province;byId("editDiscipline").value=w.disciplineId;byId("editReading").value=w.reading;byId("editAssignment").value=w.assignment}
function saveWeekEditor(){const w=db.weeks.find(x=>x.week==byId("editWeek").value);if(!w)return;const d=disciplines.find(x=>x.id===byId("editDiscipline").value);w.title=byId("editTitle").value;w.province=byId("editProvince").value;w.disciplineId=d.id;w.discipline=d.title;w.reading=byId("editReading").value;w.assignment=byId("editAssignment").value;saveDB();toast("Week saved");}
function aiImproveWeek(){byId("editReading").value += "\n\nAI-assisted improvement: Add clear professional role, audience, cultural sensitivity, key vocabulary, and assessment evidence.";toast("AI improvement added")}
function customMaterialForm(){return `<section class="panel"><h3>Add Custom Material</h3><div class="input-grid two"><label>Title<input id="cmTitle"></label><label>Discipline<select id="cmDiscipline">${disciplines.map(d=>`<option>${d.title}</option>`).join("")}</select></label></div><label>Material Body<textarea id="cmBody"></textarea></label><label>Upload File<input id="cmFile" type="file" accept=".doc,.docx,.pdf,.ppt,.pptx,.txt,.png,.jpg,.jpeg,.mp3,.wav"></label><button class="btn btn-primary" onclick="saveCustomMaterial()">Save Material</button></section>`}
function saveCustomMaterial(){const title=byId("cmTitle").value.trim(), discipline=byId("cmDiscipline").value, body=byId("cmBody").value.trim(), file=byId("cmFile").files[0];if(!title||!body)return toast("Incomplete","Add title and body.");const save=(data="")=>{db.customMaterials.unshift({id:uid("MAT"),title,discipline,body,fileName:file?.name||"",fileData:data,date:new Date().toISOString()});saveDB();toast("Material saved");renderMaterials()};if(file){const r=new FileReader();r.onload=()=>save(r.result);r.readAsDataURL(file)}else save()}

function renderTasks(){byId("mainView").innerHTML=`<section class="panel"><h3>Create Tasks & Assessments</h3><div class="input-grid two"><label>Week<select id="taskWeek">${db.weeks.map(w=>`<option>${w.week}</option>`).join("")}</select></label><label>Type<select id="taskType"><option>Assignment</option><option>Quiz</option><option>Presentation</option><option>Project</option><option>Portfolio</option></select></label><label>Title<input id="taskTitle"></label><label>Due Date<input id="taskDue" type="date"></label></div><label>Instructions<textarea id="taskInstructions"></textarea></label><label>Rubric<textarea id="taskRubric"></textarea></label><div class="actions"><button class="btn btn-primary" onclick="saveTask()">Publish Task</button><button class="btn btn-soft" onclick="fillRubric()">AI Rubric</button></div></section><section class="panel"><h3>Published Tasks</h3>${db.tasks.map(t=>`<div class="post-card"><strong>${esc(t.title)}</strong><p>${esc(t.instructions)}</p><p><span class="tag">${esc(t.type)}</span> <span class="tag">Week ${esc(t.week)}</span></p><button class="btn btn-danger" onclick="deleteTask('${t.id}')">Delete</button></div>`).join("")||'<div class="empty">No tasks yet.</div>'}</section>`}
function fillRubric(){byId("taskRubric").value="Criteria: ESP accuracy 25%; clarity 20%; professional tone 20%; intercultural sensitivity 15%; organization 10%; submission quality 10%."}
function saveTask(){const t={id:uid("TASK"),week:byId("taskWeek").value,type:byId("taskType").value,title:byId("taskTitle").value.trim(),due:byId("taskDue").value,instructions:byId("taskInstructions").value.trim(),rubric:byId("taskRubric").value.trim(),creator:session.name,date:new Date().toISOString()};if(!t.title||!t.instructions)return toast("Incomplete","Add title and instructions.");db.tasks.unshift(t);saveDB();toast("Task published");renderTasks()}
function deleteTask(id){db.tasks=db.tasks.filter(t=>t.id!==id);saveDB();renderTasks()}

function renderReview(){byId("mainView").innerHTML=`<section class="panel"><h3>Review Student Submissions</h3>${submissionTable()}</section>`}
function submissionTable(){if(!db.submissions.length)return '<div class="empty">No submissions yet.</div>';return `<div class="table-wrap"><table><thead><tr><th>Student</th><th>Institution</th><th>Week</th><th>Title</th><th>Status</th><th>Action</th></tr></thead><tbody>${db.submissions.map(s=>{const g=db.grades.find(x=>x.submissionId===s.id);return `<tr><td>${esc(s.userName)}</td><td>${esc(s.institution)}</td><td>${s.week}</td><td>${esc(s.title)}</td><td><span class="status ${g?'done':'pending'}">${g?'Reviewed':'Pending'}</span></td><td><button class="btn btn-soft" onclick="openReview('${s.id}')">Review</button></td></tr>`}).join("")}</tbody></table></div>`}
function openReview(id){const s=db.submissions.find(x=>x.id===id), g=db.grades.find(x=>x.submissionId===id)||{};openModal(`<h2>Review Submission</h2><p><strong>${esc(s.userName)}</strong> • Week ${s.week}</p><div class="post-card"><p>${esc(s.text)}</p>${s.fileData?`<a class="btn btn-soft" href="${s.fileData}" download="${esc(s.fileName)}">Download Attachment</a>`:""}</div><div class="input-grid two"><label>Score / Grade<input id="gradeScore" value="${esc(g.score||"")}"></label><label>Short Feedback<input id="gradeFeedback" value="${esc(g.feedback||"")}"></label></div><label>Detailed Feedback<textarea id="gradeDetail">${esc(g.detail||writingFeedback(s.text))}</textarea></label><button class="btn btn-primary" onclick="saveGrade('${id}')">Save Grade</button>`)}
function saveGrade(id){const data={id:uid("GRADE"),submissionId:id,score:byId("gradeScore").value,feedback:byId("gradeFeedback").value,detail:byId("gradeDetail").value,reviewer:session.role,date:new Date().toISOString()};const old=db.grades.find(x=>x.submissionId===id);if(old)Object.assign(old,data);else db.grades.push(data);saveDB();byId("modal").close();toast("Grade saved");renderReview()}

function analyticsHTML(){const students=db.users.filter(u=>u.role==="student"), lecturers=db.users.filter(u=>u.role==="lecturer");const byDisc=disciplines.map(d=>[d.title,students.filter(s=>s.disciplineId===d.id).length]);return `<div class="grid cols-2"><div>${[["Students",students.length],["Lecturers",lecturers.length],["Approved Lecturers",lecturers.filter(l=>l.status==="approved").length],["Submissions",db.submissions.length],["Grades",db.grades.length],["Rooms",db.rooms.length],["Forum Posts",db.forum.length],["Tickets",db.tickets.length]].map(([a,b])=>`<div class="post-card"><strong>${a}</strong><div class="progress-bar"><span style="width:${Math.min(100,b*10)}%"></span></div><p>${b}</p></div>`).join("")}</div><div>${byDisc.map(([a,b])=>`<div class="post-card"><strong>${esc(a)}</strong><div class="progress-bar"><span style="width:${Math.min(100,b*20)}%"></span></div><p>${b} students</p></div>`).join("")}</div></div>`}
function renderLecturerAnalytics(){byId("mainView").innerHTML=`<section class="panel"><h3>Learning Analytics</h3>${analyticsHTML()}</section><section class="panel"><h3>Submissions</h3>${submissionTable()}</section>`}
function renderSystemAnalytics(){byId("mainView").innerHTML=`<section class="panel"><h3>System Analytics</h3><p>Integrated analytics are calculated from users, disciplines, weeks, submissions, grades, rooms, forum, chat, and help desk.</p>${analyticsHTML()}</section><section class="panel"><h3>Activity Log</h3>${db.activity.map(a=>`<div class="post-card"><strong>${esc(a.type)}</strong><p>${esc(a.detail)}</p><small>${new Date(a.date).toLocaleString()} • ${esc(a.role)}</small></div>`).join("")||'<div class="empty">No activity yet.</div>'}</section>`}

function renderUsers(){byId("mainView").innerHTML=`<div class="grid cols-2"><section class="panel"><h3>Users & Institutions</h3><p>This page is active and integrated with registration, analytics, materials, and submissions.</p><div class="input-grid two"><label>Institution Name<input id="instName" placeholder="Add institution when needed"></label><button class="btn btn-primary" onclick="addInstitution()" style="align-self:end">Add Institution</button></div><div style="margin-top:12px">${db.institutions.map(i=>`<div class="post-card"><strong>${esc(i)}</strong></div>`).join("")||'<div class="empty">No institution added yet.</div>'}</div></section><section class="panel"><h3>User Accounts</h3>${usersTable()}</section></div>`}
function usersTable(){return `<div class="table-wrap"><table><thead><tr><th>Name</th><th>Role</th><th>Status</th><th>Institution</th><th>Email</th><th>Action</th></tr></thead><tbody>${db.users.map(u=>`<tr><td>${esc(u.name)}</td><td>${esc(u.role)}</td><td><span class="status ${u.status}">${esc(u.status)}</span></td><td>${esc(u.institution||"Not specified")}</td><td>${esc(u.email)}</td><td>${u.role==="lecturer"?`<button class="btn btn-success" onclick="setLecturer('${u.id}','approved')">Approve</button> <button class="btn btn-danger" onclick="setLecturer('${u.id}','rejected')">Reject</button>`:""} <button class="btn btn-danger" onclick="deleteUser('${u.id}')">Delete</button></td></tr>`).join("")||'<tr><td colspan="6">No users.</td></tr>'}</tbody></table></div>`}
function addInstitution(){const v=byId("instName").value.trim();if(!v)return;if(!db.institutions.includes(v))db.institutions.push(v);saveDB();renderUsers();toast("Institution added")}
function setLecturer(id,status){const u=db.users.find(x=>x.id===id);if(!u)return;u.status=status;saveDB();toast("Lecturer updated",`${u.name}: ${status}`);renderUsers()}
function deleteUser(id){if(!confirm("Delete this user?"))return;db.users=db.users.filter(u=>u.id!==id);saveDB();renderUsers();toast("User deleted")}
function renderStudentAdminView(){const students=db.users.filter(u=>u.role==="student");byId("mainView").innerHTML=`<section class="panel"><h3>Admin View: Student Dashboard</h3><p>Monitor student progress, discipline, quiz, submissions, and portfolio status.</p>${students.map(u=>`<div class="post-card"><strong>${esc(u.name)}</strong><p>${esc(disciplines.find(d=>d.id===u.disciplineId)?.title||"ESP")} • Progress ${completePct(u)}% • Quiz ${avgQuiz(u)}% • Submissions ${db.submissions.filter(s=>s.userId===u.id).length}</p><div class="progress-bar"><span style="width:${completePct(u)}%"></span></div></div>`).join("")||'<div class="empty">No students yet.</div>'}</section>`}
function renderLecturerAdminView(){const lecturers=db.users.filter(u=>u.role==="lecturer");byId("mainView").innerHTML=`<section class="panel"><h3>Admin View: Lecturer Dashboard</h3><p>Approve, reject, and inspect lecturer access to builder, materials, tasks, rooms, and review functions.</p>${lecturers.map(u=>`<div class="post-card"><strong>${esc(u.name)}</strong><p>${esc(u.expertise||"ESP Lecturer")} • <span class="status ${u.status}">${esc(u.status)}</span></p><div class="actions"><button class="btn btn-success" onclick="setLecturer('${u.id}','approved'); renderLecturerAdminView()">Approve</button><button class="btn btn-danger" onclick="setLecturer('${u.id}','rejected'); renderLecturerAdminView()">Reject</button></div></div>`).join("")||'<div class="empty">No lecturers yet.</div>'}</section>`}
function renderContentControl(){byId("mainView").innerHTML=`<div class="grid cols-3">${metric("Weeks",db.weeks.length,"16-week course")}${metric("Disciplines",disciplines.length,"ESP fields")}${metric("Materials",disciplines.length*6+db.customMaterials.length,"Built-in + custom")}</div><section class="panel"><h3>Content Control</h3><div class="actions"><button class="btn btn-primary" onclick="navigate('builder')">Course Builder</button><button class="btn btn-soft" onclick="navigate('materials')">Materials Library</button><button class="btn btn-soft" onclick="navigate('tasks')">Tasks</button><button class="btn btn-danger" onclick="resetContent()">Reset Core Content</button></div></section>`}
function resetContent(){if(!confirm("Reset core weeks?"))return;db.weeks=weeks;saveDB();toast("Core content reset");renderContentControl()}
function renderSettings(){byId("mainView").innerHTML=`<section class="panel"><h3>System Settings Control</h3><div class="input-grid two"><label>App Name<input id="setApp" value="${esc(db.settings.appName)}"></label><label>Speaker Language<input id="setLang" value="${esc(db.settings.speakerLang)}"></label><label>Speaker Rate<input id="setRate" type="number" min="0.5" max="1.5" step="0.05" value="${esc(db.settings.speakerRate)}"></label><label>Registration<select id="setReg"><option value="true" ${db.settings.registrationOpen?'selected':''}>Open</option><option value="false" ${!db.settings.registrationOpen?'selected':''}>Closed</option></select></label><label>Forum<select id="setForum"><option value="true" ${db.settings.forumOpen?'selected':''}>Open</option><option value="false" ${!db.settings.forumOpen?'selected':''}>Closed</option></select></label><label>Help Desk<select id="setHelp"><option value="true" ${db.settings.helpDeskOpen?'selected':''}>Open</option><option value="false" ${!db.settings.helpDeskOpen?'selected':''}>Closed</option></select></label></div><div class="actions"><button class="btn btn-primary" onclick="saveSettings()">Save Settings</button><button class="btn btn-soft" onclick="exportData()">Export Data</button><button class="btn btn-danger" onclick="clearOperationalData()">Clear Users/Submissions</button></div></section><section class="panel"><h3>Security</h3><p>Administrator authentication is configured for secure static deployment. For institutional production, connect the platform to encrypted backend authentication and protected databases.</p></section>`}
function saveSettings(){db.settings.appName=byId("setApp").value;db.settings.speakerLang=byId("setLang").value;db.settings.speakerRate=Number(byId("setRate").value)||0.92;db.settings.registrationOpen=byId("setReg").value==="true";db.settings.forumOpen=byId("setForum").value==="true";db.settings.helpDeskOpen=byId("setHelp").value==="true";saveDB();toast("Settings saved")}
function clearOperationalData(){if(!confirm("Clear users, submissions, grades, forum, chat, and tickets?"))return;db.users=[];db.submissions=[];db.grades=[];db.forum=[];db.chat=[];db.tickets=[];saveDB();toast("Operational data cleared");renderSettings()}

function renderForum(){byId("mainView").innerHTML=`<section class="panel"><h3>Forum</h3><p>Class forum for ESP discussion, peer support, and lecturer/admin announcements.</p><label>Post Title<input id="forumTitle"></label><label>Message<textarea id="forumBody"></textarea></label><button class="btn btn-primary" onclick="saveForum()">Post to Forum</button></section><section class="panel"><h3>Forum Posts</h3>${db.forum.map(p=>`<div class="post-card"><strong>${esc(p.title)}</strong><p>${esc(p.body)}</p><small>${esc(p.author)} • ${esc(p.role)} • ${new Date(p.date).toLocaleString()}</small></div>`).join("")||'<div class="empty">No forum posts yet.</div>'}</section>`}
function saveForum(){if(db.settings.forumOpen===false)return toast("Forum closed");const title=byId("forumTitle").value.trim(),body=byId("forumBody").value.trim();if(!title||!body)return toast("Incomplete","Add title and message.");db.forum.unshift({id:uid("FORUM"),title,body,author:session.role==="admin"?"Admin":session.name,role:session.role,date:new Date().toISOString()});saveDB();toast("Forum post saved");renderForum()}
function renderChat(){byId("mainView").innerHTML=`<section class="panel"><h3>Dashboard Chat</h3><div class="chat-box">${db.chat.map(c=>`<div class="chat-msg ${c.role===session.role?'user':'bot'}"><strong>${esc(c.author)}:</strong> ${esc(c.text)}<br><small>${new Date(c.date).toLocaleTimeString()}</small></div>`).join("")||'<div class="chat-msg bot">No chat yet. Start a secure class conversation.</div>'}</div><div class="input-grid" style="margin-top:12px"><label>Message<input id="chatText" placeholder="Type message"></label><button class="btn btn-primary" onclick="sendChatMessage()">Send</button></div></section>`}
function sendChatMessage(){const text=byId("chatText").value.trim();if(!text)return;db.chat.push({id:uid("CHAT"),text,author:session.role==="admin"?"Admin":session.name,role:session.role,date:new Date().toISOString()});saveDB();renderChat()}
function renderHelpDesk(){byId("mainView").innerHTML=`<section class="panel"><h3>Help Desk</h3><p>Submit technical or academic support requests.</p><div class="input-grid two"><label>Issue Type<select id="ticketType"><option>Technical problem</option><option>Material question</option><option>Assessment question</option><option>Account approval</option><option>Online room problem</option></select></label><label>Priority<select id="ticketPriority"><option>Normal</option><option>High</option><option>Urgent</option></select></label></div><label>Description<textarea id="ticketBody"></textarea></label><button class="btn btn-primary" onclick="saveTicket()">Submit Ticket</button></section><section class="panel"><h3>Tickets</h3>${db.tickets.map(t=>`<div class="post-card"><strong>${esc(t.type)} • ${esc(t.priority)}</strong><p>${esc(t.body)}</p><p><span class="status ${t.status==='Closed'?'done':'pending'}">${esc(t.status)}</span></p><small>${esc(t.author)} • ${new Date(t.date).toLocaleString()}</small>${session.role==="admin"?`<div class="actions"><button class="btn btn-success" onclick="closeTicket('${t.id}')">Close Ticket</button></div>`:""}</div>`).join("")||'<div class="empty">No tickets yet.</div>'}</section>`}
function saveTicket(){if(db.settings.helpDeskOpen===false)return toast("Help Desk closed");const body=byId("ticketBody").value.trim();if(!body)return toast("Incomplete","Describe the issue.");db.tickets.unshift({id:uid("TICKET"),type:byId("ticketType").value,priority:byId("ticketPriority").value,body,author:session.role==="admin"?"Admin":session.name,role:session.role,status:"Open",date:new Date().toISOString()});saveDB();toast("Ticket submitted");renderHelpDesk()}
function closeTicket(id){const t=db.tickets.find(x=>x.id===id);if(t)t.status="Closed";saveDB();renderHelpDesk()}

function renderAIStudio(){byId("mainView").innerHTML=`<div class="grid cols-2"><section class="panel"><h3>AI-Assisted Local Studio</h3><p>Local no-API tools for ESP scenario generation, writing feedback, and rubric support.</p><div class="input-grid two"><label>Discipline<select id="aiDisc">${disciplines.map(d=>`<option value="${d.id}">${d.title}</option>`).join("")}</select></label><label>Province / Heritage<input id="aiTopic" value="Bali Tri Hita Karana"></label></div><label>Student Draft<textarea id="aiDraft"></textarea></label><div class="actions"><button class="btn btn-primary" onclick="aiScenario()">Generate Scenario</button><button class="btn btn-soft" onclick="aiWriting()">Check Writing</button><button class="btn btn-soft" onclick="aiRubric()">Generate Rubric</button></div><div id="aiOutput" class="post-card">Output will appear here.</div></section><section class="panel"><h3>Local AI Tutor Chat</h3><div id="aiChat" class="chat-box"><div class="chat-msg bot">Ask for ESP phrases, task ideas, or feedback guidance.</div></div><label>Message<input id="aiMsg"></label><button class="btn btn-primary" onclick="aiTutorSend()">Send</button></section></div>`}
function aiScenario(){const d=disciplines.find(x=>x.id===byId("aiDisc").value),topic=byId("aiTopic").value;byId("aiOutput").innerHTML=`<strong>Scenario</strong><p>${localScenario(d.title,topic)}</p>${speaker(localScenario(d.title,topic),"Listen")}`}
function aiWriting(){byId("aiOutput").innerHTML=`<strong>Writing Feedback</strong><p>${writingFeedback(byId("aiDraft").value)}</p>`}
function aiRubric(){byId("aiOutput").innerHTML=`<strong>Rubric</strong><ul class="check-list"><li>ESP accuracy 25%</li><li>Clarity and organization 20%</li><li>Professional tone 20%</li><li>Intercultural sensitivity 15%</li><li>Pronunciation or delivery 10%</li><li>Task completion 10%</li></ul>`}
function aiTutorSend(){const msg=byId("aiMsg").value.trim();if(!msg)return;const box=byId("aiChat");box.innerHTML+=`<div class="chat-msg user">${esc(msg)}</div><div class="chat-msg bot">${esc("Suggested ESP response: define the professional role, explain the local wisdom accurately, use polite phrases, add a task output, and close with reflection.")}</div>`;byId("aiMsg").value=""}
function localScenario(disc,topic){return `Role-play for ${disc}: Student A is a professional representative. Student B is an international visitor/client. Explain ${topic} clearly, include three ESP terms, one cultural value, one polite request, and one closing statement. Output: dialogue, vocabulary list, and reflection.`}
function writingFeedback(t=""){if(!t.trim())return "Paste a draft first. Feedback will check clarity, tone, ESP vocabulary, organization, and cultural sensitivity.";let tips=[];if(t.length<120)tips.push("Expand the draft with more specific professional details.");if(!/[.!?]/.test(t))tips.push("Add complete sentences and punctuation.");if(!/please|could|would|respect|thank/i.test(t))tips.push("Add polite and respectful expressions.");if(!/local|culture|heritage|professional|visitor|client/i.test(t))tips.push("Connect the text more clearly to ESP context and local wisdom.");return tips.length?tips.join(" "):"Strong draft. Improve by adding evidence, clearer transitions, and a short reflective closing."}

function exportData(){const blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="garuda-esp-nusantara-data.json";a.click();URL.revokeObjectURL(a.href);toast("Exported","Data backup downloaded.")}
function setupParticles(){
  const canvas=byId("landingParticles"); if(!canvas)return; const ctx=canvas.getContext("2d");
  const resize=()=>{canvas.width=canvas.offsetWidth*devicePixelRatio;canvas.height=canvas.offsetHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)};resize();
  const pts=Array.from({length:52},()=>({x:Math.random()*canvas.offsetWidth,y:Math.random()*canvas.offsetHeight,r:Math.random()*2+1,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,a:Math.random()*.5+.18}));
  function draw(){ctx.clearRect(0,0,canvas.offsetWidth,canvas.offsetHeight);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>canvas.offsetWidth)p.vx*=-1;if(p.y<0||p.y>canvas.offsetHeight)p.vy*=-1;ctx.beginPath();ctx.fillStyle=`rgba(247,217,131,${p.a})`;ctx.shadowBlur=12;ctx.shadowColor="rgba(247,217,131,.8)";ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()});requestAnimationFrame(draw)}draw();window.addEventListener("resize",resize,{passive:true});
}
function setupGarudaMotion(){
  const stage=byId("garudaStage"), g=document.querySelector(".garuda-5d"); if(!stage||!g)return;
  stage.addEventListener("mousemove",e=>{const r=stage.getBoundingClientRect();const x=((e.clientX-r.left)/r.width-.5)*18;const y=((e.clientY-r.top)/r.height-.5)*-14;g.style.transform=`translateY(-6px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)`});
  stage.addEventListener("mouseleave",()=>{g.style.transform=""});
}

Object.assign(window,{navigate,openWeek,markWeek,takeQuiz,gradeQuiz,submitAssignment,saveSubmission,aiFeedbackFromSubmission,openDiscipline,openPath,renderMaterials,generateProvinceTask,speak,joinRoom,saveRoom,deleteRoom,startRecognition,loadWeekEditor,saveWeekEditor,aiImproveWeek,saveCustomMaterial,saveTask,deleteTask,fillRubric,openReview,saveGrade,addInstitution,setLecturer,deleteUser,renderStudentAdminView,renderLecturerAdminView,resetContent,saveSettings,clearOperationalData,saveForum,sendChatMessage,saveTicket,closeTicket,aiScenario,aiWriting,aiRubric,aiTutorSend,exportData});


// ====== Professional override patch ======
function stopSpeak(){ if("speechSynthesis" in window){ speechSynthesis.cancel(); toast("Audio stopped","Playback has been stopped."); } }
function speaker(text,label="Listen"){
  const safe = String(text).replace(/`/g,"'").replace(/\\/g,"\\\\");
  return `<div class="speaker-actions"><button class="speaker-btn" onclick="speak(\`${safe}\`)">▶ Play</button><button class="speaker-btn alt" onclick="stopSpeak()">■ Stop</button><button class="speaker-btn alt" onclick="startRecognition()">⏺ Record</button></div>`;
}
function quickNav(role){
  const sets={
    student:[["weeks","16 Weeks"],["materials","Materials"],["online","Online Room"],["assignments","Assignments"],["portfolio","Portfolio"]],
    lecturer:[["builder","Course Builder"],["materials","Materials"],["tasks","Assessments"],["review","Review"],["analytics","Reports"]],
    admin:[["users","Users & Institutions"],["materials","Materials"],["online","Online Room"],["analytics","Analytics"],["settings","Settings"]]
  };
  const arr=sets[role]||[];
  return `<div class="quick-links">${arr.map(([p,l])=>`<button class="btn btn-soft" onclick="navigate('${p}')">${l}</button>`).join("")}</div>`;
}
function studentWeeklyRows(){
  const u=currentUser();
  return db.weeks.map(w=>{
    const done=u?.progress?.weeks?.includes(w.week); const quiz=u?.progress?.quiz?.[w.week];
    const submitted=db.submissions.some(s=>s.userId===u.id && s.week===w.week);
    return `<tr><td>Week ${w.week}</td><td>${esc(w.title)}</td><td><span class="status ${done?'done':'pending'}">${done?'Completed':'In progress'}</span></td><td>${quiz??'-'}${quiz!=null?'%':''}</td><td>${submitted?'Submitted':'Pending'}</td><td><button class="btn btn-soft" onclick="openWeek(${w.week})">Open</button></td></tr>`;
  }).join('');
}
function recentGrades(userId){
  const rows=db.submissions.filter(s=>s.userId===userId).map(s=>{
    const g=db.grades.find(x=>x.submissionId===s.id);
    return `<tr><td>${s.week}</td><td>${esc(s.title)}</td><td>${g?esc(g.score):'-'}</td><td>${g?esc(g.feedback):'Pending review'}</td></tr>`;
  }).join('');
  return rows || '<tr><td colspan="4">No grades yet.</td></tr>';
}
function renderStudentDashboard(){
  const u=currentUser(), w=nextWeek(u), pct=completePct(u);
  byId("mainView").innerHTML=`
    ${quickNav('student')}
    <div class="grid cols-4">${metric("Progress",pct+"%","Completed 16-week journey")}${metric("Quiz Average",avgQuiz(u)+"%","Integrated assessment result")}${metric("Submitted Tasks",mySubmissions().length,"Assignments uploaded")}${metric("Current Discipline",disciplines.find(d=>d.id===u.disciplineId)?.title||"ESP","Selected specialization")}</div>
    <div class="grid cols-2">
      <section class="panel"><h3>Current Learning Focus</h3><p><strong>Week ${w.week}: ${esc(w.title)}</strong></p><p>${esc(w.reading)}</p><div class="progress-bar"><span style="width:${pct}%"></span></div><div class="actions"><button class="btn btn-primary" onclick="openWeek(${w.week})">Open Next Module</button><button class="btn btn-soft" onclick="navigate('materials')">Open Materials</button></div>${speaker(w.reading,'Audio Support')}</section>
      <section class="panel"><h3>Integrated Student Reports</h3><ul class="check-list"><li>Progress report across 16 weeks</li><li>Quiz and assignment evidence</li><li>Portfolio and lecturer feedback</li><li>Virtual classroom participation</li><li>Speaking practice with recording support</li></ul><div class="actions"><button class="btn btn-primary" onclick="navigate('portfolio')">Open Portfolio Report</button><button class="btn btn-soft" onclick="navigate('online')">Open Online Room</button></div></section>
    </div>
    <section class="panel"><h3>Six ESP Skills This Week</h3><div class="skill-grid">${skillNames.map(s=>`<div class="skill-box"><strong>${s}</strong><p>${esc(w.skills[s])}</p>${speaker(w.skills[s],"Practice")}</div>`).join('')}</div></section>
    <section class="panel"><h3>16-Week Progress Report</h3><div class="table-wrap"><table><thead><tr><th>Week</th><th>Theme</th><th>Status</th><th>Quiz</th><th>Submission</th><th>Action</th></tr></thead><tbody>${studentWeeklyRows()}</tbody></table></div></section>
    <section class="panel"><h3>Feedback and Grade Report</h3><div class="table-wrap"><table><thead><tr><th>Week</th><th>Submission</th><th>Score</th><th>Feedback</th></tr></thead><tbody>${recentGrades(u.id)}</tbody></table></div></section>`;
}
function renderLecturerDashboard(){
  const pending=db.submissions.filter(s=>!db.grades.some(g=>g.submissionId===s.id)).length;
  const students=db.users.filter(u=>u.role==='student');
  const lecturers=db.users.filter(u=>u.role==='lecturer');
  byId("mainView").innerHTML=`
    ${quickNav('lecturer')}
    <div class="grid cols-4">${metric("Students",students.length,"Registered learners")}${metric("Materials",disciplines.length*6+db.customMaterials.length,"Published units")}${metric("Submissions",db.submissions.length,"Evidence uploaded")}${metric("Pending Review",pending,"Require lecturer action")}</div>
    <div class="grid cols-3">
      <section class="panel"><h3>Course and Material Authoring</h3><p>Create, update, and align 16-week materials, discipline content, and skill-based activities.</p><div class="actions"><button class="btn btn-primary" onclick="navigate('builder')">Open Course Builder</button><button class="btn btn-soft" onclick="navigate('materials')">Open Materials</button></div></section>
      <section class="panel"><h3>Assessment and Review Control</h3><p>Manage tasks, rubrics, quiz activities, submissions, and speaking-performance evidence.</p><div class="actions"><button class="btn btn-primary" onclick="navigate('tasks')">Create Assessment</button><button class="btn btn-soft" onclick="navigate('review')">Review Submissions</button></div></section>
      <section class="panel"><h3>Integrated Lecturer Reports</h3><p>Review student engagement, module completion, online-room participation, and performance analytics.</p><div class="actions"><button class="btn btn-primary" onclick="navigate('analytics')">Open Reports</button><button class="btn btn-soft" onclick="navigate('online')">Manage Virtual Classroom</button></div></section>
    </div>
    <section class="panel"><h3>Student Progress Snapshot</h3><div class="table-wrap"><table><thead><tr><th>Name</th><th>Discipline</th><th>Completion</th><th>Quiz Avg.</th><th>Submissions</th></tr></thead><tbody>${students.map(s=>`<tr><td>${esc(s.name)}</td><td>${esc(disciplines.find(d=>d.id===s.disciplineId)?.title||'-')}</td><td>${completePct(s)}%</td><td>${avgQuiz(s)}%</td><td>${db.submissions.filter(x=>x.userId===s.id).length}</td></tr>`).join('')||'<tr><td colspan="5">No students yet.</td></tr>'}</tbody></table></div></section>
    <section class="panel"><h3>Learning Analytics</h3>${analyticsHTML()}</section>`;
}
function renderOnlineRoom(){
  const rooms=db.rooms.filter(r=>r.scope==='all'||r.scope===session.role);
  const manager=['lecturer','admin'].includes(session.role);
  byId('mainView').innerHTML=`<section class="panel"><h3>Online Room Mode</h3><p>Integrated virtual classroom support for live session links, agenda, host, attendance, screen sharing, chat, breakout discussion, consultation, and assessment feedback.</p>${quickNav(session.role)}</section>${manager?roomCreator():''}<div class="grid cols-2">${rooms.map(r=>roomCard(r)).join('')}</div>`;
}
function institutionOptions(selected=''){ return `<option value="">Not specified</option>${db.institutions.map(i=>`<option value="${esc(i)}" ${i===selected?'selected':''}>${esc(i)}</option>`).join('')}`; }
function usersTable(){
  if(!db.users.length) return `<div class="table-wrap"><table><thead><tr><th>Name</th><th>Role</th><th>Status</th><th>Institution</th><th>Email</th><th>Mapping / Action</th></tr></thead><tbody><tr><td colspan="6">No users yet. Register students or lecturers first, then map them to institutions here.</td></tr></tbody></table></div>`;
  return `<div class="table-wrap"><table><thead><tr><th>Name</th><th>Role</th><th>Status</th><th>Institution</th><th>Email</th><th>Mapping / Action</th></tr></thead><tbody>${db.users.map(u=>`<tr><td>${esc(u.name)}</td><td>${esc(u.role)}</td><td><span class="status ${u.status}">${esc(u.status)}</span></td><td>${esc(u.institution||'Not specified')}</td><td>${esc(u.email)}</td><td><select id="inst-${u.id}">${institutionOptions(u.institution||'')}</select> <button class="btn btn-soft" onclick="saveUserInstitution('${u.id}')">Save</button> ${u.role==='lecturer'?`<button class="btn btn-success" onclick="setLecturer('${u.id}','approved')">Approve</button> <button class="btn btn-danger" onclick="setLecturer('${u.id}','rejected')">Reject</button>`:''} <button class="btn btn-danger" onclick="deleteUser('${u.id}')">Delete</button></td></tr>`).join('')}</tbody></table></div>`;
}
function saveUserInstitution(id){ const u=db.users.find(x=>x.id===id); if(!u) return; const v=byId(`inst-${id}`)?.value || ''; u.institution=v || 'Not specified'; saveDB(); toast('Institution mapped', `${u.name} mapped to ${u.institution}.`); renderUsers(); }
function addInstitution(){ const v=byId('instName').value.trim(); if(!v) return toast('Input needed','Enter institution name first.'); if(!db.institutions.includes(v)) db.institutions.push(v); saveDB(); toast('Institution added',v); renderUsers(); }
function renderUsers(){
  byId('mainView').innerHTML=`${quickNav('admin')}<div class="grid cols-2"><section class="panel"><h3>Users & Institutions</h3><p>Manage, create, add, and map institutions with users, registrations, analytics, materials, and submissions.</p><div class="input-grid two"><label>Institution Name<input id="instName" placeholder="Add institution"></label><button class="btn btn-primary" onclick="addInstitution()" style="align-self:end">Add Institution</button></div><div style="margin-top:12px">${db.institutions.length?db.institutions.map(i=>`<span class="tag">${esc(i)}</span>`).join(' '):'<div class="empty">No institution added yet.</div>'}</div></section><section class="panel"><h3>User Accounts</h3>${usersTable()}</section></div><section class="panel"><h3>Institution Mapping Report</h3><div class="table-wrap"><table><thead><tr><th>Institution</th><th>Students</th><th>Lecturers</th><th>Submissions</th></tr></thead><tbody>${(db.institutions.length?db.institutions:['Not specified']).map(inst=>`<tr><td>${esc(inst)}</td><td>${db.users.filter(u=>u.role==='student'&&(u.institution||'Not specified')===inst).length}</td><td>${db.users.filter(u=>u.role==='lecturer'&&(u.institution||'Not specified')===inst).length}</td><td>${db.submissions.filter(s=>s.institution===inst).length}</td></tr>`).join('')}</tbody></table></div></section>`;
}
Object.assign(window,{stopSpeak,saveUserInstitution});
