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

import SpinalAPI from '../SpinalAPI/SpinalAPI'
import { ForgeViewer } from "spinal-forge-viewer";
export default class Viewer {
  viewer: any = null;
  spinalAPI: SpinalAPI = SpinalAPI.getInstance();
  // @ts-ignore
  forgeViewer: ForgeViewer;

  constructor() {
  }

  async start(domElem) {
    const sceneDef = await this.spinalAPI.getdefaultItem();
    console.log("sceneDef", sceneDef)
    this.forgeViewer = new ForgeViewer(domElem, false);
    await this.forgeViewer.start(
      "/models/Resource/3D View/{3D} 341878/{3D}.svf",
      true
    );
    this.viewer = this.forgeViewer.viewer;
    const option = this.getItemOption(sceneDef.options)
    for (const sceneItem of sceneDef.scenesItems) {
      const path = this.spinalAPI.getModelPath(sceneItem.item);
      console.log(path);
      this.forgeViewer.loadModel(path, option);
    }
  }

  getItemOption(options) {
    for (const option of options) {
      return option.loadOption
    }
  }

}
