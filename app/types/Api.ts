import { type MaterialRaw } from "./Material";

export type ApiPaths = {
    GET: {
        '/materials/{alias}': MaterialRaw[];
        '/materials/{alias}/{id}': MaterialRaw;
    },
    POST: {
        '/materials/{alias}/save': MaterialRaw
    }
}