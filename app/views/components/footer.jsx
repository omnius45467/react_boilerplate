import React from 'react'

export default class Footer extends React.Component {

    static defaultProps = {
        text: 'Footer Text',

    };

    render() {

        const {text} = this.props

        return (
            <div className="footer">
                <h4>
                    {text}
                </h4>
            </div>
        )
    }
}