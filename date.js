// Daty i godziny w JavaScript
// domyślnie lokalny czas

const now = new Date() //?
now.getDate() //?
now.getFullYear() //?
now.getMonth() //?
// 0 - styczeń
// 11 - grudzień
now.getDay() //?
// 0 - niedziela
// 1 - poniedziałek
// 6 - sobota
now.getTimezoneOffset() //?
now.getHours() //?
now.getMinutes() //?
now.getSeconds() //?
now.getMilliseconds() //?

// timestamp
// 1.1.1970 
now.getTime() //?
Date.now() //?

// UTC
now.getUTCHours() //?
now.getUTCMinutes() //?

now.toLocaleString('pl', {
  month: '2-digit'
}) //?

// GTM == UTC