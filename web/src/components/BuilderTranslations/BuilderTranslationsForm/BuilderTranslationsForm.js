import {
    Form,
    FormError,
    FieldError,
    Label,
    TextField,
    TextAreaField,
    Submit
} from '@redwoodjs/forms';

const BuilderTranslationsForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.builderTranslations?.id);
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
                    name="builder_id"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Builder id
                </Label>

                <TextField
                    name="builder_id"
                    defaultValue={props.builderTranslations?.builder_id}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="builder_id" className="rw-field-error" />

                <Label
                    name="locale"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Locale
                </Label>

                <TextField
                    name="locale"
                    defaultValue={props.builderTranslations?.locale}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="locale" className="rw-field-error" />

                <Label
                    name="name"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Name
                </Label>

                <TextField
                    name="name"
                    defaultValue={props.builderTranslations?.name}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="name" className="rw-field-error" />

                <Label
                    name="body"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Body
                </Label>

                <TextField
                    name="body"
                    defaultValue={props.builderTranslations?.body}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="body" className="rw-field-error" />

                <Label
                    name="embedded"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Embedded
                </Label>

                <TextField
                    name="embedded"
                    defaultValue={props.builderTranslations?.embedded}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="embedded" className="rw-field-error" />

                <Label
                    name="jsonschemaform"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Jsonschemaform
                </Label>

                <TextAreaField
                    name="jsonschemaform"
                    defaultValue={JSON.stringify(
                        props.builderTranslations?.jsonschemaform
                    )}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ valueAsJSON: true, required: true }}
                />

                <FieldError name="jsonschemaform" className="rw-field-error" />

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

export default BuilderTranslationsForm;
