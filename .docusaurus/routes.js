
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','bd0'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','7de'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','08d'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','e0b'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','129'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','2a4'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','66f'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','0b8'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','422'),
  exact: true,
},
{
  path: '/docs',
<<<<<<< HEAD
  component: ComponentCreator('/docs','d66'),
=======
  component: ComponentCreator('/docs','627'),
>>>>>>> fe9bd9841a61965ea0831f46145fc428f738da29
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','8fc'),
  exact: true,
},
{
  path: '/docs/android/flutter',
  component: ComponentCreator('/docs/android/flutter','039'),
  exact: true,
},
{
  path: '/docs/android/overview',
  component: ComponentCreator('/docs/android/overview','409'),
  exact: true,
},
{
  path: '/docs/css/animation',
  component: ComponentCreator('/docs/css/animation','a90'),
  exact: true,
},
{
  path: '/docs/css/applying-css',
  component: ComponentCreator('/docs/css/applying-css','86b'),
  exact: true,
},
{
  path: '/docs/css/box-model',
  component: ComponentCreator('/docs/css/box-model','7a1'),
  exact: true,
},
{
  path: '/docs/css/css-introduction',
  component: ComponentCreator('/docs/css/css-introduction','838'),
  exact: true,
},
{
  path: '/docs/css/css-structure',
  component: ComponentCreator('/docs/css/css-structure','a0f'),
  exact: true,
},
{
  path: '/docs/css/css-task',
  component: ComponentCreator('/docs/css/css-task','45b'),
  exact: true,
},
{
  path: '/docs/css/flexbox',
  component: ComponentCreator('/docs/css/flexbox','9bb'),
  exact: true,
},
{
  path: '/docs/css/float',
  component: ComponentCreator('/docs/css/float','097'),
  exact: true,
},
{
  path: '/docs/css/optimization',
  component: ComponentCreator('/docs/css/optimization','b04'),
  exact: true,
},
{
  path: '/docs/git',
  component: ComponentCreator('/docs/git','d2f'),
  exact: true,
},
{
<<<<<<< HEAD
  path: '/docs/html/body-tags',
  component: ComponentCreator('/docs/html/body-tags','a49'),
  exact: true,
},
{
  path: '/docs/html/css-properties',
  component: ComponentCreator('/docs/html/css-properties','179'),
  exact: true,
},
{
  path: '/docs/html/emmet',
  component: ComponentCreator('/docs/html/emmet','646'),
  exact: true,
},
{
  path: '/docs/html/forms',
  component: ComponentCreator('/docs/html/forms','7c8'),
  exact: true,
},
{
  path: '/docs/html/history',
  component: ComponentCreator('/docs/html/history','248'),
  exact: true,
},
{
  path: '/docs/html/html-apis',
  component: ComponentCreator('/docs/html/html-apis','3bb'),
  exact: true,
},
{
  path: '/docs/html/html-tags',
  component: ComponentCreator('/docs/html/html-tags','966'),
  exact: true,
},
{
  path: '/docs/html/html-task',
  component: ComponentCreator('/docs/html/html-task','e94'),
  exact: true,
},
{
  path: '/docs/html/modernizer',
  component: ComponentCreator('/docs/html/modernizer','579'),
  exact: true,
},
{
  path: '/docs/html/structure',
  component: ComponentCreator('/docs/html/structure','b0b'),
  exact: true,
},
{
  path: '/docs/html/tags',
  component: ComponentCreator('/docs/html/tags','26a'),
  exact: true,
},
{
  path: '/docs/js/arrays',
  component: ComponentCreator('/docs/js/arrays','f22'),
  exact: true,
},
{
  path: '/docs/js/async',
  component: ComponentCreator('/docs/js/async','541'),
  exact: true,
},
{
  path: '/docs/js/browser-api',
  component: ComponentCreator('/docs/js/browser-api','f2a'),
  exact: true,
},
{
  path: '/docs/js/bugs',
  component: ComponentCreator('/docs/js/bugs','efb'),
  exact: true,
},
{
  path: '/docs/js/conditional-flow',
  component: ComponentCreator('/docs/js/conditional-flow','a6e'),
  exact: true,
},
{
  path: '/docs/js/dom',
  component: ComponentCreator('/docs/js/dom','eb6'),
  exact: true,
},
{
  path: '/docs/js/events',
  component: ComponentCreator('/docs/js/events','51b'),
  exact: true,
},
{
  path: '/docs/js/forms',
  component: ComponentCreator('/docs/js/forms','ed7'),
  exact: true,
},
{
  path: '/docs/js/functions',
  component: ComponentCreator('/docs/js/functions','4b8'),
  exact: true,
},
{
  path: '/docs/js/functions-deep',
  component: ComponentCreator('/docs/js/functions-deep','6cb'),
  exact: true,
},
{
  path: '/docs/js/http',
  component: ComponentCreator('/docs/js/http','c31'),
  exact: true,
},
{
  path: '/docs/js/introduction',
  component: ComponentCreator('/docs/js/introduction','173'),
  exact: true,
},
{
  path: '/docs/js/js-in-broswer',
  component: ComponentCreator('/docs/js/js-in-broswer','528'),
  exact: true,
},
{
  path: '/docs/js/loops',
  component: ComponentCreator('/docs/js/loops','101'),
  exact: true,
},
{
  path: '/docs/js/modules',
  component: ComponentCreator('/docs/js/modules','214'),
  exact: true,
},
{
  path: '/docs/js/objects',
  component: ComponentCreator('/docs/js/objects','28a'),
  exact: true,
},
{
  path: '/docs/js/regex',
  component: ComponentCreator('/docs/js/regex','5e5'),
  exact: true,
},
{
  path: '/docs/js/structure',
  component: ComponentCreator('/docs/js/structure','925'),
  exact: true,
},
{
  path: '/docs/js/syntax',
  component: ComponentCreator('/docs/js/syntax','e20'),
  exact: true,
},
{
  path: '/docs/ui/overview',
  component: ComponentCreator('/docs/ui/overview','37a'),
=======
  path: '/docs/ui/articles',
  component: ComponentCreator('/docs/ui/articles','dfd'),
>>>>>>> fe9bd9841a61965ea0831f46145fc428f738da29
  exact: true,
},
{
  path: '/docs/ui/figma',
  component: ComponentCreator('/docs/ui/figma','077'),
  exact: true,
},
{
  path: '/docs/ui/overview',
  component: ComponentCreator('/docs/ui/overview','37a'),
  exact: true,
},
{
  path: '/docs/ui/videos',
  component: ComponentCreator('/docs/ui/videos','8da'),
  exact: true,
},
{
  path: '/docs/web/css',
  component: ComponentCreator('/docs/web/css','e42'),
  exact: true,
},
{
  path: '/docs/web/html',
  component: ComponentCreator('/docs/web/html','28c'),
  exact: true,
},
{
  path: '/docs/web/js',
  component: ComponentCreator('/docs/web/js','031'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
