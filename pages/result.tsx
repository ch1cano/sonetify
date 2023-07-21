import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";

import finger from '@/assets/results/finger.png';
import fingerTransparent from '@/assets/results/finger_transparent.png';
import girl from '@/assets/results/girl.png';
import groupOfPeople from '@/assets/results/group_of_people.png';
import hand from '@/assets/results/hand.png';
import hands from '@/assets/results/hands.png';
import heart from '@/assets/results/heart.png';
import man from '@/assets/results/man.png';
import { useIsPc } from "@/hooks/useIsPc";
import { useTestResult } from "@/hooks/useTestResult";
import { TestResult } from "@/models/testResult";
import { Styled } from "@/styled";
import Link from "next/link";

import s from './result.module.css'

type ResultPageResult = {
  title: string;
  description: ReactNode;
  src: StaticImageData;
}

const resultTexts = new Map<TestResult, ResultPageResult>([
  ['отвергнутость', {
    title: 'Ты был отвергнут',
    description: <>
      …но это <span className="font-[700]">решаемо</span>! Я приготовила для тебя чек-лист, в котором ты узнаешь, какие <span className="font-[700]">триггеры</span> стоят за
      травмой отвергнутого, как то, что ты не веришь в свою <span className="font-[700]">ценность</span> может разрушить твою жизнь, как наладить
      отношения, если ты катаешь на качелях и себя, и других, при чем здесь вообще мама и многое другое. А в конце я
      дам тебе <span className="font-[700]">пошаговое руководство</span>, где расскажу, как с концами <span className="font-[700]">забыть про отвергнутость</span>. У тебя все обязательно получится,
      главное начать.
    </>,
    src: man,
  }],
  ['предательство', {
    title: 'Тебя предали…',
    description: <>
      …но с этого момента никто <span className="font-[700]">не захочет поступить</span> так с тобой, обещаю! Я создала для тебя чек-лист, где расскажу тебе, почему <span className="font-[700]">
        строить
        ожидания невыгодно
      </span>, как научиться <span className="font-[700]">качественно жить</span> сегодняшним днем, кто такие Эдип и Электра, при чем здесь древние люди и
      многое другое. Напоследок я создала для тебя <span className="font-[700]">пошаговое руководство</span> по тому, как навсегда распрощаться с этой травмой и выйти
      на <span className="font-[700]">новый уровень</span> во всех сферах и смыслах.
    </>,
    src: heart,
  }],
  ['несправедливость', {
    title: 'С тобой были несправедливы…',
    description: <>
      …но теперь ты забудешь о подобных ситуациях! Я создала для тебя чек-лист, в котором ты узнаешь,
      почему на самом деле <span className="font-[700]">мир — это не сборище лицемеров</span>, как мы создаем иллюзорные миры, почему ты сам важнее, чем
      то, что ты делаешь, причем здесь снежная королева, и многое другое. На десерт я оставила <span className="font-[700]">пошаговое руководство</span>,
      благодаря которому ты узнаешь конкретные <span className="font-[700]">действия</span>, которые приведут тебя к <span className="font-[700]">созданию сказки</span> под названием жизнь,
      где нет места несправедливости и холоду.
    </>,
    src: finger,
  }],
  ['униженность', {
    title: 'Тебя стыдили и унижали…',
    description: <>
      …но с этого момента это будет <span className="font-[700]">непозволительно</span>! Я создала для тебя чек-лист, где расскажу тебе, почему сравнение с <span className="font-[700]">«сыном маминой подруги»</span>
      губительно для нашей психики, почему ты испытываешь <span className="font-[700]">чувство вины</span>, мчишься всем на помощь, как мы сами создаем себе трудности и
      многое другое. На десерт я оставила подробный <span className="font-[700]">план действий и упражнений</span>, которые помогут тебе полностью переписать старый опыт
      и создать новое, <span className="font-[700]">счастливое</span> <span className="font-[700]">будущее</span>. Имея под рукой этот чек-лист, ты просто не сможешь не услышать, как в
      твою дверь стучится <span className="font-[700]">счастье и легкость</span>.
    </>,
    src: hands,
  }],
  ['покинутость', {
    title: 'Ты ощущал себя покинутым, неважным…',
    description: <>
      …но больше не будешь! Я приготовила для тебя чек-лист, где я подробно расскажу, <span className="font-[700]">как</span> и <span className="font-[700]">почему</span> ты испытал такое
      чувство, как детская травма переросла в <span className="font-[700]">зависимость от людей</span>, при чем тут зеркало и многое другое. А в конце
      тебя ждет <span className="font-[700]">подарок</span> – пошаговый план действий для избавления от ощущения покинутости и жертвенности в отношениях.
      <span className="font-[700]">Ты на половине пути к глобальному улучшению своей жизни</span>.
    </>,
    src: girl,
  }],
])

const ResultPage: FC = () => {
  const isPc = useIsPc();
  const { testResult } = useTestResult();
  const testResultName = Object.keys(testResult).reduce<TestResult>((largest, currentKey) => {
    const key = currentKey as TestResult;
    const currentLargest = largest as TestResult;
    return testResult[key] > testResult[currentLargest] ? key : largest;
  }, 'отвергнутость');
  const resultInfoByName = resultTexts.get(testResultName);
  return (
    <>
      <Head>
        <title>{resultInfoByName?.title}</title>
      </Head>
      {isPc
        ? <main className="flex w-full h-full flex-col justify-start items-center">
          <div className="relative h-[100px] mt-[90px] intro">
            <h1 style={{padding: 20, }} className={`${testResultName === 'несправедливость'}`}>
              <div className={s.pokinyt}>{testResultName.toUpperCase()}</div>
            </h1>
            <h2 className="title-secondary inset-0 m-auto">
              {['несправедливость', 'предательство'].includes(testResultName)
                ? <Image
                  className="inset-0 m-auto h-[100px] w-auto"
                  src={testResultName === 'предательство'
                    ? groupOfPeople
                    : fingerTransparent}
                  alt="Result image"
                />
                : ''}
              {resultInfoByName?.title.toUpperCase()}
            </h2>
          </div>
          <p className="firs text-[1.2rem] mt-[50px] max-w-[45%] leading-[1.8rem] text-center w-full">
            {resultInfoByName?.description}
          </p>
          <Link href={"/checklist"}>
          <Styled.Button 
          className="mt-[70px] text-[1rem] px-[20px] py-[7px]">
            ЛОВИ ИНСАЙТЫ <br /> 2 ШАГ
          </Styled.Button>
          </Link>
          {testResultName === 'униженность'
            ? <div className="overflow-hidden absolute w-full h-full left-0 top-0 z-[-5]">
              <Image
                src={hand}
                alt="Hand image"
                className={`${s.image}absolute top-[700px] right-[0px] w-[180px] h-auto rotate-[-55deg]`}
              />
              <Image
                src={hand}
                alt="Hand image"
                className={`${s.image}absolute top-[230px] right-[0px] w-[180px] h-auto rotate-[-115deg]`}
              />
              <Image
                src={hand}
                alt="Hand image"
                className={`${s.image}absolute top-[230px] left-[0px] w-[180px] h-auto scale-x-[-1] rotate-[115deg]`}
              />
              <Image
                src={hand}
                alt="Hand image"
                className={`${s.image}absolute top-[700px] left-[0px] w-[180px] h-auto scale-x-[-1] rotate-[55deg]`}
              />
            </div>
            : ''}
          {['покинутость', 'отвергнутость'].includes(testResultName)
            ? <Image
              className="absolute right-[200px] bottom-[00px]"
              src={resultInfoByName?.src ?? ""}
              alt="Result image"
            />
            : ''}
        </main>
        : <main className="flex w-full flex-grow flex-col justify-end items-center gap-5">
          <div className='flex flex-col justify-center items-center'>
            <Image
              priority
              className="w-auto h-[500px] sm:h-[500px]"
              alt="result image"
              src={resultInfoByName?.src ?? girl}
            />
            <h2 className={`font-bold text-2rem flex flex-col justify-center items-center intro`}>
              <p className="bg-[#fbff00] p-1 rounded-[8px] shadow-md">
                {resultInfoByName?.title}
              </p>
            </h2>
          </div>
          <p className="w-[90%] text-[0.6rem] text-center">
            {resultInfoByName?.description}
          </p>
          <Link href={"/checklist"}>
          <Styled.Button className="text-[0.9rem] px-[20px] py-[7px] p-[0.4rem] mb-[20px] sm:mb-[60px]">
            ЛОВИ ИНСАЙТЫ <br /> 2 ШАГ
          </Styled.Button>
          </Link>
        </main>}
    </>
  )
}

export default ResultPage;