/*
 * Copyright 2020 SpinalCom - www.spinalcom.com
 * 
 * This file is part of SpinalCore.
 * 
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 * 
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 * 
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

import axios, { AxiosRequestConfig } from "axios";
import { SceneDefItem } from './SceneDefItem'

export default class SpinalAPI {
  static instance: SpinalAPI = null;
  static getInstance() { return SpinalAPI.instance !== null ? SpinalAPI.instance : (SpinalAPI.instance = new SpinalAPI) };

  constructor() {
  }

  private callGetAPI(call: string, config?: AxiosRequestConfig) {
    return axios.get(call, config)
  }
  private callPutAPI(call: string, data: any, config?: AxiosRequestConfig) {
    return axios.put(call, data, config)
  }

  getdefaultItem(): Promise<SceneDefItem> {
    return this.callGetAPI("getDefaultItem").then(({ data }) => data.body)
  }
  getModelPath(pathItem) {
    return `BIM/file/${pathItem}`
  }

}
