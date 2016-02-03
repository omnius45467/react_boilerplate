import React from 'react'

export default class Nav extends React.Component {

    static defaultProps = {
        text: 'Company Name',

    };

    render() {

        const {text} = this.props
        return (
            <div className="navbar navbar-default">
                <h2>
                    {text}
                </h2>
            </div>
        )
    }
}