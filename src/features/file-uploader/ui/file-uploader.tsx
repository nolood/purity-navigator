import { useEffect } from "react";
import { UploadIcon } from "@/shared/ui/icons";

interface FileUploaderProps {
  onChange?: (file: File | null) => void;
  image?: File | null;
}
const FileUploader = ({ onChange, image }: FileUploaderProps) => {
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      // reader.onload = (e) => setLocalImage(e.target?.result as string);
      reader.readAsDataURL(image);
    }
  }, [image]);

  return (
    <div className="flex px-[10px] gap-[10px] items-center h-[52px] pt-[5px] w-full max-w-[400px] cursor-pointer select-none outline-dashed rounded-[8px] outline-primary outline-[1px] relative">
      <UploadIcon />
      <p className={"text-textPrimary text-[14px]"}>
        Выберите файл{" "}
        <span className={"text-textSecondary"}>или перетащите его сюда</span>
      </p>

      <input
        className="w-full h-full absolute top-0 left-0 opacity-0 z-[5]"
        type="file"
        accept=".jpg, .jpeg, .png, .webp"
        onChange={(e) =>
          onChange && onChange(e.target.files ? e.target.files[0] : null)
        }
      />
    </div>
  );
};

export default FileUploader;
