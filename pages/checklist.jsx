import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';

import puzzle1 from '@/assets/puzzles/несправедливость.png';
import puzzle2 from '@/assets/puzzles/отвергнутость.png';
import puzzle3 from '@/assets/puzzles/покинутость.png';
import puzzle4 from '@/assets/puzzles/предательство.png';
import puzzle5 from '@/assets/puzzles/униженность.png';

import s from './checklist.module.css';
import Link from 'next/link';

const CheckList = () => {
  const checkListData = [
    {
      id: 1,
      name: 'ЧЕК-ЛИСТ ОТВЕРГНУТОСТЬ',
      price: '5$',
    },
    {
      id: 2,
      name: 'ЧЕК-ЛИСТ ПОКИНУТОСТЬ',
      price: '5$',
    },
    {
      id: 3,
      name: 'ЧЕК-ЛИСТ ПРЕДАТЕЛЬСТВО',
      price: '5$',
    },
    {
      id: 4,
      name: 'ЧЕК-ЛИСТ НЕСПРАВЕДЛИВОСТЬ',
      price: '5$',
    },
    {
      id: 5,
      name: 'ЧЕК-ЛИСТ УНИЖЕННОСТЬ',
      price: '5$',
    },
    {
      id: 6,
      name: 'ЧЕК-ЛИСТ ПО ВСЕМ ТРАВМАМ',
      price: '20$',
      salePrice: "25$"
    },
  ];

  return (
    <>
      <Head>
        <title>Чек-лист</title>
        <style></style>
      </Head>
      <main className={s.main}>
        <h1 className={s.textBuner}>
          <strong>ПРОЕКТ ТРАВМЫ</strong>
        </h1>
        {checkListData.map(({ id, name, price, salePrice }, idx) => {
          return (
            <div key={id} className={s.checkList}>
              <div className={s.checkListName}>{name}</div>
              <div className={s.checkListBtns}>
                <p className={s.checkListPriceFive}>{price}</p>
                {<p className={s.oldPrice}>{salePrice && salePrice}</p>}
                <Link href={'/form/form'}>
                  <button className={s.listBtn}>КУПИТЬ</button>
                </Link>
              </div>
              <div className='absolute overflow-hidden top-0 left-0 w-full h-full z-[-5]'>
                <Image
                  src={puzzle1}
                  alt={'Несправедливость'}
                  className={`${s.puzzle1} w-[450px] h-auto absolute top-[220px] z-[-1] right-[-150px] rotate-[-30deg]`}
                />
                <Image
                  src={puzzle2}
                  alt={"Отвергнутость"}
                  className={`${s.puzzle2} w-[450px] h-auto absolute top-[454px] left-[-125px]`}
                />
                <Image src={puzzle3} alt={'Покинутость'} className={`${s.puzzle3} w-[450px] h-auto absolute bottom-[-140px] left-[70px]`} />
                <Image
                  src={puzzle4}
                  alt={'Предательство'}
                  className={`${s.puzzle4} w-[450px] h-auto absolute left-[-97px] top-[140px] z-[-2] rotate-[15deg]`}
                />
                <Image
                  src={puzzle5}
                  alt={'Униженность'}
                  className={`${s.puzzle5} w-[450px] h-auto absolute bottom-[-70px] right-[-70px] rotate-[25deg]`}
                />
              </div>
            </div>
          );
        })}
        {/* <p className={s.oldPrice}>399$</p> */}
      </main>
    </>
  );
};

export default CheckList;
