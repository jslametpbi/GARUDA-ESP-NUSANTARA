
const ADMIN_PIN = "JS2026";
const DB_KEY = "garudaEspNusantara.final.v6.professional";

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
function logout(){session=null;localStorage.removeItem("gesn.session.final");byId("appShell").classList.add("hidden");byId("landing").classList.remove("hidden");toast("Logged out","Session closed.")}
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
