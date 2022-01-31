import mongoose from 'mongoose';
import User from '../../../../db/models/User';
import ModError from '../../utils/error';

export default async (root: any, args: any, ctx: any) => {
  try {
    const { id, confirmed } = args;

    const userExist = await User.findOne({
      _id: mongoose.Types.ObjectId(id),
    });

    if (!userExist) {
      throw new ModError(404, 'User not found');
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(id) },
      {
        $set: {
          confirmed: confirmed,
        },
      },
      { new: true }
    );

    const { __v, ...returnCustomerData } = updatedUser.toObject();

    return returnCustomerData;
  } catch (err) {
    throw new Error(err.message);
  }
};
