import React, { Component } from 'react'

import UserBoxFooter from '../userBox/userBoxFooter'

class UserBox extends Component {

    defineUserPhoto(userPhotoURL) {

        const basePhoto = 'https://pixabay.com/pt/vectors/usu%C3%A1rio-%C3%ADcone-pessoa-pessoal-2935527/'

        if (userPhotoURL !== undefined)
            return userPhotoURL
        else
            return basePhoto
    }

    render() {
        const userPhoto = this.defineUserPhoto(this.props.userPhotoURL)
        return (
            <div className='box box-widget widget-user'>
                <div className={`widget-user-header ${this.props.bgColor}`}>
                    <h3 className='widget-user-username'>{this.props.userName}</h3>
                </div>
                <div className='widget-user-image'>
                    <img className="img-circle"
                        src={userPhoto}
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
