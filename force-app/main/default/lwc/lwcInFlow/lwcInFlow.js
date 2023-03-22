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
import { LightningElement, api } from 'lwc';
import { FlowNavigationFinishEvent } from 'lightning/flowSupport';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LwcInFlow extends NavigationMixin(LightningElement) {
    @api contactId;
    @api availableActions = [];
    handleSuccess(event) {
        this.contactId = event.detail.id;
        this.NavigateToRecord();
    }

    handleRefresh() {
        if (this.availableActions.find((action) => action === 'FINISH')) {
            // navigate to the next screen
            const navigateNextEvent = new FlowNavigationFinishEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }

    NavigateToRecord() {
        const even = new ShowToastEvent({
            title: 'Success!',
            message: 'Record created!',
            variant: 'success'
        });
        this.dispatchEvent(even);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contactId,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }

    handleCancel(event){
        var url = window.location.href; 
        var value = url.substr(0,url.lastIndexOf('/') + 1);
        window.history.back();
        return false;
    }
}