import { Category } from "./category";
import { Question } from "./question";

export class Quiz {

    quizid !: number;
    title !: String;
    description !: String;
    maxmarks !: number;
    numofquestions !: number;
    image !: String;
    active !: boolean;
    imagefile !: String;

    category !: Category;


    questions !: Set<Question>;

}
