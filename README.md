# Valentinos Alien-Archiv

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Cloud-3ECF8E?style=for-the-badge&logo=supabase)

Dies ist ein [Next.js](https://nextjs.org) Projekt zur Dokumentation historischer UFO-Phänomene und außerirdischer Evidenz.

## Inhaltsverzeichnis

- [Über das Projekt](#über-das-projekt)
- [Quick Start](#quick-start)
- [Voraussetzungen](#voraussetzungen)
- [Installation](#installation)
- [Verwendung](#verwendung)
- [Projektübersicht](#projektübersicht)
- [Seiten-Übersicht](#seiten-übersicht)
- [Deployment](#deployment)
- [Häufige Probleme & Troubleshooting](#häufige-probleme--troubleshooting)
- [Abhängigkeiten](#abhängigkeiten)
- [Beitragen](#beitragen)
- [Geplante Features](#geplante-features)
- [Ressourcen & Links](#ressourcen--links)
- [FAQ](#häufig-gestellte-fragen-faq)
- [Lizenz](#lizenz)
- [Autor](#autor)

---

## Über das Projekt

Valentinos Alien-Archiv ist eine umfassende Web-Plattform, die historische UFO-Vorfälle dokumentiert und analysiert. Das Projekt kombiniert moderne Webtechnologien mit einer Leidenschaft für das Unbekannte und bietet Besuchern:

- Detaillierte Fallakten zu den bekanntesten UFO-Vorfällen der Geschichte
- Umfassende Bildergalerien mit Beweismaterialien
- Interaktive Kommentarfunktion für Community-Diskussionen
- Biografien wichtiger Persönlichkeiten wie Bob Lazar
- Direktes Kontaktformular

## Quick Start

```bash
# Repository klonen
git clone <repository-url>
cd valentino-website

# Abhängigkeiten installieren
npm install

# Umgebungsvariablen konfigurieren
# Erstellen Sie eine .env.local Datei

# Entwicklungsserver starten
npm run dev
```

Öffnen Sie [http://localhost:3000](http://localhost:3000) im Browser.

---

## Voraussetzungen

Um dieses Projekt lokal zu betreiben, benötigen Sie folgende Anforderungen:

- **Node.js**: Version 18.0 oder höher
- **npm**: Version 9.0 oder höher (wird mit Node.js installiert)
- **Git**: Für die Versionskontrolle und das Klonen des Repositories

Sie können Ihre Node.js-Version überprüfen mit:
```bash
node --version
npm --version
```

## Installation

1. **Repository klonen:**
```bash
git clone <repository-url>
cd valentino-website
```

2. **Abhängigkeiten installieren:**
```bash
npm install
```

3. **Umgebungsvariablen konfigurieren:**
Erstellen Sie eine `.env.local` Datei im Projektstamm und fügen Sie die folgenden Umgebungsvariablen hinzu:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Hinweis:** Für die Kommentar- und Kontaktfunktionen benötigen Sie ein [Supabase](https://supabase.com) Konto. Erstellen Sie dort ein Projekt und richten Sie folgende Tabellen ein:

**Tabelle: `comments`**
```sql
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  slug TEXT NOT NULL,
  name TEXT NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

**Tabelle: `messages`**
```sql
CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

4. **Entwicklungsserver starten:**
```bash
npm run dev
```

Die Anwendung ist dann unter [http://localhost:3000](http://localhost:3000) verfügbar.

## Verwendung

### Entwicklung

Um den Entwicklungsserver mit Hot-Reload zu starten:
```bash
npm run dev
```

### Production Build

Um ein Produktions-Build zu erstellen:
```bash
npm run build
```

Um den Produktions-Build lokal zu testen:
```bash
npm run build
npm start
```

### Linting und Codequalität

Um ESLint auszuführen und den Code zu überprüfen:
```bash
npm run lint
```

---

## Projektübersicht

### Hauptmerkmale

#### 1. **Multipages-Struktur**
- **Startseite** (`app/page.tsx`) - Willkommensseite mit Überblick
- **Über-Seite** (`app/about/page.tsx`) - Informationen über das Projekt und seine Mission
- **Events-Seite** (`app/events/page.tsx`) - Übersicht aller dokumentierten UFO-Vorfälle
- **Detailansicht** (`app/events/[slug]/page.tsx`) - Detaillierte Informationen zu einzelnen Vorfällen
- **Bob Lazar Seite** (`app/bob-lazar/page.tsx`) - Biografie und Aussagen von Bob Lazar mit Bildergalerie
- **Kontakt-Seite** (`app/kontakt/page.tsx`) - Kontaktformular mit Supabase-Integration

#### 2. **Datenmanagement**
- **Events Database** (`app/data/events.ts`) - Zentrale Datenverwaltung für alle dokumentierten Vorfälle
- **Datenbank Integration** (`lib/db.ts`) - SQLite Datenbankverbindungen mit better-sqlite3
- **Supabase Integration** (`lib/supabase.ts`) - Cloud-Datenbank für Kommentare und Kontaktnachrichten
- **Static Assets** (`public/alien/` und `public/evidence/`) - Umfangreiche Bildergalerie mit Beweismaterialien

#### 3. **Dokumentierte Vorfälle**
Das Projekt dokumentiert folgende historische UFO-Phänomene:
- **Roswell** (1947) - Der berühmteste UFO-Vorfall
- **Belgian UFO Wave** (1989-1991) - Massenhafte Sichtungen in Belgien
- **Nimitz Incident** (2004) - Das "Tic-Tac" UFO-Phänomen
- **Socorro, New Mexico** (1964) - Polizeibericht eines UFO-Landevorgangs
- **Phoenix Lights** (1997) - Eine der größten UFO-Sichtungen
- **Rendlesham Forest** (1980) - Britischer UFO-Vorfall mit militärischen Zeugen
- **Tehran Incident** (1976) - Iranische Militär-Begegnung
- **Ariel School** - Zusätzliche Evidentiensammlung

#### 4. **Interaktive Features**
- **Kommentar-System**
  - **Comments Komponente** (`app/components/Comments.tsx`) - Interaktive Kommentarfunktion
  - **API Route** (`app/api/comments/[slug]/route.ts`) - RESTful API für Kommentare mit dynamischem Slug-Handling
  - Benutzer können ihre Gedanken und Diskussionen zu jedem Vorfall teilen
- **Kontaktformular**
  - Direktintegration mit Supabase
  - Speicherung von Nachrichten in der Cloud-Datenbank
  - Validierung und Feedback für Benutzer
- **Bildergalerie**
  - Lightbox-Funktionalität auf der Bob Lazar Seite
  - Hochauflösende Beweisbilder für jeden dokumentierten Vorfall

### Projektstruktur

```
valentino-website/
├── app/
│   ├── page.tsx              # Startseite
│   ├── layout.tsx            # Globales Layout
│   ├── globals.css           # Globale Stile
│   ├── about/
│   │   └── page.tsx          # Über-Seite
│   ├── bob-lazar/
│   │   └── page.tsx          # Bob Lazar Biografie
│   ├── kontakt/
│   │   └── page.tsx          # Kontaktformular
│   ├── events/
│   │   ├── page.tsx          # Events Übersicht
│   │   └── [slug]/
│   │       └── page.tsx      # Event Details
│   ├── api/
│   │   └── comments/
│   │       └── [slug]/
│   │           └── route.ts  # Kommentar-API
│   ├── components/
│   │   └── Comments.tsx      # Kommentar-Komponente
│   └── data/
│       └── events.ts         # Event-Daten
├── lib/
│   ├── db.ts                 # SQLite Datenbank-Integration
│   └── supabase.ts           # Supabase Client-Konfiguration
├── public/
│   ├── alien/                # Alien-Bilder
│   └── evidence/
│       ├── ariel/            # Ariel-Vorfallbilder
│       ├── belgian-ufo-wave/ # Belgische Welle
│       ├── nimitz/           # Nimitz-Incident
│       ├── phoenix/          # Phoenix Lights
│       ├── rendlesham/       # Rendlesham Forest
│       ├── roswell/          # Roswell-Archiv
│       ├── socorro/          # Socorro-Vorfall
│       └── tehran/           # Teheran-Incident
└── [Config-Dateien]          # tsconfig, next.config, eslint, etc.
```

### Technologie-Stack

- **Framework**: Next.js 16.1.6 mit TypeScript
- **React**: Version 19.2.3
- **Styling**: Tailwind CSS 4.0 mit PostCSS
- **Datenbank**: 
  - Supabase (Cloud-Datenbank für Kommentare und Kontaktformular)
  - better-sqlite3 (Lokale SQLite-Datenbank)
- **API**: Next.js API Routes
- **Linting**: ESLint mit Next.js Konfiguration
- **Package Manager**: npm

### Verwendete Techniken

- **TypeScript** - Typ-Sicherheit und bessere Entwicklungserfahrung  
- **Dynamic Routes** - Dynamische Seiten für jeden Vorfall  
- **API Routes** - Backend-Datenspeicherung für Kommentare  
- **Component Reusability** - Wiederverwendbare React-Komponenten  
- **Static Assets** - Optimierte Bilderverwaltung  
- **Responsive Design** - Mobile-friendly Webseite
- **Supabase Integration** - Cloud-Datenbank für Echtzeit-Features
- **Client-Side State Management** - useState Hooks für interaktive UI-Elemente
- **Server Components** - Next.js Server Components für optimierte Performance

---

## Seiten-Übersicht

### Startseite (`/`)
Die Willkommensseite präsentiert die Mission des Projekts und lädt Besucher ein, das Archiv zu erkunden.

### Über (`/about`)
Informationen über den Entwickler Valentino und die Motivation hinter diesem Projekt.

### Events (`/events`)
Übersicht aller dokumentierten UFO-Vorfälle mit Filteroptionen und Kurzinformationen.

### Event-Details (`/events/[slug]`)
Detaillierte Fallakten zu jedem einzelnen Vorfall mit:
- Vollständiger Beschreibung
- Bildergalerie
- Zeitliche Einordnung
- Geografischer Kontext
- Kommentar-Sektion

### Bob Lazar (`/bob-lazar`)
Umfassende Biografie von Bob Lazar mit:
- Biografischen Informationen
- Aussagen zu Area 51 und S-4
- Kontroversen und Kritik
- Bildergalerie mit Lightbox-Funktion

### Kontakt (`/kontakt`)
Kontaktformular für direkte Nachrichten mit Supabase-Integration.

---

## Deployment

Dieses Projekt kann auf verschiedenen Plattformen deployed werden:

### Vercel (Empfohlen)

1. Repository auf GitHub pushen
2. Vercel-Account mit GitHub verbinden
3. Projekt importieren und deployen
4. Umgebungsvariablen in den Vercel-Einstellungen hinzufügen:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Andere Plattformen

- **Netlify**: Unterstützt Next.js mit Edge Functions
- **Railway**: Einfaches Deployment mit Datenbank-Hosting
- **Cloudflare Pages**: Moderne Edge-basierte Hosting-Lösung

**Wichtig**: Stellen Sie sicher, dass alle Umgebungsvariablen korrekt konfiguriert sind, bevor Sie deployen.

---

## Häufige Probleme & Troubleshooting

### Supabase-Verbindungsfehler

**Problem**: Kommentare oder Kontaktformular funktionieren nicht

**Lösung**:
- Überprüfen Sie, ob die Umgebungsvariablen in `.env.local` korrekt gesetzt sind
- Stellen Sie sicher, dass die Supabase-Tabellen erstellt wurden
- Prüfen Sie die Supabase-Projekt-URL und den Anon Key

### Build-Fehler

**Problem**: `npm run build` schlägt fehl

**Lösung**:
- Löschen Sie den `.next` Ordner und `node_modules`
- Führen Sie `npm install` erneut aus
- Überprüfen Sie die TypeScript-Fehler mit `npm run lint`

### Bilder werden nicht geladen

**Problem**: Beweisbilder oder Galerie-Bilder erscheinen nicht

**Lösung**:
- Stellen Sie sicher, dass alle Bilder im `public/` Ordner vorhanden sind
- Überprüfen Sie die Dateipfade in den Komponenten
- Prüfen Sie die Konsole auf 404-Fehler

---

## Abhängigkeiten

### Haupt-Abhängigkeiten

- **Next.js** (16.1.6): React-Framework für Production
- **React** (19.2.3): UI-Bibliothek
- **@supabase/supabase-js** (^2.98.0): Supabase Client für Cloud-Datenbank
- **better-sqlite3** (^12.6.2): SQLite-Datenbank für Node.js

### Dev-Abhängigkeiten

- **TypeScript** (^5): Statische Typisierung
- **Tailwind CSS** (^4): Utility-First CSS Framework
- **ESLint** (^9): Code-Qualitätsprüfung

---

## Beitragen

Wenn Sie zu diesem Projekt beitragen möchten, sind Verbesserungen und Fehlermeldungen willkommen. Bitte erstellen Sie einen Pull Request oder öffnen Sie ein Issue im Repository.

### Mögliche Beiträge

- Neue UFO-Vorfälle dokumentieren
- Beweismaterial und Bilder hinzufügen
- Übersetzungen in andere Sprachen
- UI/UX Verbesserungen
- Performance-Optimierungen
- Bug-Fixes

## Geplante Features

- Erweiterte Suchfunktion für Events
- Interaktive Weltkarte mit allen Vorfällen
- Dark/Light Mode Toggle
- Progressive Web App (PWA) Support
- Benachrichtigungen für neue Events
- Benutzer-Authentifizierung und Profile
- Favoriten-System für Events
- Statistiken und Timeline-Visualisierung

---

## Ressourcen & Links

### Nützliche Dokumentation

- [Next.js Dokumentation](https://nextjs.org/docs) - Lerne mehr über Next.js Features
- [React Dokumentation](https://react.dev) - React API-Referenz
- [Supabase Dokumentation](https://supabase.com/docs) - Datenbank und Auth Setup
- [Tailwind CSS Dokumentation](https://tailwindcss.com/docs) - CSS Framework Guide
- [TypeScript Dokumentation](https://www.typescriptlang.org/docs) - TypeScript Handbuch

### Externe Ressourcen zum Thema

- [National UFO Reporting Center](http://www.nuforc.org/)
- [MUFON - Mutual UFO Network](https://www.mufon.com/)
- [The Black Vault - UFO Documents](https://www.theblackvault.com/)

### Performance-Tipps

- Verwenden Sie `next/image` für optimierte Bildladung
- Implementieren Sie Code-Splitting für große Komponenten
- Nutzen Sie React Server Components wo möglich
- Cachen Sie Supabase-Anfragen mit React Query oder SWR
- Komprimieren Sie Bilder vor dem Upload

---

## Häufig gestellte Fragen (FAQ)

### Ist dieses Projekt Open Source?
Ja, dieses Projekt steht unter der MIT-Lizenz und Beiträge sind willkommen.

### Kann ich eigene UFO-Vorfälle hinzufügen?
Ja! Sie können neue Events zur `app/data/events.ts` Datei hinzufügen und einen Pull Request erstellen.

### Werden persönliche Daten gespeichert?
Bei Kommentaren und Kontaktformular werden nur die Informationen gespeichert, die Sie freiwillig eingeben (Name, E-Mail, Nachricht). Es gibt keine Tracking-Cookies.

### Kann ich das Projekt für meine eigenen Zwecke nutzen?
Ja, unter den Bedingungen der MIT-Lizenz können Sie das Projekt frei verwenden und anpassen.

### Wie kann ich zum Projekt beitragen?
Erstellen Sie einen Fork, machen Sie Ihre Änderungen und erstellen Sie einen Pull Request. Oder öffnen Sie ein Issue für Vorschläge.

---

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe [LICENSE](LICENSE) Datei für weitere Details.

## Autor

Entwickelt von **Valentino Kasa**

Wirtschaftsinformatik-Student, Web-Enthusiast und neugieriger Entdecker des Unbekannten.

Für Fragen oder weitere Informationen können Sie mich gerne über das [Kontaktformular](/kontakt) auf der Website kontaktieren.

---

**Zuletzt aktualisiert:** 1. März 2026

---

<div align="center">
  <p>Die Wahrheit ist irgendwo da draußen</p>
</div>
