//Функция для проверки длины строки.
function isStringMaxLength (string, maxLength) {
  return string.length <= maxLength;
}

//Функция для проверки, является ли строка палиндромом
function isPalindrome (string) {
  const StringCopy = string
    .toLowerCase()
    .replaceAll(' ', '');
  const StringReverse = StringCopy
    .split ('')
    .reverse()
    .join('');
  return StringReverse === StringCopy;
}

//Функция извлекает содержащиеся цифры в строке и приводит их к положительному числу
function getNumberFromString(string) {
  let result = '';
  for (const char of string) {
    if(!Number.isNaN(parseInt(char, 10))){
      result += char;
    }
  }
  return (result);
}

isPalindrome ('Кекс');
isStringMaxLength ('топот',2);
getNumberFromString('124');

