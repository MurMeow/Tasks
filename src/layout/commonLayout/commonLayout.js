import React from 'react';
import './style.scss';
import Routers from '../../routers';


class CommonLayout extends React.Component {



  render() {
    return (
      <main className="main__container flex">
          <Routers />
      </main>
    );
  }

}





export default CommonLayout;
