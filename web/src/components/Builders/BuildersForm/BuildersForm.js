import {
    Form,
    FormError,
    FieldError,
    Label,
    TextField,
    CheckboxField,
    DatetimeLocalField,
    Submit
} from '@redwoodjs/forms';

const formatDatetime = (value) => {
    if (value) {
        return value.replace(/:\d{2}\.\d{3}\w/, '');
    }
};

const BuildersForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.builders?.id);
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
                    name="slug"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Slug
                </Label>

                <TextField
                    name="slug"
                    defaultValue={props.builders?.slug}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="slug" className="rw-field-error" />

                <Label
                    name="is_active"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Is active
                </Label>

                <CheckboxField
                    name="is_active"
                    defaultChecked={props.builders?.is_active}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="is_active" className="rw-field-error" />

                <Label
                    name="is_captcha"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Is captcha
                </Label>

                <CheckboxField
                    name="is_captcha"
                    defaultChecked={props.builders?.is_captcha}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="is_captcha" className="rw-field-error" />

                <Label
                    name="is_redirect"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Is redirect
                </Label>

                <TextField
                    name="is_redirect"
                    defaultValue={props.builders?.is_redirect}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="is_redirect" className="rw-field-error" />

                <Label
                    name="site_key"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Site key
                </Label>

                <TextField
                    name="site_key"
                    defaultValue={props.builders?.site_key}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="site_key" className="rw-field-error" />

                <Label
                    name="secret_key"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Secret key
                </Label>

                <TextField
                    name="secret_key"
                    defaultValue={props.builders?.secret_key}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="secret_key" className="rw-field-error" />

                <Label
                    name="created_at"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Created at
                </Label>

                <DatetimeLocalField
                    name="created_at"
                    defaultValue={formatDatetime(props.builders?.created_at)}
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
                    defaultValue={formatDatetime(props.builders?.updated_at)}
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

export default BuildersForm;
