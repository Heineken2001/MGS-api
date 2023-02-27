import {
    Form,
    FormError,
    FieldError,
    Label,
    TextField,
    Submit
} from '@redwoodjs/forms';

const TemplateTranslationsForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.templateTranslations?.id);
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
                    name="template_id"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Template id
                </Label>

                <TextField
                    name="template_id"
                    defaultValue={props.templateTranslations?.template_id}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="template_id" className="rw-field-error" />

                <Label
                    name="slug"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Slug
                </Label>

                <TextField
                    name="slug"
                    defaultValue={props.templateTranslations?.slug}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="slug" className="rw-field-error" />

                <Label
                    name="title"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Title
                </Label>

                <TextField
                    name="title"
                    defaultValue={props.templateTranslations?.title}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="title" className="rw-field-error" />

                <Label
                    name="locale"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Locale
                </Label>

                <TextField
                    name="locale"
                    defaultValue={props.templateTranslations?.locale}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="locale" className="rw-field-error" />

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

export default TemplateTranslationsForm;
