
interface HealthProps{
    health:number,
    currentHealth:number,
}

export const Health: React.FC<HealthProps> = ({ health, currentHealth }) => {
    return (
        <div className="health">
            <div>Здоровье</div>
            <div className="health__point">
                {currentHealth} / {health}
            </div>
        </div>
    );
};