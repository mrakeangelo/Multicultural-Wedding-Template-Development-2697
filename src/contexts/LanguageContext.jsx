import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    welcome: 'Welcome to Our Wedding',
    ourStory: 'Our Story',
    ceremony: 'Ceremony',
    timeline: 'Timeline',
    gallery: 'Gallery',
    rsvp: 'RSVP',
    guestbook: 'Guestbook',
    traditions: 'Traditions',
    weddingParty: 'Wedding Party',
    registry: 'Registry',
    saveTheDate: 'Save the Date',
    joinUs: 'Join us as we celebrate our union',
    leaveBlessing: 'Leave a Blessing in Your Language',
    thankYou: 'Thank You',
    admin: 'Admin',
    preview: 'Preview',
    edit: 'Edit',
    save: 'Save',
    publish: 'Publish'
  },
  hi: {
    welcome: 'हमारी शादी में आपका स्वागत है',
    ourStory: 'हमारी कहानी',
    ceremony: 'समारोह',
    timeline: 'समयरेखा',
    gallery: 'गैलरी',
    rsvp: 'आरएसवीपी',
    guestbook: 'गेस्टबुक',
    traditions: 'परंपराएं',
    weddingParty: 'शादी की पार्टी',
    registry: 'रजिस्ट्री',
    saveTheDate: 'तारीख सेव करें',
    joinUs: 'हमारे मिलन के उत्सव में शामिल हों',
    leaveBlessing: 'अपनी भाषा में आशीर्वाद दें',
    thankYou: 'धन्यवाद',
    admin: 'एडमिन',
    preview: 'पूर्वावलोकन',
    edit: 'संपादित करें',
    save: 'सेव करें',
    publish: 'प्रकाशित करें'
  },
  zh: {
    welcome: '欢迎参加我们的婚礼',
    ourStory: '我们的故事',
    ceremony: '仪式',
    timeline: '时间轴',
    gallery: '画廊',
    rsvp: '回复',
    guestbook: '留言簿',
    traditions: '传统',
    weddingParty: '婚礼派对',
    registry: '礼品单',
    saveTheDate: '保存日期',
    joinUs: '加入我们庆祝我们的结合',
    leaveBlessing: '用您的语言留下祝福',
    thankYou: '谢谢',
    admin: '管理员',
    preview: '预览',
    edit: '编辑',
    save: '保存',
    publish: '发布'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const t = (key) => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      changeLanguage, 
      t, 
      translations 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};