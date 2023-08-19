import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const password = encodeURIComponent(process.env.DB_PASSWORD);

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: `mongodb+srv://${process.env.DB_USERNAME}:${password}@cluster0.amnk3hs.mongodb.net/next_dashboard_DB?retryWrites=true&w=majority`,
  session: {
    jwt: true,
  },
  jwt: {
    secret: "flidfgwkekjf",
  },
});
