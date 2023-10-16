import { useState } from "react"
import Example from "./Pages/Example"
import Example2 from "./Pages/Example2"
import Example3 from "./Pages/Example3"
import "./App.css"
function App() {

  const [activeTab,setActiveTab]=useState<number>(1)

  return (
    <>
     <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a onClick={()=>setActiveTab(1)} className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Example 1</a>
          <a onClick={()=>setActiveTab(2)} className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Example 2</a>
          <a onClick={()=>setActiveTab(3)} className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Example 3</a>
        </div>
    </nav>
    <div className="tab-content  " id="myTabContent">
        {activeTab ==1 && <div className={`tab-pane ${activeTab !==1 ? "fade" : "show active"}`} id="home" role="tabpanel" aria-labelledby="home-tab">
        <Example/>
        </div>}
       {activeTab == 2 && <div className={`tab-pane ${activeTab !== 2 ? "fade" : "show active"}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <Example2/>
        </div>}
        {activeTab == 3 && <div className={`tab-pane ${activeTab !== 3 ? "fade" : "show active"}`} id="contact" role="tabpanel" aria-labelledby="contact-tab">
        <Example3/>
        </div>}
    </div>
    </>
  )
}

export default App
