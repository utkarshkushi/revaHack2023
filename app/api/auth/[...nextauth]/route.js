import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';



import { connectToDB } from '@utils/database';
import User from '@models/user';
import { createAccount } from '@utils/createAccount';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        })
    ],
    async session({ session }) {
        const sessionUser = await User.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString();

        return session
    },
    async signIn({ profile }) {
        try {
            await connectToDB();

            // check if user exists 
            const userExists = await User.findOne({
                email: profile.email
            })

            if (!userExists) {
                let arr =  createAccount()

                // console.log("arr is ........." + arr)

                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture,
                    publicAddress: arr['address'],
                    privateKey: arr['privateKey']
                })
            }

            return true
        } catch (error) {
            return false
        }

    }
})

export { handler as GET, handler as POST }