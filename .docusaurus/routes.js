
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
  component: ComponentCreator('/blog','635'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','31a'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','cce'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','791'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','bb9'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','f04'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','b66'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','a39'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','072'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','8be'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','8fc'),
  exact: true,
},
{
  path: '/docs/android/overview',
  component: ComponentCreator('/docs/android/overview','409'),
  exact: true,
},
{
  path: '/docs/git',
  component: ComponentCreator('/docs/git','d2f'),
  exact: true,
},
{
  path: '/docs/ui/overview',
  component: ComponentCreator('/docs/ui/overview','37a'),
  exact: true,
},
{
  path: '/docs/ui/ui',
  component: ComponentCreator('/docs/ui/ui','3e7'),
  exact: true,
},
{
  path: '/docs/ui/ux',
  component: ComponentCreator('/docs/ui/ux','bb1'),
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
