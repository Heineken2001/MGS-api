import {
    Form,
    FormError,
    FieldError,
    Label,
    TextField,
    Submit
} from '@redwoodjs/forms';

const ChannelTranslationsForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.channelTranslations?.id);
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
                    name="channel_id"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Channel id
                </Label>

                <TextField
                    name="channel_id"
                    defaultValue={props.channelTranslations?.channel_id}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="channel_id" className="rw-field-error" />

                <Label
                    name="locale"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Locale
                </Label>

                <TextField
                    name="locale"
                    defaultValue={props.channelTranslations?.locale}
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
                    defaultValue={props.channelTranslations?.name}
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
                    defaultValue={props.channelTranslations?.body}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="body" className="rw-field-error" />

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

export default ChannelTranslationsForm;
