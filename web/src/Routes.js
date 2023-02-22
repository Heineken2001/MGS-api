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

const Routes = () => {
  return (
    <Router>
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
