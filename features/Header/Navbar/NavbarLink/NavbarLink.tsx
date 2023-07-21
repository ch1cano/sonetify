import Link from "next/link";
import { FC } from "react";

import { openSans } from "@/fonts/fonts";
import { NavbarLinkProps } from "./models";
import { useSelectedLink } from "@/hooks/useSelectedLink";

const NavbarLink: FC<NavbarLinkProps> = ({ href, text }) => {
	const { selectedLink, setSelectedLink } = useSelectedLink();
	return (
		<Link
			href={href}
			className={`whitespace-nowrap px-2 py-1 font-[500] text-[1.2rem] text-center ${
				openSans.className
			} ${selectedLink === href ? "text-black" : ""}`}
			onClick={() => setSelectedLink(href)}>
			{text}
		</Link>
	);
};

export default NavbarLink;
