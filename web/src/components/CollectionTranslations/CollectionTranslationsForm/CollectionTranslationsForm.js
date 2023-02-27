import {
    Form,
    FormError,
    FieldError,
    Label,
    TextField,
    TextAreaField,
    Submit
} from '@redwoodjs/forms';

const CollectionTranslationsForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.collectionTranslations?.id);
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
                    name="collection_id"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Collection id
                </Label>

                <TextField
                    name="collection_id"
                    defaultValue={props.collectionTranslations?.collection_id}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="collection_id" className="rw-field-error" />

                <Label
                    name="locale"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Locale
                </Label>

                <TextField
                    name="locale"
                    defaultValue={props.collectionTranslations?.locale}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="locale" className="rw-field-error" />

                <Label
                    name="slug"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Slug
                </Label>

                <TextField
                    name="slug"
                    defaultValue={props.collectionTranslations?.slug}
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
                    defaultValue={props.collectionTranslations?.title}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="title" className="rw-field-error" />

                <Label
                    name="short_description"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Short description
                </Label>

                <TextField
                    name="short_description"
                    defaultValue={
                        props.collectionTranslations?.short_description
                    }
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError
                    name="short_description"
                    className="rw-field-error"
                />

                <Label
                    name="long_description"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Long description
                </Label>

                <TextField
                    name="long_description"
                    defaultValue={
                        props.collectionTranslations?.long_description
                    }
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError
                    name="long_description"
                    className="rw-field-error"
                />

                <Label
                    name="featured_image"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Featured image
                </Label>

                <TextField
                    name="featured_image"
                    defaultValue={props.collectionTranslations?.featured_image}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="featured_image" className="rw-field-error" />

                <Label
                    name="formdata"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Formdata
                </Label>

                <TextAreaField
                    name="formdata"
                    defaultValue={JSON.stringify(
                        props.collectionTranslations?.formdata
                    )}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ valueAsJSON: true }}
                />

                <FieldError name="formdata" className="rw-field-error" />

                <Label
                    name="jsonschema"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Jsonschema
                </Label>

                <TextAreaField
                    name="jsonschema"
                    defaultValue={JSON.stringify(
                        props.collectionTranslations?.jsonschema
                    )}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ valueAsJSON: true }}
                />

                <FieldError name="jsonschema" className="rw-field-error" />

                <Label
                    name="uischema"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Uischema
                </Label>

                <TextAreaField
                    name="uischema"
                    defaultValue={JSON.stringify(
                        props.collectionTranslations?.uischema
                    )}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ valueAsJSON: true }}
                />

                <FieldError name="uischema" className="rw-field-error" />

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

export default CollectionTranslationsForm;
