import React, { Component } from 'react'

import UserBoxFooter from '../userBox/userBoxFooter'
import UserAvatar from '../../../assets/user_avatar.png'

class UserBox extends Component {

    render() {
        return (
            <div className='box box-widget widget-user'>
                <div className={`widget-user-header ${this.props.bgColor}`}>
                    <h3 className='widget-user-username'>{this.props.userName}</h3>
                </div>
                <div className='widget-user-image'>
                    <img className="img-circle"
                        src={UserAvatar}
                        alt="User Avatar" />
                </div>
                <UserBoxFooter
                    userSales={this.props.userSales}
                    userTotalCashback={this.props.userTotalCashback}
                    userTotalProducts={this.props.userTotalProducts} />
            </div>
        )
    }
}

export default UserBox
