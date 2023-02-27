// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ScaffoldLayout} title="CouponTranslationses" titleTo="couponTranslationses" buttonLabel="New CouponTranslations" buttonTo="newCouponTranslations">
        <Route path="/coupon-translationses/new" page={CouponTranslationsNewCouponTranslationsPage} name="newCouponTranslations" />
        <Route path="/coupon-translationses/{id}/edit" page={CouponTranslationsEditCouponTranslationsPage} name="editCouponTranslations" />
        <Route path="/coupon-translationses/{id}" page={CouponTranslationsCouponTranslationsPage} name="couponTranslations" />
        <Route path="/coupon-translationses" page={CouponTranslationsCouponTranslationsesPage} name="couponTranslationses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Couponses" titleTo="couponses" buttonLabel="New Coupons" buttonTo="newCoupons">
        <Route path="/couponses/new" page={CouponsNewCouponsPage} name="newCoupons" />
        <Route path="/couponses/{id}/edit" page={CouponsEditCouponsPage} name="editCoupons" />
        <Route path="/couponses/{id}" page={CouponsCouponsPage} name="coupons" />
        <Route path="/couponses" page={CouponsCouponsesPage} name="couponses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="CollectionTranslationses" titleTo="collectionTranslationses" buttonLabel="New CollectionTranslations" buttonTo="newCollectionTranslations">
        <Route path="/collection-translationses/new" page={CollectionTranslationsNewCollectionTranslationsPage} name="newCollectionTranslations" />
        <Route path="/collection-translationses/{id}/edit" page={CollectionTranslationsEditCollectionTranslationsPage} name="editCollectionTranslations" />
        <Route path="/collection-translationses/{id}" page={CollectionTranslationsCollectionTranslationsPage} name="collectionTranslations" />
        <Route path="/collection-translationses" page={CollectionTranslationsCollectionTranslationsesPage} name="collectionTranslationses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Collectionses" titleTo="collectionses" buttonLabel="New Collections" buttonTo="newCollections">
        <Route path="/collectionses/new" page={CollectionsNewCollectionsPage} name="newCollections" />
        <Route path="/collectionses/{id}/edit" page={CollectionsEditCollectionsPage} name="editCollections" />
        <Route path="/collectionses/{id}" page={CollectionsCollectionsPage} name="collections" />
        <Route path="/collectionses" page={CollectionsCollectionsesPage} name="collectionses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ChannelTranslationses" titleTo="channelTranslationses" buttonLabel="New ChannelTranslations" buttonTo="newChannelTranslations">
        <Route path="/channel-translationses/new" page={ChannelTranslationsNewChannelTranslationsPage} name="newChannelTranslations" />
        <Route path="/channel-translationses/{id}/edit" page={ChannelTranslationsEditChannelTranslationsPage} name="editChannelTranslations" />
        <Route path="/channel-translationses/{id}" page={ChannelTranslationsChannelTranslationsPage} name="channelTranslations" />
        <Route path="/channel-translationses" page={ChannelTranslationsChannelTranslationsesPage} name="channelTranslationses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Channelses" titleTo="channelses" buttonLabel="New Channels" buttonTo="newChannels">
        <Route path="/channelses/new" page={ChannelsNewChannelsPage} name="newChannels" />
        <Route path="/channelses/{id}/edit" page={ChannelsEditChannelsPage} name="editChannels" />
        <Route path="/channelses/{id}" page={ChannelsChannelsPage} name="channels" />
        <Route path="/channelses" page={ChannelsChannelsesPage} name="channelses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="CategoryNewsTranslationses" titleTo="categoryNewsTranslationses" buttonLabel="New CategoryNewsTranslations" buttonTo="newCategoryNewsTranslations">
        <Route path="/category-news-translationses/new" page={CategoryNewsTranslationsNewCategoryNewsTranslationsPage} name="newCategoryNewsTranslations" />
        <Route path="/category-news-translationses/{id}/edit" page={CategoryNewsTranslationsEditCategoryNewsTranslationsPage} name="editCategoryNewsTranslations" />
        <Route path="/category-news-translationses/{id}" page={CategoryNewsTranslationsCategoryNewsTranslationsPage} name="categoryNewsTranslations" />
        <Route path="/category-news-translationses" page={CategoryNewsTranslationsCategoryNewsTranslationsesPage} name="categoryNewsTranslationses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="CategoryNewses" titleTo="categoryNewses" buttonLabel="New CategoryNews" buttonTo="newCategoryNews">
        <Route path="/category-newses/new" page={CategoryNewsNewCategoryNewsPage} name="newCategoryNews" />
        <Route path="/category-newses/{id}/edit" page={CategoryNewsEditCategoryNewsPage} name="editCategoryNews" />
        <Route path="/category-newses/{id}" page={CategoryNewsCategoryNewsPage} name="categoryNews" />
        <Route path="/category-newses" page={CategoryNewsCategoryNewsesPage} name="categoryNewses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="CategoryGroupNewsTranslationses" titleTo="categoryGroupNewsTranslationses" buttonLabel="New CategoryGroupNewsTranslations" buttonTo="newCategoryGroupNewsTranslations">
        <Route path="/category-group-news-translationses/new" page={CategoryGroupNewsTranslationsNewCategoryGroupNewsTranslationsPage} name="newCategoryGroupNewsTranslations" />
        <Route path="/category-group-news-translationses/{id}/edit" page={CategoryGroupNewsTranslationsEditCategoryGroupNewsTranslationsPage} name="editCategoryGroupNewsTranslations" />
        <Route path="/category-group-news-translationses/{id}" page={CategoryGroupNewsTranslationsCategoryGroupNewsTranslationsPage} name="categoryGroupNewsTranslations" />
        <Route path="/category-group-news-translationses" page={CategoryGroupNewsTranslationsCategoryGroupNewsTranslationsesPage} name="categoryGroupNewsTranslationses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="CategoryGroupNewses" titleTo="categoryGroupNewses" buttonLabel="New CategoryGroupNews" buttonTo="newCategoryGroupNews">
        <Route path="/category-group-newses/new" page={CategoryGroupNewsNewCategoryGroupNewsPage} name="newCategoryGroupNews" />
        <Route path="/category-group-newses/{id}/edit" page={CategoryGroupNewsEditCategoryGroupNewsPage} name="editCategoryGroupNews" />
        <Route path="/category-group-newses/{id}" page={CategoryGroupNewsCategoryGroupNewsPage} name="categoryGroupNews" />
        <Route path="/category-group-newses" page={CategoryGroupNewsCategoryGroupNewsesPage} name="categoryGroupNewses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BuilderTranslationses" titleTo="builderTranslationses" buttonLabel="New BuilderTranslations" buttonTo="newBuilderTranslations">
        <Route path="/builder-translationses/new" page={BuilderTranslationsNewBuilderTranslationsPage} name="newBuilderTranslations" />
        <Route path="/builder-translationses/{id}/edit" page={BuilderTranslationsEditBuilderTranslationsPage} name="editBuilderTranslations" />
        <Route path="/builder-translationses/{id}" page={BuilderTranslationsBuilderTranslationsPage} name="builderTranslations" />
        <Route path="/builder-translationses" page={BuilderTranslationsBuilderTranslationsesPage} name="builderTranslationses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Builderses" titleTo="builderses" buttonLabel="New Builders" buttonTo="newBuilders">
        <Route path="/builderses/new" page={BuildersNewBuildersPage} name="newBuilders" />
        <Route path="/builderses/{id}/edit" page={BuildersEditBuildersPage} name="editBuilders" />
        <Route path="/builderses/{id}" page={BuildersBuildersPage} name="builders" />
        <Route path="/builderses" page={BuildersBuildersesPage} name="builderses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BrandTranslationses" titleTo="brandTranslationses" buttonLabel="New BrandTranslations" buttonTo="newBrandTranslations">
        <Route path="/brand-translationses/new" page={BrandTranslationsNewBrandTranslationsPage} name="newBrandTranslations" />
        <Route path="/brand-translationses/{id}/edit" page={BrandTranslationsEditBrandTranslationsPage} name="editBrandTranslations" />
        <Route path="/brand-translationses/{id}" page={BrandTranslationsBrandTranslationsPage} name="brandTranslations" />
        <Route path="/brand-translationses" page={BrandTranslationsBrandTranslationsesPage} name="brandTranslationses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Brandses" titleTo="brandses" buttonLabel="New Brands" buttonTo="newBrands">
        <Route path="/brandses/new" page={BrandsNewBrandsPage} name="newBrands" />
        <Route path="/brandses/{id}/edit" page={BrandsEditBrandsPage} name="editBrands" />
        <Route path="/brandses/{id}" page={BrandsBrandsPage} name="brands" />
        <Route path="/brandses" page={BrandsBrandsesPage} name="brandses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BlockValueTranslationses" titleTo="blockValueTranslationses" buttonLabel="New BlockValueTranslations" buttonTo="newBlockValueTranslations">
        <Route path="/block-value-translationses/new" page={BlockValueTranslationsNewBlockValueTranslationsPage} name="newBlockValueTranslations" />
        <Route path="/block-value-translationses/{id}/edit" page={BlockValueTranslationsEditBlockValueTranslationsPage} name="editBlockValueTranslations" />
        <Route path="/block-value-translationses/{id}" page={BlockValueTranslationsBlockValueTranslationsPage} name="blockValueTranslations" />
        <Route path="/block-value-translationses" page={BlockValueTranslationsBlockValueTranslationsesPage} name="blockValueTranslationses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BlockValueses" titleTo="blockValueses" buttonLabel="New BlockValues" buttonTo="newBlockValues">
        <Route path="/block-valueses/new" page={BlockValuesNewBlockValuesPage} name="newBlockValues" />
        <Route path="/block-valueses/{id}/edit" page={BlockValuesEditBlockValuesPage} name="editBlockValues" />
        <Route path="/block-valueses/{id}" page={BlockValuesBlockValuesPage} name="blockValues" />
        <Route path="/block-valueses" page={BlockValuesBlockValuesesPage} name="blockValueses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="BlockTranslationses" titleTo="blockTranslationses" buttonLabel="New BlockTranslations" buttonTo="newBlockTranslations">
        <Route path="/block-translationses/new" page={BlockTranslationsNewBlockTranslationsPage} name="newBlockTranslations" />
        <Route path="/block-translationses/{id}/edit" page={BlockTranslationsEditBlockTranslationsPage} name="editBlockTranslations" />
        <Route path="/block-translationses/{id}" page={BlockTranslationsBlockTranslationsPage} name="blockTranslations" />
        <Route path="/block-translationses" page={BlockTranslationsBlockTranslationsesPage} name="blockTranslationses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Blockses" titleTo="blockses" buttonLabel="New Blocks" buttonTo="newBlocks">
        <Route path="/blockses/new" page={BlocksNewBlocksPage} name="newBlocks" />
        <Route path="/blockses/{id}/edit" page={BlocksEditBlocksPage} name="editBlocks" />
        <Route path="/blockses/{id}" page={BlocksBlocksPage} name="blocks" />
        <Route path="/blockses" page={BlocksBlocksesPage} name="blockses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="TemplateTranslationses" titleTo="templateTranslationses" buttonLabel="New TemplateTranslations" buttonTo="newTemplateTranslations">
        <Route path="/template-translationses/new" page={TemplateTranslationsNewTemplateTranslationsPage} name="newTemplateTranslations" />
        <Route path="/template-translationses/{id}/edit" page={TemplateTranslationsEditTemplateTranslationsPage} name="editTemplateTranslations" />
        <Route path="/template-translationses/{id}" page={TemplateTranslationsTemplateTranslationsPage} name="templateTranslations" />
        <Route path="/template-translationses" page={TemplateTranslationsTemplateTranslationsesPage} name="templateTranslationses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Templateses" titleTo="templateses" buttonLabel="New Templates" buttonTo="newTemplates">
        <Route path="/templateses/new" page={TemplatesNewTemplatesPage} name="newTemplates" />
        <Route path="/templateses/{id}/edit" page={TemplatesEditTemplatesPage} name="editTemplates" />
        <Route path="/templateses/{id}" page={TemplatesTemplatesPage} name="templates" />
        <Route path="/templateses" page={TemplatesTemplatesesPage} name="templateses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="MenuTranslationses" titleTo="menuTranslationses" buttonLabel="New MenuTranslations" buttonTo="newMenuTranslations">
        <Route path="/menu-translationses/new" page={MenuTranslationsNewMenuTranslationsPage} name="newMenuTranslations" />
        <Route path="/menu-translationses/{id}/edit" page={MenuTranslationsEditMenuTranslationsPage} name="editMenuTranslations" />
        <Route path="/menu-translationses/{id}" page={MenuTranslationsMenuTranslationsPage} name="menuTranslations" />
        <Route path="/menu-translationses" page={MenuTranslationsMenuTranslationsesPage} name="menuTranslationses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="CategoryTranslationses" titleTo="categoryTranslationses" buttonLabel="New CategoryTranslations" buttonTo="newCategoryTranslations">
        <Route path="/category-translationses/new" page={CategoryTranslationsNewCategoryTranslationsPage} name="newCategoryTranslations" />
        <Route path="/category-translationses/{id}/edit" page={CategoryTranslationsEditCategoryTranslationsPage} name="editCategoryTranslations" />
        <Route path="/category-translationses/{id}" page={CategoryTranslationsCategoryTranslationsPage} name="categoryTranslations" />
        <Route path="/category-translationses" page={CategoryTranslationsCategoryTranslationsesPage} name="categoryTranslationses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Menuses" titleTo="menuses" buttonLabel="New Menus" buttonTo="newMenus">
        <Route path="/menuses/new" page={MenusNewMenusPage} name="newMenus" />
        <Route path="/menuses/{id}/edit" page={MenusEditMenusPage} name="editMenus" />
        <Route path="/menuses/{id}" page={MenusMenusPage} name="menus" />
        <Route path="/menuses" page={MenusMenusesPage} name="menuses" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Categorieses" titleTo="categorieses" buttonLabel="New Categories" buttonTo="newCategories">
        <Route path="/categorieses/new" page={CategoriesNewCategoriesPage} name="newCategories" />
        <Route path="/categorieses/{id}/edit" page={CategoriesEditCategoriesPage} name="editCategories" />
        <Route path="/categorieses/{id}" page={CategoriesCategoriesPage} name="categories" />
        <Route path="/categorieses" page={CategoriesCategoriesesPage} name="categorieses" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={ScaffoldLayout} title="Tagses" titleTo="tagses" buttonLabel="New Tags" buttonTo="newTags">
        <Route path="/tagses/new" page={TagsNewTagsPage} name="newTags" />
        <Route path="/tagses/{id}/edit" page={TagsEditTagsPage} name="editTags" />
        <Route path="/tagses/{id}" page={TagsTagsPage} name="tags" />
        <Route path="/tagses" page={TagsTagsesPage} name="tagses" />
      </Set>
      {/* <Route path="/" page={HomePage} name="home" />  */}
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
