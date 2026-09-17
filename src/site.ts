/** Set to false when the full site is ready to launch. */
export const previewMode = true;

export const previewWorkSlug = 'escaneo-de-producto';
/** Extra work pages that stay reachable in preview (not redirected). */
export const extraPreviewWorkSlugs = ['meissen'];
export const previewWorkSlugs = [previewWorkSlug, ...extraPreviewWorkSlugs];
export const homePath = `/work/${previewWorkSlug}`;
