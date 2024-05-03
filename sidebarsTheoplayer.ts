import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import type { SidebarItemConfig } from '@docusaurus/plugin-content-docs/lib/sidebars/types';
import webConnectorsJson from './theoplayer/connectors/web/_category_.json';
import androidConnectorsJson from './theoplayer/connectors/android/_category_.json';
import iosConnectorsJson from './theoplayer/connectors/ios/_category_.json';

const howToGuidesItem: SidebarItemConfig = {
  type: 'category',
  label: 'How-to guides',
  description: 'Learn how to implement our rich set of features and integrations.',
  customProps: {
    icon: '📖',
  },
  link: { type: 'doc', id: 'how-to-guides/index' },
  items: [{ type: 'autogenerated', dirName: 'how-to-guides' }],
};
const knowledgeBaseItem: SidebarItemConfig = {
  type: 'category',
  label: 'Knowledge base',
  description: 'Learn about topics in the video industry from our experts.',
  customProps: {
    icon: '🧠',
  },
  link: { type: 'doc', id: 'knowledge-base/index' },
  items: [{ type: 'autogenerated', dirName: 'knowledge-base' }],
};
const faqItem: SidebarItemConfig = {
  type: 'link',
  label: 'FAQ',
  description: `Answers to common questions we've received from our customers over the years.`,
  customProps: {
    icon: '❔',
  },
  href: '/theoplayer/faq/',
};

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  web: [
    'index',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      description: 'Set up your first THEOplayer in just a few minutes!',
      customProps: {
        icon: '🚀',
      },
      link: { type: 'doc', id: 'getting-started/sdks/web/getting-started' },
      items: [
        { type: 'autogenerated', dirName: 'getting-started/01-sdks/01-web' },
        {
          type: 'category',
          label: 'LG webOS',
          customProps: {
            icon: '📺',
          },
          link: { type: 'doc', id: 'getting-started/sdks/webos/getting-started' },
          items: [{ type: 'autogenerated', dirName: 'getting-started/01-sdks/07-webos' }],
        },
        {
          type: 'category',
          label: 'Samsung Tizen TV',
          customProps: {
            icon: '📺',
          },
          link: { type: 'doc', id: 'getting-started/sdks/tizen/getting-started' },
          items: [{ type: 'autogenerated', dirName: 'getting-started/01-sdks/08-tizen' }],
        },
        {
          type: 'category',
          label: 'Frameworks',
          description: 'Learn how to integrate THEOplayer into the application framework of your choice.',
          customProps: {
            icon: '🏗️',
          },
          link: { type: 'generated-index', slug: 'getting-started/frameworks' },
          items: [{ type: 'autogenerated', dirName: 'getting-started/02-frameworks' }],
        },
      ],
    },
    howToGuidesItem,
    {
      type: 'category',
      label: 'Examples',
      description: 'See the player in action!',
      customProps: {
        icon: '🛝',
      },
      link: { type: 'doc', id: 'examples/index' },
      items: [{ type: 'autogenerated', dirName: 'examples' }],
    },
    {
      type: 'category',
      label: 'Connectors',
      description: `Integrate third-party solutions with THEOplayer using our pre-built connectors.`,
      customProps: {
        icon: '🔌',
      },
      link: { type: 'doc', id: 'connectors/web/index' },
      items: webConnectorsJson.customProps.additionalItems as SidebarItemConfig[],
    },
    'changelog',
    {
      type: 'link',
      label: 'API references',
      description: 'Discover all properties and functions of THEOplayer.',
      customProps: {
        icon: '*️⃣',
      },
      href: 'pathname:///theoplayer/v7/api-reference/web/',
    },
    knowledgeBaseItem,
    faqItem,
  ],
  android: [
    'android/index',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      description: 'Set up your first THEOplayer in just a few minutes!',
      customProps: {
        icon: '🚀',
      },
      link: { type: 'doc', id: 'getting-started/sdks/android/getting-started' },
      items: [{ type: 'autogenerated', dirName: 'getting-started/01-sdks/02-android' }],
    },
    howToGuidesItem,
    {
      type: 'category',
      label: 'Connectors',
      description: `Integrate third-party solutions with THEOplayer using our pre-built connectors.`,
      customProps: {
        icon: '🔌',
      },
      link: { type: 'doc', id: 'connectors/android/index' },
      items: androidConnectorsJson.customProps.additionalItems as SidebarItemConfig[],
    },
    'changelog',
    {
      type: 'link',
      label: 'API references',
      description: 'Discover all properties and functions of THEOplayer.',
      customProps: {
        icon: '*️⃣',
      },
      href: 'pathname:///theoplayer/v7/api-reference/android/',
    },
    knowledgeBaseItem,
    faqItem,
  ],
  ios: [
    'ios/index',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      description: 'Set up your first THEOplayer in just a few minutes!',
      customProps: {
        icon: '🚀',
      },
      link: { type: 'doc', id: 'getting-started/sdks/ios/getting-started' },
      items: [{ type: 'autogenerated', dirName: 'getting-started/01-sdks/03-ios' }],
    },
    howToGuidesItem,
    {
      type: 'category',
      label: 'Connectors',
      description: `Integrate third-party solutions with THEOplayer using our pre-built connectors.`,
      customProps: {
        icon: '🔌',
      },
      link: { type: 'doc', id: 'connectors/android/index' },
      items: iosConnectorsJson.customProps.additionalItems as SidebarItemConfig[],
    },
    'changelog',
    {
      type: 'link',
      label: 'API references',
      description: 'Discover all properties and functions of THEOplayer.',
      customProps: {
        icon: '*️⃣',
      },
      href: 'pathname:///theoplayer/v7/api-reference/ios/',
    },
    knowledgeBaseItem,
    faqItem,
  ],
  faq: [
    {
      type: 'link',
      label: '« Back',
      href: '/theoplayer/',
    },
    {
      type: 'category',
      label: 'FAQ',
      collapsible: false,
      link: { type: 'doc', id: 'faq/index' },
      items: [{ type: 'autogenerated', dirName: 'faq' }],
    },
  ],
};

export default sidebars;
