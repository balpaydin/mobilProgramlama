import jwt from "jsonwebtoken";

const authCheck = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = jwt.verify(token, 'secret_key');
        req.userData = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Auth failed' });
    }
}

export default authCheck;