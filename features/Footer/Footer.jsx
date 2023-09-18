import React from "react";
import s from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
	return (
		<div className={s.footer}>
			<div>
				Индивидуальный предприниматель Репринец Софии Юрьевна
				<br />
				ОГРНИП 323774600181956 <br />
				ИНН 972902172811 <br /> Обработка персональных данных <br /> Согласие
				реклама
			</div>
			<div>
				<Link href={"/oferta"}>
					<div className={s.oferta}>Оферта</div>
				</Link>
				<Link href={"/soglasieReklama"}>
					<div className={s.oferta}>Согласие на рекламу</div>
				</Link>
			</div>
			<div>
				Юридический адрес: 119602, г. Москва, <br />
				e-mail: olyasonya1205@icloud.com
			</div>
		</div>
	);
};

export default Footer;
