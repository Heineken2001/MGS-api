import { navigate, routes } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import CategoryNewsForm from 'src/components/CategoryNews/CategoryNewsForm';

const CREATE_CATEGORY_NEWS_MUTATION = gql`
    mutation CreateCategoryNewsMutation($input: CreateCategoryNewsInput!) {
        createCategoryNews(input: $input) {
            id
        }
    }
`;

const NewCategoryNews = () => {
    const [createCategoryNews, { loading, error }] = useMutation(
        CREATE_CATEGORY_NEWS_MUTATION,
        {
            onCompleted: () => {
                toast.success('CategoryNews created');
                navigate(routes.categoryNewses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onSave = (input) => {
        createCategoryNews({ variables: { input } });
    };

    return (
        <div className="rw-segment">
            <header className="rw-segment-header">
                <h2 className="rw-heading rw-heading-secondary">
                    New CategoryNews
                </h2>
            </header>
            <div className="rw-segment-main">
                <CategoryNewsForm
                    onSave={onSave}
                    loading={loading}
                    error={error}
                />
            </div>
        </div>
    );
};

export default NewCategoryNews;
