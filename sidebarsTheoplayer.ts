import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  theoplayer: [
    'index',
    {
      type: 'category',
      label: 'Getting started',
      description: 'Set up your first THEOplayer in just a few minutes!',
      customProps: {
        icon: '🚀',
      },
      link: { type: 'doc', id: 'getting-started/index' },
      items: [{ type: 'autogenerated', dirName: 'getting-started' }],
    },
    {
      type: 'category',
      label: 'Guides',
      description: 'Learn how to implement our rich set of features and integrations.',
      customProps: {
        icon: '📖',
      },
      link: { type: 'generated-index', slug: 'guides' },
      items: [{ type: 'autogenerated', dirName: 'guides' }],
    },
    {
      type: 'category',
      label: 'Examples',
      description: 'See the player in action!',
      customProps: {
        icon: '🛝',
      },
      link: { type: 'generated-index', slug: 'examples' },
      items: [{ type: 'autogenerated', dirName: 'examples' }],
    },
    'changelog',
    {
      type: 'category',
      label: 'API references',
      description: 'Discover all properties and functions of THEOplayer.',
      customProps: {
        icon: '*️⃣',
      },
      link: { type: 'generated-index', slug: 'api' },
      items: [
        {
          type: 'link',
          label: 'Web',
          description: 'API references for the THEOplayer Web SDK',
          customProps: {
            icon: '🌐',
          },
          href: 'pathname:///theoplayer/v6/api-reference/web/',
        },
        {
          type: 'link',
          label: 'Android',
          description: 'API references for the THEOplayer Android SDK',
          customProps: {
            icon: '🤖',
          },
          href: 'pathname:///theoplayer/v6/api-reference/android/',
        },
        {
          type: 'link',
          label: 'iOS',
          description: 'API references for the THEOplayer iOS/tvOS SDK',
          customProps: {
            icon: '🍎',
          },
          href: 'pathname:///theoplayer/v6/api-reference/ios/',
        },
      ],
    },
  ],
};

export default sidebars;
