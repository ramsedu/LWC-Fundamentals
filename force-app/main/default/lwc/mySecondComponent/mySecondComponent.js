/**
 * @description       : 
 * @author            : Ramasamy Palanivel
 * @group             : 
 * @last modified on  : 01-21-2023
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   01-21-2023   Ramasamy Palanivel   Initial Version
**/
import { LightningElement, track, wire, api } from 'lwc';

export default class MySecondComponent extends LightningElement {
    welcomemessage = "World!!!";
    
    welcomeChange(event) {
       this.welcomemessage = event.target.value; 
    }
}