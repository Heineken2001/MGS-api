import Templates from 'src/components/Templates/Templates';

export const QUERY = gql`
    query FindTemplatesById($id: BigInt!) {
        templates: templates(id: $id) {
            id
            is_active
            deleted_at
            created_at
            updated_at
        }
    }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Templates not found</div>;

export const Failure = ({ error }) => (
    <div className="rw-cell-error">{error?.message}</div>
);

export const Success = ({ templates }) => {
    return <Templates templates={templates} />;
};
