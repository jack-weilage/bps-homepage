import { dev } from '$app/environment'

// Force all pages to prerender.
export const prerender = true
// Don't bundle JavaScript if in preview or deployment.
export const csr = dev