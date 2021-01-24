export interface INote {
  id: string;
  title: string;
  body: string;
  date: string;
}

export interface IReminder {
  reminderId: number;
  reminderTitle: string;
  reminderBody: string;
  reminderDate: string;
}
