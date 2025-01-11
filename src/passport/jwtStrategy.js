import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import "dotenv/config";
import { userService } from "../service/user.service.js";

const verifyToken = async (payload, done) => {
    try {
        const user = await userService.getById(payload.id); 
        if (!user) return done(null, false, { messages: "Usuario inexistente" });
        return done(null, user);
    } catch (error) {
        return done(error, false);
    }
};

const cookieExtractor = (req) => {
    return req.cookies.token;
};

const strategyCookiesConfig = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: process.env.SECRET_KEY,
};

passport.use('current', new Strategy(strategyCookiesConfig, verifyToken));

passport.serializeUser((user, done) => {
    try {
        done(null, user._id);
    } catch (error) {
        done(error);
    }
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userService.getById(id)
        return done(null, user);
    } catch (error) {
        done(error);
    }
});