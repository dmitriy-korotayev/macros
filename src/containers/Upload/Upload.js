import React, { Component } from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import * as fileActions from 'redux/modules/file'
import Dropzone from 'react-dropzone'

@connect(
  state => ({file: state.file}),
  fileActions)
export default class Upload extends Component {

  onDrop(files) {
    console.log(files)
    //console.log(getState())
    //this.props.
  }

  render() {
    const styles = require('./Upload.scss')
    // require the logo image both from client and server
    return (
      <div>
        <Helmet title="Upload"/>
        <div ref="step1">
          <Dropzone multiple={false} onDrop={this.onDrop}
            className={styles.dropzone}
            activeClassName={styles.dropzoneActive}
          >
            <div>Upload</div>
          </Dropzone>
        </div>
        <div ref="step2">
          <h1>Step 2</h1>
        </div>
      </div>
    )
  }
}
