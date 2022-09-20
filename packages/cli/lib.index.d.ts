#!/usr/bin/env node
declare module "shared/const" {
    export const CLI: string;
    export const CLI_PKG_DIR: string;
    export const CLI_PKG: any;
    export const CWD: string;
    export const SCRIPTS_EXTNAME: string[];
}
declare module "shared/logger" {
    const logger: {
        info(text: string): void;
        success(text: string): void;
        warning(text: string): void;
        error(text: string): void;
    };
    export default logger;
}
declare module "shared/utils" {
    /**
     * 开始执行任务
     * @param taskname
     * @param callback
     */
    export function startTask(taskname: string, callback: () => any): Promise<void>;
    /**
     * @param minisceonds 毫秒
     * @returns
     */
    export function sleep(minisceonds?: number): Promise<void>;
}
declare module "shared/fsutils" {
    export const isFile: (path: string) => boolean;
    export const isDir: (path: string) => boolean;
    export const isDTS: (path: string) => boolean;
    export const isSFC: (file: string) => boolean;
    export const isJSX: (file: string) => boolean;
    export const isTSX: (file: string) => boolean;
    export const isScript: (file: string) => boolean;
    export const isMD: (file: string) => boolean;
    export const isLess: (file: string) => boolean;
    export const replaceExtname: (file: string, ext: string) => string;
    export const camelize: (str: string) => string;
    export const bigCamelize: (str: string) => string;
    export function appendFileSmart(pathname: string, code: string): void;
    export function writeFileSmart(pathname: string, code: string): void;
}
declare module "commands/create" {
    /**
     * 创建组件目录
     * @param componentName
     */
    export const createComponent: (componentName: string) => void;
}
declare module "index" { }
