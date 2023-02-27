import Builders from 'src/components/Builders/Builders';

export const QUERY = gql`
    query FindBuildersById($id: BigInt!) {
        builders: builders(id: $id) {
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

export const Empty = () => <div>Builders not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ builders }) => {
    return <Builders builders={builders} />;
};
