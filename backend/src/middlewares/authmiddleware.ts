import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Extend the Request type to include a 'user' property if you wish
export interface AuthRequest extends Request {
  user?: any;
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction): void => {
  let token: string | undefined;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Extract token from header ("Bearer <token>")
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
    return;
  }

  try {
    // Verify token using the secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    // Attach the decoded user info to request
    (req as AuthRequest).user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};
