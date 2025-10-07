



┌─────────────────────────────────┐
│  Routes (UI Pages)              │  ← What users see
├─────────────────────────────────┤
│  Features (App Logic)           │  ← What your app does
├─────────────────────────────────┤
│  Services (Infrastructure)      │  ← External connections
│  - Supabase                     │
│  - OpenRouter                   │
│  - Stripe                       │
└─────────────────────────────────┘




src/
├── services/              # ← Infrastructure layer
│   ├── supabase/
│   │   └── client.ts
│   ├── openrouter/       # When you add it
│   │   └── client.ts
│   └── stripe/           # If you need payments
│       └── client.ts
│
├── features/              # ← Application layer
│   ├── authentication/
│   │   ├── LoginForm.svelte
│   │   ├── auth-service.ts
│   │   └── auth-types.ts
│   │
│   ├── database/          # Database utilities
│   │   ├── queries.ts    # Reusable queries
│   │   └── types.ts      # DB type definitions
│   │
│   └── ai-chat/          # When you build it
│       ├── ChatInterface.svelte
│       └── chat-service.ts
│
├── shared/                # ← Presentation layer
│   ├── components/
│   └── layouts/
│
└── routes/                # ← Routing layer
    ├── (app)/
    ├── (auth)/
    └── api/



    Path Aliases to Match
Update svelte.config.js:
javascriptalias: {
  $services: './src/services',
  $features: './src/features',
  $shared: './src/shared'
}


Import examples:
typescript// Infrastructure
import { supabase } from '$services/supabase/client';
import { openrouter } from '$services/openrouter/client';

// Features
import { login } from '$features/authentication/auth-service';
import { TodoList } from '$features/todos/TodoList.svelte';

// Shared UI
import Button from '$shared/components/Button.svelte';


What Goes Where?
services/supabase/

Client initialization
Generic Supabase utilities
Nothing app-specific

features/database/

App-specific queries
Database type definitions
Table schemas (eventually)
Uses $services/supabase but adds app logic

Example:
typescript// services/supabase/client.ts
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_ANON_KEY
)
typescript// features/database/queries.ts
import { supabase } from '$services/supabase/client'

// App-specific query helpers
export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  if (error) throw error
  return data
}

export async function getAllTodos(userId: string) {
  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data
}

TL;DR
Use root-level services/ folder for external integrations:

Supabase
OpenRouter
Stripe
Any external service

Use features/ for app-specific logic that uses those services:

Authentication (uses Supabase)
Database queries (uses Supabase)
AI chat (uses OpenRouter)
Payments (uses Stripe)

This gives you:

Clear separation of concerns
Room to grow
Easier AI agent prompting
Better mental model