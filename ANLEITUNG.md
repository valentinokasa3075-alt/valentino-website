# Anleitung

🟢 Schritt 1 — Zum Schreibtisch (Desktop) gehen

Im Terminal eingeben:

```bash
cd ~/Desktop
```

ENTER

(Im Finder heißt es „Schreibtisch", im Terminal heißt es „Desktop".)

🟢 Schritt 2 — Next.js Website erstellen (NEUES Projekt)

Jetzt diesen Befehl eingeben:

```bash
npx create-next-app@latest valentino-website
```

ENTER

Wenn er fragt: Ok to proceed? (y) → tippe:

```
y
```

ENTER

🟢 Schritt 3 — Fragen beantworten (so anklicken/auswählen)

Wenn Fragen kommen, antworte so:

```
Would you like to use the recommended Next.js defaults?
✅ Yes, use recommended defaults (ENTER)
```

(Das nimmt meistens: TypeScript, ESLint, Tailwind, App Router usw. automatisch.)

ODER wenn du „customize" gewählt hast, dann so:

```
TypeScript? → No
ESLint? → Yes
Tailwind? → Yes
src folder? → Yes
App Router? → Yes
Rest → ENTER
```

🟢 Schritt 4 — In den Projekt-Ordner gehen

```bash
cd valentino-website
```

ENTER

🟢 Schritt 5 — In VS Code öffnen

```bash
code .
```

ENTER

➡️ VS Code öffnet jetzt deine Website.

Falls code . nicht funktioniert: sag mir die Fehlermeldung, dann stelle ich's dir schnell ein.

🟢 Schritt 6 — Website starten

Im Terminal in VS Code (oder im Terminal allgemein) eingeben:

```bash
npm run dev
```

ENTER

Du siehst dann z.B.:

```
Local: http://localhost:3000
```

🟢 Schritt 7 — Website im Browser öffnen

Öffne im Browser:

```
http://localhost:3000
```

✅ Ergebnis: Deine Next.js Website läuft.

🟢 Schritt 8 — Wo du deine Website bearbeitest

Die wichtigste Datei ist:

```
✅ app/page.tsx
```

Dort änderst du den Inhalt der Startseite.
