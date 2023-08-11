import Head from "next/head";
import Image from "next/image";
import { FC } from "react";

import puzzle1 from "@/assets/puzzles/несправедливость.png";
import puzzle2 from "@/assets/puzzles/отвергнутость.png";
import puzzle3 from "@/assets/puzzles/покинутость.png";
import puzzle4 from "@/assets/puzzles/предательство.png";
import puzzle5 from "@/assets/puzzles/униженность.png";
import { Styled } from "@/styled";
import s from "@/pages/guides.module.css";
import Link from "next/link";
import Footer from "@/features/Footer/Footer";

const GuidesPage = () => {
	return (
		<>
			<Head>
				<title>Гайды</title>
				<style></style>
			</Head>
			<main
				className={`relative flex flex-col w-full h-full justify-start items-center`}>
				<>
					<div className={s.isPs}>
						<div
							className={`${s.heading} intro relative w-full h-[192px] mb-[40px]`}>
							<h1 className={`${s.h1} title-main w-full text-[7rem] `}>
								ПРОЕКТ ТРАВМЫ
							</h1>
							<h2 className={`${s.h2} `}>
								ЧТО ЭТО ЗА ТРАВМЫ <br />И С ЧЕМ ИХ ЕДЯТ?
							</h2>
						</div>
						<div
							className={`${s.paragraph} w-[100%] firs text-center tracking-[1px] text-[1.1rem]`}>
							<p>
								БОЛЬШИНСТВО ТРАВМ МЫ ПОЛУЧАЕМ В ДЕТСКОМ ВОЗРАСТЕ, ИМЕННО ПОЭТОМУ
								ПРИЧИНОЙ ТРАВМЫ МОГУТ СТАТЬ НЕЗНАЧИТЕЛЬНЫЕ ВЕЩИ. К ПРИМЕРУ,
								РЕЗКИЕ ВЫСКАЗЫВАНИЯ РОДИТЕЛЕЙ, КОТОРЫЕ ДАЖЕ СТАЛИ «КРЫЛАТЫМИ» В
								НАШЕМ ОБЩЕСТВЕ.
							</p>
							<br />
							<p>
								К СЛОВУ, У КАЖДОГО ЧЕЛОВЕКА ЕСТЬ КАК МИНИМУМ 3 ТРАВМЫ, А ЧАСТО И
								ВСЕ 5, НО ОНИ ИМЕЮТ РАЗНУЮ ВЫРАЖЕННОСТЬ. Я РЕКОМЕНДУЮ ВАМ
								ОЗНАКОМИТЬСЯ С ОПИСАНИЕМ КАЖДОЙ ТРАВМЫ, О ПРИЧИНАХ ЕЕ
								ВОЗНИКНОВЕНИЯ И СПОСОБАМИ РЕШЕНИЯ.
							</p>
							<br />
							<p>
								ПРИОБРЕТАЯ ТРАВМУ, ЧЕЛОВЕК ПОДСОЗНАТЕЛЬНО ВЫРАБАТЫВАЕТ ТАКОЙ
								ПАТТЕРН ПОВЕДЕНИЯ, КОТОРЫЙ (ПО ЕГО МНЕНИЮ) В БУДУЩЕМ ПОМОЖЕТ
								ИЗБЕЖАТЬ ПОВТОРЕНИЯ ПОХОЖЕЙ СИТУАЦИИ. ТОЛЬКО ПАРАДОКС В ТОМ, ЧТО
								ТАКИЕ ПАТТЕРНЫ ПОВЕДЕНИЯ НЕ ЗАЩИЩАЮТ ОТ ПОВТОРА СЦЕНАРИЯ, А
								НАОБОРОТ, ПРИТЯГИВАЮТ ЕГО И С КАЖДЫМ РАЗОМ УСИЛИВАЮТ ГЛУБИНУ
								ТРАВМЫ. КАК СЛЕДСТВИЕ, УХУДШАЕТСЯ ПСИХИЧЕСКОЕ СОСТОЯНИЕ И ОБЩЕЕ
								КАЧЕСТВО ЖИЗНИ, А ДЛИТЕЛЬНОЕ ИГНОРИРОВАНИЕ СВОЕГО СОСТОЯНИЯ
								МОЖЕТ ПРИВЕСТИ К НЕРВНЫМ СРЫВАМ И ДЕПРЕССИЯМ. НУ И КОМУ ЭТО
								НАДО, ДЕВОЧКИ?
							</p>
							<Link href={"/test"}>
								<Styled.Button
									className={`${s.button} w-[150px] h-[60px] mt-[40px] 
								text-[0.9rem] p-[0.4rem]`}>
									ПРОЙТИ ТЕСТ
									<br />1 ШАГ
								</Styled.Button>
							</Link>
						</div>
					</div>
					<div className={s.isMobile}>
						<div className={s.mobpar}>
							<h1>ИНСАЙТИФАЙ</h1>
						</div>
						<div className={s.mobdobro}>
							<h2>Добро пожаловать</h2>

							<p>
								Ваша доставка инсайтов к пошаговому решению общих,
								<br /> но таких важных проблем, полученных из трав. <br />
								О них мало кто говорит потому, что эти проблемы
								<br />
								касаются каждого ежедневно.
							</p>
							<Link href={"/test"}>
								<Styled.Button
									className={`${s.button} w-[150px] h-[60px] mt-[40px] 
								text-[0.9rem] p-[0.4rem]`}>
									ПРОЙТИ ТЕСТ
									<br />1 ШАГ
								</Styled.Button>
							</Link>
						</div>
					</div>
					<div className="absolute overflow-hidden top-0 left-0 w-full h-full z-[-5]">
						<Image
							src={puzzle1}
							alt={"Несправедливость"}
							className={`${s.puzzle1} w-[450px] h-auto absolute top-[220px] z-[-1] right-[-150px] rotate-[-30deg]`}
						/>
						<Image
							src={puzzle2}
							alt={"Отвергнутость"}
							className={`${s.puzzle2} w-[450px] h-auto absolute top-[454px] left-[-125px]`}
						/>
						<Image
							src={puzzle3}
							alt={"Покинутость"}
							className={`${s.puzzle3} w-[450px] h-auto absolute bottom-[-140px] left-[70px]`}
						/>
						<Image
							src={puzzle4}
							alt={"Предательство"}
							className={`${s.puzzle4} w-[450px] h-auto absolute left-[-97px] top-[140px] z-[-2] rotate-[15deg]`}
						/>
						<Image
							src={puzzle5}
							alt={"Униженность"}
							className={`${s.puzzle5} w-[450px] h-auto absolute bottom-[-70px] right-[-70px] rotate-[25deg]`}
						/>
					</div>
				</>
			</main>
		</>
	);
};

export default GuidesPage;
