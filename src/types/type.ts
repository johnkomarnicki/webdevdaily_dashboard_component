export type Column = "status" | "type" | "price" | "vendor" | "icon";
export type BadgeColors = "green" | "yellow" | "red";

export interface ColumnDefinition {
  key: Column;
  label?: string;
}

export interface Row {
  status: string;
  type: string;
  typeInfo: string;
  price: string;
  date: string;
  vendor: string;
  icon?: string;
}
