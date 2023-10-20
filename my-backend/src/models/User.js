import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

// Define the User schema
const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Other user-related fields can be added here
});

// Hash the user's password before saving it to the database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    return next();
  } catch (error) {
    return next(error);
  }
});

// Compare user passwords for login authentication
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;
