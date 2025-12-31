import { LucideIcon } from "lucide-react";

export type PaymentMethod = {
  id: string;
  title: string;
  color: string;
  Icon: LucideIcon;
  desc?: string;
  href?: string;
  qr?: string;
};
