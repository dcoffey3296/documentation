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
  theoplayerSidebar: [
    'theoplayer/index',
    {
      type: 'category',
      label: 'Player',
      collapsed: false,
      link: { type: 'doc', id: 'theoplayer/player/index' },
      items: [
        'theoplayer/player/getting-started',
        {
          type: 'category',
          label: 'Guides',
          link: { type: 'generated-index', slug: 'theoplayer/player/guides' },
          items: [{ type: 'autogenerated', dirName: 'theoplayer/player/guides' }],
        },
      ],
    },
    {
      type: 'category',
      label: 'Open Video UI',
      link: { type: 'doc', id: 'theoplayer/open-video-ui/index' },
      items: [
        'theoplayer/open-video-ui/getting-started',
        {
          type: 'category',
          label: 'Guides',
          link: { type: 'generated-index', slug: 'theoplayer/open-video-ui/guides' },
          items: [{ type: 'autogenerated', dirName: 'theoplayer/open-video-ui/guides' }],
        },
      ],
    },
  ],
};

export default sidebars;
