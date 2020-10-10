import express, { request } from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string,
}

routes.post("/classes", async (request, response) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;

    //Oq o transaction faz: Faz todas as operações do banco ao mesmo tempo,
    // e se uma falhar, todos os as operações que deram certos são apagadas
    const trx = await db.transaction();

    try {
        const insertedUsersIds = await trx('users').insert({
            name,
            avatar,
            whatsapp,
            bio,
        });
    
        const user_id = insertedUsersIds[0];
    
        const insertedClassesIds = await trx("classes").insert({
            subject,
            cost,
            user_id,
        })
    
        const class_id = insertedClassesIds[0];
    
        const classSchedule = schedule.map((scheduleItem: ScheduleItem) =>{
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinutes(scheduleItem.from),
                to: convertHourToMinutes(scheduleItem.to)
            };
        })
    
        await trx("class_schedule").insert(classSchedule);
    
        //important
        await trx.commit();
    
        return response.status(201).send();
    }catch (err) {
        await trx.rollback();
        console.log(err)
        return response.status(400).json({
            error: "Unexpected error while creating new class"
        })
    }
})

export default routes