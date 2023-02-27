import { Link, routes, navigate } from '@redwoodjs/router';
import { useMutation } from '@redwoodjs/web';
import { toast } from '@redwoodjs/web/toast';

import { checkboxInputTag, timeTag } from 'src/lib/formatters';

const DELETE_BUILDERS_MUTATION = gql`
    mutation DeleteBuildersMutation($id: BigInt!) {
        deleteBuilders(id: $id) {
            id
        }
    }
`;

const Builders = ({ builders }) => {
    const [deleteBuilders] = useMutation(DELETE_BUILDERS_MUTATION, {
        onCompleted: () => {
            toast.success('Builders deleted');
            navigate(routes.builderses());
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const onDeleteClick = (id) => {
        if (confirm('Are you sure you want to delete builders ' + id + '?')) {
            deleteBuilders({ variables: { id } });
        }
    };

    return (
        <>
            <div className="rw-segment">
                <header className="rw-segment-header">
                    <h2 className="rw-heading rw-heading-secondary">
                        Builders {builders.id} Detail
                    </h2>
                </header>
                <table className="rw-table">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{builders.id}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{builders.slug}</td>
                        </tr>
                        <tr>
                            <th>Is active</th>
                            <td>{checkboxInputTag(builders.is_active)}</td>
                        </tr>
                        <tr>
                            <th>Is captcha</th>
                            <td>{checkboxInputTag(builders.is_captcha)}</td>
                        </tr>
                        <tr>
                            <th>Is redirect</th>
                            <td>{builders.is_redirect}</td>
                        </tr>
                        <tr>
                            <th>Site key</th>
                            <td>{builders.site_key}</td>
                        </tr>
                        <tr>
                            <th>Secret key</th>
                            <td>{builders.secret_key}</td>
                        </tr>
                        <tr>
                            <th>Created at</th>
                            <td>{timeTag(builders.created_at)}</td>
                        </tr>
                        <tr>
                            <th>Updated at</th>
                            <td>{timeTag(builders.updated_at)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <nav className="rw-button-group">
                <Link
                    to={routes.editBuilders({ id: builders.id })}
                    className="rw-button rw-button-blue"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="rw-button rw-button-red"
                    onClick={() => onDeleteClick(builders.id)}
                >
                    Delete
                </button>
            </nav>
        </>
    );
};

export default Builders;
