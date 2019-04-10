import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Layout, Menu, PageHeader } from 'antd'
import styles from './styles.scss'

import PopUpModal from './PopUpModal'
import Board from './Board'

class PointingPoker extends Component {
  render () {
    const {
      Header,
      Content,
      Footer
    } = Layout

    return (
      <div >
        <Layout className='layout'>
          <Header>
            <div className='logo'>
              <p className=''>COOL RETRO</p>
            </div>
            <Menu
              theme='dark'
              mode='horizontal'
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key='1'>Button</Menu.Item>
              <Menu.Item key='2' type='primary' onClick={this.showModal}>Change Board</Menu.Item>
            </Menu>
          </Header>

          <PopUpModal />

          <PageHeader
            title='bla'
            subTitle='This is a subtitle'
          />
          <Content>
            <Board />
          </Content>
          <Footer className='footer'>
            Cool Retro ©2018 Created by Bryan
          </Footer>
        </Layout>
      </div>
    )
  }
}

ReactDom.render(<PointingPoker />, document.getElementById('app'))
