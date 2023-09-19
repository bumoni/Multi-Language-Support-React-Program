// src/components/Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t('home.title')}</h3>
      <p>{t('home.description')}</p>
    </div>
  );
}

export default Home;
