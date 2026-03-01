# Vollständige Anleitung - Website erstellen mit Next.js, Supabase & Vercel

Diese Anleitung führt dich Schritt für Schritt durch den kompletten Prozess, wie du eine professionelle Website erstellst, eine Datenbank mit Supabase einrichtest und sie auf Vercel live ins Internet stellst.

## Inhaltsverzeichnis

1. [Voraussetzungen prüfen](#voraussetzungen-prüfen)
2. [Next.js Projekt erstellen](#nextjs-projekt-erstellen)
3. [Projektstruktur verstehen](#projektstruktur-verstehen)
4. [Supabase einrichten](#supabase-einrichten)
5. [Datenbank-Tabellen erstellen](#datenbank-tabellen-erstellen)
6. [Supabase mit dem Projekt verbinden](#supabase-mit-dem-projekt-verbinden)
7. [Entwicklung starten](#entwicklung-starten)
8. [GitHub Repository erstellen](#github-repository-erstellen)
9. [Website auf Vercel deployen](#website-auf-vercel-deployen)
10. [Troubleshooting](#troubleshooting)

---

## Voraussetzungen prüfen

### Schritt 1.1 - Node.js installieren (falls noch nicht vorhanden)

**Was ist Node.js?** Node.js ist eine Laufzeitumgebung für JavaScript, die du brauchst, um Next.js zu verwenden.

**Prüfen, ob Node.js bereits installiert ist:**

Öffne das Terminal und tippe:

```bash
node --version
```

ENTER drücken.

**Ergebnis:**
- Wenn eine Version angezeigt wird (z.B. `v20.10.0`), ist Node.js installiert → Weiter zu Schritt 1.2
- Wenn ein Fehler kommt, musst du Node.js installieren

**Node.js installieren:**

1. Gehe zu [https://nodejs.org](https://nodejs.org)
2. Lade die **LTS-Version** herunter (empfohlen)
3. Öffne die heruntergeladene Datei und folge dem Installationsassistenten
4. Nach der Installation das Terminal schließen und neu öffnen
5. Nochmal `node --version` testen

### Schritt 1.2 - npm prüfen

npm (Node Package Manager) wird automatisch mit Node.js installiert.

```bash
npm --version
```

ENTER

Du solltest eine Versionsnummer sehen (z.B. `10.2.4`).

---

## Next.js Projekt erstellen

---

## Next.js Projekt erstellen

### Schritt 2.1 - Zum Desktop navigieren

**Was machst du hier?** Du wechselst in den Ordner auf deinem Computer, wo das Projekt gespeichert werden soll.

Im Terminal eingeben:

```bash
cd ~/Desktop
```

ENTER drücken.

**Erklärung:**
- `cd` = "change directory" (Ordner wechseln)
- `~/Desktop` = Der Schreibtisch (auf Englisch "Desktop")
- `~` bedeutet dein Benutzerordner

**Tipp:** Du kannst auch einen anderen Ordner wählen, z.B.:
- `cd ~/Documents` (für Dokumente)
- `cd ~/Projects` (falls du einen Projects-Ordner hast)

### Schritt 2.2 - Next.js Website erstellen

**Was ist Next.js?** Next.js ist ein React-Framework, das dir hilft, moderne Websites zu bauen.

Jetzt diesen Befehl eingeben:

```bash
npx create-next-app@latest valentino-website
```

ENTER drücken.

**Erklärung:**
- `npx` = Tool zum Ausführen von Paketen
- `create-next-app` = Das Programm, das ein Next.js-Projekt erstellt
- `@latest` = Die neueste Version verwenden
- `valentino-website` = Name deines Projekts (kannst du ändern)

**Was passiert?** Das Terminal lädt alle nötigen Dateien herunter und erstellt dein Projekt.

### Schritt 2.3 - Fragen beantworten

Wenn der Befehl läuft, fragt er vielleicht:

```
Ok to proceed? (y)
```

Tippe: `y` und drücke ENTER

**Dann kommen Konfigurationsfragen:**

```
Would you like to use the recommended Next.js defaults?
```

**Option 1 - Empfohlen für Anfänger:**
```
✅ Yes, use recommended defaults
```

ENTER drücken

Das wählt automatisch die besten Einstellungen aus (TypeScript, ESLint, Tailwind CSS, App Router).

**Option 2 - Benutzerdefiniert:**

Falls du "No, I need to customize" wählst:

```
Would you like to use TypeScript? › Yes
Would you like to use ESLint? › Yes
Would you like to use Tailwind CSS? › Yes
Would you like your code inside a `src/` directory? › No
Would you like to use App Router? › Yes
Would you like to use Turbopack for `next dev`? › No
Would you like to customize the import alias? › No
```

**Erklärung der Optionen:**
- **TypeScript:** Verhindert Fehler durch Typ-Sicherheit (empfohlen: Yes)
- **ESLint:** Findet Code-Fehler automatisch (empfohlen: Yes)
- **Tailwind CSS:** Modernes CSS-Framework für Styling (empfohlen: Yes)
- **src/ directory:** Ordnerstruktur (für Anfänger: No)
- **App Router:** Moderne Next.js-Architektur (empfohlen: Yes)
- **Turbopack:** Schnellerer Dev-Server (noch in Beta, besser: No)
- **Import alias:** Spezielle Import-Pfade (für Anfänger: No)

### Schritt 2.4 - In den Projekt-Ordner gehen

**Was machst du?** Du wechselst in den neu erstellten Projektordner.

```bash
cd valentino-website
```

ENTER drücken.

**Hinweis:** Falls du dein Projekt anders genannt hast, ersetze `valentino-website` mit deinem Projektnamen.

**Prüfen, ob es geklappt hat:**
```bash
ls
```

ENTER

Du solltest jetzt Dateien sehen wie:
- `package.json`
- `next.config.ts`
- `app/`
- `public/`

### Schritt 2.5 - In VS Code öffnen

**Was ist VS Code?** Visual Studio Code ist der Code-Editor, wo du deine Website programmierst.

```bash
code .
```

ENTER drücken.

**Erklärung:**
- `code` = Befehl für VS Code
- `.` = Der aktuelle Ordner

**VS Code sollte sich jetzt öffnen** mit deinem Projekt.

**Falls "command not found" erscheint:**

1. VS Code manuell öffnen
2. In VS Code: `Cmd + Shift + P` (Mac) oder `Ctrl + Shift + P` (Windows)
3. Tippe: `Shell Command: Install 'code' command in PATH`
4. ENTER
5. Terminal neu starten und nochmal `code .` versuchen

---

## Projektstruktur verstehen

---

## Projektstruktur verstehen

### Schritt 3.1 - Wichtige Dateien und Ordner

Wenn du dein Projekt in VS Code öffnest, siehst du diese Struktur:

```
valentino-website/
├── app/                    # Hauptordner für deine Website
│   ├── page.tsx           # Startseite (localhost:3000/)
│   ├── layout.tsx         # Layout für alle Seiten
│   ├── globals.css        # Globale CSS-Stile
│   └── favicon.ico        # Website-Icon
├── public/                # Öffentliche Dateien (Bilder, Fonts, etc.)
├── node_modules/          # Installierte Pakete (NICHT bearbeiten!)
├── package.json           # Liste aller Abhängigkeiten
├── next.config.ts         # Next.js Konfiguration
├── tsconfig.json          # TypeScript Konfiguration
├── tailwind.config.ts     # Tailwind CSS Konfiguration
└── .gitignore            # Dateien, die Git ignorieren soll
```

**Wichtigste Dateien zum Bearbeiten:**

1. **app/page.tsx** - Deine Startseite
2. **app/layout.tsx** - Globales Layout (Header, Footer)
3. **app/globals.css** - Globale Styles
4. **public/** - Hier kommen Bilder und andere Assets rein

### Schritt 3.2 - Neue Seiten erstellen

**Wie erstellt man neue Seiten?**

Für jede neue Seite erstellst du einen Ordner in `app/` mit einer `page.tsx` Datei:

**Beispiel 1: About-Seite erstellen**

1. In VS Code: Rechtsklick auf `app/` → "New Folder"
2. Name: `about`
3. Rechtsklick auf `about/` → "New File"
4. Name: `page.tsx`
5. In die Datei schreiben:

```tsx
export default function About() {
  return (
    <main>
      <h1>Über uns</h1>
      <p>Das ist die About-Seite!</p>
    </main>
  );
}
```

**Ergebnis:** Die Seite ist unter `http://localhost:3000/about` erreichbar.

**Beispiel 2: Kontakt-Seite**

1. Ordner `app/kontakt/` erstellen
2. Datei `app/kontakt/page.tsx` erstellen
3. Code hinzufügen

**Route:** `http://localhost:3000/kontakt`

---

## Supabase einrichten

**Was ist Supabase?** Supabase ist eine Cloud-Datenbank, wo du Daten speichern kannst (z.B. Kommentare, Kontaktformulare, User-Daten).

### Schritt 4.1 - Supabase Account erstellen

1. Gehe zu: [https://supabase.com](https://supabase.com)
2. Klicke auf **"Start your project"**
3. Melde dich an mit:
   - GitHub (empfohlen)
   - oder Google
   - oder Email

**Warum GitHub?** Du brauchst GitHub sowieso später für Vercel.

### Schritt 4.2 - Neues Projekt erstellen

Nach dem Login:

1. Klicke auf **"New Project"**
2. Wähle eine **Organization** (oder erstelle eine neue)
3. Gib deinem Projekt einen Namen:
   - z.B. `valentino-website-db`
4. **Database Password:** Ein sicheres Passwort eingeben
   - **WICHTIG:** Schreibe dieses Passwort auf! (Du brauchst es später nicht mehr, aber für Sicherheit)
5. **Region:** Wähle eine Region in deiner Nähe
   - Europa: `Europe West (Frankfurt)` oder `Europe Central (London)`
6. **Pricing Plan:** Free (0$/Monat) auswählen
7. Klicke auf **"Create new project"**

**Was passiert?** Supabase erstellt jetzt deine Datenbank. Das dauert 1-2 Minuten.

### Schritt 4.3 - API Keys kopieren

Wenn das Projekt fertig ist:

1. Im Supabase Dashboard: Gehe zu **Settings** (unten links, Zahnrad-Symbol)
2. Klicke auf **API**
3. Du siehst zwei wichtige Werte:

**Project URL:**
```
https://abcdefgh12345678.supabase.co
```

**anon/public Key:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**WICHTIG:** 
- Kopiere beide Werte in eine Notiz-App
- Diese brauchst du gleich für die `.env.local` Datei
- NIEMALS diese Keys öffentlich teilen oder in GitHub hochladen!

---

## Datenbank-Tabellen erstellen

### Schritt 5.1 - SQL Editor öffnen

In Supabase:

1. Klicke links auf **SQL Editor** (Icon sieht aus wie `</>`)
2. Klicke auf **"New query"**

### Schritt 5.2 - Kommentar-Tabelle erstellen

**Was macht diese Tabelle?** Speichert Kommentare von Benutzern zu deinen Blog-Posts/Events.

Kopiere diesen SQL-Code in den Editor:

```sql
-- Tabelle für Kommentare erstellen
CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT NOT NULL,
  name TEXT NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Index für schnellere Abfragen erstellen
CREATE INDEX comments_slug_idx ON comments(slug);

-- Row Level Security aktivieren (Sicherheit)
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Policy: Jeder kann Kommentare lesen
CREATE POLICY "Kommentare sind öffentlich lesbar"
  ON comments FOR SELECT
  TO public
  USING (true);

-- Policy: Jeder kann Kommentare erstellen
CREATE POLICY "Jeder kann Kommentare erstellen"
  ON comments FOR INSERT
  TO public
  WITH CHECK (true);
```

Klicke auf **"Run"** (oder `Cmd + Enter`).

**Erklärung:**
- `id`: Eindeutige ID für jeden Kommentar
- `slug`: Zu welchem Post gehört der Kommentar (z.B. "roswell")
- `name`: Name des Kommentators
- `comment`: Der eigentliche Kommentar-Text
- `created_at`: Wann wurde der Kommentar erstellt

### Schritt 5.3 - Nachrichten-Tabelle erstellen

**Was macht diese Tabelle?** Speichert Kontaktformular-Nachrichten.

Neuen SQL-Query erstellen und eingeben:

```sql
-- Tabelle für Kontaktformular-Nachrichten
CREATE TABLE messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Row Level Security aktivieren
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Policy: Jeder kann Nachrichten senden
CREATE POLICY "Jeder kann Nachrichten senden"
  ON messages FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Nur Admins können Nachrichten lesen (später konfigurierbar)
CREATE POLICY "Nur authentifizierte User können Nachrichten lesen"
  ON messages FOR SELECT
  TO authenticated
  USING (true);
```

Klicke auf **"Run"**.

### Schritt 5.4 - Tabellen überprüfen

1. Klicke links auf **Table Editor**
2. Du solltest jetzt zwei Tabellen sehen:
   - `comments`
   - `messages`

**Test:** Klicke auf `comments` → "Insert row" → Gib Testdaten ein → "Save"

Wenn das funktioniert, ist deine Datenbank fertig!

---

## Supabase mit dem Projekt verbinden

### Schritt 6.1 - Supabase Package installieren

Zurück in deinem Terminal (in VS Code):

```bash
npm install @supabase/supabase-js
```

ENTER drücken.

**Was passiert?** Das Supabase-Paket wird installiert, damit du von deiner Website auf die Datenbank zugreifen kannst.

### Schritt 6.2 - .env.local Datei erstellen

**Was ist .env.local?** Eine Datei für geheime Konfigurationswerte (API Keys, Passwörter).

1. In VS Code: Rechtsklick auf den Projektordner (root) → "New File"
2. Name: `.env.local`
3. Öffne die Datei und füge hinzu:

```env
NEXT_PUBLIC_SUPABASE_URL=deine-supabase-url-hier
NEXT_PUBLIC_SUPABASE_ANON_KEY=dein-supabase-key-hier
```

**WICHTIG:** Ersetze die Werte mit deinen echten Werten aus Schritt 4.3!

**Beispiel:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefgh12345678.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoMTIzNDU2NzgiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMjIwMDAwMCwiZXhwIjoxOTI3Nzc2MDAwfQ.example
```

**Sicherheitshinweis:**
- `.env.local` ist bereits in `.gitignore` → wird NICHT zu GitHub hochgeladen
- Teile diese Datei niemals öffentlich

### Schritt 6.3 - Supabase Client erstellen

1. Erstelle einen Ordner: `lib/` (im root des Projekts)
2. Erstelle eine Datei: `lib/supabase.ts`
3. Füge diesen Code ein:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

**Was macht dieser Code?**
- Importiert das Supabase-Paket
- Liest die Umgebungsvariablen aus `.env.local`
- Erstellt eine Verbindung zu deiner Datenbank
- Exportiert `supabase`, damit du es überall verwenden kannst

### Schritt 6.4 - Supabase verwenden (Beispiel)

**Kommentare abrufen:**

```typescript
import { supabase } from '@/lib/supabase'

const { data, error } = await supabase
  .from('comments')
  .select('*')
  .eq('slug', 'roswell')
  .order('created_at', { ascending: false })
```

**Kommentar hinzufügen:**

```typescript
const { error } = await supabase
  .from('comments')
  .insert([
    {
      slug: 'roswell',
      name: 'Max Mustermann',
      comment: 'Interessanter Artikel!'
    }
  ])
```

**Nachricht senden:**

```typescript
const { error } = await supabase
  .from('messages')
  .insert([
    {
      name: 'Anna Schmidt',
      email: 'anna@example.com',
      message: 'Hallo, tolle Website!'
    }
  ])
```

---

## Entwicklung starten

### Schritt 7.1 - Dev-Server starten

Im Terminal in VS Code:

```bash
npm run dev
```

ENTER drücken.

**Ergebnis:**
```
✓ Ready in 2.5s
○ Local:        http://localhost:3000
```

**Was passiert?**
- Next.js startet einen lokalen Entwicklungsserver
- Deine Website läuft jetzt auf deinem Computer
- Jede Änderung wird automatisch aktualisiert (Hot Reload)

### Schritt 7.2 - Website im Browser öffnen

Öffne deinen Browser und gehe zu:

```
http://localhost:3000
```

Du solltest jetzt die Next.js Willkommensseite sehen!

### Schritt 7.3 - Erste Änderung vornehmen

1. Öffne `app/page.tsx` in VS Code
2. Ändere den Text
3. Speichere die Datei (`Cmd + S` oder `Ctrl + S`)
4. Gehe zurück zum Browser → Die Seite aktualisiert sich automatisch!

**Beispiel-Code für eine einfache Startseite:**

```tsx
export default function Home() {
  return (
    <main style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        Willkommen auf meiner Website
      </h1>
      <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
        Das ist meine erste Next.js Website mit Supabase!
      </p>
    </main>
  )
}
```

### Schritt 7.4 - Dev-Server stoppen

Wenn du fertig bist mit der Entwicklung:

Im Terminal: `Ctrl + C` drücken

Der Server wird gestoppt.

---

## GitHub Repository erstellen

**Warum GitHub?** Um deine Website auf Vercel zu deployen, brauchst du ein GitHub Repository.

### Schritt 8.1 - GitHub Account erstellen

Falls du noch keinen Account hast:

1. Gehe zu [https://github.com](https://github.com)
2. Klicke auf **"Sign up"**
3. Folge den Schritten
4. Verifiziere deine E-Mail

### Schritt 8.2 - Neues Repository erstellen

1. Auf GitHub: Klicke oben rechts auf das **"+"** Symbol
2. Wähle **"New repository"**
3. **Repository name:** `valentino-website` (oder dein Projektname)
4. **Description:** "Meine Website mit Next.js und Supabase"
5. **Public** oder **Private** wählen:
   - Public: Jeder kann den Code sehen
   - Private: Nur du kannst den Code sehen (funktioniert auch für Deployment)
6. **NICHT** "Initialize this repository with a README" ankreuzen
7. Klicke auf **"Create repository"**

### Schritt 8.3 - Lokales Git initialisieren

Zurück in deinem Terminal (im Projektordner):

```bash
git init
```

ENTER

**Was macht das?** Initialisiert Git in deinem Projekt.

### Schritt 8.4 - Alle Dateien hinzufügen

```bash
git add .
```

ENTER

**Erklärung:**
- `git add .` = Fügt alle Dateien zur Git-Staging-Area hinzu
- `.` bedeutet "alle Dateien im aktuellen Ordner"

### Schritt 8.5 - Ersten Commit erstellen

```bash
git commit -m "Initial commit"
```

ENTER

**Was ist ein Commit?** Ein Snapshot deines Codes zu einem bestimmten Zeitpunkt.

### Schritt 8.6 - Mit GitHub verbinden

GitHub zeigt dir nach der Repository-Erstellung Befehle. Benutze diese:

```bash
git branch -M main
git remote add origin https://github.com/dein-username/valentino-website.git
git push -u origin main
```

**WICHTIG:** Ersetze `dein-username` mit deinem GitHub-Benutzernamen!

**Beispiel:**
```bash
git remote add origin https://github.com/valentinokasa/valentino-website.git
git push -u origin main
```

**Was passiert?**
1. Erstellt einen `main` Branch
2. Verbindet dein lokales Projekt mit GitHub
3. Lädt alle Dateien zu GitHub hoch

**Beim ersten Mal:** GitHub fragt vielleicht nach deinen Login-Daten.

### Schritt 8.7 - Überprüfen

Gehe zu deinem GitHub Repository im Browser:

```
https://github.com/dein-username/valentino-website
```

Du solltest jetzt alle deine Dateien auf GitHub sehen!

---

## Website auf Vercel deployen

**Was ist Vercel?** Eine Hosting-Plattform speziell für Next.js. Deine Website wird live ins Internet gestellt.

### Schritt 9.1 - Vercel Account erstellen

1. Gehe zu [https://vercel.com](https://vercel.com)
2. Klicke auf **"Sign Up"**
3. Wähle **"Continue with GitHub"**
4. Melde dich mit GitHub an
5. Erlaube Vercel den Zugriff auf deine Repositories

### Schritt 9.2 - Neues Projekt importieren

1. Im Vercel Dashboard: Klicke auf **"Add New..."** → **"Project"**
2. Du siehst eine Liste deiner GitHub Repositories
3. Finde `valentino-website`
4. Klicke auf **"Import"**

### Schritt 9.3 - Projekt konfigurieren

**Configure Project** Seite:

1. **Project Name:** Wird automatisch ausgefüllt (kannst du ändern)
   - z.B. `valentino-website`
2. **Framework Preset:** Next.js (wird automatisch erkannt)
3. **Root Directory:** `./` (Standard)
4. **Build Command:** `npm run build` (Standard)
5. **Output Directory:** `.next` (Standard)

**WICHTIG - Environment Variables hinzufügen:**

1. Klicke auf **"Environment Variables"** (ausklappen)
2. Füge deine Supabase-Werte hinzu:

**Variable 1:**
- **Name:** `NEXT_PUBLIC_SUPABASE_URL`
- **Value:** Deine Supabase URL (aus .env.local)

**Variable 2:**
- **Name:** `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value:** Dein Supabase Key (aus .env.local)

3. Klicke auf **"Add"** für jede Variable

### Schritt 9.4 - Deploy starten

Klicke auf **"Deploy"**.

**Was passiert?**
1. Vercel lädt deinen Code von GitHub
2. Installiert alle Abhängigkeiten (`npm install`)
3. Baut deine Website (`npm run build`)
4. Stellt sie online

**Dauer:** 1-3 Minuten

### Schritt 9.5 - Deployment erfolgreich!

Wenn der Build fertig ist, siehst du:

```
🎉 Congratulations!
Your project is now live
```

Du bekommst eine URL wie:

```
https://valentino-website.vercel.app
```

oder

```
https://valentino-website-abcd1234.vercel.app
```

**Klicke auf "Visit"** → Deine Website ist jetzt live im Internet!

### Schritt 9.6 - Eigene Domain verbinden (Optional)

1. Gehe zu deinem Vercel-Projekt
2. Klicke auf **"Settings"** → **"Domains"**
3. Gib deine Domain ein (z.B. `meine-website.com`)
4. Folge den Anweisungen zur DNS-Konfiguration

**Hinweis:** Du brauchst eine gekaufte Domain (z.B. von Namecheap, GoDaddy, etc.)

### Schritt 9.7 - Automatische Deployments

**Der beste Teil:** Jedes Mal, wenn du Änderungen zu GitHub pushst, deployt Vercel automatisch!

**Workflow:**

1. Ändere etwas in deinem Code
2. Im Terminal:
```bash
git add .
git commit -m "Neue Features hinzugefügt"
git push
```
3. Vercel erkennt das automatisch und deployt die neue Version
4. Nach 1-2 Minuten ist deine Website aktualisiert!

---

## Troubleshooting

### Problem 1: "command not found: npm"

**Lösung:** Node.js nicht installiert → Gehe zu Schritt 1.1

### Problem 2: "command not found: code"

**Lösung:** 
1. VS Code öffnen
2. `Cmd + Shift + P` (Mac) / `Ctrl + Shift + P` (Windows)
3. Tippe: "Shell Command: Install 'code' command in PATH"
4. Terminal neu starten

### Problem 3: Port 3000 already in use

**Lösung:**

```bash
# Port 3000 freigeben (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Oder anderen Port verwenden
npm run dev -- -p 3001
```

### Problem 4: Build failed on Vercel

**Häufige Ursachen:**

1. **TypeScript Fehler:** 
   - Lokal testen: `npm run build`
   - Fehler beheben

2. **Umgebungsvariablen fehlen:**
   - Vercel Settings → Environment Variables überprüfen

3. **Dependencies fehlen:**
   - `package.json` auf GitHub pushen

### Problem 5: Supabase Connection Error

**Lösungen:**

1. **Umgebungsvariablen prüfen:**
   ```bash
   # In .env.local
   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   ```

2. **Server neu starten:**
   - `Ctrl + C` im Terminal
   - `npm run dev` erneut ausführen

3. **Supabase Dashboard prüfen:**
   - Ist das Projekt aktiv?
   - Sind die Row Level Security Policies richtig?

### Problem 6: Changes not showing on Vercel

**Lösung:**

1. **Prüfen ob gepusht:**
   ```bash
   git status
   git push
   ```

2. **Vercel Deployment Log prüfen:**
   - Vercel Dashboard → Deployments → Neuestes Deployment → "View Logs"

3. **Cache leeren:**
   - Vercel Dashboard → Projekt → Deployments → "..." → "Redeploy"

### Problem 7: Git push rejected

**Lösung:**

```bash
# Neueste Änderungen von GitHub ziehen
git pull origin main

# Dann nochmal pushen
git push
```

### Problem 8: Image not loading

**Lösung für Next.js Images:**

1. Bilder in `public/` Ordner legen
2. In Code referenzieren:
   ```tsx
   <img src="/bild.jpg" alt="Beschreibung" />
   ```

3. Oder Next.js Image verwenden:
   ```tsx
   import Image from 'next/image'
   
   <Image src="/bild.jpg" alt="Beschreibung" width={500} height={300} />
   ```

---

## Zusammenfassung - Der komplette Workflow

**Einmalig (Projekt-Setup):**

1. Node.js installieren
2. Next.js Projekt erstellen
3. Supabase Account & Projekt erstellen
4. Datenbank-Tabellen anlegen
5. Supabase Package installieren
6. .env.local erstellen
7. GitHub Repository erstellen
8. Code zu GitHub pushen
9. Vercel Account erstellen
10. Projekt auf Vercel deployen

**Täglicher Workflow (Entwicklung):**

```bash
# 1. Dev-Server starten
npm run dev

# 2. Code bearbeiten in VS Code

# 3. Änderungen zu Git hinzufügen
git add .

# 4. Commit erstellen
git commit -m "Beschreibung der Änderungen"

# 5. Zu GitHub pushen
git push

# 6. Vercel deployt automatisch!
```

**Wichtige URLs zum Merken:**

- **Lokal:** http://localhost:3000
- **Supabase:** https://app.supabase.com
- **GitHub:** https://github.com/dein-username/valentino-website
- **Live Website:** https://valentino-website.vercel.app
- **Vercel Dashboard:** https://vercel.com/dashboard

---

## Nächste Schritte

Jetzt, wo deine Website läuft, kannst du:

1. **Mehr Seiten hinzufügen:** `app/about/page.tsx`, `app/kontakt/page.tsx`
2. **Komponenten erstellen:** `app/components/Header.tsx`
3. **Styling verbessern:** Mit Tailwind CSS
4. **Datenbank nutzen:** Kommentare, User-System
5. **SEO optimieren:** Metadata hinzufügen
6. **Analytics einbauen:** Google Analytics, Vercel Analytics

**Viel Erfolg mit deiner Website!**
