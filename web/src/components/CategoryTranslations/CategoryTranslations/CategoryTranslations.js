import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { jsonDisplay } from 'src/lib/formatters';

const DELETE_CATEGORY_TRANSLATIONS_MUTATION = gql`
    mutation DeleteCategoryTranslationsMutation($id: BigInt!) {
        deleteCategoryTranslations(id: $id) {
            id
        }
    }
`;

const CategoryTranslations = ({ categoryTranslations }) => {
    const [deleteCategoryTranslations] = useMutation(
        DELETE_CATEGORY_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryTranslations deleted');
                navigate(routes.categoryTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onDeleteClick = (id) => {
        if (
            confirm(
                'Are you sure you want to delete categoryTranslations ' +
                    id +
                    '?'
            )
        ) {
            deleteCategoryTranslations({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        CategoryTranslations {categoryTranslations.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{categoryTranslations.id}</td>
                        </tr>
                        <tr>
                            <th>Category id</th>
                            <td>{categoryTranslations.category_id}</td>
                        </tr>
                        <tr>
                            <th>Locale</th>
                            <td>{categoryTranslations.locale}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{categoryTranslations.name}</td>
                        </tr>
                        <tr>
                            <th>Content</th>
                            <td>{categoryTranslations.content}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{categoryTranslations.description}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{categoryTranslations.slug}</td>
                        </tr>
                        <tr>
                            <th>Title</th>
                            <td>{categoryTranslations.title}</td>
                        </tr>
                        <tr>
                            <th>Short description</th>
                            <td>{categoryTranslations.short_description}</td>
                        </tr>
                        <tr>
                            <th>Long description</th>
                            <td>{categoryTranslations.long_description}</td>
                        </tr>
                        <tr>
                            <th>Featured image</th>
                            <td>{categoryTranslations.featured_image}</td>
                        </tr>
                        <tr>
                            <th>Formdata</th>
                            <td>
                                {jsonDisplay(categoryTranslations.formdata)}
                            </td>
                        </tr>
                        <tr>
                            <th>Jsonschema</th>
                            <td>
                                {jsonDisplay(categoryTranslations.jsonschema)}
                            </td>
                        </tr>
                        <tr>
                            <th>Uischema</th>
                            <td>
                                {jsonDisplay(categoryTranslations.uischema)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editCategoryTranslations({
                        id: categoryTranslations.id
                    })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(categoryTranslations.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default CategoryTranslations;
