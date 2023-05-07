import React from 'react';
import cn from 'classnames';

import section1Styles from './RAPPERSKAYA1_section1.module.scss';
import styles from './RAPPERSKAYA1.module.scss';

function renderSection1(props) {
  return (
    <section className={section1Styles.section1}>
      <img
        src={require('assets/2b7f1e01bf33027d95104cc9437a337f.png')}
        alt="alt text"
        className={section1Styles.image1}
      />
      <h3 className={section1Styles.subtitle}>
        Алия Молдогунова Советская девушка-снайпер, в годы Великой Отечественной войны служила в 54-й отдельной
        стрелковой бригаде 22-й армии 2-го Прибалтийского фронта, ефрейтор. Герой Советского Союза
      </h3>
      <h2 className={section1Styles.medium_title}>Алия Молдогулова</h2>
      <img
        src={require('assets/e84352966e20e8dc035ca233ac998eeb.png')}
        alt="alt text"
        className={section1Styles.image2}
      />
      <h3 className={section1Styles.subtitle1}>
        Людмила Павличенко Женщина-снайпер 25-й Чапаевской стрелковой дивизии Рабоче-крестьянской Красной армии. Герой
        Советского Союза. После окончания Великой Отечественной войны до 1956 года служила офицером Главного штаба
        Военно-морского флота СССР в звании майора береговой службы
        <br />
      </h3>
      <h2 className={section1Styles.medium_title1}>Людмила Павличенко</h2>
      <h3 className={section1Styles.subtitle2}>
        Роза Шанина Советский одиночный снайпер отдельного взвода снайперов-девушек 3-го Белорусского фронта, кавалер
        ордена Славы; одна из первых женщин-снайперов, удостоенных этой награды. Была известна способностью вести точную
        стрельбу по движущимся целям дуплетом
      </h3>
      <h2 className={section1Styles.medium_title2}>Роза Шанина</h2>
      <img
        src={require('assets/04839f5ddd79d0bad57f6dee8b72b788.png')}
        alt="alt text"
        className={section1Styles.image3}
      />

      <div className={section1Styles.group}>
        <div className={section1Styles.rect} />
        <h1 className={section1Styles.big_title}>«Женщина-снайпер»</h1>
      </div>

      <div className={section1Styles.rect1} />
      <img
        src={require('assets/0a27eaff9b3287136a206a41a3c1d8b0.png')}
        alt="alt text"
        className={section1Styles.image4}
      />
      <h3 className={section1Styles.subtitle3}>
        Нина Ширяева советский офицер-танкист, участница Великой Отечественной войны. В годы войны — командир танка Т-34
        237-й танковой бригады, капитан. Родилась 15 августа 1922 года в городе Владивосток в семье военного.
      </h3>
      <h2 className={section1Styles.medium_title3}>Нина Ширяева</h2>
      <h2 className={section1Styles.medium_title4}>Ирина Левченко</h2>
      <img
        src={require('assets/a8ff21362160eb866c6a198e7444c5b2.png')}
        alt="alt text"
        className={section1Styles.image5}
      />
      <h3 className={section1Styles.subtitle4}>
        Ирина Левченко советский офицер, участница Великой Отечественной войны, Герой Советского Союза (1965). Гвардии
        подполковник. Первая советская женщина, удостоенная медали имени Флоренс Найтингейл (1961).В годы Великой
        Отечественной войны — санинструктор роты 744-го стрелкового полка 149-й стрелковой дивизии, офицер связи 41-й
        гвардейской танковой бригады.
      </h3>
      <img
        src={require('assets/0b91f4824bc66370789406ac8a1454c2.png')}
        alt="alt text"
        className={section1Styles.image6}
      />
      <h2 className={section1Styles.medium_title5}>Екатерина Петлюк</h2>
      <h3 className={section1Styles.subtitle5}>
        Екатерина Петлюк советский танкист, участница Великой Отечественной войны. В годы войны — механик-водитель
        именного лёгкого танка Т-60 — «Малютка», построенного на деньги дошкольников города Омска.
      </h3>

      <div className={section1Styles.group1}>
        <div className={section1Styles.rect2} />
        <h1 className={section1Styles.big_title1}>«Женщины-танкистки»</h1>
      </div>
    </section>
  );
}

export default function RAPPERSKAYA1(props) {
  return (
    <main
      style={{ '--src': `url(${require('assets/7bba2b37a8201715104f024f0390aac9.png')})` }}
      className={cn(styles.main, 'rapperskaya1')}>
      <div className={styles.main__cell}>{renderSection1(props)}</div>
    </main>
  );
}
