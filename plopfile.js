const fs = require('fs');
const path = require('path');

 
module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'React component using Typescript',
    prompts: [
      {
        type: 'list',
        name: 'components',
        message: 'Component type',
        choices: ['Function', 'Page'],
        default: 0,
      },
      {
        type: 'list',
        name: 'base',
        message: 'Base directory',
        choices: ['pages', 'shared', 'components'],
        default: 0,
      },
      {
        type: 'list',
        name: 'subfolder',
        message: 'Subfolder within features directory',
        choices: function (answers) {
          const subfolders = [];

          if (fs.existsSync('src/features')) {
            const featureSubfolders = fs.readdirSync('src/features').filter(function (file) {
              return fs.statSync(path.join('src/features', file)).isDirectory();
            });
            subfolders.push(...featureSubfolders);
          }

          // Add the option for the current directory
          if (answers.base === 'features') {
            subfolders.push('Current Location');
          }

          return subfolders;
        },
        when: function (answers) {
          return answers.base === 'features';
        },
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: function (data) {
      if (data.subfolder === 'current') {
        data.subfolder = '';
      }

      const basePath =
        data.base === 'features' ? `src/features/${data.subfolder}` : `src/${data.base}`;

      return [
        {
          type: 'add',
          path: `${basePath}/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: `plop-templates/component/Component.tsx.hbs`,
        },
        {
          type: 'add',
          path: `${basePath}/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
          templateFile: 'plop-templates/component/Component.scss.hbs',
        },
        {
          type: 'add',
          path: `${basePath}/{{directory}}/{{pascalCase name}}/index.ts`,
          templateFile: 'plop-templates/component/Component.index.hbs',
        },
      ];
    },
  });
};
