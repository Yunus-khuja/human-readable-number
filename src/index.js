module.exports = function toReadable (num) {
    let convertedNum = '';
    const HUNDREDS = ['', 'one hundred ', 'two hundred ', 'three hundred ', 'four hundred ', 'five hundred ', 'six hundred ', 'seven hundred ', 'eight hundred ', 'nine hundred '];
    const TENS = ['', 'ten ', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];
    const ONES = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const SPECIAL_TENS = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if(num === 0) {
      return 'zero';
    }

    convertedNum += HUNDREDS[Math.floor(num / 100)];  //Пишет сотую часть
    if(Math.floor(num % 100) > 10 && Math.floor(num % 100) < 20) { //Проверяет особый случай
      convertedNum += SPECIAL_TENS[num % 10];
    } else {
      convertedNum += TENS[Math.floor(num / 10 % 10)];  //Пишет десятую часть
      convertedNum += ONES[num % 10];  //Пишет единичную часть
    }
    return convertedNum.trim();
}
