import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { Request, Response } from "express";
import { AppError } from "../errors/AppError";

class AnswerController{

    //http://localhost:3333/answers/10?u=ad804a11-7467-44f4-8949-0b5b69d5f4f7
    /**
     * 
     * Route Params => Parametros que compõe a rota 
     * routs.get("/answes/:value") ex: answers/10
     * 
     * Query Params => Busca, Paginação, não obrigatórios
     * ?
     * chave=valor ex: u=ad804a11-7467-44f4-8949-0b5b69d5f4f7
     */
    async execute(request: Request, response: Response){
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u),
        });

        if(!surveyUser) {
            throw new AppError("Survey User does not exists!");
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);

        return response.json(surveyUser);
    }

}

export { AnswerController }