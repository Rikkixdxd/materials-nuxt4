import { type Material } from "./Material";

export type ApiPaths = {
    GET: {
        '/materials/{alias}': Material[];
        '/materials/{alias}/{id}': Material;
    },
    POST: {
        '/materials/{alias}/save': Material
    }
}