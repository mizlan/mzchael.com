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
    pre: ({ children }) => (
      <pre className="my-3 overflow-x-auto rounded-xs bg-slate-200 p-3 font-jetbrainsmono text-sm text-slate-700 [&>code]:bg-transparent [&>code]:p-0">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-3 border-l-2 border-slate-300 pl-4 text-slate-500">
        {children}
      </blockquote>
    ),
    li: ({ children }) => (
      <li className="mb-3 list-inside list-disc">{children}</li>
    ),
    ...components,
  };
}
