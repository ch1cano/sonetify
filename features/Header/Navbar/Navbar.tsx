import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useState } from "react";
import { useSelectedLink } from "@/hooks/useSelectedLink";
import { NavbarProps } from "./models";
import NavbarLink from "./NavbarLink/NavbarLink";
import Image from "next/image";
import logoImage from "@/assets/logo.png";

const Navbar: FC<NavbarProps> = ({ links }) => {
	const [navActive, setNavActive] = useState(true);
	const { setSelectedLink } = useSelectedLink();
	const router = useRouter();
	useEffect(() => {
		setSelectedLink(router.asPath);

		const menu = document.querySelector(".nav__menu-bar");
		if (menu) {
			menu.addEventListener("click", () => {
				menu.classList.toggle("active");
				menu.classList.remove("no-animation");
			});
		}
	}, []);

	const togleNavBar = () => setNavActive((prev) => !prev)

	return (
		<nav className="nav">
			<div
				onClick={() => setNavActive(prev=>!prev)}
				className="nav__menu-bar z-100">
				<div className="small"></div>
				<div className="big"></div>
				<div className="small"></div>
			</div>
			<ul className={`${navActive ? "active" : " "} nav__menu-list`}>
				{links.map((linkProps) => (
					<li
						onClick={togleNavBar}
						key={linkProps.text}
						className="flex text-black-400 hover:text-orange-400 transition delay-100">
						<NavbarLink {...linkProps} />
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
