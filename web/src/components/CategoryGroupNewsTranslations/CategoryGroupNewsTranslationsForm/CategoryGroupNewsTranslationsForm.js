import {
    Form,
    FormError,
    FieldError,
    Label,
    TextField,
    Submit
} from '@redwoodjs/forms';

const CategoryGroupNewsTranslationsForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.categoryGroupNewsTranslations?.id);
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
                    name="category_group_news_id"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Category group news id
                </Label>

                <TextField
                    name="category_group_news_id"
                    defaultValue={
                        props.categoryGroupNewsTranslations
                            ?.category_group_news_id
                    }
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError
                    name="category_group_news_id"
                    className="rw-field-error"
                />

                <Label
                    name="locale"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Locale
                </Label>

                <TextField
                    name="locale"
                    defaultValue={props.categoryGroupNewsTranslations?.locale}
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
                    defaultValue={props.categoryGroupNewsTranslations?.name}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="name" className="rw-field-error" />

                <Label
                    name="description"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Description
                </Label>

                <TextField
                    name="description"
                    defaultValue={
                        props.categoryGroupNewsTranslations?.description
                    }
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="description" className="rw-field-error" />

                <Label
                    name="title_2"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Title 2
                </Label>

                <TextField
                    name="title_2"
                    defaultValue={props.categoryGroupNewsTranslations?.title_2}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="title_2" className="rw-field-error" />

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

export default CategoryGroupNewsTranslationsForm;
