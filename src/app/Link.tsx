import Link from "next/link";

interface SiteLinkProps {
  href: string;
  children: React.ReactNode;
}

const SiteLink = ({ href, children }: SiteLinkProps) => {
  return (
    <Link
      target="_blank"
      className="underline decoration-amber-500 underline-offset-2 hover:bg-yellow-500/20 dark:decoration-current dark:hover:bg-white/10"
      href={href}
    >
      {children}
    </Link>
  );
};

export default SiteLink;
