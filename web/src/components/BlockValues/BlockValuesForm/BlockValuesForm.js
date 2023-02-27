import {
    Form,
    FormError,
    FieldError,
    Label,
    TextField,
    DatetimeLocalField,
    Submit
} from '@redwoodjs/forms';

const formatDatetime = (value) => {
    if (value) {
        return value.replace(/:\d{2}\.\d{3}\w/, '');
    }
};

const BlockValuesForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.blockValues?.id);
    };

    return (
        <div className="rw-form-wrapper">
            <Form onSubmit={onSubmit} error={props.error}>
                <FormError
                    error={props.error}
                    wrapperClassName="rw-form-error-wrapper"
                    titleClassName="rw-form-error-title"
                    listClassName="rw-form-error-list"
                />

                <Label
                    name="code"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Code
                </Label>

                <TextField
                    name="code"
                    defaultValue={props.blockValues?.code}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="code" className="rw-field-error" />

                <Label
                    name="block_id"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Block id
                </Label>

                <TextField
                    name="block_id"
                    defaultValue={props.blockValues?.block_id}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="block_id" className="rw-field-error" />

                <Label
                    name="position"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Position
                </Label>

                <TextField
                    name="position"
                    defaultValue={props.blockValues?.position}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="position" className="rw-field-error" />

                <Label
                    name="key"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Key
                </Label>

                <TextField
                    name="key"
                    defaultValue={props.blockValues?.key}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="key" className="rw-field-error" />

                <Label
                    name="type"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Type
                </Label>

                <TextField
                    name="type"
                    defaultValue={props.blockValues?.type}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="type" className="rw-field-error" />

                <Label
                    name="created_at"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Created at
                </Label>

                <DatetimeLocalField
                    name="created_at"
                    defaultValue={formatDatetime(props.blockValues?.created_at)}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="created_at" className="rw-field-error" />

                <Label
                    name="updated_at"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Updated at
                </Label>

                <DatetimeLocalField
                    name="updated_at"
                    defaultValue={formatDatetime(props.blockValues?.updated_at)}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="updated_at" className="rw-field-error" />

                <div className="rw-button-group">
                    <Submit
                        disabled={props.loading}
                        className="rw-button rw-button-blue"
                    >
                        Save
                    </Submit>
                </div>
            </Form>
        </div>
    );
};

export default BlockValuesForm;
