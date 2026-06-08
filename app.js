
const ADMIN_PIN = "JS2026";
const DB_KEY = "garudaEspNusantara.final.v11.complete";

const disciplines = [
 {id:"tourism",icon:"🏨",title:"English for Tourism & Hospitality",focus:"Tour guiding, hospitality service, destination interpretation, visitor assistance, and cultural etiquette",province:"Bali / Yogyakarta / East Java / Papua"},
 {id:"business",icon:"💼",title:"English for Business & Entrepreneurship",focus:"Product pitching, negotiation, branding, customer care, e-commerce, and local creative economy",province:"Aceh / South Sumatra / NTB / Jakarta"},
 {id:"technology",icon:"⚙️",title:"English for Engineering & Technology",focus:"Technical explanation, process description, troubleshooting, documentation, and innovation presentation",province:"West Java / East Kalimantan / Riau Islands"},
 {id:"health",icon:"🩺",title:"English for Health & Care",focus:"Patient interaction, public health communication, pharmacy, telehealth, and culturally sensitive care",province:"Central Java / West Sumatra / South Papua"},
 {id:"maritime",icon:"🌊",title:"English for Maritime, Fisheries & Environment",focus:"Vessel safety, marine tourism, fisheries operation, environmental reporting, and sustainability advocacy",province:"South Sulawesi / Maluku / Papua / Wakatobi"},
 {id:"education",icon:"🎓",title:"English for Education & Communication",focus:"Teaching, moderation, academic speaking, community training, dialogue, and public communication",province:"West Sumatra / Kalimantan / Banten"}
];

const weeklyPlan = [
 ["Bhinneka Tunggal Ika and Professional ESP Identity","National","Bhinneka Tunggal Ika and Garuda civic values","education"],
 ["Tourism Guiding through Tri Hita Karana","Bali","Tri Hita Karana and hospitality ethics","tourism"],
 ["Batik Creative Economy and Product Pitch","Yogyakarta / Central Java","Batik motifs and entrepreneurship","business"],
 ["Pinisi Maritime Communication","South Sulawesi","Pinisi shipbuilding and voyage safety","maritime"],
 ["Gayo Coffee, Halal Tourism, and Buyer Interaction","Aceh","Gayo coffee and halal hospitality","business"],
 ["Angklung Event Communication","West Java","Angklung collaboration and performance management","education"],
 ["Toraja Heritage and Ethical Tourism","South Sulawesi","Toraja architecture and respectful heritage explanation","tourism"],
 ["Papua Eco-Tourism and Biodiversity Briefing","Papua","Biodiversity and ecological knowledge","maritime"],
 ["Sasak Weaving and Women’s Creative Economy","West Nusa Tenggara","Sasak weaving and local entrepreneurship","business"],
 ["Dayak Longhouse and Intercultural Dialogue","Kalimantan","Rumah Betang and community values","education"],
 ["Rumah Gadang and Leadership Communication","West Sumatra","Rumah Gadang and deliberation values","education"],
 ["Betawi Urban Heritage Promotion","DKI Jakarta","Betawi arts, culinary heritage, and multicultural city identity","business"],
 ["Spice Routes and Maritime Storytelling","Maluku","Spice routes and historical exchange","tourism"],
 ["Noken Sustainability and Global Advocacy","Papua Highlands","Noken and sustainable craft","education"],
 ["Capstone Professional Portfolio","Multi-province","Student-selected Nusantara local wisdom","technology"],
 ["Final Showcase: Local Wisdom to Global ESP Futures","Multi-province","Semester-wide professional presentation","tourism"]
];

const sessionTemplate = [
  "Reading","Listening","Speaking","Writing","Vocabulary & Grammar","Assessment","Assignment","Resources"
];
const defaultRooms = [
 {id:"ROOM-1",title:"Garuda Main Virtual Classroom",scope:"all",host:"Course Team",schedule:"Monday • 09:00 WIB",link:"https://meet.jit.si/GARUDA-ESP-NUSANTARA",agenda:"Weekly orientation, course briefing, reflective discussion, and progress monitoring.",features:["Live session link","Screen sharing","Attendance","Chat","Breakout discussion","Feedback notes"],attendance:[]},
 {id:"ROOM-2",title:"Discipline Workshop Room",scope:"student",host:"Assigned Lecturer",schedule:"By lecturer arrangement",link:"https://meet.jit.si/GARUDA-ESP-WORKSHOP",agenda:"Discipline-focused practice, role-play, speaking rehearsal, peer response, and consultation.",features:["Workshop mode","Speaking practice","Peer review","File discussion"],attendance:[]},
 {id:"ROOM-3",title:"Lecturer Design and Review Room",scope:"lecturer",host:"Academic Coordinator",schedule:"Weekly",link:"https://meet.jit.si/GARUDA-LECTURER-DESIGN",agenda:"Material development, assessment moderation, rubric calibration, and student performance review.",features:["Material review","Rubric discussion","Analytics briefing"],attendance:[]},
 {id:"ROOM-4",title:"Administrator Governance Room",scope:"admin",host:"Platform Administrator",schedule:"Monthly",link:"https://meet.jit.si/GARUDA-ADMIN-GOVERNANCE",agenda:"User governance, institution mapping, data review, content quality control, and system settings.",features:["Governance review","User control","Export and report checking"],attendance:[]}
];

function uid(p="ID"){return `${p}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`}
function byId(id){return document.getElementById(id)}
function esc(s=""){return String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]))}
function toast(t,m=""){const el=document.createElement("div");el.className="toast";el.innerHTML=`<strong>${esc(t)}</strong>${m?`<div>${esc(m)}</div>`:""}`;byId("toastHost").append(el);setTimeout(()=>el.remove(),3500)}
function save(){localStorage.setItem(DB_KEY,JSON.stringify(db))}
function metric(a,b,c){return `<article class="metric"><span>${esc(a)}</span><strong>${esc(b)}</strong><p>${esc(c)}</p></article>`}
function loadDB(){try{const s=localStorage.getItem(DB_KEY);if(s)return normalize(JSON.parse(s))}catch(e){}return normalize({users:[],institutions:[],weeks:createWeeks(),rooms:defaultRooms,submissions:[],grades:[],tasks:[],materials:[],forum:[],chat:[],tickets:[],activity:[],settings:{registrationOpen:true,speakerLang:"en-US",speakerRate:.92,forumOpen:true,helpDeskOpen:true}})}
function normalize(d){d.users||=[];d.institutions||=[];d.weeks||=createWeeks();d.rooms||=defaultRooms;d.submissions||=[];d.grades||=[];d.tasks||=[];d.materials||=[];d.forum||=[];d.chat||=[];d.tickets||=[];d.activity||=[];d.settings||={registrationOpen:true,speakerLang:"en-US",speakerRate:.92,forumOpen:true,helpDeskOpen:true};return d}
function log(type,detail){db.activity.unshift({id:uid("LOG"),type,detail,user:session?.name||"System",role:session?.role||"system",date:new Date().toISOString()});db.activity=db.activity.slice(0,120);save()}

function materialForWeek(i){
 const p=weeklyPlan[i-1]; const d=disciplines.find(x=>x.id===p[3])||disciplines[0];
 const context=`${p[2]} from ${p[1]}`;
 const professionalRole = {
  tourism:"frontline tourism professional or cultural guide",
  business:"local-product entrepreneur or business representative",
  technology:"technical presenter or innovation support officer",
  health:"health educator or care provider",
  maritime:"marine and environmental communicator",
  education:"teacher, moderator, or community communication facilitator"
 }[d.id] || "professional communicator";
 return {
  week:i,title:p[0],province:p[1],heritage:p[2],disciplineId:d.id,discipline:d.title,
  overview:`This week develops ${d.title} through ${context}. Students learn to transform Indonesian local wisdom into clear, ethical, and discipline-specific professional English. The module emphasizes audience awareness, intelligibility, accurate cultural representation, and task-based performance.`,
  essential:`How can a ${professionalRole} explain ${p[2]} from ${p[1]} in clear, ethical, and professionally useful English?`,
  outcomes:[
   `Explain ${p[2]} using accurate and respectful English.`,
   `Use discipline-specific vocabulary for ${d.title}.`,
   `Listen for main ideas, speaker roles, and professional intentions.`,
   `Perform a speaking task with clear pronunciation and intercultural sensitivity.`,
   `Produce a written ESP text connected to ${p[1]} and submit evidence for assessment.`
  ],
  reading:`${p[2]} is not only a cultural topic; it is also a professional communication resource. In ${d.title}, students need to understand how local knowledge can be presented to international audiences without simplification, stereotype, or inaccurate translation. A professional explanation begins with a clear purpose, introduces the local context, identifies the value behind the practice, and connects that value with a workplace situation. For example, a speaker may explain how community harmony, environmental care, hospitality, craftsmanship, or sustainability shapes service quality and decision making. In ESP communication, local wisdom becomes meaningful when it is organized through audience-friendly structure, precise vocabulary, polite expressions, and reflective responsibility. Therefore, students should learn to move from description to action: greeting, informing, advising, negotiating, instructing, reporting, guiding, presenting, and evaluating.`,
  listening:`Good morning. In this session, we will discuss how ${p[2]} from ${p[1]} can be explained in a professional ${d.title} context. When communicating with international audiences, begin with a respectful greeting and explain the main cultural idea in simple but accurate English. Then connect the idea to the professional situation. Use expressions such as "This practice reflects", "It is important because", "May I explain", and "We recommend". Avoid translating every local term literally if the meaning becomes unclear. Instead, provide a short explanation, give an example, and invite questions politely. Your goal is to make the audience understand the cultural value and its practical relevance.`,
  speaking:`Role-play task: Student A is a ${professionalRole}. Student B is an international visitor, client, patient, learner, partner, or stakeholder. Conduct a three-minute conversation about ${p[2]}. Include an opening greeting, two key facts, two ESP terms, one audience question, one clarification response, and a respectful closing. Record your performance and review clarity, pronunciation, fluency, and cultural sensitivity.`,
  writing:`Write a 180–220 word professional text connected to ${p[2]} and ${d.title}. Choose one genre: service email, visitor briefing, product description, health message, technical instruction, sustainability note, educational announcement, or project proposal. Your text must include a clear purpose, local-wisdom explanation, discipline-specific vocabulary, audience-oriented recommendation, and professional closing.`,
  vocab:[
   ["local wisdom","community-based values, knowledge, or practices"],
   ["professional register","language appropriate for workplace or academic situations"],
   ["intercultural sensitivity","respectful awareness when communicating across cultures"],
   ["audience awareness","adjusting language to listener needs and background"],
   ["ethical representation","describing culture accurately and respectfully"],
   ["clarification","a polite explanation that makes meaning clearer"],
   ["service encounter","a communication event between provider and user"],
   ["reflection","reviewing performance to improve future communication"]
  ],
  grammar:`Use polite expressions and modal verbs: may, could, would, should, and must. Use sequencing expressions: first, next, after that, finally. Use relative clauses and cause-effect expressions: which means, because, therefore, as a result, and this reflects.`,
  rubric:[["ESP terminology and accuracy",20],["Clarity and organization",20],["Professional tone and politeness",20],["Intercultural sensitivity",20],["Completion, delivery, and reflection",20]],
  assignment:`Submit one written ESP text and one speaking recording based on ${p[2]}. Include a 100-word reflection explaining how your work connects local wisdom with professional English communication.`,
  resources:[`Week ${i} reading handout`,`${d.title} vocabulary bank`,`Speaking role-play guide`,`Writing template`,`Assessment rubric`,`Reflection checklist`],
  quiz:[
   [`What is the main professional focus of Week ${i}?`,d.title,"Unrelated grammar memorization","Native accent imitation only","Random vocabulary"],
   ["A culturally respectful explanation should be...","clear, accurate, and audience-aware","exaggerated and vague","translated word by word only","without local context"],
   ["Professional ESP communication requires...","purpose, terminology, tone, and task completion","only long sentences","only informal expression","only memorizing definitions"]
  ]
 }
}
function createWeeks(){return Array.from({length:16},(_,i)=>materialForWeek(i+1))}

let db=loadDB();
let session=JSON.parse(localStorage.getItem("gesn.session.final")||"null");
let currentPage="dashboard", selectedWeek=1;

document.addEventListener("DOMContentLoaded",init);
function init(){
 populateSelects(); bindLanding(); bindGlobal(); setupFx();
 if("serviceWorker" in navigator){
  navigator.serviceWorker.getRegistrations().then(regs=>regs.forEach(reg=>reg.unregister())).catch(()=>{});
}
if(window.caches){ caches.keys().then(keys=>keys.forEach(k=>caches.delete(k))).catch(()=>{}); }
 if(session) enterApp(session.role,true);
}
function populateSelects(){const sel=byId("studentDiscipline"); if(sel) sel.innerHTML=disciplines.map(d=>`<option value="${d.id}">${d.title}</option>`).join("")}
function bindLanding(){
 document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>switchTab(b.dataset.tab));
 byId("studentRegisterBtn").onclick=registerStudent; byId("lecturerRegisterBtn").onclick=registerLecturer;
 byId("studentForm").onsubmit=e=>{e.preventDefault();login("student")};
 byId("lecturerForm").onsubmit=e=>{e.preventDefault();login("lecturer")};
 byId("adminForm").onsubmit=e=>{e.preventDefault(); if(typeof safeAdminLogin==="function"){safeAdminLogin(e)}else{adminLogin()}};
}
function bindGlobal(){}
function switchTab(t){document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.tab===t));document.querySelectorAll(".auth-form").forEach(f=>f.classList.toggle("active",f.dataset.form===t))}
function registerStudent(){
 if(!db.settings.registrationOpen)return toast("Registration closed","New registration is currently closed.");
 const name=byId("studentName").value.trim(),email=byId("studentEmail").value.trim().toLowerCase(),password=byId("studentPassword").value,disciplineId=byId("studentDiscipline").value;
 if(!name||!email||!password)return toast("Incomplete","Complete name, email, and password.");
 if(db.users.some(u=>u.email===email))return toast("Email exists","Please login or use another email.");
 db.users.push({id:uid("STU"),role:"student",status:"active",name,email,password,disciplineId,institution:"Not specified",progress:{weeks:[],quiz:{},badges:[]},created:new Date().toISOString()});save();log("student-register",`${name} registered`);toast("Student registered","You can login now.");byId("studentLoginEmail").value=email;byId("studentLoginPassword").value=password;
}
function registerLecturer(){
 if(!db.settings.registrationOpen)return toast("Registration closed","New registration is currently closed.");
 const name=byId("lecturerName").value.trim(),email=byId("lecturerEmail").value.trim().toLowerCase(),password=byId("lecturerPassword").value,expertise=byId("lecturerExpertise").value.trim();
 if(!name||!email||!password)return toast("Incomplete","Complete lecturer name, email, and password.");
 if(db.users.some(u=>u.email===email))return toast("Email exists","Please login or use another email.");
 db.users.push({id:uid("LEC"),role:"lecturer",status:"pending",name,email,password,expertise,institution:"Not specified",created:new Date().toISOString()});save();log("lecturer-request",`${name} requested approval`);toast("Request submitted","Admin must approve lecturer access.");
}
function login(role){
 const email=byId(`${role}LoginEmail`).value.trim().toLowerCase(),pass=byId(`${role}LoginPassword`).value;
 const u=db.users.find(x=>x.role===role&&x.email===email&&x.password===pass);
 if(!u)return toast("Login failed","Wrong email, password, or role.");
 if(role==="lecturer"&&u.status!=="approved")return toast("Approval required","Admin must approve this lecturer account.");
 session={id:u.id,role:u.role,name:u.name,email:u.email}; localStorage.setItem("gesn.session.final",JSON.stringify(session)); enterApp(role); log("login",`${u.name} logged in`);
}
function adminLogin(){
  if(byId("adminPin").value.trim()!==ADMIN_PIN)return toast("Admin PIN incorrect","Please re-enter the authorized administrator PIN.");
  session={id:"ADMIN",role:"admin",name:"Administrator",email:""};
  localStorage.setItem("gesn.session.final",JSON.stringify(session));
  enterApp("admin");
  log("admin-login","Admin accessed workspace");
}
function currentUser(){return session?.role==="admin"?{role:"admin",name:"Administrator",institution:"Platform"}:db.users.find(u=>u.id===session?.id)}
function enterApp(role,silent=false){
  const landingEl=byId("landing"), shellEl=byId("appShell");
  if(landingEl){
    landingEl.classList.add("hidden");
    landingEl.style.setProperty("display","none","important");
    landingEl.style.visibility="hidden";
  }
  if(shellEl){
    shellEl.classList.remove("hidden");
    shellEl.style.setProperty("display","grid","important");
    shellEl.style.visibility="visible";
  }
  renderUserCard();renderNav(role);navigate("dashboard");if(!silent)toast("Welcome",`${role.toUpperCase()} workspace opened.`);
}
function logout(){
  session=null;
  localStorage.removeItem("gesn.session.final");

  const shellEl=byId("appShell");
  const landingEl=byId("landing");

  if(shellEl){
    shellEl.classList.add("hidden");
    shellEl.style.setProperty("display","none","important");
    shellEl.style.visibility="hidden";
    shellEl.setAttribute("aria-hidden","true");
  }

  if(landingEl){
    landingEl.classList.remove("hidden");
    landingEl.style.setProperty("display","block","important");
    landingEl.style.visibility="visible";
    landingEl.style.pointerEvents="auto";
    landingEl.removeAttribute("aria-hidden");
  }

  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
  if(typeof toast==="function") toast("Logged out","Session closed.");
}
function renderUserCard(){const u=currentUser(); if(session.role==="admin")byId("userCard").innerHTML=``; else byId("userCard").innerHTML=`<strong>${esc(u.name)}</strong><span>${esc(u.role)}</span><small>${esc(disciplines.find(d=>d.id===u.disciplineId)?.title||u.expertise||"ESP Learning")}<br>${esc(u.institution||"Not specified")}</small>`}

const navs={
 student:[["dashboard","🏠","Dashboard"],["materials","📚","Semester Materials"],["assignments","📝","Assignments"],["online","💻","Online Room"],["voice","🎙️","Speaker Lab"],["portfolio","🏅","Reports & Portfolio"]],
 lecturer:[["dashboard","🏠","Dashboard"],["materials","📚","Semester Materials"],["builder","🛠️","Content Builder"],["tasks","📝","Assessments"],["review","✅","Review Submissions"],["online","💻","Online Room"],["analytics","📊","Reports & Analytics"]],
 admin:[["dashboard","🏠","Dashboard"],["users","👥","Users & Institutions"],["materials","📚","Semester Materials"],["builder","🛠️","Content Builder"],["tasks","📝","Assessments"],["online","💻","Online Room"],["analytics","📊","System Analytics"],["settings","⚙️","Settings"]]
};
function renderNav(role){byId("sideNav").innerHTML=navs[role].map(([p,i,l])=>`<button data-page="${p}"><span>${i}</span>${l}</button>`).join("");byId("sideNav").querySelectorAll("button").forEach(b=>b.onclick=()=>navigate(b.dataset.page))}
function navigate(page){currentPage=page;document.querySelectorAll(".side-nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===page));const item=(navs[session.role]||[]).find(n=>n[0]===page);byId("pageTitle").textContent=item?item[2]:page.replace(/\b\w/g,m=>m.toUpperCase());byId("roleKicker").textContent=`${session.role.toUpperCase()} WORKSPACE`;({dashboard:session.role==="student"?renderStudentDashboard:session.role==="lecturer"?renderLecturerDashboard:renderAdminDashboard,materials:renderMaterials,assignments:renderAssignments,online:renderOnline,voice:renderVoice,portfolio:renderPortfolio,builder:renderBuilder,tasks:renderTasks,review:renderReview,analytics:session.role==="admin"?renderSystemAnalytics:renderLecturerAnalytics,users:renderUsers,settings:renderSettings,forum:renderForum,chat:renderChat,helpdesk:renderHelpdesk}[page]||renderStudentDashboard)()}

function openModal(html){byId("modalBody").innerHTML=html;byId("modal").showModal()}function closeModal(){byId("modal").close()}
function speak(text){if(!("speechSynthesis"in window))return toast("Audio unavailable","This browser does not support speech synthesis.");speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(String(text).replace(/<[^>]+>/g," "));u.lang=db.settings.speakerLang||"en-US";u.rate=Number(db.settings.speakerRate)||.92;speechSynthesis.speak(u)}
function stopSpeak(){if("speechSynthesis"in window)speechSynthesis.cancel()}
function recordSpeech(target="speechOut"){const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR)return toast("Recording unavailable","Use a browser that supports speech recognition.");const r=new SR();r.lang="en-US";r.onresult=e=>{const el=byId(target);if(el)el.innerHTML=`<div class="card"><strong>Recorded transcript</strong><p>${esc(e.results[0][0].transcript)}</p></div>`};r.start()}
function controls(text,target="speechOut"){const safe=String(text).replace(/`/g,"'").replace(/\\/g,"\\\\");return `<div class="controls"><button class="audio-btn play" onclick="speak(\`${safe}\`)">▶ Play</button><button class="audio-btn" onclick="stopSpeak()">■ Stop</button><button class="audio-btn" onclick="recordSpeech('${target}')">● Record</button></div>`}

function completion(u=currentUser()){return Math.round(((u?.progress?.weeks||[]).length/db.weeks.length)*100)}
function avgQuiz(u=currentUser()){const vals=Object.values(u?.progress?.quiz||{});return vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):0}
function mySubs(){return db.submissions.filter(s=>s.userId===session.id)}
function nextWeek(u=currentUser()){const done=new Set(u?.progress?.weeks||[]);return db.weeks.find(w=>!done.has(w.week))||db.weeks[15]}

function renderStudentDashboard(){const u=currentUser(),w=nextWeek(u);byId("mainView").innerHTML=`<div class="grid cols-4">${metric("Progress",completion(u)+"%","16-week completion")}${metric("Quiz Average",avgQuiz(u)+"%","Assessment performance")}${metric("Submissions",mySubs().length,"Portfolio evidence")}${metric("Virtual Attendance",attendanceCount(u.name),"Room participation")}</div><div class="grid cols-2"><section class="panel"><h3>Current Module</h3><p><strong>Week ${w.week}: ${esc(w.title)}</strong></p><p>${esc(w.overview)}</p><div class="actions"><button class="btn primary" onclick="openWeek(${w.week})">Open Module</button><button class="btn soft" onclick="navigate('materials')">Semester Materials</button></div></section><section class="panel"><h3>Academic Report Summary</h3><ul class="check-list"><li>Weekly completion is tracked from all semester modules.</li><li>Quiz results, assignments, recordings, and lecturer feedback are integrated into the portfolio.</li><li>Virtual-room attendance is recorded when students join sessions.</li></ul></section></div>${progressTable(u)}`}
function progressTable(u){return `<section class="panel"><h3>16-Week Progress and Evidence</h3><div class="table-wrap"><table><thead><tr><th>Week</th><th>Theme</th><th>Status</th><th>Quiz</th><th>Submission</th><th>Action</th></tr></thead><tbody>${db.weeks.map(w=>{const done=u.progress?.weeks?.includes(w.week),quiz=u.progress?.quiz?.[w.week],sub=db.submissions.some(s=>s.userId===u.id&&s.week===w.week);return `<tr><td>Week ${w.week}</td><td>${esc(w.title)}</td><td><span class="status ${done?'done':'pending'}">${done?'Completed':'In progress'}</span></td><td>${quiz??"-"}${quiz!=null?"%":""}</td><td>${sub?"Submitted":"Pending"}</td><td><button class="btn soft" onclick="openWeek(${w.week})">Open</button></td></tr>`}).join("")}</tbody></table></div></section>`}
function renderLecturerDashboard(){const sts=db.users.filter(u=>u.role==="student"),pending=db.submissions.filter(s=>!db.grades.some(g=>g.submissionId===s.id)).length;byId("mainView").innerHTML=`<div class="grid cols-4">${metric("Students",sts.length,"Registered learners")}${metric("Weeks",db.weeks.length,"Semester modules")}${metric("Submissions",db.submissions.length,"Uploaded work")}${metric("Pending Review",pending,"Need feedback")}</div><div class="grid cols-3"><section class="panel"><h3>Semester Material Management</h3><p>Review, edit, and extend the 16-week materials, session content, resources, and assignments.</p><div class="actions"><button class="btn primary" onclick="navigate('materials')">Open Materials</button><button class="btn soft" onclick="navigate('builder')">Content Builder</button></div></section><section class="panel"><h3>Assessment and Review</h3><p>Create tasks, review submissions, and grade speaking/writing evidence.</p><div class="actions"><button class="btn primary" onclick="navigate('tasks')">Assessments</button><button class="btn soft" onclick="navigate('review')">Review</button></div></section><section class="panel"><h3>Report Center</h3><p>Monitor progress, quiz performance, submissions, and virtual attendance.</p><button class="btn primary" onclick="navigate('analytics')">Open Reports</button></section></div>${studentReportTable(sts)}`}
function renderAdminDashboard(){const pending=db.users.filter(u=>u.role==="lecturer"&&u.status==="pending").length;byId("mainView").innerHTML=`<div class="grid cols-4">${metric("Users",db.users.length,"Total accounts")}${metric("Pending Lecturers",pending,"Approval queue")}${metric("Institutions",db.institutions.length,"Mapped institutions")}${metric("Semester Materials",db.weeks.length,"Complete weekly modules")}</div><div class="grid cols-3"><section class="panel"><h3>User and Institution Governance</h3><p>Add institutions, map users, approve lecturers, and connect data to reports.</p><button class="btn primary" onclick="navigate('users')">Manage Users & Institutions</button></section><section class="panel"><h3>Semester Content Governance</h3><p>Review the complete ESP semester and lecturer-created tasks.</p><button class="btn primary" onclick="navigate('materials')">Open Semester Materials</button></section><section class="panel"><h3>System Report Center</h3><p>Inspect analytics, virtual-room records, submissions, grades, forum, chat, and help desk data.</p><button class="btn primary" onclick="navigate('analytics')">Open Analytics</button></section></div><section class="panel"><h3>System Analytics Snapshot</h3>${analyticsHTML()}</section>`}

function renderMaterials(){const w=db.weeks.find(x=>x.week===selectedWeek)||db.weeks[0];byId("mainView").innerHTML=`<section class="panel"><div class="semester-top"><div><h3>Semester ESP Materials</h3><p>A complete semester-ready ESP course organized into 16 weekly modules. Each week includes reading, listening, speaking with recording, writing, vocabulary and grammar, assessment, assignment, and resources.</p></div><div class="card"><h3>Semester Progress</h3><div class="progress"><span style="width:${Math.round(selectedWeek/db.weeks.length*100)}%"></span></div><p>Week ${selectedWeek} of ${db.weeks.length}</p></div></div><div class="week-tabs">${db.weeks.map(x=>`<button class="${x.week===selectedWeek?'active':''}" onclick="selectWeek(${x.week})">Week<br>${x.week}</button>`).join("")}</div></section><div class="semester-layout"><aside class="week-index">${db.weeks.map(x=>`<button class="${x.week===selectedWeek?'active':''}" onclick="selectWeek(${x.week})"><strong>Week ${x.week}</strong><br><small>${esc(x.title)}</small></button>`).join("")}</aside>${moduleHTML(w)}</div>`}
function selectWeek(n){selectedWeek=Number(n);renderMaterials()}
function moduleHTML(w){return `<section class="panel"><div class="lesson-hero panel"><span class="tag red">Week ${w.week}</span> <span class="tag">${esc(w.discipline)}</span><h3>${esc(w.title)}</h3><p><strong>Province / Local Wisdom:</strong> ${esc(w.province)} • ${esc(w.heritage)}</p><p><strong>Professional Overview:</strong> ${esc(w.overview)}</p><p><strong>Essential Question:</strong> ${esc(w.essential)}</p><h3>Learning Outcomes</h3><ul class="check-list">${w.outcomes.map(o=>`<li>${esc(o)}</li>`).join("")}</ul></div><div class="module-grid">${sessionHTML("Session 1: Reading",w.reading,w.reading)}${sessionHTML("Session 2: Listening",w.listening,w.listening)}${sessionHTML("Session 3: Speaking",w.speaking,w.speaking,true)}${sessionHTML("Session 4: Writing",w.writing,w.writing)}${vocabHTML(w)}${grammarHTML(w)}${assessmentHTML(w)}${assignmentHTML(w)}</div></section>`}
function sessionHTML(title,body,audio,record=false){return `<article class="session"><h4>${esc(title)}</h4><p>${esc(body)}</p>${controls(audio)}${record?'<div id="speechOut" class="record-note"></div>':''}</article>`}
function vocabHTML(w){return `<article class="session"><h4>Integrated Vocabulary Bank</h4><div class="table-wrap"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>${w.vocab.map(v=>`<tr><td>${esc(v[0])}</td><td>${esc(v[1])}</td></tr>`).join("")}</tbody></table></div>${controls(w.vocab.map(v=>v[0]+": "+v[1]).join(". "))}</article>`}
function grammarHTML(w){return `<article class="session"><h4>Grammar Focus</h4><p>${esc(w.grammar)}</p>${controls(w.grammar)}</article>`}
function assessmentHTML(w){return `<article class="session"><h4>Assessment</h4><p>Quiz and performance assessment are integrated for Week ${w.week}.</p><div class="table-wrap"><table><thead><tr><th>Criteria</th><th>Max</th></tr></thead><tbody>${w.rubric.map(r=>`<tr><td>${esc(r[0])}</td><td>${r[1]}</td></tr>`).join("")}<tr><td><strong>Total</strong></td><td><strong>100</strong></td></tr></tbody></table></div><div class="actions"><button class="btn primary" onclick="takeQuiz(${w.week})">Start Quiz</button></div></article>`}
function assignmentHTML(w){return `<article class="session"><h4>Assignment and Resources</h4><p>${esc(w.assignment)}</p><ul class="check-list">${w.resources.map(r=>`<li>${esc(r)}</li>`).join("")}</ul><div class="actions">${session.role==="student"?`<button class="btn primary" onclick="submitAssignment(${w.week})">Submit Assignment</button><button class="btn soft" onclick="markWeek(${w.week})">Mark Complete</button>`:"<button class='btn soft' onclick=\"navigate('builder')\">Edit in Builder</button>"}</div></article>`}
function openWeek(n){selectedWeek=Number(n);const w=db.weeks.find(x=>x.week===selectedWeek)||db.weeks[0];openModal(`<h2>Week ${w.week}: ${esc(w.title)}</h2>${moduleHTML(w)}`)}
function markWeek(n){const u=db.users.find(x=>x.id===session.id);if(!u)return;if(!u.progress.weeks.includes(n))u.progress.weeks.push(n);save();toast("Progress updated",`Week ${n} completed.`);if(currentPage==="materials")renderMaterials();if(currentPage==="dashboard")renderStudentDashboard()}

function takeQuiz(n){const w=db.weeks.find(x=>x.week===n);openModal(`<h2>Week ${n} Quiz</h2><form id="quizForm">${w.quiz.map((q,i)=>`<fieldset class="card"><legend><strong>${i+1}. ${esc(q[0])}</strong></legend>${q.slice(1).map(a=>`<label style="text-transform:none;color:#322;font-weight:700"><input type="radio" name="q${i}" value="${esc(a)}" style="width:auto"> ${esc(a)}</label>`).join("")}</fieldset>`).join("")}<button type="button" class="btn primary" onclick="gradeQuiz(${n})">Submit Quiz</button></form>`)}
function gradeQuiz(n){const w=db.weeks.find(x=>x.week===n);let score=0;w.quiz.forEach((q,i)=>{const s=document.querySelector(`input[name=q${i}]:checked`);if(s&&s.value===q[1])score++});const pct=Math.round(score/w.quiz.length*100);const u=db.users.find(x=>x.id===session.id);if(u){u.progress.quiz[n]=pct;save()}openModal(`<h2>Quiz Result</h2>${metric("Score",pct+"%","Week "+n+" result")}<button class="btn primary" onclick="closeModal()">Close</button>`)}
function submitAssignment(n){const w=db.weeks.find(x=>x.week===n);openModal(`<h2>Submit Week ${n} Assignment</h2><p>${esc(w.assignment)}</p><label>Submission Title<input id="subTitle" value="Week ${n} - ${esc(w.title)}"></label><label>Written Work<textarea id="subText" placeholder="Paste your work here"></textarea></label><label>Attachment<input id="subFile" type="file" accept=".doc,.docx,.pdf,.txt,.mp3,.wav,.png,.jpg"></label><div class="actions"><button class="btn primary" onclick="saveSubmission(${n})">Submit</button><button class="btn soft" onclick="byId('subFeedback').innerHTML=writingFeedback(byId('subText').value)">AI Check Draft</button></div><div id="subFeedback"></div>`)}
function saveSubmission(n){const title=byId("subTitle").value.trim(),text=byId("subText").value.trim(),file=byId("subFile").files[0];if(!title||!text)return toast("Incomplete","Add title and written work.");const done=(data="")=>{const u=currentUser();db.submissions.unshift({id:uid("SUB"),userId:u.id,userName:u.name,institution:u.institution||"Not specified",week:n,title,text,fileName:file?.name||"",fileData:data,date:new Date().toISOString()});save();log("submission",`${u.name} submitted Week ${n}`);closeModal();toast("Submitted","Your assignment has been recorded.")};if(file){const r=new FileReader();r.onload=()=>done(r.result);r.readAsDataURL(file)}else done()}
function writingFeedback(t=""){if(!t.trim())return "Write or paste a draft first.";let tips=[];if(t.length<150)tips.push("Develop the text with more professional details.");if(!/may|could|would|please|recommend/i.test(t))tips.push("Add polite modal expressions.");if(!/culture|local|wisdom|professional|visitor|client|community/i.test(t))tips.push("Connect the text more explicitly to local wisdom and ESP context.");return tips.length?tips.join(" "):"Strong draft. Add evidence, transitions, and a reflective closing for a stronger academic-professional tone."}

function renderAssignments(){byId("mainView").innerHTML=`<section class="panel"><h3>Assignments</h3><p>All weekly assignments and lecturer-created assessments are integrated here.</p></section><div class="grid cols-2">${db.weeks.map(w=>`<article class="week-card"><span class="tag red">Week ${w.week}</span><h3>${esc(w.title)}</h3><p>${esc(w.assignment)}</p><button class="btn primary" onclick="submitAssignment(${w.week})">Submit</button></article>`).join("")}</div>`}
function renderPortfolio(){const u=currentUser(),subs=mySubs();byId("mainView").innerHTML=`<div class="grid cols-4">${metric("Progress",completion(u)+"%","Completion")}${metric("Quiz Average",avgQuiz(u)+"%","Performance")}${metric("Submissions",subs.length,"Works")}${metric("Grades",db.grades.filter(g=>subs.some(s=>s.id===g.submissionId)).length,"Reviewed")}</div><section class="panel"><h3>Portfolio Evidence</h3>${subs.map(s=>`<div class="card"><strong>${esc(s.title)}</strong><p>Week ${s.week} • ${new Date(s.date).toLocaleString()}</p><p>${esc(s.text.slice(0,280))}</p>${gradeFor(s.id)}</div>`).join("")||'<div class="empty">No submission yet.</div>'}</section>`}
function gradeFor(id){const g=db.grades.find(x=>x.submissionId===id);return g?`<p><span class="tag">Score: ${esc(g.score)}</span></p><p>${esc(g.feedback)}</p>`:`<p><span class="tag">Pending review</span></p>`}

function renderBuilder(){byId("mainView").innerHTML=`<section class="panel"><h3>Content Builder</h3><p>Edit weekly semester content and add lecturer-created resources.</p><div class="field-grid two"><label>Week<select id="editWeek">${db.weeks.map(w=>`<option value="${w.week}">Week ${w.week}</option>`).join("")}</select></label><label>Title<input id="editTitle"></label><label>Province<input id="editProvince"></label><label>Discipline<select id="editDiscipline">${disciplines.map(d=>`<option value="${d.id}">${d.title}</option>`).join("")}</select></label></div><label>Overview<textarea id="editOverview"></textarea></label><label>Reading<textarea id="editReading"></textarea></label><label>Listening Script<textarea id="editListening"></textarea></label><label>Speaking Task<textarea id="editSpeaking"></textarea></label><label>Writing Task<textarea id="editWriting"></textarea></label><div class="actions"><button class="btn soft" onclick="loadEditWeek()">Load Week</button><button class="btn primary" onclick="saveEditWeek()">Save Week</button></div></section>`}
function loadEditWeek(){const w=db.weeks.find(x=>x.week==byId("editWeek").value);byId("editTitle").value=w.title;byId("editProvince").value=w.province;byId("editDiscipline").value=w.disciplineId;byId("editOverview").value=w.overview;byId("editReading").value=w.reading;byId("editListening").value=w.listening;byId("editSpeaking").value=w.speaking;byId("editWriting").value=w.writing}
function saveEditWeek(){const w=db.weeks.find(x=>x.week==byId("editWeek").value),d=disciplines.find(x=>x.id===byId("editDiscipline").value);Object.assign(w,{title:byId("editTitle").value,province:byId("editProvince").value,disciplineId:d.id,discipline:d.title,overview:byId("editOverview").value,reading:byId("editReading").value,listening:byId("editListening").value,speaking:byId("editSpeaking").value,writing:byId("editWriting").value});save();toast("Week saved","Semester material updated.")}

function renderTasks(){byId("mainView").innerHTML=`<section class="panel"><h3>Create Assessment</h3><div class="field-grid two"><label>Week<select id="taskWeek">${db.weeks.map(w=>`<option>${w.week}</option>`).join("")}</select></label><label>Type<select id="taskType"><option>Assignment</option><option>Quiz</option><option>Speaking Performance</option><option>Project</option></select></label><label>Title<input id="taskTitle"></label><label>Due Date<input id="taskDue" type="date"></label></div><label>Instructions<textarea id="taskInstructions"></textarea></label><label>Rubric<textarea id="taskRubric">ESP accuracy 20; clarity 20; professional tone 20; intercultural sensitivity 20; completion and reflection 20.</textarea></label><button class="btn primary" onclick="saveTask()">Publish Assessment</button></section><section class="panel"><h3>Published Assessments</h3>${db.tasks.map(t=>`<div class="card"><strong>${esc(t.title)}</strong><p>${esc(t.instructions)}</p><span class="tag">Week ${esc(t.week)}</span> <span class="tag">${esc(t.type)}</span></div>`).join("")||'<div class="empty">No lecturer-created assessment yet.</div>'}</section>`}
function saveTask(){const t={id:uid("TASK"),week:byId("taskWeek").value,type:byId("taskType").value,title:byId("taskTitle").value.trim(),due:byId("taskDue").value,instructions:byId("taskInstructions").value.trim(),rubric:byId("taskRubric").value.trim(),creator:session.name,date:new Date().toISOString()};if(!t.title||!t.instructions)return toast("Incomplete","Add title and instructions.");db.tasks.unshift(t);save();toast("Assessment published");renderTasks()}
function renderReview(){byId("mainView").innerHTML=`<section class="panel"><h3>Review Submissions</h3>${submissionsTable()}</section>`}
function submissionsTable(){if(!db.submissions.length)return'<div class="empty">No submissions yet.</div>';return`<div class="table-wrap"><table><thead><tr><th>Student</th><th>Week</th><th>Title</th><th>Status</th><th>Action</th></tr></thead><tbody>${db.submissions.map(s=>{const g=db.grades.find(x=>x.submissionId===s.id);return`<tr><td>${esc(s.userName)}</td><td>${s.week}</td><td>${esc(s.title)}</td><td><span class="status ${g?'done':'pending'}">${g?'Reviewed':'Pending'}</span></td><td><button class="btn soft" onclick="openReview('${s.id}')">Review</button></td></tr>`}).join("")}</tbody></table></div>`}
function openReview(id){const s=db.submissions.find(x=>x.id===id);openModal(`<h2>Review Submission</h2><p><strong>${esc(s.userName)}</strong> • Week ${s.week}</p><div class="card"><p>${esc(s.text)}</p>${s.fileData?`<a class="btn soft" href="${s.fileData}" download="${esc(s.fileName)}">Download Attachment</a>`:""}</div><div class="field-grid two"><label>Score<input id="gradeScore"></label><label>Short Feedback<input id="gradeFeedback"></label></div><label>Detailed Feedback<textarea id="gradeDetail">${writingFeedback(s.text)}</textarea></label><button class="btn primary" onclick="saveGrade('${id}')">Save Grade</button>`)}
function saveGrade(id){db.grades=db.grades.filter(g=>g.submissionId!==id);db.grades.push({id:uid("GRADE"),submissionId:id,score:byId("gradeScore").value,feedback:byId("gradeFeedback").value,detail:byId("gradeDetail").value,reviewer:session.name,date:new Date().toISOString()});save();closeModal();toast("Grade saved");renderReview()}

function renderOnline(){const rooms=db.rooms.filter(r=>r.scope==="all"||r.scope===session.role);const manage=["lecturer","admin"].includes(session.role);byId("mainView").innerHTML=`<section class="panel"><h3>Online Room Mode</h3><p>Integrated virtual classroom support for live session links, agenda, host, attendance, screen sharing, chat, breakout discussion, consultation, and assessment feedback.</p></section>${manage?roomForm():""}<div class="grid cols-2">${rooms.map(roomCard).join("")}</div>`}
function roomForm(){return`<section class="panel"><h3>Create Virtual Room</h3><div class="field-grid two"><label>Title<input id="roomTitle"></label><label>Scope<select id="roomScope"><option value="all">All</option><option value="student">Student</option><option value="lecturer">Lecturer</option><option value="admin">Admin</option></select></label><label>Host<input id="roomHost"></label><label>Schedule<input id="roomSchedule"></label><label>Link<input id="roomLink" placeholder="https://meet.jit.si/..."></label><label>Features<input id="roomFeatures" value="Live session, Screen sharing, Attendance, Chat, Breakout discussion"></label></div><label>Agenda<textarea id="roomAgenda"></textarea></label><button class="btn primary" onclick="saveRoom()">Save Room</button></section>`}
function roomCard(r){return`<article class="room-card"><h3>${esc(r.title)}</h3><p>${esc(r.agenda)}</p><p><span class="tag red">${esc(r.scope)}</span> <span class="tag">${esc(r.schedule)}</span> <span class="tag">Host: ${esc(r.host)}</span></p><ul class="check-list">${(r.features||[]).map(f=>`<li>${esc(f)}</li>`).join("")}</ul><p><strong>Attendance:</strong> ${(r.attendance||[]).length}</p><button class="btn primary" onclick="joinRoom('${r.id}')">Join Room</button></article>`}
function saveRoom(){const r={id:uid("ROOM"),title:byId("roomTitle").value.trim(),scope:byId("roomScope").value,host:byId("roomHost").value.trim(),schedule:byId("roomSchedule").value.trim(),link:byId("roomLink").value.trim()||`https://meet.jit.si/${uid("GARUDA")}`,agenda:byId("roomAgenda").value.trim(),features:byId("roomFeatures").value.split(",").map(x=>x.trim()).filter(Boolean),attendance:[]};if(!r.title||!r.host||!r.agenda)return toast("Incomplete","Complete title, host, and agenda.");db.rooms.unshift(r);save();toast("Room saved");renderOnline()}
function joinRoom(id){const r=db.rooms.find(x=>x.id===id);r.attendance.push({user:session.name,role:session.role,date:new Date().toISOString()});save();window.open(r.link,"_blank");toast("Attendance recorded",r.title)}
function attendanceCount(name){return db.rooms.reduce((a,r)=>a+(r.attendance||[]).filter(x=>x.user===name).length,0)}

function renderVoice(){byId("mainView").innerHTML=`<section class="panel"><h3>Speaker Lab</h3><p>Practice listening and speaking with play, stop, and record controls.</p><label>Practice Text<textarea id="voiceText">${db.weeks[0].speaking}</textarea></label><div class="controls"><button class="audio-btn play" onclick="speak(byId('voiceText').value)">▶ Play</button><button class="audio-btn" onclick="stopSpeak()">■ Stop</button><button class="audio-btn" onclick="recordSpeech('voiceOut')">● Record</button></div><div id="voiceOut"></div></section>`}

function renderUsers(){byId("mainView").innerHTML=`<div class="grid cols-2"><section class="panel"><h3>Users & Institutions</h3><p>Create institutions, map users, approve lecturers, and connect institutional data to analytics, materials, and submissions.</p><div class="field-grid two"><label>Institution Name<input id="instName" placeholder="Institution name"></label><button class="btn primary" onclick="addInstitution()" style="align-self:end">Add Institution</button></div><div style="margin-top:12px">${db.institutions.length?db.institutions.map(i=>`<span class="tag">${esc(i)}</span>`).join(" "):'<div class="empty">No institution added yet.</div>'}</div></section><section class="panel"><h3>User Accounts and Mapping</h3>${usersTable()}</section></div><section class="panel"><h3>Institution Mapping Report</h3>${institutionReport()}</section>`}
function usersTable(){return`<div class="table-wrap"><table><thead><tr><th>Name</th><th>Role</th><th>Status</th><th>Institution</th><th>Email</th><th>Action</th></tr></thead><tbody>${db.users.map(u=>`<tr><td>${esc(u.name)}</td><td>${esc(u.role)}</td><td><span class="status ${u.status}">${esc(u.status)}</span></td><td>${esc(u.institution||"Not specified")}</td><td>${esc(u.email)}</td><td><select id="inst-${u.id}"><option>Not specified</option>${db.institutions.map(i=>`<option ${u.institution===i?'selected':''}>${esc(i)}</option>`).join("")}</select><button class="btn soft" onclick="mapUser('${u.id}')">Map</button>${u.role==="lecturer"?` <button class="btn soft" onclick="setLecturer('${u.id}','approved')">Approve</button> <button class="btn soft" onclick="setLecturer('${u.id}','rejected')">Reject</button>`:""} <button class="btn soft" onclick="deleteUser('${u.id}')">Delete</button></td></tr>`).join("")||'<tr><td colspan="6">No users yet.</td></tr>'}</tbody></table></div>`}
function addInstitution(){const v=byId("instName").value.trim();if(!v)return toast("Input needed","Enter institution name.");if(!db.institutions.includes(v))db.institutions.push(v);save();toast("Institution added",v);renderUsers()}
function mapUser(id){const u=db.users.find(x=>x.id===id);u.institution=byId(`inst-${id}`).value;save();toast("User mapped",`${u.name}: ${u.institution}`);renderUsers()}
function setLecturer(id,status){const u=db.users.find(x=>x.id===id);u.status=status;save();toast("Lecturer updated",`${u.name}: ${status}`);renderUsers()}
function deleteUser(id){if(confirm("Delete this user?")){db.users=db.users.filter(u=>u.id!==id);save();renderUsers()}}
function institutionReport(){const list=db.institutions.length?db.institutions:["Not specified"];return`<div class="table-wrap"><table><thead><tr><th>Institution</th><th>Students</th><th>Lecturers</th><th>Submissions</th><th>Virtual Attendance</th></tr></thead><tbody>${list.map(i=>`<tr><td>${esc(i)}</td><td>${db.users.filter(u=>u.role==="student"&&(u.institution||"Not specified")===i).length}</td><td>${db.users.filter(u=>u.role==="lecturer"&&(u.institution||"Not specified")===i).length}</td><td>${db.submissions.filter(s=>s.institution===i).length}</td><td>${db.rooms.reduce((a,r)=>a+(r.attendance||[]).filter(x=>db.users.some(u=>u.name===x.user&&(u.institution||"Not specified")===i)).length,0)}</td></tr>`).join("")}</tbody></table></div>`}

function analyticsHTML(){const st=db.users.filter(u=>u.role==="student"),le=db.users.filter(u=>u.role==="lecturer");return`<div class="grid cols-2"><div>${[["Students",st.length],["Lecturers",le.length],["Approved Lecturers",le.filter(x=>x.status==="approved").length],["Submissions",db.submissions.length],["Grades",db.grades.length],["Rooms",db.rooms.length],["Forum Posts",db.forum.length],["Tickets",db.tickets.length]].map(([a,b])=>`<div class="card"><strong>${a}</strong><div class="progress"><span style="width:${Math.min(100,b*10)}%"></span></div><p>${b}</p></div>`).join("")}</div><div>${disciplines.map(d=>{const n=st.filter(s=>s.disciplineId===d.id).length;return`<div class="card"><strong>${esc(d.title)}</strong><div class="progress"><span style="width:${Math.min(100,n*18)}%"></span></div><p>${n} students</p></div>`}).join("")}</div></div>`}
function studentReportTable(sts){return`<section class="panel"><h3>Student Progress Report</h3><div class="table-wrap"><table><thead><tr><th>Name</th><th>Discipline</th><th>Institution</th><th>Completion</th><th>Quiz Avg.</th><th>Submissions</th></tr></thead><tbody>${sts.map(s=>`<tr><td>${esc(s.name)}</td><td>${esc(disciplines.find(d=>d.id===s.disciplineId)?.title||"ESP")}</td><td>${esc(s.institution)}</td><td>${completion(s)}%</td><td>${avgQuiz(s)}%</td><td>${db.submissions.filter(x=>x.userId===s.id).length}</td></tr>`).join("")||'<tr><td colspan="6">No students yet.</td></tr>'}</tbody></table></div></section>`}
function renderLecturerAnalytics(){byId("mainView").innerHTML=`<section class="panel"><h3>Learning Analytics</h3>${analyticsHTML()}</section>${studentReportTable(db.users.filter(u=>u.role==="student"))}<section class="panel"><h3>Submissions</h3>${submissionsTable()}</section>`}
function renderSystemAnalytics(){byId("mainView").innerHTML=`<section class="panel"><h3>System Analytics</h3><p>Analytics are calculated from users, institutions, modules, submissions, grades, virtual rooms, forum, chat, and help desk.</p>${analyticsHTML()}</section><section class="panel"><h3>Activity Log</h3>${db.activity.map(a=>`<div class="card"><strong>${esc(a.type)}</strong><p>${esc(a.detail)}</p><small>${new Date(a.date).toLocaleString()} • ${esc(a.role)}</small></div>`).join("")||'<div class="empty">No activity yet.</div>'}</section>`}
function renderSettings(){byId("mainView").innerHTML=`<section class="panel"><h3>System Settings</h3><div class="field-grid two"><label>Registration<select id="setReg"><option value="true" ${db.settings.registrationOpen?'selected':''}>Open</option><option value="false" ${!db.settings.registrationOpen?'selected':''}>Closed</option></select></label><label>Speaker Language<input id="setLang" value="${esc(db.settings.speakerLang)}"></label><label>Speaker Rate<input id="setRate" type="number" min=".5" max="1.5" step=".05" value="${db.settings.speakerRate}"></label><label>Help Desk<select id="setHelp"><option value="true" ${db.settings.helpDeskOpen?'selected':''}>Open</option><option value="false" ${!db.settings.helpDeskOpen?'selected':''}>Closed</option></select></label></div><div class="actions"><button class="btn primary" onclick="saveSettings()">Save Settings</button><button class="btn soft" onclick="exportData()">Export Data</button><button class="btn soft" onclick="resetContent()">Reset Core Semester</button></div></section>`}
function saveSettings(){db.settings.registrationOpen=byId("setReg").value==="true";db.settings.speakerLang=byId("setLang").value;db.settings.speakerRate=Number(byId("setRate").value)||.92;db.settings.helpDeskOpen=byId("setHelp").value==="true";save();toast("Settings saved")}
function resetContent(){if(confirm("Reset core 16-week materials?")){db.weeks=createWeeks();save();toast("Content reset")}}

function renderForum(){byId("mainView").innerHTML=`<section class="panel"><h3>Forum</h3><label>Title<input id="forumTitle"></label><label>Message<textarea id="forumBody"></textarea></label><button class="btn primary" onclick="saveForum()">Post</button></section><section class="panel"><h3>Forum Posts</h3>${db.forum.map(p=>`<div class="card"><strong>${esc(p.title)}</strong><p>${esc(p.body)}</p><small>${esc(p.author)} • ${new Date(p.date).toLocaleString()}</small></div>`).join("")||'<div class="empty">No forum posts yet.</div>'}</section>`}
function saveForum(){const title=byId("forumTitle").value.trim(),body=byId("forumBody").value.trim();if(!title||!body)return toast("Incomplete","Add title and body.");db.forum.unshift({id:uid("FORUM"),title,body,author:session.name||session.role,role:session.role,date:new Date().toISOString()});save();renderForum()}
function renderChat(){byId("mainView").innerHTML=`<section class="panel"><h3>Chat</h3><div class="chat-box">${db.chat.map(c=>`<div class="msg ${c.role===session.role?'me':'other'}"><strong>${esc(c.author)}:</strong> ${esc(c.text)}</div>`).join("")||'<div class="msg other">No messages yet.</div>'}</div><div class="field-grid" style="margin-top:12px"><label>Message<input id="chatText"></label><button class="btn primary" onclick="sendChat()">Send</button></div></section>`}
function sendChat(){const text=byId("chatText").value.trim();if(!text)return;db.chat.push({id:uid("CHAT"),text,author:session.name||"Admin",role:session.role,date:new Date().toISOString()});save();renderChat()}
function renderHelpdesk(){byId("mainView").innerHTML=`<section class="panel"><h3>Help Desk</h3><div class="field-grid two"><label>Issue Type<select id="ticketType"><option>Technical issue</option><option>Material question</option><option>Assessment support</option><option>Account approval</option></select></label><label>Priority<select id="ticketPriority"><option>Normal</option><option>High</option><option>Urgent</option></select></label></div><label>Description<textarea id="ticketBody"></textarea></label><button class="btn primary" onclick="saveTicket()">Submit Ticket</button></section><section class="panel"><h3>Tickets</h3>${db.tickets.map(t=>`<div class="card"><strong>${esc(t.type)} • ${esc(t.priority)}</strong><p>${esc(t.body)}</p><span class="status ${t.status==='Closed'?'done':'pending'}">${esc(t.status)}</span>${session.role==="admin"?`<div class="actions"><button class="btn soft" onclick="closeTicket('${t.id}')">Close</button></div>`:""}</div>`).join("")||'<div class="empty">No tickets yet.</div>'}</section>`}
function saveTicket(){const body=byId("ticketBody").value.trim();if(!body)return toast("Incomplete","Add issue description.");db.tickets.unshift({id:uid("TICKET"),type:byId("ticketType").value,priority:byId("ticketPriority").value,body,author:session.name||"Admin",role:session.role,status:"Open",date:new Date().toISOString()});save();renderHelpdesk()}
function closeTicket(id){const t=db.tickets.find(x=>x.id===id);if(t)t.status="Closed";save();renderHelpdesk()}

function exportData(){const blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="garuda-esp-nusantara-data.json";a.click();URL.revokeObjectURL(a.href)}
function setupFx(){const c=byId("fxCanvas");if(!c)return;const ctx=c.getContext("2d");const resize=()=>{c.width=c.offsetWidth*devicePixelRatio;c.height=c.offsetHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)};resize();const pts=Array.from({length:52},()=>({x:Math.random()*c.offsetWidth,y:Math.random()*c.offsetHeight,r:Math.random()*2+1,vx:(Math.random()-.5)*.22,vy:(Math.random()-.5)*.22,a:Math.random()*.45+.18}));function draw(){ctx.clearRect(0,0,c.offsetWidth,c.offsetHeight);pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>c.offsetWidth)p.vx*=-1;if(p.y<0||p.y>c.offsetHeight)p.vy*=-1;ctx.beginPath();ctx.fillStyle=`rgba(247,217,131,${p.a})`;ctx.shadowBlur=12;ctx.shadowColor="rgba(247,217,131,.8)";ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill()});requestAnimationFrame(draw)}draw();window.addEventListener("resize",resize,{passive:true})}

Object.assign(window,{navigate,logout,closeModal,speak,stopSpeak,recordSpeech,selectWeek,openWeek,markWeek,takeQuiz,gradeQuiz,submitAssignment,saveSubmission,loadEditWeek,saveEditWeek,saveTask,openReview,saveGrade,saveRoom,joinRoom,addInstitution,mapUser,setLecturer,deleteUser,saveSettings,resetContent,saveForum,sendChat,saveTicket,closeTicket,exportData});


// ===== FINAL IMPLEMENTATION OVERRIDE: approved course/material screens =====
Object.assign(navs,{
  student:[
    ["dashboard","⌂","Dashboard"],["courses","▣","My Courses"],["materials","▤","Materials Library"],["class","♙","My Class"],["assignments","□","Assessment"],["gradebook","◈","Gradebook"],["messages","✉","Messages"],["calendar","▦","Calendar"],["discussion","☏","Discussion Forum"],["reports","▥","Reports & Analytics"],["settings","⚙","Settings"]
  ],
  lecturer:[
    ["dashboard","⌂","Dashboard"],["courses","▣","My Courses"],["materials","▤","Materials Library"],["class","♙","My Class"],["assignments","□","Assessment"],["gradebook","◈","Gradebook"],["messages","✉","Messages"],["calendar","▦","Calendar"],["discussion","☏","Discussion Forum"],["reports","▥","Reports & Analytics"],["settings","⚙","Settings"]
  ],
  admin:[
    ["dashboard","⌂","Dashboard"],["users","♚","Users & Institutions"],["courses","▣","My Courses"],["materials","▤","Materials Library"],["builder","▧","Content Builder"],["assignments","□","Assessment"],["online","▭","Online Room"],["analytics","▥","System Analytics"],["settings","⚙","Settings"]
  ]
});

function navigate(page){
  currentPage=page;
  document.querySelectorAll(".side-nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  const item=(navs[session.role]||[]).find(n=>n[0]===page);
  byId("pageTitle").textContent=item?item[2]:page.replace(/\b\w/g,m=>m.toUpperCase());
  byId("roleKicker").textContent=`${session.role.toUpperCase()} WORKSPACE`;
  const route={
    dashboard:session.role==="student"?renderStudentDashboard:session.role==="lecturer"?renderLecturerDashboard:renderAdminDashboard,
    courses:renderCourseDashboard,
    materials:renderMaterials,
    class:renderClass,
    assignments:session.role==="student"?renderAssignments:renderTasks,
    gradebook:session.role==="student"?renderPortfolio:renderReview,
    messages:renderChat,
    calendar:renderCalendar,
    discussion:renderForum,
    reports:session.role==="student"?renderPortfolio:session.role==="admin"?renderSystemAnalytics:renderLecturerAnalytics,
    online:renderOnline,
    voice:renderVoice,
    portfolio:renderPortfolio,
    builder:renderBuilder,
    tasks:renderTasks,
    review:renderReview,
    analytics:session.role==="admin"?renderSystemAnalytics:renderLecturerAnalytics,
    users:renderUsers,
    settings:renderSettings,
    forum:renderForum,
    chat:renderChat,
    helpdesk:renderHelpdesk
  };
  (route[page]||renderCourseDashboard)();
}

function renderUserCard(){
  const u=currentUser();
  if(session.role==="admin"){
    byId("userCard").innerHTML=`<strong>`;
  }else{
    byId("userCard").innerHTML=`<strong>Role Access Portal</strong><span>${esc(session.role)}</span><small>${esc(u?.name||"User")}<br>${esc(disciplines.find(d=>d.id===u?.disciplineId)?.title||u?.expertise||"ESP Professional Learning")}</small>`;
  }
}

function renderCourseDashboard(){
  const w=db.weeks.find(x=>x.week===selectedWeek)||db.weeks[0];
  const d=disciplines.find(x=>x.id===w.disciplineId)||disciplines[0];
  byId("mainView").innerHTML=`
  <section class="course-page">
    <div class="course-breadcrumb"><span>${d.icon}</span><strong>${esc(d.title)}</strong><span>/</span><span>Week ${w.week} - ${esc(w.title)}</span></div>
    <div class="course-grid">
      <article class="panel course-hero-card">
        <img src="assets/course-thumb-bali.png" alt="Course image">
        <div>
          <span class="week-label">Week ${w.week}</span>
          <h3>Path ${((w.week-1)%6)+1}: ${esc(coursePathName(w.week))}</h3>
          <p><strong>${esc(d.title)}</strong></p>
          <div class="info-pill-grid">
            <div class="info-pill"><span>⌖</span><div><small>Province Focus</small><strong>${esc(w.province)}</strong></div></div>
            <div class="info-pill"><span>✤</span><div><small>Local Wisdom</small><strong>${esc(w.heritage)}</strong></div></div>
          </div>
          <p>${esc(w.overview)}</p>
        </div>
      </article>
      <article class="panel"><div class="course-card-title">★ Professional Overview</div><p>${esc(w.overview)}</p></article>
      <article class="panel"><div class="course-card-title">◎ Learning Outcomes</div><p>By the end of this module, students will be able to:</p><ul class="check-list">${w.outcomes.slice(0,4).map(o=>`<li>${esc(o)}</li>`).join("")}</ul></article>
    </div>

    <div class="course-sessions">
      <article class="panel"><div class="course-card-title">▤ Core Reading Text</div><div class="card"><strong>${esc(w.heritage)} — Excerpt</strong><p>${esc(w.reading.slice(0,420))}...</p></div>${audioVisual(w.reading)}</article>
      <article class="panel"><div class="course-card-title">🎧 Listening Script</div><p>${esc(w.listening.slice(0,460))}...</p>${audioVisual(w.listening)}</article>
      <article class="panel"><div class="course-card-title">✎ Writing Task</div><p><strong>Task:</strong> ${esc(w.writing.slice(0,320))}</p><ul class="check-list"><li>Use polite and professional language.</li><li>Include local-wisdom meaning and discipline-specific terminology.</li><li>Close with a reflective professional statement.</li></ul><div class="actions"><button class="btn soft" onclick="submitAssignment(${w.week})">Open Writing Editor</button></div></article>
    </div>

    <div class="course-sessions">
      <article class="panel"><div class="course-card-title">🗣 Speaking Task</div><p>${esc(w.speaking.slice(0,420))}...</p>${audioVisual(w.speaking)}<label>Self-Reflection<textarea id="courseReflection" maxlength="300" placeholder="What expressions did you use? How did you show professionalism?"></textarea></label></article>
      <article class="panel"><div class="course-card-title">▧ Vocabulary Bank & Grammar Focus</div><div class="small-table">${vocabTable(w)}</div><p><strong>Grammar:</strong> ${esc(w.grammar)}</p><div class="actions"><button class="btn soft" onclick="openVocab(${w.week})">View All Vocabulary</button></div></article>
      <article class="panel"><div class="course-card-title">▣ Assessment Rubric</div><div class="small-table">${rubricTable(w)}</div><div class="actions"><button class="btn primary" onclick="takeQuiz(${w.week})">Start Quiz</button><button class="btn soft" onclick="submitAssignment(${w.week})">Submit Assignment</button></div></article>
    </div>
  </section>`;
}

function coursePathName(week){
  const names=["Professional Communication","Reading & Vocabulary","ESP Writing","Speaking & Presentation","Digital / Online Mode","Intercultural Project"];
  return names[(Number(week)-1)%6];
}
function audioVisual(text){
  return `<div class="audio-line"><div class="wave" aria-hidden="true"></div></div>${controls(text)}`;
}
function vocabTable(w){
  return `<table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>${w.vocab.slice(0,5).map(v=>`<tr><td>${esc(v[0])}</td><td>${esc(v[1])}</td></tr>`).join("")}</tbody></table>`;
}
function rubricTable(w){
  return `<table><thead><tr><th>Criteria</th><th>Max Score</th></tr></thead><tbody>${w.rubric.map(r=>`<tr><td>${esc(r[0])}</td><td>${r[1]}</td></tr>`).join("")}<tr><td><strong>Total Score</strong></td><td><strong>100</strong></td></tr></tbody></table>`;
}
function openVocab(n){
  const w=db.weeks.find(x=>x.week===Number(n))||db.weeks[0];
  openModal(`<h2>Week ${w.week} Vocabulary Bank</h2><div class="table-wrap">${vocabTable(w)}</div>${controls(w.vocab.map(v=>v[0]+": "+v[1]).join(". "))}`);
}

function renderMaterials(){
  const w=db.weeks.find(x=>x.week===selectedWeek)||db.weeks[0];
  const d=disciplines.find(x=>x.id===w.disciplineId)||disciplines[0];
  byId("mainView").innerHTML=`
  <section class="materials-screen">
    <div class="materials-top">
      <h3>Semester ESP Materials</h3>
      <div class="materials-top-row">
        <div class="materials-select"><select onchange="setDisciplineFromSelect(this.value)">${disciplines.map(x=>`<option value="${x.id}" ${x.id===d.id?'selected':''}>Semester 1 - ${esc(x.title)}</option>`).join("")}</select></div>
        <div class="materials-progress"><strong>Overall Semester Progress</strong><div class="progress"><span style="width:${Math.round((selectedWeek/db.weeks.length)*100)}%"></span></div><span>${Math.round((selectedWeek/db.weeks.length)*100)}%</span></div>
        <div class="materials-date"><strong>16 Weeks</strong><span>Aug 5 – Nov 22, 2026</span></div>
      </div>
    </div>
    <div class="material-week-tabs">
      ${db.weeks.map(x=>`<button class="${x.week===selectedWeek?'active':''}" onclick="selectWeek(${x.week})">WEEK<br>${x.week}</button>`).join("")}
      <button onclick="selectWeek(Math.max(1,selectedWeek-1))">‹</button><button onclick="selectWeek(Math.min(16,selectedWeek+1))">›</button>
    </div>
    <div class="materials-body">
      <div class="fit-module">
        <aside class="fit-left">
          <h4>Week ${w.week} Overview</h4><p class="one-screen-note">Get started with this week's theme</p>
          <div class="step-list">
            ${["Week Theme & Context","Learning Outcomes","Session 1: Reading","Session 2: Listening","Session 3: Speaking","Session 4: Writing","Vocabulary & Grammar","Assessment","Assignment","Resources"].map((s,i)=>`<button class="${i===0?'active':''}" onclick="scrollToMaterialSection('${sectionId(s)}')"><span>${esc(s)}</span><span class="status-dot"></span></button>`).join("")}
          </div>
          <div class="fit-status"><div class="ring" style="--pct:${Math.round((selectedWeek/db.weeks.length)*100)}%"><span>${Math.round((selectedWeek/db.weeks.length)*100)}%</span></div><p><strong>Week Status</strong></p><ul class="compact-list"><li>3 of 10 tasks completed</li><li>${myWeekSubmission(w.week)?1:0} assignment submitted</li><li>${w.resources.length} resources available</li></ul></div>
        </aside>
        <main class="fit-main">
          <article class="fit-hero" id="week-theme-context">
            <div class="fit-hero-head">
              <div class="big-week"><small>Week</small><strong>${w.week}</strong></div>
              <div><h3>${esc(coursePathName(w.week))} in ${esc(d.title.replace(" English",""))}</h3><p>${esc(w.overview)}</p></div>
            </div>
            <div class="focus-strip">
              <div><small>Province Focus</small><strong>${esc(w.province)}</strong></div>
              <div><small>Local Wisdom</small><strong>${esc(w.heritage)}</strong></div>
              <div><small>Essential Question</small><strong>${esc(w.essential)}</strong></div>
            </div>
          </article>
          <div class="outcomes-competencies">
            <article class="material-card-mini" id="learning-outcomes"><h4>Learning Outcomes</h4><ul class="compact-list">${w.outcomes.slice(0,4).map(o=>`<li>${esc(o)}</li>`).join("")}</ul></article>
            <article class="material-card-mini"><h4>Key ESP Competencies</h4><div class="grid cols-2"><span>Professional Interaction</span><span>Information Exchange</span><span>Customer / Stakeholder Language</span><span>Cultural Awareness</span></div></article>
          </div>
          <div class="lesson-cards">
            ${lessonMini("Session 1: Reading","Hotel welcome brochure and service information",w.reading,"reading",w.week)}
            ${lessonMini("Session 2: Listening","Guest interaction and service announcement",w.listening,"listening",w.week)}
            ${lessonMini("Session 3: Speaking","Role-play and professional interaction",w.speaking,"speaking",w.week)}
            ${lessonMini("Session 4: Writing","Professional email and response writing",w.writing,"writing",w.week)}
          </div>
          <div class="lower-grid">
            <article class="material-card-mini" id="vocabulary-grammar"><h4>Integrated Vocabulary & Grammar</h4><p><strong>Key Vocabulary</strong> ${w.vocab.length} terms</p><p><strong>Grammar Focus</strong> ${esc(w.grammar.slice(0,80))}...</p><button class="btn soft" onclick="openVocab(${w.week})">View Notes</button></article>
            <article class="material-card-mini" id="assessment"><h4>Assessment</h4><p><strong>Quiz:</strong> Week ${w.week} understanding</p><p>15 items • 20 min</p><button class="btn gold" onclick="takeQuiz(${w.week})">Start Quiz</button></article>
            <article class="material-card-mini" id="assignment"><h4>Assignment</h4><p>${esc(w.assignment.slice(0,120))}...</p><button class="btn soft" onclick="submitAssignment(${w.week})">View Assignment</button></article>
          </div>
          <article class="material-card-mini" id="resources"><h4>Resources</h4>${w.resources.map((r,i)=>`<div class="resource-row"><span>${esc(r)}</span><button class="btn soft" onclick="openResource(${w.week},${i})">Open</button></div>`).join("")}</article>
        </main>
      </div>
    </div>
  </section>`;
}
function sectionId(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}
function scrollToMaterialSection(id){const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:"smooth",block:"center"});}
function setDisciplineFromSelect(id){const w=db.weeks.find(x=>x.disciplineId===id)||db.weeks[0];selectedWeek=w.week;renderMaterials();}
function myWeekSubmission(n){return db.submissions.some(s=>s.userId===session.id&&s.week===n)}
function lessonMini(title,subtitle,text,type,week){
  return `<article class="lesson-card" id="${type}"><h4>${esc(title)}</h4><p>${esc(subtitle)}</p><div class="file-line">${type==="listening"?"Check-in Dialogue.mp3":type==="speaking"?"Role-play Scenario.pdf":type==="writing"?"Email Reply Sample.pdf":"Week Handout.pdf"}</div><div class="material-actions">${controls(text)}<button class="audio-btn" onclick="openSessionDetail(${week},'${type}')">Open</button></div></article>`;
}
function openSessionDetail(week,type){
  const w=db.weeks.find(x=>x.week===Number(week))||db.weeks[0];
  const map={reading:["Core Reading Text",w.reading],listening:["Listening Script",w.listening],speaking:["Speaking Task",w.speaking],writing:["Writing Task",w.writing]};
  const [title,body]=map[type]||map.reading;
  openModal(`<h2>Week ${w.week}: ${esc(title)}</h2><p>${esc(body)}</p>${controls(body)}${type==="speaking"?'<div id="speechOut"></div>':''}`);
}
function openResource(week,i){
  const w=db.weeks.find(x=>x.week===Number(week))||db.weeks[0];
  const name=w.resources[i]||"Resource";
  openModal(`<h2>${esc(name)}</h2><p>This resource is integrated into Week ${w.week}: ${esc(w.title)}.</p><ul class="check-list"><li>Professional ESP context: ${esc(w.discipline)}</li><li>Local wisdom: ${esc(w.heritage)}</li><li>Province focus: ${esc(w.province)}</li><li>Related assignment: ${esc(w.assignment)}</li></ul><div class="actions"><button class="btn primary" onclick="openWeek(${w.week})">Open Full Module</button>${controls(name+". "+w.overview)}</div>`);
}

function renderClass(){
  const students=db.users.filter(u=>u.role==="student");
  byId("mainView").innerHTML=`<section class="panel"><h3>My Class</h3><p>Class roster, institution mapping, progress, submissions, and attendance are integrated here.</p>${studentReportTable(students)}</section>`;
}
function renderCalendar(){
  byId("mainView").innerHTML=`<section class="panel"><h3>Semester Calendar</h3><div class="grid cols-4">${db.weeks.map(w=>`<article class="card"><span class="tag red">Week ${w.week}</span><h3>${esc(w.title)}</h3><p>${esc(w.province)} • ${esc(w.heritage)}</p><button class="btn soft" onclick="selectWeek(${w.week});navigate('materials')">Open Materials</button></article>`).join("")}</div></section>`;
}


// ===== FINAL V3 COURSE SELF-ENROLMENT + DEEP MATERIALS IMPLEMENTATION =====
let selectedCourseId = localStorage.getItem("gesn.selectedCourseId") || "tourism";

const courseWeekThemes = {
  tourism:[
    ["Professional Hospitality Identity","Bali","Tri Hita Karana","frontline hospitality communication"],
    ["Guest Welcome and Hotel Check-in","Bali","Balinese hospitality etiquette","hotel reception and guest service"],
    ["Destination Briefing and Visitor Safety","Yogyakarta","Kraton and heritage etiquette","tour information and safety briefing"],
    ["Cultural Object Interpretation","Central Java","Batik and Borobudur heritage","heritage explanation"],
    ["Complaint Handling and Service Recovery","East Java","Bromo-Tengger hospitality","guest problem solving"],
    ["Food, Culinary, and Local Etiquette","West Sumatra","Rumah Gadang culinary values","restaurant and culinary explanation"],
    ["Eco-tourism Guiding","Southwest Papua","Raja Ampat conservation","eco-tourism interpretation"],
    ["Itinerary Planning and Travel Advice","Lombok","Sasak local tourism","travel planning"],
    ["Tour Commentary and Storytelling","South Sulawesi","Toraja heritage","heritage storytelling"],
    ["Tourism Marketing and Digital Brochure","Jakarta","Betawi urban culture","digital tourism promotion"],
    ["Intercultural Guest Relations","Maluku","Spice-route encounter","intercultural visitor care"],
    ["Sustainable Tourism Policy Brief","Bali","community-based tourism","tourism ethics"],
    ["Virtual Tour Facilitation","North Sulawesi","Bunaken marine tourism","online tour delivery"],
    ["Tourism Risk Communication","East Nusa Tenggara","Komodo visitor safety","risk and safety explanation"],
    ["Capstone Tourism Portfolio","Student-selected province","local destination project","professional portfolio"],
    ["Final Tourism Showcase","Nusantara","Indonesian hospitality futures","public presentation"]
  ],
  business:[
    ["Business Identity and Local Wisdom Branding","Aceh","Gayo coffee entrepreneurship","brand identity"],
    ["Product Description and Customer Inquiry","South Sumatra","Songket craft","product information"],
    ["Buyer-Seller Meeting","Yogyakarta","Batik creative economy","business meeting"],
    ["Quotation and Offer Writing","Jakarta","urban creative market","business correspondence"],
    ["Negotiation and Agreement","West Nusa Tenggara","Sasak weaving enterprise","negotiation"],
    ["Digital Marketing Caption","Bali","creative tourism product","online promotion"],
    ["Pitching Local Products","Gorontalo","Karawo embroidery","product pitch"],
    ["Market Research Summary","West Java","local food innovation","market description"],
    ["Customer Service and Complaint Response","Central Java","batik retail service","service recovery"],
    ["Social Enterprise Report","Kalimantan","community craft economy","social business"],
    ["Export Inquiry and Trade Terms","Riau Islands","coastal trade culture","export communication"],
    ["Invoice, Order, and Delivery Communication","Jakarta","SME logistics","transactional English"],
    ["Online Product Launch","Aceh","coffee launch","digital selling"],
    ["Investor Pitch Deck","Yogyakarta","heritage product innovation","investment communication"],
    ["Capstone Business Portfolio","Student-selected product","local product project","portfolio"],
    ["Final Business Showcase","Nusantara","creative economy futures","public pitch"]
  ],
  technology:[
    ["Engineering Identity and Community-Based Innovation","East Kalimantan","IKN and sustainable design","innovation identity"],
    ["Technical Description of a Product","West Java","digital learning device","technical explanation"],
    ["Process Explanation","Riau Islands","coastal sensor system","process description"],
    ["User Manual and Instruction","Banten","community technology","user guidance"],
    ["Troubleshooting Communication","East Java","campus network support","technical support"],
    ["Progress Meeting and Stand-up Report","Jakarta","software teamwork","project reporting"],
    ["Specification Reading","West Java","engineering prototype","technical reading"],
    ["Incident Report Writing","Central Java","laboratory safety","incident reporting"],
    ["Data Explanation and Chart Summary","Yogyakarta","education technology data","data communication"],
    ["Innovation Demo","East Kalimantan","green technology","prototype presentation"],
    ["Remote Collaboration","North Kalimantan","border communication technology","online teamwork"],
    ["Ethical Technology Design","Papua","inclusive digital access","ethics and inclusion"],
    ["Technical Proposal","Riau","river monitoring system","proposal writing"],
    ["Public Technology Briefing","South Sulawesi","marine safety device","public explanation"],
    ["Capstone Technology Portfolio","Student-selected innovation","local technology project","portfolio"],
    ["Final Technology Showcase","Nusantara","technology for community futures","public demo"]
  ],
  health:[
    ["Health Communication Identity","Central Java","community health values","care identity"],
    ["Patient Greeting and Symptom Questions","West Sumatra","empathetic service culture","patient interview"],
    ["Medication Instruction","Lampung","community pharmacy context","instruction giving"],
    ["Health Brochure Reading","South Papua","sago nutrition and public health","health literacy"],
    ["Case Note Writing","Central Java","clinical documentation","case writing"],
    ["Public Health Announcement","Bali","tourist health safety","public communication"],
    ["Telehealth Opening and Closing","Jakarta","urban health access","online consultation"],
    ["Empathy and Clarification","West Java","family-centered communication","patient support"],
    ["Health Campaign Presentation","East Java","community hygiene campaign","health promotion"],
    ["Patient Safety Explanation","Yogyakarta","clinic safety procedure","safety briefing"],
    ["Cross-cultural Care","Maluku","island community care","intercultural care"],
    ["Nutrition and Lifestyle Advice","West Sumatra","traditional food and balance","advice giving"],
    ["Emergency Information","NTT","rural emergency response","urgent communication"],
    ["Health Report Summary","Central Java","community health data","report writing"],
    ["Capstone Health Portfolio","Student-selected health topic","local health project","portfolio"],
    ["Final Health Showcase","Nusantara","health communication futures","public presentation"]
  ],
  maritime:[
    ["Maritime ESP Identity","South Sulawesi","Pinisi heritage","professional identity"],
    ["Vessel Safety Briefing","South Sulawesi","Pinisi voyage safety","safety instruction"],
    ["Weather and Route Information","Maluku","spice-route navigation","route explanation"],
    ["Fisheries Operation Communication","Southeast Sulawesi","Wakatobi fisheries","field coordination"],
    ["Marine Conservation Notice","North Sulawesi","Bunaken reef conservation","environmental notice"],
    ["Eco-tourism Boat Guiding","Papua","coastal biodiversity","visitor briefing"],
    ["Incident Log Writing","Maluku","harbour safety","incident reporting"],
    ["Environmental Report","West Papua","coastal ecosystem","report writing"],
    ["Sustainability Campaign","South Sulawesi","marine community values","advocacy"],
    ["Port and Logistics Communication","Riau Islands","coastal trade","logistics"],
    ["Emergency Radio Communication","North Maluku","island navigation","radio protocol"],
    ["Community-based Marine Management","Bali","subak-sea sustainability analogy","policy explanation"],
    ["Digital Map Explanation","Papua","marine routes","map briefing"],
    ["Marine Project Proposal","Southeast Sulawesi","reef awareness","proposal"],
    ["Capstone Maritime Portfolio","Student-selected marine issue","local marine project","portfolio"],
    ["Final Maritime Showcase","Nusantara","sustainable ocean futures","public presentation"]
  ],
  education:[
    ["Educational Communication Identity","West Sumatra","Rumah Gadang deliberation","teacher identity"],
    ["Classroom Instructions","West Java","Angklung collaboration","instruction giving"],
    ["Moderating Discussion","Kalimantan","Rumah Betang community dialogue","moderation"],
    ["Lesson Announcement Writing","Banten","local heritage learning","announcement"],
    ["Microteaching with Local Wisdom","Yogyakarta","Kraton etiquette","microteaching"],
    ["Feedback and Assessment Language","Central Java","wayang reflective values","feedback"],
    ["Academic Reading Summary","East Java","education innovation","summary writing"],
    ["Public Speaking for Community Training","West Sumatra","deliberation culture","training speech"],
    ["Online Class Facilitation","Jakarta","digital classroom culture","virtual teaching"],
    ["Parent/Community Communication","Bali","community harmony","school communication"],
    ["Meeting Minutes","Kalimantan","community education meeting","minutes writing"],
    ["Intercultural Dialogue","Maluku","plural island communities","dialogue"],
    ["Research Presentation","Yogyakarta","local wisdom pedagogy","academic presentation"],
    ["Educational Campaign Proposal","West Java","collaborative arts education","proposal"],
    ["Capstone Education Portfolio","Student-selected education topic","local pedagogy project","portfolio"],
    ["Final Education Showcase","Nusantara","education communication futures","public presentation"]
  ]
};

function ensureUserCourseState(user){
  if(!user || user.role==="admin") return user;
  user.enrollments ||= [];
  user.courseProgress ||= {};
  if(user.disciplineId && !user.enrollments.includes(user.disciplineId)){
    user.enrollments.push(user.disciplineId);
  }
  user.enrollments.forEach(id=>{
    user.courseProgress[id] ||= {weeks:[], quiz:{}, submissions:[]};
  });
  return user;
}
function isStudent(){return session?.role==="student"}
function isEnrolled(courseId){
  if(!isStudent()) return true;
  const u=ensureUserCourseState(currentUser());
  return !!u?.enrollments?.includes(courseId);
}
function enrollCourse(courseId){
  const u=ensureUserCourseState(currentUser());
  if(!u) return toast("Login required","Please login as a student.");
  if(!u.enrollments.includes(courseId)) u.enrollments.push(courseId);
  u.courseProgress[courseId] ||= {weeks:[],quiz:{},submissions:[]};
  selectedCourseId=courseId;
  localStorage.setItem("gesn.selectedCourseId",selectedCourseId);
  save();
  toast("Self-enrolment complete",`${courseTitle(courseId)} has been added to My Courses.`);
  renderCourseDashboard();
}
function enterCourse(courseId){
  selectedCourseId=courseId;
  localStorage.setItem("gesn.selectedCourseId",selectedCourseId);
  if(isStudent() && !isEnrolled(courseId)){
    renderCourseDashboard();
    toast("Self-enrolment required","Please select Enrol Me before entering this course.");
    return;
  }
  renderCourseDashboard();
}
function courseTitle(id){return (disciplines.find(d=>d.id===id)||disciplines[0]).title}
function courseMaterial(courseId, weekNo){
  const d=disciplines.find(x=>x.id===courseId)||disciplines[0];
  const list=courseWeekThemes[courseId]||courseWeekThemes.tourism;
  const t=list[(Number(weekNo)-1)%16];
  const path=coursePathName(weekNo);
  return {
    week:Number(weekNo),
    title:t[0], province:t[1], heritage:t[2], professional:t[3],
    disciplineId:courseId, discipline:d.title, icon:d.icon,
    path,
    overview:`This module develops ${path.toLowerCase()} for ${d.title}. Students work with ${t[2]} from ${t[1]} as an authentic professional context and transform it into discipline-specific, ethical, and audience-aware English communication.`,
    essential:`How can professionals in ${d.title.toLowerCase()} communicate ${t[2]} from ${t[1]} clearly, ethically, and effectively for real workplace needs?`,
    outcomes:[
      `Explain ${t[2]} in accurate and respectful professional English.`,
      `Apply ${path.toLowerCase()} in ${d.title}.`,
      `Use discipline-specific vocabulary and polite expressions.`,
      `Complete reading, listening, speaking, writing, and assessment evidence.`,
      `Reflect on intelligibility, professional tone, and intercultural sensitivity.`
    ],
    competencies:["Professional Interaction","Information Exchange","Customer / Stakeholder Language","Cultural Awareness"],
    reading:`${t[2]} from ${t[1]} provides a meaningful professional context for ${d.title}. In this module, students learn that ESP communication is not limited to translating local terms into English. It requires accurate explanation, audience awareness, professional tone, and ethical representation. A strong explanation begins with a clear purpose, introduces the local context, connects the cultural value to a workplace situation, and closes with a recommendation or invitation for further dialogue. This approach helps students communicate Indonesian local wisdom as knowledge that is relevant to international professional settings.`,
    listening:`Good morning. Today we will discuss how ${t[2]} from ${t[1]} can support professional communication in ${d.title}. First, identify the audience and the purpose of the communication. Next, explain the cultural value in simple and accurate English. Then connect the value with the professional task, such as greeting a guest, guiding a client, explaining a product, giving instructions, or presenting a project. Finally, close the interaction politely and invite questions. Remember that clarity, respect, and professional accuracy are more important than imitating a native-speaker accent.`,
    speaking:`Role-play: Student A is a professional working in ${d.title}. Student B is an international audience member. Conduct a three-minute interaction about ${t[2]} from ${t[1]}. Include greeting, purpose, two key facts, two ESP terms, one question, one clarification, and a respectful closing. Record your performance and evaluate clarity, pronunciation, fluency, and cultural sensitivity.`,
    writing:`Write a 180–220 word professional text for ${d.title}. Use ${t[2]} from ${t[1]} as the context. Choose a genre: email, service note, product description, visitor briefing, health message, technical instruction, sustainability report, lesson announcement, or project proposal. Include purpose, local-wisdom explanation, ESP vocabulary, audience-oriented recommendation, and professional closing.`,
    vocab:[
      ["local wisdom","community-based values, knowledge, or practices"],
      ["professional register","language appropriate for workplace or academic purposes"],
      ["intercultural sensitivity","respectful awareness when communicating across cultures"],
      ["audience awareness","adjusting language for listener needs and background"],
      ["ethical representation","presenting culture accurately and respectfully"],
      ["clarification","a polite explanation that makes meaning clearer"],
      ["service encounter","a communication event between provider and user"],
      ["reflection","reviewing performance to improve future action"]
    ],
    grammar:`Polite expressions and modal verbs: may, could, would, should, and must. Sequencing: first, next, after that, finally. Explanation language: which means, because, therefore, as a result, and this reflects.`,
    rubric:[["ESP terminology and accuracy",20],["Clarity and organization",20],["Professional tone and politeness",20],["Intercultural sensitivity",20],["Completion, delivery, and reflection",20]],
    assignment:`Submit one written ESP text and one speaking recording based on ${t[2]} from ${t[1]}. Include a 100-word reflection explaining how your work connects local wisdom with professional communication.`,
    resources:[`Week ${weekNo} slides`,`Professional phrase bank`,`Reading handout`,`Listening transcript`,`Speaking scenario`,`Writing template`,`Assessment rubric`,`Reflection checklist`],
    quiz:[
      [`What is the main professional field in this module?`,d.title,"General grammar only","Native accent imitation only","Random conversation"],
      ["A professional local-wisdom explanation should be...","clear, accurate, respectful, and audience-aware","informal and exaggerated","translated word by word only","without context"],
      ["The speaking task requires students to...","perform, record, and reflect on a professional interaction","memorize a list only","avoid local context","speak without structure"]
    ]
  };
}
function getCourseProgress(courseId){
  const u=ensureUserCourseState(currentUser());
  if(!u || u.role==="admin") return {weeks:[],quiz:{},submissions:[]};
  u.courseProgress ||= {};
  u.courseProgress[courseId] ||= {weeks:[],quiz:{},submissions:[]};
  return u.courseProgress[courseId];
}
function courseCompletion(courseId){
  const p=getCourseProgress(courseId);
  return Math.round(((p.weeks||[]).length/16)*100);
}
function courseQuizAvg(courseId){
  const vals=Object.values(getCourseProgress(courseId).quiz||{});
  return vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):0;
}
function courseSubmissions(courseId){
  return db.submissions.filter(s=>s.userId===session?.id && (s.courseId||selectedCourseId)===courseId);
}
function renderCourseDashboard(){
  selectedCourseId = selectedCourseId || (currentUser()?.disciplineId || "tourism");
  const d=disciplines.find(x=>x.id===selectedCourseId)||disciplines[0];
  const m=courseMaterial(selectedCourseId,selectedWeek||1);
  const enrolled=isEnrolled(selectedCourseId);
  byId("mainView").innerHTML=`
    <section class="course-shell">
      <div class="course-discipline-tabs">
        ${disciplines.map(x=>`<button class="${x.id===selectedCourseId?'active':''}" onclick="enterCourse('${x.id}')">${x.icon} ${esc(x.title.replace(" English",""))}</button>`).join("")}
      </div>
      <div class="enrol-panel">
        <div class="enrol-summary">
          <span class="${enrolled?'enrolled-badge':'locked-badge'}">${enrolled?'✓ Enrolled':'Self-enrolment required'}</span>
          <h3>${d.icon} ${esc(d.title)}</h3>
          <p>${esc(d.focus)}</p>
          <p><strong>Province Links:</strong> ${esc(d.province)}</p>
          <div class="actions">
            ${isStudent() && !enrolled?`<button class="btn primary" onclick="enrollCourse('${d.id}')">Enrol Me / Self-Enrol</button>`:`<button class="btn primary" onclick="selectedWeek=1;navigate('materials')">Enter Semester Materials</button>`}
            <button class="btn soft" onclick="previewCourse('${d.id}')">Preview Course Details</button>
          </div>
        </div>
        <div class="panel">
          <h3>Course Completion Report</h3>
          <div class="grid cols-3">
            ${metric("Progress",courseCompletion(d.id)+"%","Weeks completed")}
            ${metric("Quiz Avg.",courseQuizAvg(d.id)+"%","Course quizzes")}
            ${metric("Submissions",courseSubmissions(d.id).length,"Course evidence")}
          </div>
        </div>
      </div>
      <div class="course-catalog">
        ${disciplines.map(x=>courseCatalogCard(x)).join("")}
      </div>
      ${enrolled || !isStudent()?courseDetailPreview(m):lockedCoursePreview(d)}
    </section>`;
}
function courseCatalogCard(d){
  const enrolled=isEnrolled(d.id);
  return `<article class="course-option">
    <div class="course-icon">${d.icon}</div>
    <h3>${esc(d.title)}</h3>
    <p>${esc(d.focus)}</p>
    <div class="tag-row"><span class="tag red">16 weeks</span><span class="tag">6 skills</span><span class="tag">${esc(d.province.split("/")[0].trim())}</span></div>
    <div class="actions">
      ${isStudent() && !enrolled?`<button class="btn primary" onclick="enrollCourse('${d.id}')">Enrol Me</button>`:`<button class="btn primary" onclick="enterCourse('${d.id}')">Enter Course</button>`}
      <button class="btn soft" onclick="previewCourse('${d.id}')">Preview</button>
    </div>
  </article>`;
}
function lockedCoursePreview(d){
  return `<section class="panel"><h3>Self-Enrolment Required</h3><p>This course is available for open self-enrolment. Select <strong>Enrol Me</strong> to unlock the full 16-week semester materials, tasks, assessment, reports, and resources.</p><button class="btn primary" onclick="enrollCourse('${d.id}')">Enrol Me / Self-Enrol</button></section>`;
}
function courseDetailPreview(m){
  return `<section class="course-one-screen">
    <article class="panel course-hero-card">
      <img src="assets/course-thumb-bali.png" alt="Course thumbnail">
      <div><span class="week-label">Week ${m.week}</span><h3>${esc(m.path)}</h3><p>${esc(m.overview)}</p></div>
    </article>
    <article class="panel"><div class="course-card-title">★ Professional Overview</div><p>${esc(m.overview)}</p><div class="course-week-mini">${Array.from({length:16},(_,i)=>`<button class="${i+1===selectedWeek?'active':''}" onclick="selectedWeek=${i+1};renderCourseDashboard()">W${i+1}</button>`).join("")}</div></article>
    <article class="panel"><div class="course-card-title">◎ Learning Outcomes</div><ul class="check-list">${m.outcomes.map(o=>`<li>${esc(o)}</li>`).join("")}</ul></article>
  </section>`;
}
function previewCourse(courseId){
  const d=disciplines.find(x=>x.id===courseId)||disciplines[0];
  const weeks=courseWeekThemes[courseId]||courseWeekThemes.tourism;
  openModal(`<h2>${d.icon} ${esc(d.title)}</h2><p>${esc(d.focus)}</p><p><strong>Province Links:</strong> ${esc(d.province)}</p><h3>16-Week Course Map</h3><div class="table-wrap"><table><thead><tr><th>Week</th><th>Theme</th><th>Province</th><th>Local Wisdom</th></tr></thead><tbody>${weeks.map((w,i)=>`<tr><td>Week ${i+1}</td><td>${esc(w[0])}</td><td>${esc(w[1])}</td><td>${esc(w[2])}</td></tr>`).join("")}</tbody></table></div><div class="actions">${isStudent()&&!isEnrolled(courseId)?`<button class="btn primary" onclick="closeModal();enrollCourse('${courseId}')">Enrol Me</button>`:`<button class="btn primary" onclick="closeModal();selectedCourseId='${courseId}';selectedWeek=1;navigate('materials')">Open Materials</button>`}</div>`);
}
function renderMaterials(){
  selectedCourseId = selectedCourseId || (currentUser()?.disciplineId || "tourism");
  const d=disciplines.find(x=>x.id===selectedCourseId)||disciplines[0];
  const enrolled=isEnrolled(selectedCourseId);
  const m=courseMaterial(selectedCourseId,selectedWeek||1);
  if(isStudent() && !enrolled){
    byId("mainView").innerHTML=`<section class="panel"><h3>${esc(d.title)}</h3><p>You need to self-enrol before accessing the full semester materials.</p><button class="btn primary" onclick="enrollCourse('${d.id}')">Enrol Me / Self-Enrol</button></section>`;
    return;
  }
  byId("mainView").innerHTML=`
  <section class="compact-materials-screen">
    <div class="compact-materials-header">
      <div><h3>Semester ESP Materials</h3><small>Materials › Semester ESP Materials</small></div>
      <select onchange="selectedCourseId=this.value;localStorage.setItem('gesn.selectedCourseId',selectedCourseId);selectedWeek=1;renderMaterials()">${disciplines.map(x=>`<option value="${x.id}" ${x.id===selectedCourseId?'selected':''}>Semester 1 - ${esc(x.title)}</option>`).join("")}</select>
      <div><strong>16 Weeks</strong><br><small>Aug 5 – Nov 22, 2026</small></div>
    </div>
    <div class="compact-week-strip">${Array.from({length:16},(_,i)=>`<button class="${selectedWeek===i+1?'active':''}" onclick="selectedWeek=${i+1};renderMaterials()">WEEK<br>${i+1}</button>`).join("")}</div>
    <div class="material-one-fit">
      <aside class="material-side-index">
        <h4>Week ${m.week} Overview</h4><small>Complete this week's academic tasks</small>
        <div style="margin-top:10px">
          ${["Week Theme & Context","Learning Outcomes","Session 1: Reading","Session 2: Listening","Session 3: Speaking","Session 4: Writing","Vocabulary & Grammar","Assessment","Assignment","Resources"].map((s,i)=>`<button class="${i===0?'active':''}" onclick="scrollToMaterialSection('${sectionId(s)}')"><span>${esc(s)}</span><span class="status-dot"></span></button>`).join("")}
        </div>
        <div class="side-status">
          <strong>Week Status</strong>
          <div class="progress" style="margin:8px 0"><span style="width:${courseCompletion(selectedCourseId)}%"></span></div>
          <small>${courseCompletion(selectedCourseId)}% completed in this course</small>
          <ul class="compact-list"><li>${courseSubmissions(selectedCourseId).length} course submissions</li><li>${m.resources.length} resources</li><li>${m.rubric.length} rubric criteria</li></ul>
        </div>
      </aside>
      <main class="material-main-fit">
        ${materialHero(m)}
        <div class="material-quick-grid">
          <article class="material-section-card" id="learning-outcomes"><h4>Learning Outcomes</h4><ul class="compact-list">${m.outcomes.slice(0,4).map(o=>`<li>${esc(o)}</li>`).join("")}</ul></article>
          <article class="material-section-card"><h4>Key ESP Competencies</h4><div class="grid cols-2">${m.competencies.map(c=>`<span>${esc(c)}</span>`).join("")}</div></article>
        </div>
        <div class="material-session-grid">
          ${materialSessionCard("Session 1: Reading","Course reading handout",m.reading,"reading",m.week)}
          ${materialSessionCard("Session 2: Listening","Dialogue and professional briefing",m.listening,"listening",m.week)}
          ${materialSessionCard("Session 3: Speaking","Role-play and recording task",m.speaking,"speaking",m.week)}
          ${materialSessionCard("Session 4: Writing","Professional writing task",m.writing,"writing",m.week)}
        </div>
        <div class="material-lower-grid">
          <article class="material-section-card" id="vocabulary-grammar"><h4>Integrated Vocabulary & Grammar</h4><p><strong>Key Vocabulary:</strong> ${m.vocab.length} terms</p><p><strong>Grammar Focus:</strong> ${esc(m.grammar.slice(0,110))}...</p><button class="btn soft" onclick="openVocabForCourse('${selectedCourseId}',${m.week})">View Notes</button></article>
          <article class="material-section-card" id="assessment"><h4>Assessment</h4><p><strong>Quiz:</strong> Week ${m.week} understanding</p><p>15 items • 20 min</p><button class="btn gold" onclick="takeCourseQuiz('${selectedCourseId}',${m.week})">Start Quiz</button></article>
          <article class="material-section-card" id="assignment"><h4>Assignment</h4><p>${esc(m.assignment.slice(0,150))}...</p><button class="btn soft" onclick="submitCourseAssignment('${selectedCourseId}',${m.week})">View Assignment</button></article>
        </div>
        <article class="material-section-card" id="resources"><h4>Resources</h4>${m.resources.map((r,i)=>`<div class="resource-row"><span>${esc(r)}</span><button class="btn soft" onclick="openCourseResource('${selectedCourseId}',${m.week},${i})">Open</button></div>`).join("")}</article>
      </main>
    </div>
  </section>`;
}
function materialHero(m){
  return `<article class="material-hero-row" id="week-theme-context">
    <div class="material-hero-top">
      <div class="material-week-number"><small>Week</small><strong>${m.week}</strong></div>
      <div><h3>${esc(m.path)} in ${esc(m.discipline.replace(" English",""))}</h3><p>${esc(m.overview)}</p></div>
    </div>
    <div class="material-focus-row">
      <div><small>Province Focus</small><strong>${esc(m.province)}</strong></div>
      <div><small>Local Wisdom</small><strong>${esc(m.heritage)}</strong></div>
      <div><small>Essential Question</small><strong>${esc(m.essential)}</strong></div>
    </div>
  </article>`;
}
function materialSessionCard(title,subtitle,text,type,week){
  return `<article class="material-session" id="${type}"><h4>${esc(title)}</h4><p>${esc(subtitle)}</p><div class="material-file">${type==="listening"?"Dialogue Audio + Transcript":type==="speaking"?"Role-play Scenario + Recorder":type==="writing"?"Writing Template + Rubric":"Reading Handout + Glossary"}</div><div class="audio-mini">${controls(text)}<button class="audio-btn" onclick="openCourseSession('${selectedCourseId}',${week},'${type}')">Open</button></div></article>`;
}
function openCourseSession(courseId,week,type){
  const m=courseMaterial(courseId,week);
  const map={reading:["Session 1: Reading",m.reading],listening:["Session 2: Listening",m.listening],speaking:["Session 3: Speaking",m.speaking],writing:["Session 4: Writing",m.writing]};
  const [title,body]=map[type]||map.reading;
  openModal(`<h2>${esc(title)} — Week ${m.week}</h2><p><strong>${esc(m.discipline)}</strong> • ${esc(m.province)} • ${esc(m.heritage)}</p><p>${esc(body)}</p>${controls(body)}${type==="speaking"?'<div id="speechOut"></div>':''}`);
}
function openVocabForCourse(courseId,week){
  const m=courseMaterial(courseId,week);
  openModal(`<h2>Vocabulary & Grammar — Week ${m.week}</h2><div class="table-wrap fit-small-table"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>${m.vocab.map(v=>`<tr><td>${esc(v[0])}</td><td>${esc(v[1])}</td></tr>`).join("")}</tbody></table></div><h3>Grammar Focus</h3><p>${esc(m.grammar)}</p>${controls(m.vocab.map(v=>v[0]+": "+v[1]).join(". ")+". "+m.grammar)}`);
}
function openCourseResource(courseId,week,i){
  const m=courseMaterial(courseId,week);
  const name=m.resources[i]||"Resource";
  openModal(`<h2>${esc(name)}</h2><p>This resource supports Week ${m.week}: ${esc(m.title)} in ${esc(m.discipline)}.</p><ul class="check-list"><li>Province focus: ${esc(m.province)}</li><li>Local wisdom: ${esc(m.heritage)}</li><li>Professional focus: ${esc(m.professional)}</li><li>Related assignment: ${esc(m.assignment)}</li></ul>${controls(name+". "+m.overview)}`);
}
function takeCourseQuiz(courseId,week){
  const m=courseMaterial(courseId,week);
  openModal(`<h2>${esc(m.discipline)} — Week ${week} Quiz</h2><form>${m.quiz.map((q,i)=>`<fieldset class="card"><legend><strong>${i+1}. ${esc(q[0])}</strong></legend>${q.slice(1).map(a=>`<label style="text-transform:none;color:#322;font-weight:700"><input type="radio" name="cq${i}" value="${esc(a)}" style="width:auto"> ${esc(a)}</label>`).join("")}</fieldset>`).join("")}<button type="button" class="btn primary" onclick="gradeCourseQuiz('${courseId}',${week})">Submit Quiz</button></form>`);
}
function gradeCourseQuiz(courseId,week){
  const m=courseMaterial(courseId,week);
  let score=0;
  m.quiz.forEach((q,i)=>{const s=document.querySelector(`input[name=cq${i}]:checked`); if(s&&s.value===q[1])score++;});
  const pct=Math.round(score/m.quiz.length*100);
  const u=ensureUserCourseState(currentUser());
  if(u){u.courseProgress[courseId] ||= {weeks:[],quiz:{},submissions:[]}; u.courseProgress[courseId].quiz[week]=pct; save();}
  openModal(`<h2>Quiz Result</h2>${metric("Score",pct+"%","Week "+week+" course quiz")}<button class="btn primary" onclick="closeModal()">Close</button>`);
}
function submitCourseAssignment(courseId,week){
  const m=courseMaterial(courseId,week);
  openModal(`<h2>Submit Assignment — Week ${week}</h2><p>${esc(m.assignment)}</p><label>Submission Title<input id="subTitle" value="${esc(m.discipline)} Week ${week} - ${esc(m.title)}"></label><label>Written Work<textarea id="subText" placeholder="Paste your professional writing task here"></textarea></label><label>Speaking / Document Attachment<input id="subFile" type="file" accept=".doc,.docx,.pdf,.txt,.mp3,.wav,.png,.jpg"></label><div class="actions"><button class="btn primary" onclick="saveCourseSubmission('${courseId}',${week})">Submit</button><button class="btn soft" onclick="byId('subFeedback').innerHTML=writingFeedback(byId('subText').value)">AI Check Draft</button></div><div id="subFeedback"></div>`);
}
function saveCourseSubmission(courseId,week){
  const title=byId("subTitle").value.trim(), text=byId("subText").value.trim(), file=byId("subFile").files[0];
  if(!title||!text) return toast("Incomplete","Add title and written work.");
  const done=(data="")=>{
    const u=currentUser();
    db.submissions.unshift({id:uid("SUB"),courseId,userId:u.id,userName:u.name,institution:u.institution||"Not specified",week,title,text,fileName:file?.name||"",fileData:data,date:new Date().toISOString()});
    const state=ensureUserCourseState(u); state.courseProgress[courseId] ||= {weeks:[],quiz:{},submissions:[]}; state.courseProgress[courseId].submissions.push({week,title,date:new Date().toISOString()});
    save(); log("submission",`${u.name} submitted ${courseTitle(courseId)} Week ${week}`); closeModal(); toast("Submitted","Your course assignment has been recorded."); renderMaterials();
  };
  if(file){const r=new FileReader(); r.onload=()=>done(r.result); r.readAsDataURL(file);} else done();
}
function markWeek(n){
  const u=ensureUserCourseState(currentUser());
  if(!u) return;
  const courseId=selectedCourseId || u.disciplineId || "tourism";
  u.courseProgress[courseId] ||= {weeks:[],quiz:{},submissions:[]};
  if(!u.courseProgress[courseId].weeks.includes(Number(n))) u.courseProgress[courseId].weeks.push(Number(n));
  if(!u.progress.weeks.includes(Number(n))) u.progress.weeks.push(Number(n));
  save(); toast("Progress updated",`Week ${n} completed in ${courseTitle(courseId)}.`);
  if(currentPage==="materials") renderMaterials();
}
function renderStudentDashboard(){
  const u=ensureUserCourseState(currentUser());
  const enrolled=(u?.enrollments||[]);
  byId("mainView").innerHTML=`
    <div class="grid cols-4">${metric("Enrolled Courses",enrolled.length,"Self-enrolled ESP disciplines")}${metric("Current Progress",courseCompletion(selectedCourseId)+"%","Selected course completion")}${metric("Quiz Average",courseQuizAvg(selectedCourseId)+"%","Selected course quizzes")}${metric("Submissions",courseSubmissions(selectedCourseId).length,"Selected course evidence")}</div>
    <section class="panel"><h3>My Self-Enrolled Courses</h3><p>Select a course or self-enrol into another ESP discipline.</p><div class="course-catalog">${disciplines.map(d=>courseCatalogCard(d)).join("")}</div></section>`;
}
function renderLecturerDashboard(){
  const students=db.users.filter(u=>u.role==="student");
  byId("mainView").innerHTML=`
    <div class="grid cols-4">${metric("Students",students.length,"Registered learners")}${metric("ESP Courses",disciplines.length,"Available disciplines")}${metric("Submissions",db.submissions.length,"Uploaded work")}${metric("Pending Review",db.submissions.filter(s=>!db.grades.some(g=>g.submissionId===s.id)).length,"Need feedback")}</div>
    <section class="panel"><h3>Course Management</h3><p>All six ESP disciplines are available for students through self-enrolment. Lecturers can open each course, inspect semester materials, create assessments, and review evidence.</p><div class="course-catalog">${disciplines.map(d=>courseCatalogCard(d)).join("")}</div></section>
    ${studentReportTable(students)}`;
}
function renderAdminDashboard(){
  byId("mainView").innerHTML=`
    <div class="grid cols-4">${metric("Users",db.users.length,"Total accounts")}${metric("ESP Disciplines",disciplines.length,"Self-enrolment courses")}${metric("Institutions",db.institutions.length,"Mapped institutions")}${metric("Submissions",db.submissions.length,"Learning evidence")}</div>
    <section class="panel"><h3>ESP Course and Self-Enrolment Control</h3><p>Students can self-enrol in any of the six ESP disciplines. Admin can monitor enrolments, users, institutions, materials, analytics, and system readiness.</p><div class="course-catalog">${disciplines.map(d=>courseCatalogCard(d)).join("")}</div></section>
    <section class="panel"><h3>System Analytics Snapshot</h3>${analyticsHTML()}</section>`;
}
function studentReportTable(sts){
  return `<section class="panel"><h3>Student Progress Report</h3><div class="table-wrap"><table><thead><tr><th>Name</th><th>Enrolled Courses</th><th>Institution</th><th>Selected Progress</th><th>Quiz Avg.</th><th>Submissions</th></tr></thead><tbody>${sts.map(s=>{ensureUserCourseState(s);return `<tr><td>${esc(s.name)}</td><td>${(s.enrollments||[]).map(courseTitle).join(", ")||"None"}</td><td>${esc(s.institution||"Not specified")}</td><td>${courseCompletionForUser(s,selectedCourseId)}%</td><td>${courseQuizAvgForUser(s,selectedCourseId)}%</td><td>${db.submissions.filter(x=>x.userId===s.id).length}</td></tr>`}).join("")||'<tr><td colspan="6">No students yet.</td></tr>'}</tbody></table></div></section>`;
}
function courseCompletionForUser(u,courseId){ensureUserCourseState(u);return Math.round(((u.courseProgress?.[courseId]?.weeks||[]).length/16)*100);}
function courseQuizAvgForUser(u,courseId){ensureUserCourseState(u);const vals=Object.values(u.courseProgress?.[courseId]?.quiz||{});return vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):0;}
function renderNav(role){
  byId("sideNav").innerHTML=(navs[role]||[]).map(([p,i,l])=>`<button data-page="${p}"><span>${i}</span>${l}</button>`).join("");
  byId("sideNav").querySelectorAll("button").forEach(b=>b.onclick=()=>navigate(b.dataset.page));
}
Object.assign(window,{enrollCourse,enterCourse,previewCourse,selectWeek,scrollToMaterialSection,openCourseSession,openVocabForCourse,openCourseResource,takeCourseQuiz,gradeCourseQuiz,submitCourseAssignment,saveCourseSubmission,setDisciplineFromSelect});


// ===== FINAL V4: Admin profile removed, professional course titles, rich resource contents =====
function renderUserCard(){
  const card = byId("userCard");
  if(session.role==="admin"){
    card.classList.add("admin-empty");
    card.innerHTML="";
    return;
  }
  card.classList.remove("admin-empty");
  const u=currentUser();
  card.innerHTML=`<strong>Role Access Portal</strong><span>${esc(session.role)}</span><small>${esc(u?.name||"User")}<br>${esc(courseTitle(selectedCourseId || u?.disciplineId || "tourism"))}</small>`;
}
function courseTitle(id){
  const found = disciplines.find(d=>d.id===id);
  return found ? found.title : "English for Tourism & Hospitality";
}
function normalizeResourceName(name=""){
  return String(name).toLowerCase().replace(/\s+/g," ").trim();
}
function resourceContent(courseId,week,i){
  const m=courseMaterial(courseId,week);
  const name=m.resources[i]||"Resource";
  const key=normalizeResourceName(name);
  const phraseBank = [
    "May I briefly explain the cultural context?",
    "This local practice reflects community values and professional responsibility.",
    "For international audiences, the most important point is clarity and respect.",
    "Could you please confirm whether the information is clear?",
    "We recommend this approach because it supports ethical and effective communication.",
    "Thank you for your attention. I would be pleased to answer your questions."
  ];
  const slides = `
    <div class="resource-pack">
      <h3>Ready Slide Outline</h3>
      <ol>
        <li><strong>Opening:</strong> Course, week theme, professional role, and local-wisdom context.</li>
        <li><strong>Context:</strong> ${esc(m.heritage)} from ${esc(m.province)} and its relevance to ${esc(m.discipline)}.</li>
        <li><strong>Core ESP Skills:</strong> reading, listening, speaking, writing, vocabulary/grammar, assessment.</li>
        <li><strong>Professional Scenario:</strong> ${esc(m.professional)} in a realistic workplace situation.</li>
        <li><strong>Task Brief:</strong> spoken interaction, written text, vocabulary use, and reflection.</li>
        <li><strong>Assessment:</strong> ${m.rubric.map(r=>esc(r[0])+" ("+r[1]+")").join("; ")}.</li>
      </ol>
    </div>`;
  const reading = `
    <h3>Reading Handout</h3>
    <p>${esc(m.reading)}</p>
    <h4>Reading Tasks</h4>
    <ol><li>Identify the main professional purpose.</li><li>Underline five ESP terms.</li><li>Explain how ${esc(m.heritage)} supports professional communication.</li><li>Write a three-sentence summary for an international audience.</li></ol>`;
  const transcript = `
    <h3>Listening Transcript</h3>
    <p>${esc(m.listening)}</p>
    <h4>Listening Checks</h4>
    <ol><li>What is the speaker's role?</li><li>What cultural value is explained?</li><li>Which expression shows politeness?</li><li>What professional action is recommended?</li></ol>`;
  const speaking = `
    <h3>Speaking Scenario</h3>
    <p>${esc(m.speaking)}</p>
    <h4>Performance Checklist</h4>
    <ul class="check-list"><li>Opening greeting and role identity</li><li>Two key facts about ${esc(m.heritage)}</li><li>Two ESP terms</li><li>One clarification response</li><li>Respectful closing</li></ul>`;
  const writing = `
    <h3>Writing Template</h3>
    <p><strong>Purpose:</strong> I am writing to explain ...</p>
    <p><strong>Local-wisdom context:</strong> ${esc(m.heritage)} from ${esc(m.province)} reflects ...</p>
    <p><strong>Professional relevance:</strong> In ${esc(m.discipline)}, this is useful because ...</p>
    <p><strong>Recommendation:</strong> We recommend ...</p>
    <p><strong>Closing:</strong> Thank you for your attention. Please let me know if further information is needed.</p>`;
  const rubric = `
    <h3>Assessment Rubric</h3>
    <div class="table-wrap fit-small-table"><table><thead><tr><th>Criterion</th><th>Descriptor</th><th>Score</th></tr></thead><tbody>
    ${m.rubric.map(r=>`<tr><td>${esc(r[0])}</td><td>Demonstrates accurate, clear, ethical, and discipline-relevant performance.</td><td>${r[1]}</td></tr>`).join("")}
    <tr><td><strong>Total</strong></td><td>Complete weekly task performance.</td><td><strong>100</strong></td></tr></tbody></table></div>`;
  const reflection = `
    <h3>Reflection Checklist</h3>
    <ol><li>What did I communicate clearly?</li><li>Which ESP terms did I use accurately?</li><li>How did I show respect for ${esc(m.heritage)}?</li><li>What should I improve in pronunciation, fluency, organization, or tone?</li><li>How can this skill be used in a real professional context?</li></ol>`;
  const bank = `
    <h3>Professional Phrase Bank</h3>
    <ul class="check-list">${phraseBank.map(p=>`<li>${esc(p)}</li>`).join("")}</ul>
    <h4>Vocabulary Bank</h4>
    <div class="table-wrap fit-small-table"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>${m.vocab.map(v=>`<tr><td>${esc(v[0])}</td><td>${esc(v[1])}</td></tr>`).join("")}</tbody></table></div>`;
  if(key.includes("slide")) return slides;
  if(key.includes("phrase")) return bank;
  if(key.includes("reading")) return reading;
  if(key.includes("listening")) return transcript;
  if(key.includes("speaking")) return speaking;
  if(key.includes("writing")) return writing;
  if(key.includes("rubric")) return rubric;
  if(key.includes("reflection")) return reflection;
  return `<h3>${esc(name)}</h3><p>${esc(m.overview)}</p>${reading}`;
}
function openCourseResource(courseId,week,i){
  const m=courseMaterial(courseId,week);
  const name=m.resources[i]||"Resource";
  const html=resourceContent(courseId,week,i);
  openModal(`<h2>${esc(name)} — Week ${m.week}</h2><p><strong>${esc(m.discipline)}</strong> • ${esc(m.province)} • ${esc(m.heritage)}</p>${html}<div class="actions">${controls(`${name}. ${m.overview} ${m.reading}`)}<button class="btn primary" onclick="openCourseSession('${courseId}',${week},'${i===3?'listening':i===4?'speaking':i===5?'writing':'reading'}')">Open Related Session</button></div>`);
}
function materialSessionCard(title,subtitle,text,type,week){
  return `<article class="material-session" id="${type}"><h4>${esc(title)}</h4><p>${esc(subtitle)}</p><div class="material-file">${type==="listening"?"Dialogue Audio + Full Transcript":type==="speaking"?"Role-play Scenario + Recorder":type==="writing"?"Writing Template + Rubric":"Reading Handout + Glossary"}</div><div class="audio-mini">${controls(text)}<button class="audio-btn" onclick="openCourseSession('${selectedCourseId}',${week},'${type}')">Open</button></div></article>`;
}
function renderAdminDashboard(){
  byId("mainView").innerHTML=`
    <div class="grid cols-4">${metric("Users",db.users.length,"Total accounts")}${metric("ESP Disciplines",disciplines.length,"Self-enrolment courses")}${metric("Institutions",db.institutions.length,"Mapped institutions")}${metric("Submissions",db.submissions.length,"Learning evidence")}</div>
    <section class="panel"><h3>ESP Course and Self-Enrolment Control</h3><p>Students can self-enrol in any of the six ESP disciplines. Admin can monitor enrolments, users, institutions, materials, analytics, and system readiness.</p><div class="course-catalog">${disciplines.map(d=>courseCatalogCard(d)).join("")}</div></section>
    <section class="panel"><h3>System Analytics Snapshot</h3>${analyticsHTML()}</section>`;
}

// ===== FINAL V5: compact landing, no admin block, rich resources, auto virtual links =====
try{ localStorage.removeItem('garudaEspNusantara.final.v4.professional'); }catch(e){}
function renderUserCard(){
  const card=byId('userCard');
  if(!card) return;
  if(session?.role==='admin'){
    card.classList.add('admin-empty');
    card.innerHTML='';
    return;
  }
  card.classList.remove('admin-empty');
  const u=currentUser();
  card.innerHTML=`<strong>Role Access Portal</strong><span>${esc(session?.role||'user')}</span><small>${esc(u?.name||'User')}<br>${esc(courseTitle(selectedCourseId || u?.disciplineId || 'tourism'))}</small>`;
}
function generateRoomLink(title='GARUDA ESP Nusantara'){
  const clean=String(title||'GARUDA ESP Nusantara')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-zA-Z0-9]+/g,'-').replace(/^-|-$/g,'')
    .toUpperCase().slice(0,34) || 'GARUDA-ESP-NUSANTARA';
  const code=Math.random().toString(36).slice(2,7).toUpperCase();
  return `https://meet.jit.si/${clean}-${code}`;
}
function refreshRoomLink(){
  const title=byId('roomTitle')?.value || 'GARUDA ESP Nusantara';
  const link=byId('roomLink');
  if(link){ link.value=generateRoomLink(title); }
}
function roomForm(){
  const link=generateRoomLink('GARUDA ESP Virtual Room');
  return `<section class="panel"><h3>Create Virtual Room</h3><p>The room link is generated automatically and can be copied or edited before saving.</p><div class="field-grid two"><label>Title<input id="roomTitle" oninput="if(!byId('roomLink').dataset.edited){refreshRoomLink()}" placeholder="e.g., Week 1 Speaking Consultation"></label><label>Scope<select id="roomScope"><option value="all">All</option><option value="student">Student</option><option value="lecturer">Lecturer</option><option value="admin">Admin</option></select></label><label>Host<input id="roomHost" value="${esc(session?.name||'Course Team')}" placeholder="Host name"></label><label>Schedule<input id="roomSchedule" placeholder="e.g., Monday, 09:00 WIB"></label><label class="room-link-tools">Virtual Room Link<input id="roomLink" value="${link}" oninput="this.dataset.edited='true'"><button type="button" class="btn soft" onclick="refreshRoomLink()">Generate</button><span class="generated-link-note">Automatically generated secure classroom link.</span></label><label>Features<input id="roomFeatures" value="Live session, Screen sharing, Attendance, Chat, Breakout discussion, Consultation, Feedback notes"></label></div><label>Agenda<textarea id="roomAgenda" placeholder="Session agenda, learning focus, consultation plan, and assessment feedback notes"></textarea></label><button class="btn primary" onclick="saveRoom()">Save Room</button></section>`;
}
function saveRoom(){
  let title=byId('roomTitle')?.value.trim();
  const host=byId('roomHost')?.value.trim();
  const agenda=byId('roomAgenda')?.value.trim();
  if(!title||!host||!agenda) return toast('Incomplete','Complete title, host, and agenda. The link is already generated automatically.');
  const link=(byId('roomLink')?.value.trim()) || generateRoomLink(title);
  const r={id:uid('ROOM'),title,scope:byId('roomScope').value,host,schedule:byId('roomSchedule').value.trim(),link,agenda,features:byId('roomFeatures').value.split(',').map(x=>x.trim()).filter(Boolean),attendance:[]};
  db.rooms.unshift(r);save();toast('Room saved','Virtual room link is ready and visible in the room card.');renderOnline();
}
function roomCard(r){
  return`<article class="room-card"><h3>${esc(r.title)}</h3><p>${esc(r.agenda)}</p><p><span class="tag red">${esc(r.scope)}</span> <span class="tag">${esc(r.schedule)}</span> <span class="tag">Host: ${esc(r.host)}</span></p><label style="text-transform:none;letter-spacing:0;color:#6d4f21;font-size:.8rem">Generated Room Link<input value="${esc(r.link)}" readonly onclick="this.select()"></label><ul class="check-list">${(r.features||[]).map(f=>`<li>${esc(f)}</li>`).join('')}</ul><p><strong>Attendance:</strong> ${(r.attendance||[]).length}</p><div class="actions"><button class="btn primary" onclick="joinRoom('${r.id}')">Join Room</button><button class="btn soft" onclick="navigator.clipboard&&navigator.clipboard.writeText('${esc(r.link)}');toast('Copied','Room link copied.')">Copy Link</button></div></article>`;
}
function resourceSummary(name=''){
  const k=normalizeResourceName(name);
  if(k.includes('slide')) return 'Structured weekly presentation outline with objectives, context, task flow, and assessment focus.';
  if(k.includes('phrase')) return 'Professional expressions for opening, clarifying, explaining, recommending, and closing.';
  if(k.includes('reading')) return 'Full reading text with comprehension, vocabulary, and cultural-meaning tasks.';
  if(k.includes('listening')) return 'Complete transcript with listening checks and professional interpretation questions.';
  if(k.includes('speaking')) return 'Role-play scenario with recording checklist and performance guidance.';
  if(k.includes('writing')) return 'Ready writing template for professional ESP text production.';
  if(k.includes('rubric')) return 'Analytic rubric for ESP accuracy, organization, tone, intercultural sensitivity, and completion.';
  if(k.includes('reflection')) return 'Reflective checklist for learning evidence and professional improvement.';
  return 'Prepared weekly support resource.';
}
function resourceContent(courseId,week,i){
  const m=courseMaterial(courseId,week);
  const name=m.resources[i]||'Resource';
  const key=normalizeResourceName(name);
  const common=`<div class="resource-detail-box"><h4>Professional Context</h4><p>${esc(m.discipline)} • ${esc(m.province)} • ${esc(m.heritage)}</p><p>${esc(m.overview)}</p></div>`;
  const task=`<div class="resource-detail-box"><h4>Integrated Weekly Task</h4><p>${esc(m.assignment)}</p><ul class="check-list"><li>Submit a written product.</li><li>Submit or practise a speaking performance.</li><li>Use at least two ESP terms.</li><li>Explain the local-wisdom value respectfully.</li></ul></div>`;
  const slides=`<div class="resource-detail-grid">${common}<div class="resource-detail-box"><h4>Slide Sequence</h4><ol><li>Opening and ESP discipline focus.</li><li>Province and local-wisdom background.</li><li>Professional scenario and audience needs.</li><li>Reading and listening input.</li><li>Speaking and writing production.</li><li>Assessment rubric and reflection.</li></ol></div>${task}<div class="resource-detail-box"><h4>Teaching Notes</h4><p>Use the slides for a 75–100 minute session. Begin with context activation, continue to skill input, then guide students to performance evidence.</p></div></div>`;
  const bank=`<div class="resource-detail-grid">${common}<div class="resource-detail-box"><h4>Professional Phrase Bank</h4><ul class="check-list"><li>May I briefly explain the cultural context?</li><li>This practice reflects community values and professional responsibility.</li><li>For international audiences, the key point is clarity and respect.</li><li>Could you please confirm whether the information is clear?</li><li>We recommend this approach because it supports ethical communication.</li><li>Thank you for your attention. I would be pleased to answer questions.</li></ul></div><div class="resource-detail-box"><h4>Vocabulary Bank</h4><div class="table-wrap fit-small-table"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>${m.vocab.map(v=>`<tr><td>${esc(v[0])}</td><td>${esc(v[1])}</td></tr>`).join('')}</tbody></table></div></div>${task}</div>`;
  const reading=`<div class="resource-detail-grid"><div class="resource-detail-box"><h4>Reading Handout</h4><p>${esc(m.reading)}</p></div><div class="resource-detail-box"><h4>Reading Tasks</h4><ol><li>Identify the professional purpose.</li><li>Underline five ESP terms.</li><li>Explain the local-wisdom value.</li><li>Write a three-sentence professional summary.</li></ol></div>${common}${task}</div>`;
  const transcript=`<div class="resource-detail-grid"><div class="resource-detail-box"><h4>Listening Transcript</h4><p>${esc(m.listening)}</p></div><div class="resource-detail-box"><h4>Listening Checks</h4><ol><li>What is the speaker's role?</li><li>What cultural value is explained?</li><li>Which expressions show politeness?</li><li>What professional recommendation is made?</li></ol></div>${common}${task}</div>`;
  const speaking=`<div class="resource-detail-grid"><div class="resource-detail-box"><h4>Speaking Scenario</h4><p>${esc(m.speaking)}</p></div><div class="resource-detail-box"><h4>Recording Checklist</h4><ul class="check-list"><li>Opening greeting and role identity</li><li>Two facts about ${esc(m.heritage)}</li><li>Two ESP terms</li><li>One clarification response</li><li>Respectful closing</li></ul></div>${common}${task}</div>`;
  const writing=`<div class="resource-detail-grid"><div class="resource-detail-box"><h4>Writing Template</h4><p><strong>Purpose:</strong> I am writing to explain ...</p><p><strong>Local-wisdom context:</strong> ${esc(m.heritage)} from ${esc(m.province)} reflects ...</p><p><strong>Professional relevance:</strong> In ${esc(m.discipline)}, this is useful because ...</p><p><strong>Recommendation:</strong> We recommend ...</p><p><strong>Closing:</strong> Thank you for your attention.</p></div><div class="resource-detail-box"><h4>Writing Quality Guide</h4><ul class="check-list"><li>Clear purpose</li><li>Accurate ESP vocabulary</li><li>Polite professional tone</li><li>Local-wisdom explanation</li><li>Audience-oriented recommendation</li></ul></div>${common}${task}</div>`;
  const rubric=`<div class="resource-detail-grid"><div class="resource-detail-box"><h4>Assessment Rubric</h4><div class="table-wrap fit-small-table"><table><thead><tr><th>Criterion</th><th>Descriptor</th><th>Score</th></tr></thead><tbody>${m.rubric.map(r=>`<tr><td>${esc(r[0])}</td><td>Accurate, clear, ethical, and discipline-relevant performance.</td><td>${r[1]}</td></tr>`).join('')}<tr><td><strong>Total</strong></td><td>Complete task performance</td><td><strong>100</strong></td></tr></tbody></table></div></div>${common}${task}<div class="resource-detail-box"><h4>Feedback Guide</h4><p>Feedback should address ESP terminology, organization, professional tone, cultural sensitivity, pronunciation or delivery, and reflective improvement.</p></div></div>`;
  const reflection=`<div class="resource-detail-grid"><div class="resource-detail-box"><h4>Reflection Checklist</h4><ol><li>What did I communicate clearly?</li><li>Which ESP terms did I use accurately?</li><li>How did I show respect for ${esc(m.heritage)}?</li><li>What should I improve in pronunciation, fluency, organization, or tone?</li><li>How can this skill be used in a real professional context?</li></ol></div>${common}${task}<div class="resource-detail-box"><h4>Portfolio Note</h4><p>Add this reflection to your course portfolio after completing the weekly assignment and speaking practice.</p></div></div>`;
  if(key.includes('slide')) return slides;
  if(key.includes('phrase')) return bank;
  if(key.includes('reading')) return reading;
  if(key.includes('listening')) return transcript;
  if(key.includes('speaking')) return speaking;
  if(key.includes('writing')) return writing;
  if(key.includes('rubric')) return rubric;
  if(key.includes('reflection')) return reflection;
  return reading;
}
function openCourseResource(courseId,week,i){
  const m=courseMaterial(courseId,week);
  const name=m.resources[i]||'Resource';
  const html=resourceContent(courseId,week,i);
  openModal(`<h2>${esc(name)} — Week ${m.week}</h2><p><strong>${esc(m.discipline)}</strong> • ${esc(m.province)} • ${esc(m.heritage)}</p>${html}<div class="actions">${controls(`${name}. ${m.overview} ${m.reading}`)}<button class="btn primary" onclick="openCourseSession('${courseId}',${week},'${i===3?'listening':i===4?'speaking':i===5?'writing':'reading'}')">Open Related Session</button></div>`);
}
function resourcesBlock(m){
  return m.resources.map((r,i)=>`<div class="resource-row"><span><strong>${esc(r)}</strong><small>${esc(resourceSummary(r))}</small></span><button class="btn soft" onclick="openCourseResource('${selectedCourseId}',${m.week},${i})">Open</button></div>`).join('');
}
function renderMaterials(){
  selectedCourseId = selectedCourseId || (currentUser()?.disciplineId || 'tourism');
  const d=disciplines.find(x=>x.id===selectedCourseId)||disciplines[0];
  const enrolled=isEnrolled(selectedCourseId);
  const m=courseMaterial(selectedCourseId,selectedWeek||1);
  if(isStudent() && !enrolled){
    byId('mainView').innerHTML=`<section class="panel"><h3>${esc(d.title)}</h3><p>You need to self-enrol before accessing the full semester materials.</p><button class="btn primary" onclick="enrollCourse('${d.id}')">Enrol Me / Self-Enrol</button></section>`;
    return;
  }
  byId('mainView').innerHTML=`
  <section class="compact-materials-screen">
    <div class="compact-materials-header">
      <div><h3>Semester ESP Materials</h3><small>Materials › Semester ESP Materials</small></div>
      <select onchange="selectedCourseId=this.value;localStorage.setItem('gesn.selectedCourseId',selectedCourseId);selectedWeek=1;renderMaterials()">${disciplines.map(x=>`<option value="${x.id}" ${x.id===selectedCourseId?'selected':''}>Semester 1 - ${esc(x.title)}</option>`).join('')}</select>
      <div><strong>16 Weeks</strong><br><small>Aug 5 – Nov 22, 2026</small></div>
    </div>
    <div class="compact-week-strip">${Array.from({length:16},(_,i)=>`<button class="${selectedWeek===i+1?'active':''}" onclick="selectedWeek=${i+1};renderMaterials()">WEEK<br>${i+1}</button>`).join('')}</div>
    <div class="material-one-fit">
      <aside class="material-side-index">
        <h4>Week ${m.week} Overview</h4><small>Complete this week's academic tasks</small>
        <div style="margin-top:10px">${['Week Theme & Context','Learning Outcomes','Session 1: Reading','Session 2: Listening','Session 3: Speaking','Session 4: Writing','Vocabulary & Grammar','Assessment','Assignment','Resources'].map((s,i)=>`<button class="${i===0?'active':''}" onclick="scrollToMaterialSection('${sectionId(s)}')"><span>${esc(s)}</span><span class="status-dot"></span></button>`).join('')}</div>
        <div class="side-status"><strong>Week Status</strong><div class="progress" style="margin:8px 0"><span style="width:${courseCompletion(selectedCourseId)}%"></span></div><small>${courseCompletion(selectedCourseId)}% completed in this course</small><ul class="compact-list"><li>${courseSubmissions(selectedCourseId).length} course submissions</li><li>${m.resources.length} prepared resources</li><li>${m.rubric.length} rubric criteria</li></ul></div>
      </aside>
      <main class="material-main-fit">
        ${materialHero(m)}
        <div class="material-quick-grid"><article class="material-section-card" id="learning-outcomes"><h4>Learning Outcomes</h4><ul class="compact-list">${m.outcomes.slice(0,4).map(o=>`<li>${esc(o)}</li>`).join('')}</ul></article><article class="material-section-card"><h4>Key ESP Competencies</h4><div class="grid cols-2">${m.competencies.map(c=>`<span>${esc(c)}</span>`).join('')}</div></article></div>
        <div class="material-session-grid">${materialSessionCard('Session 1: Reading','Course reading handout',m.reading,'reading',m.week)}${materialSessionCard('Session 2: Listening','Dialogue and professional briefing',m.listening,'listening',m.week)}${materialSessionCard('Session 3: Speaking','Role-play and recording task',m.speaking,'speaking',m.week)}${materialSessionCard('Session 4: Writing','Professional writing task',m.writing,'writing',m.week)}</div>
        <div class="material-lower-grid"><article class="material-section-card" id="vocabulary-grammar"><h4>Integrated Vocabulary & Grammar</h4><p><strong>Key Vocabulary:</strong> ${m.vocab.length} terms</p><p><strong>Grammar Focus:</strong> ${esc(m.grammar.slice(0,110))}...</p><button class="btn soft" onclick="openVocabForCourse('${selectedCourseId}',${m.week})">View Notes</button></article><article class="material-section-card" id="assessment"><h4>Assessment</h4><p><strong>Quiz:</strong> Week ${m.week} understanding</p><p>15 items • 20 min</p><button class="btn gold" onclick="takeCourseQuiz('${selectedCourseId}',${m.week})">Start Quiz</button></article><article class="material-section-card" id="assignment"><h4>Assignment</h4><p>${esc(m.assignment.slice(0,150))}...</p><button class="btn soft" onclick="submitCourseAssignment('${selectedCourseId}',${m.week})">View Assignment</button></article></div>
        <article class="material-section-card" id="resources"><h4>Resources</h4>${resourcesBlock(m)}</article>
      </main>
    </div>
  </section>`;
}
Object.assign(window,{refreshRoomLink,generateRoomLink});


// ===== FINAL V6 cache and compatibility cleanup =====
try{
  ['garudaEspNusantara.academic.final.v1','garudaEspNusantara.final.v4.professional','garudaEspNusantara.final.v5.professional'].forEach(k=>localStorage.removeItem(k));
}catch(e){}
function refreshRoomLink(){
  const title=byId('roomTitle')?.value || 'GARUDA ESP Nusantara';
  const link=byId('roomLink');
  if(link && typeof generateRoomLink === 'function'){ link.value=generateRoomLink(title); }
}
Object.assign(window,{refreshRoomLink});


// ===== FINAL V7: explicit admin login exposure =====
Object.assign(window,{adminLogin,enterApp});


// ===== FINAL V9 logout hard fix =====
function safeLogout(event){
  if(event){ event.preventDefault(); event.stopPropagation(); }
  logout();
  return false;
}
Object.assign(window,{logout,safeLogout});


// ===== FINAL V10: Nusantara Atlas + AI Tutor Integration =====
let selectedProvinceId = localStorage.getItem("gesn.selectedProvinceId") || "yogyakarta";
let selectedTutorMode = localStorage.getItem("gesn.selectedTutorMode") || "speaking";

const provinceAtlas = [
  ["aceh","Aceh","Gayo coffee, halal hospitality, Saman tradition","English for Business & Entrepreneurship","Pitch local coffee products and explain halal service etiquette.",12,47],
  ["north_sumatra","North Sumatra","Lake Toba, Batak ulos, community storytelling","English for Tourism & Hospitality","Guide visitors through heritage interpretation and respectful travel advice.",18,50],
  ["west_sumatra","West Sumatra","Rumah Gadang, Minangkabau deliberation, culinary culture","English for Education & Communication","Moderate dialogue, give advice, and present community-based learning values.",23,54],
  ["riau","Riau","Malay pantun, river culture, local trade","English for Business & Entrepreneurship","Write buyer-seller messages and product descriptions for local trade.",29,54],
  ["riau_islands","Riau Islands","Coastal trade, maritime logistics, island mobility","English for Engineering & Technology","Explain digital route systems and logistics coordination.",34,58],
  ["jambi","Jambi","Batik Jambi, river settlement, conservation","English for Maritime, Fisheries & Environment","Report environmental issues and community sustainability action.",30,59],
  ["bengkulu","Bengkulu","Rafflesia conservation, coastal heritage","English for Maritime, Fisheries & Environment","Create conservation notices and eco-tourism visitor guidelines.",27,63],
  ["south_sumatra","South Sumatra","Songket, Musi River, creative economy","English for Business & Entrepreneurship","Describe products, respond to inquiries, and negotiate orders.",31,62],
  ["bangka_belitung","Bangka Belitung","Tin heritage, island tourism, culinary culture","English for Tourism & Hospitality","Prepare visitor briefings and island-tourism service information.",36,62],
  ["lampung","Lampung","Tapis cloth, elephant conservation, community health","English for Health & Care","Write health-promotion messages and visitor safety notes.",33,67],
  ["banten","Banten","Baduy wisdom, heritage learning, coastal society","English for Education & Communication","Prepare lesson announcements and community training materials.",38,70],
  ["jakarta","DKI Jakarta","Betawi urban heritage, multicultural service","English for Business & Entrepreneurship","Create digital promotional copy and professional customer responses.",41,69],
  ["west_java","West Java","Angklung, Sundanese collaboration, creative technology","English for Engineering & Technology","Explain processes, troubleshoot, and present community technology.",43,70],
  ["central_java","Central Java","Batik, wayang, patient-care values","English for Health & Care","Give health instructions and write simple case notes with empathy.",47,71],
  ["yogyakarta","Yogyakarta","Kraton philosophy, batik, respectful service","English for Tourism & Hospitality","Guide visitors, explain etiquette, and present heritage meaning.",49,72],
  ["east_java","East Java","Bromo Tengger, service recovery, education innovation","English for Tourism & Hospitality","Handle guest complaints and deliver clear destination briefings.",53,72],
  ["bali","Bali","Tri Hita Karana, hospitality ethics, community-based tourism","English for Tourism & Hospitality","Welcome guests, explain local etiquette, and promote sustainable tourism.",58,75],
  ["west_nusa_tenggara","West Nusa Tenggara","Sasak weaving, halal tourism, local enterprise","English for Business & Entrepreneurship","Pitch products, explain customer value, and prepare market messages.",62,77],
  ["east_nusa_tenggara","East Nusa Tenggara","Komodo visitor safety, tenun, island ecology","English for Maritime, Fisheries & Environment","Communicate safety procedures and sustainability messages.",67,79],
  ["west_kalimantan","West Kalimantan","Dayak community, border communication, river life","English for Education & Communication","Facilitate intercultural dialogue and community learning.",48,48],
  ["central_kalimantan","Central Kalimantan","Forest stewardship, community sustainability","English for Maritime, Fisheries & Environment","Write environmental reports and advocacy briefs.",53,48],
  ["south_kalimantan","South Kalimantan","Floating market, river trade, local entrepreneurship","English for Business & Entrepreneurship","Describe products and manage customer interaction.",55,53],
  ["east_kalimantan","East Kalimantan","Sustainable city innovation, IKN, community design","English for Engineering & Technology","Present technical innovation and green design processes.",59,49],
  ["north_kalimantan","North Kalimantan","Border culture, remote collaboration, logistics","English for Engineering & Technology","Coordinate online teamwork and technical reporting.",61,44],
  ["north_sulawesi","North Sulawesi","Bunaken marine tourism, public health, island service","English for Maritime, Fisheries & Environment","Explain marine conservation and visitor safety.",67,46],
  ["gorontalo","Gorontalo","Karawo embroidery, local enterprise","English for Business & Entrepreneurship","Pitch creative products and write promotional descriptions.",65,50],
  ["central_sulawesi","Central Sulawesi","Palu bay, resilience, community communication","English for Education & Communication","Deliver public information and moderate recovery dialogue.",66,55],
  ["west_sulawesi","West Sulawesi","Mandar maritime culture, coastal identity","English for Maritime, Fisheries & Environment","Prepare marine briefings and safety notices.",63,57],
  ["south_sulawesi","South Sulawesi","Pinisi, Toraja heritage, maritime leadership","English for Maritime, Fisheries & Environment","Explain vessel safety and heritage tourism ethically.",66,61],
  ["southeast_sulawesi","Southeast Sulawesi","Wakatobi fisheries, reef conservation","English for Maritime, Fisheries & Environment","Report fisheries operations and sustainability action.",70,63],
  ["maluku","Maluku","Spice routes, island communities, maritime exchange","English for Tourism & Hospitality","Tell heritage stories and manage intercultural visitor questions.",77,59],
  ["north_maluku","North Maluku","Ternate Tidore, spice diplomacy, radio communication","English for Maritime, Fisheries & Environment","Use emergency and navigational communication clearly.",78,53],
  ["west_papua","West Papua","Coastal ecosystem, marine biodiversity, local stewardship","English for Maritime, Fisheries & Environment","Write environmental reports and community conservation messages.",86,61],
  ["southwest_papua","Southwest Papua","Raja Ampat, eco-tourism, conservation ethics","English for Tourism & Hospitality","Guide eco-tourism and explain responsible visitor behaviour.",82,63],
  ["papua","Papua","Biodiversity, community knowledge, inclusive digital access","English for Engineering & Technology","Present inclusive technology and public-service innovation.",91,60],
  ["central_papua","Central Papua","Highland communities, health access, community care","English for Health & Care","Give health education and explain public-care information.",88,57],
  ["highland_papua","Papua Highlands","Noken, sustainable craft, education advocacy","English for Education & Communication","Prepare advocacy messages and reflective presentations.",90,54],
  ["south_papua","South Papua","Sago culture, nutrition, rural health communication","English for Health & Care","Create nutrition advice and public health announcements.",92,67]
].map(p=>({id:p[0],name:p[1],heritage:p[2],discipline:p[3],task:p[4],x:p[5],y:p[6]}));

function selectedProvince(){
  return provinceAtlas.find(p=>p.id===selectedProvinceId) || provinceAtlas.find(p=>p.id==="yogyakarta") || provinceAtlas[0];
}
function atlasStats(){
  const dCount=[...new Set(provinceAtlas.map(p=>p.discipline))].length;
  return `<div class="grid cols-4">${metric("Province Modules",provinceAtlas.length,"Nusantara Atlas coverage")}${metric("ESP Disciplines",dCount,"Mapped professional domains")}${metric("Heritage Tasks",provinceAtlas.length,"Local-wisdom scenarios")}${metric("Course Links",16,"Semester integration")}</div>`;
}
function renderAtlas(){
  const current=selectedProvince();
  const search = byId("atlasSearch")?.value?.toLowerCase() || "";
  const filtered=provinceAtlas.filter(p=>(p.name+" "+p.heritage+" "+p.discipline).toLowerCase().includes(search));
  byId("mainView").innerHTML=`
    <section class="atlas-shell">
      <section class="atlas-hero">
        <h3>Nusantara Atlas</h3>
        <p>Explore Indonesia’s provinces through local wisdom, cultural heritage, and discipline-based ESP learning scenarios. Each province connects directly to materials, tasks, and AI-assisted practice.</p>
        <div class="actions"><button class="btn primary" onclick="openProvinceMaterial('${current.id}')">Open Selected Province Module</button><button class="btn soft" onclick="navigate('materials')">Open Semester Materials</button><button class="btn soft" onclick="navigate('tutor')">Ask AI Tutor</button></div>
      </section>
      ${atlasStats()}
      <div class="feature-split">
        <section class="panel">
          <div class="atlas-tabs">
            <button class="active">Map</button>
            <button onclick="renderProvinceListModal()">Province List</button>
            <button onclick="renderAtlasBookmarks()">Bookmarks</button>
          </div>
          <div class="atlas-map" aria-label="Interactive Nusantara map">
            ${provinceAtlas.map(p=>`<button class="map-pin ${p.id===current.id?'active':''}" style="left:${p.x}%;top:${p.y}%;" onclick="selectProvince('${p.id}')" title="${esc(p.name)}"><span>${esc(p.name)}</span></button>`).join("")}
          </div>
        </section>
        <aside>
          <section class="atlas-detail">
            <h3>${esc(current.name)}</h3>
            <p><strong>${esc(current.heritage)}</strong></p>
            <div class="atlas-detail-grid">
              <div class="atlas-mini"><small>ESP Discipline</small><strong>${esc(current.discipline)}</strong></div>
              <div class="atlas-mini"><small>Professional Task</small><strong>${esc(current.task)}</strong></div>
              <div class="atlas-mini"><small>Skill Focus</small><strong>Reading, listening, speaking, writing</strong></div>
              <div class="atlas-mini"><small>Assessment Evidence</small><strong>Briefing, role-play, writing, reflection</strong></div>
            </div>
            <p>This province module helps learners transform local cultural knowledge into professional English for authentic workplace communication.</p>
            <div class="actions">
              <button class="btn primary" onclick="openProvinceMaterial('${current.id}')">Open Module</button>
              <button class="btn soft" onclick="bookmarkProvince('${current.id}')">Bookmark</button>
              <button class="btn soft" onclick="speak('${esc(current.name)}. ${esc(current.heritage)}. ${esc(current.task)}')">▶ Listen</button>
              <button class="btn soft" onclick="stopSpeak()">■ Stop</button>
            </div>
          </section>
          <section class="panel" style="margin-top:16px">
            <h3>Province Search</h3>
            <label>Search province, heritage, or discipline<input id="atlasSearch" placeholder="Example: Bali, Batik, Maritime" value="${esc(search)}" oninput="renderAtlas()"></label>
            <div class="province-list" style="margin-top:12px">${filtered.slice(0,18).map(p=>`<button class="${p.id===current.id?'active':''}" onclick="selectProvince('${p.id}')"><strong>${esc(p.name)}</strong><br><small>${esc(p.discipline)}</small></button>`).join("")}</div>
          </section>
        </aside>
      </div>
    </section>`;
}
function selectProvince(id){
  selectedProvinceId=id;
  localStorage.setItem("gesn.selectedProvinceId",id);
  renderAtlas();
}
function bookmarkProvince(id){
  const key="gesn.atlas.bookmarks";
  const saved=JSON.parse(localStorage.getItem(key)||"[]");
  if(!saved.includes(id)) saved.push(id);
  localStorage.setItem(key,JSON.stringify(saved));
  toast("Bookmarked",`${selectedProvince().name} added to your Nusantara Atlas bookmarks.`);
}
function renderAtlasBookmarks(){
  const ids=JSON.parse(localStorage.getItem("gesn.atlas.bookmarks")||"[]");
  const items=ids.map(id=>provinceAtlas.find(p=>p.id===id)).filter(Boolean);
  openModal(`<h2>Nusantara Atlas Bookmarks</h2>${items.length?`<div class="province-list">${items.map(p=>`<button onclick="closeModal();selectProvince('${p.id}')"><strong>${esc(p.name)}</strong><br><small>${esc(p.heritage)}</small></button>`).join("")}</div>`:'<div class="empty">No bookmarked province yet.</div>'}`);
}
function renderProvinceListModal(){
  openModal(`<h2>38 Province Modules</h2><div class="province-list">${provinceAtlas.map(p=>`<button onclick="closeModal();selectProvince('${p.id}')"><strong>${esc(p.name)}</strong><br><small>${esc(p.discipline)} • ${esc(p.heritage)}</small></button>`).join("")}</div>`);
}
function openProvinceMaterial(id){
  const p=provinceAtlas.find(x=>x.id===id)||selectedProvince();
  const courseId = (disciplines.find(d=>d.title===p.discipline)?.id) || selectedCourseId || "tourism";
  selectedCourseId=courseId;
  localStorage.setItem("gesn.selectedCourseId",selectedCourseId);
  const m=courseMaterial(courseId, Math.max(1, Math.min(16, provinceAtlas.findIndex(x=>x.id===p.id)%16+1)));
  openModal(`<h2>${esc(p.name)} Province Module</h2>
    <p><strong>Heritage:</strong> ${esc(p.heritage)}</p>
    <p><strong>ESP Discipline:</strong> ${esc(p.discipline)}</p>
    <p><strong>Professional Task:</strong> ${esc(p.task)}</p>
    <div class="module-grid">
      <section class="session"><h4>Reading</h4><p>${esc(m.reading)}</p>${controls(m.reading)}</section>
      <section class="session"><h4>Speaking Scenario</h4><p>${esc(p.task)} Learners prepare a three-minute professional explanation, answer one international-audience question, and record the performance.</p>${controls(p.task)}</section>
      <section class="session"><h4>Writing Task</h4><p>Write a 180–220 word professional text that introduces ${esc(p.heritage)} and explains its value for ${esc(p.discipline)}.</p></section>
      <section class="session"><h4>Assessment</h4><div class="table-wrap fit-small-table">${rubricTable(m)}</div></section>
    </div>
    <div class="actions"><button class="btn primary" onclick="closeModal();selectedWeek=${m.week};navigate('materials')">Open in Materials</button><button class="btn soft" onclick="closeModal();navigate('tutor')">Practice with AI Tutor</button></div>`);
}

function renderAITutor(){
  const u=currentUser()||{};
  const courseId=selectedCourseId || u.disciplineId || "tourism";
  const m=courseMaterial(courseId, selectedWeek || 1);
  const province=selectedProvince();
  byId("mainView").innerHTML=`
    <section class="tutor-shell">
      <section class="tutor-hero">
        <h3>AI Tutor</h3>
        <p>A local AI-assisted ESP companion for speaking practice, writing improvement, pronunciation awareness, and feedback. It works locally without an external API key.</p>
        <div class="actions"><button class="btn primary" onclick="setTutorMode('speaking')">Practice Speaking</button><button class="btn soft" onclick="setTutorMode('writing')">Improve Writing</button><button class="btn soft" onclick="setTutorMode('pronunciation')">Check Pronunciation</button><button class="btn soft" onclick="setTutorMode('feedback')">Get Feedback</button></div>
      </section>
      <div class="tutor-layout">
        <section class="tutor-panel">
          <div class="tutor-avatar">
            <div class="tutor-bubble">
              <strong>Hello, I am Garuda.</strong><br>
              I can help you practise ${esc(m.discipline)}, connect your task with ${esc(province.heritage)}, and improve clarity, tone, vocabulary, pronunciation, and reflection.
            </div>
          </div>
          <div class="tutor-mode-tabs">
            ${["speaking","writing","pronunciation","feedback"].map(mode=>`<button class="${selectedTutorMode===mode?'active':''}" onclick="setTutorMode('${mode}')">${tutorModeLabel(mode)}</button>`).join("")}
          </div>
          <div class="tutor-focus">
            <strong>Today’s Focus</strong>
            <p>${esc(m.path)} • Week ${m.week} • ${esc(m.discipline)}</p>
            <div class="progress"><span style="width:${tutorScoreEstimate()}%"></span></div>
          </div>
          <div class="tutor-focus tutor-grade" style="margin-top:12px">
            <div class="grade-ring" style="--score:${tutorScoreEstimate()}%"><span>${tutorLetter()}</span></div>
            <div><strong>Feedback Summary</strong><p>${tutorSummary()}</p></div>
          </div>
        </section>
        <section class="panel tutor-workspace">
          ${tutorWorkspaceHTML(m,province)}
        </section>
      </div>
    </section>`;
}
function tutorModeLabel(mode){
  return ({speaking:"🎙 Practice Speaking",writing:"✏ Improve Writing",pronunciation:"〰 Check Pronunciation",feedback:"⭐ Get Feedback"})[mode]||mode;
}
function setTutorMode(mode){
  selectedTutorMode=mode;
  localStorage.setItem("gesn.selectedTutorMode",mode);
  renderAITutor();
}
function tutorScoreEstimate(){
  const text=localStorage.getItem("gesn.tutor.lastText")||"";
  if(!text) return 75;
  let score=60;
  if(text.length>120) score+=10;
  if(/\b(may|could|would|please|recommend|professional|local wisdom|heritage|community|audience)\b/i.test(text)) score+=12;
  if(/[.!?]/.test(text)) score+=6;
  if(text.split(/\s+/).length>80) score+=7;
  return Math.max(55,Math.min(95,score));
}
function tutorLetter(){
  const s=tutorScoreEstimate();
  return s>=90?"A":s>=80?"B":s>=70?"C":"D";
}
function tutorSummary(){
  const s=tutorScoreEstimate();
  if(s>=90) return "Excellent academic-professional communication. Maintain clarity and intercultural sensitivity.";
  if(s>=80) return "Strong improvement. Add more specific ESP terms and sharper organization.";
  if(s>=70) return "Good start. Strengthen professional tone, vocabulary precision, and task completion.";
  return "Revise carefully. Add structure, polite expressions, ESP vocabulary, and local-wisdom connection.";
}
function tutorWorkspaceHTML(m,province){
  const prompt = {
    speaking:`Prepare a three-minute role-play about ${province.heritage} for ${m.discipline}. Include greeting, purpose, explanation, question, clarification, and closing.`,
    writing:`Write a professional 180–220 word text for ${m.discipline} connected to ${province.heritage}. Use clear purpose, local-wisdom explanation, ESP terms, recommendation, and closing.`,
    pronunciation:`Read this sentence aloud: "This local wisdom reflects community values and supports professional communication for international audiences."`,
    feedback:`Paste your speaking transcript or writing draft. The AI Tutor will provide local feedback on clarity, tone, ESP accuracy, grammar, and intercultural sensitivity.`
  }[selectedTutorMode];
  return `<h3>${tutorModeLabel(selectedTutorMode)}</h3>
    <p><strong>Task Prompt:</strong> ${esc(prompt)}</p>
    <label>Your text / transcript / draft<textarea id="tutorInput" placeholder="Write your answer or paste your transcript here...">${esc(localStorage.getItem("gesn.tutor.lastText")||"")}</textarea></label>
    <div class="actions">
      <button class="btn primary" onclick="runTutorAnalysis()">Analyze</button>
      <button class="btn soft" onclick="speak(byId('tutorInput').value || '${esc(prompt)}')">▶ Play</button>
      <button class="btn soft" onclick="stopSpeak()">■ Stop</button>
      <button class="btn soft" onclick="recordSpeech('tutorRecordOut')">● Record</button>
      <button class="btn soft" onclick="insertTutorSample()">Insert Sample</button>
    </div>
    <div id="tutorRecordOut"></div>
    <div id="tutorResult">${localStorage.getItem("gesn.tutor.lastResult")||""}</div>
    <section class="feedback-card">
      <h4>AI Tutor Criteria</h4>
      <div class="feedback-score"><span>Clarity</span><span>ESP Vocabulary</span><span>Professional Tone</span><span>Intercultural Sensitivity</span><span>Pronunciation / Delivery</span><span>Task Completion</span></div>
    </section>`;
}
function insertTutorSample(){
  const p=selectedProvince();
  const m=courseMaterial(selectedCourseId||"tourism",selectedWeek||1);
  const sample=`Good morning. I would like to explain ${p.heritage} from ${p.name}. This local wisdom reflects community values and supports professional communication in ${m.discipline}. In a professional context, we can use it to welcome international audiences, explain meaning clearly, and show respect for Indonesian heritage. I recommend presenting the information with simple structure, polite expressions, and accurate ESP vocabulary. Thank you for listening. I would be pleased to answer your questions.`;
  byId("tutorInput").value=sample;
}
function runTutorAnalysis(){
  const text=byId("tutorInput").value.trim();
  if(!text) return toast("Input needed","Please write or record your text first.");
  localStorage.setItem("gesn.tutor.lastText",text);
  const words=text.split(/\s+/).filter(Boolean);
  const polite=(text.match(/\b(may|could|would|please|recommend|thank you|I would like)\b/gi)||[]).length;
  const esp=(text.match(/\b(professional|audience|communication|service|heritage|local wisdom|intercultural|clarity|task|context|community)\b/gi)||[]).length;
  const sentences=(text.match(/[.!?]+/g)||[]).length;
  const feedback=[];
  if(words.length<70) feedback.push("Develop the response with more details, examples, and professional explanation.");
  else feedback.push("The response has sufficient length for initial ESP practice.");
  if(polite<2) feedback.push("Add more polite professional expressions such as 'May I explain', 'I would recommend', or 'Thank you for your attention'.");
  else feedback.push("Polite professional tone is visible.");
  if(esp<4) feedback.push("Add more ESP vocabulary related to the selected discipline, audience, service, task, or professional context.");
  else feedback.push("ESP vocabulary is meaningfully included.");
  if(sentences<4) feedback.push("Improve organization by separating the opening, explanation, recommendation, and closing.");
  else feedback.push("Organization is clear enough for professional communication.");
  if(!/local wisdom|heritage|community|culture|values/i.test(text)) feedback.push("Connect the response more explicitly to Indonesian local wisdom or cultural heritage.");
  else feedback.push("Local-wisdom connection is present.");
  const score=tutorScoreEstimate();
  const html=`<section class="feedback-card"><h4>AI Tutor Feedback</h4><p><strong>Estimated score:</strong> ${score}% (${tutorLetter()})</p><ul class="check-list">${feedback.map(f=>`<li>${esc(f)}</li>`).join("")}</ul><p><strong>Next revision target:</strong> Improve clarity, add discipline-specific vocabulary, and close with a professional reflection.</p></section>`;
  localStorage.setItem("gesn.tutor.lastResult",html);
  byId("tutorResult").innerHTML=html;
  toast("AI Tutor feedback ready","Local rule-based feedback has been generated.");
}

Object.assign(navs,{
  student:[
    ["dashboard","⌂","Dashboard"],["courses","▣","My Courses"],["materials","▤","Materials Library"],["atlas","⌖","Nusantara Atlas"],["tutor","◉","AI Tutor"],["class","♙","My Class"],["assignments","□","Assessment"],["gradebook","◈","Gradebook"],["messages","✉","Messages"],["discussion","☏","Discussion Forum"],["reports","▥","Reports & Analytics"],["settings","⚙","Settings"]
  ],
  lecturer:[
    ["dashboard","⌂","Dashboard"],["courses","▣","My Courses"],["materials","▤","Materials Library"],["atlas","⌖","Nusantara Atlas"],["tutor","◉","AI Tutor"],["class","♙","My Class"],["assignments","□","Assessment"],["gradebook","◈","Gradebook"],["online","▭","Online Room"],["reports","▥","Reports & Analytics"],["settings","⚙","Settings"]
  ],
  admin:[
    ["dashboard","⌂","Dashboard"],["users","♚","Users & Institutions"],["courses","▣","My Courses"],["materials","▤","Materials Library"],["atlas","⌖","Nusantara Atlas"],["tutor","◉","AI Tutor"],["builder","▧","Content Builder"],["assignments","□","Assessment"],["online","▭","Online Room"],["analytics","▥","System Analytics"],["settings","⚙","Settings"]
  ]
});
function renderNav(role){
  byId("sideNav").innerHTML=(navs[role]||[]).map(([p,i,l])=>`<button data-page="${p}"><span>${i}</span>${l}</button>`).join("");
  byId("sideNav").querySelectorAll("button").forEach(b=>b.onclick=()=>navigate(b.dataset.page));
}
function navigate(page){
  currentPage=page;
  document.querySelectorAll(".side-nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  const item=(navs[session.role]||[]).find(n=>n[0]===page);
  byId("pageTitle").textContent=item?item[2]:page.replace(/\b\w/g,m=>m.toUpperCase());
  byId("roleKicker").textContent=`${session.role.toUpperCase()} WORKSPACE`;
  const route={
    dashboard:session.role==="student"?renderStudentDashboard:session.role==="lecturer"?renderLecturerDashboard:renderAdminDashboard,
    courses:renderCourseDashboard,
    materials:renderMaterials,
    atlas:renderAtlas,
    tutor:renderAITutor,
    class:renderClass,
    assignments:session.role==="student"?renderAssignments:renderTasks,
    gradebook:session.role==="student"?renderPortfolio:renderReview,
    messages:renderChat,
    calendar:renderCalendar,
    discussion:renderForum,
    reports:session.role==="student"?renderPortfolio:session.role==="admin"?renderSystemAnalytics:renderLecturerAnalytics,
    online:renderOnline,
    voice:renderAITutor,
    portfolio:renderPortfolio,
    builder:renderBuilder,
    tasks:renderTasks,
    review:renderReview,
    analytics:session.role==="admin"?renderSystemAnalytics:renderLecturerAnalytics,
    users:renderUsers,
    settings:renderSettings,
    forum:renderForum,
    chat:renderChat,
    helpdesk:renderHelpdesk
  };
  (route[page]||renderCourseDashboard)();
}
function featureQuickCards(){
  return `<div class="grid cols-2"><section class="panel"><h3>Nusantara Atlas</h3><p>Province-based ESP learning map with 38 local-wisdom modules connected to courses, skills, tasks, and assessments.</p><button class="btn primary" onclick="navigate('atlas')">Open Atlas</button></section><section class="panel"><h3>AI Tutor</h3><p>Local AI-assisted companion for speaking, writing, pronunciation, feedback, and professional revision without external API keys.</p><button class="btn primary" onclick="navigate('tutor')">Open AI Tutor</button></section></div>`;
}
function renderStudentDashboard(){
  const u=ensureUserCourseState(currentUser());
  const enrolled=(u?.enrollments||[]);
  byId("mainView").innerHTML=`
    <div class="grid cols-4">${metric("Enrolled Courses",enrolled.length,"Self-enrolled ESP disciplines")}${metric("Current Progress",courseCompletion(selectedCourseId)+"%","Selected course completion")}${metric("Quiz Average",courseQuizAvg(selectedCourseId)+"%","Selected course quizzes")}${metric("Submissions",courseSubmissions(selectedCourseId).length,"Selected course evidence")}</div>
    ${featureQuickCards()}
    <section class="panel"><h3>My Self-Enrolled Courses</h3><p>Select a course or self-enrol into another ESP discipline.</p><div class="course-catalog">${disciplines.map(d=>courseCatalogCard(d)).join("")}</div></section>`;
}
function renderLecturerDashboard(){
  const students=db.users.filter(u=>u.role==="student");
  byId("mainView").innerHTML=`
    <div class="grid cols-4">${metric("Students",students.length,"Registered learners")}${metric("ESP Courses",disciplines.length,"Available disciplines")}${metric("Atlas Modules",provinceAtlas.length,"Province materials")}${metric("Pending Review",db.submissions.filter(s=>!db.grades.some(g=>g.submissionId===s.id)).length,"Need feedback")}</div>
    ${featureQuickCards()}
    <section class="panel"><h3>Course Management</h3><p>All six ESP disciplines are available through self-enrolment and can be supported with the Atlas and AI Tutor.</p><div class="course-catalog">${disciplines.map(d=>courseCatalogCard(d)).join("")}</div></section>
    ${studentReportTable(students)}`;
}
function renderAdminDashboard(){
  byId("mainView").innerHTML=`
    <div class="grid cols-4">${metric("Users",db.users.length,"Total accounts")}${metric("ESP Disciplines",disciplines.length,"Self-enrolment courses")}${metric("Atlas Modules",provinceAtlas.length,"Province learning modules")}${metric("Submissions",db.submissions.length,"Learning evidence")}</div>
    ${featureQuickCards()}
    <section class="panel"><h3>ESP Course and Self-Enrolment Control</h3><p>Students can self-enrol in any of the six ESP disciplines. Admin can monitor enrolments, users, institutions, materials, analytics, Atlas modules, and AI Tutor use.</p><div class="course-catalog">${disciplines.map(d=>courseCatalogCard(d)).join("")}</div></section>
    <section class="panel"><h3>System Analytics Snapshot</h3>${analyticsHTML()}</section>`;
}
Object.assign(window,{renderAtlas,selectProvince,bookmarkProvince,renderAtlasBookmarks,renderProvinceListModal,openProvinceMaterial,renderAITutor,setTutorMode,runTutorAnalysis,insertTutorSample});

// ===== FINAL V11: User approval, professional Atlas, and reference-style AI Tutor =====
function roleLabel(role){return role ? role.charAt(0).toUpperCase()+role.slice(1) : 'User'}
function statusLabel(status){return status || 'active'}
function provinceProfile(p){return {cultural:`${p.name} is represented through ${p.heritage}. The module treats this heritage as a living source of professional knowledge rather than decorative cultural content. Students examine values, local practices, ethical representation, and how the meaning can be communicated to international audiences without stereotyping or over-simplification.`,esp:`This province is connected to ${p.discipline}. Learners practise discipline-specific English through workplace scenarios, role-play, technical or service explanation, audience clarification, professional writing, and reflective assessment.`,tasks:[p.task||'Complete a professional communication task.','Prepare a 90-second oral explanation for an international audience.','Write a professional text that connects local wisdom with the selected ESP field.','Record a speaking performance and review pronunciation, clarity, tone, and intercultural sensitivity.'],skills:['Reading: identify key local-wisdom values and professional meaning.','Listening: understand a briefing, announcement, or service interaction.','Speaking: deliver a role-play or explanation with clear pronunciation.','Writing: produce a professional text using ESP vocabulary.','Vocabulary: master local-culture terms and professional expressions.','Reflection: evaluate ethical representation and workplace relevance.']};}
function renderUsers(){const pendingLecturers=db.users.filter(u=>u.role==='lecturer'&&u.status==='pending');const allUsers=[...db.users].sort((a,b)=>(a.role+a.name).localeCompare(b.role+b.name));byId('mainView').innerHTML=`<section class="user-admin-grid"><div><section class="panel"><h3>Users & Institutions Control Center</h3><p>Approve lecturers, edit user profiles, map users to institutions, connect users with ESP disciplines, and monitor learning evidence.</p><div class="user-toolbar"><button class="btn primary" onclick="openAddInstitution()">Add Institution</button><button class="btn soft" onclick="openCreateUser()">Create User</button><button class="btn soft" onclick="bulkApproveLecturers()">Approve All Pending Lecturers</button><button class="btn soft" onclick="exportData()">Export Data</button></div></section><section class="panel"><h3>Pending Lecturer Approval</h3>${pendingLecturers.length?pendingLecturers.map(u=>userRow(u,true)).join(''):'<div class="empty">No lecturer is waiting for approval.</div>'}</section><section class="panel"><h3>User Accounts</h3>${allUsers.length?allUsers.map(u=>userRow(u,false)).join(''):'<div class="empty">No registered users yet. New student and lecturer accounts will appear here after registration.</div>'}</section></div><aside><section class="pending-highlight"><h3>Approval Workflow</h3><ul class="check-list"><li>Lecturers register from the landing page.</li><li>Their status becomes <strong>pending</strong>.</li><li>Admin reviews profile, institution, and expertise.</li><li>Admin clicks Approve to activate lecturer dashboard access.</li></ul></section><section class="institution-map-box"><h3>Institution Mapping</h3><label>Institution Name<input id="quickInstitution" placeholder="Add institution name"></label><button class="btn primary" onclick="quickAddInstitution()">Add Institution</button><div style="margin-top:12px">${db.institutions.length?db.institutions.map(i=>`<span class="tag">${esc(i)}</span>`).join(' '):'<div class="empty">No institution added yet.</div>'}</div></section><section class="institution-map-box"><h3>Account Summary</h3><div class="grid cols-2">${metric('Students',db.users.filter(u=>u.role==='student').length,'Registered learners')}${metric('Lecturers',db.users.filter(u=>u.role==='lecturer').length,'Registered lecturers')}${metric('Pending',pendingLecturers.length,'Need approval')}${metric('Institutions',db.institutions.length,'Mapped institutions')}</div></section></aside></section>`;}
function userRow(u){const discipline=courseTitle(u.disciplineId||selectedCourseId||'tourism');return `<div class="user-card-row"><div><strong>${esc(u.name||'Unnamed User')}</strong><small>${esc(u.email||'No email')}</small></div><div><span class="tag ${u.role==='lecturer'?'red':''}">${esc(roleLabel(u.role))}</span><small>${esc(discipline)}</small></div><div><span class="status ${statusLabel(u.status)}">${esc(statusLabel(u.status))}</span></div><div><small>Institution</small><strong>${esc(u.institution||'Not specified')}</strong></div><div class="user-actions">${u.role==='lecturer'&&u.status!=='approved'?`<button class="btn approve-btn" onclick="approveLecturer('${u.id}')">Approve</button>`:''}${u.role==='lecturer'&&u.status!=='rejected'?`<button class="btn reject-btn" onclick="rejectLecturer('${u.id}')">Reject</button>`:''}<button class="btn edit-btn" onclick="editUser('${u.id}')">Edit</button><button class="btn soft" onclick="openUserDetails('${u.id}')">Details</button><button class="btn soft" onclick="deleteUser('${u.id}')">Delete</button></div></div>`;}
function approveLecturer(id){const u=db.users.find(x=>x.id===id);if(!u)return;u.status='approved';save();toast('Lecturer approved',`${u.name} can now login as lecturer.`);renderUsers();}
function rejectLecturer(id){const u=db.users.find(x=>x.id===id);if(!u)return;u.status='rejected';save();toast('Lecturer rejected',`${u.name} access has been rejected.`);renderUsers();}
function bulkApproveLecturers(){let n=0;db.users.forEach(u=>{if(u.role==='lecturer'&&u.status==='pending'){u.status='approved';n++;}});save();toast('Approval completed',`${n} pending lecturer account(s) approved.`);renderUsers();}
function quickAddInstitution(){const v=byId('quickInstitution').value.trim();if(!v)return toast('Input needed','Enter institution name.');if(!db.institutions.includes(v))db.institutions.push(v);save();renderUsers();toast('Institution added',v);}
function openAddInstitution(){openModal(`<h2>Add Institution</h2><label>Institution Name<input id="newInstitutionName" placeholder="Institution / university / college name"></label><button class="btn primary" onclick="const v=byId('newInstitutionName').value.trim(); if(v){ if(!db.institutions.includes(v))db.institutions.push(v); save(); closeModal(); renderUsers(); toast('Institution added',v); }">Save Institution</button>`)}
function openCreateUser(){openModal(`<h2>Create User Account</h2><div class="field-grid two"><label>Full Name<input id="newUserName"></label><label>Email<input id="newUserEmail"></label><label>Password<input id="newUserPassword" value="123456"></label><label>Role<select id="newUserRole"><option value="student">Student</option><option value="lecturer">Lecturer</option></select></label><label>Institution<select id="newUserInstitution"><option>Not specified</option>${db.institutions.map(i=>`<option>${esc(i)}</option>`).join('')}</select></label><label>ESP Discipline<select id="newUserDiscipline">${disciplines.map(d=>`<option value="${d.id}">${esc(d.title)}</option>`).join('')}</select></label></div><button class="btn primary" onclick="saveCreatedUser()">Create User</button>`)}
function saveCreatedUser(){const role=byId('newUserRole').value;const name=byId('newUserName').value.trim();const email=byId('newUserEmail').value.trim().toLowerCase();const password=byId('newUserPassword').value||'123456';if(!name||!email)return toast('Incomplete','Add name and email.');if(db.users.some(u=>u.email===email))return toast('Email exists','Use another email.');db.users.push({id:uid(role==='lecturer'?'LEC':'STU'),role,status:role==='lecturer'?'pending':'active',name,email,password,institution:byId('newUserInstitution').value,disciplineId:byId('newUserDiscipline').value,progress:{weeks:[],quiz:{},badges:[]},created:new Date().toISOString()});save();closeModal();renderUsers();toast('User created',`${name} has been created.`);}
function editUser(id){const u=db.users.find(x=>x.id===id);if(!u)return;openModal(`<h2>Edit User</h2><div class="field-grid two"><label>Full Name<input id="editName" value="${esc(u.name||'')}"></label><label>Email<input id="editEmail" value="${esc(u.email||'')}"></label><label>Password<input id="editPassword" value="${esc(u.password||'')}"></label><label>Role<select id="editRole"><option value="student" ${u.role==='student'?'selected':''}>Student</option><option value="lecturer" ${u.role==='lecturer'?'selected':''}>Lecturer</option></select></label><label>Status<select id="editStatus"><option ${u.status==='active'?'selected':''}>active</option><option ${u.status==='pending'?'selected':''}>pending</option><option ${u.status==='approved'?'selected':''}>approved</option><option ${u.status==='rejected'?'selected':''}>rejected</option></select></label><label>Institution<select id="editInstitution"><option>Not specified</option>${db.institutions.map(i=>`<option ${u.institution===i?'selected':''}>${esc(i)}</option>`).join('')}</select></label><label>ESP Discipline<select id="editDiscipline">${disciplines.map(d=>`<option value="${d.id}" ${u.disciplineId===d.id?'selected':''}>${esc(d.title)}</option>`).join('')}</select></label></div><button class="btn primary" onclick="saveUserEdit('${id}')">Save User</button>`)}
function saveUserEdit(id){const u=db.users.find(x=>x.id===id);if(!u)return;u.name=byId('editName').value.trim();u.email=byId('editEmail').value.trim().toLowerCase();u.password=byId('editPassword').value;u.role=byId('editRole').value;u.status=byId('editStatus').value;u.institution=byId('editInstitution').value;u.disciplineId=byId('editDiscipline').value;save();closeModal();renderUsers();toast('User updated',u.name);}
function openUserDetails(id){const u=db.users.find(x=>x.id===id);if(!u)return;const subs=db.submissions.filter(s=>s.userId===id);openModal(`<h2>${esc(u.name)}</h2><p><strong>Role:</strong> ${esc(roleLabel(u.role))} • <strong>Status:</strong> ${esc(statusLabel(u.status))}</p><p><strong>Email:</strong> ${esc(u.email)}</p><p><strong>Institution:</strong> ${esc(u.institution||'Not specified')}</p><p><strong>ESP Discipline:</strong> ${esc(courseTitle(u.disciplineId||'tourism'))}</p><div class="grid cols-3">${metric('Submissions',subs.length,'Learning evidence')}${metric('Completed Weeks',u.progress?.weeks?.length||0,'General progress')}${metric('Course Enrolments',u.enrollments?.length||0,'Self-enrolled courses')}</div><h3>Submissions</h3>${subs.length?subs.map(s=>`<div class="card"><strong>${esc(s.title)}</strong><p>Week ${s.week} • ${new Date(s.date).toLocaleString()}</p></div>`).join(''):'<div class="empty">No submission yet.</div>'}`)}
function renderAtlas(){const current=selectedProvince();const profile=provinceProfile(current);const search=byId('atlasSearch')?.value?.toLowerCase()||'';const filtered=provinceAtlas.filter(p=>(p.name+' '+p.heritage+' '+p.discipline+' '+p.task).toLowerCase().includes(search));byId('mainView').innerHTML=`<section class="atlas-shell"><section class="atlas-hero"><h3>Nusantara Atlas</h3><p>A real-map ESP atlas connecting 38 Indonesian provinces with local wisdom, cultural heritage, discipline-specific English, semester materials, assessments, and AI Tutor practice.</p><div class="actions"><button class="btn primary" onclick="openProvinceMaterial('${current.id}')">Open Province Module</button><button class="btn soft" onclick="navigate('materials')">Semester Materials</button><button class="btn soft" onclick="navigate('tutor')">AI Tutor Practice</button></div></section>${atlasStats()}<div class="atlas-real-grid"><section class="panel"><div class="atlas-english-tabs"><button class="active">Map</button><button onclick="renderProvinceListModal()">Province List</button><button onclick="renderAtlasBookmarks()">Bookmarks</button></div><div class="atlas-map-real">${provinceAtlas.map(p=>`<button class="map-pin ${p.id===current.id?'active':''}" style="left:${p.x}%;top:${p.y}%;" onclick="selectProvince('${p.id}')" title="${esc(p.name)}"><span>${esc(p.name)}</span></button>`).join('')}<div class="map-legend"><span>38 Province Modules</span><span>Local Wisdom</span><span>ESP Discipline Links</span><span>Assessment Tasks</span></div></div></section><aside class="province-panel-scroll"><section class="atlas-detail"><h3>${esc(current.name)}</h3><p><strong>${esc(current.heritage)}</strong></p><div class="atlas-detail-grid"><div class="atlas-mini"><small>ESP Discipline</small><strong>${esc(current.discipline)}</strong></div><div class="atlas-mini"><small>Professional Task</small><strong>${esc(current.task)}</strong></div><div class="atlas-mini"><small>Learning Evidence</small><strong>Briefing, role-play, writing, reflection</strong></div><div class="atlas-mini"><small>Integrated Skills</small><strong>Reading, listening, speaking, writing, vocabulary, assessment</strong></div></div><div class="province-depth"><div class="province-depth-card"><h4>Cultural and Heritage Context</h4><p>${esc(profile.cultural)}</p></div><div class="province-depth-card"><h4>ESP Integration</h4><p>${esc(profile.esp)}</p></div><div class="province-depth-card"><h4>Professional Learning Tasks</h4><ul class="check-list">${profile.tasks.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div><div class="province-depth-card"><h4>Six-Skill Learning Design</h4><ul class="check-list">${profile.skills.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div></div><div class="actions"><button class="btn primary" onclick="openProvinceMaterial('${current.id}')">Open Full Module</button><button class="btn soft" onclick="bookmarkProvince('${current.id}')">Bookmark</button><button class="btn soft" onclick="speak('${esc(current.name)}. ${esc(current.heritage)}. ${esc(current.task)}')">▶ Listen</button><button class="btn soft" onclick="stopSpeak()">■ Stop</button></div></section><section class="panel" style="margin-top:16px"><h3>Search Province Modules</h3><label>Search<input id="atlasSearch" placeholder="Province, heritage, ESP discipline, task" value="${esc(search)}" oninput="renderAtlas()"></label><div class="atlas-list-full" style="margin-top:12px">${filtered.slice(0,20).map(p=>`<button class="${p.id===current.id?'active':''}" onclick="selectProvince('${p.id}')"><strong>${esc(p.name)}</strong><br><small>${esc(p.discipline)} • ${esc(p.heritage)}</small></button>`).join('')}</div></section></aside></div></section>`;}
function renderProvinceListModal(){openModal(`<h2>38 Province Modules</h2><p>Each province is mapped to local wisdom, ESP discipline, professional task, and semester-learning evidence.</p><div class="atlas-list-full">${provinceAtlas.map(p=>`<button onclick="closeModal();selectProvince('${p.id}')"><strong>${esc(p.name)}</strong><br><small>${esc(p.discipline)}</small><br><small>${esc(p.heritage)}</small></button>`).join('')}</div>`)}
function openProvinceMaterial(id){const p=provinceAtlas.find(x=>x.id===id)||selectedProvince();const profile=provinceProfile(p);const courseId=(disciplines.find(d=>d.title===p.discipline)?.id)||selectedCourseId||'tourism';selectedCourseId=courseId;localStorage.setItem('gesn.selectedCourseId',selectedCourseId);const m=courseMaterial(courseId,Math.max(1,Math.min(16,provinceAtlas.findIndex(x=>x.id===p.id)%16+1)));openModal(`<h2>${esc(p.name)} Province ESP Module</h2><p><strong>Heritage:</strong> ${esc(p.heritage)}</p><p><strong>ESP Discipline:</strong> ${esc(p.discipline)}</p><div class="module-grid"><section class="session"><h4>Core Reading</h4><p>${esc(profile.cultural)} ${esc(m.reading)}</p>${controls(profile.cultural+' '+m.reading)}</section><section class="session"><h4>Listening Briefing</h4><p>${esc(m.listening)}</p>${controls(m.listening)}</section><section class="session"><h4>Speaking Performance</h4><p>${esc(p.task)} ${esc(m.speaking)}</p>${controls(p.task+' '+m.speaking)}<div id="speechOut"></div></section><section class="session"><h4>Writing and Assessment</h4><p>${esc(m.writing)}</p><div class="table-wrap fit-small-table">${rubricTable(m)}</div></section></div><div class="actions"><button class="btn primary" onclick="closeModal();selectedWeek=${m.week};navigate('materials')">Open in Materials</button><button class="btn soft" onclick="closeModal();navigate('tutor')">Practice with AI Tutor</button></div>`)}
function renderAITutor(){const u=currentUser()||{};const courseId=selectedCourseId||u.disciplineId||'tourism';const m=courseMaterial(courseId,selectedWeek||1);const province=selectedProvince();byId('mainView').innerHTML=`<section class="tutor-shell"><section class="tutor-hero"><h3>AI Tutor</h3><p>Your personal English companion for speaking practice, writing improvement, pronunciation awareness, and professional ESP feedback. This local AI-assisted tool works without external API keys.</p><div class="ai-mode-buttons">${['speaking','writing','pronunciation','feedback'].map(mode=>`<button class="${selectedTutorMode===mode?'active':''}" onclick="setTutorMode('${mode}')">${tutorModeLabel(mode)}</button>`).join('')}</div></section><div class="ai-tutor-reference-layout"><section class="ai-phone-card"><div class="ai-phone-screen"><div class="ai-phone-hotspots">${['speaking','writing','pronunciation','feedback'].map(mode=>`<button class="${selectedTutorMode===mode?'active':''}" onclick="setTutorMode('${mode}')">${tutorModeLabel(mode).replace(/[🎙✏〰⭐]/g,'')}</button>`).join('')}</div><div class="ai-bottom-nav"><button class="active" onclick="setTutorMode('speaking')">Tutor</button><button onclick="showTutorHistory()">History</button><button onclick="showTutorGoals()">Goals</button><button onclick="showTutorSettings()">Settings</button></div></div></section><section class="ai-workspace-card"><h3>${tutorModeLabel(selectedTutorMode)}</h3><p><strong>Course:</strong> ${esc(m.discipline)} • <strong>Week:</strong> ${m.week} • <strong>Province:</strong> ${esc(province.name)} • <strong>Heritage:</strong> ${esc(province.heritage)}</p><p><strong>Task Prompt:</strong> ${esc(tutorPrompt(m,province))}</p><div class="ai-report-grid"><div class="ai-report-box"><small>Today's Focus</small><strong>${esc(m.path)}</strong></div><div class="ai-report-box"><small>Estimated Score</small><strong>${tutorScoreEstimate()}%</strong></div><div class="ai-report-box"><small>Feedback Grade</small><strong>${tutorLetter()}</strong></div></div><label>Your text / transcript / draft<textarea class="ai-textarea" id="tutorInput" placeholder="Write your answer or paste your transcript here...">${esc(localStorage.getItem('gesn.tutor.lastText')||'')}</textarea></label><div class="ai-live-tools"><button class="btn primary" onclick="runTutorAnalysis()">Analyze</button><button class="btn soft" onclick="speak(byId('tutorInput').value || '${esc(tutorPrompt(m,province))}')">▶ Play</button><button class="btn soft" onclick="stopSpeak()">■ Stop</button><button class="btn soft" onclick="recordSpeech('tutorRecordOut')">● Record</button></div><div class="actions" style="margin-top:8px"><button class="btn soft" onclick="insertTutorSample()">Insert Sample</button><button class="btn soft" onclick="clearTutorInput()">Clear</button><button class="btn soft" onclick="saveTutorNote()">Save Note</button></div><div id="tutorRecordOut"></div><div class="ai-feedback-result" id="tutorResult">${localStorage.getItem('gesn.tutor.lastResult')||''}</div></section></div></section>`;}
function tutorPrompt(m,province){return({speaking:`Prepare a three-minute professional role-play about ${province.heritage} for ${m.discipline}. Include greeting, purpose, explanation, question, clarification, and closing.`,writing:`Write a professional 180–220 word text for ${m.discipline} connected to ${province.heritage}. Use purpose, local-wisdom explanation, ESP terms, recommendation, and closing.`,pronunciation:`Read aloud clearly: This local wisdom reflects community values and supports professional communication for international audiences.`,feedback:`Paste your speaking transcript or writing draft. The AI Tutor will evaluate clarity, tone, ESP accuracy, grammar, pronunciation awareness, and intercultural sensitivity.`})[selectedTutorMode]||'Practice your ESP task.'}
function setTutorMode(mode){selectedTutorMode=mode;localStorage.setItem('gesn.selectedTutorMode',mode);renderAITutor();}
function clearTutorInput(){byId('tutorInput').value='';localStorage.removeItem('gesn.tutor.lastText');localStorage.removeItem('gesn.tutor.lastResult');byId('tutorResult').innerHTML='';}
function saveTutorNote(){const text=byId('tutorInput').value.trim();if(!text)return toast('Input needed','Write something before saving.');const notes=JSON.parse(localStorage.getItem('gesn.tutor.notes')||'[]');notes.unshift({text,mode:selectedTutorMode,date:new Date().toISOString(),course:selectedCourseId,province:selectedProvinceId});localStorage.setItem('gesn.tutor.notes',JSON.stringify(notes.slice(0,50)));toast('Tutor note saved','Your practice note has been saved locally.');}
function showTutorHistory(){const notes=JSON.parse(localStorage.getItem('gesn.tutor.notes')||'[]');openModal(`<h2>AI Tutor History</h2>${notes.length?notes.map(n=>`<div class="card"><strong>${esc(n.mode)} • ${new Date(n.date).toLocaleString()}</strong><p>${esc(n.text.slice(0,400))}</p></div>`).join(''):'<div class="empty">No saved tutor history yet.</div>'}`)}
function showTutorGoals(){openModal(`<h2>AI Tutor Goals</h2><ul class="check-list"><li>Speak with clear intelligibility and professional tone.</li><li>Use accurate ESP vocabulary for the selected discipline.</li><li>Connect local wisdom with ethical intercultural explanation.</li><li>Write organized professional texts with clear purpose and closing.</li><li>Record, review, and improve pronunciation and delivery.</li></ul>`)}
function showTutorSettings(){openModal(`<h2>AI Tutor Settings</h2><label>Speaker Language<input id="aiLang" value="${esc(db.settings.speakerLang||'en-US')}"></label><label>Speaker Rate<input id="aiRate" type="number" step="0.05" min="0.5" max="1.5" value="${db.settings.speakerRate||0.92}"></label><button class="btn primary" onclick="db.settings.speakerLang=byId('aiLang').value;db.settings.speakerRate=Number(byId('aiRate').value)||0.92;save();closeModal();toast('AI Tutor settings saved')">Save Settings</button>`)}
function runTutorAnalysis(){const text=byId('tutorInput').value.trim();if(!text)return toast('Input needed','Please write or record your text first.');localStorage.setItem('gesn.tutor.lastText',text);const words=text.split(/\s+/).filter(Boolean);const polite=(text.match(/\b(may|could|would|please|recommend|thank you|I would like|may I)\b/gi)||[]).length;const esp=(text.match(/\b(professional|audience|communication|service|heritage|local wisdom|intercultural|clarity|task|context|community|discipline|visitor|client|patient|technical|sustainability)\b/gi)||[]).length;const sentenceCount=(text.match(/[.!?]+/g)||[]).length;const local=(text.match(/\b(local wisdom|heritage|culture|community|values|Indonesia|Nusantara|province)\b/gi)||[]).length;let clarity=Math.min(95,55+Math.min(25,Math.round(words.length/6))+Math.min(15,sentenceCount*3));let tone=Math.min(95,60+polite*8);let vocab=Math.min(95,58+esp*5);let culture=Math.min(95,55+local*9);let score=Math.round((clarity+tone+vocab+culture)/4);const comments=[];comments.push(words.length<80?'Develop the response with fuller details and examples.':'Length is adequate for ESP performance practice.');comments.push(polite<2?'Add polite expressions such as May I explain, I would recommend, and Thank you for your attention.':'Professional politeness is visible.');comments.push(esp<5?'Add more discipline-specific ESP vocabulary.':'ESP vocabulary is meaningfully included.');comments.push(local<2?'Make the Indonesian local-wisdom connection more explicit.':'Local wisdom and cultural relevance are present.');comments.push(sentenceCount<4?'Use clearer paragraph organization: opening, explanation, recommendation, closing.':'Organization shows an understandable sequence.');const html=`<section class="feedback-card"><h4>AI Tutor Feedback</h4><p><strong>Overall Score:</strong> ${score}% (${score>=90?'A':score>=80?'B':score>=70?'C':'D'})</p><div class="feedback-score"><span>Clarity ${clarity}%</span><span>Professional Tone ${tone}%</span><span>ESP Vocabulary ${vocab}%</span><span>Intercultural Link ${culture}%</span></div><ul class="check-list">${comments.map(c=>`<li>${esc(c)}</li>`).join('')}</ul><p><strong>Next revision target:</strong> Strengthen specific ESP terminology, improve coherence, and connect the task more explicitly to Nusantara local wisdom.</p></section>`;localStorage.setItem('gesn.tutor.lastResult',html);byId('tutorResult').innerHTML=html;toast('AI Tutor feedback ready','Local rule-based ESP feedback has been generated.');}
function insertTutorSample(){const p=selectedProvince();const m=courseMaterial(selectedCourseId||'tourism',selectedWeek||1);const sample=`Good morning. I would like to explain ${p.heritage} from ${p.name}. This local wisdom reflects community values and supports professional communication in ${m.discipline}. In a professional context, we can use it to welcome international audiences, explain meaning clearly, and show respect for Indonesian heritage. I recommend presenting the information with simple organization, polite expressions, accurate ESP vocabulary, and a reflective closing. Thank you for your attention. I would be pleased to answer your questions.`;byId('tutorInput').value=sample;}
Object.assign(window,{renderUsers,approveLecturer,rejectLecturer,bulkApproveLecturers,quickAddInstitution,openAddInstitution,openCreateUser,saveCreatedUser,editUser,saveUserEdit,openUserDetails,renderAtlas,renderProvinceListModal,openProvinceMaterial,renderAITutor,setTutorMode,runTutorAnalysis,insertTutorSample,clearTutorInput,saveTutorNote,showTutorHistory,showTutorGoals,showTutorSettings});


// ===== FINAL V12: Online Room complete meeting metadata rebuilt =====
function todayISO(){
  const d=new Date();
  const m=String(d.getMonth()+1).padStart(2,"0");
  const day=String(d.getDate()).padStart(2,"0");
  return `${d.getFullYear()}-${m}-${day}`;
}
function generateRoomLink(title="", dateValue="", timeValue=""){
  const clean = `${title || "GARUDA ESP Nusantara"} ${dateValue || ""} ${timeValue || ""}`
    .replace(/[^a-zA-Z0-9]+/g,"-")
    .replace(/^-|-$/g,"")
    .toUpperCase();
  return `https://meet.jit.si/${clean || uid("GARUDA-ROOM")}`;
}
function roomDateLabel(r){
  if(r.date){
    const date = new Date(`${r.date}T${r.startTime || "00:00"}`);
    const niceDate = isNaN(date) ? r.date : date.toLocaleDateString(undefined,{weekday:"long",year:"numeric",month:"long",day:"numeric"});
    const time = [r.startTime,r.endTime].filter(Boolean).join(" – ");
    return `${niceDate}${time ? " • " + time : ""}${r.timezone ? " • " + r.timezone : ""}`;
  }
  return r.schedule || "Date and time not specified";
}
function refreshRoomLink(){
  const title=byId("roomTitle")?.value || "GARUDA ESP Nusantara";
  const date=byId("roomDate")?.value || "";
  const start=byId("roomStartTime")?.value || "";
  const link=byId("roomLink");
  if(link) link.value=generateRoomLink(title,date,start);
}
function renderOnline(){
  const rooms=db.rooms.filter(r=>r.scope==="all"||r.scope===session.role);
  const manage=["lecturer","admin"].includes(session.role);
  byId("mainView").innerHTML=`
    <section class="panel">
      <h3>Online Room Mode</h3>
      <p>Integrated virtual classroom support for live links, meeting metadata, date, month, year, start/end time, host, agenda, attendance, screen sharing, chat, breakout discussion, consultation, and assessment feedback.</p>
      <div class="grid cols-4">
        ${metric("Total Rooms",db.rooms.length,"Created meetings")}
        ${metric("Visible Rooms",rooms.length,"Available for this role")}
        ${metric("Attendance",db.rooms.reduce((a,r)=>a+(r.attendance||[]).length,0),"Recorded joins")}
        ${metric("Upcoming",db.rooms.filter(r=>r.date && r.date>=todayISO()).length,"Scheduled meetings")}
      </div>
    </section>
    ${manage?roomForm():""}
    <section class="panel">
      <h3>Meeting Schedule</h3>
      <div class="grid cols-2">${rooms.map(roomCard).join("") || '<div class="empty">No online room has been created yet.</div>'}</div>
    </section>`;
}
function roomForm(){
  return `<section class="panel">
    <h3>Create Virtual Room</h3>
    <p>Create a complete meeting record with date, month, year, time, host, agenda, metadata, and automatically generated room link.</p>
    <div class="field-grid two">
      <label>Meeting Title<input id="roomTitle" placeholder="Example: Week 1 ESP Speaking Consultation" oninput="refreshRoomLink()"></label>
      <label>Scope<select id="roomScope"><option value="all">All Roles</option><option value="student">Students Only</option><option value="lecturer">Lecturers Only</option><option value="admin">Admin Only</option></select></label>
      <label>Host / Facilitator<input id="roomHost" placeholder="Host name"></label>
      <label>Meeting Date<input id="roomDate" type="date" value="${todayISO()}" onchange="syncRoomDateParts();refreshRoomLink()"></label>
      <label>Month<input id="roomMonth" placeholder="Auto from date" readonly></label>
      <label>Year<input id="roomYear" placeholder="Auto from date" readonly></label>
      <label>Start Time<input id="roomStartTime" type="time" value="09:00" onchange="refreshRoomLink()"></label>
      <label>End Time<input id="roomEndTime" type="time" value="10:30"></label>
      <label>Timezone<select id="roomTimezone"><option>WIB</option><option>WITA</option><option>WIT</option><option>UTC</option></select></label>
      <label>Related ESP Course<select id="roomCourse">${disciplines.map(d=>`<option value="${d.id}">${esc(d.title)}</option>`).join("")}</select></label>
      <label>Related Week<select id="roomWeek">${Array.from({length:16},(_,i)=>`<option value="${i+1}">Week ${i+1}</option>`).join("")}</select></label>
      <label>Meeting Type<select id="roomType"><option>Live Class</option><option>Consultation</option><option>Speaking Practice</option><option>Writing Workshop</option><option>Assessment Feedback</option><option>Project Supervision</option><option>Lecturer Coordination</option></select></label>
      <label>Auto-generated Room Link<input id="roomLink" placeholder="Auto-generated virtual room link" readonly></label>
      <label>Features<input id="roomFeatures" value="Live session, Screen sharing, Attendance, Chat, Breakout discussion, Consultation, Assessment feedback"></label>
    </div>
    <label>Agenda<textarea id="roomAgenda" placeholder="Write the meeting agenda, learning goals, expected outputs, and follow-up task."></textarea></label>
    <label>Meeting Notes / Preparation<textarea id="roomNotes" placeholder="Optional: materials to prepare, pre-task, post-task, or attendance instructions."></textarea></label>
    <div class="actions">
      <button class="btn soft" onclick="refreshRoomLink()">Generate Link</button>
      <button class="btn primary" onclick="saveRoom()">Save Room</button>
      <button class="btn soft" onclick="previewRoomMetadata()">Preview Metadata</button>
    </div>
    <small class="generated-link-note">The link is generated automatically from the meeting title, date, and start time.</small>
  </section>`;
}
function syncRoomDateParts(){
  const d=byId("roomDate")?.value;
  if(!d) return;
  const date=new Date(`${d}T00:00:00`);
  if(!isNaN(date)){
    if(byId("roomMonth")) byId("roomMonth").value=date.toLocaleString(undefined,{month:"long"});
    if(byId("roomYear")) byId("roomYear").value=String(date.getFullYear());
  }
}
function previewRoomMetadata(){
  syncRoomDateParts();
  refreshRoomLink();
  const course=disciplines.find(d=>d.id===byId("roomCourse")?.value)?.title || "";
  const html = `<h2>Meeting Metadata Preview</h2>
    <div class="table-wrap"><table><tbody>
      <tr><td><strong>Title</strong></td><td>${esc(byId("roomTitle")?.value||"-")}</td></tr>
      <tr><td><strong>Date</strong></td><td>${esc(byId("roomDate")?.value||"-")} (${esc(byId("roomMonth")?.value||"-")} ${esc(byId("roomYear")?.value||"-")})</td></tr>
      <tr><td><strong>Time</strong></td><td>${esc(byId("roomStartTime")?.value||"-")} – ${esc(byId("roomEndTime")?.value||"-")} ${esc(byId("roomTimezone")?.value||"")}</td></tr>
      <tr><td><strong>Course</strong></td><td>${esc(course)} • Week ${esc(byId("roomWeek")?.value||"-")}</td></tr>
      <tr><td><strong>Type</strong></td><td>${esc(byId("roomType")?.value||"-")}</td></tr>
      <tr><td><strong>Link</strong></td><td>${esc(byId("roomLink")?.value||"-")}</td></tr>
      <tr><td><strong>Agenda</strong></td><td>${esc(byId("roomAgenda")?.value||"-")}</td></tr>
    </tbody></table></div>`;
  openModal(html);
}
function roomCard(r){
  const course=disciplines.find(d=>d.id===r.courseId)?.title || r.course || "General ESP";
  return `<article class="room-card">
    <h3>${esc(r.title)}</h3>
    <p>${esc(r.agenda)}</p>
    <p>
      <span class="tag red">${esc(r.scope)}</span>
      <span class="tag">${esc(r.type || "Live Class")}</span>
      <span class="tag">Host: ${esc(r.host)}</span>
    </p>
    <div class="atlas-detail-grid">
      <div class="atlas-mini"><small>Date</small><strong>${esc(roomDateLabel(r))}</strong></div>
      <div class="atlas-mini"><small>Course</small><strong>${esc(course)} • Week ${esc(r.week || "-")}</strong></div>
      <div class="atlas-mini"><small>Month / Year</small><strong>${esc(r.month || "-")} ${esc(r.year || "")}</strong></div>
      <div class="atlas-mini"><small>Attendance</small><strong>${(r.attendance||[]).length} participant(s)</strong></div>
    </div>
    <ul class="check-list">${(r.features||[]).map(f=>`<li>${esc(f)}</li>`).join("")}</ul>
    ${r.notes?`<p><strong>Preparation:</strong> ${esc(r.notes)}</p>`:""}
    <div class="actions">
      <button class="btn primary" onclick="joinRoom('${r.id}')">Join Room</button>
      <button class="btn soft" onclick="copyRoomLink('${r.id}')">Copy Link</button>
      <button class="btn soft" onclick="openRoomDetails('${r.id}')">Details</button>
      ${["lecturer","admin"].includes(session.role)?`<button class="btn soft" onclick="deleteRoom('${r.id}')">Delete</button>`:""}
    </div>
  </article>`;
}
function saveRoom(){
  syncRoomDateParts();
  refreshRoomLink();
  const title=byId("roomTitle").value.trim();
  const host=byId("roomHost").value.trim();
  const agenda=byId("roomAgenda").value.trim();
  const date=byId("roomDate").value;
  const startTime=byId("roomStartTime").value;
  const endTime=byId("roomEndTime").value;
  if(!title||!host||!agenda||!date||!startTime) return toast("Incomplete","Complete title, host, date, start time, and agenda.");
  const r={
    id:uid("ROOM"),
    title,
    scope:byId("roomScope").value,
    host,
    date,
    month:byId("roomMonth").value,
    year:byId("roomYear").value,
    startTime,
    endTime,
    timezone:byId("roomTimezone").value,
    courseId:byId("roomCourse").value,
    week:byId("roomWeek").value,
    type:byId("roomType").value,
    schedule:`${date} ${startTime}${endTime? "–"+endTime:""} ${byId("roomTimezone").value}`,
    link:byId("roomLink").value.trim() || generateRoomLink(title,date,startTime),
    agenda,
    notes:byId("roomNotes").value.trim(),
    features:byId("roomFeatures").value.split(",").map(x=>x.trim()).filter(Boolean),
    attendance:[],
    createdBy:session.name||session.role,
    createdAt:new Date().toISOString()
  };
  db.rooms.unshift(r);
  save();
  toast("Room saved","Meeting metadata and auto-generated link have been recorded.");
  renderOnline();
}
function openRoomDetails(id){
  const r=db.rooms.find(x=>x.id===id);
  if(!r) return toast("Room not found");
  const course=disciplines.find(d=>d.id===r.courseId)?.title || "General ESP";
  openModal(`<h2>${esc(r.title)}</h2>
    <div class="table-wrap"><table><tbody>
      <tr><td><strong>Date</strong></td><td>${esc(roomDateLabel(r))}</td></tr>
      <tr><td><strong>Month / Year</strong></td><td>${esc(r.month||"-")} ${esc(r.year||"")}</td></tr>
      <tr><td><strong>Host</strong></td><td>${esc(r.host)}</td></tr>
      <tr><td><strong>Course</strong></td><td>${esc(course)} • Week ${esc(r.week||"-")}</td></tr>
      <tr><td><strong>Type</strong></td><td>${esc(r.type||"Live Class")}</td></tr>
      <tr><td><strong>Scope</strong></td><td>${esc(r.scope)}</td></tr>
      <tr><td><strong>Link</strong></td><td>${esc(r.link)}</td></tr>
      <tr><td><strong>Agenda</strong></td><td>${esc(r.agenda)}</td></tr>
      <tr><td><strong>Preparation Notes</strong></td><td>${esc(r.notes||"-")}</td></tr>
      <tr><td><strong>Attendance</strong></td><td>${(r.attendance||[]).map(a=>esc(a.user)+" ("+new Date(a.date).toLocaleString()+")").join("<br>")||"No attendance yet."}</td></tr>
    </tbody></table></div>
    <div class="actions"><button class="btn primary" onclick="joinRoom('${r.id}')">Join Room</button><button class="btn soft" onclick="copyRoomLink('${r.id}')">Copy Link</button></div>`);
}
function copyRoomLink(id){
  const r=db.rooms.find(x=>x.id===id);
  if(!r) return;
  navigator.clipboard?.writeText(r.link).then(()=>toast("Copied","Room link copied to clipboard.")).catch(()=>openModal(`<h2>Room Link</h2><p>${esc(r.link)}</p>`));
}
function deleteRoom(id){
  if(!confirm("Delete this online room?")) return;
  db.rooms=db.rooms.filter(r=>r.id!==id);
  save();
  toast("Room deleted","Online room has been removed.");
  renderOnline();
}
Object.assign(window,{todayISO,generateRoomLink,refreshRoomLink,renderOnline,roomForm,syncRoomDateParts,previewRoomMetadata,roomCard,saveRoom,openRoomDetails,copyRoomLink,deleteRoom});


// ===== FINAL V13: 5D Nusantara Map + Garuda AI Tutor + short room links/editing =====
let editingRoomId = null;

function provinceCategory(p){
  if(/Tourism/i.test(p.discipline)) return "Tourism & Hospitality";
  if(/Business/i.test(p.discipline)) return "Business & Entrepreneurship";
  if(/Engineering|Technology/i.test(p.discipline)) return "Engineering & Technology";
  if(/Health/i.test(p.discipline)) return "Health & Care";
  if(/Maritime|Environment/i.test(p.discipline)) return "Maritime & Environment";
  return "Education & Communication";
}
function provincePack(p){
  const cat = provinceCategory(p);
  const focus = {
    "Tourism & Hospitality": "visitor orientation, destination interpretation, hospitality etiquette, service recovery, and responsible tourism.",
    "Business & Entrepreneurship": "product pitching, buyer-seller negotiation, digital promotion, invoice communication, customer response, and local enterprise storytelling.",
    "Engineering & Technology": "technical explanation, process description, user support, innovation demonstration, documentation, and inclusive technology communication.",
    "Health & Care": "patient interaction, health education, empathy, medication instruction, case notes, public health announcements, and safety communication.",
    "Maritime & Environment": "vessel safety, fisheries operations, environmental reporting, conservation briefing, port logistics, route explanation, and sustainability advocacy.",
    "Education & Communication": "classroom instruction, public communication, facilitation, moderation, community training, feedback language, and academic presentation."
  }[cat] || "professional communication, local-wisdom explanation, and discipline-based ESP performance.";
  const skills = [
    `Reading: interpret a province-based professional text about ${p.heritage}.`,
    `Listening: understand a short briefing related to ${p.task}`,
    `Speaking: deliver a three-minute professional explanation for international audiences.`,
    `Writing: prepare a concise professional text using local-wisdom evidence.`,
    `Vocabulary/Grammar: apply ESP terminology, polite modals, sequencing, and clarification language.`,
    `Reflection: evaluate clarity, intelligibility, intercultural sensitivity, and professional tone.`
  ];
  return {cat,focus,skills};
}
function renderAtlas(){
  const current=selectedProvince();
  const search = byId("atlasSearch")?.value?.toLowerCase() || "";
  const filtered=provinceAtlas.filter(p=>(p.name+" "+p.heritage+" "+p.discipline+" "+provinceCategory(p)).toLowerCase().includes(search));
  const pack=provincePack(current);
  byId("mainView").innerHTML=`
    <section class="atlas-v13">
      <section class="atlas-v13-head">
        <div>
          <h3>Nusantara Atlas</h3>
          <p>A 5D-style interactive Indonesia map connecting 38 province modules, local wisdom, cultural heritage, ESP disciplines, weekly materials, AI Tutor practice, and assessment tasks.</p>
        </div>
        <div class="atlas-v13-actions">
          <button class="btn primary" onclick="openProvinceMaterial('${current.id}')">Open Province Module</button>
          <button class="btn soft" onclick="navigate('materials')">Open Materials</button>
          <button class="btn soft" onclick="navigate('tutor')">Open AI Tutor</button>
        </div>
      </section>

      <div class="atlas-v13-tabs">
        <button class="active">Map</button>
        <button onclick="renderProvinceListModal()">Province List</button>
        <button onclick="renderAtlasBookmarks()">Bookmarks</button>
        <button onclick="openModal(atlasMethodologyHTML())">Learning Design</button>
      </div>

      <div class="atlas-v13-layout">
        <section class="atlas-v13-map-card">
          <div class="atlas-v13-map">
            ${provinceAtlas.map(p=>`<button class="map-pin-v13 ${p.id===current.id?'active':''}" style="left:${p.x}%;top:${p.y}%;" onclick="selectProvince('${p.id}')" title="${esc(p.name)}"><span>${esc(p.name)}</span></button>`).join("")}
          </div>
          <div class="atlas-v13-strip">
            <span>38 Province Modules</span><span>Local Wisdom</span><span>ESP Discipline Links</span><span>Assessment Tasks</span>
          </div>
        </section>

        <aside class="atlas-v13-side">
          <label class="atlas-search">Search Province / Heritage / ESP Discipline
            <input id="atlasSearch" value="${esc(search)}" placeholder="e.g., Bali, Batik, Maritime, Health" oninput="renderAtlas()">
          </label>

          <section class="atlas-v13-detail">
            <h3>${esc(current.name)}</h3>
            <div class="atlas-v13-badge">${esc(pack.cat)}</div>
            <p><strong>Cultural and Heritage Focus:</strong> ${esc(current.heritage)}</p>
            <p><strong>Professional ESP Task:</strong> ${esc(current.task)}</p>
            <p><strong>Learning Focus:</strong> ${esc(pack.focus)}</p>
            <div class="atlas-mini-grid">
              <div><small>Discipline</small><strong>${esc(current.discipline)}</strong></div>
              <div><small>Six Skills</small><strong>Reading • Listening • Speaking • Writing • Vocabulary • Reflection</strong></div>
              <div><small>Evidence</small><strong>Briefing • Recording • Writing • Quiz • Portfolio</strong></div>
              <div><small>Integration</small><strong>Materials • AI Tutor • Assessment</strong></div>
            </div>
            <div class="actions">
              <button class="btn primary" onclick="openProvinceMaterial('${current.id}')">Open Module</button>
              <button class="btn soft" onclick="openProvinceSkills('${current.id}')">Six-Skill Plan</button>
              <button class="btn soft" onclick="bookmarkProvince('${current.id}')">Bookmark</button>
              <button class="btn soft" onclick="speak('${esc(current.name)}. ${esc(current.heritage)}. ${esc(current.task)}')">▶ Play</button>
              <button class="btn soft" onclick="stopSpeak()">■ Stop</button>
            </div>
          </section>

          <section class="province-button-panel">
            <h3>Province Selection</h3>
            <div class="province-button-grid">
              ${filtered.map(p=>`<button class="${p.id===current.id?'active':''}" onclick="selectProvince('${p.id}')"><strong>${esc(p.name)}</strong><small>${esc(provinceCategory(p))}</small></button>`).join("")}
            </div>
          </section>
        </aside>
      </div>
    </section>`;
}
function atlasMethodologyHTML(){
  return `<h2>Nusantara Atlas Learning Design</h2>
  <p>The Atlas connects local wisdom and Indonesian heritage with ESP learning through six integrated skills. Each province module is mapped to one professional discipline, one communicative scenario, and one assessment product.</p>
  <div class="table-wrap"><table><thead><tr><th>Layer</th><th>Implementation</th></tr></thead><tbody>
    <tr><td>Culture & Heritage</td><td>Province-specific local wisdom, artefacts, values, ecological knowledge, community practices, and heritage communication.</td></tr>
    <tr><td>ESP Discipline</td><td>Tourism, business, technology, health, maritime/environment, or education communication.</td></tr>
    <tr><td>Six Skills</td><td>Reading, listening, speaking, writing, vocabulary/grammar, and reflective professional performance.</td></tr>
    <tr><td>Technology</td><td>Interactive map, AI Tutor, play/stop/record support, self-enrolment materials, online room, assessment, and reporting.</td></tr>
    <tr><td>Assessment</td><td>Briefing, role-play, professional text, quiz, rubric, reflection, and portfolio evidence.</td></tr>
  </tbody></table></div>`;
}
function openProvinceSkills(id){
  const p=provinceAtlas.find(x=>x.id===id)||selectedProvince();
  const pack=provincePack(p);
  openModal(`<h2>${esc(p.name)} — Six-Skill ESP Plan</h2><p><strong>${esc(p.heritage)}</strong></p><ul class="check-list">${pack.skills.map(s=>`<li>${esc(s)}</li>`).join("")}</ul><div class="actions"><button class="btn primary" onclick="closeModal();openProvinceMaterial('${p.id}')">Open Province Module</button><button class="btn soft" onclick="closeModal();navigate('tutor')">Practice with AI Tutor</button></div>`);
}
function renderProvinceListModal(){
  openModal(`<h2>Province List — 38 Nusantara Modules</h2><div class="province-list-v13">${provinceAtlas.map(p=>`<button onclick="closeModal();selectProvince('${p.id}')"><strong>${esc(p.name)}</strong><span>${esc(provinceCategory(p))}</span><small>${esc(p.heritage)}</small></button>`).join("")}</div>`);
}
function renderAtlasBookmarks(){
  const ids=JSON.parse(localStorage.getItem("gesn.atlas.bookmarks")||"[]");
  const items=ids.map(id=>provinceAtlas.find(p=>p.id===id)).filter(Boolean);
  openModal(`<h2>Nusantara Atlas Bookmarks</h2>${items.length?`<div class="province-list-v13">${items.map(p=>`<button onclick="closeModal();selectProvince('${p.id}')"><strong>${esc(p.name)}</strong><span>${esc(provinceCategory(p))}</span><small>${esc(p.heritage)}</small></button>`).join("")}</div>`:'<div class="empty">No bookmarked province yet.</div>'}`);
}
function openProvinceMaterial(id){
  const p=provinceAtlas.find(x=>x.id===id)||selectedProvince();
  const courseId = (disciplines.find(d=>d.title===p.discipline)?.id) || selectedCourseId || "tourism";
  selectedCourseId=courseId;
  localStorage.setItem("gesn.selectedCourseId",selectedCourseId);
  const m=courseMaterial(courseId, Math.max(1, Math.min(16, provinceAtlas.findIndex(x=>x.id===p.id)%16+1)));
  const pack=provincePack(p);
  openModal(`<h2>${esc(p.name)} Province ESP Module</h2>
    <p><strong>Heritage:</strong> ${esc(p.heritage)}</p>
    <p><strong>ESP Discipline:</strong> ${esc(p.discipline)}</p>
    <p><strong>Professional Task:</strong> ${esc(p.task)}</p>
    <p><strong>Discipline Focus:</strong> ${esc(pack.focus)}</p>
    <div class="module-grid">
      <section class="session"><h4>Reading</h4><p>${esc(m.reading)}</p>${controls(m.reading)}</section>
      <section class="session"><h4>Listening</h4><p>${esc(m.listening)}</p>${controls(m.listening)}</section>
      <section class="session"><h4>Speaking Scenario</h4><p>${esc(p.task)} Learners prepare a three-minute professional explanation, answer one question, clarify meaning, and record the performance.</p>${controls(p.task)}</section>
      <section class="session"><h4>Writing Task</h4><p>Write a 180–220 word professional text that introduces ${esc(p.heritage)} and explains its value for ${esc(p.discipline)}.</p></section>
      <section class="session"><h4>Vocabulary & Grammar</h4><p>${esc(m.grammar)}</p><div class="table-wrap fit-small-table">${vocabTable(m)}</div></section>
      <section class="session"><h4>Assessment</h4><div class="table-wrap fit-small-table">${rubricTable(m)}</div></section>
    </div>
    <div class="actions"><button class="btn primary" onclick="closeModal();selectedWeek=${m.week};navigate('materials')">Open in Materials</button><button class="btn soft" onclick="closeModal();navigate('tutor')">Practice with AI Tutor</button></div>`);
}

// AI Tutor rebuilt with Garuda AI picture and working feature tabs.
function renderAITutor(){
  const u=currentUser()||{};
  const courseId=selectedCourseId || u.disciplineId || "tourism";
  const m=courseMaterial(courseId, selectedWeek || 1);
  const province=selectedProvince();
  const pack=provincePack(province);
  byId("mainView").innerHTML=`
    <section class="ai-tutor-v13">
      <section class="ai-phone-card">
        <div class="ai-phone-top">
          <div><strong>AI Tutor</strong><small>Your Personal ESP English Companion</small></div>
          <span>⋮</span>
        </div>
        <div class="ai-hero-scene">
          <div class="ai-bubble"><strong>Hello, I am Garuda.</strong><br>How can I help you today?</div>
          <img src="assets/garuda-ai-tutor-character.png" alt="Garuda AI Tutor">
        </div>
        <div class="ai-mode-list">
          <button onclick="setTutorMode('speaking')" class="${selectedTutorMode==='speaking'?'active':''}">🎙 Practice Speaking</button>
          <button onclick="setTutorMode('writing')" class="${selectedTutorMode==='writing'?'active':''}">✏ Improve Writing</button>
          <button onclick="setTutorMode('pronunciation')" class="${selectedTutorMode==='pronunciation'?'active':''}">〰 Check Pronunciation</button>
          <button onclick="setTutorMode('feedback')" class="${selectedTutorMode==='feedback'?'active':''}">⭐ Get Feedback</button>
        </div>
        <div class="ai-focus-card">
          <small>Today’s Focus</small>
          <strong>${esc(m.path)}</strong>
          <div class="ai-progress"><span style="width:${tutorScoreEstimate()}%"></span></div>
          <b>${tutorScoreEstimate()}%</b>
        </div>
        <div class="ai-feedback-mini">
          <div class="grade-ring" style="--score:${tutorScoreEstimate()}%"><span>${tutorLetter()}</span></div>
          <p><strong>Feedback Summary</strong><br>${tutorSummary()}</p>
        </div>
        <div class="ai-bottom-nav"><button class="active">Tutor</button><button onclick="openTutorHistory()">History</button><button onclick="openTutorGoals()">Goals</button><button onclick="openTutorSettings()">Settings</button></div>
      </section>

      <section class="ai-workspace-v13">
        <div class="ai-work-head">
          <h3>${tutorModeLabel(selectedTutorMode)}</h3>
          <p><strong>Course:</strong> ${esc(m.discipline)} • <strong>Week:</strong> ${m.week} • <strong>Province:</strong> ${esc(province.name)} • <strong>Heritage:</strong> ${esc(province.heritage)}</p>
          <p><strong>ESP Focus:</strong> ${esc(pack.focus)}</p>
        </div>
        ${tutorWorkspaceHTML(m,province)}
      </section>
    </section>`;
}
function tutorWorkspaceHTML(m,province){
  const prompt = {
    speaking:`Prepare a three-minute role-play about ${province.heritage} for ${m.discipline}. Include greeting, purpose, local-wisdom explanation, professional task, one question, one clarification, and closing.`,
    writing:`Write a professional 180–220 word text for ${m.discipline} connected to ${province.heritage}. Use clear purpose, local-wisdom explanation, ESP terms, recommendation, and closing.`,
    pronunciation:`Read this sentence aloud: "This local wisdom reflects community values and supports professional communication for international audiences."`,
    feedback:`Paste your speaking transcript or writing draft. The AI Tutor will provide local feedback on clarity, tone, ESP accuracy, grammar, and intercultural sensitivity.`
  }[selectedTutorMode] || "";
  return `<div class="tutor-task-card">
    <p><strong>Task Prompt:</strong> ${esc(prompt)}</p>
    <div class="grid cols-3">
      ${metric("Today's Focus",m.path,"Skill pathway")}
      ${metric("Estimated Score",tutorScoreEstimate()+"%","Local AI check")}
      ${metric("Feedback Grade",tutorLetter(),"Performance level")}
    </div>
    <label>Your Text / Transcript / Draft<textarea id="tutorInput" placeholder="Write your answer or paste your transcript here...">${esc(localStorage.getItem("gesn.tutor.lastText")||"")}</textarea></label>
    <div class="actions">
      <button class="btn primary" onclick="runTutorAnalysis()">Analyze</button>
      <button class="btn soft" onclick="speak(byId('tutorInput').value || '${esc(prompt)}')">▶ Play</button>
      <button class="btn soft" onclick="stopSpeak()">■ Stop</button>
      <button class="btn soft" onclick="recordSpeech('tutorRecordOut')">● Record</button>
      <button class="btn soft" onclick="insertTutorSample()">Insert Sample</button>
      <button class="btn soft" onclick="clearTutorInput()">Clear</button>
      <button class="btn soft" onclick="saveTutorNote()">Save Note</button>
    </div>
    <div id="tutorRecordOut"></div>
    <div id="tutorResult">${localStorage.getItem("gesn.tutor.lastResult")||""}</div>
  </div>`;
}
function clearTutorInput(){byId("tutorInput").value="";localStorage.removeItem("gesn.tutor.lastText");localStorage.removeItem("gesn.tutor.lastResult");byId("tutorResult").innerHTML="";toast("Cleared","AI Tutor workspace cleared.");}
function saveTutorNote(){
  const text=byId("tutorInput")?.value?.trim();
  if(!text) return toast("No text","Write or analyze a response before saving.");
  const notes=JSON.parse(localStorage.getItem("gesn.tutor.notes")||"[]");
  notes.unshift({date:new Date().toISOString(),mode:selectedTutorMode,text,score:tutorScoreEstimate(),province:selectedProvince().name,course:courseTitle(selectedCourseId||"tourism")});
  localStorage.setItem("gesn.tutor.notes",JSON.stringify(notes.slice(0,30)));
  toast("Saved","AI Tutor note saved to History.");
}
function openTutorHistory(){
  const notes=JSON.parse(localStorage.getItem("gesn.tutor.notes")||"[]");
  openModal(`<h2>AI Tutor History</h2>${notes.length?notes.map(n=>`<div class="card"><strong>${esc(n.mode)} • ${esc(n.course)} • ${esc(n.province)}</strong><p>${esc(n.text.slice(0,260))}${n.text.length>260?"...":""}</p><span class="tag red">${n.score}%</span><span class="tag">${new Date(n.date).toLocaleString()}</span></div>`).join(""):'<div class="empty">No tutor history yet.</div>'}`);
}
function openTutorGoals(){
  openModal(`<h2>AI Tutor Goals</h2><ul class="check-list"><li>Use at least five discipline-specific ESP terms.</li><li>Organize responses with opening, context, explanation, recommendation, and closing.</li><li>Connect Indonesian local wisdom with professional communication.</li><li>Improve intelligibility, clarity, tone, and task completion.</li><li>Save one reflection note after every practice session.</li></ul>`);
}
function openTutorSettings(){
  openModal(`<h2>AI Tutor Settings</h2><p>The AI Tutor runs locally without an external API key. It gives rule-based ESP feedback for classroom practice.</p><div class="actions"><button class="btn soft" onclick="localStorage.removeItem('gesn.tutor.notes');closeModal();toast('Reset','Tutor history cleared.')">Clear History</button><button class="btn primary" onclick="closeModal()">Done</button></div>`);
}

// Online Room: short link code, share/copy, edit, details, delete.
function roomCodeFrom(title="",dateValue="",timeValue=""){
  const base=(title||"GARUDA ESP").replace(/[^A-Za-z0-9]+/g,"").slice(0,6).toUpperCase()||"GARUDA";
  const date=(dateValue||todayISO()).replace(/-/g,"").slice(2);
  const time=(timeValue||"0900").replace(":","");
  return `${base}-${date}-${time}`;
}
function generateRoomLink(title="", dateValue="", timeValue=""){
  const code=roomCodeFrom(title,dateValue,timeValue);
  const base=location.href.split("#")[0].replace(/index\.html$/,"");
  return `${base}#room-${code}`;
}
function refreshRoomLink(){
  const title=byId("roomTitle")?.value || "GARUDA ESP Nusantara";
  const date=byId("roomDate")?.value || todayISO();
  const start=byId("roomStartTime")?.value || "09:00";
  const link=byId("roomLink");
  const code=byId("roomCode");
  if(code) code.value=roomCodeFrom(title,date,start);
  if(link) link.value=generateRoomLink(title,date,start);
}
function roomForm(room=null){
  const isEdit=!!room;
  editingRoomId=room?.id||null;
  const date=room?.date||todayISO();
  const start=room?.startTime||"09:00";
  const end=room?.endTime||"10:30";
  setTimeout(()=>{syncRoomDateParts();refreshRoomLink();},0);
  return `<section class="panel" id="roomFormPanel">
    <h3>${isEdit?"Edit Virtual Room":"Create Virtual Room"}</h3>
    <p>Create a complete meeting record with date, month, year, time, host, agenda, metadata, and automated short room link.</p>
    <div class="field-grid two">
      <label>Meeting Title<input id="roomTitle" value="${esc(room?.title||"")}" placeholder="Example: Week 1 ESP Speaking Consultation" oninput="refreshRoomLink()"></label>
      <label>Scope<select id="roomScope"><option value="all" ${room?.scope==="all"?"selected":""}>All Roles</option><option value="student" ${room?.scope==="student"?"selected":""}>Students Only</option><option value="lecturer" ${room?.scope==="lecturer"?"selected":""}>Lecturers Only</option><option value="admin" ${room?.scope==="admin"?"selected":""}>Admin Only</option></select></label>
      <label>Host / Facilitator<input id="roomHost" value="${esc(room?.host||"")}" placeholder="Host name"></label>
      <label>Meeting Date<input id="roomDate" type="date" value="${date}" onchange="syncRoomDateParts();refreshRoomLink()"></label>
      <label>Month<input id="roomMonth" value="${esc(room?.month||"")}" placeholder="Auto from date" readonly></label>
      <label>Year<input id="roomYear" value="${esc(room?.year||"")}" placeholder="Auto from date" readonly></label>
      <label>Start Time<input id="roomStartTime" type="time" value="${start}" onchange="refreshRoomLink()"></label>
      <label>End Time<input id="roomEndTime" type="time" value="${end}"></label>
      <label>Timezone<select id="roomTimezone"><option ${room?.timezone==="WIB"?"selected":""}>WIB</option><option ${room?.timezone==="WITA"?"selected":""}>WITA</option><option ${room?.timezone==="WIT"?"selected":""}>WIT</option><option ${room?.timezone==="UTC"?"selected":""}>UTC</option></select></label>
      <label>Related ESP Course<select id="roomCourse">${disciplines.map(d=>`<option value="${d.id}" ${room?.courseId===d.id?"selected":""}>${esc(d.title)}</option>`).join("")}</select></label>
      <label>Related Week<select id="roomWeek">${Array.from({length:16},(_,i)=>`<option value="${i+1}" ${String(room?.week||"")===String(i+1)?"selected":""}>Week ${i+1}</option>`).join("")}</select></label>
      <label>Meeting Type<select id="roomType">${["Live Class","Consultation","Speaking Practice","Writing Workshop","Assessment Feedback","Project Supervision","Lecturer Coordination"].map(t=>`<option ${room?.type===t?"selected":""}>${t}</option>`).join("")}</select></label>
      <label>Short Room Code<input id="roomCode" value="${esc(room?.code||"")}" readonly></label>
      <label>Auto-generated Short Link<input id="roomLink" value="${esc(room?.link||"")}" readonly></label>
      <label>Features<input id="roomFeatures" value="${esc((room?.features||["Live session","Screen sharing","Attendance","Chat","Breakout discussion","Consultation","Assessment feedback"]).join(", "))}"></label>
    </div>
    <label>Agenda<textarea id="roomAgenda" placeholder="Write the meeting agenda, learning goals, expected outputs, and follow-up task.">${esc(room?.agenda||"")}</textarea></label>
    <label>Meeting Notes / Preparation<textarea id="roomNotes" placeholder="Optional: materials to prepare, pre-task, post-task, or attendance instructions.">${esc(room?.notes||"")}</textarea></label>
    <div class="actions">
      <button class="btn soft" onclick="refreshRoomLink()">Generate Short Link</button>
      <button class="btn soft" onclick="copyGeneratedRoomLink()">Copy Link</button>
      <button class="btn soft" onclick="shareGeneratedRoomLink()">Share</button>
      <button class="btn primary" onclick="saveRoom()">${isEdit?"Update Room":"Save Room"}</button>
      <button class="btn soft" onclick="previewRoomMetadata()">Preview Metadata</button>
      ${isEdit?`<button class="btn soft" onclick="editingRoomId=null;renderOnline()">Cancel Edit</button>`:""}
    </div>
    <small class="generated-link-note">The short link is generated automatically from the meeting title, date, and start time.</small>
  </section>`;
}
function copyGeneratedRoomLink(){
  refreshRoomLink();
  const link=byId("roomLink")?.value||"";
  if(!link) return toast("No link","Generate the short link first.");
  navigator.clipboard?.writeText(link).then(()=>toast("Copied","Generated room link copied.")).catch(()=>openModal(`<h2>Generated Link</h2><p>${esc(link)}</p>`));
}
function shareGeneratedRoomLink(){
  refreshRoomLink();
  const link=byId("roomLink")?.value||"";
  const title=byId("roomTitle")?.value||"GARUDA ESP Nusantara Online Room";
  if(navigator.share){navigator.share({title,text:title,url:link}).catch(()=>{});}
  else copyGeneratedRoomLink();
}
function saveRoom(){
  syncRoomDateParts();
  refreshRoomLink();
  const title=byId("roomTitle").value.trim();
  const host=byId("roomHost").value.trim();
  const agenda=byId("roomAgenda").value.trim();
  const date=byId("roomDate").value;
  const startTime=byId("roomStartTime").value;
  const endTime=byId("roomEndTime").value;
  if(!title||!host||!agenda||!date||!startTime) return toast("Incomplete","Complete title, host, date, start time, and agenda.");
  const payload={
    id:editingRoomId||uid("ROOM"),
    title,
    scope:byId("roomScope").value,
    host,
    date,
    month:byId("roomMonth").value,
    year:byId("roomYear").value,
    startTime,
    endTime,
    timezone:byId("roomTimezone").value,
    courseId:byId("roomCourse").value,
    week:byId("roomWeek").value,
    type:byId("roomType").value,
    code:byId("roomCode").value.trim()||roomCodeFrom(title,date,startTime),
    schedule:`${date} ${startTime}${endTime? "–"+endTime:""} ${byId("roomTimezone").value}`,
    link:byId("roomLink").value.trim() || generateRoomLink(title,date,startTime),
    agenda,
    notes:byId("roomNotes").value.trim(),
    features:byId("roomFeatures").value.split(",").map(x=>x.trim()).filter(Boolean),
    attendance:editingRoomId?(db.rooms.find(r=>r.id===editingRoomId)?.attendance||[]):[],
    createdBy:editingRoomId?(db.rooms.find(r=>r.id===editingRoomId)?.createdBy||session.name||session.role):(session.name||session.role),
    createdAt:editingRoomId?(db.rooms.find(r=>r.id===editingRoomId)?.createdAt||new Date().toISOString()):new Date().toISOString(),
    updatedAt:new Date().toISOString()
  };
  if(editingRoomId){
    const i=db.rooms.findIndex(r=>r.id===editingRoomId);
    if(i>=0) db.rooms[i]=payload;
    toast("Room updated","Meeting metadata and short link updated.");
  }else{
    db.rooms.unshift(payload);
    toast("Room saved","Meeting metadata and short link recorded.");
  }
  editingRoomId=null;
  save();
  renderOnline();
}
function roomCard(r){
  const course=disciplines.find(d=>d.id===r.courseId)?.title || r.course || "General ESP";
  return `<article class="room-card">
    <h3>${esc(r.title)}</h3>
    <p>${esc(r.agenda)}</p>
    <p><span class="tag red">${esc(r.scope)}</span> <span class="tag">${esc(r.type || "Live Class")}</span> <span class="tag">Host: ${esc(r.host)}</span> <span class="tag">Code: ${esc(r.code || "-")}</span></p>
    <div class="atlas-detail-grid">
      <div class="atlas-mini"><small>Date</small><strong>${esc(roomDateLabel(r))}</strong></div>
      <div class="atlas-mini"><small>Course</small><strong>${esc(course)} • Week ${esc(r.week || "-")}</strong></div>
      <div class="atlas-mini"><small>Short Link</small><strong>${esc(r.link || "-")}</strong></div>
      <div class="atlas-mini"><small>Attendance</small><strong>${(r.attendance||[]).length} participant(s)</strong></div>
    </div>
    <ul class="check-list">${(r.features||[]).map(f=>`<li>${esc(f)}</li>`).join("")}</ul>
    ${r.notes?`<p><strong>Preparation:</strong> ${esc(r.notes)}</p>`:""}
    <div class="actions">
      <button class="btn primary" onclick="joinRoom('${r.id}')">Join Room</button>
      <button class="btn soft" onclick="copyRoomLink('${r.id}')">Copy</button>
      <button class="btn soft" onclick="shareRoomLink('${r.id}')">Share</button>
      <button class="btn soft" onclick="openRoomDetails('${r.id}')">Details</button>
      ${["lecturer","admin"].includes(session.role)?`<button class="btn soft" onclick="editRoom('${r.id}')">Edit</button><button class="btn soft" onclick="deleteRoom('${r.id}')">Delete</button>`:""}
    </div>
  </article>`;
}
function editRoom(id){
  const room=db.rooms.find(r=>r.id===id);
  if(!room) return toast("Room not found");
  editingRoomId=id;
  const manage=["lecturer","admin"].includes(session.role);
  if(!manage) return toast("Unauthorized","Only lecturers and admins can edit rooms.");
  byId("mainView").innerHTML=`<section class="panel"><h3>Online Room Mode</h3><p>Edit meeting metadata, date, time, short link, host, agenda, and features.</p></section>${roomForm(room)}<section class="panel"><h3>Meeting Schedule</h3><div class="grid cols-2">${db.rooms.filter(r=>r.scope==="all"||r.scope===session.role).map(roomCard).join("")}</div></section>`;
  setTimeout(()=>document.getElementById("roomFormPanel")?.scrollIntoView({behavior:"smooth",block:"start"}),80);
}
function shareRoomLink(id){
  const r=db.rooms.find(x=>x.id===id);
  if(!r) return;
  if(navigator.share){navigator.share({title:r.title,text:`${r.title} • ${roomDateLabel(r)}`,url:r.link}).catch(()=>{});}
  else copyRoomLink(id);
}
Object.assign(window,{renderAtlas,openProvinceSkills,atlasMethodologyHTML,renderAITutor,clearTutorInput,saveTutorNote,openTutorHistory,openTutorGoals,openTutorSettings,roomCodeFrom,copyGeneratedRoomLink,shareGeneratedRoomLink,editRoom,shareRoomLink});
