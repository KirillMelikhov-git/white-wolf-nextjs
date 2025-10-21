import styles from './VisitingRules.module.scss';

export const VisitingRules = () => {
  return (
    <section className={styles.visitingRules}>
      <div className={styles.intro}>
        <p>
          Уважаемые владельцы животных!
          <br />
          Для вашего удобства и безопасности наших пациентов просим вас
          соблюдать следующие правила посещения клиники:
        </p>
      </div>

      <div className={styles.rules}>
        <div className={styles.rule}>
          <div className={styles.ruleNumber}>1</div>
          <div className={styles.ruleContent}>
            <h3 className={styles.ruleTitle}>Запись на приём</h3>
            <ul className={styles.ruleList}>
              <li>Приём ведётся по предварительной записи.</li>
              <li>Просим приходить за 5–10 минут до назначенного времени.</li>
              <li>
                В случае опоздания более чем на 15 минут визит может быть
                перенесён.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.rule}>
          <div className={styles.ruleNumber}>2</div>
          <div className={styles.ruleContent}>
            <h3 className={styles.ruleTitle}>С животными</h3>
            <ul className={styles.ruleList}>
              <li>
                Собаки должны быть на поводке и в наморднике (если агрессивны
                или крупной породы).
              </li>
              <li>Кошки и мелкие животные должны находиться в переносках.</li>
              <li>
                Не допускается нахождение животных без сопровождения владельца.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.rule}>
          <div className={styles.ruleNumber}>3</div>
          <div className={styles.ruleContent}>
            <h3 className={styles.ruleTitle}>Гигиена и безопасность</h3>
            <ul className={styles.ruleList}>
              <li>
                Не допускается кормление животных в клинике (исключение — по
                назначению врача).
              </li>
              <li>
                Пожалуйста, информируйте персонал, если ваш питомец может
                проявлять агрессию или плохо переносит визиты.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.rule}>
          <div className={styles.ruleNumber}>4</div>
          <div className={styles.ruleContent}>
            <h3 className={styles.ruleTitle}>Документы</h3>
            <ul className={styles.ruleList}>
              <li>
                При себе необходимо иметь ветеринарный паспорт животного (при
                наличии).
              </li>
              <li>
                Если ранее проводилось лечение — захватите выписки или
                результаты анализов.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.rule}>
          <div className={styles.ruleNumber}>5</div>
          <div className={styles.ruleContent}>
            <h3 className={styles.ruleTitle}>Плановые операции</h3>
            <ul className={styles.ruleList}>
              <li>
                Проводятся по предварительной предоплате, в соответствии с
                условиями, указанными в отдельном информационном уведомлении.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.rule}>
          <div className={styles.ruleNumber}>6</div>
          <div className={styles.ruleContent}>
            <h3 className={styles.ruleTitle}>Сопровождающие лица</h3>
            <ul className={styles.ruleList}>
              <li>
                В помещении клиники допускается присутствие не более одного
                сопровождающего на одного пациента, за исключением экстренных
                случаев или по согласованию с персоналом.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.rule}>
          <div className={styles.ruleNumber}>7</div>
          <div className={styles.ruleContent}>
            <h3 className={styles.ruleTitle}>Оплата услуг</h3>
            <ul className={styles.ruleList}>
              <li>Услуги оплачиваются в день обращения.</li>
              <li>Мы принимаем наличный и безналичный расчёт.</li>
            </ul>
          </div>
        </div>

        <div className={styles.rule}>
          <div className={styles.ruleNumber}>8</div>
          <div className={styles.ruleContent}>
            <h3 className={styles.ruleTitle}>Соблюдение порядка</h3>
            <ul className={styles.ruleList}>
              <li>
                Просим соблюдать чистоту, уважать других посетителей и персонал.
              </li>
              <li>
                Администрация оставляет за собой право отказать в обслуживании
                при агрессивном или некорректном поведении.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
