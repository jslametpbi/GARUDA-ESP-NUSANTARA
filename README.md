# GARUDA ESP NUSANTARA

**AI-Powered Local Wisdom English for Professional and Intercultural Futures**

GARUDA ESP NUSANTARA is a GitHub Pages-ready static web app for ESP learning rooted in Indonesian local wisdom, Bhinneka Tunggal Ika, Garuda identity, the Indonesian flag, and the Nusantara archipelago.

## Main Features

- Exclusive red-white-gold landing page with Garuda, Indonesian flag, and Nusantara map visual identity.
- Separate role-based access:
  - Student registration and login for multi-university use.
  - Lecturer registration with Admin approval requirement.
  - Admin login using PIN: `JS 2026`.
- Student dashboard:
  - 16-week ESP Nusantara curriculum.
  - Weekly readings, objectives, vocabulary, assignments, and quizzes.
  - Assignment submission with optional file attachment.
  - Portfolio, progress, quiz score, and printable certificate.
- Lecturer dashboard:
  - Course builder for editing all 16 weekly modules.
  - Upload materials and resources.
  - Create new tasks, assignments, presentations, rubrics, and assessments.
  - Review student submissions and provide grades/feedback.
  - View learning analytics by university.
- Admin dashboard:
  - Approve or reject lecturer accounts.
  - Manage multi-university users.
  - Control curriculum, tasks, materials, announcements, analytics, and settings.
  - Export platform data as JSON backup.
- AI-assisted tools without API key:
  - Local rule-based ESP tutor.
  - Writing feedback engine.
  - Scenario generator.
  - Rubric generator.
  - Voice of Nusantara using browser speech synthesis and speech recognition when supported.
- Offline-ready PWA structure:
  - `manifest.json`
  - `service-worker.js`
  - no external dependencies
  - deployable directly to GitHub Pages

## Admin Access

Open the app and choose **Admin**.

Admin PIN:

```text
JS 2026
```

## GitHub Pages Deployment

1. Create a new GitHub repository, for example:
   `garuda-esp-nusantara`
2. Upload all files from this folder to the repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `manifest.json`
   - `service-worker.js`
   - `assets/`
3. Go to **Repository Settings**.
4. Open **Pages**.
5. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Save.
7. Wait until GitHub provides the public URL.

## Important Technical Note

This version is a complete static prototype using local browser storage. It works well for GitHub Pages deployment and classroom-level trials. For large-scale institutional deployment, connect it to a secure backend database, authentication server, and cloud storage.

## Copyright

Copyright © Dr. Joko Slamet. GARUDA ESP NUSANTARA.
