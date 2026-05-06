export interface User {
  id: number;
  userName: string;
  role: string;
}

export interface Task {
  id: number;
  title: string;
  status: string;
  userId: number;
  user?: User; // The '?' means it might be null/undefined
}