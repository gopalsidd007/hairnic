import React from 'react'
import './NewPage.css'

const NewPage = () => {
  return (
    <div>
        <h1>NewPage</h1>

        <div className="flex-container">
            <div className="flex_item">Header</div>
            <div className="main">
            <div className="flex_item sidebar">SideBar</div>
            <div className="content">
            <div className="flex_item">Content 1</div>
            <div className="sub_content">
            <div className="flex_item">Content 2</div>
            <div className="flex_item">Content 3</div>
            </div>
           
            </div>

            </div>
           
         
            <div className="flex_item">Footer</div>

        </div>

        <h2>Form</h2>
        
    </div>
  )
}

export default NewPage