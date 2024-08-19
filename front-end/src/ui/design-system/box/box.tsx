import clsx from 'clsx';

interface Props {
    children: React.ReactNode;
    className?: string;
    padding_x?:string;
    padding_y?:string;
}

export const Box: React.FC<Props> = ({
    children, 
    className, 
    padding_x = "px-9", 
    padding_y= "py-9"
}: Props) => {
    return (
        <div className={clsx(
            "w-full mx-auto md:w-[700px] md:mr-8 border border-gray-300 bg-gray-100 rounded",  
            padding_x, 
            padding_y, 
            className
        )}>
            {children}
        </div>
    );
};