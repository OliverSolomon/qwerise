import { defineField, type FieldDefinition } from "sanity";

type Opts = { group?: string; rows?: number; initialValue?: string; options?: Record<string, unknown> };

export const str = (name: string, title: string, description?: string, o: Opts = {}) =>
  defineField({ name, title, description, type: "string", group: o.group, initialValue: o.initialValue, options: o.options });

export const txt = (name: string, title: string, description?: string, o: Opts = {}) =>
  defineField({ name, title, description, type: "text", rows: o.rows ?? 3, group: o.group });

export const rich = (name: string, title: string, description?: string, o: Opts = {}) =>
  defineField({ name, title, description, type: "richText", group: o.group });

export const img = (name: string, title: string, description?: string, o: Opts = {}) =>
  defineField({ name, title, description, type: "image", options: { hotspot: true }, group: o.group,
    fields: [defineField({ name: "alt", title: "Description (for screen readers)", type: "string" })] });

export const url = (name: string, title: string, description?: string, o: Opts = {}) =>
  defineField({ name, title, description, type: "string", group: o.group });

export const section = (name: string, title: string, fields: FieldDefinition[], group?: string, description?: string) =>
  defineField({ name, title, description, type: "object", group, options: { collapsible: true, collapsed: false }, fields });

export const list = (name: string, title: string, fields: FieldDefinition[], group?: string, description?: string) =>
  defineField({ name, title, description, type: "array", group, of: [{ type: "object", fields }] });

export const choice = (name: string, title: string, items: { title: string; value: string }[], description?: string) =>
  defineField({ name, title, description, type: "string", options: { list: items } });

export const ICONS = ["Sparkles", "Palette", "Handshake", "Layers", "Shield", "Unlock", "Stethoscope", "Megaphone", "Coins", "BookOpen", "Heart"].map((v) => ({ title: v, value: v }));
export const COLORS = [
  { title: "Purple", value: "purple" },
  { title: "Orange", value: "orange" },
  { title: "Teal", value: "teal" },
  { title: "Lilac", value: "lilac" },
  { title: "Amber", value: "amber" },
  { title: "Mint", value: "mint" },
];
