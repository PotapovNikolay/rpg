
interface ButtonProps {
    children: React.ReactNode;
    action(): void;
}

export const Button: React.FC<ButtonProps> = ({children, action}) => {
    return <button onClick={()=>{action()}} className="button">
        {children}
    </button>;
};