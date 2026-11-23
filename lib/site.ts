export const siteUrl = "https://peoplefirstresources.com";
export const siteName = "PeopleFirst Resources";
export const contactEmail = "info@peoplefirstresources.com";

/** Organization node shared by every page's JSON-LD graph. */
export const organizationRef = { "@id": `${siteUrl}/#organization` };

/** JSON-LD must not contain a raw "<" or a stray "</script>" could end the tag. */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
