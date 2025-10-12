import logger from "../config/logger-config.js";

class CrudRepository {
    constructor(model) {
        this.model = model;
    }
async create(data) {
    try {
      const result = await this.model.create(data);
      return result;
    } catch (error) {
      logger.error("❌ Something went wrong in crud repo: ", error);
      throw error;
    }
  }


    async destroy(data){
       try{
const result = await this.model.destroy(
    {
        where :{
            id : data 
        }
    }
);
return result;
       }catch(error){
        logger.error("Something went wrong in crud repo");
        throw error;

       }
    }

    async get(data){
       try{
const result = await this.model.findByPk(data);
return result;
       }catch(error){
        logger.error("Something went wrong in crud repo : get");
        throw error;

       }
    }

    async getAll(){
       try{
const result = await this.model.findAll();
return result;
       }catch(error){
        logger.error("Something went wrong in crud repo");
        throw error;

       }
    }

    async update(id, data){// data -> {name : "Ankush"} it's object 
       try{
const result = await this.model.update(data, {
    where : {
        id : id
    }
});
return result;
       }catch(error){
        logger.error("Something went wrong in crud repo");
        throw error;

       }
    }
}

export default CrudRepository;