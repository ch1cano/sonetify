import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import s from "@/pages/test.module.css";
import { useTestResult } from "@/hooks/useTestResult";
import { TestResult } from "@/models/testResult";
import Footer from "@/features/Footer/Footer";

const allQuestions = [
	`Ты думаешь, что ты нежелательный ребенок или твои родители хотели ребенка другого пола`,
	`Ты часто ищешь одобрения/поддержку/внимание в других людях.`,
	`Ты прощаешь очень многое любимым людям, терпишь их поведение, даже если оно тебе не нравится, стараешься сохранить отношения.`,
	`Тебя кидает из крайности в крайность между "я без тебя умру" и "мне никто не нужен".`,
	`Материальное не так важно для тебя: деньги или вещи не приносят особой радости.`,
	`Ты смахиваешь на отшельника, у тебя мало друзей, ты стараешься быть незаметным в компании.`,

	`В детстве тебе уделяли недостаточно внимания: родители часто были на работе/оставляли тебя/кто-то из родителей погиб, когда ты был маленьким.`,
	`Тебе всегда страшно, что тебя бросят.`,
	`Ты все время спрашиваешь советы и мнения относительно себя и своих действий/ждешь похвалу.`,
	`Тебе тяжело без отношений. Ты стремишься к тому, чтобы стать "одним целым" с человеком.`,
	`Твоя цель – быть нужным. Тебе нравится ощущать свою полезность.`,
	`Ты все время драматизируешь, приукрашиваешь, обижаешься и часто плачешь.`,
	`Ты не воспринимаешь отказы.`,

	`Тебя часто критиковали/стыдили/стеснялись за тебя.`,
	`Ты часто думаешь, что не в силах справиться с той или иной ситуацией.`,
	`Ты часто берешь вину других на себя.`,
	`Ты очень редко проявляешь эмоции, ты скромен
    и неразговорчив.`,
	`Тебе страшно ранить других людей.`,
	`У тебя очень сильный самоконтроль, и ты винишь себя, если не сдерживаешься.`,

	`В детстве ты видел измену родителя/при разводе родителей ты слышал от другого родителя: "мама/папа ушел(а) к другим, какой он плохой".`,
	`Ты хочешь все контролировать, но очень не любишь, когда контролируют тебя.`,
	`Ты стремишься к идеальности/самостоятельности.`,
	`Тебе страшно принимать новые решения, часто метаешься между многими выборами, не понимая, какой из них самый лучший.`,
	`Ты хочешь занимать доминирующую позицию в отношениях.`,
	`Тебе нравится точность, пунктуальность, ответственность в себе и других.`,

	`Тебе часто кажется, что люди не оправдывают
    твоих ожиданий.`,
	`В детстве ты думал, что твои родители больше любят другого ребенка (твоего брата/сестру, их племянника и т.д.).`,
	`Ты считаешь, что любовь надо заслужить.`,
	`Тебе часто говорят, что ты выглядишь как пофигист, человек, который не заморачивается.`,
	`Ты веришь в справедливость, любишь делить на "хорошее" и "плохое", "честное" и "нечестное".`,
	`Ты склонен к трудоголизму, осуждаешь себя за бесцельно проведенное время.`,
];

const topicQuestions: Record<TestResult, string[]> = {
	отвергнутость: [
		`Ты думаешь, что ты нежелательный ребенок или твои родители хотели ребенка другого пола`,
		`Ты часто ищешь одобрения/поддержку/внимание в других людях.`,
		`Ты прощаешь очень многое любимым людям, терпишь их поведение, даже если оно тебе не нравится, стараешься сохранить отношения.`,
		`Тебя кидает из крайности в крайность между "я без тебя умру" и "мне никто не нужен".`,
		`Материальное не так важно для тебя: деньги или вещи не приносят особой радости.`,
		`Ты смахиваешь на отшельника, у тебя мало друзей, ты стараешься быть незаметным в компании.`,
	],
	покинутость: [
		`В детстве тебе уделяли недостаточно внимания: родители часто были на работе/оставляли тебя/кто-то из родителей погиб, когда ты был маленьким.`,
		`Тебе всегда страшно, что тебя бросят.`,
		`Ты все время спрашиваешь советы и мнения относительно себя и своих действий/ждешь похвалу.`,
		`Тебе тяжело без отношений. Ты стремишься к тому, чтобы стать "одним целым" с человеком.`,
		`Твоя цель – быть нужным. Тебе нравится ощущать свою полезность.`,
		`Ты все время драматизируешь, приукрашиваешь, обижаешься и часто плачешь.`,
		`Ты не воспринимаешь отказы.`,
	],
	униженность: [
		`Тебя часто критиковали/стыдили/стеснялись за тебя.`,
		`Ты часто думаешь, что не в силах справиться с той или иной ситуацией.`,
		`Ты часто берешь вину других на себя.`,
		`Ты очень редко проявляешь эмоции, ты скромен
    и неразговорчив.`,
		`Тебе страшно ранить других людей.`,
		`У тебя очень сильный самоконтроль, и ты винишь себя, если не сдерживаешься.`,
	],
	предательство: [
		`В детстве ты видел измену родителя/при разводе родителей ты слышал от другого родителя: "мама/папа ушел(а) к другим, какой он плохой".`,
		`Ты хочешь все контролировать, но очень не любишь, когда контролируют тебя.`,
		`Ты стремишься к идеальности/самостоятельности.`,
		`Тебе страшно принимать новые решения, часто метаешься между многими выборами, не понимая, какой из них самый лучший.`,
		`Ты хочешь занимать доминирующую позицию в отношениях.`,
		`Тебе нравится точность, пунктуальность, ответственность в себе и других.`,
	],
	несправедливость: [
		`Тебе часто кажется, что люди не оправдывают
		твоих ожиданий.`,
		`В детстве ты думал, что твои родители больше любят другого ребенка (твоего брата/сестру, их племянника и т.д.).`,
		`Ты считаешь, что любовь надо заслужить.`,
		`Тебе часто говорят, что ты выглядишь как пофигист, человек, который не заморачивается.`,
		`Ты веришь в справедливость, любишь делить на "хорошее" и "плохое", "честное" и "нечестное".`,
		`Ты склонен к трудоголизму, осуждаешь себя за бесцельно проведенное время.`,
	],
};

const TestPage: FC = () => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [currentQuestion, setCurrentQuestion] = useState<string>("");
	const router = useRouter();
	const testResult = useTestResult();
	const shuffledQuestions = allQuestions.sort((a, b) => 0.5 - Math.random());
	useEffect(() => {
		setCurrentQuestion(shuffledQuestions[currentQuestionIndex]);
	  }, [currentQuestionIndex, shuffledQuestions]);
	return (
		<>
			<main className="w-full h-full flex flex-col intro justify-center items-center gap-4 mb-10">
				<div className="w-full h-full relative m-auto flex flex-col mt-[170px] content-center items-center w-70 h-10 mb-40">
					<h2
						className={s.testh2 + "text-center my-14 absolute content-center items-center"}>
						НА ОПРЕДЕЛЕНИЕ ВАШЕЙ ТРАВМЫ
					</h2>
					<h1
						className={s.test + " title-main m-auto top-0 opacity-10 tracking-widest"}>
						ТЕСТ
					</h1>
				</div>
				<span
					className={`${s.ques} text-brown text-[1.7rem] w-full text-center text-yellow-600 opacity-50`}>
					{currentQuestion}
				</span>
				<div className="flex flex-col gap-[45px] mt-[28px]">
					<button
						onClick={() => {
							Object.keys(topicQuestions).forEach((key) => {
								const testResultKey = key as TestResult;
								if (topicQuestions[testResultKey].includes(currentQuestion)) {
									testResult.addPoint(testResultKey);
								}
							});
							setCurrentQuestionIndex((prev) => prev + 1);
							if (currentQuestionIndex >= shuffledQuestions.length - 1) {
								router.push("/result");
								return;
							}
						}}
						className={s.yesno + " px-10 py-4 w-[150px] rounded-[10px] bg-gray border-2 bg-gray-200"}>
						ДА
					</button>
					<button
						onClick={() => {
							setCurrentQuestionIndex((prev) => prev + 1);
							if (currentQuestionIndex >= shuffledQuestions.length - 1) {
								router.push("/result");
								return;
							}
						}}
						className={s.yesno + " px-10 py-4 w-[150px] rounded-[10px] bg-gray border-1 bg-gray-200"}>
						НЕТ
					</button>
				</div>
				<Footer />
			</main>
		</>
	);
};

export default TestPage;


