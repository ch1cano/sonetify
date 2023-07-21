"use client"
import Image from "next/image";
import { FC } from "react";
import {useState} from "react"

import Navbar from "./Navbar/Navbar";
import { NavbarLinkProps } from "./Navbar/NavbarLink/models";
import logoImage from "@/assets/logo.png";

const links: NavbarLinkProps[] = [
	{
		href: "/",
		text: "ГЛАВНАЯ",
	},

	{
		href: "/about",
		text: "О @SONETIFY",
	},
	{
		href: "/guides",
		text: "ГАЙДЫ",
	},
	{
		href: "/consultations",
		text: "КОНСУЛЬТАЦИИ",
	},
	{
		href: "/checklist",
		text: "ЧЕК-ЛИСТ",
	},
];



const Header: FC = () => {
	return (
		<header className="block lg:flex justify-between px-5 w-full items-center h-fit background-slate-100">
			<Image src={logoImage} className="logo" alt="Logo image" />
			<Navbar links={links} />
		</header>
	);
};

export default Header;
