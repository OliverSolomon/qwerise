import { defineArrayMember, defineType } from "sanity";

/** Paragraph text with bold, italic and links. "Quote" is a highlighted pull-quote paragraph. */
export const richText = defineType({
  name: "richText",
  title: "Text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Paragraph", value: "normal" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        annotations: [
          { name: "link", type: "object", title: "Link", fields: [{ name: "href", type: "string", title: "URL" }] },
        ],
      },
    }),
  ],
});
