import React from 'react'
import s from './FormsControls.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};

export const createField = (placeholder, name, validate, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validate}
               component={component}
               {...props}/>{text}
    </div>);

export const Dialog = ({input, meta}) => {

    const error = meta.touched && meta.error;

    return (
        <div>
            <textarea className={error ? s.textareaDialog + ' ' + s.error :
                s.textareaDialog} {...input} />
            {error && <span className={s.errorMessage}>{meta.error}</span>}
        </div>
    )
};

