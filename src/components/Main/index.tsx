import React from 'react'

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './styles';

export default function Main() {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong>Alexandro do Nascimento Rossi</strong>
                <span>666 Tweets</span>
            </ProfileInfo>
        </Header>

        {/* <ProfilePage /> */}

        <BottomMenu>
            <HomeIcon className="active" />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu>
    </Container>
  )
}
