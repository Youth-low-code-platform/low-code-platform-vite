import React from 'react'
// import { DraggableItemKey } from '../constants/plugin-icon-list'
import { IButtonEditConfig, IImageEditConfig } from './editConfig.type'

export enum ComponentName {
  PictureComponent = 'PictureComponent',
  ButtonComponent = 'ButtonComponent'
}

export interface IPictureComponent {
  id: string
  name: ComponentName.PictureComponent
  props: {
    imgSrc: string
  }
  // 编辑器的属性
  editConfig: IImageEditConfig
  style: {
    position: string
    top: string
    left: string
    width: string
    height: string
    zIndex: number
    textAlign: string
    color: string
    backgroundColor: string
    fontSize: string
  }
}
export interface IButtonComponent {
  id: string
  name: ComponentName.ButtonComponent
  props: {
    text: string
  }
  // 编辑器的属性
  editConfig: IButtonEditConfig
  style: {
    position: string
    top: string
    left: string
    width: string
    height: string
    zIndex: number
    textAlign: string
    color: string
    backgroundColor: string
    fontSize: string
  }
}

// 组件栏图标
export interface IPluginListIcon {
  icon: React.ReactNode
  text: string
  compKey: ComponentName
}

// 将所有组件的数据联合起来
export type ComponentSchema = IPictureComponent | IButtonComponent | null