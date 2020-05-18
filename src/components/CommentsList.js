import React, { PureComponent, Fragment } from 'react';
import commentsToggle from '../decorators/commentsToggle';
import Comment from './Comment';
import UsersComments from './userComments';

class CommentsList extends PureComponent {
    renderUsersComments = () => {
        const { usersComments } = this.props;

        return usersComments.map((item, index) => {
            const { id } = item;

            return (
                <Comment key={ index + id } { ...item } />
            )
        })
    }


    render() {
        const { usersComments, toggleOpen, isOpen } = this.props;
        const buttonText = isOpen ? 'Закрыть комментарии' : 'Открыть комментарии';

        return (
            <Fragment>
                <button onClick={ toggleOpen }>{ buttonText }</button>
                <br />
                { isOpen &&
                    <div>
                        <h3>comments:</h3>
                        { !!usersComments.length && this.renderUsersComments() }
                        <UsersComments />
                    </div>
                }
            </Fragment>
        );
    }
}

export default commentsToggle(CommentsList);
