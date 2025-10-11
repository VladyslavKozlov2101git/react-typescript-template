const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const iconsDir = path.resolve(__dirname, '../../src/assets/icons');
const outputDir = path.resolve(__dirname, '../../src/pages/IconPage');
const outputFile = path.join(outputDir, 'IconPage.tsx');

function generatePage() {
  const files = fs.readdirSync(iconsDir).filter((file) => file.endsWith('.tsx'));

  const imports = files
    .map((file) => {
      const name = path.basename(file, '.tsx');
      return `import ${name} from '@assets/icons/${name}';`;
    })
    .join('\n');

  const components = files
    .map((file) => {
      const name = path.basename(file, '.tsx');
      return `
        <div className={styles.iconCard} key="${name}">
          <${name} />
          <span>${name}</span>
        </div>
      `;
    })
    .join('\n');

  const content = `
'use client';

import React from 'react';
import styles from './IconPage.module.scss';

${imports}

const IconPage: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Icons</h1>
      <div className={styles.iconGrid}>
        ${components}
      </div>
    </div>
  );
};

export default IconPage;
`;

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  fs.writeFileSync(outputFile, content.trim(), 'utf-8');
  console.log('✅ IconPage.tsx оновлено:', new Date().toLocaleTimeString());
}

generatePage();

chokidar
  .watch(iconsDir, { ignoreInitial: true })
  .on('add', generatePage)
  .on('unlink', generatePage)
  .on('change', generatePage);

console.log('👀 Відстеження змін у src/assets/icons...');
