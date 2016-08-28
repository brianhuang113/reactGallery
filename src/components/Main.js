require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

// 获取图片相关的数据
let imageDatas = require('../data/imageDatas.json');

// 利用自制行函数,将图片名信息转成图片url路径信息
imageDatas = (function genImageUrl(imageDatasArray) {
  for(var i=0; i<imageDatasArray.length; i++){
    var singleImageData = imageDatasArray[i];

    singleImageData.imageUrl = require('../images/'+singleImageData.fileName);

    imageDatasArray[i] = singleImageData;
  }
  return imageDatasArray;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
