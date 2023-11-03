import { Schema, model, models  } from "mongoose";

const UserSchema = new Schema({
    email: {
      type: String,
      unique: [true, 'Email already exists!'],
      required: [true, 'Email is required!'],
    },
    username: {
      type: String,
      required: [true, 'Username is required!']
    },
    publicAddress: {
        type: String,
        required: [true, 'public Address is required!']
    },
    privateKey: {
        type: String,
        required: [true, 'Private Key is required!']
    }
  });

  const User = models.User || model("User", UserSchema);

  export default User;