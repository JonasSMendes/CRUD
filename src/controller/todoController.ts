import { Request, Response } from 'express';
import { todo } from '../models/Todo';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const all = async (req: Request, res: Response) =>{
    const list = await todo.findAll();

    res.render('pages/page',{
        list
    });
}

export const add = async (req: Request, res: Response) =>{
    if(req.body.title){
        let list = await todo.create({
            title: req.body.title,
            done: req.body.done ? true : false
        }) 

        res.render('pages/page', {
            list
        })
    }
}

export const update = async (req: Request, res: Response) =>{

    const id: string = req.params.id;

    let to_do = await todo.findByPk(id);
    if(to_do){
    if(req.body.title){
        to_do.title = req.body.title;
    }
    if(req.body.done){
        switch(req.body.done.toLowerCase()){
            case 'true':
            case '1':
                to_do.done = true ;
                break;
            case 'false':
            case '0':
                to_do.done = false;
                break;
        }
    }

    await to_do.save();
    res.json({ item: to_do });
}
}

export const remove = async (req: Request, res: Response) =>{
    let id:string = req.params.id
    let to_do = await todo.findByPk(id)
    if(to_do){
        await to_do.destroy();
    }

    res.json({})
}