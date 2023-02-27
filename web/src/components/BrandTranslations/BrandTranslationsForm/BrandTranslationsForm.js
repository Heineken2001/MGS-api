import {
    Form,
    FormError,
    FieldError,
    Label,
    TextField,
    Submit
} from '@redwoodjs/forms';

const BrandTranslationsForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.brandTranslations?.id);
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
                    name="brand_id"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Brand id
                </Label>

                <TextField
                    name="brand_id"
                    defaultValue={props.brandTranslations?.brand_id}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="brand_id" className="rw-field-error" />

                <Label
                    name="locale"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Locale
                </Label>

                <TextField
                    name="locale"
                    defaultValue={props.brandTranslations?.locale}
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
                    defaultValue={props.brandTranslations?.name}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="name" className="rw-field-error" />

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

export default BrandTranslationsForm;
