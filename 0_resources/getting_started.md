# Getting Started

This is the starter guide for creating a project with the Counterfoil Toolkit. Use this when starting a project to make sure that critical functions are installed and working properly. 



## Step 1: Duplicate the starter kit. 

---

- Duplicate the counterfoil_starter_kit and...
- Rename the new file. 



## Step 2: On-Machine Assumptions

---

This kit assumes that certain things are already installed on the machine. They may need to be updated from time to time. These assume:

- macOS / Linux

- Node managed via **nvm**

- Package manager = **yarn** 



### 2.1: Node

---

#### Check to make sure that Node is installed:

``` node -v```

If installed → prints version
 If not → `command not found`

#### Check which node versions you have

``` nvm ls```

Shows:

- installed versions
- which one is active
- which one is default

#### Update Node

Install the latest LTS: `nvm install --lts`

Switch to it: `nvm use --lts`

Set as default: `nvm alias default lts/*` 





### 2.2 Yarn

---

#### Check yarn version:

`yarn -v`

#### Check for Yarn updates:

`npm outdated -g yarn`

If nothing prints → up to date

#### Update Yarn:

`npm install -g yarn`

(This upgrades to latest stable.)





### 2.3 Git

---

#### Check Git Version

`git --version`



#### Check for Updates

`brew outdated git`

if outdated, update with:

`brew upgrade git`



### 2.4 Switch to the right nvm

---

This code will create (or update) a file that has the nvm version. The project will be able to reference it. 

IN TERMINAL, navigate to the root of the new project and run:

`echo "20" > .nvmrc`

This will create the file if it doesn't exist (or overwrite it if it does) and add the "20" as the nvm version. 

Then, run:

`nvm use`

...to use it. 



## 3. Open in AI-IDE

---

Open the new project folder in Cursor (or whatever IDE we're using). 

Cursor will immediately notice:

- `package.json`
- `tailwind.config.ts`
- `tsconfig.json`

At this moment, nothing is installed yet.



## 4. Install Dependencies

---

In terminal, in the project folder, type:

#### Install NPM:

```npm install```

This will:

- Read `package.json`
- Download:
  - React
  - Tailwind
  - Your build tool (Vite / Next / whatever)
  - TypeScript
- Creates `node_modules/`
- Creates a lockfile



#### Install Tailwind + CLI

```npm install -D tailwindcss @tailwindcss/cli postcss autoprefixer```

Initialize config (if need):

``` npc tailwindcss init -p```



#### Install Tailwind postcss

```npm install -D @tailwindcss/postcss```



## 5. Start the Dev Server

---

Since this is a typescript application, you can't just open the index file in a browser and have it work. Instead, you have to start the server. 

#### In terminal, cd into the project folder and type:

```npm run dev```

Now:

- Tailwind builds
- Your plugin runs
- CSS variables load
- App opens at `localhost:5173` (or similar)

#### Open the file in a browser

Copy the url from the terminal and paste it into a browser. It should show the starter screen. 



If this step works, **your kit is healthy**.

If this step fails, the kit—not the app—is broken.



(Remember, you can turn off the server with Control + C)





## 6. Rename the app identity

---

Go to `package.json` and edit:

```{
{
"name": "kitchen-timer"
}
```

Optional: page title, favicon, README title





## 7. Remind the AI of the design philosophy

---

The "Design Philosophy" is a set of instructions to tell the AI so that it will follow the conventions for how we like to build. What to do:

- Locate the Design Philosophy in the 

