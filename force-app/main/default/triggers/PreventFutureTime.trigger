trigger PreventFutureTime on Account (before insert, before update) {
    for(Account acc : Trigger.new) {
        //DateTime dt = new DateTime();
        string ct = DateTime.now().format('hh:mm a');
        Date td = Date.today();
        string ut = DateTime.newInstance(td.YEAR(), td.month(), td.day(), acc.Purchase_Time__c.HOUR(), acc.Purchase_Time__c.MINUTE(), 0).format('h:mm a');
        //time tt2 = system.Time TIMEVALUE('10:20');
        /*acc.Purchase_Time__c.addError('You cannot enter a future time value.' + DateTime.now().format('hh:mm a') 
                                      +'/'+ acc.Purchase_Time__c.HOUR()
                                     +'/'+ acc.Purchase_Time__c.MINUTE()
                                     +'/'+ DateTime.newInstance(Date.today().YEAR(), Date.today().month(), Date.today().day(), acc.Purchase_Time__c.HOUR(), acc.Purchase_Time__c.MINUTE(), 0).format('h:mm a')
                                     +'/'+ time.newInstance(acc.Purchase_Time__c.HOUR(), acc.Purchase_Time__c.MINUTE(), 0, 0));*/
        if(ut > ct ) {
            acc.Purchase_Time__c.addError('You cannot enter a future time value.[' + ct +' | '+ ut +']');
        }
    }
}