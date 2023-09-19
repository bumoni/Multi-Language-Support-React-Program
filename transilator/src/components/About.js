
import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t('about.title')}</h3>
      <p>{t('about.description')}</p>
    </div>
  );
}

export default About;
