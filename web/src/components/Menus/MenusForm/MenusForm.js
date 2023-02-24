import {
    Form,
    FormError,
    FieldError,
    Label,
    CheckboxField,
    DatetimeLocalField,
    NumberField,
    Submit
} from '@redwoodjs/forms';

const formatDatetime = (value) => {
    if (value) {
        return value.replace(/:\d{2}\.\d{3}\w/, '');
    }
};

const MenusForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.menus?.id);
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
                    defaultChecked={props.menus?.is_active}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="is_active" className="rw-field-error" />

                <Label
                    name="created_at"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Created at
                </Label>

                <DatetimeLocalField
                    name="created_at"
                    defaultValue={formatDatetime(props.menus?.created_at)}
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
                    defaultValue={formatDatetime(props.menus?.updated_at)}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="updated_at" className="rw-field-error" />

                <Label
                    name="position"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Position
                </Label>

                <NumberField
                    name="position"
                    defaultValue={props.menus?.position}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="position" className="rw-field-error" />

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

export default MenusForm;
