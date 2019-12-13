import React from 'react';
import { Container, Icon, Image, Menu } from 'semantic-ui-react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = (props) => {

    const user = true;
    const router = useRouter();

    const isTabActive = (route) => {
        return route === router.pathname;
    };

    return (
        <Menu
            id={'menu'}
            fluid
            inverted
            stackable
        >
            <Container text={true}>

                <Link href={'/'}>
                    <Menu.Item header active={isTabActive('/')}>
                        <Image
                            src={'/static/logo.svg'}
                            size={'mini'}
                            style={{ marginRight: '1em' }}
                        />
                        MERN | SHOP
                    </Menu.Item>
                </Link>

                <Link href={'/cart'}>
                    <Menu.Item header active={isTabActive('/cart')}>
                        <Icon
                            name={'cart'}
                            size={'large'}
                        />
                        Cart
                    </Menu.Item>
                </Link>

                {user && (
                    <Link href={'/create'}>
                        <Menu.Item header active={isTabActive('/create')}>
                            <Icon
                                name={'add square'}
                                size={'large'}/>
                            Create
                        </Menu.Item>
                    </Link>
                )}

                {user ? (
                    <>
                        <Link href={'/account'}>
                            <Menu.Item header active={isTabActive('/account')}>
                                <Icon
                                    name={'user'}
                                    size={'large'}
                                />
                                Account
                            </Menu.Item>
                        </Link>

                        <Menu.Item header>
                            <Icon
                                name={'sign out'}
                                size={'large'}
                            />
                            Logout
                        </Menu.Item>
                    </>
                ) : (
                    <>
                        <Link href={'/login'}>
                            <Menu.Item header active={isTabActive('/login')}>
                                <Icon
                                    name={'sign in'}
                                    size={'large'}
                                />
                                Login
                            </Menu.Item>
                        </Link>

                        <Link href={'/signup'}>
                            <Menu.Item header active={isTabActive('/signup')}>
                                <Icon
                                    name={'signup'}
                                    size={'large'}
                                />
                                Signup
                            </Menu.Item>
                        </Link>
                    </>
                )}

            </Container>
        </Menu>
    );
};

export default Header;
