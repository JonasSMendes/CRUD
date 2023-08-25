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
    let title  = req.body;

    if(title) {
        const newUser = todo.build( title );

        await newUser.save();
    }

    res.redirect('/');
}

export const update = async (req: Request, res: Response) =>{

    let id = req.params.id
    let update = req.body.update
    let done = req.body.done

    let results = await todo.findAll({ where: {id} })
    if(results.length > 0){
        let usuario = results[0]
            if(update){
                usuario.title = update
            }
        await usuario.save()
    }
    res.redirect('/')
}

export const remove = async (req: Request, res: Response) =>{
    let id:string = req.params.id
    let to_do = await todo.findByPk(id)
    if(to_do){
        await to_do.destroy();
    }

    res.redirect('/')
}
