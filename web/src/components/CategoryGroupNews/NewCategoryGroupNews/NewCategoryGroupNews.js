import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CategoryGroupNewsForm from 'src/components/CategoryGroupNews/CategoryGroupNewsForm';

const CREATE_CATEGORY_GROUP_NEWS_MUTATION = gql`
    mutation CreateCategoryGroupNewsMutation(
        $input: CreateCategoryGroupNewsInput!
    ) {
        createCategoryGroupNews(input: $input) {
            id
        }
    }
`;

const NewCategoryGroupNews = () => {
    const [createCategoryGroupNews, { loading, error }] = useMutation(
        CREATE_CATEGORY_GROUP_NEWS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryGroupNews created');
                navigate(routes.categoryGroupNewses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createCategoryGroupNews({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New CategoryGroupNews
                </h2>
            </header>
            <div className="rw-segment-main">
                <CategoryGroupNewsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewCategoryGroupNews;
