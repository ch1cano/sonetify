import Head from "next/head";
import { FC } from "react";
import s from "./About.module.css";
import aboutPhoto from "../assets/landingPhoto/aboutPhoto.jpg";
import Image from "next/image";

const AboutPage: FC = () => {
  return (
    <>
      <Head>
        <title>Обо мне</title>
      </Head>
      <main className="w-full h-full d-flex">
        <div className={s.wrapper}>
          <div className={s.photo__block}>
            <Image
              src={aboutPhoto}
              className={s.aboutPhoto}
              alt="SONETIFY"
              width={600}
            />
            <p className={s.img__text}>
              <strong>РЕПРИНЕЦ СОФИЯ</strong>
            </p>
            <div className={s.text__who__am__i_mobile}>
              <p>Ваш психолог</p>
              <p>Друг советник</p>
              <p>И преданный слушатель</p>
            </div>
          </div>

          <div className={s.text__block}>
            <h1>Sonetify</h1>
            <div className={s.text__about}>
              <div className={s.text__education}>
                <h3>
                  <strong>Образование</strong>
                </h3>
                <p>ПРЕЗИДЕНТСКАЯ АКАДЕМИЯ РАНХИГС</p>
                <p>ФАКУЛЬТЕТ: ПСИХОЛОГИЧЕСКОЕ КОНСУЛЬТИРОВАНИЕ И КОУЧИНГ</p>
              </div>

              <div className={s.text__telegram}>
                <h3>
                  <strong>Telegram</strong>
                </h3>
                <p>
                  <a href="https://t.me/sonetify" target="blank">
                    @SONETIFY
                  </a>
                </p>
              </div>
              
            </div>
            <div className={s.text__who__am__i}>
              <p>Ваш психолог</p>
              <p>Друг советник</p>
              <p>И преданный слушатель</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
