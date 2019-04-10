import React, { Component } from 'react'
import { Input, Icon, Col, Row, Button } from 'antd'
import styles from './style.scss'

class Board extends Component {
  constructor (props) {
    super()
    this.state = {
      displayBtn: true
    }
  }

  addInput = () => {
    this.setState({
        displayBtn: false
    })
  }

  render () {
    const { TextArea } = Input
    const displayClass = 'ant-btn-dashed'
    const contentBtn = this.state.displayBtn ? displayClass : `${displayClass}--hide`

    return (
      <div className='container'>
        <div className='content'>
          <Row gutter={40}>
            <Col span={8}>
              <h1 contentEditable='true'>Column 1</h1>
              <div className='cards'>
                <Button type='dashed' class={contentBtn} onClick={this.addInput}>+</Button>
                { !this.state.displayBtn && 
                    <TextArea className='card' placeholder='Write your retro...' autosize={{ minRows: 2, maxRows: 15 }} />
                }

              </div>
            </Col>
            <Col span={8}>
              <h1 contentEditable='true'>Column 2</h1>
              <div className='cards'>
              <Button type='dashed' class={contentBtn} onClick={this.addInput}>+</Button>
                { !this.state.displayBtn && 
                    <TextArea className='card' placeholder='Write your retro...' autosize={{ minRows: 2, maxRows: 15 }} />
                }
              </div>
            </Col>
            <Col span={8}>
              <h1 contentEditable='true'>Column 3</h1>
              <div className='cards'>
              <Button type='dashed' class={contentBtn} onClick={this.addInput}>+</Button>
                { !this.state.displayBtn && 
                    <TextArea className='card' placeholder='Write your retro...' autosize={{ minRows: 2, maxRows: 15 }} />
                }
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Board
