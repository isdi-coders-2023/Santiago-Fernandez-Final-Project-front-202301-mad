const url_local = "http://localhost:4500";
const url_render = "https://erp-santiago-fernandez-rendercom-api.onrender.com";

const connection = "local";

export const url_def = connection === "local" ? url_local : url_render;
