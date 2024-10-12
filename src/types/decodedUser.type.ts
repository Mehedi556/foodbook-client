export interface DecodedUser {
    _id: string;
    name: string;
    email: string;
    role: string;
    profilePicture: string;
    memberStatus: {
      status: 'premium' | 'non-premium',
      expiresIn: Date
    };
    userStatus: string;
    isDeleted: boolean;
  }