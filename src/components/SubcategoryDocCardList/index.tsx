import DocCardList, { type Props as DocCardListProps } from '@theme/DocCardList';
import { useCurrentSidebarCategory } from '@docusaurus/theme-common';
import { PropSidebarItem, PropSidebarItemCategory } from '@docusaurus/plugin-content-docs';
import Heading, { type HeadingType } from '@theme/Heading';

export interface Props extends Omit<DocCardListProps, 'items'> {
  headingLevel?: HeadingType;
}

function isCategory(item: PropSidebarItem): item is PropSidebarItemCategory {
  return item.type === 'category';
}

export default function SubcategoryDocCardList({ headingLevel, ...props }: Props) {
  const category = useCurrentSidebarCategory();
  const subcategories = category.items.filter(isCategory);
  return subcategories.map((subcategory) => (
    <>
      <Heading as={headingLevel ?? 'h2'}>{subcategory.label}</Heading>
      <DocCardList items={subcategory.items} {...props} />
    </>
  ));
}
