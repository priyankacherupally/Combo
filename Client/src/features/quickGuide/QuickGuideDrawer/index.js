import { useState } from 'react';
import { Drawer, Select } from 'antd';
import {
  CloseOutlined,
  PlayCircleOutlined,
  FileTextOutlined,
  AudioOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { LANGUAGES, CATEGORY_META } from '../quickGuideConfig.js';
import styles from './QuickGuideDrawer.module.scss';

const { Option } = Select;

function VideoTab({ language }) {
  const lang = LANGUAGES.find((l) => l.value === language);
  return (
    <div className={styles.videoPlaceholder}>
      <div className={styles.videoOverlay}>
        <div className={styles.playCircle}>
          <PlayCircleOutlined className={styles.playIcon} />
        </div>
        <span className={styles.mediaNote}>Video coming soon</span>
        <span className={styles.mediaLang}>{lang?.label}</span>
      </div>
    </div>
  );
}

function VoiceoverTab({ language }) {
  const lang = LANGUAGES.find((l) => l.value === language);
  return (
    <div className={styles.mediaPlaceholder}>
      <div className={styles.iconCircle} style={{ background: '#d1fae5' }}>
        <AudioOutlined className={styles.mediaIcon} style={{ color: '#10b981' }} />
      </div>
      <p className={styles.mediaNote}>Audio guide coming soon</p>
      <span className={styles.mediaLang} style={{ color: '#10b981', background: '#d1fae5' }}>
        {lang?.label}
      </span>
    </div>
  );
}

function DocumentTab({ language }) {
  const lang = LANGUAGES.find((l) => l.value === language);
  return (
    <div className={styles.mediaPlaceholder}>
      <div className={styles.iconCircle} style={{ background: '#e4eeff' }}>
        <FileTextOutlined className={styles.mediaIcon} style={{ color: '#5189F3' }} />
      </div>
      <p className={styles.mediaNote}>Document coming soon</p>
      <span className={styles.mediaLang} style={{ color: '#5189F3', background: '#e4eeff' }}>
        {lang?.label}
      </span>
    </div>
  );
}

const TABS = [
  { key: 'video', label: 'Video', Icon: PlayCircleOutlined },
  { key: 'voiceover', label: 'Voiceover', Icon: AudioOutlined },
  { key: 'document', label: 'Document', Icon: FileTextOutlined },
];

export default function QuickGuideDrawer({ open, onClose, guide }) {
  const [language, setLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('video');

  if (!guide) return null;

  const categoryMeta = CATEGORY_META[guide.category] || CATEGORY_META.General;

  return (
    <Drawer
      open={open}
      onClose={onClose}
      placement="right"
      width={420}
      closable={false}
      styles={{ body: { padding: 0 } }}
    >
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <span className={styles.eyebrow}>Quick Guide</span>
            <h3 className={styles.title}>{guide.title}</h3>
          </div>
          <button className={styles.closeBtn} onClick={onClose} type="button">
            <CloseOutlined />
          </button>
        </div>

        <div className={styles.meta}>
          <span className={styles.duration}>
            <ClockCircleOutlined />
            {guide.duration}
          </span>
          <span
            className={styles.category}
            style={{ color: categoryMeta.color, background: categoryMeta.bg }}
          >
            {guide.category}
          </span>
        </div>

        <p className={styles.description}>{guide.description}</p>

        <div className={styles.langRow}>
          <span className={styles.langLabel}>Language</span>
          <Select
            value={language}
            onChange={setLanguage}
            size="small"
            popupMatchSelectWidth={false}
            style={{ width: 130 }}
          >
            {LANGUAGES.map((l) => (
              <Option key={l.value} value={l.value}>
                {l.label}
              </Option>
            ))}
          </Select>
        </div>

        <div className={styles.tabs}>
          {TABS.map(({ key, label, Icon }) => (
            <button
              key={key}
              type="button"
              className={`${styles.tabBtn} ${activeTab === key ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab(key)}
            >
              <Icon />
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'video' && <VideoTab language={language} />}
          {activeTab === 'voiceover' && <VoiceoverTab language={language} />}
          {activeTab === 'document' && <DocumentTab language={language} />}
        </div>
      </div>
    </Drawer>
  );
}
