// Development auth middleware - allows all requests
export const protectRoute = async (req, res, next) => {
    next();
};

export const requireAdmin = async (req, res, next) => {
    next();
};
