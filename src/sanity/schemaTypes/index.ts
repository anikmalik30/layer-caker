import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { pageType } from "./pageType";
import { pageBuilderType } from "./pageBuilderType";
import { faqType } from "./faqType";
import { faqsType } from "./blocks/faqsType";
import { featuresType } from "./blocks/featuresType";
import { galleryRailType } from "./blocks/galleryRailType";
import { heroType } from "./blocks/heroType";
import { modelShowcaseType } from "./blocks/modelShowcaseType";
import { specGridType } from "./blocks/specGridType";
import { splitImageType } from "./blocks/splitImageType";
import { videoHeroType } from "./blocks/videoHeroType";
import { animationSettingsType } from "./objects/animationSettingsType";
import { siteSettingsType } from './siteSettingsType'
import { seoType } from './seoType'
import { redirectType } from './redirectType'
import { socialType } from './socialType'
import { ctaBandType } from "./blocks/ctaBandType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    animationSettingsType,
    categoryType,
    postType,
    authorType,
    pageType,
    pageBuilderType,
    faqType,
    faqsType,
    featuresType,
    galleryRailType,
    heroType,
    modelShowcaseType,
    specGridType,
    splitImageType,
    videoHeroType,
    ctaBandType,
    siteSettingsType,
    seoType,
    redirectType,
    socialType
  ],
}
