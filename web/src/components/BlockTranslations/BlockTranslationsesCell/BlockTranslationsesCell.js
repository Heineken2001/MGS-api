import { Link, routes } from '@redwoodjs/router';

import BlockTranslationses from 'src/components/BlockTranslations/BlockTranslationses';

export const QUERY = gql`
    query FindBlockTranslationses {
        blockTranslationses {
            id
            block_id
            locale
            name
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No blockTranslationses yet. '}
            <Link to={routes.newBlockTranslations()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ blockTranslationses }) => {
    return <BlockTranslationses blockTranslationses={blockTranslationses} />;
};
