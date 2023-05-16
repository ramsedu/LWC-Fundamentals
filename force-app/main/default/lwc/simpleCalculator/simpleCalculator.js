/**
 * @description       : 
 * @author            : Ramasamy Palanivel
 * @group             : 
 * @last modified on  : 05-05-2023
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   05-05-2023   Ramasamy Palanivel   Initial Version
**/
import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    firstNumber;
    secondNumber;
    currentResult;
    isshowPreviousResult = false;
    previousResult = [];

    changeHandler(event){
        const inputTypeName = event.target.name;
        if (inputTypeName === 'firstNumber' ) {
            this.firstNumber = event.target.value;
        } else {
            this.secondNumber = event.target.value;
        }
    }

    addHandler() {
        const fn = parseInt(this.firstNumber);
        const sn = parseInt(this.secondNumber);
        //Result of 10+20 = 30
        this.currentResult = `Result of ${fn}+${sn} = ${fn+sn} `;
        this.previousResult.push(this.currentResult);
    }

    subHandler() {
        const fn = parseInt(this.firstNumber);
        const sn = parseInt(this.secondNumber);
        //Result of 20-10 = 10
        //this.currentResult = 'Result of '+ fn + '-' + sn + ' = ' + fn-sn ;
        this.currentResult = `Result of ${fn}-${sn} = ${fn-sn} `;
        this.previousResult.push(this.currentResult);
    }

    mulHandler() {
        const fn = parseInt(this.firstNumber);
        const sn = parseInt(this.secondNumber);
        //Result of 10*20 = 200
        this.currentResult = `Result of ${fn}*${sn} = ${fn*sn} `;
        this.previousResult.push(this.currentResult);
    }

    divHandler() {
        const fn = parseInt(this.firstNumber);
        const sn = parseInt(this.secondNumber);
        //Result of 20/10 = 2
        this.currentResult = `Result of ${fn}/${sn} = ${fn/sn} `;
        this.previousResult.push(this.currentResult);
    }

    ShowHandler(event) {
        this.isshowPreviousResult = event.target.checked;
    }

}