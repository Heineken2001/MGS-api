import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import 'src/lib/formatters';

const DELETE_CATEGORY_GROUP_NEWS_TRANSLATIONS_MUTATION = gql`
    mutation DeleteCategoryGroupNewsTranslationsMutation($id: BigInt!) {
        deleteCategoryGroupNewsTranslations(id: $id) {
            id
        }
    }
`;

const CategoryGroupNewsTranslations = ({ categoryGroupNewsTranslations }) => {
    const [deleteCategoryGroupNewsTranslations] = useMutation(
        DELETE_CATEGORY_GROUP_NEWS_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryGroupNewsTranslations deleted');
                navigate(routes.categoryGroupNewsTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onDeleteClick = (id) => {
        if (
            confirm(
                'Are you sure you want to delete categoryGroupNewsTranslations ' +
                    id +
                    '?'
            )
        ) {
            deleteCategoryGroupNewsTranslations({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        CategoryGroupNewsTranslations{' '}
                        {categoryGroupNewsTranslations.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{categoryGroupNewsTranslations.id}</td>
                        </tr>
                        <tr>
                            <th>Category group news id</th>
                            <td>
                                {
                                    categoryGroupNewsTranslations.category_group_news_id
                                }
                            </td>
                        </tr>
                        <tr>
                            <th>Locale</th>
                            <td>{categoryGroupNewsTranslations.locale}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{categoryGroupNewsTranslations.name}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>{categoryGroupNewsTranslations.description}</td>
                        </tr>
                        <tr>
                            <th>Title 2</th>
                            <td>{categoryGroupNewsTranslations.title_2}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editCategoryGroupNewsTranslations({
                        id: categoryGroupNewsTranslations.id
                    })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() =>
                        onDeleteClick(categoryGroupNewsTranslations.id)
                    }
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default CategoryGroupNewsTranslations;
