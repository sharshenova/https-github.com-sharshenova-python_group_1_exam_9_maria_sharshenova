import React, {Component, Fragment} from 'react'
import MenuItem from "./MenuItem/MenuItem";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";


class Menu extends Component {
    state = {
        collapse: true
    };

    // активируем кнопку открытия меню (для маленьких экранов)
    toggle = () => {
        this.setState({collapse: !this.state.collapse});
    };

    render() {
        const {username, is_admin, user_id} = this.props.auth;
        return <Fragment>
            <button onClick={this.toggle}
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className={(this.state.collapse ? "collapse" : "") + " navbar-collapse"}
                 id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <MenuItem to="/">Главная</MenuItem>
                    {/*{is_admin ? <MenuItem to="/movies/add">Добавить фильм</MenuItem> : null}*/}
                </ul>

                <ul className="navbar-nav ml-auto">
                    {user_id ? [
                        <li className="nav-item" key="username"><span className="navbar-text">
                            <NavLink className='navlink mr-2' to={"/users/" + user_id}>{username}</NavLink>
                        </span></li>,
                        <MenuItem to="/logout" key="logout">Выйти</MenuItem>
                    ] : [
                        <MenuItem to="/login" key="login">Войти</MenuItem>,
                        <MenuItem to="/register" key="register">Зарегистрироваться</MenuItem>
                    ]}
                </ul>
            </div>
        </Fragment>
    }
}


const mapStateToProps = state => ({auth: state.auth});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);