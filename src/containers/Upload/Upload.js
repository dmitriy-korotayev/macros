import React, { Component, PropTypes as PT } from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import * as fileActions from 'redux/modules/file'
import Dropzone from 'react-dropzone'

@connect(
  state => ({file: state.file}),
  fileActions)
export default class Upload extends Component {

  static propTypes = {
    file: PT.object,
    getInfo: PT.func
  }

  onDrop(files) {
    this.props.getInfo(files[0])
  }

  render() {
    const {file} = this.props
    const styles = require('./Upload.scss')
    // require the logo image both from client and server
    return (
      <div>
        <Helmet title="Upload"/>
        {!file.gotInfo &&
        <div ref="step1">
          <Dropzone multiple={false} onDrop={this.onDrop.bind(this)}
            className={styles.dropzone}
            activeClassName={styles.dropzoneActive}
          >
            <div>Upload</div>
          </Dropzone>
        </div>
        }
        {file.gotInfo &&
        <div ref="step2">
          <h1>Step 2</h1>
        </div>
        }
      </div>
    )
  }
}
