
# Documentation file for the World Clock app.
# Includes setup instructions, project structure, features, and assumptions.
# Written for developers, reviewers, or hiring managers.



# World Clock App (React + TypeScript + Vite)

This is a simple world clock application built using **React**, **TypeScript**, and the `timeapi.io` public API. The app allows users to:

- Select their current timezone
- Select another timezone to compare with
- View the current time in both zones (real-time with seconds)
- See the time difference including hours, minutes, and seconds
- Automatically refresh the clock every second
- Gracefully handle API failures and retry

---

## Features

- ✅ Built with Vite, React, and TypeScript
- ✅ Modular component architecture
- ✅ Reusable timezone dropdown selector
- ✅ Error handling with retry support
- ✅ Clean UI with user-friendly layout
- ✅ API base URL stored in `.env` (configurable)

---

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [timeapi.io](https://timeapi.io)

---

## Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── ClockDisplay.tsx
│   └── TimezoneSelector.tsx
├── services/            # API logic
│   └── timeApi.ts
├── types/               # TypeScript interfaces
│   └── time.ts
├── utils/               # Utility functions
│   └── timeUtils.ts
├── App.tsx              # Main app logic
├── App.css              # Styling
├── main.tsx             # Entry point
└── index.css
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_TIME_API_URL=https://timeapi.io/api/Time/current/zone
```

---

## Error Handling

- All API failures are caught
- Error message is shown in the UI
- Clock polling is paused
- A **Retry** button lets users resume

---

## How to Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Assumptions

- The list of timezones is hardcoded for simplicity
- The API returns time in `HH:mm` format, seconds added manually so it does follow the format `HH:mm:ss`
- No authentication is required for `timeapi.io`

---

## Author

Self Learning Purpose  
Prepared by: Prabin Sebastian
