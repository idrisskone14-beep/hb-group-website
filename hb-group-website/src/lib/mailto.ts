import { SITE } from "@/data/site";

export function buildMailtoLink(params: {
  subject: string;
  lines: Array<[string, string]>;
  to?: string;
}) {
  const body = params.lines
    .filter(([, value]) => value && value.trim().length > 0)
    .map(([label, value]) => `${label} : ${value}`)
    .join("\n");

  const search = new URLSearchParams({
    subject: params.subject,
    body,
  });

  return `mailto:${params.to ?? SITE.email}?${search.toString().replace(/\+/g, "%20")}`;
}
