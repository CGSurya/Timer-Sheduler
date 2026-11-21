# Timebox

Timed tasks with time limits, daily reminder checklists and repeating timers
(for example "drink water every 10 minutes").

Your data is saved in the app's own storage on each device. Nothing is sent anywhere.

## Phone and desktop: install from the browser (no build needed)

The `app/` folder is an installable web app. It needs to be served over HTTPS once.
Free options: GitHub Pages, Netlify Drop (drag the `app` folder onto app.netlify.com/drop), Cloudflare Pages.

- **Android (Chrome):** open the link, menu, "Install app".
- **iPhone/iPad (Safari):** open the link, Share, "Add to Home Screen".
- **Windows/Mac/Linux (Chrome or Edge):** open the link, click the install icon in the address bar.

After installing, tap **Enable notifications** inside the app so alerts also appear as system notifications.

## Desktop installer (Windows, macOS, Linux)

Needs Node.js from nodejs.org. In this folder run:

    npm install --save-dev electron electron-builder
    npm start          # run the desktop app
    npm run dist       # build an installer into dist/

Build on the system you want to target: the .exe on Windows, the .dmg on a Mac.

## Get the .exe and .apk without installing anything (GitHub Actions)

1. Create a free GitHub account and a new empty repository.
2. Upload everything in this folder to it (including the hidden `.github` folder).
3. Open the repository's **Actions** tab, choose **Build apps**, click **Run workflow**.
4. After a few minutes, open the finished run and download:
   - `Timebox-Windows-exe`: the Windows installer
   - `Timebox-Android-apk`: a debug APK you can install on an Android phone
     (allow "install unknown apps" for your file manager or browser)

The APK is signed with a debug key. That is fine for your own phone but not for the Play Store.
In the Android app, alerts show inside the app and play a sound. System notifications need an extra plugin.

## Good to know

- Alerts and timers run while the app is open (it can be minimised). A web app cannot
  wake itself when fully closed. The desktop version keeps running in the background while its window stays open.
- Keep the phone app open or on screen for alerts to fire on time. Phones pause background tabs.
