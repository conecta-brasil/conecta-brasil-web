import { env } from "@/config/env";
import axios from "axios";

export const horizon = axios.create({
    baseURL: env.horizonUrl
});
    