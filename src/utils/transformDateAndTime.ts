export function transformDateAndTime(date: string, time: string) {
  //   console.log(date, time);
  const remindDate = date.split('/');
  const day = remindDate[0];
  const month = remindDate[1];
  const year = remindDate[2];

  const remindTime = time.split(':');
  const hours = `${Number(remindTime[0]) + 3}`;
  const minutes = remindTime[1];

  //   console.log('data', day, month, year);
  //   console.log('horas', hours, minutes);

  const parsedDate = new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);
  return parsedDate;
}
