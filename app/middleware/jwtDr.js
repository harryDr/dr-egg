module.exports = options => {
    return async function jwtDr(ctx, next) {
        const token = ctx.request.header.authorization;
        let decode = null
        if (token) {
            try {
                // 解码token
                console.log(options,'options')
                decode = ctx.app.jwt.verify(token, options.secret);
                await next();
                console.log(decode);
            } catch (error) {
                ctx.status = 401;
                ctx.body = {
                    code: 401,
                    message: error.message,
                };
                return;
            }
        } else {
            ctx.status = 401;
            ctx.body = {
                message: '没有token',
            };
            return;
        }
    };
};
