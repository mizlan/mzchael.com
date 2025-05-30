import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => <p className="mb-3 mt-3">{children}</p>,
    h1: ({ children }) => (
      <h1 className="mb-3 ml-[-0.045em] mt-5 text-xl font-semibold">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h1 className="mb-3 ml-[-0.045em] mt-5 text-lg font-semibold">
        {children}
      </h1>
    ),
    code: ({ children }) => (
      <code className="rounded-xs font-jetbrainsmono bg-slate-200 px-1 py-0.5 text-sm text-slate-700">
        {children}
      </code>
    ),
    li: ({ children }) => (
      <li className="mb-3 list-inside list-disc">{children}</li>
    ),
    ...components,
  };
}
