import styles from './PrepaymentInfo.module.scss';

export const PrepaymentInfo = () => {
  return (
    <section className={styles.prepaymentInfo}>
      <div className={styles.intro}>
        <p>Уважаемые владельцы животных!</p>
      </div>

      <div className={styles.content}>
        <p className={styles.mainText}>
          В ветеринарной клинике «Белый Волк» все плановые хирургические
          операции проводятся на условиях предварительной предоплаты.
        </p>

        <p className={styles.description}>
          Предоплата вносится в день записи на операцию и служит подтверждением
          бронирования даты, операционного времени, подготовки команды
          ветеринарных специалистов и расходных материалов.
        </p>

        <div className={styles.warning}>
          <h3 className={styles.warningTitle}>Обращаем ваше внимание:</h3>
          <p className={styles.warningText}>
            В случае отмены операции менее чем за 24 часа до назначенного
            времени, предоплата НЕ возвращается.
          </p>
        </div>

        <div className={styles.legal}>
          <p className={styles.legalText}>
            Данное правило основано на положениях статьи 781 Гражданского
            кодекса Российской Федерации, регулирующей порядок оплаты услуг.
          </p>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Благодарим за понимание и сотрудничество.
          </p>
          <p className={styles.signature}>
            Администрация ветеринарной клиники «Белый Волк».
          </p>
        </div>
      </div>
    </section>
  );
};
