import React from 'react'

export default class Content extends React.Component {

    static defaultProps = {
        img_link: 'http://placehold.it/350x150',
        alt: 'placeholder',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem commodi cum deleniti eligendi eos error ex hic ipsum laudantium nam neque nihil, nostrum quas recusandae? Eveniet in recusandae vero.'
    };

    render() {

        const {img_link, alt, message} = this.props

        return (
            <div className="row">
                <div className="col-md-4">
                    <img src={img_link} alt={alt}/>
                </div>
                <div className="col-md-8">
                    <p>{message}</p>
                </div>
            </div>
        )
    }

}