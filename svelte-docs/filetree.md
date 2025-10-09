# Project File Tree (modelito app)

```
modelito/
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .npmrc
├── .prettierignore
├── .prettierrc
├── jsconfig.json
├── package.json
├── README.md
├── svelte.config.js
├── tsconfig.json
├── vite.config.js
├── node_modules/
├── src/
│   ├── app.css
│   ├── app.d.ts
│   ├── app.html
│   ├── features/
│   │   ├── authentication/
│   │   │   ├── auth-service.ts
│   │   │   ├── LoginForm.svelte
│   │   │   └── SignupForm.svelte
│   │   └── database/
│   ├── routes/
│   │   ├── (app)/
│   │   │   ├── +layout.server.ts
│   │   │   └── dashboard/
│   │   │       └── +page.svelte
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   │   └── +page.svelte
│   │   │   └── signup/
│   │   │       └── +page.svelte
│   │   ├── api/
│   │   ├── auth/
│   │   │   └── callback/
│   │   │       └── +server.ts
│   │   ├── +layout.svelte
│   │   ├── +page.svelte
│   │   └── page.svelte.spec.ts
│   ├── services/
│   │   ├── openrouter (TODO)/
│   │   └── supabase/
│   │       └── client.ts
│   └── shared/
│       ├── components/
│       │   ├── Button.svelte
│       │   ├── Card.svelte
│       │   ├── Container.svelte
│       │   ├── FeatureCard.svelte
│       │   ├── IconBox.svelte
│       │   ├── index.ts
│       │   └── StatCard.svelte
│       ├── layouts/
│       └── favicon.svg
├── static/
│   └── robots.txt
└── svelte-docs/
    ├── filetree.md
    ├── high-level-code-doc.md
    ├── svelte-project-structure.md
    ├── theme-system.md
    └── web-standards.md
```
