import {
  Accept,
  DropEvent,
  FileError,
  FileRejection,
  FileWithPath,
  useDropzone,
} from "react-dropzone";
import { useCallback, useEffect, useState } from "react";
import { getSimpleMimeIcon, simplifyMimeType } from "../../utils/utils";
import { X } from "lucide-react";
import { ButtonSizesType, ColorSchemesType, VariantsType } from "../../utils/common-types";
import { Button } from "../button";
import { twMerge } from "tailwind-merge";

type ValidatorType = <T extends File>(
  file: T
) => FileError | readonly FileError[] | null;

type onDropType = <T extends File>(
  acceptedFiles: T[],
  fileRejections?: FileRejection[],
  event?: DropEvent
) => void;

type DropzoneTextConfig = {
  info?: string;
  accepted?: string;
  rejected?: string;
};

type DropzoneButton = {
  label: string,
  variant?: VariantsType,
  size?: ButtonSizesType,
  colorScheme?: ColorSchemesType,
}

type DropzoneButtons = {
  openFile?: DropzoneButton;
  reset?: DropzoneButton;
  process?: DropzoneButton;
}

type DropzoneProps = {
  accept?: Accept;
  maxFiles?: number;
  validator?: ValidatorType;
  onDrop?: onDropType;
  showFileDialogButton?: boolean;
  mode?: "full" | "simple";
  texts?: DropzoneTextConfig;
  className?: string;
  buttons?: DropzoneButtons;
  variant?: VariantsType;
};

interface FilesState<T extends File> {
  acceptedFiles: T[] | null;
  fileRejections: FileRejection[] | null;
}

const defaultOnDrop: onDropType = () => {};

const defaultValidator: ValidatorType = () => null;

const defaultFileState = {
  acceptedFiles: null,
  fileRejections: null,
};

const defaultTextConfig: DropzoneTextConfig = {
  info: "Drag 'n' drop some files here",
  accepted: "Accepted Files",
  rejected: "Rejected Files",
};

const defaultButtons: DropzoneButtons = {
  openFile: {
    label: "Open File Dialog",
    colorScheme: "outline",
  },
  reset: {
    label: "Reset",
    colorScheme: "danger",
  },
  process: {
    label: "Process Files",
    colorScheme: "success",
  },
}

export const Dropzone = ({
  accept,
  maxFiles = 0,
  validator = defaultValidator,
  onDrop = defaultOnDrop,
  showFileDialogButton = true,
  mode = "simple",
  texts = {},
  className = "",
  buttons = defaultButtons,
  variant = "rectangular",
}: DropzoneProps) => {
  const newTexts = { ...defaultTextConfig, ...texts };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDrop: mode === "simple" ? onDrop : defaultOnDrop,
    accept,
    maxFiles,
    validator,
    noClick: true,
    noKeyboard: true,
  });

  const [files, setFiles] =
    useState<FilesState<FileWithPath>>(defaultFileState);

  const reset = () => setFiles(defaultFileState);

  const handleProcess = useCallback(() => {
    if (files.acceptedFiles) onDrop(files.acceptedFiles);
  }, [onDrop, files.acceptedFiles]);

  useEffect(() => {
    setFiles({
      acceptedFiles: acceptedFiles.length === 0 ? null : [...acceptedFiles],
      fileRejections: fileRejections.length === 0 ? null : [...fileRejections],
    });
  }, [acceptedFiles, fileRejections, setFiles]);

  return (
    <div
      {...getRootProps()}
      className={twMerge(
        "border-2 shadow-[4px_4px_rgba(0,0,0,1)] p-2",
        isDragActive && "border-dashed",
        variant === "rounded" && "rounded-xl hoverflow-hidden",
        className
      )}
    >
      <input {...getInputProps()} />

      <div className="flex gap-4 items-center">
        <p className="font-bold">{newTexts.info}</p>
        {showFileDialogButton && buttons.openFile && 
          <Button onClick={open} {...buttons.openFile}>{buttons.openFile.label}</Button>
        }
      </div>

      {files.acceptedFiles && (
        <div>
          <p className="font-bold">{texts.accepted}</p>
          <ul>
            {files.acceptedFiles.map((file, i) => (
              <li key={"file-" + i}>
                <span className="flex gap-2">
                  {getSimpleMimeIcon(simplifyMimeType(file.type))}
                  {file.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {files.fileRejections && (
        <div>
          <p className="font-bold">{texts.rejected}</p>
          <ul>
            {files.fileRejections.map((rejection, i) => (
              <li key={"rejection-" + i}>
                <span className="flex gap-2">
                  {getSimpleMimeIcon(simplifyMimeType(rejection.file.type))}
                  {rejection.file.name}
                </span>
                {rejection.errors.map((error, i) => (
                  <span key={"rejection" + i} className="ml-10 flex">
                    <X />
                    {error.message}
                  </span>
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}

      {(files.acceptedFiles || files.fileRejections) && mode === "full" && (
        <div className="mt-2 pr-1 flex w-full justify-between">
          {buttons.reset && <Button onClick={reset} {...buttons.reset}>{buttons.reset.label}</Button>}
          {buttons.process && <Button onClick={handleProcess} {...buttons.process}>{buttons.process.label}</Button>}
        </div>
      )}
    </div>
  );
};
