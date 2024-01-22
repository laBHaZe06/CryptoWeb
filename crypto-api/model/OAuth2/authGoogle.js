const GoogleStrategy = require("passport-google-oauth2").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const db = require("../../helper/db");
const config = require('../../config.json');
const { UniqueConstraintError } = require("sequelize");
const crypto = require("crypto");

module.exports = function (passport) {

        passport.use(
            new GoogleStrategy({
                    clientID: process.env.GOOGLE_CLIENT_ID || "131515680100-sb9rhpqs9hhu2qqkrir3v41a2h6gp3vt.apps.googleusercontent.com",
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET || "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",
                    callbackURL: "http://20.224.16.120:5000/api/callback",
                    passReqToCallback: true,
                },  
                
                async (request, accessToken, refreshToken, user, done) => {

                    const email = user.email;
                    try {
                        
                        const userClient = await db.Users.findOne({where: {email: email} });

                        if (userClient) {
                            console.log('User already exists in our database');
                            console.log('We update the new token google, please wait...');
                            userClient.google_token = accessToken;
                            await userClient.save();
                            console.log('Thank you, the token has been updated successfully');
                            return done(null, userClient);

                            } else {

                            console.log('Email not exist in db so we creating new user, please wait...');

                            const pass = crypto.randomBytes(16).toString("hex");
                            
                            console.log('We generate a random password for you: ' + pass);
                            //mettre à jour les données de l'utilisateur
                            const newUser = new db.Users({
                                email: email,
                                google_token: accessToken,
                                username: 'User',
                                password: pass,
                                role: 'User',
                                });

                            await newUser.save();
                            console.log('Thank you, the user has been created successfully');
                            return done(null, newUser);
                        }


                    } catch (error) {
                        return done(error, false)
                    }
                },
            )),
            passport.use(
                new JwtStrategy(
                        {
                            jwtFromRequest: ExtractJwt.fromHeader("authorization"),
                            secretOrKey: config.secret,
                        },
                    async (jwtPayload, done) => {
                        try {
                            const user = jwtPayload.user;
                            done(null, user); 
                        } catch (error) {
                            done(error, false);
                        }
                    }
                )),
                    passport.serializeUser(function (user, done) {
                        done(null, user);
                    }
                ),
                    passport.deserializeUser(function (user, done) {
                        done(null, user);
                    }
                ) 
        }
            
            