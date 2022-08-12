import '@arco-design/web-react/dist/css/arco.css'
import { useState } from 'react'
import classNames from 'classnames'
import { ComponentName, ComponentSchema } from './types/lowCodeCompo.type'
import { getComponentSchema } from './component/plugins/plugins'

import React from 'react'
import { Canvas } from './component/canvas'

import { PluginListPanel } from './component/pluginListPanel'
import { PropsEditorPanel } from './component/editor-panel'
import { Layout } from '@arco-design/web-react'
import { IPageInfo } from './types'
import { LowCodeHeader } from './component/header'
import Content from '@arco-design/web-react/es/Layout/content'

// const TabPane = Tabs.TabPane

type Dispatch<T> = React.Dispatch<React.SetStateAction<T>>

export const context = React.createContext<
  Partial<{
    components: ComponentSchema[]
    setComponents: Dispatch<ComponentSchema[]>
    editingCompo: ComponentSchema | null
    setEditingCompo: Dispatch<ComponentSchema | null>
    reRender: boolean
    setReRender: Dispatch<boolean>
    clone: (conKey: ComponentName) => void
    pageInfo: IPageInfo | null
    setPageInfo: Dispatch<IPageInfo | null>
  }>
>({})

function Editor() {
  const [components, setComponents] = useState<ComponentSchema[]>([])
  const [editingCompo, setEditingCompo] = useState<ComponentSchema | null>(null)
  const [reRender, setReRender] = useState(false)
  const [pageInfo, setPageInfo] = useState<IPageInfo | null>(null)
  // 添加组件数据至数组中

  const clone = (conKey: ComponentName) => {
    const schema = getComponentSchema(conKey)
    setComponents((components) => [...components, schema])
  }

  return (
    <context.Provider
      value={{
        components,
        setComponents,
        editingCompo,
        setEditingCompo,
        reRender,
        setReRender,
        clone,
        pageInfo,
        setPageInfo
      }}
    >
      <LowCodeHeader />
      <Layout className='low-code-layout'>
        <PluginListPanel></PluginListPanel>
        <Content className={classNames('content', {pc: pageInfo?.platform === 'PC', h5: pageInfo?.platform === 'H5', })}>
          <Canvas></Canvas>
        </Content>
        <PropsEditorPanel />
      </Layout>
    </context.Provider>
  )
}

function App() {
  return (
    <div className="App">
      <Editor />
    </div>
  )
}

export default App
