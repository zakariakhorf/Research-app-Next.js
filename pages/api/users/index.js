import User from 'lib/user'
import Mongoose from 'mongoose'
export default async function (req, res) {
	Mongoose.connect('mongodb+srv://snackeet:snackeet@cluster0.csezk.mongodb.net/snackeet', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).then(() => console.log('MongoDB connected')).catch((err) => console.log(err));
	const users = await User.find()
	return users
}
