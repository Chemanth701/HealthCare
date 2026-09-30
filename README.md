# HealthCare — Pulse Care

Smart healthcare appointment and personal-health PWA for a college/full-stack project.

## Reference-aligned modules

The application now follows the supplied Smart Healthcare structure: Patient, Doctor and Admin roles; doctor discovery; doctor profiles; availability; appointment workflow; medical records; prescriptions; Emergency ID + QR; notifications; mock payments; reviews; smart specialization suggestions; and role-aware administration.

### Patient
- Registration/login
- Health dashboard and profile
- Doctor search by name, specialization, hospital and location
- Informational symptom-to-specialization suggestion
- Doctor profile and fee/experience display
- Appointment booking with In-person/Online type
- Existing vitals, medicine tracking and wellness tools
- Medical records and digital prescriptions
- Emergency ID, emergency contact and temporary QR share link
- Emergency ticket workflow through Care AI
- JSON export and local-data erase

### Doctor
- Doctor account registration
- Doctor profile with qualification, specialization, experience, hospital, location, fee and consultation types
- Availability publishing
- Appointment accept/reject/complete workflow
- Care-team dashboard

### Admin
- Admin dashboard when ADMIN_EMAIL is configured in the deployment environment
- Patient/doctor/appointment counts
- Doctor verification controls

### Advanced
- Mock payment flow (no real money is charged)
- Review/rating endpoint
- Notifications collection and appointment/prescription notifications
- Conservative symptom guidance; smart routing is informational and not a diagnosis
- Care AI is a curated navigation/workflow assistant, not a trained medical model

## Backend collections

users, device_states, doctors, availability, appointments, medical_records, prescriptions, payments, reviews, notifications, emergency_tickets, emergency_shares, sessions.

## Security

- Passwords use scrypt hashing with per-password salt.
- HTTP-only SameSite session cookies; Secure cookies in production.
- Authenticated state and care APIs are scoped to the signed-in user.
- Request body size and state-field validation are applied.
- Emergency sharing uses expiring random tokens and exposes only selected emergency information.
- MongoDB credentials stay in Render environment variables.
- This is a student/project application, not a certified clinical system or HIPAA/DPDP/GDPR compliance implementation.

## Render

The service uses Node/Express, npm install, npm start, MongoDB Atlas and an HTTP health check at /api/health.

## Run locally

Set MONGODB_URI and optionally MONGODB_DB=healthcare, then:
npm install
npm start

For an admin account, set ADMIN_EMAIL to the email of the account that should have admin access, then redeploy.

## Emergency disclaimer

For an actual emergency, call the local emergency number. In India, call 112. Do not delay emergency care while creating a ticket or using the app.