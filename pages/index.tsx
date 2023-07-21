import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import s from "./styles.module.css";
import logo from "@/assets/logo.png";
import { useIsPc } from "@/hooks/useIsPc";
import { isMobile } from "react-device-detect";

const HomePage: FC = () => {
	// const isPc = useIsPc();
	return (
		<>
			<Head>
				<title></title>
			</Head>
			<main className={s.main}>
				<div className={s.mainWrapper}>
					<h1 className={s.mainWrapperBack}>ИНСАЙТИФАЙ</h1>
					<p className={s.mainWrapperInfo}>
						УНИКАЛЬНЫЕ МЕТОДЫ <br />
						РЕЗУЛЬТАТИВНЫЕ ГАЙДЫ <br />
						РЕШЕНИЕ ПРОБЛЕМ <br />
						...И САМОЕ ГЛАВНОЕ - <br />
						ИНСАЙТЫ
					</p>
				</div>

				<Image src={logo} alt="Logo image" className={s.mainWrapperImg} />
			</main>
		</>
	);
};

export default HomePage;
