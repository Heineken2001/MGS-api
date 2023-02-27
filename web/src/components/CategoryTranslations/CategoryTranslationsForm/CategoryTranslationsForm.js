import {
    Form,
    FormError,
    FieldError,
    Label,
    TextField,
    TextAreaField,
    Submit
} from '@redwoodjs/forms';

const CategoryTranslationsForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.categoryTranslations?.id);
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
                    name="category_id"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Category id
                </Label>

                <TextField
                    name="category_id"
                    defaultValue={props.categoryTranslations?.category_id}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="category_id" className="rw-field-error" />

                <Label
                    name="locale"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Locale
                </Label>

                <TextField
                    name="locale"
                    defaultValue={props.categoryTranslations?.locale}
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
                    defaultValue={props.categoryTranslations?.name}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="name" className="rw-field-error" />

                <Label
                    name="content"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Content
                </Label>

                <TextField
                    name="content"
                    defaultValue={props.categoryTranslations?.content}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="content" className="rw-field-error" />

                <Label
                    name="description"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Description
                </Label>

                <TextField
                    name="description"
                    defaultValue={props.categoryTranslations?.description}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="description" className="rw-field-error" />

                <Label
                    name="slug"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Slug
                </Label>

                <TextField
                    name="slug"
                    defaultValue={props.categoryTranslations?.slug}
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
                    defaultValue={props.categoryTranslations?.title}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
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
                    defaultValue={props.categoryTranslations?.short_description}
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
                    defaultValue={props.categoryTranslations?.long_description}
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
                    defaultValue={props.categoryTranslations?.featured_image}
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
                        props.categoryTranslations?.formdata
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
                        props.categoryTranslations?.jsonschema
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
                        props.categoryTranslations?.uischema
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

export default CategoryTranslationsForm;
