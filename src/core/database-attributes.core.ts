export interface CoreDatabaseAttributes {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  createdBy?: string;
}
