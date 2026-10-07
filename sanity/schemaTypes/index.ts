import type { SchemaTypeDefinition } from "sanity";
import { richText } from "./objects/richText";
import { generalSettings, contactSettings, socialSettings } from "./settings/settings";
import { homePage, aboutPage, programsPage, resourcesPage, contactPage, galleryPage } from "./pages/pages";

export const schemaTypes: SchemaTypeDefinition[] = [
  richText,
  homePage, aboutPage, programsPage, resourcesPage, contactPage, galleryPage,
  generalSettings, contactSettings, socialSettings,
];
