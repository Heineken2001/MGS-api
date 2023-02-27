import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { timeTag } from 'src/lib/formatters';

const DELETE_BLOCK_VALUE_TRANSLATIONS_MUTATION = gql`
    mutation DeleteBlockValueTranslationsMutation($id: BigInt!) {
        deleteBlockValueTranslations(id: $id) {
            id
        }
    }
`;

const BlockValueTranslations = ({ blockValueTranslations }) => {
    const [deleteBlockValueTranslations] = useMutation(
        DELETE_BLOCK_VALUE_TRANSLATIONS_MUTATION,
        {
            onCompleted: () => {
                toast.success('BlockValueTranslations deleted');
                navigate(routes.blockValueTranslationses());
            },
            onError: (error) => {
                toast.error(error.message);
            }
        }
    );

    const onDeleteClick = (id) => {
        if (
            confirm(
                'Are you sure you want to delete blockValueTranslations ' +
                    id +
                    '?'
            )
        ) {
            deleteBlockValueTranslations({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        BlockValueTranslations {blockValueTranslations.id}{' '}
                        Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{blockValueTranslations.id}</td>
                        </tr>
                        <tr>
                            <th>Block value id</th>
                            <td>{blockValueTranslations.block_value_id}</td>
                        </tr>
                        <tr>
                            <th>Locale</th>
                            <td>{blockValueTranslations.locale}</td>
                        </tr>
                        <tr>
                            <th>Title</th>
                            <td>{blockValueTranslations.title}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>
                                {timeTag(blockValueTranslations.created_at)}
                            </td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>
                                {timeTag(blockValueTranslations.updated_at)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editBlockValueTranslations({
                        id: blockValueTranslations.id
                    })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(blockValueTranslations.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default BlockValueTranslations;
