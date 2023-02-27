import { Link, routes } from '@redwoodjs/router';

import Builderses from 'src/components/Builders/Builderses';

export const QUERY = gql`
    query FindBuilderses {
        builderses {
            id
            slug
            is_active
            is_captcha
            is_redirect
            site_key
            secret_key
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No builderses yet. '}
            <Link to={routes.newBuilders()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ builderses }) => {
    return <Builderses builderses={builderses} />;
};
