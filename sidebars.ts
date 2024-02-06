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
    { type: 'doc', id: 'theoplayer/index' },
    { type: 'autogenerated', dirName: 'theoplayer' },
    {
      type: 'category',
      label: 'API references',
      link: { type: 'generated-index', slug: 'theoplayer/api' },
      items: [
        {
          type: 'link',
          label: 'Web',
          href: 'https://docs.theoplayer.com/api-reference/web/theoplayer.md',
        },
        {
          type: 'link',
          label: 'Android',
          href: 'https://docs.theoplayer.com/api-reference/android/index.html',
        },
        {
          type: 'link',
          label: 'iOS',
          href: 'https://docs.theoplayer.com/api-reference/ios/index.html',
        },
      ],
    },
  ],
  openVideoUi: [
    'open-video-ui/index',
    {
      type: 'category',
      label: 'Web',
      link: { type: 'generated-index', slug: 'open-video-ui/web' },
      items: [
        { type: 'doc', id: 'open-video-ui/web/getting-started' },
        {
          type: 'category',
          label: 'Guides',
          link: { type: 'generated-index', slug: 'open-video-ui/web/guides' },
          items: [{ type: 'autogenerated', dirName: 'external/web-ui/docs/guides' }],
        },
        {
          type: 'link',
          label: 'API Reference',
          href: 'https://theoplayer.github.io/web-ui/api/',
        },
      ],
    },
    {
      type: 'category',
      label: 'React',
      link: { type: 'generated-index', slug: 'open-video-ui/react' },
      items: [
        { type: 'doc', id: 'open-video-ui/react/getting-started' },
        {
          type: 'category',
          label: 'Guides',
          link: { type: 'generated-index', slug: 'open-video-ui/react/guides' },
          items: [
            // { type: 'autogenerated', dirName: 'external/web-ui/docs/guides' }
          ],
        },
        {
          type: 'link',
          label: 'API Reference',
          href: 'https://theoplayer.github.io/web-ui/react-api/',
        },
      ],
    },
  ],
};

export default sidebars;
