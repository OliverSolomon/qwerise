import type { StructureBuilder, StructureResolver } from "sanity/structure";
import { BookIcon, CogIcon, DocumentsIcon, EnvelopeIcon, HeartIcon, HomeIcon, ImageIcon, InfoOutlineIcon, RocketIcon, UsersIcon } from "@sanity/icons";

const single = (S: StructureBuilder, title: string, type: string, icon: typeof HomeIcon) =>
  S.listItem().title(title).icon(icon).child(S.document().schemaType(type).documentId(type));

/** Q We Rise Network: Studio navigation, ordered like the website. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Q We Rise Content")
    .items([
      S.listItem().title("Pages").icon(DocumentsIcon).child(
        S.list().title("Pages").items([
          single(S, "Home", "homePage", HomeIcon),
          single(S, "About Us", "aboutPage", InfoOutlineIcon),
          single(S, "Programs", "programsPage", HeartIcon),
          single(S, "Resources & FAQs", "resourcesPage", BookIcon),
          single(S, "Contact", "contactPage", EnvelopeIcon),
          single(S, "Gallery", "galleryPage", ImageIcon),
        ])
      ),
      S.divider(),
      S.listItem().title("Settings").icon(CogIcon).child(
        S.list().title("Site settings").items([
          single(S, "General (SEO, menu, footer)", "generalSettings", RocketIcon),
          single(S, "Contact details", "contactSettings", EnvelopeIcon),
          single(S, "Social links", "socialSettings", UsersIcon),
        ])
      ),
    ]);
