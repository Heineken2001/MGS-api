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
