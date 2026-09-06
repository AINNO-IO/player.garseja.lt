/**
 * Tiny page-wide signal so only one audio source plays at a time.
 * Dispatch `new CustomEvent(PAUSE_OTHERS_EVENT, { detail: '<source-id>' })`
 * on `window` before starting playback; every other player pauses.
 */
export const PAUSE_OTHERS_EVENT = 'garsio:pause-others'
