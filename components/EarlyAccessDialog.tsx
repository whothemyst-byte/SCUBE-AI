import React from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { EarlyAccessFormCard } from './forms/EarlyAccessFormCard';
import { type ButtonProps } from './ui/button';

// FIX: Changed `children` type from `React.ReactElement` to `React.ReactElement<Partial<ButtonProps>>`.
// This resolves a TypeScript error by ensuring that the child passed to `EarlyAccessDialog`
// is a component that accepts an `onPress` prop, which is added via `React.cloneElement` below.
export const EarlyAccessDialog: React.FC<{ children: React.ReactElement<Partial<ButtonProps>> }> = ({ children }) => {
    const [open, setOpen] = React.useState(false);

    // The new Aria-based Button doesn't support `asChild`.
    // We remove DialogTrigger and programmatically open the dialog
    // by cloning the child (the button) and adding an `onPress` handler.
    const trigger = React.cloneElement(children, {
        onPress: () => setOpen(true),
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
