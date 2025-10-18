import styles from './WorkBenefitsList.module.scss';

const weOffer = [
  `Карьерный рост от администратора до врача`,
  'Современное оборудование',
  'Постоянное обучение и повышение квалификации',
  'Гибкий график работы',
  'Работа в дружной команде профессионалов',
  'Комфортные условия работы',
];

const weExpect = [
  'Аккуратность',
  'Стрессоустойчивость',
  'Внимательность',
  'Терпимое отношение к владельцам',
  'Любовь к животным',
  'Стремление к саморазвитию',
];

export function WorkBenefitsList() {
  return (
    <section className={styles.workBenefitsSection}>
      <div className={styles.listsContainer}>
        <div className={styles.listColumn}>
          <h3 className={styles.listTitle}>Мы предлагаем</h3>
          <ul className={styles.benefitsList}>
            {weOffer.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>
                <span className={styles.checkmark}>✓</span>
                <span className={styles.benefitText}>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.listColumn}>
          <h3 className={styles.listTitle}>От вас мы ждём</h3>
          <ul className={styles.benefitsList}>
            {weExpect.map((requirement, index) => (
              <li key={index} className={styles.benefitItem}>
                <span className={styles.checkmark}>✓</span>
                <span className={styles.benefitText}>{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
