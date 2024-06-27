import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
    image: {
      type: String,
    },
  },
});

/**
 * Since we are running in a serverless environment -
 * The "models" object is provided by the Mongoose library and stores all the registered models
 *
 * If a model with <name> already exists, it assigned that existing model to the variable.
 *
 * If not, a new model is created
 */
const User = models.User || model("User", UserSchema);
export default User;

/**
 * In a constantly running environment, we would do the following:
 *
 * const User = model("User", UserSchema);
 */
