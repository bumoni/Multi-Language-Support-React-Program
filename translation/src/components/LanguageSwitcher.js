// src/components/LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div>
      <label htmlFor="language-select">Select Language: </label>
      <select
        id="language-select"
        onChange={(e) => changeLanguage(e.target.value)}
        className='Lang-selector'
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        {/* Add options for additional languages */}
      </select>
    </div>
  );
}

export default LanguageSwitcher;
