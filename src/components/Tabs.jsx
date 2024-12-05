

export function Tabs (props) {


    const { toDos, selectedTab, setSelectedTab } = props

    const tabs = ['All', 'Open', 'Completed']
    
    return (
        <nav className="tab container">
            {
                tabs.map((tab, tabIndex) => {
                    
                    const numOfTasks = tab === 'All' ?
                        toDos.length :
                            tab === 'Open' ?
                                toDos.filter(val => !val.complete).length :
                                    toDos.filter(val => val.complete).length
                    
                    return (
                        <button onClick={() => {
                            setSelectedTab(tab)
                                }} 
                                key={tabIndex}
                                className={"tab-button " + (tab == selectedTab ? ' tab-selected' : ' ')}>
                                    
                                    <h4>{tab} <span>({numOfTasks})</span></h4>
                                
                                </button>
                            )
                        })}

        <hr/>
        </nav>
    )

}