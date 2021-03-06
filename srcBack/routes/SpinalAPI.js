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

const axios = require('axios');
const API_URL = require('../config').API_URL;

class SpinalAPI {
  static getInstance() { return SpinalAPI.instance !== null ? SpinalAPI.instance : (SpinalAPI.instance = new SpinalAPI); }

  constructor() {
  }

  callGetAPI(route, config) {
    return axios.get(`${API_URL}${route}`, config);
  }
  callPutAPI(route, data, config) {
    return axios.put(`${API_URL}${route}`, data, config);
  }

  getdefaultItem() {
    return this.callGetAPI("/api/v1/scene/default").then(({ data }) => data.body);
  }

}
SpinalAPI.instance = null;
module.exports = SpinalAPI;
