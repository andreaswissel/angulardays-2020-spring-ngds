# Robuste Design Systems mit Storybook und Angular: vom Konzept zur lebendigen Anwendung

[Angular Days Workshop](https://javascript-days.de/angular/robuste-design-systems-mit-storybook-und-angular-vom-konzept-zur-lebendigen-anwendung/), Tuesday 8th October 2019 

Your trainers: [Christian Liebel](https://twitter.com/christianliebel), Thinktecture. [Andreas Wissel](https://twitter.com/andreas_wissel)

## Setup

As we are expecting a high number of participants and we’ve seen a lot of unreliable conference WiFis, we kindly ask you to prepare the following setup steps at home or in the hotel.

### Step 1: Devices and Software

Please bring your developer devices and install the following software. [Already done? Click here for step 2.](#step-2-demo-repository)

**NOTE:** As web technologies move fast and quickly, there might be new releases in the meantime. To ensure everything works as intended, we strictly recommend you to stick to the versions noted below. Thanks!

#### Devices
- Laptop with recent Windows/macOS/Linux version
  - Make sure you can access the Internet without any proxies and install software without group policies etc.
  - When in doubt, use your private notebook.

#### Browsers (Desktop)
- [Google Chrome](https://www.google.de/chrome/browser/desktop/), version 75 or later

#### Developer Tools
- [Git](https://git-scm.com/)
  - Optional: Git UI tool such as TortoiseGit, Tower, SourceTree, GitKraken, …
- [Node.js](https://nodejs.org/en/), version 10.16.0 LTS
- Editor of your choice
  - [WebStorm](https://www.jetbrains.com/webstorm/) 2019.2 (commercial, free trial)
  - [Visual Studio Code](https://code.visualstudio.com/), recent version
  
#### Designer Tools
- Create a free account at [Figma](https://figma.com)
- Create a free account at [Percy](https://percy.io)

### Step 2: Demo Repository

On your favorite terminal, please run:

```
npm uninstall -g @angular/cli @storybook/cli
npm cache verify
npm install -g @angular/cli@8.1.2 @storybook/cli@5.1.9 
```

Next, navigate to a folder of your choice and execute:

```
git clone https://github.com/thinktecture/angulardays-2019-herbst-design-systems.git
cd angulardays-2019-herbst-design-systems
```

If you prefer SSH, you can use this checkout URL: `git@github.com:thinktecture/angulardays-2019-herbst-design-systems.git`
