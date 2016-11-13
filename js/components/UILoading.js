import React from 'react';

export default class UILoading extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  componentDidMount() {
  	const { loading } = this.refs;

  	setTimeout(() => loading.remove() , 3000);
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div ref="loading" className="loading">
      	<h4 className="loading__message">讀取 / 儲存資料中...請稍候</h4>
      </div>
    );
  }
}
