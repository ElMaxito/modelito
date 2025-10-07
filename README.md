## Modelito

Starter template for my future projects for fast dev velocity.

SvelteKit + Supabase + DaisyUI

## The Rankings: Human + AI Ease of Use
### Tier 1: Simplest (Best for AI Agents)
1. SvelteKit ⭐ Winner

- Minimal boilerplate - Less code for AI to parse
- File-based routing - AI knows exactly where files go
- Explicit server/client split - Clear mental model
- Svelte 5 runes - Modern, predictable syntax
- Best docs-to-code ratio - AI training data is clean

### Why AI loves it:
typescript// routes/api/todos/+server.ts
export async function GET() {
  return json({ todos: [] })
}

- No decorators, no magic, no confusion
- AI can reason about this easily
- Pattern is consistent everywhere

### SvelteKit:

- Code in +page.svelte runs on server then client
- Code in +server.ts runs only on server
- Clear boundary

### Documentation Quality
- SvelteKit docs:

- Concise, clear examples
- One way to do things (mostly)
- AI can parse easily