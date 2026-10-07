"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { SINGLETON_TYPES } from "./sanity/singletons";

/**
 * Pages and settings are one-of-a-kind documents opened by a fixed ID from the
 * Studio structure. Editors can edit and publish them but not delete,
 * duplicate or unpublish them, and cannot create a second copy.
 */
const SINGLETON_ACTIONS = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "qwerise",
  title: "Q We Rise Network",
  basePath: "/studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  document: {
    actions: (input, context) =>
      SINGLETON_TYPES.includes(context.schemaType)
        ? input.filter(({ action }) => action && SINGLETON_ACTIONS.has(action))
        : input,
    newDocumentOptions: (prev, { creationContext }) =>
      creationContext.type === "global" ? prev.filter((i) => !SINGLETON_TYPES.includes(i.templateId)) : prev,
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
