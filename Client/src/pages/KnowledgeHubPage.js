import { useState } from 'react';
import { Input } from 'antd';
import {
  SearchOutlined,
  PlayCircleOutlined,
  AudioOutlined,
  FileTextOutlined,
  DownOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { useAppStore } from '../store/appStore.js';
import {
  getGuidesByCategory,
  CATEGORY_META,
} from '../features/quickGuide/quickGuideConfig.js';
import styles from './KnowledgeHubPage.module.scss';

const CATEGORY_ORDER = ['General', 'Master Forms', 'Quality Control'];

export default function KnowledgeHubPage() {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState({});
  const { openQuickGuide } = useAppStore();

  const byCategory = getGuidesByCategory();

  const filteredCategories = CATEGORY_ORDER.filter((cat) => {
    const guides = byCategory[cat] || [];
    if (!search) return true;
    return (
      cat.toLowerCase().includes(search.toLowerCase()) ||
      guides.some((g) =>
        g.title.toLowerCase().includes(search.toLowerCase()) ||
        g.description.toLowerCase().includes(search.toLowerCase()),
      )
    );
  });

  const toggle = (cat) =>
    setExpanded((prev) => ({ ...prev, [cat]: !prev[cat] }));

  const handleOpen = (key, tab) => {
    openQuickGuide(key);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Knowledge Bar</h2>
            <p className={styles.subtitle}>Quick guides for every form — video, voiceover &amp; document</p>
          </div>
          <Input
            className={styles.search}
            prefix={<SearchOutlined className={styles.searchIcon} />}
            placeholder="Search guides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={styles.cards}>
          {filteredCategories.map((cat) => {
            const guides = (byCategory[cat] || []).filter((g) => {
              if (!search) return true;
              return (
                g.title.toLowerCase().includes(search.toLowerCase()) ||
                g.description.toLowerCase().includes(search.toLowerCase()) ||
                cat.toLowerCase().includes(search.toLowerCase())
              );
            });
            const meta = CATEGORY_META[cat] || CATEGORY_META.General;
            const isOpen = !!expanded[cat] || !!search;

            return (
              <div key={cat} className={`${styles.card} ${isOpen ? styles.cardOpen : ''}`}>
                <button
                  type="button"
                  className={styles.cardHeader}
                  onClick={() => toggle(cat)}
                >
                  <div className={styles.cardHeaderLeft}>
                    <span
                      className={styles.catDot}
                      style={{ background: meta.color }}
                    />
                    <span className={styles.cardLabel}>{cat}</span>
                    <span className={styles.guideCount} style={{ color: meta.color, background: meta.bg }}>
                      {guides.length} guide{guides.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <DownOutlined
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className={styles.guideList}>
                    {guides.map((guide) => (
                      <div key={guide.key} className={styles.guideRow}>
                        <div className={styles.guideInfo}>
                          <span className={styles.guideTitle}>{guide.title}</span>
                          <span className={styles.guideDesc}>{guide.description}</span>
                        </div>
                        <div className={styles.guideMeta}>
                          <span className={styles.guideDuration}>
                            <ClockCircleOutlined />
                            {guide.duration}
                          </span>
                          <div className={styles.guideActions}>
                            <button
                              type="button"
                              className={styles.actionBtn}
                              style={{ '--btn-color': '#5189F3', '--btn-bg': '#e4eeff' }}
                              onClick={() => handleOpen(guide.key, 'video')}
                              title="Watch Video"
                            >
                              <PlayCircleOutlined />
                              <span>Video</span>
                            </button>
                            <button
                              type="button"
                              className={styles.actionBtn}
                              style={{ '--btn-color': '#10b981', '--btn-bg': '#d1fae5' }}
                              onClick={() => handleOpen(guide.key, 'voiceover')}
                              title="Listen to Voiceover"
                            >
                              <AudioOutlined />
                              <span>Audio</span>
                            </button>
                            <button
                              type="button"
                              className={styles.actionBtn}
                              style={{ '--btn-color': '#f59e0b', '--btn-bg': '#fef3c7' }}
                              onClick={() => handleOpen(guide.key, 'document')}
                              title="View Document"
                            >
                              <FileTextOutlined />
                              <span>Doc</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
