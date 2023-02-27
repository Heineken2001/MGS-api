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

const CategoryNewsForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.categoryNews?.id);
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
                    name="parent_id"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Parent id
                </Label>

                <TextField
                    name="parent_id"
                    defaultValue={props.categoryNews?.parent_id}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="parent_id" className="rw-field-error" />

                <Label
                    name="slug"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Slug
                </Label>

                <TextField
                    name="slug"
                    defaultValue={props.categoryNews?.slug}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="slug" className="rw-field-error" />

                <Label
                    name="position"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Position
                </Label>

                <TextField
                    name="position"
                    defaultValue={props.categoryNews?.position}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="position" className="rw-field-error" />

                <Label
                    name="is_searchable"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Is searchable
                </Label>

                <CheckboxField
                    name="is_searchable"
                    defaultChecked={props.categoryNews?.is_searchable}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="is_searchable" className="rw-field-error" />

                <Label
                    name="is_active"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Is active
                </Label>

                <CheckboxField
                    name="is_active"
                    defaultChecked={props.categoryNews?.is_active}
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
                    defaultValue={formatDatetime(
                        props.categoryNews?.created_at
                    )}
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
                    defaultValue={formatDatetime(
                        props.categoryNews?.updated_at
                    )}
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

export default CategoryNewsForm;
