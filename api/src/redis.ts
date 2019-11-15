import Redis from "ioredis";

const port = process.env.REDIS_PORT || "6379";

export const redis = new Redis(parseInt(port, 10), process.env.REDIS_HOST);
