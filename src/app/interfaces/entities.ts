export interface Link {
  id: string;
  urlOriginal: string;
  shortURL: string;
  status: boolean;
  expirationDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
