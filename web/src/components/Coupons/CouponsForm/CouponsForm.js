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

const CouponsForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.coupons?.id);
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
                    name="code"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Code
                </Label>

                <TextField
                    name="code"
                    defaultValue={props.coupons?.code}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="code" className="rw-field-error" />

                <Label
                    name="value"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Value
                </Label>

                <TextField
                    name="value"
                    defaultValue={props.coupons?.value}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ valueAsNumber: true }}
                />

                <FieldError name="value" className="rw-field-error" />

                <Label
                    name="is_percent"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Is percent
                </Label>

                <CheckboxField
                    name="is_percent"
                    defaultChecked={props.coupons?.is_percent}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="is_percent" className="rw-field-error" />

                <Label
                    name="free_shipping"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Free shipping
                </Label>

                <CheckboxField
                    name="free_shipping"
                    defaultChecked={props.coupons?.free_shipping}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="free_shipping" className="rw-field-error" />

                <Label
                    name="minimum_spend"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Minimum spend
                </Label>

                <TextField
                    name="minimum_spend"
                    defaultValue={props.coupons?.minimum_spend}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ valueAsNumber: true }}
                />

                <FieldError name="minimum_spend" className="rw-field-error" />

                <Label
                    name="maximum_spend"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Maximum spend
                </Label>

                <TextField
                    name="maximum_spend"
                    defaultValue={props.coupons?.maximum_spend}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ valueAsNumber: true }}
                />

                <FieldError name="maximum_spend" className="rw-field-error" />

                <Label
                    name="usage_limit_per_coupon"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Usage limit per coupon
                </Label>

                <TextField
                    name="usage_limit_per_coupon"
                    defaultValue={props.coupons?.usage_limit_per_coupon}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError
                    name="usage_limit_per_coupon"
                    className="rw-field-error"
                />

                <Label
                    name="usage_limut_per_customer"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Usage limut per customer
                </Label>

                <TextField
                    name="usage_limut_per_customer"
                    defaultValue={props.coupons?.usage_limut_per_customer}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError
                    name="usage_limut_per_customer"
                    className="rw-field-error"
                />

                <Label
                    name="used"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Used
                </Label>

                <TextField
                    name="used"
                    defaultValue={props.coupons?.used}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="used" className="rw-field-error" />

                <Label
                    name="is_active"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Is active
                </Label>

                <CheckboxField
                    name="is_active"
                    defaultChecked={props.coupons?.is_active}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="is_active" className="rw-field-error" />

                <Label
                    name="start_date"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Start date
                </Label>

                <DatetimeLocalField
                    name="start_date"
                    defaultValue={formatDatetime(props.coupons?.start_date)}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="start_date" className="rw-field-error" />

                <Label
                    name="end_date"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    End date
                </Label>

                <DatetimeLocalField
                    name="end_date"
                    defaultValue={formatDatetime(props.coupons?.end_date)}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="end_date" className="rw-field-error" />

                <Label
                    name="deleted_at"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Deleted at
                </Label>

                <DatetimeLocalField
                    name="deleted_at"
                    defaultValue={formatDatetime(props.coupons?.deleted_at)}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                />

                <FieldError name="deleted_at" className="rw-field-error" />

                <Label
                    name="created_at"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Created at
                </Label>

                <DatetimeLocalField
                    name="created_at"
                    defaultValue={formatDatetime(props.coupons?.created_at)}
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
                    defaultValue={formatDatetime(props.coupons?.updated_at)}
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

export default CouponsForm;
