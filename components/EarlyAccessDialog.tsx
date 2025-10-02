import React from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { EarlyAccessFormCard } from './forms/EarlyAccessFormCard';
import { type ButtonProps } from './ui/button';

interface EarlyAccessDialogProps {
  children: React.ReactElement<Partial<ButtonProps>>;
  onTriggerPress?: () => void;
}

export const EarlyAccessDialog: React.FC<EarlyAccessDialogProps> = ({ children, onTriggerPress }) => {
    const [open, setOpen] = React.useState(false);

    const trigger = React.cloneElement(children, {
        onPress: () => {
            setOpen(true);
            onTriggerPress?.();
        },
    });

    return (
        <>
            {trigger}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="p-0 bg-transparent border-none shadow-none w-full max-w-lg">
                    <EarlyAccessFormCard onClose={() => setOpen(false)} />
                </DialogContent>
            </Dialog>
        </>
    );
};