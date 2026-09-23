/**
 * Form delivery.
 *
 * The site is a static build on GitHub Pages, so there is no server to post to.
 * Submissions go to Formspree, which emails them to the address configured on
 * the form. Set the form ID below (or via a VITE_FORMSPREE_ID env var) to
 * activate delivery.
 *
 * Until it is set, submitForm throws FormNotConfiguredError and the forms show
 * the direct email address instead of a success message. That is deliberate:
 * a form must never tell someone their message was sent when it was not.
 */

/** Create a form at https://formspree.io and paste its ID here (e.g. 'xayzbwqd').
 *  Formspree IDs are public by design — it is safe to commit this value. */
const FALLBACK_FORMSPREE_ID = ''

export const FORMSPREE_ID: string =
  (import.meta.env.VITE_FORMSPREE_ID as string | undefined) || FALLBACK_FORMSPREE_ID

export const CONTACT_EMAIL = 'info@dirsol.com'

export class FormNotConfiguredError extends Error {
  constructor() {
    super('Form delivery is not configured')
    this.name = 'FormNotConfiguredError'
  }
}

export function isFormConfigured(): boolean {
  return Boolean(FORMSPREE_ID)
}

/**
 * Posts a submission. Resolves only when the submission was actually accepted.
 * Throws FormNotConfiguredError if no form ID is set, or Error on failure.
 */
export async function submitForm(
  payload: Record<string, string>,
  subject: string,
): Promise<void> {
  if (!FORMSPREE_ID) throw new FormNotConfiguredError()

  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ ...payload, _subject: subject }),
  })

  if (!res.ok) {
    let detail = `${res.status} ${res.statusText}`
    try {
      const body = await res.json()
      if (body?.errors?.length) detail = body.errors.map((e: any) => e.message).join(', ')
    } catch {
      /* response had no JSON body — keep the status text */
    }
    throw new Error(detail)
  }
}

/** A mailto: link prefilled with the submission, so a failed send is recoverable. */
export function mailtoFallback(
  payload: Record<string, string>,
  subject: string,
): string {
  const body = Object.entries(payload)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
