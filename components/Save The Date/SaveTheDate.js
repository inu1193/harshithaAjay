'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import coralheart from '../../assets/coralheart.png';
import white_heart from '../../assets/whiteHeart.png';
import styles from './SaveTheDate.module.css';
import Button from '../Button/Button';

const SaveTheDate = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('November 4, 2024 10:00:00');
      const currentTime = new Date();
      const difference = targetDate - currentTime;

      let timeLeft = {};
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        };
      } else {
        timeLeft = { days: '00', hours: '00', minutes: '00' };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.savethedate}>
      <div className={styles.saveTheDate}>Save the Date</div>
      <div className={styles.november4th2024MondayParent}>
        <div className={styles.saveTheDate}>
          <span className={styles.november}>{`November `}</span>
          <span className={styles.span}>4</span>
          <span>
            <span className={styles.th}>{`th, `}</span>
            <span className={styles.span1}>2024</span>
            <span className={styles.november}>, Monday</span>
          </span>
        </div>
        <div className={styles.countdown}>
          <div className={styles.heartParent}>
            <div className={styles.heart}>
              <Image className={styles.clipPathGroup} alt="Coral Heart" src={coralheart} />
              <div className={styles.div}>{timeLeft.days}</div>
            </div>
            <div className={styles.days}>Days</div>
          </div>
          <div className={styles.div1}>:</div>
          <div className={styles.heartGroup}>
            <div className={styles.heart}>
              <Image className={styles.clipPathGroup} alt="White Heart" src={white_heart} />
              <div className={styles.div}>{timeLeft.hours}</div>
            </div>
            <div className={styles.hours}>Hours</div>
          </div>
          <div className={styles.div3}>:</div>
          <div className={styles.heartGroup}>
            <div className={styles.heart}>
              <Image className={styles.clipPathGroup} alt="White Heart" src={white_heart} />
              <div className={styles.div}>{timeLeft.minutes}</div>
            </div>
            <div className={styles.hours}>Minutes</div>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default SaveTheDate;
