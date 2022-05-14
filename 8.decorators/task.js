function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
    const hash = args.join(",");
    let hashIndex = cache.findIndex(item => item.hash == hash);
    let result; 
    
    if (hashIndex !== -1) {
      result = cache[hashIndex].value;
      console.log("Из кэша: " + result);
      return "Из кэша: " + result;
    }
    
    result = func.call(this, ...args);
    cache.push({
      hash: hash,
      value: result
    });
    
    if (cache.length > 5) {
      cache.shift();
    }
    
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;  
}


function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = false;
  return function(...args) {
    if (!flag) {
      func.apply(this, args);
      flag = true; 
      //console.log(`флаг поднят на ${ms} мс\n`);
      timeout = setTimeout(() => { flag = false; }, ms);
      return;
    }
    
    if (flag) {
      //console.log(`флаг = ${flag} ,не отправлено\n`);
      clearTimeout(timeout);
      timeout = setTimeout(() => { flag = false; }, ms);
    }
  }  
}

function debounceDecorator2(func, ms) {
  let timeout;
  let flag = false;
  wrapper.count = 0;
  function wrapper(...args) {
    wrapper.count += 1;
    //console.log(`Кол-во вызовов: ${wrapper.count}\n`);
    if (!flag) {
      func.apply(this, args);
      flag = true;
      //console.log(` флаг= ${flag} - поднят на ${ms} мс\n`);
      timeout = setTimeout(() => { flag = false; }, ms);
      return;
    }
    
    if (flag) {
      //console.log(`флаг = ${flag} ,не отправлено\n`);
      clearTimeout(timeout);
      timeout = setTimeout(() => { flag = false; }, ms);
    }
  }  
  return wrapper;
}
/*const sendSignal2 = () => console.log("Сигнал sendSignal2 отправлен");
const upgradedSendSignal2 = debounceDecorator2(sendSignal2, 2000);
setTimeout(upgradedSendSignal2); // Сигнал отправлен
setTimeout(upgradedSendSignal2, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal2, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal2, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (600 < 2000)
setTimeout(upgradedSendSignal2, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal2, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal2, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
setTimeout(() => {console.log(`Всего вызовов:${upgradedSendSignal2.count}`)}, 7000);*/
