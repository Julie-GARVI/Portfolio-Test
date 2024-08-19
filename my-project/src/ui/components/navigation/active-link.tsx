import clsx from "clsx";

//NEXT
import Link from "next/link";

//HOOKS
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
    href: string;
    children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: Props) => {
    const router = useRouter();
    const isActive: boolean = useMemo(() => router.pathname === href, [router.pathname, href]);

    return (
        <Link
            href={href}
            className={clsx(
                isActive && "relative inline-block"
            )}
        >
            {children}
            <span
                className={clsx(
                    "absolute bottom-0 left-0 block h-[3px] bg-primary-light animate",
                    isActive ? "w-full" : "w-0" 
                )}
            />
        </Link>
    );
};