// eslint-disable-next-line no-undef
module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'React component using Typescript',
    prompts: [
      {
        type: 'list',
        name: 'component',
        message: 'Component type',
        choices: ['Function', 'Redux'],
        default: 0,
      },
      {
        type: 'list',
        name: 'base',
        message: 'Base directory',
        choices: ['features', 'shared'],
        default: 0,
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name',
      },
    ],
    actions: function (data) {
      return [
        {
          type: 'add',
          path: `src/${data.base}/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: `plop-templates/component/Component.tsx.hbs`,
        },
        {
          type: 'add',
          path: `src/${data.base}/{{directory}}/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
          templateFile: 'plop-templates/component/Component.scss.hbs',
        },
        {
          type: 'add',
          path: `src/${data.base}/{{directory}}/{{pascalCase name}}/index.ts`,
          templateFile: 'plop-templates/component/Component.index.hbs',
        },
      ];
    },
  });
};
