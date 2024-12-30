import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFiles: {
      type: String, //cloudinary url
      required: true,
    },
    thumbnail: {
      type: String, //cloudinary url
      required: true,
    },
    title: {
      type: String, //cloudinary url
      required: true,
    },
    description: {
      type: String, //cloudinary url
      required: true,
    },
    duration: {
      type: Number, //cloudinary url
      required: true,
    },
    view: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean, //cloudinary url
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId, //cloudinary url
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// bcrypt is used for hash password
// token(JWT) IT MADE TOKEN AND IT HAVE 3 PART HEADER ,PAYLOAD ,VERIFY SIGNATURE

export const video = mongoose.model("video", userSchema);
