import { StatusCodes } from "http-status-codes";
import AppError from "../../utils/error/app-error.js";
import logger from "../config/logger-config.js";

class CrudRepository {
    constructor(model) {
        this.model = model;
    }
async create(data) {
    
      const result = await this.model.create(data);
      return result;
   
  }


    async destroy(data){
        const result = await this.model.destroy(
    {
        where :{
            id : data 
        }
    }
);
if(!result){
    throw new AppError(' Not able to find the resource', StatusCodes.NOT_FOUND)
}
return result;
}

    async get(data){
  const result = await this.model.findByPk(data);
  if(!result){
    throw new AppError(' Not able to find the resource', StatusCodes.NOT_FOUND)
  }
  return result;
       
    }

    async getAll(){
       
const result = await this.model.findAll();
 
return result;
       }
    

    async update(id, data){// data -> {name : "Ankush"} it's object 
       
const result = await this.model.update(data, {
    where : {
        id : id
    }
});
return result;
       
}
}
 
export default CrudRepository;