import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLink = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLink) => {
  const router = useRouter();
  const isCurrentPath =
    router.asPath === href ||
    router.asPath === rest.as

  return (
    <Link
      href={href}
      className={cn(
        "text-action-sm font-medium transition-colors hover:text-blue-500",
        isCurrentPath ? "text-blue-200" : "text-gray-100"
      )}
    >
      {children}
    </Link>
  );
};
