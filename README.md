# Week 5 — CI/CD 

This repository contains the files we'll use during the Week 5 CI/CD session and an intentionally "error-filled" example file used for linting/formatting exercises.

Files we'll be using today
- `code.ts` — main TypeScript exercise file.
- `eslint.config.mts` — ESLint configuration used in the workshop.
- `package.json` — project metadata and scripts (install/test/lint).
- `LICENSE` — project license.
- `README.md` — this file (simple guide and embedded error sample).

Fake "error-filled" file (for the linting/formatting exercise)

The following is the raw contents of the example file we'll use in class. It's intentionally messy so you can practice linting, formatting, and fixing errors.

```javascript
function   sayHello(name ){console.log("Hello " +   name )
}

function add(a , b){ const   c =  a +b ; return  c }

async function   main ( ){
 const user="Brandon"
sayHello(   user )
const result=add(  5 ,   10 )   
 console.log("result:",result )
 const unused=123
 if(result>10){console.log("big number")
 }else{ console.log("small")}

}

 main(   )
```

How to use this repo today
- Open `code.ts` and follow the exercise comments.
- Run the linter/formatter (we'll use the project's ESLint config) and apply fixes to the error-filled file sample.
- Use `package.json` scripts for install/test/lint where applicable.

If you want the error-filled file separated into its own file, let me know and I will add it (for now it's embedded above so it's easy to copy/paste during the session).

What will happen today — setup plan
We will walk through a simple setup to make the repository ready for development and CI checks. The main steps are:

1. Initialize a Node package (creates `package.json`).
2. Install and configure Prettier for consistent formatting.
3. Install and configure ESLint for linting and basic code quality rules.
4. Install Husky and add a pre-commit hook to run format/lint before commits.

Example commands (copy/paste in your terminal)

```bash
# 1) initialize npm package
npm init -y

# 2) install prettier and add a format script
npm install --save-dev prettier
# add to package.json scripts: "format": "prettier --write ."

# 3) install eslint and a minimal config
npm install --save-dev eslint
npx eslint --init
# or create a minimal .eslintrc.* and add a lint script: "lint": "eslint . --ext .js,.ts"

# 4) install husky and set up a pre-commit hook to run format and lint
npm install --save-dev husky
npx husky install
npx husky add .husky/pre-commit "npm run format && npm run lint"
```

Suggested `package.json` scripts (example)

```json
"scripts": {
	"format": "prettier --write .",
	"lint": "eslint . --ext .js,.ts"
}
```

Notes and tips
- During the live session we'll demonstrate `npx eslint --init` and a quick `.prettierrc` file so everyone's on the same page.
- Husky hooks run locally before commits; we can also add CI checks (GitHub Actions) later to enforce the same checks on push/PRs.
- If you'd like, I can add these configs and scripts directly to the repo now (including a separate `error-sample.js` file). Tell me which you'd prefer and I'll implement it.

---

