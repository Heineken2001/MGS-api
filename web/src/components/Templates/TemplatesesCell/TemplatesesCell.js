import { Link, routes } from '@redwoodjs/router';

import Templateses from 'src/components/Templates/Templateses';

export const QUERY = gql`
    query FindTemplateses {
        templateses {
            id
            is_active
            deleted_at
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No templateses yet. '}
            <Link to={routes.newTemplates()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ templateses }) => {
    return <Templateses templateses={templateses} />;
};
