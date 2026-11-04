function Sidebar() {
  return (
    <aside className = "sidebar">
        <div className="Logo">Time Budget
        </div>
        <nav>
            
            <a className="nav-item active" href="#">Today</a>
            <a className="nav-item" href="#">Plan</a>
            <a className="nav-item" href="#">Focus</a>
            <a className="nav-item" href="#">History</a>
            <a className="nav-item" href="#">Settings</a>

        </nav>
    </aside>
  )
}
export default Sidebar;