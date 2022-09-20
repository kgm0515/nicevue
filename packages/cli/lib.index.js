#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
System.register("shared/const", ["path"], function (exports_1, context_1) {
    "use strict";
    var path_1, CLI, CLI_PKG_DIR, CLI_PKG, CWD, SCRIPTS_EXTNAME;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (path_1_1) {
                path_1 = path_1_1;
            }
        ],
        execute: function () {
            // cli工具库相关------------------------------------------
            exports_1("CLI", CLI = path_1.resolve(__dirname, '../../'));
            exports_1("CLI_PKG_DIR", CLI_PKG_DIR = path_1.resolve(CLI, './package.json'));
            exports_1("CLI_PKG", CLI_PKG = require(CLI_PKG_DIR));
            exports_1("CWD", CWD = process.cwd());
            // script的后缀名
            exports_1("SCRIPTS_EXTNAME", SCRIPTS_EXTNAME = ['.tsx', '.ts', '.jsx', '.js']);
        }
    };
});
System.register("shared/logger", ["chalk"], function (exports_2, context_2) {
    "use strict";
    var chalk_1, logger;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (chalk_1_1) {
                chalk_1 = chalk_1_1;
            }
        ],
        execute: function () {
            logger = {
                info: function (text) {
                    console.log(text);
                },
                success: function (text) {
                    console.log(chalk_1.default.hex('#00c48f')(text));
                },
                warning: function (text) {
                    console.log(chalk_1.default.hex('#ff9800')(text));
                },
                error: function (text) {
                    console.log(chalk_1.default.hex('#f44336')(text));
                },
            };
            exports_2("default", logger);
        }
    };
});
System.register("shared/utils", ["ora"], function (exports_3, context_3) {
    "use strict";
    var ora_1;
    var __moduleName = context_3 && context_3.id;
    /**
     * 开始执行任务
     * @param taskname
     * @param callback
     */
    function startTask(taskname, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var spinner, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        spinner = ora_1.default("".concat(taskname, " start...")).start();
                        return [4 /*yield*/, sleep(1000)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, callback()];
                    case 3:
                        _a.sent();
                        spinner.succeed("".concat(taskname, " succeed"));
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        spinner.fail("".concat(taskname, " failed"));
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    exports_3("startTask", startTask);
    /**
     * @param minisceonds 毫秒
     * @returns
     */
    function sleep(minisceonds) {
        if (minisceonds === void 0) { minisceonds = 1000; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        setTimeout(function () {
                            resolve();
                        }, minisceonds);
                    })];
            });
        });
    }
    exports_3("sleep", sleep);
    return {
        setters: [
            function (ora_1_1) {
                ora_1 = ora_1_1;
            }
        ],
        execute: function () {
        }
    };
});
System.register("shared/fsutils", ["fs-extra", "shared/const"], function (exports_4, context_4) {
    "use strict";
    var fs_extra_1, const_1, _a, resolve, extname, isFile, isDir, isDTS, isSFC, isJSX, isTSX, isScript, isMD, isLess, replaceExtname, camelize, bigCamelize;
    var __moduleName = context_4 && context_4.id;
    // 往文件后面添加内容
    function appendFileSmart(pathname, code) {
        if (fs_extra_1.pathExistsSync(pathname)) {
            var content = fs_extra_1.readFileSync(pathname, 'utf-8');
            if (!content.includes(code)) {
                fs_extra_1.appendFileSync(pathname, code);
            }
        }
    }
    exports_4("appendFileSmart", appendFileSmart);
    /*
     * 生成配置文件到文件夹
     * @param path 生成文件的绝对路径
     * @param code 要生成的内容
     */
    function writeFileSmart(pathname, code) {
        fs_extra_1.ensureFileSync(pathname);
        var content = fs_extra_1.readFileSync(pathname, 'utf-8');
        if (content !== code) {
            fs_extra_1.outputFileSync(pathname, code);
        }
    }
    exports_4("writeFileSmart", writeFileSmart);
    return {
        setters: [
            function (fs_extra_1_1) {
                fs_extra_1 = fs_extra_1_1;
            },
            function (const_1_1) {
                const_1 = const_1_1;
            }
        ],
        execute: function () {
            _a = require('path'), resolve = _a.resolve, extname = _a.extname;
            // 判断是否是文件
            exports_4("isFile", isFile = function (path) { return fs_extra_1.existsSync(path) && fs_extra_1.statSync(path).isFile(); });
            // 判断是否是文件夹
            exports_4("isDir", isDir = function (path) { return fs_extra_1.existsSync(path) && fs_extra_1.statSync(path).isDirectory(); });
            // 判断是否是.d.ts文件
            exports_4("isDTS", isDTS = function (path) { return fs_extra_1.existsSync(path) && path.endsWith('.d.ts'); });
            // 判断是否是.vue
            exports_4("isSFC", isSFC = function (file) { return fs_extra_1.pathExistsSync(file) && extname(file) === '.vue'; });
            // 判断是否是.jsx
            exports_4("isJSX", isJSX = function (file) { return fs_extra_1.pathExistsSync(file) && extname(file) === '.jsx'; });
            // 判断是否是.tsx
            exports_4("isTSX", isTSX = function (file) { return fs_extra_1.pathExistsSync(file) && extname(file) === '.tsx'; });
            // 判断是否是['.tsx', '.ts', '.jsx', '.js']
            exports_4("isScript", isScript = function (file) { return fs_extra_1.pathExistsSync(file) && const_1.SCRIPTS_EXTNAME.includes(extname(file)); });
            // 判断是否是.md
            exports_4("isMD", isMD = function (file) { return fs_extra_1.pathExistsSync(file) && extname(file) === '.md'; });
            // 判断是否是.less
            exports_4("isLess", isLess = function (file) { return fs_extra_1.pathExistsSync(file) && extname(file) === '.less'; });
            // 返回替换后缀后的文件名
            exports_4("replaceExtname", replaceExtname = function (file, ext) { return file.replace(extname(file), ext); });
            // 解析-abc字符串，返回大写Abc(小驼峰)
            exports_4("camelize", camelize = function (str) { return str.replace(/-(\w)/g, function (_, p) { return p.toUpperCase(); }); });
            // 把abc-def字符串转为AbcBef(大驼峰)
            exports_4("bigCamelize", bigCamelize = function (str) { return camelize(str).replace(str.charAt(0), str.charAt(0).toUpperCase()); });
        }
    };
});
System.register("commands/create", ["path", "shared/const", "shared/logger", "fs-extra", "shared/utils", "shared/fsutils"], function (exports_5, context_5) {
    "use strict";
    var path_2, const_2, logger_1, fs_extra_2, utils_1, fsutils_1, createComponent, genComponent;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (path_2_1) {
                path_2 = path_2_1;
            },
            function (const_2_1) {
                const_2 = const_2_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (fs_extra_2_1) {
                fs_extra_2 = fs_extra_2_1;
            },
            function (utils_1_1) {
                utils_1 = utils_1_1;
            },
            function (fsutils_1_1) {
                fsutils_1 = fsutils_1_1;
            }
        ],
        execute: function () {
            /**
             * 创建组件目录
             * @param componentName
             */
            exports_5("createComponent", createComponent = function (componentName) {
                componentName = typeof componentName === 'string' ? componentName.trim() : componentName;
                if (!componentName || componentName.includes('.')) {
                    logger_1.default.warning("\u60A8\u8F93\u5165\u7684\u7EC4\u4EF6\u540D\u79F0\u201C".concat(componentName, "\u201D\u4E0D\u5408\u6CD5"));
                    return;
                }
                componentName = componentName.toLowerCase();
                var componentPath = path_2.resolve(const_2.CWD, "./src/".concat(componentName));
                if (fs_extra_2.pathExistsSync(componentPath)) {
                    logger_1.default.warning("\u521B\u5EFA\u7EC4\u4EF6\u5931\u8D25\uFF0C\u7EC4\u4EF6\u201C".concat(componentName, "\u201D\u5DF2\u7ECF\u5B58\u5728,"));
                    return;
                }
                utils_1.startTask("\u521B\u5EFA\u7EC4\u4EF6\u201C".concat(componentName, "\u201D"), function () { return genComponent(componentName, componentPath); });
            });
            /**
             * 开始生产组件
             * @param componentName
             */
            genComponent = function (componentName, componentPath) { return __awaiter(void 0, void 0, void 0, function () {
                var bigCamelName, fileList, tempPath, tempCode;
                return __generator(this, function (_a) {
                    fs_extra_2.ensureDirSync(componentPath);
                    bigCamelName = fsutils_1.bigCamelize(componentName);
                    fileList = [
                        {
                            filePath: path_2.resolve(componentPath, "./index.ts"),
                            code: "import type { App, Plugin } from 'vue'\nimport ".concat(bigCamelName, " from './").concat(componentName, "'\n").concat(bigCamelName, ".install = (app: App) => {\n  app.component(").concat(bigCamelName, ".name, ").concat(bigCamelName, ")\n  return app\n}\nexport default ").concat(bigCamelName, " as typeof ").concat(bigCamelName, " & Plugin\n\n      ")
                        },
                        {
                            filePath: path_2.resolve(componentPath, "./".concat(componentName, ".tsx")),
                            code: "import { defineComponent } from \"vue\";\nconst props = {\n  argname: {\n    type: String,\n    default: ''\n  }\n}\nexport default defineComponent({\n  name: \"Nice".concat(bigCamelName, "\",\n  props,\n  setup(props, { slots }) {\n    const { argname } = props;\n\n    const getClass = () => {\n      const tempList = [ \"nice-").concat(componentName, "\" ];\n      if (argname) tempList.push(`nice-").concat(componentName, "--${argname}`)\n      return tempList.join(\" \");\n    };\n\n    return () => {\n      return (\n        <div class={getClass()}>\n          {slots.default && slots.default()}\n        </div>\n      );\n    };\n  },\n});\n      \n      ")
                        },
                        {
                            filePath: path_2.resolve(componentPath, "./docs/zh.md"),
                            code: "import ".concat(bigCamelName, " from \"../\";\n\n# ").concat(bigCamelName, " \u7EC4\u4EF6\n\n\u8FD9\u662F\u7EC4\u4EF6\u63CF\u8FF0...\n\n## \u7EC4\u4EF6\u7C7B\u578B\n\n<").concat(bigCamelName, ">Default</").concat(bigCamelName, ">\n<").concat(bigCamelName, " argname=\"simple\">\u8FD9\u662F\u4E00\u4E2A").concat(bigCamelName, "\u7EC4\u4EF6</").concat(bigCamelName, ">\n\n\u4F7F\u7528\u6848\u4F8B\n\n```tsx\nimport {").concat(bigCamelName, "} from \"@nicevue/ui\";\n<").concat(bigCamelName, ">Default</").concat(bigCamelName, ">\n<").concat(bigCamelName, " argname=\"simple\">Default</").concat(bigCamelName, ">\n```\n\n      ")
                        },
                        {
                            filePath: path_2.resolve(componentPath, "./docs/en.md"),
                            code: "import ".concat(bigCamelName, " from \"../\";\n\n# ").concat(bigCamelName, " component\n\nthis is description of component...\n\n      ")
                        }
                    ];
                    fileList.forEach(function (item) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            fsutils_1.writeFileSmart(item.filePath, item.code);
                            return [2 /*return*/];
                        });
                    }); });
                    tempPath = path_2.resolve(componentPath, '../components.ts');
                    tempCode = fs_extra_2.readFileSync(tempPath, 'utf-8');
                    fsutils_1.writeFileSmart(tempPath, "".concat(tempCode.trimEnd(), "\nexport { default as ").concat(bigCamelName, " } from './").concat(componentName, "'\n"));
                    console.log(tempCode);
                    return [2 /*return*/];
                });
            }); };
        }
    };
});
System.register("index", ["commander", "commands/create", "shared/const", "shared/logger"], function (exports_6, context_6) {
    "use strict";
    var commander_1, create_1, const_3, logger_2, program;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (commander_1_1) {
                commander_1 = commander_1_1;
            },
            function (create_1_1) {
                create_1 = create_1_1;
            },
            function (const_3_1) {
                const_3 = const_3_1;
            },
            function (logger_2_1) {
                logger_2 = logger_2_1;
            }
        ],
        execute: function () {
            program = new commander_1.Command();
            program.version("nicevue ".concat(const_3.CLI_PKG.version)).usage("<command> [options]");
            program
                .command('example <mainCommand>')
                .description('这是example命令')
                .option('-w, --watch', '是否监听文件变化')
                .option('-c, --component <componentName>', '创建一个组件??')
                .action(function (mainCommand, options) {
                console.log(mainCommand, options);
            });
            program.command('create <componentName>').description('在当前目录的src目录下创建一个组件目录').action(create_1.createComponent);
            program.on('command:*', function (_a) {
                var _b = __read(_a, 1), cmd = _b[0];
                program.outputHelp();
                logger_2.default.error("\n\u672A\u77E5\u547D\u4EE4 ".concat(cmd, ".\n"));
                process.exitCode = 1;
            });
            program.parse();
        }
    };
});
