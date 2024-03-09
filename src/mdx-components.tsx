import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <p className="mt-3 mb-3">{children}</p>,
    h1: ({ children }) => (
      <h1 className="font-generalsans uppercase tracking-wide text-xl font-black ml-[-0.045em] mb-3 mt-5">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h1 className="font-generalsans uppercase tracking-wide text-lg font-black ml-[-0.045em] mb-3 mt-5">
        {children}
      </h1>
    ),
    code: ({ children }) => (
      <code className="font-jetbrainsmono bg-rosePearl-700/20 px-1 py-0.5 rounded-sm text-sm">
        {children}
      </code>
    ),
    li: ({ children }) => (
      <li className="list-disc list-inside mb-3">{children}</li>
    ),
    ...components,
  };
}
