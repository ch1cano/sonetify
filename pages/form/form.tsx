import React, { useState } from "react";
import s from "./form.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";

import puzzle1 from "@/assets/puzzles/несправедливость.png";
import puzzle2 from "@/assets/puzzles/отвергнутость.png";
import puzzle3 from "@/assets/puzzles/покинутость.png";
import puzzle4 from "@/assets/puzzles/предательство.png";
import puzzle5 from "@/assets/puzzles/униженность.png";
interface MyForm {
	email: string;
	tel: string;
}

const Form = () => {
	const [error, setError] = useState<string>("");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<MyForm>({
		defaultValues: {},
	});

	const submit: SubmitHandler<MyForm> = (data) => {
		console.log(data);
		setError("");
		// Дополнительная логика обработки, отправка данных на сервер
	};

	const onSubmit = handleSubmit((data) => {
		if (data.email.length < 3 || data.tel.length < 10) {
			setError("Email и телефон должны быть заполнены полностью");
		} else {
			submit(data);
		}
	});

	return (
		<div className={s.wrapper}>
			<div className={s.textBuner}>
				<strong>SONETIFY</strong>
			</div>
			<form className={s.wrapperForm} onSubmit={onSubmit}>
				<div className={s.desc}>
					<p>
						<strong>Шаг 3</strong>
						<br />
						Заполните поля ниже, введите ваш актуальный адрес почты и номер
						телефона. После оплаты ваш заказ прийдет к вам на почту. Доставка
						инсайтов уже спешит к вам!{" "}
					</p>
				</div>
				<div className={s.inputName}>Email:</div>
				<input
					className={s.email}
					type="email"
					{...register("email", {
						required: true,
					})}
				/>
				<div className={s.inputName}>Телефон:</div>
				<input
					className={s.tel}
					type="tel"
					placeholder="+7(_ _ _) _ _ _ - _ _ - _ _"
					{...register("tel", {
						required: true,
						minLength: 3,
					})}
				/>
				{errors.tel && (
					<span className={s.error}>
						{"Email и телефон должны быть заполнены полностью"}
					</span>
				)}
				<button className={s.formBtn}>Отправить</button>
			</form>
			<div className="absolute overflow-hidden top-0 left-0 w-full h-full z-[-5]">
				<Image
					src={puzzle1}
					alt={"Несправедливость"}
					className={`${s.puzzle1} w-[450px] h-auto absolute top-[220px] z-[-1] right-[-150px] rotate-[-30deg]`}
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
		</div>
	);
};

export default Form;
