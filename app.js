/* GARUDA ESP NUSANTARA - static GitHub-ready app
   Offline-first role-based ESP platform with local AI-assisted engines.
*/
const DB_KEY = 'garudaEspNusantara.v2';
const ADMIN_PIN = 'JS2026';

const pathwayIcons = {
  'Tourism & Hospitality English': '🏨',
  'Cultural Heritage English': '🏛️',
  'Business & Creative Industry English': '💼',
  'Maritime & Environmental English': '🌊',
  'Education & Intercultural Communication': '🎓',
  'Digital Media & Cultural Promotion': '📱'
};

const baseUniversities = [];

const baseMeetings = [
  {id:'MEET-001', title:'Garuda Orientation Room', roleScope:'all', host:'Academic Host', week:'General', roomCode:'GARUDA-ORIENT', link:'', agenda:'Platform orientation, navigation, weekly learning expectations, and portfolio overview.', notes:'Students should prepare a short self-introduction in English.', features:['HD video','screen share','chat','attendance log','breakout prompt','recording note']},
  {id:'MEET-002', title:'Tourism Simulation Live Room', roleScope:'student', host:'Tourism Lecturer', week:'2 / 7', roomCode:'GARUDA-TOURISM', link:'', agenda:'Live guiding role-play and cultural etiquette practice.', notes:'Bring visitor-briefing draft and be ready for Q&A.', features:['camera','microphone','raise hand','chat','speaker spotlight','feedback board']},
  {id:'MEET-003', title:'Lecturer Design Clinic', roleScope:'lecturer', host:'Admin Academic Lead', week:'Weekly', roomCode:'GARUDA-LECTURER', link:'', agenda:'Module design, assessment calibration, and AI-assisted material development.', notes:'Use this room to coordinate curriculum improvement.', features:['screen share','collaborative notes','attendance log','chat','file review','follow-up notes']},
  {id:'MEET-004', title:'Admin Governance Briefing', roleScope:'admin', host:'System Admin', week:'Monthly', roomCode:'GARUDA-ADMIN', link:'', agenda:'Approval review, content governance, analytics, and policy updates.', notes:'Review lecturer approval and institutional data before meeting.', features:['analytics review','screen share','recording note','chat','attendance log','decision log']}
];

const baseCurriculum = [
  {week:1, title:'Bhinneka Tunggal Ika and ESP Identity', province:'National', heritage:'Bhinneka Tunggal Ika, Garuda Pancasila, Indonesian Flag', pathway:'Education & Intercultural Communication',
   objectives:['Explain Indonesian unity in professional English','Introduce oneself as a local-global professional','Use respectful intercultural expressions'],
   reading:'Indonesia is a multilingual and multicultural nation whose professional communication can be strengthened through local wisdom. In ESP learning, Bhinneka Tunggal Ika becomes a framework for presenting identity, respecting diversity, and communicating clearly across cultures.',
   vocab:['unity','diversity','local wisdom','professional identity','intercultural awareness','heritage','respectful communication'],
   assignment:'Create a 2-minute English self-introduction connecting your academic major, university, province, and future professional role.',
   quiz:[['What does Bhinneka Tunggal Ika emphasize?','Unity in diversity','Single language only','Tourism only','Traditional food only'],['Which skill is central in ESP identity?','Clear professional communication','Memorizing grammar only','Imitating one accent','Avoiding local culture']]},
  {week:2, title:'Tourism Guiding through Balinese Tri Hita Karana', province:'Bali', heritage:'Tri Hita Karana and temple etiquette', pathway:'Tourism & Hospitality English',
   objectives:['Describe local philosophy to visitors','Use polite guiding expressions','Explain cultural etiquette'],
   reading:'Tri Hita Karana teaches harmonious relationships among people, nature, and the divine. Tourism professionals can use this value to explain responsible travel, respectful temple visits, and sustainable hospitality services.',
   vocab:['temple etiquette','harmony','sustainable tourism','visitor briefing','sacred space','responsible travel'],
   assignment:'Write a visitor briefing script for international tourists before entering a Balinese temple.',
   quiz:[['Tri Hita Karana is mainly about...','Harmony among people, nature, and the divine','Airport management','Online shopping','Shipbuilding'],['A polite guide should say...','Please respect the sacred area','Do whatever you want','Ignore local rules','Take everything home']]},
  {week:3, title:'Batik Entrepreneurship and Creative Product Pitch', province:'Yogyakarta / Central Java', heritage:'Batik motifs and philosophical meanings', pathway:'Business & Creative Industry English',
   objectives:['Pitch a cultural product','Describe motif meaning','Use persuasive business English'],
   reading:'Batik is not only a textile product but also a visual language of philosophy, identity, and craftsmanship. Creative entrepreneurs need English to promote batik ethically, explain motifs, and reach global markets.',
   vocab:['motif','craftsmanship','ethical branding','product pitch','value proposition','heritage product'],
   assignment:'Prepare a one-page English product pitch for a batik-based creative business.',
   quiz:[['A value proposition explains...','Why a product is meaningful and useful','The weather only','A random story','A grammar list'],['Ethical branding should...','Respect cultural origins','Erase local meaning','Copy without credit','Avoid explanation']]},
  {week:4, title:'Pinisi Maritime English and Sustainable Voyages', province:'South Sulawesi', heritage:'Pinisi boatbuilding tradition', pathway:'Maritime & Environmental English',
   objectives:['Use maritime vocabulary','Explain traditional shipbuilding','Discuss sustainable sea tourism'],
   reading:'Pinisi represents maritime knowledge, teamwork, and Indonesian seafaring heritage. ESP learners can use this topic to master English for marine tourism, safety briefing, logistics, and environmental protection.',
   vocab:['vessel','crew','voyage','harbor','safety briefing','sustainable sailing','shipwright'],
   assignment:'Design an English safety briefing for a cultural sailing tour using a Pinisi boat.',
   quiz:[['A vessel is...','A ship or boat','A hotel room','A batik pattern','A classroom'],['Sustainable sailing should protect...','Marine ecosystems','Plastic waste','Noise pollution','Only ticket prices']]},
  {week:5, title:'Aceh Coffee, Halal Tourism, and Business Negotiation', province:'Aceh', heritage:'Gayo coffee and halal hospitality', pathway:'Business & Creative Industry English',
   objectives:['Negotiate product quality','Describe halal-friendly services','Write business inquiry emails'],
   reading:'Gayo coffee and Acehnese hospitality provide authentic material for ESP business communication. Learners can practice negotiation, product description, international inquiry, and halal tourism promotion.',
   vocab:['supplier','inquiry','roasting profile','halal-friendly','quality assurance','negotiation'],
   assignment:'Write an inquiry email to an overseas buyer interested in Gayo coffee.',
   quiz:[['An inquiry email asks for...','Information or offer details','A final exam','A passport','A weather forecast'],['Quality assurance means...','Maintaining product standards','Ignoring complaints','Changing names','Removing labels']]},
  {week:6, title:'Angklung Performance and Event Communication', province:'West Java', heritage:'Angklung and collaborative music', pathway:'Cultural Heritage English',
   objectives:['Introduce a performance','Write event announcements','Explain collaborative values'],
   reading:'Angklung is a musical practice that reflects cooperation and harmony. In ESP contexts, it supports event management, cultural performance narration, and intercultural audience engagement.',
   vocab:['ensemble','performance','audience engagement','collaboration','rehearsal','cultural event'],
   assignment:'Create an English event announcement for an Angklung cultural performance at your university.',
   quiz:[['An ensemble is...','A group performing together','A single ticket','A food menu','A hotel rule'],['Audience engagement means...','Involving the audience meaningfully','Ignoring questions','Speaking unclearly','Closing the event early']]},
  {week:7, title:'Toraja Heritage, Respectful Explanation, and Ethical Tourism', province:'South Sulawesi', heritage:'Toraja architecture and ritual traditions', pathway:'Tourism & Hospitality English',
   objectives:['Explain sensitive cultural practices respectfully','Answer visitor questions','Use ethical tourism language'],
   reading:'Toraja heritage requires careful and respectful explanation. Tourism professionals must avoid sensational language and instead focus on cultural meaning, family values, architecture, and community dignity.',
   vocab:['respectful explanation','ancestral heritage','community dignity','architecture','ritual context','ethical tourism'],
   assignment:'Record or write a respectful visitor explanation about Toraja heritage without sensational language.',
   quiz:[['Sensitive heritage should be explained with...','Respect and context','Jokes only','Exaggeration','Silence'],['Ethical tourism avoids...','Sensationalizing culture','Clear explanation','Local benefit','Respectful questions']]},
  {week:8, title:'Papua Eco-Tourism and Biodiversity Communication', province:'Papua', heritage:'Biodiversity, local ecological knowledge, and community-based tourism', pathway:'Maritime & Environmental English',
   objectives:['Describe biodiversity','Promote conservation messages','Write eco-tourism guidelines'],
   reading:'Papua offers rich biodiversity and community knowledge. ESP communication should promote conservation, fair community participation, and responsible visitor behavior.',
   vocab:['biodiversity','conservation','community-based tourism','habitat','responsible visitor','ecological knowledge'],
   assignment:'Create an English eco-tourism code of conduct for visitors to a Papua nature destination.',
   quiz:[['Biodiversity refers to...','Variety of living organisms','One building only','A hotel bill','A language test'],['Eco-tourism should support...','Conservation and community benefit','Wasteful travel','Cultural disrespect','Overcrowding only']]},
  {week:9, title:'Sasak Weaving and Women’s Creative Economy', province:'West Nusa Tenggara', heritage:'Sasak weaving traditions', pathway:'Business & Creative Industry English',
   objectives:['Tell product stories','Use fair-trade vocabulary','Develop promotional captions'],
   reading:'Traditional weaving can support local livelihoods when promoted fairly and accurately. ESP learners practice storytelling, ethical marketing, price explanation, and creative-economy communication.',
   vocab:['woven textile','fair trade','artisan','livelihood','product story','ethical marketing'],
   assignment:'Write three English social-media captions promoting Sasak weaving ethically.',
   quiz:[['An artisan is...','A skilled craft maker','A machine error','A flight number','A tourist only'],['Ethical marketing includes...','Respect for makers and origins','Fake claims','No attribution','Cultural erasure']]},
  {week:10, title:'Dayak Longhouse, Community Values, and Intercultural Dialogue', province:'Kalimantan', heritage:'Rumah Betang / longhouse traditions', pathway:'Education & Intercultural Communication',
   objectives:['Facilitate intercultural dialogue','Describe community values','Use discussion moderation phrases'],
   reading:'Longhouse traditions can represent cooperation, shared responsibility, and community life. ESP communication can use this heritage to train facilitation, dialogue, and intercultural understanding.',
   vocab:['communal living','shared responsibility','dialogue','moderator','mutual respect','community values'],
   assignment:'Facilitate a five-question intercultural dialogue about community values inspired by Rumah Betang.',
   quiz:[['A moderator helps...','Guide a discussion fairly','End all talk','Sell tickets','Cook food'],['Mutual respect means...','Respecting each other','Ignoring differences','Speaking rudely','Controlling others']]},
  {week:11, title:'Minangkabau Rumah Gadang and Leadership Communication', province:'West Sumatra', heritage:'Rumah Gadang and deliberation values', pathway:'Education & Intercultural Communication',
   objectives:['Use leadership and deliberation language','Summarize meeting outcomes','Practice diplomatic disagreement'],
   reading:'Rumah Gadang reflects family, leadership, and deliberation values. ESP learners can practice meeting language, decision summaries, and respectful disagreement in professional contexts.',
   vocab:['deliberation','consensus','leadership','meeting minutes','diplomatic disagreement','decision-making'],
   assignment:'Write meeting minutes for a cultural-project team discussing a Rumah Gadang exhibition.',
   quiz:[['Consensus is...','General agreement after discussion','A random vote only','A recipe','A hotel booking'],['Diplomatic disagreement sounds like...','I see your point, but may I suggest...','You are wrong','I refuse to listen','No explanation']]},
  {week:12, title:'Betawi Culture and Urban Heritage Promotion', province:'DKI Jakarta', heritage:'Betawi arts, culinary heritage, and urban multiculturalism', pathway:'Digital Media & Cultural Promotion',
   objectives:['Create digital heritage content','Use concise promotional English','Plan social-media campaigns'],
   reading:'Urban heritage communication requires short, accurate, and engaging English. Betawi culture provides material for digital promotion, event captions, short videos, and intercultural city branding.',
   vocab:['urban heritage','campaign','caption','short-form video','city branding','multicultural'],
   assignment:'Design a digital campaign plan for a Betawi cultural festival using English captions and hashtags.',
   quiz:[['City branding promotes...','A city’s identity and strengths','Only traffic jams','A private password','A grammar rule'],['A good caption is...','Clear, concise, and accurate','Long but unclear','Unrelated','Offensive']]},
  {week:13, title:'Maluku Spice Routes and Historical Storytelling', province:'Maluku', heritage:'Spice route history and maritime cultural exchange', pathway:'Cultural Heritage English',
   objectives:['Narrate historical routes','Use chronology markers','Connect heritage and global exchange'],
   reading:'The Maluku spice routes connected local resources with global history. ESP learners can develop museum labels, historical narration, and cultural diplomacy messages.',
   vocab:['spice route','chronology','trade network','cultural exchange','museum label','historical narration'],
   assignment:'Write a museum label in English for a Maluku spice-route exhibition object.',
   quiz:[['Chronology markers include...','First, then, later, finally','Maybe only','Beautifully','Very good'],['A museum label should be...','Brief, accurate, and informative','Personal gossip','Too vague','Only a price list']]},
  {week:14, title:'Noken, Sustainable Craft, and Global Advocacy', province:'Papua Highlands', heritage:'Noken multifunctional woven bag', pathway:'Digital Media & Cultural Promotion',
   objectives:['Write advocacy messages','Explain sustainability','Use persuasive but respectful language'],
   reading:'Noken can be discussed through sustainability, identity, and women’s knowledge. Global advocacy communication should explain value without exploiting local communities.',
   vocab:['advocacy','sustainability','multifunctional','community knowledge','respectful promotion','cultural continuity'],
   assignment:'Create a one-minute English advocacy script about sustainable craft inspired by Noken.',
   quiz:[['Advocacy means...','Supporting a cause publicly','Hiding information','Only selling items','Avoiding communication'],['Respectful promotion should avoid...','Exploiting communities','Clear credit','Accurate description','Sustainability messages']]},
  {week:15, title:'Capstone: Nusantara Professional Portfolio', province:'Multi-province', heritage:'Student-selected local wisdom', pathway:'All Garuda Pathways',
   objectives:['Synthesize ESP skills','Develop a professional portfolio','Use AI-assisted revision responsibly'],
   reading:'A professional ESP portfolio demonstrates ability to communicate knowledge, values, services, and innovation. Students select one local wisdom topic and transform it into a professional English product.',
   vocab:['portfolio','capstone','synthesis','revision','professional product','audience awareness'],
   assignment:'Develop a portfolio containing one brochure, one script, one email, one presentation outline, and one reflection.',
   quiz:[['A portfolio demonstrates...','Evidence of learning and competence','Only attendance','A private password','A single vocabulary word'],['Audience awareness means...','Adapting communication to readers or listeners','Ignoring readers','Using random language','Avoiding purpose']]},
  {week:16, title:'Public Showcase and Intercultural Professional Reflection', province:'National / Global', heritage:'Nusantara futures', pathway:'All Garuda Pathways',
   objectives:['Present final project','Reflect on intercultural growth','Prepare professional next steps'],
   reading:'The final week transforms local wisdom into global communication. Students present their ESP products, receive feedback, and reflect on professional identity, intercultural responsibility, and future development.',
   vocab:['showcase','reflection','future plan','professional identity','intercultural responsibility','feedback'],
   assignment:'Deliver a final 5-minute English presentation and submit a reflective essay on your ESP growth.',
   quiz:[['Reflection helps learners...','Evaluate growth and plan improvement','Forget learning','Avoid feedback','Only count words'],['A professional presentation needs...','Clear purpose, structure, and audience connection','No organization','Unclear voice','No evidence']]}
];

const provinceCards = [
  ['Aceh','Gayo Coffee, Halal Hospitality','Business & Creative Industry English'],
  ['North Sumatra','Ulos, Lake Toba Tourism','Tourism & Hospitality English'],
  ['West Sumatra','Rumah Gadang, Deliberation','Education & Intercultural Communication'],
  ['Riau','Malay Heritage and River Culture','Education & Intercultural Communication'],
  ['Riau Islands','Maritime Trade and Coastal Culture','Maritime & Environmental English'],
  ['Jambi','Batik Jambi, River Ecology','Cultural Heritage English'],
  ['South Sumatra','Songket and Culinary Branding','Business & Creative Industry English'],
  ['Bengkulu','Rafflesia Eco-Tourism','Maritime & Environmental English'],
  ['Lampung','Siger, Coffee, Coastal Tourism','Tourism & Hospitality English'],
  ['Bangka Belitung Islands','Tin Heritage and Island Tourism','Digital Media & Cultural Promotion'],
  ['Banten','Debus, Old Banten Heritage','Cultural Heritage English'],
  ['DKI Jakarta','Betawi Urban Heritage','Digital Media & Cultural Promotion'],
  ['West Java','Angklung, Sundanese Hospitality','Cultural Heritage English'],
  ['Central Java','Batik, Borobudur, Wayang','Tourism & Hospitality English'],
  ['DI Yogyakarta','Kraton, Batik Philosophy','Business & Creative Industry English'],
  ['East Java','Trowulan, Reog, Bromo','Tourism & Hospitality English'],
  ['Bali','Tri Hita Karana','Tourism & Hospitality English'],
  ['West Nusa Tenggara','Sasak Weaving and Lombok Tourism','Business & Creative Industry English'],
  ['East Nusa Tenggara','Tenun Ikat, Komodo Eco-Tourism','Maritime & Environmental English'],
  ['West Kalimantan','Equator, Dayak Culture','Education & Intercultural Communication'],
  ['Central Kalimantan','Rumah Betang','Education & Intercultural Communication'],
  ['South Kalimantan','Floating Market, Banjar Culture','Business & Creative Industry English'],
  ['East Kalimantan','IKN and Eco-Innovation','Digital Media & Cultural Promotion'],
  ['North Kalimantan','Border Communication','Education & Intercultural Communication'],
  ['North Sulawesi','Bunaken Marine Tourism','Maritime & Environmental English'],
  ['Gorontalo','Karawo Embroidery','Business & Creative Industry English'],
  ['Central Sulawesi','Lore Lindu Heritage','Maritime & Environmental English'],
  ['South Sulawesi','Pinisi, Toraja Heritage','Maritime & Environmental English'],
  ['Southeast Sulawesi','Wakatobi Marine Tourism','Maritime & Environmental English'],
  ['West Sulawesi','Sandeq Boat Culture','Maritime & Environmental English'],
  ['Maluku','Spice Routes','Cultural Heritage English'],
  ['North Maluku','Sultanate Heritage','Cultural Heritage English'],
  ['West Papua','Birds of Paradise and Coastal Heritage','Tourism & Hospitality English'],
  ['Southwest Papua','Raja Ampat Eco-Tourism','Tourism & Hospitality English'],
  ['Central Papua','Highland to Coastal Communication','Education & Intercultural Communication'],
  ['Highland Papua','Noken and Mountain Communities','Digital Media & Cultural Promotion'],
  ['South Papua','Wetlands, Sago, Community Culture','Maritime & Environmental English'],
  ['Papua','Biodiversity and Local Ecological Knowledge','Maritime & Environmental English']
];


const espDisciplines = [
  {
    id:'tourism', icon:'🏨', title:'Tourism & Hospitality English', summary:'Professional English for tour guiding, front office communication, destination interpretation, visitor assistance, and heritage-based hospitality.', provinceLink:'Bali, DI Yogyakarta, East Java, Southwest Papua',
    skills:['Guiding scripts','Guest handling','Itinerary explanation','Service recovery','Cultural etiquette'],
    pathways:[
      {name:'Path 1 • Communication', material:'Welcoming guests, giving directions, handling inquiries.', task:'Create a hotel check-in dialogue.', assessment:'Role-play performance with service rubric.'},
      {name:'Path 2 • Reading & Vocabulary', material:'Brochures, itineraries, SOP vocabulary, tourism terms.', task:'Annotate a destination brochure.', assessment:'Vocabulary quiz and brochure analysis.'},
      {name:'Path 3 • Writing', material:'Email responses, reservation notes, visitor briefings.', task:'Write a cultural-visit briefing note.', assessment:'Writing rubric for clarity and politeness.'},
      {name:'Path 4 • Speaking & Presentation', material:'Tour commentary and destination storytelling.', task:'Present a 3-minute local attraction overview.', assessment:'Presentation rubric.'},
      {name:'Path 5 • Digital & Online Room', material:'Online guest orientation and virtual tour hosting.', task:'Design an online pre-arrival Zoom script.', assessment:'Virtual-room facilitation checklist.'},
      {name:'Path 6 • Intercultural Project', material:'Respectful heritage mediation and responsible tourism.', task:'Develop a visitor code of conduct.', assessment:'Project poster and reflection.'}
    ]
  },
  {
    id:'business', icon:'💼', title:'Business & Entrepreneurship English', summary:'ESP for product pitching, negotiation, market communication, digital branding, local-product entrepreneurship, and intercultural customer service.', provinceLink:'Aceh, South Sumatra, West Nusa Tenggara, DKI Jakarta',
    skills:['Pitching','Emailing','Negotiation','Brand storytelling','Business reporting'],
    pathways:[
      {name:'Path 1 • Communication', material:'Business introductions, meetings, negotiation language.', task:'Create a supplier-client conversation.', assessment:'Negotiation language rubric.'},
      {name:'Path 2 • Reading & Vocabulary', material:'Catalogs, invoices, product profiles, trade vocabulary.', task:'Read and summarize a product profile.', assessment:'Reading response.'},
      {name:'Path 3 • Writing', material:'Inquiry emails, quotations, and short proposals.', task:'Write an export inquiry email.', assessment:'Business writing rubric.'},
      {name:'Path 4 • Speaking & Presentation', material:'Investor pitch and product demonstration.', task:'Pitch a local product in English.', assessment:'Pitch deck and oral score.'},
      {name:'Path 5 • Digital & Online Room', material:'Online pitching, e-commerce live promotion, webinar hosting.', task:'Host a mock online launch.', assessment:'Digital communication checklist.'},
      {name:'Path 6 • Intercultural Project', material:'Ethical branding rooted in local wisdom.', task:'Design a cultural-branding campaign.', assessment:'Campaign proposal and reflection.'}
    ]
  },
  {
    id:'technology', icon:'⚙️', title:'Engineering & Technology English', summary:'Technical ESP for digital products, engineering reports, innovation showcases, user support, and collaborative problem solving.', provinceLink:'East Kalimantan, West Java, North Kalimantan, Riau Islands',
    skills:['Technical explanation','Process description','Problem solving','Documentation','Digital teamwork'],
    pathways:[
      {name:'Path 1 • Communication', material:'Explaining functions, troubleshooting, lab communication.', task:'Create a technician-client dialogue.', assessment:'Technical clarity rubric.'},
      {name:'Path 2 • Reading & Vocabulary', material:'Manuals, specifications, process vocabulary.', task:'Interpret a device specification sheet.', assessment:'Technical vocabulary quiz.'},
      {name:'Path 3 • Writing', material:'Incident reports, user instructions, progress logs.', task:'Write a short troubleshooting guide.', assessment:'Procedural writing rubric.'},
      {name:'Path 4 • Speaking & Presentation', material:'Prototype explanation and innovation demo.', task:'Present a local-tech solution.', assessment:'Demo presentation score.'},
      {name:'Path 5 • Digital & Online Room', material:'Remote collaboration and online stand-up meeting skills.', task:'Run a short technical meeting online.', assessment:'Meeting facilitation rubric.'},
      {name:'Path 6 • Intercultural Project', material:'Human-centered technology for diverse communities.', task:'Design a community-tech proposal.', assessment:'Proposal plus peer review.'}
    ]
  },
  {
    id:'health', icon:'🩺', title:'Health & Care English', summary:'ESP for nursing, pharmacy, public health, patient communication, health education, and culturally sensitive community service.', provinceLink:'Central Java, South Papua, West Sumatra, Lampung',
    skills:['Patient interaction','Instruction giving','Case notes','Health promotion','Empathy'],
    pathways:[
      {name:'Path 1 • Communication', material:'Greeting patients, asking symptoms, explaining procedures.', task:'Make a nurse-patient dialogue.', assessment:'Communication and empathy rubric.'},
      {name:'Path 2 • Reading & Vocabulary', material:'Health brochures, medication vocabulary, case summaries.', task:'Read and explain a health leaflet.', assessment:'Vocabulary and comprehension quiz.'},
      {name:'Path 3 • Writing', material:'Simple case notes and patient instructions.', task:'Write a discharge instruction note.', assessment:'Accuracy and clarity rubric.'},
      {name:'Path 4 • Speaking & Presentation', material:'Mini health talks and public education.', task:'Present a community health message.', assessment:'Oral presentation rubric.'},
      {name:'Path 5 • Digital & Online Room', material:'Telehealth etiquette and online consultation language.', task:'Simulate an online consultation opening.', assessment:'Virtual-care checklist.'},
      {name:'Path 6 • Intercultural Project', material:'Health literacy across diverse communities.', task:'Create a bilingual health-awareness poster.', assessment:'Project evaluation.'}
    ]
  },
  {
    id:'maritime', icon:'🌊', title:'Maritime, Fisheries & Environmental English', summary:'ESP for marine tourism, vessel communication, environmental protection, fisheries operations, and sustainability advocacy.', provinceLink:'South Sulawesi, Southeast Sulawesi, Maluku, Papua',
    skills:['Safety briefing','Environmental reporting','Route explanation','Field observation','Sustainability advocacy'],
    pathways:[
      {name:'Path 1 • Communication', material:'Safety instructions and field communication.', task:'Prepare a vessel safety briefing.', assessment:'Safety-language rubric.'},
      {name:'Path 2 • Reading & Vocabulary', material:'Weather notes, marine conservation texts, fisheries terms.', task:'Read a marine conservation summary.', assessment:'Comprehension quiz.'},
      {name:'Path 3 • Writing', material:'Incident logs, field reports, eco-guidelines.', task:'Write an eco-tour code of conduct.', assessment:'Report-writing rubric.'},
      {name:'Path 4 • Speaking & Presentation', material:'Marine tourism and conservation presentation.', task:'Explain a reef-protection campaign.', assessment:'Presentation score.'},
      {name:'Path 5 • Digital & Online Room', material:'Remote marine briefing and online collaboration.', task:'Lead an online environmental meeting.', assessment:'Facilitation rubric.'},
      {name:'Path 6 • Intercultural Project', material:'Community-based sustainability communication.', task:'Develop a local marine-awareness project.', assessment:'Project and reflection.'}
    ]
  },
  {
    id:'education', icon:'🎓', title:'Education & Communication English', summary:'ESP for teaching, public communication, moderation, intercultural dialogue, community training, and academic service.', provinceLink:'West Sumatra, West Kalimantan, Central Kalimantan, Banten',
    skills:['Facilitation','Moderation','Academic speaking','Public communication','Reflection'],
    pathways:[
      {name:'Path 1 • Communication', material:'Facilitating class and community discussion.', task:'Moderate a local-wisdom dialogue.', assessment:'Moderation rubric.'},
      {name:'Path 2 • Reading & Vocabulary', material:'Educational texts, lesson terms, public communication vocabulary.', task:'Summarize a short article.', assessment:'Reading response.'},
      {name:'Path 3 • Writing', material:'Lesson notes, announcements, meeting minutes.', task:'Write meeting minutes for a project team.', assessment:'Writing rubric.'},
      {name:'Path 4 • Speaking & Presentation', material:'Teaching demos and public briefing.', task:'Deliver a micro-teaching segment.', assessment:'Micro-teaching rubric.'},
      {name:'Path 5 • Digital & Online Room', material:'Virtual classroom management and webinar hosting.', task:'Plan an online discussion session.', assessment:'Online teaching checklist.'},
      {name:'Path 6 • Intercultural Project', material:'Community outreach grounded in local values.', task:'Design a local-wisdom education campaign.', assessment:'Project and reflection.'}
    ]
  }
];

const defaultRooms = [
  {id:uid(), title:'Garuda Main Lecture Room', host:'Course Team', week:'General', type:'Lecture', link:'https://zoom.us/', agenda:'Orientation, weekly briefing, and academic coordination for all roles.', features:['Live video','Screen share','Attendance log','Chat box','Recording policy','Breakout rooms'], schedule:'Every Monday • 09:00 WIB'},
  {id:uid(), title:'ESP Discipline Studio', host:'Assigned Lecturer', week:'By Discipline', type:'Workshop', link:'https://zoom.us/', agenda:'Discipline-based practice room for tourism, business, technology, health, maritime, and education tracks.', features:['Workshop mode','Collaborative notes','Mini presentations','Peer feedback','Office hour'], schedule:'Flexible by lecturer schedule'},
  {id:uid(), title:'Consultation & Assessment Room', host:'Lecturer / Admin', week:'Assessment', type:'Consultation', link:'https://zoom.us/', agenda:'Feedback conferences, rubric clarification, assignment consultation, and assessment moderation.', features:['Consultation','Rubric discussion','Private feedback','Portfolio review'], schedule:'As announced'}
];

let db = loadDB();
db = normalizeDB(db);
let session = JSON.parse(localStorage.getItem('garudaEspSession') || 'null');
let currentPage = 'dashboard';

function loadDB(){
  const stored = localStorage.getItem(DB_KEY);
  if(stored){
    try { return JSON.parse(stored); } catch(e){ console.warn(e); }
  }
  return {
    users: [],
    universities: baseUniversities,
    curriculum: baseCurriculum,
    rooms: defaultRooms,
    customTasks: [],
    resources: [],
    meetings: baseMeetings,
    submissions: [],
    grades: [],
    announcements: [{id:uid(), title:'Welcome to GARUDA ESP NUSANTARA', body:'A 16-week AI-assisted ESP platform rooted in Indonesian local wisdom and professional communication.', date:new Date().toISOString()}],
    settings:{theme:'light', institutionName:'GARUDA ESP NUSANTARA', adminName:'Dr. Joko Slamet'},
    activity: []
  };
}
function normalizeDB(data={}){
  data.users = Array.isArray(data.users) ? data.users : [];
  data.universities = Array.isArray(data.universities) ? data.universities : [];
  data.curriculum = Array.isArray(data.curriculum) && data.curriculum.length ? data.curriculum : baseCurriculum;
  data.customTasks = Array.isArray(data.customTasks) ? data.customTasks : [];
  data.resources = Array.isArray(data.resources) ? data.resources : [];
  data.submissions = Array.isArray(data.submissions) ? data.submissions : [];
  data.grades = Array.isArray(data.grades) ? data.grades : [];
  data.meetings = Array.isArray(data.meetings) && data.meetings.length ? data.meetings : baseMeetings;
  data.announcements = Array.isArray(data.announcements) ? data.announcements : [];
  if(!data.announcements.length) data.announcements = [{id:uid(), title:'Welcome to GARUDA ESP NUSANTARA', body:'A 16-week AI-assisted ESP platform rooted in Indonesian local wisdom and professional communication.', date:new Date().toISOString()}];
  data.settings = Object.assign({theme:'light', institutionName:'GARUDA ESP NUSANTARA', adminName:'Dr. Joko Slamet'}, data.settings || {});
  data.activity = Array.isArray(data.activity) ? data.activity : [];
  return data;
}
function saveDB(){ localStorage.setItem(DB_KEY, JSON.stringify(db)); }
function saveSession(){ localStorage.setItem('garudaEspSession', JSON.stringify(session)); }
function uid(){ return 'GESN-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).slice(2,7).toUpperCase(); }
function byId(id){ return document.getElementById(id); }
function esc(v=''){ return String(v).replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s])); }
function today(){ return new Date().toLocaleDateString('en-GB',{year:'numeric', month:'short', day:'numeric'}); }
function toast(title, message=''){
  const host = byId('toastHost');
  const node = document.createElement('div'); node.className='toast';
  node.innerHTML = `<strong>${esc(title)}</strong>${message ? `<div>${esc(message)}</div>`:''}`;
  host.appendChild(node); setTimeout(()=>node.remove(), 3600);
}
function logActivity(type, detail){ db.activity.unshift({id:uid(), type, detail, date:new Date().toISOString(), user:session?.email || 'system'}); db.activity = db.activity.slice(0,80); saveDB(); }

function init(){
  saveDB();
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('./service-worker.js').catch(()=>{}); }
  bindLanding();
  bindGlobal();
  if(db.settings.theme === 'dark') document.body.classList.add('dark-mode');
  if(session) enterApp(session.role, true);
}

document.addEventListener('DOMContentLoaded', init);

function bindLanding(){
  document.querySelectorAll('[data-scroll]').forEach(btn=>btn.addEventListener('click',()=>byId(btn.dataset.scroll)?.scrollIntoView({behavior:'smooth'})));
  document.querySelectorAll('.auth-tab').forEach(btn => btn.addEventListener('click',()=>{
    document.querySelectorAll('.auth-tab').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f=>f.classList.remove('active'));
    btn.classList.add('active'); document.querySelector(`[data-auth-form="${btn.dataset.authTab}"]`).classList.add('active');
  }));
  byId('studentRegisterBtn').addEventListener('click', registerStudent);
  byId('studentLoginBtn').addEventListener('click', ()=>loginUser('student'));
  byId('lecturerRegisterBtn').addEventListener('click', registerLecturer);
  byId('lecturerLoginBtn').addEventListener('click', ()=>loginUser('lecturer'));
  byId('adminLoginBtn').addEventListener('click', adminLogin);
  byId('previewBtn').addEventListener('click',()=>openModal(`<h2>Visual Design Board</h2><p class="modal-lead">Exclusive brand and UI direction translated into this deployable app.</p><img src="assets/design-board.png" alt="GARUDA ESP NUSANTARA visual design board">`));
  const dBtn = byId('openDisciplinesBtn'); if(dBtn) dBtn.addEventListener('click', ()=>openModal(`<h2>Six ESP Disciplines</h2><p class="modal-lead">GARUDA ESP NUSANTARA is structured into six professional ESP disciplines. Each discipline aligns with specific weekly materials, outputs, and assessment types.</p>${disciplineCardsModalHTML()}`));
  setupGarudaMotion();
}

function bindGlobal(){
  byId('logoutBtn').addEventListener('click', logout);
  byId('modalCloseBtn').addEventListener('click',()=>byId('detailModal').close());
  byId('exportDataBtn').addEventListener('click', exportData);
  byId('themeToggleBtn').addEventListener('click', toggleTheme);
}
function openModal(html){ byId('modalBody').innerHTML = html; byId('detailModal').showModal(); }
function setupGarudaMotion(){
  const stage = byId('garudaStage');
  const mark = document.querySelector('.garuda-mark.live-5d');
  const badges = document.querySelectorAll('.floating-badge');
  const canvas = byId('garudaParticles');
  if(stage && mark){
    stage.addEventListener('mousemove', e => {
      const r = stage.getBoundingClientRect();
      const rx = ((e.clientX - r.left) / r.width - .5) * 18;
      const ry = ((e.clientY - r.top) / r.height - .5) * -14;
      mark.style.transform = `translateY(-4px) rotateX(${ry}deg) rotateY(${rx}deg) scale(1.015)`;
      badges.forEach((b,i)=>{ const shift = (i+1)*2.5; b.style.transform = `translate(${rx*shift*.08}px, ${ry*shift*.08}px)`; });
    });
    stage.addEventListener('mouseleave', ()=>{
      mark.style.transform='translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
      badges.forEach(b=>b.style.transform='translate(0,0)');
    });
  }
  if(canvas){
    const ctx = canvas.getContext('2d');
    const resize = ()=>{ canvas.width = canvas.offsetWidth * devicePixelRatio; canvas.height = canvas.offsetHeight * devicePixelRatio; ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0); };
    resize();
    const particles = Array.from({length:28},()=>({x:Math.random()*canvas.offsetWidth,y:Math.random()*canvas.offsetHeight,r:Math.random()*2.4+1,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,a:Math.random()*.6+.2}));
    function draw(){
      ctx.clearRect(0,0,canvas.offsetWidth,canvas.offsetHeight);
      particles.forEach(p=>{
        p.x += p.vx; p.y += p.vy;
        if(p.x<0||p.x>canvas.offsetWidth) p.vx*=-1;
        if(p.y<0||p.y>canvas.offsetHeight) p.vy*=-1;
        ctx.beginPath();
        ctx.fillStyle = `rgba(212,175,55,${p.a})`;
        ctx.shadowBlur = 12; ctx.shadowColor = 'rgba(212,175,55,.7)';
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill();
      });
      for(let i=0;i<particles.length;i++){
        for(let j=i+1;j<particles.length;j++){
          const a=particles[i], b=particles[j];
          const dx=a.x-b.x, dy=a.y-b.y, d=Math.hypot(dx,dy);
          if(d<90){ ctx.beginPath(); ctx.strokeStyle=`rgba(212,175,55,${(1-d/90)*.16})`; ctx.lineWidth=.8; ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); }
        }
      }
      requestAnimationFrame(draw);
    }
    window.addEventListener('resize', resize, {passive:true});
    draw();
  }
}



function registerStudent(){
  const user = {
    id:uid(), role:'student', status:'active', name:byId('studentName').value.trim(),
    university:'Not specified', province:byId('studentProvince').value.trim(), discipline:'General ESP Track',
    email:byId('studentEmail').value.trim().toLowerCase(), password:byId('studentPassword').value,
    createdAt:new Date().toISOString(), progress:{completedWeeks:[], quizScores:{}, badges:[]}
  };
  if(!user.name || !user.email || !user.password) return toast('Incomplete registration','Please complete name, email, and password.');
  if(db.users.some(u=>u.email===user.email)) return toast('Email already registered','Please login or use another email.');
  db.users.push(user);
  saveDB(); logActivity('student-register', `${user.name} registered as student`);
  toast('Student registered','You may login now. Complete your institution and discipline profile after login.');
  byId('studentLoginEmail').value=user.email; byId('studentLoginPassword').value=user.password;
}
function registerLecturer(){
  const user = {
    id:uid(), role:'lecturer', status:'pending', name:byId('lecturerName').value.trim(),
    university:byId('lecturerInstitution').value.trim() || 'Not specified',
    email:byId('lecturerEmail').value.trim().toLowerCase(), password:byId('lecturerPassword').value,
    expertise:byId('lecturerExpertise').value.trim(), idNumber:byId('lecturerIdNumber').value.trim(), createdAt:new Date().toISOString()
  };
  if(!user.name || !user.email || !user.password) return toast('Incomplete request','Please complete lecturer name, email, and password.');
  if(db.users.some(u=>u.email===user.email)) return toast('Email already registered','Please login or use another email.');
  db.users.push(user); if(user.university && user.university !== 'Not specified' && !db.universities.includes(user.university)) db.universities.push(user.university);
  saveDB(); logActivity('lecturer-request', `${user.name} requested lecturer access`);
  toast('Approval request submitted','Admin must approve this lecturer account before login.');
}
function loginUser(role){
  const email = byId(role+'LoginEmail').value.trim().toLowerCase();
  const pass = byId(role+'LoginPassword').value;
  const user = db.users.find(u=>u.email===email && u.password===pass && u.role===role);
  if(!user) return toast('Login failed','Email, password, or role is incorrect.');
  if(user.role==='lecturer' && user.status!=='approved') return toast('Lecturer not approved','Please wait for Admin approval.');
  if(user.status==='rejected') return toast('Account rejected','Please contact the administrator.');
  session = {id:user.id, email:user.email, name:user.name, role:user.role}; saveSession(); enterApp(role); logActivity('login', `${user.name} logged in as ${role}`);
}
function adminLogin(){
  const pin = byId('adminPin').value.trim();
  if(pin !== ADMIN_PIN) return toast('Admin PIN incorrect','Please use the authorized PIN.');
  session = {id:'admin', email:'admin@garuda.local', name:db.settings.adminName || 'Administrator', role:'admin'}; saveSession(); enterApp('admin'); logActivity('admin-login','Admin entered command center');
}
function logout(){ session=null; localStorage.removeItem('garudaEspSession'); byId('landing').classList.remove('hidden'); byId('appShell').classList.add('hidden'); toast('Logged out','Session closed securely.'); }

function enterApp(role, silent=false){
  byId('landing').classList.add('hidden'); byId('appShell').classList.remove('hidden'); renderUserCard(); renderNav(role); navigate('dashboard'); if(!silent) toast('Welcome', `Logged in as ${role}.`);
}
function getCurrentUser(){ return session?.role === 'admin' ? {name:db.settings.adminName, role:'admin', university:'System Administrator', discipline:'System Governance', status:'active'} : db.users.find(u=>u.id===session?.id); }
function renderUserCard(){
  const u = getCurrentUser() || {};
  const inst = u.university || 'Multi-Institution Access';
  const extra = u.discipline || u.expertise || 'Integrated ESP Platform';
  byId('userCard').innerHTML = `<strong>${esc(u.name || 'User')}</strong><span>${esc((u.role||'').toUpperCase())}</span><small>${esc(inst)}<br>${esc(extra)}<br>${esc(u.email || session.email || '')}</small>`;
}
const navs = {
  student:[['dashboard','🏠','Student Dashboard'],['weeks','🗓️','16-Week Studio'],['disciplines','🧭','ESP Disciplines'],['atlas','🗺️','Nusantara Atlas'],['online','📹','Online Room'],['ai','🤖','AI-Assisted Studio'],['voice','🎙️','Voice of Nusantara'],['assignments','📚','Assignments'],['portfolio','🏅','Portfolio & Progress']],
  lecturer:[['dashboard','🏠','Lecturer Dashboard'],['disciplines','🧭','Discipline Matrix'],['builder','🛠️','Course Builder'],['materials','📁','Materials Upload'],['tasks','📝','Tasks & Assessments'],['online','📹','Online Room'],['review','✅','Review Submissions'],['analytics','📊','Learning Analytics'],['ai','🤖','AI-Assisted Studio']],
  admin:[['dashboard','🏠','Admin Dashboard'],['approvals','🛡️','Lecturer Approval'],['users','👥','Users & Institutions'],['disciplines','🧭','ESP Discipline Control'],['content','🗂️','Content Control'],['online','📹','Online Room'],['analytics','📊','System Analytics'],['settings','⚙️','Settings'],['ai','🤖','AI-Assisted Studio']]
};
function renderNav(role){
  const host = byId('sideNav'); host.innerHTML = navs[role].map(([page,icon,label]) => `<button data-page="${page}"><span class="nav-icon">${icon}</span>${label}</button>`).join('');
  host.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>navigate(btn.dataset.page)));
}
function navigate(page){
  currentPage = page;
  document.querySelectorAll('.side-nav button').forEach(b=>b.classList.toggle('active', b.dataset.page===page));
  const role = session.role;
  const label = (navs[role].find(n=>n[0]===page)||[])[2] || 'Dashboard';
  byId('pageTitle').textContent = label; byId('roleKicker').textContent = `${role.toUpperCase()} CONTROL PANEL`;
  const renderMap = {
    dashboard: role==='student'?renderStudentDashboard:role==='lecturer'?renderLecturerDashboard:renderAdminDashboard,
    disciplines: renderDisciplines, weeks: renderWeeks, atlas: renderAtlas, online: renderOnlineRoom, ai: renderAIStudio, voice: renderVoiceLab, assignments: renderAssignments, portfolio: renderPortfolio,
    builder: renderCourseBuilder, materials: renderMaterials, tasks: renderTasks, review: renderReview,
    analytics: role==='admin'?renderSystemAnalytics:renderLecturerAnalytics, approvals: renderApprovals, users: renderUsers, content: renderContentControl, settings: renderSettings
  };
  (renderMap[page] || renderStudentDashboard)();
}

function completionPercent(user=getCurrentUser()){
  const done = user?.progress?.completedWeeks?.length || 0; return Math.round(done/baseCurriculum.length*100);
}
function nextWeek(user=getCurrentUser()){
  const done = new Set(user?.progress?.completedWeeks || []); return db.curriculum.find(w=>!done.has(w.week)) || db.curriculum[db.curriculum.length-1];
}
function renderStudentDashboard(){
  const u = getCurrentUser(); const pct = completionPercent(u); const next = nextWeek(u);
  const profileAlert = (!u.university || u.university==='Not specified' || !u.discipline || u.discipline==='General ESP Track')
    ? `<div class="mini-item"><strong>Profile Completion Recommended</strong><p>Please update your institution and discipline so analytics, assignments, and discipline-specific guidance become more accurate.</p><button class="secondary-btn" onclick="openProfileEditor()">Complete Profile</button></div>` : '';
  byId('mainView').innerHTML = `
    <div class="grid cols-4">
      ${metricCard('Learning Progress', pct+'%', 'Completed modules')}
      ${metricCard('Quiz Average', averageQuiz(u)+'%', 'Current performance')}
      ${metricCard('Assignments', mySubmissions().length, 'Submitted works')}
      ${metricCard('Badges', (u.progress?.badges||[]).length, 'Achievements')}
    </div>
    <div class="grid cols-2">
      <section class="panel">
        <h3>Continue Your Garuda Journey</h3>
        <p><strong>Week ${next.week}: ${esc(next.title)}</strong></p>
        <p>${esc(next.reading.slice(0,220))}...</p>
        <div class="progress-bar"><span style="width:${pct}%"></span></div>
        <div class="actions" style="margin-top:16px"><button class="primary-btn" onclick="navigate('weeks')">Open 16-Week Studio</button><button class="secondary-btn" onclick="openWeek(${next.week})">View Next Module</button></div>
      </section>
      <section class="panel">
        <h3>6 ESP Disciplines + 6 Garuda Paths</h3>
        <p>Explore tailored materials for Tourism & Hospitality, Business & Entrepreneurship, Engineering & Technology, Health & Care, Maritime & Environment, and Education & Communication.</p>
        <ul class="check-list"><li>Path 1: Professional Communication</li><li>Path 2: Reading & Vocabulary</li><li>Path 3: Writing for ESP</li><li>Path 4: Speaking & Presentation</li><li>Path 5: Digital / Online Room</li><li>Path 6: Intercultural Project</li></ul>
        <div class="actions"><button class="primary-btn" onclick="navigate('disciplines')">Open Discipline Matrix</button><button class="secondary-btn" onclick="navigate('online')">Online Room</button></div>
      </section>
    </div>
    <div class="grid cols-2">
      <section class="panel">
        <h3>AI-Assisted Local Engine</h3>
        <p>Practice ESP writing, speaking scenarios, cultural explanation, rubric-based feedback, and pronunciation scripts without external API keys.</p>
        <ul class="check-list"><li>Rule-based writing feedback</li><li>Local scenario generator</li><li>Browser speech synthesis and recognition where supported</li><li>Lecturer-validated assessment workflow</li></ul>
        <div class="actions"><button class="primary-btn" onclick="navigate('ai')">Open AI Studio</button><button class="secondary-btn" onclick="navigate('voice')">Voice Lab</button></div>
      </section>
      <section class="panel">
        <h3>Live Online Room</h3>
        <p>Join Zoom-like online sessions for orientation, discipline workshops, consultation, breakout discussion, and feedback conferences.</p>
        <ul class="check-list"><li>Live meeting schedule</li><li>Attendance log</li><li>Agenda and learning notes</li><li>Breakout-friendly workshop guidance</li></ul>
        <div class="actions"><button class="primary-btn" onclick="navigate('online')">Open Online Room</button></div>
      </section>
    </div>
    <section class="panel"><h3>Nusantara Learning Map Preview</h3>${atlasMapHTML()}</section>
    <section class="panel"><h3>Latest Announcements</h3>${profileAlert}${announcementList()}</section>`;
}
function renderLecturerDashboard(){
  const subs = db.submissions.length; const pending = db.submissions.filter(s=>!db.grades.some(g=>g.submissionId===s.id)).length;
  byId('mainView').innerHTML = `
    <div class="grid cols-4">
      ${metricCard('Modules', db.curriculum.length, 'Editable weeks')}
      ${metricCard('Students', db.users.filter(u=>u.role==='student').length, 'Registered learners')}
      ${metricCard('Submissions', subs, 'Student works')}
      ${metricCard('Pending Review', pending, 'Need lecturer feedback')}
    </div>
    <div class="grid cols-3">
      <section class="panel"><h3>Discipline-Aligned Planning</h3><p>Review all six ESP disciplines and ensure each Garuda pathway contains suitable materials, tasks, and assessments.</p><button class="primary-btn" onclick="navigate('disciplines')">Open Discipline Matrix</button></section>
      <section class="panel"><h3>Course, Tasks, and Materials</h3><p>Create or update week modules, province-based heritage content, vocabulary, assignments, quizzes, and resource files.</p><div class="actions"><button class="primary-btn" onclick="navigate('builder')">Course Builder</button><button class="secondary-btn" onclick="navigate('materials')">Materials</button></div></section>
      <section class="panel"><h3>Online Room Control</h3><p>Schedule live classes, workshops, consultation sessions, and feedback conferences through the integrated online room.</p><button class="primary-btn" onclick="navigate('online')">Manage Online Room</button></section>
    </div>
    <section class="panel"><h3>Learning Analytics Snapshot</h3>${analyticsBars()}</section>`;
}
function renderAdminDashboard(){
  const pending = db.users.filter(u=>u.role==='lecturer' && u.status==='pending').length;
  byId('mainView').innerHTML = `
    <div class="grid cols-4">
      ${metricCard('Users', db.users.length, 'All registered accounts')}
      ${metricCard('Pending Lecturers', pending, 'Approval needed')}
      ${metricCard('Institutions', db.universities.length, 'Recorded institutions')}
      ${metricCard('Content Units', db.curriculum.length + db.customTasks.length + db.resources.length, 'Modules, tasks, resources')}
    </div>
    <div class="grid cols-3">
      <section class="panel"><h3>Lecturer Approval</h3><p>Approve lecturer access before they can create courses, upload tasks, schedule rooms, or review submissions.</p><button class="primary-btn" onclick="navigate('approvals')">Manage Approval</button></section>
      <section class="panel"><h3>Discipline Governance</h3><p>Supervise six ESP disciplines, six pathways, and the 16-week curriculum to ensure academic quality across institutions.</p><button class="primary-btn" onclick="navigate('disciplines')">Open Discipline Control</button></section>
      <section class="panel"><h3>System Export & Room Oversight</h3><p>Export users, curriculum, submissions, grades, resources, and live-room schedules as JSON for backup and governance.</p><div class="actions"><button class="primary-btn" onclick="exportData()">Export Data</button><button class="secondary-btn" onclick="navigate('online')">Online Room</button></div></section>
    </div>
    <section class="panel"><h3>Recent Platform Activity</h3>${activityList()}</section>`;
}
function metricCard(title, value, desc){return `<section class="panel"><div class="metric"><div><span>${esc(title)}</span><strong>${esc(value)}</strong></div></div><p>${esc(desc)}</p></section>`}
function averageQuiz(u){ const scores = Object.values(u?.progress?.quizScores || {}); if(!scores.length) return 0; return Math.round(scores.reduce((a,b)=>a+b,0)/scores.length); }
function mySubmissions(){return db.submissions.filter(s=>s.userId===session.id)}
function announcementList(){return db.announcements.map(a=>`<div class="mini-item"><strong>${esc(a.title)}</strong><small>${new Date(a.date).toLocaleString()}</small><p>${esc(a.body)}</p></div>`).join('') || `<div class="empty-state">No announcements yet.</div>`}
function activityList(){return db.activity.slice(0,10).map(a=>`<div class="mini-item"><strong>${esc(a.type)}</strong><small>${new Date(a.date).toLocaleString()} • ${esc(a.user)}</small><p>${esc(a.detail)}</p></div>`).join('') || `<div class="empty-state">No activity yet.</div>`}
function analyticsBars(){
  const groups = db.users.filter(u=>u.role==='student').reduce((acc,u)=>{const key=u.university||'Not specified'; acc[key]=(acc[key]||[]).concat(u); return acc;},{});
  return Object.entries(groups).map(([uni,users])=>{const avg=Math.round(users.reduce((a,u)=>a+completionPercent(u),0)/users.length)||0; return `<div class="mini-item"><strong>${esc(uni)}</strong><small>${users.length} students • average completion ${avg}%</small><div class="progress-bar"><span style="width:${avg}%"></span></div></div>`}).join('') || `<div class="empty-state">Student analytics will appear after registration.</div>`;
}


function openProfileEditor(){
  const u=getCurrentUser();
  openModal(`<h2>Complete Academic Profile</h2><p class="modal-lead">This helps multi-university analytics and discipline-specific guidance become more accurate.</p><div class="form-grid two"><label>Institution / University<input id="profileInstitution" value="${esc(u.university||'')}"></label><label>ESP Discipline<select id="profileDiscipline">${espDisciplines.map(d=>`<option ${u.discipline===d.title?'selected':''}>${esc(d.title)}</option>`).join('')}</select></label><label>Province / Origin<input id="profileProvince" value="${esc(u.province||'')}"></label><label>Professional Goal<input id="profileGoal" value="${esc(u.goal||'')}" placeholder="Tour guide, entrepreneur, teacher, engineer, etc."></label></div><div class="actions" style="margin-top:14px"><button class="primary-btn" onclick="saveProfile()">Save Profile</button></div>`);
}
function saveProfile(){
  const u=db.users.find(x=>x.id===session.id); if(!u) return;
  u.university=byId('profileInstitution').value.trim() || 'Not specified';
  u.discipline=byId('profileDiscipline').value;
  u.province=byId('profileProvince').value.trim();
  u.goal=byId('profileGoal').value.trim();
  if(u.university && u.university!=='Not specified' && !db.universities.includes(u.university)) db.universities.push(u.university);
  saveDB(); renderUserCard(); byId('detailModal').close(); toast('Profile updated'); navigate('dashboard');
}

function renderDisciplines(){
  byId('mainView').innerHTML = `<section class="panel"><h3>Six ESP Disciplines × Six Garuda Pathways</h3><p>Each discipline contains appropriate learning materials, tasks, and assessments across six coherent pathways: professional communication, reading & vocabulary, writing, speaking & presentation, digital / online room, and intercultural project work.</p></section><div class="discipline-grid">${espDisciplines.map(d=>`<article class="discipline-card"><h3>${d.icon} ${esc(d.title)}</h3><p>${esc(d.summary)}</p><div class="discipline-meta"><span class="tag red">Province links: ${esc(d.provinceLink)}</span></div><div class="skill-badges">${d.skills.map(s=>`<span>${esc(s)}</span>`).join('')}</div><ul class="discipline-points">${d.pathways.slice(0,3).map(p=>`<li><strong>${esc(p.name)}</strong>: ${esc(p.material)}</li>`).join('')}</ul><div class="actions" style="margin-top:14px"><button class="primary-btn" onclick="openDiscipline('${d.id}')">Open Full Matrix</button></div></article>`).join('')}</div>`;
}
function openDiscipline(id){
  const d=espDisciplines.find(x=>x.id===id); if(!d) return;
  openModal(`<h2>${d.icon} ${esc(d.title)}</h2><p class="modal-lead">${esc(d.summary)}</p><p><span class="tag red">Linked provinces</span> ${esc(d.provinceLink)}</p>${d.pathways.map(p=>`<section class="mini-item"><strong>${esc(p.name)}</strong><p><strong>Materials:</strong> ${esc(p.material)}</p><p><strong>Task:</strong> ${esc(p.task)}</p><p><strong>Assessment:</strong> ${esc(p.assessment)}</p></section>`).join('')}`);
}

function renderOnlineRoom(){
  const rooms=db.rooms||[];
  const canManage=['lecturer','admin'].includes(session.role);
  byId('mainView').innerHTML = `<div class="grid cols-2"><section class="panel"><h3>Online Room Hub</h3><p>Zoom-style academic room for orientation, discipline workshops, consultation, feedback conference, screen sharing, breakout discussion, attendance, and online collaboration.</p><div class="live-toolbar"><span class="tag red">Live video</span><span class="tag">Screen share</span><span class="tag">Attendance</span><span class="tag">Chat</span><span class="tag">Breakout-style tasks</span><span class="tag">Recording policy</span></div><div class="live-grid">${rooms.map(r=>`<article class="meeting-card"><h3>${esc(r.title)}</h3><p>${esc(r.agenda)}</p><div class="meeting-meta"><span class="tag red">${esc(r.type)}</span><span class="tag">${esc(r.week)}</span><span class="tag">${esc(r.schedule)}</span></div><div class="meeting-features">${r.features.map(f=>`<span>${esc(f)}</span>`).join('')}</div><div class="actions" style="margin-top:14px"><button class="primary-btn" onclick="openRoom('${r.id}')">Open Room</button><a class="secondary-btn" href="${esc(r.link)}" target="_blank" rel="noopener">Launch Link</a></div></article>`).join('')}</div></section><section class="panel">${canManage?onlineRoomManager():onlineRoomStudentBox()}</section></div>`;
}
function onlineRoomManager(){
  return `<h3>Schedule / Update Online Room</h3><div class="form-grid two online-form"><label>Room Title<input id="roomTitle" placeholder="Room title"></label><label>Host<input id="roomHost" value="${esc(session.name)}"></label><label>Week / Scope<input id="roomWeek" placeholder="Week 5 / General / Assessment"></label><label>Session Type<select id="roomType"><option>Lecture</option><option>Workshop</option><option>Consultation</option><option>Assessment</option><option>Office Hour</option></select></label><label>Schedule<input id="roomSchedule" placeholder="Monday • 09:00 WIB"></label><label>Meeting Link<input id="roomLink" placeholder="https://zoom.us/"></label></div><label style="margin-top:12px">Agenda<textarea id="roomAgenda" placeholder="Session agenda and learning focus"></textarea></label><label>Features (comma separated)<input id="roomFeatures" value="Live video, Screen share, Attendance, Chat, Breakout discussion"></label><div class="actions" style="margin-top:14px"><button class="primary-btn" onclick="saveRoom()">Save Online Room</button></div><p class="tiny-note">Rooms are stored locally and can be updated by lecturers and admin.</p>`;
}
function onlineRoomStudentBox(){
  return `<h3>Student Online Room Guide</h3><ul class="check-list"><li>Check meeting schedule and agenda before joining.</li><li>Use English actively during attendance, breakout discussion, and consultation.</li><li>Prepare microphone, camera, assignment draft, and reflective notes.</li><li>Use the room for presentation, feedback, office hour, and portfolio discussion.</li></ul><p class="live-mini">Students can open any available room, mark attendance, and follow the session agenda.</p>`;
}
function openRoom(id){
  const r=(db.rooms||[]).find(x=>x.id===id); if(!r) return;
  openModal(`<h2>${esc(r.title)}</h2><p class="modal-lead"><strong>Host:</strong> ${esc(r.host)} • <strong>Schedule:</strong> ${esc(r.schedule)}</p><p>${esc(r.agenda)}</p><div class="meeting-features">${r.features.map(f=>`<span>${esc(f)}</span>`).join('')}</div><div class="actions" style="margin-top:14px"><a class="primary-btn" href="${esc(r.link)}" target="_blank" rel="noopener">Launch Meeting Link</a><button class="secondary-btn" onclick="joinRoom('${r.id}')">Mark Attendance</button></div>`);
}
function joinRoom(id){
  const room=(db.rooms||[]).find(x=>x.id===id); if(!room) return;
  logActivity('online-room', `${session.name} accessed ${room.title}`);
  toast('Attendance marked', `You accessed ${room.title}.`);
  byId('detailModal').close();
}
function saveRoom(){
  const data={id:uid(), title:byId('roomTitle').value.trim(), host:byId('roomHost').value.trim(), week:byId('roomWeek').value.trim(), type:byId('roomType').value, schedule:byId('roomSchedule').value.trim(), link:byId('roomLink').value.trim() || 'https://zoom.us/', agenda:byId('roomAgenda').value.trim(), features:byId('roomFeatures').value.split(',').map(x=>x.trim()).filter(Boolean)};
  if(!data.title || !data.host || !data.agenda) return toast('Incomplete room','Please complete title, host, and agenda.');
  db.rooms.unshift(data); saveDB(); logActivity('room-create', `${session.name} created ${data.title}`); toast('Online room saved'); renderOnlineRoom();
}

function renderWeeks(){
  const u = getCurrentUser(); const done = new Set(u.progress?.completedWeeks || []);
  byId('mainView').innerHTML = `<section class="panel"><h3>16-Week ESP Nusantara Studio</h3><p>Every week integrates Indonesian local wisdom, six ESP disciplines, pathway-specific materials, AI-assisted tasks, quizzes, assignments, and online live-room support.</p></section><div class="grid cols-3">${db.curriculum.map(w=>weekCard(w, done.has(w.week))).join('')}</div>`;
}
function weekCard(w, complete=false){
  return `<article class="week-card"><div class="week-top"><div class="week-badge">${w.week}</div><span class="status-pill ${complete?'done':'pending'}">${complete?'Completed':'Open'}</span></div><h3>${esc(w.title)}</h3><div><span class="tag red">${esc(w.province)}</span> <span class="tag">${pathwayIcons[w.pathway]||'✦'} ${esc(w.pathway)}</span></div><p>${esc(w.reading.slice(0,145))}...</p><div class="actions"><button class="primary-btn" onclick="openWeek(${w.week})">Open Module</button>${session.role==='student'?`<button class="secondary-btn" onclick="markComplete(${w.week})">Mark Complete</button>`:''}</div></article>`;
}
function openWeek(weekNo){
  const w = db.curriculum.find(x=>x.week===weekNo); if(!w) return;
  const taskList = db.customTasks.filter(t=>Number(t.week)===Number(weekNo));
  openModal(`<h2>Week ${w.week}: ${esc(w.title)}</h2>
    <div class="grid cols-2"><section><p><span class="tag red">${esc(w.province)}</span> <span class="tag">${esc(w.pathway)}</span></p><p><strong>Discipline Lens:</strong> ${esc((disciplineByPathway(w.pathway)||{}).short || w.pathway)}</p><h3>Learning Reading</h3><p>${esc(w.reading)}</p><h3>Objectives</h3><ul class="check-list">${w.objectives.map(o=>`<li>${esc(o)}</li>`).join('')}</ul><h3>Vocabulary Bank</h3><p>${w.vocab.map(v=>`<span class="tag dark">${esc(v)}</span>`).join(' ')}</p></section>
    <section><h3>Assignment</h3><p>${esc(w.assignment)}</p><div class="actions">${session.role==='student'?`<button class="primary-btn" onclick="submitAssignment(${w.week})">Submit Assignment</button><button class="secondary-btn" onclick="runQuiz(${w.week})">Take Quiz</button>`:`<button class="primary-btn" onclick="navigate('builder'); byId('detailModal').close();">Edit in Builder</button>`}</div><h3>Additional Lecturer Tasks</h3>${taskList.map(t=>`<div class="mini-item"><strong>${esc(t.title)}</strong><small>${esc(t.type)} • Due ${esc(t.dueDate||'Flexible')}</small><p>${esc(t.instructions)}</p></div>`).join('') || '<p>No additional tasks for this week.</p>'}</section></div>`);
}
function markComplete(week){
  const u = db.users.find(x=>x.id===session.id); if(!u.progress) u.progress={completedWeeks:[],quizScores:{},badges:[]};
  if(!u.progress.completedWeeks.includes(week)) u.progress.completedWeeks.push(week);
  if(u.progress.completedWeeks.length >= 4 && !u.progress.badges.includes('Nusantara Explorer')) u.progress.badges.push('Nusantara Explorer');
  saveDB(); renderWeeks(); toast('Module completed', `Week ${week} has been marked complete.`);
}
function submitAssignment(week){
  const w = db.curriculum.find(x=>x.week===week);
  openModal(`<h2>Submit Week ${week} Assignment</h2><p><strong>${esc(w.assignment)}</strong></p><div class="form-grid"><label>Submission Title<input id="subTitle" value="Week ${week} - ${esc(w.title)}"></label><label>Your Text / Reflection<textarea id="subText" placeholder="Paste your assignment text here"></textarea></label><label class="file-label">Attach DOC/DOCX or supporting file<input id="subFile" type="file" accept=".doc,.docx,.txt,.pdf,.png,.jpg,.jpeg"></label><button class="primary-btn" onclick="saveSubmission(${week})">Save Submission</button></div>`);
}
function saveSubmission(week){
  const file = byId('subFile').files[0];
  const title = byId('subTitle').value.trim(); const text = byId('subText').value.trim();
  if(!title || !text) return toast('Submission incomplete','Please add title and text.');
  const save = (fileData=null)=>{
    db.submissions.unshift({id:uid(), userId:session.id, userName:getCurrentUser().name, university:getCurrentUser().university, week, title, text, fileName:file?.name||'', fileData, date:new Date().toISOString()});
    saveDB(); logActivity('submission', `${getCurrentUser().name} submitted Week ${week}`); byId('detailModal').close(); toast('Assignment submitted','Lecturer can now review it.');
  };
  if(file){ const r=new FileReader(); r.onload=()=>save(r.result); r.readAsDataURL(file); } else save();
}
function runQuiz(week){
  const w=db.curriculum.find(x=>x.week===week);
  openModal(`<h2>Week ${week} Quiz</h2><form id="quizForm" class="form-grid">${w.quiz.map((q,i)=>`<fieldset class="mini-item"><legend><strong>${i+1}. ${esc(q[0])}</strong></legend>${q.slice(1).map((a,j)=>`<label style="text-transform:none;font-weight:700;color:inherit"><input type="radio" name="q${i}" value="${esc(a)}" style="width:auto"> ${esc(a)}</label>`).join('')}</fieldset>`).join('')}<button type="button" class="primary-btn" onclick="gradeQuiz(${week})">Submit Quiz</button></form>`);
}
function gradeQuiz(week){
  const w=db.curriculum.find(x=>x.week===week); let score=0;
  w.quiz.forEach((q,i)=>{ const selected=document.querySelector(`input[name="q${i}"]:checked`); if(selected && selected.value===q[1]) score++; });
  const pct=Math.round(score/w.quiz.length*100); const u=db.users.find(x=>x.id===session.id); if(!u.progress) u.progress={completedWeeks:[],quizScores:{},badges:[]}; u.progress.quizScores[week]=pct; saveDB(); toast('Quiz scored', `Week ${week}: ${pct}%`); openModal(`<h2>Quiz Result</h2><div class="panel"><div class="metric"><span>Score</span><strong>${pct}%</strong></div><p>${pct>=80?'Excellent ESP mastery.':'Please review the module and try again after studying the reading and vocabulary.'}</p><button class="primary-btn" onclick="byId('detailModal').close()">Close</button></div>`);
}

function disciplineByPathway(pathway){ return espDisciplines.find(d=>d.title===pathway) || espDisciplines.find(d=>pathway.toLowerCase().includes((d.title.split(' ')[0]||'').toLowerCase())) || null; }
function disciplineCardsModalHTML(){ return `<div class="discipline-grid">${espDisciplines.map(d=>disciplineCardHTML(d)).join('')}</div>`; }
function disciplineCardHTML(d){ return `<article class="discipline-card"><h3>${d.icon} ${esc(d.title)}</h3><p>${esc(d.summary || d.description || '')}</p><div class="discipline-meta"><span class="tag red">${esc(d.provinceLink || 'Discipline track')}</span></div><div class="skill-badges">${(d.skills||[]).map(s=>`<span>${esc(s)}</span>`).join('')}</div><ul class="discipline-points">${(d.pathways||[]).slice(0,3).map(p=>`<li><strong>${esc(p.name)}</strong>: ${esc(p.material)}</li>`).join('')}</ul></article>`; }
function renderDisciplineHub(){ renderDisciplines(); }
function meetingsForRole(role){
  return (db.meetings || []).filter(m => m.roleScope==='all' || m.roleScope===role);
}
function meetingMiniHTML(m){ return `<div class="mini-item"><strong>${esc(m.title)}</strong><small>${esc(m.week)} • Room ${esc(m.roomCode)}</small><p>${esc(m.agenda)}</p><div class="actions"><button class="secondary-btn" onclick="joinMeeting('${m.id}')">Join Room</button></div></div>`; }
function renderOnlineRoom(){
  const role = session.role;
  const meetings = meetingsForRole(role);
  const manageBox = role==='student' ? '' : `<section class="panel online-form"><h3>Create / Update Live Room</h3><div class="form-grid two"><label>Title<input id="meetTitle" placeholder="Ex: Week 4 Maritime Briefing"></label><label>Scope<select id="meetScope"><option value="all">All roles</option><option value="student">Students</option><option value="lecturer">Lecturers</option><option value="admin">Admin</option></select></label><label>Week / Session<input id="meetWeek" placeholder="Week 4 / Friday"></label><label>Room Code<input id="meetCode" placeholder="GARUDA-W4"></label><label>Meeting Link<input id="meetLink" placeholder="Optional external meeting link"></label><label>Host Name<input id="meetHost" placeholder="Host lecturer or admin"></label></div><label>Agenda<textarea id="meetAgenda" placeholder="Meeting agenda, objectives, and procedures"></textarea></label><label>Host Notes<textarea id="meetNotes" placeholder="Preparation notes for participants"></textarea></label><button class="primary-btn" onclick="saveMeeting()">Save Live Room</button></section>`;
  byId('mainView').innerHTML = `<section class="panel"><h3>Online Live Room</h3><p>Zoom-like academic room for synchronous classes. Each room can include a room code, host details, meeting link, agenda, attendance notes, screen sharing, chat, and follow-up support.</p><div class="live-toolbar"><span class="tag red">Role: ${esc(role)}</span><span class="tag">Rooms available: ${meetings.length}</span><span class="live-mini">Suggested features: video, microphone, screen share, chat, attendance, breakout prompts, and recording notes.</span></div></section>${manageBox}<div class="live-grid">${meetings.map(m=>`<article class="meeting-card"><h3>${esc(m.title)}</h3><p>${esc(m.agenda)}</p><div class="meeting-meta"><span class="tag red">${esc(m.week)}</span><span class="tag">Room ${esc(m.roomCode)}</span><span class="tag">Host: ${esc(m.host)}</span></div><p><strong>Host Notes:</strong> ${esc(m.notes || '-')}</p><div class="meeting-features">${(m.features||[]).map(f=>`<span>${esc(f)}</span>`).join('')}</div><div class="actions" style="margin-top:14px"><button class="primary-btn" onclick="joinMeeting('${m.id}')">Join Room</button>${role!=='student'?`<button class="danger-btn" onclick="deleteMeeting('${m.id}')">Delete</button>`:''}</div></article>`).join('') || '<div class="empty-state">No room available yet.</div>'}</div>`;
}
function saveMeeting(){
  const title = byId('meetTitle')?.value.trim(); const roleScope = byId('meetScope')?.value || 'all'; const week = byId('meetWeek')?.value.trim(); const roomCode = byId('meetCode')?.value.trim(); const link = byId('meetLink')?.value.trim(); const host = byId('meetHost')?.value.trim(); const agenda = byId('meetAgenda')?.value.trim(); const notes = byId('meetNotes')?.value.trim();
  if(!title || !week || !roomCode || !host || !agenda) return toast('Live room incomplete','Please complete title, week, room code, host, and agenda.');
  db.meetings.unshift({id:uid(), title, roleScope, host, week, roomCode, link, agenda, notes, features:['HD video','screen share','chat','attendance log','raise hand','recording note']});
  saveDB(); logActivity('meeting-create', `${title} created by ${session.name}`); toast('Live room saved'); renderOnlineRoom();
}
function deleteMeeting(id){ db.meetings = db.meetings.filter(m=>m.id!==id); saveDB(); toast('Live room deleted'); renderOnlineRoom(); }
function joinMeeting(id){ const m=(db.meetings||[]).find(x=>x.id===id); if(!m) return; const target = m.link || `https://meet.jit.si/${encodeURIComponent(m.roomCode)}`; window.open(target, '_blank'); }
function renderAtlas(){
  byId('mainView').innerHTML = `<section class="panel"><h3>Nusantara Atlas</h3><p>Explore Indonesian provinces as ESP learning contexts. Each province can become a professionally relevant learning unit.</p>${atlasMapHTML()}</section><div class="grid cols-3">${provinceCards.map((p,i)=>`<article class="week-card"><div class="week-top"><div class="week-badge">${i+1}</div><span class="tag">${pathwayIcons[p[2]]||'✦'}</span></div><h3>${esc(p[0])}</h3><p><strong>${esc(p[1])}</strong></p><p>${esc(p[2])}</p><div class="actions"><button class="primary-btn" onclick="generateProvinceModule('${esc(p[0])}','${esc(p[1])}','${esc(p[2])}')">Generate ESP Task</button></div></article>`).join('')}</div>`;
}
function atlasMapHTML(){
  const islands = [
    ['8%','45%','210px','--r:-8deg'],['28%','48%','150px','--r:4deg'],['43%','52%','90px','--r:-4deg'],['55%','43%','190px','--r:16deg'],['65%','56%','140px','--r:0deg'],['80%','58%','180px','--r:-8deg'],['74%','38%','90px','--r:10deg']
  ];
  const pins = [['16%','43%','Aceh'],['39%','49%','Yogyakarta'],['48%','53%','Bali'],['63%','48%','Sulawesi'],['83%','56%','Papua']];
  return `<div class="atlas-map">${islands.map(i=>`<span class="island" style="left:${i[0]};top:${i[1]};width:${i[2]};${i[3]}"></span>`).join('')}${pins.map(p=>`<button class="pin" style="left:${p[0]};top:${p[1]}" onclick="toast('Province selected','${p[2]} ESP heritage module opened.')"><span>${p[2]}</span></button>`).join('')}</div>`;
}
function generateProvinceModule(province, heritage, pathway){
  const text = localScenario({province, heritage, pathway, audience:'international students', task:'professional role-play'});
  openModal(`<h2>${esc(province)} AI-Assisted ESP Task</h2><div class="writer-output">${esc(text)}</div><div class="actions" style="margin-top:14px"><button class="primary-btn" onclick="copyModalText()">Copy Task</button></div>`);
}
function copyModalText(){ navigator.clipboard?.writeText(byId('modalBody').innerText); toast('Copied','Text copied to clipboard.'); }

function renderAIStudio(){
  byId('mainView').innerHTML = `<div class="ai-console">
    <section class="panel"><h3>Garuda AI Tutor</h3><p>Local rule-based tutor for ESP practice. It does not require API keys.</p><div id="chatBox" class="chat-box"><div class="chat-msg bot">Selamat datang. Ask me for ESP scenarios, writing help, pronunciation practice, or cultural explanation.</div></div><div class="form-grid" style="margin-top:12px"><label>Message<input id="chatInput" placeholder="Example: create a tourism role-play about Bali temple etiquette"></label><button class="primary-btn" onclick="sendChat()">Send to Local AI Tutor</button></div></section>
    <section class="panel"><h3>Writing & Scenario Assistant</h3><div class="form-grid two"><label>Province<input id="aiProvince" value="Yogyakarta"></label><label>Heritage<input id="aiHeritage" value="Batik philosophy"></label><label>ESP Pathway<select id="aiPathway">${Object.keys(pathwayIcons).map(p=>`<option>${p}</option>`).join('')}</select></label><label>Audience<input id="aiAudience" value="international visitors"></label></div><label style="margin-top:12px">Student Draft<textarea id="writerText" placeholder="Paste student writing for feedback..."></textarea></label><div class="actions" style="margin-top:12px"><button class="primary-btn" onclick="generateScenario()">Generate Scenario</button><button class="secondary-btn" onclick="checkWriting()">Check Writing</button><button class="secondary-btn" onclick="generateRubric()">Generate Rubric</button></div><h3 style="margin-top:18px">Local AI Output</h3><div id="aiOutput" class="writer-output">Choose an AI-assisted action.</div></section>
  </div>`;
}
function sendChat(){
  const input = byId('chatInput'); const text=input.value.trim(); if(!text) return;
  const box=byId('chatBox'); box.insertAdjacentHTML('beforeend', `<div class="chat-msg user">${esc(text)}</div>`);
  box.insertAdjacentHTML('beforeend', `<div class="chat-msg bot">${esc(localTutor(text))}</div>`); input.value=''; box.scrollTop=box.scrollHeight;
}
function localTutor(text){
  const t=text.toLowerCase();
  if(t.includes('role')||t.includes('scenario')) return localScenario({province:'selected province',heritage:'local wisdom',pathway:'ESP communication',audience:'international stakeholders',task:'role-play'});
  if(t.includes('pronunciation')||t.includes('voice')) return 'Pronunciation practice: focus on clarity, word stress, pausing, and intelligibility. Read your script once naturally, then repeat with clearer pauses after key cultural terms. Use Voice of Nusantara to listen, record, compare, and reflect.';
  if(t.includes('rubric')||t.includes('assessment')) return rubricText('ESP cultural presentation');
  if(t.includes('writing')||t.includes('grammar')) return 'Writing guidance: use a clear purpose, define the heritage term, explain its professional relevance, add respectful cultural context, and close with a reader-oriented message. Avoid overgeneralization and unsupported claims.';
  return 'I can help you create ESP tasks, generate local-wisdom scenarios, check writing clarity, design rubrics, prepare speaking scripts, and guide pronunciation practice. Please mention a province, heritage topic, skill, and professional audience.';
}
function localScenario({province, heritage, pathway, audience, task}){
  return `GARUDA ESP LOCAL SCENARIO\n\nProvince/Context: ${province}\nLocal Wisdom/Heritage: ${heritage}\nESP Pathway: ${pathway}\nAudience: ${audience}\nTask Type: ${task}\n\nProfessional Situation:\nYou are a student professional preparing to communicate Indonesian local wisdom to ${audience}. Your task is to explain the cultural meaning of ${heritage}, connect it to a professional field, and respond respectfully to questions.\n\nSpeaking Mission:\n1. Open with a polite greeting and professional identity.\n2. Define the local wisdom topic in simple, accurate English.\n3. Explain why it matters for professional practice.\n4. Give one real-world example from tourism, business, education, environment, or digital media.\n5. Close with a respectful intercultural message.\n\nExpected Output:\nA 2–3 minute role-play, presentation, email, or digital campaign draft using clear, intelligible, culturally sensitive English.`;
}
function generateScenario(){ byId('aiOutput').textContent = localScenario({province:byId('aiProvince').value,heritage:byId('aiHeritage').value,pathway:byId('aiPathway').value,audience:byId('aiAudience').value,task:'professional communication scenario'}); }
function checkWriting(){
  const text=byId('writerText').value.trim(); if(!text) return toast('No draft','Paste writing first.');
  byId('aiOutput').textContent = writingFeedback(text);
}
function writingFeedback(text){
  const words=text.split(/\s+/).filter(Boolean); const sentences=text.split(/[.!?]+/).filter(s=>s.trim()); const avg=sentences.length?Math.round(words.length/sentences.length):words.length;
  const issues=[];
  if(words.length<80) issues.push('The draft is short. Add more explanation, examples, and professional relevance.');
  if(avg>28) issues.push('Some sentences may be too long. Split them for clarity and intelligibility.');
  if(!/local wisdom|heritage|culture|tradition/i.test(text)) issues.push('Add explicit cultural/local-wisdom framing.');
  if(!/professional|tourism|business|education|environment|digital|hospitality/i.test(text)) issues.push('Connect the cultural topic to a clear ESP/professional domain.');
  if(!/therefore|however|moreover|for example|in addition/i.test(text)) issues.push('Use transition signals such as however, moreover, for example, and therefore.');
  if(/\b(very very|good good|important important)\b/i.test(text)) issues.push('Avoid unnecessary repetition.');
  return `GARUDA LOCAL AI WRITING FEEDBACK\n\nWord Count: ${words.length}\nSentence Count: ${sentences.length}\nAverage Sentence Length: ${avg} words\n\nStrengths:\n- The draft provides a starting point for ESP communication.\n- It can be improved into a culturally grounded professional text.\n\nPriority Revisions:\n${issues.length?issues.map((x,i)=>`${i+1}. ${x}`).join('\n'):'1. The draft is clear. Strengthen it with more precise vocabulary, audience awareness, and concluding impact.'}\n\nSuggested Academic-Professional Frame:\nStart with context, define the cultural concept, explain its professional relevance, add one example, and finish with an intercultural message.`;
}
function generateRubric(){ byId('aiOutput').textContent = rubricText(byId('aiPathway')?.value || 'ESP task'); }
function rubricText(task){return `AI-ASSISTED RUBRIC: ${task}\n\n1. ESP Accuracy (25%)\n- Uses domain-specific vocabulary correctly.\n- Communicates professional purpose clearly.\n\n2. Local Wisdom Integration (25%)\n- Explains Indonesian cultural meaning accurately and respectfully.\n- Avoids stereotypes, oversimplification, and cultural erasure.\n\n3. Language Quality (20%)\n- Grammar, vocabulary, coherence, and tone support the message.\n- Sentences are clear and audience-friendly.\n\n4. Intercultural Communication (20%)\n- Shows awareness of audience, politeness, and sensitivity.\n- Responds to questions respectfully.\n\n5. Digital/Presentation Quality (10%)\n- Uses appropriate visual, audio, or media support.\n- Delivery is organized and professional.`;}

function renderVoiceLab(){
  const phrases=['Bhinneka Tunggal Ika means unity in diversity.','Welcome to our cultural heritage learning journey.','This local wisdom teaches harmony, responsibility, and respect.','Professional English can carry Indonesian identity to the world.'];
  byId('mainView').innerHTML = `<div class="grid cols-2"><section class="panel"><h3>Voice of Nusantara</h3><p>Practice intelligible English with Indonesian identity. Uses browser speech technology when available; no API key is required.</p><div class="voice-wave">${'<i></i>'.repeat(32)}</div><div class="form-grid" style="margin-top:14px"><label>Practice Phrase<select id="voicePhrase">${phrases.map(p=>`<option>${p}</option>`).join('')}</select></label><div class="actions"><button class="primary-btn" onclick="speakPhrase()">Play Model Voice</button><button class="secondary-btn" onclick="startSpeechPractice()">Record / Recognize</button></div></div></section><section class="panel"><h3>Pronunciation Feedback</h3><div id="voiceResult" class="writer-output">Choose a phrase, play the model voice, then record or recognize your speech. Focus on clarity, pausing, stress, and respectful delivery.</div><h3 style="margin-top:18px">Intelligibility Checklist</h3><ul class="check-list"><li>Key words are understandable.</li><li>Pauses are placed after cultural terms.</li><li>Sentence stress supports meaning.</li><li>Pronunciation is clear, not forced to be native-like.</li></ul></section></div>`;
}
function speakPhrase(){ const phrase=byId('voicePhrase').value; const utter=new SpeechSynthesisUtterance(phrase); utter.lang='en-US'; utter.rate=.88; speechSynthesis.cancel(); speechSynthesis.speak(utter); }
function startSpeechPractice(){
  const phrase=byId('voicePhrase').value; const Rec=window.SpeechRecognition || window.webkitSpeechRecognition;
  if(!Rec){ byId('voiceResult').textContent='Speech recognition is not supported in this browser. You can still use Play Model Voice and self-assess using the intelligibility checklist.'; return; }
  const rec=new Rec(); rec.lang='en-US'; rec.interimResults=false; rec.maxAlternatives=1;
  byId('voiceResult').textContent='Listening... please speak clearly.'; rec.start();
  rec.onresult=e=>{ const said=e.results[0][0].transcript; const score=similarity(phrase,said); byId('voiceResult').textContent=`Recognized Speech:\n${said}\n\nTarget Phrase:\n${phrase}\n\nLocal Intelligibility Match: ${score}%\n\nFeedback: ${score>80?'Excellent clarity. Maintain natural pauses and confidence.':score>55?'Good attempt. Repeat key words slowly and improve pausing.':'Try again. Listen to the model voice and focus on key content words.'}`; };
  rec.onerror=()=>byId('voiceResult').textContent='Recognition stopped or permission was not granted. You can still use self-recording through your browser or mobile recorder.';
}
function similarity(a,b){ const A=new Set(a.toLowerCase().replace(/[^a-z\s]/g,'').split(/\s+/)); const B=new Set(b.toLowerCase().replace(/[^a-z\s]/g,'').split(/\s+/)); let hit=0; A.forEach(x=>{if(B.has(x))hit++}); return Math.round(hit/Math.max(A.size,1)*100); }

function renderAssignments(){
  byId('mainView').innerHTML = `<section class="panel"><h3>Assignments and Assessments</h3><p>Submit weekly tasks, respond to lecturer-created assignments, and monitor graded feedback.</p></section><div class="grid cols-2"><section class="panel"><h3>Core Weekly Assignments</h3><div class="mini-list">${db.curriculum.map(w=>`<div class="mini-item"><strong>Week ${w.week}: ${esc(w.title)}</strong><small>${esc(w.pathway)}</small><p>${esc(w.assignment)}</p><div class="actions"><button class="primary-btn" onclick="submitAssignment(${w.week})">Submit</button><button class="secondary-btn" onclick="runQuiz(${w.week})">Quiz</button></div></div>`).join('')}</div></section><section class="panel"><h3>Lecturer-Created Tasks</h3>${taskListForStudent()}</section></div>`;
}
function taskListForStudent(){return db.customTasks.map(t=>`<div class="mini-item"><strong>${esc(t.title)}</strong><small>Week ${esc(t.week)} • ${esc(t.type)} • Due ${esc(t.dueDate||'Flexible')}</small><p>${esc(t.instructions)}</p><button class="primary-btn" onclick="submitAssignment(${Number(t.week)})">Submit Response</button></div>`).join('') || `<div class="empty-state">No additional lecturer tasks yet.</div>`}
function renderPortfolio(){
  const u=getCurrentUser(); const pct=completionPercent(u);
  byId('mainView').innerHTML = `<div class="grid cols-3">${metricCard('Completion',pct+'%','16-week studio')}${metricCard('Quiz Average',averageQuiz(u)+'%','All attempted quizzes')}${metricCard('Submissions',mySubmissions().length,'Portfolio evidence')}</div><section class="panel"><h3>My Portfolio Evidence</h3>${portfolioTable()}</section><section class="panel"><h3>Achievement Certificate</h3><div class="print-card certificate"><div class="cert-title">GARUDA ESP NUSANTARA</div><p>This certifies that</p><h2>${esc(u.name)}</h2><p>has participated in AI-powered local wisdom ESP learning across Indonesian cultural-professional modules.</p><div class="qr"></div><p><strong>Progress:</strong> ${pct}% • <strong>Date:</strong> ${today()}</p><p>Copyright © Dr. Joko Slamet</p></div><div class="actions" style="margin-top:14px"><button class="primary-btn" onclick="window.print()">Print Certificate</button></div></section>`;
}
function portfolioTable(){
  const subs=mySubmissions(); if(!subs.length) return '<div class="empty-state">No submission yet.</div>';
  return `<div class="table-wrap"><table><thead><tr><th>Week</th><th>Title</th><th>Date</th><th>Grade</th><th>Feedback</th></tr></thead><tbody>${subs.map(s=>{const g=db.grades.find(x=>x.submissionId===s.id); return `<tr><td>${s.week}</td><td>${esc(s.title)}</td><td>${new Date(s.date).toLocaleString()}</td><td>${g?esc(g.score):'Pending'}</td><td>${g?esc(g.feedback):'Awaiting lecturer review'}</td></tr>`}).join('')}</tbody></table></div>`;
}

function renderCourseBuilder(){
  const w=db.curriculum[0];
  byId('mainView').innerHTML = `<section class="panel"><h3>Lecturer Course Builder</h3><p>Edit the 16-week curriculum. Changes are saved to the browser database and immediately visible to students on this device/site.</p><div class="form-grid two"><label>Select Week<select id="editWeek" onchange="loadWeekEditor()">${db.curriculum.map(x=>`<option value="${x.week}">Week ${x.week}: ${esc(x.title)}</option>`).join('')}</select></label><label>Province<input id="editProvince"></label><label>Title<input id="editTitle"></label><label>Heritage<input id="editHeritage"></label><label>Pathway<select id="editPathway">${Object.keys(pathwayIcons).concat(['All Garuda Pathways']).map(p=>`<option>${p}</option>`).join('')}</select></label><label>Vocabulary, comma separated<input id="editVocab"></label></div><label style="margin-top:12px">Reading / Learning Content<textarea id="editReading"></textarea></label><label>Objectives, one per line<textarea id="editObjectives"></textarea></label><label>Assignment Instruction<textarea id="editAssignment"></textarea></label><label>Quiz, one question per line: Question | Correct | Distractor1 | Distractor2 | Distractor3<textarea id="editQuiz"></textarea></label><div class="actions" style="margin-top:14px"><button class="primary-btn" onclick="saveWeekEditor()">Save Week Module</button><button class="secondary-btn" onclick="aiImproveModule()">AI-Assist Improve Module</button></div></section><section class="panel"><h3>Current 16-Week Overview</h3><div class="grid cols-3">${db.curriculum.map(w=>weekCard(w,false)).join('')}</div></section>`;
  loadWeekEditor();
}
function loadWeekEditor(){
  const w=db.curriculum.find(x=>x.week==byId('editWeek').value); if(!w) return;
  byId('editTitle').value=w.title; byId('editProvince').value=w.province; byId('editHeritage').value=w.heritage; byId('editPathway').value=w.pathway; byId('editVocab').value=w.vocab.join(', '); byId('editReading').value=w.reading; byId('editObjectives').value=w.objectives.join('\n'); byId('editAssignment').value=w.assignment; byId('editQuiz').value=w.quiz.map(q=>q.join(' | ')).join('\n');
}
function saveWeekEditor(){
  const idx=db.curriculum.findIndex(x=>x.week==byId('editWeek').value); if(idx<0) return;
  db.curriculum[idx] = {...db.curriculum[idx], title:byId('editTitle').value, province:byId('editProvince').value, heritage:byId('editHeritage').value, pathway:byId('editPathway').value, vocab:byId('editVocab').value.split(',').map(x=>x.trim()).filter(Boolean), reading:byId('editReading').value, objectives:byId('editObjectives').value.split('\n').map(x=>x.trim()).filter(Boolean), assignment:byId('editAssignment').value, quiz:byId('editQuiz').value.split('\n').map(line=>line.split('|').map(x=>x.trim())).filter(q=>q.length>=5)};
  saveDB(); logActivity('curriculum-update', `Week ${db.curriculum[idx].week} updated by ${session.role}`); toast('Week module saved','Students will see the updated materials.'); renderCourseBuilder();
}
function aiImproveModule(){
  const province=byId('editProvince').value, heritage=byId('editHeritage').value, pathway=byId('editPathway').value;
  byId('editReading').value += `\n\nAI-Assisted Enhancement: This module can be strengthened by asking learners to connect ${heritage} from ${province} with ${pathway}. Students should define the cultural concept, identify its ethical meaning, and transform it into a professional English product such as a guide script, business email, digital campaign, or intercultural presentation.`;
  toast('AI enhancement inserted','Review and edit before saving.');
}
function renderMaterials(){
  byId('mainView').innerHTML = `<div class="grid cols-2"><section class="panel"><h3>Upload / Create Materials</h3><div class="form-grid"><label>Material Title<input id="matTitle"></label><label>Week<select id="matWeek">${db.curriculum.map(w=>`<option value="${w.week}">Week ${w.week}</option>`).join('')}</select></label><label>Category<select id="matCategory"><option>Reading</option><option>Slides</option><option>Worksheet</option><option>Audio Script</option><option>Rubric</option><option>Reference</option></select></label><label>Description<textarea id="matDesc"></textarea></label><label class="file-label">Upload File<input id="matFile" type="file" accept=".doc,.docx,.pdf,.ppt,.pptx,.txt,.png,.jpg,.jpeg,.mp3,.wav"></label><button class="primary-btn" onclick="saveMaterial()">Save Material</button></div></section><section class="panel"><h3>Material Repository</h3>${materialsList()}</section></div>`;
}
function saveMaterial(){
  const title=byId('matTitle').value.trim(); if(!title) return toast('Missing title','Please add material title.'); const file=byId('matFile').files[0];
  const save=(data=null)=>{db.resources.unshift({id:uid(), title, week:byId('matWeek').value, category:byId('matCategory').value, desc:byId('matDesc').value, fileName:file?.name||'', fileData:data, by:session.name, date:new Date().toISOString()}); saveDB(); logActivity('material', `${title} uploaded`); toast('Material saved','Repository updated.'); renderMaterials();};
  if(file){const r=new FileReader(); r.onload=()=>save(r.result); r.readAsDataURL(file);} else save();
}
function materialsList(){return db.resources.map(r=>`<div class="mini-item"><strong>${esc(r.title)}</strong><small>Week ${esc(r.week)} • ${esc(r.category)} • ${esc(r.fileName||'No file')}</small><p>${esc(r.desc||'')}</p><div class="actions"><button class="secondary-btn" onclick="deleteResource('${r.id}')">Delete</button>${r.fileData?`<a class="primary-btn" href="${r.fileData}" download="${esc(r.fileName)}">Download</a>`:''}</div></div>`).join('') || `<div class="empty-state">No materials uploaded yet.</div>`}
function deleteResource(id){ db.resources=db.resources.filter(r=>r.id!==id); saveDB(); renderMaterials(); toast('Resource deleted'); }
function renderTasks(){
  byId('mainView').innerHTML = `<div class="grid cols-2"><section class="panel"><h3>Create Task / Assessment</h3><div class="form-grid two"><label>Week<select id="taskWeek">${db.curriculum.map(w=>`<option value="${w.week}">Week ${w.week}</option>`).join('')}</select></label><label>Type<select id="taskType"><option>Assignment</option><option>Quiz</option><option>Presentation</option><option>Project</option><option>Reflection</option><option>Portfolio</option></select></label><label>Title<input id="taskTitle"></label><label>Due Date<input id="taskDue" type="date"></label></div><label style="margin-top:12px">Instructions<textarea id="taskInstructions"></textarea></label><label>Rubric<textarea id="taskRubric" placeholder="Criteria and weights"></textarea></label><div class="actions" style="margin-top:12px"><button class="primary-btn" onclick="saveTask()">Publish Task</button><button class="secondary-btn" onclick="fillTaskRubric()">AI-Assist Rubric</button></div></section><section class="panel"><h3>Published Tasks</h3>${tasksList()}</section></div>`;
}
function fillTaskRubric(){byId('taskRubric').value=rubricText(byId('taskType')?.value || 'ESP task');}
function saveTask(){const title=byId('taskTitle').value.trim(), instructions=byId('taskInstructions').value.trim(); if(!title || !instructions) return toast('Incomplete task','Add task title and instructions.'); db.customTasks.unshift({id:uid(), week:byId('taskWeek').value, type:byId('taskType').value, title, dueDate:byId('taskDue').value, instructions, rubric:byId('taskRubric').value, by:session.name, date:new Date().toISOString()}); saveDB(); logActivity('task', `${title} published`); toast('Task published','Students can now see it.'); renderTasks();}
function tasksList(){return db.customTasks.map(t=>`<div class="mini-item"><strong>${esc(t.title)}</strong><small>Week ${esc(t.week)} • ${esc(t.type)} • Due ${esc(t.dueDate||'Flexible')}</small><p>${esc(t.instructions)}</p><details><summary>Rubric</summary><pre>${esc(t.rubric||'No rubric')}</pre></details><button class="danger-btn" onclick="deleteTask('${t.id}')">Delete</button></div>`).join('') || `<div class="empty-state">No lecturer-created tasks yet.</div>`}
function deleteTask(id){db.customTasks=db.customTasks.filter(t=>t.id!==id); saveDB(); renderTasks(); toast('Task deleted');}
function renderReview(){
  byId('mainView').innerHTML = `<section class="panel"><h3>Review Student Submissions</h3>${submissionReviewTable()}</section>`;
}
function submissionReviewTable(){
  if(!db.submissions.length) return `<div class="empty-state">No submissions yet.</div>`;
  return `<div class="table-wrap"><table><thead><tr><th>Student</th><th>Institution</th><th>Week</th><th>Submission</th><th>Status</th><th>Action</th></tr></thead><tbody>${db.submissions.map(s=>{const g=db.grades.find(x=>x.submissionId===s.id); return `<tr><td>${esc(s.userName)}</td><td>${esc(s.university || 'Not specified')}</td><td>${s.week}</td><td><strong>${esc(s.title)}</strong><br>${esc(s.text.slice(0,90))}...</td><td>${g?`<span class="status-pill done">${esc(g.score)}</span>`:'<span class="status-pill pending">Pending</span>'}</td><td><button class="primary-btn" onclick="openReview('${s.id}')">Review</button></td></tr>`}).join('')}</tbody></table></div>`;
}
function openReview(id){
  const s=db.submissions.find(x=>x.id===id); const g=db.grades.find(x=>x.submissionId===id) || {};
  openModal(`<h2>Review Submission</h2><p><strong>${esc(s.userName)}</strong> • ${esc(s.university || 'Not specified')} • Week ${s.week}</p><div class="writer-output">${esc(s.text)}</div>${s.fileData?`<p><a class="primary-btn" href="${s.fileData}" download="${esc(s.fileName)}">Download Attachment</a></p>`:''}<div class="form-grid two"><label>Score / Grade<input id="gradeScore" value="${esc(g.score||'')}"></label><label>Feedback<input id="gradeFeedback" value="${esc(g.feedback||'')}"></label></div><label>Detailed Feedback<textarea id="gradeDetail">${esc(g.detail||writingFeedback(s.text))}</textarea></label><button class="primary-btn" onclick="saveGrade('${id}')">Save Grade & Feedback</button>`);
}
function saveGrade(id){
  const existing=db.grades.find(x=>x.submissionId===id); const data={id:existing?.id||uid(), submissionId:id, score:byId('gradeScore').value, feedback:byId('gradeFeedback').value, detail:byId('gradeDetail').value, reviewer:session.name, date:new Date().toISOString()};
  if(existing) Object.assign(existing,data); else db.grades.push(data); saveDB(); logActivity('grade', `Submission ${id} reviewed`); byId('detailModal').close(); renderReview(); toast('Grade saved','Student portfolio updated.');
}
function renderLecturerAnalytics(){byId('mainView').innerHTML=`<section class="panel"><h3>Lecturer Learning Analytics</h3>${analyticsBars()}</section><section class="panel"><h3>Submission Overview</h3>${submissionReviewTable()}</section>`;}

function renderApprovals(){
  const lecturers=db.users.filter(u=>u.role==='lecturer');
  byId('mainView').innerHTML=`<section class="panel"><h3>Lecturer Approval Center</h3><p>Only approved lecturers can access material creation, assessments, and review dashboards.</p><div class="table-wrap"><table><thead><tr><th>Name</th><th>Institution</th><th>Email</th><th>Expertise</th><th>Status</th><th>Action</th></tr></thead><tbody>${lecturers.map(u=>`<tr><td>${esc(u.name)}</td><td>${esc(u.university || 'Not specified')}</td><td>${esc(u.email)}</td><td>${esc(u.expertise||'-')}</td><td><span class="status-pill ${u.status==='approved'?'done':u.status==='rejected'?'rejected':'pending'}">${esc(u.status)}</span></td><td><div class="actions"><button class="success-btn" onclick="setLecturerStatus('${u.id}','approved')">Approve</button><button class="danger-btn" onclick="setLecturerStatus('${u.id}','rejected')">Reject</button></div></td></tr>`).join('') || '<tr><td colspan="6">No lecturer accounts yet.</td></tr>'}</tbody></table></div></section>`;
}
function setLecturerStatus(id,status){ const u=db.users.find(x=>x.id===id); if(!u) return; u.status=status; saveDB(); logActivity('lecturer-status', `${u.name} set to ${status}`); renderApprovals(); toast('Lecturer status updated', `${u.name}: ${status}`); }
function renderUsers(){
  byId('mainView').innerHTML=`<div class="grid cols-2"><section class="panel"><h3>Institutions</h3><div class="form-grid two"><label>New Institution<input id="newUni" placeholder="Institution name"></label><button class="primary-btn" onclick="addUniversity()" style="align-self:end">Add Institution</button></div><div class="mini-list">${db.universities.map(u=>`<div class="mini-item"><strong>${esc(u)}</strong><small>${db.users.filter(x=>(x.university||'Not specified')===u).length} users</small></div>`).join('') || '<div class="empty-state">No institutions recorded yet.</div>'}</div></section><section class="panel"><h3>User Accounts</h3>${usersTable()}</section></div>`;
}
function addUniversity(){const v=byId('newUni').value.trim(); if(!v) return; if(!db.universities.includes(v)) db.universities.push(v); saveDB(); renderUsers(); toast('Institution added');}
function usersTable(){return `<div class="table-wrap"><table><thead><tr><th>Name</th><th>Role</th><th>Institution</th><th>Status</th><th>Email</th></tr></thead><tbody>${db.users.map(u=>`<tr><td>${esc(u.name)}</td><td>${esc(u.role)}</td><td>${esc(u.university || 'Not specified')}</td><td>${esc(u.status)}</td><td>${esc(u.email)}</td></tr>`).join('') || '<tr><td colspan="5">No users yet.</td></tr>'}</tbody></table></div>`;}
function renderContentControl(){
  byId('mainView').innerHTML=`<div class="grid cols-3">${metricCard('Curriculum Weeks',db.curriculum.length,'Core modules')}${metricCard('Resources',db.resources.length,'Uploaded files')}${metricCard('Tasks',db.customTasks.length,'Additional assessments')}</div><section class="panel"><h3>Administrative Content Control</h3><p>Admin can edit curriculum through the same professional builder used by lecturers, review materials, and reset curriculum if necessary.</p><div class="actions"><button class="primary-btn" onclick="renderCourseBuilder()">Open Curriculum Builder</button><button class="secondary-btn" onclick="renderMaterials()">Open Materials</button><button class="danger-btn" onclick="resetCurriculum()">Reset 16-Week Curriculum</button></div></section>`;
}
function resetCurriculum(){ if(confirm('Reset curriculum to original 16-week version?')){ db.curriculum=baseCurriculum; saveDB(); toast('Curriculum reset'); renderContentControl(); }}
function renderSystemAnalytics(){
  byId('mainView').innerHTML=`<div class="grid cols-4">${metricCard('Students',db.users.filter(u=>u.role==='student').length,'Learners')}${metricCard('Lecturers',db.users.filter(u=>u.role==='lecturer').length,'Academic staff')}${metricCard('Submissions',db.submissions.length,'Evidence')}${metricCard('Grades',db.grades.length,'Reviewed')}</div><section class="panel"><h3>Multi-Institution Analytics</h3>${analyticsBars()}</section><section class="panel"><h3>Activity Log</h3>${activityList()}</section>`;
}
function renderSettings(){
  byId('mainView').innerHTML=`<section class="panel"><h3>Platform Settings</h3><div class="form-grid two"><label>Institution / App Name<input id="setInstitution" value="${esc(db.settings.institutionName)}"></label><label>Admin Name<input id="setAdmin" value="${esc(db.settings.adminName)}"></label></div><label style="margin-top:12px">Announcement Title<input id="annTitle" placeholder="Announcement title"></label><label>Announcement Body<textarea id="annBody" placeholder="Write announcement for all users"></textarea></label><div class="actions" style="margin-top:12px"><button class="primary-btn" onclick="saveSettings()">Save Settings</button><button class="secondary-btn" onclick="publishAnnouncement()">Publish Announcement</button><button class="danger-btn" onclick="clearPlatformData()">Clear Users & Submissions</button></div></section>`;
}
function saveSettings(){db.settings.institutionName=byId('setInstitution').value; db.settings.adminName=byId('setAdmin').value; saveDB(); renderUserCard(); toast('Settings saved');}
function publishAnnouncement(){const title=byId('annTitle').value.trim(), body=byId('annBody').value.trim(); if(!title||!body) return toast('Announcement incomplete'); db.announcements.unshift({id:uid(), title, body, date:new Date().toISOString()}); saveDB(); toast('Announcement published');}
function clearPlatformData(){ if(confirm('Clear all users, submissions, grades, resources, and tasks? Curriculum remains.')){ db.users=[]; db.submissions=[]; db.grades=[]; db.resources=[]; db.customTasks=[]; saveDB(); toast('Platform data cleared'); renderSettings(); }}
function exportData(){
  const blob=new Blob([JSON.stringify(db,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='garuda-esp-nusantara-data.json'; a.click(); URL.revokeObjectURL(a.href); toast('Data exported','JSON backup downloaded.');
}
function toggleTheme(){ db.settings.theme = db.settings.theme==='dark'?'light':'dark'; document.body.classList.toggle('dark-mode', db.settings.theme==='dark'); saveDB(); }

window.navigate=navigate; window.openWeek=openWeek; window.openDiscipline=openDiscipline; window.openProfileEditor=openProfileEditor; window.saveProfile=saveProfile; window.openRoom=openRoom; window.joinRoom=joinRoom; window.saveRoom=saveRoom; window.renderDisciplineHub=renderDisciplineHub; window.renderOnlineRoom=renderOnlineRoom; window.saveMeeting=saveMeeting; window.deleteMeeting=deleteMeeting; window.joinMeeting=joinMeeting; window.markComplete=markComplete; window.submitAssignment=submitAssignment; window.saveSubmission=saveSubmission; window.runQuiz=runQuiz; window.gradeQuiz=gradeQuiz; window.generateProvinceModule=generateProvinceModule; window.copyModalText=copyModalText; window.sendChat=sendChat; window.generateScenario=generateScenario; window.checkWriting=checkWriting; window.generateRubric=generateRubric; window.speakPhrase=speakPhrase; window.startSpeechPractice=startSpeechPractice; window.loadWeekEditor=loadWeekEditor; window.saveWeekEditor=saveWeekEditor; window.aiImproveModule=aiImproveModule; window.saveMaterial=saveMaterial; window.deleteResource=deleteResource; window.fillTaskRubric=fillTaskRubric; window.saveTask=saveTask; window.deleteTask=deleteTask; window.openReview=openReview; window.saveGrade=saveGrade; window.setLecturerStatus=setLecturerStatus; window.addUniversity=addUniversity; window.resetCurriculum=resetCurriculum; window.saveSettings=saveSettings; window.publishAnnouncement=publishAnnouncement; window.clearPlatformData=clearPlatformData; window.exportData=exportData;
