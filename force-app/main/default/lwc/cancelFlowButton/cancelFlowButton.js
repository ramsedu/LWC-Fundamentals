/**
 * @description       : Screen Flow
 * @author            : Ramasamy Palanivel
 * @group             : ScreenFlow
 * @last modified on  : 03-10-2023
 * @last modified by  : Ramasamy Palanivel
 * Modifications Log
 * Ver   Date         Author               Modification
 * 1.0   03-10-2023   Ramasamy Palanivel   Initial Version
**/
import { LightningElement } from 'lwc';
import { FlowNavigationMixin } from 'lightning/flowSupport';

export default class CancelFlowButton extends FlowNavigationMixin(LightningElement) {
    // LWC component code goes here
    handleCancelClick() {
        this.cancel();
      }
      
  }