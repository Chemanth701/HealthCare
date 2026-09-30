# HealthCare — Pulse Care

Responsive, installable personal-health PWA with local storage, device-scoped MongoDB sync, Render deployment, and conservative wellness guidance.

## Features
- Responsive dashboard, health snapshot and trend insights
- Heart rate, blood pressure, glucose, oxygen and weight logging
- Correct blood-pressure parsing and recent trend charts
- Medicine tracking, adherence and basic interaction reminders
- Conservative symptom red-flag guidance
- Appointments, breathing exercise and shareable health summary
- Emergency ID, emergency contact and India 112 shortcut
- Offline local storage plus online MongoDB sync with timestamp conflict protection
- PWA manifest/icon/service-worker caching
- Dark/light theme, reduced-motion support, focus states and accessible labels
- JSON export and local-data erase

## Stack
HTML/CSS/JavaScript, Node.js + Express, MongoDB Atlas, Render.

## Data
Database: healthcare
Collection: device_states
Fields: deviceId, state, updatedAt

This app has no user accounts. The browser-generated device ID is only a convenience identifier and is not strong authentication. Do not treat this design as suitable for regulated clinical records without proper authentication, authorization, encryption, audit logging and compliance review.

## Run
Set MONGODB_URI and optionally MONGODB_DB=healthcare, then run:
npm install
npm start

## Security
Keep MongoDB credentials in Render environment variables. Restrict Atlas network access as tightly as your hosting setup permits.

## Disclaimer
This app provides general wellness guidance only. It is not a medical device or diagnosis. For an emergency in India, call 112 or seek emergency care.