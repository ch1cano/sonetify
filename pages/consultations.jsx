import Head from "next/head";
import s from "./consultations.module.css";
import Image from "next/image";
import consultationsPhoto from "@/assets/landingPhoto/consulationsPhoto.png";
import logo from "@/assets/landingPhoto/logo.png";
import Link from "next/link";

const ConsultationsPage = () => {
	return (
		<>
			<Head>
				<title>Консультации</title>
			</Head>
			<main className={s.main}>
				<section className={s.section}>
					<Image className={s.image} src={consultationsPhoto} alt="" />
					<div className={s.contentСontainer}>
						<Image className={s.logo} src={logo} alt="by sonetify" />
						<h1 className={s.description}>
							получить более
							<br /> глубокий и<br />
							качественный подход <br />к решению ваших <br />
							проблем можно путем <br />
							записи на личную <br />
							консультацию
						</h1>
					</div>
					<div className={s.buttonContainer}>
						<p className={s.oldPrice}>399$</p>
						<Link href="/form/form">
							<button className={s.button} type="button">
								записаться за 199$
							</button>
						</Link>
					</div>
				</section>
			</main>
		</>
	);
};

export default ConsultationsPage;
