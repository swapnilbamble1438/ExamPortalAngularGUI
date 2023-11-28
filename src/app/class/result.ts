import { Userqna } from "./userqna";

export class Result {

    resultid !: number;
    uid !: number;
    quizid !: number;
    numofquestions !: number;
    correctanswers !: number;
    marksgot !: number;
    attempted !: number;
    date !: String;
  
    title !: String;
    imagefile !: String;

   userqnas !: Array<Userqna>;


}
