// czym jest UTC, GTM, strefy czasowe
// jak pobierać datę, godzinę itd.          <--  w poprzednim odcinku
// jak ustawić kalendarz buddyjski               (link w opisie)
// jak formatować wyświetlany czas


const d = new Date('2010-02-04T10:00:00.000Z') 
// 1) string
// ISO 8601 Extended format
// YYYY-MM-DDTHH:mm:ss.sssZ (Z = UTC)

// 2) argumenty
const d2 = new Date(2010, 1, 4, 10, 00, 00, 000) // czas podany lokalnie
const d2 = new Date(Date.UTC(2010, 1, 4, 10, 00, 00, 000)) // czas podany w UTC

// 3) timestamp
const d3 = new Date(d.getTime()) 

d.setDate(d.getDate() + 1)
d.setFullYear(2022)
d.setMonth(1)
d.setHours(12)
d.setMinutes(40)

d > new Date('2021-10-14') // true
d < new Date('2021-10-14') // false
new Date('2021-10-14') == new Date('2021-10-14') // false
new Date('2021-10-14').getTime() == new Date('2021-10-14').getTime() // true
