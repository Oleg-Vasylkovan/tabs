import React, {useState} from 'react';

const TabDisplay=(props)=>{
    const [tabs,setTabs] = useState([
        {
            message:"Content for Tab 1",
            isSelected: true
        },
        {
            message:'Content for Tab 2',
            isSelected:false
        },
        {
            message:'Content for Tab 3',
            isSelected:false
        }
    ]);


    const onclickTab = (idx) => {
        tabs.forEach((tab,i)=>{
            if(idx === i){
                tab.isSelected = true;
            }
            else{
                tab.isSelected = false;
            }
        setTabs([...tabs.slice(0,i),tab,...tabs.slice(i+1)])    

        })
    }

    return(
        <div><br/><br/>
            {
                tabs.map((tab,i)=>{
                return <button style={tab.isSelected ? {backgroundColor:"green"}:null} onClick={() => onclickTab(i)}>Tab {i+1}</button>
                })
            }
            {
                tabs.map((tab,i)=>{return tab.isSelected ? <h1>{tab.message}</h1> : null})
            }
        </div>
    )

}

export default TabDisplay;