# GARUDA ESP NUSANTARA — Final V14 Professional

## Admin PIN
`JS2026`

## Final V14 fixes
- Rebuilt the Nusantara Atlas to follow the approved professional figure.
- Replaced the symbolic/cartoon-style map with a realistic 5D-style Indonesia map asset.
- Province pins and province buttons remain active and integrated with ESP materials, AI Tutor, six-skill plans, and assessment tasks.
- Rebuilt AI Tutor to follow the approved professional figure using an original Garuda AI character asset instead of the pasted/cropped old screenshot.
- AI Tutor includes Practice Speaking, Improve Writing, Check Pronunciation, Get Feedback, History, Goals, Settings, Analyze, Play, Stop, Record, Insert Sample, Clear, and Save Note.
- Rebuilt Online Room following the approved professional room-management figure.
- Auto-generated room links now use a professional domain style only: `https://room.garudaesp.id/RM-YYMMDD-CODE`.
- The room link no longer uses GitHub, repository URLs, or `#room-` page fragments.
- Create Virtual Room includes date, month, year, start time, end time, timezone, host, course, week, type, agenda, notes, features, room code, short link, copy, share, preview, create, update, and reset.
- Meeting Schedule includes Join Room, Copy, Share, Details, Edit, and Delete.
- Old room links are converted to professional links when displayed, copied, shared, or joined.
- Admin login, logout, Users & Institutions, My Courses, Materials Library, Assessments, Forum, Chat, and Help Desk remain integrated.

## Deploy
Upload all extracted files to the GitHub repository root. After redeploying, refresh twice or open once in incognito/private mode to clear the previous cached version.


## Final V15
- Rebuilt the admin workspace shell with a professional dark sidebar, grouped navigation, and top-right workspace profile chip.
- Rebuilt AI Tutor so the left showcase uses the approved full Garuda AI Tutor visual without distracting cropped overlays.
- Kept the interactive AI Tutor controls in the right workspace panel.
- Preserved the professional room short link: https://room.garudaesp.id/RM-YYMMDD-CODE
- Existing room buttons (Join, Copy, Share, Details, Edit, Delete) remain active.


## Final V16
- Restored all Admin Workspace core menu items: AI Tutor, Nusantara Atlas, Content Builder, Materials Library, Assessments, Online Room, My Courses, Users & Institutions, and System Analytics.
- Added a direct Admin dashboard feature grid so the restored modules are visible and accessible immediately.
- Materials Library still opens the complete semester-materials screen.
- Content Builder and Assessments include quick links to related modules.
- Confirmed professional room links remain: https://room.garudaesp.id/RM-YYMMDD-CODE


## Final V17
- Materials Library, Content Builder, and Assessments now have distinct professional pages and no longer show the same content.
- Users & Institutions, Students, and Lecturers now have distinct governance pages.
- System Analytics and Reports now have distinct purposes and layouts.
- Admin sidebar is now an accordion: submenu groups can be opened/hidden and are compact enough for one screen.
- AI Tutor now works from either the prompt field or the response canvas. If the canvas is blank, Generate/Analyze creates a model ESP response and feedback.
- Class & Attendance is integrated with class metadata, students, ESP disciplines, institutions, lecturers, schedules, online-room attendance, and reports.


## Final V18
- Fixed Online Room: Join now opens a working in-app virtual room console and records attendance. It no longer depends on an external/nonexistent room domain to join.
- Room professional links still use `https://room.garudaesp.id/RM-YYMMDD-CODE` for copy/share, but Join works directly inside the app.
- Fixed student role: students can no longer create assessments. Students only view assigned assessments and submit evidence.
- Lecturers/admins can create, edit, delete, share, and manage room metadata and assessments.
- Added profile editor and photo upload for students and lecturers.
- Added profile photo display in topbar/sidebar/dashboard.
- Added room chat, attendance list, room metadata preview, copy/share link, details, edit, and delete actions.


## Final V19
- Room links are now active inside the app: click the professional link, Join, or Open Link to open the in-app virtual classroom.
- Added Open Professional Room Link field for pasting a room.garudaesp.id link or RM code.
- Join records attendance and opens the classroom console; it no longer depends on an external/unconfigured domain opening in a new tab.
- Copy and Share include the professional link and code with instructions for opening inside the app.
- Student dashboard and all assessment routes are locked: students can view and submit assessments but cannot create/publish them.
- Student and lecturer profile/photo upload is reinforced from the dashboard, topbar profile chip, and settings page.


## Final V20
- Rebuilt all Online Room links as active in-app links.
- Every displayed professional link now has an Open button and routes through the in-app room resolver.
- Join, Open Link, active professional link, room code, Details, Copy, and Share are wired to the same room resolver.
- If an RM room code is opened but not found in local data, the app creates a recovered professional room so the link still opens.
- The virtual classroom modal no longer depends on an external domain. It works from static deployment.
- URL resolver supports `?room=RM-YYMMDD-CODE` and room-code input.
- Service worker cache is cleared on deployment.
