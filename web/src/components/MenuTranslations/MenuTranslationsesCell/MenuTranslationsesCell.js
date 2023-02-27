import { Link, routes } from '@redwoodjs/router';

import MenuTranslationses from 'src/components/MenuTranslations/MenuTranslationses';

export const QUERY = gql`
    query FindMenuTranslationses {
        menuTranslationses {
            id
            menu_id
            locale
            name
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
    return (
        <div className="rw-text-center">
            {'No menuTranslationses yet. '}
            <Link to={routes.newMenuTranslations()} className="rw-link">
                {'Create one?'}
            </Link>
        </div>
    );
};

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ menuTranslationses }) => {
    return <MenuTranslationses menuTranslationses={menuTranslationses} />;
};
