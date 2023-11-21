import React from "react";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";

interface IDialogComponent {
  title: string;
  children: React.ReactNode;
  open: boolean | undefined;
  onOpenChange: (open: boolean) => void;
}

export const DialogComponent = ({
  title,
  children,
  open,
  onOpenChange,
}: IDialogComponent) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader className="font-bold text-lg">{title}</DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
