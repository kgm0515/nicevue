import hljs from "./core";

import javascript from "./languages/javascript";
import xml from "./languages/xml";
import css from "./languages/css";
import typescript from "./languages/typescript";
import less from "./languages/less";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("jsx", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("ts", typescript);
hljs.registerLanguage("tsx", typescript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);
hljs.registerLanguage("less", less);

export default hljs;
