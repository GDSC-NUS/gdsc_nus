import clsx from "clsx";
import NextLink from "next/link";
import { ReactNode } from "react";

interface LinkProps {
  link?: string;
  openInNewTab?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function Link({
  link,
  openInNewTab,
  className,
  children,
}: LinkProps) {
  const child = (
    <div className={clsx("!cursor-pointer", className)}>{children}</div>
  );

  if (!link) return child;

  const isExternal = link.startsWith("http://") || link.startsWith("https://");
  if (isExternal || openInNewTab)
    return (
      <a
        href={link}
        target={openInNewTab ? "_blank" : undefined}
        rel="noreferrer"
      >
        {child}
      </a>
    );

  return <NextLink href={link}>{child}</NextLink>;
}
