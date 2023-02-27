import { Link, routes } from '@redwoodjs/router';

import BlockValueTranslationses from 'src/components/BlockValueTranslations/BlockValueTranslationses';

export const QUERY = gql`
    query FindBlockValueTranslationses {
        blockValueTranslationses {
            id
            block_value_id
            locale
            title
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No blockValueTranslationses yet. '}
            <Link to={routes.newBlockValueTranslations()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ blockValueTranslationses }) => {
    return (
        <BlockValueTranslationses
            blockValueTranslationses={blockValueTranslationses}
        />
    );
};
