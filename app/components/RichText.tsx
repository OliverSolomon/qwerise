import { PortableText, type PortableTextComponents } from "@portabletext/react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function RichText({ value, className = "", quoteClassName, strongClassName = "" }: { value: any; className?: string; quoteClassName?: string; strongClassName?: string }) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => <p className={className}>{children}</p>,
      blockquote: ({ children }) => (
        <p className={quoteClassName ?? "border-l-4 border-[#7B2CBF] pl-6 italic text-gray-600 bg-purple-50/50 py-2 rounded-r-lg"}>{children}</p>
      ),
    },
    marks: {
      strong: ({ children }) => <strong className={strongClassName}>{children}</strong>,
      link: ({ value, children }) => (
        <a href={value?.href} className="underline" target="_blank" rel="noopener noreferrer">{children}</a>
      ),
    },
  };
  return <PortableText value={value} components={components} />;
}
