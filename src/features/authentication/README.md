# Authentication Feature

This feature exposes browser and server utilities for working with Supabase auth.

## Modules
- `./client/auth-service.ts`: Browser-only helpers that rely on `window` and `createBrowserClient()`.
- `./server/auth-service.ts`: Server-side helpers that accept the SvelteKit `RequestEvent` and use `createServerClient()`.

## Usage
- In UI components (`*.svelte`), import `authServiceClient` directly from `./client/auth-service`.
- In `+layout.server.ts`, `+page.server.ts`, and `+server.ts` files, import `authServiceServer` directly from `./server/auth-service`.
- If you need to gate access to a server handler, call `authServiceServer.requireUser(event)`.

## Adding New Auth Operations
1. Add the browser version to `client/auth-service.ts` if it needs DOM access or redirects.
2. Add the server version to `server/auth-service.ts` using the same method signature where possible.
3. Export the new helpers only from their respective files so callers must choose the appropriate context explicitly.

## Guards
- Prefer using `authServiceServer.requireUser()` in server routes to throw consistent unauthorized errors.
- Keep Cloudflare Worker compatibility in mind: never reference `window` or other browser globals in server files.
