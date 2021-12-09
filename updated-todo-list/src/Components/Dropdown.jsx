import React from "react"
import { Component } from "react"
class Dropdown extends Component{
    
            constructor(props){
                super(props)
                this.state = {
                  isListOpen: false,
                  headerTitle: this.props.title
                }
        }
        toggleList = () => {
            this.setState(prevState => ({
              isListOpen: !prevState.isListOpen
           }))
         }
    
    render(){
        const { isListOpen, headerTitle } = this.state;
        const { list } = this.props;
      
        return(
            <div className="dd-wrapper">
      <button
        type="button"
        className="dd-header"
        onClick={this.toggleList}
      >
        <div className="dd-header-title">SELECT THE LIST</div>
       
      </button>
      {isListOpen && (
        <div
          role="list"
          className="dd-list"
        >
          {this.props.list.map((item) => (
            <button
              type="button"
              className="dd-list-item"
              key={item.id}
              onClick={() => this.selectItem(item)}
            >
              {item.text}
              
              </button>
          ))}
        </div>
      )}
    </div>
  
        )
    }
}
export default Dropdown