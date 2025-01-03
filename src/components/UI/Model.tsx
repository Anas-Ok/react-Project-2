import {  Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

interface IProps {
    
    children: React.ReactNode;
    isOpen: boolean;
    close: () => void;
    title: string;
}

export default function MyModal({children, isOpen, close, title}: IProps) {


  return (
    <>
      <div className='flex items-center justify-center '>
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <DialogPanel
                transition
                className="w-full max-w-md rounded-lg bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              >
                <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                  {title}
                </DialogTitle>

                <div className="mt-4">
                  {children}
                </div>

              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  )
}