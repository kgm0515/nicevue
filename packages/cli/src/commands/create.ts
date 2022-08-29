import { resolve } from 'path'
import { CWD } from '../shared/const'
import logger from '../shared/logger'
import { pathExistsSync, ensureDirSync, readFileSync } from 'fs-extra'
import { startTask } from '../shared/utils'
import { bigCamelize, writeFileSmart } from '../shared/fsutils'

/**
 * 创建组件目录
 * @param componentName
 */
export const createComponent = (componentName: string) => {
  componentName = typeof componentName === 'string' ? componentName.trim() : componentName
  if (!componentName || componentName.includes('.')) {
    logger.warning(`您输入的组件名称“${componentName}”不合法`)
    return
  }
  componentName = componentName.toLowerCase()
  const componentPath = resolve(CWD, `./src/${componentName}`)
  if (pathExistsSync(componentPath)) {
    logger.warning(`创建组件失败，组件“${componentName}”已经存在,`)
    return
  }
  startTask(`创建组件“${componentName}”`, () => genComponent(componentName, componentPath))
}

/**
 * 开始生产组件
 * @param componentName
 */
const genComponent = async (componentName: string, componentPath: string) => {
  ensureDirSync(componentPath)
  // 大驼峰
  const bigCamelName = bigCamelize(componentName)
  const fileList = [
    {
      filePath: resolve(componentPath, `./index.ts`),
      code: `\
import type { App, Plugin } from 'vue'
import ${bigCamelName} from './${componentName}'
${bigCamelName}.install = (app: App) => {
  app.component(${bigCamelName}.name, ${bigCamelName})
  return app
}
export default ${bigCamelName} as typeof ${bigCamelName} & Plugin

      `
    },
    {
      filePath: resolve(componentPath, `./${componentName}.tsx`),
      code: `\
import { defineComponent } from "vue";
const props = {
  argname: {
    type: String,
    default: ''
  }
}
export default defineComponent({
  name: "Nice${bigCamelName}",
  props,
  setup(props, { slots }) {
    const { argname } = props;

    const getClass = () => {
      const tempList = [ "nice-${componentName}" ];
      if (argname) tempList.push(\`nice-${componentName}--\${argname}\`)
      return tempList.join(" ");
    };

    return () => {
      return (
        <div class={getClass()}>
          {slots.default && slots.default()}
        </div>
      );
    };
  },
});
      
      `
    },
    {
      filePath: resolve(componentPath, `./docs/zh.md`),
      code: `\
import ${bigCamelName} from "../";

# ${bigCamelName} 组件

这是组件描述...

## 组件类型

<${bigCamelName}>Default</${bigCamelName}>
<${bigCamelName} argname="simple">这是一个${bigCamelName}组件</${bigCamelName}>

使用案例

\`\`\`tsx
import {${bigCamelName}} from "@nicevue/ui";
<${bigCamelName}>Default</${bigCamelName}>
<${bigCamelName} argname="simple">Default</${bigCamelName}>
\`\`\`

      `
    },
    {
      filePath: resolve(componentPath, `./docs/en.md`),
      code: `\
import ${bigCamelName} from "../";

# ${bigCamelName} component

this is description of component...

      `
    }
  ]
  fileList.forEach(async (item) => {
    writeFileSmart(item.filePath, item.code)
  })
  // 开始在./src/components中引入此组件
  const tempPath = resolve(componentPath, '../components.ts')
  const tempCode = readFileSync(tempPath, 'utf-8')
  writeFileSmart(
    tempPath,
    `\
${tempCode.trimEnd()}
export { default as ${bigCamelName} } from './${componentName}'
`
  )

  console.log(tempCode)
}
