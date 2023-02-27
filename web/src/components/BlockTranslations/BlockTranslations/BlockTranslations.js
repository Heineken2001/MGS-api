import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { timeTag } from 'src/lib/formatters';

const DELETE_BLOCK_TRANSLATIONS_MUTATION = gql`
    mutation DeleteBlockTranslationsMutation($id: BigInt!) {
        deleteBlockTranslations(id: $id) {
            id
        }
    }
`;

const BlockTranslations = ({ blockTranslations }) => {
    const [deleteBlockTranslations] = useMutation(
        DELETE_BLOCK_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BlockTranslations deleted');
                navigate(routes.blockTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onDeleteClick = (id) => {
        if (
            confirm(
                'Are you sure you want to delete blockTranslations ' + id + '?'
            )
        ) {
            deleteBlockTranslations({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        BlockTranslations {blockTranslations.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{blockTranslations.id}</td>
                        </tr>
                        <tr>
                            <th>Block id</th>
                            <td>{blockTranslations.block_id}</td>
                        </tr>
                        <tr>
                            <th>Locale</th>
                            <td>{blockTranslations.locale}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{blockTranslations.name}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(blockTranslations.created_at)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(blockTranslations.updated_at)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editBlockTranslations({
                        id: blockTranslations.id
                    })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(blockTranslations.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default BlockTranslations;
