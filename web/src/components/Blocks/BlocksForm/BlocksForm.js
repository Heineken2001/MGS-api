import {
    Form,
    FormError,
    FieldError,
    Label,
    CheckboxField,
    TextField,
    DatetimeLocalField,
    Submit
} from '@redwoodjs/forms';

const formatDatetime = (value) => {
    if (value) {
        return value.replace(/:\d{2}\.\d{3}\w/, '');
    }
};

const BlocksForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.blocks?.id);
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
                    name="is_active"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Is active
                </Label>

                <CheckboxField
                    name="is_active"
                    defaultChecked={props.blocks?.is_active}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="is_active" className="rw-field-error" />

                <Label
                    name="html"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Html
                </Label>

                <TextField
                    name="html"
                    defaultValue={props.blocks?.html}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="html" className="rw-field-error" />

                <Label
                    name="scss"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Scss
                </Label>

                <TextField
                    name="scss"
                    defaultValue={props.blocks?.scss}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="scss" className="rw-field-error" />

                <Label
                    name="image_feature"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Image feature
                </Label>

                <TextField
                    name="image_feature"
                    defaultValue={props.blocks?.image_feature}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="image_feature" className="rw-field-error" />

                <Label
                    name="mobile"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Mobile
                </Label>

                <TextField
                    name="mobile"
                    defaultValue={props.blocks?.mobile}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="mobile" className="rw-field-error" />

                <Label
                    name="amp"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Amp
                </Label>

                <TextField
                    name="amp"
                    defaultValue={props.blocks?.amp}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="amp" className="rw-field-error" />

                <Label
                    name="created_at"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Created at
                </Label>

                <DatetimeLocalField
                    name="created_at"
                    defaultValue={formatDatetime(props.blocks?.created_at)}
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
                    defaultValue={formatDatetime(props.blocks?.updated_at)}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="updated_at" className="rw-field-error" />

                <Label
                    name="deleted_at"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Deleted at
                </Label>

                <DatetimeLocalField
                    name="deleted_at"
                    defaultValue={formatDatetime(props.blocks?.deleted_at)}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="deleted_at" className="rw-field-error" />

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

export default BlocksForm;
