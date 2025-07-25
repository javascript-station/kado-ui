import heic2any from "heic2any";
import { nanoid } from "nanoid";
import imageCompression from "browser-image-compression";

export const processImage = async (file: File): Promise<File | null> => {
  try {
    let processedFile: File = file;

    if (processedFile.type === "image/heic" || processedFile.name.endsWith(".heic")) {
      const pngBlob = (await heic2any({ blob: processedFile, toType: "image/png", quality: 0.8 })) as Blob;
      processedFile = new File([pngBlob], processedFile.name.replace(/\.heic$/, ".png"), {
        type: "image/png",
      });
    }

    const splitedName = processedFile.name.split(".")
    const randName = `${nanoid()}.${splitedName[splitedName.length - 1]}`

    const compressedBlob = await imageCompression(processedFile, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
    });
    const compressedFile = new File([compressedBlob], randName, {
      type: processedFile.type,
    });

    return compressedFile;
  } catch (error) {
    console.error("Unknown error in processImage --->", error);

    return null;
  }
}
