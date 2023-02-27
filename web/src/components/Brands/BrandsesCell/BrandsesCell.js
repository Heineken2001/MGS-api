import { Link, routes } from '@redwoodjs/router';

import Brandses from 'src/components/Brands/Brandses';

export const QUERY = gql`
    query FindBrandses {
        brandses {
            id
            slug
            is_active
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No brandses yet. '}
            <Link to={routes.newBrands()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ brandses }) => {
    return <Brandses brandses={brandses} />;
};
