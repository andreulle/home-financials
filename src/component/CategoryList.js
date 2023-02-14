import React from "react";
import PropTypes from "prop-types";
import "./CategorizedList.css";

export default class CategorizedList extends React.Component {

    render() {
        return (
            <table className="categorized-list-result-table">
                <tbody>
                {this.props.categorizedList.map(categoryItem =>(
                    
                    categoryItem.style == "categoryItem" ? 
                    <tr key={categoryItem.key} className={categoryItem.style}>
                            <td>{categoryItem.description}</td>
                            <td>{categoryItem.preciseAmount}</td>
                        </tr>
                        : <tr key={categoryItem.key} className={categoryItem.style}>
                            <td colSpan={2}>{categoryItem.description}</td> 
                        </tr>
                   
                ))} 
                </tbody>
            </table>
        )
    }
}