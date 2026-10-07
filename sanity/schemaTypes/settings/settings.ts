import { defineType } from "sanity";
import { list, section, str, txt, url } from "../helpers";

export const generalSettings = defineType({
  name: "generalSettings",
  title: "General (site name, SEO, navigation)",
  type: "document",
  groups: [
    { name: "seo", title: "Search & sharing" },
    { name: "nav", title: "Navigation" },
    { name: "footer", title: "Footer" },
    { name: "newsletter", title: "Newsletter" },
  ],
  fields: [
    str("siteName", "Site name", undefined, { group: "seo" }),
    str("seoTitle", "Browser / Google title", "Shown in the browser tab and search results.", { group: "seo" }),
    txt("seoDescription", "Search description", "About 150 characters.", { group: "seo" }),
    txt("keywords", "Keywords", "Comma separated.", { group: "seo" }),
    txt("socialDescription", "Social sharing description", "Shown when the link is shared on social media.", { group: "seo" }),
    list("navLinks", "Menu links", [str("label", "Label"), url("href", "Link", 'Start with "/" e.g. /about')], "nav"),
    str("donateLabel", "Donate button text", undefined, { group: "nav" }),
    url("donateUrl", "Donate button link", "Full https:// link.", { group: "nav" }),
    txt("footerBlurb", "Footer description", undefined, { group: "footer" }),
    str("getInvolvedTitle", "Footer: 'Get involved' heading", undefined, { group: "footer" }),
    txt("getInvolvedText", "Footer: 'Get involved' text", undefined, { group: "footer" }),
    str("getInvolvedButton", "Footer: button text", undefined, { group: "footer" }),
    section("newsletter", "Newsletter box", [
      str("badge", "Small label"),
      str("title", "Heading"),
      str("titleHighlight", "Highlighted word"),
      txt("body", "Text"),
    ], "newsletter"),
  ],
  preview: { prepare: () => ({ title: "General settings" }) },
});

export const contactSettings = defineType({
  name: "contactSettings",
  title: "Contact details",
  type: "document",
  fields: [
    str("email", "Contact email"),
    str("phone", "Phone number (display)", "e.g. +254 727 776 506"),
    str("phoneLink", "Phone number (for tap-to-call)", "e.g. +254727776506"),
    str("phoneHours", "Phone hours"),
    str("emailNote", "Note under email on Contact page"),
  ],
  preview: { prepare: () => ({ title: "Contact details" }) },
});

export const socialSettings = defineType({
  name: "socialSettings",
  title: "Social links",
  type: "document",
  fields: [
    url("instagram", "Instagram URL"),
    str("instagramHandle", "Instagram handle (display)"),
    url("facebook", "Facebook URL"),
    url("twitter", "Twitter / X URL"),
    url("linkedin", "LinkedIn URL"),
  ],
  preview: { prepare: () => ({ title: "Social links" }) },
});

