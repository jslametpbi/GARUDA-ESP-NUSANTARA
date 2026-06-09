
const DB_KEY = "garudaEspNusantara.final.v11.complete";
const SESSION_KEY = "gesn.session.final";
const ROOM_BASE = "https://room.garudaesp.id";
const MEET_BASE = "https://meet.jit.si";

const disciplines = {
  tourism:"English for Tourism & Hospitality",
  business:"English for Business & Entrepreneurship",
  technology:"English for Engineering & Technology",
  health:"English for Health & Care",
  maritime:"English for Maritime, Fisheries & Environment",
  education:"English for Education & Communication"
};
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function uid(prefix){return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}
function readDB(){try{return JSON.parse(localStorage.getItem(DB_KEY)||"{}")}catch(e){return {}}}
function saveDB(db){localStorage.setItem(DB_KEY,JSON.stringify(db))}
function readSession(){try{return JSON.parse(localStorage.getItem(SESSION_KEY)||"null")||{role:"guest",name:"Guest",email:"guest@local"}}catch(e){return {role:"guest",name:"Guest",email:"guest@local"}}}
function monthNames(){return ["January","February","March","April","May","June","July","August","September","October","November","December"]}
function today(){const d=new Date();return {day:String(d.getDate()).padStart(2,"0"),month:monthNames()[d.getMonth()],year:String(d.getFullYear()),iso:d.toISOString().slice(0,10)}}
function dateISO(day,month,year){const mi=monthNames().indexOf(month);return `${year||today().year}-${String((mi>=0?mi:new Date().getMonth())+1).padStart(2,"0")}-${String(day||today().day).padStart(2,"0")}`}
function normalizeCode(value=""){const raw=String(value||"").trim();const direct=raw.match(/RM-\d{6}-[A-Z0-9]{3,12}/i);if(direct)return direct[0].toUpperCase();const query=raw.match(/[?&](?:code|room)=([^&#]+)/i);if(query)return decodeURIComponent(query[1]).toUpperCase().replace(/[^A-Z0-9-]/g,"");return raw.replace(/^.*\//,"").replace(/^.*#/,"").replace(/[^A-Z0-9-]/gi,"").toUpperCase()}
function getCode(){const params=new URLSearchParams(location.search);return normalizeCode(params.get("code")||params.get("room")||location.hash||"")}
function meetingSlug(code){return `GARUDA-ESP-NUSANTARA-${normalizeCode(code)}`.replace(/[^A-Z0-9-]/gi,"-").toUpperCase()}
function meetingLink(code){return `${MEET_BASE}/${meetingSlug(code)}#config.prejoinPageEnabled=false&config.startWithAudioMuted=false&config.startWithVideoMuted=false&interfaceConfig.DISABLE_JOIN_LEAVE_NOTIFICATIONS=true`}
function normalizeRoom(room, code){
  const t=today(); room=room||{};
  room.id ||= uid("ROOM"); room.code=normalizeCode(room.code||code);
  if(!room.code || !room.code.startsWith("RM-")) room.code=code || `RM-${t.year.slice(-2)}${String(new Date().getMonth()+1).padStart(2,"0")}${t.day}-LIVE`;
  room.title ||= "Garuda Main Virtual Classroom"; room.host ||= "Garuda ESP Host"; room.courseId ||= "tourism"; room.week ||= 1;
  room.day ||= t.day; room.month ||= t.month; room.year ||= t.year; room.date ||= dateISO(room.day,room.month,room.year);
  room.startTime ||= "09:00"; room.endTime ||= "10:30"; room.timezone ||= "Asia/Jakarta (GMT+7)";
  room.agenda ||= "Weekly orientation, course briefing, reflective discussion, and progress monitoring.";
  room.features ||= ["Video","Audio","Chat","Screen Share","Breakout Rooms","Recording","Attendance"];
  room.attendance ||= []; room.roomChat ||= [];
  room.link = `${ROOM_BASE}/${room.code}`;
  room.meetingLink = meetingLink(room.code);
  room.workingLink = location.href;
  return room;
}
function findOrCreateRoom(){
  const code=getCode(); const db=readDB(); db.rooms ||= [];
  let room=db.rooms.find(r=>normalizeCode(r.code||r.link)===code);
  if(!room){
    room=normalizeRoom({code,title:"Garuda Main Virtual Classroom",type:"Live Meeting Room",agenda:"This direct meeting room is active for synchronous ESP learning, consultation, attendance, discussion, and learning documentation."},code);
    db.rooms.unshift(room);
  }
  room=normalizeRoom(room,code);
  const session=readSession(); const user=session.email||session.name||session.role||"Guest";
  if(!room.attendance.some(a=>a.user===user)){room.attendance.push({user,role:session.role||"guest",name:session.name||user,date:new Date().toISOString()})}
  db.rooms=db.rooms.map(r=>r.id===room.id?room:r); saveDB(db); return {db,room,session};
}
function roomDateLabel(r){return `${String(r.day).padStart(2,"0")} ${r.month} ${r.year} • ${r.startTime} – ${r.endTime} ${r.timezone}`}
function copyText(text){if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(text).then(()=>setStatus("Copied successfully.")).catch(()=>manualCopy(text))}else manualCopy(text)}
function manualCopy(text){prompt("Copy manually:", text)}
function shareRoom(room){const text=`GARUDA ESP Nusantara Online Room\n${room.title}\nRoom Code: ${room.code}\nJoin Link: ${location.href}\nDirect Meeting Link: ${room.meetingLink}\nProfessional Identity: ${room.link}`;if(navigator.share)navigator.share({title:room.title,text,url:location.href}).catch(()=>copyText(text));else copyText(text)}
function setStatus(text){const el=document.getElementById("toolStatus"); if(el) el.innerHTML=`<strong>${esc(text)}</strong>`}
function activate(tool){setStatus(`${tool} activated. For live camera, microphone, recording, and screen sharing, use the meeting toolbar inside the live meeting frame.`)}
function openDirectMeeting(){const r=window.__ROOM__; if(r) window.open(r.meetingLink,"_blank")}
function reloadMeeting(){const r=window.__ROOM__; const frame=document.getElementById("meetingFrame"); const fallback=document.getElementById("stageFallback"); if(frame&&r){fallback?.classList.add("hide"); frame.src=r.meetingLink; setStatus("Live meeting loaded. Allow camera and microphone permissions if requested.")}}
function postChat(roomId){
  const input=document.getElementById("chatInput"); const text=input.value.trim(); if(!text)return;
  const db=readDB(); const session=readSession(); const room=db.rooms.find(r=>r.id===roomId); room.roomChat ||= [];
  room.roomChat.push({user:session.name||session.email||session.role||"Guest",text,date:new Date().toISOString()}); saveDB(db); input.value="";
  document.getElementById("chatList").innerHTML=chatHTML(room);
}
function chatHTML(room){return (room.roomChat||[]).length?room.roomChat.map(m=>`<div class="chat-item"><strong>${esc(m.user)}</strong><p>${esc(m.text)}</p><small>${new Date(m.date).toLocaleString()}</small></div>`).join(""):`<div class="chat-item"><p>No room chat yet.</p></div>`}
function attendanceHTML(room){return (room.attendance||[]).length?room.attendance.map(a=>`<li>${esc(a.name||a.user)} — ${new Date(a.date).toLocaleString()}</li>`).join(""):"<li>No attendance yet.</li>"}
function render(){
  const {room}=findOrCreateRoom(); window.__ROOM__=room; document.title=`${room.title} • ${room.code}`;
  document.getElementById("roomApp").innerHTML=`
    <section class="room-card">
      <header class="room-top">
        <div class="brand"><img src="assets/logo-square.png" alt="Garuda ESP Nusantara"><div><h1>${esc(room.title)}</h1><p>${esc(disciplines[room.courseId]||"GARUDA ESP Course")} • Week ${esc(room.week)} • ${esc(roomDateLabel(room))}</p></div></div>
        <div class="room-code">${esc(room.code)}</div>
      </header>
      <section class="room-grid">
        <section>
          <div class="meeting-frame-wrap">
            <div id="stageFallback" class="stage-fallback hide"><div><h2>GARUDA ESP NUSANTARA</h2><p>Live meeting is loading. Click Reload Meeting or Open Direct Meeting if the browser blocks the embedded meeting frame.</p><span class="live-pill">Live Room Ready</span></div></div>
            <iframe id="meetingFrame" class="meeting-frame" allow="camera; microphone; fullscreen; display-capture; autoplay; clipboard-write" src="${esc(room.meetingLink)}"></iframe>
          </div>
          <div class="controls">
            <button class="primary" onclick="reloadMeeting()">Join / Reload Meeting</button>
            <button class="soft" onclick="openDirectMeeting()">Open Direct Meeting</button>
            <button class="soft" onclick="activate('Video')">Video</button>
            <button class="soft" onclick="activate('Audio')">Audio</button>
            <button class="soft" onclick="activate('Screen Share')">Share Screen</button>
            <button class="soft" onclick="activate('Breakout Room')">Breakout</button>
            <button class="soft" onclick="activate('Recording')">Record</button>
            <button class="soft" onclick="copyText(location.href)">Copy Join Link</button>
            <button class="soft" onclick='shareRoom(window.__ROOM__)'>Share</button>
          </div>
          <div id="toolStatus" class="status">Live meeting loaded. Use the meeting toolbar for camera, microphone, screen sharing, chat, and recording controls.</div>
        </section>
        <aside class="side">
          <div class="side-card"><h3>Agenda</h3><p>${esc(room.agenda)}</p></div>
          <div class="side-card">
            <h3>Join Link</h3><div class="link-box"><code>${esc(location.href)}</code><button class="soft" onclick="copyText(location.href)">Copy</button></div>
            <h3 style="margin-top:14px">Direct Meeting Link</h3><div class="link-box"><code>${esc(room.meetingLink)}</code><button class="soft" onclick="copyText('${esc(room.meetingLink)}')">Copy</button></div>
            <h3 style="margin-top:14px">Professional Identity</h3><div class="link-box"><code>${esc(room.link)}</code><button class="soft" onclick="copyText('${esc(room.link)}')">Copy</button></div>
          </div>
          <div class="side-card"><h3>Attendance</h3><ul class="attendance">${attendanceHTML(room)}</ul></div>
          <div class="side-card"><h3>Room Chat</h3><textarea id="chatInput" placeholder="Write a room message..."></textarea><div class="controls"><button class="primary" onclick="postChat('${esc(room.id)}')">Send Message</button></div><div id="chatList">${chatHTML(room)}</div></div>
        </aside>
      </section>
      <footer class="footer-actions"><a class="button soft" href="index.html">Back to GARUDA ESP Nusantara</a><button class="gold" onclick="copyText(location.href)">Copy Join Link</button></footer>
    </section>`;
}
render();
