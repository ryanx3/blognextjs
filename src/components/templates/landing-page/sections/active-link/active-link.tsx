'use client'
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type ActiveLink = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLink) => {
  const linkPath = typeof href === "string" ? href : href.pathname
  const pathname = usePathname();
  const isActive = pathname === linkPath || linkPath?.startsWith(`${linkPath}/`)

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        "text-action-sm font-medium transition-colors hover:text-blue-500",
        isActive ? "text-blue-200" : "text-gray-100"
      )}
    >
      {children}
    </Link>
  );
};
