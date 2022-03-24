'use strict';

class ICollection {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      // use the encapsulated model to create an instance
      let instance = await this.model.create(json);
  
      return instance;
      
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  read(id, options) {
    // try {
    //   const idNum = parseInt(id);

    //   let query = { where: }
      
    // } catch (err) {
    //   console.error(err);
    //   return err;
    // }
  }

  update() {

  }

  delete() {

  }
}


module.exports = ICollection;