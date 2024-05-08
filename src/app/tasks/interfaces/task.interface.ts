
export interface Task{
  id?: string,
  title: string,
  description: string,
  status?: Status
}

export enum Status{
  toDo = 1,
  process = 2,
}
