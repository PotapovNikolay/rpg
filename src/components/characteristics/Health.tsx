
interface HealthProps{
    value:number
}

export const Health: React.FC<HealthProps> = ({ value }) => {
    return (
        <div className="health">
            <div>Здоровье</div>
            <div className="health__point">{value}</div>
        </div>
    );
};