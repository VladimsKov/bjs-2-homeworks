class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    
    addClock(startTime, func, alarmId) {
        if (alarmId === undefined) {
            throw new Error('Ошибка: не передан id звонка');
        }
        if (this.alarmCollection.find(item => item.id == alarmId)) {
            return console.error(new Error("Звонок с таким id уже существует"));
        }
        
        this.alarmCollection.push({
            id: alarmId,
            time: startTime,
            callback: func   
        });
    }
    removeClock(deleteId) {
        let delIndex = this.alarmCollection.findIndex(item => item.id == deleteId);
        if (delIndex > -1) {
            this.alarmCollection.splice(delIndex, 1);
            return true;
        } else {
            return false;
        }           
        
    }
    
    getCurrentFormattedTime() {
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`;
    }
    
    start() {
        const currentTime = this.getCurrentFormattedTime();
        function checkClock(alarmItem) {
            if (currentTime === alarmItem.time) {
                alarmItem.callback(); 
            }            
        }
        if (!this.timerId) {
            const newInterval = 1000;
            this.timerId = setInterval(
                () => {
                    this.alarmCollection.forEach((item) => checkClock(item))
                }, newInterval);                
            } 
        }
        
        stop() {
            if (this.timerId) {
                clearInterval(this.timerId);
                this.timerId = null;
            }
        }
        clearAlarms() {
            this.stop();
            this.alarmCollection.splice(0);
        }
        printAlarms() {
            this.alarmCollection.forEach((item) => console.log(`Будильник № ${item.id} заведен на ${item.time}`));  
        }
    }
    
    function testCase() {
        
        let phoneAlarm = new AlarmClock();
        
        console.log(`Текущее время: ${phoneAlarm.getCurrentFormattedTime()}`);
        
        //добавление звонка с выводом в консоль 3 раза
        phoneAlarm.addClock("08:48", () => {
            for (let i = 0; i < 3; i++) { console.log("Подъем"); phoneAlarm.stop() }
        }, 1);
        
        phoneAlarm.addClock("08:50", () => {
            console.log("Подъем уже!"); phoneAlarm.removeClock(2)
        }, 2);
        
        phoneAlarm.addClock("08:55", () => {
            console.log("Подъем, давно пора уже"); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms()
        }, 3);
        
        //печать всех звонков
        phoneAlarm.printAlarms();
        
        //Ошибка существ. id
        phoneAlarm.addClock("09:05", () => { console.log("Подъем") }, 2);
        
        phoneAlarm.start();
        
        //удаление звонка
        phoneAlarm.removeClock(2);
        phoneAlarm.printAlarms();
    }
    
    testCase();    