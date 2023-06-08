import React, { useState, ChangeEvent, DragEvent, useEffect } from 'react';
import classes from './Dropzone.module.css';
import uuid from 'react-uuid';

import { ReactComponent as DragDropIcon } from '../../../assets/drag-drop-icon.svg';
import { ReactComponent as AcceptIcon } from '../../../assets/accept-icon.svg';
import { ReactComponent as ErrorIcon } from '../../../assets/error-icon.svg';
import { ReactComponent as CrossIcon } from '../../../assets/cross-icon.svg';
import { FileDataInterface } from '../../types/types';
import { useAppSelector } from '../../hooks/hooks';

interface Props {
  title: string;
  limitFileSize: number;
  onClose: () => void;
}

const Dropzone = (props: Props) => {
  const [selectedFiles, setSelectedFiles] = useState<null | FileDataInterface[]>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [confirmIsDisable, setConfirmIsDisable] = useState(true);
  const [uploaded, setUploaded] = useState();

  const { usedPalette } = useAppSelector((state) => state.settings);

  const maxSizeOfFile = props.limitFileSize * 1024 * 1024;

  const updateSelectedFilesHandler = (files: FileList) => {
    const updatedFilesArray = Array.from(files).map((el: any) => {
      el.id = uuid();
      return el;
    });

    setSelectedFiles((prevState) => {
      if (prevState !== null) {
        return [...prevState, ...updatedFilesArray];
      }

      return updatedFilesArray;
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      updateSelectedFilesHandler(files);
    }
  };

  const cancelFileUpload = () => {
    props.onClose();

    setSelectedFiles(null);
  };

  const handleUpload = async () => {
    if (!selectedFiles) {
      console.log('Please select a file');
      return;
    }

    const formData = new FormData();

    selectedFiles.forEach((file) => {
      formData.append('file', file);
    });

    const res = await fetch('test', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();

    setUploaded(data);
  };

  const validateFileSize = (fileSize: number) => {
    return maxSizeOfFile >= fileSize;
  };

  const formatFileSize = (bytes: number) => {
    return `${Math.ceil(bytes / 1024)} KB`;
  };

  const findFileWithExcessiveSize = (files: File[]): boolean => {
    return files.some((el: File) => el.size > maxSizeOfFile);
  };

  const removeUploadedFile = (fileId: string) => {
    if (selectedFiles) {
      const files = [...selectedFiles];
      const updatedFilesArray = files.filter((el) => el.id !== fileId);

      setSelectedFiles(updatedFilesArray);
    }
  };

  const dragStartHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsDrag(true);
  };

  const dragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setIsDrag(false);
  };

  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const files = e.dataTransfer.files;

    if (files) {
      updateSelectedFilesHandler(files);
    }

    setIsDrag(false);
  };

  useEffect(() => {
    if (selectedFiles) {
      const hasExceededSizeLimit = findFileWithExcessiveSize(selectedFiles);

      setConfirmIsDisable(hasExceededSizeLimit);
    }
  }, [selectedFiles]);

  return (
    <div className={classes.dropzone}>
      <h2 className={classes.title}>{props.title}</h2>
      <form>
        {selectedFiles && selectedFiles.length > 0 ? (
          <div>
            <ul className={classes.files}>
              {selectedFiles.map((el: any) => {
                return (
                  <li key={el.id} className={classes.file}>
                    <div className={classes['file-left']}>
                      {validateFileSize(el.size) ? (
                        <AcceptIcon className={classes.icon} />
                      ) : (
                        <ErrorIcon className={classes.icon} />
                      )}
                      <span className={classes['file-name']}>{el.name}</span>
                    </div>
                    <div className={classes['file-right']}>
                      <span className={classes['file-size']}>{formatFileSize(el.size)}</span>
                      <button
                        type="button"
                        className={classes['file-remove']}
                        onClick={() => removeUploadedFile(el.id)}>
                        <CrossIcon />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            {findFileWithExcessiveSize(selectedFiles) ? (
              <div className={classes['message-file-error']}>
                <p>
                  One or more files above are invalid. Please review and confirm that they are valid
                  file types and are below 3MB. To ignore and continue, hit ‘Confirm.’
                </p>
              </div>
            ) : (
              ''
            )}
            <label className={classes['label-file']}>
              <span>Upload more images</span>
              <input
                type="file"
                accept=".jpg, .jpeg, .png, .svg, image/jpg, image/jpeg, image/png, image/svg"
                multiple
                onChange={handleChange}
              />
            </label>
          </div>
        ) : (
          <div
            className={classes['dropzone_area']}
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragStartHandler(e)}
            onDrop={(e) => onDropHandler(e)}>
            <input
              className={classes['file-input']}
              type="file"
              accept=".jpg, .jpeg, .png, .svg, image/jpg, image/jpeg, image/png, image/svg"
              multiple
              onChange={handleChange}
            />
            <DragDropIcon className={classes['upload-icon']} />
            <span>
              {isDrag
                ? 'Drop the file in to the zone'
                : 'Click to upload or drag images into this space.'}
            </span>
          </div>
        )}
        <ul className={classes.actions}>
          <li>
            <button
              onClick={cancelFileUpload}
              type="button"
              className={`
                  ${classes.btn}
                  ${classes['btn-transparent']} 
                `}>
              Cancel
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`
                  ${classes['btn']} 
                `}
              style={{
                backgroundColor: usedPalette ? `${usedPalette.colorAccent.hex}` : '#EDBC33'
              }}
              disabled={confirmIsDisable}
              onClick={handleUpload}>
              Confirm
            </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Dropzone;
