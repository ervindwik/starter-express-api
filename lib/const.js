exports.JWT = {
    SECRET: process.env.JWT_SECRET,
    EXPIRED: process.env.JWT_EXPIRED,
};
exports.ROLES = {
    ADMIN: "admin",
    USER: "user",
    PESERTA: "peserta",
};