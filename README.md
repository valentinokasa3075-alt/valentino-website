Dies ist ein [Next.js](https://nextjs.org) Projekt zur Dokumentation historischer UFO-Phänomene und außerirdischer Evidenz.

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

3. **Umgebungsvariablen konfigurieren (falls erforderlich):**
Erstellen Sie eine `.env.local` Datei im Projektstamm und fügen Sie die benötigten Umgebungsvariablen hinzu.

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

#### 2. **Datenmanagement**
- **Events Database** (`app/data/events.ts`) - Zentrale Datenverwaltung für alle dokumentierten Vorfälle
- **Datenbank Integration** (`lib/db.ts`) - Datenbankverbindungen und Datenbank-Utilities
- **Static Assets** (`public/alien/` und `public/evidence/`) - Umfangreiche Bildergalerie mit Beweismaterialien

#### 3. **Dokumentierte Vorfälle**
Das Projekt dokumentiert folgende historische UFO-Phänomene:
- **Roswell** (1947) - Der berühmteste UFO-Vorfall
- **Belgian UFO Wave** (1989-1991) - Massenhaft Sichtungen in Belgien
- **Nimitz Incident** (2004) - Das "Tic-Tac" UFO-Phänomen
- **Socorro, New Mexico** (1964) - Polizeibericht eines UFO-Landevorgangs
- **Phoenix Lights** (1997) - Ein der größten UFO-Sichtungen
- **Rendlesham Forest** (1980) - Britischer UFO-Vorfall
- **Tehran Incident** (1976) - Iranischer Militär-Begegnung
- `ariel/` - Zusätzliche Evidentiensammlung

#### 4. **Kommentar-System**
- **Comments Komponente** (`app/components/Comments.tsx`) - Interaktive Kommentarfunktion
- **API Route** (`app/api/comments/[slug]/route.ts`) - RESTful API für Kommentare mit dynamischem Slug-Handling
- Benutzer können ihre Gedanken und Diskussionen zu jedem Vorfall teilen

### Projektstruktur

```
valentino-website/
├── app/
│   ├── page.tsx              # Startseite
│   ├── layout.tsx            # Globales Layout
│   ├── globals.css           # Globale Stile
│   ├── about/
│   │   └── page.tsx          # Über-Seite
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
│   └── db.ts                 # Datenbank-Integration
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
- **Styling**: CSS mit PostCSS
- **Font Optimization**: Geist Font Family
- **API**: Next.js API Routes
- **Linting**: ESLint
- **Package Manager**: npm

### Verwendete Techniken

- **TypeScript** - Typ-Sicherheit und bessere Entwicklungserfahrung  
- **Dynamic Routes** - Dynamische Seiten für jeden Vorfall  
- **API Routes** - Backen-Datenspeicherung für Kommentare  
- **Component Reusability** - Wiederverwendbare React-Komponenten  
- **Static Assets** - Optimierte Bilderverwaltung  
- **Responsive Design** - Mobile-friendly Webseite

---

## Beitragen

Wenn Sie zu diesem Projekt beitragen möchten, sind Verbesserungen und Fehlermeldungen willkommen. Bitte erstellen Sie einen Pull Request oder öffnen Sie ein Issue im Repository.

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe [LICENSE](LICENSE) Datei für weitere Details.

## Autor

Entwickelt von **Valentino Kasa**

Für Fragen oder weitere Informationen können Sie mich gerne kontaktieren.

---

**Zuletzt aktualisiert:** 27. Februar 2026
