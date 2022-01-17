import React from 'react';
import classNames from 'classnames';
import { useField } from 'formik';

const ImageUpload = props => {
  const [field, meta, helpers] = useField(props.name);
  const { setValue } = helpers;

  const {
    uploadContainer,
    inputContainer,
    imgStyle,
    textStyle
  } = props.classes;
  const onChange = e => {
    const node = window.document.getElementById('imagePreview');
    const file = e.target.files[0];
    const imageType = /image\/png|jpeg|gif|jpg/;
    const messageError = window.document.getElementById('messageError');

    if (!file.type.match(imageType)) {
      e.target.value = '';
      messageError.textContent = 'Error of loading! Please, add only images.';
    } else {
      messageError.textContent = '';
      const reader = new FileReader();
      reader.onload = () => {
        node.src = reader.result;
      };
      reader.readAsDataURL(file);
      setValue(file);
    }
  };
  return (
    <div className={uploadContainer}>
      <div className={inputContainer}>
        <span>Support only images (*.png, *.gif, *.jpeg)</span>
        <input
          {...field}
          id='fileInput'
          value={undefined}
          type='file'
          accept='.jpg, .png, .jpeg'
          onChange={onChange}
        />

        <label htmlFor='fileInput'>Chose file</label>
        <span id='messageError' className={textStyle}></span>
      </div>
      <img
        id='imagePreview'
        className={classNames({ [imgStyle]: !!field.value })}
        alt='user'
      />
    </div>
  );
};

export default ImageUpload;
