import {
    Form,
    FormError,
    FieldError,
    Label,
    TextField,
    TextAreaField,
    CheckboxField,
    DatetimeLocalField,
    Submit
} from '@redwoodjs/forms';

const formatDatetime = (value) => {
    if (value) {
        return value.replace(/:\d{2}\.\d{3}\w/, '');
    }
};

const CollectionsForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.collections?.id);
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
                    name="target"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Target
                </Label>

                <TextField
                    name="target"
                    defaultValue={props.collections?.target}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="target" className="rw-field-error" />

                <Label
                    name="conditions"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Conditions
                </Label>

                <TextAreaField
                    name="conditions"
                    defaultValue={JSON.stringify(props.collections?.conditions)}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ valueAsJSON: true }}
                />

                <FieldError name="conditions" className="rw-field-error" />

                <Label
                    name="type"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Type
                </Label>

                <TextField
                    name="type"
                    defaultValue={props.collections?.type}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="type" className="rw-field-error" />

                <Label
                    name="is_active"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Is active
                </Label>

                <CheckboxField
                    name="is_active"
                    defaultChecked={props.collections?.is_active}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="is_active" className="rw-field-error" />

                <Label
                    name="deleted_at"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Deleted at
                </Label>

                <DatetimeLocalField
                    name="deleted_at"
                    defaultValue={formatDatetime(props.collections?.deleted_at)}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="deleted_at" className="rw-field-error" />

                <Label
                    name="created_at"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Created at
                </Label>

                <DatetimeLocalField
                    name="created_at"
                    defaultValue={formatDatetime(props.collections?.created_at)}
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
                    defaultValue={formatDatetime(props.collections?.updated_at)}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="updated_at" className="rw-field-error" />

                <Label
                    name="post_type"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Post type
                </Label>

                <TextField
                    name="post_type"
                    defaultValue={props.collections?.post_type}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="post_type" className="rw-field-error" />

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

export default CollectionsForm;
