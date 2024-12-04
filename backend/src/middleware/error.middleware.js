export const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    if (err.name === 'UnauthorizedError' || err.status === 401) {
        return res.status(401).json({ message: 'Unauthorized request' });
    }

    if (err.name === 'ValidationError') {
        return res.status(400).json({ message: err.message });
    }

    return res.status(500).json({ 
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
};
