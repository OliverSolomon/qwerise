import { createImageUrlBuilder } from "@sanity/image-url";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

/* eslint-disable @typescript-eslint/no-explicit-any */
export const imgUrl = (source: any, width = 1600): string =>
  source?.asset ? builder.image(source).width(width).auto("format").url() : "";

export const imgAlt = (source: any, fallback = ""): string => source?.alt || fallback;
