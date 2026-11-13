function formatDuration(minutes){
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    if(hours === 0) return `${remainingMinutes}min`
    if(remainingMinutes === 0) return `${hours}hrs`
    return `${hours}hrs ${remainingMinutes}min`
}

function BudgetCard({ budget, planned }) {
    const free = Math.max(0, budget - planned) 
    const bufferleft = 60 -Math.min(60, Math.max(0,planned-budget))
    const percent = Math.round((planned / budget) * 100);
    return(
        <div className ="budget-card">
            <p className="budget-label"> Today's Budget</p>
            <p className="budget-total">{formatDuration(budget)}</p>
            <div className="budget-row">
                <span>Planned</span>
                <span>{formatDuration(planned)}</span>
            </div>
            <div className="budget-row">
                <span>Free</span>
                <span>{formatDuration(free)}</span>
            </div>
            <div className ="progress-track">
                <div className ="progress-fill" style={{ width:`${percent}%`}}></div>
            </div>
            <p className="budget-percent">{percent}% planned</p>
        </div>
    )
}

export default BudgetCard;

