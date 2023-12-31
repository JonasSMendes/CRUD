import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/sql'

export interface TodoInstance extends Model {
    id:number,
    title:string,
    done:boolean
}

export const todo = sequelize.define<TodoInstance>('todo',{
    id:{
        primaryKey:true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title:{
        type:DataTypes.STRING
    },
    done:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
        
    }
},{
    tableName:'todos',
    timestamps: false
})
