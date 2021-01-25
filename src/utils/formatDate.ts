import {isAfter} from 'date-fns';

export function formatDate(date: string): boolean {
  if (date) {
    const stringDate = date.split(' ');

    const remindDate = stringDate[0].split('/');
    const day = remindDate[0];
    const month = remindDate[1];
    const year = remindDate[2];

    const remindTime = stringDate[1].split(':');
    const hours = `${Number(remindTime[0]) + 3}`;
    const minutes = remindTime[1];

    const parsedDate = new Date(
      `${year}-${month}-${day}T${hours}:${minutes}:00`,
    );
    const actualDate = new Date();
    const compare = isAfter(parsedDate, actualDate);

    return compare;
  }
  return false;
}
