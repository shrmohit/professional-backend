// it is used to file uploud in backend
import { v2 } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "process.env.CLOUDINARY_CLOUD_NAME",
  api_key: "process.env.CLOUDINARY_API_KEY",
  api_secret: "process.env.CLOUDINARY_API_SECRET", // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been upload successfull
    console.log("file in uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved tempory file as the upload operation got failed
  }
};

export { uploadOnCloudinary };
