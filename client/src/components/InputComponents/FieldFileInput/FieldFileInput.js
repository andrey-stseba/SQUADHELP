import React from 'react';
import { Field } from 'formik';

const FieldFileInput = ({ classes, name }) => {
  const { fileUploadContainer, labelClass, fileNameClass, fileInput } = classes;

  return (
    <Field name={name}>
      {props => {
        const { field, form } = props;

        const getFileName = () => {
          if (field.value) {
            return field.value.name;
          }
          return '';
        };
        const onChange = e => {
          form.setFieldValue('file', e.target.files[0]);
        };

        return (
          <div className={fileUploadContainer}>
            <label htmlFor='fileInput' className={labelClass}>
              Choose file
            </label>
            <span id='fileNameContainer' className={fileNameClass}>
              {getFileName()}
            </span>
            <input
              {...field}
              value={undefined}
              onChange={onChange}
              className={fileInput}
              id='fileInput'
              type='file'
            />
          </div>
        );
      }}
    </Field>
  );
};

export default FieldFileInput;
