import React from 'react'

export default OriginalComponent =>
    class CommentsToggle extends React.Component {
        state = {
            isOpen: null
        }

        toggleOpen = item => this.setState(prevState => {
            return { isOpen: !prevState.isOpen };
        })

        render() {
            return (
                <OriginalComponent
                    { ...this.props }
                    { ...this.state }
                    toggleOpen={ this.toggleOpen }
                />
            )
        }
    }
