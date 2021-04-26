# Lambda University - August 30, 2017: Day 042, Wednesday
## Coding Challenge #38
- "Reverse Number" available in https://repl.it/student/submissions/1460542
***
# [1st Lecture](https://youtu.be/rXC7bsRuE8A) w/Ben Nelson: Review Code Challenge #37: armstrongNumbers
- https://repl.it/student/submissions/1454546

***
#### LUNCH
***
# [2nd Lecture](NO_VIDEO_RECORDED) w/Ivan Mora: LS-Greenfield Student Demos
***
# [3rd Lecture](NO_VIDEO_RECORDED) w/Ivan Mora: LS-Greenfield Review
- https://docs.google.com/document/d/1TAlJdhb7xnxOW_zPZ4MKuSSVmiTRksBcl9jkJ761z2o/edit

***
# [4th Lecture](https://youtu.be/sqf1bh7kD3I) w/Sean Checn: LS-Client-Auth Intro
- https://github.com/LambdaSchool/Client-Auth-mini
### [@50s](https://youtu.be/sqf1bh7kD3I?t=50s) - Sessions vs JSON Web Tokens (JWT)
1. Sessions vs JSON Web Tokens (JWT)
  - w/JWT, client handles State instead of server maintaining each clients session data
  - JWT adds more complexity to the client, Sessions maight be simpler to implement, but not as scalable
  - https://github.com/auth0/node-jsonwebtoken
  - https://github.com/expressjs/session
### [@7m22s](https://youtu.be/sqf1bh7kD3I?t=7m22s) - Local storage
2. Local storage
  - Window.localStorage
  - https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  - `localStorage.setItem()`, `localStorage.getItem()`, `localStorage.removeItem()`
### [@10m30s](https://youtu.be/sqf1bh7kD3I?t=10m30s) - C.O.R.S.
3. CORS (Cross Origin Resource Sharing)
  - https://github.com/expressjs/cors
  - Same origin policy: same protocol, host and port
  - expressjs cors middleware
  - production use case, usually only add cors to routes you want to be public
### [@15m50s](https://youtu.be/sqf1bh7kD3I?t=15m50s) - HOC
4. React Higher Order Components - HOC
- available only to authenticated users


***
# [5th Lecture](VIDEO_RECORDED_NOT_POSTED) w/Ryan Hamblin: LS-Client-Auth-mini solution & LS-Client-Auth release
- Pair Programming #15: https://github.com/LambdaSchool/Client-Auth w/Steve
- Anecdotal example with Authentication: https://nokepro.com/login
- JWT (pronounced "jot") https://jwt.io/
- 3 parts Hash, Sha algo (has been hacked??),
- express-passport https://www.npmjs.com/package/passport
- protecting your endpoints
- OAuth
- `req.session.destroy()` vs Passports `req.logout()`
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
- JWT is the architecture, e.g. passport uses JWT

# Sprint / Q&A
***
# fin
