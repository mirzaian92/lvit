export function withBase(url: string) {
  return url.startsWith("/") ? url : `/${url}`;
}

export function serviceHref(slug: string) {
  return `/service/${slug}`;
}

export function industryHref(slug: string) {
  return `/industry/${slug}`;
}

export function locationHref(slug: string) {
  return `/location/${slug}`;
}

