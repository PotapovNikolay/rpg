

interface InputProps {
    placeHolder: string;
    value: string;
    action(value: string): void;
    className:string
}

export const Input: React.FC<InputProps> = ({
    placeHolder,
    value,
    action,
    className,
}) => {
    return (
        <input
            onChange={(e) => {
                action(e.target.value);
            }}
            type="text"
            className={className}
            placeholder={placeHolder}
            value={value}
        />
    );
};
