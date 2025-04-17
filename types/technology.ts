export interface ITechnology {
  id: string | number;
  name: string;
  tag?: string;
  link?: string;
  projects?: [];
  createdAt?: Date;
  updateAt?: Date;
}
