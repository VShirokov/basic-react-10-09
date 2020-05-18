import React, { PureComponent } from 'react';

class Comment extends PureComponent {

    render() {
        const { user, text } = this.props;

        return (
            <div>
                <h3>{ user }</h3>
                <br />
                <p>{ text }</p>
            </div>
        );
    }
}

export default Comment;
