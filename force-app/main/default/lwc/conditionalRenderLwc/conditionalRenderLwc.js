/**
 * @description       : 
 * @author            : Ramasamy Palanivel
 * @group             : 
 * @last modified on  : 05-05-2023
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   04-08-2023   Ramasamy Palanivel   Initial Version
**/
import { LightningElement, track } from 'lwc';

export default class ConditionalRenderLwc extends LightningElement {
    
    isDisplayDiv = false;
    isSlected = 'UnSelected';
    @track cityList = ['Chennai','Bangaluru','Mumbai','Delhi','Salem'];

    showDivHandler(event) {
        this.isDisplayDiv = event.target.checked;
        this.isSlected = this.isDisplayDiv == true ? 'Selected':'UnSelected';
    }
}

