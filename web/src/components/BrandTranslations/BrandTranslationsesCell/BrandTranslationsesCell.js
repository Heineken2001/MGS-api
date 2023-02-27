import { Link, routes } from '@redwoodjs/router';

import BrandTranslationses from 'src/components/BrandTranslations/BrandTranslationses';

export const QUERY = gql`
    query FindBrandTranslationses {
        brandTranslationses {
            id
            brand_id
            locale
            name
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No brandTranslationses yet. '}
            <Link to={routes.newBrandTranslations()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ brandTranslationses }) => {
    return <BrandTranslationses brandTranslationses={brandTranslationses} />;
};
