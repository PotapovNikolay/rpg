interface ButtonPrimaryProps {
    children: React.ReactNode;
    action(): void;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ children, action }) => {
    return (
        <button
            onClick={() => {
                action();
            }}
            className="button-primary mx"
        >
            {children}
        </button>
    );
};
