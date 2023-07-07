
import TextField from "@mui/material/TextField";

interface InputProps {
    label: string;
}

export const StyledInput: React.FC<InputProps> = ({ label }) => {
    return (
        <TextField
            label={label}
            variant="outlined"
        />
    );
};
